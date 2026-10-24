import { redirect } from "react-router";

export const orderAction = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const quantity = Number(formData.get("quantity"));
  const eventId = params.id;

  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, quantity, eventId }),
  });

  if (!response.ok) {
    throw new Error("Failed to process order");
  }

  const order = await response.json();
  const orderId = order.id;
  return redirect(`/orders/${orderId}`);
};
