import { useFormContext } from "react-hook-form";
import Input from "./Input";
import { get } from "react-hook-form";
import clsx from "clsx";

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
  idPrefix?: string;
}

const FormField = ({ container, label, input, idPrefix }: FormFieldProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const inputId = idPrefix ? `${idPrefix}${input.id}` : input.id;
  const fieldError = get(errors, inputId);

  return (
    <div className={`relative flex flex-col gap-y-2.25 ${container.size}`}>
      <label
        className={clsx(
          `text-body`,
          fieldError ? "text-[#EC5757]" : "text-muted",
        )}
        htmlFor={inputId}>
        {label.text}
      </label>
      <Input {...input} id={inputId} />
      {fieldError && (
        <small className="text-field-error text-[#EC5757] md:absolute md:top-0 md:right-3">
          {fieldError.message}
        </small>
      )}
    </div>
  );
};

export default FormField;
