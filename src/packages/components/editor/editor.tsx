"use client";
import { useCallback, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "@/styles/quill.snow.css";
import { customIcons } from "./custom-icons";
interface QuillEditorProps {
  editorValue: string;
  setEditorValue: (value: string) => void;
  canResetEditor: boolean;
}
function QuillEditor(props: QuillEditorProps) {
  const { editorValue, setEditorValue, canResetEditor } = props;
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "code", "link"],
        [
          "blockquote",
          "code-block",
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          "image",
        ],
      ],
    },
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "ordered",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "code",
      "code-block",
    ],
    placeholder: "Your Description Here...",
  });

  useEffect(() => {
    const inlineCode = document.getElementsByClassName("ql-code")[0];
    const bold = document.getElementsByClassName("ql-bold")[0];
    const italic = document.getElementsByClassName("ql-italic")[0];
    const underline = document.getElementsByClassName("ql-underline")[0];
    const strike = document.getElementsByClassName("ql-strike")[0];
    const link = document.getElementsByClassName("ql-link")[0];
    const codeBlock = document.getElementsByClassName("ql-code-block")[0];
    const blockquote = document.getElementsByClassName("ql-blockquote")[0];
    const orderedList = document.getElementsByClassName("ql-list")[0];
    const unorderedList = document.getElementsByClassName("ql-list")[1];
    const indentLeft = document.getElementsByClassName("ql-indent")[0];
    const indentRight = document.getElementsByClassName("ql-indent")[1];
    const image = document.getElementsByClassName("ql-image")[0];
    if (quillRef && quill) {
      // Default value for quill editor

      bold.innerHTML = customIcons.boldIcon;
      inlineCode.innerHTML = customIcons.inlineCodeIcon;
      italic.innerHTML = customIcons.italicIcon;
      underline.innerHTML = customIcons.underlineIcon;
      strike.innerHTML = customIcons.strikeIcon;
      link.innerHTML = customIcons.linkIcon;
      codeBlock.innerHTML = customIcons.codeBlockIcon;
      blockquote.innerHTML = customIcons.quotesIcon;
      indentLeft.innerHTML = customIcons.indentLeftIcon;
      indentRight.innerHTML = customIcons.indentRightIcon;
      image.innerHTML = customIcons.imageIcon;
      orderedList.innerHTML = customIcons.orderedListIcon;
      unorderedList.innerHTML = customIcons.unorderedListIcon;

      image.addEventListener("click", () => {
        console.log("clicked");
      });
    }
  }, [quillRef, quill]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setEditorValue(quill.root.innerHTML);
      });
    }
  }, [quill, quillRef, setEditorValue]);

  useEffect(() => {
    if (canResetEditor) {
      if (quill) {
        quill.root.innerHTML = "";
      }
    }
  }, [canResetEditor, quill]);

  return (
    <div className="min-h-[200px] flex flex-col">
      <div ref={quillRef}></div>
    </div>
  );
}
export default QuillEditor;
