import { VariantKeys } from "./button.types";
import getButtonStyle from "./button.style";
import clsx from "clsx";

interface ButtonProps {
  content?: {
    defaultTxt: string;
    altTxt?: string;
  };
  attrbs: {
    type: "submit" | "button" | "reset";
    variant: VariantKeys;
    disabled: boolean;
    icon?: {
      url: string;
      customStyle?: string;
    };
    customStyle?: string;
  };
  onClick: () => void;
}

const Button = ({ content, attrbs, onClick }: ButtonProps) => {
  return (
    <button
      type={attrbs.type}
      disabled={attrbs.disabled}
      onClick={onClick}
      className={getButtonStyle(attrbs.variant, attrbs.customStyle)}>
      {attrbs.icon && attrbs.icon.url && (
        <div
          className={clsx(
            `flex justify-center items-center`,
            attrbs.icon.customStyle && attrbs.icon.customStyle,
          )}>
          <img src={attrbs.icon.url} />
        </div>
      )}

      {content && (
        <>
          <span className={clsx(content.altTxt && `max-sm:hidden`)}>
            {content.defaultTxt}
          </span>
          {content.altTxt && (
            <span className="sm:hidden">{content.altTxt}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
