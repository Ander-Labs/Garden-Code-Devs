//src/schemas/auth/SignIn.ts
import { z } from "zod";

export const SignInZ = z.object({
  email: z.string().min(4).max(50).email('Debe ser un email válido'),
  password: z.string().min(6,'Debe tener al menos 6 caracteres').max(20),
});
