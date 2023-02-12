import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //访问这个页面配置session
  @Get()
  @Render("default/index.ejs")
  index(@Request() req):string {
    //设置session
    req.session.username="hahaha";
    return "";
  }
  @Get("user")
  userIndex(@Request() req){
    //获取session值
    console.log(req.session.username);
    /**
     * req.session.destory(function(err){
     *      session销毁函数
     * })
     * 
     * req.session.maxAge=0  设置cookie过期时间
     * 
     */
    return "用户中心";
  }
}
