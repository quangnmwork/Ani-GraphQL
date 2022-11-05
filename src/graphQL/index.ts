import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const apolloLink = createHttpLink({
  uri: 'https://graphql.anilist.co',
});
const cache = new InMemoryCache({ addTypename: true });

const apolloClient = new ApolloClient({
  link: apolloLink,
  cache,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default apolloClient;
