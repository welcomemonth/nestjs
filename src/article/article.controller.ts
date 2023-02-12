import { Controller, Get, Render, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {

    @Get()
    @Render("default/article.ejs")
    index(@Response() res){                   //一分钟×10 过期      是不是只有后端可以访问，前端js中无法访问cookie
        res.cookie("username","张三",{maxAge:4000,httpOnly:true,signed:true});
        //设置cookie  //设置res就不能return
        //res.send("这是文章页面");
        //如果想给页面传值 return {"name":"aaaa"}; 
    }
}
