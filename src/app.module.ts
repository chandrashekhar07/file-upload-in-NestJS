import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilehandlerModule } from './filehandler/filehandler.module';

@Module({
  imports: [FilehandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
