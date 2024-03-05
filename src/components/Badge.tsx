import { CSSProperties, ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeProps = {
  children?: ReactNode;
  color?: CSSProperties["backgroundColor"];
};

export const Badge = ({ children, color = "grey" }: BadgeProps) => {
  return (
    <span className={styles.badge} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};
