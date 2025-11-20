<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Body>
    <SiteHeader />
    <div class="fixed left-0 top-0 z-0 h-40 w-40 rounded-full bg-fuchsia-500 opacity-20 blur-[4rem] md:-left-24 md:-top-24 md:h-80 md:w-80 lg:-left-32 lg:-top-32 lg:h-128 lg:w-lg lg:blur-[6rem]"></div>
    <div class="fixed bottom-0 right-0 z-0 h-40 w-40 rounded-full bg-rose-500 opacity-20 blur-[4rem] md:-bottom-24 md:-right-24 md:h-80 md:w-80 lg:-bottom-32 lg:-right-32 lg:h-128 lg:w-lg lg:blur-[6rem]"></div>

    <DevOnly>
      <div class="mx-auto h-96 w-full max-w-[792px] overflow-x-auto overflow-y-auto rounded border border-neutral-100 p-5 text-xs text-neutral-100">
        <strong v-if="error.message">Message</strong>
        <pre>{{ error.message }}</pre>
        <br />
        <strong v-if="error.stack">Stacktrace</strong>
        <pre v-html="error.stack"></pre>
      </div>
      <template #fallback>
        <div class="flex grow flex-col items-center justify-center gap-4">
          <h1 class="text-4xl text-neutral-100">
            {{ error.statusCode }}
          </h1>
          <p class="text-neutral-400">
            {{ error.statusCode === 404 ? "uh-oh! Page not found" : "Oops! Something went wrong." }}
          </p>
          <button class="transition hover:text-neutral-100 hover:underline" @click="handleError">
            Go back
          </button>
        </div>
      </template>
    </DevOnly>
  </Body>
</template>
