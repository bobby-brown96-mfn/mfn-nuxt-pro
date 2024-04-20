<script setup lang="ts">
defineProps({
  val: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <UBadge v-if="val" color="green" :ui="{ rounded: 'rounded-full' }">
    <UIcon name="i-heroicons-check-20-solid" />
  </UBadge>
  <UBadge v-else color="red" :ui="{ rounded: 'rounded-full' }">
    <UIcon name="i-heroicons-x-circle" />
  </UBadge>
</template>
