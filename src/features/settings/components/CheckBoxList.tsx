import { useMemo } from "react";
import { Checkbox } from "../../../components/Checkbox";

export type CheckBoxListProps<Option> = {
  options: Option[];
  selectedOptions: Option[];
  onOptionCheckedChange?(option: Option, checked: boolean): void;
  getLabel?(option: Option): string;
};

export const CheckBoxList = <Option,>({
  options,
  selectedOptions,
  onOptionCheckedChange,
  getLabel = (option) => option as string,
}: CheckBoxListProps<Option>) => {
  const checkedStatus = useMemo(() => {
    if (options.every((option) => selectedOptions.includes(option))) {
      return "all-checked";
    }

    if (options.some((option) => selectedOptions.includes(option))) {
      return "some-checked";
    }

    return "none-checked";
  }, [options, selectedOptions]);

  return (
    <>
      <Checkbox
        label="Select all"
        indetermined={checkedStatus === "some-checked"}
        checked={checkedStatus === "all-checked"}
        onChange={(value) =>
          options.forEach((option) => onOptionCheckedChange?.(option, value))
        }
      />
      {options.map((option) => {
        const label = getLabel(option);

        return (
          <Checkbox
            label={label}
            value={label}
            key={label}
            checked={selectedOptions.includes(option)}
            onChange={(value) => onOptionCheckedChange?.(option, value)}
          />
        );
      })}
    </>
  );
};
