<template>
  <header>
    <h1 class="text-4xl font-bold">STRA's Vision</h1>
    <h2 class="text-2xl font-semibold">Our vision to reduce emissions in transport, Australia's only sector that is growing in emissions.</h2>
  </header>
  <main>
    <h1 class="text-xl font-bold">Background</h1>
    <p class="text-lg">
      As of March 2025, transport is the only sector which is <em>increasing</em> its carbon output, according to the National Greenhouse Gas Inventory,
      <a href="https://www.dcceew.gov.au/climate-change/publications/national-greenhouse-gas-inventory-quarterly-update-march-2025">published by the Federal Government</a>. 
      Additionally, the National Greenhouse Accounts show that transport emissions have grown steadily since 1990, reaching more than double those levels by 2010.
    </p>
    <h1 class="text-xl font-bold">The FAST Plan</h1>
    <p class="text-lg">
      Our FAST Plan presents a vision to reduce transport emissions by improving uptake of sustainable transport, with students and young people leading the charge.
    </p>
    <p class="text-lg">
      This means that half of all Victorian commuters to schools, universities and TAFEs can get to their classes by sustainable transport by the end of the decade.
    </p>
    <div class="m-0! grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-[64px] pt-2">
      <div class="flex flex-col p-4 gap-2 bg-bg text-fg rounded-xl">
        <span class="text-lg font-bold">Fares</span>
        <p>We need a reformed fare system that benefits young people, especially financially precarious students.</p>
      </div>
      <div class="flex flex-col p-4 gap-2 bg-bg text-fg rounded-xl">
        <span class="text-lg font-bold">Accessibility</span>
        <p>Sustainable transport is for everyone, and no education instution should go without accessible transport.</p>
      </div>
      <div class="flex flex-col p-4 gap-2 bg-bg text-fg rounded-xl">
        <span class="text-lg font-bold">Sustainability</span>
        <p>The carbon cost of manufacturing single-occupant combustion & battery-electric vehicles is too high, to achieve our goals we must prioritise sustainable transport.</p>
      </div>
      <div class="flex flex-col p-4 gap-2 bg-bg text-fg rounded-xl">
        <span class="text-lg font-bold">Time</span>
        <p>
          Students and young people deserve the freedom to study, work and play whenever and whereever they want. 
          It is imperative that fast and frequent transport operates throughout the day (and night) to get them where they need to go.
        </p>
      </div>
    </div>
  </main>
</template>
<style scoped>
@reference "~/assets/css/main.css";

section > * > a {
  @apply underline font-semibold;
}
</style>