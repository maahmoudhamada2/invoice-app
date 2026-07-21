import useCrudButtons from "../../hooks/useCrudButtons";
import type { CustomCrudHandls } from "../../types/buttons.types";
import ButtonsGroup from "../ButtonsGroup";

interface FormActionsProps {
  isEdit: boolean;
  handlers: CustomCrudHandls;
}

const FormActions = ({ isEdit, handlers }: FormActionsProps) => {
  const mode = isEdit ? "edit" : "create";
  const buttons = useCrudButtons(mode, handlers[mode]);
  return (
    <ButtonsGroup
      buttons={buttons}
      style={"bg-white dark:bg-app absolute bottom-0 py-5.5 px-6 md:px-14"}
    />
  );
};

export default FormActions;
