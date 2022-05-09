import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Queet } from './entities/queet.entity';
import { QueetService } from './queet.service';

describe('QueetService', () => {
  let service: QueetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QueetService,
        {
          provide: getRepositoryToken(Queet),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<QueetService>(QueetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
