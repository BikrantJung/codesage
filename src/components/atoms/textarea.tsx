import { cn } from "@/lib/utils";
import React from "react";
import TextAreaResize, { TextareaAutosizeProps } from "react-textarea-autosize";
interface TextAreaProps extends TextareaAutosizeProps {
  className?: string;
  placeholder?: string;
  resize?: boolean;
  maxRows?: number;
}
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const {
      className,
      placeholder = "Untitled Post",
      resize = false,
      maxRows = 3,
      ...rest
    } = props;
    return (
      <TextAreaResize
        className={cn(
          "pb-0 text-4xl w-full focus-visible:outline-none",
          className,
          resize ? "resize" : "resize-none"
        )}
        placeholder={placeholder}
        maxRows={maxRows}
        ref={ref}
        {...rest}
      />
    );
  }
);
TextArea.displayName = "TextArea";
