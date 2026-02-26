import cors from "cors";
import express from "express";
import { todoRoutes } from "./routes/todo.routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import { errorMiddleware } from "./middleware/error.middleware";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/health", (_req, res) => {
  res.json({ success: true, message: "API is running 🚀" });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorMiddleware);

export default app;
