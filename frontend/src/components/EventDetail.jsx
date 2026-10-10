import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router";
import { formatTime, formatPrice } from "../utils/formatter";

const EventDetail = () => {
  const event = useLoaderData();

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", py: 4 }}>
      {/* TODO: replace with real event image */}
      <Box
        sx={{
          height: 200,
          bgcolor: "grey.300",
          borderRadius: 3,
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {event.title}
      </Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography>
          {event.venue}, {event.city}
        </Typography>
        <Typography color="text.secondary">
          Doors open at {formatTime(event.doorsOpenAt)}
        </Typography>
        <Typography fontWeight="bold">
          {formatPrice(event.priceCents)}
        </Typography>
      </Stack>
      <Typography sx={{ mb: 4 }}>{event.description}</Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" disabled>
          Buy tickets (coming soon)
        </Button>
        <Button component={Link} to="/events">
          All Events
        </Button>
      </Stack>
    </Box>
  );
};

export default EventDetail;
