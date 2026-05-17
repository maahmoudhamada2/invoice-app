import { useFieldArray, useForm } from "react-hook-form";
import { FormInput, FormOutput } from "../types/invoiceForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../schema/form.schema";
import z from "zod";
import useInvoicesStore from "../store/useInvoicesStore";
import useAppUiStore from "@/store/useAppUiStore";

const formInitValues: FormInput = {
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
  paymentTerms: "1",
  invoiceDate: "",
  items: [],
};

const useFormSetup = () => {
  let formData;
  const createNewInvoice = useInvoicesStore((state) => state.createNewInvoice);
  const closeForm = useAppUiStore((state) => state.closeForm);
  const methods = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: formData ?? formInitValues,
  });
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const handleSubmition = methods.handleSubmit((userInputs) => {
    createNewInvoice(userInputs);
    closeForm();
  });
  return {
    methods,
    handleSubmition,
    closeForm: () => closeForm(),
    item: { fields, append, remove },
  };
};

export default useFormSetup;
