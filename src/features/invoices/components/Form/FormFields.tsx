import type { FieldSetShape } from "../../types/invoiceForm.types";
import {
  FIELD_SETS_KEYS,
  FieldSetKeys,
} from "../../constants/invoiceForm.constants";

import { ItemsFields, FieldSet } from "./Fields";

interface ContentProps {
  fieldSets: Record<FieldSetKeys, FieldSetShape>;
  itemHandlers: { addItem: () => void; deleteItem: (idx: number) => void };
}

const FormFields = ({ fieldSets, itemHandlers }: ContentProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {FIELD_SETS_KEYS.map((key) => {
        return fieldSets[key].setFields instanceof Array ? (
          <FieldSet
            key={key}
            title={fieldSets[key].title}
            fields={fieldSets[key].setFields}
          />
        ) : (
          <ItemsFields
            key={key}
            title={fieldSets[key].title}
            fields={fieldSets[key].setFields}
            handlers={itemHandlers}
          />
        );
      })}
    </div>
  );
};

export default FormFields;
