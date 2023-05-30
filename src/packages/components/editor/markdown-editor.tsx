"use client";
import React, { useRef, useState } from "react";
import { ToolbarKeys, ToolbarPlaceholders } from "./toolbar-placeholder";
import { extractToolbarPlaceholderPosition } from "./lib/utils";
import { Button } from "../atoms/button";
import { BlockQuoteIcon } from "../icons/BlockQuoteIcon";
import { useHandleBold } from "./lib/hooks/useHandleBold";
import { InlineCodeIcon } from "../icons/InlineCodeIcon";
import { TextArea } from "../atoms/textarea";
import { ImageUploadDialog } from "./image-upload-dialog";

export const MarkdownEditor = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [textareaValue, setTextareaValue] = useState("");
  const { handleBoldClick } = useHandleBold({
    content: textareaValue,
    element: textareaRef.current,
    setContent: setTextareaValue,
  });
  // Handler for inserting text at cursor position

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.ctrlKey) {
      if (e.key === "b") {
        e.preventDefault();
        handleBoldClick("bold");
      }
      if (e.key === "i") {
        e.preventDefault();
        handleBoldClick("italic");
      }

      if (e.key === "`") {
        e.preventDefault();
        handleBoldClick("inline_code");
      }

      if (e.key === "-") {
        e.preventDefault();
        handleBoldClick("strikethrough");
      }
      if(e.key==='l'){
        e.preventDefault()
        handleBoldClick('link')
      }


    }
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button onClick={() => handleBoldClick("bold")}>B</Button>
        <Button onClick={() => handleBoldClick("italic")}>I</Button>
        <Button onClick={() => handleBoldClick("strikethrough")}>S</Button>
        <Button onClick={() => handleBoldClick("link")}>L</Button>
        <ImageUploadDialog/>
        <Button onClick={() => handleBoldClick("inline_code")}>
          <InlineCodeIcon height={16} width={16} />
        </Button>
      </div>
      <textarea
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.currentTarget.value);
        }}
        onKeyDown={(e) => handleKeyPress(e)}
        className="p-3 focus-visible:ring-accent focus-visible:ring-2 focus-visible:outline-none min-h-300px text-base"
        ref={textareaRef}
        cols={30}
        rows={10}
      />
    </div>
  );
};
