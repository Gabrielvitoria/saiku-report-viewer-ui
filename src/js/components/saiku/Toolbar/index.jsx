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
// import autoBind from 'react-autobind';
import {
  Navbar,
  Nav,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Input
} from 'react-bootstrap';
import {
  Icon
} from '../react-saiku';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    // autoBind(this, '');
  }

  renderItems() {
    return (
      <Nav>
        <ButtonToolbar>
          <ButtonGroup>
            <Button><Icon name="print" /></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Icon name="angle-double-left" /></Button>
            <Button><Icon name="angle-left" /></Button>
            <Button><Icon name="angle-right" /></Button>
            <Button><Icon name="angle-double-right" /></Button>
            <Button><Icon name="search-plus" /></Button>
            <Button><Icon name="search-minus" /></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Input type="select" standalone>
              <option value="zoom-100">100%</option>
            </Input>
          </ButtonGroup>
        </ButtonToolbar>
      </Nav>
    );
  }

  render() {
    return (
      <Navbar className="toolbar">
        <Navbar.Form>
          {this.renderItems()}
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default Toolbar;
