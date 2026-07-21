import { useFieldArray, useForm } from "react-hook-form";
import type { FormSchema } from "../types/invoiceForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../schema/form.schema";
import useInvoicesStore from "../store/useInvoicesStore";
import useAppUiStore from "@/store/useAppUiStore";
import { invoiceToForm } from "../utils/formDataConverter";
import {
  FORM_INIT_VALUES,
  ITEMS_INIT_VALUES,
} from "../constants/invoiceForm.constants";
import invoiceFields from "../config/invoiceFields.config";
import { useMemo } from "react";

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

  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formData ?? FORM_INIT_VALUES,
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;
  const fieldArrControls = useFieldArray({ control, name: "items" });

  const handleSubmition = handleSubmit((userInputs) => {
    isEdit
      ? updateInvoice(selectedInvoiceId, userInputs)
      : createNewInvoice(userInputs, "pending");
    closeForm();
  });

  const fieldArrayIds = fieldArrControls.fields.map((field) => field.id);
  const formFields = useMemo(
    () => invoiceFields(fieldArrayIds),
    [fieldArrControls.fields],
  );

  const handlers = {
    form: {
      create: {
        saveAndSend: handleSubmition,
        draft: () => {
          const userInputs = getValues();
          createNewInvoice(userInputs, "draft");
          closeForm();
        },
      },
      edit: {
        saveChanges: handleSubmition,
      },
    },
    items: {
      addItem: () => fieldArrControls.append(ITEMS_INIT_VALUES),
      deleteItem: (idx: number) => fieldArrControls.remove(idx),
    },
  };

  return {
    isEdit,
    selectedInvoiceId,
    methods,
    handleSubmition,
    closeForm: () => closeForm(),
    formFields,
    handlers,
    errors,
  };
};

export default useFormSetup;
