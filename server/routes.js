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

var path        = require('path');
var jsonfile    = require('jsonfile');
var fileMenuBar = './src/js/components/saiku/MenuBar/data.json';
var fileToolbar = './src/js/components/saiku/Toolbar/data.json';
var dataMock;

var appRouter = function(app) {
  app.get('/', function(req, res) {
    res.send(
      '<h1>Routes:</h1>' +
      '<ul>' +
        '<li><a href="/user?username=admin">Login</a></li>' +
        '<li><a href="/menubar">MenuBar</a></li>' +
        '<li><a href="/toolbar">Toolbar</a></li>' +
        '<li><a href="/report/filename">Pentaho Report</a></li>' +
      '</ul>'
    );
  });

  app.get('/user', function(req, res) {
    var accountMock = {
      username: 'admin',
      password: 'admin'
    };

    if (!req.query.username) {
      return res.send({ 'status': 'error', 'message': 'missing username' });
    }
    else if (req.query.username !== accountMock.username) {
      return res.send({ 'status': 'error', 'message': 'wrong username' });
    }
    else {
      return res.send(accountMock);
    }
  });

  app.get('/menubar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileMenuBar);
    return res.send(dataMock);
  });

  app.get('/toolbar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileToolbar);
    return res.send(dataMock);
  });

  app.get('/report/:filename', function(req, res) {
    var file = '/../src/js/components/saiku/Report/report.html';
    res.sendFile(path.join(__dirname + file));
  });
};

module.exports = appRouter;
