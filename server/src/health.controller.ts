import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/health')
@ApiTags('Health')
export class HealthController {
  @Get()
  public getHealthStatus() {
    return { ok: true };
  }
}
