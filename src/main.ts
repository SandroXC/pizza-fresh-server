import { NestFactory } from '@nestjs/core';
import { TableModule } from './table/table.module';

async function bootstrap() {
  const app = await NestFactory.create(TableModule);
  await app.listen(3333);
}
bootstrap();
