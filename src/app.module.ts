import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';
import { ProductController } from './controller/product/product.controller';
@Module({
  imports: [],
  controllers: [AppController, NewsController, UserController, ProductController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
    //consumer
      //.apply(InitMiddleware)
      //.forRoutes("*"); //匹配所有路由
      //.forRoutes("news"); //匹配指定路由  //可以直接传入控制器  不建议使用
      //.forRoutes({path:"news",method:RequestMethod.GET},{path:"user",method:RequestMethod.GET}) //匹配多个路由;
  

      //配置多个中间件
    // consumer
    //   .apply(InitMiddleware)
    //   .forRoutes("*") //所有路由匹配公共中间件
    //   .apply(UserMiddleware)
    //   .forRoutes("user"); //再去匹配user中间件

    //可以在apply中一次配置多个路由，一次配置多个中间件
    // consumer  //函数式中间件  直接添加
    //   .apply(NewsMiddleware,UserMiddleware)//logger) //u*r 
    //   .forRoutes({path:"news",method:RequestMethod.GET},{path:"user",method:RequestMethod.GET}) //所有路由匹配公共中间件
      
      }
}



