import {
  ComponentPropsWithoutRef,
  ReactNode,
  useId,
  useLayoutEffect,
  useState,
} from "react";
import styles from "./Accordion.module.scss";
import { combineClasses } from "../utils/combineClasses";
import { Collapsible } from "../features/animations/Collapsible";

export type AccordionProps = {
  title?: ReactNode;
  children?: ReactNode;
  open?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const Accordion = ({
  title,
  children,
  className,
  open: _open,
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(_open ?? false);
  const titleId = useId();
  const contentId = useId();

  useLayoutEffect(() => {
    if (_open != null) {
      setIsOpen(_open);
    }
  }, [_open]);

  return (
    <div
      className={combineClasses(className, styles.accordion)}
      {...props}
      aria-expanded={isOpen}
    >
      <button
        className={styles.toggleButton}
        type="button"
        aria-controls={contentId}
        onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
      >
        <div className={combineClasses(styles.chevron, isOpen && styles.open)}>
          👆
        </div>
        <span id={titleId}>{title}</span>
      </button>
      <Collapsible open={isOpen} id={contentId} aria-labelledby={titleId}>
        {children}
      </Collapsible>
    </div>
  );
};
