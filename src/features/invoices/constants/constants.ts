import { CRUD } from "../types/buttons.types";

export const crudButtons = {
  read: ["edit", "delete", "paid"],
  create: ["discard", "draft", "saveAndSend"],
  edit: ["cancel", "saveChanges"],
  delete: ["cancel", "delete"],
} satisfies {
  [Mode in keyof CRUD]: CRUD[Mode][];
};

export const modifiersClassNames = {
  button_next: "text-brand cursor-pointer",
  button_previous: "text-brand cursor-pointer",
  caption_label: "font-bold text-[16px]",
  outside: "hover:text-brand hover:opacity-100 opacity-27",
} as const;
