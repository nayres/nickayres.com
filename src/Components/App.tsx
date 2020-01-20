import React from 'react';
import Loadable from 'react-loadable';
import Loading from './CommonUI/PageLoading';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import DocsView from './DocsView';

const About = Loadable({
  loader: () => import('./DocsView/About'),
  loading: Loading,
});
const UI = Loadable({
  loader: () => import('./DocsView/UI'),
  loading: Loading,
});
const Algorithms = Loadable({
  loader: () => import('./DocsView/Algorithms'),
  loading: Loading,
});

const Layout = styled('div')`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 896px;
  flex-direction: column;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <Layout>
      <NavBar />
      <DocsView>
        <Switch>
          <Route
              exact
              path='/'
              render={() => <About />}
          />
          <Route
              path='/ui'
              render={() => <UI />}
          />
          <Route
              path='/algorithms'
              render={() => <Algorithms />}
          />
        </Switch>
      </DocsView>
    </Layout>
  );
};

export default App;