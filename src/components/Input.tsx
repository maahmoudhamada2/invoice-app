import { useFormContext } from "react-hook-form";
import { get } from "react-hook-form";
import clsx from "clsx";

interface InputPropsType {
  id: string;
  type: string;
  disabled: boolean;
}

const Input = ({ id, type, disabled }: InputPropsType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = get(errors, id);

  return (
    <input
      className={clsx(
        `text-main text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 not-disabled:border-2  rounded-xs disabled:text-subtle`,
        fieldError
          ? "outline-[#EC5757] border-[#EC5757]"
          : "border-input-outline outline-[#9277ff]",
      )}
      id={id}
      type={type}
      disabled={disabled}
      {...register(id)}
    />
  );
};

export default Input;
