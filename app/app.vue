<script setup lang="ts">
defineOgImageComponent('OgImageDefault')
</script>

<template>
  <Body>
    <NuxtLoadingIndicator color="#d946ef" :height="2" />
    <SiteHeader />
    <div class="fixed left-0 top-0 -z-10 h-40 w-40 rounded-full bg-fuchsia-500 opacity-25 blur-[4rem] md:-left-24 md:-top-24 md:h-80 md:w-80 lg:-left-32 lg:-top-32 lg:h-128 lg:w-lg lg:blur-[6rem]"></div>
    <div class="fixed bottom-0 right-0 -z-10 h-40 w-40 rounded-full bg-rose-500 opacity-25 blur-[4rem] md:-bottom-24 md:-right-24 md:h-80 md:w-80 lg:-bottom-32 lg:-right-32 lg:h-128 lg:w-lg lg:blur-[6rem]"></div>
    <NuxtPage />
  </Body>
</template>
