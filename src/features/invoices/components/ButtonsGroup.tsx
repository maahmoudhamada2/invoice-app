import Button from "@/components/Button/Button";
import { ButtonShape } from "../types/buttons.types";
import clsx from "clsx";
import useAppUiStore from "@/store/useAppUiStore";

interface ButtonsGrpProps {
  buttons: (ButtonShape & { onClick: () => void })[];
  style?: string;
}

const ButtonsGroup = ({ buttons, style }: ButtonsGrpProps) => {
  const form = useAppUiStore((state) => state.form);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={clsx(
        `${style} w-full flex justify-end items-center gap-1.75 md:rounded-tr-lg md:rounded-br-lg  transition-all duration-500`,
        form.isOpen && form.isHide && !form.isBottom
          ? "max-md:translate-y-full max-md:opacity-0 "
          : "max-md:translate-y-0 max-md:opacity-100",
      )}>
      {buttons.map((button, idx) => (
        <Button key={`btn-${idx + 1}`} {...button} />
      ))}
    </div>
  );
};
export default ButtonsGroup;
