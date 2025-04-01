import React from "react";
import { useTheme } from "../../hooks";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size="16"
      color="primary"
      sunColor="yellow"
      moonColor="white"
    />
  );
}

export { ThemeToggle };
