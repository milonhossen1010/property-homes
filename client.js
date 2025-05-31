import { ApolloClient, InMemoryCache } from "@apollo/client";
import 'dotenv/config'

 
 
const client = new ApolloClient({
  uri: 'http://wp.local/graphql',
  cache: new InMemoryCache(),
});

export default client;