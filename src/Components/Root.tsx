import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './HomeView';
import Docs from './DocsView/Docs';
import {
  NavBar,
  Links,
  Footer,
  ExternalLink
} from './CommonUI';

const AppInner = styled('div')`

`;

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <>
            <Links 
              to='/'
              label='About'
             />
            <Links 
              to='/ui'
              label='UI'
             />
            <Links 
              to='/algorithms'
              label='Algorithms / DS'
             />
          </>
        </NavBar>
          <AppInner>
            <Route
                exact
                path='/'
                render={() => <Home /> }
            />
            <Route
                path='/documentation'
                render={() => <Docs /> }
            />
          </AppInner>
        <Footer>
          <ExternalLink href='https://twitter.com/nick_aayres'>
            Twitter
          </ExternalLink>
          <ExternalLink href='https://github.com/nayres'>
            Github
          </ExternalLink>
        </Footer>
      </BrowserRouter>
    </>
  );
};

export default Root;