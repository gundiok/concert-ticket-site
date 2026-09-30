import { Box, Button, Stack, Typography } from "@mui/material";
import { useParams, Link } from "react-router";
import events from "../data/events";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Event not found!
        </Typography>
        <Button component = {Link} to="/">Back to all events</Button>
      </Box>
    );
  }
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
      >
        <img src="" alt="" />
      </Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {event.title}
      </Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography>
          {event.venue}, {event.city}
        </Typography>
        <Typography color="text.secondary">
          {event.date}, Doors open at {event.doorsOpen}
        </Typography>
        <Typography fontWeight="bold">{event.price.toFixed(2)} €</Typography>
      </Stack>
      <Typography sx={{ mb: 4 }}>{event.description}</Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" disabled >
          Buy tickets (coming soon)
        </Button>
        <Button component={Link} to="/">
          All Events
        </Button>
      </Stack>
    </Box>
  );
};

export default EventDetail;
