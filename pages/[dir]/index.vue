<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const path = useRoute().params.dir as string;

const { data: content } = await useAsyncData(path, () =>
  queryContent(path).where({ isIndex: true }).findOne()
);

const listQuery: QueryBuilderParams = {
  path: path,
  sort: [{ date: -1 }],
  where: [
    {
      $and: [{ draft: { $ne: true } }, { isIndex: { $ne: true } }],
    },
  ],
};
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <div class="flex flex-col space-y-4 space-y-reverse">
        <h1 class="text-4xl font-bold leading-normal font-poppins">
          {{ content?.title }}
        </h1>
        <p class="text-lg text-gray-700">{{ content?.subtitle }}</p>
      </div>
      <p class="mt-6 max-w-lg text-base/relaxed text-gray-600">
        {{ content?.description }}
      </p>
    </div>
  </section>
  <div class="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12">
    <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ContentList :query="listQuery">
        <template #default="{ list }">
          <li v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">
              <div
                class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900"
              >
                <div
                  class="h-full rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 group-hover:-translate-x-2 rtl:group-hover:translate-x-2"
                >
                  <div class="p-4 sm:p-6 lg:p-8">
                    <div class="mt-16 sm:mt-20 lg:mt-24">
                      <div
                        aria-hidden="true"
                        role="img"
                        class="text-3xl sm:text-4xl"
                        v-html="article.icon"
                      ></div>
                      <h2
                        class="mt-4 text-lg font-medium text-gray-900 sm:text-xl"
                      >
                        {{ article.title }}
                      </h2>
                      <time class="mt-1 text-xs text-gray-700">
                        {{
                          parseDateAsDuration(article.date, {
                            months: 3,
                            years: 0,
                          })
                        }}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </template>
        <template #not-found>
          <p>Nothing has been published yet.</p>
        </template>
      </ContentList>
    </ul>
  </div>
</template>
