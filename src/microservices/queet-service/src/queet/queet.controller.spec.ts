import { Test, TestingModule } from '@nestjs/testing';
import { QueetController } from './queet.controller';
import { QueetService } from './queet.service';

describe('QueetController', () => {
  let controller: QueetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueetController],
      providers: [QueetService],
    }).compile();

    controller = module.get<QueetController>(QueetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
