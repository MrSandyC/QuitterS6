import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Queet } from './entities/queet.entity';
import { QueetController } from './queet.controller';
import { QueetService } from './queet.service';

describe('QueetController', () => {
  let controller: QueetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueetController],
      providers: [
        QueetService,
        {
          provide: getRepositoryToken(Queet),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QueetController>(QueetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
