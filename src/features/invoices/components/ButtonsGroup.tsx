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
  const updateInvStatus = useInvoicesStore((state) => state.updateInvStatus);
  const openForm = useAppUiStore((state) => state.openForm);
  const closeForm = useAppUiStore((state) => state.closeForm);
  const invoices = useInvoicesStore((state) => state.invoices);

  const selectedInvoice = invoices.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );

  const btnsGroup = {
    read: [
      {
        ...invoiceButtonsConfig.edit,
        onClick: () => openForm("edit"),
      },

      {
        ...invoiceButtonsConfig.delete,
        onClick: () => toggleDelPrompt(),
      },

      selectedInvoice && selectedInvoice.status === "pending"
        ? {
            ...invoiceButtonsConfig.paid,
            onClick: () => updateInvStatus(selectedInvoiceId, "paid"),
          }
        : {
            ...invoiceButtonsConfig.unpaid,
            onClick: () => updateInvStatus(selectedInvoiceId, "pending"),
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
        onClick: () => closeForm(),
      },
      {
        ...invoiceButtonsConfig.saveChanges,
        onClick: () => {},
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
