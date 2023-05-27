
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


function generateVariables(theme: Record<any, string>) {
  const tailwindVariables: Record<any, string> = {};

  for (const themeKey in theme) {
    const newThemeKey = themeKey.replace(/^--/, "");
    const newThemeValue = `hsl(var(${themeKey}))`;
    tailwindVariables[newThemeKey] = newThemeValue;


  }

  return tailwindVariables;
}

export { generateVariables, cn };
