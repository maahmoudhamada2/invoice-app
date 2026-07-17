import type { HTMLOptionProps } from "./Select.type";

const Option = (props: HTMLOptionProps) => {
  return (
    <option
      className="focus:outline-0 focus:text-brand pl-6 pt-4.25 pb-3.75 bg-transparent not-last-of-type:border-b-2 border-opt-bottom checked:text-brand hover:text-brand"
      {...props}>
      {props.label}
    </option>
  );
};
export default Option;
