import { createTheme } from "@mui/material";

const headingFont = "Orbitron, sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0b0b14", paper: "#14142a" },
    primary: { main: "#ff2a6d" },
    secondary: { main: "#05d9e8" },
    text: { primary: "#e0e0f0" },
  },
  typography: {
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
  },
});

export default theme;
