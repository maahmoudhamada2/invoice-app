import FormField from "@/components/FormField";
import { FormFieldType } from "../../types/invoiceForm.types";
import { ReactNode } from "react";

interface FieldSetProps {
  title?: string;
  fields: FormFieldType[];
  children?: ReactNode;
}

const FieldSet = ({ title, fields, children }: FieldSetProps) => {
  return (
    <fieldset className="flex flex-wrap pb-10.25 gap-6">
      {title && (
        <legend className="mb-6 text-[#7c5dfa] text-body-bold">{title}</legend>
      )}
      {fields.map((field) => (
        <FormField {...field} />
      ))}
      {children}
    </fieldset>
  );
};

export default FieldSet;
