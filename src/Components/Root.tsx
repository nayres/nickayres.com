import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import { DeviceProvider } from './UseDeviceInfo';
import App from './App';
import GATracker from './GATracker';

const WrappedProviders = Providers([
  BrowserRouter,
  DeviceProvider
]);

const Root = () => {
  return (
    <WrappedProviders>
      <GATracker />
      <App />
    </WrappedProviders>
  );
};

export default Root;