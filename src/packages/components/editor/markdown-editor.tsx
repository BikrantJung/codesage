"use client";
import React, { useRef, useState } from "react";
import { ToolbarKeys, ToolbarPlaceholders } from "./toolbar-placeholder";
import { extractToolbarPlaceholderPosition } from "./lib/utils";
import { Button } from "../atoms/button";
import { BlockQuoteIcon } from "../icons/BlockQuoteIcon";
import { useHandleBold } from "./lib/hooks/useHandleBold";

export const MarkdownEditor = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [textareaValue, setTextareaValue] = useState("");
  const {handleBoldClick} = useHandleBold({
    content: textareaValue,
    element: textareaRef.current,
    setContent: setTextareaValue,
  });
  // Handler for inserting text at cursor position

  const insertTextAtCursor = (text: ToolbarPlaceholders) => {
    const positions = extractToolbarPlaceholderPosition(text);
    console.log("POSIITIONS", { positions });
    const textarea = textareaRef.current;
    if (textarea) {
      const { selectionStart, selectionEnd } = textarea;
      const isSelected = selectionStart !== selectionEnd;

      let updatedValue;
      if (isSelected) {
        console.log("Selected");
        updatedValue =
          textareaValue.substring(0, selectionStart) +
          " **" +
          updatedValue +
          "** " +
          textareaValue.substring(selectionEnd);
      } else {
        updatedValue =
          textareaValue.substring(0, selectionStart) +
          text +
          textareaValue.substring(selectionEnd);
      }
      if (text === ToolbarPlaceholders.BLOCKQUOTE) {
        updatedValue =
          textareaValue.substring(0, selectionStart) +
          "\n" +
          text +
          textareaValue.substring(selectionStart);
      }

      setTextareaValue(updatedValue);

      const positionStart = selectionStart + positions.toolbarPlaceholderStart;
      // ( **bold** )
      // length = 10, start = 3, end = 6
      const positionEnd = selectionStart + positions.toolbarPlaceholderEnd + 1;
      console.log(positions);
      console.log({ positionStart, positionEnd });
      textarea.focus();

      setTimeout(() => {
        textarea.setSelectionRange(positionStart, positionEnd);
      }, 0);

      textarea.setSelectionRange(1, 4);
      // if(inputRef.current){
      //   inputRef.current.focus()
      //   inputRef.current.setSelectionRange(2,4)
      // }
    }

  };
  function printSubstring(){
    let string = 'I am very handsome'
    console.log(string.substring(0,3))

    
  }
  function handleKeyPress(e:React.KeyboardEvent<HTMLTextAreaElement>){
    if(e.ctrlKey && e.key==='b'){
      handleBoldClick("bold")
    } 
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button onClick={()=>handleBoldClick("bold")}>B</Button>
        <Button onClick={()=>printSubstring()}>S</Button>
        <Button onClick={() => handleBoldClick("italic")}>
          I
        </Button>
        <Button
          onClick={() => insertTextAtCursor(ToolbarPlaceholders.BLOCKQUOTE)}
        >
          <BlockQuoteIcon height={16} width={16} />
        </Button>
      </div>
      <textarea
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.currentTarget.value);
        }}
        onKeyDown={(e)=>handleKeyPress(e)}
        className="p-3"
        ref={textareaRef}
        name="textarea"
        id="textarea"
        cols={30}
        rows={10}
      ></textarea>
    </div>
  );
};
