import React from 'react';
import Loadable from 'react-loadable';
import Header from './Header';
import Loading from './PageLoading';
import { fonts } from '../styles';
import styled from 'styled-components';

const Wrapper = styled('div')`
    height: 100vh;
    position: relative;
    font-family: ${fonts.verdana};
`;

const Showcase = Loadable({
    loader: () => import('./Tabs'),
    loading: Loading,
});

export default () => {
    return (
        <Wrapper>
            <Header />
            <Showcase />
        </Wrapper>
    )
}