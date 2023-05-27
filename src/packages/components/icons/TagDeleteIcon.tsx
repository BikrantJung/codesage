import React, { HTMLAttributes } from "react";

export const TagDeleteIcon = (
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
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
      <line x1="18" x2="12" y1="9" y2="15"></line>
      <line x1="12" x2="18" y1="9" y2="15"></line>
    </svg>
  );
};
