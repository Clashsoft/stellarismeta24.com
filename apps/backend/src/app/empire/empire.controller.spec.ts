import { Test, TestingModule } from '@nestjs/testing';
import { EmpireController } from './empire.controller';
import { EmpireService } from './empire.service';

describe('EmpireController', () => {
  let controller: EmpireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpireController],
      providers: [EmpireService],
    }).compile();

    controller = module.get<EmpireController>(EmpireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
