import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

export default () => (
    <Switch>
        <Route
            exact
            path='/'
            render={() => <Home /> }
        />
    </Switch>
)