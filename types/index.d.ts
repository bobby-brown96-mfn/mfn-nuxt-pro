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

export type TColumnType = "string" | "number" | "currency" | "boolean" | "date";

export interface IBaseColumnDef {
  label: string;
  key: string;
  sortable: boolean;
}

export interface IColumnDef
  extends Omit<IBaseColumnDef, "sortable">,
    Partial<Pick<IBaseColumnDef, "sortable">> {
  type: TColumnType;
}

export interface IUTableColumn extends IBaseColumnDef {
  class?: string;
}
