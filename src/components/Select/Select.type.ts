import { ComponentProps } from "react";

export type HTMLOptionProps = Omit<
  ComponentProps<"option">,
  "label" | "value"
> & {
  label: string;
  value: string | number | undefined;
};

export type HTMLSelectProps = Omit<ComponentProps<"select">, "id"> & {
  id: string;
};
