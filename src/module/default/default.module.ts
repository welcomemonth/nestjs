import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import {AppService} from '../../app.service';
import { ShareModule } from '../share/share.module';
@Module({
  imports:[ShareModule],
  controllers: [UserController, NewsController],
  providers:[AppService]  //先将这个模块声明提供
})
export class DefaultModule {}
