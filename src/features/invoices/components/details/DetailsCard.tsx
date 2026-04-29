import TextSection from "./TextSection";
import StatusBadge from "../StatusBadge";
import AddressItem from "./AddressItem";
import { InvoiceDataType } from "../../types/invoiceList.types";
import ItemsContainer from "./ItemsContainer";
import ButtonsGroup from "../ButtonsGroup";
import DeletePrompt from "./DeletePrompt";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import useAppUiStore from "@/store/useAppUiStore";

const DetailsCard = ({ invoice }: { invoice: InvoiceDataType }) => {
  const returnHome = useAppUiStore((state) => state.returnHome);
  const isDelPrompt = useAppUiStore((state) => state.isDelPrompt);
  return (
    <>
      <div className="flex flex-col gap-6 md:pb-33.75 xl:pb-13.5">
        <header className="flex flex-col gap-7.75">
          <button
            onClick={() => returnHome()}
            className="cursor-pointer text-body-bold flex items-center gap-6 hover:text-muted">
            <img
              src={arrowLeft}
              alt="A blue magnet arrow points to left side"
            />
            Go back
          </button>
          <div className="flex w-full bg-white rounded-md">
            <div className="w-full p-6 pb-6.75 rounded-md bg-white flex items-baseline max-md:justify-between md:gap-5  ">
              <p className="text-[#858BB2] text-body">Status</p>
              <StatusBadge status={invoice.status} />
            </div>
            <ButtonsGroup groupKey={"read"} />
          </div>
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
      {isDelPrompt && <DeletePrompt />}
    </>
  );
};

export default DetailsCard;
