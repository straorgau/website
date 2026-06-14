<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';

import { formatDate } from '~/lib/dateUtil';

const route = useRoute();

const { data: releases } = await useAsyncData(route.path, async () => {
  return queryCollection('blog').order('lastUpdated', 'DESC').all()
});
</script>

<template>
  <header>
    <h1 class="text-4xl font-bold">Blog Posts</h1>
    <h2 class="text-2xl font-semibold">Updates from the Student Transport Riders Association.</h2>
    <a class="text-lg font-light underline" href="/rss.xml">RSS Feed</a>
  </header>
  <main>
    <div v-for="release in releases" :key="release.id" class="flex flex-col p-4 bg-bg text-bg-dark rounded-sm gap-2">
      <a :href="release.path" class="text-xl font-bold">{{ release.title }}</a>
      <span class="text-lg font-light">Last updated {{ formatDate(release.lastUpdated) }}.</span>
      <a :href="release.path" class="text-lg font-bold underline">Full Article</a>
    </div>
    <span class="text-xl">File history can be found in 
      <a href="https://github.com/straorgau/blog/" class="underline underline-offset-4">this Github repository</a>.
    </span>
  </main>
</template>