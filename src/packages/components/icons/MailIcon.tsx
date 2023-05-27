import React, { HTMLAttributes } from "react";

export const MailIcon = (props: HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      strokeWidth={1.5}
      color="#000"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 9 5 3.5L17 9"
      />
      <path
        stroke="#000"
        d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
