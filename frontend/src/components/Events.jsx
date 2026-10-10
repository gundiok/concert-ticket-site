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
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Tour Dates
      </Typography>
      <Stack spacing={2}>
        {events.map((event) => (
          <Card key={event.id}>
            <CardActionArea component={Link} to={`/events/${event.id}`}>
              <CardContent>
                <Typography variant="h5" component="h2">
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
