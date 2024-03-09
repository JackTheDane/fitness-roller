import { useState } from "react";
import {
  EquipmentType,
  Exercise,
  ExerciseType,
  MajorMuscle,
  MinorMuscle,
} from "../data/types";
import { EXERCISES } from "../data/exercises";
import { getRandomNumberBetween } from "../utils/getRandomNumberBetween";

type RandomExerciseOptions = {
  exercises?: Exercise[];
  equipmentTypes?: EquipmentType[];
  exerciseTypes?: ExerciseType[];
  majorMuscles?: MajorMuscle[];
  minorMuscles?: MinorMuscle[];
};

const getRandomExercise = (
  currentExercise?: Exercise,
  options?: RandomExerciseOptions
) => {
  const exercisePool = (options?.exercises ?? EXERCISES) as typeof EXERCISES;

  let availableExercises = currentExercise
    ? exercisePool.filter(({ name }) => name !== currentExercise.name)
    : exercisePool;

  if (options?.equipmentTypes) {
    availableExercises = availableExercises.filter(({ equipmentTypes }) =>
      equipmentTypes.every((equipment) =>
        options.equipmentTypes!.includes(equipment)
      )
    );
  }

  if (options?.exerciseTypes) {
    availableExercises = availableExercises.filter(({ exerciseTypes }) =>
      exerciseTypes.every((exerciseType) =>
        options.exerciseTypes!.includes(exerciseType)
      )
    );
  }

  if (options?.majorMuscles) {
    availableExercises = availableExercises.filter(({ majorMuscles }) =>
      majorMuscles.every((majorMuscle) =>
        options.majorMuscles!.includes(majorMuscle)
      )
    );
  }

  if (options?.minorMuscles) {
    availableExercises = availableExercises.filter(({ minorMuscles }) =>
      minorMuscles.every((minorMuscle) =>
        options.minorMuscles!.includes(minorMuscle)
      )
    );
  }

  return availableExercises[
    getRandomNumberBetween(0, availableExercises.length)
  ];
};

export const useRandomExercise = (options?: RandomExerciseOptions) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(
    getRandomExercise(undefined, options)
  );

  const refreshRandomExercise = () => {
    setSelectedExercise((currentExercise) =>
      getRandomExercise(currentExercise, options)
    );
  };

  return {
    exercise: selectedExercise,
    refreshRandomExercise,
  };
};
