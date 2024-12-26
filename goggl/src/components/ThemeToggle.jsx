import { useEffect } from "react";
import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === "light" ? "🌒 Dark" : "🌔Light"}
    </button>
  );
};
export default ThemeToggle;
