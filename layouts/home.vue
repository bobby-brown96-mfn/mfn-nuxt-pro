<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const { isHelpSlideoverOpen } = useHomeDashboard();

const links = ref([
  {
    id: "home",
    label: "Home",
    icon: "i-heroicons-home",
    to: "/home",
    tooltip: {
      text: "Home",
      shortcuts: ["B", "H"],
    },
  },
  {
    id: "books",
    label: "Books",
    icon: "i-heroicons-book-open",
    to: "/home/books",
    tooltip: {
      text: "Books",
      shortcuts: ["B", "B"],
    },
  },
]);

const defaultColors = ref(
  ["green", "teal", "cyan", "sky", "blue", "indigo", "violet"].map((color) => ({
    label: color,
    chip: color,
    click: () => (appConfig.ui.primary = color),
  }))
);
const colors = computed(() =>
  defaultColors.value.map((color) => ({
    ...color,
    active: appConfig.ui.primary === color.label,
  }))
);
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <NuxtLink to="/" class="w-full">
            <img src="/icon-192.png" alt="Image" width="100" height="100" />
            <!-- <UBadge>
              <span class="truncate text-gray-900 dark:text-white font-semibold"
                >MyFinancesNow</span
              ></UBadge
            > -->
          </NuxtLink>
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <UDashboardSidebarLinks
          :links="[{ label: 'Colors', draggable: true, children: colors }]"
          @update:links="(colors) => (defaultColors = colors)"
        />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <UColorModeToggle />
          <!-- <LayoutAuthDropdown position="top" /> -->
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <UDashboardSearch />
  </UDashboardLayout>
</template>
