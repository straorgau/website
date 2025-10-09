<template>
  <section class="bg-bg-dark text-fg-dark justify-center w-full p-8 flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Media Releases</h1>
    <div class="flex flex-row gap-4 justify-center self-center">
      <div v-for="release in releases" :key="release.id" class="flex flex-col p-6 bg-bg text-bg-dark rounded-sm gap-2 max-w-lg">
          <a :href="release.path" class="text-xl font-bold">{{ release.title }}</a>
          <span class="text-lg font-light">Last updated {{ release.meta.lastUpdated }}.</span>
          <a :href="release.path" class="text-lg font-bold underline">Full Article</a>
        </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute();

const { data: releases } = await useAsyncData(route.path, async () => {
  return queryCollection('media').all()
});
</script>