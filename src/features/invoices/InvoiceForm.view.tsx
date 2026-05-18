import useAppUiStore from "@/store/useAppUiStore";
import ButtonsGroup from "./components/ButtonsGroup";
import FieldSet from "./components/form/FieldSet";
import ProjectItems from "./components/form/ProjectItems";
import fieldsConfig from "./config/fields.config";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import { FormProvider } from "react-hook-form";
import useFormSetup from "./hooks/useFormSetup";

const InvoiceForm = () => {
  const isEdit = useAppUiStore((state) => state.isEdit);
  const { methods, closeForm, handleSubmition, item } = useFormSetup();
  const {
    formState: { errors },
  } = methods;
  return (
    <div className="absolute top-0">
      <div className="min-h-screen overflow-y-scroll w-[50%] bg-white px-6 pt-8.25 flex flex-col gap-5.5">
        <header className="flex flex-col gap-6.5 text-main">
          {!isEdit && (
            <button
              onClick={closeForm}
              className="text-body-bold flex items-center gap-6">
              <img
                src={arrowLeft}
                alt="A blue magnet arrow points to left side"
              />
              Go back
            </button>
          )}
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
            <ButtonsGroup groupKey={isEdit ? "edit" : "create"} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default InvoiceForm;
