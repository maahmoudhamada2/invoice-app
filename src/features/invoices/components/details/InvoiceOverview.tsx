import TextSection from "./TextSection";
import AddressItem from "./AddressItem";

interface OverviewProps {
  id: string;
  description: string;
  senderAddress: {
    street: string;
    country: string;
    city: string;
    postCode: string;
  };
}

const InvoiceOverview = ({ id, description, senderAddress }: OverviewProps) => {
  return (
    <section className="flex flex-col gap-7.5 md:flex-row md:justify-between">
      <TextSection
        heading={id}
        subHeading={description}
        gapSize="sm"
        isId={true}
      />
      <AddressItem {...senderAddress} />
    </section>
  );
};

export default InvoiceOverview;
