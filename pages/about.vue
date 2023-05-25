<script lang="ts" setup>
import { Stacks as stacks, Experiences as experiences } from "~/data";
</script>

<template>
  <section class="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12">
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
