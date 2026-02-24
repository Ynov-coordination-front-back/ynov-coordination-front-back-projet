import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { todoRoutes } from "./routes/todo.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API is running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
