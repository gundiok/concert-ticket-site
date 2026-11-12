import { data, redirect } from "react-router";

const fetchJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    const errorMessage = error.message ?? "Something went wrong";

    throw data({ message: errorMessage }, { status: response.status });
  }
  return await response.json();
};

export const eventLoader = ({ params }) => {
  const id = params.id;
  return fetchJson(`/api/events/${id}`);
};

export const eventsLoader = () => {
  return fetchJson("/api/events/");
};

export const homeLoader = async () => {
  const events = await fetchJson("/api/events");
  const nextEvent = events.find(
    (event) => new Date(event.doorsOpenAt) > new Date(),
  );
  return nextEvent ?? null;
};

export const orderLoader = ({ params }) => {
  const id = params.id;
  return fetchJson(`/api/orders/${id}`);
};

export const adminStatsLoader = async () => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return redirect("/admin");
  }
  const response = await fetch("/api/admin/stats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    return redirect("/admin");
  }

  if (!response.ok) {
    throw data(
      { message: "Something went wrong" },
      { status: response.status },
    );
  }
  return response.json();
};
