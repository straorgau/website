<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">About STRA</h1>
      <section class="flex flex-col gap-4 pt-6">
        <h1 class="text-2xl font-bold">Who we are</h1>
        <p class="text-lg">
          Officially founded in 2025, the Student Transport Riders Association is the student-run organisation
          for youth using all forms of public transport in Victoria. We are a not-for-profit organisation, with no political affiliations.
        </p>
        <h1 class="text-2xl font-bold">What we do</h1>
        <div class="flex flex-col gap-4">
          <p class="text-lg">
            STRA lobbies transport organisations in the interest of young people using public transport. 
          </p>
          <p class="text-lg">
            We also work with other bodies and the media to provide education on public transport, and promote the benefits of
            an accessible and sustainable system.
          </p>
        </div>
        <h1 class="text-2xl font-bold">Mission statement</h1>
        <div class="flex flex-col gap-4">
          <p class="text-lg">
            STRA is committed to:
          </p>
          <ul class="text-lg list-disc ml-8">
            <li>A fairer network,</li>
            <li>An accessible network,</li>
            <li>An equitable network</li>
          </ul>
          <p class="text-lg">
            ...where Victorians, and visitors alike, can go anywhere, at any time, with a safe network that is available to everyone.
          </p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
</script>