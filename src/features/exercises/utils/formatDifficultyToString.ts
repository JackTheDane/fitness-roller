import { Difficulty, DifficultyLevel } from "./getDifficultyForExercise";

export const formatDifficultyToString = (
  difficulty: Difficulty,
  difficultyLevel: DifficultyLevel
) => {
  const chosenDifficulty = difficulty[difficultyLevel];

  return `Reps: ${chosenDifficulty.reps || chosenDifficulty.time}, Sets: ${
    chosenDifficulty.sets
  }, Rest: ${chosenDifficulty.rest}`;
};
