"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark") === "true";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const themeToggle = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("dark", newTheme.toString());
  };

  return (
    <button onClick={themeToggle}>{theme ? <SunIcon /> : <MoonIcon />}</button>
  );
}
