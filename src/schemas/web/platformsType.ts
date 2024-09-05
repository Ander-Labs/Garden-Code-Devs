//src/shemas/web/platformsType.ts

import { z } from "zod";

export const PlatformSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  url: z.string().url(),
  categorys: z.array(z.string()),
  tags: z.array(z.string()),
  contributor: z.object({
    username: z.string(),
    uid: z.string(),
    avatar: z.string().url(),
}), // Relación al contribuidor
});

export type Platform = z.infer<typeof PlatformSchema>;
