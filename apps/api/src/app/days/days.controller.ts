import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class DaysController {
  constructor(private appService: AppService) {}

  @Get('plan/days')
  async getDays(): Promise<any> {
    return this.appService.getDays();
  }
}
