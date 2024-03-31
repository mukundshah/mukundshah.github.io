<script lang="ts" setup>
import { Contact as contact, Description as description } from '~/data'

useHead({
  titleTemplate: '%s',
  title: 'Mukund Shah',
})

const socialLinks = [
  { label: 'LinkedIn', to: `https://linkedin.com/in/${contact.linkedin}` },
  { label: 'GitHub', to: `https://github.com/${contact.github}` },
  { label: 'Email', to: `mailto:${contact.email}` },
]
</script>

<template>
  <main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
      <div class="flex flex-col gap-8">
        <h1 class="text-3xl text-neutral-100">
          Hi, I'm Mukund 👋
        </h1>

        <p class="w-auto max-w-[60ch] leading-6">
          {{ description }}
        </p>

        <Links :links="socialLinks" />

        <p class="max-w-xl mt-6 text-gray-600 text-base/relaxed">
          Reach out to me via <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`https://linkedin.com/in/${contact.linkedin}`">
            LinkedIn
          </NuxtLink>, <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`https://github.com/${contact.github}`">
            GitHub
          </NuxtLink>, or drop me an <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`mailto:${contact.email}`">
            email
          </NuxtLink> for a swift response.
        </p>
      </div>
    </article>
  </main>
</template>
