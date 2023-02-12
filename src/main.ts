import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from "path"
import * as cookieParser from "cookie-parser"

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
  await app.listen(3000);
}
bootstrap();
