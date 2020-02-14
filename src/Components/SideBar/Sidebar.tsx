import React, { ReactNode } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

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
        <Menu>
          <div className='tab-menu' tabIndex={-1}>
            <div className='home-button' tabIndex={-1}>
              <a
                href='https://nahomepage.netlify.com/'
                tabIndex={0}
                onClick={closeSidebar}
              >
                Home
              </a>
            </div>
            <Accordian
              visibility={visible}
              toggle={toggle}
              label='Docs'
            >
              <>
                <Links 
                  onClick={closeSidebar}
                  to='/'
                  label='About'
                />
                <Links
                  onClick={closeSidebar}
                  to='/ui'
                  label='UI'
                />
                <Links
                  onClick={closeSidebar}
                  to='/algorithms'
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
            <Icon size={'1.5rem'} path={mdiClose} />
          </div>
          <Overlay
            onFocus={closeSidebar}
            onBlur={closeSidebar}
            tabIndex={0}
          />
        </Menu>
      }
    </>
  );
};
