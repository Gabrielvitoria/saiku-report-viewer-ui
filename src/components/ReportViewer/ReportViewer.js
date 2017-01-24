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
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
  }

  onDocumentComplete(pdf) {
    console.log(pdf);
  }

  onPageComplete(page) {
    console.log(page);
  }

  render() {
    const file = this.props.reports.reportToOpen ?
      this.server.open(this.props.reports.reportToOpen) :
      PDF_SAMPLE_FILE;

    return (
      <div className={style.ReportViewer}>
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <div className={style.ReportViewer_canvas}>
                <PDF
                  file={file}
                  page={1}
                  scale={1}
                  onDocumentComplete={this.onDocumentComplete}
                  onPageComplete={this.onPageComplete}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReportViewer;
