import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';

import { SideBar } from '../../CommonUI';
import { HeaderWrapper } from './styles';

export interface NavBarTypes {
  children: ReactNode
}

export default function NavBar({ children }: NavBarTypes) {
  const [sidebarVisible, toggleSidebar] = useState(true);

  function handleClick() {
    toggleSidebar(!sidebarVisible);
    return null;
  }

  return (
    <HeaderWrapper>
      <div className='content'>
        <button
          onClick={handleClick}
        >
          <Icon size={'1.75rem'} color='#eeeeee' path={mdiDotsHorizontal} />
        </button>
        <Link className='title' to='/'>Nick Ayres</Link>
      </div>
      { sidebarVisible &&
        <SideBar
          closeSidebar={handleClick}
          sidebarOpen={sidebarVisible}
        >
          {children}
        </SideBar>
      }
    </HeaderWrapper>
  );
}