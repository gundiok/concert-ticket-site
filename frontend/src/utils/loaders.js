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
