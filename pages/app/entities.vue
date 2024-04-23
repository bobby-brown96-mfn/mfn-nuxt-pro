<script lang="ts" setup>
import type { BaseBookEntityFragment } from "#graphql-operations";
import type { IColumnDef } from "~/types";

useSeoMeta({
  title: "Entities",
});

const toast = useToast();

const authStore = useAuthStore();

const isLoading = ref(false);
const isNewEntityModalOpen = ref(false);

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

const entities = ref<BaseBookEntityFragment[]>([]);

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

const entityChanged = async () => {
  isLoading.value = true;
  await getEntities();
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

      <UDashboardToolbar>
        <template #left>
          <UButton
            label="New Entity"
            trailing-icon="i-heroicons-plus"
            color="gray"
            @click="isNewEntityModalOpen = true"
        /></template>
      </UDashboardToolbar>

      <UDashboardModal v-model="isNewEntityModalOpen" title="New Entity">
        <FormNewEntity
          :book-id="authStore.activeBookId ?? ''"
          :user-id="authStore.activeUserId ?? ''"
          @close="isNewEntityModalOpen = false"
          @saved-new="entityChanged"
          :existingBookEntities="entities"
        />
      </UDashboardModal>

      <TableNuTable
        :data="entities"
        :fetching-data="isLoading"
        :column-options="defaultColumns"
      ></TableNuTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>
