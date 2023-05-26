import { create } from "zustand";
import { ITag } from "../types";
import DOMPurify from "dompurify";
interface ITagStore {
  tags: ITag[];
  addNewTag: (tag: ITag) => void;
  removeTag: (tagId: string) => void;
  clearTag:()=>void;
}
interface ITitleStore {
  title: string;
  setTitle: (title: string) => void;
}
interface IEditorContentStore {
  content: string;
  setContent: (title: string) => void;
}
const initialTags: ITag[] = [];

export const useTagStore = create<ITagStore>()((set) => ({
  tags: initialTags,
  addNewTag(tag) {
    set((state) => ({
      tags: [...state.tags, tag],
    }));
  },
  removeTag(tagId) {
    // This state is same as prevState in useState hook.
    set((state) => {
      return {
        tags: state.tags.filter((tag) => tag.id !== tagId),
      };
    });
  },
  clearTag() {
    set({tags:[]})
  },
}));
export const useTitleStore = create<ITitleStore>()((set) => ({
  title: "",
  setTitle(title) {
    set((state) => ({ title }));
  },
}));
export const useEditorContentStore = create<IEditorContentStore>()((set) => ({
  content: "",
  setContent(content) {
    const cleanContent = DOMPurify.sanitize(content)
    set((state) => ({ content: cleanContent }));
  },
}));
