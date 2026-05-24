import useAppUiStore from "@/store/useAppUiStore";
import FieldSet from "./components/form/FieldSet";
import ProjectItems from "./components/form/ProjectItems";
import fieldsConfig from "./config/fields.config";
import { FormProvider } from "react-hook-form";
import useFormSetup from "./hooks/useFormSetup";
import ButtonsGroup from "./components/ButtonsGroup";
import Button from "@/components/Button/Button";
import useActionButtons from "./hooks/useSingleButtons";

const InvoiceForm = () => {
  const isEdit = useAppUiStore((state) => state.isEdit);
  const backBtn = useActionButtons("goBack", () => closeForm());
  const { buttons, methods, closeForm, handleSubmition, item } = useFormSetup();
  const {
    formState: { errors },
  } = methods;

  return (
    <div className="absolute top-0">
      <div className="min-h-screen overflow-y-scroll w-[50%] bg-white px-6 pt-8.25 flex flex-col gap-5.5">
        <header className="flex flex-col gap-6.5 text-main">
          {!isEdit && <Button {...backBtn} />}
          <h2 className="text-heading">
            {isEdit ? "Edit Invoice" : "New Invoice"}
          </h2>
        </header>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmition} className="">
            <FieldSet title="Bill From" fields={fieldsConfig.sender} />
            <FieldSet title="Bill To" fields={fieldsConfig.client} />
            <FieldSet fields={fieldsConfig.meta} />
            <ProjectItems {...item} />
            {Object.keys(errors).length !== 0 && (
              <small className="text-field-error text-[#EC5757]">
                - All fields must be added
              </small>
            )}
            <ButtonsGroup buttons={buttons} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default InvoiceForm;
