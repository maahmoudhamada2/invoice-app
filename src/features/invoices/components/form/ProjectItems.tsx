import type { FormInput } from "../../types/invoiceForm.types";
import useActionButtons from "../../hooks/useActionButtons";
import { formItemValue } from "../../constants/constants";
import buttonsConfig from "../../config/buttons.config";
import fieldsConfig from "../../config/fields.config";
import Button from "@/components/Button/Button";
import FieldSet from "./FieldSet";
import type {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";

interface ProjectItemsProps {
  fields: FieldArrayWithId<FormInput, "items", "id">[];
  append: UseFieldArrayAppend<FormInput, "items">;
  remove: UseFieldArrayRemove;
}

const ProjectItems = ({ fields, append, remove }: ProjectItemsProps) => {
  const addItemBtn = useActionButtons("addItem", () =>
    append(formItemValue, { shouldFocus: false }),
  );

  return (
    <div className="flex flex-col gap-5 pb-6">
      <div>
        <h2 className="mb-5.5 text-[#777f87] font-bold text-[18px]">
          Item List
        </h2>
        {fields.map((field, idx) => (
          <FieldSet
            key={field.id}
            fields={fieldsConfig.item}
            idPrefix={`items.${idx}.`}>
            <Button {...buttonsConfig.delItem} onClick={() => remove(idx)} />
          </FieldSet>
        ))}
      </div>
      <Button {...addItemBtn} />
    </div>
  );
};

export default ProjectItems;
