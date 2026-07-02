import clsx from "clsx";
import Header from "./components/Header";
import InvoiceForm from "./features/invoices/InvoiceForm.view";
import InvoicePage from "./features/invoices/InvoicePage.view";
import useAppUiStore from "./store/useAppUiStore";
import { useEffect } from "react";
import InvoiceDetails from "./features/invoices/InvoiceDetails.view";
import useInvoicesStore from "./features/invoices/store/useInvoicesStore";

const App = () => {
  const view = useAppUiStore((state) => state.view);
  // const isOpenForm = useAppUiStore((state) => state.isOpenForm);
  const form = useAppUiStore((state) => state.form);
  const theme = useAppUiStore((state) => state.theme);
  const invoices = useInvoicesStore((state) => state.invoices);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const targetInvoice = invoices.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );

  return (
    <div className="h-full flex flex-col xl:flex-row">
      <Header />
      <main
        className={clsx(
          `w-full flex-1 relative`,
          form.isOpen ? "overflow-hidden" : null,
        )}>
        {view === "invoices" && <InvoicePage />}
        {form.isOpen && <InvoiceForm />}
        {view === "details" && targetInvoice && (
          <InvoiceDetails invoice={targetInvoice} />
        )}
      </main>
    </div>
  );
};
export default App;
