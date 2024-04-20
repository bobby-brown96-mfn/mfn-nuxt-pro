import type { IFormattedRefreshToken } from "~/appTypes";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();

  const redirect = nuxtApp.$config.public.redirect;

  console.log(
    `auth middleware client is ${import.meta.client} to: ${to.path} with redirect config ${JSON.stringify(redirect, null, 2)}`
  );
  console.log(
    `path ${to.path} with meta auth ${to.meta.auth} & book auth ${to.meta.bookauth} and meta server ${import.meta.server}`
  );

  if (to.path === redirect.callback) {
    return;
  }

  if (import.meta.client) {
    const authStore = useAuthStore();
    await authStore.refreshAccess();
  } else {
    const authStore = useAuthStore();
    const coo = useCookie("rf");
    if (coo.value) {
      const rt = refreshDecode(coo.value) as IFormattedRefreshToken | null;
      console.log(`rt cookie is ${JSON.stringify(rt, null, 2)}`);
      if (rt) {
        authStore.refreshToken = coo.value;
        authStore.activeUserId = rt.userId;
        authStore.activeBookId = rt.activeBookId;
        authStore.activeUserRole = rt.role;
      }
    }
  }

  const authStore = useAuthStore();
  console.log(
    `post tree auth store ${JSON.stringify(authStore.$state, null, 2)}`
  );

  if (to.meta.auth === false) {
    return;
  }

  if (to.path === redirect.login || to.path === redirect.register) {
    if (authStore.activeUserId) {
      return abortNavigation();
    } else return;
  }
});
