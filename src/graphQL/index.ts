import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const apolloLink = createHttpLink({
  uri: 'https://graphql.anilist.co',
});
const cache = new InMemoryCache({ addTypename: false });

const apolloClient = new ApolloClient({
  link: apolloLink,
  cache,
});

export default apolloClient;
