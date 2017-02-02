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
import PDF from 'react-pdfjs';

class ReportPrinter extends Component {
  constructor() {
    super();

    this.printPage = this.printPage.bind(this);
    this.printDiv = this.printDiv.bind(this);
    this.onPrintPageComplete = this.onPrintPageComplete.bind(this);

    this.numberOfReadyPagesToPrint = 0;
  }

  render() {
    return this.props.reports.printing ? this.printDiv() : null;
  }

  printPage(pageNumber) {
    return (
      <div key={pageNumber}>
        <PDF 
          file={this.props.reports.reportToOpen} 
          page={pageNumber} 
          scale={1}
          onPageComplete={this.onPrintPageComplete}/>
      </div>
    );
  }

  onPrintPageComplete() {
    if (this.numberOfReadyPagesToPrint === 0) {
      this.props.showWaitModal('Preparing the document to print. Please wait ...');
    }

    this.numberOfReadyPagesToPrint++;

    if (this.numberOfReadyPagesToPrint === this.props.reports.numberOfPages) {
      this.props.hideWaitModal();
      window.print();
      this.props.finishPrinting();
    }
  }

  printDiv() {
    this.numberOfReadyPagesToPrint = 0;
    const pages = [];

    for (var i = 1; i <= this.props.reports.numberOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map(this.printPage)}
      </div>
    );
  }  
}

export default ReportPrinter;