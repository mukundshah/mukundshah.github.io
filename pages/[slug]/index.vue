<script lang="ts" setup>
const slug = useRoute().params.slug as string;
</script>

<template>
  <ContentList :path="slug" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </div>
  </ContentList>
</template>
