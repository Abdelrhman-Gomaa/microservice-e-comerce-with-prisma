import { CartModule } from './cart.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3004
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CartModule, microserviceOptions);
  app.listen();
}
bootstrap();
