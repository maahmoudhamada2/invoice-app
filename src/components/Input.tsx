import { useFormContext } from "react-hook-form";
import { get } from "react-hook-form";
import clsx from "clsx";
import useAppUiStore from "@/store/useAppUiStore";
import FormDatePicker from "@/components/DatePicker/FormDatePicker";
import useFormDatePick from "@/features/invoices/hooks/useFormDatePick";

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
  const formInpFocus = useAppUiStore((state) => state.formInpFocus);
  const formInpBlur = useAppUiStore((state) => state.formInpBlur);
  const controller = useFormDatePick();
  return (
    <>
      {type === "date" && <FormDatePicker controller={controller} />}
      <input
        onFocus={(e) => {
          const isMobile = window.matchMedia("(max-width: 786px)");
          if (isMobile.matches) {
            e.target.scrollIntoView({ behavior: "smooth", block: "center" });
            formInpFocus();
          }
        }}
        className={clsx(
          `outline-0 caret-brand caret-block bg-surface text-text-primary text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 border-2 rounded-xs disabled:text-red-600 `,
          fieldError
            ? "border-danger"
            : "border-input-border focus-visible:border-input-focus",
        )}
        id={id}
        type={type === "date" ? "hidden" : type}
        disabled={disabled}
        {...register(id, {
          valueAsNumber: type === "number",
          onBlur: () => formInpBlur(),
        })}
      />
    </>
  );
};

export default Input;
