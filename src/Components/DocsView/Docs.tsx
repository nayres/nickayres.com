import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../CommonUI/PageLoading';
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
        <Switch>
            <Route
                exact
                path='/docs/'
                component={About}
            />
            <Route
                path='/docs/ui'
                component={UI}
            />
            <Route
                path='/docs/algorithms'
                component={Algorithms}
            />
        </Switch>
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