import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UserPipe } from '../../pipe/user/user.pipe';
import * as joi from '@hapi/joi';
//自定义schema

let schema = joi.object().keys({
    name:joi.string().required(),
    age:joi.number().integer().min(6).max(66).required(),
});

@Controller('user')
export class UserController {

    @Get()
    @UsePipes(new UserPipe(schema))
    index(@Query() query){
        //
        console.log("pipe传递回来的值",query);
        
        return "user界面";
    }

}
