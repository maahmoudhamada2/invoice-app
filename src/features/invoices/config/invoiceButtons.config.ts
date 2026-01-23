import { InvoiceButtonsType } from "../types/invoiceButtons.types";
import plusIcon from "@/assets/icons/plus-icon.svg";

const invoiceButtonsConfig: InvoiceButtonsType = {
  newInvoice: {
    label: "New Invoice",
    altLabel: "New",
    variant: "primary",
    icon: plusIcon,
  },
  paid: {
    label: "Mark as Paid",
    variant: "primary",
  },
  draft: {
    label: "Save as Draft",
    variant: "secondary",
  },
  delete: {
    label: "Delete",
    variant: "danger",
  },
  edit: {
    label: "Edit",
    variant: "ghost",
  },
  discard: {
    label: "Discard",
    variant: "ghost",
  },
  saveAndSend: {
    label: "Save & Send",
    variant: "primary",
  },
  saveChanges: {
    label: "Save Changes",
    variant: "primary",
  },
  cancel: {
    label: "Cancel",
    variant: "ghost",
  },
  newItem: {
    label: "+ Add New Item",
    variant: "ghost",
  },
};

export default invoiceButtonsConfig;
