import { UseFormRegister, FieldErrors } from "react-hook-form";
import formSchema from "../schema/form.schema";
import * as z from "zod";

export interface FormFieldType {
  container: {
    size: string;
  };
  label: {
    text: string;
  };
  input: {
    id: string;
    type: string;
    disabled: boolean;
  };
}

export type FormSchema = z.infer<typeof formSchema>;

export interface FormMethodsType {
  register: UseFormRegister<FormSchema>;
  onSubmit: (submitHandler?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<FormSchema>;
}
