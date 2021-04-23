import { Test, TestingModule } from '@nestjs/testing';
import { FilehandlerController } from './filehandler.controller';

describe('FilehandlerController', () => {
  let controller: FilehandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilehandlerController],
    }).compile();

    controller = module.get<FilehandlerController>(FilehandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
