import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';
import { CreateQueetDto } from './dto/create-queet.dto';
import { UpdateQueetDto } from './dto/update-queet.dto';
import { Queet } from './entities/queet.entity';
import { QueetService } from './queet.service';

class MockQueetService {
  create(dto: any) {
    return [];
  }

  findOne() {
    return [];
  }

  findAll() {
    return [];
  }

  update(id: number, dto: any) {
    return [];
  }

  remove(id: number) {
    return [];
  }

  fetchQueetsByProfile(id: number) {
    return [];
  }
}

describe('QueetService', () => {
  let service: QueetService;
  let queetService: QueetService;
  let sandbox: sinon.Sinonbox;

  beforeEach(async () => {
    const provider = {
      provide: QueetService,
      useClass: MockQueetService,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [QueetService, provider],
    }).compile();
    sandbox = sinon.createSandbox();
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        QueetService,
        {
          provide: getRepositoryToken(Queet),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();
    queetService = app.get<QueetService>(QueetService);
    service = module.get<QueetService>(QueetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Call create with expected param', async () => {
    const createSpy = jest.spyOn(service, 'create');
    const dto = new CreateQueetDto();
    service.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });

  it('Call findOne with expected param', async () => {
    const findOneSpy = jest.spyOn(service, 'findOne');
    const id = 1;
    service.findOne(id);
    expect(findOneSpy).toHaveBeenCalledWith(id);
  });

  it('Call findAll', async () => {
    const findAllSpy = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('Call update with expected param', async () => {
    const spy = jest.spyOn(service, 'update');
    const id = 1;
    const dto = new UpdateQueetDto();
    service.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with expected param', async () => {
    const spy = jest.spyOn(service, 'remove');
    const id = 1;
    service.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call fetchQueetsByProfile with expected param', async () => {
    const spy = jest.spyOn(service, 'fetchQueetsByProfile');
    const id = 1;
    service.fetchQueetsByProfile(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call create with repo & expected param', async () => {
    const createSpy = jest.spyOn(queetService, 'create');
    const dto = new CreateQueetDto();
    queetService.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });

  it('Call findOne with repo &  expected param', async () => {
    const findOneSpy = jest.spyOn(queetService, 'findOne');
    const id = 1;
    queetService.findOne(id);
    expect(findOneSpy).toHaveBeenCalledWith(id);
  });

  it('Call findAll withRepo', async () => {
    const findAllSpy = jest.spyOn(queetService, 'findAll');
    queetService.findAll();
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('Call update with repo &  expected param', async () => {
    const spy = jest.spyOn(queetService, 'update');
    const id = 1;
    const dto = new UpdateQueetDto();
    queetService.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with repo &  expected param', async () => {
    const spy = jest.spyOn(queetService, 'remove');
    const id = 1;
    queetService.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call fetchQueetsByProfile with repo &  expected param', async () => {
    const spy = jest.spyOn(queetService, 'fetchQueetsByProfile');
    const id = 1;
    queetService.fetchQueetsByProfile(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  afterAll(async () => {
    sandbox.restore();
  });
});
