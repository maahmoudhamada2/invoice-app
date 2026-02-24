import Button from "@/components/Button/Button";
import invoiceButtonsConfig from "../config/invoiceButtons.config";

const ButtonsGroup = ({
  groupKey,
}: {
  groupKey: "read" | "edit" | "delete" | "create";
}) => {
  const btnsGroup = {
    read: [
      {
        ...invoiceButtonsConfig.edit,
        onClick: () => console.log("Edit Invoice"),
      },

      {
        ...invoiceButtonsConfig.delete,
        onClick: () => console.log("Delete invoice"),
      },
      {
        ...invoiceButtonsConfig.paid,
        onClick: () => console.log("Paid Invoice"),
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
        onClick: () => console.log("Cancel invoice deletion"),
      },
      {
        ...invoiceButtonsConfig.delete,
        onClick: () => console.log("Deleting Invoice"),
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
