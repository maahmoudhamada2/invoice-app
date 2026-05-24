import { ButtonShape, ButtonKeys } from "../types/buttons.types";
import plusIcon from "@/assets/icons/plus-icon.svg";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import deleteIcon from "@/assets/icons/delete-icon.svg";

const buttonConfigs: Record<ButtonKeys, ButtonShape> = {
  goBack: {
    content: { defaultTxt: "Go back" },
    attrbs: {
      type: "button",
      variant: "back",
      icon: arrowLeft,
    },
  },
  newInvoice: {
    content: {
      defaultTxt: "New Invoice",
      altTxt: "New",
    },
    attrbs: {
      variant: "primary",
      type: "button",
      icon: plusIcon,
    },
  },
  paid: {
    content: {
      defaultTxt: "Mark as Paid",
    },
    attrbs: {
      variant: "primary",
      type: "button",
    },
  },
  draft: {
    content: {
      defaultTxt: "Save as Draft",
    },
    attrbs: {
      variant: "secondary",
      type: "button",
    },
  },
  delete: {
    content: {
      defaultTxt: "Delete",
    },
    attrbs: {
      variant: "danger",
      type: "button",
    },
  },
  edit: {
    content: {
      defaultTxt: "Edit",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
    },
  },
  discard: {
    content: {
      defaultTxt: "Discard",
    },
    attrbs: {
      variant: "ghost",
      type: "reset",
    },
  },
  saveAndSend: {
    content: {
      defaultTxt: "Save & Send",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
    },
  },
  saveChanges: {
    content: {
      defaultTxt: "Save Changes",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
    },
  },
  cancel: {
    content: {
      defaultTxt: "Cancel",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
    },
  },
  addItem: {
    content: {
      defaultTxt: "+ Add New Item",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
    },
  },
  delItem: {
    attrbs: {
      type: "button",
      variant: "icon",
      icon: deleteIcon,
    },
  },
};

export default buttonConfigs;
