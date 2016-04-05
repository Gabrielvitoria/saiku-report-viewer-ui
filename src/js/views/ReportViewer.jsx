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
import {
  Row,
  Col,
  Input,
  Button
} from 'react-bootstrap';
import {
  MenuBar,
  Toolbar
} from '../components/saiku/react-saiku';
import Wrapper from '../components/saiku/Wrapper';
import Report from '../components/saiku/Report/Report';

class ReportViewer extends React.Component {

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
            <Input
              type="text"
              label="The Date"
              labelClassName="col-md-1"
              wrapperClassName="col-md-5"
            />
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
