import InvoicesEmptyState from "./components/list/InvoicesEmptyState";
import InvoiceSummaryCard from "./components/list/SummaryCard";
import useInvoicesStore from "./store/useInvoicesStore";
import StatusBar from "./components/list/StatusBar";
import useAppUiStore from "@/store/useAppUiStore";

const InvoiceList = () => {
  const invoices = useInvoicesStore((state) => state.invoices);
  const filterStatus = useInvoicesStore((state) => state.filterStatus);
  const showInvoice = useAppUiStore((state) => state.showInvoice);

  const filteredList =
    filterStatus === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filterStatus);

  return (
    <div
      className=" h-full flex flex-col gap-4 px-6 pt-8 pb-26.25
                  md:px-12 md:pt-15.25 md:pb-43.25 
                  xl:px-63 xl:pt-19.25 xl:pb-67">
      <StatusBar />
      {filteredList.length > 0 ? (
        filteredList.map((invoice) => (
          <InvoiceSummaryCard
            key={invoice.id}
            invoice={invoice}
            onClick={() => showInvoice(invoice.id)}
          />
        ))
      ) : (
        <InvoicesEmptyState />
      )}
    </div>
  );
};

export default InvoiceList;
