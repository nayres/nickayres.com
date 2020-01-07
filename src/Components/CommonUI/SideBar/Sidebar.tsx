import React, { useState, ReactNode } from 'react';
import Icon from '@mdi/react';
import { mdiArrowCollapseHorizontal } from '@mdi/js';
import { Wrapper } from './styles';

export interface SideBarTypes {
  children?: ReactNode,
}

/* TODO: Map Links from JSON routes */
export default function SideBar({ children }: SideBarTypes) {
  const [sidebarOpen, closeSidebar] = useState(true);

  return (
    <>
      { sidebarOpen &&
        <Wrapper>
          <div className='tab-menu'>
            {children}
          </div>
          <div className='toggle-menu'>
            <button
              id="tab-button"
              onClick={() => closeSidebar(!sidebarOpen)}
            >
              <Icon size={'1.5rem'} color='#616161' path={mdiArrowCollapseHorizontal} />
            </button>
          </div>
        </Wrapper>
      }
    </>
  );
};
