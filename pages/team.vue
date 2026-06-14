<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
import { formatDate } from '~/lib/dateUtil';

const {data: committee} = await useAsyncData("team", () => {
  return queryCollection("team").order('id', 'DESC').all();
});
</script>

<template>
  <header>
    <h1 class="text-4xl font-bold">Team</h1>
    <h2 class="text-2xl font-semibold">Meet the team members of the Student Transport Riders Association.</h2>
    <span class="text-xl font-light">Want to join the team? <NuxtLink class="underline" href="/contact">Contact us today</NuxtLink>!</span>
  </header>
  <main>
    <h1 class="text-xl font-bold">Committee</h1>
    <span class="text-lg">As elected at {{ formatDate(committee[0].elected) }}.</span>
    <div class="flex flex-row flex-wrap gap-4">
      <div v-for="member in committee[0].committee" :key="member.name" class="flex flex-col max-h-fit bg-bg text-fg p-4 gap-2 rounded-lg self-center items-center">
        <h1 class="text-lg font-bold">{{ member.name }}</h1>
        <span class="text-sm">{{ member.role }}</span>
        <span v-if="member.resigned" class="text-xs italic">Resigned on {{ formatDate(member.resigned) }}</span>
      </div>
    </div>
  </main>
</template>

<!-- 
<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Team</h1>
      <h2 class="text-2xl font-semibold">Meet the team members of the Student Transport Riders Association.</h2>
      <span class="text-xl font-light">Want to join the team? <NuxtLink class="underline" href="/contact">Contact us today</NuxtLink>!</span>
      <section class="flex flex-col gap-4 w-full">
        <h1 class="text-xl font-bold">Committee</h1>
        <span class="text-lg">As elected at {{ formatDate(committee[0].elected) }}.</span>
        <div class="grid max-w-fit grid-cols-2 gap-4">
          <div v-for="member in committee[0].committee" :key="member.name" class="flex flex-col max-h-fit bg-bg text-fg p-4 gap-2 rounded-lg self-center items-center">
            <h1 class="text-lg font-bold">{{ member.name }}</h1>
            <span class="text-sm">{{ member.role }}</span>
            <span v-if="member.resigned" class="text-xs italic">Resigned on {{ formatDate(member.resigned) }}</span>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
-->