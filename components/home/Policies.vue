<template>
  <section class="bg-bg text-fg w-full p-8 flex flex-col gap-6">
    <h1 class="text-3xl font-bold">Policies</h1>
    <div class="flex flex-col w-full gap-4">
      <div
        class="bg-[#d7d2cb]/80 p-4 rounded-sm w-fit border-l-4 lg:self-start border-metro"
      >
        <h1 class="text-xl font-bold">Fares</h1>
        <span class="text-lg font-semibold"
          >We advocate for a simpler, cheaper fare system for students and young
          people.</span
        >
      </div>
      <div
        class="bg-[#d7d2cb]/80 p-4 rounded-sm w-fit border-r-4 lg:self-end border-tram"
      >
        <h1 class="text-xl font-bold">Accessiblity</h1>
        <span class="text-lg font-semibold"
          >No university should go without an accessible stop, whether for
          trains, trams or buses.</span
        >
      </div>
      <div
        class="bg-[#d7d2cb]/80 p-4 rounded-sm w-fit border-l-4 lg:self-start border-bus"
      >
        <h1 class="text-xl font-bold">Service</h1>
        <span class="text-lg font-semibold"
          >No major university campus should be without a transport
          connection.</span
        >
      </div>
      <a
        class="flex flex-row justify-end text-2xl font-bold underline underline-offset-2"
        href="/policies"
      >
        <Icon name="gg:arrow-top-right" size="32" />
        Full Policies
      </a>
    </div>
  </section>
</template>
