<template>
  <nav class="flex flex-row items-center w-full p-8 h-32 bg-bg-dark">
    <a class="flex flex-row gap-4 items-center text-sm" href="/">
      <img
        src="/assets/img/logo.png"
        alt="Student Transport Riders Association Logo"
        class="max-w-[48px]"
      >
      <span class="break-word max-w-[8ch] font-bold">Student Transport Riders Association</span>
    </a>
    <div class="hidden lg:flex lg:flex-row lg:justify-end lg:flex-grow items-center self-center lg:gap-4">
      <a class="rounded-2xl p-3 bg-bg/30 text-lg font-bold" href="https://stra.tidyhq.com">Member Login</a>
      <a class="text-xl font-semibold underline" href="/join">Join</a>
      <Dropdown title="News">
        <a class="text-sm font-semibold hover:underline hover:underline-offset-2" href="/media">Media Releases</a>
      </Dropdown>
      <Dropdown title="About">
        <a class="text-sm font-semibold hover:underline hover:underline-offset-2" href="/about">About Us</a>
        <a class="text-sm font-semibold hover:underline hover:underline-offset-2" href="/policies">Policies</a>
        <a class="text-sm font-semibold hover:underline hover:underline-offset-2" href="/team">Team</a>
        <a class="text-sm font-semibold hover:underline hover:underline-offset-2" href="/contact">Contact</a>
      </Dropdown>
    </div>
    <div class="lg:hidden flex flex-row justify-end flex-grow">
      <MobileDropdown>
        <a class="rounded-2xl p-3 bg-bg/30 text-lg font-bold" href="https://stra.tidyhq.com">Member Login</a>
        <a class="text-xl font-semibold underline" href="/join">Join</a>
        <MobileSubmenu title="News">
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/media">Media Releases</a>
        </MobileSubmenu>
        <MobileSubmenu title="About">
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/about">About the STRA</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/policies">Policies</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/team">Team</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/contact">Contact</a>
        </MobileSubmenu>
      </MobileDropdown>
    </div>
  </nav>
</template>
<script setup lang="ts">
import Dropdown from './Dropdown.vue';
import MobileDropdown from './MobileDropdown.vue';
import MobileSubmenu from './MobileSubmenu.vue';
</script>
