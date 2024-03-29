import { CSSProperties, ReactHTML, ReactNode, createElement } from "react";
import styles from "./Badge.module.scss";
import { combineClasses } from "../utils/combineClasses";

export type BadgeSize = "small" | "medium" | "large";

export type BadgeProps = {
  as?: keyof ReactHTML;
  color?: CSSProperties["backgroundColor"];
  size?: BadgeSize;
  children?: ReactNode;
  className?: string;
};

export const Badge = ({
  as = "span",
  color = "grey",
  size = "medium",
  children,
  className,
}: BadgeProps) => {
  return createElement(as, {
    className: combineClasses(className, styles.badge),
    "data-size": size,
    style: { backgroundColor: color },
    children,
  });
};
