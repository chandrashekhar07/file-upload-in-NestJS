import { Test, TestingModule } from '@nestjs/testing';
import { FilehandlerService } from './filehandler.service';

describe('FilehandlerService', () => {
  let service: FilehandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilehandlerService],
    }).compile();

    service = module.get<FilehandlerService>(FilehandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
