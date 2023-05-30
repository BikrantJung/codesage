import React, { HTMLAttributes } from "react";

export const InlineCodeIcon = (
  props: HTMLAttributes<HTMLOrSVGElement> & { height?: number; width?: number }
) => {
  const { height = 24, width = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
      <path d="M14 12a4 4 0 0 1 0 8H6"></path>
      <line x1="4" x2="20" y1="12" y2="12"></line>
    </svg>
  );
};
