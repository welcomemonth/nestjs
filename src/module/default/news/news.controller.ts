import { Controller ,Get} from '@nestjs/common';
import {AppService} from '../../../app.service';

//引入共享模块
import {BaseService} from '../../share/service/base/base.service';

@Controller('news')
export class NewsController {
    constructor(private appService:AppService,private baseService:BaseService){}

    @Get()
    index(){
        console.log(this.appService.getConfig());
        console.log(this.baseService.getData());
        
        return "我是news页面";
    }
}
