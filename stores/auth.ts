import {
    SigninDocument,
    RefreshTokensDocument,
    LogoutDocument,
} from "~/api/generated/types";
import type { LoginInput } from "#graphql-operations";
import { jwtDecode } from "jwt-decode";
import type { IDecodedToken, IFormattedToken } from "~/appTypes";

interface IAuthState {
    accessToken: string | null;
}

export const useAuthStore = defineStore("authStore", {
    state: (): IAuthState => ({
        accessToken: null,
    }),
    getters: {
        decodedAccessToken(store) {
            if (!store.accessToken) return null;
            else {
                return jwtDecode(store.accessToken) as IDecodedToken;
            }
        },
        tokenIsExpired(): boolean {
            const decoded = this.decodedAccessToken;
            if (!decoded) return true;
            else return new Date(decoded.exp * 1000) < new Date();
        },
        tokenDetails(): IFormattedToken | null {
            const decoded = this.decodedAccessToken;
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

                const { signin } = await useNuxtApp().$mfnGqlApi.request({
                    document: SigninDocument,
                    variables: { input },
                });

                const { access_token, ...user } = signin;

                this.accessToken = access_token;

                await navigateTo(returnToPath || runtimeConfig.redirect.home);
            } catch (e) {
                console.log("login error : ", JSON.stringify(e, null, 2));
                console.log("login error s: ", e);

                this.accessToken = null;
            }
        },
        async refreshAccess() {
            try {
                const refreshResult = await useNuxtApp().$mfnGqlApi.request({
                    document: RefreshTokensDocument,
                });

                if (refreshResult.refreshSession) {
                    this.accessToken = refreshResult.refreshSession.access_token;
                }
            } catch (e) {
                console.log("refresh error : ", JSON.stringify(e, null, 2));
                console.log("refresh error s: ", e);

                this.accessToken = null;
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
            const logoutResult = await useNuxtApp().$mfnGqlApi.request(
                LogoutDocument
            );
            console.log(`logout res is ${logoutResult}`);

            this.accessToken = null;
            clearNuxtData();
            await navigateTo(runtimeConfig.redirect.logout);
        },
    },
});
