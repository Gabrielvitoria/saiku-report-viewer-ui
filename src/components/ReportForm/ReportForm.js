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
      startDate: moment()
    };

    this.onChangeDate = this.onChangeDate.bind(this);
  }

  onChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className={style.ReportForm}>
        <div className={style.ReportForm_container}>
          <Form horizontal>
            <FormGroup controlId="formSampleString">
              <Col componentClass={ControlLabel} md={1}>
                Sample String
              </Col>
              <Col md={5}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBooleanParam">
              <Col componentClass={ControlLabel} md={1}>
                Boolean Param
              </Col>
              <Col md={5}>
                <Checkbox />
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
                  <Checkbox>Auto-Update on selection</Checkbox>
                </Col>
              </FormGroup>
            </Col>
            <Col md={3}>
              <Button type="button" className="pull-right">Update</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ReportForm;
