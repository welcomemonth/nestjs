import { Body, Controller, Get, Post, Render, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express"
import { createWriteStream } from "fs"
import { join } from 'path';


@Controller('upload')
export class UploadController {

    //传输文件所需装饰器 UseInterceptors  UploadedFile  
    //拦截器：FileInterceptor 这个拦截器是express中的所以需要在platform-express 中引用  多个文件中有FilesFieldsInterceptor
    @Get()
    @Render("default/upload.ejs")
    uploadIndex(){

    }

    @Post("doAdd")   //对上传文件做处理，
    @UseInterceptors(FileInterceptor("pic")) //pic为文件的name和前端代码保持一直
    doAdd(@Body() body,@UploadedFile() file){  //必须××  文件接受应该在前端form表单中写enctype="multipart/form-data"
        console.log(body);
        console.log(file); // file有多个文件
        console.log("dirname===",__dirname);
        
        var writeStream = createWriteStream(join(__dirname,"../../public/upload/",`${Date.now()}-${file.originalname}`));
        writeStream.write(file.buffer);

        return "上传成功"; 
    }
}
