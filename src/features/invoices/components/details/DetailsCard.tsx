import { InvoiceDataType } from "../../types/invoiceList.types";
import InvoiceBilling from "./InvoiceBilling";
import InvoiceOverview from "./InvoiceOverview";
import ItemsContainer from "./items/ItemsContainer";

const DetailsCard = ({ invoice }: { invoice: InvoiceDataType }) => {
  return (
    <div className="bg-surface shadow-surface rounded-md flex flex-col gap-7.75 px-6 py-6.25">
      <InvoiceOverview
        id={invoice.id}
        description={invoice.description}
        senderAddress={invoice.senderAddress}
      />
      <InvoiceBilling
        dates={{
          createdAt: invoice.createdAt,
          paymentDue: invoice.paymentDue,
        }}
        clientInfo={{
          name: invoice.clientName,
          email: invoice.clientEmail,
          address: invoice.clientAddress,
        }}
      />
      {invoice.items.length > 0 && (
        <ItemsContainer items={invoice.items} total={invoice.total} />
      )}
    </div>
  );
};

export default DetailsCard;
