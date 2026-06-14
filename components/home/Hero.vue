<template>
   <div class="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/assets/img/hero.jpg')] home-item-alt gap-4 h-120 bg-cover bg-center">
    <div class="flex flex-row">
      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-bold">All aboard!</h1>
        <p>
            We are the <strong>Student Transport Riders Association</strong>, the student-run advocacy group for young people in Victoria using public transport.
        </p>
        <div class="flex flex-row gap-4">
          <NuxtLink class="hero-button bg-metro/70 hover:bg-metro" href="/join">Join</NuxtLink>
          <NuxtLink class="hero-button bg-tram/70 hover:bg-tram" href="/about">About</NuxtLink>
          <NuxtLink class="hero-button bg-vline/70 hover:bg-vline" href="/vision">Vision</NuxtLink>
        </div>
      </div>
    </div>
   </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.hero-button {
  @apply rounded-2xl p-3 text-lg font-bold;
}
</style>