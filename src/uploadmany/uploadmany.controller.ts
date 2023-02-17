import { Body, Controller, Get, Post, Render, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from "@nestjs/platform-express"
import { createWriteStream } from "fs"
import { join } from 'path';


@Controller('uploadmany')
export class UploadmanyController {

    //传输文件所需装饰器 UseInterceptors  UploadedFile  
    //拦截器：FileInterceptor 这个拦截器是express中的所以需要在platform-express 中引用  多个文件中有FilesFieldsInterceptor
    @Get()
    @Render("default/uploadmany.ejs")
    uploadIndex(){

    }
    //参考文档： https://docs.nestjs.com/techniques/file-upload
    @Post("doAdd")   //对上传文件做处理，
    @UseInterceptors(FilesInterceptor("pic"))  //如果前端多个图片名称一致则可以这样写，如果不一样FilesInterceptor([{name:"name1",maxCount:1},{name:"name2",maxCount:1}])
    doAdd(@Body() body,@UploadedFiles() files){  //必须××  文件接受应该在前端form表单中写enctype="multipart/form-data"
         console.log(body);
         console.log(files); // file有多个文件
        // console.log("dirname===",__dirname);
        for(const file of files){
            var writeStream = createWriteStream(join(__dirname,"../../public/upload/",`${Date.now()}-${file.originalname}`));
            writeStream.write(file.buffer);
        }
        return "上传成功"; 
    }

}



