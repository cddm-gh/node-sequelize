import express, { json } from "express";
import morgan from "morgan";
// Routes
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";

const app = express();
// Middlewares
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
// Using routes
app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);

export default app;
