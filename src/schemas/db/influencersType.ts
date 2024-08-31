import { z } from "zod";

export const SocialMediaSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
});

export const InfluencerSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  mainPlatform: z.string(),
  urlMainPlatform: z.string().url(),
  subscribersCount: z.number(),
  country: z.string().optional(),
  profilePictureUrl: z.string().url(),
  socialMedia: z.array(SocialMediaSchema),
});

export type Influencer = z.infer<typeof InfluencerSchema>;
