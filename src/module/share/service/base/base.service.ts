import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {

    getData(){
        return "我是公共模块的服务";
    }
}
