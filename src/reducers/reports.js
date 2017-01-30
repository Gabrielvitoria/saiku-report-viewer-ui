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

import ReportServer from '../services/ReportServer';
import util from '../util';

function newReport(state = {}, action) {
  return {
    ...state,
    reportToOpen: util.BLANK_BASE64_PDF
  };
}

function openReport(state = {}, action) {
  return {
    ...state,
    reportToOpen: action.report
  };
}

function saveReport(state = {}, action) {
  new ReportServer().download(state.reportToOpen);

  return state;
}

function printReport(state = {}, action) {
  return {
    ...state,
    printing: true
  };
}

function finishPrinting(state = {}, action) {
  return {
    ...state,
    printing: false
  };
}

function goToTheFirstPage(state = {}, action) {
  return {
    ...state,
    currentPage: 1
  };
}

function goToThePreviousPage(state = {}, action) {
  return {
    ...state,
    currentPage: (state.currentPage > 1) ? state.currentPage - 1 : 1
  };
}

function goToTheNextPage(state = {}, action) {
  return {
    ...state,
    currentPage: (state.currentPage < state.numberOfPages) ? state.currentPage + 1 : state.numberOfPages
  };
}

function goToTheLastPage(state = {}, action) {
  return {
    ...state,
    currentPage: state.numberOfPages
  };
}

function zoomOut(state = {}, action) {
  return {
    ...state,
    scale: state.scale > 0.25 ? state.scale - 0.25 : 0.25
  };
}

function zoomIn(state = {}, action) {
  return {
    ...state,
    scale: state.scale + 0.25
  };
}

function setCurrentPage(state = {}, action) {
  return {
    ...state,
    currentPage: action.currentPage
  };
}

function setNumberOfPages(state = {}, action) {
  return {
    ...state,
    numberOfPages: action.numberOfPages
  };
}

function updateReportParameters(state = {}, action) {
  function getReportUrl(state, action) {
    if (state.reportToOpen) {
      let params = '';

      if (action.reportParameters) {
        if (action.reportParameters.stringParam) {
          params = '?SampleString=' + encodeURIComponent(action.reportParameters.stringParam);
        }

        if (action.reportParameters.dateParam !== undefined) {
          params = (params.length > 0) ? (params + '&') : (params + '?');
          params += 'SampleDate=' + action.reportParameters.dateParam.format('YYYY-MM-DD');
        }      
      }

      const pdfUrl = state.reportToOpen + '.pdf' + params;
      const server = new ReportServer();
      
      return server.open(pdfUrl);
    }

    return null;
  }

  return {
    ...state,
    reportToOpen: getReportUrl(state, action),
    reportParameters: {
      ...state.reportParameters,
      ...action.reportParameters
    }
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
    case 'FINISH_PRINTING':
      return finishPrinting(state, action);
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
    case 'UPDATE_REPORT_PARAMETERS':
      return updateReportParameters(state, action);
    default:
      return state;
  }
}

export default reportActions;
