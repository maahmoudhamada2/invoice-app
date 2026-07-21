import formSchema, { formItemSchema } from "../schema/form.schema";
import { FieldPath } from "react-hook-form";

import * as z from "zod";

export type FormSchema = z.infer<typeof formSchema>;
export type FormItemSchema = z.infer<typeof formItemSchema>;
export type PaymentTerms = 1 | 7 | 14 | 30;

type BaseInput = {
  id: FieldPath<FormSchema>;
  disabled: boolean;
};

type StandardInput = BaseInput & {
  type: "text" | "number" | "email" | "date";
  options?: never;
};

type SelectInput = BaseInput & {
  type: "select";
  options: {
    type: "text" | "number";
    data: { label: string; value: number | string }[];
  };
};

export type FormField = {
  container: {
    size: string;
  };
  label: {
    text: string;
  };
  input: StandardInput | SelectInput;
};

export type FieldSetShape = {
  title?: string;
  setFields: FormField[] | Record<string, FormField[]>;
};
