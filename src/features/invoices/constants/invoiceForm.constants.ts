import type { FormItemSchema, FormSchema } from "../types/invoiceForm.types";

export const FORM_INIT_VALUES: FormSchema = {
  clientName: "",
  clientEmail: "",
  clientStreet: "",
  clientCountry: "",
  clientCity: "",
  clientPostCode: "",
  senderStreet: "",
  senderCountry: "",
  senderCity: "",
  senderPostCode: "",
  projectDesc: "",
  paymentTerms: 1,
  invoiceDate: "",
  items: [],
} as const;

export const ITEMS_INIT_VALUES: FormItemSchema = {
  name: "",
  price: 0,
  quantity: 1,
  total: 0,
} as const;

export const ERROR_MESSAGES = {
  ALL_FIELDS_REQUIRED: "- All fields must be added",
};

export const FIELD_SETS_KEYS = ["sender", "client", "meta", "items"] as const;

export type FieldSetKeys = (typeof FIELD_SETS_KEYS)[number];
