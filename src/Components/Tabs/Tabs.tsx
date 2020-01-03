import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { useStyle, media, scales, fonts} from '../../styles';
import { row, column, padding } from '../../styles/common';
import Loading from './TabLoading';

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

  const wrapper = useStyle({
    ...row('flex-start'),
    width: '100%'
  });

  const tabMenu = useStyle({
    height: '100vh',
    width: '20rem',
    textAlign: 'center',
    ...column('center', 'flex-start'),
    borderRight: '1px solid black',
    fontFamily: fonts.verdana,
  });

  const tab = useStyle({
    textDecoration: 'none',
    padding: '1.75rem 0',
    width: 'inherit',
    borderBottom: '1px solid black',
    transition: '.2s ease-in',
    ':hover': {
      background: 'lightgrey'
    },
    ':focus': {
      background: 'lightgrey'
    }
  });

  const link = useStyle({
    color: 'black',
    fontSize: scales.font[5],
  })

  const tabBody = useStyle({
    width: '100vw',
  });

  return (
    <div {...wrapper()}>
      { sideBarOpen &&
        <div {...tabMenu()}>
          <Link {...tab()} to='/'>
            <span {...link()}>
              About
            </span>
          </Link>
          <Link {...tab()} to='/ui'>
            <span {...link()}>
              UI
            </span>
          </Link>
          <Link {...tab()} to='/algorithms'>
            <span {...link()}>
              Algorithms
            </span>
          </Link>
        </div>
      }
      <TabBody {...tabBody()} />
    </div>
  );
};
