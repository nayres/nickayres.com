import React, { ReactNode } from 'react';
import Icon from '@mdi/react';
import { mdiArrowCollapseHorizontal } from '@mdi/js';

import { Accordian } from '../index';
import { Menu, Overlay } from './styles';

export interface SideBarTypes {
  children?: ReactNode,
  homeButton?: ReactNode,
  closeSidebar: () => void,
  sidebarOpen: boolean,
  visible: boolean,
  toggle: () => void
}

/* TODO: Map Links from JSON routes */
export default function SideBar({
  children,
  homeButton,
  closeSidebar,
  sidebarOpen,
  visible,
  toggle
}: SideBarTypes) {

  return (
    <>
      { sidebarOpen &&
        <>
          <Menu>
            <div className='tab-menu'>
              { homeButton }
              <Accordian
                visibility={visible}
                toggle={toggle}
                label='Docs'
              >
                { children }
              </Accordian>
            </div>
            <div
              className='toggle-menu'
              onClick={closeSidebar}
              tabIndex={0}
            >
              <Icon size={'1.5rem'} color='#616161' path={mdiArrowCollapseHorizontal} />
            </div>
            <Overlay
              onFocus={closeSidebar}
              onBlur={closeSidebar}
              tabIndex={0}
            />
          </Menu>
        </>
      }
    </>
  );
};
