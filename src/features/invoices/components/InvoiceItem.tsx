import { InvoiceDataType } from "../types/invoiceList.types";
import InvoiceSummaryCard from "./InvoiceSummaryCard";

const InvoiceItem = ({ invoice }: { invoice: InvoiceDataType }) => {
  const onClick = () => {
    console.log(`Show invoice ${invoice.id}`);
  };
  return (
    <InvoiceSummaryCard
      key={invoice.id}
      clientName={invoice.clientName}
      invoiceId={invoice.id}
      status={invoice.status}
      onClick={onClick}
    />
  );
};

export default InvoiceItem;
