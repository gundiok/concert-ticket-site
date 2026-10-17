import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Container,
} from "@mui/material";
import { Link, useLoaderData } from "react-router";
import { formatDate, formatPrice } from "../utils/formatter";

const Events = () => {
  const events = useLoaderData();
  return (
    <Container sx={{ mt: { xs: 3, md: 6 }, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "3rem" },
          mb: 3,
        }}
      >
        Tour Dates
      </Typography>
      <Stack spacing={2}>
        {events.map((event) => (
          <Card key={event.id}>
            <CardActionArea component={Link} to={`/events/${event.id}`}>
              <CardContent>
                <Typography variant="h5" component="h2"  sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" } }}>
                  {event.city}, {event.venue}
                </Typography>
                <Typography color="text.secondary">
                  {formatDate(event.doorsOpenAt)}
                </Typography>
                <Typography>{formatPrice(event.priceCents)}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Events;
