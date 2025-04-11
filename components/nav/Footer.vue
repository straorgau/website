<template>
  <footer class="absolute flex flex-col p-8 w-full border-t-2 mx-auto border-t-fg-dark bg-bg-dark">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <div class="flex flex-col gap-4">
          <img
            src="/assets/img/logo.png"
            alt="Student Transport Riders Association Logo"
            class="max-w-[48px]"
          >
        <span class="font-bold">Student Transport Riders Association</span>
        <div class="flex flex-row gap-4">
          <a href="https://www.youtube.com/channel/UCQJKJgnMlwMRUDS6QFJ8RgA" rel=me>
            <Icon aria-label="Youtube" name="simple-icons:youtube" size="24" />
          </a>
          <a href="https://aus.social/@stra" rel=me>
            <Icon aria-label="Mastodon" name="simple-icons:mastodon" size="24" />
          </a>
          <a href="https://instagram.com/stra_au" rel=me>
            <Icon aria-label="Instagram" name="simple-icons:instagram" size="24" />
          </a>
          <a href="https://bsky.app/@stra.org.au" rel=me>
            <Icon aria-label="Bluesky" name="simple-icons:bluesky" size="24" />
          </a>
        </div>
        <span class="font-semibold text-fg-dark/50">
          SPS Building
          <br>
          24 Wakefield St
          <br>
          Hawthorn VIC 3122
        </span>
        <span class="font-regular text-sm text-fg-dark/50">
          ABN: 30 124 602 756
        </span>
        <span class="text-sm">Website built by <a href="https://wale.au" class="underline">Duale Siad</a> (<a href="https://wale.works" class="underline">Waleworks</a>).</span>
      </div>
      <div class="flex flex-col gap-2 lg:items-end">
        <h1 class="text-xl font-bold">Navigation</h1>
        <a href="/" class="text-lg font-semibold underline text-fg-dark/80">Home</a>
        <a href="/policies" class="text-lg font-semibold underline text-fg-dark/80">Policies</a>
        <a href="/about" class="text-lg font-semibold underline text-fg-dark/80">About</a>
        <a href="/sitemap.xml" class="text-lg font-semibold underline text-fg-dark/80">Sitemap</a>
      </div>
    </div>
  </footer>
</template>