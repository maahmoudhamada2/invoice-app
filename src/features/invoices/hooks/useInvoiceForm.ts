import formSchema from "../schema/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormMethodsType, FormSchema } from "../types/invoiceForm.types";
import { useForm, SubmitHandler } from "react-hook-form";

const useInvoiceForm = (): FormMethodsType => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitHandler: SubmitHandler<FormSchema> = (formData) =>
    console.log(formData);
  const onSubmit = handleSubmit(submitHandler);
  return { register, onSubmit, errors };
};

export default useInvoiceForm;
