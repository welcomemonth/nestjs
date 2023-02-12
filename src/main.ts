import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from "path"
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

  await app.listen(3000);
}
bootstrap();
