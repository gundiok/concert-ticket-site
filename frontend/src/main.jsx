import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import EventDetail from "./components/EventDetail.jsx";

import ErrorPage from "./components/ErrorPage.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import "@fontsource/orbitron/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import Tickets from "./components/Tickets.jsx";
import Events from "./components/Events.jsx";
import { eventLoader, eventsLoader, homeLoader } from "./utils/loaders.js";
import Media from "./components/Media.jsx";
import Band from "./components/Band.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> , loader: homeLoader},
      { path: "events", element: <Events />, loader: eventsLoader },
      { path: "events/:id", element: <EventDetail />, loader: eventLoader },
      { path: "tickets", element: <Tickets /> },
      { path: "media", element: <Media /> },
      { path: "band", element: <Band /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
);
