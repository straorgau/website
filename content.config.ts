import { defineCollection, defineContentConfig, z } from "@nuxt/content";


export default defineContentConfig({
  collections: {
    policies: defineCollection({
      type: "page",
      source: {
        repository: "https://github.com/straorgau/policies/tree/main",
        include: "policies/*.md"
      },
      schema: z.object({
        title: z.string().optional(),
        lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
      }),
    }),
    blog: defineCollection({
      type: "page",
      source: {
        repository: "https://github.com/straorgau/blog/tree/main",
        include: "posts/**/*.md",
      },
      schema: z.object({
        title: z.string().optional(),
        image: z.object({
          url: z.string(),
          alt: z.string()
        }).optional(),
        lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid Date")
      })
    })
  }
})