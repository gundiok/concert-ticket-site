import { createTheme } from "@mui/material";

const headingFont = "Orbitron, sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0a0a0a", paper: "#161616" },
    primary: { main: "#d7262b" },
    secondary: { main: "#ff5a5f" },
    text: { primary: "#ededed", secondary: "#a0a0a0" },
  },
  typography: {
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "repeating-linear-gradient(0deg, rgba(215, 38, 43, 0.04) 0 1px, transparent 1px 40px),   repeating-linear-gradient(90deg, rgba(215, 38, 43, 0.04) 0 1px, transparent 1px 40px), radial-gradient(ellipse at top, rgba(140, 16, 24, 0.35), transparent 60%), radial-gradient(ellipse at bottom right, rgba(90, 0, 20, 0.28), transparent 55%), #0a0a0a",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
  },
});

export default theme;
