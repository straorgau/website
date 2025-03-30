<template>
  <button class="flex flex-row gap-1" @click="show = !show">
    <span class="text-xl font-semibold">{{title}}</span>
    <Icon v-if="!show" name="gg:chevron-down" size="28" />
    <Icon v-else name="gg:chevron-up" size="28" />
  </button>
  <div v-show="show" class="flex flex-col gap-4 items-center bg-inherit text-fg-dark/80">
    <slot/>
  </div>
</template>
<script setup lang="ts">
const show = ref(false);

defineProps<{
  title: string;
}>()
</script>