/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateQueetDto } from './dto/create-queet.dto';
import { UpdateQueetDto } from './dto/update-queet.dto';
import { QueetController } from './queet.controller';
import { QueetService } from './queet.service';

describe('QueetController', () => {
  let controller: QueetController;
  let service: QueetService;

  beforeEach(async () => {
    const queetServiceProvider = {
      provide: QueetService,
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
      controllers: [QueetController],
      providers: [QueetService, queetServiceProvider],
    }).compile();

    controller = module.get<QueetController>(QueetController);
    service = module.get<QueetService>(QueetService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateQueetDto();
    expect(controller.create(dto)).not.toEqual(null);
  });

  it('calling create method', () => {
    const dto = new CreateQueetDto();
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
    const dto = new UpdateQueetDto();
    controller.update(dto);
    expect(service.update).toHaveBeenCalled();
  });
});
