import { data } from "react-router";

const fetchJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw data(
      { message: "This event doesn't exist." },
      { status: response.status },
    );
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
