import clsx from "clsx";
import type { VariantKeys } from "./button.types";

export const btnsVariant = {
  primary: `bg-btn-primary text-white hover:bg-btn-primary-hv`,
  secondary: `bg-btn-secondary text-subtle hover:bg-btn-secondary-hv dark:text-muted`,
  danger: `bg-btn-danger text-[#ffffff] hover:bg-btn-danger-hv`,
  ghost: `bg-btn-ghost text-muted hover:bg-btn-ghost-hv hover:text-[#7e88c3]`,
};

const getButtonStyle = (variant: VariantKeys, withIcon: boolean) => {
  const base = clsx(
    "cursor-pointer text-body leading-[15px]  rounded-xl",
    withIcon
      ? "flex items-center gap-2 p-1.5 pr-3.75 md:px-2 md:pr-4.25"
      : "px-[clamp(14px,10vw,16px)] pt-4.5 pb-3.75",
  );
  return `${base} ${btnsVariant[variant]}`;
};

export default getButtonStyle;
