import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  label,
  size,
  tailwindClasses,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant} btn-${size} ${tailwindClasses.join(" ")}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.node,
  onClick: PropTypes.func,
  tailwindClasses: PropTypes.array,
};

Button.defaultProps = {
  tailwindClasses: [],
  label: "",
  size: "medium",
  variant: "primary",
  onClick: undefined,
};
