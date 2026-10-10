const currencyFormatter = new Intl.NumberFormat("en-FI", {
  style: "currency",
  currency: "EUR",
});

const dateFormatter = new Intl.DateTimeFormat("en-FI", {
  weekday: "long",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  timeZone: "Europe/Helsinki",
});

const timeFormatter = new Intl.DateTimeFormat("en-FI", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Helsinki",
});

export const formatPrice = (priceCents) => {
  return currencyFormatter.format(priceCents / 100);
};

export const formatDate = (date) => {
  return dateFormatter.format(new Date(date));
};

export const formatTime = (time) => {
  return timeFormatter.format(new Date(time));
};
