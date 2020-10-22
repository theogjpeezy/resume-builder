import { NestFactory } from '@nestjs/core';
import { ResumeAppModule } from './controllers/resumeApp.module';

async function bootstrap() {
  const app = await NestFactory.create(ResumeAppModule);
  await app.listen(3000);
}
bootstrap();
