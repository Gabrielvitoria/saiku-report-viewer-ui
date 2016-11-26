import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

render(<App />, document.querySelector('#main'));
