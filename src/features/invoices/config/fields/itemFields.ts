import type { FormItemSchema } from "@/features/invoices/types/invoiceForm.types";
import type { FormField } from "@/features/invoices/types/invoiceForm.types";
import { FieldPath } from "react-hook-form";

type ItemFormField = Omit<FormField, "input"> & {
  input: {
    id: FieldPath<FormItemSchema>;
    disabled: boolean;
    type: "text" | "number";
  };
};

const baseItemsFields = [
  {
    container: {
      size: "w-full md:w-[38%]",
    },
    label: {
      text: "Item Name",
    },
    input: {
      id: "name",
      type: "text",
      disabled: false,
    },
  },
  {
    container: {
      size: "w-[19.5%] md:w-[9%]",
    },
    label: {
      text: "Qty.",
    },
    input: {
      id: "quantity",
      type: "number",
      disabled: false,
    },
  },
  {
    container: {
      size: "w-[30.5%] md:w-[20%]",
    },
    label: {
      text: "Price",
    },
    input: {
      id: "price",
      type: "number",
      disabled: false,
    },
  },
  {
    container: {
      size: "w-[20%] md:w-[10%]",
    },
    label: {
      text: "Total",
    },
    input: {
      id: "total",
      type: "number",
      disabled: true,
    },
  },
] satisfies ItemFormField[];

const itemFields = (itemsIds: string[]) => {
  const customItemFields = {} as Record<string, FormField[]>;
  itemsIds.forEach((id, idx) => {
    customItemFields[id] = baseItemsFields.map(
      (field) =>
        ({
          ...field,
          input: {
            ...field.input,
            id: `items.${idx}.${field.input.id}`,
          },
        }) satisfies FormField,
    );
  });
  return customItemFields;
};

export default itemFields;
