import { App } from "@tinyhttp/app";

const app = new App();

app.get("/", async (req, res) => {
  res.send(ok);
});

export default app;
