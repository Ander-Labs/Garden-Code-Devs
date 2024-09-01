import { z } from "zod";

export const RepositorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  owner: z.string(),
  url: z.string().url(),
  stars: z.number(),
  tags: z.array(z.string()), // Relación a la tabla de tags
  programmingLanguageIds: z.array(z.string()), // Relación a la tabla de lenguajes de programación
  contributorId: z.string(), // Relación al contribuyente
});

export type Repository = z.infer<typeof RepositorySchema>;
