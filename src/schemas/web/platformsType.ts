import { z } from "zod";

export const PlatformSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  url: z.string().url(),
  categoryId: z.string(), // Relación a la tabla de categorías
  tags: z.array(z.string()), // Relación a la tabla de tags
  logoUrl: z.string().url(),
  contributorId: z.string(), // Relación al contribuidor
});

export type Platform = z.infer<typeof PlatformSchema>;
