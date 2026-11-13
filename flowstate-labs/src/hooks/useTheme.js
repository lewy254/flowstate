import { useState } from "react";

const STORAGE_KEY = "theme";

// The inline script in each page's <head> sets data-theme="dark" before
// first paint; this hook mirrors that value and handles the toggle.
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}
