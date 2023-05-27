/**
 * A hook to generate tags based on passed input
 * @param string- A space separated string
 * @returns A list of strings
 */

import { useEffect, useState } from "react";

export function useTags(string: string) {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags((prevTags) => [...prevTags, ...string.split(" ")]);
  }, [string]);
  
  return tags;
}
