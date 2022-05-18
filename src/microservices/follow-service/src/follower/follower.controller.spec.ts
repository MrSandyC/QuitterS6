import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/user/entities/user.entity';
import { FollowerController } from './follower.controller';
import { FollowerService } from './follower.service';

describe('FollowerController', () => {
  let controller: FollowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowerController],
      providers: [
        FollowerService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FollowerController>(FollowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
