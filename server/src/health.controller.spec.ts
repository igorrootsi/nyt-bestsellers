import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './Health.controller';

describe('HealthController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    healthController = moduleRef.get(HealthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(healthController.getHealthStatus()).toEqual({ ok: true });
    });
  });
});
