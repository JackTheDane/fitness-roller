import { Exercise } from "../../../data/types";

export type DifficultyLevel = "easy" | "medium" | "hard";

export type DifficultyLevelInfo = {
  sets: number;
  rest: string;
  reps?: string;
  time?: string;
};

export type Difficulty = Record<DifficultyLevel, DifficultyLevelInfo>;

export function getDifficultyForExercise(exercise: Exercise) {
  const baseDifficulty: Record<string, Difficulty> = {
    weight: {
      easy: { reps: "8-10", sets: 2, rest: "45 sec" },
      medium: { reps: "12-15", sets: 3, rest: "30 sec" },
      hard: { reps: "15-20", sets: 4, rest: "15 sec" },
    },
    cardio: {
      easy: { time: "1 min", sets: 2, rest: "1 min" },
      medium: { time: "2 min", sets: 3, rest: "45 sec" },
      hard: { time: "3 min", sets: 4, rest: "30 sec" },
    },
    plyo: {
      easy: { reps: "5-8", sets: 2, rest: "1 min" },
      medium: { reps: "10-12", sets: 3, rest: "45 sec" },
      hard: { reps: "15+", sets: 4, rest: "30 sec" },
    },
  };

  if (exercise.exerciseTypes.includes("Weight")) {
    return baseDifficulty.weight;
  } else if (exercise.exerciseTypes.includes("Cardio")) {
    return baseDifficulty.cardio;
  } else if (exercise.exerciseTypes.includes("Plyo")) {
    return baseDifficulty.plyo;
  }
}
