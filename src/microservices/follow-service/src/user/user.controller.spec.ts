/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const userServiceProvider = {
      provide: UserService,
      useFactory: () => ({
        create: jest.fn(() => []),
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
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, userServiceProvider],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateUserDto();
    expect(controller.create(dto)).not.toEqual(null);
  });

  it('calling create method', () => {
    const dto = new CreateUserDto();
    controller.create(dto);
    expect(service.create).toHaveBeenCalled();
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('calling findAll method', () => {
    controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('calling findOne method', () => {
    const id = 2;
    controller.findOne(id);
    expect(service.findOne).toHaveBeenCalled();
  });

  it('calling update function', () => {
    const dto = new UpdateUserDto();
    controller.update(dto);
    expect(service.update).toHaveBeenCalled();
  });
});
