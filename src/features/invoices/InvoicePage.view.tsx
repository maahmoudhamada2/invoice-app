import InvoicesList from "./components/InvoicesList";
import useInvoicesStore from "./store/useInvoicesStore";

const InvoicePage = () => {
  const invoices = useInvoicesStore((state) => state.invoices);
  const filterStatus = useInvoicesStore((state) => state.filterStatus);

  return (
    <div className=" h-full flex flex-col px-6 pt-8 pb-26.25 gap-8 xl:px-63">
      <InvoicesList
        invoices={
          filterStatus === "all"
            ? invoices
            : invoices.filter((invoice) => invoice.status === filterStatus)
        }
      />
    </div>
  );
};

export default InvoicePage;
