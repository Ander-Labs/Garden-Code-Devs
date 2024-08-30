import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
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
