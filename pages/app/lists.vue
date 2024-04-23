<script setup lang="ts">
useSeoMeta({
  title: "Lists",
});
const links = [
  [
    {
      label: "Home",
      to: "/app/lists",
      exact: true,
      icon: "i-heroicons-list-bullet-16-solid",
    },
    {
      icon: "i-heroicons-user-group",
      label: "Currencies",
      to: "/app/lists/currencies",
    },
    {
      icon: "i-heroicons-book-open",
      label: "Countries",
      to: "/app/lists/countries",
    },
  ],
];
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Lists">
        <template #right>
          <LayoutAuthDropdown position="bottom" />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
