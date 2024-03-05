import { ComponentProps, useId } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = Omit<
  ComponentProps<"input">,
  "type" | "id" | "onChange"
> & {
  label: string;
  onChange?(value: boolean): void;
};

export const Checkbox = ({ label, onChange, ...props }: CheckboxProps) => {
  const id = useId();

  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        onChange={(event) => {
          onChange?.(event.target.checked);
        }}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
