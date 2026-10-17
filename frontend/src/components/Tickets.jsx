import { Container, Typography, Stack, TextField, Button } from "@mui/material";
import { Form } from "react-router";

const Tickets = () => {
  return (
    <Container sx={{ mt: { xs: 3, md: 6 }, mb: 4 }}>
      <Typography variant="h3" component="h1" >
        My Tickets
      </Typography>
      <Form>
        <Stack spacing={2} sx={{ maxWidth: 600, my: 4 }}>
          <TextField label="Email Address" name="email" type="email" required />
          <TextField label="Order number" name="orderNumber" required />
          <Button type="submit" variant="contained">
            Find my tickets
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Tickets;
