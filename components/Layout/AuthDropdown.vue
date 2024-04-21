<script setup lang="ts">
interface Props {
  position: "bottom" | "top";
}
const props = withDefaults(defineProps<Props>(), {
  position: "top",
});
const { isHelpSlideoverOpen } = useDashboard();
const { isDashboardSearchModalOpen } = useUIState();
const { metaSymbol } = useShortcuts();
const authStore = useAuthStore();

const items = computed(() => [
  [
    {
      slot: "account",
      label: "",
      disabled: true,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
      to: "/app/settings",
    },
    {
      label: "Command menu",
      icon: "i-heroicons-command-line",
      shortcuts: [metaSymbol.value, "K"],
      click: () => {
        isDashboardSearchModalOpen.value = true;
      },
    },
    {
      label: "Help & Support",
      icon: "i-heroicons-question-mark-circle",
      shortcuts: ["?"],
      click: () => (isHelpSlideoverOpen.value = true),
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
    },
  ],
]);
</script>

<template>
  <UDropdown
    mode="hover"
    :items="items"
    :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full"
        :label="authStore.userFullName"
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      >
        <template #leading>
          <UColorModeToggle />
        </template>

        <template #trailing>
          <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          ben@nuxtlabs.com
        </p>
      </div>
    </template>
  </UDropdown>
</template>
