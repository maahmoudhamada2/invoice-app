import Button from "@/components/Button/Button";
import invoiceButtonsConfig from "../../config/invoiceButtons.config";

const CTAButtons = () => {
  const onClickEdit = () => console.log(`Edit invoice`);
  const onClickDelete = () => console.log(`Delete Invoice`);
  const onClickPaid = () => console.log(`Paid invoice`);
  return (
    <div
      className="w-full bg-white flex justify-end items-center gap-2 px-6 py-5.5
                 max-md:absolute max-md:bottom-0 max-md:left-0 md:rounded-md">
      <Button {...invoiceButtonsConfig.edit} onClick={onClickEdit} />
      <Button {...invoiceButtonsConfig.delete} onClick={onClickDelete} />
      <Button {...invoiceButtonsConfig.paid} onClick={onClickPaid} />
    </div>
  );
};
export default CTAButtons;
