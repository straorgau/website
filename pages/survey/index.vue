<!-- Remove the pages/survey folder when the survey concludes. -->
<template>
  <div class="flex flex-col m-4 md:m-0 self-center p-8 gap-6 items-center text-center bg-bg text-fg rounded-xl">
    <Icon name="gg:arrow-right" size="128" />
    <h1 class="text-2xl font-bold">Redirecting to the STRA Transport Survey...</h1>
    <span class="text-xl">If you are not redirected automatically after five seconds, please click the button here.</span>
    <div class="flex flex-row">
      <NuxtLink class="font-bold underline underline-offset-4" href="https://forms.stra.org.au/s/q6tj6xtdnsnol696oxhneok4">To STRA Transport Survey</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
setTimeout(async () => {
  await navigateTo("https://forms.stra.org.au/s/q6tj6xtdnsnol696oxhneok4", {
    external: true,
  })
}, 5000)
</script>