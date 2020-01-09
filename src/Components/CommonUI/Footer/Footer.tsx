import React, { ReactNode } from 'react';
import { FooterWrapper } from './styles';

export interface FooterTypes {
  children: ReactNode
}

export default function Footer({ children }: FooterTypes) {
  return (
    <FooterWrapper>
      <div className='content'>
        {children}
      </div>
    </FooterWrapper>
  );
}