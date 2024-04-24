// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || "@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "nuxt-graphql-middleware",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxt/test-utils/module",
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton"].includes(c.pascalName)
      );

      globals.forEach((c) => (c.global = true));
    },
  },
  graphqlMiddleware: {
    graphqlEndpoint: "http://localhost:3005/graphql",
    downloadSchema: false,
    schemaPath: "./schema.gql",
    autoImportPatterns: ["api/**/*.{gql,graphql}"],
  },
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  primevue: {
    options: {
      unstyled: true,
    },
    components: {
      prefix: "Prime",
      include: [
        "DataTable",
        "Calendar",
        "Button",
        "Column",
        "ColumnGroup",
        "Row",
        "Paginator",
        "TriStateCheckbox",
        "TreeTable",
        "InputNumber",
      ],
    },
    composables: {
      exclude: ["useToast"],
    },
    importPT: { from: path.resolve(__dirname, "./presets/lara/") },
  },
  routeRules: {
    "/api/search.json": { prerender: true },
    "/docs": { redirect: "/docs/getting-started", prerender: false },
    "/app/**": { ssr: false },
    "/home/**": { ssr: false },
  },
  devtools: {
    enabled: true,
  },
  future: {
    typescriptBundlerResolution: false,
  },
  spaLoadingTemplate: true,
  runtimeConfig: {
    public: {
      mfnGqlApi: {
        endpoint: "http://localhost:3005/graphql",
        refreshCookieName: "rf",
      },
      redirect: {
        login: "/login",
        register: "/signup",
        logout: "/access/logout",
        callback: "/access/auth/callback",
        passwordReset: "/access/auth/passwordReset",
        emailVerify: "/access/auth/emailVerify",
        home: "/home",
        app: "/app",
      },
    },
  },
});
