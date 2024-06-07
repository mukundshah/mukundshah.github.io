<script lang="ts" setup>
import { Contact as contact } from '~/data'

const socialLinks = [
  { label: 'LinkedIn', to: `https://linkedin.com/in/${contact.linkedin}` },
  { label: 'GitHub', to: `https://github.com/${contact.github}` },
]

// const socialLinksWithEmail = [
//   { label: 'Email', to: `mailto:${contact.email}` },
//   ...socialLinks,
// ]
</script>

<template>
  <main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8">
      <h1 class="text-3xl text-neutral-100">
        Hi, I'm Mukund 🤓
      </h1>

      <p class="w-auto max-w-[60ch] leading-6">
        a passionate <span class="text-fuchsia-400"> full stack web developer </span>
        with over <span class="text-fuchsia-400"> 3 years </span> of experience creating inclusive and robust web apps.

        <br />
        <br />

        <span class="text-fuchsia-400">Vue.js (Typescript)</span> and <span class="text-fuchsia-400">Python</span> are my go-to languages.
        Lately I've been exploring <span class="text-fuchsia-400">Go</span> and <span class="text-fuchsia-400">Rust</span> for fun.
      </p>

      <p class="w-auto max-w-[60ch] leading-6">
      </p>

      <!-- <Links :links="socialLinksWithEmail" /> -->
    </article>
    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Get in touch
        </h3>
      </header>
      <p>
        Email me at
        <NuxtLink :to="`mailto:${contact.email}`" class="hover:text-neutral-100" active-class="text-neutral-100">
          {{ contact.email }}
        </NuxtLink>
        or follow me via my social links.
      </p>

      <Links :links="socialLinks" />
    </article>
  </main>
</template>
