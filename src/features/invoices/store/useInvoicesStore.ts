import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InvoiceDataType } from "../types/invoiceList.types";
import { FormSchema } from "../types/invoiceForm.types";
import formDataConverter from "../utils/formDataConverter";

interface InvoicesStoreState {
  invoices: InvoiceDataType[] | [];

  createNewInvoice: (formData: FormSchema) => void;
}

const useInvoicesStore = create(
  persist<InvoicesStoreState>(
    (set, get) => ({
      invoices: [],
      createNewInvoice: (formData) => {
        const ids = get().invoices.map((invoice) => invoice.id);
        const newInvoice = formDataConverter(formData, ids);
        set((state) => ({ invoices: [...state.invoices, newInvoice] }));
      },
    }),
    { name: "invoices" },
  ),
);

export default useInvoicesStore;
