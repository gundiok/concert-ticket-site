import { redirect } from "react-router";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.status === 401) {
    return response.json();
  }

  if (!response.ok) {
    throw new Error("Login failed, please try again later");
  }
  const responseData = await response.json();
  const token = responseData.token;
  const user = responseData.username;
  localStorage.setItem("adminToken", token);
  localStorage.setItem("adminUser", user);
  return redirect("/admin/stats");
};
