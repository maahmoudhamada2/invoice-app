import clsx from "clsx";
import Header from "./components/Header";
import InvoiceForm from "./features/invoices/InvoiceForm.view";
import InvoicePage from "./features/invoices/InvoicePage.view";
import useAppUiStore from "./store/useAppUiStore";
import { useEffect } from "react";

const App = () => {
  const view = useAppUiStore((state) => state.view);
  const isOpenForm = useAppUiStore((state) => state.isOpenForm);
  const isDark = useAppUiStore((state) => state.isDark);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
  return (
    <div className="h-full flex flex-col xl:flex-row">
      <Header />
      <main
        className={clsx(
          `w-full flex-1 relative`,
          isOpenForm ? "overflow-hidden" : null,
        )}>
        {view === "invoices" && <InvoicePage />}
        {isOpenForm && <InvoiceForm />}
      </main>
    </div>
  );
};
export default App;
