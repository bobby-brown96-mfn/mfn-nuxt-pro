import type {
  IColumnDef,
  IUSelectColumnConfig,
  IUTableColumn,
  IUTableSelectColumnOption,
} from "~/types";

export const convertSelectConfig = (
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

export const convertColumn = (def: IColumnDef): IUTableColumn => {
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
