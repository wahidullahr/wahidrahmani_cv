import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

// This function resolves Tailwind conflicts and allows conditional classes

// Usage: cn("bg-black", condition && "bg-red-500")

export function cn(...inputs: ClassValue[]) {

  return twMerge(clsx(inputs));

}

