<template>
  <section class="bg-white">
    <article
      class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12 prose font-poppins overrides"
    >
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </section>
</template>

<style>
p > code {
  @apply font-normal bg-[#1f2937] px-1.5 p-1 rounded text-white after:content-none before:content-none !important;
}

.overrides {
  @apply prose-h1:text-4xl prose-h1:font-bold prose-h1:leading-normal prose-h1:font-poppins;
}
</style>
