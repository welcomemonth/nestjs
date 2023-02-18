import { Controller ,Get} from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    index(){
        return "我是news页面";
    }
}
