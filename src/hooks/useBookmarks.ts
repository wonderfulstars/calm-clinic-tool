import { useState, useEffect } from "react";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("shield-bookmarks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shield-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (diseaseId: string) => {
    setBookmarks((prev) =>
      prev.includes(diseaseId) ? prev.filter((id) => id !== diseaseId) : [...prev, diseaseId]
    );
  };

  const isBookmarked = (diseaseId: string) => bookmarks.includes(diseaseId);

  return { bookmarks, toggleBookmark, isBookmarked };
}
