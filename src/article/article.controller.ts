import { Controller, Get } from '@nestjs/common';
import { NewsService } from 'src/news/news.service';
@Controller('article')
export class ArticleController {
    constructor(private newsService:NewsService){}

    @Get()
    index(){
        return this.newsService.findAll(); 
    }
}
