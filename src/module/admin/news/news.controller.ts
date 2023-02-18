import { Controller, Get } from '@nestjs/common';

@Controller('admin/news')
export class NewsController {
    @Get()
    index(){
        return "我是admin下的news页面";
    }
}
