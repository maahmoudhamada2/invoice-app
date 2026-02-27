import { FormMethodsType } from "@/features/invoices/types/invoiceForm.types";

interface FormFieldProps {
  container: {
    size: string;
  };
  label: {
    text: string;
  };
  input: {
    id: string;
    type: string;
    disabled: boolean;
  };
  formMethods: FormMethodsType;
}

const FormField = ({
  container,
  label,
  input,
  formMethods,
}: FormFieldProps) => {
  const { register } = formMethods;
  return (
    <div className={`relative flex flex-col gap-y-2.25 ${container.size}`}>
      <label className="text-body text-muted" htmlFor={input.id}>
        {label.text}
      </label>
      <input
        {...register(input.id)}
        className="text-main text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 not-disabled:border-2 border-input-outline rounded-xs disabled:text-subtle"
        id={input.id}
        type={input.type}
        disabled={input.disabled}
      />
    </div>
  );
};

export default FormField;
