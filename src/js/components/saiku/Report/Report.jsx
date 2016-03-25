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
  Row,
  Col,
  ResponsiveEmbed
} from 'react-bootstrap';

class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="content-box m-t-20">
              <ResponsiveEmbed a4by3>
                <iframe
                  frameBorder="0"
                  scrolling="yes"
                  marginHeight="0"
                  marginWidth="0"
                  src="http://www.willgorman.com/wills_analytics/wills_analytics_report.html"
                >
                </iframe>
              </ResponsiveEmbed>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Grid>
    );
  }
}

export default Report;
