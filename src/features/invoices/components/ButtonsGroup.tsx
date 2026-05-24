import Button from "@/components/Button/Button";
import { ButtonShape } from "../types/buttons.types";

type BoundButton = (ButtonShape & { onClick: () => void })[];

const ButtonsGroup = ({ buttons }: { buttons: BoundButton }) => {
  return (
    <div
      className="w-full bg-white flex justify-end items-center gap-2 px-6 py-5.5
                 max-md:absolute max-md:bottom-0 max-md:left-0 md:rounded-md">
      {buttons.map((button, idx) => (
        <Button key={`btn-${idx + 1}`} {...button} />
      ))}
    </div>
  );
};
export default ButtonsGroup;
