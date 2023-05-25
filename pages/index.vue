<script lang="ts" setup>
import { Contact as contact } from "~/data";
</script>

<template>
  <section class="bg-white mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
    <div>
      <h1 class="text-3xl font-bold leading-normal font-poppins">
        <span class="text-2xl font-normal">Hi, </span>
        <br />
        I'm Mukund Shah.
      </h1>

      <p class="mt-6 max-w-xl text-base/relaxed text-gray-600">
        An experienced Full Stack Web Developer creating inclusive and robust
        web apps. Passionate about intuitive interfaces, performance
        optimization, and secure solutions. Committed to accessibility and
        inclusive design for exceptional digital experiences.
      </p>
      <!-- prettier-ignore -->
      <p class="mt-6 max-w-xl text-base/relaxed text-gray-600">
        Reach out to me via <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`https://linkedin.com/in/${contact.linkedin}`">LinkedIn</NuxtLink >, <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`https://github.com/${contact.github}`" >GitHub</NuxtLink >, or drop me an <NuxtLink class="text-base font-semibold text-black hover:underline" :to="`mailto:${contact.email}`" >email</NuxtLink> for a swift response.
      </p>

      <p class="mt-6 max-w-xl text-base/relaxed text-gray-600">
        <NuxtLink
          to="/about"
          class="text-base font-semibold text-black hover:underline"
        >
          Know more about me &rarr;
        </NuxtLink>
      </p>
    </div>
  </section>
</template>
