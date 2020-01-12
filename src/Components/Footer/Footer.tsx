import React from 'react';
import { ExternalLink } from '../CommonUI';
import { FooterWrapper } from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='content'>
        <ExternalLink href='https://twitter.com/nick_aayres'>
          Twitter
        </ExternalLink>
        <ExternalLink href='https://github.com/nayres'>
          Github
        </ExternalLink>
      </div>
    </FooterWrapper>
  );
}