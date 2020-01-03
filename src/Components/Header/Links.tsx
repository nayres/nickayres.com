import React, { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useStyle, media, scales } from '../../styles';
import { row, margin } from '../../styles/common';

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
  const css = useStyle({
    ...row('flex-start', 'center'),
    paddingTop: scales.spacing[4],
  });

  const link = useStyle({
    color: 'black',
    textDecoration: 'none',
    ...margin(0, scales.spacing[3]),
    fontSize: scales.font[4],
    transition: '.3s ease-in',
  
    ':hover': {
      color: 'grey'
    },
  });

  return (
    <div {...css()}>
      <ExternalLink {...link()} href='https://twitter.com/nick_aayres'>
        Twitter
      </ExternalLink>
      <ExternalLink {...link()} href='https://github.com/nayres'>
        Github
      </ExternalLink>
    </div>
  );
}
