<script setup lang="ts">
import Footer from '~/components/nav/Footer.vue';
import Navbar from '~/components/nav/Navbar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen self-center justify-center bg-bg-dark text-fg-dark">
    <Navbar />
    <div class="container">
      <slot />
    </div>
    <Footer />
 </div>
</template>
<style>
@reference "~/assets/css/main.css";

div .container {
  @apply flex flex-col self-center justify-center bg-bg-dark text-fg-dark p-8 gap-4;

  & > header {
    @apply flex flex-col gap-4;
  }

  & > main {
    @apply flex flex-col gap-4;
  }
}
</style>