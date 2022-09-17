import {createTheme}from "@mui/material"

export const themeObj = (mode)=>{
    console.log('mode', mode)
    return createTheme(
        {
            palette: {
              type: mode === "dark" ? "dark" : "light",
              primary: {
                main: "#41B1A1",
                // dark:"#41B1A1",light:"#41B1A1",
                contrastText: mode === "dark" ? " #FFFFFF" : "rgba(0, 0, 0, 0.54)"
              },
              secondary: {
                main: "#BD3A1C",
                // dark:"#BD3A1C",light:"#BD3A1C",
                contrastText: mode === "dark" ? " #FFFFFF" : "rgba(0, 0, 0, 0.54)"
              },
              // this line handle background of mode/lightMode
              background: mode === "dark" ? { default: "#172F41", paper: "#1E3B52" } : {
                default: "#FFFFFF", paper: "#F2F2F1"
              },
              tertiary: {
                background: " #FFFFFF"
              },
            },
            typography: {
              button: { textTransform: "none" },
              fontFamily: ["Adobe Gothic std B", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
            },
            // this line handle background of mode/lightMode
            background: mode === "dark" ? { default: "#172F41", paper: "#1E3B52" } : {
              default: "#FFFFFF", paper: "#F2F2F1"
            },
            tertiary: {
              background: "#FFFFFF"
            },
          }

    )
}