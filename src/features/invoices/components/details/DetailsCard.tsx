import TextSection from "./TextSection";
import StatusBadge from "../StatusBadge";
import AddressItem from "./AddressItem";
import { InvoiceDataType } from "../../types/invoiceList.types";
import ItemsContainer from "./ItemsContainer";
import CTAButtons from "./CTAButtons";

const DetailsCard = ({ invoice }: { invoice: InvoiceDataType }) => {
  return (
    <>
      <div className="md:pb-33.75 xl:pb-13.5">
        <header className="bg-white flex max-md:flex-col justify-between items-start gap-7.75 mb-4 rounded-md">
          <div className="w-full p-6 pb-6.75 rounded-md bg-white flex items-baseline max-md:justify-between md:gap-5  ">
            <p className="text-[#858BB2] text-body">Status</p>
            <StatusBadge status={invoice.status} />
          </div>
          <CTAButtons />
        </header>
        <div
          className="bg-white p-6 rounded-md flex flex-col gap-y-7.75 
                       md:px-8">
          <div className="flex flex-col gap-7.5 md:flex-row md:justify-between">
            <TextSection
              heading={invoice.id}
              subHeading={invoice.description}
              gapSize={"sm"}
              isId={true}
            />
            <AddressItem {...invoice.senderAddress} />
          </div>
          <div className="flex flex-wrap justify-betwee gap-x-[clamp(16px,18vw,200px)] gap-y-8">
            <div className="flex flex-col justify-between">
              <TextSection
                heading="Invoice Date"
                subHeading="21 Aug 2021"
                gapSize="lg"
                isDate={true}
              />
              <TextSection
                heading="Payment Due"
                subHeading="20 Sep 2021"
                gapSize="lg"
                isDate={true}
              />
            </div>
            <div className="flex flex-col gap-1.75">
              <TextSection
                heading="Bill To"
                subHeading={invoice.clientName}
                gapSize="lg"
              />
              <AddressItem {...invoice.clientAddress} />
            </div>

            <TextSection
              heading="Sent to"
              subHeading={invoice.clientEmail}
              gapSize="lg"
            />
          </div>
          <ItemsContainer
            key={`Items-${invoice.id}`}
            items={invoice.items}
            total={invoice.total}
          />
        </div>
        <div className="w-full h-35 md:hidden"></div>
      </div>
      {/* {del && <DeletePrompt invoiceId={invoice.id} />} */}
    </>
  );
};

export default DetailsCard;
