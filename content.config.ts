import { defineCollection, defineContentConfig } from "@nuxt/content";


export default defineContentConfig({
  collections: {
    policies: defineCollection({
      type: "page",
      source: {
        repository: "https://github.com/straorgau/policies/tree/main",
        include: "policies/*.md"
      },
    }),
    media: defineCollection({
      type: "page",
      source: {
        repository: "https://github.com/straorgau/media-releases/tree/main",
        include: "media/**/*.md"
      },
    })
  }
})