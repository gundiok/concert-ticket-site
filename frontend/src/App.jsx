import { Outlet, Link } from "react-router";
import { Button, Container, Box } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Box
        component="nav"
        sx={{ display: "flex", justifyContent: "center", gap: 2, py: 2 }}
      >
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/">
          Events
        </Button>
      </Box>
      <Outlet />
    </Container>
  );
};

export default App;
