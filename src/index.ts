import express from "express";
import router from "./routes/authenticate";

const app = express();
const PORT = 8000;

//allow access to my own doamin only
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://code-overview.vercel.app");
  next();
});
app.use("/api", router);
app.get("/", (_, res) => res.send("<b>Code overview authenticator</b>"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
