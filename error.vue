<script lang="ts" setup>
const { error } = defineProps({
  error: Object,
})
console.log(error)
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div class="leading-loose text-center center -mt-12">
      <span class="text-9xl font-raleway">{{ error?.statusCode }}</span>
      <br />
      <span class="text-3xl leading-loose">{{ error?.message }}</span>
      <br /><br />
      <span class="text-sm text-gray-700">
        The link you followed may be broken or the page is no longer available.
        <br />
        <a class="text-base font-semibold text-black" href="/">
          &larr; Go back to previous page.
        </a>
      </span>
    </div>
  </div>
</template>
