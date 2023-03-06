import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification.module';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3005
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NotificationModule, microserviceOptions);
  app.listen();
}
bootstrap();
