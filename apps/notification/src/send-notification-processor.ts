import { InjectQueue, OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Job, Queue } from 'bull';
import * as os from 'os';

@Processor('send-mail-code')
@Injectable()
export class SendMailCodeProcessor {
    constructor(
        private readonly configService: ConfigService,
        @InjectQueue('send-notification') private readonly mailQueue: Queue
    ) {
    }

    public async sendMail(opts: OptsType, mailDetails: MailDetails): Promise<void> {
        // run in production mode
        const isProd = this.configService.get('NODE_ENV'); //=== 'production';
        await this.mailQueue.add(
            'send-notification',
            { opts, mailDetails },
            { removeOnComplete: isProd, removeOnFail: isProd }
        );
        return;
    }

    @Process({
        name: 'send-notification',
        concurrency: os.cpus().length
    })
    async sendNotification(job: Job) {
        
        if (!input.from) {
            input.from = this.configService.get('MAIL_NAME');
        }
        if (!input.text) {
            input.text = this.configService.get('DEFAULT_SUBJECT');
        }
        await this.transporter.sendMail(job.data);
    }

    @OnQueueActive()
    onActive(job: Job) {
        console.log(
            `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
        );
    }
}
