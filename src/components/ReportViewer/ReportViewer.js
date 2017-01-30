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

import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import PDF from 'react-pdfjs';
import ReportServer from '../../services/ReportServer';
import style from './ReportViewer.styl';

const PDF_SAMPLE_FILE =
  'http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

class ReportViewer extends Component {
  constructor() {
    super();

    this.server = new ReportServer();
    this.getReportUrl = this.getReportUrl.bind(this);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
  }

  getReportUrl() {
    if (this.props.reports.reportToOpen) {
      var params = '';

      if (this.props.reportParameters && this.props.reportParameters.stringParam) {
        params = '?SampleString=' + encodeURIComponent(this.props.reportParameters.stringParam);
      }
      // if (this.props.reportParameters && this.props.reportParameters.boolParam !== undefined) {
      //   params = (params.length > 0) ? (params + '&') : (params + '?');
      //   params += 'SampleBoolean=' + this.props.reportParameters.boolParam;
      // }
      if (this.props.reportParameters && this.props.reportParameters.dateParam !== undefined) {
        params = (params.length > 0) ? (params + '&') : (params + '?');
        params += 'SampleDate=' + this.props.reportParameters.dateParam.format('YYYY-MM-DD');
      }

      const pdfUrl = this.props.reports.reportToOpen + '.pdf' + params;
      
      return this.server.open(pdfUrl);
    }

    return PDF_SAMPLE_FILE;
  }

  onDocumentComplete(numberOfPages) {
    this.props.setNumberOfPages(numberOfPages);
  }

  onPageComplete(currentPage) {
    this.props.setCurrentPage(currentPage);
  }

  render() {
    return (
      <div className={style.ReportViewer}>
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <div className={style.ReportViewer_canvas}>
                <PDF 
                  file={this.getReportUrl()} 
                  page={this.props.reports.currentPage || 1} 
                  scale={this.props.reports.scale || 1} 
                  onDocumentComplete={this.onDocumentComplete.bind(this)}
                  onPageComplete={this.onPageComplete.bind(this)}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReportViewer;
