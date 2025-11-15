<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(
  `blog-post:${route.params.slug}`,
  async () => {
    let query = queryCollection('content').path(route.path)

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    return await query.first()
  },
)

if (post.value) {
  if (post.value?.ogImage) {
    defineOgImage(post.value?.ogImage)
  } else {
    defineOgImageComponent('OgImageWritings', {
      readingMins: post.value.readingMins,
      date: post.value.date,
    })
  }
  // Ensure the schema.org is rendered
  // @ts-expect-error IDK
  useHead(post.value.head || {})
  useSeoMeta(post.value.seo || {})

  useSchemaOrg([
    defineArticle({
      dateModified: post.value.date,
      datePublished: post.value.date,
    }),
  ])
}
</script>

<template>
  <main class="mx-auto flex w-full max-w-prose flex-col gap-4">
    <template v-if="post">
      <header class="flex flex-col gap-2" role="presentation">
        <h1 class="text-4xl text-white">
          {{ post.title }}
        </h1>
        <p>
          <NuxtTime
            :datetime="post.date"
            v-bind="{
              locale: 'en-US',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }"
          />
          &bull;
          {{ post.readingMins }} min read
        </p>
      </header>

      <div class="mt-4">
        <p class="italic">
          {{ post.description }}
        </p>
      </div>

      <ContentRenderer class="post" :value="post" />
    </template>
    <template v-else>
      <p class="text-center text-neutral-400">
        Article not found.
      </p>
    </template>
  </main>
</template>

<style>
@reference 'assets/css/tailwind.css';

.post h2 {
  @apply mt-6 text-2xl text-neutral-100;
}

.post h3 {
  @apply mt-4 text-xl text-neutral-100;
}

.post h2 a,
.post h3 a {
  @apply no-underline;
}

.post p {
  @apply leading-7 mt-4;
}

.post a {
  @apply text-neutral-100 underline;
}

.post img {
  @apply rounded my-4;
}

.post ul {
  @apply list-disc pl-4;
}

.post ol {
  @apply list-decimal pl-4;
}

.post li {
  @apply mt-2;
}

.post blockquote {
  @apply flex mt-4 flex-row gap-2 before:block before:h-auto before:w-2 before:max-w-[2px] before:bg-fuchsia-400 before:content-[''];
}

.post blockquote p {
  @apply mt-0;
}

.post pre {
  @apply px-6 my-2 -inset-4 bg-[#11111b] rounded overflow-x-auto;
}

.post pre > code {
  @apply bg-transparent text-sm leading-relaxed;
}

.post code {
  @apply rounded-sm bg-[#11111b] px-1 py-[2px] text-fuchsia-300;
}
</style>
