<script setup lang="ts">
import { BookEnvironmentType } from "#graphql-operations";

const authStore = useAuthStore();
const teams = [
  {
    label: "Nuxt",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/23360933?s=200&v=4",
    },
    click: () => {
      team.value = teams[0];
    },
  },
  {
    label: "NuxtLabs",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/62017400?s=200&v=4",
    },
    click: () => {
      team.value = teams[1];
    },
  },
];

const userBooks = computed(() =>
  !authStore.activeUser?.connectedBookUsers
    ? []
    : authStore.activeUser.connectedBookUsers
        .filter(({ bookId }) => bookId !== authStore.activeBookId)
        .map(({ book, bookId }) => ({
          label: `${book.bookNumber} - ${book.name}`,
          avatar: {
            src:
              book.envType === BookEnvironmentType.PRODUCTION
                ? "https://avatars.githubusercontent.com/u/23360933?s=200&v=4"
                : "https://avatars.githubusercontent.com/u/62017400?s=200&v=4",
          },
        }))
);

const primaryBook = computed(() => {
  return !authStore.activeBook
    ? [
        {
          label: "Nuxt",
          avatar: {
            src: "https://avatars.githubusercontent.com/u/23360933?s=200&v=4",
          },
        },
      ]
    : [
        {
          label: `${authStore.activeBook.bookNumber} - ${authStore.activeBook.name}`,
          icon: "i-heroicons-home-20-solid",
        },
      ];
});

const actions = [
  {
    label: "Create Book",
    icon: "i-heroicons-plus-circle",
  },
  {
    label: "Manage Books",
    icon: "i-heroicons-cog-8-tooth",
    to: "/home",
  },
];

const primaryBookLabel = computed(() =>
  authStore.activeBook
    ? `${authStore.activeBook.envType} - ${authStore.activeBook.bookNumber} - ${authStore.activeBook.name}`
    : "NUXT"
);

const team = ref(primaryBook.value[0]);
</script>

<template>
  <UDropdown
    v-slot="{ open }"
    mode="hover"
    :items="[primaryBook, userBooks, actions]"
    class="w-full"
    :ui="{ width: 'w-full' }"
    :popper="{ strategy: 'absolute' }"
  >
    <UButton
      color="gray"
      variant="ghost"
      :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      class="w-full"
    >
      <UBadge v-if="primaryBook[0]" color="amber">
        <span class="truncate text-gray-900 dark:text-black font-semibold">{{
          primaryBookLabel
        }}</span></UBadge
      >
      <UBadge v-else>
        <span class="truncate text-gray-900 dark:text-white font-semibold">{{
          team.label
        }}</span></UBadge
      >
    </UButton>
  </UDropdown>
</template>
