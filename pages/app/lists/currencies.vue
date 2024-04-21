<script setup lang="ts">
import type { ListCurrencyFragment } from "#graphql-operations";
import type { IPrimeColumnDef } from "~/types";
useSeoMeta({
  title: "Currencies",
});

const authStore = useAuthStore();

const columnOptions: IPrimeColumnDef[] = [
  {
    field: "name",
    header: "Name",
    fixedColumn: true,
  },
  {
    field: "code",
    header: "Code",
  },
  {
    field: "id",
    header: "ID",
    sortable: false,
  },
  {
    field: "isActive",
    header: "Active",
  },
];

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
      <UProgress v-if="isLoading" />
      <TablePrime
        v-else
        :data="bookCurrencies"
        :data-loading="isLoading"
        :column-options="columnOptions"
      ></TablePrime>
    </UDashboardCard>
  </UDashboardPanelContent>
</template>
