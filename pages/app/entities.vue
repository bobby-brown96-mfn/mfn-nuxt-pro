<script lang="ts" setup>
import type { BaseEntityDataFragment } from "#build/graphql-operations";
import type { IColumnDef } from "~/types";

useSeoMeta({
  title: "Entities",
});

const toast = useToast();

const authStore = useAuthStore();

const isLoading = ref(false);
const isEntityModalOpen = ref(false);

const defaultColumns = ref<IColumnDef[]>([
  {
    key: "entityId",
    label: "#",
    sortable: true,
    fixedColumn: true,
    type: "idInteger",
  },
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
    key: "entityType",
    label: "Entity Type",
    sortable: true,
    type: "select",
  },
  {
    key: "defaultAccountNumber",
    label: "Default Account Number",
    sortable: true,
    type: "number",
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
]);

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

onMounted(() => {
  isLoading.value = true;
  getEntities();
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Entities">
        <template #right>
          <LayoutAuthDropdown position="bottom" />
        </template>
      </UDashboardNavbar>

      <TableNuTable
        :data="entities"
        :fetching-data="isLoading"
        :column-options="defaultColumns"
      ></TableNuTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>
