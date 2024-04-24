<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef, IUTableSelectColumnOption } from "~/types";

interface Props {
  rows: T[];
  selectedColumns: IUTableSelectColumnOption[];
  fetchingData?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fetchingData: false,
});

const processing: Ref<boolean> = ref(false);

const loading = computed(() => {
  return props.fetchingData || processing.value;
});
</script>

<template>
  <UTable :rows="rows" :loading="loading" :columns="selectedColumns">
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
