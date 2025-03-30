<template>
  <div>
    <button class="flex flex-row gap-2 items-center" @click="show = !show">
      <span class="text-xl font-semibold">{{title}}</span>
      <Icon v-if="!show" name="gg:chevron-down" size="20" />
      <Icon v-else name="gg:chevron-up" size="20" />
    </button>
    <div v-show="show" class="fixed py-4 mt-2 mr-16 rounded-md shadow-xl w-fit border-2 bg-bg-dark border-fg-dark">
      <div class="flex flex-col gap-4 px-4">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(false);

defineProps<{
  title: string;
}>();
</script>