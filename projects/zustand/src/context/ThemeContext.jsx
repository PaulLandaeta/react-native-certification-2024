import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "./ThemeStyles";

// Creando una pequeña base Datos de Estados
export const ThemeContext = createContext();

// Creando un Provider para el Contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // el color actual del tema es light?
  const isLight = theme === "light";

  const colors = isLight ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
