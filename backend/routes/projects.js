import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import { createProjects, getProjects } from "../controllers/projects.js";
import Project from "../model/projects.js";
import { projectSchema } from "../libs/validateSchema.js";
import { validateRequest } from "zod-express";
const router = express.Router();

router.get("/",authMiddleware,getProjects);

router.post("/create-project",
    authMiddleware,
    validateRequest({
        body: projectSchema, 
    }),
    createProjects,
);

export default router ;