<template>
  <main class="mx-auto flex w-full max-w-prose flex-col gap-4">
    <ContentDoc>
      <template #default="{ doc }">
        <OgImage component="OgImageWritings" :props="{ readingMins: doc.readingMins, publishedAt: doc.publishedAt }" />
        <SchemaOrgArticle :published-at="doc.publishedAt" :modified-at="doc.updatedAt" />

        <header role="presentation" class="flex flex-col gap-2">
          <h1 class="text-4xl text-white">
            {{ doc.title }}
          </h1>
          <p class="italic">
            {{ doc.description }}
          </p>
          <p> {{ formattedDate(doc.publishedAt) }} &bull; {{ doc.readingMins }} min read </p>
        </header>
        <ContentRenderer :value="doc" class="post" />
      </template>
      <template #not-found>
        <p class="text-center text-neutral-400">
          Article not found.
        </p>
      </template>
    </ContentDoc>
  </main>
</template>

<style>
.post h2 {
  @apply mt-6 text-2xl text-neutral-100;
}

.post h3 {
  @apply mt-4 text-xl text-neutral-100;
}

.post h2 a,
.post h3 a {
  @apply no-underline;
}

.post p {
  @apply leading-7 mt-4;
}

.post a {
  @apply text-neutral-100 underline;
}

.post img {
  @apply rounded my-4;
}

.post ul {
  @apply list-disc pl-4;
}

.post ol {
  @apply list-decimal pl-4;
}

.post li {
  @apply mt-2;
}

.post blockquote {
  @apply flex mt-4 flex-row gap-2 before:block before:h-auto before:w-2 before:max-w-[2px] before:bg-fuchsia-400 before:content-[''];
}

.post blockquote p {
  @apply mt-0;
}

.post pre {
  @apply px-6 my-2 -inset-4 bg-[#11111b] rounded;
}

.post pre > code {
  @apply bg-transparent text-sm leading-relaxed;
}

.post code {
  @apply rounded-sm bg-[#11111b] px-1 py-[2px] text-fuchsia-300;
}
</style>
