<template>
  <nav class="absolute top-0 flex flex-row items-center w-full p-8">
    <a class="flex flex-row gap-4 items-center text-sm" href="/">
      <img
        src="/assets/img/logo.png"
        alt="Student Transport Riders Association Logo"
        class="max-w-[48px]"
      >
      <span class="break-word max-w-[8ch] font-bold">Student Transport Riders Association</span>
    </a>
    <div class="hidden lg:flex lg:flex-row lg:justify-end lg:flex-grow self-center lg:gap-4">
      <a class="text-xl font-semibold underline" href="/join">Join</a>
      <Dropdown title="About">
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/policies">Policies</a>
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/team">Team</a>
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/history">History</a>
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/contact">Contact</a>
      </Dropdown>
      <Dropdown title="Members">
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/events">Events</a>
        <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/membership">Membership</a>
      </Dropdown>
    </div>
    <div class="lg:hidden flex flex-row justify-end flex-grow">
      <MobileDropdown>
        <a class="text-xl font-semibold underline" href="/join">Join</a>
        <MobileSubmenu title="About">
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/policies">Policies</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/team">Team</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/history">History</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/contact">Contact</a>
        </MobileSubmenu>
        <MobileSubmenu title="Members">
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/events">Events</a>
          <a class="text-lg font-semibold hover:underline hover:underline-offset-2" href="/membership">Membership</a>
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
