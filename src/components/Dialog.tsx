import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import styles from "./Dialog.module.scss";
import { combineClasses } from "../utils/combineClasses";

export type DialogProps = {
  onClose?(): void;
  title?: string;
} & Omit<ComponentPropsWithoutRef<"dialog">, "onClose" | "modal">;

export const Dialog = ({
  open,
  onClose,
  title,
  children,
  className,
  ...props
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      return;
    }

    dialogRef.current?.close();
  }, [open, dialogRef]);

  return (
    <dialog
      ref={dialogRef}
      className={combineClasses(className, styles.dialog)}
      {...props}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          {title && <h1>{title}</h1>}
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
