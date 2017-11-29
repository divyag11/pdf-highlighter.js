goog.provide('pdfHighlighter.util');

goog.require('goog.dom.dataset');


function addParameter(data, element, name, defValue) {
  var dataName = name;
  var prefixInd = name.lastIndexOf('.');
  if (prefixInd !== -1) {
    dataName = name.substring(prefixInd + 1);
  }
  var value = findData(element, dataName);
  if (value)
    data[name] = value;
  else if (defValue !== null && defValue !== undefined)
    data[name] = defValue;
}

function findData(elem, name) {
  var v;
  while (elem && !(v = goog.dom.dataset.get(elem, name))) {
    elem = goog.dom.getParentElement(elem);
  }
  return v;
}

function resolvePath(path, dirUrl, resolveRelative) {
  var urlMatcher = new RegExp('/^https?:\/\//i');
  if (urlMatcher.test(path))
    return path;
  if (typeof resolveRelative === 'string')
    return resolve(path, resolveRelative);
  else if (resolveRelative === true)
    return resolve(path, dirUrl);
  return path;
}

// Credits to http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
function resolve(url, base_url) {
  var doc = document;
  var old_base = doc.getElementsByTagName('base')[0];
  var old_href = old_base && old_base.href;
  var doc_head = doc.head || doc.getElementsByTagName('head')[0];
  var our_base = old_base || doc_head.appendChild(doc.createElement('base'));
  var resolver = doc.createElement('a');

  our_base.href = base_url;
  resolver.href = url;
  var resolved_url = resolver.href; // browser magic at work here

  if (old_base) old_base.href = old_href;
  else doc_head.removeChild(our_base);
  return resolved_url;
}

function getLocation(href) {
  var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match && {
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  };
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
//var ieVersion = detectIE();

/** @export */
pdfHighlighter.util.detectIE = detectIE;

/** @export */
pdfHighlighter.util.resolvePath = resolvePath;

/** @export */
pdfHighlighter.util.findData = findData;

