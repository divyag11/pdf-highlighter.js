pdf_highlighter.js
==================

Rewrite of the [Highlighter jQuery plugin](https://www.pdf-highlighter.com/docs/jQuery_Plugin.html)
that removes dependency on jQuery.


Compilation
-----------

For development build run:

    make

For distribution (minimized and optimized) build run:

    make closure-final

Make produces `build/pdf_highlighter.min.js`

Release
-------

Run:

    make js-all

That will create three js files in `build/` with different compilation levels
