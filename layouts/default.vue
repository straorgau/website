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
  ],
  meta: [
    { name: "theme-color", content: "#333434" }
  ],
})

defineOgImage({
  url: "/assets/openGraph.jpg"
})
</script>
