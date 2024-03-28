import { Difficulty, DifficultyLevel } from "./getDifficultyForExercise";

export const formatDifficultyToString = (
  difficulty: Difficulty,
  difficultyLevel: DifficultyLevel
) => {
  const { reps, time, sets, rest } = difficulty[difficultyLevel];

  return [
    `${reps ? `Reps: ${reps}` : time ? `Time: ${time}` : ""}`,
    `Sets: ${sets}`,
    `Rest: ${rest}`,
  ]
    .filter(Boolean)
    .join(", ");
};
