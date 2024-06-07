<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Writings', to: '/writings' },
  // { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="z-50 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
    <NuxtLink to="/">
      <span class="sr-only">Mukund Shah</span>
      <Logo
        class="mx-auto -ml-3 block w-60 fill-current text-center hover:text-neutral-100 md:inline"
        aria-hidden="true"
      />
    </NuxtLink>
    <nav role="navigation">
      <Links :links="navItems" />
    </nav>
  </header>
</template>
