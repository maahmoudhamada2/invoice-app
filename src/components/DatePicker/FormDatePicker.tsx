import type { Dispatch, SetStateAction } from "react";
import { Calendar } from "@/components/DatePicker/calendar";
import CalendarIcon from "../icons/CalendarIcon";
import { format } from "date-fns";
import clsx from "clsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/DatePicker/popover";

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface DatePickerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  date: Date;
  onMonthChange: (date: Date) => void;
  modifiersClassNames: { [K: string]: string };
  monthFstDay?: WeekDay;
  onDaySelect: (date: Date | undefined) => void;
}

const FormDatePicker = ({ controller }: { controller: DatePickerProps }) => {
  const {
    open,
    setOpen,
    date,
    modifiersClassNames,
    onMonthChange,
    monthFstDay,
    onDaySelect,
  } = controller;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={clsx(
            `border-2 cursor-pointer bg-surface text-text-primary text-body-bold px-5 pt-4.5 pb-3.75 rounded-xs flex justify-between items-center`,
            open ? "border-input-focus" : "border-input-border",
          )}>
          {format(date, "dd MMM yyyy")}
          <CalendarIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className=" bg-surface text-text-primary font-bold">
        <Calendar
          mode="single"
          classNames={modifiersClassNames}
          onMonthChange={onMonthChange}
          today={date}
          weekStartsOn={monthFstDay}
          selected={date}
          onSelect={onDaySelect}
        />
      </PopoverContent>
    </Popover>
  );
};

export default FormDatePicker;
