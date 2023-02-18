import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
@Module({
  imports: [AdminModule, ApiModule, DefaultModule], //引入模块
  controllers: [AppController],
  providers: [AppService],
  //exports:[] //用来暴露当前模块的子元素
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



