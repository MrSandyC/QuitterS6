import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let sandbox: sinon.SinonSandbox;
  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Call create with repo & expected param', async () => {
    const createSpy = jest.spyOn(service, 'create');
    const dto = new CreateUserDto();
    service.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });

  it('Call findAll', async () => {
    const spy = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(spy).toHaveBeenCalled();
  });

  it('Call findOne', async () => {
    const spy = jest.spyOn(service, 'findOne');
    const id = 1;
    service.findOne(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call update with expected param', async () => {
    const spy = jest.spyOn(service, 'update');
    const id = 1;
    const dto = new UpdateUserDto();
    service.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with repo &  expected param', async () => {
    const spy = jest.spyOn(service, 'remove');
    const id = 1;
    service.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  afterAll(async () => {
    sandbox.restore();
  });
});
