<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef, IUTableSelectColumnOption } from "~/types";

interface Props {
  rows: T[];
  selectedColumns: IUTableSelectColumnOption[];
  fetchingData?: boolean;
  actionsColumn?: "none" | "start" | "end";
}

const props = withDefaults(defineProps<Props>(), {
  fetchingData: false,
  actionsColumn: "none",
});

const processing: Ref<boolean> = ref(false);

const loading = computed(() => {
  return props.fetchingData || processing.value;
});

const columns = computed(() => {
  switch (props.actionsColumn) {
    case "start": {
      return [{ key: "actions" }, ...props.selectedColumns];
    }
    case "end": {
      return [...props.selectedColumns, { key: "actions" }];
    }
    default: {
      return props.selectedColumns;
    }
  }
});
</script>

<template>
  <UTable :rows="rows" :loading="loading" :columns="columns">
    <template #action-data> <slot name="actions"></slot></template>

    <template v-for="c of selectedColumns" v-slot:[`${c.key}-data`]="{ row }">
      <UBadge v-if="c.key === 'id'" color="gray" variant="solid">{{
        row[c.key]
      }}</UBadge>
      <TableColumnBool v-else-if="c.type === 'boolean'" :val="row[c.key]" />
      <span v-else-if="c.type === 'stringToUpper'">{{
        row[c.key].toUpperCase()
      }}</span>
      <UBadge
        v-else-if="c.type === 'idInteger'"
        color="black"
        variant="solid"
        size="lg"
        >{{ row[c.key] }}</UBadge
      >
    </template></UTable
  >
</template>
