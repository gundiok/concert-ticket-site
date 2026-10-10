import { Typography, Box, Button, Container, Stack } from "@mui/material";
import band from "../data/band";
import { Link } from "react-router";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          minHeight: { xs: 420, md: 560 },
          borderRadius: 4,
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 20, 0.1), rgba(11, 11, 20, 0.95)), url(${band.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 640 }}>
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            gutterBottom
            sx={{ textShadow: "0 0 24px rgba(255, 42, 109, 0.6)" }}
          >
            <Box
              component="img"
              src={band.logo}
               sx={{"width":"100%", maxWidth: "50%"}}
              alt={band.name}
            ></Box>
          </Typography>

          <Typography sx={{ mb: 3 }}>{band.bio}</Typography>

          <Button
            component={Link}
            to="/events"
            variant="contained"
            size="large"
          >
            See tour dates
          </Button>
        </Box>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={10}
        sx={{ alignItems: "center" }}
      >
        <Box
          component="img"
          src={band.bioImage}
          loading="lazy"
          alt="Kätälyst band members performing, black-and-white collage"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            borderRadius: 3,
            display: "block",
            flex: 1,
          }}
        ></Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About the band
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: "60ch",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.2rem",
              lineHeight: "1.8rem",
            }}
            gutterBottom
          >
            {band.bioText}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
