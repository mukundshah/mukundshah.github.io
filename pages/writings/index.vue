<template>
  <main class="flex flex-col gap-20">
    <h1 class="text-2xl text-neutral-100">
      Writings
    </h1>

    <article class="flex flex-col gap-4">
      <ContentList path="/writings" :query="{ sort: [{ publishedAt: -1 }], where: { draft: { $ne: true } } }">
        <template #default="{ list }">
          <PostCard v-for="article in list" :key="article._path" v-bind="article" :path="article._path!" />
        </template>
        <template #not-found>
          <p class="text-neutral-400">
            Soon, stay connected 👀...
          </p>
        </template>
      </ContentList>
    </article>
  </main>
</template>
