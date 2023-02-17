import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
//全局中间件中无法引入类中间件 main.ts中  只能引入函数中间件
import { InitMiddleware } from './middleware/init/init.middleware';
//全局只能引入这个函数式中间件，跟模块（qpp.moudle)上面两个都可以用
import {logger} from './middleware/logger.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //全局中间件
 // 错误使用app.use(InitMiddleware);
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
