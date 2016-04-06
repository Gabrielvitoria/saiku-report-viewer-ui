/**
 *   Copyright 2016 OSBI Ltd
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

import React from 'react';
import autoBind from 'react-autobind';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  Row,
  Col,
  Input,
  Button
} from 'react-bootstrap';
import FormGroup from '../components/bootstrap/FormGroup';
import {
  Wrapper,
  MenuBar,
  Toolbar,
  Report
} from '../components/saiku/react-saiku';

class ReportViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    autoBind(this, 'handleChange');
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  /**
   * React components implement the `render()` method that takes input data and
   * returns what to display. This method uses an XML-like syntax called JSX.
   * Input data that is passed into the component can be accessed by `render()`
   * via this.props.
   *
   * @return {HTMLElement|Node|String} Report viewer.
   */
  render() {
    return (
      <Wrapper isOpenSidebar>
        <MenuBar />
        <Toolbar />
        <div className="content-box m-b-0 b-r-0">
          <form className="form-horizontal">
            <Input
              type="text"
              label="Sample String"
              labelClassName="col-md-1"
              wrapperClassName="col-md-5"
            />
            <Input
              type="textarea"
              label="Boolean Param"
              labelClassName="col-md-1"
              wrapperClassName="col-md-5"
            />
            <FormGroup>
              <label className="control-label col-md-1">Boolean Param</label>
              <Col md={5}>
                <div className="checkbox">
                  <Input type="checkbox" label=" " standalone />
                </div>
              </Col>
            </FormGroup>
            <FormGroup>
              <label className="control-label col-md-1">The Date</label>
              <Col md={5}>
                <DatePicker
                  className="form-control"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
          </form>
        </div>
        <div className="content-box m-b-0 b-t-0 b-r-0">
          <Row>
            <Col md={6}>
              <Input
                type="checkbox"
                label="Auto-Update on selection"
              />
            </Col>
            <Col md={6}>
              <Button className="pull-right">Update</Button>
            </Col>
          </Row>
        </div>
        <Report />
      </Wrapper>
    );
  }
}

export default ReportViewer;
