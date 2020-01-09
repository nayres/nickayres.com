import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';

import { SideBar } from '../SideBar';
import { HeaderWrapper } from './styles';

export interface NavBarTypes {
  children?: ReactNode,
  homeButton?: ReactNode
}

export default function NavBar({ children, homeButton }: NavBarTypes) {
  const [sidebarVisible, toggleSidebar] = useState(false);
  const [categoryOpen, toggleCategory] = useState(false);

  function handleSidebarClick() {
    toggleSidebar(!sidebarVisible);
    return null;
  }

  function handleAccordianClick() {
    toggleCategory(!categoryOpen);
    return null;
  }

  return (
    <HeaderWrapper>
      <div className='content'>
        <button
          className='nav-button'
          onClick={handleSidebarClick}
        >
          <Icon size={'1.75rem'} color='#eeeeee' path={mdiDotsHorizontal} />
        </button>
        <Link className='title' to='/'>Nick Ayres</Link>
      </div>
      { sidebarVisible &&
        <SideBar
          closeSidebar={handleSidebarClick}
          sidebarOpen={sidebarVisible}
          visible={categoryOpen}
          toggle={handleAccordianClick}
        />
      }
    </HeaderWrapper>
  );
}