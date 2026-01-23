import invoiceButtonsConfig from "../config/invoiceButtons.config";
import Button from "../../../components/Button/Button";
import arrowDownIcon from "@/assets/icons/arrow-down-icon.svg";

const StatusBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-0.75 md:gap-1.5">
        <h1 className="text-heading text-main">Invoices</h1>
        <p className="text-subtle dark:text-muted text-body">
          <span className="md:hidden"> 7 invoices</span>
          <span className="max-md:hidden">There are 7 total invoices</span>
        </p>
      </div>
      <div className="flex items-center gap-4.5">
        <div className="flex items-center gap-x-[clamp(12px,1vw,14px)]">
          <p className="text-main text-body-bold">
            Filter <span className="max-md:hidden">by status</span>
          </p>
          <img src={arrowDownIcon} />
        </div>
        <Button
          {...invoiceButtonsConfig.newInvoice}
          onClick={() => console.log(`Creating new Invoice`)}
        />
      </div>
    </div>
  );
};

export default StatusBar;
