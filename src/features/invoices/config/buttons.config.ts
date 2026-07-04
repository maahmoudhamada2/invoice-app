import { ButtonShape, ButtonKeys } from "../types/buttons.types";
import plusIcon from "@/assets/icons/plus-icon.svg";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import deleteIcon from "@/assets/icons/delete-icon.svg";

const blockPad = "pt-4.5 pb-3.75";

const buttonConfigs: Record<ButtonKeys, ButtonShape> = {
  goBack: {
    content: { defaultTxt: "Go back" },
    attrbs: {
      type: "button",
      variant: "back",
      disabled: false,
      customStyle: "self-start gap-6",
      icon: { url: arrowLeft },
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
      disabled: false,
      icon: {
        url: plusIcon,
        customStyle: "w-8 bg-white aspect-square rounded-full ",
      },
      customStyle:
        "sm:min-w-22.5 p-1.5 pr-3.75 gap-2 md:min-w-37.5 md:p-2 md:pr-4.25 md:gap-4",
    },
  },
  paid: {
    content: {
      defaultTxt: "Mark as Paid",
      altTxt: "Paid",
    },
    attrbs: {
      variant: "primary",
      type: "button",
      disabled: false,
      customStyle: `sm:min-w-37.25 ${blockPad} pr-7 pl-6.75 md:min-w-32.75 md:pr-5.75 md:pl-6`,
    },
  },
  draft: {
    content: {
      defaultTxt: "Save as Draft",
    },
    attrbs: {
      variant: "secondary",
      type: "button",
      disabled: false,
      customStyle: `sm:min-w-29.25 ${blockPad} pr-3.5 pl-4 md:min-w-33.25 md:pr-5.5 md:pl-6`,
    },
  },
  delete: {
    content: {
      defaultTxt: "Delete",
    },
    attrbs: {
      variant: "danger",
      type: "button",
      disabled: false,
      customStyle: `sm:min-w-22.5 ${blockPad} pr-6.25 pl-6`,
    },
  },
  edit: {
    content: {
      defaultTxt: "Edit",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
      customStyle: `sm:min-w-18.25 ${blockPad} pr-5.75 pl-6`,
    },
  },
  discard: {
    content: {
      defaultTxt: "Discard",
    },
    attrbs: {
      variant: "ghost",
      type: "reset",
      disabled: false,
      customStyle: `sm:min-w-21 ${blockPad} pr-6.25 pl-6 md:pr-4.75 md:pl-4.5 md:min-w-24 md:nth-1:absolute md:left-14`,
    },
  },
  saveAndSend: {
    content: {
      defaultTxt: "Save & Send",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
      disabled: false,
      customStyle: `sm:min-w-28 ${blockPad} pr-3.75 pl-4 md:pr-5.75 md:pl-6 md:min-w-32`,
    },
  },
  saveChanges: {
    content: {
      defaultTxt: "Save Changes",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
      disabled: false,
      customStyle: `min-w-34.5 ${blockPad} pr-5.75 pl-6`,
    },
  },
  cancel: {
    content: {
      defaultTxt: "Cancel",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
      customStyle: `min-w-24 ${blockPad} px-[26.5px]`,
    },
  },
  addItem: {
    content: {
      defaultTxt: "+ Add New Item",
      altTxt: "+ Add Item",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
      customStyle: `self-center ${blockPad} pr-26.75 pl-27 xs:min-w-20 sm:min-w-105  md:w-126`,
    },
  },
  delItem: {
    attrbs: {
      type: "button",
      variant: "icon",
      disabled: false,
      customStyle: "pt-6",
      icon: { url: deleteIcon },
    },
  },
};

export default buttonConfigs;
