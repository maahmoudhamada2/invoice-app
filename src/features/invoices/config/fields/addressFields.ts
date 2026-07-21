import type { FormField } from "../../types/invoiceForm.types";

const addressFields = (prefix: "client" | "sender") => {
  return [
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Street Address",
      },
      input: {
        id: `${prefix}Street`,
        type: "text",
        disabled: false,
      },
    },
    {
      container: {
        size: "w-[40%] md:w-[25%] flex-1",
      },
      label: {
        text: "City",
      },
      input: {
        id: `${prefix}City`,
        type: "text",
        disabled: false,
      },
    },
    {
      container: {
        size: "w-[40%] md:w-[25%] flex-1",
      },
      label: {
        text: "Post Code",
      },
      input: {
        id: `${prefix}PostCode`,
        type: "text",
        disabled: false,
      },
    },
    {
      container: {
        size: "w-[40%] md:w-[25%] flex-1",
      },
      label: {
        text: "Country",
      },
      input: {
        id: `${prefix}Country`,
        type: "text",
        disabled: false,
      },
    },
  ] satisfies FormField[];
};

export default addressFields;
