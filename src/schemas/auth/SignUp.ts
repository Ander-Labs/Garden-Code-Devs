import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  displayName: z.string().min(1, "Display name is required"),
  githubUserName: z.string().optional(),
});
