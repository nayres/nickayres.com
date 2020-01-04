import React from 'react';
import { name } from '../Markup';
import Links from './Links';
import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <div className='content'>
        <div className='title'>{name}</div>
        <Links />
      </div>
    </HeaderWrapper>
  );
}