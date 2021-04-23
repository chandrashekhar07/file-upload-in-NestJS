import { Controller, Get, Post, Redirect, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FilehandlerService } from './filehandler.service';
import { diskStorage } from 'multer';
import { Url } from 'node:url';
import { url } from 'node:inspector';



@Controller('filehandler')
export class FilehandlerController {
    constructor(private readonly fileService: FilehandlerService) { }



    @Get()
    getpath() {
        var originalpath = String(__dirname);
        var arrayOriginalPath = originalpath.split("\\")
        arrayOriginalPath.pop()
        arrayOriginalPath.pop()
        arrayOriginalPath.push("src")
        arrayOriginalPath.push("Public")
        arrayOriginalPath.push("filehandler.html")
        originalpath = arrayOriginalPath.join("\\")
        console.log(originalpath);
        return "url of html file to upload files is:  " +originalpath 
    }

    @Post()
    @UseInterceptors(FileInterceptor("file1", {
        storage: diskStorage({
            destination: (req, file, cb) => { cb(null, './images/') },
            filename: (req, file, cb) => {
                let customFile = Date.now() + "-" + file.originalname.split(".")[0] + "." + file.originalname.split(".").slice(-1);

                cb(null, customFile);
            }
        })
    }))
    uploadFile(@UploadedFile() files) {
        console.log(files);
        if (files)
            return { sucess: "truee" }
        else
            return { sucess: "false" }
    }




}
