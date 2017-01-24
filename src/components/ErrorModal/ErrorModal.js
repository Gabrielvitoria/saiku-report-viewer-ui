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
  Modal,
  Button
} from 'react-bootstrap';

class ErrorModal extends Component {
  render() {
    return (
      <Modal show={this.props.errorModal.show} onHide={this.props.hideErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.errorModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.errorModal.message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideErrorModal}>Close</Button>
        </Modal.Footer>
      </Modal>      
    );
  }
}

export default ErrorModal;