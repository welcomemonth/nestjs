import { Controller, Get } from '@nestjs/common';

//import { AppService } from '../../../app.service';

@Controller('admin/user')  //作区分 表示这是admin下的user
export class UserController {
    //constructor(private appService:AppService){

//    }

    @Get()
    index(){
        //console.log(this.appService.getHello());
        
        return "我是admin下的user界面";
    }
}
