import {
  Container,
  Typography,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  Paper,
  TableHead,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import { useNavigate, useLoaderData } from "react-router";
import { formatPrice } from "../utils/formatter";

const AdminStats = () => {
  const data = useLoaderData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin");
  };

  return (
    <Container sx={{ px: { xs: 1, md: 10 } }}>
      {data.length === 0 && <Typography>No sales yet</Typography>}
      <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-between" }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            m: { xs: 1, md: 6 },
            p: { xs: 1, md: 6 },
            fontSize: { xs: "3rem", md: "4rem" },
          }}
        >
          Sales Overview
        </Typography>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          border: "1px solid rgba(223, 8, 26, 0.3)",
          boxShadow: "0 0 12px rgba(223, 8, 26, 0.25)",
          borderRadius: 2,
        }}
      >
        <Table size={isMobile ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Event</TableCell>
              <TableCell align="right">Tickets Sold</TableCell>
              <TableCell align="right">Tickets Available</TableCell>
              <TableCell align="right">Total Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((event) => (
              <TableRow key={event.eventId}>
                <TableCell align="right">{event.title}</TableCell>
                <TableCell align="right">{event.ticketsSold}</TableCell>
                <TableCell align="right">{event.ticketsAvailable}</TableCell>
                <TableCell align="right">
                  {formatPrice(event.revenueCents)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminStats;
