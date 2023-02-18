import { Controller, Get } from '@nestjs/common';

import { NewsService } from '../service/news/news.service';
//引入公共服务
import { AppService } from '../../../app.service';
//在admin中创建一个news服务，在news控制器中引用服务
//引入公共共享服务
import { BaseService } from '../../share/service/base/base.service';
@Controller('admin/news')
export class NewsController {   
    constructor(private newsService:NewsService,private appService:AppService,private baseService:BaseService){}
    @Get()
    index(){
        //使用news的服务
        console.log(this.newsService.GetNews());
        //使用公共服务  //这样是报错的，必须在admin.module中引入这个公共模块
        console.log(this.appService.getConfig());
        //共享服务模块的使用
        console.log(this.baseService.getData());
        
        return "我是admin下的news页面";
    }
}
