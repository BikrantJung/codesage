import React, { HTMLAttributes } from "react";

export const CircleIcon = (
  props: HTMLAttributes<HTMLOrSVGElement> & { height?: number; width?: number }
) => {
  const { height = 24, width = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};
