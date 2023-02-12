import { Body, Controller, Get, Post, Render, Response,Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Get()
    @Render("default/user.ejs")
    index(){
        return {"name":"张三"}
    }
 
    @Post("doAdd")
    doAdd(@Body() body,@Response() res){
        console.log(body);
        res.redirect("/user");
    }
    @Get("cookie")
    getCookie(@Request() req){
        // 未加密的获取方式console.log(req.cookies.username);
        //加密获取方式
        console.log(req.signedCookies.username);
        
        return "获取成功，请查看控制台";
    }
}
