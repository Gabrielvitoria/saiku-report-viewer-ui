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

import React, { Component, PropTypes } from 'react';
import {
  Tooltip as BTTooltip,
  OverlayTrigger
} from 'react-bootstrap';
import style from './Tooltip.styl';

class Tooltip extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    placement: PropTypes.string,
    delayShow: PropTypes.number,
    delayHide: PropTypes.number,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    placement: 'bottom',
    delayShow: 300,
    delayHide: 150
  };

  render() {
    const id = `tooltip_${Date.now()}`;
    const {
      title,
      placement,
      delayShow,
      delayHide,
      children
    } = this.props;
    const tooltip = <BTTooltip bsClass={style.Tooltip} id={id}>{title}</BTTooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip}
        placement={placement}
        delayShow={delayShow}
        delayHide={delayHide}
      >
        {children}
      </OverlayTrigger>
    );
  }
}

export default Tooltip;
