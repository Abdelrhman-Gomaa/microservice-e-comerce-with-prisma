import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { PaymentModule } from './payment.module';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3003
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PaymentModule, microserviceOptions);
  app.listen();
}
bootstrap();
