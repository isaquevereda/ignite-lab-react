import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qg1ib23u8401z472828npo/master',
    cache: new InMemoryCache()
})