export type VariantKeys = "primary" | "secondary" | "danger" | "ghost";

export interface ButtonProps {
  content: { defaultText: string; altText?: string };
  feats: {
    type: "button" | "reset" | "submit" | undefined;
    variant: VariantKeys;
    icon?: string;
  };
  onClick: () => void;
}
