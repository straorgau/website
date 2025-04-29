<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
const route = useRoute();

const { data: page } = await useAsyncData(route.path, async () => {
  return queryCollection('policies').path(route.path).first()
});
</script>

<template>
  <div class="text-fg-dark bg-bg-dark">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <div class="grid grid-flow-col text-xl items-center w-fit divide-x-2">
        <a href="/policies" class="underline underline-offset-4 font-light w-fit pr-2">Policies</a>
        
        <a :href="page.path" class="underline underline-offset-4 font-bold w-fit pl-2">{{page.title}}</a>
      </div>
      <section class="prose prose-invert lg:prose-lg">
        <ContentRenderer :value="page.body" />
      </section>
    </div>
    <Footer />
  </div>
</template>