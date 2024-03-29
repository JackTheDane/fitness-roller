import {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styles from "./Dialog.module.scss";
import { combineClasses } from "../utils/combineClasses";
import { useRefValue } from "../utils/useRefValue";

export type DialogProps = {
  onClose?(): void;
} & Omit<ComponentPropsWithoutRef<"dialog">, "onClose" | "modal">;

const DialogContext = createContext<{ onClose?(): void } | undefined>(
  undefined
);

const DialogComponent = ({
  open,
  onClose,
  children,
  className,
  ...props
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRefValue(onClose);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      return;
    }

    dialogRef.current?.close();
  }, [open, dialogRef]);

  const contextValue = useMemo(
    () => ({
      onClose: () => onCloseRef.current?.(),
    }),
    [onCloseRef]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <dialog
        ref={dialogRef}
        className={combineClasses(className, styles.dialog)}
        onCancel={(event) => {
          event.preventDefault();
          contextValue.onClose();
        }}
        {...props}
      >
        <div className={styles.content}>{children}</div>
      </dialog>
    </DialogContext.Provider>
  );
};

export type DialogHeaderProps = ComponentPropsWithoutRef<"div"> & {
  title?: string;
};

const DialogHeader = ({
  title,
  className,
  children,
  ...props
}: DialogHeaderProps) => {
  const { onClose } = useContext(DialogContext) ?? {};

  return (
    <div className={combineClasses(className, styles.header)} {...props}>
      <div style={{ flexGrow: 1 }}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export const Dialog = Object.assign(DialogComponent, {
  Header: DialogHeader,
});
