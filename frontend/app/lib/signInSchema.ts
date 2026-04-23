import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid Email Address'),
  password: z.string().min(6, 'Password is required'),
});

export const signUpSchema = z.object({
  email: z.string().email('Invalid Email Address'),
  password: z.string().min(8, 'Password must be 8 characters'),
  name: z.string().min(3, 'Name must be atleast 3 characters'),
});
