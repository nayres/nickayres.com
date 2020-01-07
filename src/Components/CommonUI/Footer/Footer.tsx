import React from 'react';
import Links from './Links';
import { FooterWrapper } from './styles';

export default function Header() {
  return (
    <FooterWrapper>
      <div className='content'>
        <Links />
      </div>
    </FooterWrapper>
  );
}