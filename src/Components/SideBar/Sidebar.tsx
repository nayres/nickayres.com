import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowCollapseHorizontal } from '@mdi/js';

import { Accordian } from '../CommonUI';
import { Links } from '../SideBar';
import { Menu, Overlay } from './styles';

export interface SideBarTypes {
  homeButton?: ReactNode,
  closeSidebar: () => void,
  sidebarOpen: boolean,
  visible: boolean,
  toggle: () => void
}

/* TODO: Map Links from JSON routes */
export default function SideBar({
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
            <div className='tab-menu' tabIndex={-1}>
              <div className='home-button' tabIndex={-1}>
                <Link
                 to='/'
                 tabIndex={0}
                 onClick={closeSidebar}
                >
                  Home
                </Link>
              </div>
              <Accordian
                visibility={visible}
                toggle={toggle}
                label='Docs'
              >
                <>
                  <Links 
                    onClick={closeSidebar}
                    to='/docs'
                    label='About'
                  />
                  <Links
                    onClick={closeSidebar}
                    to='/docs/ui'
                    label='UI'
                  />
                  <Links
                    onClick={closeSidebar}
                    to='/docs/algorithms'
                    label='Algorithms / DS'
                  />
                </>
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
