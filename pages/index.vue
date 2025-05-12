<template>
  <div class="text-fg-dark bg-bg-dark">
    <Navbar />
    <Hero />
    <Policies />
    <section class="bg-bg-dark text-fg-dark justify-center w-full p-8 flex flex-col gap-4">
      <h1 class="text-3xl font-bold">Become a member</h1>
      <span class="text-xl">
        Whether you're a student or a staff member, we have the perfect membership for you. 
        We offer a range of options, and benefits that suit your occupation.
        It even costs less than your weekly public transport fare.
      </span>
      <div class="flex justify-end">
        <a
        class="flex flex-row justify-end text-2xl font-bold underline underline-offset-4"
        href="/policies"
        >
          <Icon name="gg:arrow-top-right" size="32" />
          Find out more
        </a>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '~/components/nav/Navbar.vue';
import Hero from '~/components/home/Hero.vue';
import Policies from '~/components/home/Policies.vue';
import Footer from '~/components/nav/Footer.vue';
</script>