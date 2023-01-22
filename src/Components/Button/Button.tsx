import React from "react";
import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

export interface btn extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  theme?: "primary" | "secondary" | "danger" | "outline";
  className?: string;
  onClick?: (e?: any) => void;
  children?: React.ReactNode;
  isSubmitting?: boolean;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  disabled?: boolean;
}
const Button: React.FC<btn> = ({
  children,
  theme,
  type,
  className,
  isSubmitting,
  trailingIcon,
  leadingIcon,
  onClick,
  ...rest
}) => {
  let themeClass = "";
  if (theme === "outline") {
    themeClass =
      "bg-gray-100 hover:bg-gray-200 text-black focus:ring-gray-400 border-gray-500 border-2";
  } else {
    if (theme === "primary") {
      themeClass =
        " bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-400 border-transparent";
    } else if (theme === "secondary") {
      themeClass =
        "bg-gray-700 text-white hover:bg-gray-400 focus:ring-gray-500 border-transparent ";
    } else {
      themeClass =
        "bg-red-500 text-white hover:bg-red-400 focus:ring-red-300 border-transparent ";
    }
  }
  return (
    <button
      {...rest}
      className={
        "py-2 px-4 h-full w-full,  rounded-md group shadow-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 " +
        themeClass +
        " " +
        className
      }
      onClick={onClick}
    >
      {
        <div className={cx("flex h-full py-1")}>
          {isSubmitting && "spinner"}
          {!isSubmitting && children}
          {!isSubmitting && trailingIcon && trailingIcon}
        </div>
      }
    </button> 
  );
};
Button.defaultProps = {
  theme: "outline",
};

export default Button;
