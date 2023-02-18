import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //全局中间件
 // 错误使用app.use(InitMiddleware);

  await app.listen(3000);
}
bootstrap();
