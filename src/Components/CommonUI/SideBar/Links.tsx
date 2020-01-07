import React from 'react';
import { Link } from 'react-router-dom';

/*
 * styles extend from ./Tabs
*/
export interface LinksTypes {
  to: string,
  label: string
}

export default function TabLinks({ to, label }: LinksTypes) {
  return (
    <>
      <Link className='tab' to={to}>
        <span>
          { label }
        </span>
      </Link>
    </>
  );
}
