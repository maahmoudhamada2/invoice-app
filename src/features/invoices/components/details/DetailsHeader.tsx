import useCrudButtons from "../../hooks/useCrudButtons";
import useAppUiStore from "@/store/useAppUiStore";
import StatusBadge from "../StatusBadge";
import ButtonsGroup from "../ButtonsGroup";
import Button from "@/components/Button/Button";
import useActionButtons from "../../hooks/useSingleButtons";
import { InvoiceStatus } from "../../types/invoiceList.types";

const DetailsHeader = ({ status }: { status: InvoiceStatus }) => {
  const readButtons = useCrudButtons("read");
  const goBack = useActionButtons("goBack");
  const returnHome = useAppUiStore((state) => state.returnHome);
  return (
    <header className="flex flex-col gap-7.75">
      <Button {...goBack} onClick={() => returnHome} />
      <div className="bg-surface shadow-surface flex justify-between rounded-md">
        <div
          className="max-md:w-full px-6 pt-9.25 pb-9.75 
                     flex items-center max-md:justify-between md:gap-5">
          <p className="text-[#858bb2] text-body">Status</p>
          <StatusBadge status={status} />
        </div>
        <ButtonsGroup
          buttons={readButtons}
          style="max-md:-mx-[24px] bg-surface max-md:absolute max-md:bottom-0"
        />
      </div>
    </header>
  );
};
export default DetailsHeader;
