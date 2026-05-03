import { create } from "zustand";

type View = "invoices" | "form" | "details";

interface AppUiState {
  view: View;
  isList: boolean;
  isDelPrompt: boolean;
  selectedInvoiceId: string | null;
  isOpenForm: boolean;
  openForm: () => void;
  closeForm: () => void;
  returnHome: () => void;
  showInvoice: (invoiceId: string) => void;
  toggleDelPrompt: () => void;
}

const useAppUiStore = create<AppUiState>((set) => ({
  view: "invoices",
  isList: true,
  isDelPrompt: false,
  selectedInvoiceId: null,
  isOpenForm: false,

  openForm: () => set({ isOpenForm: true }),
  closeForm: () => set({ isOpenForm: false }),
  returnHome: () => set({ isList: true, view: "invoices" }),
  showInvoice: (invoiceId) => {
    console.log(`DEBUG - AppUi - store - invoiceId = `, invoiceId);
    set({ isList: false, selectedInvoiceId: invoiceId });
  },
  toggleDelPrompt: () => set((state) => ({ isDelPrompt: !state.isDelPrompt })),
}));

export default useAppUiStore;
