import {
  ToolbarActionsMapping,
  ToolbarKeys,
  ToolbarPlaceholders,
} from "../toolbar-placeholder";

export interface Position {
  toolbarPlaceholderStart: number;
  toolbarPlaceholderEnd: number;
}

export function extractToolbarPlaceholderPosition(
  input: ToolbarPlaceholders
): Position {
  const pattern = /[a-z]/g;
  const matches = input.match(pattern);

  if (matches && matches.length > 0) {
    const toolbarPlaceholderStart = input.indexOf(matches[0]);
    const toolbarPlaceholderEnd = input.lastIndexOf(
      matches[matches.length - 1]
    );

    return { toolbarPlaceholderStart, toolbarPlaceholderEnd };
  }

  return { toolbarPlaceholderStart: -1, toolbarPlaceholderEnd: -1 };
}

interface GetSelectionPosition {
  selectedText: string;
  selectionStart: number;
  selectionEnd: number;

  pressedKey: ToolbarKeys;
}

export function getSelectionPosition(props: GetSelectionPosition): {
  selectionStartPos: number;
  selectionEndPos: number;
} {
  const { selectedText, selectionStart, pressedKey } = props;
  let selectionStartPos = 0;
  let selectionEndPos = 0;
  const toolbarStartPos = ToolbarActionsMapping[pressedKey].startPosition;
  const toolbarEndPos = ToolbarActionsMapping[pressedKey].endPosition;
  if (selectedText) {
    selectionStartPos =
      selectionStart + selectedText.length + toolbarStartPos + 1;
    selectionEndPos = selectionStartPos;
    if (pressedKey === "link") {
      selectionStartPos = selectionStart + 3 + selectedText.length;
      selectionEndPos = selectionStart + 4 + selectedText.length + (ToolbarActionsMapping[pressedKey].formatting.length - 3);
    }
  } else {
    selectionStartPos = selectionStart + toolbarStartPos;
    selectionEndPos = selectionStart + toolbarEndPos + 1;
  }
  return {
    selectionEndPos,
    selectionStartPos,
  };
}
