---
title: "Nuxt Recipe: Setting Layouts from Route Rules"
description: "A quick guide to dynamically setting layouts in Nuxt using route rules, with a custom module implementation."
date: 2024-09-14T13:45:36Z
readingMins: 5
---

## The Problem

In Nuxt, layouts are typically set in page components or via middleware. But what if you want to set layouts based on route rules for more dynamic control?

## The Solution

Here's a custom Nuxt module that allows setting layouts directly from route rules:

```typescript
import { defu } from 'defu'
import { defineNuxtModule } from 'nuxt/kit'
import { createRouter as createRadixRouter, toRouteMatcher } from 'radix3'

const declaration = `
import type { LayoutKey } from '#build/types/layouts'
declare module "nitropack" {
  interface NitroRouteConfig {
    layout?: LayoutKey | false
  }
}`

export default defineNuxtModule({
  meta: { name: 'route-rules-layout' },
  setup(_, nuxt) {
    const getRules = (url: string) => {
      const _routeRulesMatcher = toRouteMatcher(
        createRadixRouter({ routes: nuxt.options.routeRules })
      )
      return defu({}, ..._routeRulesMatcher.matchAll(url).reverse())
    }

    nuxt.hook('prepare:types', ({ declarations }) => {
      declarations.push(declaration)
    })

    nuxt.hook('pages:extend', (pages) => {
      pages.forEach((page) => {
        const rules = getRules(page.path)
        if (rules?.layout) {
          page.meta ||= {}
          page.meta.layout ??= rules.layout
        }
      })
    })
  },
})
```

## How to Use

1. Create a new file in your Nuxt project, e.g., `modules/route-rules-layout.ts`.
2. Paste the above code into this file.
3. In your `nuxt.config.ts`, add:

```typescript
export default defineNuxtConfig({
  routeRules: {
    '/admin/**': { layout: 'admin' },
    '/blog/**': { layout: 'blog' },
    // ... other route rules
  }
})
```

Now, routes matching `/admin/**` will use the `admin` layout, and those matching `/blog/**` will use the `blog` layout.

## Considerations

- Test performance with large numbers of routes
- Be aware of conflicts with layouts set in page components
- Document this approach for your team

This recipe offers a flexible way to manage layouts in Nuxt, especially useful for projects with complex routing needs.
