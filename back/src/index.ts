import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { todoRoutes } from "./routes/todo.routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API is running 🚀" });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

function startServer(port: string | number = PORT) {
  return app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/docs`);
  });
}

if (require.main === module) {
  startServer(PORT);
}

export default app;
export { startServer };
