"use client";
export function setItem(key: string, value: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
export function getItem(key: string) {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return item;
  } else {
    return null;
  }
}
