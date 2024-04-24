<script setup lang="ts">
definePageMeta({
  layout: "home",
  bookAuth: false,
});

useSeoMeta({
  title: "Books",
});

const bookDashStore = useBookHomeStore();
const toast = useToast();

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

const refreshingBookData = ref(false);
const refreshBookData = async () => {
  refreshingBookData.value = true;

  toast.add({
    title: "Books Refreshed",
    icon: "i-heroicons-check-circle",
    id: "books_refreshed",
  });
  await new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  await bookDashStore.refreshBookData().then(() => {
    toast.remove("books_refreshed");
    refreshingBookData.value = false;
  });
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Books" :badge="bookDashStore.bookData?.length">
        <template #right>
          <UButton
            label="Refresh"
            :loading="refreshingBookData"
            @click="refreshBookData"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
