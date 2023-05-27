<script lang="ts" setup>
const navigations = [
  {
    name: "About",
    path: "/about",
  },
];
</script>

<template>
  <!-- <header class="font-poppins md:inline"> -->
  <header class="sticky inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
    <div
      class="mx-auto max-w-screen-xl px-4 relative flex h-16 items-center justify-between gap-8"
    >
      <figure class="m-auto md:m-0 md:inline">
        <NuxtLink to="/">
          <span class="sr-only">Mukund Shah</span>
          <Logo
            class="block mx-auto text-center md:inline w-60"
            aria-hidden="true"
          />
        </NuxtLink>
      </figure>
      <nav class="">
        <ul class="gap-4 flex items-center">
          <ContentNavigation v-slot="{ navigation }">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">
                <div
                  class="block text-sm font-medium text-gray-900 hover:opacity-75"
                >
                  {{ link.title }}
                </div>
              </NuxtLink>
            </li>
          </ContentNavigation>
          <template v-for="(navigation, index) in navigations" :key="index">
            <li>
              <NuxtLink :to="navigation.path">
                <div
                  class="block text-sm font-medium text-gray-900 hover:opacity-75"
                >
                  {{ navigation.name }}
                </div>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>
