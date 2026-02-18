<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
const route = useRoute();

const { data: page } = await useAsyncData(route.path, async () => {
  return queryCollection('policies').path(route.path).first()
});

useSeoMeta({
  title: `${page.value.title} | Student Transport Riders Association`,
  ogTitle: `${page.value.title} | Student Transport Riders Association`,
  description: page.value.description,
  ogImage: '/assets/openGraph.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="text-fg-dark bg-bg-dark">
    <Navbar />
    <div class="flex flex-col p-8 gap-4 items-center justify-center">
      <div class="grid grid-flow-col text-xl items-center w-fit divide-x-2">
        <a href="/policies" class="underline underline-offset-4 font-light w-fit pr-2">Policies</a>
        
        <a :href="page.path" class="underline underline-offset-4 font-bold w-fit pl-2">{{page.title}}</a>
      </div>
      <div class="flex">
        <span class="text-lg font-extralight pr-2">Last updated {{ page.meta.lastUpdated }}. 
          <a :href="`https://github.com/straorgau/policies/src/branch/main/${page.stem}.${page.extension}`" class="underline underline-offset-4">Source</a>
        </span>
      </div>
      <section class="prose prose-invert lg:prose-lg">
        <ContentRenderer :value="page.body" class="policy-body" />
      </section>
    </div>
    <Footer />
  </div>
</template>
<style>
.policy-body {
  & > * {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
}
</style>