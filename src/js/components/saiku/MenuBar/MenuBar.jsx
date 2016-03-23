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
import autoBind from 'react-autobind';
import _ from 'underscore';
import {
  Grid,
  Navbar,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import Logo from '../Logo';
import MenubarCollection from './MenuBarCollection';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: ''
    };

    this._menubarUI = new MenubarCollection();

    autoBind(this, '_handleFetchUI', '_renderMenu', '_renderSubMenu');
  }

  componentDidMount() {
    this._menubarUI.fetch({
      success: this._handleFetchUI
    });
  }

  _handleFetchUI(menubarUI) {
    this.setState({
      models: menubarUI.models[0]
    });
  }

  _renderMenu(menu, index) {
    let key = _.uniqueId('menu_');
    let isVisible = !menu.visible ? 'hidden' : '';

    return (
      <NavDropdown
        className={isVisible}
        id={key}
        key={key}
        eventKey={index}
        title={menu.name}
      >
        {menu.subitem.map(this._renderSubMenu)}
      </NavDropdown>
    );
  }

  _renderSubMenu(submenu, index) {
    let key = _.uniqueId(`menu_item_${index}_`);
    let isVisible = !submenu.visible ? 'hidden' : '';

    return (
      <MenuItem
        className={isVisible}
        id={key}
        key={key}
        eventKey={key}
        href={submenu.action}
      >
        {submenu.name}
      </MenuItem>
    );
  }

  render() {
    let menus = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getItem() : [];

    return (
      <div className="topbar">
        <div className="topbar-left">
          <div className="text-center">
            <a href="#" className="logo">
              <Logo
                src="../dist/assets/images/saiku/logo-big.svg"
                width={180}
                height={30}
              />
            </a>
          </div>
        </div>

        <Navbar role="navigation">
          <Grid>
            <Nav className="hidden-xs">
              {menus.map(this._renderMenu)}
            </Nav>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
