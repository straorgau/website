<template>
  <div @mouseleave="onLeave" @mouseover="onOver">
    <button class="flex flex-row gap-2 items-center">
      <span class="text-xl font-semibold">{{title}}</span>
      <Icon v-if="!show" aria-label="Open" name="gg:chevron-down" size="20" />
      <Icon v-else aria-label="Close" name="gg:chevron-up" size="20" />
    </button>
    <div v-show="show" class="absolute py-4 mt-2 rounded-md shadow-xl self-auto border-2 bg-bg-dark border-fg-dark">
      <div class="flex flex-col gap-4 px-6">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(false);

const onOver = () => show.value = true;
const onLeave = () => show.value = false;

defineProps<{
  title: string;
}>();
</script>