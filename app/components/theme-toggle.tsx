"use client";

import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="bg-foreground text-background px-6 py-2 rounded-[52px]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
