<script setup lang="ts">
import { type HomeBookEntryFragment, Role } from "#graphql-operations";
import type { DropdownItem } from "#ui/types";

definePageMeta({
  layout: "app",
});

useSeoMeta({
  title: "Home",
});

const toast = useToast();
const authStore = useAuthStore();
const tokenDetails = ref();
const refreshTokenDetails = ref();

const setTokenDetails = () => {
  tokenDetails.value = authStore.decodedAccessToken;
  refreshTokenDetails.value = authStore.decodedRefreshToken;
};
const columns = [
  {
    key: "actions",
    sortable: false,
  },
  {
    key: "bookNumber",
    label: "#",
    sortable: true,
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "isSeeded",
    label: "Seeded",
    sortable: true,
  },
  {
    key: "isActive",
    label: "Active",
    sortable: true,
  },
  {
    key: "system",
    label: "System",
    sortable: true,
  },
  {
    key: "primaryCurrencyCode",
    label: "Currency",
    sortable: true,
  },
  {
    key: "envType",
    label: "Type",
    sortable: true,
  },
  {
    key: "id",
    label: "ID",
    sortable: false,
  },
];

const activateBook = async (bookId: string) => {
  authStore.setActiveBook(bookId).then(async () => await fetchBooks());
};

const clearActiveBook = async () => {
  authStore.clearActiveBook().then(async () => await fetchBooks());
};

const addUserToBook = async (bookId: string) => {
  if (authStore.activeUserId && authStore.activeUserRole) {
    const { data, errors } = await useGraphqlMutation("createBookUser", {
      input: {
        bookId,
        userId: authStore.activeUserId,
        bookRole: authStore.activeUserRole,
      },
    });
  } else {
    toast.add({
      title: "Missing Active User or Role",
      timeout: 3000,
      color: "red",
    });
  }
};

const actions = (row: HomeBookEntryFragment): DropdownItem[][] => {
  const bookUserIds = row.connectedBookUsers?.map((c) => c.userId) ?? [];
  bookUserIds.push(row.systemUserId);

  if (bookUserIds.includes(authStore.activeUserId ?? "")) {
    const actionItems = [
      [
        {
          label: "Edit",
          icon: "i-heroicons-pencil-square-20-solid",
          disabled: row.system,
          click: () => console.log("Edit", row.id),
        },
        {
          label: "Duplicate",
          icon: "i-heroicons-document-duplicate-20-solid",
        },
      ],
      [
        {
          label: "Delete",
          icon: "i-heroicons-trash-20-solid",
          disabled: row.system,
          click: () => console.log("Delete", row.id),
        },
      ],
    ];

    if (row.isActive && row.isSeeded && !authStore.activeBookId) {
      const setActiveActions = [
        {
          label: "Set as Active",
          icon: "i-heroicons-arrow-right-circle-16-solid",
          click: async () => await activateBook(row.id),
        },
      ];

      return [setActiveActions, ...actionItems];
    }
    return actionItems;
  } else {
    return [
      [
        {
          label: "Add Me to Book",
          icon: "i-heroicons-plus-circle-16-solid",
          click: async () => await addUserToBook(row.id),
          disabled:
            authStore.activeUserRole !== Role.ADMIN &&
            authStore.activeUserRole !== Role.SYSTEM,
        },
      ],
    ];
  }
};

const isLoading = ref(false);

const booksData = ref<HomeBookEntryFragment[]>([]);

const fetchBooks = async () => {
  isLoading.value = true;
  await useAuthStore().refreshAccess();
  const { data } = await useGraphqlQuery("homeBooksList", {
    where: {
      isActive: { equals: true },
    },
  });

  booksData.value = data.books;
  isLoading.value = false;
};

onMounted(async () => {
  fetchBooks();
});
</script>

<template>
  <UCard
    class="max-w-screen-lg w-full bg-white/75 dark:bg-white/5 backdrop-blur"
  >
    <template #header>
      <h1
        class="font-semibold text-xl text-gray-900 dark:text-white leading-tight"
      >
        Manage Books
      </h1>
    </template>

    <!-- <Placeholder class="h-32" /> -->
    <UTable
      class="min-h-72"
      :rows="booksData"
      :loading="isLoading"
      :columns="columns"
      :ui="{
        default: { checkbox: { color: 'gray' } },
      }"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Loading...',
      }"
      :progress="{ color: 'primary', animation: 'carousel' }"
    >
      <template #actions-data="{ row }">
        <UDropdown
          v-slot="{ open }"
          :items="actions(row)"
          :popper="{ strategy: 'absolute' }"
        >
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
            :class="[open && 'bg-gray-50 dark:bg-gray-800']"
            class="w-full"
          />
        </UDropdown>
      </template>

      <template #isSeeded-data="{ row }">
        <!-- <UBadge
          v-if="row.isSeeded"
          color="green"
          :ui="{ rounded: 'rounded-full' }"
        >
          <UIcon name="i-heroicons-check-20-solid" />
        </UBadge>
        <UBadge v-else :ui="{ rounded: 'rounded-full' }">
          <UIcon name="i-heroicons-x-circle" />
        </UBadge> -->
        <TableColumnBool :val="row.isSeeded" />
      </template>

      <template #isActive-data="{ row }">
        <TableColumnBool :val="row.isActive" />
      </template>

      <template #system-data="{ row }">
        <TableColumnBool :val="row.system" />
      </template>
    </UTable>

    <template #footer>
      <UButton v-if="authStore.activeBookId" @click="clearActiveBook()"
        >Clear Active Book</UButton
      >
      <br />
      <UButton @click="setTokenDetails()">Check User</UButton>
      <br />
      <pre>{{ authStore.$state }}</pre>
      <br />
      <pre>{{ refreshTokenDetails }}</pre>
    </template>
  </UCard>
</template>
