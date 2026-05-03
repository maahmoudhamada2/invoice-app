import Header from "./components/Header";
import InvoiceForm from "./features/invoices/InvoiceForm.view";
import InvoicePage from "./features/invoices/InvoicePage.view";
import useAppUiStore from "./store/useAppUiStore";

const App = () => {
  const view = useAppUiStore((state) => state.view);
  const isOpenForm = useAppUiStore((state) => state.isOpenForm);
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <main className="w-full relative">
        {view === "invoices" && <InvoicePage />}
        {isOpenForm && <InvoiceForm />}
      </main>
    </div>
  );
};
export default App;
