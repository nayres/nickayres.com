import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {
  NavBar,
  Links,
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
        <NavBar
          homeButton={
            <Link
              className='home-button'
              to='/'
            >
              Home
            </Link>
          }
        >
          <>
            <Links 
              to='/docs'
              label='About'
            />
            <Links 
              to='/docs/ui'
              label='UI'
            />
            <Links 
              to='/docs/algorithms'
              label='Algorithms / DS'
            />
          </>
        </NavBar>
        <div>
          <Switch>
            <Route
                exact
                path='/'
                component={Home}
            />
            <Route
                path='/docs'
                component={Docs}
            />
          </Switch>
        </div>
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