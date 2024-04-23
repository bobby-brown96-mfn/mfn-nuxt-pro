import { defineGraphqlServerOptions } from "nuxt-graphql-middleware/dist/runtime/serverOptions";
import type { H3Event } from "h3";
import type { FetchError } from "ofetch";
import { jwtDecode } from "jwt-decode";

export default defineGraphqlServerOptions({
  graphqlEndpoint(event, operation, operationName) {
    if (operationName === "simulateEndpointDown") {
      return "http://invalid/graphql";
    }
  },

  serverFetchOptions: async (event, operation, operationName) => {
    console.log(`serverFetchOptions operation = ${operation}`);
    console.log(`serverFetchOptions operationName = ${operationName}`);
    const headers: HeadersInit = {};
    if (event) {
      const cookieHeader = getHeader(event, "cookie");
      console.log(`cookie header is ${cookieHeader}`);
      if (cookieHeader) headers["Cookie"] = cookieHeader;

      const authHeader = getHeader(event, "Authorization");
      console.log(`authHeader header is ${authHeader}`);
      if (authHeader) headers["Authorization"] = authHeader;

      const decodedHeader = jwtDecode(headers["Authorization"]);
      console.log(
        `decodedHeader header is ${JSON.stringify(decodedHeader, null, 2)}`
      );
    }

    return { headers };
  },

  onServerResponse(event, graphqlResponse) {
    // Pass the set-cookie header from the GraphQL server to the client.
    const setCookie = graphqlResponse.headers.get("set-cookie");

    if (setCookie) {
      console.log(
        `set cookie in response ${JSON.stringify(setCookie, null, 2)}`
      );
      event.node.res.setHeader("set-cookie", setCookie);
    } else {
      console.log("non set cookie");
    }

    // Return the GraphQL response.
    return graphqlResponse._data;
  },
});
