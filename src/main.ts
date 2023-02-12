import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //app.useStaticAssets('public'); //配置静态资源目录

  //虚拟目录配置静态资源
  // app.useStaticAssets("public",{
  //   prefix:'/static/'
  // });
  //绝对路径配置资源目录
  app.useStaticAssets(join(__dirname,"..","public"),{
    prefix:"/static/", // 设置虚拟目录
  })
  
  app.setBaseViewsDir("views"); //设置模板引擎目录  必须先安装ejs 
  app.setViewEngine("ejs");

  //配置cookie中间件 //cookie加密 1、在cookieParser中传参数 2、设置 signed属性：true 3、获取req.signedCookies
  app.use(cookieParser("this is signed cookie"));
  //app.use(cookieParser());

  //配置session中间件    //secret加密密钥        //cookie:和cookie模块相似session存储时间  
  app.use(session({ secret:"keyboard cat", name:"session", cookie:{ maxAge:6000 },rolling:true }));
  //rolliing参数  每次请求时强行设置cookie,这将重置cookie过期时间（默认false）
  //secret 一个String类型的字符串，作为服务器端生成session的签名
  //name:返回客户端的key的名称，默认为connect.sid  也可以自己设置
  //resave  强制保存session 即使他没有变化  默认为true
  await app.listen(3000);
}
bootstrap();
