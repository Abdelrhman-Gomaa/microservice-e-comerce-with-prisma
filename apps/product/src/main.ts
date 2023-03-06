import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ProductModule } from './product.module';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 3002
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductModule, microserviceOptions);
  app.listen();;
}
bootstrap();
