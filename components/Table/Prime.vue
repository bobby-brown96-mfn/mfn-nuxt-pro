<script lang="ts" setup generic="T extends { id: string }">
import type { IPrimeColumnConfig, IPrimeColumnDef } from "~/types";
interface Props {
  data: T[];
  dataLoading: boolean;
  columnOptions: IPrimeColumnDef[];
  columnSelect?: boolean;
}

const props = defineProps<Props>();

const localLoading = ref(false);

// const checkBool = (def: boolean, val: unknown): boolean => {
//   return isBoolean(val) ? val : def;
// };

const convertColumn = (col: IPrimeColumnDef): IPrimeColumnConfig => {
  const {
    field,
    header,
    sortable = true,
    type = "text",
    defaultSelected = true,
    fixedColumn = false,
    selectable = true,
  } = col;

  return {
    field,
    header,
    sortable,
    type,
    defaultSelected,
    fixedColumn,
    selectable: fixedColumn === true ? false : selectable,
  };
};

const columns = computed<IPrimeColumnConfig[]>(() => {
  return props.columnOptions.map((c) => {
    return convertColumn(c);
  });
});

const isLoading = computed(() => {
  return props.dataLoading || localLoading.value;
});
</script>

<template>
  <PrimeDataTable
    dataKey="id"
    resizableColumns
    :value="data"
    :loading="isLoading"
    showGridlines
  >
    <PrimeColumn
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></PrimeColumn>
  </PrimeDataTable>
</template>
