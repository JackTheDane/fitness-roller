import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Accordion.module.scss";
import { combineClasses } from "../utils/combineClasses";

export type AccordionProps = {
  title?: ReactNode;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"details">;

export const Accordion = ({
  title,
  children,
  className,
  ...props
}: AccordionProps) => {
  return (
    <details className={combineClasses(className, styles.accordion)} {...props}>
      <summary className={styles.toggleButton}>{title}</summary>
      {children}
    </details>
  );
};
