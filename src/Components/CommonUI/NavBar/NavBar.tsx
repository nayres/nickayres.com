import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';

import { SideBar, Links } from '../../CommonUI';
import { name } from '../../Markup';
import { HeaderWrapper } from './styles';

export default function Header() {
  const [sidebarVisible, toggleSidebar] = useState(true);

  return (
    <HeaderWrapper>
      <div className='content'>
        <button
          onClick={() => toggleSidebar(!sidebarVisible)}
        >
          <Icon size={'1.75rem'} color='#eeeeee' path={mdiDotsHorizontal} />
        </button>
        <Link className='title' to='/'>{name}</Link>
      </div>
      { sidebarVisible &&
        <SideBar>
          <>
            <Links 
              to='/'
              label='About'
             />
            <Links 
              to='/ui'
              label='UI'
             />
            <Links 
              to='/algorithms'
              label='Algorithms / DS'
             />
          </>
        </SideBar>
      }
    </HeaderWrapper>
  );
}