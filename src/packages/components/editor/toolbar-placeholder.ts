
export enum ToolbarPlaceholders {
  BOLD = " **bold** ",
  ITALIC = " _italic_ ",
  INLINE_CODE = " `inlinecode` ",
  STRIKETHROUGH = " ~~strikethrough~~ ",
  BLOCKQUOTE = " >texthere ",
  CODEBLOCK = "\n ```\n codeblock``` ",
  FULL_LINK=" [link_text](https://example.com) ",
  FULL_IMAGE = " ![img_desc](https://image-url.png) "
}

enum Formatting {
  BOLD = "**",
  ITALIC = "_",
  INLINE_CODE = "`",
  STRIKETHROUGH = "~~",
  BLOCKQUOTE = ">",
  CODEBLOCK = "```",
  LINK = "(https://example.com)",
}
interface ToolbarActionsInfo {
  placeholder: ToolbarPlaceholders;
  startPosition: number;
  endPosition: number;
  formatting: Formatting;
}

export const ToolbarActionsMapping = {
  bold: {
    placeholder: ToolbarPlaceholders.BOLD,
    startPosition: 3,
    endPosition: 6,
    formatting: Formatting.BOLD,
  },
  italic: {
    placeholder: ToolbarPlaceholders.ITALIC,
    startPosition: 2,
    endPosition: 7,
    formatting: Formatting.ITALIC,
  },
  inline_code: {
    placeholder: ToolbarPlaceholders.INLINE_CODE,
    startPosition: 2,
    endPosition: 11,
    formatting: Formatting.INLINE_CODE,
  },
  code_block: {
    placeholder: ToolbarPlaceholders.CODEBLOCK,
    startPosition: 3,
    endPosition: 6,
    formatting: Formatting.CODEBLOCK,
  },
  strikethrough :{
    placeholder:ToolbarPlaceholders.STRIKETHROUGH,
    startPosition:3,
    endPosition:15,
    formatting:Formatting.STRIKETHROUGH
  },
  link:{
    placeholder:ToolbarPlaceholders.FULL_LINK,
    startPosition:13,
    endPosition:31,
    formatting:Formatting.LINK

  }
 
};
export type ToolbarKeys = keyof typeof ToolbarActionsMapping