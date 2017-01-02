/**
 *   Copyright 2017 OSBI Ltd
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

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
// `browserHistory` does not work on production
// this code will be commented on temporarily
// import { browserHistory } from 'react-router';
import { hashHistory } from 'react-router';
import rootReducer from '../reducers/index';

const defaultState = {
  filter: ''
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// export const history = syncHistoryWithStore(browserHistory, store);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
