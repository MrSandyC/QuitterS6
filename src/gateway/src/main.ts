import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://salmon-dune-0e7191003.1.azurestaticapps.net/home',
    ],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
