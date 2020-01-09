import React from 'react';
import ReactDOM from 'react-dom';
// import ReactGA from 'react-ga';
import Root from './Components/Root';
import * as serviceWorker from './serviceWorker';

import 'styles/globalReset.css';

// const trackingId =
//   process.env.NODE_ENV === 'production' ? '' : '';
// ReactGA.initialize(trackingId);

const root = document.getElementById('root');
ReactDOM.render(<Root />, root);
serviceWorker.unregister();
