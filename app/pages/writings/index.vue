<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'posts',
  () => queryCollection('content')
    .select('path', 'title', 'description', 'publishedAt')
    .where('path', 'LIKE', '/writings/%')
    .where('draft', '<>', true)
    .order('publishedAt', 'DESC')
    .all(),
)
</script>

<template>
  <main class="flex flex-col gap-20">
    <h1 class="text-2xl text-neutral-100">
      Writings
    </h1>

    <article class="flex flex-col gap-4">
      <p v-if="!posts || posts.length === 0">
        Soon, stay connected 👀...
      </p>

      <PostCard
        v-for="post in posts"
        :key="post?.path"
        :description="post?.description"
        :path="post?.path"
        :published-at="post?.publishedAt"
        :title="post?.title"
      />
    </article>
  </main>
</template>
