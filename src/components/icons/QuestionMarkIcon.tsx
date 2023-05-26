import React, { HTMLAttributes } from "react";

export const QuestionMarkIcon = (
  props: HTMLAttributes<HTMLOrSVGElement> & { height?: number; width?: number }
) => {
  const { height = 24, width = 24, ...rest } = props;
  return (
    <svg
      width="24px"
      height="24px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...rest}
    >
      <path
        d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
