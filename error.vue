<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';

import "@fontsource-variable/public-sans";

import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-6">
      <h1 class="text-4xl font-bold">Error {{ error?.statusCode }}</h1>
      <a class="text-xl font-regular underline justify-end" href="/">Return home</a>
      <span class="text-xl font-light">Just like South Kensington, it may not have existed, or is not working today.</span>
      <span class="text-xl font-light"><i>{{ error?.statusMessage }}</i></span>
      <NuxtImg
        src="/assets/southKensington.jpg"
        alt="View of the platforms at South Kensington during the evening."
        class="lg:max-w-[40%] rounded-2xl"
      />
    </div>
    <Footer />
  </div>
</template>