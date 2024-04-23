<script setup lang="ts">
import type { ListCurrencyFragment } from "#graphql-operations";
import type { IPrimeColumnDef, IColumnDef } from "~/types";
// useSeoMeta({
//   title: "Currencies",
// });

const authStore = useAuthStore();

// const columnOptions: IPrimeColumnDef[] = [
//   {
//     field: "name",
//     header: "Name",
//     fixedColumn: true,
//   },
//   {
//     field: "code",
//     header: "Code",
//   },
//   {
//     field: "id",
//     header: "ID",
//     sortable: false,
//   },
//   {
//     field: "isActive",
//     header: "Active",
//   },
// ];

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
    key: "currencyFraction",
    label: "Fraction Name",
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
  {
    key: "createdAt",
    label: "Created At",
    defaultSelected: false,
    type: "date",
  },
]);

const isLoading = ref(false);

const currencies = ref<ListCurrencyFragment[]>([]);

const bookCurrencies = computed(() => {
  return currencies.value.filter(({ code }) =>
    authStore.getBookCurrencies.includes(code)
  );
});

const nonBookCurrencies = computed(() => {
  return currencies.value.filter(
    ({ code }) => !authStore.getBookCurrencies.includes(code)
  );
});

const getCurrencies = async () => {
  isLoading.value = true;
  const { data, errors } = await useGraphqlQuery({
    name: "searchListCurrencies",
    variables: { where: {} },
  });

  if (data.currencies) currencies.value = data.currencies;

  isLoading.value = false;
};

onMounted(() => {
  isLoading.value = true;
  getCurrencies();
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardCard title="Manage Currencies">
      <!-- <TableBase
        :data="bookCurrencies || []"
        :fetching-data="isLoading"
        :column-options="defaultColumns"
      ></TableBase> -->
      <TableNuTable
        :data="bookCurrencies || []"
        :fetching-data="isLoading"
        :column-options="defaultColumns"
      ></TableNuTable>
    </UDashboardCard>
  </UDashboardPanelContent>
</template>
