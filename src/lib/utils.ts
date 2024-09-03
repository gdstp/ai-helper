import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileSizeFromBase64(base64String: string) {
  const base64WithoutPrefix = base64String.replace(
    /^data:image\/\w+;base64,/,
    ""
  );

  const padding = "=".repeat((4 - (base64WithoutPrefix.length % 4)) % 4);
  const base64 = (base64WithoutPrefix + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const binaryData = Buffer.from(base64, "base64");
  const fileSizeInBytes = binaryData.length;
  const fileSizeInKB = fileSizeInBytes / 1024;
  const fileSizeInMB = fileSizeInKB / 1024;

  return {
    bytes: fileSizeInBytes,
    kilobytes: fileSizeInKB,
    megabytes: fileSizeInMB,
  };
}

export function parseFileInBytes(sizeInBytes: number) {
  if (sizeInBytes < 1024) {
    return sizeInBytes + " B";
  } else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + " KB";
  } else {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
  }
}

export function formatFileSize(file: string) {
  const bytes = getFileSizeFromBase64(file).bytes;

  return parseFileInBytes(bytes);
}
