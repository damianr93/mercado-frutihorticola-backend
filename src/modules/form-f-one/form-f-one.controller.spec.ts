import { Test, TestingModule } from '@nestjs/testing';
import { FormFOneController } from './form-f-one.controller';
import { FormFOneService } from './form-f-one.service';

describe('FormFOneController', () => {
  let controller: FormFOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormFOneController],
      providers: [FormFOneService],
    }).compile();

    controller = module.get<FormFOneController>(FormFOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
