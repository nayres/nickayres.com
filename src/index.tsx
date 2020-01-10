import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Root from './Components/Root';
import * as serviceWorker from './serviceWorker';

import 'styles/globalReset.css';

if(process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-137268232-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const root = document.getElementById('root');
ReactDOM.render(<Root />, root);
serviceWorker.unregister();
