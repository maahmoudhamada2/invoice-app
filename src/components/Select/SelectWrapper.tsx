import type { HTMLSelectProps } from "./Select.type";
import { mergeClasses } from "@/utils/mergeClasses";
import { ReactNode } from "react";

const SelectWrapper = (props: HTMLSelectProps & { children: ReactNode }) => {
  return (
    <select
      {...props}
      className={mergeClasses(
        "focus:outline-2 focus:outline-brand custom-select text-text-primary text-body-bold px-5 pt-4.5 pb-3.75 rounded-xs",
        props.className,
      )}>
      {props.children}
    </select>
  );
};

export default SelectWrapper;
