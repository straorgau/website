<template>
  <div class="text-fg-dark bg-bg-dark">
    <Navbar />
    <Hero />
    <Policies />
    <BecomeMember />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Hero from '~/components/home/Hero.vue';
import Policies from '~/components/home/Policies.vue';
import BecomeMember from '~/components/home/BecomeMember.vue';
import Footer from '~/components/nav/Footer.vue';
</script>