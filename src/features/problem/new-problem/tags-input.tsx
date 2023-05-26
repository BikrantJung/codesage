import { Input } from "@/components/atoms/input";
import { EditIcon } from "@/components/icons/EditIcon";
import { TagDeleteIcon } from "@/components/icons/TagDeleteIcon";
import React, { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { useTagStore } from "./state/input-state";
import { ITag } from "./types";

export const TagsInput = () => {
  const tagInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const { addNewTag, tags, removeTag: rT } = useTagStore();
  function handleInputChagne(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      addTag();
    }
  }

  const addTag = () => {
    const newTagName = inputValue.trim();
    const exists = tags.find((tag) => tag.tagTitle === newTagName);
    if (exists) {
      setInputValue("");
      toast.error("Tag already exists");
      return;
    }
    if (newTagName !== "") {
      const newTag = {
        id: `${Date.now()}`,
        tagTitle: newTagName,
        tagViews: 0,
      };
      addNewTag(newTag);
    }

    setInputValue("");
  };

  const removeTag = (tagId: string) => {
    rT(tagId);
  };
  const editTag = (tagId: string) => {
    rT(tagId);

    const removingItem = tags.find((tag) => tag.id === tagId) as ITag;
    console.log(removingItem);
    setInputValue(removingItem.tagTitle);

    tagInputRef.current?.focus();
  };
  return (
    <div className="flex flex-col gap-2">
      <Toaster richColors />
      <p>
        Tags{" "}
        <span className="text-xs">
          ( Enter a word and press <kbd>Enter</kbd> or <kbd>Space</kbd>. Maximum
          of 5 tags for better indexing )
        </span>{" "}
      </p>
      <Input
        ref={tagInputRef}
        onKeyDown={(e) => handleInputKeyDown(e)}
        onChange={(e) => handleInputChagne(e)}
        value={inputValue}
        className="bg-white"
      />
      <div className="flex items-center gap-3 w-full flex-wrap">
        {tags.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded border-black border bg-white p-1 px-2"
            >
              <span className="text-sm">{item.tagTitle}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => editTag(item.id)}>
                  <EditIcon height={14} width={14} className="cursor-pointer" />
                </button>
                <button onClick={() => removeTag(item.id)}>
                  <TagDeleteIcon
                    height={14}
                    width={14}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
