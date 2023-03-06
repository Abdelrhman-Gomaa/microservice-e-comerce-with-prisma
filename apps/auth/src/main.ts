import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3001
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, microserviceOptions);
  app.listen();
}
bootstrap();
