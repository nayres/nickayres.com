import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink, HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
let IS_SERVER = typeof window === 'undefined';

const create = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  const httpLinkConfig: HttpLink.Options = {
    uri: 'http://localhost:8000/graphql',
  };

  if (IS_SERVER) {
    httpLinkConfig.fetch = fetch;
  }

  return new ApolloClient({
    connectToDevTools: !IS_SERVER,
    ssrMode: IS_SERVER,
    link: createHttpLink(httpLinkConfig),
    cache: new InMemoryCache().restore(initialState),
  });
};

export default (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  if (!IS_SERVER) {
    return create(initialState);
  }
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};