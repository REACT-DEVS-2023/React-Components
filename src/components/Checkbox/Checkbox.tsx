import React from "react";
import InputHelper from "../InputHelper/InputHelper";

export interface CheckboxProps {
  errorMessage?: string;
  onChange: (event: any) => void;
  value?: boolean;
  disabled?: boolean;
  text?: React.ReactElement;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  errorMessage,
  value,
  disabled,
  text,
}) => (
  <>
    <div className="flex items-center">
      <input
        onChange={onChange}
        checked={value}
        disabled={disabled}
        type="checkbox"
      />
      {text && <div className="ml-4">{text}</div>}
    </div>
    <InputHelper type="error" text={errorMessage} />
  </>
);

export default Checkbox;
