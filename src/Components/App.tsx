import React from 'react';
import Loadable from 'react-loadable';
import Header from './Header';
import Loading from './PageLoading';
import { useStyle, media, scales, fonts} from '../styles';
import { row, column, padding } from '../styles/common';

const Showcase = Loadable({
    loader: () => import('./Tabs'),
    loading: Loading,
});

export default () => {
    const wrapper = useStyle({
        height: '100vh'
    });

    return (
        <div {...wrapper()}>
            <Header />
            <Showcase />
        </div>
    )
}