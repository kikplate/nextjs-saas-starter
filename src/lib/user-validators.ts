import { z } from "zod";

export const createUserBodySchema = z.object({
  email: z.string().email().max(320),
  name: z.string().trim().min(1).max(255),
});

export const userIdParamSchema = z.string().uuid();

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
