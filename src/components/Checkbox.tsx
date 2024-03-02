import { ComponentProps, useId } from "react";

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
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        onChange={(event) => {
          onChange?.(event.target.checked);
        }}
        {...props}
      />
    </div>
  );
};
