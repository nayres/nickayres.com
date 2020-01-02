import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { wrapProviders } from './utilities';
import App from './App';

const Providers = wrapProviders([
  BrowserRouter
]);

const Root = () => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};

export default Root;