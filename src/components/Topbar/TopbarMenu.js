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

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

class TopbarMenu extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    return (
      <div className={classNames('TopbarMenu', this.props.className)}>
        <a href="#" className="TopbarMenu-btn">
          <Icon name="th" aria-hidden="true" />
        </a>
      </div>
    )
  }
}

export default TopbarMenu;
