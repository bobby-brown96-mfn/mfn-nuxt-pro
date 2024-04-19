import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.gql",
  documents: ["api/queries/*.graphql"],
  generates: {
    "api/generated/types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        exportFragmentSpreadSubTypes: true,
        // preResolveTypes: true,
        skipTypeNameForRoot: true,
        skipTypename: true,
        useTypeImports: true,
        dedupeFragments: true,
        // onlyOperationTypes: true,
      },
    },
    // "api/client/": {
    //   preset: "client",
    //   config: {
    //     exportFragmentSpreadSubTypes: true,
    //     // preResolveTypes: true,
    //     skipTypeNameForRoot: true,
    //     skipTypename: true,
    //     useTypeImports: true,
    //     dedupeFragments: true,
    //   },
    // },
  },
};

export default config;
