import { defineGraphqlServerOptions } from 'nuxt-graphql-middleware/dist/runtime/serverOptions'
import type { H3Event } from 'h3'
import type { FetchError } from 'ofetch'

export default defineGraphqlServerOptions({
    graphqlEndpoint(event, operation, operationName) {
        if (operationName === "simulateEndpointDown") {
            return "http://invalid/graphql";
        }
    },
})