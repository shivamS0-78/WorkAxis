import express from "express";
import authMiddleware from "../middleware/auth-middleware";
import { getProjects } from "../controllers/projects";
const router = express.Router();

router.get("/",authMiddleware,getProjects);

export default router ;