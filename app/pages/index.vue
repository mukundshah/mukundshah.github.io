<script setup lang="ts">
import { Contact as contact } from '@/data'
import projects from '@/data/projects'

const socialLinks = [
  { label: 'LinkedIn', to: `https://linkedin.com/in/${contact.linkedin}` },
  { label: 'GitHub', to: `https://github.com/${contact.github}` },
]

const { data: posts } = await useAsyncData(
  'posts',
  async () => {
    let query = queryCollection('content')
      .select('path', 'title', 'description', 'date', 'draft')
      .where('path', 'LIKE', '/writings/%')

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    return await query.order('date', 'DESC').limit(2).all()
  },
)

defineOgImageComponent('OgImageSplash')

const socialLinksWithEmail = [
  { label: 'Email', to: `mailto:${contact.email}` },
  ...socialLinks,
]
</script>

<template>
  <main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8">
      <h1 class="text-3xl text-neutral-100">
        Hi, I'm Mukund 👋
      </h1>

      <p class="w-auto max-w-[60ch] leading-6">
        a <span class="text-fuchsia-400"> product-centric full-stack engineer </span>
        with <span class="text-fuchsia-400"> 4+ years </span> of experience building fintech and consumer-facing apps at scale.
        Passionate about simplifying money and creating user-first products.

        <br />
        <br />

        <span class="text-fuchsia-400">TypeScript</span>, <span class="text-fuchsia-400">Python</span>, and <span class="text-fuchsia-400">Go</span> are my primary languages.
        I work with <span class="text-fuchsia-400">Vue/Nuxt</span>, <span class="text-fuchsia-400">React/Next.js</span>, and <span class="text-fuchsia-400">Django/FastAPI</span> to build scalable, secure platforms.
      </p>

      <Links :links="socialLinksWithEmail" />
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Latest writings
        </h3>
        <NuxtLink active-class="text-neutral-100" class="underline decoration-dotted hover:text-neutral-100" to="/writings">
          See all writings
        </NuxtLink>
      </header>

      <p v-if="!posts || posts.length === 0">
        Soon, stay connected 👀...
      </p>

      <section class="flex flex-col gap-4 md:flex-row md:flex-wrap">
        <PostCard
          v-for="post in posts?.slice(0, 2)"
          :key="post?.path"
          class="w-full"
          :date="post?.date"
          :description="post?.description"
          :path="post?.path!"
          :title="post?.title!"
        />
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Selected projects ({{ projects.length }})
        </h3>
      </header>
      <p v-if="projects.length === 0">
        Oops, I must work^^^^^
      </p>

      <section class="flex flex-col gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Get in touch
        </h3>
      </header>
      <p>
        Email me at
        <NuxtLink active-class="text-neutral-100" class="underline decoration-dotted hover:text-neutral-100" :to="`mailto:${contact.email}`">
          {{ contact.email }}
        </NuxtLink>
        or follow me via my social links.
      </p>

      <Links :links="socialLinks" />
    </article>
  </main>
</template>
