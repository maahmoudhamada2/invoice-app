import Button from "@/components/Button/Button";
import fieldsConfig from "../../config/fields.config";
import FieldSet from "./FieldSet";
import invoiceButtonsConfig from "../../config/invoiceButtons.config";
import deleteIcon from "@/assets/icons/delete-icon.svg";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { FormInput } from "../../types/invoiceForm.types";

interface ProjectItemsProps {
  fields: FieldArrayWithId<FormInput, "items", "id">[];
  append: UseFieldArrayAppend<FormInput, "items">;
  remove: UseFieldArrayRemove;
}

const ProjectItems = ({ fields, append, remove }: ProjectItemsProps) => {
  return (
    <div className="flex flex-col pb-6">
      <h2 className="text-[#777f87] font-bold text-[18px]">Item List</h2>
      {fields.map((field, idx) => (
        <FieldSet
          key={field.id}
          fields={fieldsConfig.item}
          idPrefix={`items.${idx}.`}>
          <button className="pt-5.75" onClick={() => remove(idx)}>
            <img src={deleteIcon} />
          </button>
        </FieldSet>
      ))}
      <Button
        {...invoiceButtonsConfig.newItem}
        onClick={() => append({ name: "", quantity: 1, price: 0, total: 0 })}
      />
    </div>
  );
};

export default ProjectItems;
