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
  equipmentTypes?: EquipmentType[];
  exerciseTypes?: ExerciseType[];
  majorMuscles?: MajorMuscle[];
  minorMuscles?: MinorMuscle[];
};

const getRandomExercise = (
  currentExercise?: Exercise,
  options?: RandomExerciseOptions
) => {
  let availableExercises = currentExercise
    ? EXERCISES.filter(({ name }) => name !== currentExercise.name)
    : EXERCISES;

  if (options?.equipmentTypes) {
    availableExercises = availableExercises.filter(({ equipmentTypes }) =>
      equipmentTypes.some((equipment) =>
        options.equipmentTypes!.includes(equipment)
      )
    );
  }

  if (options?.exerciseTypes) {
    availableExercises = availableExercises.filter(({ exerciseTypes }) =>
      exerciseTypes.some((exerciseType) =>
        options.exerciseTypes!.includes(exerciseType)
      )
    );
  }

  if (options?.majorMuscles) {
    availableExercises = availableExercises.filter(({ majorMuscles }) =>
      majorMuscles.some((majorMuscle) =>
        options.majorMuscles!.includes(majorMuscle)
      )
    );
  }

  if (options?.minorMuscles) {
    availableExercises = availableExercises.filter(({ minorMuscles }) =>
      minorMuscles.some((minorMuscle) =>
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
