import type { ButtonProps } from "@/components/Button/button.types";

export type ButtonFeats = Omit<ButtonProps, "onClick">;

export type InvoiceButtonsType = {
  newInvoice: ButtonFeats;
  paid: ButtonFeats;
  draft: ButtonFeats;
  delete: ButtonFeats;
  edit: ButtonFeats;
  discard: ButtonFeats;
  saveAndSend: ButtonFeats;
  saveChanges: ButtonFeats;
  cancel: ButtonFeats;
  newItem: ButtonFeats;
};
