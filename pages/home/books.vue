<script setup lang="ts">
definePageMeta({
  layout: "home",
  bookAuth: false,
});

useSeoMeta({
  title: "Books",
});

const links = ref([
  {
    label: "Dashboard",
    to: "/books",
    icon: "i-heroicons-home",
  },
]);
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Books" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
