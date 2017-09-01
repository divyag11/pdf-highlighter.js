// This file was automatically generated from sample.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.simple.
 */

goog.provide('soy.examples.simple');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
soy.examples.simple.helloWorld = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('Hello world!');
  return opt_sb ? '' : output.toString();
};
if (goog.DEBUG) {
  soy.examples.simple.helloWorld.soyTemplateName = 'soy.examples.simple.helloWorld';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
soy.examples.simple.helloName = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.name) {
    output.append('Hello ', soy.$$escapeHtml(opt_data.name), '!');
  } else {
    soy.examples.simple.helloWorld(null, output);
  }
  return opt_sb ? '' : output.toString();
};
if (goog.DEBUG) {
  soy.examples.simple.helloName.soyTemplateName = 'soy.examples.simple.helloName';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
soy.examples.simple.helloNames = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList18 = opt_data.names;
  var nameListLen18 = nameList18.length;
  if (nameListLen18 > 0) {
    for (var nameIndex18 = 0; nameIndex18 < nameListLen18; nameIndex18++) {
      var nameData18 = nameList18[nameIndex18];
      soy.examples.simple.helloName({name: nameData18}, output);
      output.append((! (nameIndex18 == nameListLen18 - 1)) ? '<br>' : '');
    }
  } else {
    soy.examples.simple.helloWorld(null, output);
  }
  return opt_sb ? '' : output.toString();
};
if (goog.DEBUG) {
  soy.examples.simple.helloNames.soyTemplateName = 'soy.examples.simple.helloNames';
}
