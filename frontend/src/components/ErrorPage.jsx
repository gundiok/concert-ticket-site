import { useRouteError, isRouteErrorResponse } from "react-router";
import Nav from "./Nav";
import { Container, Typography } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let title = "Something went wrong";
  let message = "Please try again later.";
  if (isRouteErrorResponse(error) && error.status === 404) {
    title = "Page not found";
    message =
      error.data?.message ?? "The page you're looking for doesn't exist.";
  }
  return (
    <Container>
      <Nav />

      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography>{message}</Typography>
    </Container>
  );
};

export default ErrorPage;
