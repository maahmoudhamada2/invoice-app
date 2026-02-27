import Button from "@/components/Button/Button";
import invoiceFieldsConfig from "../../config/invoiceFields.config";
import FieldSet from "./FieldSet";
import invoiceButtonsConfig from "../../config/invoiceButtons.config";
import { useState } from "react";
import deleteIcon from "@/assets/icons/delete-icon.svg";

const ProjectItems = () => {
  const [itemsFields, setItemsFields] = useState([
    invoiceFieldsConfig.itemFields,
  ]);
  return (
    <div className="flex flex-col pb-6">
      <h2 className="text-[#777f87] font-bold text-[18px]">Item List</h2>
      {itemsFields.map((fields) => (
        <FieldSet fields={fields}>
          <button className="pt-5.75">
            <img src={deleteIcon} />
          </button>
        </FieldSet>
      ))}
      <Button
        {...invoiceButtonsConfig.newItem}
        onClick={() =>
          setItemsFields((prev) => [...prev, invoiceFieldsConfig.itemFields])
        }
      />
    </div>
  );
};

export default ProjectItems;
