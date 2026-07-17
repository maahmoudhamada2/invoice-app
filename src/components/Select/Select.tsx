import type { HTMLOptionProps, HTMLSelectProps } from "./Select.type";
import SelectWrapper from "./SelectWrapper";
import Option from "./Option";
import clsx from "clsx";

interface SelectProps {
  selectConfig: HTMLSelectProps;
  optsConfig: HTMLOptionProps[];
  isValid: boolean;
}

const Select = ({ selectConfig, optsConfig, isValid }: SelectProps) => {
  return (
    <SelectWrapper
      className={clsx(!isValid && "border-2 border-danger")}
      {...selectConfig}>
      {optsConfig.map((opt) => (
        <Option key={`opt-${opt.value}`} value={opt.value} label={opt.label} />
      ))}
    </SelectWrapper>
  );
};

export default Select;
