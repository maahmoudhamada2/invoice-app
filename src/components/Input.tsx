import { ComponentProps } from "react";
import clsx from "clsx";

interface InputProps {
  configs: Omit<ComponentProps<"input">, "id" & { id: string }>;
  isValid: boolean;
}

const Input = ({ configs, isValid }: InputProps) => {
  return (
    <input
      className={clsx(
        `outline-0 caret-brand caret-block bg-surface text-text-primary 
         text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 border-2 
         rounded-xs`,
        isValid
          ? "border-input-border focus-visible:border-input-focus"
          : "border-danger",
      )}
      {...configs}
    />
  );
};

export default Input;
