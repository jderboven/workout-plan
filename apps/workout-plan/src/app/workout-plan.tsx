import { useState, useEffect } from 'react';
import { WorkingPlan } from './models/working-plan.internal';
import Exercise from './working-exercise';
import { WorkingDay } from './models/working-day.internal';
import { WorkingExercise } from './models/working-exercise.internal';

function WorkoutPlan() {
  const [plan, setPlan] = useState<WorkingPlan | null>(null);
  const [selectedDay, setSelectedDay] = useState<WorkingDay | null>(null);

  useEffect(() => {
    async function fetchWorkingPlan() {
      const response = await fetch('http://localhost:3000/api/plan');
      const data = await response.json();
      setPlan(data);
    }
    fetchWorkingPlan();
  }, []);

  function handleDayClick(day: WorkingDay) {
    setSelectedDay(day);
  }

  if (!plan) {
    return (
      <div className="h-screen w-full text-center flex items-center justify-center">
        <div
          className="animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-blue-900 font-bold text-5xl">
        Training Plan
      </h1>
      <ul className="flex flex-col items-center gap-2 p-4">
        {plan.days.map((day: WorkingDay) => (
          <li
            className="capitalize font-semibold text-xl hover:cursor-pointer"
            key={day.day}
            onClick={() => handleDayClick(day)}
          >
            {day.day}
          </li>
        ))}
      </ul>
      {selectedDay && (
        <div>
          <h2 className="flex items-center justify-center p-2 font-bold text-orange-500">
            Exercises
          </h2>
          <ul className="flex flex-col items-center gap-2 w-full">
            {selectedDay.exercises.map((exercise: WorkingExercise) => (
              <li key={exercise.name} className="w-1/3">
                <Exercise
                  key={exercise.name}
                  name={exercise.name}
                  repRange={exercise.repRange}
                  difficulty={exercise.difficulty}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WorkoutPlan;
