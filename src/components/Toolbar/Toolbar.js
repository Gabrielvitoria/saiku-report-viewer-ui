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
  Navbar,
  ButtonToolbar,
  ButtonGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import style from './Toolbar.styl';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.onShowForm = this.onShowForm.bind(this);
  }

  onShowForm() {
    const showForm = !this.props.showForm ? true : false;

    this.props.showReportForm(showForm);
  }

  render() {
    const showForm = !this.props.showForm;

    return (
      <div className={style.Toolbar}>
        <Navbar className={style.Toolbar_navbar} fluid role="navigation">
          <Navbar.Form className={style.Toolbar_navbar_form} pullLeft>
            <ButtonToolbar>
              <ButtonGroup className="hidden-xs">
                <Tooltip title="Print" placement="bottom">
                  <Button onClick={this.props.printReport}><Icon name="print" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup>
                <Tooltip title="Go to First Page" placement="bottom">
                  <Button onClick={this.props.goToTheFirstPage}><Icon name="angle-double-left" /></Button>
                </Tooltip>
                <Tooltip title="Previous Page" placement="bottom">
                  <Button onClick={this.props.goToThePreviousPage}><Icon name="angle-left" /></Button>
                </Tooltip>
                <Tooltip title="Next Page" placement="bottom">
                  <Button onClick={this.props.goToTheNextPage}><Icon name="angle-right" /></Button>
                </Tooltip>
                <Tooltip title="Go to Last Page" placement="bottom">
                  <Button onClick={this.props.goToTheLastPage}><Icon name="angle-double-right" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup>
                <Tooltip title="Zoom Out" placement="bottom">
                  <Button onClick={this.props.zoomOut}><Icon name="search-minus" /></Button>
                </Tooltip>
                <Tooltip title="Zoom In" placement="bottom">
                  <Button onClick={this.props.zoomIn}><Icon name="search-plus" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup className="hidden-xs">
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </ButtonGroup>
              <ButtonGroup className="hidden-sm hidden-md hidden-lg">
                <Tooltip
                  title={showForm ? 'Show Form' : 'Hide Form'}
                  placement="bottom"
                >
                  <Button onClick={this.onShowForm}>
                    <Icon
                      name={showForm ? 'angle-double-down' : 'angle-double-up'}
                    />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Form>
          <Navbar.Form pullRight className="hidden-xs">
            <ButtonToolbar>
              <ButtonGroup>
                <Tooltip
                  title={showForm ? 'Show Form' : 'Hide Form'}
                  placement="bottom"
                >
                  <Button onClick={this.onShowForm}>
                    <Icon
                      name={showForm ? 'angle-double-down' : 'angle-double-up'}
                    />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Form>
        </Navbar>
      </div>
    );
  }
}

export default Toolbar;
