<template>
  <section class="home-item-alt gap-6">
    <h1 class="text-3xl font-bold">Blog Posts & Media Releases</h1>
    <div class="flex flex-col lg:flex-row gap-4 justify-center self-center">
      <div v-for="release in releases" :key="release.id" class="flex flex-col p-6 bg-bg text-bg-dark rounded-sm gap-2 max-w-lg">
          <a :href="release.path" class="text-xl font-bold">{{ release.title }}</a>
          <span class="text-lg font-light">Last updated {{ formatDate(release.lastUpdated) }}.</span>
          <a :href="release.path" class="text-lg font-bold underline">Full Article</a>
        </div>
    </div>
    <div class="flex justify-end">
        <a
        class="flex flex-row justify-end text-2xl font-bold underline underline-offset-4"
        href="/join"
        >
          <Icon name="gg:arrow-top-right" size="32" />
          More posts
        </a>
    </div>
  </section>
</template>
<script setup lang="ts">
import { formatDate } from "~/lib/dateUtil";

const route = useRoute();

const { data: releases } = await useAsyncData(route.path, async () => {
  return queryCollection('blog').order('lastUpdated', 'DESC').limit(3).all()
});
</script>