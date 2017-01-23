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
  Modal,
  Button,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import style from './OpenReportModal.styl';
import ReportServer from '../../services/ReportServer';

class OpenReportModal extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      selectedReport: null,
      reports: []
    };

    this.server = new ReportServer();

    this.render       = this.render.bind(this);
    this.renderReport = this.renderReport.bind(this);
    this.selectReport = this.selectReport.bind(this);
    this.listReports  = this.listReports.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show });
    }
  }

  componentDidMount() {
    this.listReports();
  }

  listReports() {
    this.server.list(res => {
      this.setState({reports: res.data});
    });
  }

  selectReport(reportId) {
    this.setState({selectedReport: reportId});
  }

  renderReport(reportId, i) {
    return (
      <ListGroupItem href="#" key={i} 
        onClick={this.selectReport.bind(null, reportId)}
        active={reportId === this.state.selectedReport}>
        {reportId}
      </ListGroupItem>
    );
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Open Report</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass={style.modal_body}>
          <ListGroup>
            {this.state.reports.map(this.renderReport)}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onSelectReport.bind(null, this.state.selectedReport)}>Select</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>      
    );
  }
}

export default OpenReportModal;