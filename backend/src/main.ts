import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })
  );
  app.enableCors({ origin: true, credentials: true });

  const configService = app.get(ConfigService);
  const port = Number(configService.get('app.port')) || 8080;
  await app.listen(port);
  // eslint-disable-next-line no-console
  Logger.log(`🚀 Application is running on: ${port}`);
}

bootstrap();