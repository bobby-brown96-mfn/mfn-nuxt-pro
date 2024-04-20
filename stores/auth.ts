import type {
  AppBookFragment,
  AppConnectedUserFragment,
  AppUserFragment,
  LoginInput,
  Role,
} from "#graphql-operations";
import { jwtDecode } from "jwt-decode";
import type { IDecodedToken } from "~/appTypes";

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  activeBookId: string | null;
  activeUserId: string | null;
  activeUserRole: Role | null;
  activeUser: AppUserFragment | null;
  activeBook: AppBookFragment | null;
}

export const useAuthStore = defineStore("authStore", {
  state: (): IAuthState => ({
    accessToken: null,
    refreshToken: null,
    activeBookId: null,
    activeUserId: null,
    activeUserRole: null,
    activeUser: null,
    activeBook: null,
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
    userFullName(store): string {
      if (!store.activeUser) return "_NONE_";
      else {
        return `${store.activeUser.firstName} ${store.activeUser.lastName}`;
      }
    },
    userBookOptions(store): AppConnectedUserFragment[] {
      if (store.activeUser) {
        return store.activeUser.connectedBookUsers ?? [];
      } else return [];
    },
    // tokenDetails(store): IFormattedToken | null {
    //   if (!store.accessToken) return null;
    //   const decoded = jwtDecode(store.accessToken) as IDecodedToken;
    //   if (!decoded) return null;
    //   else {
    //     const { exp, sub, email, role, tokenId } = decoded;

    //     const isExpired = new Date(exp * 1000) < new Date();
    //     return {
    //       email,
    //       role,
    //       isExpired,
    //       tokenId,
    //       userId: sub,
    //       expiresAt: new Date(exp * 1000).toLocaleTimeString(),
    //     };
    //   }
    // },
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

        const { access, refresh } = decodeTokens({
          access_token,
          refresh_token,
        });

        if (access) {
          this.activeUserId = access.userId;
          this.activeUserRole = access.role;
        }

        if (refresh) {
          this.activeBookId = refresh.activeBookId;
        }

        await navigateTo(returnToPath || runtimeConfig.redirect.home);
      } catch (e) {
        console.log("login error : ", JSON.stringify(e, null, 2));
        console.log("login error s: ", e);

        // this.accessToken = null;
        // this.refreshToken = null;
        // this.activeUserId=null
        // this.activeBookId=null
        this.$reset();
      }
    },
    async refreshAccess() {
      try {
        const refreshTokenResult = await useGraphqlMutation("refreshTokens");

        // const refreshResult = await useNuxtApp().$mfnGqlApi.request({
        //     document: RefreshTokensDocument,
        // });

        if (refreshTokenResult.data.refreshSession) {
          const { access_token, refresh_token, activeUser, activeBook } =
            refreshTokenResult.data.refreshSession;
          this.accessToken = access_token;
          this.refreshToken = refresh_token;
          this.activeUser = activeUser;
          this.activeBook = activeBook ?? null;

          const { access, refresh } = decodeTokens({
            access_token,
            refresh_token,
          });

          if (access) {
            this.activeUserId = access.userId;
            this.activeUserRole = access.role;
          }

          if (refresh) {
            this.activeBookId = refresh.activeBookId;
          }
        }
      } catch (e) {
        console.log("refresh error : ", JSON.stringify(e, null, 2));
        console.log("refresh error s: ", e);

        // this.accessToken = null;
        // this.refreshToken = null;
        this.$reset();
      }
    },
    async setActiveBook(bookId: string) {
      try {
        const runtimeConfig = useRuntimeConfig().public;
        const { data, errors } = await useGraphqlMutation("setCurrentBook", {
          bookId,
        });

        if (data.setActiveBook) {
          const { access_token, refresh_token, activeUser, activeBook } =
            data.setActiveBook;
          this.accessToken = access_token;
          this.refreshToken = refresh_token;

          this.activeUser = activeUser;
          this.activeBook = activeBook ?? null;

          const { access, refresh } = decodeTokens({
            access_token,
            refresh_token,
          });

          if (access) {
            this.activeUserId = access.userId;
            this.activeUserRole = access.role;
          }

          if (refresh) {
            this.activeBookId = refresh.activeBookId;
          }

          await navigateTo(runtimeConfig.redirect.app);
        } else throw errors;
      } catch (e) {
        console.log("setActiveBook error : ", JSON.stringify(e, null, 2));
        console.log("setActiveBook error s: ", e);

        return e;
      }
    },
    async clearActiveBook() {
      try {
        const runtimeConfig = useRuntimeConfig().public;
        const { data, errors } = await useGraphqlMutation("clearCurrentBook");

        if (data.clearActiveBook) {
          const { access_token, refresh_token, activeUser, activeBook } =
            data.clearActiveBook;
          this.accessToken = access_token;
          this.refreshToken = refresh_token;

          this.activeUser = activeUser;
          this.activeBook = activeBook ?? null;

          const { access, refresh } = decodeTokens({
            access_token,
            refresh_token,
          });

          if (access) {
            this.activeUserId = access.userId;
            this.activeUserRole = access.role;
          }

          if (refresh) {
            this.activeBookId = refresh.activeBookId;
          }
          await navigateTo(runtimeConfig.redirect.home);
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
        //   this.accessToken = null;
        this.$reset();
        return null;
      }
    },
    async logout() {
      const runtimeConfig = useRuntimeConfig().public;
      const logoutResult = await useGraphqlMutation("logout");
      console.log(`logout res is ${logoutResult}`);

      // this.accessToken = null;
      // this.refreshToken = null;
      this.$reset();
      clearNuxtData();
      await navigateTo(runtimeConfig.redirect.login);
    },
  },
});
