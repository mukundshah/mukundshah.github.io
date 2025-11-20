<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Body>
    <SiteHeader />
    <div class="fixed left-0 top-0 z-0 h-[10rem] w-[10rem] rounded-full bg-fuchsia-500 opacity-20 blur-[4rem] md:left-[-6rem] md:top-[-6rem] md:h-[20rem] md:w-[20rem] lg:left-[-8rem] lg:top-[-8rem] lg:h-[32rem] lg:w-[32rem] lg:blur-[6rem]"></div>
    <div class="fixed bottom-0 right-0 z-0 h-[10rem] w-[10rem] rounded-full bg-rose-500 opacity-20 blur-[4rem] md:bottom-[-6rem] md:right-[-6rem] md:h-[20rem] md:w-[20rem] lg:bottom-[-8rem] lg:right-[-8rem] lg:h-[32rem] lg:w-[32rem] lg:blur-[6rem]"></div>

    <DevOnly>
      <div class="mx-auto h-96 w-full max-w-[792px] overflow-x-auto overflow-y-auto rounded border border-neutral-100 p-5 text-xs text-neutral-100">
        <strong v-if="error.message">Message</strong>
        <pre>{{ error.message }}</pre>
        <br />
        <strong v-if="error.stack">Stacktrace</strong>
        <pre v-html="error.stack"></pre>
      </div>
      <template #fallback>
        <div class="flex flex-grow flex-col items-center justify-center gap-4">
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
