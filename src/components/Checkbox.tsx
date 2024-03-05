import { ComponentProps, useEffect, useId, useState } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = Omit<
  ComponentProps<"input">,
  "type" | "id" | "onChange"
> & {
  indetermined?: boolean;
  label: string;
  onChange?(value: boolean): void;
};

export const Checkbox = ({
  label,
  onChange,
  indetermined,
  ...props
}: CheckboxProps) => {
  const id = useId();

  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef || indetermined == null) return;

    inputRef.indeterminate = indetermined;
  }, [inputRef, indetermined]);

  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        ref={setInputRef}
        onChange={(event) => {
          onChange?.(event.target.checked);
        }}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
