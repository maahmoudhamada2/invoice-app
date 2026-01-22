import type { ButtonProps } from "./button.types";
import getButtonStyle from "./button.style";
import clsx from "clsx";

const Button = ({ label, altLabel, variant, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={getButtonStyle(variant, Boolean(icon))}>
      {icon && (
        <div className="flex justify-center items-center bg-white w-8 aspect-square rounded-full">
          <img src={icon} />
        </div>
      )}
      <span className={clsx(altLabel && `max-md:hidden`)}>{label}</span>
      {altLabel && <span className="md:hidden">{altLabel}</span>}
    </button>
  );
};

export default Button;
