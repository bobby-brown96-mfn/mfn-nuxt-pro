import { defu } from "defu";

export default defineNuxtPlugin((nuxtApp) => {
  const state = useGraphqlState();

  if (!state) {
    console.log("no graphql state");
    return;
  } else {
    state.fetchOptions = {
      onRequest({ request, options }: any) {
        const authStore = useAuthStore();
        const at = authStore.accessToken;

        if (at) {
          options.headers = defu(
            {
              Authorization: "Bearer " + at,
            },
            options.headers
          );
        }
      },
    };
  }
});
