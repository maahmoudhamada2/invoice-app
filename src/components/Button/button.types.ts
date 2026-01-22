export type VariantKeys = "primary" | "secondary" | "danger" | "ghost";

export interface ButtonProps {
  label: string;
  altLabel?: string;
  variant: VariantKeys;
  icon?: string;
  onClick: () => void;
}
