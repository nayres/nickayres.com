import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import { PageLoading } from './CommonUI';

const Docs = Loadable({
  loader: () => import('./DocsView/Docs'),
  loading: PageLoading,
});

const App = () => {
  return (
    <>
        <NavBar />
          <Route
            path='/docs'
            render={() => <Docs />}
          />
        <Footer />
    </>
  );
};

export default App;