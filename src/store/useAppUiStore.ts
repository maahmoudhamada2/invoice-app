import { create } from "zustand";
import { persist } from "zustand/middleware";

type View = "invoices" | "form" | "details";

interface AppUiState {
  theme: "light" | "dark";
  view: View;
  isList: boolean;
  isDelPrompt: boolean;
  selectedInvoiceId: string | null;
  isOpenForm: boolean;
  isEdit: boolean;
  form: {
    isOpen: boolean;
    scrollPos: number;
    isBottom: boolean;
    isHide: boolean;
  };
  openForm: (formMode: "create" | "edit") => void;
  handleFormScroll: (event: Event) => void;
  closeForm: () => void;
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
      isOpenForm: false,
      isEdit: false,
      theme: "light",
      form: {
        isOpen: false,
        scrollPos: 0,
        isBottom: false,
        isHide: false,
      },
      openForm: (formMode) =>
        set((state) => ({
          isEdit: formMode === "edit",
          form: { ...state.form, isOpen: true },
        })),
      handleFormScroll: (event) => {
        const targetElem = event.target as HTMLElement;
        const currentScrollPos = targetElem.scrollTop;
        return set((state) => ({
          form: {
            ...state.form,
            scrollPos: currentScrollPos,
            isHide: currentScrollPos > state.form.scrollPos,
            isBottom:
              Math.abs(
                targetElem.scrollHeight -
                  targetElem.clientHeight -
                  targetElem.scrollTop,
              ) <= 1,
          },
        }));
      },
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
