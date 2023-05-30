import React from "react";
import { ToolbarActionsMapping, ToolbarKeys } from "../../toolbar-placeholder";
import { getSelectionPosition } from "../utils";

export interface IHandleToolbarButton {
  element: HTMLTextAreaElement | null;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export function useHandleBold(props: IHandleToolbarButton) {
  const { content, element, setContent } = props;

  const handleBoldClick = (key: ToolbarKeys) => {
    console.log(`CLICKED ${key} BUTTON`);
    console.log(ToolbarActionsMapping[key].placeholder);
    let updatedValue;
    let selectedText = "";

    if (element) {
      const { selectionStart, selectionEnd } = element;

     

      if (selectionStart === selectionEnd) {
        // No text is selected, Add placholder text
        updatedValue =
          content.substring(0, selectionStart) +
          ToolbarActionsMapping[key].placeholder +
          content.substring(selectionEnd);
      } else {
        // Text is selected, just wrap the text with formatting.
        selectedText = content.substring(selectionStart, selectionEnd);
        updatedValue =
          content.substring(0, selectionStart) +
          ` ${ToolbarActionsMapping[key].formatting}` +
          content.substring(selectionStart, selectionEnd) +
          `${ToolbarActionsMapping[key].formatting} ` +
          content.substring(selectionEnd);
      }
      const data = getSelectionPosition({
        selectedText,
        selectionEnd,
        selectionStart,
        pressedKey: key,
      });

      let selectionStartPos = data.selectionStartPos;
      let selectionEndPos = data.selectionEndPos;
      setContent(updatedValue);

      element.focus();

      setTimeout(() => {
        element.setSelectionRange(selectionStartPos, selectionEndPos);
      }, 0);
    }
  };
  return {
    handleBoldClick,
  };
}
