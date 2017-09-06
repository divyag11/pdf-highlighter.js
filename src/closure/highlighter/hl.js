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

    var url = window.location.href;
    var dirUrl = url.substring(0, url.lastIndexOf("/") + 1);

    var checkStatus = config['checkStatus'] !== false;
    var ignoreMissingHighlightingParams = config['ignoreMissingHighlightingParams'] || false;
    var resolveDocumentBase = config['sendAbsoluteUrlsToHighlighter'] || config['resolveDocumentBase'] || false;
    var resolveXmlBase = config['sendAbsoluteUrlsToHighlighter'] || config['resolveXmlBase'] || false;
    var resolveViewUrl = config['sendAbsoluteUrlsToHighlighter'] || config['resolveViewUrl'] || false;

    var viewerUrl = config['viewerUrl'];
    var encodeHashForViewer = false;
    var target = config['documentLinkSelector'];

    var links;
    if (goog.isString(target)) {
		//links = goog.dom.query(target);
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


    var queryProvider;
    if (typeof config['querySelector'] === 'function') {
        queryProvider = config['querySelector'];
    }
    else if (typeof config['querySelector'] === 'string' && config['querySelector'].length > 0) {
        queryProvider = function() {
        	return getQueryForSelector(config['querySelector'], config['maxQueryLen']);
        };
    }
    var queryFromProvider = queryProvider ? queryProvider() : undefined;    


	if (links.length > 0) {
		// if there are links we can attach to, check server status first
		if (checkStatus) {
			var statusReqData = config['statusCheckParams'];
			checkServerStatus(highlighterUrl, statusReqData,
				function onSuccess(res) {
					if (res['success'] && !res['disabled']) {
						var endpoint = res['endpoint'] || highlighterUrl;
						attachHighlighterForAll(links, endpoint);
					}
					else {
						attachHighlighterForAll(links, undefined);
						console.log('PDF highlighting disabled by server.');
					}
				}, 
				function onError() {
					// in case of error, continue with highlighting disabled (as click may be handled by an external handler to e.g. open viewer)
					attachHighlighterForAll(links, undefined);
					console.log('PDF highlighting disabled because status check failed.');
				});
		}
		else {
			attachHighlighterForAll(links, highlighterUrl);
		}
	}


	function attachHighlighterForAll(links, highlighterUrl) {
		goog.array.forEach(links, function(item, index, arr) {
			attachHighlighter(item, highlighterUrl);
		});
	}

	function attachHighlighter(el, highlighterUrl) {

        if (goog.dom.dataset.get(el, 'hlInited') === 'true') {
            return;
        }

        var href = el.getAttribute('href');
        if (!href) {
            href = goog.dom.dataset.get(el, 'href');
            if (!href)
                return;
        }

        var altUrl = goog.dom.dataset.get(el, 'altUrl');
        if (!altUrl)
            altUrl = pdf_highlighter.util.resolvePath(href, dirUrl, resolveDocumentBase);

        var data = {};
        var hlForXml = true;
        var hlDisabled = highlighterUrl === undefined;

        var query = config.query || queryFromProvider || pdf_highlighter.util.findData(el.closest('[data-query]'), 'query');
        // console.log('query: ' + query);
        if (query) {
            if (typeof config['filterQuery'] === 'function') {
                //console.log('call filterQuery');
                var q = config['filterQuery'](query);
                if (typeof q !== 'string' || q.length === 0) {
                    return;
                }
                query = q;
            }
            data['query'] = query;
            data['uri'] = pdf_highlighter.util.resolvePath(href, dirUrl, resolveDocumentBase);
            hlForXml = false;
        }
        else {
            // lookup for PDF highlighting URL format
            var ind = href.indexOf('#xml='); // all but IE
            if (ind === -1)
                ind = href.indexOf('?xml='); // in IE
            if (ind === -1) {
                data['uri'] = pdf_highlighter.util.resolvePath(href, dirUrl, resolveDocumentBase);
                var xml = goog.dom.dataset.get(el, 'xml');
                if(!xml) {
                	if (ignoreMissingHighlightingParams)
                		hlDisabled = true;
                	else
	                    return; // exit as no input for highlighting
                }
                else if(xml.match(new RegExp('/<xml/i')))
                    data['xml'] = xml;
                else
                    data['xml'] = pdf_highlighter.util.resolvePath(xml, dirUrl, resolveXmlBase);
            }
            else {
                var pdf = href.substring(0, ind); // TODO need to be url-decoded if from param?
                var xml = href.substring(ind + 5);
                data['uri'] = pdf_highlighter.util.resolvePath(pdf, dirUrl, resolveDocumentBase);
                data['xml'] = pdf_highlighter.util.resolvePath(xml, dirUrl, resolveXmlBase);
            }
        }

        // todo is this proper encoding? see http://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
        if (data['uri'] !== altUrl) // send altUrl only if different
            data['altUrl'] = altUrl.replace(/ /g, '%20');
        data['uri'] = data['uri'].replace(/ /g, '%20');

        var viewUrl = goog.dom.dataset.get(el, 'viewUrl');
        if (viewUrl)
            data['viewUrl'] = pdf_highlighter.util.resolvePath(viewUrl, dirUrl, resolveViewUrl);

        var highlightUrlBuilder;
        if (typeof config['highlightUrlBuilder'] === 'function') {
            highlightUrlBuilder = config['highlightUrlBuilder'];
        }
        else {
            highlightUrlBuilder = function(data) {
            	if (hlDisabled) return undefined;
                var hlActionUrl = config['highlightActionUrl'] ||
                    highlighterUrl + (hlForXml ? 'highlight-for-xml' : 'highlight-for-query');
                if (data) {
	                var qd = goog.Uri.QueryData.createFromMap(data);
	                var uri = goog.Uri.parse(hlActionUrl);
	                uri.setQueryData(qd);
	                hlActionUrl = uri.toString();
            	}
            	return hlActionUrl;
            };
        }

        if (typeof config['updateAttr'] === 'string') {
            collectParameters(data, el);
            var url = highlightUrlBuilder(data);
            if (url)
            	el.setAttribute(config['updateAttr'], url);
        }

        // if updateHref is enabled, update href and exit
        if (config['updateHref'] === true) {
        	if (hlDisabled)
        		return;
            collectParameters(data, el);
            var url = highlightUrlBuilder(data);
            if (url)
            	el.setAttribute('href', url);
        }
        else {
            var self = el;

            // otherwise listen for a click...
            goog.events.listen(el, goog.events.EventType.CLICK, function (e) {
                e.preventDefault();

                collectParameters(data, self);
                // TODO check required params again?
			    var dataEncoded = goog.Uri.QueryData.createFromMap(data).toString();

                if (typeof config['onHighlightingLinkClick'] === 'function') {
                    //console.log('call onHighlightingLinkClick');
                    var ctx = {};
                    ctx['highlighterUrl'] = highlighterUrl;
                    ctx['endpoint'] = highlightUrlBuilder();
                    ctx['params'] = data;
                    ctx['paramsEncoded'] = dataEncoded;
                    if (config['onHighlightingLinkClick'](self, ctx) === false) {
                        return; // if callback returned false, ignoring click
                    }
                }

                var request = new goog.net.XhrIo();
                request.headers.set('content-type' ,'application/json');
                goog.events.listen(request, 'complete', function(){
		            // print confirm to the console
		            //console.log('Status code: ', request.getStatus(), ' - ', request.getStatusText());
			        if (request.isSuccess()) {
			            var res = request.getResponseJson();
                        if (typeof config['onHighlightingResult'] === 'function') {
                            //console.log('call onHighlightingResult');
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
			    
			    // start the request by setting POST method and passing
			    // the data object converted to a queryString
			    request.send(highlightUrlBuilder(), 'POST', dataEncoded);
            });
        }

        goog.dom.dataset.set(el, 'hlInited', 'true');
        goog.dom.dataset.set(el, 'hlOrigHref', altUrl);

        // function getData(element, attr, defValue) {
        // 	if (element) {
        // 		var value = element.getAttribute('data-' + attr);
        // 		if (value)
        // 			return value;
        // 	}
        // 	return defValue;
        // }

        function collectParameters(data, target) {
            addParameter(data, target, 'removePagesWithoutMatches', config['removePagesWithoutMatches']);
            addParameter(data, target, 'addNavigation', config['addNavigation']);
            addParameter(data, target, 'openFirstHlPage', config['openFirstHlPage']);
            addParameter(data, target, 'neighbourPages', config['neighbourPages']);
            addParameter(data, target, 'language', config['language']);
            addParameter(data, target, 'pdf.highlightColor', null);
            addParameter(data, target, 'pdf.highlightMarkupOpacity', null);
            addParameter(data, target, 'pdf.highlightGsAlpha', null);
            addParameter(data, target, 'documentServingPath', null);
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
            window.location = altUrl;
        }
    }
};

function checkServerStatus(highlighterUrl, statusReqData, onSuccess, onError) {
    var dataEncoded = statusReqData ? goog.Uri.QueryData.createFromMap(statusReqData).toString() : undefined;
	var request = new goog.net.XhrIo();
	request.headers.set('accept' ,'application/json');
	goog.events.listen(request, 'complete', function(){
	    if (request.isSuccess()) {
	        var res = request.getResponseJson();
	    	console.log('HL status:');
	    	console.dir(res);
	        onSuccess(res);
	    } else {
	        console.log(
	            'Something went wrong in the ajax call. Error code: ', request.getLastErrorCode(),
	            ' - message: ', request.getLastError()
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

function getQueryForSelector(querySelector, maxQueryLen) {
	
	// todo add support for getting query from URL parameter	
	
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
    var type = element.getAttribute('type').toLowerCase(),
        // if any of these input types is not supported by a browser, it will behave as input type text.
        inputTypes = ['text', 'number', 'email', 'search']
    return inputTypes.indexOf(type) >= 0;
}


/** @export */
pdf_highlighter.init = function(config, hlBase) {
	initPdfHighlighter(config, hlBase);
};



/** @export */
pdf_highlighter.initPdfHighlighter = initPdfHighlighter;
