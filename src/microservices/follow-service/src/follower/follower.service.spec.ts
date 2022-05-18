import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as sinon from 'sinon';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { FollowerService } from './follower.service';

describe('FollowerService', () => {
  let service: FollowerService;
  let sandbox: sinon.SinonSandbox;
  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FollowerService,
        {
          provide: getRepositoryToken(User),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<FollowerService>(FollowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
    const dto = new UpdateFollowerDto();
    service.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with repo &  expected param', async () => {
    const spy = jest.spyOn(service, 'remove');
    const id = 1;
    service.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call followersByUserId with repo &  expected param', async () => {
    const spy = jest.spyOn(service, 'followersByUserId');
    const id = 1;
    service.followersByUserId(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call followingByUserId with repo &  expected param', async () => {
    const spy = jest.spyOn(service, 'followingByUserId');
    const id = 1;
    service.followingByUserId(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  afterAll(async () => {
    sandbox.restore();
  });
});
