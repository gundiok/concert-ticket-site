import { Button, Container, Typography } from "@mui/material";
import { useLoaderData, useRevalidator } from "react-router";

const OrderConfirmation = () => {
  const order = useLoaderData();
  const revalidator = useRevalidator();

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
        {order.status === "paid" &&
          `Thank you, ${order.name}, the payment has been successfully processed`}
        {order.status === "pending" &&
          `Thank you, ${order.name}, your order is being processed!`}
        {order.status === "cancelled" &&
          "Unfortunately, your order has been cancelled!"}
      </Typography>
      <Typography variant="h4" component="h1">
        Your order number: {order.orderNumber}
      </Typography>
      <Typography variant="h4" component="h1">
        Event details: {order.event.city}
      </Typography>
      {order.status === "pending" && (
        <Button onClick={() => revalidator.revalidate()}>Refresh</Button>
      )}
    </Container>
  );
};

export default OrderConfirmation;
