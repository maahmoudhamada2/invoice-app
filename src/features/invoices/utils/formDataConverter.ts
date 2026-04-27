import { FormSchema } from "../types/invoiceForm.types";
import { InvoiceDataType } from "../types/invoiceList.types";
import {
  invDatesFormatter,
  itemsPriceCalc,
  idGenerator,
} from "./formConvHelpers";

const formDataConverter = (formData: FormSchema, invoiceIds: string[]) => {
  const newInvoice: InvoiceDataType = {
    ...invDatesFormatter(formData.invoiceDate, Number(formData.paymentTerms)),
    ...itemsPriceCalc(formData.items),
    id: idGenerator(invoiceIds),
    description: formData.projectDesc,
    paymentTerms: Number(formData.paymentTerms),
    clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    status: "pending",
    senderAddress: {
      street: formData.senderStreet,
      city: formData.senderCity,
      postCode: formData.senderPostCode,
      country: formData.senderCountry,
    },
    clientAddress: {
      street: formData.clientStreet,
      city: formData.clientCity,
      postCode: formData.clientPostCode,
      country: formData.clientCountry,
    },
  };
  return newInvoice;
};
export default formDataConverter;
