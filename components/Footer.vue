<!-- prettier-ignore -->
<template>
  <!-- <footer class="mt-auto text-sm text-center font-poppins"> -->
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-4">
      <div class="flex justify-between flex-col-reverse gap-2 md:flex-row">
        <div>
          <p class="text-sm text-center font-poppins">
            Built with ❤️ using
            <NuxtLink class="hover:underline underline-offset-2" to="https://nuxt.com">Nuxt</NuxtLink>,
            <NuxtLink class="hover:underline underline-offset-2" to="https://tailwindcss.com">Tailwind CSS</NuxtLink>, and hosted on
            <NuxtLink class="hover:underline underline-offset-2" to="https://netlify.com">Netlify</NuxtLink>.
          </p>
        </div>
        <div>
          <p class="text-sm text-center font-poppins">
            © {{ new Date().getFullYear() }}
            <!-- <NuxtLink to="/">Mukund Shah</NuxtLink> -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
