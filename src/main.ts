import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  var port_number = server.listen(process.env.PORT || 3000);
  await app.listen(port_number);
}
bootstrap();
