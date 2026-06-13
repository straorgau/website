<template>
 <div class="flex flex-col min-h-screen self-center justify-center bg-bg-dark text-fg-dark">
    <slot />
 </div>
</template>
<script setup lang="ts">
import "@fontsource-variable/public-sans";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-png', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/x-png', href: '/favicon-32x32.png' },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: 'alternate', type: 'application/rss+xml', title: "STRA RSS Feed", href: '/rss.xml' },
    { rel: 'alternate', type: 'application/atom+xml', title: "STRA Atom Feed", href: '/atom'}
  ],
  meta: [
    { name: "theme-color", content: "#333434" }
  ],
})

defineOgImage({
  url: "/assets/openGraph.jpg"
})
</script>
<style>
@reference "~/assets/css/main.css";

.home-item {
  @apply bg-bg text-fg justify-center w-full flex flex-col py-8 px-8 lg:px-24;
}

.home-item-alt {
  @apply bg-bg-dark text-fg-dark justify-center w-full flex flex-col py-8 px-8 lg:px-24;
}
</style>