import { create } from "zustand";

type View = "list" | "form" | "details";

interface AppUiState {
  view: View;
  openForm: () => void;
  returnHome: () => void;
}

const useAppUiStore = create<AppUiState>((set) => ({
  view: "list",
  openForm: () => set({ view: "form" }),
  returnHome: () => set({ view: "list" }),
}));

export default useAppUiStore;
