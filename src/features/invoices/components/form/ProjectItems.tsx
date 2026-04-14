import Button from "@/components/Button/Button";
import invoiceFieldsConfig from "../../config/invoiceFields.config";
import FieldSet from "./FieldSet";
import invoiceButtonsConfig from "../../config/invoiceButtons.config";
import deleteIcon from "@/assets/icons/delete-icon.svg";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormField from "@/components/FormField";
import ItemsContainer from "../details/ItemsContainer";

const ProjectItems = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  return (
    <div className="flex flex-col pb-6">
      <h2 className="text-[#777f87] font-bold text-[18px]">Item List</h2>
      {fields.map((field, idx) => (
        <FieldSet
          key={field.id}
          fields={invoiceFieldsConfig.itemFields}
          idPrefix={`items.${idx}.`}>
          <button className="pt-5.75" onClick={() => remove(idx)}>
            <img src={deleteIcon} />
          </button>
        </FieldSet>
      ))}
      <Button
        {...invoiceButtonsConfig.newItem}
        onClick={() => append({ name: "", quantity: 1, price: 0 })}
      />
    </div>
  );
};

export default ProjectItems;
