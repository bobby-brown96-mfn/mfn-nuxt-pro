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
