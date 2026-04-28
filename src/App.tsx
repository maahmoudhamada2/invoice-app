import Header from "./components/Header";
import InvoiceForm from "./features/invoices/InvoiceForm.view";
import InvoicePage from "./features/invoices/InvoicePage.view";

const App = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <main className="relative">
        <InvoicePage />
        <InvoiceForm />
      </main>
    </div>
  );
};
export default App;
