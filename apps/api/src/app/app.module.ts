import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanController } from './plan/plan.controller';
import { DaysController } from './days/days.controller';
import { ExercisesController } from './exercises/exercises.controller';
import { DelayMiddleware } from './delay.middleware';

@Module({
  imports: [],
  controllers: [
    AppController,
    PlanController,
    DaysController,
    ExercisesController,
  ],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(DelayMiddleware).forRoutes('*');
  }
}
