import { format } from "date-fns";
import TextSection from "./TextSection";
import AddressItem from "./AddressItem";

interface BillingProps {
  dates: { createdAt: string; paymentDue: string };
  clientInfo: {
    name: string;
    email: string;
    address: {
      city: string;
      country: string;
      postCode: string;
      street: string;
    };
  };
}
const InvoiceBilling = ({ dates, clientInfo }: BillingProps) => {
  const createdAt = format(new Date(dates.createdAt), "dd MMM yyyy");
  const paymentDue = format(new Date(dates.paymentDue), "dd MMM yyyy");
  return (
    <section className="flex flex-wrap gap-x-[clamp(5px,20vw,80px)] gap-y-8 md:justify-between">
      <div className="flex flex-col gap-7.75">
        <TextSection
          heading="Invoice Date"
          subHeading={createdAt}
          gapSize="lg"
          isDate={true}
        />
        <TextSection
          heading="Payment Due"
          subHeading={paymentDue}
          gapSize="lg"
          isDate={true}
        />
      </div>
      <div className="flex flex-col gap-1.75">
        <TextSection
          heading="Bill To"
          subHeading={clientInfo.name}
          gapSize="lg"
        />
        <AddressItem {...clientInfo.address} />
      </div>
      <TextSection
        heading="Sent to"
        subHeading={clientInfo.email}
        gapSize="lg"
      />
    </section>
  );
};

export default InvoiceBilling;
