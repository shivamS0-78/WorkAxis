import express from 'express';
import authRoutes from './auth.js';
import projectRoutes from './projects.js'

const router = express.Router();
router.use('/auth', authRoutes);
router.use("/projects", projectRoutes);

export default router;
