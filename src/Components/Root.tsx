import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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

const Root = () => {
  return (
    <div>
      <Router>
        <NavBar />
          <Route
              exact
              path='/'
              component={Home}
          />
          <Route
              path='/docs'
              component={Docs}
          />
        <Footer>
          <ExternalLink href='https://twitter.com/nick_aayres'>
            Twitter
          </ExternalLink>
          <ExternalLink href='https://github.com/nayres'>
            Github
          </ExternalLink>
        </Footer>
      </Router>
    </div>
  );
};

export default Root;