import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    city: z.string().default("Hamburg"),
    venue: z.string(),
    address: z.string(),
    startTime: z.string(),
    format: z.string().default("Silver Age"),
    entryFee: z.string().optional(),
    playerCap: z.number().optional(),
    registerUrl: z.string().url().optional(),
    resultsUrl: z.string().url().optional(),
  }),
});

export const collections = { events };

