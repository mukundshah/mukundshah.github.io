<script lang="ts" setup>
useHead({
  titleTemplate: '%s',
  title: '404 - Page Not Found',
})
definePageMeta({
  description:
    'The link you followed may be broken or the page is no longer available.',
})
</script>

<template>
  <main class="flex flex-col gap-20 grow h-full">
    <div class="flex flex-col gap-8 items-center justify-center h-full grow">
      <p>
        404 | Page Not Found
      </p>
    </div>
  </main>
</template>
