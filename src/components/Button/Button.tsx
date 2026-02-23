import type { ButtonProps } from "./button.types";
import getButtonStyle from "./button.style";
import clsx from "clsx";

const Button = ({ content, feats, onClick }: ButtonProps) => {
  return (
    <button
      type={feats.type}
      onClick={onClick}
      className={getButtonStyle(feats.variant, Boolean(feats.icon))}>
      {feats.icon && (
        <div className="flex justify-center items-center bg-white w-8 aspect-square rounded-full">
          <img src={feats.icon} />
        </div>
      )}
      <span className={clsx(content.altText && `max-md:hidden`)}>
        {content.defaultText}
      </span>
      {content.altText && <span className="md:hidden">{content.altText}</span>}
    </button>
  );
};

export default Button;
