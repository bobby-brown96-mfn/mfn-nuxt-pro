<script setup lang="ts">
import type { UTable } from "#components";
import type { ListCountryFragment } from "#graphql-operations";

const defaultColumns = [
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
    key: "code",
    label: "Code",
    sortable: true,
  },
  {
    key: "isActive",
    label: "Active",
    sortable: true,
    type: "boolean",
  },
];

const tagCols = ref(["code", "id"]);

//const countries = ref<ListCountryFragment[]>([])
const tableRef = ref<InstanceType<typeof UTable> | null>(null);

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
    <UTable
      :ui="{
        td: { base: 'max-w-[0] truncate' },
        default: { checkbox: { color: 'gray' } },
      }"
      :rows="countries || []"
      :columns="defaultColumns"
      :loading="pending"
    >
      <template v-for="c of defaultColumns" v-slot:[`${c.key}-data`]="{ row }">
        <TableColumnBool v-if="c.type === 'boolean'" :val="row[c.key]" />
      </template>
      <!-- <template #isActive-data="{ row }">
        <TableColumnBool :val="row.isActive" />
      </template> -->
    </UTable>
  </UDashboardPanelContent>
</template>
