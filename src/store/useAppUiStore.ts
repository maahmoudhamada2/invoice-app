import { create } from "zustand";

type View = "invoices" | "form" | "details";

interface AppUiState {
  view: View;
  isList: boolean;
  selectedInvoiceId: string | null;
  openForm: () => void;
  returnHome: () => void;
  showInvoice: (invoiceId: string) => void;
}

const useAppUiStore = create<AppUiState>((set) => ({
  view: "invoices",
  isList: true,
  selectedInvoiceId: null,

  openForm: () => set({ view: "form" }),
  returnHome: () => set({ isList: true, view: "invoices" }),
  showInvoice: (invoiceId) => {
    console.log(`DEBUG - AppUi - store - invoiceId = `, invoiceId);
    set({ isList: false, selectedInvoiceId: invoiceId });
  },
}));

export default useAppUiStore;
