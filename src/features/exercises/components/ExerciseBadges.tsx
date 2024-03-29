import { ComponentPropsWithoutRef } from "react";
import { Badge, BadgeSize } from "../../../components/Badge";
import { Exercise } from "../../../data/types";
import { EXERCISE_BADGE_COLORS } from "../constants";
import styles from "./ExerciseBadges.module.scss";
import { combineClasses } from "../../../utils/combineClasses";

export type ExerciseBadgesProps = {
  exercise: Exercise;
  size?: BadgeSize;
} & ComponentPropsWithoutRef<"div">;

export const ExerciseBadges = ({
  exercise,
  size,
  className,
  ...props
}: ExerciseBadgesProps) => {
  return (
    <div className={combineClasses(className, styles.badges)} {...props}>
      {exercise.equipmentTypes.map((equipmentType) => (
        <Badge
          size={size}
          color={EXERCISE_BADGE_COLORS.equipmentTypes}
          key={equipmentType}
        >
          {equipmentType}
        </Badge>
      ))}
      {exercise.exerciseTypes.map((exerciseType) => (
        <Badge
          size={size}
          color={EXERCISE_BADGE_COLORS.exerciseTypes}
          key={exerciseType}
        >
          {exerciseType}
        </Badge>
      ))}
      {exercise.majorMuscles.map((majorMuscle) => (
        <Badge
          size={size}
          color={EXERCISE_BADGE_COLORS.majorMuscles}
          key={majorMuscle}
        >
          {majorMuscle}
        </Badge>
      ))}
      {exercise.minorMuscles.map((minorMuscle) => (
        <Badge
          size={size}
          color={EXERCISE_BADGE_COLORS.minorMuscles}
          key={minorMuscle}
        >
          {minorMuscle}
        </Badge>
      ))}
    </div>
  );
};
