<script setup lang="ts">
defineOgImageComponent('OgImageDefault')
</script>

<template>
  <Body>
    <NuxtLoadingIndicator color="#d946ef" :height="2" />
    <SiteHeader />
    <div class="fixed left-0 top-0 -z-10 h-[10rem] w-[10rem] rounded-full bg-fuchsia-500 opacity-25 blur-[4rem] md:left-[-6rem] md:top-[-6rem] md:h-[20rem] md:w-[20rem] lg:left-[-8rem] lg:top-[-8rem] lg:h-[32rem] lg:w-[32rem] lg:blur-[6rem]"></div>
    <div class="fixed bottom-0 right-0 -z-10 h-[10rem] w-[10rem] rounded-full bg-rose-500 opacity-25 blur-[4rem] md:bottom-[-6rem] md:right-[-6rem] md:h-[20rem] md:w-[20rem] lg:bottom-[-8rem] lg:right-[-8rem] lg:h-[32rem] lg:w-[32rem] lg:blur-[6rem]"></div>
    <NuxtPage />
  </Body>
</template>

<style>
@reference 'assets/css/tailwind.css';

#site {
  @apply mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-12;
}
</style>
