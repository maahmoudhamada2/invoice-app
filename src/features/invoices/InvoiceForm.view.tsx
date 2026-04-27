import ButtonsGroup from "./components/ButtonsGroup";
import FieldSet from "./components/form/FieldSet";
import ProjectItems from "./components/form/ProjectItems";
import invoiceFieldsConfig from "./config/invoiceFields.config";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import useInvoiceForm from "./hooks/useInvoiceForm";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "./schema/form.schema";
import useInvoicesStore from "./store/useInvoicesStore";

const InvoiceForm = () => {
  // const formMethods = useInvoiceForm();
  const methods = useForm({ resolver: zodResolver(formSchema) });
  const createNewInvoice = useInvoicesStore((state) => state.createNewInvoice);

  return (
    <div className="px-6 pt-8.25 flex flex-col gap-5.5">
      <header className="flex flex-col gap-6.5 text-main">
        <button className="text-body-bold flex items-center gap-6">
          <img src={arrowLeft} alt="A blue magnet arrow points to left side" />
          Go back
        </button>
        <h2 className="text-heading">New Invoice</h2>
      </header>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => createNewInvoice(data))}
          className="">
          <FieldSet
            title="Bill From"
            fields={invoiceFieldsConfig.senderFields}
          />
          <FieldSet title="Bill To" fields={invoiceFieldsConfig.clientFields} />
          <FieldSet fields={invoiceFieldsConfig.metaFields} />
          <ProjectItems />
          <ButtonsGroup groupKey="create" />
          <button type="submit">Send</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default InvoiceForm;
