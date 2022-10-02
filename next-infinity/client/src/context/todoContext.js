import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();
import {createTheme}from "@mui/material"

// custom hooks for ThemeContext Consumers
export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// function for ThemeContext Provider
export const ThemeProvider = ({ children }) => {
  const [themeToggler, setThemeToggler] = useState("light");

  return (
    <ThemeContext.Provider value={themeToggler}>
      <ThemeUpdateContext.Provider value={() => setThemeToggler(prevState => (prevState === "light" ? "dark" : "light"))}>
          <ThemeProviderMui  theme={theme}>
        {children}
        </ThemeProviderMui>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

