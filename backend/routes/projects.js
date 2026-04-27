import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import { getProjects } from "../controllers/projects.js";
const router = express.Router();

router.get("/",authMiddleware,getProjects);

export default router ;