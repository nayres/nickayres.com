import React from 'react';
import withApollo from '../services/withApollo';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import App from './App';
import GATracker from './GATracker';

const WrappedProviders = Providers([
  BrowserRouter
]);

const Root = () => {
  return (
    <WrappedProviders>
      <GATracker />
      <App />
    </WrappedProviders>
  );
};

export default withApollo(Root);