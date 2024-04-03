<template>
  <Body class="bg-neutral-950">
    <NuxtLoadingIndicator color="#d946ef" :height="2" />
    <SiteHeader />
    <div class="fixed z-0 rounded-full bg-fuchsia-500 opacity-20 h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[32rem] left-0 top-0 lg:left-[-8rem] lg:top-[-8rem] md:left-[-6rem] md:top-[-6rem] lg:blur-[6rem] blur-[4rem]"></div>
    <div class="fixed z-0 rounded-full bg-rose-500 opacity-20 h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[32rem] right-0 bottom-0 g:right-[-8rem] lg:bottom-[-8rem] md:right-[-6rem] md:bottom-[-6rem] lg:blur-[6rem] blur-[4rem]"></div>
    <NuxtPage />
  </Body>
</template>

<style>
#site {
  @apply mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-12;
}
</style>
