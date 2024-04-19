<script setup lang="ts">
import type { HomeBookEntryFragment } from "#graphql-operations";

definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Home",
});

const booksData = ref<HomeBookEntryFragment[]>([]);

const fetchBooks = async () => {
  await useAuthStore().refreshAccess();
  const { data } = await useGraphqlQuery("homeBooksList", {
    where: {
      isActive: { equals: true },
    },
  });

  booksData.value = data.books;
};

onMounted(async () => {
  fetchBooks();
});
</script>

<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <template #header>
      <Placeholder class="h-8" />
    </template>

    <!-- <Placeholder class="h-32" /> -->
    <div>
      <pre>{{ booksData }}</pre>
    </div>

    <template #footer>
      <h2>Check User</h2>
    </template>
  </UCard>
</template>
