import { User } from 'apps/auth/src/user/model/user.model';
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Inject } from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { IContextAuthService } from './context-auth.interface';
import { TokenPayload } from 'apps/auth/src/auth-token-payload.type';
import { isISO31661Alpha2 } from 'class-validator';
import { LangEnum } from 'apps/auth/src/user/user.enum';
import { PrismaServiceAuth } from 'apps/auth/src/prisma/prisma.service.auth';


@Injectable()
export class ContextAuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaServiceAuth
  ) { }

  getAuthToken(req: Request): string {
    if (req && req.headers && (req.headers.authorization || req.headers.Authorization)) {
      let auth: string;
      if (req.headers.authorization) auth = req.headers.authorization;
      if (req.headers.Authorization) auth = <string>req.headers.Authorization;
      return auth.split(' ')[1];
    }
    return null;
  }

  getTimezone(timezoneAsString = '+03:00') {
    if (timezoneAsString.search(/\-|\+/) < 0) timezoneAsString = '+03:00';
    const mathOperation = timezoneAsString.slice(0, 1);
    const value: string = timezoneAsString.replace(mathOperation, '');
    const hours = isNaN(Number(value.split(':')[0])) ? 3 : Number(value.split(':')[0]);
    const minutes = isNaN(Number(value.split(':')[1])) ? 0 : Number(value.split(':')[1]);
    return { minusSign: mathOperation === '-', hours, minutes };
  }

  async getUserFromReqHeaders(req: Request) {
    let token = this.getAuthToken(req);
    if (!token) return null;
    let { userId } = <TokenPayload>jwt.verify(token, this.config.get('JWT_SECRET'));
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    return user;
  }

  getLocale(req: Request): { lang: LangEnum; country: string; } {
    if (!req) return { lang: LangEnum.EN, country: 'EG' };
    let locale = <string>req.headers.lang || 'eg-en';
    let country = locale.split('-')[0].toUpperCase();
    if (!country || !isISO31661Alpha2(country)) country = 'EG';
    let lang = locale.split('-')[1] === 'ar' ? LangEnum.AR : LangEnum.EN;
    return { lang, country };
  }

}
