import { FieldErrors } from "react-hook-form";
import { FormSchema } from "../../types/invoiceForm.types";
import { ERROR_MESSAGES } from "../../constants/invoiceForm.constants";

interface FormErrorProps {
  errors: FieldErrors<FormSchema>;
}
const FormError = ({ errors }: FormErrorProps) => (
  <>
    {Object.keys(errors).length !== 0 && (
      <small className="text-field-error text-[#EC5757]">
        {ERROR_MESSAGES.ALL_FIELDS_REQUIRED}
      </small>
    )}
  </>
);

export default FormError;
