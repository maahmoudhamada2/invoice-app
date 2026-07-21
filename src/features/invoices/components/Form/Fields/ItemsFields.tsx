import type { FormField } from "@/features/invoices/types/invoiceForm.types";
import FieldSet from "./FieldSet";
import Button from "@/components/Button/Button";
import buttonConfigs from "@/features/invoices/config/buttons.config";

interface ItemsFieldsPros {
  fields: Record<string, FormField[]>;
  title?: string;
  handlers: { addItem: () => void; deleteItem: (idx: number) => void };
}

const ItemsFields = ({ title, fields, handlers }: ItemsFieldsPros) => {
  const itemKeys = Object.keys(fields);
  return (
    <div className="flex flex-col gap-5 pb-6">
      <div>
        {title && (
          <h2 className="mb-5.5 text-[#777f87] font-bold text-[18px]">
            {title}
          </h2>
        )}
        {itemKeys.map((key, idx) => (
          <FieldSet key={key} fields={fields[key]}>
            <Button
              {...buttonConfigs.delItem}
              onClick={() => handlers.deleteItem(idx)}
            />
          </FieldSet>
        ))}
      </div>
      <Button {...buttonConfigs.addItem} onClick={handlers.addItem} />
    </div>
  );
};

export default ItemsFields;
