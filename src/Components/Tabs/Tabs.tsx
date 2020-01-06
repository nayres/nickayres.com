import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowExpandHorizontal } from '@mdi/js';
import { mdiArrowCollapseHorizontal } from '@mdi/js';
import Loadable from 'react-loadable';
import { Wrapper } from './styles';

import Loading from './TabLoading';
import TabLinks from './TabLinks';

const About = Loadable({
  loader: () => import('../About'),
  loading: Loading,
});
const UI = Loadable({
  loader: () => import('../UI'),
  loading: Loading,
});
const Algorithms = Loadable({
  loader: () => import('../Algorithms'),
  loading: Loading,
});

function TabBody({ ...props }) {
  return (
    <div {...props}>
      <Switch>
        <Route
            exact
            path='/'
            render={() => <About /> }
        />
        <Route
            exact
            path='/ui'
            render={() => <UI /> }
        />
        <Route
            exact
            path='/algorithms'
            render={() => <Algorithms /> }
        />
      </Switch>
    </div>
  );
}

export default function Tabs() {
  const [sideBarOpen, toggleSidebar] = useState(true);

  return (
    <Wrapper>
      { sideBarOpen &&
        <div className='tab-menu'>
          <TabLinks />
        </div>
      }
        <div className='toggle-menu'>
          <button
            id="tab-button"
            onClick={() => toggleSidebar(!sideBarOpen)}
          >
            { sideBarOpen ?
              <Icon size={'1.5rem'} color='#616161' path={mdiArrowCollapseHorizontal} />
              :
              <Icon size={'1.5rem'} color='#616161' path={mdiArrowExpandHorizontal} />
            }
          </button>
        </div>
      <TabBody className='tab-body' />
    </Wrapper>
  );
};
