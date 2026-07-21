import type { FormField } from "@/features/invoices/types/invoiceForm.types";
import FieldContainer from "./FieldContainer";
import { ReactNode } from "react";

interface FieldSetProps {
  title?: string;
  fields: FormField[];
  children?: ReactNode;
}

const FieldSet = ({ title, fields, children }: FieldSetProps) => {
  return (
    <fieldset className="flex flex-wrap pb-10.25  gap-6 gap-y-12.5">
      {title && (
        <legend className="mb-6 text-brand text-body-bold">{title}</legend>
      )}
      {fields.map((field) => (
        <FieldContainer key={field.input.id} field={field} />
      ))}
      {children}
    </fieldset>
  );
};

export default FieldSet;
