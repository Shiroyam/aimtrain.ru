import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const system = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

  const storage = localStorage.getItem("theme");

  const [theme, setTheme] = useState(storage ? storage : system);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};
