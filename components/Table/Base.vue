<script lang="ts" setup generic="T extends { id: string }">
import type { IColumnDef } from "~/types";
interface Props {
  data: T;
  columnOptions: IColumnDef[];
}

const props = defineProps<Props>();
</script>

<template></template>
