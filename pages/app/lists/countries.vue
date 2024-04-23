<script setup lang="ts">
import type { ListCountryFragment } from "#graphql-operations";
import type { IColumnDef } from "~/types";

const defaultColumns = ref<IColumnDef[]>([
  {
    key: "code",
    label: "Code",
    sortable: true,
    type: "stringToUpper",
    fixedColumn: true,
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
]);

const {
  data: countries,
  pending,
  refresh,
} = useAsyncData<ListCountryFragment[]>("countryList", async () => {
  const { data } = await useGraphqlQuery("searchListCountries", {
    input: { isActive: { equals: true } },
  });
  return data.countries;
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <TableBase
      :data="countries || []"
      :fetching-data="pending"
      :column-options="defaultColumns"
    ></TableBase>
  </UDashboardPanelContent>
</template>
