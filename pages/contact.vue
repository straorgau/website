<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Contact STRA</h1>
      <section class="flex flex-col gap-4 pt-6">
        <p class="text-lg"><strong>We are an entirely voluntary organisation, and our mail address is irregularly checked. Please use e-mail to contact us.</strong></p>

        <div class="flex flex-col gap-4">
          <h1 class="text-2xl font-bold">E-mail</h1>
          <p class="text-lg">General email & enquiries: 
            <a class="font-bold" href='mail&#116;o&#58;c%6&#70;%6D%6D%69tt&#37;6&#53;e&#64;%&#55;3%7&#52;&#37;72a&#46;org&#46;a%75'>
              &#99;omm&#105;ttee&#64;&#115;t&#114;a&#46;org&#46;&#97;&#117;
            </a>
          </p>
          <p class="text-lg">Media enquiries: 
            <a class="font-bold" href='&#109;&#97;i&#108;&#116;o&#58;m&#101;dia&#37;40str&#97;&#46;o&#37;7&#50;g&#46;au'>
              me&#100;&#105;a&#64;stra&#46;org&#46;au
            </a>
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl font-bold">Postal Address</h1>
          <p class="text-lg">
            ATTN: Thomas Handbury
            <br>
            24 Wakefield St
            <br>
            Hawthorn VIC 3122
            <br>
            Australia
          </p>
        </div>
        <h1 class="text-2xl font-bold">Social Media</h1>
        <div class="flex flex-row gap-4 h-full">
          <a aria-label="Youtube" class="button" href="https://www.youtube.com/channel/UCQJKJgnMlwMRUDS6QFJ8RgA" rel=me>
            <Icon name="simple-icons:youtube" size="32" />
          </a>
          <a aria-label="Facebook" class="button" href="https://www.facebook.com/people/Student-Transport-Riders-Association/61575645665159/">
            <Icon name="simple-icons:facebook" size="32" />
          </a>
          <a aria-label="Facebook" class="button" href="https://aus.social/@stra" rel=me>
            <Icon name="simple-icons:mastodon" size="32" />
          </a>
          <a aria-label="Instagram" class="button" href="https://instagram.com/stra_au" rel=me>
            <Icon name="simple-icons:instagram" size="32" />
          </a>
          <a aria-label="Bluesky" class="button" href="https://bsky.app/@stra.org.au" rel=me>
            <Icon name="simple-icons:bluesky" size="32" />
          </a>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
</script>
<style>
@reference "~/assets/css/main.css";

.button {
  @apply rounded-sm bg-bg pt-2 px-2 text-fg;
}
</style>