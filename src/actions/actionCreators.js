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

export function showReportForm(showForm) {
  return {
    type: 'SHOW_REPORT_FORM',
    showForm
  }
}

// Actions for menu items
export function newReport() {
  return {
    type: 'NEW_REPORT'
  }
}

export function openReport(report) {
  return {
    type: 'OPEN_REPORT',
    report
  }
}

export function saveReport(report) {
  return {
    type: 'SAVE_REPORT',
    report
  }
}

// Actions for wait modal
export function showWaitModal(message) {
  return {
    type: 'SHOW_WAIT_MODAL',
    message
  }
}

export function hideWaitModal() {
  return {
    type: 'HIDE_WAIT_MODAL'
  }
}

// Actions for error modal
export function showErrorModal(title, message) {
  return {
    type: 'SHOW_ERROR_MODAL',
    title,
    message
  }
}

export function hideErrorModal() {
  return {
    type: 'HIDE_ERROR_MODAL'
  }
}

// Actions for report parameters form
export function updateReportParameters(stringParam, boolParam, dateParam) {
  return {
    type: 'UPDATE_REPORT_PARAMETERS',
    stringParam,
    boolParam,
    dateParam
  }
}

// Actions for report viewer toolbar
export function printReport() {
  return {
    type: 'PRINT_REPORT'
  }
}

export function goToTheFirstPage() {
  return {
    type: 'GO_TO_THE_FIRST_PAGE'
  }
}

export function goToThePreviousPage() {
  return {
    type: 'GO_TO_THE_PREVIOUS_PAGE'
  }
}

export function goToTheNextPage() {
  return {
    type: 'GO_TO_THE_NEXT_PAGE'
  }
}

export function goToTheLastPage() {
  return {
    type: 'GO_TO_THE_LAST_PAGE'
  }
}

export function zoomOut() {
  return {
    type: 'ZOOM_OUT'
  }
}

export function zoomIn() {
  return {
    type: 'ZOOM_IN'
  }
}

export function setCurrentPage(currentPage) {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage
  }
}

export function setNumberOfPages(numberOfPages) {
  return {
    type: 'SET_NUMBER_OF_PAGES',
    numberOfPages
  }
}
