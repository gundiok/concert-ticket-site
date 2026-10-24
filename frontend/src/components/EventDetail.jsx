import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Remove, Add } from "@mui/icons-material";

import { Form, Link, useLoaderData } from "react-router";
import { formatTime, formatPrice } from "../utils/formatter";
import { useState } from "react";

const EventDetail = () => {
  const event = useLoaderData();
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
        {!showCheckout && (
          <Button
            variant="contained"
            onClick={() => setShowCheckout((prev) => !prev)}
          >
            Get tickets
          </Button>
        )}

        <Button component={Link} to="/events">
          All Events
        </Button>
      </Stack>
      {showCheckout && (
        <Form method="post">
          <Stack spacing={2} sx={{ maxWidth: 600, my: 4 }}>
            <TextField label="Name" name="name" type="text" required />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              required
              
            />
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between"}}
            >
              <input type="hidden" name="quantity" value={quantity} />

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Typography color="text.secondary">Tickets</Typography>

                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => setQuantity((q) => q - 1)}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                  >
                    <Remove fontSize="small" />
                  </IconButton>

                  <Typography
                    aria-live="polite"
                    sx={{
                      minWidth: "2.5ch",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => setQuantity((q) => q + 1)}
                    disabled={quantity === 10}
                    aria-label="Increase quantity"
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>

              <Typography sx={{ fontWeight: 700 }}>
                Total {formatPrice(event.priceCents * quantity)}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained">
                Buy tickets
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => setShowCheckout(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Box>
  );
};

export default EventDetail;
