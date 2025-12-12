// src/components/Header/Content.js
import { useTheme } from "../../context/Theme/useTheme";

export default function Content() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        marginTop: "1rem"
      }}
    >
      <p>This is the content area.</p>
    </div>
  );
}
