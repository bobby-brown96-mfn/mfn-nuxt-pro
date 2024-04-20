<script lang="ts" setup>
import type { BaseEntityDataFragment } from "#build/graphql-operations";

useSeoMeta({
  title: "Entities",
});

const isLoading = ref(false);
const authStore = useAuthStore();

const defaultColumns = [
  {
    key: "entityId",
    label: "#",
    sortable: true,
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "id",
    label: "ID",
    sortable: true,
  },
  {
    key: "entityType",
    label: "Entity Type",
    sortable: true,
  },
  {
    key: "defaultAccountNumber",
    label: "Default Account Number",
    sortable: true,
  },
  {
    key: "system",
    label: "System",
    sortable: true,
  },
];

const entities = ref<BaseEntityDataFragment[]>([]);

const getEntities = async () => {
  isLoading.value = true;
  const { data, errors } = await useGraphqlQuery("searchBookEntities", {
    where: {
      bookId: {
        equals: authStore.activeBookId ?? "",
      },
    },
  });
  if (data.searchBookEntities) {
    entities.value = data.searchBookEntities;
  }
  isLoading.value = false;
};

const q = ref("");
const selectedColumns = ref(defaultColumns);
const columns = computed(() =>
  defaultColumns.filter((column) => selectedColumns.value.includes(column))
);

onMounted(() => {
  getEntities();
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Entities"></UDashboardNavbar>

      <UTable :loading="isLoading" :rows="entities" :columns="columns">
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>
