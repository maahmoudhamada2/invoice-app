import type { FormField } from "@/features/invoices/types/invoiceForm.types";
import FormDatePicker from "@/components/DatePicker/FormDatePicker";
import useFormDatePick from "../../../hooks/useFormDatePick";
import Select from "@/components/Select";
import Input from "@/components/Input";

interface FormControlProps {
  inptConfig: Omit<FormField["input"], "id"> & { id: string };
  isValid: boolean;
}

const FormControl = ({ inptConfig, isValid }: FormControlProps) => {
  switch (inptConfig.type) {
    case "select":
      if (!inptConfig.options) return null;
      const {
        options: { data: optConfigs },
        ...selectConfig
      } = inptConfig;
      return (
        <Select
          selectConfig={selectConfig}
          optsConfig={optConfigs}
          isValid={isValid}
        />
      );
    case "date":
      const controller = useFormDatePick();
      return <FormDatePicker controller={controller} />;
    default:
      return <Input configs={{ ...inptConfig }} isValid={isValid} />;
  }
};

export default FormControl;
