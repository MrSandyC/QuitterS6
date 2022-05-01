import { Test, TestingModule } from '@nestjs/testing';
import { QueetService } from './queet.service';

describe('QueetService', () => {
  let service: QueetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueetService],
    }).compile();

    service = module.get<QueetService>(QueetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
