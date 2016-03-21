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
  Grid,
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import Component from '../components/Component';

/**
 * Starter template. Nothing but the basics: compiled CSS and JavaScript
 * along with a container.
 */
class Template extends React.Component {

  /**
   * React components implement the `render()` method that takes input data and
   * returns what to display. This method uses an XML-like syntax called JSX.
   * Input data that is passed into the component can be accessed by `render()`
   * via this.props.
   *
   * @return {HTMLElement|Node|String} An image the company.
   */
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Project name</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" active>Home</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
              <NavItem eventKey={3} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Component />
        </Grid>
      </div>
    );
  }
}

export default Template;
