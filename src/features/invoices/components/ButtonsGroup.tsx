import Button from "@/components/Button/Button";
import invoiceButtonsConfig from "../config/invoiceButtons.config";
import useAppUiStore from "@/store/useAppUiStore";
import useInvoicesStore from "../store/useInvoicesStore";

const ButtonsGroup = ({
  groupKey,
}: {
  groupKey: "read" | "edit" | "delete" | "create";
}) => {
  const toggleDelPrompt = useAppUiStore((state) => state.toggleDelPrompt);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);
  const delInvoice = useInvoicesStore((state) => state.delInvoice);
  const returnHome = useAppUiStore((state) => state.returnHome);
  const btnsGroup = {
    read: [
      {
        ...invoiceButtonsConfig.edit,
        onClick: () => console.log("Edit Invoice"),
      },

      {
        ...invoiceButtonsConfig.delete,
        onClick: () => toggleDelPrompt(),
      },
      {
        ...invoiceButtonsConfig.paid,
        onClick: () => console.log("paid"),
      },
    ],
    create: [
      {
        ...invoiceButtonsConfig.discard,
        onClick: () => console.log(`discard invoice`),
      },
      {
        ...invoiceButtonsConfig.draft,
        onClick: () => console.log("Drafting invoice"),
      },
      {
        ...invoiceButtonsConfig.saveAndSend,
        onClick: () => console.log("Saving invoice"),
      },
    ],
    edit: [
      {
        ...invoiceButtonsConfig.cancel,
        onClick: () => console.log(`Cancel Invoice`),
      },
      {
        ...invoiceButtonsConfig.saveChanges,
        onClick: () => console.log("Save changes"),
      },
    ],
    delete: [
      {
        ...invoiceButtonsConfig.cancel,
        onClick: () => toggleDelPrompt(),
      },
      {
        ...invoiceButtonsConfig.delete,
        onClick: () => {
          delInvoice(selectedInvoiceId);
          toggleDelPrompt();
          returnHome();
        },
      },
    ],
  };

  const btns = btnsGroup[groupKey];
  return (
    <div
      className="w-full bg-white flex justify-end items-center gap-2 px-6 py-5.5
                 max-md:absolute max-md:bottom-0 max-md:left-0 md:rounded-md">
      {btns.map((btn, idx) => (
        <Button key={`btn-${idx + 1}`} {...btn} />
      ))}
    </div>
  );
};
export default ButtonsGroup;
