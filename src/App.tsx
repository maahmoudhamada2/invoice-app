import Header from "./components/Header";
import InvoiceForm from "./features/invoices/InvoiceForm.view";

const App = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <main className="relative">
        <InvoiceForm />
      </main>
    </div>
  );
};
export default App;
