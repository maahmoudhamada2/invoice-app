import { FormFieldType } from "../types/invoiceForm.types";

type FieldsKey = "senderFields" | "clientFields" | "metaFields" | "itemFields";
type InvoiceFormShape = Record<FieldsKey, FormFieldType[]>;

const addressFields = (idPrefix: string): FormFieldType[] => [
  {
    container: {
      size: "w-full",
    },
    label: {
      text: "Street Address",
    },
    input: {
      id: `${idPrefix}Street`,
      type: "text",
      disabled: false,
    },
  },
  {
    container: {
      size: "w-[40%] flex-1",
    },
    label: {
      text: "City",
    },
    input: {
      id: `${idPrefix}City`,
      type: "text",
      disabled: false,
    },
  },
  {
    container: {
      size: "w-[40%] flex-1",
    },
    label: {
      text: "Post Code",
    },
    input: {
      id: `${idPrefix}PostCode`,
      type: "text",
      disabled: false,
    },
  },
  {
    container: {
      size: "flex-1",
    },
    label: {
      text: "Country",
    },
    input: {
      id: `${idPrefix}Country`,
      type: "text",
      disabled: false,
    },
  },
];

const invoiceFieldsConfig: InvoiceFormShape = {
  senderFields: addressFields("sender"),
  clientFields: [
    {
      container: { size: "w-full" },
      label: { text: "Client's Name" },
      input: {
        id: "clientName",
        type: "text",
        disabled: false,
      },
    },
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Client's Email",
      },
      input: {
        id: "clientEmail",
        type: "email",
        disabled: false,
      },
    },
    ...addressFields("client"),
  ],
  metaFields: [
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
        type: "text", // TODO drop down
        disabled: false,
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
  ],
  itemFields: [
    {
      container: {
        size: "w-full",
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
        size: "w-[20%]",
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
        size: "w-[30%]",
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
        size: "w-[18%]",
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
  ],
};

export default invoiceFieldsConfig;
