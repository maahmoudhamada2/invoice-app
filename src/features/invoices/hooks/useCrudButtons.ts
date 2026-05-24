import useAppUiStore from "@/store/useAppUiStore";
import buttonConfigs from "../config/buttons.config";
import { crudButtons } from "../constants/constants";
import useInvoicesStore from "../store/useInvoicesStore";
import {
  CRUD,
  CustomCrudHandls,
  DefaultCrudHandls,
} from "../types/buttons.types";
import { useShallow } from "zustand/shallow";

const getHandler = <Mode extends keyof CRUD>(
  btnKey: CRUD[Mode],
  defaultHandlers: DefaultCrudHandls[Mode],
  customHandlers?: CustomCrudHandls[Mode],
) =>
  customHandlers?.[btnKey] ? customHandlers[btnKey] : defaultHandlers?.[btnKey];

const useCrudButtons = <Mode extends keyof CRUD>(
  groupKey: Mode,
  customHandlers?: CustomCrudHandls[Mode],
) => {
  const {
    toggleDelPrompt,
    selectedInvoiceId,
    returnHome,
    openForm,
    closeForm,
  } = useAppUiStore(
    useShallow((state) => ({
      toggleDelPrompt: state.toggleDelPrompt,
      selectedInvoiceId: state.selectedInvoiceId,
      returnHome: state.returnHome,
      openForm: state.openForm,
      closeForm: state.closeForm,
    })),
  );
  const { updateInvStatus, delInvoice } = useInvoicesStore(
    useShallow((state) => ({
      updateInvStatus: state.updateInvStatus,
      delInvoice: state.delInvoice,
    })),
  );
  const selectedBtnsGroup = crudButtons[groupKey];

  const defaultHandlers = {
    create: {
      saveAndSend: () => {},
      discard: () => {},
      draft: () => {},
    },
    read: {
      paid: () => updateInvStatus(selectedInvoiceId, "paid"),
      edit: () => openForm("edit"),
      delete: () => toggleDelPrompt(),
    },
    edit: {
      saveChanges: () => {},
      cancel: () => closeForm(),
    },
    delete: {
      delete: () => {
        delInvoice(selectedInvoiceId);
        toggleDelPrompt();
        returnHome();
      },
      cancel: () => toggleDelPrompt(),
    },
  };

  return selectedBtnsGroup.map((btnKey) => {
    return {
      ...buttonConfigs[btnKey],
      onClick: getHandler(
        btnKey as CRUD[Mode],
        defaultHandlers[groupKey],
        customHandlers,
      ),
    };
  });
};

export default useCrudButtons;
