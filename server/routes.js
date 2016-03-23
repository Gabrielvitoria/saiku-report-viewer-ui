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
var fileMenuBar = './server/data/MenuBar.json';
var fileToolbar = './server/data/Toolbar.json';
var dataMock;

var appRouter = function(app) {
  app.get('/', function(req, res) {
    res.send(
      '<h1>Routes:</h1>' +
      '<ul>' +
        '<li><a href="/srep/viewer/ui/menubar">MenuBar</a></li>' +
        '<li><a href="/srep/viewer/ui/toolbar">Toolbar</a></li>' +
        '<li><a href="/srep/viewer/ui/report/filename">Pentaho Report</a></li>' +
      '</ul>'
    );
  });

  app.get('/srep/viewer/ui/menubar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileMenuBar);
    return res.send(dataMock);
  });

  app.get('/srep/viewer/ui/toolbar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileToolbar);
    return res.send(dataMock);
  });

  app.get('/srep/viewer/ui/report/:filename', function(req, res) {
    var file = '/../server/data/report.html';
    res.sendFile(path.join(__dirname + file));
  });
};

module.exports = appRouter;
