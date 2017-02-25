import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import './styles/global.sass';
import './favicon.ico';


render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
