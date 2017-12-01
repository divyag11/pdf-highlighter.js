pdf-highlighter.js
==================

[PDF Highlighter](https://www.pdf-highlighter.com) integration script, a rewrite of the 
[jQuery plugin](https://www.pdf-highlighter.com/docs/jQuery_Plugin.html) without external dependencies.


Compilation
-----------

For development build run:

    make

For distribution (minimized and optimized) build run:

    make closure-final

Make produces `build/pdf-highlighter.min.js`

Release
-------

Run:

    make js-all

That will create three js files in `build/` with different compilation levels.
