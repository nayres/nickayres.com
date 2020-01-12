import React, { useState, ReactNode } from 'react';
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
          type='button'
          className='nav-button'
          onClick={handleSidebarClick}
          aria-label="sidebar close button"
        >
          <Icon size={'1.75rem'} color='#eeeeee' path={mdiDotsHorizontal} />
        </button>
        <a className='title' href='https://nahomepage.netlify.com/'>Nick Ayres</a>
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