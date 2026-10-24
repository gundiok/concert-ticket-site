import { Outlet } from "react-router";
import Nav from "./components/Nav";
import { Box, Container } from "@mui/material";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";

const App = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <IntroOverlay />
      <Nav />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Container>
  );
};

export default App;
