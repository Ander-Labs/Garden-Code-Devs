//src/shemas/web/platformsType.ts

import { z } from "zod";

export const PlatformSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().min(10, "La descripción es obligatoria"),
  url: z.string().url("La URL no es válida"),
  categorys: z
    .array(z.string())
    .min(1, "Debes seleccionar al menos una categoría"),
  tags: z.array(z.string()).min(1, "Debes seleccionar al menos un tag"),
  contributor: z.object({
    username: z.string().optional(),
    uid: z.string().optional(),

  }),
});



export type Platform = z.infer<typeof PlatformSchema>;
