import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStrapiMedia = (url: string) => {
  const publicUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  return `${publicUrl}${url}`;
};
