<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
import { formatDate } from '~/lib/dateUtil';
const route = useRoute();

const { data: page } = await useAsyncData(route.path, async () => {
  return queryCollection('blog').path(route.path).first()
});

useSeoMeta({
  title: `${page.value.title} | Student Transport Riders Association`,
  ogTitle: `${page.value.title} | Student Transport Riders Association`,
  ogType: 'article',
  author: 'Student Transport Riders Association',
  publisher: 'Student Transport Riders Association',
  articlePublishedTime: page.value.lastUpdated,
  description: page.value.description,
  ogImage: '/assets/openGraph.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="text-fg-dark bg-bg-dark">
    <Navbar />
    <div class="flex flex-col p-8 gap-4 items-center justify-center">
      <div class="grid grid-flow-row text-2xl text-center items-center w-fit">        
        <a :href="page.path" class="underline underline-offset-4 font-bold w-fit pl-2">{{page.title}}</a>
      </div>
      <div class="flex">
        <span class="text-lg font-extralight pr-2">Last updated {{ formatDate(page.lastUpdated) }}. 
          <a :href="`https://github.com/straorgau/blog/blob/main/${page.stem}.${page.extension}`" class="underline underline-offset-4">Source</a>
        </span>
      </div>
      <section class="prose prose-invert lg:prose-lg">
        <ContentRenderer :value="page.body" class="content-body" />
      </section>
    </div>
    <Footer />
  </div>
</template>
<style>
.content-body {
  & > * {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
}
</style>