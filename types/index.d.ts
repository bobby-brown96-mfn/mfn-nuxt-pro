import type { DashboardUserEntryFragment } from "#graphql-operations";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface BlogPost extends ParsedContent {
  title: string;
  description: string;
  date: string;
  image?: HTMLImageElement;
  badge?: Badge;
  authors?: ({
    name: string;
    description?: string;
    avatar?: Avatar;
  } & Link)[];
}

export type BookMember = DashboardUserEntryFragment & {
  fullName: string;
};

export type TColumnType =
  | "string"
  | "stringToUpper"
  | "number"
  | "currency"
  | "boolean"
  | "date";

export interface IUSelectColumnConfig {
  fixedColumn: boolean;
  selectable: boolean;
  defaultSelected: boolean;
}

export interface IBaseColumnDef {
  label: string;
  key: string;
}

export interface IUColumnOptions {
  sortable: boolean;
  type: TColumnType;
  globalSearch: boolean;
}

export interface IColumnDef
  extends IBaseColumnDef,
    Partial<IUColumnOptions>,
    Partial<IUSelectColumnConfig> {}

export interface IUTableColumn
  extends IBaseColumnDef,
    IUColumnOptions,
    IUSelectColumnConfig {}

export interface IUTableSelectColumnOption extends IUTableColumn {
  disabled?: boolean;
}

export type TPrimeSelectConfig = "multiselect" | "dropdown";

export type TBasePrimeColumnType = "text" | "boolean" | "numeric" | "date";

export type TPrimeSelectTypes = "bookCurrencyCodes" | "listValues";

export type TPrimeColumnType =
  | "text"
  | "boolean"
  | "numeric"
  | "date"
  | "multiselect"
  | "dropdown";

export interface IPrimeSelectColumnConfig {
  fixedColumn: boolean;
  selectable: boolean;
  defaultSelected: boolean;
}

export interface IBasePrimeColumnDef {
  field: string;
  header: string;
  sortable: boolean;
  type: TPrimeColumnType;
  selectType?: TPrimeSelectTypes;
}

export interface IPrimeColumnDef
  extends Omit<IBasePrimeColumnDef, "sortable" | "type">,
    Partial<Pick<IBasePrimeColumnDef, "sortable" | "type">>,
    Partial<IPrimeSelectColumnConfig> {}

export interface IPrimeColumnConfig
  extends IBasePrimeColumnDef,
    IPrimeSelectColumnConfig {}
