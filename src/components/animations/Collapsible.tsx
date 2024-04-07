import { ComponentPropsWithoutRef } from "react";
import styles from "./Collapsible.module.scss";
import { combineClasses } from "../../utils/combineClasses";

export type CollapsibleProps = {
  open: boolean;
  delay?: {
    open?: number;
    close?: number;
  };
  direction?: "horizontal" | "vertical";
} & ComponentPropsWithoutRef<"div">;

export const Collapsible = ({
  open,
  children,
  delay,
  style,
  direction = "vertical",
  ...props
}: CollapsibleProps) => {
  const transitionDelay = open ? delay?.open : delay?.close;

  return (
    <div
      className={combineClasses(
        styles.wrapper,
        direction === "vertical" ? styles.vertical : styles.horizontal,
        open && styles.open
      )}
      style={{
        transitionDelay: transitionDelay ? `${transitionDelay}ms` : "unset",
        ...style,
      }}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
