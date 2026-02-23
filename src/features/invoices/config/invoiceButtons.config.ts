import { InvoiceButtonsType } from "../types/invoiceButtons.types";
import plusIcon from "@/assets/icons/plus-icon.svg";

const invoiceButtonsConfig: InvoiceButtonsType = {
  newInvoice: {
    content: {
      defaultText: "New Invoice",
      altText: "New",
    },
    feats: {
      variant: "primary",
      type: "submit",
      icon: plusIcon,
    },
  },
  paid: {
    content: {
      defaultText: "Mark as Paid",
    },
    feats: {
      variant: "primary",
      type: "button",
    },
  },
  draft: {
    content: {
      defaultText: "Save as Draft",
    },
    feats: {
      variant: "secondary",
      type: "button",
    },
  },
  delete: {
    content: {
      defaultText: "Delete",
    },
    feats: {
      variant: "danger",
      type: "button",
    },
  },
  edit: {
    content: {
      defaultText: "Edit",
    },
    feats: {
      variant: "ghost",
      type: "button",
    },
  },
  discard: {
    content: {
      defaultText: "Discard",
    },
    feats: {
      variant: "ghost",
      type: "reset",
    },
  },
  saveAndSend: {
    content: {
      defaultText: "Save & Send",
    },
    feats: {
      variant: "primary",
      type: "button",
    },
  },
  saveChanges: {
    content: {
      defaultText: "Save Changes",
    },
    feats: {
      variant: "primary",
      type: "button",
    },
  },
  cancel: {
    content: {
      defaultText: "Cancel",
    },
    feats: {
      variant: "ghost",
      type: "button",
    },
  },
  newItem: {
    content: {
      defaultText: "+ Add New Item",
    },
    feats: {
      variant: "ghost",
      type: "button",
    },
  },
};

export default invoiceButtonsConfig;
