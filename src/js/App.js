/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Template from './views/Template';

// webpack loaders
import '../../index.html';
import '../../dist/saiku/saiku.css';

/**
 * React router component allows you to define routes in React application.
 * @see https://github.com/reactjs/react-router
 */
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Template} />
  </Router>
);

// The primary API for rendering into the DOM.
ReactDOM.render(routes, document.querySelector('#app'));
