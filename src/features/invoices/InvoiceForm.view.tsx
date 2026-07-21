import { FormProvider } from "react-hook-form";
import useFormSetup from "./hooks/useFormSetup";
import {
  FormScrollArea,
  Header,
  FormFields,
  FormError,
  FormActions,
} from "./components/Form";

const InvoiceForm = () => {
  const {
    isEdit,
    selectedInvoiceId,
    formFields,
    handlers,
    methods,
    closeForm,
    handleSubmition,
    errors,
  } = useFormSetup();
  return (
    <div
      onClick={closeForm}
      className="flex flex-col w-full h-full bg-backdrop absolute top-0 z-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmition}
          className="relative w-full h-full flex flex-col bg-form 
                     md:w-[80%] md:rounded-tr-lg md:rounded-br-lg xl:w-[50%]">
          <FormScrollArea>
            <Header isEdit={isEdit} invoiceId={selectedInvoiceId} />
            <FormFields fieldSets={formFields} itemHandlers={handlers.items} />
            <FormError errors={errors} />
          </FormScrollArea>
          <FormActions isEdit={isEdit} handlers={handlers.form} />
        </form>
      </FormProvider>
    </div>
  );
};

export default InvoiceForm;
