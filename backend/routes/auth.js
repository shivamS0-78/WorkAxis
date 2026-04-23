import express from 'express';

import { z } from 'zod';
import { validateRequest } from 'zod-express';
import {
  registerSchema,
  loginSchema,
  verifyEmailSchema,
} from '../libs/validateSchema.js';
import {
  loginUser,
  registerUser,
  verifyEmail,
} from '../controllers/auth-controller.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

const router = express.Router();

router.post(
  '/register',
  validateRequest({
    body: registerSchema,
  }),
  registerUser
);

router.post(
  '/login',
  validateRequest({
    body: loginSchema,
  }),
  loginUser
);

router.post(
  '/verify-email',
  validateRequest({
    body: verifyEmailSchema,
  }),
  verifyEmail
);

export default router;
