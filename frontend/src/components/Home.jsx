import { Typography, Box, Button, Container, Stack } from "@mui/material";
import band from "../data/band";
import { Link, useLoaderData } from "react-router";
import { formatPrice, formatTime, getDateParts } from "../utils/formatter";

const Home = () => {
  const event = useLoaderData();

  const dateParts = event ? getDateParts(event.doorsOpenAt) : null;

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          minHeight: { xs: 420, md: 560 },
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Box sx={{ p: { xs: 3, md: 6 }, textAlign: "center", width: "100%" }}>
          <Typography variant="h2" component="h1" gutterBottom>
            <Box
              component="img"
              src={band.logo}
              sx={{ width: { xs: "90%", md: "100%" }, maxWidth: 1000 }}
              alt={band.name}
            ></Box>
          </Typography>

          <Typography sx={{ mb: 3, maxWidth: "60ch", mx: "auto" }}>
            {band.bio}
          </Typography>

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
          }}
        ></Box>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            About the band
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: "60ch",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.2rem",
              lineHeight: "1.5",
            }}
            gutterBottom
          >
            {band.bioText}
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          m: 10,
          mx: "auto",

          bgcolor: "rgba(21, 20, 20, 0.6)",
          backdropFilter: "blur(8px)",
          border: 1,
          borderColor: "rgba(102, 51, 55, 0.3)",
          maxWidth: 700,
          borderRadius: 3,
          p: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "primary.main", mb: 3, textAlign: "center" }}
        >
          UPCOMING EVENT
        </Typography>
        {event ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 5, md: 10 },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                component="span"
                sx={{ color: "primary.main" }}
                gutterBottom
              >
                {dateParts.day}
              </Typography>
              <Typography variant="h3" component="span">
                {dateParts.month}
              </Typography>
              <Typography variant="h4" component="span">
                {dateParts.year}
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="h5" component="h3">
                {event.city}, {event.venue}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                Doors {formatTime(event.doorsOpenAt)}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 900 }}>
                {formatPrice(event.priceCents)}
              </Typography>

              <Button
                component={Link}
                to={`/events/${event.id}`}
                variant="contained"
                sx={{ mt: 2 }}
              >
                Buy Tickets
              </Button>
            </Stack>
          </Box>
        ) : (
          <Typography>New dates coming soon!</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Home;
