import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Components/Root';
import * as serviceWorker from './serviceWorker';

import 'styles/globalReset.css';

const root = document.getElementById('root');
ReactDOM.render(<Root />, root);
serviceWorker.unregister();
