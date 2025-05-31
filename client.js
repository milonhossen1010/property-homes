import { ApolloClient, InMemoryCache } from "@apollo/client";

 
const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URI || 'http://wp.local/graphql',
  cache: new InMemoryCache(),
});

export default client;