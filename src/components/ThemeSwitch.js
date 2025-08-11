"use client";
import { useTheme } from "next-themes";
import { Button } from "#/base";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      icon={theme === "dark" ? "tabler:moon" : "tabler:sun"}
      color="transparent"
      className="p-1 text-white hover:text-white/80"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
