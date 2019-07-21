import { Router } from "express";
import Task from "../controllers/Task";

const router = Router();

router.get("/", Task.getTasks);
router.get("/:id", Task.getTaskById);
router.get("/project/:projectid", Task.getTasksByProject);
router.post("/", Task.createTask);
router.delete("/:id", Task.deleteTask);
router.put("/:id", Task.updateTask);

export default router;
