import { Button, Box, IconButton, Drawer, useMediaQuery } from "@mui/material";

import { Menu } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router";
import band from "../data/band";
import { useState } from "react";

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", md: "center" },
        alignItems: "center",
        gap: 2,
        py: 2,
        "& .MuiButton-root": {
          fontSize: { xs: "0.8rem", md: "1.2rem" },
          fontFamily: "Orbitron, sans-serif",
          letterSpacing: "0.06em",
        },
        "& .active": {
          color: "text.primary",
          fontWeight: 700,
        },
      }}
      aria-label="Main"
    >
      {isHome ? (
        <Button component={NavLink} to="/">
          Home
        </Button>
      ) : (
        <Button component={NavLink} to="/">
          <Box
            component="img"
            src={band.logoSmall}
            sx={{
              height: "3rem",
              width: "auto",
            }}
            alt="Kätälyst"
          />
        </Button>
      )}

      <IconButton
        sx={{ display: { xs: "flex", md: "none" } }}
        aria-label="Open menu"
        onClick={handleDrawerToggle}
        aria-expanded={drawerOpen}
      >
        <Menu />
      </IconButton>

      <Drawer
        open={drawerOpen && !isDesktop}
        onClose={handleDrawerClose}
        anchor="right"
        slotProps={{
          paper: {
            sx: {
              backgroundImage: "none",
              backgroundColor: "rgba(10, 10, 10, 0.8)",
              backdropFilter: "blur(8px)",
              borderLeft: "1px solid rgba(215, 38, 43, 0.4)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "10rem",
            padding: 2,
            flexDirection: "column",
            "& .MuiButton-root": {
              fontSize: "1.2rem",
              fontFamily: "Orbitron, sans-serif",
              letterSpacing: "0.06em",
            },
            "& .active": {
              color: "text.primary",
              fontWeight: 700,
            },
          }}
          component="nav"
          aria-label="Mobile Menu"
        >
          <Button component={NavLink} to="/events" onClick={handleDrawerClose}>
            Events
          </Button>
          <Button component={NavLink} to="/media" onClick={handleDrawerClose}>
            Media
          </Button>
          <Button component={NavLink} to="/band" onClick={handleDrawerClose}>
            Band
          </Button>
          <Button component={NavLink} to="/tickets" onClick={handleDrawerClose}>
            Tickets
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
    </Box>
  );
};

export default Nav;
