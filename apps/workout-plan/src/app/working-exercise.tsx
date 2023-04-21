import { useState } from 'react';

type ExerciseProps = {
  name: string;
  repRange: string;
  difficulty: number;
};

const Exercise = ({ name, repRange, difficulty }: ExerciseProps) => {
  const [newDifficulty, setNewDifficulty] = useState<number>(difficulty);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== null && event.target.value !== '') {
      const value = parseInt(event.target.value);
      setNewDifficulty(value);
    }
  };

  return (
    <div className="flex gap-2 justify-between items-center w-full">
      <div className="flex gap-2 w-full items-start">
        <span>{name}</span>
        <span>{repRange}</span>
      </div>
      <div>
        <input
          type="number"
          value={newDifficulty}
          onChange={handleChange}
          className="block w-16 p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Exercise;
