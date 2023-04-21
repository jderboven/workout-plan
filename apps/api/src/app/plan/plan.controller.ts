import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class PlanController {
  constructor(private appService: AppService) {}

  @Get('plan')
  async getPlan(): Promise<any> {
    return this.appService.getPlan();
  }
}
