import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSeoCollection({
        type: 'page',
        source: '**',
        schema: z.object({
          date: z.coerce.date(),
          readingMins: z.number(),
          draft: z.boolean().default(false),
        }),
      }),
    ),
  },
})
