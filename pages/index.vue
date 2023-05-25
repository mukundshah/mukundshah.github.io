<script lang="ts" setup>
import {
  Contact as contact,
  Stacks as stacks,
  Experiences as experiences,
} from "~/data"

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
]
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
    </div>
  </section>
  <section class="mx-auto mt-20 max-w-screen-xl px-4 pb-8 lg:pb-12">
    <h2 class="text-2xl font-semibold leading-normal font-poppins">Stack</h2>
    <ul class="space-y-8 mt-6">
      <li class="space-y-4" v-for="(stack, key) in stacks" :key="key">
        <h3 class="font-bold text-gray-900 sm:text-xl font-poppins">
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
                  <div aria-hidden="true" role="img" v-html="item.icon"></div>

                  <h2 class="mt-4 font-medium text-gray-900">
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
  <section class="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12">
    <h2 class="text-2xl font-semibold leading-normal font-poppins">
      Professional Experiences
    </h2>
    <div class="flow-root mt-6">
      <ul role="list" class="-mb-8">
        <li v-for="(experience, idx) in experiences" :key="idx">
          <div class="relative pb-8">
            <span
              v-if="idx !== experiences.length - 1"
              class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <div class="relative flex items-start space-x-3">
              <div class="relative">
                <img
                  class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                  :src="experience.company.logo"
                  alt=""
                />
                <span
                  class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px"
                >
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="font-medium">
                    {{ experience.title }}
                  </div>
                  <div class="text-sm">
                    <a
                      :href="experience.company.url"
                      class="font-normal text-gray-900 hover:underline underline-offset-2"
                    >
                      {{ experience.company.name }}{{ " | " }}
                      {{ experience.company.location }}
                    </a>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">
                    {{ experience.range }}
                  </p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    {{ experience.description }}
                  </p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <!-- <template v-for="skill in experience.skills" :key="tag.name">
                    <div
                      class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                    >
                      <span
                        class="absolute flex-shrink-0 flex items-center justify-center"
                      >
                        <span
                          :class="[skill.color, 'h-1.5 w-1.5 rounded-full']"
                          aria-hidden="true"
                        ></span>
                      </span>
                      <span class="ml-3.5 font-medium text-gray-900">
                        {{ skill.name }}
                      </span>
                    </div>
                    {{ " " }}
                  </template> -->
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
