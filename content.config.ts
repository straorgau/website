import { defineCollection, defineContentConfig } from "@nuxt/content";


export default defineContentConfig({
  collections: {
    policies: defineCollection({
      type: "page",
      source: {
        repository: "https://codeberg.org/stra/policies",
        include: "policies/*.md"
      },
    }),
    media: defineCollection({
      type: "page",
      source: {
        repository: "https://codeberg.org/stra/media-releases",
        include: "media/**/*.md"
      },
    })
  }
})