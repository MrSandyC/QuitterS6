/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { FollowerController } from './follower.controller';
import { FollowerService } from './follower.service';

describe('FollowerController', () => {
  let controller: FollowerController;
  let service: FollowerService;

  beforeEach(async () => {
    const followerServiceProvider = {
      provide: FollowerService,
      useFactory: () => ({
        create: jest.fn(() => []),
        unfollow: jest.fn(() => []),
        findAll: jest.fn(() => []),
        findOne: jest.fn(() => {
          /**/
        }),
        update: jest.fn(() => {
          /**/
        }),
        delete: jest.fn(() => {
          /**/
        }),
        findFollowingByUserId: jest.fn(() => {
          /**/
        }),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowerController],
      providers: [FollowerService, followerServiceProvider],
    }).compile();

    controller = module.get<FollowerController>(FollowerController);
    service = module.get<FollowerService>(FollowerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateFollowerDto();
    expect(controller.create(dto)).not.toEqual(null);
  });

  it('calling create method', () => {
    const dto = new CreateFollowerDto();
    controller.create(dto);
    expect(service.create).toHaveBeenCalled();
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('calling update function', () => {
    const dto = new UpdateFollowerDto();
    controller.update(dto);
    expect(service.update).toHaveBeenCalled();
  });
});
