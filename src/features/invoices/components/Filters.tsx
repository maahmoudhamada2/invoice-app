import { useState } from "react";
import arrowDownIcon from "@/assets/icons/arrow-down-icon.svg";
import checkIcon from "@/assets/icons/icon-check.svg";
import useInvoicesStore from "../store/useInvoicesStore";
import { InvoiceStatus } from "../types/invoiceList.types";
import letterCapitalizer from "../utils/letterCapitalizer";
import clsx from "clsx";

type FiltersStatusType = { value: "all" | InvoiceStatus; checked: boolean };

const Filters = () => {
  const toggleFilterList = () => setIsOpen((prev) => !prev);
  const [isOpen, setIsOpen] = useState(false);
  const filterInvoices = useInvoicesStore((state) => state.filterInvoices);
  const [filters, setFilters] = useState<FiltersStatusType[]>([
    { value: "all", checked: true },
    { value: "draft", checked: false },
    { value: "pending", checked: false },
    { value: "paid", checked: false },
  ]);

  const onChange = (filter: FiltersStatusType) => {
    filterInvoices(filter.value);
    setFilters((prev) => {
      const newFilters = [...prev];
      newFilters.map((fltr) => (fltr.checked = false));
      const currentFltr = newFilters.find(
        (fltr) => fltr.value === filter.value,
      );
      if (currentFltr) currentFltr.checked = true;
      return newFilters;
    });
    toggleFilterList();
  };

  return (
    <div className="text-body-bold relative">
      <button
        className="cursor-pointer flex items-center gap-3.5 text-main text-body-bold"
        onClick={toggleFilterList}>
        <span>
          Filter <span className="max-md:hidden">by status</span>
        </span>
        <img
          className={clsx(isOpen ? "rotate-180" : null)}
          src={arrowDownIcon}
        />
      </button>
      {isOpen && (
        <ul
          className="z-1 w-48 bg-white rounded-md shadow-filter-card px-6 py-6
                     absolute -left-5 top-10
                     flex flex-col gap-3.75">
          {filters.map((filter) => (
            <li key={`${filter.value}Status`} className="relative">
              <label className="peer cursor-pointer">
                <input
                  onChange={() => onChange(filter)}
                  name="filterStatus"
                  className="peer cursor-pointer bg-[#DFE3FA] hover:border-2 hover:border-[#7C5DFA] - mr-3.25 appearance-none w-4 h-4 rounded-[2px] checked:bg-[#7C5DFA]"
                  type="radio"
                  value={filter.value}
                  checked={filter.checked}
                />
                {letterCapitalizer(filter.value)}
              </label>
              <img
                className="peer-has-checked:block hidden w-2.5 h-2.5 absolute top-1 left-0.5 "
                src={checkIcon}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
