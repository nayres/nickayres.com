import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../PageLoading';
import { DocsWrapper } from './styles';

const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});
const UI = Loadable({
  loader: () => import('./UI'),
  loading: Loading,
});
const Algorithms = Loadable({
  loader: () => import('./Algorithms'),
  loading: Loading,
});

function TabBody() {
  return (
    <div>
        <Route
            exact
            path='/documentation/'
            render={() => <About /> }
        />
        <Route
            path='/documentation/ui'
            render={() => <UI /> }
        />
        <Route
            path='/documentation/algorithms'
            render={() => <Algorithms /> }
        />
    </div>
  );
}

/* TODO: ROUTE.JSON */
export default () => {
    return (
        <DocsWrapper>
            <div className='showcase'>
                <TabBody />
            </div>
        </DocsWrapper>
    )
}