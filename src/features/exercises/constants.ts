import { CSSProperties } from "react";
import { Exercise } from "../../data/types";

export const EXERCISE_BADGE_COLORS = {
  equipmentTypes: "blue",
  exerciseTypes: "green",
  majorMuscles: "darkred",
  minorMuscles: "purple",
} as const satisfies Record<
  keyof Pick<
    Exercise,
    "equipmentTypes" | "exerciseTypes" | "majorMuscles" | "minorMuscles"
  >,
  CSSProperties["backgroundColor"]
>;
