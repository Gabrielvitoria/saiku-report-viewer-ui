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

function newReport(state = {}, action) {
  console.log('new report');
  return state;
}

function openReport(state = {}, action) {
  return {
    ...state,
    reportToOpen: action.report
  };
}

function saveReport(state = {}, action) {
  console.log('save report');
  return state;
}

function printReport(state = {}, action) {
  console.log('print report');
  return state;
}

function goToTheFirstPage(state = {}, action) {
  console.log('go to the first page');
  return {
    ...state,
    currentPage: 1
  };
}

function goToThePreviousPage(state = {}, action) {
  console.log('go to the previous page');
  return {
    ...state,
    currentPage: (state.currentPage && state.currentPage > 1) ? state.currentPage - 1 : state.currentPage
  };
}

function goToTheNextPage(state = {}, action) {
  console.log('go to the next page');
  return {
    ...state,
    currentPage: (state.currentPage && state.numberOfPages && state.currentPage > state.numberOfPages) ? state.currentPage + 1 : state.currentPage
  };
}

function goToTheLastPage(state = {}, action) {
  console.log('go to the last page');
  return {
    ...state,
    currentPage: state.numberOfPages || 1
  };
}

function zoomOut(state = {}, action) {
  console.log('zoom out');
  return {
    ...state,
    scale: state.scale > 0.25 ? state.scale - 0.25 : 0.25
  };
}

function zoomIn(state = {}, action) {
  console.log('zoom in');
  return {
    ...state,
    scale: state.scale + 0.25
  };
}

function setCurrentPage(state = {}, action) {
  console.log('set current page');
  return {
    ...state,
    currentPage: action.currentPage
  };
}

function setNumberOfPages(state = {}, action) {
  console.log('set number of pages');
  return {
    ...state,
    numberOfPages: action.numberOfPages
  };
}

function reportActions(state = {}, action) {
  switch(action.type) {
    case 'NEW_REPORT':
      return newReport(state, action);
    case 'OPEN_REPORT':
      return openReport(state, action);
    case 'SAVE_REPORT':
      return saveReport(state, action);
    case 'PRINT_REPORT':
      return printReport(state, action);
    case 'GO_TO_THE_FIRST_PAGE':
      return goToTheFirstPage(state, action);
    case 'GO_TO_THE_PREVIOUS_PAGE':
      return goToThePreviousPage(state, action);
    case 'GO_TO_THE_NEXT_PAGE':
      return goToTheNextPage(state, action);
    case 'GO_TO_THE_LAST_PAGE':
      return goToTheLastPage(state, action);
    case 'ZOOM_OUT':
      return zoomOut(state, action);
    case 'ZOOM_IN':
      return zoomIn(state, action);
    case 'SET_CURRENT_PAGE':
      return setCurrentPage(state, action);
    case 'SET_NUMBER_OF_PAGES':
      return setNumberOfPages(state, action);
    default:
      return state;
  }
}

export default reportActions;
