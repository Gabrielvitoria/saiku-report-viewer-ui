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
  Button
} from 'react-bootstrap';
import axios from 'axios';
import style from './OpenReportModal.styl';

class OpenReportModal extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      reports: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show });
    }
  }

  componentDidMount() {
    // TODO: Implement the report listing from the correct source
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({reports: res.data});
    });

    this.render = this.render.bind(this);
    this.renderReport = this.renderReport.bind(this);
    this.selectReport = this.selectReport.bind(this);
  }

  selectReport(report) {
    this.selectedReport = report;
    console.log('selectReport', report);
  }

  renderReport(data, i) {
    return (
      <li key={i} onClick={this.selectReport.bind(null, data.title)}>{data.title}</li>
    );
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Open Report</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass={style.modal_body}>
          <ul>{this.state.reports.map(this.renderReport)}</ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={e => {this.props.onSelectReport(this.selectedReport)}}>Select</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>      
    );
  }
}

export default OpenReportModal;