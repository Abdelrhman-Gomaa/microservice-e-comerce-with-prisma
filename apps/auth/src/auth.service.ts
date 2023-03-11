import * as bcrypt from 'bcryptjs';
import { generate } from 'voucher-code-generator';
import * as slug from 'speakingurl';
import * as jwt from 'jsonwebtoken';
import { Inject, Injectable } from '@nestjs/common';
import { UserCreateInput } from './user/input/user-create.input';
import { PrismaServiceAuth } from 'apps/auth/src/prisma/prisma.service.auth';
import { User } from 'apps/auth/src/prisma-generate/user/user.model';
import { CONTEXT } from '@nestjs/graphql';
import { GqlContext } from 'libs/_common/graphql/graphql-context.type';
import { EmailAndPasswordLoginInput } from './user/input/email-password-login.input';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaServiceAuth,
        @Inject(CONTEXT) private readonly context: GqlContext,
    ) { }

    async register(input: UserCreateInput) {

        const errorIfUserWithEmailExists = await this.prisma.user.findFirst({ where: { email: input.email } });
        if (errorIfUserWithEmailExists) throw new Error('Email is Already Exists');

        const errorIfUserWithVerifiedPhoneExists = await this.prisma.user.findFirst({ where: { verifiedPhone: input.notVerifiedPhone } });
        if (errorIfUserWithVerifiedPhoneExists) throw new Error('Phone is Already Exists');

        const deleteDuplicatedUsersAtNotVerifiedPhone = await this.prisma.user.findFirst({ where: { notVerifiedPhone: input.notVerifiedPhone } });
        if (deleteDuplicatedUsersAtNotVerifiedPhone) await this.prisma.user.delete({ where: { id: deleteDuplicatedUsersAtNotVerifiedPhone.id } });

        return await this.prisma.user.create(
            {
                data: {
                    ...input,
                    fullName: `${input.firstName} ${input.lastName || ''}`.trim(),
                    notVerifiedPhone: input.notVerifiedPhone,
                    password: await this.hashPassword(input.password),
                    slug: this.slugify(`${input.firstName} - ${input.lastName || ''}`),
                }
            }
        );
    }

    async emailAndPasswordLoginBoard(
        input: EmailAndPasswordLoginInput
    ) {
        const user = await this.prisma.user.findFirst({ where: { email: input.email } });
        if (!user) throw new Error('Email Dose Not Exists');
        // compare password
        await this.matchPassword(input.password, user.password);
        // return token
        return this.appendAuthTokenToUser(user);
    }

    async updateCartIdForUser(
        input: EmailAndPasswordLoginInput
    ) {
        const user = await this.prisma.user.findFirst({ where: { email: input.email } });
        if (!user) throw new Error('Email Dose Not Exists');
        // compare password
        return await this.prisma.user.updateMany({where: { email: user.email}, data: { cartId: input.cartId}})
    }

    async usersBoard() {
        try {
            return await this.prisma.user.findMany();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findOneUser() {
        try {
            const user = await this.prisma.user.findUnique({ where: { id: "2fe95ccc-156e-40a6-ab4b-7ddabfe64f1e" } });
            console.log('user >>>>>>>>>>>>>>>>>>', user);
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    private async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12);
    }

    private slugify(value: string): string {
        if (value.charAt(value.length - 1) === '-') value = value.slice(0, value.length - 1);
        return `${slug(value, { titleCase: true })}-${generate({
            charset: '123456789abcdefghgklmnorstuvwxyz',
            length: 4
        })[0]
            }`.toLowerCase();
    }

    private async matchPassword(password: string, hash: string) {
        const isMatched = await bcrypt.compare(password, hash);
        if (!isMatched) throw new Error(' Incorrect Password');
    }

    private generateAuthToken(user: User): string {
        return jwt.sign({ user }, process.env.JWT_SECRET);
    }

    private appendAuthTokenToUser(user: User) {
        
        return Object.assign(user, { token: this.generateAuthToken(user) });
    }

}