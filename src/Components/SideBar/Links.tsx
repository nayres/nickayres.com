import React from 'react';
import { Link } from 'react-router-dom';

/*
 * styles extend from ./Tabs
*/
export interface LinksTypes {
  to: string,
  label: string,
  onClick: () => void
}

export default function TabLinks({ to, onClick, label, ...props }: LinksTypes) {
  return (
    <>
      <Link
        className='tab'
        onClick={onClick}
        to={to}
      >
        <span>
          { label }
        </span>
      </Link>
    </>
  );
}
