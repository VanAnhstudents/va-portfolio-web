// Card.jsx
import React from "react";

const Card = ({
  children,
  className = "",
  padding = true,
  shadow = true,
  ...props
}) => {
  const baseClasses =
    "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700";
  const paddingClasses = padding ? "p-6" : "";
  const shadowClasses = shadow
    ? "shadow-sm hover:shadow-md transition-shadow"
    : "";

  return (
    <div
      className={`${baseClasses} ${paddingClasses} ${shadowClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card as default };
