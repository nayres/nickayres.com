import React, { ReactNode } from 'react';
import Icon from '@mdi/react';
import { mdiArrowCollapseHorizontal } from '@mdi/js';
import { Wrapper } from './styles';

export interface SideBarTypes {
  children?: ReactNode,
  closeSidebar: () => void,
  sidebarOpen: boolean
}

/* TODO: Map Links from JSON routes */
export default function SideBar({ children, closeSidebar, sidebarOpen }: SideBarTypes) {
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
              onClick={closeSidebar}
            >
              <Icon size={'1.5rem'} color='#616161' path={mdiArrowCollapseHorizontal} />
            </button>
          </div>
        </Wrapper>
      }
    </>
  );
};
