import { Form, useActionData } from "react-router";
import { Stack, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const data = useActionData();

  return (
    <Form method="post">
      <Typography variant="h2" component="h1">
        Admin login
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 600, my: 4 }}>
        <TextField
          label="Username"
          name="username"
          required
          autoComplete="username"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        {data && (
          <Typography sx={{ color: "error.main" }} role="alert">
            {data.message}
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </Form>
  );
};

export default Login;
