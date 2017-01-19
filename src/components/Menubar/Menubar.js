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
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Modal,
  Button
} from 'react-bootstrap';
import Icon from '../Icon';
import style from './Menubar.styl';

class Menubar extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className={style.Menubar}>
        <Navbar className={style.Menubar_navbar} fluid role="navigation">
          <Nav className={style.Menubar_nav}>
            <NavDropdown eventKey={1} title="Report" id="dropdown-report">
              <MenuItem eventKey={1.1} onClick={this.props.newReport}>
                <Icon name="file-text-o"/> New
              </MenuItem>
              <MenuItem eventKey={1.2} onClick={this.openModal}>
                <Icon name="folder-open-o"/> Open
              </MenuItem>
              <MenuItem eventKey={1.3} onClick={this.props.saveReport}>
                <Icon name="save"/> Save
              </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Export" id="dropdown-export">
              <MenuItem eventKey={2.1}>
                <Icon name="file-pdf-o" /> PDF Format
              </MenuItem>
              <MenuItem eventKey={2.2}>
                <Icon name="file-excel-o" /> XLS Format
              </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="View" id="dropdown-view">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="#">Help</NavItem>
          </Nav>
        </Navbar>
        {/* The modal show when user clicks the open report menu item */}
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Open Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Menubar;
