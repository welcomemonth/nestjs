import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

@Module({
  controllers: [UserController, NewsController]
})
export class DefaultModule {}
