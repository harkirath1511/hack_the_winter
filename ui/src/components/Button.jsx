import React from "react";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "../config/theme";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-lg transition-smooth focus-ring disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  return (
    <button
      type={type}
      className={`${baseStyles} ${
        BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary
      } ${BUTTON_SIZES[size] || BUTTON_SIZES.md} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
