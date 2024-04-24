<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef, IUTableSelectColumnOption } from "~/types";

interface Props {
  data: T[];
  columnOptions: IColumnDef[];
  title: string;
  rowName: string;
  fetchingData?: boolean;
  selectableColumns?: boolean;
  showGlobalSearch?: boolean;
  actionsColumn?: "none" | "start" | "end";
}

const props = withDefaults(defineProps<Props>(), {
  fetchingData: false,
  selectableColumns: true,
  showGlobalSearch: true,
});

const processing: Ref<boolean> = ref(false);
const searchQ = ref("");
const columns: Ref<IUTableSelectColumnOption[]> = ref([]);
const selectedColumns: Ref<IUTableSelectColumnOption[]> = ref([]);

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

const searchPlaceholder = computed(() => {
  const searchLabel = props.title
    ? `Search ${props.rowName}s`
    : "Global Search";
  return `${searchLabel}...`;
});

onMounted(() => {
  processing.value = true;
  initFilters();
  setDefaultSelected();
  processing.value = false;
});
</script>

<template>
  <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
    <UInput
      v-if="showGlobalSearch"
      v-model="searchQ"
      :placeholder="searchPlaceholder"
    />
    <UButton
      v-if="showGlobalSearch"
      label="Clear Filters"
      @click="initFilters"
    />
    <USelectMenu
      v-if="selectableColumns"
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

  <TableNuBase
    :rows="rows"
    :selected-columns="selectedColumns"
    :fetching-data="processing"
    :actions-column="actionsColumn"
  >
    <template #actions></template>
  </TableNuBase>
</template>
