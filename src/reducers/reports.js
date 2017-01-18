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

function newReport(state = false, action) {
  console.log('new report');
  return state;
}

function openReport(state = false, action) {
  console.log('open report');
  return state;
}

function saveReport(state = false, action) {
  console.log('save report');
  return state;
}

function reportActions(state = false, action) {
  switch(action.type) {
    case 'NEW_REPORT':
      return newReport(state, action);
    case 'OPEN_REPORT':
      return openReport(state, action);
    case 'SAVE_REPORT':
      return saveReport(state, action);
    default:
      return state;
  }
}

export default reportActions;
