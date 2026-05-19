import cors from "cors";
import express from "express";
import { routes } from "./routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});
