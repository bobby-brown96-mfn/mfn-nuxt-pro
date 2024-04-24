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
    to: "/home/books",
    icon: "i-heroicons-home-20-solid",
    exact: true,
  },
  {
    label: "List",
    to: "/home/books/list",
    icon: "i-heroicons-list-bullet-20-solid",
  },
  {
    label: "Manage",
    to: "/home/books/manage",
    icon: "i-heroicons-cog-20-solid",
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
