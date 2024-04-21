//import type { Tab } from "#ui/types";
import type {
  IColumnDef,
  IUSelectColumnConfig,
  IUTableColumn,
  IUTableSelectColumnOption,
} from "~/types";

export interface IUseTableOptions {
  selectableColumns: boolean;
}

const useUTable = <T extends { id: string }>({
  selectableColumns,
}: IUseTableOptions) => {
  const processing: Ref<boolean> = ref(false);
  const searchQ = ref("");
  const allColumnDefs: Ref<IColumnDef[]> = ref([]);
  const columns: Ref<IUTableSelectColumnOption[]> = ref([]);
  const selectedColumns: Ref<IUTableSelectColumnOption[]> = ref([]);
  const allData: Ref<T[]> = ref([]);

  const boolDefaultCheck = ({
    def,
    val,
  }: {
    def: boolean;
    val: unknown;
  }): boolean => {
    return isBoolean(val) ? val : def;
  };

  const convertSelectConfig = (
    val: Partial<IColumnDef>
  ): IUSelectColumnConfig => {
    const fixedColumn = boolDefaultCheck({ def: false, val: val.fixedColumn });
    if (fixedColumn === true) {
      return {
        fixedColumn,
        selectable: false,
        defaultSelected: true,
      };
    } else {
      return {
        fixedColumn,
        selectable: boolDefaultCheck({ def: true, val: val.selectable }),
        defaultSelected: boolDefaultCheck({
          def: true,
          val: val.defaultSelected,
        }),
      };
    }
  };

  const convertColumn = (def: IColumnDef): IUTableColumn => {
    const { label, key, type = "string", ...c } = def;

    const selectConfig = convertSelectConfig(c);

    return {
      key,
      label,
      type,
      globalSearch: boolDefaultCheck({
        def: type === "string" && key !== "id",
        val: c.globalSearch,
      }),
      sortable: boolDefaultCheck({ def: true, val: c.sortable }),
      ...selectConfig,
    };
  };

  const selectColumnsOptions = computed<IUTableSelectColumnOption[]>(() => {
    if (!selectableColumns) {
      return allColumnDefs.value.map((c) => {
        const col = convertColumn(c);
        return { ...col, disabled: true };
      });
    } else {
      return allColumnDefs.value.map((c) => {
        const col = convertColumn(c);
        return { ...col, disabled: !col.selectable };
      });
    }
  });

  const setColumns = () => {
    if (!selectableColumns) {
      columns.value = allColumnDefs.value.map((c) => {
        const col = convertColumn(c);
        return { ...col, disabled: true };
      });
    } else {
      columns.value = allColumnDefs.value.map((c) => {
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
    if (processing.value === true || selectableColumns === false) return true;
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
    if (!searchQ.value || searchQ.value === "") return allData.value;
    else {
      const globalFilterFields = selectedColumns.value.filter(
        ({ globalSearch }) => globalSearch
      );

      if (globalFilterFields.length === 0) return allData.value;
      else {
        return allData.value.filter((d) => {
          const { id, ...f } = d;
          return Object.values(f).some((value) => {
            return !isString(value)
              ? false
              : String(value)
                  .toLowerCase()
                  .includes(searchQ.value.toLowerCase());
          });
        });
      }
    }
  });
  onMounted(() => {
    processing.value = true;
    setDefaultSelected();
  });

  return {
    processing,
    allColumnDefs,
    columns,
    selectColumnsOptions,
    selectedColumns,
    setDefaultSelected,
    disableResetColumns,
    searchQ,
    allData,
    rows,
  };
};

export default useUTable;
