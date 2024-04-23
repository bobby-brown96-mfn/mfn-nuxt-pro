<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef } from "~/types";
import type { AccordionItem } from "#ui/types";

interface Props {
  data: T[];
  columnOptions: IColumnDef[];
  fetchingData?: boolean;
  selectableColumns?: boolean;
  optionsLayout?: "accordion" | "grid";
}

const props = withDefaults(defineProps<Props>(), {
  fetchingData: false,
  selectableColumns: true,
  optionsLayout: "accordion",
});

const accordionItems = ref<AccordionItem[]>([
  {
    label: "Filters",
    icon: "i-heroicons-funnel-20-solid",
    defaultOpen: true,
    slot: "table_filter",
    closeOthers: true,
    content: "Set Filters on the table",
  },
  {
    label: "Adjust Columns",
    icon: "i-heroicons-eye-20-solid",
    slot: "adjust_columns",
    content: "Select Columns to Show",
  },
]);

const filterAccordionItems = ref<AccordionItem[]>([
  {
    label: "Filters",
    icon: "i-heroicons-funnel-20-solid",
    defaultOpen: true,
    slot: "table-filter",
    content: "Set Filters on the table",
    closeOthers: false,
  },
  {
    label: "Search",
    icon: "i-heroicons-magnifying-glass-circle-20-solid",
    slot: "filter-search",
    closeOthers: false,
  },
]);

const viewAccordionItems = ref<AccordionItem[]>([
  {
    label: "Adjust View",
    icon: "i-heroicons-eye-20-solid",
    slot: "adjust-view",
    content: "Adjust View for the table",
    defaultOpen: true,
    closeOthers: false,
  },
  {
    label: "Adjust Columns",
    icon: "i-heroicons-eye-20-solid",
    slot: "adjust-columns",
    content: "Choose Columns to View",
    closeOthers: false,
  },
]);

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
    <div
      v-if="optionsLayout === 'grid'"
      class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8"
    >
      <USelectMenu multiple :options="columns" v-model="selectedColumns" />
      <UButton
        label="Reset Columns"
        @click="setDefaultSelected"
        :disabled="disableResetColumns"
      />
      <UInput v-model="searchQ" placeholder="Search..." />
      <div class="flex px-3 py-3.5 border-gray-200 dark:border-gray-700">
        <UPopover overlay>
          <UButton color="white" label="Filter" />
          <template #panel> <div class="p-4">test</div> </template></UPopover
        >
        <UButton label="Clear Filters" @click="initFilters" />
      </div>
    </div>
    <div v-else class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
      <UAccordion :items="filterAccordionItems">
        <template #table-filter>
          <UCard>
            <template #header>
              <UButton label="Clear Filters" @click="initFilters" />
            </template>
            <template #footer>
              <div class="grid grid-cols-3 gap-4">
                <UInput
                  class="col-span-2"
                  v-model="searchQ"
                  placeholder="Global Search..."
                />
                <!-- <UInput v-model="searchQ" placeholder="Search..." /> -->
              </div>
            </template>
          </UCard>
        </template>
        <template #filter-search>
          <UCard>
            <pre>{{ selectedColumns }}</pre>
          </UCard>
        </template>
      </UAccordion>
      <UAccordion :items="viewAccordionItems">
        <template #adjust-columns>
          <div class="grid grid-cols-3 gap-4">
            <USelectMenu
              class="col-span-2"
              multiple
              :options="columns"
              v-model="selectedColumns"
            />
            <UButton
              label="Reset Columns"
              @click="setDefaultSelected"
              :disabled="disableResetColumns"
            />
          </div>
        </template>
      </UAccordion>
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
