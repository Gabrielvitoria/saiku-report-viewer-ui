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
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  Col,
  Row,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button
} from 'react-bootstrap';
import style from './ReportForm.styl';
import 'react-datepicker/dist/react-datepicker.css';

class ReportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      stringParam: '',
      boolParam: false,
      autoupdate: false
    };

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStringParam = this.onChangeStringParam.bind(this);
    this.onChangeBoolParam = this.onChangeBoolParam.bind(this);
    this.onChangeAutoUpdate = this.onChangeAutoUpdate.bind(this);
    this.updateParameters = this.updateParameters.bind(this);
  }

  updateParameters() {
    this.props.updateReportParameters(this.state.stringParam,
                                      this.state.boolParam,
                                      this.state.startDate);
  }

  onChangeDate(date) {
    this.setState({
      startDate: date
    });

    if (this.state.autoupdate) {
      this.updateParameters();
    }
  }

  onChangeStringParam(event) {
    this.setState({
      stringParam: event.target.value
    });

    if (this.state.autoupdate) {
      this.updateParameters();
    }
  }

  onChangeBoolParam(event) {
    this.setState({
      boolParam: event.target.value
    });

    if (this.state.autoupdate) {
      this.updateParameters();
    }
  }

  onChangeAutoUpdate(event) {
    this.setState({
      autoupdate: event.target.value
    });
  }

  render() {
    const showForm = this.props.showForm
      ? style.ReportForm_showForm
      : style.ReportForm_hideForm;

    return (
      <div className={classNames(style.ReportForm, showForm)}>
        <div className={style.ReportForm_container}>
          <Form horizontal>
            <FormGroup controlId="formSampleString">
              <Col componentClass={ControlLabel} md={1}>
                Sample String
              </Col>
              <Col md={5}>
                <FormControl type="text" onChange={this.onChangeStringParam} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBooleanParam">
              <Col componentClass={ControlLabel} md={1}>
                Boolean Param
              </Col>
              <Col md={5}>
                <Checkbox onChange={this.onChangeBoolParam} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formTheDate">
              <Col componentClass={ControlLabel} md={1}>
                The Date
              </Col>
              <Col md={5}>
                <DatePicker
                  className="form-control"
                  ref="date"
                  dropdownMode="select"
                  selected={this.state.startDate}
                  onChange={this.onChangeDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                />
              </Col>
            </FormGroup>
          </Form>
        </div>
        <div className={style.ReportForm_container}>
          <Row>
            <Col md={3}>
              <FormGroup controlId="formAutoUpdate">
                <Col mdOffset={1}>
                  <Checkbox onChange={this.onChangeAutoUpdate}>
                    Auto-Update on selection
                  </Checkbox>
                </Col>
              </FormGroup>
            </Col>
            <Col md={3}>
              <Button type="button" className="pull-right"
                onClick={this.updateParameters}>Update</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ReportForm;
