import React from 'react';
import Loadable from 'react-loadable';
import Loading from './CommonUI/PageLoading';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
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

const App = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default App;