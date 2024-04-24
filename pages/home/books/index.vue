<script setup lang="ts">
import { type HomeBookEntryFragment, Role } from "#graphql-operations";

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
  bookDashStore.getBookData();
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection
      title="Theme"
      description="Customize the look and feel of your dashboard."
    >
      <template #links>
        <UColorModeSelect color="gray" />
      </template>
    </UDashboardSection>
    <UDashboardSection>
      <pre>{{ bookDashStore.bookData }}</pre>
    </UDashboardSection>
  </UDashboardPanelContent>
</template>
