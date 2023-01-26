import { ReactElement } from "react";

export interface CheckboxProps {
  errorMessage?: string;
  onChange: (event: any) => void;
  value?: boolean;
  disabled?: boolean;
  text?: ReactElement;
}
