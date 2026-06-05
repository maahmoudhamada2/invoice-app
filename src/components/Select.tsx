import { PaymentTerms } from "@/features/invoices/types/invoiceForm.types";
import { useFormContext } from "react-hook-form";

interface SelectProps {
  id: string;
  optType: "number" | "string";
  options: { label: string; value: number | string }[];
}

const Select = ({ id, optType, options }: SelectProps) => {
  const { register } = useFormContext();
  return (
    <select
      className="custom-select text-main text-body-bold px-5 pt-4.5 pb-3.75 rounded-xs"
      id={id}
      {...register(id, { valueAsNumber: optType === "number" })}>
      {options.map((opt) => (
        <option
          className="pl-6 pt-4.25 pb-3.75 bg-transparent not-last-of-type:border-b-2 border-[#dfe3fa]
                   checked:text-[#7C5DFA] hover:text-[#7C5DFA]"
          value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
