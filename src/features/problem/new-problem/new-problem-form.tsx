"use client";
import { Button } from "@/components/atoms/button";
import { TextArea } from "@/components/atoms/textarea";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  useEditorContentStore,
  useTagStore,
  useTitleStore,
} from "./state/input-state";
import { TagsInput } from "./tags-input";
import { Toaster, toast } from "sonner";
const QEditor = dynamic(() => import("../../../components/editor/editor"), {
  ssr: false,
});

export const NewProblemForm = () => {
  const { setTitle, title } = useTitleStore();
  const { content, setContent } = useEditorContentStore();
  const { tags, clearTag } = useTagStore();
  const [posting, setPosting] = useState(false);
  const [canResetEditor, setCanResetEditor] = useState(false);

  function postPublicly() {
    setPosting(true);
    fetch("/api/problem", {
      method: "POST",
      body: JSON.stringify({
        problemTitle: title,
        problemDescription: content,
        problemTags: tags,
      }),
    })
      .then(async (res) => {
        toast.success("Successfully created the new post.");
        clearTag();
        setContent("");
        setTitle("");
        setCanResetEditor(true);
        console.log(await res.json());
      })
      .catch((err) => {
        toast.error("Error making a post. Please try again.");
      })
      .finally(() => {
        setPosting(false);
      });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-card apply-border grid place-items-center p-2 rounded">
        <TextArea onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>

      <div className="flex bg-card apply-border rounded p-2 flex-col gap-2">
        <p>
          Description{" "}
          <span className="text-xs">
            (Describe what you were trying to achieve and how you achieved it)
          </span>{" "}
        </p>
        <QEditor
          editorValue={content}
          setEditorValue={setContent}
          canResetEditor={canResetEditor}
        />
      </div>

      <div className="bg-card apply-border p-2">
        <TagsInput />
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <Button>Save as private</Button>
        <Button
          variant={"accent"}
          loading={posting}
          onClick={() => {
            postPublicly();
          }}
        >
          Post publicly
        </Button>
      </div>
    </div>
  );
};
