import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

import * as joi from '@hapi/joi'; 

@Injectable()
export class UserPipe implements PipeTransform {
    //构造实例化方法
    private schema;
    constructor(schema){
      this.schema = schema;
    }
  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = this.schema.validate(value); //检验前端传过来的值是否满足条件

    if(error){
      return {"success":false};
    }
    return value;
  }
}
