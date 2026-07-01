import { InvoiceDataType } from "./types/invoiceList.types";
import useAppUiStore from "@/store/useAppUiStore";
import DeletePrompt from "./components/details/DeletePrompt";
import DetailsHeader from "./components/details/DetailsHeader";
import DetailsCard from "./components/details/DetailsCard";

const InvoiceDetails = ({ invoice }: { invoice: InvoiceDataType }) => {
  const isDelPrompt = useAppUiStore((state) => state.isDelPrompt);
  return (
    <>
      <article
        className="relative z-1 px-6 pt-8.25 pb-42.5 
                          flex flex-col gap-4  
                          md:px-10 xl:px-63">
        <DetailsHeader status={invoice.status} />
        <DetailsCard invoice={invoice} />
      </article>
      {isDelPrompt && <DeletePrompt />}
    </>
  );
};

export default InvoiceDetails;
