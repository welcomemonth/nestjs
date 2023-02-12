import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Get()
    @Render("default/user.ejs")
    index(){

    }
 
    @Post("doAdd")
    doAdd(@Body() body,@Response() res){
        console.log(body);
        res.redirect("/user");
    }

}
