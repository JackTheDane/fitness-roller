import { CSSProperties, ReactHTML, ReactNode, createElement } from "react";
import styles from "./Badge.module.scss";
import { combineClasses } from "../utils/combineClasses";

type BadgeProps = {
  as?: keyof ReactHTML;
  color?: CSSProperties["backgroundColor"];
  children?: ReactNode;
  className?: string;
};

export const Badge = ({
  as = "span",
  color = "grey",
  children,
  className,
}: BadgeProps) => {
  return createElement(as, {
    className: combineClasses(className, styles.badge),
    style: { backgroundColor: color },
    children,
  });
};
