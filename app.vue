<template>
  <Body class="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-12">
    <NuxtLoadingIndicator color="#d946ef" :height="2" />
    <SiteHeader />
    <div class="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-fuchsia-500/50 blur-[150px] md:blur-[350px] left-0 top-0"></div>
    <div class="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-rose-500/50 blur-[150px] md:blur-[350px] right-0 bottom-0"></div>
    <NuxtPage />
  </Body>
</template>
