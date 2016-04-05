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
  Grid,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    // autoBind(this, '');
  }

  blockTopbar() {
    return {
      position: 'relative !important'
    };
  }

  renderLogo() {
    return (
      <div className="topbar-left">
        <div className="text-center">
          <a href="#" className="logo">
            <Image
              src="../dist/assets/images/saiku/logo-big.svg"
              width="180"
              height="30"
            />
          </a>
        </div>
      </div>
    );
  }

  renderMenu() {
    return (
      <Nav>
        <NavDropdown
          eventKey={1}
          id="dropdown-report"
          title="Report"
        >
          <MenuItem eventKey={1.1}>Item 1</MenuItem>
          <MenuItem eventKey={1.2}>Item 2</MenuItem>
          <MenuItem eventKey={1.3}>Item 3</MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={2}
          id="dropdown-report"
          title="Export"
        >
          <MenuItem eventKey={2.1}>Item 1</MenuItem>
          <MenuItem eventKey={2.2}>Item 2</MenuItem>
          <MenuItem eventKey={2.3}>Item 3</MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={3}
          id="dropdown-report"
          title="View"
        >
          <MenuItem eventKey={3.1}>Item 1</MenuItem>
          <MenuItem eventKey={3.2}>Item 2</MenuItem>
          <MenuItem eventKey={3.3}>Item 3</MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={4}
          id="dropdown-report"
          title="Help"
        >
          <MenuItem eventKey={4.1}>Item 1</MenuItem>
          <MenuItem eventKey={4.2}>Item 2</MenuItem>
          <MenuItem eventKey={4.3}>Item 3</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }

  render() {
    let styleTopbar = this.blockTopbar();

    return (
      <div className="topbar" style={styleTopbar}>
        {this.renderLogo()}
        <Navbar role="navigation">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Grid>
              {this.renderMenu()}
            </Grid>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
