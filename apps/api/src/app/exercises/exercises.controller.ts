import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('plan/days')
export class ExercisesController {
  constructor(private appService: AppService) {}

  @Get(':day')
  async getExercises(@Param('day') day: string) {
    const foundDay = await this.appService.getExercises(day);
    if (foundDay === null) {
      throw new NotFoundException(`No exercises found for day ${day}`);
    }
    return foundDay.exercises;
  }
}
