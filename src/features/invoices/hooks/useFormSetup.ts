import { useFieldArray, useForm } from "react-hook-form";
import { FormSchema, FormInput, FormOutput } from "../types/invoiceForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../schema/form.schema";
import useInvoicesStore from "../store/useInvoicesStore";
import useAppUiStore from "@/store/useAppUiStore";
import { invoiceToForm } from "../utils/formDataConverter";

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
  const invoices = useInvoicesStore((state) => state.invoices);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);
  const createNewInvoice = useInvoicesStore((state) => state.createNewInvoice);
  const updateInvoice = useInvoicesStore((state) => state.updateInvoice);
  const closeForm = useAppUiStore((state) => state.closeForm);
  const isEdit = useAppUiStore((state) => state.isEdit);

  let formData: FormSchema | undefined;
  if (selectedInvoiceId && isEdit) {
    const selectedInvoice = invoices.find(
      (invoice) => invoice.id === selectedInvoiceId,
    );
    if (selectedInvoice) formData = invoiceToForm(selectedInvoice);
  }
  const methods = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: formData ?? formInitValues,
  });
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const handleSubmition = methods.handleSubmit((userInputs) => {
    isEdit
      ? updateInvoice(selectedInvoiceId, userInputs)
      : createNewInvoice(userInputs);
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
