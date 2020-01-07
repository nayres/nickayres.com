import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import { NavBar, Footer } from './CommonUI';
import Home from './HomeView';
import Docs from './DocsView/Docs';

const AppInner = styled('div')`

`;

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Root;