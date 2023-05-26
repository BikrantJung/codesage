import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader } from "./loader";

const buttonVariants = cva(
  "relative flex items-center justify-center gap-2 font-medium active:translate-x-0 active:translate-y-0 active:shadow-none rounded  hover:-translate-x-1 hover:-translate-y-1 transition disabled:pointer-events-none disabled:select-none",
  {
    variants: {
      variant: {
        default: "bg-white border-2 border-black text-primary-foreground hover:shadow-[4px_4px_0px_0px] shadow-black",
        accent:"bg-white border-2 border-accent text-accent-foreground hover:shadow-strong",
        destructive:
          "border-destructive bg-white text-destructive shadow-destructive",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary-foreground",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      loadingText,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={loading || disabled}
      >
        {!loading && children}
        {loading && !loadingText && <> <Loader className="absolute"/> <span className="opacity-0">{children}</span> </>}
        {loading && loadingText && (
          <>
            
            <span>{loadingText}</span> <Loader/> 
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
