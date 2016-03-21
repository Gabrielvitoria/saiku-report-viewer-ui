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
import classNames from 'classnames';

/**
 * This component should display a content.
 *
 * @example
 * <Component />
 */
class Component extends React.Component {

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
      <div
        {...this.props}
        className={classNames('starter-template', this.props.className)}
      >
        <h1>Bootstrap starter template</h1>
        <p className="lead">
          Use this document as a way to quickly start any new project.
        </p>
      </div>
    );
  }
}

Component.propTypes = {
  className: React.PropTypes.string
};

export default Component;
