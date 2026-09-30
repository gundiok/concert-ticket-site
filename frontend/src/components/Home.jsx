import {
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
  CardActionArea,
} from "@mui/material";
import events from "../data/events";
import { Link } from "react-router";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        KATALYST
      </Typography>
      <Typography sx={{ mb: 4, textAlign: "center" }}>
        {/* TODO: replace with band's real intro */}
        KATALYST brings their sound from Bangladesh to Finland this winter.
        Catch them live in Helsinki, Tampere and Turku. Grab your tickets before
        they're gone.
      </Typography>

      <Stack spacing={2}>
        {events.map((event) => (
          <Card key={event.id}>
            <CardActionArea component={Link} to={`events/${event.id}`}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {event.city}, {event.venue}
                </Typography>
                <Typography color="text.secondary">{event.date}</Typography>
                <Typography>{event.price.toFixed(2)}€</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
