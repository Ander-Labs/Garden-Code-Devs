//src/shemas/db/tagsType.ts
import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

export const TagSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export const ProgrammingLanguageSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export type ProgrammingLanguage = z.infer<typeof ProgrammingLanguageSchema>;

export type Tag = z.infer<typeof TagSchema>;

export type Category = z.infer<typeof CategorySchema>;
