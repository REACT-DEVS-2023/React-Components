/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { CheckboxProps } from "../../Types/Checkbox.type";
import InputHelper from "../Inputhelper/InputHelper";

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
