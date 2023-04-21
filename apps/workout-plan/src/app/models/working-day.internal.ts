import { WorkingExercise } from './working-exercise.internal';

export interface WorkingDay {
  name: string;
  day: string;
  exercises: Array<WorkingExercise>;
}
