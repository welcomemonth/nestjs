import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { AppService } from '../../app.service';
import { NewsService } from './service/news/news.service';
import { ShareModule } from '../share/share.module';
@Module({
    imports:[ShareModule],
    controllers: [UserController, NewsController],
    providers: [NewsService,AppService] //引入公共模块还需要在这注入一下，相当于声明我提供这个服务
})
export class AdminModule {}
