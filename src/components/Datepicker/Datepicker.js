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
import classNames from 'classnames';
import moment from 'moment';
import { FormControl } from 'react-bootstrap';
import style from './Datepicker.styl';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const overlayStyle = {
  position: 'absolute',
  background: 'white',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)',
  zIndex: '99'
};

const currentYear = (new Date()).getFullYear();
const fromMonth = new Date(currentYear, 0, 1, 0, 0);
const toMonth = new Date(currentYear + 10, 11, 31, 23, 59);

// Component will receive date, locale and localeUtils props
function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={ handleChange } value={ date.getMonth() }>
        { months.map((month, i) =>
          <option key={ i } value={ i }>
            { month }
          </option>)
        }
      </select>
      <select name="year" onChange={ handleChange } value={ date.getFullYear() }>
        { years.map((year, i) =>
          <option key={ i } value={ year }>
            { year }
          </option>)
        }
      </select>
    </form>
  );
}

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // startDate: moment(),
      showOverlay: false,
      value: '',
      selectedDay: null,
      initialMonth: fromMonth,

      stringParam: '',
      boolParam: false,
      autoupdate: false
    };

    // this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStringParam = this.onChangeStringParam.bind(this);
    this.onChangeBoolParam = this.onChangeBoolParam.bind(this);
    this.onChangeAutoUpdate = this.onChangeAutoUpdate.bind(this);
    this.updateParameters = this.updateParameters.bind(this);


    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
  }

  input = null;
  daypicker = null;
  clickedInside = false;
  clickTimeout = null;

  handleContainerMouseDown() {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }

  handleInputFocus() {
    this.setState({
      showOverlay: true,
    });
  }

  handleInputBlur() {
    const showOverlay = this.clickedInside;

    this.setState({
      showOverlay,
    });

    console.log(this.input);

    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      this.input.focus();
    }
  }

  handleInputChange(e) {
    const { value } = e.target;
    const momentDay = moment(value, 'L', true);
    if (momentDay.isValid()) {
      this.setState({
        selectedDay: momentDay.toDate(),
        value,
      }, () => {
        this.daypicker.showMonth(this.state.selectedDay);
      });
    } else {
      this.setState({ value, selectedDay: null });
    }
  }

  handleDayClick(e, day) {
    this.setState({
      value: moment(day).format('L'),
      selectedDay: day,
      showOverlay: false,
    });
    this.input.blur();
  }

  updateParameters() {
    this.props.updateReportParameters(this.state.stringParam,
                                      this.state.boolParam,
                                      this.state.startDate);
  }

  // onChangeDate(date) {
  //   this.setState({
  //     startDate: date
  //   });

  //   if (this.state.autoupdate) {
  //     this.updateParameters();
  //   }
  // }

  onChangeStringParam(event) {
    this.setState({
      stringParam: event.target.value
    });

    if (this.state.autoupdate) {
      this.updateParameters();
    }
  }

  onChangeBoolParam(event) {
    this.setState({
      boolParam: event.target.value
    });

    if (this.state.autoupdate) {
      this.updateParameters();
    }
  }

  onChangeAutoUpdate(event) {
    this.setState({
      autoupdate: event.target.value
    });
  }

  render() {
    const showForm = this.props.showForm
      ? style.Datepicker_showForm
      : style.Datepicker_hideForm;

    return (
      <div className={classNames(style.Datepicker, showForm)}>
        <div className={style.Datepicker_container}>
          <Form horizontal>
            <FormGroup controlId="formSampleString">
              <Col componentClass={ControlLabel} md={1}>
                Sample String
              </Col>
              <Col md={5}>
                <FormControl type="text" onChange={this.onChangeStringParam} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBooleanParam">
              <Col componentClass={ControlLabel} md={1}>
                Boolean Param
              </Col>
              <Col md={5}>
                <Checkbox onChange={this.onChangeBoolParam} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formTheDate">
              <Col componentClass={ControlLabel} md={1}>
                The Date
              </Col>
              <Col md={5}>

                <div
                  className="YearNavigation"
                  onMouseDown={ this.handleContainerMouseDown }
                >
                  <FormControl
                    type="text"
                    inputRef={el => { this.input = el; }}
                    placeholder="MM/DD/YYYY"
                    value={ this.state.value }
                    onChange={ this.handleInputChange }
                    onFocus={ this.handleInputFocus }
                    onBlur={ this.handleInputBlur }
                  />
                  { this.state.showOverlay &&
                    <div style={ { position: 'relative' } }>
                      <div style={ overlayStyle }>
                        <DayPicker
                          ref={el => { this.daypicker = el; }}
                          onDayClick={ this.handleDayClick }
                          initialMonth={ this.state.initialMonth }
                          fromMonth={ fromMonth }
                          toMonth={ toMonth }
                          captionElement={
                            <YearMonthForm onChange={ initialMonth => this.setState({ initialMonth }) } />
                          }
                          selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
                        />
                      </div>
                    </div>
                  }
                </div>

              </Col>
            </FormGroup>
          </Form>
        </div>
        <div className={style.Datepicker_container}>
          <Row>
            <Col md={3}>
              <FormGroup controlId="formAutoUpdate">
                <Col mdOffset={1}>
                  <Checkbox onChange={this.onChangeAutoUpdate}>
                    Auto-Update on selection
                  </Checkbox>
                </Col>
              </FormGroup>
            </Col>
            <Col md={3}>
              <Button type="button" className="pull-right"
                onClick={this.updateParameters}>Update</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Datepicker;
