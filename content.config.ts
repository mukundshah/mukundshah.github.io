import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        draft: z.boolean().optional().default(false),
        publishedAt: z.iso.datetime(),
        readingMins: z.number(),
      }),
    }),
  },
})
