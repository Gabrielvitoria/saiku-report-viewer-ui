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

// Plugin PDFJS

// var PDF_URL = 'http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
var BASE_URL = 'http://localhost:8181/cxf/';
var FILE_NAME = 'test';
var PDF_URL = BASE_URL + 'reportviewer/render/' + FILE_NAME + '.pdf';
var DEFAULT_SCALE = 1.72;
var MIN_SCALE = 0.30;
var MAX_SCALE = 4.00;

var pdfDoc = null;
var pageNum = 1;
var pageRendering = false;
var pageNumPending = null;
var scale = DEFAULT_SCALE;
var canvas = document.getElementById('report');
var ctx = canvas.getContext('2d');

function renderPage(pageNum) {
  pageRendering = true;

  pdfDoc.getPage(pageNum).then(function(page) {
    var viewport = page.getViewport(scale);
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function() {
      pageRendering = false;

      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  // Update page counters
  document.getElementById('pageNum').textContent = pageNum;
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  }
  else {
    renderPage(num);
  }
}

/**
 * Displays previous page
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }

  pageNum -= 1;
  queueRenderPage(pageNum);
}
document.getElementById('btn-prev-page').addEventListener('click', onPrevPage);

/**
 * Displays next page
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }

  pageNum += 1;
  queueRenderPage(pageNum);
}
document.getElementById('btn-next-page').addEventListener('click', onNextPage);

/**
 * Displays first page
 */
function onFirstPage() {
  pageNum = 1;
  queueRenderPage(pageNum);
}
document.getElementById('btn-first-page').addEventListener('click', onFirstPage);

/**
 * Displays last page
 */
function onLastPage() {
  pageNum = pdfDoc.numPages;
  queueRenderPage(pageNum);
}
document.getElementById('btn-last-page').addEventListener('click', onLastPage);

/**
 * Call zoom out
 */
function onZoomOut() {
  if (scale <= MIN_SCALE) {
    return;
  }

  scale -= 0.10;
  queueRenderPage(pageNum);
}
document.getElementById('btn-zoom-out').addEventListener('click', onZoomOut);

/**
 * Call zoom in
 */
function onZoomIn() {
  if (scale >= MAX_SCALE) {
    return;
  }

  scale += 0.10;

  if (scale > 1.0 && scale < 1.25) {
    scale = 1.25;
  }
  else if (scale > 1.25 && scale < 1.5) {
    scale = 1.5;
  }
  else if (scale > 1.5 && scale < 2) {
    scale = 2;
  }
  else if (scale > 2 && scale < 3) {
    scale = 3;
  }
  else if (scale > 3 && scale < 4) {
    scale = 4;
  }

  queueRenderPage(pageNum);
}
document.getElementById('btn-zoom-in').addEventListener('click', onZoomIn);

/**
 * Call select scale
 */
function onSelectScale(event) {
  var $target = event.target;

  scale = Number($target.value);
  queueRenderPage(pageNum);
}
document.getElementById('select-scale').addEventListener('click', onSelectScale);

/**
 * Call toggle toolbar
 */
function onToggleToolBar() {
  if ($('#btn-toggle').hasClass('content-form-hide')) {
    $('.content-form').show();
    $('#btn-toggle').removeClass('content-form-hide');
    $('#btn-toggle').find('.fa').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
  }
  else {
    $('.content-form').hide();
    $('#btn-toggle').addClass('content-form-hide');
    $('#btn-toggle').find('.fa').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
  }
}
document.getElementById('btn-toggle').addEventListener('click', onToggleToolBar);

/**
 * Call export PDF
 */
function onExportType(type) {
  var link = document.createElement('a');
  link.href = BASE_URL + 'reportviewer/render/' + FILE_NAME + '.' + type;
  link.download = 'file.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}

function onExportPDF() {
  onExportType('pdf');
}
document.getElementById('btn-print').addEventListener('click', onExportPDF);
document.getElementById('menu-export-pdf').addEventListener('click', onExportPDF);

/**
 * Call export XLS
 */
function onExportXLS() {
  onExportType('xls');
}
document.getElementById('menu-export-xls').addEventListener('click', onExportXLS);

// PDFJS.workerSrc = '../assets/js/pdf.worker.js';

/**
 * Asynchronously downloads PDF
 */
PDFJS.getDocument(PDF_URL).then(function(pdf) {
  pdfDoc = pdf;
  document.getElementById('pageCount').textContent = pdfDoc.numPages;

  // Initial/first page rendering
  renderPage(pageNum);
});


$(function() {
  $('.datepicker').datepicker();
});