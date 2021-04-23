import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect(`http://127.0.0.1:8000/filehandler`,301)
  getHello(): string {
   return "redirected"
    // return this.appService.getHello();
  }
}
