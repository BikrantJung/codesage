import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Loader = (props: HTMLAttributes<HTMLDivElement>) => {
    const {className,...rest} = props
  return (
    <div className={cn("flex items-center gap-[4px] translate-y-[2px]",className)} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        className="animate-dot-1"
        height="4"
        viewBox="0 0 10 10"
      >
        <circle cx="5" cy="5" r="5" fill="black" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        className="animate-dot-2"
        height="4"
        viewBox="0 0 10 10"
      >
        <circle cx="5" cy="5" r="5" fill="black" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        className="animate-dot-3"
        height="4"
        viewBox="0 0 10 10"
      >
        <circle cx="5" cy="5" r="5" fill="black" />
      </svg>
    </div>
  );
};
