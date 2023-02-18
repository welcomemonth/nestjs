import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { NewsPipe} from '../../pipe/news/news.pipe';


@Controller('news')
export class NewsController {
    @Get()
    @UsePipes(new NewsPipe())
    index(@Query() query){
        console.log("控制层表现的",query);        
        return "这是新闻界面";
    }
}
