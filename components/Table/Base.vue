<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef } from "~/types";
interface Props {
  data: T[];
  columnOptions: IColumnDef[];
  fetchingData?: boolean;
  selectableColumns?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fetchingData: false,
  selectableColumns: true,
});

const {
  processing,
  allColumnDefs,
  columns,
  setDefaultSelected,
  selectedColumns,
  disableResetColumns,
  allData,
  rows,
  searchQ,
  initFilters,
} = useUTable<T>({
  selectableColumns: props.selectableColumns,
});
allData.value = props.data;
allColumnDefs.value = props.columnOptions;

const loading = computed(() => {
  return props.fetchingData || processing.value;
});
</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <USelectMenu multiple :options="columns" v-model="selectedColumns" />
      <UButton
        label="Reset Columns"
        @click="setDefaultSelected"
        :disabled="disableResetColumns"
      />
      <UInput v-model="searchQ" placeholder="Search..." />
    </div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UPopover overlay>
        <UButton color="white" label="Filter" />
        <template #panel> <div class="p-4">test</div> </template></UPopover
      >
      <UButton label="Clear Filters" @click="initFilters" />
    </div>
    <UTable :rows="rows" :loading="loading" :columns="selectedColumns">
      <template v-for="c of selectedColumns" v-slot:[`${c.key}-data`]="{ row }">
        <TableColumnBool v-if="c.type === 'boolean'" :val="row[c.key]" />
        <span v-if="c.type === 'stringToUpper'">{{
          row[c.key].toUpperCase()
        }}</span>
      </template>
    </UTable>
  </div>
</template>
