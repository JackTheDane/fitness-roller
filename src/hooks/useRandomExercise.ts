import { useState } from "react";
import {
  Equipment,
  Exercise,
  ExerciseType,
  MajorMuscle,
  MinorMuscle,
} from "../data/types";
import { EXERCISES } from "../data/exercises";
import { getRandomNumberBetween } from "../utils/getRandomNumberBetween";

export const useRandomExercise = (options?: {
  equipment?: Equipment[];
  exerciseType?: ExerciseType[];
  majorMuscle?: MajorMuscle[];
  minorMuscle?: MinorMuscle[];
}) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();

  const refreshRandomExercise = () => {
    setSelectedExercise((currentExercise) => {
      let availableExercises = currentExercise
        ? EXERCISES.filter(({ name }) => name !== currentExercise.name)
        : EXERCISES;

      if (options?.equipment) {
        availableExercises = availableExercises.filter(({ equipment }) =>
          equipment.some((e) => options.equipment!.includes(e))
        );
      }

      if (options?.exerciseType) {
        availableExercises = availableExercises.filter(({ exerciseType }) =>
          exerciseType.some((et) => options.exerciseType!.includes(et))
        );
      }

      if (options?.majorMuscle) {
        availableExercises = availableExercises.filter(({ majorMuscle }) =>
          majorMuscle.some((mm) => options.majorMuscle!.includes(mm))
        );
      }

      if (options?.minorMuscle) {
        availableExercises = availableExercises.filter(({ minorMuscle }) =>
          minorMuscle.some((mm) => options.minorMuscle!.includes(mm))
        );
      }

      return availableExercises[
        getRandomNumberBetween(0, availableExercises.length)
      ];
    });
  };

  return {
    exercise: selectedExercise,
    refreshRandomExercise,
  };
};
