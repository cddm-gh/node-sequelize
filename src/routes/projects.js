import { Router } from "express";
import Project from "../controllers/Project";

const router = Router();

router.get("/", Project.getProjects);
router.get("/:id", Project.getProjectById);
router.post("/", Project.createProject);
router.delete("/:id", Project.deleteProject);
router.put("/:id", Project.updateProject);

export default router;
