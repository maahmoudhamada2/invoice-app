import type { FieldSetKeys } from "../constants/invoiceForm.constants";
import { addressFields, metaFields, itemFields } from "./fields";
import type { FieldSetShape } from "../types/invoiceForm.types";

const invoiceFields = (itemsIds: string[]) => {
  return {
    sender: {
      title: "Bill From",
      setFields: addressFields("sender"),
    },
    client: {
      title: "Bill To",
      setFields: [
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
    },
    meta: {
      setFields: metaFields,
    },
    items: {
      title: "Items List",
      setFields: itemFields(itemsIds),
    },
  } satisfies Record<FieldSetKeys, FieldSetShape>;
};

export default invoiceFields;
