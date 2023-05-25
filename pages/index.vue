<script lang="ts" setup>
const contact = {
  linkedin: "mukundshah-dev",
  github: "mukundshah",
  email: "email@mukundshah.com.np",
}

const stacks = {
  Languages: [
    {
      icon: "😂",
      name: "TypeScript",
      remark: "2+ years",
    },
  ],
}
</script>

<template>
  <section class="bg-white mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
    <div>
      <h1 class="text-3xl font-bold leading-normal font-poppins">
        <span class="text-2xl font-normal"> Hi, </span>
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
    </div>
  </section>
  <section class="mx-auto mt-20 max-w-screen-xl px-4 pb-8 lg:pb-12">
    <h2 class="text-2xl font-semibold leading-normal font-poppins">
      <!-- My tech stack -->
      Stack
    </h2>
    <ul class="space-y-8 mt-6">
      <li class="space-y-4" v-for="(stack, key) in stacks" :key="key">
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl font-poppins">
          {{ key }}
        </h3>
        <ul
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <li v-for="item in stack" :key="item.name">
            <div
              class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900"
            >
              <div
                class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 group-hover:-translate-x-2 rtl:group-hover:translate-x-2"
              >
                <div class="p-4 sm:p-6">
                  <span
                    aria-hidden="true"
                    role="img"
                    class="text-lg sm:text-xl"
                    v-html="item.icon"
                  ></span>

                  <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">
                    {{ item.name }}
                  </h2>
                  <p class="mt-1 text-xs text-gray-700">
                    {{ item.remark ?? " " }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
