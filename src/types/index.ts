import { z } from "astro:content";

export const patternSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
  dateUpdated: z.string().optional(),
  isDraft: z.boolean().default(false),
});
