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
          <Navbar.Form pullLeft>
            <ButtonToolbar>
              <ButtonGroup>
                <Tooltip title="Print" placement="bottom">
                  <Button><Icon name="print" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup>
                <Tooltip title="First page" placement="bottom">
                  <Button><Icon name="angle-double-left" /></Button>
                </Tooltip>
                <Tooltip title="Previous page" placement="bottom">
                  <Button><Icon name="angle-left" /></Button>
                </Tooltip>
                <Tooltip title="Next page" placement="bottom">
                  <Button><Icon name="angle-right" /></Button>
                </Tooltip>
                <Tooltip title="Last page" placement="bottom">
                  <Button><Icon name="angle-double-right" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup>
                <Tooltip title="Zoom out" placement="bottom">
                  <Button><Icon name="search-minus" /></Button>
                </Tooltip>
                <Tooltip title="Zoom in" placement="bottom">
                  <Button><Icon name="search-plus" /></Button>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Form>
          <Navbar.Form pullRight>
            <ButtonToolbar>
              <ButtonGroup>
                <Tooltip
                  title={showForm ? 'Show form' : 'Hide form'}
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
