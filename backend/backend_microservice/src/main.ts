/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const microServiceOptions = {
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microServiceOptions);
  await app.listen()
  .then(() => {
    logger.log('Microservice is listening..............');
  });
}

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
bootstrap();
