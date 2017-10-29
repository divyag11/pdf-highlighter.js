goog.provide('pdf_highlighter');
goog.provide('pdf_highlighter.main');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('pdf_highlighter.util');

var ieVersion = pdf_highlighter.util.detectIE();


var initPdfHighlighter = function (config, hlBase) {

  config = config || {};

  var highlighterUrl = hlBase || config['highlighterUrl'] || window['HighlighterBase'] || "/";
  if (highlighterUrl.indexOf('/', highlighterUrl.length - 1) === -1)
    highlighterUrl += '/';

  var checkStatus = config['checkStatus'] !== false;
  var resolveDocumentBase = config['sendAbsoluteUrlsToHighlighter'] || config['resolveDocumentBase'] || false;
  var resolveXmlBase = config['sendAbsoluteUrlsToHighlighter'] || config['resolveXmlBase'] || false;
  var resolveViewUrl = config['sendAbsoluteUrlsToHighlighter'] || config['resolveViewUrl'] || false;

  var viewerUrl = config['viewerUrl'];
  var encodeHashForViewer = false;
  var target = config['documentLinkSelector'];

  var links;
  if (goog.isString(target)) {
    links = document.querySelectorAll(target);
  }
  else if (goog.isArrayLike(target)) {
    links = target;
  }
  else {
    console.log('Highlighter target not defined.');
    return false;
  }

  if (config.debug) {
    console.log('Attaching highlighter to links: ' + links.length);
  }

  if (checkStatus && links.length > 0) {
    var statusReqData = config['statusCheckParams'];
    checkServerStatus(highlighterUrl, statusReqData,
      function onSuccess(res) {
        if (res['success'] && !res['disabled']) {
          var endpoint = res['endpoint'] || highlighterUrl;
          attachHighlighterForAll(links, endpoint, res['apiToken']);
        }
        else {
          attachHighlighterForAll(links, undefined, undefined);
          console.log('PDF highlighting disabled by server.');
        }
      },
      function onError() {
        // fixme pass error to config fn listener?
        // in case of error, continue with highlighting disabled (as click may be handled by an external handler to e.g. open viewer)
        attachHighlighterForAll(links, undefined, undefined);
        console.log('PDF highlighting disabled because status check failed.');
      });
  }
  else {
    attachHighlighterForAll(links, highlighterUrl, undefined);
  }


  function attachHighlighterForAll(links, highlighterUrl, apiToken) {
    goog.array.forEach(links, function (item, index, arr) {
      attachHighlighter(item, highlighterUrl, apiToken);
    });
  }

  function attachHighlighter(el, highlighterUrl, apiToken) {

    if (goog.dom.dataset.get(el, 'hlInited') === 'true') {
      return;
    }

    var highlightUrlBuilder = getHighlightUrlBuilder(config);

    if (typeof config['updateAttr'] === 'string') {
      var data = collectParameters(el, config);
      var url = highlightUrlBuilder(highlighterUrl, getHighlightingMethodForParams(data), data);
      if (url)
        el.setAttribute(config['updateAttr'], url);
    }

    // if updateHref is enabled, update href and exit
    if (config['updateHref'] === true) {
      var data = collectParameters(el, config);
      var url = highlightUrlBuilder(highlighterUrl, getHighlightingMethodForParams(data), data);
      if (url) {
        var orig = el.getAttribute('href');
        if (orig)
          goog.dom.dataset.set(el, 'hlOrigHref', orig);
        el.setAttribute('href', url);
      }
    }
    else {
      var self = el;

      // otherwise listen for a click...
      goog.events.listen(el, goog.events.EventType.CLICK, function (e) {

        var data = collectParameters(self, config);
        var method = getHighlightingMethodForParams(data);
        var postUrl = highlightUrlBuilder(highlighterUrl, method); // building url without data as we'll use POST method
        var dataEncoded = goog.Uri.QueryData.createFromMap(data).toString();

        if (typeof config['onHighlightingLinkClick'] === 'function') {
          var ctx = {};
          ctx['highlighterUrl'] = highlighterUrl;
          ctx['highlightingMethod'] = method;
          ctx['endpoint'] = postUrl;
          ctx['params'] = data;
          ctx['paramsEncoded'] = dataEncoded;
          ctx['apiToken'] = apiToken;
          if (config['onHighlightingLinkClick'](self, ctx, e) === false) {
            return; // if callback returned false, ignoring the click
          }
        }

        // post URL is undefined if parameter validation failed so we exit before canceling the event
        if (!postUrl)
          return;
        e.preventDefault();

        var request = new goog.net.XhrIo();
        request.headers.set('content-type', 'application/json');
        if (apiToken) {
          request.headers.set('x-highlighter-api-token', apiToken);
        }
        goog.events.listen(request, 'complete', function () {
          if (request.isSuccess()) {
            var res = request.getResponseJson();
            if (typeof config['onHighlightingResult'] === 'function') {
              if (config['onHighlightingResult'](res, self) === false) {
                return; // if callback returned false, ignoring click
              }
            }
            if (res['success'] === true) {
              showDocument(res['documentUrl'], res);
            }
            else {
              onError();
            }
          } else {
            onError();
            // print error info to the console
            console.log(
              'Something went wrong in the ajax call. Error code: ', request.getLastErrorCode(),
              ' - message: ', request.getLastError()
            );
          }
        });

        // start the request by setting POST method and passing the data object converted to a queryString
        request.send(postUrl, 'POST', dataEncoded);
      });
    }

    goog.dom.dataset.set(el, 'hlInited', 'true');


    function collectParameters(el, config) {
      var data = {};

      var url = window.location.href;
      var dirUrl = url.substring(0, url.lastIndexOf("/") + 1);

      var href = el.getAttribute('href');
      if (!href) {
        href = goog.dom.dataset.get(el, 'href');
      }
      if (href) {
        data['uri'] = pdf_highlighter.util.resolvePath(href, dirUrl, resolveDocumentBase);
      }

      var altUrl = goog.dom.dataset.get(el, 'altUrl');
      if (!altUrl && href)
        altUrl = pdf_highlighter.util.resolvePath(href, dirUrl, resolveDocumentBase);


      var queryProvider;
      if (typeof config['querySelector'] === 'function') {
        queryProvider = config['querySelector'];
      }
      else if (typeof config['querySelector'] === 'string' && config['querySelector'].length > 0) {
        queryProvider = function () {
          return getQueryForSelector(config['querySelector'], config['maxQueryLen']);
        };
      }
      var queryFromProvider = queryProvider ? queryProvider() : undefined;


      var query = config.query || queryFromProvider || pdf_highlighter.util.findData(el, 'query');
      if (query) {
        if (typeof config['filterQuery'] === 'function') {
          query = config['filterQuery'](query);
        }
        data['query'] = query;
      }
      else if (href) {
        // lookup for PDF highlighting URL format
        var ind = href.indexOf('#xml='); // all but IE
        if (ind === -1)
          ind = href.indexOf('?xml='); // in IE
        if (ind === -1) {
          var xml = goog.dom.dataset.get(el, 'xml');
          if (xml) {
            if (xml.match(new RegExp('/<xml/i')))
              data['xml'] = xml;
            else
              data['xml'] = pdf_highlighter.util.resolvePath(xml, dirUrl, resolveXmlBase);
          }
        }
        else {
          var pdf = href.substring(0, ind); // TODO need to be url-decoded if from param?
          var xml = href.substring(ind + 5);
          data['uri'] = pdf_highlighter.util.resolvePath(pdf, dirUrl, resolveDocumentBase);
          data['xml'] = pdf_highlighter.util.resolvePath(xml, dirUrl, resolveXmlBase);
        }
      }

      if (data['uri']) {
        // todo is this proper encoding? see http://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
        if (altUrl && data['uri'] !== altUrl) // send altUrl only if different
          data['altUrl'] = altUrl.replace(/ /g, '%20');
        data['uri'] = data['uri'].replace(/ /g, '%20');
      }

      var viewUrl = goog.dom.dataset.get(el, 'viewUrl');
      if (viewUrl)
        data['viewUrl'] = pdf_highlighter.util.resolvePath(viewUrl, dirUrl, resolveViewUrl);

      addParameter(data, el, 'removePagesWithoutMatches', config['removePagesWithoutMatches']);
      addParameter(data, el, 'addNavigation', config['addNavigation']);
      addParameter(data, el, 'openFirstHlPage', config['openFirstHlPage']);
      addParameter(data, el, 'neighbourPages', config['neighbourPages']);
      addParameter(data, el, 'language', config['language']);
      addParameter(data, el, 'pdf.highlightColor', null);
      addParameter(data, el, 'pdf.highlightMarkupOpacity', null);
      addParameter(data, el, 'pdf.highlightGsAlpha', null);
      addParameter(data, el, 'documentServingPath', null);

      // giving a chance to client to amend highlighting parameters
      if (typeof config['updateHighlightingParams'] === 'function') {
        // function can either update the object or return a new one
        var newData = config['updateHighlightingParams'](data);
        if (newData)
          data = newData;
      }

      return data;
    }

    function showDocument(docUrl, result) {

      var url = docUrl;
      if (viewerUrl) {
        if (!encodeHashForViewer) {
          var urlParts = docUrl.split('#');
          url = viewerUrl + encodeURIComponent(urlParts[0]);
          if (urlParts.length > 1)
            url += '#' + urlParts[1];
        }
        else {
          url = viewerUrl + encodeURIComponent(docUrl);
        }
      }

      // TODO: add support for: 1) target element, 2) custom handler
      window.location = url;
    }

    function onError() {
      //window.location = altUrl;
      // fixme improve error handling!
    }
  }
};

function checkServerStatus(highlighterUrl, statusReqData, onSuccess, onError) {
  var dataEncoded = statusReqData ? goog.Uri.QueryData.createFromMap(statusReqData).toString() : undefined;
  var request = new goog.net.XhrIo();
  request.headers.set('accept', 'application/json');
  goog.events.listen(request, 'complete', function () {
    var statusCode = request.getStatus();
    if (request.isSuccess() && statusCode < 400) {
      var res = request.getResponseJson();
      onSuccess(res);
    } else {
      console.log(
        'Something went wrong in the ajax call. HTTP status: ' + statusCode + ' - ' + request.getStatusText() +
        '; Error: ' + request.getLastErrorCode() + ' - ' + request.getLastError()
      );
      if (onError) {
        onError(request);
      }
    }
  });
  var statusUrl = highlighterUrl + 'status';
  if (dataEncoded) {
    statusUrl += '?' + dataEncoded;
  }
  request.send(statusUrl, 'GET', dataEncoded);
}

function getHighlightUrlBuilder(config) {
  var highlightUrlBuilder;
  if (typeof config['highlightUrlBuilder'] === 'function') {
    highlightUrlBuilder = config['highlightUrlBuilder'];
  }
  else {
    highlightUrlBuilder = function (highlighterUrl, method, data) {
      var hlActionUrl = config['highlightActionUrl'];
      if (!hlActionUrl) {
        if (!method || !highlighterUrl)
          return undefined; // params not valid
        hlActionUrl = highlighterUrl + method;
      }
      if (data) {
        var qd = goog.Uri.QueryData.createFromMap(data);
        var uri = goog.Uri.parse(hlActionUrl);
        uri.setQueryData(qd);
        hlActionUrl = uri.toString();
      }
      return hlActionUrl;
    };
  }
  return highlightUrlBuilder;
}

function getHighlightingMethodForParams(params) {
  if (params['uri'] === undefined)
    return undefined;
  if (params['xml'] !== undefined)
    return 'highlight-for-xml';
  if (params['query'] !== undefined)
    return 'highlight-for-query';
  return undefined;
}

function getQueryForSelector(querySelector, maxQueryLen) {

  // todo add support for getting query from URL parameter?

  var query;
  var element = document.querySelector(querySelector);
  if (element) {
    if (isInputBox(element)) {
      query = element.value;
    }
    else {
      // assuming we're dealing with HTML element so get its text
      query = element.textContent;
    }
    query = query.trim();
    if (maxQueryLen && query.length > maxQueryLen) {
      query = query.substring(0, maxQueryLen);
    }
    if (query.length === 0)
      query = undefined;
  }
  return query;
}

function isInputBox(element) {
  var tagName = element.tagName.toLowerCase();
  if (tagName === 'textarea') return true;
  if (tagName !== 'input') return false;
  var type = element.getAttribute('type').toLowerCase();
  // if any of these input types is not supported by a browser, it will behave as input type text.
  var inputTypes = ['text', 'number', 'email', 'search'];
  return inputTypes.indexOf(type) >= 0;
}


/** @export */
pdf_highlighter.init = function (config, hlBase) {
  initPdfHighlighter(config, hlBase);
};


/** @export */
pdf_highlighter.initPdfHighlighter = initPdfHighlighter;

/** @export */
pdf_highlighter.getQueryForSelector = getQueryForSelector;
