<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';

const feed = await $fetch("/api/events");
</script>

<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Events</h1>
      <h2 class="text-2xl font-semibold">All the fun events STRA has to offer.</h2>
      <section class="flex flex-col gap-8 pt-12 items-center">
        <div v-if="feed.length === 0" class="flex flex-col items-center text-center gap-4">
            <span class="text-xl font-regular">There are currently no events on offer, check this page later.</span>
            <span class="text-xl font-regular">Make sure to follow our social media page for new events!</span>
            <div class="flex flex-row items-center gap-4 h-full">
                <a aria-label="Youtube" class="button" href="https://www.youtube.com/@stra_org_au" rel=me>
                    <Icon name="simple-icons:youtube" size="32" />
                </a>
                <a aria-label="Facebook" class="button" href="https://www.facebook.com/people/Student-Transport-Riders-Association/61575645665159/">
                    <Icon name="simple-icons:facebook" size="32" />
                </a>
                <a aria-label="Facebook" class="button" href="https://aus.social/@stra" rel=me>
                    <Icon name="simple-icons:mastodon" size="32" />
                </a>
                <a aria-label="Instagram" class="button" href="https://instagram.com/stra.org.au" rel=me>
                    <Icon name="simple-icons:instagram" size="32" />
                </a>
                <a aria-label="Bluesky" class="button" href="https://bsky.app/profile/stra.org.au" rel=me>
                    <Icon name="simple-icons:bluesky" size="32" />
                </a>
                <a aria-label="Discord" class="button" href="https://discord.gg/M9BxBDBbfX">
                    <Icon name="simple-icons:discord" size="32" />
                </a>
            </div>
        </div>
        <div v-else class="grid lg:grid-cols-3 gap-4">
            <div v-for="entry in feed" :key="entry.id" class="bg-bg text-fg p-4 gap-4 flex flex-col rounded-xl">
                <h1 class="text-xl font-bold">{{ entry.title }}</h1>
                <span class="flex flex-row gap-1 text-lg items-center underline">
                    <Icon name="gg:arrow-top-right" size="24"/>
                    <NuxtLink :href="entry.links[0].href">Event Link</NuxtLink>
                </span>
                <!-- Required to load HTML descriptions from the feed. -->
                <span v-sanitise-html="entry.content"></span>
            </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>