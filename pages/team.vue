<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
</script>

<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Team</h1>
      <h2 class="text-2xl font-semibold">Meet the team members of the Student Transport Riders Association.</h2>
      <span class="text-xl font-light">Want to join the team? <a class="underline" href="/join">Join up as a member</a>!</span>
      <section class="flex flex-col gap-4 w-full">
        <h1 class="text-xl font-bold">Committee</h1>
        <h2 class="text-lg font-regular italic">As appointed at 2025-01-06.</h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="flex flex-col rounded-md bg-bg text-fg p-4 gap-2">
            <h1 class="text-xl font-bold">Duale Siad</h1>
            <span class="text-lg font-semibold">President</span>
          </div>
          <div class="flex flex-col rounded-md bg-bg text-fg p-4 gap-2">
            <h1 class="text-xl font-bold">Arden Gough Philips</h1>
            <span class="text-lg font-semibold">Vice-President</span>
          </div>
          <div class="flex flex-col rounded-md bg-bg text-fg p-4 gap-2">
            <h1 class="text-xl font-bold">Danielle Birkett</h1>
            <span class="text-lg font-semibold">Treasurer</span>
          </div>
          <div class="flex flex-col rounded-md bg-bg text-fg p-4 gap-2">
            <h1 class="text-xl font-bold">Thomas Handbury</h1>
            <span class="text-lg font-semibold">Secretary</span>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
