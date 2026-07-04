import clsx from "clsx";
import type { VariantKeys } from "./button.types";

export const btnsVariant = {
  primary: `bg-brand text-white hover:bg-brand-hover`,
  secondary: `bg-neutral text-text-subtle hover:bg-neutral-hover`,
  danger: `bg-danger text-white hover:bg-danger-hover`,
  ghost: `bg-ghost text-text-secondary hover:bg-ghost-hover hover:text-ghost-text-hover`,
  back: `text-text-primary text-body-bold hover:text-text-muted`,
  icon: ``,
};

const getButtonStyle = (
  variant: VariantKeys,
  customStyle: string | undefined,
) => {
  const base = clsx(
    "flex items-center justify-center cursor-pointer text-body leading-[15px] rounded-xl disabled:opacity-50 disabled:cursor-no-drop",
    customStyle && customStyle,
  );
  return `${base} ${btnsVariant[variant]}`;
};

export default getButtonStyle;
