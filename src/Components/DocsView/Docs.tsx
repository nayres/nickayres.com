import React, { ReactNode } from 'react';
import { DocsWrapper } from './styles';

export interface DocsTypes {
  children: ReactNode
}

export default ({ children }: DocsTypes) => {
    return (
        <DocsWrapper>
            <div className='showcase'>
                { children }
            </div>
        </DocsWrapper>
    )
}