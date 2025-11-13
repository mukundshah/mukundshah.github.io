---
title: "Nuxt Recipe: Explicit Layouts and Component Colocation"
description: "A hacky module I built to solve my own problems: making nested layouts explicit and keeping pages with their components. The solution was influenced by Next.js App Router's approach."
publishedAt: 2025-09-13
readingMins: 18
---

While working with Nuxt, something felt off. I was building out nested layouts and trying to keep components close to the pages that used them, but the patterns just didn't feel right.

After some thinking, I figured out what was bothering me: nested layouts were confusing (is this file a page or a layout?), and I couldn't keep components next to their pages without them accidentally becoming routes.

So I built a little module to solve both problems:

1. **Explicit nested layouts** using `@layout.vue` files
2. **Component colocation** - Keep pages and their components together using `@components` directories

The solution was influenced by Next.js App Router's approach (I've used it for a project or two in the past), but this is really about solving my own problems with Nuxt. It's a bit hacky, but it works!

## The Problems I Was Trying to Solve

### Problem 1: The Layout Pattern Was Confusing

Nuxt already supports nested layouts, but I didn't like how it was done. The pattern looks like this:

```text
pages/
 ├─ profile.vue       // This is actually a layout wrapper
 └─ profile/
    ├─ index.vue      // Child route
    └─ favorite.vue   // Child route
```

And honestly? This bugs me. Here's why:

- `profile.vue` looks like a page, but it's really just a layout wrapper. That's confusing!
- When you have a bunch of folders, it gets hard to remember which `.vue` file is a layout and which is an actual route
- The mental model breaks down: is this a route or a layout? Who knows!

The pattern works, but once things get bigger, it starts to feel messy. I wanted something clearer - a way to explicitly mark what's a layout versus what's a page.

### Problem 2: Can't Keep Pages and Components Together

I like keeping components close to the pages that use them. It makes the codebase easier to navigate - when I'm working on a page, I want its components right there, not scattered in some global `components/` folder.

But Nuxt will turn anything in the `pages/` directory into a route. So if I put a component in `pages/blog/PostCard.vue`, it becomes a route (which I definitely don't want).

I wanted to be able to do this:

```text
pages/
  blog/
    index.vue
    [slug].vue
    PostCard.vue      # I want this here, but it becomes a route!
```

I just want to keep my pages and their components together, you know? That's the real problem I was trying to solve.

## My Solution: Two Features in One Module

### Feature 1: Explicit Layouts with @layout.vue

Nuxt's nested layout pattern works, but I wanted it to be more explicit. I remembered how Next.js App Router uses `layout.tsx` files - it's immediately clear what's a layout. I thought, why not do something similar in Nuxt with `@layout.vue`? So I built a module that makes this work:

```text
pages/
 └─ profile/
    ├─ @layout.vue     // Ah, clearly a layout!
    ├─ index.vue       // And this is clearly a page
    └─ favorite.vue    // This too!
```

Much better, right? Now it's obvious what's what just by looking at the file structure.

### Feature 2: Component Colocation with @components

And for keeping pages and components together, I added support for `@components` directories. Anything inside a `@components` folder won't become a route, so you can keep your components right where they belong:

```text
pages/
  blog/
    @layout.vue
    index.vue
    [slug].vue
    @components/
      PostCard.vue      # Lives right here with the blog pages
      AuthorBio.vue      # Same, right where it's used
```

Now I can keep all my blog-related components right there with the blog pages, exactly where I need them. No more hunting through a global components folder or wondering where a component lives. Pretty neat, right?

## The Module

Here's the module I put together. It hooks into Nuxt's `pages:extend` hook and does some route transformation magic:

```typescript
import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'component-in-pages',
  },
  async setup(options, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      // Step 1: Filter out routes with @components in the file path
      const filtered = pages.filter(route => !route.file?.includes('/@components'))

      // Step 2: Identify layout routes and regular routes
      const layouts = [] as typeof pages
      const regularRoutes = [] as typeof pages

      filtered.forEach((route) => {
        if (route.file?.includes('/@layout')) {
          layouts.push(route)
        } else {
          regularRoutes.push(route)
        }
      })

      // Step 3: Transform layouts and build the hierarchy
      const result = [] as typeof pages
      const processedRoutes = new Set()

      layouts.forEach((layout) => {
        // Rewrite the path: remove /@layout
        const layoutPath = layout.path.replace('/@layout', '')
        const layoutDir = layout.file?.substring(0, layout.file?.lastIndexOf('/') ?? 0)

        // Find children: routes whose file path starts with the layout's directory
        const children = regularRoutes.filter((route) => {
          // Check if the route's file is within the layout's directory or subdirectories
          return route.file.startsWith(`${layoutDir}/`) && route.file !== layout.file
        })

        // Mark children as processed
        children.forEach(child => processedRoutes.add(child))

        // Add the layout with its children
        result.push({
          ...layout,
          path: layoutPath,
          children: children.map(child => ({ ...child })),
        })
      })

      // Step 4: Add remaining routes that weren't nested under a layout
      regularRoutes.forEach((route) => {
        if (!processedRoutes.has(route)) {
          result.push({ ...route })
        }
      })

      // Step 5: Clear the original array and add back only the filtered pages
      pages.length = 0
      pages.push(...result)
    })
  },
})
```

## How It Works (The Quick Version)

The module intercepts Nuxt's page discovery process and does two main things:

**First**, it filters out any routes that have `/@components` in their file path. This lets you keep components right next to your pages without them becoming routes.

**Then**, it handles the layout magic:

1. **Separates layouts from regular routes** - Anything with `/@layout` in the path is treated as a layout
2. **Builds the hierarchy** - Finds all routes in a layout's directory and nests them as children
3. **Cleans up paths** - Removes `/@layout` from the route path
4. **Adds standalone routes** - Routes that aren't under a layout stay at the top level

Pretty straightforward, right? It's just reorganizing the routes array before Nuxt builds the router.

## How to Use It

1. **Drop this in your project** - Create `modules/component-in-pages.ts` and paste the code above. Nuxt will auto-register it since it's in the `modules/` directory.

2. **Organize your pages** like this:

   ```text
   pages/
     blog/
       @layout.vue          # Layout wrapper
       index.vue            # /blog
       [slug].vue           # /blog/:slug
       @components/
         PostCard.vue       # Not a route (ignored)
     admin/
       @layout.vue          # Admin layout
       dashboard.vue        # /admin/dashboard
       users.vue            # /admin/users
     about.vue              # /about (standalone, no layout)
   ```

3. **Write your layout files** like normal Vue components:

   ```vue
   <!-- pages/blog/@layout.vue -->
   <template>
     <div class="blog-layout">
       <nav>...</nav>
       <NuxtPage /> <!-- renders children -->
     </div>
   </template>
   ```

That's it! The module handles the rest. Your `/blog` and `/blog/:slug` routes will automatically nest under the blog layout, `/about` stays standalone, and you can keep all your components right next to the pages that use them.

**Quick tip**: Use `<NuxtPage />` in your layouts (not `<slot />`) to render child routes, just like Nuxt's built-in nested routes.

**Another tip**: You can import components from `@components` directories just like any other component. They're regular Vue components, just not routes! This way, everything stays together - pages and their components, right where you need them.

## Things to Keep in Mind

- The module looks for `/@layout` in file paths, so make sure your layout files follow that naming
- Pages nest based on directory structure - `pages/blog/posts/[id].vue` will be under `pages/blog/@layout.vue`
- Layout paths get cleaned up (removing `/@layout`), so `pages/blog/@layout.vue` becomes the `/blog` route
- This modifies the pages array directly, so watch out for conflicts with other modules that hook into `pages:extend`

## Why I Like This Approach

- **It's self-documenting** - The file structure tells you exactly what's going on
- **No more confusion** - Layouts are layouts, pages are pages. Simple.
- **Everything stays together** - Pages and their components live in the same place, making it easier to find and maintain code
- **Familiar pattern** - If you've used Next.js App Router, this feels natural
- **Scales better** - As your app grows, the structure stays clear

## The Bottom Line

This is definitely a hack, but it solves two real problems I was having:

1. The `@layout.vue` convention makes nested layouts explicit - no more guessing if a file is a layout or a page
2. The `@components` directories let me keep pages and their components together, right where I need them

Both of these patterns could totally work as native Nuxt features someday (hint hint, Nuxt team 👀).

If you're like me and find the `parent.vue` pattern confusing, or if you want to keep your pages and components together, give this a try. It might just make your life a bit easier!
