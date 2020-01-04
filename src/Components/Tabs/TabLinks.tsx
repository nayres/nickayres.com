import React from 'react';
import { Link } from 'react-router-dom';

/*
 * styles extend from ./Tabs
*/

export default function TabLinks() {
  return (
    <>
      <Link className='tab' to='/'>
        <span>
          About
        </span>
      </Link>
      <Link className='tab' to='/ui'>
        <span>
          UI
        </span>
      </Link>
      <Link className='tab' to='/algorithms'>
        <span>
          Algorithms
        </span>
      </Link>
    </>
  );
}
