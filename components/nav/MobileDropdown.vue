<template>
  <div>
    <button class="right-0" @click="show = !show">
      <Icon v-if="!show" aria-label="Open" name="gg:menu" size="32" />
      <Icon v-else aria-label="Close" name="gg:close" size="32" />
    </button>
    <div v-show="show" class="z-4 absolute top-32 left-0 w-full p-4 flex flex-col bg-bg-dark opacity-100 items-center rounded-b-sm border-b-fg-dark border-b-4 gap-8">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(false);
</script>