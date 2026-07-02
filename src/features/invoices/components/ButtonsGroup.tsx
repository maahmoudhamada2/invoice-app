import Button from "@/components/Button/Button";
import { ButtonShape } from "../types/buttons.types";

interface ButtonsGrpProps {
  buttons: (ButtonShape & { onClick: () => void })[];
  style?: string;
}

const ButtonsGroup = ({ buttons, style }: ButtonsGrpProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${style} w-full flex justify-end items-center gap-1.75 md:rounded-tr-lg md:rounded-br-lg`}>
      {buttons.map((button, idx) => (
        <Button key={`btn-${idx + 1}`} {...button} />
      ))}
    </div>
  );
};
export default ButtonsGroup;
