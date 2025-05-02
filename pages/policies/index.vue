<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
const route = useRoute();

const { data: policies } = await useAsyncData(route.path, async () => {
  return queryCollection('policies').all()
});
</script>

<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Policies</h1>
      <h2 class="text-2xl font-semibold">List of the official policies of the Student Transport Riders Association.</h2>
      <section class="flex flex-col gap-4 w-full">
        <div v-for="policy in policies" :key="policy.id" class="flex flex-col p-4 bg-bg text-bg-dark rounded-sm gap-2">
          <a :href="policy.path" class="text-xl font-bold">{{ policy.title }}</a>
          <span class="text-lg font-regular">{{ policy.description }}</span>
          <a :href="policy.path" class="text-lg font-bold underline">Full policy</a>
        </div>
      
        <span class="text-xl">Full policy documents and file history can be found in 
          <a href="https://codeberg.org/stra/policies/" class="underline underline-offset-4">this Codeberg repository</a>.
        </span>
      </section>
    </div>
    <Footer />
  </div>
</template>