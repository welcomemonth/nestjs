import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {


    GetNews(){
        return [
            {"title":"11111"},
            {"title":"22222"}
        ];
    }

}
