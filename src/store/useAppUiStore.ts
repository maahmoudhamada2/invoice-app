import { create } from "zustand";
import { persist } from "zustand/middleware";

type View = "invoices" | "form" | "details";

interface AppUiState {
  theme: "light" | "dark";
  view: View;
  isList: boolean;
  isDelPrompt: boolean;
  selectedInvoiceId: string | null;
  isEdit: boolean;
  form: {
    isOpen: boolean;
    isBottom: boolean;
    isFormChromeHidden: boolean;
    isFocusInp: boolean;
  };
  openForm: (formMode: "create" | "edit") => void;
  updateFormScrollState: (
    isScrollingDown: boolean,
    isBottom: boolean,
    isAtTop: boolean,
  ) => void;
  closeForm: () => void;
  formInpFocus: () => void;
  formInpBlur: () => void;
  returnHome: () => void;
  showInvoice: (invoiceId: string) => void;
  toggleDelPrompt: () => void;
  toggleDarkMode: () => void;
}

const useAppUiStore = create<AppUiState>()(
  persist(
    (set, get) => ({
      view: "invoices",
      isList: true,
      isDelPrompt: false,
      selectedInvoiceId: null,
      isEdit: false,
      theme: "light",
      form: {
        isOpen: false,
        isBottom: false,
        isFormChromeHidden: false,
        isFocusInp: false,
      },
      openForm: (formMode) =>
        set((state) => ({
          isEdit: formMode === "edit",
          form: { ...state.form, isOpen: true },
        })),
      updateFormScrollState: (isScrollingDown, isBottom, isAtTop) =>
        set((state) => ({
          form: {
            ...state.form,
            isFormChromeHidden: isScrollingDown && !isBottom && !isAtTop,
            isBottom: isBottom,
          },
        })),
      formInpFocus: () =>
        set((state) => ({ form: { ...state.form, isFocusInp: true } })),
      formInpBlur: () =>
        set((state) => ({ form: { ...state.form, isFocusInp: false } })),
      closeForm: () =>
        set((state) => ({ form: { ...state.form, isOpen: false } })),
      returnHome: () => set({ isList: true, view: "invoices" }),
      showInvoice: (invoiceId) => {
        set({ view: "details", isList: false, selectedInvoiceId: invoiceId });
      },
      toggleDelPrompt: () =>
        set((state) => ({ isDelPrompt: !state.isDelPrompt })),
      toggleDarkMode: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme", partialize: (state) => ({ theme: state.theme }) },
  ),
);
export default useAppUiStore;
