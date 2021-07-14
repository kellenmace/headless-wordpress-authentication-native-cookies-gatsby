import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.GATSBY_WORDPRESS_API_URL,
  credentials: 'include',
  fetch,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
