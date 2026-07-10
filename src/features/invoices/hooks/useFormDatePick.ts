import type { WeekDay } from "@/components/DatePicker/FormDatePicker";
import { modifiersClassNames } from "../constants/constants";
import useInvoicesStore from "../store/useInvoicesStore";
import useAppUiStore from "@/store/useAppUiStore";
import { useFormContext } from "react-hook-form";
import { formatISO } from "date-fns";
import { useState } from "react";

const useFormDatePick = () => {
  const isEdit = useAppUiStore((state) => state.isEdit);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);
  const invoices = useInvoicesStore((state) => state.invoices);

  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();
  const inptId = "invoiceDate";

  const [date, setDate] = useState<Date>(() => {
    if (isEdit && selectedInvoiceId) {
      const selectedInvoice = invoices.find(
        (invoice) => invoice.id === selectedInvoiceId,
      );
      if (selectedInvoice) return new Date(selectedInvoice.createdAt);
    }
    return new Date();
  });
  const [monthFstDay, setMonthFstDay] = useState<WeekDay>(
    new Date(1, date.getMonth(), date.getFullYear()).getDay() as WeekDay,
  );

  const onMonthChange = (month: Date) =>
    setMonthFstDay(month.getDay() as WeekDay);

  const onDaySelect = (date: Date | undefined) => {
    if (date) {
      setDate(date);
      setValue(inptId, formatISO(date, { representation: "date" }));
    }
    setOpen(false);
  };

  return {
    open,
    setOpen,
    date,
    setDate,
    onDaySelect,
    modifiersClassNames,
    monthFstDay,
    onMonthChange,
  };
};

export default useFormDatePick;
