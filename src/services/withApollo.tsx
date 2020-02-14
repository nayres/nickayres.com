import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import initApollo from './apolloClient';

const isProd = process.env.NODE_ENV === 'production';

interface AppPropsI {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

interface ApolloPropsI {
  apolloState: NormalizedCacheObject;
}

const withApollo: Function = (App: React.FunctionComponent<AppPropsI>) => {
  const Apollo: React.FunctionComponent<ApolloPropsI> = ({ apolloState }: ApolloPropsI) => {
    const apolloClient = initApollo(apolloState);
    return (
      <ApolloProvider client={apolloClient}>
        <App apolloClient={apolloClient} />
      </ApolloProvider>
    );
  };

  if (!isProd) {
    const displayName = Apollo.displayName || Apollo.name || 'Component';

    if (displayName === 'App') {
      // eslint-disable-next-line no-console
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    Apollo.displayName = `withApollo(${displayName})`;
  }

  return Apollo;
};

export default withApollo;