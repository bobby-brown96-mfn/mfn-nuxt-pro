import type { LoginInput } from "#graphql-operations";
import { jwtDecode } from "jwt-decode";
import type { IDecodedToken, IFormattedToken } from "~/appTypes";

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  activeBookId: string | null;
  activeUserId: string | null;
}

export const useAuthStore = defineStore("authStore", {
  state: (): IAuthState => ({
    accessToken: null,
    refreshToken: null,
    activeBookId: null,
    activeUserId: null,
  }),
  getters: {
    decodedAccessToken(store) {
      if (!store.accessToken) return null;
      else {
        return jwtDecode(store.accessToken) as IDecodedToken;
      }
    },
    decodedRefreshToken(store) {
      if (!store.refreshToken) return null;
      else {
        return jwtDecode(store.refreshToken);
      }
    },
    tokenIsExpired(): boolean {
      const decoded = this.decodedAccessToken;
      if (!decoded) return true;
      else return new Date(decoded.exp * 1000) < new Date();
    },
    tokenDetails(store): IFormattedToken | null {
      if (!store.accessToken) return null;
      const decoded = jwtDecode(store.accessToken) as IDecodedToken;
      if (!decoded) return null;
      else {
        const { exp, sub, email, role } = decoded;

        const isExpired = new Date(exp * 1000) < new Date();
        return {
          email,
          role,
          isExpired,
          userId: sub,
          expiresAt: new Date(exp * 1000).toLocaleTimeString(),
        };
      }
    },
  },
  actions: {
    async login(input: LoginInput) {
      const runtimeConfig = useRuntimeConfig().public;
      try {
        const route = useRoute();
        // The protected page the user has visited before redirect to login page
        const returnToPath = route.query.redirect?.toString();

        const { data, errors } = await useGraphqlMutation("signin", {
          input,
        });

        const { signin } = data;

        const { access_token, refresh_token } = signin;

        this.accessToken = access_token;
        this.refreshToken = refresh_token;

        await navigateTo(returnToPath || runtimeConfig.redirect.home);
      } catch (e) {
        console.log("login error : ", JSON.stringify(e, null, 2));
        console.log("login error s: ", e);

        this.accessToken = null;
        this.refreshToken = null;
      }
    },
    async refreshAccess() {
      try {
        const refreshTokenResult = await useGraphqlMutation("refreshTokens");

        // const refreshResult = await useNuxtApp().$mfnGqlApi.request({
        //     document: RefreshTokensDocument,
        // });

        if (refreshTokenResult.data.refreshSession) {
          const { access_token, refresh_token } =
            refreshTokenResult.data.refreshSession;
          this.accessToken = access_token;
          this.refreshToken = refresh_token;
        }
      } catch (e) {
        console.log("refresh error : ", JSON.stringify(e, null, 2));
        console.log("refresh error s: ", e);

        this.accessToken = null;
        this.refreshToken = null;
      }
    },
    async setActiveBook(bookId: string) {
      try {
        const { data, errors } = await useGraphqlMutation("setCurrentBook", {
          bookId,
        });

        if (data.setActiveBook) {
          this.accessToken = data.setActiveBook.access_token;
          this.refreshToken = data.setActiveBook.refresh_token;
        } else throw errors;
      } catch (e) {
        console.log("setActiveBook error : ", JSON.stringify(e, null, 2));
        console.log("setActiveBook error s: ", e);

        return e;
      }
    },
    async clearActiveBook() {
      try {
        const { data, errors } = await useGraphqlMutation("clearCurrentBook");

        if (data.clearActiveBook) {
          this.accessToken = data.clearActiveBook.access_token;
          this.refreshToken = data.clearActiveBook.refresh_token;
        } else throw errors;
      } catch (e) {
        console.log("clearActiveBook error : ", JSON.stringify(e, null, 2));
        console.log("clearActiveBook error s: ", e);

        return e;
      }
    },
    async getAccessToken() {
      try {
        if (this.tokenIsExpired) {
          await this.refreshAccess();
          return this.accessToken;
        } else {
          return this.accessToken;
        }
      } catch (e) {
        console.log("getAccessToken error : ", JSON.stringify(e, null, 2));
        console.log("getAccessToken error s: ", e);
        this.accessToken = null;
        return null;
      }
    },
    async logout() {
      const runtimeConfig = useRuntimeConfig().public;
      const logoutResult = await useGraphqlMutation("logout");
      console.log(`logout res is ${logoutResult}`);

      this.accessToken = null;
      this.refreshToken = null;
      clearNuxtData();
      await navigateTo(runtimeConfig.redirect.logout);
    },
  },
});
