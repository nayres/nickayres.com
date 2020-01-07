import React, { AnchorHTMLAttributes } from 'react';
import { FooterLinks } from './styles';

function ExternalLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
}

export default function Links() {
  return (
    <FooterLinks>
      <ExternalLink href='https://twitter.com/nick_aayres'>
        Twitter
      </ExternalLink>
      <ExternalLink href='https://github.com/nayres'>
        Github
      </ExternalLink>
    </FooterLinks>
  );
}
