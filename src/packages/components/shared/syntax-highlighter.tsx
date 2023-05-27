import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import prettier from "prettier/standalone";
import babelParser from "prettier/parser-babel";
import cssParser from "prettier/parser-postcss";
import htmlParser from "prettier/parser-html";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BuiltInParserName, CustomParser, LiteralUnion } from "prettier";
interface HighlightProps {
  codeString: string;
  language?: string;
  parser?:LiteralUnion<BuiltInParserName, string> | CustomParser | undefined;
}
export const Highlight = (props: HighlightProps) => {
  const { codeString, language = "javascript", parser='babel' } = props;
  return (
    <SyntaxHighlighter
      language="javascript"
      showLineNumbers
      style={nightOwl}
      customStyle={{ fontSize: "12px", borderRadius: "8px" }}
    >
      {prettier.format(codeString, {
        parser: parser,
        plugins: [babelParser,cssParser,htmlParser],
      })}
    </SyntaxHighlighter>
  );
};
