<script setup lang="ts">
const links = [
  [
    {
      label: "General",
      icon: "i-heroicons-user-circle",
      to: "/app/settings",
      exact: true,
    },
    {
      label: "Members",
      icon: "i-heroicons-user-group",
      to: "/app/settings/members",
    },
  ],
  [
    {
      label: "Documentation",
      icon: "i-heroicons-book-open",
      to: "https://ui.nuxt.com/pro",
      target: "_blank",
    },
  ],
];
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Settings">
        <template #right>
          <LayoutAuthDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
