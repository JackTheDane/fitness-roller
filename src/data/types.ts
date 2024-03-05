import type { EXERCISES } from "./exercises";

export type Exercise = {
  name: string;
  equipmentTypes: string[];
  exerciseTypes: string[];
  majorMuscles: string[];
  minorMuscles: string[];
  example: string;
  notes?: string;
  modifications?: string;
};

export type EquipmentType =
  (typeof EXERCISES)[number]["equipmentTypes"][number];
export type ExerciseType = (typeof EXERCISES)[number]["exerciseTypes"][number];
export type MajorMuscle = (typeof EXERCISES)[number]["majorMuscles"][number];
export type MinorMuscle = (typeof EXERCISES)[number]["minorMuscles"][number];
