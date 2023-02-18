import { Controller, Get } from '@nestjs/common';

@Controller('admin/user')  //作区分 表示这是admin下的user
export class UserController {
    @Get()
    index(){
        return "我是admin下的user界面";
    }
}
