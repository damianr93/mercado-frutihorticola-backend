import { Test, TestingModule } from '@nestjs/testing';
import { FormFOneService } from './form-f-one.service';

describe('FormFOneService', () => {
  let service: FormFOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormFOneService],
    }).compile();

    service = module.get<FormFOneService>(FormFOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
