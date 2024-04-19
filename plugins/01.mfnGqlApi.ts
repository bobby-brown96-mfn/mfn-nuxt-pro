import { GraphQLClient } from "graphql-request";

export default defineNuxtPlugin(async (nuxtApp) => {
    console.log(`start mfngql plugin`);

    const runtimeGqlOptions = nuxtApp.$config.public.mfnGqlApi;

    const rfCookie = useCookie("rf");

    console.log(`rfCookie is ${rfCookie.value}`);

    const mainClient = new GraphQLClient(runtimeGqlOptions.endpoint, {
        credentials: "include",
    });

    return {
        provide: {
            mfnGqlApi: mainClient,
        },
    };
});
