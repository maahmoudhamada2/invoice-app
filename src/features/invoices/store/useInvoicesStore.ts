import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InvoiceDataType, InvoiceStatus } from "../types/invoiceList.types";
import { FormSchema } from "../types/invoiceForm.types";
import formDataConverter from "../utils/formDataConverter";

interface InvoicesStoreState {
  invoices: InvoiceDataType[] | [];
  filterStatus: InvoiceStatus | "all";
  createNewInvoice: (formData: FormSchema) => void;
  filterInvoices: (filterStatus: InvoiceStatus | "all") => void;
  delInvoice: (invoiceId: string | null) => void;
}

const useInvoicesStore = create<InvoicesStoreState>()(
  persist(
    (set, get) => ({
      invoices: [],
      filterStatus: "all",

      createNewInvoice: (formData) => {
        const ids = get().invoices.map((invoice) => invoice.id);
        const newInvoice = formDataConverter(formData, ids);
        set((state) => ({
          invoices: [...state.invoices, newInvoice],
        }));
      },

      filterInvoices: (filterStatus) => set({ filterStatus: filterStatus }),
      delInvoice: (invoiceId) =>
        set((state) => ({
          invoices: state.invoices.filter(
            (invoice) => invoice.id !== invoiceId,
          ),
        })),
    }),

    { name: "invoices", partialize: (state) => ({ invoices: state.invoices }) },
  ),
);

export default useInvoicesStore;
