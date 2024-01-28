import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { csrf } from "hono/csrf";
import { todos } from "./todo/api";

const app = new Hono();

app.use("/api/*", csrf())

app.use("/api/*", basicAuth({
  username: "shinasho",
  password: "Sngw1234"
}))

app.route("/api/todos", todos);

export default app
