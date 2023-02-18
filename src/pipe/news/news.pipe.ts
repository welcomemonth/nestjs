import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("我是news管道"); //
    console.log("news管道",value);
    console.log("我回修改value的值");
    value.id = "wangsi";
    
    return value;
  }
}
