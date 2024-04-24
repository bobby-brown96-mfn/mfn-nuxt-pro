<script setup lang="ts">
import { type HomeBookEntryFragment, Role } from "#graphql-operations";
import type { IColumnDef } from "~/types";

const defaultColumns = ref<IColumnDef[]>([
  {
    key: "id",
    label: "ID",
    sortable: true,
    defaultSelected: false,
  },

  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "system",
    label: "System",
    sortable: true,
    type: "boolean",
  },
  {
    key: "isActive",
    label: "Active",
    sortable: true,
    type: "boolean",
  },
  {
    key: "updatedAt",
    label: "Updated At",
    defaultSelected: false,
    type: "date",
  },
  {
    key: "createdAt",
    label: "Created At",
    defaultSelected: false,
    type: "date",
  },
]);

const isLoading = ref(false);

//const books = ref<HomeBookEntryFragment[]>([]);

// const {
//   data: booksData,
//   pending,
//   refresh,
// } = useAsyncData<HomeBookEntryFragment[]>(
//   "dashBooks",
//   async () => {
//     const { data } = await useGraphqlQuery("homeBooksList", {
//       where: {
//         isActive: { equals: true },
//       },
//     });

//     return data.books;
//   },
//   {
//     server: false,
//     lazy: true,
//   }
// );

const bookDashStore = useBookHomeStore();

onMounted(() => {
  isLoading.value = true;
  bookDashStore.getBookData().then(() => (isLoading.value = false));
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <TableNuSelectCols
      :data="bookDashStore.bookData || []"
      :column-options="defaultColumns"
      title="List Books"
      row-name="Book"
      :fetching-data="bookDashStore.isProcessing || isLoading"
      actions-column="start"
    ></TableNuSelectCols>
  </UDashboardPanelContent>
</template>
