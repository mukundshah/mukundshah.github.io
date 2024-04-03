<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Posts', to: '/posts' },
  // { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="z-50 flex flex-col items-center justify-center w-full gap-2 md:flex-row md:justify-between">
    <NuxtLink to="/">
      <span class="sr-only">Mukund Shah</span>
      <Logo
        class="block mx-auto -ml-3 text-center fill-current md:inline w-60 hover:text-neutral-100"
        aria-hidden="true"
      />
    </NuxtLink>
    <nav role="navigation">
      <Links :links="navItems" />
    </nav>
  </header>
</template>
