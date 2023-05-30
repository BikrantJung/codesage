"use client"
import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function EditorMD() {
  const [value, setValue] = React.useState<string | undefined>("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={(value)=>setValue(value)}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}