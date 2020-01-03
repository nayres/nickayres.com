import React from 'react';
import Loadable from 'react-loadable';
import Header from './Header';
import Loading from './PageLoading';
import { useStyle, media, scales, fonts} from '../styles';
import { row, column, padding } from '../styles/common';

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

export default () => {
    const wrapper = useStyle({
        height: '100vh'
    });

    return (
        <div {...wrapper()}>
            <Header />
            <Home />
        </div>
    )
}