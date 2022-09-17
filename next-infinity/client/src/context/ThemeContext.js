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


const theme = useMemo(  () => createTheme(
//   {
//   palette: {
//     type: themeToggler === "dark" ? "dark" : "light",
//     primary: {
//       main: "#41B1A1",
//       // dark:"#41B1A1",light:"#41B1A1",
//       contrastText: themeToggler === "dark" ? " #FFFFFF" : "rgba(0, 0, 0, 0.54)"
//     },
//     secondary: {
//       main: "#BD3A1C",
//       // dark:"#BD3A1C",light:"#BD3A1C",
//       contrastText: themeToggler === "dark" ? " #FFFFFF" : "rgba(0, 0, 0, 0.54)"
//     },
//     // this line handle background of themeToggler/lightMode
//     background: themeToggler === "dark" ? { default: "#172F41", paper: "#1E3B52" } : {
//       default: "#FFFFFF", paper: "#F2F2F1"
//     },
//     tertiary: {
//       background: " #FFFFFF"
//     },
//   },
//   typography: {
//     button: { textTransform: "none" },
//     fontFamily: ["Adobe Gothic std B", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
//   },
//   // this line handle background of themeToggler/lightMode
//   background: themeToggler === "dark" ? { default: "#172F41", paper: "#1E3B52" } : {
//     default: "#FFFFFF", paper: "#F2F2F1"
//   },
//   tertiary: {
//     background: "#FFFFFF"
//   },
// }
), [themeToggler])

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

