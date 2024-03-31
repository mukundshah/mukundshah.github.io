<script setup lang="ts">
defineProps<{ links: Array<{ label: string, to: string }> }>()
</script>

<template>
  <ul role="list" class="flex flex-row gap-2">
    <template v-for="(link, index) in links" :key="index">
      <li>
        <NuxtLink :to="link.to" class="hover:text-neutral-100" active-class="text-neutral-100">
          {{ link.label }}
        </NuxtLink>
      </li>
      <span v-if="index < links.length - 1" aria-hidden="true">/</span>
    </template>
  </ul>
</template>
