import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import {
  Footer,
  ExternalLink,
  PageLoading
} from './CommonUI';

const Home = Loadable({
  loader: () => import('./HomeView'),
  loading: PageLoading,
});
const Docs = Loadable({
  loader: () => import('./DocsView/Docs'),
  loading: PageLoading,
});

const App = () => {
  return (
    <>
        <NavBar />
          <Route
            exact
            path='/'
            render={() => <Home />}
          />
          <Route
            path='/docs'
            render={() => <Docs />}
          />
        <Footer>
          <ExternalLink href='https://twitter.com/nick_aayres'>
            Twitter
          </ExternalLink>
          <ExternalLink href='https://github.com/nayres'>
            Github
          </ExternalLink>
        </Footer>
    </>
  );
};

export default App;