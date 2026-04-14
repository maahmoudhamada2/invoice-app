import { useFormContext } from "react-hook-form";

interface InputPropsType {
  id: string;
  type: string;
  disabled: boolean;
}

const Input = ({ id, type, disabled }: InputPropsType) => {
  const { register } = useFormContext();
  return (
    <input
      className="text-main text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 not-disabled:border-2 border-input-outline rounded-xs disabled:text-subtle"
      id={id}
      type={type}
      disabled={disabled}
      {...register(id)}
    />
  );
};

export default Input;
