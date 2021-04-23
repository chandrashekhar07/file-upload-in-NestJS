import { Module } from '@nestjs/common';
import { FilehandlerController } from './filehandler.controller';
import { FilehandlerService } from './filehandler.service';

@Module({
  controllers: [FilehandlerController],
  providers: [FilehandlerService]
})
export class FilehandlerModule {}
