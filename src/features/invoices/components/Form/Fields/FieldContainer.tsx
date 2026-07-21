import type { FormField } from "@/features/invoices/types/invoiceForm.types";
import { useFormContext } from "react-hook-form";
import FormControl from "./FormControl";
import { get } from "react-hook-form";
import clsx from "clsx";

interface FieldContainerProps {
  field: FormField;
}

const FieldContainer = ({ field }: FieldContainerProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const {
    container: { size: contSize },
    label: { text: labelText },
    input: { type: inputType, id: inputId, options },
  } = field;
  const error = get(errors, inputId);

  const shouldParseToNumb =
    (inputType === "select" && options?.type === "number") ||
    inputType === "number";

  return (
    <div className={`relative flex flex-col gap-y-2.25 ${contSize}`}>
      <label
        htmlFor={inputId}
        className={clsx(
          `text-body`,
          error ? "text-danger" : "text-text-muted",
        )}>
        {labelText}
      </label>
      <FormControl
        inptConfig={{
          ...field.input,
          ...register(inputId, { valueAsNumber: shouldParseToNumb }),
          id: inputId,
        }}
        isValid={!error}
      />
      {error && (
        <small className="text-field-error text-danger absolute -bottom-9 right-2">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default FieldContainer;
