import type { EXERCISES } from "./exercises";

export type Exercise = (typeof EXERCISES)[number];

export type Equipment = Exercise["equipment"][number];
export type ExerciseType = Exercise["exerciseType"][number];
export type MajorMuscle = Exercise["majorMuscle"][number];
export type MinorMuscle = Exercise["minorMuscle"][number];
