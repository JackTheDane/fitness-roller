import { ChangeEvent, ComponentPropsWithoutRef, useId, useRef } from "react";

export type TextInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "id" | "onChange"
> & {
  value: string;
  onChange(text: string, nativeEvent?: ChangeEvent<HTMLInputElement>): void;
  label?: string;
  labelProps?: Omit<ComponentPropsWithoutRef<"label">, "htmlFor">;
  clearable?: boolean;
};

export const TextInput = ({
  onChange,
  value,
  label,
  labelProps,
  style,
  clearable = true,
  ...props
}: TextInputProps) => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {label && (
        <label htmlFor={inputId} {...labelProps}>
          {label}
        </label>
      )}
      <div style={{ display: "flex" }}>
        <input
          value={value}
          type="text"
          onChange={(event) => onChange?.(event.target.value, event)}
          id={inputId}
          style={{ flexGrow: 1, ...style }}
          ref={inputRef}
          {...props}
        />
        {clearable && value && (
          <button
            onClick={() => {
              onChange?.("");
              inputRef.current?.focus();
            }}
            type="button"
            style={{ padding: "0px 8px" }}
          >
            ✖
          </button>
        )}
      </div>
    </>
  );
};
