import { ComponentPropsWithoutRef } from "react";
import styles from "./ExerciseLabel.module.scss";
import { combineClasses } from "../../../utils/combineClasses";

type ExerciseLabelProps = ComponentPropsWithoutRef<"p"> & {
  animate?: boolean;
};

export const ExerciseLabel = ({
  animate,
  className,
  children,
  ...props
}: ExerciseLabelProps) => {
  return (
    <p
      className={combineClasses(
        className,
        styles.label,
        animate && styles.animate
      )}
      {...props}
    >
      {children}
    </p>
  );
};
