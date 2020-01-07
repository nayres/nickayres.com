import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

export default () => {
    return (
        <Wrapper>
            <Link to='/documentation'>Docs</Link>
        </Wrapper>
    )
}