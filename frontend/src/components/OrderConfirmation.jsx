import { Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router";

const OrderConfirmation = () => {
  const order = useLoaderData();

  return (
    <Container
      sx={{
        my: 10,

        bgcolor: "rgba(21, 20, 20, 0.6)",
        backdropFilter: "blur(8px)",
        border: 1,
        borderColor: "rgba(223, 8, 26, 0.3)",
        maxWidth: 700,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography variant="h4" component="h1">
        Thank you, {order.name}, your order has been placed!
      </Typography>
      <Typography variant="h4" component="h1">
        Your order number: {order.orderNumber}
      </Typography>
      <Typography variant="h4" component="h1">
        Event details: {order.event.city}
      </Typography>
    </Container>
  );
};

export default OrderConfirmation;
