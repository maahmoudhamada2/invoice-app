import type { FormField } from "../../types/invoiceForm.types";

export const metaFields = [
  {
    container: {
      size: "w-full md:w-[45%] md:flex-1",
    },
    label: { text: "Invoice Date" },
    input: {
      id: "invoiceDate",
      type: "date",
      disabled: false,
    },
  },
  {
    container: { size: "w-full md:w-[45%] md:flex-1" },
    label: { text: "Payment Terms" },
    input: {
      id: "paymentTerms",
      type: "select",
      disabled: false,
      options: {
        type: "number",
        data: [
          { label: "Net 1 Day", value: 1 },
          { label: "Net 7 Days", value: 7 },
          { label: "Net 14 Days", value: 14 },
          { label: "Net 30 Days", value: 30 },
        ],
      },
    },
  },
  {
    container: { size: "w-full" },
    label: { text: "Project Description" },
    input: {
      id: "projectDesc",
      type: "text",
      disabled: false,
    },
  },
] satisfies FormField[];
