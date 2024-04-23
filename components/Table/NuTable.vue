<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef, IUTableSelectColumnOption } from "~/types";
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

const processing: Ref<boolean> = ref(false);
const searchQ = ref("");
const columns: Ref<IUTableSelectColumnOption[]> = ref([]);
const selectedColumns: Ref<IUTableSelectColumnOption[]> = ref([]);
//const allData: Ref<T[]> = ref([]);

const setColumns = () => {
  if (!props.selectableColumns) {
    columns.value = props.columnOptions.map((c) => {
      const col = convertColumn(c);
      return { ...col, disabled: true };
    });
  } else {
    columns.value = props.columnOptions.map((c) => {
      const col = convertColumn(c);
      return { ...col, disabled: !col.selectable };
    });
  }
};

const setDefaultSelected = () => {
  processing.value = true;
  setColumns();
  selectedColumns.value = columns.value.filter(
    ({ defaultSelected }) => defaultSelected
  );
  processing.value = false;
};

const disableResetColumns = computed<boolean>(() => {
  if (processing.value === true || props.selectableColumns === false)
    return true;
  else {
    const defaultSelectedColumnKeys = columns.value
      .filter(({ defaultSelected }) => defaultSelected)
      .map(({ key }) => key);
    const selectedColumnKeys = selectedColumns.value.map(({ key }) => key);
    if (defaultSelectedColumnKeys.length !== selectedColumnKeys.length)
      return false;
    else {
      return defaultSelectedColumnKeys.every((element) =>
        selectedColumnKeys.includes(element)
      );
    }
  }
});

const rows = computed(() => {
  if (!searchQ.value || searchQ.value === "") return props.data;
  else {
    const globalFilterFields = selectedColumns.value.filter(
      ({ globalSearch }) => globalSearch
    );

    if (globalFilterFields.length === 0) return props.data;
    else {
      return props.data.filter((d) => {
        const { id, ...f } = d;
        return Object.values(f).some((value) => {
          return !isString(value)
            ? false
            : String(value).toLowerCase().includes(searchQ.value.toLowerCase());
        });
      });
    }
  }
});

const loading = computed(() => {
  return props.fetchingData || processing.value;
});

const initFilters = () => {
  processing.value = true;
  searchQ.value = "";
  processing.value = false;
};

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

onMounted(() => {
  initFilters();
  setDefaultSelected();
});
</script>

<template>
  <div>
    <div
      v-if="optionsLayout === 'accordion'"
      class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8"
    >
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
      </template></UTable
    >
  </div>
</template>
