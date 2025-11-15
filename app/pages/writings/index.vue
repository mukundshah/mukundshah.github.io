<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'posts:all',
  async () => {
    let query = queryCollection('content')
      .select('path', 'title', 'description', 'date', 'draft')
      .where('path', 'LIKE', '/writings/%')

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    return await query.order('date', 'DESC').all()
  },
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
        :date="post?.date"
        :description="post?.description"
        :path="post?.path"
        :title="post?.title"
      />
    </article>
  </main>
</template>
