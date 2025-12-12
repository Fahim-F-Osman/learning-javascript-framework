// src/context/Theme/ThemeContext.js
import { createContext } from "react";

// Default value (optional but good for auto-complete / safety)
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});
