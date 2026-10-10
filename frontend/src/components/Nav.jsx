import { Button, Box } from "@mui/material";
import { NavLink } from "react-router";
import band from "../data/band";

const Nav = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        py: 2,
        "& .active": {
          color: "secondary.main",
          fontWeight: 700
        },
      }}
    >
      <Button component={NavLink} to="/">
        <Box component="img" src={band.logoSmall} sx={{height: "3rem", width:"auto"}} alt="Kätälyst, link">

        </Box>
      </Button>
      <Button component={NavLink} to="/events">
        Events
      </Button>
       <Button component={NavLink} to="/media">
        Media
      </Button>
       <Button component={NavLink} to="/band">
        Band
      </Button>
      <Button component={NavLink} to="/tickets">
        Tickets
      </Button>

    </Box>
  );
};

export default Nav;
