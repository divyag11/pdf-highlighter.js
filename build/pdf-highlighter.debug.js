(function() {var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.checkStringArgs = function $$jscomp$checkStringArgs$($thisArg$$, $arg$$, $func$$) {
  if (null == $thisArg$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$$ + " must not be null or undefined");
  }
  if ($arg$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$$ + " must not be a regular expression");
  }
  return $thisArg$$ + "";
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$$, $property$$, $descriptor$$) {
  $target$$ != Array.prototype && $target$$ != Object.prototype && ($target$$[$property$$] = $descriptor$$.value);
};
$jscomp.getGlobal = function $$jscomp$getGlobal$($maybeGlobal$$) {
  return "undefined" != typeof window && window === $maybeGlobal$$ ? $maybeGlobal$$ : "undefined" != typeof global && null != global ? global : $maybeGlobal$$;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function $$jscomp$polyfill$($property$jscomp$5_split_target$$, $impl_polyfill$$, $fromLang_obj$$, $i$$) {
  if ($impl_polyfill$$) {
    $fromLang_obj$$ = $jscomp.global;
    $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$.split(".");
    for ($i$$ = 0; $i$$ < $property$jscomp$5_split_target$$.length - 1; $i$$++) {
      var $key$$ = $property$jscomp$5_split_target$$[$i$$];
      $key$$ in $fromLang_obj$$ || ($fromLang_obj$$[$key$$] = {});
      $fromLang_obj$$ = $fromLang_obj$$[$key$$];
    }
    $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$[$property$jscomp$5_split_target$$.length - 1];
    $i$$ = $fromLang_obj$$[$property$jscomp$5_split_target$$];
    $impl_polyfill$$ = $impl_polyfill$$($i$$);
    $impl_polyfill$$ != $i$$ && null != $impl_polyfill$$ && $jscomp.defineProperty($fromLang_obj$$, $property$jscomp$5_split_target$$, {configurable:!0, writable:!0, value:$impl_polyfill$$});
  }
};
$jscomp.findInternal = function $$jscomp$findInternal$($array$$, $callback$$, $thisArg$$) {
  $array$$ instanceof String && ($array$$ = String($array$$));
  for (var $len$$ = $array$$.length, $i$$ = 0; $i$$ < $len$$; $i$$++) {
    var $value$$ = $array$$[$i$$];
    if ($callback$$.call($thisArg$$, $value$$, $i$$, $array$$)) {
      return {i:$i$$, v:$value$$};
    }
  }
  return {i:-1, v:void 0};
};
var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function $goog$isDef$($val$$) {
  return void 0 !== $val$$;
};
goog.isString = function $goog$isString$($val$$) {
  return "string" == typeof $val$$;
};
goog.isBoolean = function $goog$isBoolean$($val$$) {
  return "boolean" == typeof $val$$;
};
goog.isNumber = function $goog$isNumber$($val$$) {
  return "number" == typeof $val$$;
};
goog.exportPath_ = function $goog$exportPath_$($name$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$ = $name$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || goog.global;
  $name$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$[0]);
  for (var $part$$; $name$$.length && ($part$$ = $name$$.shift());) {
    !$name$$.length && goog.isDef($opt_object$$) ? $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$ : $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] && $cur_opt_objectToExportTo$$[$part$$] !== Object.prototype[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {};
  }
};
goog.define = function $goog$define$($name$$, $defaultValue$jscomp$2_value$$) {
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && void 0 === goog.global.CLOSURE_UNCOMPILED_DEFINES.nodeType && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, $name$$) ? $defaultValue$jscomp$2_value$$ = goog.global.CLOSURE_UNCOMPILED_DEFINES[$name$$] : goog.global.CLOSURE_DEFINES && void 0 === goog.global.CLOSURE_DEFINES.nodeType && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, $name$$) && ($defaultValue$jscomp$2_value$$ = goog.global.CLOSURE_DEFINES[$name$$]));
  goog.exportPath_($name$$, $defaultValue$jscomp$2_value$$);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function $goog$provide$($name$$) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide can not be used within a goog.module.");
  }
  if (!COMPILED && goog.isProvided_($name$$)) {
    throw Error('Namespace "' + $name$$ + '" already declared.');
  }
  goog.constructNamespace_($name$$);
};
goog.constructNamespace_ = function $goog$constructNamespace_$($name$$, $opt_obj$$) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[$name$$];
    for (var $namespace$$ = $name$$; ($namespace$$ = $namespace$$.substring(0, $namespace$$.lastIndexOf("."))) && !goog.getObjectByName($namespace$$);) {
      goog.implicitNamespaces_[$namespace$$] = !0;
    }
  }
  goog.exportPath_($name$$, $opt_obj$$);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function $goog$module$($name$$) {
  if (!goog.isString($name$$) || !$name$$ || -1 == $name$$.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + $name$$ + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = $name$$;
  if (!COMPILED) {
    if (goog.isProvided_($name$$)) {
      throw Error('Namespace "' + $name$$ + '" already declared.');
    }
    delete goog.implicitNamespaces_[$name$$];
  }
};
goog.module.get = function $goog$module$get$($name$$) {
  return goog.module.getInternal_($name$$);
};
goog.module.getInternal_ = function $goog$module$getInternal_$($name$$) {
  if (!COMPILED) {
    if ($name$$ in goog.loadedModules_) {
      return goog.loadedModules_[$name$$];
    }
    if (!goog.implicitNamespaces_[$name$$]) {
      return $name$$ = goog.getObjectByName($name$$), null != $name$$ ? $name$$ : null;
    }
  }
  return null;
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function $goog$isInModuleLoader_$() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareLegacyNamespace = function $goog$module$declareLegacyNamespace$() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function $goog$setTestOnly$($opt_message$$) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw $opt_message$$ = $opt_message$$ || "", Error("Importing test-only code into non-debug environment" + ($opt_message$$ ? ": " + $opt_message$$ : "."));
  }
};
goog.forwardDeclare = function $goog$forwardDeclare$($name$$) {
};
COMPILED || (goog.isProvided_ = function $goog$isProvided_$($name$$) {
  return $name$$ in goog.loadedModules_ || !goog.implicitNamespaces_[$name$$] && goog.isDefAndNotNull(goog.getObjectByName($name$$));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function $goog$getObjectByName$($name$jscomp$72_parts$$, $cur$jscomp$1_opt_obj$$) {
  $name$jscomp$72_parts$$ = $name$jscomp$72_parts$$.split(".");
  $cur$jscomp$1_opt_obj$$ = $cur$jscomp$1_opt_obj$$ || goog.global;
  for (var $part$$; $part$$ = $name$jscomp$72_parts$$.shift();) {
    if (goog.isDefAndNotNull($cur$jscomp$1_opt_obj$$[$part$$])) {
      $cur$jscomp$1_opt_obj$$ = $cur$jscomp$1_opt_obj$$[$part$$];
    } else {
      return null;
    }
  }
  return $cur$jscomp$1_opt_obj$$;
};
goog.globalize = function $goog$globalize$($obj$$, $global$$) {
  $global$$ = $global$$ || goog.global;
  for (var $x$$ in $obj$$) {
    $global$$[$x$$] = $obj$$[$x$$];
  }
};
goog.addDependency = function $goog$addDependency$($path$$, $provides_require$$, $requires$$, $j$$) {
  if (goog.DEPENDENCIES_ENABLED) {
    var $provide$$;
    $path$$ = $path$$.replace(/\\/g, "/");
    var $deps$$ = goog.dependencies_;
    $j$$ && "boolean" !== typeof $j$$ || ($j$$ = $j$$ ? {module:"goog"} : {});
    for (var $i$$ = 0; $provide$$ = $provides_require$$[$i$$]; $i$$++) {
      $deps$$.nameToPath[$provide$$] = $path$$, $deps$$.loadFlags[$path$$] = $j$$;
    }
    for ($j$$ = 0; $provides_require$$ = $requires$$[$j$$]; $j$$++) {
      $path$$ in $deps$$.requires || ($deps$$.requires[$path$$] = {}), $deps$$.requires[$path$$][$provides_require$$] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function $goog$logToConsole_$($msg$$) {
  goog.global.console && goog.global.console.error($msg$$);
};
goog.require = function $goog$require$($errorMessage_name$$) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_($errorMessage_name$$);
    if (goog.isProvided_($errorMessage_name$$)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_($errorMessage_name$$);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var $path$$ = goog.getPathFromDeps_($errorMessage_name$$);
        if ($path$$) {
          goog.writeScripts_($path$$);
        } else {
          throw $errorMessage_name$$ = "goog.require could not find: " + $errorMessage_name$$, goog.logToConsole_($errorMessage_name$$), Error($errorMessage_name$$);
        }
      }
    }
    return null;
  }
};
goog.basePath = "";
goog.nullFunction = function $goog$nullFunction$() {
};
goog.abstractMethod = function $goog$abstractMethod$() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function $goog$addSingletonGetter$($ctor$$) {
  $ctor$$.instance_ = void 0;
  $ctor$$.getInstance = function $$ctor$$$getInstance$() {
    if ($ctor$$.instance_) {
      return $ctor$$.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = $ctor$$);
    return $ctor$$.instance_ = new $ctor$$;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.TRANSPILER = "transpile.js";
goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {loadFlags:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function $goog$inHtmlDocument_$() {
  var $doc$$ = goog.global.document;
  return null != $doc$$ && "write" in $doc$$;
}, goog.findBasePath_ = function $goog$findBasePath_$() {
  if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      var $doc$$ = goog.global.document;
      var $currentScript_i$$ = $doc$$.currentScript;
      $doc$$ = $currentScript_i$$ ? [$currentScript_i$$] : $doc$$.getElementsByTagName("SCRIPT");
      for ($currentScript_i$$ = $doc$$.length - 1; 0 <= $currentScript_i$$; --$currentScript_i$$) {
        var $src$$ = $doc$$[$currentScript_i$$].src, $l_qmark$$ = $src$$.lastIndexOf("?");
        $l_qmark$$ = -1 == $l_qmark$$ ? $src$$.length : $l_qmark$$;
        if ("base.js" == $src$$.substr($l_qmark$$ - 7, 7)) {
          goog.basePath = $src$$.substr(0, $l_qmark$$ - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function $goog$importScript_$($src$$, $opt_sourceText$$) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)($src$$, $opt_sourceText$$) && (goog.dependencies_.written[$src$$] = !0);
}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.oldIeWaiting_ = !1, goog.importProcessedScript_ = function $goog$importProcessedScript_$($src$$, $isModule$$, $needsTranspile$$) {
  goog.importScript_("", 'goog.retrieveAndExec_("' + $src$$ + '", ' + $isModule$$ + ", " + $needsTranspile$$ + ");");
}, goog.queuedModules_ = [], goog.wrapModule_ = function $goog$wrapModule_$($srcUrl$$, $scriptText$$) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify($scriptText$$ + "\n//# sourceURL=" + $srcUrl$$ + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + $scriptText$$ + "\n;return exports});\n//# sourceURL=" + $srcUrl$$ + "\n";
}, goog.loadQueuedModules_ = function $goog$loadQueuedModules_$() {
  var $count$$ = goog.queuedModules_.length;
  if (0 < $count$$) {
    var $queue$$ = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var $i$$ = 0; $i$$ < $count$$; $i$$++) {
      goog.maybeProcessDeferredPath_($queue$$[$i$$]);
    }
  }
  goog.oldIeWaiting_ = !1;
}, goog.maybeProcessDeferredDep_ = function $goog$maybeProcessDeferredDep_$($name$jscomp$74_path$$) {
  goog.isDeferredModule_($name$jscomp$74_path$$) && goog.allDepsAreAvailable_($name$jscomp$74_path$$) && ($name$jscomp$74_path$$ = goog.getPathFromDeps_($name$jscomp$74_path$$), goog.maybeProcessDeferredPath_(goog.basePath + $name$jscomp$74_path$$));
}, goog.isDeferredModule_ = function $goog$isDeferredModule_$($name$jscomp$75_path$$) {
  var $loadFlags$$ = ($name$jscomp$75_path$$ = goog.getPathFromDeps_($name$jscomp$75_path$$)) && goog.dependencies_.loadFlags[$name$jscomp$75_path$$] || {}, $languageLevel$$ = $loadFlags$$.lang || "es3";
  return $name$jscomp$75_path$$ && ("goog" == $loadFlags$$.module || goog.needsTranspile_($languageLevel$$)) ? goog.basePath + $name$jscomp$75_path$$ in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function $goog$allDepsAreAvailable_$($name$jscomp$76_path$$) {
  if (($name$jscomp$76_path$$ = goog.getPathFromDeps_($name$jscomp$76_path$$)) && $name$jscomp$76_path$$ in goog.dependencies_.requires) {
    for (var $requireName$$ in goog.dependencies_.requires[$name$jscomp$76_path$$]) {
      if (!goog.isProvided_($requireName$$) && !goog.isDeferredModule_($requireName$$)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function $goog$maybeProcessDeferredPath_$($abspath$$) {
  if ($abspath$$ in goog.dependencies_.deferred) {
    var $src$$ = goog.dependencies_.deferred[$abspath$$];
    delete goog.dependencies_.deferred[$abspath$$];
    goog.globalEval($src$$);
  }
}, goog.loadModuleFromUrl = function $goog$loadModuleFromUrl$($url$$) {
  goog.retrieveAndExec_($url$$, !0, !1);
}, goog.writeScriptSrcNode_ = function $goog$writeScriptSrcNode_$($src$$) {
  goog.global.document.write('<script type="text/javascript" src="' + $src$$ + '">\x3c/script>');
}, goog.appendScriptSrcNode_ = function $goog$appendScriptSrcNode_$($src$$) {
  var $doc$$ = goog.global.document, $scriptEl$$ = $doc$$.createElement("script");
  $scriptEl$$.type = "text/javascript";
  $scriptEl$$.src = $src$$;
  $scriptEl$$.defer = !1;
  $scriptEl$$.async = !1;
  $doc$$.head.appendChild($scriptEl$$);
}, goog.writeScriptTag_ = function $goog$writeScriptTag_$($src$$, $opt_sourceText$$) {
  if (goog.inHtmlDocument_()) {
    var $doc$$ = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == $doc$$.readyState) {
      if (/\bdeps.js$/.test($src$$)) {
        return !1;
      }
      throw Error('Cannot write "' + $src$$ + '" after document load');
    }
    void 0 === $opt_sourceText$$ ? goog.IS_OLD_IE_ ? (goog.oldIeWaiting_ = !0, $opt_sourceText$$ = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", $doc$$.write('<script type="text/javascript" src="' + $src$$ + '"' + $opt_sourceText$$ + ">\x3c/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_($src$$) : goog.writeScriptSrcNode_($src$$) : $doc$$.write('<script type="text/javascript">' + goog.protectScriptTag_($opt_sourceText$$) + 
    "\x3c/script>");
    return !0;
  }
  return !1;
}, goog.protectScriptTag_ = function $goog$protectScriptTag_$($str$$) {
  return $str$$.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.needsTranspile_ = function $goog$needsTranspile_$($lang$$) {
  if ("always" == goog.TRANSPILE) {
    return !0;
  }
  if ("never" == goog.TRANSPILE) {
    return !1;
  }
  goog.requiresTranspilation_ || (goog.requiresTranspilation_ = goog.createRequiresTranspilation_());
  if ($lang$$ in goog.requiresTranspilation_) {
    return goog.requiresTranspilation_[$lang$$];
  }
  throw Error("Unknown language mode: " + $lang$$);
}, goog.requiresTranspilation_ = null, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function $goog$onScriptLoad_$($script$$, $scriptIndex$$) {
  "complete" == $script$$.readyState && goog.lastNonModuleScriptIndex_ == $scriptIndex$$ && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function $goog$writeScripts_$($path$jscomp$0$$) {
  function $visitNode$$($path$$) {
    if (!($path$$ in $deps$$.written || $path$$ in $deps$$.visited)) {
      $deps$$.visited[$path$$] = !0;
      if ($path$$ in $deps$$.requires) {
        for (var $requireName$$ in $deps$$.requires[$path$$]) {
          if (!goog.isProvided_($requireName$$)) {
            if ($requireName$$ in $deps$$.nameToPath) {
              $visitNode$$($deps$$.nameToPath[$requireName$$]);
            } else {
              throw Error("Undefined nameToPath for " + $requireName$$);
            }
          }
        }
      }
      $path$$ in $seenScript$$ || ($seenScript$$[$path$$] = !0, $scripts$$.push($path$$));
    }
  }
  var $scripts$$ = [], $seenScript$$ = {}, $deps$$ = goog.dependencies_;
  $visitNode$$($path$jscomp$0$$);
  for (var $i$$ = 0; $i$$ < $scripts$$.length; $i$$++) {
    $path$jscomp$0$$ = $scripts$$[$i$$], goog.dependencies_.written[$path$jscomp$0$$] = !0;
  }
  var $moduleState$$ = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for ($i$$ = 0; $i$$ < $scripts$$.length; $i$$++) {
    if ($path$jscomp$0$$ = $scripts$$[$i$$]) {
      var $loadFlags$$ = $deps$$.loadFlags[$path$jscomp$0$$] || {}, $needsTranspile$$ = goog.needsTranspile_($loadFlags$$.lang || "es3");
      "goog" == $loadFlags$$.module || $needsTranspile$$ ? goog.importProcessedScript_(goog.basePath + $path$jscomp$0$$, "goog" == $loadFlags$$.module, $needsTranspile$$) : goog.importScript_(goog.basePath + $path$jscomp$0$$);
    } else {
      throw goog.moduleLoaderState_ = $moduleState$$, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = $moduleState$$;
}, goog.getPathFromDeps_ = function $goog$getPathFromDeps_$($rule$$) {
  return $rule$$ in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[$rule$$] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.hasBadLetScoping = null;
goog.useSafari10Workaround = function $goog$useSafari10Workaround$() {
  if (null == goog.hasBadLetScoping) {
    try {
      var $hasBadLetScoping$$ = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
    } catch ($e$$) {
      $hasBadLetScoping$$ = !1;
    }
    goog.hasBadLetScoping = $hasBadLetScoping$$;
  }
  return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function $goog$workaroundSafari10EvalBug$($moduleDef$$) {
  return "(function(){" + $moduleDef$$ + "\n;})();\n";
};
goog.loadModule = function $goog$loadModule$($moduleDef$$) {
  var $previousState$$ = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareLegacyNamespace:!1};
    if (goog.isFunction($moduleDef$$)) {
      var $exports$$ = $moduleDef$$.call(void 0, {});
    } else {
      if (goog.isString($moduleDef$$)) {
        goog.useSafari10Workaround() && ($moduleDef$$ = goog.workaroundSafari10EvalBug($moduleDef$$)), $exports$$ = goog.loadModuleFromSource_.call(void 0, $moduleDef$$);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var $moduleName$$ = goog.moduleLoaderState_.moduleName;
    if (!goog.isString($moduleName$$) || !$moduleName$$) {
      throw Error('Invalid module name "' + $moduleName$$ + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_($moduleName$$, $exports$$) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof $exports$$ && null != $exports$$ && Object.seal($exports$$);
    goog.loadedModules_[$moduleName$$] = $exports$$;
  } finally {
    goog.moduleLoaderState_ = $previousState$$;
  }
};
goog.loadModuleFromSource_ = function $goog$loadModuleFromSource_$($JSCompiler_OptimizeArgumentsArray_p0$$) {
  eval($JSCompiler_OptimizeArgumentsArray_p0$$);
  return {};
};
goog.normalizePath_ = function $goog$normalizePath_$($components_path$$) {
  $components_path$$ = $components_path$$.split("/");
  for (var $i$$ = 0; $i$$ < $components_path$$.length;) {
    "." == $components_path$$[$i$$] ? $components_path$$.splice($i$$, 1) : $i$$ && ".." == $components_path$$[$i$$] && $components_path$$[$i$$ - 1] && ".." != $components_path$$[$i$$ - 1] ? $components_path$$.splice(--$i$$, 2) : $i$$++;
  }
  return $components_path$$.join("/");
};
goog.loadFileSync_ = function $goog$loadFileSync_$($src$$) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC($src$$);
  }
  try {
    var $xhr$$ = new goog.global.XMLHttpRequest;
    $xhr$$.open("get", $src$$, !1);
    $xhr$$.send();
    return 0 == $xhr$$.status || 200 == $xhr$$.status ? $xhr$$.responseText : null;
  } catch ($err$$) {
    return null;
  }
};
goog.retrieveAndExec_ = function $goog$retrieveAndExec_$($src$$, $isModule$$, $needsTranspile$$) {
  if (!COMPILED) {
    var $originalPath$$ = $src$$;
    $src$$ = goog.normalizePath_($src$$);
    var $importScript$$ = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, $scriptText$$ = goog.loadFileSync_($src$$);
    if (null == $scriptText$$) {
      throw Error('Load of "' + $src$$ + '" failed');
    }
    $needsTranspile$$ && ($scriptText$$ = goog.transpile_.call(goog.global, $scriptText$$, $src$$));
    $scriptText$$ = $isModule$$ ? goog.wrapModule_($src$$, $scriptText$$) : $scriptText$$ + ("\n//# sourceURL=" + $src$$);
    goog.IS_OLD_IE_ && goog.oldIeWaiting_ ? (goog.dependencies_.deferred[$originalPath$$] = $scriptText$$, goog.queuedModules_.push($originalPath$$)) : $importScript$$($src$$, $scriptText$$);
  }
};
goog.transpile_ = function $goog$transpile_$($code$jscomp$0$$, $path$jscomp$0$$) {
  var $jscomp$$ = goog.global.$jscomp;
  $jscomp$$ || (goog.global.$jscomp = $jscomp$$ = {});
  var $transpile$$ = $jscomp$$.transpile;
  if (!$transpile$$) {
    var $transpilerPath$$ = goog.basePath + goog.TRANSPILER, $transpilerCode$$ = goog.loadFileSync_($transpilerPath$$);
    if ($transpilerCode$$) {
      eval($transpilerCode$$ + "\n//# sourceURL=" + $transpilerPath$$);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      $jscomp$$ = goog.global.$jscomp;
      $transpile$$ = $jscomp$$.transpile;
    }
  }
  $transpile$$ || ($transpile$$ = $jscomp$$.transpile = function $$jscomp$$$transpile$($code$$, $path$$) {
    goog.logToConsole_($path$$ + " requires transpilation but no transpiler was found.");
    return $code$$;
  });
  return $transpile$$($code$jscomp$0$$, $path$jscomp$0$$);
};
goog.typeOf = function $goog$typeOf$($value$$) {
  var $s$$ = typeof $value$$;
  if ("object" == $s$$) {
    if ($value$$) {
      if ($value$$ instanceof Array) {
        return "array";
      }
      if ($value$$ instanceof Object) {
        return $s$$;
      }
      var $className$$ = Object.prototype.toString.call($value$$);
      if ("[object Window]" == $className$$) {
        return "object";
      }
      if ("[object Array]" == $className$$ || "number" == typeof $value$$.length && "undefined" != typeof $value$$.splice && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$ || "undefined" != typeof $value$$.call && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$ && "undefined" == typeof $value$$.call) {
      return "object";
    }
  }
  return $s$$;
};
goog.isNull = function $goog$isNull$($val$$) {
  return null === $val$$;
};
goog.isDefAndNotNull = function $goog$isDefAndNotNull$($val$$) {
  return null != $val$$;
};
goog.isArray = function $goog$isArray$($val$$) {
  return "array" == goog.typeOf($val$$);
};
goog.isArrayLike = function $goog$isArrayLike$($val$$) {
  var $type$$ = goog.typeOf($val$$);
  return "array" == $type$$ || "object" == $type$$ && "number" == typeof $val$$.length;
};
goog.isDateLike = function $goog$isDateLike$($val$$) {
  return goog.isObject($val$$) && "function" == typeof $val$$.getFullYear;
};
goog.isFunction = function $goog$isFunction$($val$$) {
  return "function" == goog.typeOf($val$$);
};
goog.isObject = function $goog$isObject$($val$$) {
  var $type$$ = typeof $val$$;
  return "object" == $type$$ && null != $val$$ || "function" == $type$$;
};
goog.getUid = function $goog$getUid$($obj$$) {
  return $obj$$[goog.UID_PROPERTY_] || ($obj$$[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function $goog$hasUid$($obj$$) {
  return !!$obj$$[goog.UID_PROPERTY_];
};
goog.removeUid = function $goog$removeUid$($obj$$) {
  null !== $obj$$ && "removeAttribute" in $obj$$ && $obj$$.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete $obj$$[goog.UID_PROPERTY_];
  } catch ($ex$$) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function $goog$cloneObject$($obj$$) {
  var $clone_type$$ = goog.typeOf($obj$$);
  if ("object" == $clone_type$$ || "array" == $clone_type$$) {
    if ($obj$$.clone) {
      return $obj$$.clone();
    }
    $clone_type$$ = "array" == $clone_type$$ ? [] : {};
    for (var $key$$ in $obj$$) {
      $clone_type$$[$key$$] = goog.cloneObject($obj$$[$key$$]);
    }
    return $clone_type$$;
  }
  return $obj$$;
};
goog.bindNative_ = function $goog$bindNative_$($fn$$, $selfObj$$, $var_args$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
};
goog.bindJs_ = function $goog$bindJs_$($fn$$, $selfObj$$, $var_args$$) {
  if (!$fn$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$.apply($selfObj$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$.apply($selfObj$$, arguments);
  };
};
goog.bind = function $goog$bind$($fn$$, $selfObj$$, $var_args$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function $goog$partial$($fn$$, $var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$ = $args$$.slice();
    $newArgs$$.push.apply($newArgs$$, arguments);
    return $fn$$.apply(this, $newArgs$$);
  };
};
goog.mixin = function $goog$mixin$($target$$, $source$$) {
  for (var $x$$ in $source$$) {
    $target$$[$x$$] = $source$$[$x$$];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function $goog$globalEval$($script$$) {
  if (goog.global.execScript) {
    goog.global.execScript($script$$, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_) {
        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {
          try {
            delete goog.global._evalTest_;
          } catch ($ignore$$) {
          }
          goog.evalWorksForGlobals_ = !0;
        } else {
          goog.evalWorksForGlobals_ = !1;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval($script$$);
      } else {
        var $doc$$ = goog.global.document, $scriptElt$$ = $doc$$.createElement("SCRIPT");
        $scriptElt$$.type = "text/javascript";
        $scriptElt$$.defer = !1;
        $scriptElt$$.appendChild($doc$$.createTextNode($script$$));
        $doc$$.body.appendChild($scriptElt$$);
        $doc$$.body.removeChild($scriptElt$$);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function $goog$getCssName$($className$jscomp$2_result$$, $opt_modifier$$) {
  if ("." == String($className$jscomp$2_result$$).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + $className$jscomp$2_result$$);
  }
  var $getMapping$$ = function $$getMapping$$$($cssName$$) {
    return goog.cssNameMapping_[$cssName$$] || $cssName$$;
  }, $rename_renameByParts$$ = function $$rename_renameByParts$$$($cssName$jscomp$1_parts$$) {
    $cssName$jscomp$1_parts$$ = $cssName$jscomp$1_parts$$.split("-");
    for (var $mapped$$ = [], $i$$ = 0; $i$$ < $cssName$jscomp$1_parts$$.length; $i$$++) {
      $mapped$$.push($getMapping$$($cssName$jscomp$1_parts$$[$i$$]));
    }
    return $mapped$$.join("-");
  };
  $rename_renameByParts$$ = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? $getMapping$$ : $rename_renameByParts$$ : function($a$$) {
    return $a$$;
  };
  $className$jscomp$2_result$$ = $opt_modifier$$ ? $className$jscomp$2_result$$ + "-" + $rename_renameByParts$$($opt_modifier$$) : $rename_renameByParts$$($className$jscomp$2_result$$);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN($className$jscomp$2_result$$) : $className$jscomp$2_result$$;
};
goog.setCssNameMapping = function $goog$setCssNameMapping$($mapping$$, $opt_style$$) {
  goog.cssNameMapping_ = $mapping$$;
  goog.cssNameMappingStyle_ = $opt_style$$;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function $goog$getMsg$($str$$, $opt_values$$) {
  $opt_values$$ && ($str$$ = $str$$.replace(/\{\$([^}]+)}/g, function($match$$, $key$$) {
    return null != $opt_values$$ && $key$$ in $opt_values$$ ? $opt_values$$[$key$$] : $match$$;
  }));
  return $str$$;
};
goog.getMsgWithFallback = function $goog$getMsgWithFallback$($a$$, $b$$) {
  return $a$$;
};
goog.exportSymbol = function $goog$exportSymbol$($publicPath$$, $object$$, $opt_objectToExportTo$$) {
  goog.exportPath_($publicPath$$, $object$$, $opt_objectToExportTo$$);
};
goog.exportProperty = function $goog$exportProperty$($object$$, $publicName$$, $symbol$$) {
  $object$$[$publicName$$] = $symbol$$;
};
goog.inherits = function $goog$inherits$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.superClass_ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.base = function $$childCtor$$$base$($me$$, $methodName$$, $var_args$$) {
    for (var $args$$ = Array(arguments.length - 2), $i$$ = 2; $i$$ < arguments.length; $i$$++) {
      $args$$[$i$$ - 2] = arguments[$i$$];
    }
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$);
  };
};
goog.base = function $goog$base$($me$$, $opt_methodName$$, $var_args$$) {
  var $caller$$ = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !$caller$$) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if ($caller$$.superClass_) {
    for (var $args$$ = Array(arguments.length - 1), $foundCaller_i$$ = 1; $foundCaller_i$$ < arguments.length; $foundCaller_i$$++) {
      $args$$[$foundCaller_i$$ - 1] = arguments[$foundCaller_i$$];
    }
    return $caller$$.superClass_.constructor.apply($me$$, $args$$);
  }
  $args$$ = Array(arguments.length - 2);
  for ($foundCaller_i$$ = 2; $foundCaller_i$$ < arguments.length; $foundCaller_i$$++) {
    $args$$[$foundCaller_i$$ - 2] = arguments[$foundCaller_i$$];
  }
  $foundCaller_i$$ = !1;
  for (var $ctor$$ = $me$$.constructor; $ctor$$; $ctor$$ = $ctor$$.superClass_ && $ctor$$.superClass_.constructor) {
    if ($ctor$$.prototype[$opt_methodName$$] === $caller$$) {
      $foundCaller_i$$ = !0;
    } else {
      if ($foundCaller_i$$) {
        return $ctor$$.prototype[$opt_methodName$$].apply($me$$, $args$$);
      }
    }
  }
  if ($me$$[$opt_methodName$$] === $caller$$) {
    return $me$$.constructor.prototype[$opt_methodName$$].apply($me$$, $args$$);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function $goog$scope$($fn$$) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a goog.module.");
  }
  $fn$$.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function $goog$defineClass$($superClass$$, $def$$) {
  var $cls_constructor$$ = $def$$.constructor, $statics$$ = $def$$.statics;
  $cls_constructor$$ && $cls_constructor$$ != Object.prototype.constructor || ($cls_constructor$$ = function $$cls_constructor$$$() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  $cls_constructor$$ = goog.defineClass.createSealingConstructor_($cls_constructor$$, $superClass$$);
  $superClass$$ && goog.inherits($cls_constructor$$, $superClass$$);
  delete $def$$.constructor;
  delete $def$$.statics;
  goog.defineClass.applyProperties_($cls_constructor$$.prototype, $def$$);
  null != $statics$$ && ($statics$$ instanceof Function ? $statics$$($cls_constructor$$) : goog.defineClass.applyProperties_($cls_constructor$$, $statics$$));
  return $cls_constructor$$;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function $goog$defineClass$createSealingConstructor_$($ctr$$, $superClass$$) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return $ctr$$;
  }
  var $superclassSealable$$ = !goog.defineClass.isUnsealable_($superClass$$), $wrappedCtr$$ = function $$wrappedCtr$$$() {
    var $instance$$ = $ctr$$.apply(this, arguments) || this;
    $instance$$[goog.UID_PROPERTY_] = $instance$$[goog.UID_PROPERTY_];
    this.constructor === $wrappedCtr$$ && $superclassSealable$$ && Object.seal instanceof Function && Object.seal($instance$$);
    return $instance$$;
  };
  return $wrappedCtr$$;
};
goog.defineClass.isUnsealable_ = function $goog$defineClass$isUnsealable_$($ctr$$) {
  return $ctr$$ && $ctr$$.prototype && $ctr$$.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function $goog$defineClass$applyProperties_$($target$$, $source$$) {
  for (var $key$$ in $source$$) {
    Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
  for (var $i$$ = 0; $i$$ < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; $i$$++) {
    $key$$ = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[$i$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
  }
};
goog.tagUnsealableClass = function $goog$tagUnsealableClass$($ctr$$) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && ($ctr$$.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.createRequiresTranspilation_ = function $goog$createRequiresTranspilation_$() {
  function $addNewerLanguageTranspilationCheck$$($modeName$$, $isSupported$$) {
    $transpilationRequiredForAllLaterModes$$ ? $requiresTranspilation$$[$modeName$$] = !0 : $isSupported$$() ? $requiresTranspilation$$[$modeName$$] = !1 : $transpilationRequiredForAllLaterModes$$ = $requiresTranspilation$$[$modeName$$] = !0;
  }
  function $evalCheck$$($code$$) {
    try {
      return !!eval($code$$);
    } catch ($ignored$$) {
      return !1;
    }
  }
  var $requiresTranspilation$$ = {es3:!1}, $transpilationRequiredForAllLaterModes$$ = !1, $userAgent$$ = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
  $addNewerLanguageTranspilationCheck$$("es5", function() {
    return $evalCheck$$("[1,].length==1");
  });
  $addNewerLanguageTranspilationCheck$$("es6", function() {
    var $edgeUserAgent$$ = $userAgent$$.match(/Edge\/(\d+)(\.\d)*/i);
    return $edgeUserAgent$$ && 15 > Number($edgeUserAgent$$[1]) ? !1 : $evalCheck$$('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  $addNewerLanguageTranspilationCheck$$("es6-impl", function() {
    return !0;
  });
  $addNewerLanguageTranspilationCheck$$("es7", function() {
    return $evalCheck$$("2 ** 2 == 4");
  });
  $addNewerLanguageTranspilationCheck$$("es8", function() {
    return $evalCheck$$("async () => 1, true");
  });
  return $requiresTranspilation$$;
};
goog.disposable = {};
goog.disposable.IDisposable = function $goog$disposable$IDisposable$() {
};
goog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;
goog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;
goog.Disposable = function $goog$Disposable$() {
  goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && (goog.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack), goog.Disposable.instances_[goog.getUid(this)] = this);
  this.disposed_ = this.disposed_;
  this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
};
goog.Disposable.MonitoringMode = {OFF:0, PERMANENT:1, INTERACTIVE:2};
goog.Disposable.MONITORING_MODE = 0;
goog.Disposable.INCLUDE_STACK_ON_CREATION = !0;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function $goog$Disposable$getUndisposedObjects$() {
  var $ret$$ = [], $id$$;
  for ($id$$ in goog.Disposable.instances_) {
    goog.Disposable.instances_.hasOwnProperty($id$$) && $ret$$.push(goog.Disposable.instances_[Number($id$$)]);
  }
  return $ret$$;
};
goog.Disposable.clearUndisposedObjects = function $goog$Disposable$clearUndisposedObjects$() {
  goog.Disposable.instances_ = {};
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function $goog$Disposable$$isDisposed$() {
  return this.disposed_;
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function $goog$Disposable$$dispose$() {
  if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF)) {
    var $uid$$ = goog.getUid(this);
    if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty($uid$$)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete goog.Disposable.instances_[$uid$$];
  }
};
goog.Disposable.prototype.registerDisposable = function $goog$Disposable$$registerDisposable$($disposable$$) {
  this.addOnDisposeCallback(goog.partial(goog.dispose, $disposable$$));
};
goog.Disposable.prototype.addOnDisposeCallback = function $goog$Disposable$$addOnDisposeCallback$($callback$$, $opt_scope$$) {
  this.disposed_ ? goog.isDef($opt_scope$$) ? $callback$$.call($opt_scope$$) : $callback$$() : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(goog.isDef($opt_scope$$) ? goog.bind($callback$$, $opt_scope$$) : $callback$$));
};
goog.Disposable.prototype.disposeInternal = function $goog$Disposable$$disposeInternal$() {
  if (this.onDisposeCallbacks_) {
    for (; this.onDisposeCallbacks_.length;) {
      this.onDisposeCallbacks_.shift()();
    }
  }
};
goog.Disposable.isDisposed = function $goog$Disposable$isDisposed$($obj$$) {
  return $obj$$ && "function" == typeof $obj$$.isDisposed ? $obj$$.isDisposed() : !1;
};
goog.dispose = function $goog$dispose$($obj$$) {
  $obj$$ && "function" == typeof $obj$$.dispose && $obj$$.dispose();
};
goog.disposeAll = function $goog$disposeAll$($var_args$$) {
  for (var $i$$ = 0, $len$$ = arguments.length; $i$$ < $len$$; ++$i$$) {
    var $disposable$$ = arguments[$i$$];
    goog.isArrayLike($disposable$$) ? goog.disposeAll.apply(null, $disposable$$) : goog.dispose($disposable$$);
  }
};
goog.Thenable = function $goog$Thenable$() {
};
goog.Thenable.prototype.then = function $goog$Thenable$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
};
goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
goog.Thenable.addImplementation = function $goog$Thenable$addImplementation$($ctor$$) {
  $ctor$$.prototype.then = $ctor$$.prototype.then;
  COMPILED ? $ctor$$.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = !0 : $ctor$$.prototype.$goog_Thenable = !0;
};
goog.Thenable.isImplementedBy = function $goog$Thenable$isImplementedBy$($object$$) {
  if (!$object$$) {
    return !1;
  }
  try {
    return COMPILED ? !!$object$$[goog.Thenable.IMPLEMENTED_BY_PROP] : !!$object$$.$goog_Thenable;
  } catch ($e$$) {
    return !1;
  }
};
goog.debug = {};
goog.debug.Error = function $goog$debug$Error$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
  this.reportErrorToServer = !0;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function $goog$string$startsWith$($str$$, $prefix$$) {
  return 0 == $str$$.lastIndexOf($prefix$$, 0);
};
goog.string.endsWith = function $goog$string$endsWith$($str$$, $suffix$$) {
  var $l$$ = $str$$.length - $suffix$$.length;
  return 0 <= $l$$ && $str$$.indexOf($suffix$$, $l$$) == $l$$;
};
goog.string.caseInsensitiveStartsWith = function $goog$string$caseInsensitiveStartsWith$($str$$, $prefix$$) {
  return 0 == goog.string.caseInsensitiveCompare($prefix$$, $str$$.substr(0, $prefix$$.length));
};
goog.string.caseInsensitiveEndsWith = function $goog$string$caseInsensitiveEndsWith$($str$$, $suffix$$) {
  return 0 == goog.string.caseInsensitiveCompare($suffix$$, $str$$.substr($str$$.length - $suffix$$.length, $suffix$$.length));
};
goog.string.caseInsensitiveEquals = function $goog$string$caseInsensitiveEquals$($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
};
goog.string.subs = function $goog$string$subs$($str$$, $var_args$$) {
  for (var $splitParts$$ = $str$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
};
goog.string.collapseWhitespace = function $goog$string$collapseWhitespace$($str$$) {
  return $str$$.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function $goog$string$isEmptyOrWhitespace$($str$$) {
  return /^[\s\xa0]*$/.test($str$$);
};
goog.string.isEmptyString = function $goog$string$isEmptyString$($str$$) {
  return 0 == $str$$.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function $goog$string$isEmptyOrWhitespaceSafe$($str$$) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe($str$$));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function $goog$string$isBreakingWhitespace$($str$$) {
  return !/[^\t\n\r ]/.test($str$$);
};
goog.string.isAlpha = function $goog$string$isAlpha$($str$$) {
  return !/[^a-zA-Z]/.test($str$$);
};
goog.string.isNumeric = function $goog$string$isNumeric$($str$$) {
  return !/[^0-9]/.test($str$$);
};
goog.string.isAlphaNumeric = function $goog$string$isAlphaNumeric$($str$$) {
  return !/[^a-zA-Z0-9]/.test($str$$);
};
goog.string.isSpace = function $goog$string$isSpace$($ch$$) {
  return " " == $ch$$;
};
goog.string.isUnicodeChar = function $goog$string$isUnicodeChar$($ch$$) {
  return 1 == $ch$$.length && " " <= $ch$$ && "~" >= $ch$$ || "\u0080" <= $ch$$ && "\ufffd" >= $ch$$;
};
goog.string.stripNewlines = function $goog$string$stripNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function $goog$string$canonicalizeNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function $goog$string$normalizeWhitespace$($str$$) {
  return $str$$.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function $goog$string$normalizeSpaces$($str$$) {
  return $str$$.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function $goog$string$collapseBreakingSpaces$($str$$) {
  return $str$$.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function($str$$) {
  return $str$$.trim();
} : function($str$$) {
  return $str$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function $goog$string$trimLeft$($str$$) {
  return $str$$.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function $goog$string$trimRight$($str$$) {
  return $str$$.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function $goog$string$caseInsensitiveCompare$($str1$$, $str2$$) {
  $str1$$ = String($str1$$).toLowerCase();
  $str2$$ = String($str2$$).toLowerCase();
  return $str1$$ < $str2$$ ? -1 : $str1$$ == $str2$$ ? 0 : 1;
};
goog.string.numberAwareCompare_ = function $goog$string$numberAwareCompare_$($num1_str1$$, $num2_str2$$, $a$$) {
  if ($num1_str1$$ == $num2_str2$$) {
    return 0;
  }
  if (!$num1_str1$$) {
    return -1;
  }
  if (!$num2_str2$$) {
    return 1;
  }
  for (var $tokens1$$ = $num1_str1$$.toLowerCase().match($a$$), $tokens2$$ = $num2_str2$$.toLowerCase().match($a$$), $count$$ = Math.min($tokens1$$.length, $tokens2$$.length), $i$$ = 0; $i$$ < $count$$; $i$$++) {
    $a$$ = $tokens1$$[$i$$];
    var $b$$ = $tokens2$$[$i$$];
    if ($a$$ != $b$$) {
      return $num1_str1$$ = parseInt($a$$, 10), !isNaN($num1_str1$$) && ($num2_str2$$ = parseInt($b$$, 10), !isNaN($num2_str2$$) && $num1_str1$$ - $num2_str2$$) ? $num1_str1$$ - $num2_str2$$ : $a$$ < $b$$ ? -1 : 1;
    }
  }
  return $tokens1$$.length != $tokens2$$.length ? $tokens1$$.length - $tokens2$$.length : $num1_str1$$ < $num2_str2$$ ? -1 : 1;
};
goog.string.intAwareCompare = function $goog$string$intAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function $goog$string$floatAwareCompare$($str1$$, $str2$$) {
  return goog.string.numberAwareCompare_($str1$$, $str2$$, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function $goog$string$urlEncode$($str$$) {
  return encodeURIComponent(String($str$$));
};
goog.string.urlDecode = function $goog$string$urlDecode$($str$$) {
  return decodeURIComponent($str$$.replace(/\+/g, " "));
};
goog.string.newLineToBr = function $goog$string$newLineToBr$($str$$, $opt_xml$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, $opt_xml$$ ? "<br />" : "<br>");
};
goog.string.htmlEscape = function $goog$string$htmlEscape$($str$$, $opt_isLikelyToContainHtmlChars$$) {
  if ($opt_isLikelyToContainHtmlChars$$) {
    $str$$ = $str$$.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && ($str$$ = $str$$.replace(goog.string.E_RE_, "&#101;"));
  } else {
    if (!goog.string.ALL_RE_.test($str$$)) {
      return $str$$;
    }
    -1 != $str$$.indexOf("&") && ($str$$ = $str$$.replace(goog.string.AMP_RE_, "&amp;"));
    -1 != $str$$.indexOf("<") && ($str$$ = $str$$.replace(goog.string.LT_RE_, "&lt;"));
    -1 != $str$$.indexOf(">") && ($str$$ = $str$$.replace(goog.string.GT_RE_, "&gt;"));
    -1 != $str$$.indexOf('"') && ($str$$ = $str$$.replace(goog.string.QUOT_RE_, "&quot;"));
    -1 != $str$$.indexOf("'") && ($str$$ = $str$$.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != $str$$.indexOf("\x00") && ($str$$ = $str$$.replace(goog.string.NULL_RE_, "&#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != $str$$.indexOf("e") && ($str$$ = $str$$.replace(goog.string.E_RE_, "&#101;"));
  }
  return $str$$;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function $goog$string$unescapeEntities$($str$$) {
  return goog.string.contains($str$$, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_($str$$) : goog.string.unescapePureXmlEntities_($str$$) : $str$$;
};
goog.string.unescapeEntitiesWithDocument = function $goog$string$unescapeEntitiesWithDocument$($str$$, $document$$) {
  return goog.string.contains($str$$, "&") ? goog.string.unescapeEntitiesUsingDom_($str$$, $document$$) : $str$$;
};
goog.string.unescapeEntitiesUsingDom_ = function $goog$string$unescapeEntitiesUsingDom_$($str$$, $opt_document$$) {
  var $seen$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var $div$$ = $opt_document$$ ? $opt_document$$.createElement("div") : goog.global.document.createElement("div");
  return $str$$.replace(goog.string.HTML_ENTITY_PATTERN_, function($s$$, $entity_n$$) {
    var $value$$ = $seen$$[$s$$];
    if ($value$$) {
      return $value$$;
    }
    "#" == $entity_n$$.charAt(0) && ($entity_n$$ = Number("0" + $entity_n$$.substr(1)), isNaN($entity_n$$) || ($value$$ = String.fromCharCode($entity_n$$)));
    $value$$ || ($div$$.innerHTML = $s$$ + " ", $value$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$s$$] = $value$$;
  });
};
goog.string.unescapePureXmlEntities_ = function $goog$string$unescapePureXmlEntities_$($str$$) {
  return $str$$.replace(/&([^;]+);/g, function($s$$, $entity$jscomp$1_n$$) {
    switch($entity$jscomp$1_n$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != $entity$jscomp$1_n$$.charAt(0) || ($entity$jscomp$1_n$$ = Number("0" + $entity$jscomp$1_n$$.substr(1)), isNaN($entity$jscomp$1_n$$)) ? $s$$ : String.fromCharCode($entity$jscomp$1_n$$);
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function $goog$string$whitespaceEscape$($str$$, $opt_xml$$) {
  return goog.string.newLineToBr($str$$.replace(/  /g, " &#160;"), $opt_xml$$);
};
goog.string.preserveSpaces = function $goog$string$preserveSpaces$($str$$) {
  return $str$$.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function $goog$string$stripQuotes$($str$$, $quoteChars$$) {
  for (var $length$$ = $quoteChars$$.length, $i$$ = 0; $i$$ < $length$$; $i$$++) {
    var $quoteChar$$ = 1 == $length$$ ? $quoteChars$$ : $quoteChars$$.charAt($i$$);
    if ($str$$.charAt(0) == $quoteChar$$ && $str$$.charAt($str$$.length - 1) == $quoteChar$$) {
      return $str$$.substring(1, $str$$.length - 1);
    }
  }
  return $str$$;
};
goog.string.truncate = function $goog$string$truncate$($str$$, $chars$$, $opt_protectEscapedCharacters$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  $str$$.length > $chars$$ && ($str$$ = $str$$.substring(0, $chars$$ - 3) + "...");
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.truncateMiddle = function $goog$string$truncateMiddle$($str$$, $chars$$, $opt_protectEscapedCharacters$$, $half_opt_trailingChars$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  if ($half_opt_trailingChars$$ && $str$$.length > $chars$$) {
    $half_opt_trailingChars$$ > $chars$$ && ($half_opt_trailingChars$$ = $chars$$);
    var $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$;
    $str$$ = $str$$.substring(0, $chars$$ - $half_opt_trailingChars$$) + "..." + $str$$.substring($endPoint_endPos$$);
  } else {
    $str$$.length > $chars$$ && ($half_opt_trailingChars$$ = Math.floor($chars$$ / 2), $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$, $str$$ = $str$$.substring(0, $half_opt_trailingChars$$ + $chars$$ % 2) + "..." + $str$$.substring($endPoint_endPos$$));
  }
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function $goog$string$quote$($s$$) {
  $s$$ = String($s$$);
  for (var $sb$$ = ['"'], $i$$ = 0; $i$$ < $s$$.length; $i$$++) {
    var $ch$$ = $s$$.charAt($i$$), $cc$$ = $ch$$.charCodeAt(0);
    $sb$$[$i$$ + 1] = goog.string.specialEscapeChars_[$ch$$] || (31 < $cc$$ && 127 > $cc$$ ? $ch$$ : goog.string.escapeChar($ch$$));
  }
  $sb$$.push('"');
  return $sb$$.join("");
};
goog.string.escapeString = function $goog$string$escapeString$($str$$) {
  for (var $sb$$ = [], $i$$ = 0; $i$$ < $str$$.length; $i$$++) {
    $sb$$[$i$$] = goog.string.escapeChar($str$$.charAt($i$$));
  }
  return $sb$$.join("");
};
goog.string.escapeChar = function $goog$string$escapeChar$($c$$) {
  if ($c$$ in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[$c$$];
  }
  if ($c$$ in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[$c$$] = goog.string.specialEscapeChars_[$c$$];
  }
  var $cc$$ = $c$$.charCodeAt(0);
  if (31 < $cc$$ && 127 > $cc$$) {
    var $rv$$ = $c$$;
  } else {
    if (256 > $cc$$) {
      if ($rv$$ = "\\x", 16 > $cc$$ || 256 < $cc$$) {
        $rv$$ += "0";
      }
    } else {
      $rv$$ = "\\u", 4096 > $cc$$ && ($rv$$ += "0");
    }
    $rv$$ += $cc$$.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[$c$$] = $rv$$;
};
goog.string.contains = function $goog$string$contains$($str$$, $subString$$) {
  return -1 != $str$$.indexOf($subString$$);
};
goog.string.caseInsensitiveContains = function $goog$string$caseInsensitiveContains$($str$$, $subString$$) {
  return goog.string.contains($str$$.toLowerCase(), $subString$$.toLowerCase());
};
goog.string.countOf = function $goog$string$countOf$($s$$, $ss$$) {
  return $s$$ && $ss$$ ? $s$$.split($ss$$).length - 1 : 0;
};
goog.string.removeAt = function $goog$string$removeAt$($s$$, $index$$, $stringLength$$) {
  var $resultStr$$ = $s$$;
  0 <= $index$$ && $index$$ < $s$$.length && 0 < $stringLength$$ && ($resultStr$$ = $s$$.substr(0, $index$$) + $s$$.substr($index$$ + $stringLength$$, $s$$.length - $index$$ - $stringLength$$));
  return $resultStr$$;
};
goog.string.remove = function $goog$string$remove$($str$$, $substr$$) {
  return $str$$.replace($substr$$, "");
};
goog.string.removeAll = function $goog$string$removeAll$($s$$, $re$jscomp$1_ss$$) {
  $re$jscomp$1_ss$$ = new RegExp(goog.string.regExpEscape($re$jscomp$1_ss$$), "g");
  return $s$$.replace($re$jscomp$1_ss$$, "");
};
goog.string.replaceAll = function $goog$string$replaceAll$($s$$, $re$jscomp$2_ss$$, $replacement$$) {
  $re$jscomp$2_ss$$ = new RegExp(goog.string.regExpEscape($re$jscomp$2_ss$$), "g");
  return $s$$.replace($re$jscomp$2_ss$$, $replacement$$.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function $goog$string$regExpEscape$($s$$) {
  return String($s$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function($string$$, $length$$) {
  return $string$$.repeat($length$$);
} : function($string$$, $length$$) {
  return Array($length$$ + 1).join($string$$);
};
goog.string.padNumber = function $goog$string$padNumber$($num$jscomp$5_s$$, $length$$, $index$jscomp$44_opt_precision$$) {
  $num$jscomp$5_s$$ = goog.isDef($index$jscomp$44_opt_precision$$) ? $num$jscomp$5_s$$.toFixed($index$jscomp$44_opt_precision$$) : String($num$jscomp$5_s$$);
  $index$jscomp$44_opt_precision$$ = $num$jscomp$5_s$$.indexOf(".");
  -1 == $index$jscomp$44_opt_precision$$ && ($index$jscomp$44_opt_precision$$ = $num$jscomp$5_s$$.length);
  return goog.string.repeat("0", Math.max(0, $length$$ - $index$jscomp$44_opt_precision$$)) + $num$jscomp$5_s$$;
};
goog.string.makeSafe = function $goog$string$makeSafe$($obj$$) {
  return null == $obj$$ ? "" : String($obj$$);
};
goog.string.buildString = function $goog$string$buildString$($var_args$$) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function $goog$string$getRandomString$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function $goog$string$compareVersions$($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order_v1CompNum$$ = 0;
  $v1Subs_version1$$ = goog.string.trim(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = goog.string.trim(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0; 0 == $order_v1CompNum$$ && $subIdx$$ < $subCount$$; $subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order_v1CompNum$$ = 0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10);
      var $v2CompNum$$ = 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10);
      $order_v1CompNum$$ = goog.string.compareElements_($order_v1CompNum$$, $v2CompNum$$) || goog.string.compareElements_(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || goog.string.compareElements_($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order_v1CompNum$$);
  }
  return $order_v1CompNum$$;
};
goog.string.compareElements_ = function $goog$string$compareElements_$($left$$, $right$$) {
  return $left$$ < $right$$ ? -1 : $left$$ > $right$$ ? 1 : 0;
};
goog.string.hashCode = function $goog$string$hashCode$($str$$) {
  for (var $result$$ = 0, $i$$ = 0; $i$$ < $str$$.length; ++$i$$) {
    $result$$ = 31 * $result$$ + $str$$.charCodeAt($i$$) >>> 0;
  }
  return $result$$;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function $goog$string$createUniqueString$() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function $goog$string$toNumber$($str$$) {
  var $num$$ = Number($str$$);
  return 0 == $num$$ && goog.string.isEmptyOrWhitespace($str$$) ? NaN : $num$$;
};
goog.string.isLowerCamelCase = function $goog$string$isLowerCamelCase$($str$$) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test($str$$);
};
goog.string.isUpperCamelCase = function $goog$string$isUpperCamelCase$($str$$) {
  return /^([A-Z][a-z]*)+$/.test($str$$);
};
goog.string.toCamelCase = function $goog$string$toCamelCase$($str$$) {
  return String($str$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase();
  });
};
goog.string.toSelectorCase = function $goog$string$toSelectorCase$($str$$) {
  return String($str$$).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function $goog$string$toTitleCase$($str$$, $delimiters_opt_delimiters$$) {
  $delimiters_opt_delimiters$$ = goog.isString($delimiters_opt_delimiters$$) ? goog.string.regExpEscape($delimiters_opt_delimiters$$) : "\\s";
  return $str$$.replace(new RegExp("(^" + ($delimiters_opt_delimiters$$ ? "|[" + $delimiters_opt_delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
};
goog.string.capitalize = function $goog$string$capitalize$($str$$) {
  return String($str$$.charAt(0)).toUpperCase() + String($str$$.substr(1)).toLowerCase();
};
goog.string.parseInt = function $goog$string$parseInt$($value$$) {
  isFinite($value$$) && ($value$$ = String($value$$));
  return goog.isString($value$$) ? /^\s*-?0x/i.test($value$$) ? parseInt($value$$, 16) : parseInt($value$$, 10) : NaN;
};
goog.string.splitLimit = function $goog$string$splitLimit$($parts$jscomp$3_str$$, $separator$$, $limit$$) {
  $parts$jscomp$3_str$$ = $parts$jscomp$3_str$$.split($separator$$);
  for (var $returnVal$$ = []; 0 < $limit$$ && $parts$jscomp$3_str$$.length;) {
    $returnVal$$.push($parts$jscomp$3_str$$.shift()), $limit$$--;
  }
  $parts$jscomp$3_str$$.length && $returnVal$$.push($parts$jscomp$3_str$$.join($separator$$));
  return $returnVal$$;
};
goog.string.lastComponent = function $goog$string$lastComponent$($str$$, $separators$$) {
  if ($separators$$) {
    "string" == typeof $separators$$ && ($separators$$ = [$separators$$]);
  } else {
    return $str$$;
  }
  for (var $lastSeparatorIndex$$ = -1, $i$$ = 0; $i$$ < $separators$$.length; $i$$++) {
    if ("" != $separators$$[$i$$]) {
      var $currentSeparatorIndex$$ = $str$$.lastIndexOf($separators$$[$i$$]);
      $currentSeparatorIndex$$ > $lastSeparatorIndex$$ && ($lastSeparatorIndex$$ = $currentSeparatorIndex$$);
    }
  }
  return -1 == $lastSeparatorIndex$$ ? $str$$ : $str$$.slice($lastSeparatorIndex$$ + 1);
};
goog.string.editDistance = function $goog$string$editDistance$($a$$, $b$$) {
  var $v0$$ = [], $v1$$ = [];
  if ($a$$ == $b$$) {
    return 0;
  }
  if (!$a$$.length || !$b$$.length) {
    return Math.max($a$$.length, $b$$.length);
  }
  for (var $i$$ = 0; $i$$ < $b$$.length + 1; $i$$++) {
    $v0$$[$i$$] = $i$$;
  }
  for ($i$$ = 0; $i$$ < $a$$.length; $i$$++) {
    $v1$$[0] = $i$$ + 1;
    for (var $j$$ = 0; $j$$ < $b$$.length; $j$$++) {
      $v1$$[$j$$ + 1] = Math.min($v1$$[$j$$] + 1, $v0$$[$j$$ + 1] + 1, $v0$$[$j$$] + Number($a$$[$i$$] != $b$$[$j$$]));
    }
    for ($j$$ = 0; $j$$ < $v0$$.length; $j$$++) {
      $v0$$[$j$$] = $v1$$[$j$$];
    }
  }
  return $v1$$[$b$$.length];
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function $goog$asserts$AssertionError$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  goog.debug.Error.call(this, goog.string.subs.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
  this.messagePattern = $messagePattern$$;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function $goog$asserts$DEFAULT_ERROR_HANDLER$($e$$) {
  throw $e$$;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function $goog$asserts$doAssertFailure_$($defaultMessage_e$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$$ += ": " + $givenMessage$$;
    var $args$$ = $givenArgs$$;
  } else {
    $defaultMessage_e$$ && ($message$$ += ": " + $defaultMessage_e$$, $args$$ = $defaultArgs$$);
  }
  $defaultMessage_e$$ = new goog.asserts.AssertionError("" + $message$$, $args$$ || []);
  goog.asserts.errorHandler_($defaultMessage_e$$);
};
goog.asserts.setErrorHandler = function $goog$asserts$setErrorHandler$($errorHandler$$) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = $errorHandler$$);
};
goog.asserts.assert = function $goog$asserts$assert$($condition$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !$condition$$ && goog.asserts.doAssertFailure_("", null, $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $condition$$;
};
goog.asserts.fail = function $goog$asserts$fail$($opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + ($opt_message$$ ? ": " + $opt_message$$ : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function $goog$asserts$assertNumber$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber($value$$) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertString = function $goog$asserts$assertString$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString($value$$) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertFunction = function $goog$asserts$assertFunction$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction($value$$) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertObject = function $goog$asserts$assertObject$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject($value$$) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertArray = function $goog$asserts$assertArray$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray($value$$) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertBoolean = function $goog$asserts$assertBoolean$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean($value$$) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertElement = function $goog$asserts$assertElement$($value$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject($value$$) && $value$$.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$;
};
goog.asserts.assertInstanceof = function $goog$asserts$assertInstanceof$($value$$, $type$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || $value$$ instanceof $type$$ || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_($type$$), goog.asserts.getType_($value$$)], $opt_message$$, Array.prototype.slice.call(arguments, 3));
  return $value$$;
};
goog.asserts.assertObjectPrototypeIsIntact = function $goog$asserts$assertObjectPrototypeIsIntact$() {
  for (var $key$$ in Object.prototype) {
    goog.asserts.fail($key$$ + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function $goog$asserts$getType_$($value$$) {
  return $value$$ instanceof Function ? $value$$.displayName || $value$$.name || "unknown type name" : $value$$ instanceof Object ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : null === $value$$ ? "null" : typeof $value$$;
};
goog.async = {};
goog.async.FreeList = function $goog$async$FreeList$($create$$, $reset$$, $limit$$) {
  this.limit_ = $limit$$;
  this.create_ = $create$$;
  this.reset_ = $reset$$;
  this.occupants_ = 0;
  this.head_ = null;
};
goog.async.FreeList.prototype.get = function $goog$async$FreeList$$get$() {
  if (0 < this.occupants_) {
    this.occupants_--;
    var $item$$ = this.head_;
    this.head_ = $item$$.next;
    $item$$.next = null;
  } else {
    $item$$ = this.create_();
  }
  return $item$$;
};
goog.async.FreeList.prototype.put = function $goog$async$FreeList$$put$($item$$) {
  this.reset_($item$$);
  this.occupants_ < this.limit_ && (this.occupants_++, $item$$.next = this.head_, this.head_ = $item$$);
};
goog.async.FreeList.prototype.occupants = function $goog$async$FreeList$$occupants$() {
  return this.occupants_;
};
goog.async.WorkQueue = function $goog$async$WorkQueue$() {
  this.workTail_ = this.workHead_ = null;
};
goog.async.WorkQueue.DEFAULT_MAX_UNUSED = 100;
goog.async.WorkQueue.freelist_ = new goog.async.FreeList(function() {
  return new goog.async.WorkItem;
}, function($item$$) {
  $item$$.reset();
}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);
goog.async.WorkQueue.prototype.add = function $goog$async$WorkQueue$$add$($fn$$, $scope$$) {
  var $item$$ = this.getUnusedItem_();
  $item$$.set($fn$$, $scope$$);
  this.workTail_ ? this.workTail_.next = $item$$ : (goog.asserts.assert(!this.workHead_), this.workHead_ = $item$$);
  this.workTail_ = $item$$;
};
goog.async.WorkQueue.prototype.remove = function $goog$async$WorkQueue$$remove$() {
  var $item$$ = null;
  this.workHead_ && ($item$$ = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), $item$$.next = null);
  return $item$$;
};
goog.async.WorkQueue.prototype.returnUnused = function $goog$async$WorkQueue$$returnUnused$($item$$) {
  goog.async.WorkQueue.freelist_.put($item$$);
};
goog.async.WorkQueue.prototype.getUnusedItem_ = function $goog$async$WorkQueue$$getUnusedItem_$() {
  return goog.async.WorkQueue.freelist_.get();
};
goog.async.WorkItem = function $goog$async$WorkItem$() {
  this.next = this.scope = this.fn = null;
};
goog.async.WorkItem.prototype.set = function $goog$async$WorkItem$$set$($fn$$, $scope$$) {
  this.fn = $fn$$;
  this.scope = $scope$$;
  this.next = null;
};
goog.async.WorkItem.prototype.reset = function $goog$async$WorkItem$$reset$() {
  this.next = this.scope = this.fn = null;
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function $goog$debug$EntryPointMonitor$() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = !1;
goog.debug.entryPointRegistry.register = function $goog$debug$entryPointRegistry$register$($callback$$) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = $callback$$;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    for (var $monitors$$ = goog.debug.entryPointRegistry.monitors_, $i$$ = 0; $i$$ < $monitors$$.length; $i$$++) {
      $callback$$(goog.bind($monitors$$[$i$$].wrap, $monitors$$[$i$$]));
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function $goog$debug$entryPointRegistry$monitorAll$($monitor$$) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
  for (var $transformer$$ = goog.bind($monitor$$.wrap, $monitor$$), $i$$ = 0; $i$$ < goog.debug.entryPointRegistry.refList_.length; $i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($transformer$$);
  }
  goog.debug.entryPointRegistry.monitors_.push($monitor$$);
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function $goog$debug$entryPointRegistry$unmonitorAllIfPossible$($monitor$jscomp$1_transformer$$) {
  var $monitors$$ = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert($monitor$jscomp$1_transformer$$ == $monitors$$[$monitors$$.length - 1], "Only the most recent monitor can be unwrapped.");
  $monitor$jscomp$1_transformer$$ = goog.bind($monitor$jscomp$1_transformer$$.unwrap, $monitor$jscomp$1_transformer$$);
  for (var $i$$ = 0; $i$$ < goog.debug.entryPointRegistry.refList_.length; $i$$++) {
    goog.debug.entryPointRegistry.refList_[$i$$]($monitor$jscomp$1_transformer$$);
  }
  $monitors$$.length--;
};
goog.dom.HtmlElement = function $goog$dom$HtmlElement$() {
};
goog.dom.TagName = function $goog$dom$TagName$($tagName$$) {
  this.tagName_ = $tagName$$;
};
goog.dom.TagName.prototype.toString = function $goog$dom$TagName$$toString$() {
  return this.tagName_;
};
goog.dom.TagName.A = new goog.dom.TagName("A");
goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
goog.dom.TagName.B = new goog.dom.TagName("B");
goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
goog.dom.TagName.BR = new goog.dom.TagName("BR");
goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
goog.dom.TagName.COL = new goog.dom.TagName("COL");
goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
goog.dom.TagName.DD = new goog.dom.TagName("DD");
goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
goog.dom.TagName.DL = new goog.dom.TagName("DL");
goog.dom.TagName.DT = new goog.dom.TagName("DT");
goog.dom.TagName.EM = new goog.dom.TagName("EM");
goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
goog.dom.TagName.H1 = new goog.dom.TagName("H1");
goog.dom.TagName.H2 = new goog.dom.TagName("H2");
goog.dom.TagName.H3 = new goog.dom.TagName("H3");
goog.dom.TagName.H4 = new goog.dom.TagName("H4");
goog.dom.TagName.H5 = new goog.dom.TagName("H5");
goog.dom.TagName.H6 = new goog.dom.TagName("H6");
goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
goog.dom.TagName.HR = new goog.dom.TagName("HR");
goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
goog.dom.TagName.I = new goog.dom.TagName("I");
goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
goog.dom.TagName.INS = new goog.dom.TagName("INS");
goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
goog.dom.TagName.LI = new goog.dom.TagName("LI");
goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
goog.dom.TagName.META = new goog.dom.TagName("META");
goog.dom.TagName.METER = new goog.dom.TagName("METER");
goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
goog.dom.TagName.OL = new goog.dom.TagName("OL");
goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
goog.dom.TagName.P = new goog.dom.TagName("P");
goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
goog.dom.TagName.Q = new goog.dom.TagName("Q");
goog.dom.TagName.RP = new goog.dom.TagName("RP");
goog.dom.TagName.RT = new goog.dom.TagName("RT");
goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
goog.dom.TagName.S = new goog.dom.TagName("S");
goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
goog.dom.TagName.TD = new goog.dom.TagName("TD");
goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
goog.dom.TagName.TH = new goog.dom.TagName("TH");
goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
goog.dom.TagName.TR = new goog.dom.TagName("TR");
goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
goog.dom.TagName.TT = new goog.dom.TagName("TT");
goog.dom.TagName.U = new goog.dom.TagName("U");
goog.dom.TagName.UL = new goog.dom.TagName("UL");
goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
goog.functions = {};
goog.functions.constant = function $goog$functions$constant$($retValue$$) {
  return function() {
    return $retValue$$;
  };
};
goog.functions.FALSE = goog.functions.constant(!1);
goog.functions.TRUE = goog.functions.constant(!0);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function $goog$functions$identity$($opt_returnValue$$, $var_args$$) {
  return $opt_returnValue$$;
};
goog.functions.error = function $goog$functions$error$($message$$) {
  return function() {
    throw Error($message$$);
  };
};
goog.functions.fail = function $goog$functions$fail$($err$$) {
  return function() {
    throw $err$$;
  };
};
goog.functions.lock = function $goog$functions$lock$($f$$, $opt_numArgs$$) {
  $opt_numArgs$$ = $opt_numArgs$$ || 0;
  return function() {
    return $f$$.apply(this, Array.prototype.slice.call(arguments, 0, $opt_numArgs$$));
  };
};
goog.functions.nth = function $goog$functions$nth$($n$$) {
  return function() {
    return arguments[$n$$];
  };
};
goog.functions.partialRight = function $goog$functions$partialRight$($fn$$, $var_args$$) {
  var $rightArgs$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$ = Array.prototype.slice.call(arguments);
    $newArgs$$.push.apply($newArgs$$, $rightArgs$$);
    return $fn$$.apply(this, $newArgs$$);
  };
};
goog.functions.withReturnValue = function $goog$functions$withReturnValue$($f$$, $retValue$$) {
  return goog.functions.sequence($f$$, goog.functions.constant($retValue$$));
};
goog.functions.equalTo = function $goog$functions$equalTo$($value$$, $opt_useLooseComparison$$) {
  return function($other$$) {
    return $opt_useLooseComparison$$ ? $value$$ == $other$$ : $value$$ === $other$$;
  };
};
goog.functions.compose = function $goog$functions$compose$($fn$$, $var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    var $result$$;
    $length$$ && ($result$$ = $functions$$[$length$$ - 1].apply(this, arguments));
    for (var $i$$ = $length$$ - 2; 0 <= $i$$; $i$$--) {
      $result$$ = $functions$$[$i$$].call(this, $result$$);
    }
    return $result$$;
  };
};
goog.functions.sequence = function $goog$functions$sequence$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $result$$, $i$$ = 0; $i$$ < $length$$; $i$$++) {
      $result$$ = $functions$$[$i$$].apply(this, arguments);
    }
    return $result$$;
  };
};
goog.functions.and = function $goog$functions$and$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0; $i$$ < $length$$; $i$$++) {
      if (!$functions$$[$i$$].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
goog.functions.or = function $goog$functions$or$($var_args$$) {
  var $functions$$ = arguments, $length$$ = $functions$$.length;
  return function() {
    for (var $i$$ = 0; $i$$ < $length$$; $i$$++) {
      if ($functions$$[$i$$].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
goog.functions.not = function $goog$functions$not$($f$$) {
  return function() {
    return !$f$$.apply(this, arguments);
  };
};
goog.functions.create = function $goog$functions$create$($constructor$$, $var_args$$) {
  var $obj$$ = function $$obj$$$() {
  };
  $obj$$.prototype = $constructor$$.prototype;
  $obj$$ = new $obj$$;
  $constructor$$.apply($obj$$, Array.prototype.slice.call(arguments, 1));
  return $obj$$;
};
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function $goog$functions$cacheReturnValue$($fn$$) {
  var $called$$ = !1, $value$$;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return $fn$$();
    }
    $called$$ || ($value$$ = $fn$$(), $called$$ = !0);
    return $value$$;
  };
};
goog.functions.once = function $goog$functions$once$($f$$) {
  var $inner$$ = $f$$;
  return function() {
    if ($inner$$) {
      var $tmp$$ = $inner$$;
      $inner$$ = null;
      $tmp$$();
    }
  };
};
goog.functions.debounce = function $goog$functions$debounce$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0;
  return function($var_args$$) {
    goog.global.clearTimeout($timeout$$);
    var $args$$ = arguments;
    $timeout$$ = goog.global.setTimeout(function() {
      $f$$.apply($opt_scope$$, $args$$);
    }, $interval$$);
  };
};
goog.functions.throttle = function $goog$functions$throttle$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0, $shouldFire$$ = !1, $args$$ = [], $handleTimeout$$ = function $$handleTimeout$$$() {
    $timeout$$ = 0;
    $shouldFire$$ && ($shouldFire$$ = !1, $fire$$());
  }, $fire$$ = function $$fire$$$() {
    $timeout$$ = goog.global.setTimeout($handleTimeout$$, $interval$$);
    $f$$.apply($opt_scope$$, $args$$);
  };
  return function($var_args$$) {
    $args$$ = arguments;
    $timeout$$ ? $shouldFire$$ = !0 : $fire$$();
  };
};
goog.functions.rateLimit = function $goog$functions$rateLimit$($f$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0, $handleTimeout$$ = function $$handleTimeout$$$() {
    $timeout$$ = 0;
  };
  return function($var_args$$) {
    $timeout$$ || ($timeout$$ = goog.global.setTimeout($handleTimeout$$, $interval$$), $f$$.apply($opt_scope$$, arguments));
  };
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
goog.array.peek = function $goog$array$peek$($array$$) {
  return $array$$[$array$$.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.indexOf.call($arr$$, $obj$$, $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex_i$jscomp$31_opt_fromIndex$$) {
  $fromIndex_i$jscomp$31_opt_fromIndex$$ = null == $fromIndex_i$jscomp$31_opt_fromIndex$$ ? 0 : 0 > $fromIndex_i$jscomp$31_opt_fromIndex$$ ? Math.max(0, $arr$$.length + $fromIndex_i$jscomp$31_opt_fromIndex$$) : $fromIndex_i$jscomp$31_opt_fromIndex$$;
  if (goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.indexOf($obj$$, $fromIndex_i$jscomp$31_opt_fromIndex$$) : -1;
  }
  for (; $fromIndex_i$jscomp$31_opt_fromIndex$$ < $arr$$.length; $fromIndex_i$jscomp$31_opt_fromIndex$$++) {
    if ($fromIndex_i$jscomp$31_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex_i$jscomp$31_opt_fromIndex$$] === $obj$$) {
      return $fromIndex_i$jscomp$31_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.lastIndexOf.call($arr$$, $obj$$, null == $opt_fromIndex$$ ? $arr$$.length - 1 : $opt_fromIndex$$);
} : function($arr$$, $obj$$, $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$) {
  $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$ = null == $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$ ? $arr$$.length - 1 : $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$;
  0 > $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$ && ($fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$ = Math.max(0, $arr$$.length + $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$));
  if (goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.lastIndexOf($obj$$, $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$) : -1;
  }
  for (; 0 <= $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$; $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$] === $obj$$) {
      return $fromIndex$jscomp$2_i$jscomp$32_opt_fromIndex$$;
    }
  }
  return -1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  Array.prototype.forEach.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$);
  }
};
goog.array.forEachRight = function $goog$array$forEachRight$($arr$$, $f$$, $opt_obj$$) {
  var $i$jscomp$34_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$;
  for (--$i$jscomp$34_l$$; 0 <= $i$jscomp$34_l$$; --$i$jscomp$34_l$$) {
    $i$jscomp$34_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$jscomp$34_l$$], $i$jscomp$34_l$$, $arr$$);
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.filter.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$) {
      var $val$$ = $arr2$$[$i$$];
      $f$$.call($opt_obj$$, $val$$, $i$$, $arr$$) && ($res$$[$resLength$$++] = $val$$);
    }
  }
  return $res$$;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.map.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $res$$ = Array($l$$), $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $i$$ in $arr2$$ && ($res$$[$i$$] = $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$));
  }
  return $res$$;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return Array.prototype.reduce.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  goog.array.forEach($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function($arr$$, $f$$, $val$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  goog.asserts.assert(null != $f$$);
  $opt_obj$$ && ($f$$ = goog.bind($f$$, $opt_obj$$));
  return Array.prototype.reduceRight.call($arr$$, $f$$, $val$$);
} : function($arr$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  goog.array.forEachRight($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$);
  });
  return $rval$$;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.some.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !0;
    }
  }
  return !1;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.every.call($arr$$, $f$$, $opt_obj$$);
} : function($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && !$f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return !1;
    }
  }
  return !0;
};
goog.array.count = function $goog$array$count$($arr$jscomp$0$$, $f$$, $opt_obj$$) {
  var $count$$ = 0;
  goog.array.forEach($arr$jscomp$0$$, function($element$$, $index$$, $arr$$) {
    $f$$.call($opt_obj$$, $element$$, $index$$, $arr$$) && ++$count$$;
  }, $opt_obj$$);
  return $count$$;
};
goog.array.find = function $goog$array$find$($arr$$, $f$jscomp$24_i$$, $opt_obj$$) {
  $f$jscomp$24_i$$ = goog.array.findIndex($arr$$, $f$jscomp$24_i$$, $opt_obj$$);
  return 0 > $f$jscomp$24_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$jscomp$24_i$$) : $arr$$[$f$jscomp$24_i$$];
};
goog.array.findIndex = function $goog$array$findIndex$($arr$$, $f$$, $opt_obj$$) {
  for (var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return $i$$;
    }
  }
  return -1;
};
goog.array.findRight = function $goog$array$findRight$($arr$$, $f$jscomp$26_i$$, $opt_obj$$) {
  $f$jscomp$26_i$$ = goog.array.findIndexRight($arr$$, $f$jscomp$26_i$$, $opt_obj$$);
  return 0 > $f$jscomp$26_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$jscomp$26_i$$) : $arr$$[$f$jscomp$26_i$$];
};
goog.array.findIndexRight = function $goog$array$findIndexRight$($arr$$, $f$$, $opt_obj$$) {
  var $i$jscomp$42_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$;
  for (--$i$jscomp$42_l$$; 0 <= $i$jscomp$42_l$$; $i$jscomp$42_l$$--) {
    if ($i$jscomp$42_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$jscomp$42_l$$], $i$jscomp$42_l$$, $arr$$)) {
      return $i$jscomp$42_l$$;
    }
  }
  return -1;
};
goog.array.contains = function $goog$array$contains$($arr$$, $obj$$) {
  return 0 <= goog.array.indexOf($arr$$, $obj$$);
};
goog.array.isEmpty = function $goog$array$isEmpty$($arr$$) {
  return 0 == $arr$$.length;
};
goog.array.clear = function $goog$array$clear$($arr$$) {
  if (!goog.isArray($arr$$)) {
    for (var $i$$ = $arr$$.length - 1; 0 <= $i$$; $i$$--) {
      delete $arr$$[$i$$];
    }
  }
  $arr$$.length = 0;
};
goog.array.insert = function $goog$array$insert$($arr$$, $obj$$) {
  goog.array.contains($arr$$, $obj$$) || $arr$$.push($obj$$);
};
goog.array.insertAt = function $goog$array$insertAt$($arr$$, $obj$$, $opt_i$$) {
  goog.array.splice($arr$$, $opt_i$$, 0, $obj$$);
};
goog.array.insertArrayAt = function $goog$array$insertArrayAt$($arr$$, $elementsToAdd$$, $opt_i$$) {
  goog.partial(goog.array.splice, $arr$$, $opt_i$$, 0).apply(null, $elementsToAdd$$);
};
goog.array.insertBefore = function $goog$array$insertBefore$($arr$$, $obj$$, $opt_obj2$$) {
  var $i$$;
  2 == arguments.length || 0 > ($i$$ = goog.array.indexOf($arr$$, $opt_obj2$$)) ? $arr$$.push($obj$$) : goog.array.insertAt($arr$$, $obj$$, $i$$);
};
goog.array.remove = function $goog$array$remove$($arr$$, $i$jscomp$45_obj$$) {
  $i$jscomp$45_obj$$ = goog.array.indexOf($arr$$, $i$jscomp$45_obj$$);
  var $rv$$;
  ($rv$$ = 0 <= $i$jscomp$45_obj$$) && goog.array.removeAt($arr$$, $i$jscomp$45_obj$$);
  return $rv$$;
};
goog.array.removeLast = function $goog$array$removeLast$($arr$$, $i$jscomp$46_obj$$) {
  $i$jscomp$46_obj$$ = goog.array.lastIndexOf($arr$$, $i$jscomp$46_obj$$);
  return 0 <= $i$jscomp$46_obj$$ ? (goog.array.removeAt($arr$$, $i$jscomp$46_obj$$), !0) : !1;
};
goog.array.removeAt = function $goog$array$removeAt$($arr$$, $i$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 1 == Array.prototype.splice.call($arr$$, $i$$, 1).length;
};
goog.array.removeIf = function $goog$array$removeIf$($arr$$, $f$jscomp$28_i$$, $opt_obj$$) {
  $f$jscomp$28_i$$ = goog.array.findIndex($arr$$, $f$jscomp$28_i$$, $opt_obj$$);
  return 0 <= $f$jscomp$28_i$$ ? (goog.array.removeAt($arr$$, $f$jscomp$28_i$$), !0) : !1;
};
goog.array.removeAllIf = function $goog$array$removeAllIf$($arr$$, $f$$, $opt_obj$$) {
  var $removedCount$$ = 0;
  goog.array.forEachRight($arr$$, function($val$$, $index$$) {
    $f$$.call($opt_obj$$, $val$$, $index$$, $arr$$) && goog.array.removeAt($arr$$, $index$$) && $removedCount$$++;
  });
  return $removedCount$$;
};
goog.array.concat = function $goog$array$concat$($var_args$$) {
  return Array.prototype.concat.apply([], arguments);
};
goog.array.join = function $goog$array$join$($var_args$$) {
  return Array.prototype.concat.apply([], arguments);
};
goog.array.toArray = function $goog$array$toArray$($object$$) {
  var $length$$ = $object$$.length;
  if (0 < $length$$) {
    for (var $rv$$ = Array($length$$), $i$$ = 0; $i$$ < $length$$; $i$$++) {
      $rv$$[$i$$] = $object$$[$i$$];
    }
    return $rv$$;
  }
  return [];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function $goog$array$extend$($arr1$$, $var_args$$) {
  for (var $i$$ = 1; $i$$ < arguments.length; $i$$++) {
    var $arr2$$ = arguments[$i$$];
    if (goog.isArrayLike($arr2$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$$ = 0; $j$$ < $len2$$; $j$$++) {
        $arr1$$[$len1$$ + $j$$] = $arr2$$[$j$$];
      }
    } else {
      $arr1$$.push($arr2$$);
    }
  }
};
goog.array.splice = function $goog$array$splice$($arr$$, $index$$, $howMany$$, $var_args$$) {
  goog.asserts.assert(null != $arr$$.length);
  return Array.prototype.splice.apply($arr$$, goog.array.slice(arguments, 1));
};
goog.array.slice = function $goog$array$slice$($arr$$, $start$$, $opt_end$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$$, $start$$) : Array.prototype.slice.call($arr$$, $start$$, $opt_end$$);
};
goog.array.removeDuplicates = function $goog$array$removeDuplicates$($arr$$, $opt_rv_returnArray$$, $hashFn_opt_hashFn$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$$;
  var $defaultHashFn_seen$$ = function $$defaultHashFn_seen$$$($item$$) {
    return goog.isObject($item$$) ? "o" + goog.getUid($item$$) : (typeof $item$$).charAt(0) + $item$$;
  };
  $hashFn_opt_hashFn$$ = $hashFn_opt_hashFn$$ || $defaultHashFn_seen$$;
  $defaultHashFn_seen$$ = {};
  for (var $cursorInsert$$ = 0, $cursorRead$$ = 0; $cursorRead$$ < $arr$$.length;) {
    var $current$$ = $arr$$[$cursorRead$$++], $key$$ = $hashFn_opt_hashFn$$($current$$);
    Object.prototype.hasOwnProperty.call($defaultHashFn_seen$$, $key$$) || ($defaultHashFn_seen$$[$key$$] = !0, $opt_rv_returnArray$$[$cursorInsert$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert$$;
};
goog.array.binarySearch = function $goog$array$binarySearch$($arr$$, $target$$, $opt_compareFn$$) {
  return goog.array.binarySearch_($arr$$, $opt_compareFn$$ || goog.array.defaultCompare, !1, $target$$);
};
goog.array.binarySelect = function $goog$array$binarySelect$($arr$$, $evaluator$$, $opt_obj$$) {
  return goog.array.binarySearch_($arr$$, $evaluator$$, !0, void 0, $opt_obj$$);
};
goog.array.binarySearch_ = function $goog$array$binarySearch_$($arr$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$$) {
  for (var $left$$ = 0, $right$$ = $arr$$.length, $found$$; $left$$ < $right$$;) {
    var $middle$$ = $left$$ + $right$$ >> 1;
    var $compareResult$$ = $isEvaluator$$ ? $compareFn$$.call($opt_selfObj$$, $arr$$[$middle$$], $middle$$, $arr$$) : $compareFn$$($opt_target$$, $arr$$[$middle$$]);
    0 < $compareResult$$ ? $left$$ = $middle$$ + 1 : ($right$$ = $middle$$, $found$$ = !$compareResult$$);
  }
  return $found$$ ? $left$$ : ~$left$$;
};
goog.array.sort = function $goog$array$sort$($arr$$, $opt_compareFn$$) {
  $arr$$.sort($opt_compareFn$$ || goog.array.defaultCompare);
};
goog.array.stableSort = function $goog$array$stableSort$($arr$$, $opt_compareFn$$) {
  for (var $compArr$$ = Array($arr$$.length), $i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    $compArr$$[$i$$] = {index:$i$$, value:$arr$$[$i$$]};
  }
  var $valueCompareFn$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($compArr$$, function stableCompareFn($obj1$$, $obj2$$) {
    return $valueCompareFn$$($obj1$$.value, $obj2$$.value) || $obj1$$.index - $obj2$$.index;
  });
  for ($i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    $arr$$[$i$$] = $compArr$$[$i$$].value;
  }
};
goog.array.sortByKey = function $goog$array$sortByKey$($arr$$, $keyFn$$, $opt_compareFn$$) {
  var $keyCompareFn$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($arr$$, function($a$$, $b$$) {
    return $keyCompareFn$$($keyFn$$($a$$), $keyFn$$($b$$));
  });
};
goog.array.sortObjectsByKey = function $goog$array$sortObjectsByKey$($arr$$, $key$$, $opt_compareFn$$) {
  goog.array.sortByKey($arr$$, function($obj$$) {
    return $obj$$[$key$$];
  }, $opt_compareFn$$);
};
goog.array.isSorted = function $goog$array$isSorted$($arr$$, $compare_opt_compareFn$$, $opt_strict$$) {
  $compare_opt_compareFn$$ = $compare_opt_compareFn$$ || goog.array.defaultCompare;
  for (var $i$$ = 1; $i$$ < $arr$$.length; $i$$++) {
    var $compareResult$$ = $compare_opt_compareFn$$($arr$$[$i$$ - 1], $arr$$[$i$$]);
    if (0 < $compareResult$$ || 0 == $compareResult$$ && $opt_strict$$) {
      return !1;
    }
  }
  return !0;
};
goog.array.equals = function $goog$array$equals$($arr1$$, $arr2$$, $equalsFn_opt_equalsFn$$) {
  if (!goog.isArrayLike($arr1$$) || !goog.isArrayLike($arr2$$) || $arr1$$.length != $arr2$$.length) {
    return !1;
  }
  var $l$$ = $arr1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || goog.array.defaultCompareEquality;
  for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$$[$i$$], $arr2$$[$i$$])) {
      return !1;
    }
  }
  return !0;
};
goog.array.compare3 = function $goog$array$compare3$($arr1$$, $arr2$$, $compare$jscomp$1_opt_compareFn$$) {
  $compare$jscomp$1_opt_compareFn$$ = $compare$jscomp$1_opt_compareFn$$ || goog.array.defaultCompare;
  for (var $l$$ = Math.min($arr1$$.length, $arr2$$.length), $i$$ = 0; $i$$ < $l$$; $i$$++) {
    var $result$$ = $compare$jscomp$1_opt_compareFn$$($arr1$$[$i$$], $arr2$$[$i$$]);
    if (0 != $result$$) {
      return $result$$;
    }
  }
  return goog.array.defaultCompare($arr1$$.length, $arr2$$.length);
};
goog.array.defaultCompare = function $goog$array$defaultCompare$($a$$, $b$$) {
  return $a$$ > $b$$ ? 1 : $a$$ < $b$$ ? -1 : 0;
};
goog.array.inverseDefaultCompare = function $goog$array$inverseDefaultCompare$($a$$, $b$$) {
  return -goog.array.defaultCompare($a$$, $b$$);
};
goog.array.defaultCompareEquality = function $goog$array$defaultCompareEquality$($a$$, $b$$) {
  return $a$$ === $b$$;
};
goog.array.binaryInsert = function $goog$array$binaryInsert$($array$$, $value$$, $index$jscomp$50_opt_compareFn$$) {
  $index$jscomp$50_opt_compareFn$$ = goog.array.binarySearch($array$$, $value$$, $index$jscomp$50_opt_compareFn$$);
  return 0 > $index$jscomp$50_opt_compareFn$$ ? (goog.array.insertAt($array$$, $value$$, -($index$jscomp$50_opt_compareFn$$ + 1)), !0) : !1;
};
goog.array.binaryRemove = function $goog$array$binaryRemove$($array$$, $index$jscomp$51_value$$, $opt_compareFn$$) {
  $index$jscomp$51_value$$ = goog.array.binarySearch($array$$, $index$jscomp$51_value$$, $opt_compareFn$$);
  return 0 <= $index$jscomp$51_value$$ ? goog.array.removeAt($array$$, $index$jscomp$51_value$$) : !1;
};
goog.array.bucket = function $goog$array$bucket$($array$$, $sorter$$, $opt_obj$$) {
  for (var $buckets$$ = {}, $i$$ = 0; $i$$ < $array$$.length; $i$$++) {
    var $value$$ = $array$$[$i$$], $key$$ = $sorter$$.call($opt_obj$$, $value$$, $i$$, $array$$);
    goog.isDef($key$$) && ($buckets$$[$key$$] || ($buckets$$[$key$$] = [])).push($value$$);
  }
  return $buckets$$;
};
goog.array.toObject = function $goog$array$toObject$($arr$$, $keyFunc$$, $opt_obj$$) {
  var $ret$$ = {};
  goog.array.forEach($arr$$, function($element$$, $index$$) {
    $ret$$[$keyFunc$$.call($opt_obj$$, $element$$, $index$$, $arr$$)] = $element$$;
  });
  return $ret$$;
};
goog.array.range = function $goog$array$range$($i$$, $opt_end$$, $opt_step_step$$) {
  var $array$$ = [], $start$$ = 0, $end$$ = $i$$;
  $opt_step_step$$ = $opt_step_step$$ || 1;
  void 0 !== $opt_end$$ && ($start$$ = $i$$, $end$$ = $opt_end$$);
  if (0 > $opt_step_step$$ * ($end$$ - $start$$)) {
    return [];
  }
  if (0 < $opt_step_step$$) {
    for ($i$$ = $start$$; $i$$ < $end$$; $i$$ += $opt_step_step$$) {
      $array$$.push($i$$);
    }
  } else {
    for ($i$$ = $start$$; $i$$ > $end$$; $i$$ += $opt_step_step$$) {
      $array$$.push($i$$);
    }
  }
  return $array$$;
};
goog.array.repeat = function $goog$array$repeat$($value$$, $n$$) {
  for (var $array$$ = [], $i$$ = 0; $i$$ < $n$$; $i$$++) {
    $array$$[$i$$] = $value$$;
  }
  return $array$$;
};
goog.array.flatten = function $goog$array$flatten$($var_args$$) {
  for (var $result$$ = [], $i$$ = 0; $i$$ < arguments.length; $i$$++) {
    var $element$$ = arguments[$i$$];
    if (goog.isArray($element$$)) {
      for (var $c$$ = 0; $c$$ < $element$$.length; $c$$ += 8192) {
        var $chunk$$ = goog.array.slice($element$$, $c$$, $c$$ + 8192);
        $chunk$$ = goog.array.flatten.apply(null, $chunk$$);
        for (var $r$$ = 0; $r$$ < $chunk$$.length; $r$$++) {
          $result$$.push($chunk$$[$r$$]);
        }
      }
    } else {
      $result$$.push($element$$);
    }
  }
  return $result$$;
};
goog.array.rotate = function $goog$array$rotate$($array$$, $n$$) {
  goog.asserts.assert(null != $array$$.length);
  $array$$.length && ($n$$ %= $array$$.length, 0 < $n$$ ? Array.prototype.unshift.apply($array$$, $array$$.splice(-$n$$, $n$$)) : 0 > $n$$ && Array.prototype.push.apply($array$$, $array$$.splice(0, -$n$$)));
  return $array$$;
};
goog.array.moveItem = function $goog$array$moveItem$($arr$$, $fromIndex$$, $toIndex$$) {
  goog.asserts.assert(0 <= $fromIndex$$ && $fromIndex$$ < $arr$$.length);
  goog.asserts.assert(0 <= $toIndex$$ && $toIndex$$ < $arr$$.length);
  $fromIndex$$ = Array.prototype.splice.call($arr$$, $fromIndex$$, 1);
  Array.prototype.splice.call($arr$$, $toIndex$$, 0, $fromIndex$$[0]);
};
goog.array.zip = function $goog$array$zip$($var_args$$) {
  if (!arguments.length) {
    return [];
  }
  for (var $result$$ = [], $minLen$$ = arguments[0].length, $i$$ = 1; $i$$ < arguments.length; $i$$++) {
    arguments[$i$$].length < $minLen$$ && ($minLen$$ = arguments[$i$$].length);
  }
  for ($i$$ = 0; $i$$ < $minLen$$; $i$$++) {
    for (var $value$$ = [], $j$$ = 0; $j$$ < arguments.length; $j$$++) {
      $value$$.push(arguments[$j$$][$i$$]);
    }
    $result$$.push($value$$);
  }
  return $result$$;
};
goog.array.shuffle = function $goog$array$shuffle$($arr$$, $opt_randFn_randFn$$) {
  $opt_randFn_randFn$$ = $opt_randFn_randFn$$ || Math.random;
  for (var $i$$ = $arr$$.length - 1; 0 < $i$$; $i$$--) {
    var $j$$ = Math.floor($opt_randFn_randFn$$() * ($i$$ + 1)), $tmp$$ = $arr$$[$i$$];
    $arr$$[$i$$] = $arr$$[$j$$];
    $arr$$[$j$$] = $tmp$$;
  }
};
goog.array.copyByIndex = function $goog$array$copyByIndex$($arr$$, $index_arr$$) {
  var $result$$ = [];
  goog.array.forEach($index_arr$$, function($index$$) {
    $result$$.push($arr$$[$index$$]);
  });
  return $result$$;
};
goog.array.concatMap = function $goog$array$concatMap$($arr$$, $f$$, $opt_obj$$) {
  return goog.array.concat.apply([], goog.array.map($arr$$, $f$$, $opt_obj$$));
};
goog.labs = {};
goog.labs.userAgent = {};
goog.labs.userAgent.util = {};
goog.labs.userAgent.util.getNativeUserAgentString_ = function $goog$labs$userAgent$util$getNativeUserAgentString_$() {
  var $navigator$jscomp$1_userAgent$$ = goog.labs.userAgent.util.getNavigator_();
  return $navigator$jscomp$1_userAgent$$ && ($navigator$jscomp$1_userAgent$$ = $navigator$jscomp$1_userAgent$$.userAgent) ? $navigator$jscomp$1_userAgent$$ : "";
};
goog.labs.userAgent.util.getNavigator_ = function $goog$labs$userAgent$util$getNavigator_$() {
  return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function $goog$labs$userAgent$util$setUserAgent$($opt_userAgent$$) {
  goog.labs.userAgent.util.userAgent_ = $opt_userAgent$$ || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function $goog$labs$userAgent$util$getUserAgent$() {
  return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function $goog$labs$userAgent$util$matchUserAgent$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.contains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function $goog$labs$userAgent$util$matchUserAgentIgnoreCase$($str$$) {
  var $userAgent$$ = goog.labs.userAgent.util.getUserAgent();
  return goog.string.caseInsensitiveContains($userAgent$$, $str$$);
};
goog.labs.userAgent.util.extractVersionTuples = function $goog$labs$userAgent$util$extractVersionTuples$($userAgent$$) {
  for (var $versionRegExp$$ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, $data$$ = [], $match$$; $match$$ = $versionRegExp$$.exec($userAgent$$);) {
    $data$$.push([$match$$[1], $match$$[2], $match$$[3] || void 0]);
  }
  return $data$$;
};
goog.object = {};
goog.object.is = function $goog$object$is$($v$$, $v2$$) {
  return $v$$ === $v2$$ ? 0 !== $v$$ || 1 / $v$$ === 1 / $v2$$ : $v$$ !== $v$$ && $v2$$ !== $v2$$;
};
goog.object.forEach = function $goog$object$forEach$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
};
goog.object.filter = function $goog$object$filter$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$) && ($res$$[$key$$] = $obj$$[$key$$]);
  }
  return $res$$;
};
goog.object.map = function $goog$object$map$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$);
  }
  return $res$$;
};
goog.object.some = function $goog$object$some$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function $goog$object$every$($obj$$, $f$$, $opt_obj$$) {
  for (var $key$$ in $obj$$) {
    if (!$f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function $goog$object$getCount$($obj$$) {
  var $rv$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $rv$$++;
  }
  return $rv$$;
};
goog.object.getAnyKey = function $goog$object$getAnyKey$($obj$$) {
  for (var $key$$ in $obj$$) {
    return $key$$;
  }
};
goog.object.getAnyValue = function $goog$object$getAnyValue$($obj$$) {
  for (var $key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
};
goog.object.contains = function $goog$object$contains$($obj$$, $val$$) {
  return goog.object.containsValue($obj$$, $val$$);
};
goog.object.getValues = function $goog$object$getValues$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $obj$$[$key$$];
  }
  return $res$$;
};
goog.object.getKeys = function $goog$object$getKeys$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$i$$++] = $key$$;
  }
  return $res$$;
};
goog.object.getValueByKeys = function $goog$object$getValueByKeys$($obj$$, $var_args$$) {
  var $i$$ = goog.isArrayLike($var_args$$), $keys$$ = $i$$ ? $var_args$$ : arguments;
  for ($i$$ = $i$$ ? 0 : 1; $i$$ < $keys$$.length && ($obj$$ = $obj$$[$keys$$[$i$$]], goog.isDef($obj$$)); $i$$++) {
  }
  return $obj$$;
};
goog.object.containsKey = function $goog$object$containsKey$($obj$$, $key$$) {
  return null !== $obj$$ && $key$$ in $obj$$;
};
goog.object.containsValue = function $goog$object$containsValue$($obj$$, $val$$) {
  for (var $key$$ in $obj$$) {
    if ($obj$$[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function $goog$object$findKey$($obj$$, $f$$, $opt_this$$) {
  for (var $key$$ in $obj$$) {
    if ($f$$.call($opt_this$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return $key$$;
    }
  }
};
goog.object.findValue = function $goog$object$findValue$($obj$$, $f$jscomp$37_key$$, $opt_this$$) {
  return ($f$jscomp$37_key$$ = goog.object.findKey($obj$$, $f$jscomp$37_key$$, $opt_this$$)) && $obj$$[$f$jscomp$37_key$$];
};
goog.object.isEmpty = function $goog$object$isEmpty$($obj$$) {
  for (var $key$$ in $obj$$) {
    return !1;
  }
  return !0;
};
goog.object.clear = function $goog$object$clear$($obj$$) {
  for (var $i$$ in $obj$$) {
    delete $obj$$[$i$$];
  }
};
goog.object.remove = function $goog$object$remove$($obj$$, $key$$) {
  var $rv$$;
  ($rv$$ = $key$$ in $obj$$) && delete $obj$$[$key$$];
  return $rv$$;
};
goog.object.add = function $goog$object$add$($obj$$, $key$$, $val$$) {
  if (null !== $obj$$ && $key$$ in $obj$$) {
    throw Error('The object already contains the key "' + $key$$ + '"');
  }
  goog.object.set($obj$$, $key$$, $val$$);
};
goog.object.get = function $goog$object$get$($obj$$, $key$$, $opt_val$$) {
  return null !== $obj$$ && $key$$ in $obj$$ ? $obj$$[$key$$] : $opt_val$$;
};
goog.object.set = function $goog$object$set$($obj$$, $key$$, $value$$) {
  $obj$$[$key$$] = $value$$;
};
goog.object.setIfUndefined = function $goog$object$setIfUndefined$($obj$$, $key$$, $value$$) {
  return $key$$ in $obj$$ ? $obj$$[$key$$] : $obj$$[$key$$] = $value$$;
};
goog.object.setWithReturnValueIfNotSet = function $goog$object$setWithReturnValueIfNotSet$($obj$$, $key$$, $f$jscomp$38_val$$) {
  if ($key$$ in $obj$$) {
    return $obj$$[$key$$];
  }
  $f$jscomp$38_val$$ = $f$jscomp$38_val$$();
  return $obj$$[$key$$] = $f$jscomp$38_val$$;
};
goog.object.equals = function $goog$object$equals$($a$$, $b$$) {
  for (var $k$$ in $a$$) {
    if (!($k$$ in $b$$) || $a$$[$k$$] !== $b$$[$k$$]) {
      return !1;
    }
  }
  for ($k$$ in $b$$) {
    if (!($k$$ in $a$$)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function $goog$object$clone$($obj$$) {
  var $res$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $res$$[$key$$] = $obj$$[$key$$];
  }
  return $res$$;
};
goog.object.unsafeClone = function $goog$object$unsafeClone$($obj$$) {
  var $clone$jscomp$1_type$$ = goog.typeOf($obj$$);
  if ("object" == $clone$jscomp$1_type$$ || "array" == $clone$jscomp$1_type$$) {
    if (goog.isFunction($obj$$.clone)) {
      return $obj$$.clone();
    }
    $clone$jscomp$1_type$$ = "array" == $clone$jscomp$1_type$$ ? [] : {};
    for (var $key$$ in $obj$$) {
      $clone$jscomp$1_type$$[$key$$] = goog.object.unsafeClone($obj$$[$key$$]);
    }
    return $clone$jscomp$1_type$$;
  }
  return $obj$$;
};
goog.object.transpose = function $goog$object$transpose$($obj$$) {
  var $transposed$$ = {}, $key$$;
  for ($key$$ in $obj$$) {
    $transposed$$[$obj$$[$key$$]] = $key$$;
  }
  return $transposed$$;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function $goog$object$extend$($target$$, $var_args$$) {
  for (var $key$$, $source$$, $i$$ = 1; $i$$ < arguments.length; $i$$++) {
    $source$$ = arguments[$i$$];
    for ($key$$ in $source$$) {
      $target$$[$key$$] = $source$$[$key$$];
    }
    for (var $j$$ = 0; $j$$ < goog.object.PROTOTYPE_FIELDS_.length; $j$$++) {
      $key$$ = goog.object.PROTOTYPE_FIELDS_[$j$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$]);
    }
  }
};
goog.object.create = function $goog$object$create$($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if ($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var $rv$$ = {}, $i$$ = 0; $i$$ < $argLength$$; $i$$ += 2) {
    $rv$$[arguments[$i$$]] = arguments[$i$$ + 1];
  }
  return $rv$$;
};
goog.object.createSet = function $goog$object$createSet$($var_args$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var $rv$$ = {}, $i$$ = 0; $i$$ < $argLength$$; $i$$++) {
    $rv$$[arguments[$i$$]] = !0;
  }
  return $rv$$;
};
goog.object.createImmutableView = function $goog$object$createImmutableView$($obj$$) {
  var $result$$ = $obj$$;
  Object.isFrozen && !Object.isFrozen($obj$$) && ($result$$ = Object.create($obj$$), Object.freeze($result$$));
  return $result$$;
};
goog.object.isImmutableView = function $goog$object$isImmutableView$($obj$$) {
  return !!Object.isFrozen && Object.isFrozen($obj$$);
};
goog.object.getAllPropertyNames = function $goog$object$getAllPropertyNames$($obj$jscomp$76_proto$$, $opt_includeObjectPrototype$$, $opt_includeFunctionPrototype$$) {
  if (!$obj$jscomp$76_proto$$) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return goog.object.getKeys($obj$jscomp$76_proto$$);
  }
  for (var $visitedSet$$ = {}; $obj$jscomp$76_proto$$ && ($obj$jscomp$76_proto$$ !== Object.prototype || $opt_includeObjectPrototype$$) && ($obj$jscomp$76_proto$$ !== Function.prototype || $opt_includeFunctionPrototype$$);) {
    for (var $names$$ = Object.getOwnPropertyNames($obj$jscomp$76_proto$$), $i$$ = 0; $i$$ < $names$$.length; $i$$++) {
      $visitedSet$$[$names$$[$i$$]] = !0;
    }
    $obj$jscomp$76_proto$$ = Object.getPrototypeOf($obj$jscomp$76_proto$$);
  }
  return goog.object.getKeys($visitedSet$$);
};
goog.labs.userAgent.browser = {};
goog.labs.userAgent.browser.matchOpera_ = function $goog$labs$userAgent$browser$matchOpera_$() {
  return goog.labs.userAgent.util.matchUserAgent("Opera");
};
goog.labs.userAgent.browser.matchIE_ = function $goog$labs$userAgent$browser$matchIE_$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchEdge_ = function $goog$labs$userAgent$browser$matchEdge_$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.browser.matchFirefox_ = function $goog$labs$userAgent$browser$matchFirefox_$() {
  return goog.labs.userAgent.util.matchUserAgent("Firefox");
};
goog.labs.userAgent.browser.matchSafari_ = function $goog$labs$userAgent$browser$matchSafari_$() {
  return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
};
goog.labs.userAgent.browser.matchCoast_ = function $goog$labs$userAgent$browser$matchCoast_$() {
  return goog.labs.userAgent.util.matchUserAgent("Coast");
};
goog.labs.userAgent.browser.matchIosWebview_ = function $goog$labs$userAgent$browser$matchIosWebview_$() {
  return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
};
goog.labs.userAgent.browser.matchChrome_ = function $goog$labs$userAgent$browser$matchChrome_$() {
  return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdge_();
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function $goog$labs$userAgent$browser$matchAndroidBrowser_$() {
  return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function $goog$labs$userAgent$browser$isSilk$() {
  return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function $goog$labs$userAgent$browser$getVersion$() {
  function $lookUpValueWithKeys$$($key$jscomp$60_keys$$) {
    $key$jscomp$60_keys$$ = goog.array.find($key$jscomp$60_keys$$, $versionMapHasKey$$);
    return $versionMap$$[$key$jscomp$60_keys$$] || "";
  }
  var $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.getUserAgent();
  if (goog.labs.userAgent.browser.isIE()) {
    return goog.labs.userAgent.browser.getIEVersion_($tuple_userAgentString_versionTuples$$);
  }
  $tuple_userAgentString_versionTuples$$ = goog.labs.userAgent.util.extractVersionTuples($tuple_userAgentString_versionTuples$$);
  var $versionMap$$ = {};
  goog.array.forEach($tuple_userAgentString_versionTuples$$, function($tuple$$) {
    $versionMap$$[$tuple$$[0]] = $tuple$$[1];
  });
  var $versionMapHasKey$$ = goog.partial(goog.object.containsKey, $versionMap$$);
  return goog.labs.userAgent.browser.isOpera() ? $lookUpValueWithKeys$$(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? $lookUpValueWithKeys$$(["Edge"]) : goog.labs.userAgent.browser.isChrome() ? $lookUpValueWithKeys$$(["Chrome", "CriOS"]) : ($tuple_userAgentString_versionTuples$$ = $tuple_userAgentString_versionTuples$$[2]) && $tuple_userAgentString_versionTuples$$[1] || "";
};
goog.labs.userAgent.browser.isVersionOrHigher = function $goog$labs$userAgent$browser$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), $version$$);
};
goog.labs.userAgent.browser.getIEVersion_ = function $goog$labs$userAgent$browser$getIEVersion_$($tridentVersion_userAgent$$) {
  var $rv$jscomp$7_version$$ = /rv: *([\d\.]*)/.exec($tridentVersion_userAgent$$);
  if ($rv$jscomp$7_version$$ && $rv$jscomp$7_version$$[1]) {
    return $rv$jscomp$7_version$$[1];
  }
  $rv$jscomp$7_version$$ = "";
  var $msie$$ = /MSIE +([\d\.]+)/.exec($tridentVersion_userAgent$$);
  if ($msie$$ && $msie$$[1]) {
    if ($tridentVersion_userAgent$$ = /Trident\/(\d.\d)/.exec($tridentVersion_userAgent$$), "7.0" == $msie$$[1]) {
      if ($tridentVersion_userAgent$$ && $tridentVersion_userAgent$$[1]) {
        switch($tridentVersion_userAgent$$[1]) {
          case "4.0":
            $rv$jscomp$7_version$$ = "8.0";
            break;
          case "5.0":
            $rv$jscomp$7_version$$ = "9.0";
            break;
          case "6.0":
            $rv$jscomp$7_version$$ = "10.0";
            break;
          case "7.0":
            $rv$jscomp$7_version$$ = "11.0";
        }
      } else {
        $rv$jscomp$7_version$$ = "7.0";
      }
    } else {
      $rv$jscomp$7_version$$ = $msie$$[1];
    }
  }
  return $rv$jscomp$7_version$$;
};
goog.labs.userAgent.engine = {};
goog.labs.userAgent.engine.isPresto = function $goog$labs$userAgent$engine$isPresto$() {
  return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function $goog$labs$userAgent$engine$isTrident$() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isEdge = function $goog$labs$userAgent$engine$isEdge$() {
  return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.engine.isWebKit = function $goog$labs$userAgent$engine$isWebKit$() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.isGecko = function $goog$labs$userAgent$engine$isGecko$() {
  return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.getVersion = function $goog$labs$userAgent$engine$getVersion$() {
  var $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.getUserAgent();
  if ($browserTuple_tuples_userAgentString$$) {
    $browserTuple_tuples_userAgentString$$ = goog.labs.userAgent.util.extractVersionTuples($browserTuple_tuples_userAgentString$$);
    var $engineTuple$$ = goog.labs.userAgent.engine.getEngineTuple_($browserTuple_tuples_userAgentString$$);
    if ($engineTuple$$) {
      return "Gecko" == $engineTuple$$[0] ? goog.labs.userAgent.engine.getVersionForKey_($browserTuple_tuples_userAgentString$$, "Firefox") : $engineTuple$$[1];
    }
    $browserTuple_tuples_userAgentString$$ = $browserTuple_tuples_userAgentString$$[0];
    var $info_match$$;
    if ($browserTuple_tuples_userAgentString$$ && ($info_match$$ = $browserTuple_tuples_userAgentString$$[2]) && ($info_match$$ = /Trident\/([^\s;]+)/.exec($info_match$$))) {
      return $info_match$$[1];
    }
  }
  return "";
};
goog.labs.userAgent.engine.getEngineTuple_ = function $goog$labs$userAgent$engine$getEngineTuple_$($tuples$$) {
  if (!goog.labs.userAgent.engine.isEdge()) {
    return $tuples$$[1];
  }
  for (var $i$$ = 0; $i$$ < $tuples$$.length; $i$$++) {
    var $tuple$$ = $tuples$$[$i$$];
    if ("Edge" == $tuple$$[0]) {
      return $tuple$$;
    }
  }
};
goog.labs.userAgent.engine.isVersionOrHigher = function $goog$labs$userAgent$engine$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), $version$$);
};
goog.labs.userAgent.engine.getVersionForKey_ = function $goog$labs$userAgent$engine$getVersionForKey_$($pair_tuples$$, $key$$) {
  return ($pair_tuples$$ = goog.array.find($pair_tuples$$, function($pair$$) {
    return $key$$ == $pair$$[0];
  })) && $pair_tuples$$[1] || "";
};
goog.async.throwException = function $goog$async$throwException$($exception$$) {
  goog.global.setTimeout(function() {
    throw $exception$$;
  }, 0);
};
goog.async.nextTick = function $goog$async$nextTick$($callback$$, $opt_context$$, $opt_useSetImmediate$$) {
  var $cb$$ = $callback$$;
  $opt_context$$ && ($cb$$ = goog.bind($callback$$, $opt_context$$));
  $cb$$ = goog.async.nextTick.wrapCallback_($cb$$);
  goog.isFunction(goog.global.setImmediate) && ($opt_useSetImmediate$$ || goog.async.nextTick.useSetImmediate_()) ? goog.global.setImmediate($cb$$) : (goog.async.nextTick.setImmediate_ || (goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_()), goog.async.nextTick.setImmediate_($cb$$));
};
goog.async.nextTick.useSetImmediate_ = function $goog$async$nextTick$useSetImmediate_$() {
  return goog.global.Window && goog.global.Window.prototype && !goog.labs.userAgent.browser.isEdge() && goog.global.Window.prototype.setImmediate == goog.global.setImmediate ? !1 : !0;
};
goog.async.nextTick.getSetImmediateEmulator_ = function $goog$async$nextTick$getSetImmediateEmulator_$() {
  var $Channel$$ = goog.global.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto() && ($Channel$$ = function $$Channel$$$() {
    var $doc$$ = document.createElement("IFRAME");
    $doc$$.style.display = "none";
    $doc$$.src = "";
    document.documentElement.appendChild($doc$$);
    var $win$$ = $doc$$.contentWindow;
    $doc$$ = $win$$.document;
    $doc$$.open();
    $doc$$.write("");
    $doc$$.close();
    var $message$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$$.location.protocol ? "*" : $win$$.location.protocol + "//" + $win$$.location.host;
    $doc$$ = goog.bind(function($e$$) {
      if (("*" == $origin$$ || $e$$.origin == $origin$$) && $e$$.data == $message$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$.addEventListener("message", $doc$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$.postMessage($message$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !goog.labs.userAgent.browser.isIE()) {
    var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      if (goog.isDef($head$$.next)) {
        $head$$ = $head$$.next;
        var $cb$$ = $head$$.cb;
        $head$$.cb = null;
        $cb$$();
      }
    };
    return function($cb$$) {
      $tail$$.next = {cb:$cb$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($cb$$) {
    var $script$$ = document.createElement("SCRIPT");
    $script$$.onreadystatechange = function $$script$$$onreadystatechange$() {
      $script$$.onreadystatechange = null;
      $script$$.parentNode.removeChild($script$$);
      $script$$ = null;
      $cb$$();
      $cb$$ = null;
    };
    document.documentElement.appendChild($script$$);
  } : function($cb$$) {
    goog.global.setTimeout($cb$$, 0);
  };
};
goog.async.nextTick.wrapCallback_ = goog.functions.identity;
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.async.nextTick.wrapCallback_ = $transformer$$;
});
goog.async.run = function $goog$async$run$($callback$$, $opt_context$$) {
  goog.async.run.schedule_ || goog.async.run.initializeRunner_();
  goog.async.run.workQueueScheduled_ || (goog.async.run.schedule_(), goog.async.run.workQueueScheduled_ = !0);
  goog.async.run.workQueue_.add($callback$$, $opt_context$$);
};
goog.async.run.initializeRunner_ = function $goog$async$run$initializeRunner_$() {
  if (-1 != String(goog.global.Promise).indexOf("[native code]")) {
    var $promise$$ = goog.global.Promise.resolve(void 0);
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      $promise$$.then(goog.async.run.processWorkQueue);
    };
  } else {
    goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
      goog.async.nextTick(goog.async.run.processWorkQueue);
    };
  }
};
goog.async.run.forceNextTick = function $goog$async$run$forceNextTick$($opt_realSetTimeout$$) {
  goog.async.run.schedule_ = function $goog$async$run$schedule_$() {
    goog.async.nextTick(goog.async.run.processWorkQueue);
    $opt_realSetTimeout$$ && $opt_realSetTimeout$$(goog.async.run.processWorkQueue);
  };
};
goog.async.run.workQueueScheduled_ = !1;
goog.async.run.workQueue_ = new goog.async.WorkQueue;
goog.DEBUG && (goog.async.run.resetQueue = function $goog$async$run$resetQueue$() {
  goog.async.run.workQueueScheduled_ = !1;
  goog.async.run.workQueue_ = new goog.async.WorkQueue;
});
goog.async.run.processWorkQueue = function $goog$async$run$processWorkQueue$() {
  for (var $item$$; $item$$ = goog.async.run.workQueue_.remove();) {
    try {
      $item$$.fn.call($item$$.scope);
    } catch ($e$$) {
      goog.async.throwException($e$$);
    }
    goog.async.run.workQueue_.returnUnused($item$$);
  }
  goog.async.run.workQueueScheduled_ = !1;
};
goog.promise = {};
goog.promise.Resolver = function $goog$promise$Resolver$() {
};
goog.Promise = function $goog$Promise$($resolver$$, $opt_context$$) {
  this.state_ = goog.Promise.State_.PENDING;
  this.result_ = void 0;
  this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
  this.executing_ = !1;
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);
  goog.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0);
  if ($resolver$$ != goog.nullFunction) {
    try {
      var $self$$ = this;
      $resolver$$.call($opt_context$$, function($value$$) {
        $self$$.resolve_(goog.Promise.State_.FULFILLED, $value$$);
      }, function($reason$$) {
        if (goog.DEBUG && !($reason$$ instanceof goog.Promise.CancellationError)) {
          try {
            if ($reason$$ instanceof Error) {
              throw $reason$$;
            }
            throw Error("Promise rejected.");
          } catch ($e$$) {
          }
        }
        $self$$.resolve_(goog.Promise.State_.REJECTED, $reason$$);
      });
    } catch ($e$$) {
      this.resolve_(goog.Promise.State_.REJECTED, $e$$);
    }
  }
};
goog.Promise.LONG_STACK_TRACES = !1;
goog.Promise.UNHANDLED_REJECTION_DELAY = 0;
goog.Promise.State_ = {PENDING:0, BLOCKED:1, FULFILLED:2, REJECTED:3};
goog.Promise.CallbackEntry_ = function $goog$Promise$CallbackEntry_$() {
  this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.CallbackEntry_.prototype.reset = function $goog$Promise$CallbackEntry_$$reset$() {
  this.context = this.onRejected = this.onFulfilled = this.child = null;
  this.always = !1;
};
goog.Promise.DEFAULT_MAX_UNUSED = 100;
goog.Promise.freelist_ = new goog.async.FreeList(function() {
  return new goog.Promise.CallbackEntry_;
}, function($item$$) {
  $item$$.reset();
}, goog.Promise.DEFAULT_MAX_UNUSED);
goog.Promise.getCallbackEntry_ = function $goog$Promise$getCallbackEntry_$($onFulfilled$$, $onRejected$$, $context$$) {
  var $entry$$ = goog.Promise.freelist_.get();
  $entry$$.onFulfilled = $onFulfilled$$;
  $entry$$.onRejected = $onRejected$$;
  $entry$$.context = $context$$;
  return $entry$$;
};
goog.Promise.returnEntry_ = function $goog$Promise$returnEntry_$($entry$$) {
  goog.Promise.freelist_.put($entry$$);
};
goog.Promise.resolve = function $goog$Promise$resolve$($opt_value$$) {
  if ($opt_value$$ instanceof goog.Promise) {
    return $opt_value$$;
  }
  var $promise$$ = new goog.Promise(goog.nullFunction);
  $promise$$.resolve_(goog.Promise.State_.FULFILLED, $opt_value$$);
  return $promise$$;
};
goog.Promise.reject = function $goog$Promise$reject$($opt_reason$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $reject$$($opt_reason$$);
  });
};
goog.Promise.resolveThen_ = function $goog$Promise$resolveThen_$($value$$, $onFulfilled$$, $onRejected$$) {
  goog.Promise.maybeThen_($value$$, $onFulfilled$$, $onRejected$$, null) || goog.async.run(goog.partial($onFulfilled$$, $value$$));
};
goog.Promise.race = function $goog$Promise$race$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    $promises$$.length || $resolve$$(void 0);
    for (var $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
      $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $resolve$$, $reject$$);
    }
  });
};
goog.Promise.all = function $goog$Promise$all$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toFulfill$$ = $promises$$.length, $values$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$$, $value$$) {
        $toFulfill$$--;
        $values$$[$index$$] = $value$$;
        0 == $toFulfill$$ && $resolve$$($values$$);
      }, $onReject$$ = function $$onReject$$$($reason$$) {
        $reject$$($reason$$);
      }, $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onFulfill$$, $i$$), $onReject$$);
      }
    } else {
      $resolve$$($values$$);
    }
  });
};
goog.Promise.allSettled = function $goog$Promise$allSettled$($promises$$) {
  return new goog.Promise(function($resolve$$, $onSettled_reject$$) {
    var $toSettle$$ = $promises$$.length, $results$$ = [];
    if ($toSettle$$) {
      $onSettled_reject$$ = function $$onSettled_reject$$$($index$$, $fulfilled$$, $result$$) {
        $toSettle$$--;
        $results$$[$index$$] = $fulfilled$$ ? {fulfilled:!0, value:$result$$} : {fulfilled:!1, reason:$result$$};
        0 == $toSettle$$ && $resolve$$($results$$);
      };
      for (var $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, goog.partial($onSettled_reject$$, $i$$, !0), goog.partial($onSettled_reject$$, $i$$, !1));
      }
    } else {
      $resolve$$($results$$);
    }
  });
};
goog.Promise.firstFulfilled = function $goog$Promise$firstFulfilled$($promises$$) {
  return new goog.Promise(function($resolve$$, $reject$$) {
    var $toReject$$ = $promises$$.length, $reasons$$ = [];
    if ($toReject$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($value$$) {
        $resolve$$($value$$);
      }, $onReject$$ = function $$onReject$$$($index$$, $reason$$) {
        $toReject$$--;
        $reasons$$[$index$$] = $reason$$;
        0 == $toReject$$ && $reject$$($reasons$$);
      }, $i$$ = 0, $promise$$; $i$$ < $promises$$.length; $i$$++) {
        $promise$$ = $promises$$[$i$$], goog.Promise.resolveThen_($promise$$, $onFulfill$$, goog.partial($onReject$$, $i$$));
      }
    } else {
      $resolve$$(void 0);
    }
  });
};
goog.Promise.withResolver = function $goog$Promise$withResolver$() {
  var $resolve$$, $reject$$, $promise$$ = new goog.Promise(function($rs$$, $rj$$) {
    $resolve$$ = $rs$$;
    $reject$$ = $rj$$;
  });
  return new goog.Promise.Resolver_($promise$$, $resolve$$, $reject$$);
};
goog.Promise.prototype.then = function $goog$Promise$$then$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  return this.addChildPromise_(goog.isFunction($opt_onFulfilled$$) ? $opt_onFulfilled$$ : null, goog.isFunction($opt_onRejected$$) ? $opt_onRejected$$ : null, $opt_context$$);
};
goog.Thenable.addImplementation(goog.Promise);
goog.Promise.prototype.thenVoid = function $goog$Promise$$thenVoid$($opt_onFulfilled$$, $opt_onRejected$$, $opt_context$$) {
  null != $opt_onFulfilled$$ && goog.asserts.assertFunction($opt_onFulfilled$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$ && goog.asserts.assertFunction($opt_onRejected$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
  this.addCallbackEntry_(goog.Promise.getCallbackEntry_($opt_onFulfilled$$ || goog.nullFunction, $opt_onRejected$$ || null, $opt_context$$));
};
goog.Promise.prototype.thenAlways = function $goog$Promise$$thenAlways$($entry$jscomp$2_onSettled$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways"));
  $entry$jscomp$2_onSettled$$ = goog.Promise.getCallbackEntry_($entry$jscomp$2_onSettled$$, $entry$jscomp$2_onSettled$$, $opt_context$$);
  $entry$jscomp$2_onSettled$$.always = !0;
  this.addCallbackEntry_($entry$jscomp$2_onSettled$$);
  return this;
};
goog.Promise.prototype.thenCatch = function $goog$Promise$$thenCatch$($onRejected$$, $opt_context$$) {
  goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch"));
  return this.addChildPromise_(null, $onRejected$$, $opt_context$$);
};
goog.Promise.prototype.cancel = function $goog$Promise$$cancel$($opt_message$$) {
  this.state_ == goog.Promise.State_.PENDING && goog.async.run(function() {
    var $err$$ = new goog.Promise.CancellationError($opt_message$$);
    this.cancelInternal_($err$$);
  }, this);
};
goog.Promise.prototype.cancelInternal_ = function $goog$Promise$$cancelInternal_$($err$$) {
  this.state_ == goog.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, $err$$), this.parent_ = null) : this.resolve_(goog.Promise.State_.REJECTED, $err$$));
};
goog.Promise.prototype.cancelChild_ = function $goog$Promise$$cancelChild_$($childPromise$$, $err$$) {
  if (this.callbackEntries_) {
    for (var $childCount$$ = 0, $childEntry$$ = null, $beforeChildEntry$$ = null, $entry$$ = this.callbackEntries_; $entry$$ && ($entry$$.always || ($childCount$$++, $entry$$.child == $childPromise$$ && ($childEntry$$ = $entry$$), !($childEntry$$ && 1 < $childCount$$))); $entry$$ = $entry$$.next) {
      $childEntry$$ || ($beforeChildEntry$$ = $entry$$);
    }
    $childEntry$$ && (this.state_ == goog.Promise.State_.PENDING && 1 == $childCount$$ ? this.cancelInternal_($err$$) : ($beforeChildEntry$$ ? this.removeEntryAfter_($beforeChildEntry$$) : this.popEntry_(), this.executeCallback_($childEntry$$, goog.Promise.State_.REJECTED, $err$$)));
  }
};
goog.Promise.prototype.addCallbackEntry_ = function $goog$Promise$$addCallbackEntry_$($callbackEntry$$) {
  this.hasEntry_() || this.state_ != goog.Promise.State_.FULFILLED && this.state_ != goog.Promise.State_.REJECTED || this.scheduleCallbacks_();
  this.queueEntry_($callbackEntry$$);
};
goog.Promise.prototype.addChildPromise_ = function $goog$Promise$$addChildPromise_$($onFulfilled$$, $onRejected$$, $opt_context$$) {
  var $callbackEntry$$ = goog.Promise.getCallbackEntry_(null, null, null);
  $callbackEntry$$.child = new goog.Promise(function($resolve$$, $reject$$) {
    $callbackEntry$$.onFulfilled = $onFulfilled$$ ? function($value$$) {
      try {
        var $result$$ = $onFulfilled$$.call($opt_context$$, $value$$);
        $resolve$$($result$$);
      } catch ($err$$) {
        $reject$$($err$$);
      }
    } : $resolve$$;
    $callbackEntry$$.onRejected = $onRejected$$ ? function($reason$$) {
      try {
        var $result$$ = $onRejected$$.call($opt_context$$, $reason$$);
        !goog.isDef($result$$) && $reason$$ instanceof goog.Promise.CancellationError ? $reject$$($reason$$) : $resolve$$($result$$);
      } catch ($err$$) {
        $reject$$($err$$);
      }
    } : $reject$$;
  });
  $callbackEntry$$.child.parent_ = this;
  this.addCallbackEntry_($callbackEntry$$);
  return $callbackEntry$$.child;
};
goog.Promise.prototype.unblockAndFulfill_ = function $goog$Promise$$unblockAndFulfill_$($value$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.FULFILLED, $value$$);
};
goog.Promise.prototype.unblockAndReject_ = function $goog$Promise$$unblockAndReject_$($reason$$) {
  goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
  this.state_ = goog.Promise.State_.PENDING;
  this.resolve_(goog.Promise.State_.REJECTED, $reason$$);
};
goog.Promise.prototype.resolve_ = function $goog$Promise$$resolve_$($state$$, $x$$) {
  this.state_ == goog.Promise.State_.PENDING && (this === $x$$ && ($state$$ = goog.Promise.State_.REJECTED, $x$$ = new TypeError("Promise cannot resolve to itself")), this.state_ = goog.Promise.State_.BLOCKED, goog.Promise.maybeThen_($x$$, this.unblockAndFulfill_, this.unblockAndReject_, this) || (this.result_ = $x$$, this.state_ = $state$$, this.parent_ = null, this.scheduleCallbacks_(), $state$$ != goog.Promise.State_.REJECTED || $x$$ instanceof goog.Promise.CancellationError || goog.Promise.addUnhandledRejection_(this, 
  $x$$)));
};
goog.Promise.maybeThen_ = function $goog$Promise$maybeThen_$($value$$, $onFulfilled$$, $onRejected$$, $context$$) {
  if ($value$$ instanceof goog.Promise) {
    return $value$$.thenVoid($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.Thenable.isImplementedBy($value$$)) {
    return $value$$.then($onFulfilled$$, $onRejected$$, $context$$), !0;
  }
  if (goog.isObject($value$$)) {
    try {
      var $then$$ = $value$$.then;
      if (goog.isFunction($then$$)) {
        return goog.Promise.tryThen_($value$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$), !0;
      }
    } catch ($e$$) {
      return $onRejected$$.call($context$$, $e$$), !0;
    }
  }
  return !1;
};
goog.Promise.tryThen_ = function $goog$Promise$tryThen_$($thenable$$, $then$$, $onFulfilled$$, $onRejected$$, $context$$) {
  var $called$$ = !1, $resolve$$ = function $$resolve$$$($value$$) {
    $called$$ || ($called$$ = !0, $onFulfilled$$.call($context$$, $value$$));
  }, $reject$$ = function $$reject$$$($reason$$) {
    $called$$ || ($called$$ = !0, $onRejected$$.call($context$$, $reason$$));
  };
  try {
    $then$$.call($thenable$$, $resolve$$, $reject$$);
  } catch ($e$$) {
    $reject$$($e$$);
  }
};
goog.Promise.prototype.scheduleCallbacks_ = function $goog$Promise$$scheduleCallbacks_$() {
  this.executing_ || (this.executing_ = !0, goog.async.run(this.executeCallbacks_, this));
};
goog.Promise.prototype.hasEntry_ = function $goog$Promise$$hasEntry_$() {
  return !!this.callbackEntries_;
};
goog.Promise.prototype.queueEntry_ = function $goog$Promise$$queueEntry_$($entry$$) {
  goog.asserts.assert(null != $entry$$.onFulfilled);
  this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = $entry$$ : this.callbackEntries_ = $entry$$;
  this.callbackEntriesTail_ = $entry$$;
};
goog.Promise.prototype.popEntry_ = function $goog$Promise$$popEntry_$() {
  var $entry$$ = null;
  this.callbackEntries_ && ($entry$$ = this.callbackEntries_, this.callbackEntries_ = $entry$$.next, $entry$$.next = null);
  this.callbackEntries_ || (this.callbackEntriesTail_ = null);
  null != $entry$$ && goog.asserts.assert(null != $entry$$.onFulfilled);
  return $entry$$;
};
goog.Promise.prototype.removeEntryAfter_ = function $goog$Promise$$removeEntryAfter_$($previous$$) {
  goog.asserts.assert(this.callbackEntries_);
  goog.asserts.assert(null != $previous$$);
  $previous$$.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = $previous$$);
  $previous$$.next = $previous$$.next.next;
};
goog.Promise.prototype.executeCallbacks_ = function $goog$Promise$$executeCallbacks_$() {
  for (var $entry$$; $entry$$ = this.popEntry_();) {
    goog.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_($entry$$, this.state_, this.result_);
  }
  this.executing_ = !1;
};
goog.Promise.prototype.executeCallback_ = function $goog$Promise$$executeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.REJECTED && $callbackEntry$$.onRejected && !$callbackEntry$$.always && this.removeUnhandledRejection_();
  if ($callbackEntry$$.child) {
    $callbackEntry$$.child.parent_ = null, goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
  } else {
    try {
      $callbackEntry$$.always ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context) : goog.Promise.invokeCallback_($callbackEntry$$, $state$$, $result$$);
    } catch ($err$$) {
      goog.Promise.handleRejection_.call(null, $err$$);
    }
  }
  goog.Promise.returnEntry_($callbackEntry$$);
};
goog.Promise.invokeCallback_ = function $goog$Promise$invokeCallback_$($callbackEntry$$, $state$$, $result$$) {
  $state$$ == goog.Promise.State_.FULFILLED ? $callbackEntry$$.onFulfilled.call($callbackEntry$$.context, $result$$) : $callbackEntry$$.onRejected && $callbackEntry$$.onRejected.call($callbackEntry$$.context, $result$$);
};
goog.Promise.prototype.addStackTrace_ = function $goog$Promise$$addStackTrace_$($err$jscomp$11_message$$) {
  if (goog.Promise.LONG_STACK_TRACES && goog.isString($err$jscomp$11_message$$.stack)) {
    var $trace$$ = $err$jscomp$11_message$$.stack.split("\n", 4)[3];
    $err$jscomp$11_message$$ = $err$jscomp$11_message$$.message;
    $err$jscomp$11_message$$ += Array(11 - $err$jscomp$11_message$$.length).join(" ");
    this.stack_.push($err$jscomp$11_message$$ + $trace$$);
  }
};
goog.Promise.prototype.appendLongStack_ = function $goog$Promise$$appendLongStack_$($err$$) {
  if (goog.Promise.LONG_STACK_TRACES && $err$$ && goog.isString($err$$.stack) && this.stack_.length) {
    for (var $longTrace$$ = ["Promise trace:"], $promise$$ = this; $promise$$; $promise$$ = $promise$$.parent_) {
      for (var $i$$ = this.currentStep_; 0 <= $i$$; $i$$--) {
        $longTrace$$.push($promise$$.stack_[$i$$]);
      }
      $longTrace$$.push("Value: [" + ($promise$$.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$.result_) + ">");
    }
    $err$$.stack += "\n\n" + $longTrace$$.join("\n");
  }
};
goog.Promise.prototype.removeUnhandledRejection_ = function $goog$Promise$$removeUnhandledRejection_$() {
  if (0 < goog.Promise.UNHANDLED_REJECTION_DELAY) {
    for (var $p$$ = this; $p$$ && $p$$.unhandledRejectionId_; $p$$ = $p$$.parent_) {
      goog.global.clearTimeout($p$$.unhandledRejectionId_), $p$$.unhandledRejectionId_ = 0;
    }
  } else {
    if (0 == goog.Promise.UNHANDLED_REJECTION_DELAY) {
      for ($p$$ = this; $p$$ && $p$$.hadUnhandledRejection_; $p$$ = $p$$.parent_) {
        $p$$.hadUnhandledRejection_ = !1;
      }
    }
  }
};
goog.Promise.addUnhandledRejection_ = function $goog$Promise$addUnhandledRejection_$($promise$$, $reason$$) {
  0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? $promise$$.unhandledRejectionId_ = goog.global.setTimeout(function() {
    $promise$$.appendLongStack_($reason$$);
    goog.Promise.handleRejection_.call(null, $reason$$);
  }, goog.Promise.UNHANDLED_REJECTION_DELAY) : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && ($promise$$.hadUnhandledRejection_ = !0, goog.async.run(function() {
    $promise$$.hadUnhandledRejection_ && ($promise$$.appendLongStack_($reason$$), goog.Promise.handleRejection_.call(null, $reason$$));
  }));
};
goog.Promise.handleRejection_ = goog.async.throwException;
goog.Promise.setUnhandledRejectionHandler = function $goog$Promise$setUnhandledRejectionHandler$($handler$$) {
  goog.Promise.handleRejection_ = $handler$$;
};
goog.Promise.CancellationError = function $goog$Promise$CancellationError$($opt_message$$) {
  goog.debug.Error.call(this, $opt_message$$);
};
goog.inherits(goog.Promise.CancellationError, goog.debug.Error);
goog.Promise.CancellationError.prototype.name = "cancel";
goog.Promise.Resolver_ = function $goog$Promise$Resolver_$($promise$$, $resolve$$, $reject$$) {
  this.promise = $promise$$;
  this.resolve = $resolve$$;
  this.reject = $reject$$;
};
goog.labs.userAgent.platform = {};
goog.labs.userAgent.platform.isAndroid = function $goog$labs$userAgent$platform$isAndroid$() {
  return goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.platform.isIpod = function $goog$labs$userAgent$platform$isIpod$() {
  return goog.labs.userAgent.util.matchUserAgent("iPod");
};
goog.labs.userAgent.platform.isIphone = function $goog$labs$userAgent$platform$isIphone$() {
  return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIpad = function $goog$labs$userAgent$platform$isIpad$() {
  return goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIos = function $goog$labs$userAgent$platform$isIos$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
goog.labs.userAgent.platform.isMacintosh = function $goog$labs$userAgent$platform$isMacintosh$() {
  return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
goog.labs.userAgent.platform.isLinux = function $goog$labs$userAgent$platform$isLinux$() {
  return goog.labs.userAgent.util.matchUserAgent("Linux");
};
goog.labs.userAgent.platform.isWindows = function $goog$labs$userAgent$platform$isWindows$() {
  return goog.labs.userAgent.util.matchUserAgent("Windows");
};
goog.labs.userAgent.platform.isChromeOS = function $goog$labs$userAgent$platform$isChromeOS$() {
  return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
goog.labs.userAgent.platform.getVersion = function $goog$labs$userAgent$platform$getVersion$() {
  var $match$jscomp$4_userAgentString$$ = goog.labs.userAgent.util.getUserAgent();
  var $re$jscomp$3_version$$ = "";
  goog.labs.userAgent.platform.isWindows() ? ($re$jscomp$3_version$$ = /Windows (?:NT|Phone) ([0-9.]+)/, $re$jscomp$3_version$$ = ($match$jscomp$4_userAgentString$$ = $re$jscomp$3_version$$.exec($match$jscomp$4_userAgentString$$)) ? $match$jscomp$4_userAgentString$$[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? ($re$jscomp$3_version$$ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, $re$jscomp$3_version$$ = ($match$jscomp$4_userAgentString$$ = $re$jscomp$3_version$$.exec($match$jscomp$4_userAgentString$$)) && 
  $match$jscomp$4_userAgentString$$[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? ($re$jscomp$3_version$$ = /Mac OS X ([0-9_.]+)/, $re$jscomp$3_version$$ = ($match$jscomp$4_userAgentString$$ = $re$jscomp$3_version$$.exec($match$jscomp$4_userAgentString$$)) ? $match$jscomp$4_userAgentString$$[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isAndroid() ? ($re$jscomp$3_version$$ = /Android\s+([^\);]+)(\)|;)/, $re$jscomp$3_version$$ = ($match$jscomp$4_userAgentString$$ = 
  $re$jscomp$3_version$$.exec($match$jscomp$4_userAgentString$$)) && $match$jscomp$4_userAgentString$$[1]) : goog.labs.userAgent.platform.isChromeOS() && ($re$jscomp$3_version$$ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, $re$jscomp$3_version$$ = ($match$jscomp$4_userAgentString$$ = $re$jscomp$3_version$$.exec($match$jscomp$4_userAgentString$$)) && $match$jscomp$4_userAgentString$$[1]);
  return $re$jscomp$3_version$$ || "";
};
goog.labs.userAgent.platform.isVersionOrHigher = function $goog$labs$userAgent$platform$isVersionOrHigher$($version$$) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), $version$$);
};
goog.reflect = {};
goog.reflect.object = function $goog$reflect$object$($type$$, $object$$) {
  return $object$$;
};
goog.reflect.objectProperty = function $goog$reflect$objectProperty$($prop$$, $object$$) {
  return $prop$$;
};
goog.reflect.sinkValue = function $goog$reflect$sinkValue$($x$$) {
  goog.reflect.sinkValue[" "]($x$$);
  return $x$$;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function $goog$reflect$canAccessProperty$($obj$$, $prop$$) {
  try {
    return goog.reflect.sinkValue($obj$$[$prop$$]), !0;
  } catch ($e$$) {
  }
  return !1;
};
goog.reflect.cache = function $goog$reflect$cache$($cacheObj$$, $key$$, $valueFn$$, $opt_keyFn_storedKey$$) {
  $opt_keyFn_storedKey$$ = $opt_keyFn_storedKey$$ ? $opt_keyFn_storedKey$$($key$$) : $key$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $opt_keyFn_storedKey$$) ? $cacheObj$$[$opt_keyFn_storedKey$$] : $cacheObj$$[$opt_keyFn_storedKey$$] = $valueFn$$($key$$);
};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_EDGE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function $goog$userAgent$getUserAgentString$() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigator = function $goog$userAgent$getNavigator$() {
  return goog.global.navigator || null;
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function $goog$userAgent$isMobile_$() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function $goog$userAgent$determinePlatform_$() {
  var $navigator$$ = goog.userAgent.getNavigator();
  return $navigator$$ && $navigator$$.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.ASSUME_IPOD = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function $goog$userAgent$isLegacyLinux_$() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function $goog$userAgent$isX11_$() {
  var $navigator$$ = goog.userAgent.getNavigator();
  return !!$navigator$$ && goog.string.contains($navigator$$.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
goog.userAgent.determineVersion_ = function $goog$userAgent$determineVersion_$() {
  var $version$$ = "", $arr$$ = goog.userAgent.getVersionRegexResult_();
  $arr$$ && ($version$$ = $arr$$ ? $arr$$[1] : "");
  return goog.userAgent.IE && ($arr$$ = goog.userAgent.getDocumentMode_(), null != $arr$$ && $arr$$ > parseFloat($version$$)) ? String($arr$$) : $version$$;
};
goog.userAgent.getVersionRegexResult_ = function $goog$userAgent$getVersionRegexResult_$() {
  var $userAgent$$ = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv\:([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec($userAgent$$);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$$);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec($userAgent$$);
  }
  if (goog.userAgent.OPERA) {
    return /(?:Version)[ \/]?(\S+)/.exec($userAgent$$);
  }
};
goog.userAgent.getDocumentMode_ = function $goog$userAgent$getDocumentMode_$() {
  var $doc$$ = goog.global.document;
  return $doc$$ ? $doc$$.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function $goog$userAgent$compare$($v1$$, $v2$$) {
  return goog.string.compareVersions($v1$$, $v2$$);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function $goog$userAgent$isVersionOrHigher$($version$$) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, $version$$, function() {
    return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, $version$$);
  });
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function $goog$userAgent$isDocumentModeOrHigher$($documentMode$$) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= $documentMode$$;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var $doc$$ = goog.global.document, $mode$$ = goog.userAgent.getDocumentMode_();
  if ($doc$$ && goog.userAgent.IE) {
    return $mode$$ || ("CSS1Compat" == $doc$$.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5);
  }
}();
goog.events = {};
$jscomp.scope.purify = function $$jscomp$scope$purify$($fn$$) {
  return $fn$$();
};
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"), HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher("528"), HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9b") || goog.userAgent.IE && 
goog.userAgent.isVersionOrHigher("8") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher("9.5") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("528"), HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("8") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"), TOUCH_ENABLED:"ontouchstart" in goog.global || !!(goog.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!goog.global.navigator || 
!goog.global.navigator.msMaxTouchPoints), PASSIVE_EVENTS:(0,$jscomp.scope.purify)(function() {
  if (!goog.global.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var $passive$$ = !1, $options$$ = Object.defineProperty({}, "passive", {get:function() {
    $passive$$ = !0;
  }});
  goog.global.addEventListener("test", null, $options$$);
  goog.global.removeEventListener("test", null, $options$$);
  return $passive$$;
})};
goog.events.EventId = function $goog$events$EventId$($eventId$$) {
  this.id = $eventId$$;
};
goog.events.EventId.prototype.toString = function $goog$events$EventId$$toString$() {
  return this.id;
};
goog.events.Event = function $goog$events$Event$($type$$, $opt_target$$) {
  this.type = $type$$ instanceof goog.events.EventId ? String($type$$) : $type$$;
  this.currentTarget = this.target = $opt_target$$;
  this.defaultPrevented = this.propagationStopped_ = !1;
  this.returnValue_ = !0;
};
goog.events.Event.prototype.stopPropagation = function $goog$events$Event$$stopPropagation$() {
  this.propagationStopped_ = !0;
};
goog.events.Event.prototype.preventDefault = function $goog$events$Event$$preventDefault$() {
  this.defaultPrevented = !0;
  this.returnValue_ = !1;
};
goog.events.Event.stopPropagation = function $goog$events$Event$stopPropagation$($e$$) {
  $e$$.stopPropagation();
};
goog.events.Event.preventDefault = function $goog$events$Event$preventDefault$($e$$) {
  $e$$.preventDefault();
};
goog.events.getVendorPrefixedName_ = function $goog$events$getVendorPrefixedName_$($eventName$$) {
  return goog.userAgent.WEBKIT ? "webkit" + $eventName$$ : goog.userAgent.OPERA ? "o" + $eventName$$.toLowerCase() : $eventName$$.toLowerCase();
};
goog.events.EventType = {CLICK:"click", RIGHTCLICK:"rightclick", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", MOUSEENTER:"mouseenter", MOUSELEAVE:"mouseleave", SELECTIONCHANGE:"selectionchange", SELECTSTART:"selectstart", WHEEL:"wheel", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? 
"focusout" : "DOMFocusOut", CHANGE:"change", RESET:"reset", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", DRAGSTART:"dragstart", DRAG:"drag", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", DRAGEND:"dragend", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", BEFOREUNLOAD:"beforeunload", CONSOLEMESSAGE:"consolemessage", CONTEXTMENU:"contextmenu", DEVICEMOTION:"devicemotion", DEVICEORIENTATION:"deviceorientation", 
DOMCONTENTLOADED:"DOMContentLoaded", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", ORIENTATIONCHANGE:"orientationchange", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", CANPLAY:"canplay", CANPLAYTHROUGH:"canplaythrough", DURATIONCHANGE:"durationchange", EMPTIED:"emptied", ENDED:"ended", LOADEDDATA:"loadeddata", LOADEDMETADATA:"loadedmetadata", PAUSE:"pause", PLAY:"play", PLAYING:"playing", RATECHANGE:"ratechange", SEEKED:"seeked", SEEKING:"seeking", 
STALLED:"stalled", SUSPEND:"suspend", TIMEUPDATE:"timeupdate", VOLUMECHANGE:"volumechange", WAITING:"waiting", SOURCEOPEN:"sourceopen", SOURCEENDED:"sourceended", SOURCECLOSED:"sourceclosed", ABORT:"abort", UPDATE:"update", UPDATESTART:"updatestart", UPDATEEND:"updateend", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", BEFORECOPY:"beforecopy", BEFORECUT:"beforecut", BEFOREPASTE:"beforepaste", ONLINE:"online", OFFLINE:"offline", 
MESSAGE:"message", CONNECT:"connect", INSTALL:"install", ACTIVATE:"activate", FETCH:"fetch", FOREIGNFETCH:"foreignfetch", MESSAGEERROR:"messageerror", STATECHANGE:"statechange", UPDATEFOUND:"updatefound", CONTROLLERCHANGE:"controllerchange", ANIMATIONSTART:goog.events.getVendorPrefixedName_("AnimationStart"), ANIMATIONEND:goog.events.getVendorPrefixedName_("AnimationEnd"), ANIMATIONITERATION:goog.events.getVendorPrefixedName_("AnimationIteration"), TRANSITIONEND:goog.events.getVendorPrefixedName_("TransitionEnd"), 
POINTERDOWN:"pointerdown", POINTERUP:"pointerup", POINTERCANCEL:"pointercancel", POINTERMOVE:"pointermove", POINTEROVER:"pointerover", POINTEROUT:"pointerout", POINTERENTER:"pointerenter", POINTERLEAVE:"pointerleave", GOTPOINTERCAPTURE:"gotpointercapture", LOSTPOINTERCAPTURE:"lostpointercapture", MSGESTURECHANGE:"MSGestureChange", MSGESTUREEND:"MSGestureEnd", MSGESTUREHOLD:"MSGestureHold", MSGESTURESTART:"MSGestureStart", MSGESTURETAP:"MSGestureTap", MSGOTPOINTERCAPTURE:"MSGotPointerCapture", MSINERTIASTART:"MSInertiaStart", 
MSLOSTPOINTERCAPTURE:"MSLostPointerCapture", MSPOINTERCANCEL:"MSPointerCancel", MSPOINTERDOWN:"MSPointerDown", MSPOINTERENTER:"MSPointerEnter", MSPOINTERHOVER:"MSPointerHover", MSPOINTERLEAVE:"MSPointerLeave", MSPOINTERMOVE:"MSPointerMove", MSPOINTEROUT:"MSPointerOut", MSPOINTEROVER:"MSPointerOver", MSPOINTERUP:"MSPointerUp", TEXT:"text", TEXTINPUT:goog.userAgent.IE ? "textinput" : "textInput", COMPOSITIONSTART:"compositionstart", COMPOSITIONUPDATE:"compositionupdate", COMPOSITIONEND:"compositionend", 
BEFOREINPUT:"beforeinput", EXIT:"exit", LOADABORT:"loadabort", LOADCOMMIT:"loadcommit", LOADREDIRECT:"loadredirect", LOADSTART:"loadstart", LOADSTOP:"loadstop", RESPONSIVE:"responsive", SIZECHANGED:"sizechanged", UNRESPONSIVE:"unresponsive", VISIBILITYCHANGE:"visibilitychange", STORAGE:"storage", DOMSUBTREEMODIFIED:"DOMSubtreeModified", DOMNODEINSERTED:"DOMNodeInserted", DOMNODEREMOVED:"DOMNodeRemoved", DOMNODEREMOVEDFROMDOCUMENT:"DOMNodeRemovedFromDocument", DOMNODEINSERTEDINTODOCUMENT:"DOMNodeInsertedIntoDocument", 
DOMATTRMODIFIED:"DOMAttrModified", DOMCHARACTERDATAMODIFIED:"DOMCharacterDataModified", BEFOREPRINT:"beforeprint", AFTERPRINT:"afterprint"};
goog.events.BrowserEvent = function $goog$events$BrowserEvent$($opt_e$$, $opt_currentTarget$$) {
  goog.events.Event.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.platformModifierKey = !1;
  this.event_ = null;
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$);
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.init = function $goog$events$BrowserEvent$$init$($e$$, $opt_currentTarget$$) {
  var $type$$ = this.type = $e$$.type, $relevantTouch$$ = $e$$.changedTouches ? $e$$.changedTouches[0] : null;
  this.target = $e$$.target || $e$$.srcElement;
  this.currentTarget = $opt_currentTarget$$;
  ($opt_currentTarget$$ = $e$$.relatedTarget) ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty($opt_currentTarget$$, "nodeName") || ($opt_currentTarget$$ = null)) : $type$$ == goog.events.EventType.MOUSEOVER ? $opt_currentTarget$$ = $e$$.fromElement : $type$$ == goog.events.EventType.MOUSEOUT && ($opt_currentTarget$$ = $e$$.toElement);
  this.relatedTarget = $opt_currentTarget$$;
  goog.isNull($relevantTouch$$) ? (this.offsetX = goog.userAgent.WEBKIT || void 0 !== $e$$.offsetX ? $e$$.offsetX : $e$$.layerX, this.offsetY = goog.userAgent.WEBKIT || void 0 !== $e$$.offsetY ? $e$$.offsetY : $e$$.layerY, this.clientX = void 0 !== $e$$.clientX ? $e$$.clientX : $e$$.pageX, this.clientY = void 0 !== $e$$.clientY ? $e$$.clientY : $e$$.pageY, this.screenX = $e$$.screenX || 0, this.screenY = $e$$.screenY || 0) : (this.clientX = void 0 !== $relevantTouch$$.clientX ? $relevantTouch$$.clientX : 
  $relevantTouch$$.pageX, this.clientY = void 0 !== $relevantTouch$$.clientY ? $relevantTouch$$.clientY : $relevantTouch$$.pageY, this.screenX = $relevantTouch$$.screenX || 0, this.screenY = $relevantTouch$$.screenY || 0);
  this.button = $e$$.button;
  this.keyCode = $e$$.keyCode || 0;
  this.key = $e$$.key || "";
  this.charCode = $e$$.charCode || ("keypress" == $type$$ ? $e$$.keyCode : 0);
  this.ctrlKey = $e$$.ctrlKey;
  this.altKey = $e$$.altKey;
  this.shiftKey = $e$$.shiftKey;
  this.metaKey = $e$$.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? $e$$.metaKey : $e$$.ctrlKey;
  this.state = $e$$.state;
  this.event_ = $e$$;
  $e$$.defaultPrevented && this.preventDefault();
};
goog.events.BrowserEvent.prototype.isButton = function $goog$events$BrowserEvent$$isButton$($button$$) {
  return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == $button$$ : "click" == this.type ? $button$$ == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[$button$$]);
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function $goog$events$BrowserEvent$$isMouseActionButton$() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey);
};
goog.events.BrowserEvent.prototype.stopPropagation = function $goog$events$BrowserEvent$$stopPropagation$() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0;
};
goog.events.BrowserEvent.prototype.preventDefault = function $goog$events$BrowserEvent$$preventDefault$() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var $be$$ = this.event_;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$$) {
      }
    }
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function $goog$events$BrowserEvent$$getBrowserEvent$() {
  return this.event_;
};
goog.events.Listenable = function $goog$events$Listenable$() {
};
goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1e6 * Math.random() | 0);
goog.events.Listenable.addImplementation = function $goog$events$Listenable$addImplementation$($cls$$) {
  $cls$$.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = !0;
};
goog.events.Listenable.isImplementedBy = function $goog$events$Listenable$isImplementedBy$($obj$$) {
  return !(!$obj$$ || !$obj$$[goog.events.Listenable.IMPLEMENTED_BY_PROP]);
};
goog.events.ListenableKey = function $goog$events$ListenableKey$() {
};
goog.events.ListenableKey.counter_ = 0;
goog.events.ListenableKey.reserveKey = function $goog$events$ListenableKey$reserveKey$() {
  return ++goog.events.ListenableKey.counter_;
};
goog.events.Listener = function $goog$events$Listener$($listener$$, $proxy$$, $src$$, $type$$, $capture$$, $opt_handler$$) {
  goog.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack);
  this.listener = $listener$$;
  this.proxy = $proxy$$;
  this.src = $src$$;
  this.type = $type$$;
  this.capture = !!$capture$$;
  this.handler = $opt_handler$$;
  this.key = goog.events.ListenableKey.reserveKey();
  this.removed = this.callOnce = !1;
};
goog.events.Listener.ENABLE_MONITORING = !1;
goog.events.Listener.prototype.markAsRemoved = function $goog$events$Listener$$markAsRemoved$() {
  this.removed = !0;
  this.handler = this.src = this.proxy = this.listener = null;
};
goog.events.ListenerMap = function $goog$events$ListenerMap$($src$$) {
  this.src = $src$$;
  this.listeners = {};
  this.typeCount_ = 0;
};
goog.events.ListenerMap.prototype.getTypeCount = function $goog$events$ListenerMap$$getTypeCount$() {
  return this.typeCount_;
};
goog.events.ListenerMap.prototype.getListenerCount = function $goog$events$ListenerMap$$getListenerCount$() {
  var $count$$ = 0, $type$$;
  for ($type$$ in this.listeners) {
    $count$$ += this.listeners[$type$$].length;
  }
  return $count$$;
};
goog.events.ListenerMap.prototype.add = function $goog$events$ListenerMap$$add$($listenerArray_type$$, $listener$$, $callOnce$$, $opt_useCapture$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$$.toString();
  $listenerArray_type$$ = this.listeners[$typeStr$$];
  $listenerArray_type$$ || ($listenerArray_type$$ = this.listeners[$typeStr$$] = [], this.typeCount_++);
  var $index$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray_type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$);
  -1 < $index$$ ? ($listener$$ = $listenerArray_type$$[$index$$], $callOnce$$ || ($listener$$.callOnce = !1)) : ($listener$$ = new goog.events.Listener($listener$$, null, this.src, $typeStr$$, !!$opt_useCapture$$, $opt_listenerScope$$), $listener$$.callOnce = $callOnce$$, $listenerArray_type$$.push($listener$$));
  return $listener$$;
};
goog.events.ListenerMap.prototype.remove = function $goog$events$ListenerMap$$remove$($type$jscomp$114_typeStr$$, $index$jscomp$58_listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  $type$jscomp$114_typeStr$$ = $type$jscomp$114_typeStr$$.toString();
  if (!($type$jscomp$114_typeStr$$ in this.listeners)) {
    return !1;
  }
  var $listenerArray$$ = this.listeners[$type$jscomp$114_typeStr$$];
  $index$jscomp$58_listener$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray$$, $index$jscomp$58_listener$$, $opt_useCapture$$, $opt_listenerScope$$);
  return -1 < $index$jscomp$58_listener$$ ? ($listenerArray$$[$index$jscomp$58_listener$$].markAsRemoved(), goog.array.removeAt($listenerArray$$, $index$jscomp$58_listener$$), 0 == $listenerArray$$.length && (delete this.listeners[$type$jscomp$114_typeStr$$], this.typeCount_--), !0) : !1;
};
goog.events.ListenerMap.prototype.removeByKey = function $goog$events$ListenerMap$$removeByKey$($listener$$) {
  var $type$$ = $listener$$.type;
  if (!($type$$ in this.listeners)) {
    return !1;
  }
  var $removed$$ = goog.array.remove(this.listeners[$type$$], $listener$$);
  $removed$$ && ($listener$$.markAsRemoved(), 0 == this.listeners[$type$$].length && (delete this.listeners[$type$$], this.typeCount_--));
  return $removed$$;
};
goog.events.ListenerMap.prototype.removeAll = function $goog$events$ListenerMap$$removeAll$($opt_type$jscomp$8_typeStr$$) {
  $opt_type$jscomp$8_typeStr$$ = $opt_type$jscomp$8_typeStr$$ && $opt_type$jscomp$8_typeStr$$.toString();
  var $count$$ = 0, $type$$;
  for ($type$$ in this.listeners) {
    if (!$opt_type$jscomp$8_typeStr$$ || $type$$ == $opt_type$jscomp$8_typeStr$$) {
      for (var $listenerArray$$ = this.listeners[$type$$], $i$$ = 0; $i$$ < $listenerArray$$.length; $i$$++) {
        ++$count$$, $listenerArray$$[$i$$].markAsRemoved();
      }
      delete this.listeners[$type$$];
      this.typeCount_--;
    }
  }
  return $count$$;
};
goog.events.ListenerMap.prototype.getListeners = function $goog$events$ListenerMap$$getListeners$($listenerArray$jscomp$3_type$$, $capture$$) {
  $listenerArray$jscomp$3_type$$ = this.listeners[$listenerArray$jscomp$3_type$$.toString()];
  var $rv$$ = [];
  if ($listenerArray$jscomp$3_type$$) {
    for (var $i$$ = 0; $i$$ < $listenerArray$jscomp$3_type$$.length; ++$i$$) {
      var $listenerObj$$ = $listenerArray$jscomp$3_type$$[$i$$];
      $listenerObj$$.capture == $capture$$ && $rv$$.push($listenerObj$$);
    }
  }
  return $rv$$;
};
goog.events.ListenerMap.prototype.getListener = function $goog$events$ListenerMap$$getListener$($listenerArray$jscomp$4_type$$, $listener$$, $capture$$, $opt_listenerScope$$) {
  $listenerArray$jscomp$4_type$$ = this.listeners[$listenerArray$jscomp$4_type$$.toString()];
  var $i$$ = -1;
  $listenerArray$jscomp$4_type$$ && ($i$$ = goog.events.ListenerMap.findListenerIndex_($listenerArray$jscomp$4_type$$, $listener$$, $capture$$, $opt_listenerScope$$));
  return -1 < $i$$ ? $listenerArray$jscomp$4_type$$[$i$$] : null;
};
goog.events.ListenerMap.prototype.hasListener = function $goog$events$ListenerMap$$hasListener$($opt_type$$, $opt_capture$$) {
  var $hasType$$ = goog.isDef($opt_type$$), $typeStr$$ = $hasType$$ ? $opt_type$$.toString() : "", $hasCapture$$ = goog.isDef($opt_capture$$);
  return goog.object.some(this.listeners, function($listenerArray$$, $i$jscomp$78_type$$) {
    for ($i$jscomp$78_type$$ = 0; $i$jscomp$78_type$$ < $listenerArray$$.length; ++$i$jscomp$78_type$$) {
      if (!($hasType$$ && $listenerArray$$[$i$jscomp$78_type$$].type != $typeStr$$ || $hasCapture$$ && $listenerArray$$[$i$jscomp$78_type$$].capture != $opt_capture$$)) {
        return !0;
      }
    }
    return !1;
  });
};
goog.events.ListenerMap.findListenerIndex_ = function $goog$events$ListenerMap$findListenerIndex_$($listenerArray$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  for (var $i$$ = 0; $i$$ < $listenerArray$$.length; ++$i$$) {
    var $listenerObj$$ = $listenerArray$$[$i$$];
    if (!$listenerObj$$.removed && $listenerObj$$.listener == $listener$$ && $listenerObj$$.capture == !!$opt_useCapture$$ && $listenerObj$$.handler == $opt_listenerScope$$) {
      return $i$$;
    }
  }
  return -1;
};
goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1e6 * Math.random() | 0);
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.CaptureSimulationMode = {OFF_AND_FAIL:0, OFF_AND_SILENT:1, ON:2};
goog.events.CAPTURE_SIMULATION_MODE = 2;
goog.events.listenerCountEstimate_ = 0;
goog.events.listen = function $goog$events$listen$($src$$, $type$$, $listener$$, $capture$jscomp$3_opt_options$$, $opt_handler$$) {
  if ($capture$jscomp$3_opt_options$$ && $capture$jscomp$3_opt_options$$.once) {
    return goog.events.listenOnce($src$$, $type$$, $listener$$, $capture$jscomp$3_opt_options$$, $opt_handler$$);
  }
  if (goog.isArray($type$$)) {
    for (var $i$$ = 0; $i$$ < $type$$.length; $i$$++) {
      goog.events.listen($src$$, $type$$[$i$$], $listener$$, $capture$jscomp$3_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $listener$$ = goog.events.wrapListener($listener$$);
  return goog.events.Listenable.isImplementedBy($src$$) ? ($capture$jscomp$3_opt_options$$ = goog.isObject($capture$jscomp$3_opt_options$$) ? !!$capture$jscomp$3_opt_options$$.capture : !!$capture$jscomp$3_opt_options$$, $src$$.listen($type$$, $listener$$, $capture$jscomp$3_opt_options$$, $opt_handler$$)) : goog.events.listen_($src$$, $type$$, $listener$$, !1, $capture$jscomp$3_opt_options$$, $opt_handler$$);
};
goog.events.listen_ = function $goog$events$listen_$($src$$, $type$$, $listener$jscomp$55_listenerObj$$, $callOnce$jscomp$1_proxy$$, $opt_options$$, $opt_handler$$) {
  if (!$type$$) {
    throw Error("Invalid event type");
  }
  var $capture$$ = goog.isObject($opt_options$$) ? !!$opt_options$$.capture : !!$opt_options$$;
  if ($capture$$ && !goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_FAIL) {
      return goog.asserts.fail("Can not register capture listener in IE8-."), null;
    }
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_SILENT) {
      return null;
    }
  }
  var $listenerMap$$ = goog.events.getListenerMap_($src$$);
  $listenerMap$$ || ($src$$[goog.events.LISTENER_MAP_PROP_] = $listenerMap$$ = new goog.events.ListenerMap($src$$));
  $listener$jscomp$55_listenerObj$$ = $listenerMap$$.add($type$$, $listener$jscomp$55_listenerObj$$, $callOnce$jscomp$1_proxy$$, $capture$$, $opt_handler$$);
  if ($listener$jscomp$55_listenerObj$$.proxy) {
    return $listener$jscomp$55_listenerObj$$;
  }
  $callOnce$jscomp$1_proxy$$ = goog.events.getProxy();
  $listener$jscomp$55_listenerObj$$.proxy = $callOnce$jscomp$1_proxy$$;
  $callOnce$jscomp$1_proxy$$.src = $src$$;
  $callOnce$jscomp$1_proxy$$.listener = $listener$jscomp$55_listenerObj$$;
  if ($src$$.addEventListener) {
    goog.events.BrowserFeature.PASSIVE_EVENTS || ($opt_options$$ = $capture$$), void 0 === $opt_options$$ && ($opt_options$$ = !1), $src$$.addEventListener($type$$.toString(), $callOnce$jscomp$1_proxy$$, $opt_options$$);
  } else {
    if ($src$$.attachEvent) {
      $src$$.attachEvent(goog.events.getOnString_($type$$.toString()), $callOnce$jscomp$1_proxy$$);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  goog.events.listenerCountEstimate_++;
  return $listener$jscomp$55_listenerObj$$;
};
goog.events.getProxy = function $goog$events$getProxy$() {
  var $proxyCallbackFunction$$ = goog.events.handleBrowserEvent_, $f$$ = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$.src, $f$$.listener, $eventObject$$);
  } : function($eventObject$jscomp$1_v$$) {
    $eventObject$jscomp$1_v$$ = $proxyCallbackFunction$$.call($f$$.src, $f$$.listener, $eventObject$jscomp$1_v$$);
    if (!$eventObject$jscomp$1_v$$) {
      return $eventObject$jscomp$1_v$$;
    }
  };
  return $f$$;
};
goog.events.listenOnce = function $goog$events$listenOnce$($src$$, $type$$, $listener$$, $capture$jscomp$5_opt_options$$, $opt_handler$$) {
  if (goog.isArray($type$$)) {
    for (var $i$$ = 0; $i$$ < $type$$.length; $i$$++) {
      goog.events.listenOnce($src$$, $type$$[$i$$], $listener$$, $capture$jscomp$5_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $listener$$ = goog.events.wrapListener($listener$$);
  return goog.events.Listenable.isImplementedBy($src$$) ? ($capture$jscomp$5_opt_options$$ = goog.isObject($capture$jscomp$5_opt_options$$) ? !!$capture$jscomp$5_opt_options$$.capture : !!$capture$jscomp$5_opt_options$$, $src$$.listenOnce($type$$, $listener$$, $capture$jscomp$5_opt_options$$, $opt_handler$$)) : goog.events.listen_($src$$, $type$$, $listener$$, !0, $capture$jscomp$5_opt_options$$, $opt_handler$$);
};
goog.events.listenWithWrapper = function $goog$events$listenWithWrapper$($src$$, $wrapper$$, $listener$$, $opt_capt$$, $opt_handler$$) {
  $wrapper$$.listen($src$$, $listener$$, $opt_capt$$, $opt_handler$$);
};
goog.events.unlisten = function $goog$events$unlisten$($listenerMap$jscomp$1_src$$, $listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$) {
  if (goog.isArray($listenerObj$jscomp$5_type$$)) {
    for (var $i$$ = 0; $i$$ < $listenerObj$jscomp$5_type$$.length; $i$$++) {
      goog.events.unlisten($listenerMap$jscomp$1_src$$, $listenerObj$jscomp$5_type$$[$i$$], $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$);
    }
    return null;
  }
  $capture$jscomp$6_opt_options$$ = goog.isObject($capture$jscomp$6_opt_options$$) ? !!$capture$jscomp$6_opt_options$$.capture : !!$capture$jscomp$6_opt_options$$;
  $listener$$ = goog.events.wrapListener($listener$$);
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$1_src$$)) {
    return $listenerMap$jscomp$1_src$$.unlisten($listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$);
  }
  if (!$listenerMap$jscomp$1_src$$) {
    return !1;
  }
  if ($listenerMap$jscomp$1_src$$ = goog.events.getListenerMap_($listenerMap$jscomp$1_src$$)) {
    if ($listenerObj$jscomp$5_type$$ = $listenerMap$jscomp$1_src$$.getListener($listenerObj$jscomp$5_type$$, $listener$$, $capture$jscomp$6_opt_options$$, $opt_handler$$)) {
      return goog.events.unlistenByKey($listenerObj$jscomp$5_type$$);
    }
  }
  return !1;
};
goog.events.unlistenByKey = function $goog$events$unlistenByKey$($key$$) {
  if (goog.isNumber($key$$) || !$key$$ || $key$$.removed) {
    return !1;
  }
  var $src$$ = $key$$.src;
  if (goog.events.Listenable.isImplementedBy($src$$)) {
    return $src$$.unlistenByKey($key$$);
  }
  var $listenerMap$jscomp$2_type$$ = $key$$.type, $proxy$$ = $key$$.proxy;
  $src$$.removeEventListener ? $src$$.removeEventListener($listenerMap$jscomp$2_type$$, $proxy$$, $key$$.capture) : $src$$.detachEvent && $src$$.detachEvent(goog.events.getOnString_($listenerMap$jscomp$2_type$$), $proxy$$);
  goog.events.listenerCountEstimate_--;
  ($listenerMap$jscomp$2_type$$ = goog.events.getListenerMap_($src$$)) ? ($listenerMap$jscomp$2_type$$.removeByKey($key$$), 0 == $listenerMap$jscomp$2_type$$.getTypeCount() && ($listenerMap$jscomp$2_type$$.src = null, $src$$[goog.events.LISTENER_MAP_PROP_] = null)) : $key$$.markAsRemoved();
  return !0;
};
goog.events.unlistenWithWrapper = function $goog$events$unlistenWithWrapper$($src$$, $wrapper$$, $listener$$, $opt_capt$$, $opt_handler$$) {
  $wrapper$$.unlisten($src$$, $listener$$, $opt_capt$$, $opt_handler$$);
};
goog.events.removeAll = function $goog$events$removeAll$($listenerMap$jscomp$3_obj$$, $opt_type$jscomp$10_typeStr$$) {
  if (!$listenerMap$jscomp$3_obj$$) {
    return 0;
  }
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$3_obj$$)) {
    return $listenerMap$jscomp$3_obj$$.removeAllListeners($opt_type$jscomp$10_typeStr$$);
  }
  $listenerMap$jscomp$3_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$3_obj$$);
  if (!$listenerMap$jscomp$3_obj$$) {
    return 0;
  }
  var $count$$ = 0;
  $opt_type$jscomp$10_typeStr$$ = $opt_type$jscomp$10_typeStr$$ && $opt_type$jscomp$10_typeStr$$.toString();
  for (var $type$$ in $listenerMap$jscomp$3_obj$$.listeners) {
    if (!$opt_type$jscomp$10_typeStr$$ || $type$$ == $opt_type$jscomp$10_typeStr$$) {
      for (var $listeners$$ = $listenerMap$jscomp$3_obj$$.listeners[$type$$].concat(), $i$$ = 0; $i$$ < $listeners$$.length; ++$i$$) {
        goog.events.unlistenByKey($listeners$$[$i$$]) && ++$count$$;
      }
    }
  }
  return $count$$;
};
goog.events.getListeners = function $goog$events$getListeners$($listenerMap$jscomp$4_obj$$, $type$$, $capture$$) {
  return goog.events.Listenable.isImplementedBy($listenerMap$jscomp$4_obj$$) ? $listenerMap$jscomp$4_obj$$.getListeners($type$$, $capture$$) : $listenerMap$jscomp$4_obj$$ ? ($listenerMap$jscomp$4_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$4_obj$$)) ? $listenerMap$jscomp$4_obj$$.getListeners($type$$, $capture$$) : [] : [];
};
goog.events.getListener = function $goog$events$getListener$($listenerMap$jscomp$5_src$$, $type$$, $listener$$, $capture$jscomp$8_opt_capt$$, $opt_handler$$) {
  $listener$$ = goog.events.wrapListener($listener$$);
  $capture$jscomp$8_opt_capt$$ = !!$capture$jscomp$8_opt_capt$$;
  return goog.events.Listenable.isImplementedBy($listenerMap$jscomp$5_src$$) ? $listenerMap$jscomp$5_src$$.getListener($type$$, $listener$$, $capture$jscomp$8_opt_capt$$, $opt_handler$$) : $listenerMap$jscomp$5_src$$ ? ($listenerMap$jscomp$5_src$$ = goog.events.getListenerMap_($listenerMap$jscomp$5_src$$)) ? $listenerMap$jscomp$5_src$$.getListener($type$$, $listener$$, $capture$jscomp$8_opt_capt$$, $opt_handler$$) : null : null;
};
goog.events.hasListener = function $goog$events$hasListener$($listenerMap$jscomp$6_obj$$, $opt_type$$, $opt_capture$$) {
  if (goog.events.Listenable.isImplementedBy($listenerMap$jscomp$6_obj$$)) {
    return $listenerMap$jscomp$6_obj$$.hasListener($opt_type$$, $opt_capture$$);
  }
  $listenerMap$jscomp$6_obj$$ = goog.events.getListenerMap_($listenerMap$jscomp$6_obj$$);
  return !!$listenerMap$jscomp$6_obj$$ && $listenerMap$jscomp$6_obj$$.hasListener($opt_type$$, $opt_capture$$);
};
goog.events.expose = function $goog$events$expose$($e$$) {
  var $str$$ = [], $key$$;
  for ($key$$ in $e$$) {
    $e$$[$key$$] && $e$$[$key$$].id ? $str$$.push($key$$ + " = " + $e$$[$key$$] + " (" + $e$$[$key$$].id + ")") : $str$$.push($key$$ + " = " + $e$$[$key$$]);
  }
  return $str$$.join("\n");
};
goog.events.getOnString_ = function $goog$events$getOnString_$($type$$) {
  return $type$$ in goog.events.onStringMap_ ? goog.events.onStringMap_[$type$$] : goog.events.onStringMap_[$type$$] = goog.events.onString_ + $type$$;
};
goog.events.fireListeners = function $goog$events$fireListeners$($obj$$, $type$$, $capture$$, $eventObject$$) {
  return goog.events.Listenable.isImplementedBy($obj$$) ? $obj$$.fireListeners($type$$, $capture$$, $eventObject$$) : goog.events.fireListeners_($obj$$, $type$$, $capture$$, $eventObject$$);
};
goog.events.fireListeners_ = function $goog$events$fireListeners_$($i$jscomp$84_listenerMap$jscomp$7_obj$$, $listenerArray$jscomp$7_type$$, $capture$$, $eventObject$$) {
  var $retval$$ = !0;
  if ($i$jscomp$84_listenerMap$jscomp$7_obj$$ = goog.events.getListenerMap_($i$jscomp$84_listenerMap$jscomp$7_obj$$)) {
    if ($listenerArray$jscomp$7_type$$ = $i$jscomp$84_listenerMap$jscomp$7_obj$$.listeners[$listenerArray$jscomp$7_type$$.toString()]) {
      for ($listenerArray$jscomp$7_type$$ = $listenerArray$jscomp$7_type$$.concat(), $i$jscomp$84_listenerMap$jscomp$7_obj$$ = 0; $i$jscomp$84_listenerMap$jscomp$7_obj$$ < $listenerArray$jscomp$7_type$$.length; $i$jscomp$84_listenerMap$jscomp$7_obj$$++) {
        var $listener$jscomp$62_result$$ = $listenerArray$jscomp$7_type$$[$i$jscomp$84_listenerMap$jscomp$7_obj$$];
        $listener$jscomp$62_result$$ && $listener$jscomp$62_result$$.capture == $capture$$ && !$listener$jscomp$62_result$$.removed && ($listener$jscomp$62_result$$ = goog.events.fireListener($listener$jscomp$62_result$$, $eventObject$$), $retval$$ = $retval$$ && !1 !== $listener$jscomp$62_result$$);
      }
    }
  }
  return $retval$$;
};
goog.events.fireListener = function $goog$events$fireListener$($listener$$, $eventObject$$) {
  var $listenerFn$$ = $listener$$.listener, $listenerHandler$$ = $listener$$.handler || $listener$$.src;
  $listener$$.callOnce && goog.events.unlistenByKey($listener$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$$);
};
goog.events.getTotalListenerCount = function $goog$events$getTotalListenerCount$() {
  return goog.events.listenerCountEstimate_;
};
goog.events.dispatchEvent = function $goog$events$dispatchEvent$($src$$, $e$$) {
  goog.asserts.assert(goog.events.Listenable.isImplementedBy($src$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  return $src$$.dispatchEvent($e$$);
};
goog.events.protectBrowserEventEntryPoint = function $goog$events$protectBrowserEventEntryPoint$($errorHandler$$) {
  goog.events.handleBrowserEvent_ = $errorHandler$$.protectEntryPoint(goog.events.handleBrowserEvent_);
};
goog.events.handleBrowserEvent_ = function $goog$events$handleBrowserEvent_$($listener$jscomp$64_result$$, $evt$$) {
  if ($listener$jscomp$64_result$$.removed) {
    return !0;
  }
  if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    var $ancestors_ieEvent$$ = $evt$$ || goog.getObjectByName("window.event");
    $evt$$ = new goog.events.BrowserEvent($ancestors_ieEvent$$, this);
    var $retval$$ = !0;
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
      if (!goog.events.isMarkedIeEvent_($ancestors_ieEvent$$)) {
        goog.events.markIeEvent_($ancestors_ieEvent$$);
        $ancestors_ieEvent$$ = [];
        for (var $parent$jscomp$2_type$$ = $evt$$.currentTarget; $parent$jscomp$2_type$$; $parent$jscomp$2_type$$ = $parent$jscomp$2_type$$.parentNode) {
          $ancestors_ieEvent$$.push($parent$jscomp$2_type$$);
        }
        $parent$jscomp$2_type$$ = $listener$jscomp$64_result$$.type;
        for (var $i$$ = $ancestors_ieEvent$$.length - 1; !$evt$$.propagationStopped_ && 0 <= $i$$; $i$$--) {
          $evt$$.currentTarget = $ancestors_ieEvent$$[$i$$], $listener$jscomp$64_result$$ = goog.events.fireListeners_($ancestors_ieEvent$$[$i$$], $parent$jscomp$2_type$$, !0, $evt$$), $retval$$ = $retval$$ && $listener$jscomp$64_result$$;
        }
        for ($i$$ = 0; !$evt$$.propagationStopped_ && $i$$ < $ancestors_ieEvent$$.length; $i$$++) {
          $evt$$.currentTarget = $ancestors_ieEvent$$[$i$$], $listener$jscomp$64_result$$ = goog.events.fireListeners_($ancestors_ieEvent$$[$i$$], $parent$jscomp$2_type$$, !1, $evt$$), $retval$$ = $retval$$ && $listener$jscomp$64_result$$;
        }
      }
    } else {
      $retval$$ = goog.events.fireListener($listener$jscomp$64_result$$, $evt$$);
    }
    return $retval$$;
  }
  return goog.events.fireListener($listener$jscomp$64_result$$, new goog.events.BrowserEvent($evt$$, this));
};
goog.events.markIeEvent_ = function $goog$events$markIeEvent_$($e$$) {
  var $useReturnValue$$ = !1;
  if (0 == $e$$.keyCode) {
    try {
      $e$$.keyCode = -1;
      return;
    } catch ($ex$$) {
      $useReturnValue$$ = !0;
    }
  }
  if ($useReturnValue$$ || void 0 == $e$$.returnValue) {
    $e$$.returnValue = !0;
  }
};
goog.events.isMarkedIeEvent_ = function $goog$events$isMarkedIeEvent_$($e$$) {
  return 0 > $e$$.keyCode || void 0 != $e$$.returnValue;
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function $goog$events$getUniqueId$($identifier$$) {
  return $identifier$$ + "_" + goog.events.uniqueIdCounter_++;
};
goog.events.getListenerMap_ = function $goog$events$getListenerMap_$($listenerMap$jscomp$8_src$$) {
  $listenerMap$jscomp$8_src$$ = $listenerMap$jscomp$8_src$$[goog.events.LISTENER_MAP_PROP_];
  return $listenerMap$jscomp$8_src$$ instanceof goog.events.ListenerMap ? $listenerMap$jscomp$8_src$$ : null;
};
goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
goog.events.wrapListener = function $goog$events$wrapListener$($listener$$) {
  goog.asserts.assert($listener$$, "Listener can not be null.");
  if (goog.isFunction($listener$$)) {
    return $listener$$;
  }
  goog.asserts.assert($listener$$.handleEvent, "An object listener must have handleEvent method.");
  $listener$$[goog.events.LISTENER_WRAPPER_PROP_] || ($listener$$[goog.events.LISTENER_WRAPPER_PROP_] = function $$listener$$$goog$events$LISTENER_WRAPPER_PROP_$($e$$) {
    return $listener$$.handleEvent($e$$);
  });
  return $listener$$[goog.events.LISTENER_WRAPPER_PROP_];
};
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.events.handleBrowserEvent_ = $transformer$$(goog.events.handleBrowserEvent_);
});
goog.events.EventTarget = function $goog$events$EventTarget$() {
  goog.Disposable.call(this);
  this.eventTargetListeners_ = new goog.events.ListenerMap(this);
  this.actualEventTarget_ = this;
  this.parentEventTarget_ = null;
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.Listenable.addImplementation(goog.events.EventTarget);
goog.events.EventTarget.MAX_ANCESTORS_ = 1000;
goog.events.EventTarget.prototype.getParentEventTarget = function $goog$events$EventTarget$$getParentEventTarget$() {
  return this.parentEventTarget_;
};
goog.events.EventTarget.prototype.setParentEventTarget = function $goog$events$EventTarget$$setParentEventTarget$($parent$$) {
  this.parentEventTarget_ = $parent$$;
};
goog.events.EventTarget.prototype.addEventListener = function $goog$events$EventTarget$$addEventListener$($type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$) {
  goog.events.listen(this, $type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$);
};
goog.events.EventTarget.prototype.removeEventListener = function $goog$events$EventTarget$$removeEventListener$($type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$) {
  goog.events.unlisten(this, $type$$, $handler$$, $opt_capture$$, $opt_handlerScope$$);
};
goog.events.EventTarget.prototype.dispatchEvent = function $goog$events$EventTarget$$dispatchEvent$($e$$) {
  this.assertInitialized_();
  var $ancestor$$ = this.getParentEventTarget();
  if ($ancestor$$) {
    var $ancestorsTree$$ = [];
    for (var $ancestorCount$$ = 1; $ancestor$$; $ancestor$$ = $ancestor$$.getParentEventTarget()) {
      $ancestorsTree$$.push($ancestor$$), goog.asserts.assert(++$ancestorCount$$ < goog.events.EventTarget.MAX_ANCESTORS_, "infinite loop");
    }
  }
  return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, $e$$, $ancestorsTree$$);
};
goog.events.EventTarget.prototype.disposeInternal = function $goog$events$EventTarget$$disposeInternal$() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  this.removeAllListeners();
  this.parentEventTarget_ = null;
};
goog.events.EventTarget.prototype.listen = function $goog$events$EventTarget$$listen$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  this.assertInitialized_();
  return this.eventTargetListeners_.add(String($type$$), $listener$$, !1, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.listenOnce = function $goog$events$EventTarget$$listenOnce$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.add(String($type$$), $listener$$, !0, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.unlisten = function $goog$events$EventTarget$$unlisten$($type$$, $listener$$, $opt_useCapture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.remove(String($type$$), $listener$$, $opt_useCapture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.unlistenByKey = function $goog$events$EventTarget$$unlistenByKey$($key$$) {
  return this.eventTargetListeners_.removeByKey($key$$);
};
goog.events.EventTarget.prototype.removeAllListeners = function $goog$events$EventTarget$$removeAllListeners$($opt_type$$) {
  return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll($opt_type$$) : 0;
};
goog.events.EventTarget.prototype.fireListeners = function $goog$events$EventTarget$$fireListeners$($listenerArray$jscomp$8_type$$, $capture$$, $eventObject$$) {
  $listenerArray$jscomp$8_type$$ = this.eventTargetListeners_.listeners[String($listenerArray$jscomp$8_type$$)];
  if (!$listenerArray$jscomp$8_type$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$$ = $listenerArray$jscomp$8_type$$.concat();
  for (var $rv$$ = !0, $i$$ = 0; $i$$ < $listenerArray$jscomp$8_type$$.length; ++$i$$) {
    var $listener$$ = $listenerArray$jscomp$8_type$$[$i$$];
    if ($listener$$ && !$listener$$.removed && $listener$$.capture == $capture$$) {
      var $listenerFn$$ = $listener$$.listener, $listenerHandler$$ = $listener$$.handler || $listener$$.src;
      $listener$$.callOnce && this.unlistenByKey($listener$$);
      $rv$$ = !1 !== $listenerFn$$.call($listenerHandler$$, $eventObject$$) && $rv$$;
    }
  }
  return $rv$$ && 0 != $eventObject$$.returnValue_;
};
goog.events.EventTarget.prototype.getListeners = function $goog$events$EventTarget$$getListeners$($type$$, $capture$$) {
  return this.eventTargetListeners_.getListeners(String($type$$), $capture$$);
};
goog.events.EventTarget.prototype.getListener = function $goog$events$EventTarget$$getListener$($type$$, $listener$$, $capture$$, $opt_listenerScope$$) {
  return this.eventTargetListeners_.getListener(String($type$$), $listener$$, $capture$$, $opt_listenerScope$$);
};
goog.events.EventTarget.prototype.hasListener = function $goog$events$EventTarget$$hasListener$($id$jscomp$5_opt_type$$, $opt_capture$$) {
  $id$jscomp$5_opt_type$$ = goog.isDef($id$jscomp$5_opt_type$$) ? String($id$jscomp$5_opt_type$$) : void 0;
  return this.eventTargetListeners_.hasListener($id$jscomp$5_opt_type$$, $opt_capture$$);
};
goog.events.EventTarget.prototype.setTargetForTesting = function $goog$events$EventTarget$$setTargetForTesting$($target$$) {
  this.actualEventTarget_ = $target$$;
};
goog.events.EventTarget.prototype.assertInitialized_ = function $goog$events$EventTarget$$assertInitialized_$() {
  goog.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
goog.events.EventTarget.dispatchEventInternal_ = function $goog$events$EventTarget$dispatchEventInternal_$($target$$, $e$$, $opt_ancestorsTree$$) {
  var $type$$ = $e$$.type || $e$$;
  if (goog.isString($e$$)) {
    $e$$ = new goog.events.Event($e$$, $target$$);
  } else {
    if ($e$$ instanceof goog.events.Event) {
      $e$$.target = $e$$.target || $target$$;
    } else {
      var $oldEvent_rv$$ = $e$$;
      $e$$ = new goog.events.Event($type$$, $target$$);
      goog.object.extend($e$$, $oldEvent_rv$$);
    }
  }
  $oldEvent_rv$$ = !0;
  if ($opt_ancestorsTree$$) {
    for (var $i$$ = $opt_ancestorsTree$$.length - 1; !$e$$.propagationStopped_ && 0 <= $i$$; $i$$--) {
      var $currentTarget$$ = $e$$.currentTarget = $opt_ancestorsTree$$[$i$$];
      $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !0, $e$$) && $oldEvent_rv$$;
    }
  }
  $e$$.propagationStopped_ || ($currentTarget$$ = $e$$.currentTarget = $target$$, $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !0, $e$$) && $oldEvent_rv$$, $e$$.propagationStopped_ || ($oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !1, $e$$) && $oldEvent_rv$$));
  if ($opt_ancestorsTree$$) {
    for ($i$$ = 0; !$e$$.propagationStopped_ && $i$$ < $opt_ancestorsTree$$.length; $i$$++) {
      $currentTarget$$ = $e$$.currentTarget = $opt_ancestorsTree$$[$i$$], $oldEvent_rv$$ = $currentTarget$$.fireListeners($type$$, !1, $e$$) && $oldEvent_rv$$;
    }
  }
  return $oldEvent_rv$$;
};
goog.Timer = function $goog$Timer$($opt_interval$$, $opt_timerObject$$) {
  goog.events.EventTarget.call(this);
  this.interval_ = $opt_interval$$ || 1;
  this.timerObject_ = $opt_timerObject$$ || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now();
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.INVALID_TIMEOUT_ID_ = -1;
goog.Timer.prototype.enabled = !1;
goog.Timer.defaultTimerObject = goog.global;
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function $goog$Timer$$getInterval$() {
  return this.interval_;
};
goog.Timer.prototype.setInterval = function $goog$Timer$$setInterval$($interval$$) {
  this.interval_ = $interval$$;
  this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop();
};
goog.Timer.prototype.tick_ = function $goog$Timer$$tick_$() {
  if (this.enabled) {
    var $elapsed$$ = goog.now() - this.last_;
    0 < $elapsed$$ && $elapsed$$ < this.interval_ * goog.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - $elapsed$$) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()));
  }
};
goog.Timer.prototype.dispatchTick = function $goog$Timer$$dispatchTick$() {
  this.dispatchEvent(goog.Timer.TICK);
};
goog.Timer.prototype.start = function $goog$Timer$$start$() {
  this.enabled = !0;
  this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now());
};
goog.Timer.prototype.stop = function $goog$Timer$$stop$() {
  this.enabled = !1;
  this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null);
};
goog.Timer.prototype.disposeInternal = function $goog$Timer$$disposeInternal$() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_;
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function $goog$Timer$callOnce$($listener$$, $opt_delay$$, $opt_handler$$) {
  if (goog.isFunction($listener$$)) {
    $opt_handler$$ && ($listener$$ = goog.bind($listener$$, $opt_handler$$));
  } else {
    if ($listener$$ && "function" == typeof $listener$$.handleEvent) {
      $listener$$ = goog.bind($listener$$.handleEvent, $listener$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return Number($opt_delay$$) > goog.Timer.MAX_TIMEOUT_ ? goog.Timer.INVALID_TIMEOUT_ID_ : goog.Timer.defaultTimerObject.setTimeout($listener$$, $opt_delay$$ || 0);
};
goog.Timer.clear = function $goog$Timer$clear$($timerId$$) {
  goog.Timer.defaultTimerObject.clearTimeout($timerId$$);
};
goog.Timer.promise = function $goog$Timer$promise$($delay$$, $opt_result$$) {
  var $timerKey$$ = null;
  return (new goog.Promise(function($resolve$$, $reject$$) {
    $timerKey$$ = goog.Timer.callOnce(function() {
      $resolve$$($opt_result$$);
    }, $delay$$);
    $timerKey$$ == goog.Timer.INVALID_TIMEOUT_ID_ && $reject$$(Error("Failed to schedule timer."));
  })).thenCatch(function($error$$) {
    goog.Timer.clear($timerKey$$);
    throw $error$$;
  });
};
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"), CAN_USE_PARENT_ELEMENT_PROPERTY:goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT, 
INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE, LEGACY_IE_RANGES:goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)};
goog.dom.asserts = {};
goog.dom.asserts.assertIsLocation = function $goog$dom$asserts$assertIsLocation$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.Location && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.Location || !($o$$ instanceof $win$$.Element)), "Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLAnchorElement = function $goog$dom$asserts$assertIsHTMLAnchorElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLAnchorElement && "undefined" != typeof $win$$.Location && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLAnchorElement || !($o$$ instanceof $win$$.Location || $o$$ instanceof $win$$.Element)), "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLLinkElement = function $goog$dom$asserts$assertIsHTMLLinkElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLLinkElement && "undefined" != typeof $win$$.Location && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLLinkElement || !($o$$ instanceof $win$$.Location || $o$$ instanceof $win$$.Element)), "Argument is not a HTMLLinkElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLImageElement = function $goog$dom$asserts$assertIsHTMLImageElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLImageElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLImageElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLImageElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLEmbedElement = function $goog$dom$asserts$assertIsHTMLEmbedElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLEmbedElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLEmbedElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLEmbedElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLFrameElement = function $goog$dom$asserts$assertIsHTMLFrameElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLFrameElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLFrameElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLFrameElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLIFrameElement = function $goog$dom$asserts$assertIsHTMLIFrameElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLIFrameElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLIFrameElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLIFrameElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLObjectElement = function $goog$dom$asserts$assertIsHTMLObjectElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLObjectElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLObjectElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLObjectElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.assertIsHTMLScriptElement = function $goog$dom$asserts$assertIsHTMLScriptElement$($o$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $win$$ = goog.dom.asserts.getWindow_($o$$);
    "undefined" != typeof $win$$.HTMLScriptElement && "undefined" != typeof $win$$.Element && goog.asserts.assert($o$$ && ($o$$ instanceof $win$$.HTMLScriptElement || !($o$$ instanceof $win$$.Element)), "Argument is not a HTMLScriptElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_($o$$));
  }
  return $o$$;
};
goog.dom.asserts.debugStringForType_ = function $goog$dom$asserts$debugStringForType_$($value$$) {
  return goog.isObject($value$$) ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : void 0 === $value$$ ? "undefined" : null === $value$$ ? "null" : typeof $value$$;
};
goog.dom.asserts.getWindow_ = function $goog$dom$asserts$getWindow_$($doc$jscomp$8_o$$) {
  return ($doc$jscomp$8_o$$ = $doc$jscomp$8_o$$ && $doc$jscomp$8_o$$.ownerDocument) && ($doc$jscomp$8_o$$.defaultView || $doc$jscomp$8_o$$.parentWindow) || window;
};
goog.dom.tags = {};
goog.dom.tags.VOID_TAGS_ = {area:!0, base:!0, br:!0, col:!0, command:!0, embed:!0, hr:!0, img:!0, input:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0};
goog.dom.tags.isVoidTag = function $goog$dom$tags$isVoidTag$($tagName$$) {
  return !0 === goog.dom.tags.VOID_TAGS_[$tagName$$];
};
goog.string.TypedString = function $goog$string$TypedString$() {
};
goog.string.Const = function $goog$string$Const$() {
  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = !0;
goog.string.Const.prototype.getTypedStringValue = function $goog$string$Const$$getTypedStringValue$() {
  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
goog.string.Const.prototype.toString = function $goog$string$Const$$toString$() {
  return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
};
goog.string.Const.unwrap = function $goog$string$Const$unwrap$($stringConst$$) {
  if ($stringConst$$ instanceof goog.string.Const && $stringConst$$.constructor === goog.string.Const && $stringConst$$.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {
    return $stringConst$$.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  }
  goog.asserts.fail("expected object of type Const, got '" + $stringConst$$ + "'");
  return "type_error:Const";
};
goog.string.Const.from = function $goog$string$Const$from$($s$$) {
  return goog.string.Const.create__googStringSecurityPrivate_($s$$);
};
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.create__googStringSecurityPrivate_ = function $goog$string$Const$create__googStringSecurityPrivate_$($s$$) {
  var $stringConst$$ = new goog.string.Const;
  $stringConst$$.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = $s$$;
  return $stringConst$$;
};
goog.string.Const.EMPTY = goog.string.Const.from("");
goog.html = {};
goog.html.SafeScript = function $goog$html$SafeScript$() {
  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
  this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.SafeScript.fromConstant = function $goog$html$SafeScript$fromConstant$($script$$) {
  $script$$ = goog.string.Const.unwrap($script$$);
  return 0 === $script$$.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse($script$$);
};
goog.html.SafeScript.prototype.getTypedStringValue = function $goog$html$SafeScript$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_;
};
goog.DEBUG && (goog.html.SafeScript.prototype.toString = function $goog$html$SafeScript$$toString$() {
  return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
});
goog.html.SafeScript.unwrap = function $goog$html$SafeScript$unwrap$($safeScript$$) {
  if ($safeScript$$ instanceof goog.html.SafeScript && $safeScript$$.constructor === goog.html.SafeScript && $safeScript$$.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $safeScript$$.privateDoNotAccessOrElseSafeScriptWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeScript, got '" + $safeScript$$ + "' of type " + goog.typeOf($safeScript$$));
  return "type_error:SafeScript";
};
goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeScript$createSafeScriptSecurityPrivateDoNotAccessOrElse$($script$$) {
  return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_($script$$);
};
goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function $goog$html$SafeScript$$initSecurityPrivateDoNotAccessOrElse_$($script$$) {
  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = $script$$;
  return this;
};
goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
goog.fs = {};
goog.fs.url = {};
goog.fs.url.createObjectUrl = function $goog$fs$url$createObjectUrl$($blob$$) {
  return goog.fs.url.getUrlObject_().createObjectURL($blob$$);
};
goog.fs.url.revokeObjectUrl = function $goog$fs$url$revokeObjectUrl$($url$$) {
  goog.fs.url.getUrlObject_().revokeObjectURL($url$$);
};
goog.fs.url.getUrlObject_ = function $goog$fs$url$getUrlObject_$() {
  var $urlObject$$ = goog.fs.url.findUrlObject_();
  if (null != $urlObject$$) {
    return $urlObject$$;
  }
  throw Error("This browser doesn't seem to support blob URLs");
};
goog.fs.url.findUrlObject_ = function $goog$fs$url$findUrlObject_$() {
  return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
};
goog.fs.url.browserSupportsObjectUrls = function $goog$fs$url$browserSupportsObjectUrls$() {
  return null != goog.fs.url.findUrlObject_();
};
goog.i18n = {};
goog.i18n.bidi = {};
goog.i18n.bidi.FORCE_RTL = !1;
goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 
2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4));
goog.i18n.bidi.Format = {LRE:"\u202a", RLE:"\u202b", PDF:"\u202c", LRM:"\u200e", RLM:"\u200f"};
goog.i18n.bidi.Dir = {LTR:1, RTL:-1, NEUTRAL:0};
goog.i18n.bidi.RIGHT = "right";
goog.i18n.bidi.LEFT = "left";
goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir = function $goog$i18n$bidi$toDir$($givenDir$$, $opt_noNeutral$$) {
  return "number" == typeof $givenDir$$ ? 0 < $givenDir$$ ? goog.i18n.bidi.Dir.LTR : 0 > $givenDir$$ ? goog.i18n.bidi.Dir.RTL : $opt_noNeutral$$ ? null : goog.i18n.bidi.Dir.NEUTRAL : null == $givenDir$$ ? null : $givenDir$$ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_ = function $goog$i18n$bidi$stripHtmlIfNeeded_$($str$$, $opt_isStripNeeded$$) {
  return $opt_isStripNeeded$$ ? $str$$.replace(goog.i18n.bidi.htmlSkipReg_, "") : $str$$;
};
goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.hasAnyRtl = function $goog$i18n$bidi$hasAnyRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr = function $goog$i18n$bidi$hasAnyLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.isRtlChar = function $goog$i18n$bidi$isRtlChar$($str$$) {
  return goog.i18n.bidi.rtlRe_.test($str$$);
};
goog.i18n.bidi.isLtrChar = function $goog$i18n$bidi$isLtrChar$($str$$) {
  return goog.i18n.bidi.ltrRe_.test($str$$);
};
goog.i18n.bidi.isNeutralChar = function $goog$i18n$bidi$isNeutralChar$($str$$) {
  return !goog.i18n.bidi.isLtrChar($str$$) && !goog.i18n.bidi.isRtlChar($str$$);
};
goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.startsWithRtl = function $goog$i18n$bidi$startsWithRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr = function $goog$i18n$bidi$startsWithLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
goog.i18n.bidi.isNeutralText = function $goog$i18n$bidi$isNeutralText$($str$$, $opt_isHtml$$) {
  $str$$ = goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$);
  return goog.i18n.bidi.isRequiredLtrRe_.test($str$$) || !goog.i18n.bidi.hasAnyLtr($str$$) && !goog.i18n.bidi.hasAnyRtl($str$$);
};
goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
goog.i18n.bidi.endsWithLtr = function $goog$i18n$bidi$endsWithLtr$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl = function $goog$i18n$bidi$endsWithRtl$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $opt_isHtml$$));
};
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
goog.i18n.bidi.isRtlLanguage = function $goog$i18n$bidi$isRtlLanguage$($lang$$) {
  return goog.i18n.bidi.rtlLocalesRe_.test($lang$$);
};
goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText = function $goog$i18n$bidi$guardBracketInText$($s$$, $mark_opt_isRtlContext$$) {
  $mark_opt_isRtlContext$$ = (void 0 === $mark_opt_isRtlContext$$ ? goog.i18n.bidi.hasAnyRtl($s$$) : $mark_opt_isRtlContext$$) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
  return $s$$.replace(goog.i18n.bidi.bracketGuardTextRe_, $mark_opt_isRtlContext$$ + "$&" + $mark_opt_isRtlContext$$);
};
goog.i18n.bidi.enforceRtlInHtml = function $goog$i18n$bidi$enforceRtlInHtml$($html$$) {
  return "<" == $html$$.charAt(0) ? $html$$.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + $html$$ + "</span>";
};
goog.i18n.bidi.enforceRtlInText = function $goog$i18n$bidi$enforceRtlInText$($text$$) {
  return goog.i18n.bidi.Format.RLE + $text$$ + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.enforceLtrInHtml = function $goog$i18n$bidi$enforceLtrInHtml$($html$$) {
  return "<" == $html$$.charAt(0) ? $html$$.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + $html$$ + "</span>";
};
goog.i18n.bidi.enforceLtrInText = function $goog$i18n$bidi$enforceLtrInText$($text$$) {
  return goog.i18n.bidi.Format.LRE + $text$$ + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
goog.i18n.bidi.leftRe_ = /left/gi;
goog.i18n.bidi.rightRe_ = /right/gi;
goog.i18n.bidi.tempRe_ = /%%%%/g;
goog.i18n.bidi.mirrorCSS = function $goog$i18n$bidi$mirrorCSS$($cssStr$$) {
  return $cssStr$$.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
};
goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote = function $goog$i18n$bidi$normalizeHebrewQuote$($str$$) {
  return $str$$.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3");
};
goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;
goog.i18n.bidi.estimateDirection = function $goog$i18n$bidi$estimateDirection$($str$$, $i$jscomp$88_opt_isHtml$$) {
  var $rtlCount$$ = 0, $totalCount$$ = 0, $hasWeaklyLtr$$ = !1;
  $str$$ = goog.i18n.bidi.stripHtmlIfNeeded_($str$$, $i$jscomp$88_opt_isHtml$$).split(goog.i18n.bidi.wordSeparatorRe_);
  for ($i$jscomp$88_opt_isHtml$$ = 0; $i$jscomp$88_opt_isHtml$$ < $str$$.length; $i$jscomp$88_opt_isHtml$$++) {
    var $token$$ = $str$$[$i$jscomp$88_opt_isHtml$$];
    goog.i18n.bidi.startsWithRtl($token$$) ? ($rtlCount$$++, $totalCount$$++) : goog.i18n.bidi.isRequiredLtrRe_.test($token$$) ? $hasWeaklyLtr$$ = !0 : goog.i18n.bidi.hasAnyLtr($token$$) ? $totalCount$$++ : goog.i18n.bidi.hasNumeralsRe_.test($token$$) && ($hasWeaklyLtr$$ = !0);
  }
  return 0 == $totalCount$$ ? $hasWeaklyLtr$$ ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : $rtlCount$$ / $totalCount$$ > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.detectRtlDirectionality = function $goog$i18n$bidi$detectRtlDirectionality$($str$$, $opt_isHtml$$) {
  return goog.i18n.bidi.estimateDirection($str$$, $opt_isHtml$$) == goog.i18n.bidi.Dir.RTL;
};
goog.i18n.bidi.setElementDirAndAlign = function $goog$i18n$bidi$setElementDirAndAlign$($element$$, $dir$$) {
  $element$$ && ($dir$$ = goog.i18n.bidi.toDir($dir$$)) && ($element$$.style.textAlign = $dir$$ == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, $element$$.dir = $dir$$ == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
};
goog.i18n.bidi.setElementDirByTextDirectionality = function $goog$i18n$bidi$setElementDirByTextDirectionality$($element$$, $text$$) {
  switch(goog.i18n.bidi.estimateDirection($text$$)) {
    case goog.i18n.bidi.Dir.LTR:
      $element$$.dir = "ltr";
      break;
    case goog.i18n.bidi.Dir.RTL:
      $element$$.dir = "rtl";
      break;
    default:
      $element$$.removeAttribute("dir");
  }
};
goog.i18n.bidi.DirectionalString = function $goog$i18n$bidi$DirectionalString$() {
};
goog.html.TrustedResourceUrl = function $goog$html$TrustedResourceUrl$() {
  this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
  this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function $goog$html$TrustedResourceUrl$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.TrustedResourceUrl.prototype.getDirection = function $goog$html$TrustedResourceUrl$$getDirection$() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function $goog$html$TrustedResourceUrl$$toString$() {
  return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
});
goog.html.TrustedResourceUrl.unwrap = function $goog$html$TrustedResourceUrl$unwrap$($trustedResourceUrl$$) {
  if ($trustedResourceUrl$$ instanceof goog.html.TrustedResourceUrl && $trustedResourceUrl$$.constructor === goog.html.TrustedResourceUrl && $trustedResourceUrl$$.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $trustedResourceUrl$$.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  }
  goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + $trustedResourceUrl$$ + "' of type " + goog.typeOf($trustedResourceUrl$$));
  return "type_error:TrustedResourceUrl";
};
goog.html.TrustedResourceUrl.format = function $goog$html$TrustedResourceUrl$format$($format$jscomp$11_result$$, $args$$) {
  $format$jscomp$11_result$$ = goog.html.TrustedResourceUrl.format_($format$jscomp$11_result$$, $args$$);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($format$jscomp$11_result$$);
};
goog.html.TrustedResourceUrl.format_ = function $goog$html$TrustedResourceUrl$format_$($format$$, $args$$) {
  var $formatStr$$ = goog.string.Const.unwrap($format$$);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test($formatStr$$)) {
    throw Error("Invalid TrustedResourceUrl format: " + $formatStr$$);
  }
  return $formatStr$$.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function($arg$jscomp$7_match$$, $id$$) {
    if (!Object.prototype.hasOwnProperty.call($args$$, $id$$)) {
      throw Error('Found marker, "' + $id$$ + '", in format string, "' + $formatStr$$ + '", but no valid label mapping found in args: ' + JSON.stringify($args$$));
    }
    $arg$jscomp$7_match$$ = $args$$[$id$$];
    return $arg$jscomp$7_match$$ instanceof goog.string.Const ? goog.string.Const.unwrap($arg$jscomp$7_match$$) : encodeURIComponent(String($arg$jscomp$7_match$$));
  });
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i;
goog.html.TrustedResourceUrl.formatWithParams = function $goog$html$TrustedResourceUrl$formatWithParams$($format$jscomp$13_url$$, $args$jscomp$8_separator$$, $params$$) {
  $format$jscomp$13_url$$ = goog.html.TrustedResourceUrl.format_($format$jscomp$13_url$$, $args$jscomp$8_separator$$);
  $args$jscomp$8_separator$$ = /\?/.test($format$jscomp$13_url$$) ? "&" : "?";
  for (var $key$$ in $params$$) {
    null != $params$$[$key$$] && ($format$jscomp$13_url$$ += $args$jscomp$8_separator$$ + encodeURIComponent($key$$) + "=" + encodeURIComponent(String($params$$[$key$$])), $args$jscomp$8_separator$$ = "&");
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($format$jscomp$13_url$$);
};
goog.html.TrustedResourceUrl.fromConstant = function $goog$html$TrustedResourceUrl$fromConstant$($url$$) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap($url$$));
};
goog.html.TrustedResourceUrl.fromConstants = function $goog$html$TrustedResourceUrl$fromConstants$($parts$$) {
  for (var $unwrapped$$ = "", $i$$ = 0; $i$$ < $parts$$.length; $i$$++) {
    $unwrapped$$ += goog.string.Const.unwrap($parts$$[$i$$]);
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($unwrapped$$);
};
goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$($url$$) {
  var $trustedResourceUrl$$ = new goog.html.TrustedResourceUrl;
  $trustedResourceUrl$$.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = $url$$;
  return $trustedResourceUrl$$;
};
goog.html.SafeUrl = function $goog$html$SafeUrl$() {
  this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
  this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeUrl.prototype.getTypedStringValue = function $goog$html$SafeUrl$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.SafeUrl.prototype.getDirection = function $goog$html$SafeUrl$$getDirection$() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function $goog$html$SafeUrl$$toString$() {
  return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
});
goog.html.SafeUrl.unwrap = function $goog$html$SafeUrl$unwrap$($safeUrl$$) {
  if ($safeUrl$$ instanceof goog.html.SafeUrl && $safeUrl$$.constructor === goog.html.SafeUrl && $safeUrl$$.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $safeUrl$$.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeUrl, got '" + $safeUrl$$ + "' of type " + goog.typeOf($safeUrl$$));
  return "type_error:SafeUrl";
};
goog.html.SafeUrl.fromConstant = function $goog$html$SafeUrl$fromConstant$($url$$) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap($url$$));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
goog.html.SafeUrl.fromBlob = function $goog$html$SafeUrl$fromBlob$($blob$jscomp$8_url$$) {
  $blob$jscomp$8_url$$ = goog.html.SAFE_MIME_TYPE_PATTERN_.test($blob$jscomp$8_url$$.type) ? goog.fs.url.createObjectUrl($blob$jscomp$8_url$$) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($blob$jscomp$8_url$$);
};
goog.html.DATA_URL_PATTERN_ = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.fromDataUrl = function $goog$html$SafeUrl$fromDataUrl$($dataUrl$$) {
  var $match$$ = $dataUrl$$.match(goog.html.DATA_URL_PATTERN_);
  $match$$ = $match$$ && goog.html.SAFE_MIME_TYPE_PATTERN_.test($match$$[1]);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($match$$ ? $dataUrl$$ : goog.html.SafeUrl.INNOCUOUS_STRING);
};
goog.html.SafeUrl.fromTelUrl = function $goog$html$SafeUrl$fromTelUrl$($telUrl$$) {
  goog.string.caseInsensitiveStartsWith($telUrl$$, "tel:") || ($telUrl$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($telUrl$$);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function $goog$html$SafeUrl$fromTrustedResourceUrl$($trustedResourceUrl$$) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap($trustedResourceUrl$$));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.sanitize = function $goog$html$SafeUrl$sanitize$($url$$) {
  if ($url$$ instanceof goog.html.SafeUrl) {
    return $url$$;
  }
  $url$$ = $url$$.implementsGoogStringTypedString ? $url$$.getTypedStringValue() : String($url$$);
  goog.html.SAFE_URL_PATTERN_.test($url$$) || ($url$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function $goog$html$SafeUrl$sanitizeAssertUnchanged$($url$$) {
  if ($url$$ instanceof goog.html.SafeUrl) {
    return $url$$;
  }
  $url$$ = $url$$.implementsGoogStringTypedString ? $url$$.getTypedStringValue() : String($url$$);
  goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test($url$$)) || ($url$$ = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeUrl$createSafeUrlSecurityPrivateDoNotAccessOrElse$($url$$) {
  var $safeUrl$$ = new goog.html.SafeUrl;
  $safeUrl$$.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = $url$$;
  return $safeUrl$$;
};
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
goog.html.SafeStyle = function $goog$html$SafeStyle$() {
  this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
  this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.SafeStyle.fromConstant = function $goog$html$SafeStyle$fromConstant$($style_styleString$$) {
  $style_styleString$$ = goog.string.Const.unwrap($style_styleString$$);
  if (0 === $style_styleString$$.length) {
    return goog.html.SafeStyle.EMPTY;
  }
  goog.html.SafeStyle.checkStyle_($style_styleString$$);
  goog.asserts.assert(goog.string.endsWith($style_styleString$$, ";"), "Last character of style string is not ';': " + $style_styleString$$);
  goog.asserts.assert(goog.string.contains($style_styleString$$, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + $style_styleString$$);
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style_styleString$$);
};
goog.html.SafeStyle.checkStyle_ = function $goog$html$SafeStyle$checkStyle_$($style$$) {
  goog.asserts.assert(!/[<>]/.test($style$$), "Forbidden characters in style string: " + $style$$);
};
goog.html.SafeStyle.prototype.getTypedStringValue = function $goog$html$SafeStyle$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
};
goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function $goog$html$SafeStyle$$toString$() {
  return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
});
goog.html.SafeStyle.unwrap = function $goog$html$SafeStyle$unwrap$($safeStyle$$) {
  if ($safeStyle$$ instanceof goog.html.SafeStyle && $safeStyle$$.constructor === goog.html.SafeStyle && $safeStyle$$.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $safeStyle$$.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeStyle, got '" + $safeStyle$$ + "' of type " + goog.typeOf($safeStyle$$));
  return "type_error:SafeStyle";
};
goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse$($style$$) {
  return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_($style$$);
};
goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function $goog$html$SafeStyle$$initSecurityPrivateDoNotAccessOrElse_$($style$$) {
  this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = $style$$;
  return this;
};
goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
goog.html.SafeStyle.create = function $goog$html$SafeStyle$create$($map$$) {
  var $style$$ = "", $name$$;
  for ($name$$ in $map$$) {
    if (!/^[-_a-zA-Z0-9]+$/.test($name$$)) {
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$);
    }
    var $value$$ = $map$$[$name$$];
    if (null != $value$$) {
      if ($value$$ instanceof goog.string.Const) {
        $value$$ = goog.string.Const.unwrap($value$$), goog.asserts.assert(!/[{;}]/.test($value$$), "Value does not allow [{;}].");
      } else {
        $value$$ = String($value$$);
        var $valueWithoutFunctions$$ = $value$$.replace(goog.html.SafeUrl.FUNCTIONS_RE_, "$1").replace(goog.html.SafeUrl.URL_RE_, "url");
        goog.html.SafeStyle.VALUE_RE_.test($valueWithoutFunctions$$) ? goog.html.SafeStyle.hasBalancedQuotes_($value$$) ? $value$$ = goog.html.SafeStyle.sanitizeUrl_($value$$) : (goog.asserts.fail("String value requires balanced quotes, got: " + $value$$), $value$$ = goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + $value$$), $value$$ = goog.html.SafeStyle.INNOCUOUS_STRING);
      }
      $style$$ += $name$$ + ":" + $value$$ + ";";
    }
  }
  if (!$style$$) {
    return goog.html.SafeStyle.EMPTY;
  }
  goog.html.SafeStyle.checkStyle_($style$$);
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$);
};
goog.html.SafeStyle.hasBalancedQuotes_ = function $goog$html$SafeStyle$hasBalancedQuotes_$($value$$) {
  for (var $outsideSingle$$ = !0, $outsideDouble$$ = !0, $i$$ = 0; $i$$ < $value$$.length; $i$$++) {
    var $c$$ = $value$$.charAt($i$$);
    "'" == $c$$ && $outsideDouble$$ ? $outsideSingle$$ = !$outsideSingle$$ : '"' == $c$$ && $outsideSingle$$ && ($outsideDouble$$ = !$outsideDouble$$);
  }
  return $outsideSingle$$ && $outsideDouble$$;
};
goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9]";
goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
goog.html.SafeUrl.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
goog.html.SafeUrl.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
goog.html.SafeStyle.sanitizeUrl_ = function $goog$html$SafeStyle$sanitizeUrl_$($value$$) {
  return $value$$.replace(goog.html.SafeUrl.URL_RE_, function($match$jscomp$0$$, $before$$, $url$$, $after$$) {
    var $quote$$ = "";
    $url$$ = $url$$.replace(/^(['"])(.*)\1$/, function($match$$, $start$$, $inside$$) {
      $quote$$ = $start$$;
      return $inside$$;
    });
    $match$jscomp$0$$ = goog.html.SafeUrl.sanitize($url$$).getTypedStringValue();
    return $before$$ + $quote$$ + $match$jscomp$0$$ + $quote$$ + $after$$;
  });
};
goog.html.SafeStyle.concat = function $goog$html$SafeStyle$concat$($var_args$$) {
  var $style$$ = "", $addArgument$$ = function $$addArgument$$$($argument$$) {
    goog.isArray($argument$$) ? goog.array.forEach($argument$$, $addArgument$$) : $style$$ += goog.html.SafeStyle.unwrap($argument$$);
  };
  goog.array.forEach(arguments, $addArgument$$);
  return $style$$ ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$) : goog.html.SafeStyle.EMPTY;
};
goog.html.SafeStyleSheet = function $goog$html$SafeStyleSheet$() {
  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
  this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.SafeStyleSheet.createRule = function $goog$html$SafeStyleSheet$createRule$($selector$$, $style$$) {
  if (goog.string.contains($selector$$, "<")) {
    throw Error("Selector does not allow '<', got: " + $selector$$);
  }
  var $selectorToCheck$$ = $selector$$.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test($selectorToCheck$$)) {
    throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + $selector$$);
  }
  if (!goog.html.SafeStyleSheet.hasBalancedBrackets_($selectorToCheck$$)) {
    throw Error("() and [] in selector must be balanced, got: " + $selector$$);
  }
  $style$$ instanceof goog.html.SafeStyle || ($style$$ = goog.html.SafeStyle.create($style$$));
  $selector$$ = $selector$$ + "{" + goog.html.SafeStyle.unwrap($style$$) + "}";
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($selector$$);
};
goog.html.SafeStyleSheet.hasBalancedBrackets_ = function $goog$html$SafeStyleSheet$hasBalancedBrackets_$($s$$) {
  for (var $brackets$$ = {"(":")", "[":"]"}, $expectedBrackets$$ = [], $i$$ = 0; $i$$ < $s$$.length; $i$$++) {
    var $ch$$ = $s$$[$i$$];
    if ($brackets$$[$ch$$]) {
      $expectedBrackets$$.push($brackets$$[$ch$$]);
    } else {
      if (goog.object.contains($brackets$$, $ch$$) && $expectedBrackets$$.pop() != $ch$$) {
        return !1;
      }
    }
  }
  return 0 == $expectedBrackets$$.length;
};
goog.html.SafeStyleSheet.concat = function $goog$html$SafeStyleSheet$concat$($var_args$$) {
  var $result$$ = "", $addArgument$$ = function $$addArgument$$$($argument$$) {
    goog.isArray($argument$$) ? goog.array.forEach($argument$$, $addArgument$$) : $result$$ += goog.html.SafeStyleSheet.unwrap($argument$$);
  };
  goog.array.forEach(arguments, $addArgument$$);
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($result$$);
};
goog.html.SafeStyleSheet.fromConstant = function $goog$html$SafeStyleSheet$fromConstant$($styleSheet$$) {
  $styleSheet$$ = goog.string.Const.unwrap($styleSheet$$);
  if (0 === $styleSheet$$.length) {
    return goog.html.SafeStyleSheet.EMPTY;
  }
  goog.asserts.assert(!goog.string.contains($styleSheet$$, "<"), "Forbidden '<' character in style sheet string: " + $styleSheet$$);
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($styleSheet$$);
};
goog.html.SafeStyleSheet.prototype.getTypedStringValue = function $goog$html$SafeStyleSheet$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
};
goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function $goog$html$SafeStyleSheet$$toString$() {
  return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
});
goog.html.SafeStyleSheet.unwrap = function $goog$html$SafeStyleSheet$unwrap$($safeStyleSheet$$) {
  if ($safeStyleSheet$$ instanceof goog.html.SafeStyleSheet && $safeStyleSheet$$.constructor === goog.html.SafeStyleSheet && $safeStyleSheet$$.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $safeStyleSheet$$.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeStyleSheet, got '" + $safeStyleSheet$$ + "' of type " + goog.typeOf($safeStyleSheet$$));
  return "type_error:SafeStyleSheet";
};
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeStyleSheet$createSafeStyleSheetSecurityPrivateDoNotAccessOrElse$($styleSheet$$) {
  return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_($styleSheet$$);
};
goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function $goog$html$SafeStyleSheet$$initSecurityPrivateDoNotAccessOrElse_$($styleSheet$$) {
  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = $styleSheet$$;
  return this;
};
goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeHtml = function $goog$html$SafeHtml$() {
  this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
  this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  this.dir_ = null;
};
goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.SafeHtml.prototype.getDirection = function $goog$html$SafeHtml$$getDirection$() {
  return this.dir_;
};
goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeHtml.prototype.getTypedStringValue = function $goog$html$SafeHtml$$getTypedStringValue$() {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
};
goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function $goog$html$SafeHtml$$toString$() {
  return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
});
goog.html.SafeHtml.unwrap = function $goog$html$SafeHtml$unwrap$($safeHtml$$) {
  if ($safeHtml$$ instanceof goog.html.SafeHtml && $safeHtml$$.constructor === goog.html.SafeHtml && $safeHtml$$.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {
    return $safeHtml$$.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
  }
  goog.asserts.fail("expected object of type SafeHtml, got '" + $safeHtml$$ + "' of type " + goog.typeOf($safeHtml$$));
  return "type_error:SafeHtml";
};
goog.html.SafeHtml.htmlEscape = function $goog$html$SafeHtml$htmlEscape$($textAsString_textOrHtml$$) {
  if ($textAsString_textOrHtml$$ instanceof goog.html.SafeHtml) {
    return $textAsString_textOrHtml$$;
  }
  var $dir$$ = null;
  $textAsString_textOrHtml$$.implementsGoogI18nBidiDirectionalString && ($dir$$ = $textAsString_textOrHtml$$.getDirection());
  $textAsString_textOrHtml$$ = $textAsString_textOrHtml$$.implementsGoogStringTypedString ? $textAsString_textOrHtml$$.getTypedStringValue() : String($textAsString_textOrHtml$$);
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.htmlEscape($textAsString_textOrHtml$$), $dir$$);
};
goog.html.SafeHtml.htmlEscapePreservingNewlines = function $goog$html$SafeHtml$htmlEscapePreservingNewlines$($html$jscomp$2_textOrHtml$$) {
  if ($html$jscomp$2_textOrHtml$$ instanceof goog.html.SafeHtml) {
    return $html$jscomp$2_textOrHtml$$;
  }
  $html$jscomp$2_textOrHtml$$ = goog.html.SafeHtml.htmlEscape($html$jscomp$2_textOrHtml$$);
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.newLineToBr(goog.html.SafeHtml.unwrap($html$jscomp$2_textOrHtml$$)), $html$jscomp$2_textOrHtml$$.getDirection());
};
goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function $goog$html$SafeHtml$htmlEscapePreservingNewlinesAndSpaces$($html$jscomp$3_textOrHtml$$) {
  if ($html$jscomp$3_textOrHtml$$ instanceof goog.html.SafeHtml) {
    return $html$jscomp$3_textOrHtml$$;
  }
  $html$jscomp$3_textOrHtml$$ = goog.html.SafeHtml.htmlEscape($html$jscomp$3_textOrHtml$$);
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.whitespaceEscape(goog.html.SafeHtml.unwrap($html$jscomp$3_textOrHtml$$)), $html$jscomp$3_textOrHtml$$.getDirection());
};
goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
goog.html.SafeHtml.URL_ATTRIBUTES_ = {action:!0, cite:!0, data:!0, formaction:!0, href:!0, manifest:!0, poster:!0, src:!0};
goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {APPLET:!0, BASE:!0, EMBED:!0, IFRAME:!0, LINK:!0, MATH:!0, META:!0, OBJECT:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0};
goog.html.SafeHtml.create = function $goog$html$SafeHtml$create$($tagName$$, $opt_attributes$$, $opt_content$$) {
  goog.html.SafeHtml.verifyTagName(String($tagName$$));
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String($tagName$$), $opt_attributes$$, $opt_content$$);
};
goog.html.SafeHtml.verifyTagName = function $goog$html$SafeHtml$verifyTagName$($tagName$$) {
  if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test($tagName$$)) {
    throw Error("Invalid tag name <" + $tagName$$ + ">.");
  }
  if ($tagName$$.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) {
    throw Error("Tag name <" + $tagName$$ + "> is not allowed for SafeHtml.");
  }
};
goog.html.SafeHtml.createIframe = function $goog$html$SafeHtml$createIframe$($attributes$jscomp$1_opt_src$$, $opt_srcdoc$$, $opt_attributes$$, $opt_content$$) {
  $attributes$jscomp$1_opt_src$$ && goog.html.TrustedResourceUrl.unwrap($attributes$jscomp$1_opt_src$$);
  var $fixedAttributes$$ = {};
  $fixedAttributes$$.src = $attributes$jscomp$1_opt_src$$ || null;
  $fixedAttributes$$.srcdoc = $opt_srcdoc$$ && goog.html.SafeHtml.unwrap($opt_srcdoc$$);
  $attributes$jscomp$1_opt_src$$ = goog.html.SafeHtml.combineAttributes($fixedAttributes$$, {sandbox:""}, $opt_attributes$$);
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", $attributes$jscomp$1_opt_src$$, $opt_content$$);
};
goog.html.SafeHtml.createSandboxIframe = function $goog$html$SafeHtml$createSandboxIframe$($attributes$jscomp$2_opt_src$$, $opt_srcdoc$$, $opt_attributes$$, $opt_content$$) {
  if (!goog.html.SafeHtml.canUseSandboxIframe()) {
    throw Error("The browser does not support sandboxed iframes.");
  }
  var $fixedAttributes$$ = {};
  $fixedAttributes$$.src = $attributes$jscomp$2_opt_src$$ ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize($attributes$jscomp$2_opt_src$$)) : null;
  $fixedAttributes$$.srcdoc = $opt_srcdoc$$ || null;
  $fixedAttributes$$.sandbox = "";
  $attributes$jscomp$2_opt_src$$ = goog.html.SafeHtml.combineAttributes($fixedAttributes$$, {}, $opt_attributes$$);
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", $attributes$jscomp$2_opt_src$$, $opt_content$$);
};
goog.html.SafeHtml.canUseSandboxIframe = function $goog$html$SafeHtml$canUseSandboxIframe$() {
  return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
};
goog.html.SafeHtml.createScriptSrc = function $goog$html$SafeHtml$createScriptSrc$($attributes$jscomp$3_src$$, $opt_attributes$$) {
  goog.html.TrustedResourceUrl.unwrap($attributes$jscomp$3_src$$);
  $attributes$jscomp$3_src$$ = goog.html.SafeHtml.combineAttributes({src:$attributes$jscomp$3_src$$}, {}, $opt_attributes$$);
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", $attributes$jscomp$3_src$$);
};
goog.html.SafeHtml.createScript = function $goog$html$SafeHtml$createScript$($htmlContent_script$$, $opt_attributes$$) {
  for (var $attr_content$$ in $opt_attributes$$) {
    var $attrLower_i$$ = $attr_content$$.toLowerCase();
    if ("language" == $attrLower_i$$ || "src" == $attrLower_i$$ || "text" == $attrLower_i$$ || "type" == $attrLower_i$$) {
      throw Error('Cannot set "' + $attrLower_i$$ + '" attribute');
    }
  }
  $attr_content$$ = "";
  $htmlContent_script$$ = goog.array.concat($htmlContent_script$$);
  for ($attrLower_i$$ = 0; $attrLower_i$$ < $htmlContent_script$$.length; $attrLower_i$$++) {
    $attr_content$$ += goog.html.SafeScript.unwrap($htmlContent_script$$[$attrLower_i$$]);
  }
  $htmlContent_script$$ = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($attr_content$$, goog.i18n.bidi.Dir.NEUTRAL);
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", $opt_attributes$$, $htmlContent_script$$);
};
goog.html.SafeHtml.createStyle = function $goog$html$SafeHtml$createStyle$($htmlContent$jscomp$1_styleSheet$$, $attributes$jscomp$4_opt_attributes$$) {
  $attributes$jscomp$4_opt_attributes$$ = goog.html.SafeHtml.combineAttributes({type:"text/css"}, {}, $attributes$jscomp$4_opt_attributes$$);
  var $content$$ = "";
  $htmlContent$jscomp$1_styleSheet$$ = goog.array.concat($htmlContent$jscomp$1_styleSheet$$);
  for (var $i$$ = 0; $i$$ < $htmlContent$jscomp$1_styleSheet$$.length; $i$$++) {
    $content$$ += goog.html.SafeStyleSheet.unwrap($htmlContent$jscomp$1_styleSheet$$[$i$$]);
  }
  $htmlContent$jscomp$1_styleSheet$$ = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($content$$, goog.i18n.bidi.Dir.NEUTRAL);
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", $attributes$jscomp$4_opt_attributes$$, $htmlContent$jscomp$1_styleSheet$$);
};
goog.html.SafeHtml.createMetaRefresh = function $goog$html$SafeHtml$createMetaRefresh$($unwrappedUrl_url$$, $opt_secs$$) {
  $unwrappedUrl_url$$ = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize($unwrappedUrl_url$$));
  (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.contains($unwrappedUrl_url$$, ";") && ($unwrappedUrl_url$$ = "'" + $unwrappedUrl_url$$.replace(/'/g, "%27") + "'");
  return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {"http-equiv":"refresh", content:($opt_secs$$ || 0) + "; url=" + $unwrappedUrl_url$$});
};
goog.html.SafeHtml.getAttrNameAndValue_ = function $goog$html$SafeHtml$getAttrNameAndValue_$($tagName$$, $name$$, $value$$) {
  if ($value$$ instanceof goog.string.Const) {
    $value$$ = goog.string.Const.unwrap($value$$);
  } else {
    if ("style" == $name$$.toLowerCase()) {
      $value$$ = goog.html.SafeHtml.getStyleValue_($value$$);
    } else {
      if (/^on/i.test($name$$)) {
        throw Error('Attribute "' + $name$$ + '" requires goog.string.Const value, "' + $value$$ + '" given.');
      }
      if ($name$$.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) {
        if ($value$$ instanceof goog.html.TrustedResourceUrl) {
          $value$$ = goog.html.TrustedResourceUrl.unwrap($value$$);
        } else {
          if ($value$$ instanceof goog.html.SafeUrl) {
            $value$$ = goog.html.SafeUrl.unwrap($value$$);
          } else {
            if (goog.isString($value$$)) {
              $value$$ = goog.html.SafeUrl.sanitize($value$$).getTypedStringValue();
            } else {
              throw Error('Attribute "' + $name$$ + '" on tag "' + $tagName$$ + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + $value$$ + '" given.');
            }
          }
        }
      }
    }
  }
  $value$$.implementsGoogStringTypedString && ($value$$ = $value$$.getTypedStringValue());
  goog.asserts.assert(goog.isString($value$$) || goog.isNumber($value$$), "String or number value expected, got " + typeof $value$$ + " with value: " + $value$$);
  return $name$$ + '="' + goog.string.htmlEscape(String($value$$)) + '"';
};
goog.html.SafeHtml.getStyleValue_ = function $goog$html$SafeHtml$getStyleValue_$($value$$) {
  if (!goog.isObject($value$$)) {
    throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $value$$ + " given: " + $value$$);
  }
  $value$$ instanceof goog.html.SafeStyle || ($value$$ = goog.html.SafeStyle.create($value$$));
  return goog.html.SafeStyle.unwrap($value$$);
};
goog.html.SafeHtml.createWithDir = function $goog$html$SafeHtml$createWithDir$($dir$$, $html$jscomp$4_tagName$$, $opt_attributes$$, $opt_content$$) {
  $html$jscomp$4_tagName$$ = goog.html.SafeHtml.create($html$jscomp$4_tagName$$, $opt_attributes$$, $opt_content$$);
  $html$jscomp$4_tagName$$.dir_ = $dir$$;
  return $html$jscomp$4_tagName$$;
};
goog.html.SafeHtml.concat = function $goog$html$SafeHtml$concat$($var_args$$) {
  var $dir$$ = goog.i18n.bidi.Dir.NEUTRAL, $content$$ = "", $addArgument$$ = function $$addArgument$$$($argument$jscomp$2_html$$) {
    goog.isArray($argument$jscomp$2_html$$) ? goog.array.forEach($argument$jscomp$2_html$$, $addArgument$$) : ($argument$jscomp$2_html$$ = goog.html.SafeHtml.htmlEscape($argument$jscomp$2_html$$), $content$$ += goog.html.SafeHtml.unwrap($argument$jscomp$2_html$$), $argument$jscomp$2_html$$ = $argument$jscomp$2_html$$.getDirection(), $dir$$ == goog.i18n.bidi.Dir.NEUTRAL ? $dir$$ = $argument$jscomp$2_html$$ : $argument$jscomp$2_html$$ != goog.i18n.bidi.Dir.NEUTRAL && $dir$$ != $argument$jscomp$2_html$$ && 
    ($dir$$ = null));
  };
  goog.array.forEach(arguments, $addArgument$$);
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($content$$, $dir$$);
};
goog.html.SafeHtml.concatWithDir = function $goog$html$SafeHtml$concatWithDir$($dir$$, $var_args$$) {
  var $html$$ = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
  $html$$.dir_ = $dir$$;
  return $html$$;
};
goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$($html$$, $dir$$) {
  return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_($html$$, $dir$$);
};
goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function $goog$html$SafeHtml$$initSecurityPrivateDoNotAccessOrElse_$($html$$, $dir$$) {
  this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = $html$$;
  this.dir_ = $dir$$;
  return this;
};
goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function $goog$html$SafeHtml$createSafeHtmlTagSecurityPrivateDoNotAccessOrElse$($dirAttribute_tagName$$, $opt_attributes$$, $content$jscomp$3_opt_content$$) {
  var $dir$jscomp$7_html$$ = null;
  var $result$$ = "<" + $dirAttribute_tagName$$ + goog.html.SafeHtml.stringifyAttributes($dirAttribute_tagName$$, $opt_attributes$$);
  goog.isDefAndNotNull($content$jscomp$3_opt_content$$) ? goog.isArray($content$jscomp$3_opt_content$$) || ($content$jscomp$3_opt_content$$ = [$content$jscomp$3_opt_content$$]) : $content$jscomp$3_opt_content$$ = [];
  goog.dom.tags.isVoidTag($dirAttribute_tagName$$.toLowerCase()) ? (goog.asserts.assert(!$content$jscomp$3_opt_content$$.length, "Void tag <" + $dirAttribute_tagName$$ + "> does not allow content."), $result$$ += ">") : ($dir$jscomp$7_html$$ = goog.html.SafeHtml.concat($content$jscomp$3_opt_content$$), $result$$ += ">" + goog.html.SafeHtml.unwrap($dir$jscomp$7_html$$) + "</" + $dirAttribute_tagName$$ + ">", $dir$jscomp$7_html$$ = $dir$jscomp$7_html$$.getDirection());
  ($dirAttribute_tagName$$ = $opt_attributes$$ && $opt_attributes$$.dir) && ($dir$jscomp$7_html$$ = /^(ltr|rtl|auto)$/i.test($dirAttribute_tagName$$) ? goog.i18n.bidi.Dir.NEUTRAL : null);
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($result$$, $dir$jscomp$7_html$$);
};
goog.html.SafeHtml.stringifyAttributes = function $goog$html$SafeHtml$stringifyAttributes$($tagName$$, $opt_attributes$$) {
  var $result$$ = "";
  if ($opt_attributes$$) {
    for (var $name$$ in $opt_attributes$$) {
      if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test($name$$)) {
        throw Error('Invalid attribute name "' + $name$$ + '".');
      }
      var $value$$ = $opt_attributes$$[$name$$];
      goog.isDefAndNotNull($value$$) && ($result$$ += " " + goog.html.SafeHtml.getAttrNameAndValue_($tagName$$, $name$$, $value$$));
    }
  }
  return $result$$;
};
goog.html.SafeHtml.combineAttributes = function $goog$html$SafeHtml$combineAttributes$($fixedAttributes$$, $defaultAttributes$$, $opt_attributes$$) {
  var $combinedAttributes$$ = {}, $name$$;
  for ($name$$ in $fixedAttributes$$) {
    goog.asserts.assert($name$$.toLowerCase() == $name$$, "Must be lower case"), $combinedAttributes$$[$name$$] = $fixedAttributes$$[$name$$];
  }
  for ($name$$ in $defaultAttributes$$) {
    goog.asserts.assert($name$$.toLowerCase() == $name$$, "Must be lower case"), $combinedAttributes$$[$name$$] = $defaultAttributes$$[$name$$];
  }
  for ($name$$ in $opt_attributes$$) {
    var $nameLower$$ = $name$$.toLowerCase();
    if ($nameLower$$ in $fixedAttributes$$) {
      throw Error('Cannot override "' + $nameLower$$ + '" attribute, got "' + $name$$ + '" with value "' + $opt_attributes$$[$name$$] + '"');
    }
    $nameLower$$ in $defaultAttributes$$ && delete $combinedAttributes$$[$nameLower$$];
    $combinedAttributes$$[$name$$] = $opt_attributes$$[$name$$];
  }
  return $combinedAttributes$$;
};
goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
goog.dom.safe = {};
goog.dom.safe.InsertAdjacentHtmlPosition = {AFTERBEGIN:"afterbegin", AFTEREND:"afterend", BEFOREBEGIN:"beforebegin", BEFOREEND:"beforeend"};
goog.dom.safe.insertAdjacentHtml = function $goog$dom$safe$insertAdjacentHtml$($node$$, $position$$, $html$$) {
  $node$$.insertAdjacentHTML($position$$, goog.html.SafeHtml.unwrap($html$$));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {MATH:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0};
goog.dom.safe.setInnerHtml = function $goog$dom$safe$setInnerHtml$($elem$$, $html$$) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var $tagName$$ = $elem$$.tagName.toUpperCase();
    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[$tagName$$]) {
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + $elem$$.tagName + ".");
    }
  }
  $elem$$.innerHTML = goog.html.SafeHtml.unwrap($html$$);
};
goog.dom.safe.setOuterHtml = function $goog$dom$safe$setOuterHtml$($elem$$, $html$$) {
  $elem$$.outerHTML = goog.html.SafeHtml.unwrap($html$$);
};
goog.dom.safe.setStyle = function $goog$dom$safe$setStyle$($elem$$, $style$$) {
  $elem$$.style.cssText = goog.html.SafeStyle.unwrap($style$$);
};
goog.dom.safe.documentWrite = function $goog$dom$safe$documentWrite$($doc$$, $html$$) {
  $doc$$.write(goog.html.SafeHtml.unwrap($html$$));
};
goog.dom.safe.setAnchorHref = function $goog$dom$safe$setAnchorHref$($anchor$$, $safeUrl$jscomp$2_url$$) {
  goog.dom.asserts.assertIsHTMLAnchorElement($anchor$$);
  $safeUrl$jscomp$2_url$$ = $safeUrl$jscomp$2_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$2_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$2_url$$);
  $anchor$$.href = goog.html.SafeUrl.unwrap($safeUrl$jscomp$2_url$$);
};
goog.dom.safe.setImageSrc = function $goog$dom$safe$setImageSrc$($imageElement$$, $safeUrl$jscomp$3_url$$) {
  goog.dom.asserts.assertIsHTMLImageElement($imageElement$$);
  $safeUrl$jscomp$3_url$$ = $safeUrl$jscomp$3_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$3_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$3_url$$);
  $imageElement$$.src = goog.html.SafeUrl.unwrap($safeUrl$jscomp$3_url$$);
};
goog.dom.safe.setEmbedSrc = function $goog$dom$safe$setEmbedSrc$($embed$$, $url$$) {
  goog.dom.asserts.assertIsHTMLEmbedElement($embed$$);
  $embed$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setFrameSrc = function $goog$dom$safe$setFrameSrc$($frame$$, $url$$) {
  goog.dom.asserts.assertIsHTMLFrameElement($frame$$);
  $frame$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setIframeSrc = function $goog$dom$safe$setIframeSrc$($iframe$$, $url$$) {
  goog.dom.asserts.assertIsHTMLIFrameElement($iframe$$);
  $iframe$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setIframeSrcdoc = function $goog$dom$safe$setIframeSrcdoc$($iframe$$, $html$$) {
  goog.dom.asserts.assertIsHTMLIFrameElement($iframe$$);
  $iframe$$.srcdoc = goog.html.SafeHtml.unwrap($html$$);
};
goog.dom.safe.setLinkHrefAndRel = function $goog$dom$safe$setLinkHrefAndRel$($link$$, $url$$, $rel$$) {
  goog.dom.asserts.assertIsHTMLLinkElement($link$$);
  $link$$.rel = $rel$$;
  goog.string.caseInsensitiveContains($rel$$, "stylesheet") ? (goog.asserts.assert($url$$ instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), $link$$.href = goog.html.TrustedResourceUrl.unwrap($url$$)) : $link$$.href = $url$$ instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap($url$$) : $url$$ instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap($url$$) : goog.html.SafeUrl.sanitizeAssertUnchanged($url$$).getTypedStringValue();
};
goog.dom.safe.setObjectData = function $goog$dom$safe$setObjectData$($object$$, $url$$) {
  goog.dom.asserts.assertIsHTMLObjectElement($object$$);
  $object$$.data = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setScriptSrc = function $goog$dom$safe$setScriptSrc$($script$$, $url$$) {
  goog.dom.asserts.assertIsHTMLScriptElement($script$$);
  $script$$.src = goog.html.TrustedResourceUrl.unwrap($url$$);
};
goog.dom.safe.setScriptContent = function $goog$dom$safe$setScriptContent$($script$$, $content$$) {
  goog.dom.asserts.assertIsHTMLScriptElement($script$$);
  $script$$.text = goog.html.SafeScript.unwrap($content$$);
};
goog.dom.safe.setLocationHref = function $goog$dom$safe$setLocationHref$($loc$$, $safeUrl$jscomp$4_url$$) {
  goog.dom.asserts.assertIsLocation($loc$$);
  $safeUrl$jscomp$4_url$$ = $safeUrl$jscomp$4_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$4_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$4_url$$);
  $loc$$.href = goog.html.SafeUrl.unwrap($safeUrl$jscomp$4_url$$);
};
goog.dom.safe.openInWindow = function $goog$dom$safe$openInWindow$($safeUrl$jscomp$5_url$$, $opt_openerWin$$, $opt_name$$, $opt_specs$$, $opt_replace$$) {
  $safeUrl$jscomp$5_url$$ = $safeUrl$jscomp$5_url$$ instanceof goog.html.SafeUrl ? $safeUrl$jscomp$5_url$$ : goog.html.SafeUrl.sanitizeAssertUnchanged($safeUrl$jscomp$5_url$$);
  return ($opt_openerWin$$ || window).open(goog.html.SafeUrl.unwrap($safeUrl$jscomp$5_url$$), $opt_name$$ ? goog.string.Const.unwrap($opt_name$$) : "", $opt_specs$$, $opt_replace$$);
};
goog.html.uncheckedconversions = {};
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$($justification$$, $html$$, $opt_dir$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse($html$$, $opt_dir$$ || null);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeScriptFromStringKnownToSatisfyTypeContract$($justification$$, $script$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse($script$$);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeStyleFromStringKnownToSatisfyTypeContract$($justification$$, $style$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse($style$$);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeStyleSheetFromStringKnownToSatisfyTypeContract$($justification$$, $styleSheet$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse($styleSheet$$);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$safeUrlFromStringKnownToSatisfyTypeContract$($justification$$, $url$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function $goog$html$uncheckedconversions$trustedResourceUrlFromStringKnownToSatisfyTypeContract$($justification$$, $url$$) {
  goog.asserts.assertString(goog.string.Const.unwrap($justification$$), "must provide justification");
  goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap($justification$$)), "must provide non-empty justification");
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse($url$$);
};
goog.math = {};
goog.math.randomInt = function $goog$math$randomInt$($a$$) {
  return Math.floor(Math.random() * $a$$);
};
goog.math.uniformRandom = function $goog$math$uniformRandom$($a$$, $b$$) {
  return $a$$ + Math.random() * ($b$$ - $a$$);
};
goog.math.clamp = function $goog$math$clamp$($value$$, $min$$, $max$$) {
  return Math.min(Math.max($value$$, $min$$), $max$$);
};
goog.math.modulo = function $goog$math$modulo$($a$jscomp$11_r$$, $b$$) {
  $a$jscomp$11_r$$ %= $b$$;
  return 0 > $a$jscomp$11_r$$ * $b$$ ? $a$jscomp$11_r$$ + $b$$ : $a$jscomp$11_r$$;
};
goog.math.lerp = function $goog$math$lerp$($a$$, $b$$, $x$$) {
  return $a$$ + $x$$ * ($b$$ - $a$$);
};
goog.math.nearlyEquals = function $goog$math$nearlyEquals$($a$$, $b$$, $opt_tolerance$$) {
  return Math.abs($a$$ - $b$$) <= ($opt_tolerance$$ || 0.000001);
};
goog.math.standardAngle = function $goog$math$standardAngle$($angle$$) {
  return goog.math.modulo($angle$$, 360);
};
goog.math.standardAngleInRadians = function $goog$math$standardAngleInRadians$($angle$$) {
  return goog.math.modulo($angle$$, 2 * Math.PI);
};
goog.math.toRadians = function $goog$math$toRadians$($angleDegrees$$) {
  return $angleDegrees$$ * Math.PI / 180;
};
goog.math.toDegrees = function $goog$math$toDegrees$($angleRadians$$) {
  return 180 * $angleRadians$$ / Math.PI;
};
goog.math.angleDx = function $goog$math$angleDx$($degrees$$, $radius$$) {
  return $radius$$ * Math.cos(goog.math.toRadians($degrees$$));
};
goog.math.angleDy = function $goog$math$angleDy$($degrees$$, $radius$$) {
  return $radius$$ * Math.sin(goog.math.toRadians($degrees$$));
};
goog.math.angle = function $goog$math$angle$($x1$$, $y1$$, $x2$$, $y2$$) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2($y2$$ - $y1$$, $x2$$ - $x1$$)));
};
goog.math.angleDifference = function $goog$math$angleDifference$($d_startAngle$$, $endAngle$$) {
  $d_startAngle$$ = goog.math.standardAngle($endAngle$$) - goog.math.standardAngle($d_startAngle$$);
  180 < $d_startAngle$$ ? $d_startAngle$$ -= 360 : -180 >= $d_startAngle$$ && ($d_startAngle$$ = 360 + $d_startAngle$$);
  return $d_startAngle$$;
};
goog.math.sign = function $goog$math$sign$($x$$) {
  return 0 < $x$$ ? 1 : 0 > $x$$ ? -1 : $x$$;
};
goog.math.longestCommonSubsequence = function $goog$math$longestCommonSubsequence$($array1$$, $array2$$, $compare$jscomp$2_opt_compareFn$$, $collect_opt_collectorFn$$) {
  $compare$jscomp$2_opt_compareFn$$ = $compare$jscomp$2_opt_compareFn$$ || function($a$$, $b$$) {
    return $a$$ == $b$$;
  };
  $collect_opt_collectorFn$$ = $collect_opt_collectorFn$$ || function($i1$$, $i2$$) {
    return $array1$$[$i1$$];
  };
  for (var $length1$$ = $array1$$.length, $length2$$ = $array2$$.length, $arr$$ = [], $i$$ = 0; $i$$ < $length1$$ + 1; $i$$++) {
    $arr$$[$i$$] = [], $arr$$[$i$$][0] = 0;
  }
  for (var $j$$ = 0; $j$$ < $length2$$ + 1; $j$$++) {
    $arr$$[0][$j$$] = 0;
  }
  for ($i$$ = 1; $i$$ <= $length1$$; $i$$++) {
    for ($j$$ = 1; $j$$ <= $length2$$; $j$$++) {
      $compare$jscomp$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? $arr$$[$i$$][$j$$] = $arr$$[$i$$ - 1][$j$$ - 1] + 1 : $arr$$[$i$$][$j$$] = Math.max($arr$$[$i$$ - 1][$j$$], $arr$$[$i$$][$j$$ - 1]);
    }
  }
  var $result$$ = [];
  $i$$ = $length1$$;
  for ($j$$ = $length2$$; 0 < $i$$ && 0 < $j$$;) {
    $compare$jscomp$2_opt_compareFn$$($array1$$[$i$$ - 1], $array2$$[$j$$ - 1]) ? ($result$$.unshift($collect_opt_collectorFn$$($i$$ - 1, $j$$ - 1)), $i$$--, $j$$--) : $arr$$[$i$$ - 1][$j$$] > $arr$$[$i$$][$j$$ - 1] ? $i$$-- : $j$$--;
  }
  return $result$$;
};
goog.math.sum = function $goog$math$sum$($var_args$$) {
  return goog.array.reduce(arguments, function($sum$$, $value$$) {
    return $sum$$ + $value$$;
  }, 0);
};
goog.math.average = function $goog$math$average$($var_args$$) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function $goog$math$sampleVariance$($var_args$$) {
  var $sampleSize$$ = arguments.length;
  if (2 > $sampleSize$$) {
    return 0;
  }
  var $mean$$ = goog.math.average.apply(null, arguments);
  return goog.math.sum.apply(null, goog.array.map(arguments, function($val$$) {
    return Math.pow($val$$ - $mean$$, 2);
  })) / ($sampleSize$$ - 1);
};
goog.math.standardDeviation = function $goog$math$standardDeviation$($var_args$$) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function $goog$math$isInt$($num$$) {
  return isFinite($num$$) && 0 == $num$$ % 1;
};
goog.math.isFiniteNumber = function $goog$math$isFiniteNumber$($num$$) {
  return isFinite($num$$);
};
goog.math.isNegativeZero = function $goog$math$isNegativeZero$($num$$) {
  return 0 == $num$$ && 0 > 1 / $num$$;
};
goog.math.log10Floor = function $goog$math$log10Floor$($num$$) {
  if (0 < $num$$) {
    var $x$$ = Math.round(Math.log($num$$) * Math.LOG10E);
    return $x$$ - (parseFloat("1e" + $x$$) > $num$$ ? 1 : 0);
  }
  return 0 == $num$$ ? -Infinity : NaN;
};
goog.math.safeFloor = function $goog$math$safeFloor$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(!goog.isDef($opt_epsilon$$) || 0 < $opt_epsilon$$);
  return Math.floor($num$$ + ($opt_epsilon$$ || 2e-15));
};
goog.math.safeCeil = function $goog$math$safeCeil$($num$$, $opt_epsilon$$) {
  goog.asserts.assert(!goog.isDef($opt_epsilon$$) || 0 < $opt_epsilon$$);
  return Math.ceil($num$$ - ($opt_epsilon$$ || 2e-15));
};
goog.math.Coordinate = function $goog$math$Coordinate$($opt_x$$, $opt_y$$) {
  this.x = goog.isDef($opt_x$$) ? $opt_x$$ : 0;
  this.y = goog.isDef($opt_y$$) ? $opt_y$$ : 0;
};
goog.math.Coordinate.prototype.clone = function $goog$math$Coordinate$$clone$() {
  return new goog.math.Coordinate(this.x, this.y);
};
goog.DEBUG && (goog.math.Coordinate.prototype.toString = function $goog$math$Coordinate$$toString$() {
  return "(" + this.x + ", " + this.y + ")";
});
goog.math.Coordinate.prototype.equals = function $goog$math$Coordinate$$equals$($other$$) {
  return $other$$ instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, $other$$);
};
goog.math.Coordinate.equals = function $goog$math$Coordinate$equals$($a$$, $b$$) {
  return $a$$ == $b$$ ? !0 : $a$$ && $b$$ ? $a$$.x == $b$$.x && $a$$.y == $b$$.y : !1;
};
goog.math.Coordinate.distance = function $goog$math$Coordinate$distance$($a$jscomp$16_dy$$, $b$$) {
  var $dx$$ = $a$jscomp$16_dy$$.x - $b$$.x;
  $a$jscomp$16_dy$$ = $a$jscomp$16_dy$$.y - $b$$.y;
  return Math.sqrt($dx$$ * $dx$$ + $a$jscomp$16_dy$$ * $a$jscomp$16_dy$$);
};
goog.math.Coordinate.magnitude = function $goog$math$Coordinate$magnitude$($a$$) {
  return Math.sqrt($a$$.x * $a$$.x + $a$$.y * $a$$.y);
};
goog.math.Coordinate.azimuth = function $goog$math$Coordinate$azimuth$($a$$) {
  return goog.math.angle(0, 0, $a$$.x, $a$$.y);
};
goog.math.Coordinate.squaredDistance = function $goog$math$Coordinate$squaredDistance$($a$jscomp$19_dy$$, $b$$) {
  var $dx$$ = $a$jscomp$19_dy$$.x - $b$$.x;
  $a$jscomp$19_dy$$ = $a$jscomp$19_dy$$.y - $b$$.y;
  return $dx$$ * $dx$$ + $a$jscomp$19_dy$$ * $a$jscomp$19_dy$$;
};
goog.math.Coordinate.difference = function $goog$math$Coordinate$difference$($a$$, $b$$) {
  return new goog.math.Coordinate($a$$.x - $b$$.x, $a$$.y - $b$$.y);
};
goog.math.Coordinate.sum = function $goog$math$Coordinate$sum$($a$$, $b$$) {
  return new goog.math.Coordinate($a$$.x + $b$$.x, $a$$.y + $b$$.y);
};
goog.math.Coordinate.prototype.ceil = function $goog$math$Coordinate$$ceil$() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
goog.math.Coordinate.prototype.floor = function $goog$math$Coordinate$$floor$() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
goog.math.Coordinate.prototype.round = function $goog$math$Coordinate$$round$() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
goog.math.Coordinate.prototype.translate = function $goog$math$Coordinate$$translate$($tx$$, $opt_ty$$) {
  $tx$$ instanceof goog.math.Coordinate ? (this.x += $tx$$.x, this.y += $tx$$.y) : (this.x += Number($tx$$), goog.isNumber($opt_ty$$) && (this.y += $opt_ty$$));
  return this;
};
goog.math.Coordinate.prototype.scale = function $goog$math$Coordinate$$scale$($sx$$, $opt_sy$jscomp$1_sy$$) {
  $opt_sy$jscomp$1_sy$$ = goog.isNumber($opt_sy$jscomp$1_sy$$) ? $opt_sy$jscomp$1_sy$$ : $sx$$;
  this.x *= $sx$$;
  this.y *= $opt_sy$jscomp$1_sy$$;
  return this;
};
goog.math.Coordinate.prototype.rotateRadians = function $goog$math$Coordinate$$rotateRadians$($radians_sin$$, $center_opt_center$$) {
  $center_opt_center$$ = $center_opt_center$$ || new goog.math.Coordinate(0, 0);
  var $x$$ = this.x, $y$$ = this.y, $cos$$ = Math.cos($radians_sin$$);
  $radians_sin$$ = Math.sin($radians_sin$$);
  this.x = ($x$$ - $center_opt_center$$.x) * $cos$$ - ($y$$ - $center_opt_center$$.y) * $radians_sin$$ + $center_opt_center$$.x;
  this.y = ($x$$ - $center_opt_center$$.x) * $radians_sin$$ + ($y$$ - $center_opt_center$$.y) * $cos$$ + $center_opt_center$$.y;
};
goog.math.Coordinate.prototype.rotateDegrees = function $goog$math$Coordinate$$rotateDegrees$($degrees$$, $opt_center$$) {
  this.rotateRadians(goog.math.toRadians($degrees$$), $opt_center$$);
};
goog.math.Size = function $goog$math$Size$($width$$, $height$$) {
  this.width = $width$$;
  this.height = $height$$;
};
goog.math.Size.equals = function $goog$math$Size$equals$($a$$, $b$$) {
  return $a$$ == $b$$ ? !0 : $a$$ && $b$$ ? $a$$.width == $b$$.width && $a$$.height == $b$$.height : !1;
};
goog.math.Size.prototype.clone = function $goog$math$Size$$clone$() {
  return new goog.math.Size(this.width, this.height);
};
goog.DEBUG && (goog.math.Size.prototype.toString = function $goog$math$Size$$toString$() {
  return "(" + this.width + " x " + this.height + ")";
});
goog.math.Size.prototype.getLongest = function $goog$math$Size$$getLongest$() {
  return Math.max(this.width, this.height);
};
goog.math.Size.prototype.getShortest = function $goog$math$Size$$getShortest$() {
  return Math.min(this.width, this.height);
};
goog.math.Size.prototype.area = function $goog$math$Size$$area$() {
  return this.width * this.height;
};
goog.math.Size.prototype.perimeter = function $goog$math$Size$$perimeter$() {
  return 2 * (this.width + this.height);
};
goog.math.Size.prototype.aspectRatio = function $goog$math$Size$$aspectRatio$() {
  return this.width / this.height;
};
goog.math.Size.prototype.isEmpty = function $goog$math$Size$$isEmpty$() {
  return !this.area();
};
goog.math.Size.prototype.ceil = function $goog$math$Size$$ceil$() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog.math.Size.prototype.fitsInside = function $goog$math$Size$$fitsInside$($target$$) {
  return this.width <= $target$$.width && this.height <= $target$$.height;
};
goog.math.Size.prototype.floor = function $goog$math$Size$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog.math.Size.prototype.round = function $goog$math$Size$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog.math.Size.prototype.scale = function $goog$math$Size$$scale$($sx$$, $opt_sy$jscomp$2_sy$$) {
  $opt_sy$jscomp$2_sy$$ = goog.isNumber($opt_sy$jscomp$2_sy$$) ? $opt_sy$jscomp$2_sy$$ : $sx$$;
  this.width *= $sx$$;
  this.height *= $opt_sy$jscomp$2_sy$$;
  return this;
};
goog.math.Size.prototype.scaleToCover = function $goog$math$Size$$scaleToCover$($s$jscomp$16_target$$) {
  $s$jscomp$16_target$$ = this.aspectRatio() <= $s$jscomp$16_target$$.aspectRatio() ? $s$jscomp$16_target$$.width / this.width : $s$jscomp$16_target$$.height / this.height;
  return this.scale($s$jscomp$16_target$$);
};
goog.math.Size.prototype.scaleToFit = function $goog$math$Size$$scaleToFit$($s$jscomp$17_target$$) {
  $s$jscomp$17_target$$ = this.aspectRatio() > $s$jscomp$17_target$$.aspectRatio() ? $s$jscomp$17_target$$.width / this.width : $s$jscomp$17_target$$.height / this.height;
  return this.scale($s$jscomp$17_target$$);
};
goog.dom.ASSUME_QUIRKS_MODE = !1;
goog.dom.ASSUME_STANDARDS_MODE = !1;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.getDomHelper = function $goog$dom$getDomHelper$($opt_element$$) {
  return $opt_element$$ ? new goog.dom.DomHelper(goog.dom.getOwnerDocument($opt_element$$)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper);
};
goog.dom.getDocument = function $goog$dom$getDocument$() {
  return document;
};
goog.dom.getElement = function $goog$dom$getElement$($element$$) {
  return goog.dom.getElementHelper_(document, $element$$);
};
goog.dom.getElementHelper_ = function $goog$dom$getElementHelper_$($doc$$, $element$$) {
  return goog.isString($element$$) ? $doc$$.getElementById($element$$) : $element$$;
};
goog.dom.getRequiredElement = function $goog$dom$getRequiredElement$($id$$) {
  return goog.dom.getRequiredElementHelper_(document, $id$$);
};
goog.dom.getRequiredElementHelper_ = function $goog$dom$getRequiredElementHelper_$($doc$jscomp$11_element$$, $id$$) {
  goog.asserts.assertString($id$$);
  $doc$jscomp$11_element$$ = goog.dom.getElementHelper_($doc$jscomp$11_element$$, $id$$);
  return $doc$jscomp$11_element$$ = goog.asserts.assertElement($doc$jscomp$11_element$$, "No element found with id: " + $id$$);
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagName = function $goog$dom$getElementsByTagName$($tagName$$, $opt_parent$$) {
  return ($opt_parent$$ || document).getElementsByTagName(String($tagName$$));
};
goog.dom.getElementsByTagNameAndClass = function $goog$dom$getElementsByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementsByTagNameAndClass_(document, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.getElementByTagNameAndClass = function $goog$dom$getElementByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementByTagNameAndClass_(document, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.getElementsByClass = function $goog$dom$getElementsByClass$($className$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || document;
  return goog.dom.canUseQuerySelector_($parent$$) ? $parent$$.querySelectorAll("." + $className$$) : goog.dom.getElementsByTagNameAndClass_(document, "*", $className$$, $opt_el$$);
};
goog.dom.getElementByClass = function $goog$dom$getElementByClass$($className$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || document;
  return ($parent$$.getElementsByClassName ? $parent$$.getElementsByClassName($className$$)[0] : goog.dom.getElementByTagNameAndClass_(document, "*", $className$$, $opt_el$$)) || null;
};
goog.dom.getRequiredElementByClass = function $goog$dom$getRequiredElementByClass$($className$$, $opt_root_retValue$$) {
  $opt_root_retValue$$ = goog.dom.getElementByClass($className$$, $opt_root_retValue$$);
  return goog.asserts.assert($opt_root_retValue$$, "No element found with className: " + $className$$);
};
goog.dom.canUseQuerySelector_ = function $goog$dom$canUseQuerySelector_$($parent$$) {
  return !(!$parent$$.querySelectorAll || !$parent$$.querySelector);
};
goog.dom.getElementsByTagNameAndClass_ = function $goog$dom$getElementsByTagNameAndClass_$($arrayLike$jscomp$1_doc$jscomp$12_parent$$, $len$jscomp$2_opt_tag$$, $opt_class$$, $els_opt_el$$) {
  $arrayLike$jscomp$1_doc$jscomp$12_parent$$ = $els_opt_el$$ || $arrayLike$jscomp$1_doc$jscomp$12_parent$$;
  var $className$jscomp$6_tagName$$ = $len$jscomp$2_opt_tag$$ && "*" != $len$jscomp$2_opt_tag$$ ? String($len$jscomp$2_opt_tag$$).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_($arrayLike$jscomp$1_doc$jscomp$12_parent$$) && ($className$jscomp$6_tagName$$ || $opt_class$$)) {
    return $arrayLike$jscomp$1_doc$jscomp$12_parent$$.querySelectorAll($className$jscomp$6_tagName$$ + ($opt_class$$ ? "." + $opt_class$$ : ""));
  }
  if ($opt_class$$ && $arrayLike$jscomp$1_doc$jscomp$12_parent$$.getElementsByClassName) {
    $els_opt_el$$ = $arrayLike$jscomp$1_doc$jscomp$12_parent$$.getElementsByClassName($opt_class$$);
    if ($className$jscomp$6_tagName$$) {
      $arrayLike$jscomp$1_doc$jscomp$12_parent$$ = {};
      for (var $i$$ = $len$jscomp$2_opt_tag$$ = 0, $el$$; $el$$ = $els_opt_el$$[$i$$]; $i$$++) {
        $className$jscomp$6_tagName$$ == $el$$.nodeName && ($arrayLike$jscomp$1_doc$jscomp$12_parent$$[$len$jscomp$2_opt_tag$$++] = $el$$);
      }
      $arrayLike$jscomp$1_doc$jscomp$12_parent$$.length = $len$jscomp$2_opt_tag$$;
      return $arrayLike$jscomp$1_doc$jscomp$12_parent$$;
    }
    return $els_opt_el$$;
  }
  $els_opt_el$$ = $arrayLike$jscomp$1_doc$jscomp$12_parent$$.getElementsByTagName($className$jscomp$6_tagName$$ || "*");
  if ($opt_class$$) {
    $arrayLike$jscomp$1_doc$jscomp$12_parent$$ = {};
    for ($i$$ = $len$jscomp$2_opt_tag$$ = 0; $el$$ = $els_opt_el$$[$i$$]; $i$$++) {
      $className$jscomp$6_tagName$$ = $el$$.className, "function" == typeof $className$jscomp$6_tagName$$.split && goog.array.contains($className$jscomp$6_tagName$$.split(/\s+/), $opt_class$$) && ($arrayLike$jscomp$1_doc$jscomp$12_parent$$[$len$jscomp$2_opt_tag$$++] = $el$$);
    }
    $arrayLike$jscomp$1_doc$jscomp$12_parent$$.length = $len$jscomp$2_opt_tag$$;
    return $arrayLike$jscomp$1_doc$jscomp$12_parent$$;
  }
  return $els_opt_el$$;
};
goog.dom.getElementByTagNameAndClass_ = function $goog$dom$getElementByTagNameAndClass_$($doc$$, $opt_tag$$, $opt_class$$, $opt_el$$) {
  var $parent$$ = $opt_el$$ || $doc$$, $tag$$ = $opt_tag$$ && "*" != $opt_tag$$ ? String($opt_tag$$).toUpperCase() : "";
  return goog.dom.canUseQuerySelector_($parent$$) && ($tag$$ || $opt_class$$) ? $parent$$.querySelector($tag$$ + ($opt_class$$ ? "." + $opt_class$$ : "")) : goog.dom.getElementsByTagNameAndClass_($doc$$, $opt_tag$$, $opt_class$$, $opt_el$$)[0] || null;
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function $goog$dom$setProperties$($element$$, $properties$$) {
  goog.object.forEach($properties$$, function($val$$, $key$$) {
    $val$$ && $val$$.implementsGoogStringTypedString && ($val$$ = $val$$.getTypedStringValue());
    "style" == $key$$ ? $element$$.style.cssText = $val$$ : "class" == $key$$ ? $element$$.className = $val$$ : "for" == $key$$ ? $element$$.htmlFor = $val$$ : goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty($key$$) ? $element$$.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[$key$$], $val$$) : goog.string.startsWith($key$$, "aria-") || goog.string.startsWith($key$$, "data-") ? $element$$.setAttribute($key$$, $val$$) : $element$$[$key$$] = $val$$;
  });
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
goog.dom.getViewportSize = function $goog$dom$getViewportSize$($opt_window$$) {
  return goog.dom.getViewportSize_($opt_window$$ || window);
};
goog.dom.getViewportSize_ = function $goog$dom$getViewportSize_$($doc$jscomp$14_el$jscomp$1_win$$) {
  $doc$jscomp$14_el$jscomp$1_win$$ = $doc$jscomp$14_el$jscomp$1_win$$.document;
  $doc$jscomp$14_el$jscomp$1_win$$ = goog.dom.isCss1CompatMode_($doc$jscomp$14_el$jscomp$1_win$$) ? $doc$jscomp$14_el$jscomp$1_win$$.documentElement : $doc$jscomp$14_el$jscomp$1_win$$.body;
  return new goog.math.Size($doc$jscomp$14_el$jscomp$1_win$$.clientWidth, $doc$jscomp$14_el$jscomp$1_win$$.clientHeight);
};
goog.dom.getDocumentHeight = function $goog$dom$getDocumentHeight$() {
  return goog.dom.getDocumentHeight_(window);
};
goog.dom.getDocumentHeightForWindow = function $goog$dom$getDocumentHeightForWindow$($win$$) {
  return goog.dom.getDocumentHeight_($win$$);
};
goog.dom.getDocumentHeight_ = function $goog$dom$getDocumentHeight_$($vh_win$$) {
  var $doc$jscomp$15_sh$$ = $vh_win$$.document, $body$jscomp$1_height$$ = 0;
  if ($doc$jscomp$15_sh$$) {
    $body$jscomp$1_height$$ = $doc$jscomp$15_sh$$.body;
    var $docEl$$ = $doc$jscomp$15_sh$$.documentElement;
    if (!$docEl$$ || !$body$jscomp$1_height$$) {
      return 0;
    }
    $vh_win$$ = goog.dom.getViewportSize_($vh_win$$).height;
    if (goog.dom.isCss1CompatMode_($doc$jscomp$15_sh$$) && $docEl$$.scrollHeight) {
      $body$jscomp$1_height$$ = $docEl$$.scrollHeight != $vh_win$$ ? $docEl$$.scrollHeight : $docEl$$.offsetHeight;
    } else {
      $doc$jscomp$15_sh$$ = $docEl$$.scrollHeight;
      var $oh$$ = $docEl$$.offsetHeight;
      $docEl$$.clientHeight != $oh$$ && ($doc$jscomp$15_sh$$ = $body$jscomp$1_height$$.scrollHeight, $oh$$ = $body$jscomp$1_height$$.offsetHeight);
      $body$jscomp$1_height$$ = $doc$jscomp$15_sh$$ > $vh_win$$ ? $doc$jscomp$15_sh$$ > $oh$$ ? $doc$jscomp$15_sh$$ : $oh$$ : $doc$jscomp$15_sh$$ < $oh$$ ? $doc$jscomp$15_sh$$ : $oh$$;
    }
  }
  return $body$jscomp$1_height$$;
};
goog.dom.getPageScroll = function $goog$dom$getPageScroll$($opt_window$$) {
  return goog.dom.getDomHelper(($opt_window$$ || goog.global || window).document).getDocumentScroll();
};
goog.dom.getDocumentScroll = function $goog$dom$getDocumentScroll$() {
  return goog.dom.getDocumentScroll_(document);
};
goog.dom.getDocumentScroll_ = function $goog$dom$getDocumentScroll_$($doc$jscomp$16_win$$) {
  var $el$$ = goog.dom.getDocumentScrollElement_($doc$jscomp$16_win$$);
  $doc$jscomp$16_win$$ = goog.dom.getWindow_($doc$jscomp$16_win$$);
  return goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && $doc$jscomp$16_win$$.pageYOffset != $el$$.scrollTop ? new goog.math.Coordinate($el$$.scrollLeft, $el$$.scrollTop) : new goog.math.Coordinate($doc$jscomp$16_win$$.pageXOffset || $el$$.scrollLeft, $doc$jscomp$16_win$$.pageYOffset || $el$$.scrollTop);
};
goog.dom.getDocumentScrollElement = function $goog$dom$getDocumentScrollElement$() {
  return goog.dom.getDocumentScrollElement_(document);
};
goog.dom.getDocumentScrollElement_ = function $goog$dom$getDocumentScrollElement_$($doc$$) {
  return $doc$$.scrollingElement ? $doc$$.scrollingElement : !goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_($doc$$) ? $doc$$.documentElement : $doc$$.body || $doc$$.documentElement;
};
goog.dom.getWindow = function $goog$dom$getWindow$($opt_doc$$) {
  return $opt_doc$$ ? goog.dom.getWindow_($opt_doc$$) : window;
};
goog.dom.getWindow_ = function $goog$dom$getWindow_$($doc$$) {
  return $doc$$.parentWindow || $doc$$.defaultView;
};
goog.dom.createDom = function $goog$dom$createDom$($tagName$$, $opt_attributes$$, $var_args$$) {
  return goog.dom.createDom_(document, arguments);
};
goog.dom.createDom_ = function $goog$dom$createDom_$($doc$$, $args$$) {
  var $element$jscomp$16_tagName$$ = String($args$$[0]), $attributes$$ = $args$$[1];
  if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && $attributes$$ && ($attributes$$.name || $attributes$$.type)) {
    $element$jscomp$16_tagName$$ = ["<", $element$jscomp$16_tagName$$];
    $attributes$$.name && $element$jscomp$16_tagName$$.push(' name="', goog.string.htmlEscape($attributes$$.name), '"');
    if ($attributes$$.type) {
      $element$jscomp$16_tagName$$.push(' type="', goog.string.htmlEscape($attributes$$.type), '"');
      var $clone$$ = {};
      goog.object.extend($clone$$, $attributes$$);
      delete $clone$$.type;
      $attributes$$ = $clone$$;
    }
    $element$jscomp$16_tagName$$.push(">");
    $element$jscomp$16_tagName$$ = $element$jscomp$16_tagName$$.join("");
  }
  $element$jscomp$16_tagName$$ = $doc$$.createElement($element$jscomp$16_tagName$$);
  $attributes$$ && (goog.isString($attributes$$) ? $element$jscomp$16_tagName$$.className = $attributes$$ : goog.isArray($attributes$$) ? $element$jscomp$16_tagName$$.className = $attributes$$.join(" ") : goog.dom.setProperties($element$jscomp$16_tagName$$, $attributes$$));
  2 < $args$$.length && goog.dom.append_($doc$$, $element$jscomp$16_tagName$$, $args$$, 2);
  return $element$jscomp$16_tagName$$;
};
goog.dom.append_ = function $goog$dom$append_$($doc$$, $parent$$, $args$$, $i$$) {
  function $childHandler$$($child$$) {
    $child$$ && $parent$$.appendChild(goog.isString($child$$) ? $doc$$.createTextNode($child$$) : $child$$);
  }
  for (; $i$$ < $args$$.length; $i$$++) {
    var $arg$$ = $args$$[$i$$];
    goog.isArrayLike($arg$$) && !goog.dom.isNodeLike($arg$$) ? goog.array.forEach(goog.dom.isNodeList($arg$$) ? goog.array.toArray($arg$$) : $arg$$, $childHandler$$) : $childHandler$$($arg$$);
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function $goog$dom$createElement$($name$$) {
  return goog.dom.createElement_(document, $name$$);
};
goog.dom.createElement_ = function $goog$dom$createElement_$($doc$$, $name$$) {
  return $doc$$.createElement(String($name$$));
};
goog.dom.createTextNode = function $goog$dom$createTextNode$($content$$) {
  return document.createTextNode(String($content$$));
};
goog.dom.createTable = function $goog$dom$createTable$($rows$$, $columns$$, $opt_fillWithNbsp$$) {
  return goog.dom.createTable_(document, $rows$$, $columns$$, !!$opt_fillWithNbsp$$);
};
goog.dom.createTable_ = function $goog$dom$createTable_$($doc$$, $rows$$, $columns$$, $fillWithNbsp$$) {
  for (var $table$$ = goog.dom.createElement_($doc$$, "TABLE"), $tbody$$ = $table$$.appendChild(goog.dom.createElement_($doc$$, "TBODY")), $i$$ = 0; $i$$ < $rows$$; $i$$++) {
    for (var $tr$$ = goog.dom.createElement_($doc$$, "TR"), $j$$ = 0; $j$$ < $columns$$; $j$$++) {
      var $td$$ = goog.dom.createElement_($doc$$, "TD");
      $fillWithNbsp$$ && goog.dom.setTextContent($td$$, goog.string.Unicode.NBSP);
      $tr$$.appendChild($td$$);
    }
    $tbody$$.appendChild($tr$$);
  }
  return $table$$;
};
goog.dom.constHtmlToNode = function $goog$dom$constHtmlToNode$($var_args$$) {
  var $safeHtml$$ = goog.array.map(arguments, goog.string.Const.unwrap);
  $safeHtml$$ = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), $safeHtml$$.join(""));
  return goog.dom.safeHtmlToNode($safeHtml$$);
};
goog.dom.safeHtmlToNode = function $goog$dom$safeHtmlToNode$($html$$) {
  return goog.dom.safeHtmlToNode_(document, $html$$);
};
goog.dom.safeHtmlToNode_ = function $goog$dom$safeHtmlToNode_$($doc$$, $html$$) {
  var $tempDiv$$ = goog.dom.createElement_($doc$$, "DIV");
  goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (goog.dom.safe.setInnerHtml($tempDiv$$, goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, $html$$)), $tempDiv$$.removeChild($tempDiv$$.firstChild)) : goog.dom.safe.setInnerHtml($tempDiv$$, $html$$);
  return goog.dom.childrenToNode_($doc$$, $tempDiv$$);
};
goog.dom.childrenToNode_ = function $goog$dom$childrenToNode_$($doc$$, $tempDiv$$) {
  if (1 == $tempDiv$$.childNodes.length) {
    return $tempDiv$$.removeChild($tempDiv$$.firstChild);
  }
  for ($doc$$ = $doc$$.createDocumentFragment(); $tempDiv$$.firstChild;) {
    $doc$$.appendChild($tempDiv$$.firstChild);
  }
  return $doc$$;
};
goog.dom.isCss1CompatMode = function $goog$dom$isCss1CompatMode$() {
  return goog.dom.isCss1CompatMode_(document);
};
goog.dom.isCss1CompatMode_ = function $goog$dom$isCss1CompatMode_$($doc$$) {
  return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == $doc$$.compatMode;
};
goog.dom.canHaveChildren = function $goog$dom$canHaveChildren$($node$$) {
  if ($node$$.nodeType != goog.dom.NodeType.ELEMENT) {
    return !1;
  }
  switch($node$$.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1;
  }
  return !0;
};
goog.dom.appendChild = function $goog$dom$appendChild$($parent$$, $child$$) {
  $parent$$.appendChild($child$$);
};
goog.dom.append = function $goog$dom$append$($parent$$, $var_args$$) {
  goog.dom.append_(goog.dom.getOwnerDocument($parent$$), $parent$$, arguments, 1);
};
goog.dom.removeChildren = function $goog$dom$removeChildren$($node$$) {
  for (var $child$$; $child$$ = $node$$.firstChild;) {
    $node$$.removeChild($child$$);
  }
};
goog.dom.insertSiblingBefore = function $goog$dom$insertSiblingBefore$($newNode$$, $refNode$$) {
  $refNode$$.parentNode && $refNode$$.parentNode.insertBefore($newNode$$, $refNode$$);
};
goog.dom.insertSiblingAfter = function $goog$dom$insertSiblingAfter$($newNode$$, $refNode$$) {
  $refNode$$.parentNode && $refNode$$.parentNode.insertBefore($newNode$$, $refNode$$.nextSibling);
};
goog.dom.insertChildAt = function $goog$dom$insertChildAt$($parent$$, $child$$, $index$$) {
  $parent$$.insertBefore($child$$, $parent$$.childNodes[$index$$] || null);
};
goog.dom.removeNode = function $goog$dom$removeNode$($node$$) {
  return $node$$ && $node$$.parentNode ? $node$$.parentNode.removeChild($node$$) : null;
};
goog.dom.replaceNode = function $goog$dom$replaceNode$($newNode$$, $oldNode$$) {
  var $parent$$ = $oldNode$$.parentNode;
  $parent$$ && $parent$$.replaceChild($newNode$$, $oldNode$$);
};
goog.dom.flattenElement = function $goog$dom$flattenElement$($element$$) {
  var $child$$, $parent$$ = $element$$.parentNode;
  if ($parent$$ && $parent$$.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if ($element$$.removeNode) {
      return $element$$.removeNode(!1);
    }
    for (; $child$$ = $element$$.firstChild;) {
      $parent$$.insertBefore($child$$, $element$$);
    }
    return goog.dom.removeNode($element$$);
  }
};
goog.dom.getChildren = function $goog$dom$getChildren$($element$$) {
  return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != $element$$.children ? $element$$.children : goog.array.filter($element$$.childNodes, function($node$$) {
    return $node$$.nodeType == goog.dom.NodeType.ELEMENT;
  });
};
goog.dom.getFirstElementChild = function $goog$dom$getFirstElementChild$($node$$) {
  return goog.isDef($node$$.firstElementChild) ? $node$$.firstElementChild : goog.dom.getNextElementNode_($node$$.firstChild, !0);
};
goog.dom.getLastElementChild = function $goog$dom$getLastElementChild$($node$$) {
  return goog.isDef($node$$.lastElementChild) ? $node$$.lastElementChild : goog.dom.getNextElementNode_($node$$.lastChild, !1);
};
goog.dom.getNextElementSibling = function $goog$dom$getNextElementSibling$($node$$) {
  return goog.isDef($node$$.nextElementSibling) ? $node$$.nextElementSibling : goog.dom.getNextElementNode_($node$$.nextSibling, !0);
};
goog.dom.getPreviousElementSibling = function $goog$dom$getPreviousElementSibling$($node$$) {
  return goog.isDef($node$$.previousElementSibling) ? $node$$.previousElementSibling : goog.dom.getNextElementNode_($node$$.previousSibling, !1);
};
goog.dom.getNextElementNode_ = function $goog$dom$getNextElementNode_$($node$$, $forward$$) {
  for (; $node$$ && $node$$.nodeType != goog.dom.NodeType.ELEMENT;) {
    $node$$ = $forward$$ ? $node$$.nextSibling : $node$$.previousSibling;
  }
  return $node$$;
};
goog.dom.getNextNode = function $goog$dom$getNextNode$($node$$) {
  if (!$node$$) {
    return null;
  }
  if ($node$$.firstChild) {
    return $node$$.firstChild;
  }
  for (; $node$$ && !$node$$.nextSibling;) {
    $node$$ = $node$$.parentNode;
  }
  return $node$$ ? $node$$.nextSibling : null;
};
goog.dom.getPreviousNode = function $goog$dom$getPreviousNode$($node$$) {
  if (!$node$$) {
    return null;
  }
  if (!$node$$.previousSibling) {
    return $node$$.parentNode;
  }
  for ($node$$ = $node$$.previousSibling; $node$$ && $node$$.lastChild;) {
    $node$$ = $node$$.lastChild;
  }
  return $node$$;
};
goog.dom.isNodeLike = function $goog$dom$isNodeLike$($obj$$) {
  return goog.isObject($obj$$) && 0 < $obj$$.nodeType;
};
goog.dom.isElement = function $goog$dom$isElement$($obj$$) {
  return goog.isObject($obj$$) && $obj$$.nodeType == goog.dom.NodeType.ELEMENT;
};
goog.dom.isWindow = function $goog$dom$isWindow$($obj$$) {
  return goog.isObject($obj$$) && $obj$$.window == $obj$$;
};
goog.dom.getParentElement = function $goog$dom$getParentElement$($element$$) {
  var $parent$$;
  if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY && !(goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10") && goog.global.SVGElement && $element$$ instanceof goog.global.SVGElement) && ($parent$$ = $element$$.parentElement)) {
    return $parent$$;
  }
  $parent$$ = $element$$.parentNode;
  return goog.dom.isElement($parent$$) ? $parent$$ : null;
};
goog.dom.contains = function $goog$dom$contains$($parent$$, $descendant$$) {
  if (!$parent$$ || !$descendant$$) {
    return !1;
  }
  if ($parent$$.contains && $descendant$$.nodeType == goog.dom.NodeType.ELEMENT) {
    return $parent$$ == $descendant$$ || $parent$$.contains($descendant$$);
  }
  if ("undefined" != typeof $parent$$.compareDocumentPosition) {
    return $parent$$ == $descendant$$ || !!($parent$$.compareDocumentPosition($descendant$$) & 16);
  }
  for (; $descendant$$ && $parent$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode;
  }
  return $descendant$$ == $parent$$;
};
goog.dom.compareNodeOrder = function $goog$dom$compareNodeOrder$($node1_range2$$, $node2$$) {
  if ($node1_range2$$ == $node2$$) {
    return 0;
  }
  if ($node1_range2$$.compareDocumentPosition) {
    return $node1_range2$$.compareDocumentPosition($node2$$) & 2 ? 1 : -1;
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    if ($node1_range2$$.nodeType == goog.dom.NodeType.DOCUMENT) {
      return -1;
    }
    if ($node2$$.nodeType == goog.dom.NodeType.DOCUMENT) {
      return 1;
    }
  }
  if ("sourceIndex" in $node1_range2$$ || $node1_range2$$.parentNode && "sourceIndex" in $node1_range2$$.parentNode) {
    var $isElement1_range1$$ = $node1_range2$$.nodeType == goog.dom.NodeType.ELEMENT, $doc$$ = $node2$$.nodeType == goog.dom.NodeType.ELEMENT;
    if ($isElement1_range1$$ && $doc$$) {
      return $node1_range2$$.sourceIndex - $node2$$.sourceIndex;
    }
    var $parent1$$ = $node1_range2$$.parentNode, $parent2$$ = $node2$$.parentNode;
    return $parent1$$ == $parent2$$ ? goog.dom.compareSiblingOrder_($node1_range2$$, $node2$$) : !$isElement1_range1$$ && goog.dom.contains($parent1$$, $node2$$) ? -1 * goog.dom.compareParentsDescendantNodeIe_($node1_range2$$, $node2$$) : !$doc$$ && goog.dom.contains($parent2$$, $node1_range2$$) ? goog.dom.compareParentsDescendantNodeIe_($node2$$, $node1_range2$$) : ($isElement1_range1$$ ? $node1_range2$$.sourceIndex : $parent1$$.sourceIndex) - ($doc$$ ? $node2$$.sourceIndex : $parent2$$.sourceIndex);
  }
  $doc$$ = goog.dom.getOwnerDocument($node1_range2$$);
  $isElement1_range1$$ = $doc$$.createRange();
  $isElement1_range1$$.selectNode($node1_range2$$);
  $isElement1_range1$$.collapse(!0);
  $node1_range2$$ = $doc$$.createRange();
  $node1_range2$$.selectNode($node2$$);
  $node1_range2$$.collapse(!0);
  return $isElement1_range1$$.compareBoundaryPoints(goog.global.Range.START_TO_END, $node1_range2$$);
};
goog.dom.compareParentsDescendantNodeIe_ = function $goog$dom$compareParentsDescendantNodeIe_$($textNode$$, $node$$) {
  var $parent$$ = $textNode$$.parentNode;
  if ($parent$$ == $node$$) {
    return -1;
  }
  for (; $node$$.parentNode != $parent$$;) {
    $node$$ = $node$$.parentNode;
  }
  return goog.dom.compareSiblingOrder_($node$$, $textNode$$);
};
goog.dom.compareSiblingOrder_ = function $goog$dom$compareSiblingOrder_$($node1$$, $node2$jscomp$1_s$$) {
  for (; $node2$jscomp$1_s$$ = $node2$jscomp$1_s$$.previousSibling;) {
    if ($node2$jscomp$1_s$$ == $node1$$) {
      return -1;
    }
  }
  return 1;
};
goog.dom.findCommonAncestor = function $goog$dom$findCommonAncestor$($var_args$$) {
  var $i$$, $count$$ = arguments.length;
  if (!$count$$) {
    return null;
  }
  if (1 == $count$$) {
    return arguments[0];
  }
  var $paths$$ = [], $minLength$$ = Infinity;
  for ($i$$ = 0; $i$$ < $count$$; $i$$++) {
    for (var $ancestors$jscomp$1_output$$ = [], $first$jscomp$3_node$$ = arguments[$i$$]; $first$jscomp$3_node$$;) {
      $ancestors$jscomp$1_output$$.unshift($first$jscomp$3_node$$), $first$jscomp$3_node$$ = $first$jscomp$3_node$$.parentNode;
    }
    $paths$$.push($ancestors$jscomp$1_output$$);
    $minLength$$ = Math.min($minLength$$, $ancestors$jscomp$1_output$$.length);
  }
  $ancestors$jscomp$1_output$$ = null;
  for ($i$$ = 0; $i$$ < $minLength$$; $i$$++) {
    $first$jscomp$3_node$$ = $paths$$[0][$i$$];
    for (var $j$$ = 1; $j$$ < $count$$; $j$$++) {
      if ($first$jscomp$3_node$$ != $paths$$[$j$$][$i$$]) {
        return $ancestors$jscomp$1_output$$;
      }
    }
    $ancestors$jscomp$1_output$$ = $first$jscomp$3_node$$;
  }
  return $ancestors$jscomp$1_output$$;
};
goog.dom.getOwnerDocument = function $goog$dom$getOwnerDocument$($node$$) {
  goog.asserts.assert($node$$, "Node cannot be null or undefined.");
  return $node$$.nodeType == goog.dom.NodeType.DOCUMENT ? $node$$ : $node$$.ownerDocument || $node$$.document;
};
goog.dom.getFrameContentDocument = function $goog$dom$getFrameContentDocument$($frame$$) {
  return $frame$$.contentDocument || $frame$$.contentWindow.document;
};
goog.dom.getFrameContentWindow = function $goog$dom$getFrameContentWindow$($frame$$) {
  try {
    return $frame$$.contentWindow || ($frame$$.contentDocument ? goog.dom.getWindow($frame$$.contentDocument) : null);
  } catch ($e$$) {
  }
  return null;
};
goog.dom.setTextContent = function $goog$dom$setTextContent$($node$$, $text$$) {
  goog.asserts.assert(null != $node$$, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in $node$$) {
    $node$$.textContent = $text$$;
  } else {
    if ($node$$.nodeType == goog.dom.NodeType.TEXT) {
      $node$$.data = String($text$$);
    } else {
      if ($node$$.firstChild && $node$$.firstChild.nodeType == goog.dom.NodeType.TEXT) {
        for (; $node$$.lastChild != $node$$.firstChild;) {
          $node$$.removeChild($node$$.lastChild);
        }
        $node$$.firstChild.data = String($text$$);
      } else {
        goog.dom.removeChildren($node$$);
        var $doc$$ = goog.dom.getOwnerDocument($node$$);
        $node$$.appendChild($doc$$.createTextNode(String($text$$)));
      }
    }
  }
};
goog.dom.getOuterHtml = function $goog$dom$getOuterHtml$($element$$) {
  goog.asserts.assert(null !== $element$$, "goog.dom.getOuterHtml expects a non-null value for element");
  if ("outerHTML" in $element$$) {
    return $element$$.outerHTML;
  }
  var $div$jscomp$1_doc$$ = goog.dom.getOwnerDocument($element$$);
  $div$jscomp$1_doc$$ = goog.dom.createElement_($div$jscomp$1_doc$$, "DIV");
  $div$jscomp$1_doc$$.appendChild($element$$.cloneNode(!0));
  return $div$jscomp$1_doc$$.innerHTML;
};
goog.dom.findNode = function $goog$dom$findNode$($root$$, $p$$) {
  var $rv$$ = [];
  return goog.dom.findNodes_($root$$, $p$$, $rv$$, !0) ? $rv$$[0] : void 0;
};
goog.dom.findNodes = function $goog$dom$findNodes$($root$$, $p$$) {
  var $rv$$ = [];
  goog.dom.findNodes_($root$$, $p$$, $rv$$, !1);
  return $rv$$;
};
goog.dom.findNodes_ = function $goog$dom$findNodes_$($child$jscomp$5_root$$, $p$$, $rv$$, $findOne$$) {
  if (null != $child$jscomp$5_root$$) {
    for ($child$jscomp$5_root$$ = $child$jscomp$5_root$$.firstChild; $child$jscomp$5_root$$;) {
      if ($p$$($child$jscomp$5_root$$) && ($rv$$.push($child$jscomp$5_root$$), $findOne$$) || goog.dom.findNodes_($child$jscomp$5_root$$, $p$$, $rv$$, $findOne$$)) {
        return !0;
      }
      $child$jscomp$5_root$$ = $child$jscomp$5_root$$.nextSibling;
    }
  }
  return !1;
};
goog.dom.TAGS_TO_IGNORE_ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
goog.dom.PREDEFINED_TAG_VALUES_ = {IMG:" ", BR:"\n"};
goog.dom.isFocusableTabIndex = function $goog$dom$isFocusableTabIndex$($element$$) {
  return goog.dom.hasSpecifiedTabIndex_($element$$) && goog.dom.isTabIndexFocusable_($element$$);
};
goog.dom.setFocusableTabIndex = function $goog$dom$setFocusableTabIndex$($element$$, $enable$$) {
  $enable$$ ? $element$$.tabIndex = 0 : ($element$$.tabIndex = -1, $element$$.removeAttribute("tabIndex"));
};
goog.dom.isFocusable = function $goog$dom$isFocusable$($element$$) {
  var $focusable$$;
  return ($focusable$$ = goog.dom.nativelySupportsFocus_($element$$) ? !$element$$.disabled && (!goog.dom.hasSpecifiedTabIndex_($element$$) || goog.dom.isTabIndexFocusable_($element$$)) : goog.dom.isFocusableTabIndex($element$$)) && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_($element$$) : $focusable$$;
};
goog.dom.hasSpecifiedTabIndex_ = function $goog$dom$hasSpecifiedTabIndex_$($attrNode_element$$) {
  return goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9") ? ($attrNode_element$$ = $attrNode_element$$.getAttributeNode("tabindex"), goog.isDefAndNotNull($attrNode_element$$) && $attrNode_element$$.specified) : $attrNode_element$$.hasAttribute("tabindex");
};
goog.dom.isTabIndexFocusable_ = function $goog$dom$isTabIndexFocusable_$($element$jscomp$25_index$$) {
  $element$jscomp$25_index$$ = $element$jscomp$25_index$$.tabIndex;
  return goog.isNumber($element$jscomp$25_index$$) && 0 <= $element$jscomp$25_index$$ && 32768 > $element$jscomp$25_index$$;
};
goog.dom.nativelySupportsFocus_ = function $goog$dom$nativelySupportsFocus_$($element$$) {
  return "A" == $element$$.tagName || "INPUT" == $element$$.tagName || "TEXTAREA" == $element$$.tagName || "SELECT" == $element$$.tagName || "BUTTON" == $element$$.tagName;
};
goog.dom.hasNonZeroBoundingRect_ = function $goog$dom$hasNonZeroBoundingRect_$($element$$) {
  $element$$ = !goog.isFunction($element$$.getBoundingClientRect) || goog.userAgent.IE && null == $element$$.parentElement ? {height:$element$$.offsetHeight, width:$element$$.offsetWidth} : $element$$.getBoundingClientRect();
  return goog.isDefAndNotNull($element$$) && 0 < $element$$.height && 0 < $element$$.width;
};
goog.dom.getTextContent = function $goog$dom$getTextContent$($node$$) {
  if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && null !== $node$$ && "innerText" in $node$$) {
    $node$$ = goog.string.canonicalizeNewlines($node$$.innerText);
  } else {
    var $buf$$ = [];
    goog.dom.getTextContent_($node$$, $buf$$, !0);
    $node$$ = $buf$$.join("");
  }
  $node$$ = $node$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$ = $node$$.replace(/\u200B/g, "");
  goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || ($node$$ = $node$$.replace(/ +/g, " "));
  " " != $node$$ && ($node$$ = $node$$.replace(/^\s*/, ""));
  return $node$$;
};
goog.dom.getRawTextContent = function $goog$dom$getRawTextContent$($node$$) {
  var $buf$$ = [];
  goog.dom.getTextContent_($node$$, $buf$$, !1);
  return $buf$$.join("");
};
goog.dom.getTextContent_ = function $goog$dom$getTextContent_$($child$jscomp$6_node$$, $buf$$, $normalizeWhitespace$$) {
  if (!($child$jscomp$6_node$$.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
    if ($child$jscomp$6_node$$.nodeType == goog.dom.NodeType.TEXT) {
      $normalizeWhitespace$$ ? $buf$$.push(String($child$jscomp$6_node$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$.push($child$jscomp$6_node$$.nodeValue);
    } else {
      if ($child$jscomp$6_node$$.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        $buf$$.push(goog.dom.PREDEFINED_TAG_VALUES_[$child$jscomp$6_node$$.nodeName]);
      } else {
        for ($child$jscomp$6_node$$ = $child$jscomp$6_node$$.firstChild; $child$jscomp$6_node$$;) {
          goog.dom.getTextContent_($child$jscomp$6_node$$, $buf$$, $normalizeWhitespace$$), $child$jscomp$6_node$$ = $child$jscomp$6_node$$.nextSibling;
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function $goog$dom$getNodeTextLength$($node$$) {
  return goog.dom.getTextContent($node$$).length;
};
goog.dom.getNodeTextOffset = function $goog$dom$getNodeTextOffset$($node$$, $opt_offsetParent_root$$) {
  $opt_offsetParent_root$$ = $opt_offsetParent_root$$ || goog.dom.getOwnerDocument($node$$).body;
  for (var $buf$$ = []; $node$$ && $node$$ != $opt_offsetParent_root$$;) {
    for (var $cur$$ = $node$$; $cur$$ = $cur$$.previousSibling;) {
      $buf$$.unshift(goog.dom.getTextContent($cur$$));
    }
    $node$$ = $node$$.parentNode;
  }
  return goog.string.trimLeft($buf$$.join("")).replace(/ +/g, " ").length;
};
goog.dom.getNodeAtOffset = function $goog$dom$getNodeAtOffset$($parent$jscomp$19_stack$$, $offset$$, $opt_result$$) {
  $parent$jscomp$19_stack$$ = [$parent$jscomp$19_stack$$];
  for (var $pos$$ = 0, $cur$$ = null; 0 < $parent$jscomp$19_stack$$.length && $pos$$ < $offset$$;) {
    if ($cur$$ = $parent$jscomp$19_stack$$.pop(), !($cur$$.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
      if ($cur$$.nodeType == goog.dom.NodeType.TEXT) {
        var $i$jscomp$99_text$$ = $cur$$.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        $pos$$ += $i$jscomp$99_text$$.length;
      } else {
        if ($cur$$.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          $pos$$ += goog.dom.PREDEFINED_TAG_VALUES_[$cur$$.nodeName].length;
        } else {
          for ($i$jscomp$99_text$$ = $cur$$.childNodes.length - 1; 0 <= $i$jscomp$99_text$$; $i$jscomp$99_text$$--) {
            $parent$jscomp$19_stack$$.push($cur$$.childNodes[$i$jscomp$99_text$$]);
          }
        }
      }
    }
  }
  goog.isObject($opt_result$$) && ($opt_result$$.remainder = $cur$$ ? $cur$$.nodeValue.length + $offset$$ - $pos$$ - 1 : 0, $opt_result$$.node = $cur$$);
  return $cur$$;
};
goog.dom.isNodeList = function $goog$dom$isNodeList$($val$$) {
  if ($val$$ && "number" == typeof $val$$.length) {
    if (goog.isObject($val$$)) {
      return "function" == typeof $val$$.item || "string" == typeof $val$$.item;
    }
    if (goog.isFunction($val$$)) {
      return "function" == typeof $val$$.item;
    }
  }
  return !1;
};
goog.dom.getAncestorByTagNameAndClass = function $goog$dom$getAncestorByTagNameAndClass$($element$$, $opt_tag$$, $opt_class$$, $opt_maxSearchSteps$$) {
  if (!$opt_tag$$ && !$opt_class$$) {
    return null;
  }
  var $tagName$$ = $opt_tag$$ ? String($opt_tag$$).toUpperCase() : null;
  return goog.dom.getAncestor($element$$, function($node$$) {
    return (!$tagName$$ || $node$$.nodeName == $tagName$$) && (!$opt_class$$ || goog.isString($node$$.className) && goog.array.contains($node$$.className.split(/\s+/), $opt_class$$));
  }, !0, $opt_maxSearchSteps$$);
};
goog.dom.getAncestorByClass = function $goog$dom$getAncestorByClass$($element$$, $className$$, $opt_maxSearchSteps$$) {
  return goog.dom.getAncestorByTagNameAndClass($element$$, null, $className$$, $opt_maxSearchSteps$$);
};
goog.dom.getAncestor = function $goog$dom$getAncestor$($element$$, $matcher$$, $opt_includeNode_steps$$, $opt_maxSearchSteps$$) {
  $element$$ && !$opt_includeNode_steps$$ && ($element$$ = $element$$.parentNode);
  for ($opt_includeNode_steps$$ = 0; $element$$ && (null == $opt_maxSearchSteps$$ || $opt_includeNode_steps$$ <= $opt_maxSearchSteps$$);) {
    goog.asserts.assert("parentNode" != $element$$.name);
    if ($matcher$$($element$$)) {
      return $element$$;
    }
    $element$$ = $element$$.parentNode;
    $opt_includeNode_steps$$++;
  }
  return null;
};
goog.dom.getActiveElement = function $goog$dom$getActiveElement$($doc$$) {
  try {
    return $doc$$ && $doc$$.activeElement;
  } catch ($e$$) {
  }
  return null;
};
goog.dom.getPixelRatio = function $goog$dom$getPixelRatio$() {
  var $win$$ = goog.dom.getWindow();
  return goog.isDef($win$$.devicePixelRatio) ? $win$$.devicePixelRatio : $win$$.matchMedia ? goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) || .75 : 1;
};
goog.dom.matchesPixelRatio_ = function $goog$dom$matchesPixelRatio_$($pixelRatio$$) {
  return goog.dom.getWindow().matchMedia("(min-resolution: " + $pixelRatio$$ + "dppx),(min--moz-device-pixel-ratio: " + $pixelRatio$$ + "),(min-resolution: " + 96 * $pixelRatio$$ + "dpi)").matches ? $pixelRatio$$ : 0;
};
goog.dom.getCanvasContext2D = function $goog$dom$getCanvasContext2D$($canvas$$) {
  return $canvas$$.getContext("2d");
};
goog.dom.DomHelper = function $goog$dom$DomHelper$($opt_document$$) {
  this.document_ = $opt_document$$ || goog.global.document || document;
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function $goog$dom$DomHelper$$setDocument$($document$$) {
  this.document_ = $document$$;
};
goog.dom.DomHelper.prototype.getDocument = function $goog$dom$DomHelper$$getDocument$() {
  return this.document_;
};
goog.dom.DomHelper.prototype.getElement = function $goog$dom$DomHelper$$getElement$($element$$) {
  return goog.dom.getElementHelper_(this.document_, $element$$);
};
goog.dom.DomHelper.prototype.getRequiredElement = function $goog$dom$DomHelper$$getRequiredElement$($id$$) {
  return goog.dom.getRequiredElementHelper_(this.document_, $id$$);
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagName = function $goog$dom$DomHelper$$getElementsByTagName$($tagName$$, $opt_parent$$) {
  return ($opt_parent$$ || this.document_).getElementsByTagName(String($tagName$$));
};
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function $goog$dom$DomHelper$$getElementsByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.DomHelper.prototype.getElementByTagNameAndClass = function $goog$dom$DomHelper$$getElementByTagNameAndClass$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return goog.dom.getElementByTagNameAndClass_(this.document_, $opt_tag$$, $opt_class$$, $opt_el$$);
};
goog.dom.DomHelper.prototype.getElementsByClass = function $goog$dom$DomHelper$$getElementsByClass$($className$$, $opt_el$$) {
  return goog.dom.getElementsByClass($className$$, $opt_el$$ || this.document_);
};
goog.dom.DomHelper.prototype.getElementByClass = function $goog$dom$DomHelper$$getElementByClass$($className$$, $opt_el$$) {
  return goog.dom.getElementByClass($className$$, $opt_el$$ || this.document_);
};
goog.dom.DomHelper.prototype.getRequiredElementByClass = function $goog$dom$DomHelper$$getRequiredElementByClass$($className$$, $opt_root$$) {
  return goog.dom.getRequiredElementByClass($className$$, $opt_root$$ || this.document_);
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function $goog$dom$DomHelper$$getViewportSize$($opt_window$$) {
  return goog.dom.getViewportSize($opt_window$$ || this.getWindow());
};
goog.dom.DomHelper.prototype.getDocumentHeight = function $goog$dom$DomHelper$$getDocumentHeight$() {
  return goog.dom.getDocumentHeight_(this.getWindow());
};
goog.dom.DomHelper.prototype.createDom = function $goog$dom$DomHelper$$createDom$($tagName$$, $opt_attributes$$, $var_args$$) {
  return goog.dom.createDom_(this.document_, arguments);
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function $goog$dom$DomHelper$$createElement$($name$$) {
  return goog.dom.createElement_(this.document_, $name$$);
};
goog.dom.DomHelper.prototype.createTextNode = function $goog$dom$DomHelper$$createTextNode$($content$$) {
  return this.document_.createTextNode(String($content$$));
};
goog.dom.DomHelper.prototype.createTable = function $goog$dom$DomHelper$$createTable$($rows$$, $columns$$, $opt_fillWithNbsp$$) {
  return goog.dom.createTable_(this.document_, $rows$$, $columns$$, !!$opt_fillWithNbsp$$);
};
goog.dom.DomHelper.prototype.safeHtmlToNode = function $goog$dom$DomHelper$$safeHtmlToNode$($html$$) {
  return goog.dom.safeHtmlToNode_(this.document_, $html$$);
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function $goog$dom$DomHelper$$isCss1CompatMode$() {
  return goog.dom.isCss1CompatMode_(this.document_);
};
goog.dom.DomHelper.prototype.getWindow = function $goog$dom$DomHelper$$getWindow$() {
  return goog.dom.getWindow_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function $goog$dom$DomHelper$$getDocumentScrollElement$() {
  return goog.dom.getDocumentScrollElement_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScroll = function $goog$dom$DomHelper$$getDocumentScroll$() {
  return goog.dom.getDocumentScroll_(this.document_);
};
goog.dom.DomHelper.prototype.getActiveElement = function $goog$dom$DomHelper$$getActiveElement$($opt_doc$$) {
  return goog.dom.getActiveElement($opt_doc$$ || this.document_);
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.dom.DomHelper.prototype.getCanvasContext2D = goog.dom.getCanvasContext2D;
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function $goog$userAgent$product$isIphoneOrIpod_$() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
};
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_ = function $goog$userAgent$product$isSafariDesktop_$() {
  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
};
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
goog.debug.LOGGING_ENABLED = goog.DEBUG;
goog.debug.FORCE_SLOPPY_STACKS = !1;
goog.debug.catchErrors = function $goog$debug$catchErrors$($logFunc$$, $opt_cancel$$, $opt_target$jscomp$2_target$$) {
  $opt_target$jscomp$2_target$$ = $opt_target$jscomp$2_target$$ || goog.global;
  var $oldErrorHandler$$ = $opt_target$jscomp$2_target$$.onerror, $retVal$$ = !!$opt_cancel$$;
  goog.userAgent.WEBKIT && !goog.userAgent.isVersionOrHigher("535.3") && ($retVal$$ = !$retVal$$);
  $opt_target$jscomp$2_target$$.onerror = function $$opt_target$jscomp$2_target$$$onerror$($message$$, $url$$, $line$$, $opt_col$$, $opt_error$$) {
    $oldErrorHandler$$ && $oldErrorHandler$$($message$$, $url$$, $line$$, $opt_col$$, $opt_error$$);
    $logFunc$$({message:$message$$, fileName:$url$$, line:$line$$, col:$opt_col$$, error:$opt_error$$});
    return $retVal$$;
  };
};
goog.debug.expose = function $goog$debug$expose$($obj$$, $opt_showFn$$) {
  if ("undefined" == typeof $obj$$) {
    return "undefined";
  }
  if (null == $obj$$) {
    return "NULL";
  }
  var $str$$ = [], $x$$;
  for ($x$$ in $obj$$) {
    if ($opt_showFn$$ || !goog.isFunction($obj$$[$x$$])) {
      var $s$$ = $x$$ + " = ";
      try {
        $s$$ += $obj$$[$x$$];
      } catch ($e$$) {
        $s$$ += "*** " + $e$$ + " ***";
      }
      $str$$.push($s$$);
    }
  }
  return $str$$.join("\n");
};
goog.debug.deepExpose = function $goog$debug$deepExpose$($i$jscomp$100_obj$$, $opt_showFn$$) {
  var $str$$ = [], $uidsToCleanup$$ = [], $ancestorUids$$ = {}, $helper$$ = function $$helper$$$($obj$$, $space$$) {
    var $nestspace$$ = $space$$ + "  ";
    try {
      if (goog.isDef($obj$$)) {
        if (goog.isNull($obj$$)) {
          $str$$.push("NULL");
        } else {
          if (goog.isString($obj$$)) {
            $str$$.push('"' + $obj$$.replace(/\n/g, "\n" + $space$$) + '"');
          } else {
            if (goog.isFunction($obj$$)) {
              $str$$.push(String($obj$$).replace(/\n/g, "\n" + $space$$));
            } else {
              if (goog.isObject($obj$$)) {
                goog.hasUid($obj$$) || $uidsToCleanup$$.push($obj$$);
                var $uid$$ = goog.getUid($obj$$);
                if ($ancestorUids$$[$uid$$]) {
                  $str$$.push("*** reference loop detected (id=" + $uid$$ + ") ***");
                } else {
                  $ancestorUids$$[$uid$$] = !0;
                  $str$$.push("{");
                  for (var $x$$ in $obj$$) {
                    if ($opt_showFn$$ || !goog.isFunction($obj$$[$x$$])) {
                      $str$$.push("\n"), $str$$.push($nestspace$$), $str$$.push($x$$ + " = "), $helper$$($obj$$[$x$$], $nestspace$$);
                    }
                  }
                  $str$$.push("\n" + $space$$ + "}");
                  delete $ancestorUids$$[$uid$$];
                }
              } else {
                $str$$.push($obj$$);
              }
            }
          }
        }
      } else {
        $str$$.push("undefined");
      }
    } catch ($e$$) {
      $str$$.push("*** " + $e$$ + " ***");
    }
  };
  $helper$$($i$jscomp$100_obj$$, "");
  for ($i$jscomp$100_obj$$ = 0; $i$jscomp$100_obj$$ < $uidsToCleanup$$.length; $i$jscomp$100_obj$$++) {
    goog.removeUid($uidsToCleanup$$[$i$jscomp$100_obj$$]);
  }
  return $str$$.join("");
};
goog.debug.exposeArray = function $goog$debug$exposeArray$($arr$$) {
  for (var $str$$ = [], $i$$ = 0; $i$$ < $arr$$.length; $i$$++) {
    goog.isArray($arr$$[$i$$]) ? $str$$.push(goog.debug.exposeArray($arr$$[$i$$])) : $str$$.push($arr$$[$i$$]);
  }
  return "[ " + $str$$.join(", ") + " ]";
};
goog.debug.normalizeErrorObject = function $goog$debug$normalizeErrorObject$($err$$) {
  var $href$$ = goog.getObjectByName("window.location.href");
  if (goog.isString($err$$)) {
    return {message:$err$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$, stack:"Not available"};
  }
  var $threwError$$ = !1;
  try {
    var $lineNumber$$ = $err$$.lineNumber || $err$$.line || "Not available";
  } catch ($e$$) {
    $lineNumber$$ = "Not available", $threwError$$ = !0;
  }
  try {
    var $fileName$$ = $err$$.fileName || $err$$.filename || $err$$.sourceURL || goog.global.$googDebugFname || $href$$;
  } catch ($e$0$$) {
    $fileName$$ = "Not available", $threwError$$ = !0;
  }
  return !$threwError$$ && $err$$.lineNumber && $err$$.fileName && $err$$.stack && $err$$.message && $err$$.name ? $err$$ : {message:$err$$.message || "Not available", name:$err$$.name || "UnknownError", lineNumber:$lineNumber$$, fileName:$fileName$$, stack:$err$$.stack || "Not available"};
};
goog.debug.enhanceError = function $goog$debug$enhanceError$($err$jscomp$14_error$$, $opt_message$$) {
  $err$jscomp$14_error$$ instanceof Error || ($err$jscomp$14_error$$ = Error($err$jscomp$14_error$$), Error.captureStackTrace && Error.captureStackTrace($err$jscomp$14_error$$, goog.debug.enhanceError));
  $err$jscomp$14_error$$.stack || ($err$jscomp$14_error$$.stack = goog.debug.getStacktrace(goog.debug.enhanceError));
  if ($opt_message$$) {
    for (var $x$$ = 0; $err$jscomp$14_error$$["message" + $x$$];) {
      ++$x$$;
    }
    $err$jscomp$14_error$$["message" + $x$$] = String($opt_message$$);
  }
  return $err$jscomp$14_error$$;
};
goog.debug.getStacktraceSimple = function $goog$debug$getStacktraceSimple$($opt_depth$$) {
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var $sb$jscomp$2_stack$$ = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
    if ($sb$jscomp$2_stack$$) {
      return $sb$jscomp$2_stack$$;
    }
  }
  $sb$jscomp$2_stack$$ = [];
  for (var $fn$$ = arguments.callee.caller, $depth$$ = 0; $fn$$ && (!$opt_depth$$ || $depth$$ < $opt_depth$$);) {
    $sb$jscomp$2_stack$$.push(goog.debug.getFunctionName($fn$$));
    $sb$jscomp$2_stack$$.push("()\n");
    try {
      $fn$$ = $fn$$.caller;
    } catch ($e$$) {
      $sb$jscomp$2_stack$$.push("[exception trying to get caller]\n");
      break;
    }
    $depth$$++;
    if ($depth$$ >= goog.debug.MAX_STACK_DEPTH) {
      $sb$jscomp$2_stack$$.push("[...long stack...]");
      break;
    }
  }
  $opt_depth$$ && $depth$$ >= $opt_depth$$ ? $sb$jscomp$2_stack$$.push("[...reached max depth limit...]") : $sb$jscomp$2_stack$$.push("[end]");
  return $sb$jscomp$2_stack$$.join("");
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getNativeStackTrace_ = function $goog$debug$getNativeStackTrace_$($fn$jscomp$12_stack$$) {
  var $tempErr$$ = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace($tempErr$$, $fn$jscomp$12_stack$$), String($tempErr$$.stack);
  }
  try {
    throw $tempErr$$;
  } catch ($e$$) {
    $tempErr$$ = $e$$;
  }
  return ($fn$jscomp$12_stack$$ = $tempErr$$.stack) ? String($fn$jscomp$12_stack$$) : null;
};
goog.debug.getStacktrace = function $goog$debug$getStacktrace$($fn$$) {
  var $stack$$;
  goog.debug.FORCE_SLOPPY_STACKS || ($stack$$ = goog.debug.getNativeStackTrace_($fn$$ || goog.debug.getStacktrace));
  $stack$$ || ($stack$$ = goog.debug.getStacktraceHelper_($fn$$ || arguments.callee.caller, []));
  return $stack$$;
};
goog.debug.getStacktraceHelper_ = function $goog$debug$getStacktraceHelper_$($fn$$, $visited$$) {
  var $sb$$ = [];
  if (goog.array.contains($visited$$, $fn$$)) {
    $sb$$.push("[...circular reference...]");
  } else {
    if ($fn$$ && $visited$$.length < goog.debug.MAX_STACK_DEPTH) {
      $sb$$.push(goog.debug.getFunctionName($fn$$) + "(");
      for (var $args$$ = $fn$$.arguments, $i$$ = 0; $args$$ && $i$$ < $args$$.length; $i$$++) {
        0 < $i$$ && $sb$$.push(", ");
        var $arg$$ = $args$$[$i$$];
        switch(typeof $arg$$) {
          case "object":
            $arg$$ = $arg$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$ = String($arg$$);
            break;
          case "boolean":
            $arg$$ = $arg$$ ? "true" : "false";
            break;
          case "function":
            $arg$$ = ($arg$$ = goog.debug.getFunctionName($arg$$)) ? $arg$$ : "[fn]";
            break;
          default:
            $arg$$ = typeof $arg$$;
        }
        40 < $arg$$.length && ($arg$$ = $arg$$.substr(0, 40) + "...");
        $sb$$.push($arg$$);
      }
      $visited$$.push($fn$$);
      $sb$$.push(")\n");
      try {
        $sb$$.push(goog.debug.getStacktraceHelper_($fn$$.caller, $visited$$));
      } catch ($e$$) {
        $sb$$.push("[exception trying to get caller]\n");
      }
    } else {
      $fn$$ ? $sb$$.push("[...long stack...]") : $sb$$.push("[end]");
    }
  }
  return $sb$$.join("");
};
goog.debug.setFunctionResolver = function $goog$debug$setFunctionResolver$($resolver$$) {
  goog.debug.fnNameResolver_ = $resolver$$;
};
goog.debug.getFunctionName = function $goog$debug$getFunctionName$($fn$$) {
  if (goog.debug.fnNameCache_[$fn$$]) {
    return goog.debug.fnNameCache_[$fn$$];
  }
  if (goog.debug.fnNameResolver_) {
    var $matches_name$$ = goog.debug.fnNameResolver_($fn$$);
    if ($matches_name$$) {
      return goog.debug.fnNameCache_[$fn$$] = $matches_name$$;
    }
  }
  $fn$$ = String($fn$$);
  goog.debug.fnNameCache_[$fn$$] || ($matches_name$$ = /function ([^\(]+)/.exec($fn$$), goog.debug.fnNameCache_[$fn$$] = $matches_name$$ ? $matches_name$$[1] : "[Anonymous]");
  return goog.debug.fnNameCache_[$fn$$];
};
goog.debug.makeWhitespaceVisible = function $goog$debug$makeWhitespaceVisible$($string$$) {
  return $string$$.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
goog.debug.runtimeType = function $goog$debug$runtimeType$($value$$) {
  return $value$$ instanceof Function ? $value$$.displayName || $value$$.name || "unknown type name" : $value$$ instanceof Object ? $value$$.constructor.displayName || $value$$.constructor.name || Object.prototype.toString.call($value$$) : null === $value$$ ? "null" : typeof $value$$;
};
goog.debug.fnNameCache_ = {};
goog.debug.LogRecord = function $goog$debug$LogRecord$($level$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$);
};
goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
goog.debug.LogRecord.prototype.exception_ = null;
goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0;
goog.debug.LogRecord.nextSequenceNumber_ = 0;
goog.debug.LogRecord.prototype.reset = function $goog$debug$LogRecord$$reset$($level$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof $opt_sequenceNumber$$ ? $opt_sequenceNumber$$ : goog.debug.LogRecord.nextSequenceNumber_++);
  this.time_ = $opt_time$$ || goog.now();
  this.level_ = $level$$;
  this.msg_ = $msg$$;
  this.loggerName_ = $loggerName$$;
  delete this.exception_;
};
goog.debug.LogRecord.prototype.getLoggerName = function $goog$debug$LogRecord$$getLoggerName$() {
  return this.loggerName_;
};
goog.debug.LogRecord.prototype.getException = function $goog$debug$LogRecord$$getException$() {
  return this.exception_;
};
goog.debug.LogRecord.prototype.setException = function $goog$debug$LogRecord$$setException$($exception$$) {
  this.exception_ = $exception$$;
};
goog.debug.LogRecord.prototype.setLoggerName = function $goog$debug$LogRecord$$setLoggerName$($loggerName$$) {
  this.loggerName_ = $loggerName$$;
};
goog.debug.LogRecord.prototype.getLevel = function $goog$debug$LogRecord$$getLevel$() {
  return this.level_;
};
goog.debug.LogRecord.prototype.setLevel = function $goog$debug$LogRecord$$setLevel$($level$$) {
  this.level_ = $level$$;
};
goog.debug.LogRecord.prototype.getMessage = function $goog$debug$LogRecord$$getMessage$() {
  return this.msg_;
};
goog.debug.LogRecord.prototype.setMessage = function $goog$debug$LogRecord$$setMessage$($msg$$) {
  this.msg_ = $msg$$;
};
goog.debug.LogRecord.prototype.getMillis = function $goog$debug$LogRecord$$getMillis$() {
  return this.time_;
};
goog.debug.LogRecord.prototype.setMillis = function $goog$debug$LogRecord$$setMillis$($time$$) {
  this.time_ = $time$$;
};
goog.debug.LogRecord.prototype.getSequenceNumber = function $goog$debug$LogRecord$$getSequenceNumber$() {
  return this.sequenceNumber_;
};
goog.debug.LogBuffer = function $goog$debug$LogBuffer$() {
  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear();
};
goog.debug.LogBuffer.getInstance = function $goog$debug$LogBuffer$getInstance$() {
  goog.debug.LogBuffer.instance_ || (goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer);
  return goog.debug.LogBuffer.instance_;
};
goog.debug.LogBuffer.CAPACITY = 0;
goog.debug.LogBuffer.prototype.addRecord = function $goog$debug$LogBuffer$$addRecord$($level$$, $msg$$, $loggerName$$) {
  var $curIndex_ret$$ = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
  this.curIndex_ = $curIndex_ret$$;
  if (this.isFull_) {
    return $curIndex_ret$$ = this.buffer_[$curIndex_ret$$], $curIndex_ret$$.reset($level$$, $msg$$, $loggerName$$), $curIndex_ret$$;
  }
  this.isFull_ = $curIndex_ret$$ == goog.debug.LogBuffer.CAPACITY - 1;
  return this.buffer_[$curIndex_ret$$] = new goog.debug.LogRecord($level$$, $msg$$, $loggerName$$);
};
goog.debug.LogBuffer.isBufferingEnabled = function $goog$debug$LogBuffer$isBufferingEnabled$() {
  return 0 < goog.debug.LogBuffer.CAPACITY;
};
goog.debug.LogBuffer.prototype.clear = function $goog$debug$LogBuffer$$clear$() {
  this.buffer_ = Array(goog.debug.LogBuffer.CAPACITY);
  this.curIndex_ = -1;
  this.isFull_ = !1;
};
goog.debug.LogBuffer.prototype.forEachRecord = function $goog$debug$LogBuffer$$forEachRecord$($func$$) {
  var $buffer$$ = this.buffer_;
  if ($buffer$$[0]) {
    var $curIndex$$ = this.curIndex_, $i$$ = this.isFull_ ? $curIndex$$ : -1;
    do {
      $i$$ = ($i$$ + 1) % goog.debug.LogBuffer.CAPACITY, $func$$($buffer$$[$i$$]);
    } while ($i$$ != $curIndex$$);
  }
};
goog.debug.Logger = function $goog$debug$Logger$($name$$) {
  this.name_ = $name$$;
  this.handlers_ = this.children_ = this.level_ = this.parent_ = null;
};
goog.debug.Logger.ROOT_LOGGER_NAME = "";
goog.debug.Logger.ENABLE_HIERARCHY = !0;
goog.debug.Logger.ENABLE_HIERARCHY || (goog.debug.Logger.rootHandlers_ = []);
goog.debug.Logger.Level = function $goog$debug$Logger$Level$($name$$, $value$$) {
  this.name = $name$$;
  this.value = $value$$;
};
goog.debug.Logger.Level.prototype.toString = function $goog$debug$Logger$Level$$toString$() {
  return this.name;
};
goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1000);
goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
goog.debug.Logger.Level.predefinedLevelsCache_ = null;
goog.debug.Logger.Level.createPredefinedLevelsCache_ = function $goog$debug$Logger$Level$createPredefinedLevelsCache_$() {
  goog.debug.Logger.Level.predefinedLevelsCache_ = {};
  for (var $i$$ = 0, $level$$; $level$$ = goog.debug.Logger.Level.PREDEFINED_LEVELS[$i$$]; $i$$++) {
    goog.debug.Logger.Level.predefinedLevelsCache_[$level$$.value] = $level$$, goog.debug.Logger.Level.predefinedLevelsCache_[$level$$.name] = $level$$;
  }
};
goog.debug.Logger.Level.getPredefinedLevel = function $goog$debug$Logger$Level$getPredefinedLevel$($name$$) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  return goog.debug.Logger.Level.predefinedLevelsCache_[$name$$] || null;
};
goog.debug.Logger.Level.getPredefinedLevelByValue = function $goog$debug$Logger$Level$getPredefinedLevelByValue$($value$$) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  if ($value$$ in goog.debug.Logger.Level.predefinedLevelsCache_) {
    return goog.debug.Logger.Level.predefinedLevelsCache_[$value$$];
  }
  for (var $i$$ = 0; $i$$ < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++$i$$) {
    var $level$$ = goog.debug.Logger.Level.PREDEFINED_LEVELS[$i$$];
    if ($level$$.value <= $value$$) {
      return $level$$;
    }
  }
  return null;
};
goog.debug.Logger.getLogger = function $goog$debug$Logger$getLogger$($name$$) {
  return goog.debug.LogManager.getLogger($name$$);
};
goog.debug.Logger.logToProfilers = function $goog$debug$Logger$logToProfilers$($msg$$) {
  goog.global.console && (goog.global.console.timeStamp ? goog.global.console.timeStamp($msg$$) : goog.global.console.markTimeline && goog.global.console.markTimeline($msg$$));
  goog.global.msWriteProfilerMark && goog.global.msWriteProfilerMark($msg$$);
};
goog.debug.Logger.prototype.getName = function $goog$debug$Logger$$getName$() {
  return this.name_;
};
goog.debug.Logger.prototype.addHandler = function $goog$debug$Logger$$addHandler$($handler$$) {
  goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []), this.handlers_.push($handler$$)) : (goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootHandlers_.push($handler$$)));
};
goog.debug.Logger.prototype.removeHandler = function $goog$debug$Logger$$removeHandler$($handler$$) {
  if (goog.debug.LOGGING_ENABLED) {
    var $handlers$$ = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
    return !!$handlers$$ && goog.array.remove($handlers$$, $handler$$);
  }
  return !1;
};
goog.debug.Logger.prototype.getParent = function $goog$debug$Logger$$getParent$() {
  return this.parent_;
};
goog.debug.Logger.prototype.getChildren = function $goog$debug$Logger$$getChildren$() {
  this.children_ || (this.children_ = {});
  return this.children_;
};
goog.debug.Logger.prototype.setLevel = function $goog$debug$Logger$$setLevel$($level$$) {
  goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ = $level$$ : (goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootLevel_ = $level$$));
};
goog.debug.Logger.prototype.getLevel = function $goog$debug$Logger$$getLevel$() {
  return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF;
};
goog.debug.Logger.prototype.getEffectiveLevel = function $goog$debug$Logger$$getEffectiveLevel$() {
  if (!goog.debug.LOGGING_ENABLED) {
    return goog.debug.Logger.Level.OFF;
  }
  if (!goog.debug.Logger.ENABLE_HIERARCHY) {
    return goog.debug.Logger.rootLevel_;
  }
  if (this.level_) {
    return this.level_;
  }
  if (this.parent_) {
    return this.parent_.getEffectiveLevel();
  }
  goog.asserts.fail("Root logger has no level set.");
  return null;
};
goog.debug.Logger.prototype.isLoggable = function $goog$debug$Logger$$isLoggable$($level$$) {
  return goog.debug.LOGGING_ENABLED && $level$$.value >= this.getEffectiveLevel().value;
};
goog.debug.Logger.prototype.log = function $goog$debug$Logger$$log$($level$$, $msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.isLoggable($level$$) && (goog.isFunction($msg$$) && ($msg$$ = $msg$$()), this.doLogRecord_(this.getLogRecord($level$$, $msg$$, $opt_exception$$)));
};
goog.debug.Logger.prototype.getLogRecord = function $goog$debug$Logger$$getLogRecord$($level$$, $msg$$, $opt_exception$$) {
  $level$$ = goog.debug.LogBuffer.isBufferingEnabled() ? goog.debug.LogBuffer.getInstance().addRecord($level$$, $msg$$, this.name_) : new goog.debug.LogRecord($level$$, String($msg$$), this.name_);
  $opt_exception$$ && $level$$.setException($opt_exception$$);
  return $level$$;
};
goog.debug.Logger.prototype.shout = function $goog$debug$Logger$$shout$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SHOUT, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.severe = function $goog$debug$Logger$$severe$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SEVERE, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.warning = function $goog$debug$Logger$$warning$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.WARNING, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.info = function $goog$debug$Logger$$info$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.INFO, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.config = function $goog$debug$Logger$$config$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.CONFIG, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.fine = function $goog$debug$Logger$$fine$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINE, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.finer = function $goog$debug$Logger$$finer$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINER, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.finest = function $goog$debug$Logger$$finest$($msg$$, $opt_exception$$) {
  goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINEST, $msg$$, $opt_exception$$);
};
goog.debug.Logger.prototype.logRecord = function $goog$debug$Logger$$logRecord$($logRecord$$) {
  goog.debug.LOGGING_ENABLED && this.isLoggable($logRecord$$.getLevel()) && this.doLogRecord_($logRecord$$);
};
goog.debug.Logger.prototype.doLogRecord_ = function $goog$debug$Logger$$doLogRecord_$($logRecord$$) {
  goog.debug.Logger.logToProfilers("log:" + $logRecord$$.getMessage());
  if (goog.debug.Logger.ENABLE_HIERARCHY) {
    for (var $i$jscomp$106_target$$ = this; $i$jscomp$106_target$$;) {
      $i$jscomp$106_target$$.callPublish_($logRecord$$), $i$jscomp$106_target$$ = $i$jscomp$106_target$$.getParent();
    }
  } else {
    $i$jscomp$106_target$$ = 0;
    for (var $handler$$; $handler$$ = goog.debug.Logger.rootHandlers_[$i$jscomp$106_target$$++];) {
      $handler$$($logRecord$$);
    }
  }
};
goog.debug.Logger.prototype.callPublish_ = function $goog$debug$Logger$$callPublish_$($logRecord$$) {
  if (this.handlers_) {
    for (var $i$$ = 0, $handler$$; $handler$$ = this.handlers_[$i$$]; $i$$++) {
      $handler$$($logRecord$$);
    }
  }
};
goog.debug.Logger.prototype.setParent_ = function $goog$debug$Logger$$setParent_$($parent$$) {
  this.parent_ = $parent$$;
};
goog.debug.Logger.prototype.addChild_ = function $goog$debug$Logger$$addChild_$($name$$, $logger$$) {
  this.getChildren()[$name$$] = $logger$$;
};
goog.debug.LogManager = {};
goog.debug.LogManager.loggers_ = {};
goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function $goog$debug$LogManager$initialize$() {
  goog.debug.LogManager.rootLogger_ || (goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME), goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] = goog.debug.LogManager.rootLogger_, goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG));
};
goog.debug.LogManager.getLoggers = function $goog$debug$LogManager$getLoggers$() {
  return goog.debug.LogManager.loggers_;
};
goog.debug.LogManager.getRoot = function $goog$debug$LogManager$getRoot$() {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.rootLogger_;
};
goog.debug.LogManager.getLogger = function $goog$debug$LogManager$getLogger$($name$$) {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.loggers_[$name$$] || goog.debug.LogManager.createLogger_($name$$);
};
goog.debug.LogManager.createFunctionForCatchErrors = function $goog$debug$LogManager$createFunctionForCatchErrors$($opt_logger$$) {
  return function($info$$) {
    ($opt_logger$$ || goog.debug.LogManager.getRoot()).severe("Error: " + $info$$.message + " (" + $info$$.fileName + " @ Line: " + $info$$.line + ")");
  };
};
goog.debug.LogManager.createLogger_ = function $goog$debug$LogManager$createLogger_$($name$$) {
  var $logger$$ = new goog.debug.Logger($name$$);
  if (goog.debug.Logger.ENABLE_HIERARCHY) {
    var $lastDotIndex_leafName$$ = $name$$.lastIndexOf("."), $parentLogger_parentName$$ = $name$$.substr(0, $lastDotIndex_leafName$$);
    $lastDotIndex_leafName$$ = $name$$.substr($lastDotIndex_leafName$$ + 1);
    $parentLogger_parentName$$ = goog.debug.LogManager.getLogger($parentLogger_parentName$$);
    $parentLogger_parentName$$.addChild_($lastDotIndex_leafName$$, $logger$$);
    $logger$$.setParent_($parentLogger_parentName$$);
  }
  return goog.debug.LogManager.loggers_[$name$$] = $logger$$;
};
goog.log = {};
goog.log.ENABLED = goog.debug.LOGGING_ENABLED;
goog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;
goog.log.Logger = goog.debug.Logger;
goog.log.Level = goog.debug.Logger.Level;
goog.log.LogRecord = goog.debug.LogRecord;
goog.log.getLogger = function $goog$log$getLogger$($logger$jscomp$3_name$$, $opt_level$$) {
  return goog.log.ENABLED ? ($logger$jscomp$3_name$$ = goog.debug.LogManager.getLogger($logger$jscomp$3_name$$), $opt_level$$ && $logger$jscomp$3_name$$ && $logger$jscomp$3_name$$.setLevel($opt_level$$), $logger$jscomp$3_name$$) : null;
};
goog.log.addHandler = function $goog$log$addHandler$($logger$$, $handler$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.addHandler($handler$$);
};
goog.log.removeHandler = function $goog$log$removeHandler$($logger$$, $handler$$) {
  return goog.log.ENABLED && $logger$$ ? $logger$$.removeHandler($handler$$) : !1;
};
goog.log.log = function $goog$log$log$($logger$$, $level$$, $msg$$, $opt_exception$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.log($level$$, $msg$$, $opt_exception$$);
};
goog.log.error = function $goog$log$error$($logger$$, $msg$$, $opt_exception$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.severe($msg$$, $opt_exception$$);
};
goog.log.warning = function $goog$log$warning$($logger$$, $msg$$, $opt_exception$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.warning($msg$$, $opt_exception$$);
};
goog.log.info = function $goog$log$info$($logger$$, $msg$$, $opt_exception$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.info($msg$$, $opt_exception$$);
};
goog.log.fine = function $goog$log$fine$($logger$$, $msg$$, $opt_exception$$) {
  goog.log.ENABLED && $logger$$ && $logger$$.fine($msg$$, $opt_exception$$);
};
goog.structs = {};
goog.structs.getCount = function $goog$structs$getCount$($col$$) {
  return $col$$.getCount && "function" == typeof $col$$.getCount ? $col$$.getCount() : goog.isArrayLike($col$$) || goog.isString($col$$) ? $col$$.length : goog.object.getCount($col$$);
};
goog.structs.getValues = function $goog$structs$getValues$($col$$) {
  if ($col$$.getValues && "function" == typeof $col$$.getValues) {
    return $col$$.getValues();
  }
  if (goog.isString($col$$)) {
    return $col$$.split("");
  }
  if (goog.isArrayLike($col$$)) {
    for (var $rv$$ = [], $l$$ = $col$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$.push($col$$[$i$$]);
    }
    return $rv$$;
  }
  return goog.object.getValues($col$$);
};
goog.structs.getKeys = function $goog$structs$getKeys$($col$jscomp$2_l$$) {
  if ($col$jscomp$2_l$$.getKeys && "function" == typeof $col$jscomp$2_l$$.getKeys) {
    return $col$jscomp$2_l$$.getKeys();
  }
  if (!$col$jscomp$2_l$$.getValues || "function" != typeof $col$jscomp$2_l$$.getValues) {
    if (goog.isArrayLike($col$jscomp$2_l$$) || goog.isString($col$jscomp$2_l$$)) {
      var $rv$$ = [];
      $col$jscomp$2_l$$ = $col$jscomp$2_l$$.length;
      for (var $i$$ = 0; $i$$ < $col$jscomp$2_l$$; $i$$++) {
        $rv$$.push($i$$);
      }
      return $rv$$;
    }
    return goog.object.getKeys($col$jscomp$2_l$$);
  }
};
goog.structs.contains = function $goog$structs$contains$($col$$, $val$$) {
  return $col$$.contains && "function" == typeof $col$$.contains ? $col$$.contains($val$$) : $col$$.containsValue && "function" == typeof $col$$.containsValue ? $col$$.containsValue($val$$) : goog.isArrayLike($col$$) || goog.isString($col$$) ? goog.array.contains($col$$, $val$$) : goog.object.containsValue($col$$, $val$$);
};
goog.structs.isEmpty = function $goog$structs$isEmpty$($col$$) {
  return $col$$.isEmpty && "function" == typeof $col$$.isEmpty ? $col$$.isEmpty() : goog.isArrayLike($col$$) || goog.isString($col$$) ? goog.array.isEmpty($col$$) : goog.object.isEmpty($col$$);
};
goog.structs.clear = function $goog$structs$clear$($col$$) {
  $col$$.clear && "function" == typeof $col$$.clear ? $col$$.clear() : goog.isArrayLike($col$$) ? goog.array.clear($col$$) : goog.object.clear($col$$);
};
goog.structs.forEach = function $goog$structs$forEach$($col$$, $f$$, $opt_obj$$) {
  if ($col$$.forEach && "function" == typeof $col$$.forEach) {
    $col$$.forEach($f$$, $opt_obj$$);
  } else {
    if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
      goog.array.forEach($col$$, $f$$, $opt_obj$$);
    } else {
      for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
        $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$);
      }
    }
  }
};
goog.structs.filter = function $goog$structs$filter$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.filter) {
    return $col$$.filter($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.filter($col$$, $f$$, $opt_obj$$);
  }
  var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    var $rv$$ = {};
    for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$) && ($rv$$[$keys$$[$i$$]] = $values$$[$i$$]);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$) && $rv$$.push($values$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.structs.map = function $goog$structs$map$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.map) {
    return $col$$.map($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.map($col$$, $f$$, $opt_obj$$);
  }
  var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length;
  if ($keys$$) {
    var $rv$$ = {};
    for (var $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$[$keys$$[$i$$]] = $f$$.call($opt_obj$$, $values$$[$i$$], $keys$$[$i$$], $col$$);
    }
  } else {
    for ($rv$$ = [], $i$$ = 0; $i$$ < $l$$; $i$$++) {
      $rv$$[$i$$] = $f$$.call($opt_obj$$, $values$$[$i$$], void 0, $col$$);
    }
  }
  return $rv$$;
};
goog.structs.some = function $goog$structs$some$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.some) {
    return $col$$.some($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.some($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if ($f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !0;
    }
  }
  return !1;
};
goog.structs.every = function $goog$structs$every$($col$$, $f$$, $opt_obj$$) {
  if ("function" == typeof $col$$.every) {
    return $col$$.every($f$$, $opt_obj$$);
  }
  if (goog.isArrayLike($col$$) || goog.isString($col$$)) {
    return goog.array.every($col$$, $f$$, $opt_obj$$);
  }
  for (var $keys$$ = goog.structs.getKeys($col$$), $values$$ = goog.structs.getValues($col$$), $l$$ = $values$$.length, $i$$ = 0; $i$$ < $l$$; $i$$++) {
    if (!$f$$.call($opt_obj$$, $values$$[$i$$], $keys$$ && $keys$$[$i$$], $col$$)) {
      return !1;
    }
  }
  return !0;
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : {message:"StopIteration", stack:""};
goog.iter.Iterator = function $goog$iter$Iterator$() {
};
goog.iter.Iterator.prototype.next = function $goog$iter$Iterator$$next$() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function $goog$iter$Iterator$$__iterator__$($opt_keys$$) {
  return this;
};
goog.iter.toIterator = function $goog$iter$toIterator$($iterable$$) {
  if ($iterable$$ instanceof goog.iter.Iterator) {
    return $iterable$$;
  }
  if ("function" == typeof $iterable$$.__iterator__) {
    return $iterable$$.__iterator__(!1);
  }
  if (goog.isArrayLike($iterable$$)) {
    var $i$$ = 0, $newIter$$ = new goog.iter.Iterator;
    $newIter$$.next = function $$newIter$$$next$() {
      for (;;) {
        if ($i$$ >= $iterable$$.length) {
          throw goog.iter.StopIteration;
        }
        if ($i$$ in $iterable$$) {
          return $iterable$$[$i$$++];
        }
        $i$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function $goog$iter$forEach$($iterable$$, $f$$, $opt_obj$$) {
  if (goog.isArrayLike($iterable$$)) {
    try {
      goog.array.forEach($iterable$$, $f$$, $opt_obj$$);
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
    }
  } else {
    $iterable$$ = goog.iter.toIterator($iterable$$);
    try {
      for (;;) {
        $f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$);
      }
    } catch ($ex$1$$) {
      if ($ex$1$$ !== goog.iter.StopIteration) {
        throw $ex$1$$;
      }
    }
  }
};
goog.iter.filter = function $goog$iter$filter$($iterable$jscomp$4_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$4_newIter$$);
  $iterable$jscomp$4_newIter$$ = new goog.iter.Iterator;
  $iterable$jscomp$4_newIter$$.next = function $$iterable$jscomp$4_newIter$$$next$() {
    for (;;) {
      var $val$$ = $iterator$$.next();
      if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $val$$;
      }
    }
  };
  return $iterable$jscomp$4_newIter$$;
};
goog.iter.filterFalse = function $goog$iter$filterFalse$($iterable$$, $f$$, $opt_obj$$) {
  return goog.iter.filter($iterable$$, goog.functions.not($f$$), $opt_obj$$);
};
goog.iter.range = function $goog$iter$range$($startOrStop$$, $opt_stop$$, $opt_step$$) {
  var $start$$ = 0, $stop$$ = $startOrStop$$, $step$$ = $opt_step$$ || 1;
  1 < arguments.length && ($start$$ = $startOrStop$$, $stop$$ = $opt_stop$$);
  if (0 == $step$$) {
    throw Error("Range step argument must not be zero");
  }
  var $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if (0 < $step$$ && $start$$ >= $stop$$ || 0 > $step$$ && $start$$ <= $stop$$) {
      throw goog.iter.StopIteration;
    }
    var $rv$$ = $start$$;
    $start$$ += $step$$;
    return $rv$$;
  };
  return $newIter$$;
};
goog.iter.join = function $goog$iter$join$($iterable$$, $deliminator$$) {
  return goog.iter.toArray($iterable$$).join($deliminator$$);
};
goog.iter.map = function $goog$iter$map$($iterable$jscomp$7_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$7_newIter$$);
  $iterable$jscomp$7_newIter$$ = new goog.iter.Iterator;
  $iterable$jscomp$7_newIter$$.next = function $$iterable$jscomp$7_newIter$$$next$() {
    var $val$$ = $iterator$$.next();
    return $f$$.call($opt_obj$$, $val$$, void 0, $iterator$$);
  };
  return $iterable$jscomp$7_newIter$$;
};
goog.iter.reduce = function $goog$iter$reduce$($iterable$$, $f$$, $val$jscomp$0$$, $opt_obj$$) {
  var $rval$$ = $val$jscomp$0$$;
  goog.iter.forEach($iterable$$, function($val$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$);
  });
  return $rval$$;
};
goog.iter.some = function $goog$iter$some$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if ($f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$)) {
        return !0;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !1;
};
goog.iter.every = function $goog$iter$every$($iterable$$, $f$$, $opt_obj$$) {
  $iterable$$ = goog.iter.toIterator($iterable$$);
  try {
    for (;;) {
      if (!$f$$.call($opt_obj$$, $iterable$$.next(), void 0, $iterable$$)) {
        return !1;
      }
    }
  } catch ($ex$$) {
    if ($ex$$ !== goog.iter.StopIteration) {
      throw $ex$$;
    }
  }
  return !0;
};
goog.iter.chain = function $goog$iter$chain$($var_args$$) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function $goog$iter$chainFromIterable$($iter_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter_iterable$$);
  $iter_iterable$$ = new goog.iter.Iterator;
  var $current$$ = null;
  $iter_iterable$$.next = function $$iter_iterable$$$next$() {
    for (;;) {
      if (null == $current$$) {
        var $it$$ = $iterator$$.next();
        $current$$ = goog.iter.toIterator($it$$);
      }
      try {
        return $current$$.next();
      } catch ($ex$$) {
        if ($ex$$ !== goog.iter.StopIteration) {
          throw $ex$$;
        }
        $current$$ = null;
      }
    }
  };
  return $iter_iterable$$;
};
goog.iter.dropWhile = function $goog$iter$dropWhile$($iterable$jscomp$12_newIter$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$12_newIter$$);
  $iterable$jscomp$12_newIter$$ = new goog.iter.Iterator;
  var $dropping$$ = !0;
  $iterable$jscomp$12_newIter$$.next = function $$iterable$jscomp$12_newIter$$$next$() {
    for (;;) {
      var $val$$ = $iterator$$.next();
      if (!$dropping$$ || !$f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
        return $dropping$$ = !1, $val$$;
      }
    }
  };
  return $iterable$jscomp$12_newIter$$;
};
goog.iter.takeWhile = function $goog$iter$takeWhile$($iter$jscomp$1_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$1_iterable$$);
  $iter$jscomp$1_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$1_iterable$$.next = function $$iter$jscomp$1_iterable$$$next$() {
    var $val$$ = $iterator$$.next();
    if ($f$$.call($opt_obj$$, $val$$, void 0, $iterator$$)) {
      return $val$$;
    }
    throw goog.iter.StopIteration;
  };
  return $iter$jscomp$1_iterable$$;
};
goog.iter.toArray = function $goog$iter$toArray$($iterable$$) {
  if (goog.isArrayLike($iterable$$)) {
    return goog.array.toArray($iterable$$);
  }
  $iterable$$ = goog.iter.toIterator($iterable$$);
  var $array$$ = [];
  goog.iter.forEach($iterable$$, function($val$$) {
    $array$$.push($val$$);
  });
  return $array$$;
};
goog.iter.equals = function $goog$iter$equals$($iterable1_pairs$$, $iterable2$$, $opt_equalsFn$$) {
  $iterable1_pairs$$ = goog.iter.zipLongest({}, $iterable1_pairs$$, $iterable2$$);
  var $equalsFn$$ = $opt_equalsFn$$ || goog.array.defaultCompareEquality;
  return goog.iter.every($iterable1_pairs$$, function($pair$$) {
    return $equalsFn$$($pair$$[0], $pair$$[1]);
  });
};
goog.iter.nextOrValue = function $goog$iter$nextOrValue$($iterable$$, $defaultValue$$) {
  try {
    return goog.iter.toIterator($iterable$$).next();
  } catch ($e$$) {
    if ($e$$ != goog.iter.StopIteration) {
      throw $e$$;
    }
    return $defaultValue$$;
  }
};
goog.iter.product = function $goog$iter$product$($var_args$$) {
  if (goog.array.some(arguments, function($arr$$) {
    return !$arr$$.length;
  }) || !arguments.length) {
    return new goog.iter.Iterator;
  }
  var $iter$$ = new goog.iter.Iterator, $arrays$$ = arguments, $indicies$$ = goog.array.repeat(0, $arrays$$.length);
  $iter$$.next = function $$iter$$$next$() {
    if ($indicies$$) {
      for (var $retVal$$ = goog.array.map($indicies$$, function($valueIndex$$, $arrayIndex$$) {
        return $arrays$$[$arrayIndex$$][$valueIndex$$];
      }), $i$$ = $indicies$$.length - 1; 0 <= $i$$; $i$$--) {
        goog.asserts.assert($indicies$$);
        if ($indicies$$[$i$$] < $arrays$$[$i$$].length - 1) {
          $indicies$$[$i$$]++;
          break;
        }
        if (0 == $i$$) {
          $indicies$$ = null;
          break;
        }
        $indicies$$[$i$$] = 0;
      }
      return $retVal$$;
    }
    throw goog.iter.StopIteration;
  };
  return $iter$$;
};
goog.iter.cycle = function $goog$iter$cycle$($iter$jscomp$3_iterable$$) {
  var $baseIterator$$ = goog.iter.toIterator($iter$jscomp$3_iterable$$), $cache$$ = [], $cacheIndex$$ = 0;
  $iter$jscomp$3_iterable$$ = new goog.iter.Iterator;
  var $useCache$$ = !1;
  $iter$jscomp$3_iterable$$.next = function $$iter$jscomp$3_iterable$$$next$() {
    var $returnElement$$ = null;
    if (!$useCache$$) {
      try {
        return $returnElement$$ = $baseIterator$$.next(), $cache$$.push($returnElement$$), $returnElement$$;
      } catch ($e$$) {
        if ($e$$ != goog.iter.StopIteration || goog.array.isEmpty($cache$$)) {
          throw $e$$;
        }
        $useCache$$ = !0;
      }
    }
    $returnElement$$ = $cache$$[$cacheIndex$$];
    $cacheIndex$$ = ($cacheIndex$$ + 1) % $cache$$.length;
    return $returnElement$$;
  };
  return $iter$jscomp$3_iterable$$;
};
goog.iter.count = function $goog$iter$count$($iter$$, $opt_step$$) {
  var $counter$$ = $iter$$ || 0, $step$$ = goog.isDef($opt_step$$) ? $opt_step$$ : 1;
  $iter$$ = new goog.iter.Iterator;
  $iter$$.next = function $$iter$$$next$() {
    var $returnValue$$ = $counter$$;
    $counter$$ += $step$$;
    return $returnValue$$;
  };
  return $iter$$;
};
goog.iter.repeat = function $goog$iter$repeat$($value$$) {
  var $iter$$ = new goog.iter.Iterator;
  $iter$$.next = goog.functions.constant($value$$);
  return $iter$$;
};
goog.iter.accumulate = function $goog$iter$accumulate$($iter$jscomp$6_iterable$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$6_iterable$$), $total$$ = 0;
  $iter$jscomp$6_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$6_iterable$$.next = function $$iter$jscomp$6_iterable$$$next$() {
    return $total$$ += $iterator$$.next();
  };
  return $iter$jscomp$6_iterable$$;
};
goog.iter.zip = function $goog$iter$zip$($var_args$$) {
  var $args$$ = arguments, $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = goog.array.map($args$$, goog.iter.toIterator);
    $iter$$.next = function $$iter$$$next$() {
      return goog.array.map($iterators$$, function($it$$) {
        return $it$$.next();
      });
    };
  }
  return $iter$$;
};
goog.iter.zipLongest = function $goog$iter$zipLongest$($fillValue$$, $var_args$$) {
  var $args$$ = goog.array.slice(arguments, 1), $iter$$ = new goog.iter.Iterator;
  if (0 < $args$$.length) {
    var $iterators$$ = goog.array.map($args$$, goog.iter.toIterator);
    $iter$$.next = function $$iter$$$next$() {
      var $iteratorsHaveValues$$ = !1, $arr$$ = goog.array.map($iterators$$, function($it$$) {
        try {
          var $returnValue$$ = $it$$.next();
          $iteratorsHaveValues$$ = !0;
        } catch ($ex$$) {
          if ($ex$$ !== goog.iter.StopIteration) {
            throw $ex$$;
          }
          $returnValue$$ = $fillValue$$;
        }
        return $returnValue$$;
      });
      if (!$iteratorsHaveValues$$) {
        throw goog.iter.StopIteration;
      }
      return $arr$$;
    };
  }
  return $iter$$;
};
goog.iter.compress = function $goog$iter$compress$($iterable$$, $selectors$$) {
  var $selectorIterator$$ = goog.iter.toIterator($selectors$$);
  return goog.iter.filter($iterable$$, function() {
    return !!$selectorIterator$$.next();
  });
};
goog.iter.GroupByIterator_ = function $goog$iter$GroupByIterator_$($iterable$$, $opt_keyFunc$$) {
  this.iterator = goog.iter.toIterator($iterable$$);
  this.keyFunc = $opt_keyFunc$$ || goog.functions.identity;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.next = function $goog$iter$GroupByIterator_$$next$() {
  for (; this.currentKey == this.targetKey;) {
    this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return [this.currentKey, this.groupItems_(this.targetKey)];
};
goog.iter.GroupByIterator_.prototype.groupItems_ = function $goog$iter$GroupByIterator_$$groupItems_$($targetKey$$) {
  for (var $arr$$ = []; this.currentKey == $targetKey$$;) {
    $arr$$.push(this.currentValue);
    try {
      this.currentValue = this.iterator.next();
    } catch ($ex$$) {
      if ($ex$$ !== goog.iter.StopIteration) {
        throw $ex$$;
      }
      break;
    }
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return $arr$$;
};
goog.iter.groupBy = function $goog$iter$groupBy$($iterable$$, $opt_keyFunc$$) {
  return new goog.iter.GroupByIterator_($iterable$$, $opt_keyFunc$$);
};
goog.iter.starMap = function $goog$iter$starMap$($iter$jscomp$9_iterable$$, $f$$, $opt_obj$$) {
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$9_iterable$$);
  $iter$jscomp$9_iterable$$ = new goog.iter.Iterator;
  $iter$jscomp$9_iterable$$.next = function $$iter$jscomp$9_iterable$$$next$() {
    var $args$$ = goog.iter.toArray($iterator$$.next());
    return $f$$.apply($opt_obj$$, goog.array.concat($args$$, void 0, $iterator$$));
  };
  return $iter$jscomp$9_iterable$$;
};
goog.iter.tee = function $goog$iter$tee$($iterable$jscomp$22_num$$, $opt_num$$) {
  var $iterator$$ = goog.iter.toIterator($iterable$jscomp$22_num$$);
  $iterable$jscomp$22_num$$ = goog.isNumber($opt_num$$) ? $opt_num$$ : 2;
  var $buffers$$ = goog.array.map(goog.array.range($iterable$jscomp$22_num$$), function() {
    return [];
  }), $addNextIteratorValueToBuffers$$ = function $$addNextIteratorValueToBuffers$$$() {
    var $val$$ = $iterator$$.next();
    goog.array.forEach($buffers$$, function($buffer$$) {
      $buffer$$.push($val$$);
    });
  };
  return goog.array.map($buffers$$, function($buffer$$) {
    var $iter$$ = new goog.iter.Iterator;
    $iter$$.next = function $$iter$$$next$() {
      goog.array.isEmpty($buffer$$) && $addNextIteratorValueToBuffers$$();
      goog.asserts.assert(!goog.array.isEmpty($buffer$$));
      return $buffer$$.shift();
    };
    return $iter$$;
  });
};
goog.iter.enumerate = function $goog$iter$enumerate$($iterable$$, $opt_start$$) {
  return goog.iter.zip(goog.iter.count($opt_start$$), $iterable$$);
};
goog.iter.limit = function $goog$iter$limit$($iter$jscomp$11_iterable$$, $limitSize$$) {
  goog.asserts.assert(goog.math.isInt($limitSize$$) && 0 <= $limitSize$$);
  var $iterator$$ = goog.iter.toIterator($iter$jscomp$11_iterable$$);
  $iter$jscomp$11_iterable$$ = new goog.iter.Iterator;
  var $remaining$$ = $limitSize$$;
  $iter$jscomp$11_iterable$$.next = function $$iter$jscomp$11_iterable$$$next$() {
    if (0 < $remaining$$--) {
      return $iterator$$.next();
    }
    throw goog.iter.StopIteration;
  };
  return $iter$jscomp$11_iterable$$;
};
goog.iter.consume = function $goog$iter$consume$($iterable$jscomp$25_iterator$$, $count$$) {
  goog.asserts.assert(goog.math.isInt($count$$) && 0 <= $count$$);
  for ($iterable$jscomp$25_iterator$$ = goog.iter.toIterator($iterable$jscomp$25_iterator$$); 0 < $count$$--;) {
    goog.iter.nextOrValue($iterable$jscomp$25_iterator$$, null);
  }
  return $iterable$jscomp$25_iterator$$;
};
goog.iter.slice = function $goog$iter$slice$($iterable$jscomp$26_iterator$$, $start$$, $opt_end$$) {
  goog.asserts.assert(goog.math.isInt($start$$) && 0 <= $start$$);
  $iterable$jscomp$26_iterator$$ = goog.iter.consume($iterable$jscomp$26_iterator$$, $start$$);
  goog.isNumber($opt_end$$) && (goog.asserts.assert(goog.math.isInt($opt_end$$) && $opt_end$$ >= $start$$), $iterable$jscomp$26_iterator$$ = goog.iter.limit($iterable$jscomp$26_iterator$$, $opt_end$$ - $start$$));
  return $iterable$jscomp$26_iterator$$;
};
goog.iter.hasDuplicates_ = function $goog$iter$hasDuplicates_$($arr$$) {
  var $deduped$$ = [];
  goog.array.removeDuplicates($arr$$, $deduped$$);
  return $arr$$.length != $deduped$$.length;
};
goog.iter.permutations = function $goog$iter$permutations$($elements$jscomp$1_iterable$$, $length$jscomp$24_opt_length$$) {
  $elements$jscomp$1_iterable$$ = goog.iter.toArray($elements$jscomp$1_iterable$$);
  $length$jscomp$24_opt_length$$ = goog.isNumber($length$jscomp$24_opt_length$$) ? $length$jscomp$24_opt_length$$ : $elements$jscomp$1_iterable$$.length;
  $length$jscomp$24_opt_length$$ = goog.array.repeat($elements$jscomp$1_iterable$$, $length$jscomp$24_opt_length$$);
  $length$jscomp$24_opt_length$$ = goog.iter.product.apply(void 0, $length$jscomp$24_opt_length$$);
  return goog.iter.filter($length$jscomp$24_opt_length$$, function($arr$$) {
    return !goog.iter.hasDuplicates_($arr$$);
  });
};
goog.iter.combinations = function $goog$iter$combinations$($indexes_iterable$$, $indexIterator_iter$jscomp$12_length$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($indexes_iterable$$);
  $indexes_iterable$$ = goog.iter.range($elements$$.length);
  $indexIterator_iter$jscomp$12_length$$ = goog.iter.permutations($indexes_iterable$$, $indexIterator_iter$jscomp$12_length$$);
  var $sortedIndexIterator$$ = goog.iter.filter($indexIterator_iter$jscomp$12_length$$, function($arr$$) {
    return goog.array.isSorted($arr$$);
  });
  $indexIterator_iter$jscomp$12_length$$ = new goog.iter.Iterator;
  $indexIterator_iter$jscomp$12_length$$.next = function $$indexIterator_iter$jscomp$12_length$$$next$() {
    return goog.array.map($sortedIndexIterator$$.next(), $getIndexFromElements$$);
  };
  return $indexIterator_iter$jscomp$12_length$$;
};
goog.iter.combinationsWithReplacement = function $goog$iter$combinationsWithReplacement$($indexes$jscomp$1_iterable$$, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$) {
  function $getIndexFromElements$$($index$$) {
    return $elements$$[$index$$];
  }
  var $elements$$ = goog.iter.toArray($indexes$jscomp$1_iterable$$);
  $indexes$jscomp$1_iterable$$ = goog.array.range($elements$$.length);
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$ = goog.array.repeat($indexes$jscomp$1_iterable$$, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$);
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$ = goog.iter.product.apply(void 0, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$);
  var $sortedIndexIterator$$ = goog.iter.filter($indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$, function($arr$$) {
    return goog.array.isSorted($arr$$);
  });
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$ = new goog.iter.Iterator;
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$.next = function $$indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$$next$() {
    return goog.array.map($sortedIndexIterator$$.next(), $getIndexFromElements$$);
  };
  return $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$$;
};
goog.structs.Map = function $goog$structs$Map$($opt_map$$, $var_args$$) {
  this.map_ = {};
  this.keys_ = [];
  this.version_ = this.count_ = 0;
  var $argLength$$ = arguments.length;
  if (1 < $argLength$$) {
    if ($argLength$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$$ = 0; $i$$ < $argLength$$; $i$$ += 2) {
      this.set(arguments[$i$$], arguments[$i$$ + 1]);
    }
  } else {
    $opt_map$$ && this.addAll($opt_map$$);
  }
};
goog.structs.Map.prototype.getCount = function $goog$structs$Map$$getCount$() {
  return this.count_;
};
goog.structs.Map.prototype.getValues = function $goog$structs$Map$$getValues$() {
  this.cleanupKeysArray_();
  for (var $rv$$ = [], $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    $rv$$.push(this.map_[this.keys_[$i$$]]);
  }
  return $rv$$;
};
goog.structs.Map.prototype.getKeys = function $goog$structs$Map$$getKeys$() {
  this.cleanupKeysArray_();
  return this.keys_.concat();
};
goog.structs.Map.prototype.containsKey = function $goog$structs$Map$$containsKey$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$);
};
goog.structs.Map.prototype.containsValue = function $goog$structs$Map$$containsValue$($val$$) {
  for (var $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    if (goog.structs.Map.hasKey_(this.map_, $key$$) && this.map_[$key$$] == $val$$) {
      return !0;
    }
  }
  return !1;
};
goog.structs.Map.prototype.equals = function $goog$structs$Map$$equals$($otherMap$$, $equalityFn_opt_equalityFn$$) {
  if (this === $otherMap$$) {
    return !0;
  }
  if (this.count_ != $otherMap$$.getCount()) {
    return !1;
  }
  $equalityFn_opt_equalityFn$$ = $equalityFn_opt_equalityFn$$ || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for (var $key$$, $i$$ = 0; $key$$ = this.keys_[$i$$]; $i$$++) {
    if (!$equalityFn_opt_equalityFn$$(this.get($key$$), $otherMap$$.get($key$$))) {
      return !1;
    }
  }
  return !0;
};
goog.structs.Map.defaultEquals = function $goog$structs$Map$defaultEquals$($a$$, $b$$) {
  return $a$$ === $b$$;
};
goog.structs.Map.prototype.isEmpty = function $goog$structs$Map$$isEmpty$() {
  return 0 == this.count_;
};
goog.structs.Map.prototype.clear = function $goog$structs$Map$$clear$() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0;
};
goog.structs.Map.prototype.remove = function $goog$structs$Map$$remove$($key$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? (delete this.map_[$key$$], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1;
};
goog.structs.Map.prototype.cleanupKeysArray_ = function $goog$structs$Map$$cleanupKeysArray_$() {
  var $destIndex$$, $srcIndex$$;
  if (this.count_ != this.keys_.length) {
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < this.keys_.length;) {
      var $key$$ = this.keys_[$srcIndex$$];
      goog.structs.Map.hasKey_(this.map_, $key$$) && (this.keys_[$destIndex$$++] = $key$$);
      $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
  if (this.count_ != this.keys_.length) {
    var $seen$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < this.keys_.length;) {
      $key$$ = this.keys_[$srcIndex$$], goog.structs.Map.hasKey_($seen$$, $key$$) || (this.keys_[$destIndex$$++] = $key$$, $seen$$[$key$$] = 1), $srcIndex$$++;
    }
    this.keys_.length = $destIndex$$;
  }
};
goog.structs.Map.prototype.get = function $goog$structs$Map$$get$($key$$, $opt_val$$) {
  return goog.structs.Map.hasKey_(this.map_, $key$$) ? this.map_[$key$$] : $opt_val$$;
};
goog.structs.Map.prototype.set = function $goog$structs$Map$$set$($key$$, $value$$) {
  goog.structs.Map.hasKey_(this.map_, $key$$) || (this.count_++, this.keys_.push($key$$), this.version_++);
  this.map_[$key$$] = $value$$;
};
goog.structs.Map.prototype.addAll = function $goog$structs$Map$$addAll$($map$jscomp$1_values$$) {
  if ($map$jscomp$1_values$$ instanceof goog.structs.Map) {
    var $keys$$ = $map$jscomp$1_values$$.getKeys();
    $map$jscomp$1_values$$ = $map$jscomp$1_values$$.getValues();
  } else {
    $keys$$ = goog.object.getKeys($map$jscomp$1_values$$), $map$jscomp$1_values$$ = goog.object.getValues($map$jscomp$1_values$$);
  }
  for (var $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    this.set($keys$$[$i$$], $map$jscomp$1_values$$[$i$$]);
  }
};
goog.structs.Map.prototype.forEach = function $goog$structs$Map$$forEach$($f$$, $opt_obj$$) {
  for (var $keys$$ = this.getKeys(), $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    var $key$$ = $keys$$[$i$$], $value$$ = this.get($key$$);
    $f$$.call($opt_obj$$, $value$$, $key$$, this);
  }
};
goog.structs.Map.prototype.clone = function $goog$structs$Map$$clone$() {
  return new goog.structs.Map(this);
};
goog.structs.Map.prototype.transpose = function $goog$structs$Map$$transpose$() {
  for (var $transposed$$ = new goog.structs.Map, $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    $transposed$$.set(this.map_[$key$$], $key$$);
  }
  return $transposed$$;
};
goog.structs.Map.prototype.toObject = function $goog$structs$Map$$toObject$() {
  this.cleanupKeysArray_();
  for (var $obj$$ = {}, $i$$ = 0; $i$$ < this.keys_.length; $i$$++) {
    var $key$$ = this.keys_[$i$$];
    $obj$$[$key$$] = this.map_[$key$$];
  }
  return $obj$$;
};
goog.structs.Map.prototype.getKeyIterator = function $goog$structs$Map$$getKeyIterator$() {
  return this.__iterator__(!0);
};
goog.structs.Map.prototype.getValueIterator = function $goog$structs$Map$$getValueIterator$() {
  return this.__iterator__(!1);
};
goog.structs.Map.prototype.__iterator__ = function $goog$structs$Map$$__iterator__$($opt_keys$$) {
  this.cleanupKeysArray_();
  var $i$$ = 0, $version$$ = this.version_, $selfObj$$ = this, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if ($version$$ != $selfObj$$.version_) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$$ >= $selfObj$$.keys_.length) {
      throw goog.iter.StopIteration;
    }
    var $key$$ = $selfObj$$.keys_[$i$$++];
    return $opt_keys$$ ? $key$$ : $selfObj$$.map_[$key$$];
  };
  return $newIter$$;
};
goog.structs.Map.hasKey_ = function $goog$structs$Map$hasKey_$($obj$$, $key$$) {
  return Object.prototype.hasOwnProperty.call($obj$$, $key$$);
};
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function $goog$uri$utils$buildFromEncodedParts$($opt_scheme$$, $opt_userInfo$$, $opt_domain$$, $opt_port$$, $opt_path$$, $opt_queryData$$, $opt_fragment$$) {
  var $out$$ = "";
  $opt_scheme$$ && ($out$$ += $opt_scheme$$ + ":");
  $opt_domain$$ && ($out$$ += "//", $opt_userInfo$$ && ($out$$ += $opt_userInfo$$ + "@"), $out$$ += $opt_domain$$, $opt_port$$ && ($out$$ += ":" + $opt_port$$));
  $opt_path$$ && ($out$$ += $opt_path$$);
  $opt_queryData$$ && ($out$$ += "?" + $opt_queryData$$);
  $opt_fragment$$ && ($out$$ += "#" + $opt_fragment$$);
  return $out$$;
};
goog.uri.utils.splitRe_ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.split = function $goog$uri$utils$split$($uri$$) {
  return $uri$$.match(goog.uri.utils.splitRe_);
};
goog.uri.utils.decodeIfPossible_ = function $goog$uri$utils$decodeIfPossible_$($uri$$, $opt_preserveReserved$$) {
  return $uri$$ ? $opt_preserveReserved$$ ? decodeURI($uri$$) : decodeURIComponent($uri$$) : $uri$$;
};
goog.uri.utils.getComponentByIndex_ = function $goog$uri$utils$getComponentByIndex_$($componentIndex$$, $uri$$) {
  return goog.uri.utils.split($uri$$)[$componentIndex$$] || null;
};
goog.uri.utils.getScheme = function $goog$uri$utils$getScheme$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, $uri$$);
};
goog.uri.utils.getEffectiveScheme = function $goog$uri$utils$getEffectiveScheme$($protocol$jscomp$1_scheme$jscomp$2_uri$$) {
  $protocol$jscomp$1_scheme$jscomp$2_uri$$ = goog.uri.utils.getScheme($protocol$jscomp$1_scheme$jscomp$2_uri$$);
  !$protocol$jscomp$1_scheme$jscomp$2_uri$$ && goog.global.self && goog.global.self.location && ($protocol$jscomp$1_scheme$jscomp$2_uri$$ = goog.global.self.location.protocol, $protocol$jscomp$1_scheme$jscomp$2_uri$$ = $protocol$jscomp$1_scheme$jscomp$2_uri$$.substr(0, $protocol$jscomp$1_scheme$jscomp$2_uri$$.length - 1));
  return $protocol$jscomp$1_scheme$jscomp$2_uri$$ ? $protocol$jscomp$1_scheme$jscomp$2_uri$$.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function $goog$uri$utils$getUserInfoEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, $uri$$);
};
goog.uri.utils.getUserInfo = function $goog$uri$utils$getUserInfo$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded($uri$$));
};
goog.uri.utils.getDomainEncoded = function $goog$uri$utils$getDomainEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, $uri$$);
};
goog.uri.utils.getDomain = function $goog$uri$utils$getDomain$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded($uri$$), !0);
};
goog.uri.utils.getPort = function $goog$uri$utils$getPort$($uri$$) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, $uri$$)) || null;
};
goog.uri.utils.getPathEncoded = function $goog$uri$utils$getPathEncoded$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, $uri$$);
};
goog.uri.utils.getPath = function $goog$uri$utils$getPath$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded($uri$$), !0);
};
goog.uri.utils.getQueryData = function $goog$uri$utils$getQueryData$($uri$$) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, $uri$$);
};
goog.uri.utils.getFragmentEncoded = function $goog$uri$utils$getFragmentEncoded$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  return 0 > $hashIndex$$ ? null : $uri$$.substr($hashIndex$$ + 1);
};
goog.uri.utils.setFragmentEncoded = function $goog$uri$utils$setFragmentEncoded$($uri$$, $fragment$$) {
  return goog.uri.utils.removeFragment($uri$$) + ($fragment$$ ? "#" + $fragment$$ : "");
};
goog.uri.utils.getFragment = function $goog$uri$utils$getFragment$($uri$$) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded($uri$$));
};
goog.uri.utils.getHost = function $goog$uri$utils$getHost$($pieces_uri$$) {
  $pieces_uri$$ = goog.uri.utils.split($pieces_uri$$);
  return goog.uri.utils.buildFromEncodedParts($pieces_uri$$[goog.uri.utils.ComponentIndex.SCHEME], $pieces_uri$$[goog.uri.utils.ComponentIndex.USER_INFO], $pieces_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $pieces_uri$$[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getOrigin = function $goog$uri$utils$getOrigin$($pieces$jscomp$1_uri$$) {
  $pieces$jscomp$1_uri$$ = goog.uri.utils.split($pieces$jscomp$1_uri$$);
  return goog.uri.utils.buildFromEncodedParts($pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.SCHEME], null, $pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $pieces$jscomp$1_uri$$[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getPathAndAfter = function $goog$uri$utils$getPathAndAfter$($pieces$jscomp$2_uri$$) {
  $pieces$jscomp$2_uri$$ = goog.uri.utils.split($pieces$jscomp$2_uri$$);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.PATH], $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.QUERY_DATA], $pieces$jscomp$2_uri$$[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.removeFragment = function $goog$uri$utils$removeFragment$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  return 0 > $hashIndex$$ ? $uri$$ : $uri$$.substr(0, $hashIndex$$);
};
goog.uri.utils.haveSameDomain = function $goog$uri$utils$haveSameDomain$($pieces1_uri1$$, $pieces2_uri2$$) {
  $pieces1_uri1$$ = goog.uri.utils.split($pieces1_uri1$$);
  $pieces2_uri2$$ = goog.uri.utils.split($pieces2_uri2$$);
  return $pieces1_uri1$$[goog.uri.utils.ComponentIndex.DOMAIN] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.DOMAIN] && $pieces1_uri1$$[goog.uri.utils.ComponentIndex.SCHEME] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.SCHEME] && $pieces1_uri1$$[goog.uri.utils.ComponentIndex.PORT] == $pieces2_uri2$$[goog.uri.utils.ComponentIndex.PORT];
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function $goog$uri$utils$assertNoFragmentsOrQueries_$($uri$$) {
  goog.asserts.assert(0 > $uri$$.indexOf("#") && 0 > $uri$$.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", $uri$$);
};
goog.uri.utils.parseQueryData = function $goog$uri$utils$parseQueryData$($encodedQuery_pairs$$, $callback$$) {
  if ($encodedQuery_pairs$$) {
    $encodedQuery_pairs$$ = $encodedQuery_pairs$$.split("&");
    for (var $i$$ = 0; $i$$ < $encodedQuery_pairs$$.length; $i$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$$[$i$$].indexOf("="), $value$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$$ = $encodedQuery_pairs$$[$i$$].substring(0, $indexOfEquals$$);
        $value$$ = $encodedQuery_pairs$$[$i$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$$ = $encodedQuery_pairs$$[$i$$];
      }
      $callback$$($name$$, $value$$ ? goog.string.urlDecode($value$$) : "");
    }
  }
};
goog.uri.utils.splitQueryData_ = function $goog$uri$utils$splitQueryData_$($uri$$) {
  var $hashIndex$$ = $uri$$.indexOf("#");
  0 > $hashIndex$$ && ($hashIndex$$ = $uri$$.length);
  var $questionIndex$$ = $uri$$.indexOf("?");
  if (0 > $questionIndex$$ || $questionIndex$$ > $hashIndex$$) {
    $questionIndex$$ = $hashIndex$$;
    var $queryData$$ = "";
  } else {
    $queryData$$ = $uri$$.substring($questionIndex$$ + 1, $hashIndex$$);
  }
  return [$uri$$.substr(0, $questionIndex$$), $queryData$$, $uri$$.substr($hashIndex$$)];
};
goog.uri.utils.joinQueryData_ = function $goog$uri$utils$joinQueryData_$($parts$$) {
  return $parts$$[0] + ($parts$$[1] ? "?" + $parts$$[1] : "") + $parts$$[2];
};
goog.uri.utils.appendQueryData_ = function $goog$uri$utils$appendQueryData_$($queryData$$, $newData$$) {
  return $newData$$ ? $queryData$$ ? $queryData$$ + "&" + $newData$$ : $newData$$ : $queryData$$;
};
goog.uri.utils.appendQueryDataToUri_ = function $goog$uri$utils$appendQueryDataToUri_$($parts$jscomp$6_uri$$, $queryData$$) {
  if (!$queryData$$) {
    return $parts$jscomp$6_uri$$;
  }
  $parts$jscomp$6_uri$$ = goog.uri.utils.splitQueryData_($parts$jscomp$6_uri$$);
  $parts$jscomp$6_uri$$[1] = goog.uri.utils.appendQueryData_($parts$jscomp$6_uri$$[1], $queryData$$);
  return goog.uri.utils.joinQueryData_($parts$jscomp$6_uri$$);
};
goog.uri.utils.appendKeyValuePairs_ = function $goog$uri$utils$appendKeyValuePairs_$($key$$, $value$$, $pairs$$) {
  goog.asserts.assertString($key$$);
  if (goog.isArray($value$$)) {
    goog.asserts.assertArray($value$$);
    for (var $j$$ = 0; $j$$ < $value$$.length; $j$$++) {
      goog.uri.utils.appendKeyValuePairs_($key$$, String($value$$[$j$$]), $pairs$$);
    }
  } else {
    null != $value$$ && $pairs$$.push($key$$ + ("" === $value$$ ? "" : "=" + goog.string.urlEncode($value$$)));
  }
};
goog.uri.utils.buildQueryData = function $goog$uri$utils$buildQueryData$($keysAndValues$$, $i$$) {
  goog.asserts.assert(0 == Math.max($keysAndValues$$.length - ($i$$ || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  var $params$$ = [];
  for ($i$$ = $i$$ || 0; $i$$ < $keysAndValues$$.length; $i$$ += 2) {
    goog.uri.utils.appendKeyValuePairs_($keysAndValues$$[$i$$], $keysAndValues$$[$i$$ + 1], $params$$);
  }
  return $params$$.join("&");
};
goog.uri.utils.buildQueryDataFromMap = function $goog$uri$utils$buildQueryDataFromMap$($map$$) {
  var $params$$ = [], $key$$;
  for ($key$$ in $map$$) {
    goog.uri.utils.appendKeyValuePairs_($key$$, $map$$[$key$$], $params$$);
  }
  return $params$$.join("&");
};
goog.uri.utils.appendParams = function $goog$uri$utils$appendParams$($uri$$, $var_args$$) {
  var $queryData$$ = 2 == arguments.length ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $queryData$$);
};
goog.uri.utils.appendParamsFromMap = function $goog$uri$utils$appendParamsFromMap$($uri$$, $map$jscomp$3_queryData$$) {
  $map$jscomp$3_queryData$$ = goog.uri.utils.buildQueryDataFromMap($map$jscomp$3_queryData$$);
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $map$jscomp$3_queryData$$);
};
goog.uri.utils.appendParam = function $goog$uri$utils$appendParam$($uri$$, $key$$, $opt_value$jscomp$9_value$$) {
  $opt_value$jscomp$9_value$$ = goog.isDefAndNotNull($opt_value$jscomp$9_value$$) ? "=" + goog.string.urlEncode($opt_value$jscomp$9_value$$) : "";
  return goog.uri.utils.appendQueryDataToUri_($uri$$, $key$$ + $opt_value$jscomp$9_value$$);
};
goog.uri.utils.findParam_ = function $goog$uri$utils$findParam_$($uri$$, $index$jscomp$63_startIndex$$, $keyEncoded$$, $hashOrEndIndex$$) {
  for (var $keyLength$$ = $keyEncoded$$.length; 0 <= ($index$jscomp$63_startIndex$$ = $uri$$.indexOf($keyEncoded$$, $index$jscomp$63_startIndex$$)) && $index$jscomp$63_startIndex$$ < $hashOrEndIndex$$;) {
    var $followingChar_precedingChar$$ = $uri$$.charCodeAt($index$jscomp$63_startIndex$$ - 1);
    if ($followingChar_precedingChar$$ == goog.uri.utils.CharCode_.AMPERSAND || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.QUESTION) {
      if ($followingChar_precedingChar$$ = $uri$$.charCodeAt($index$jscomp$63_startIndex$$ + $keyLength$$), !$followingChar_precedingChar$$ || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.EQUAL || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.AMPERSAND || $followingChar_precedingChar$$ == goog.uri.utils.CharCode_.HASH) {
        return $index$jscomp$63_startIndex$$;
      }
    }
    $index$jscomp$63_startIndex$$ += $keyLength$$ + 1;
  }
  return -1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function $goog$uri$utils$hasParam$($uri$$, $keyEncoded$$) {
  return 0 <= goog.uri.utils.findParam_($uri$$, 0, $keyEncoded$$, $uri$$.search(goog.uri.utils.hashOrEndRe_));
};
goog.uri.utils.getParamValue = function $goog$uri$utils$getParamValue$($uri$$, $keyEncoded$$) {
  var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $foundIndex$$ = goog.uri.utils.findParam_($uri$$, 0, $keyEncoded$$, $hashOrEndIndex$$);
  if (0 > $foundIndex$$) {
    return null;
  }
  var $endPosition$$ = $uri$$.indexOf("&", $foundIndex$$);
  if (0 > $endPosition$$ || $endPosition$$ > $hashOrEndIndex$$) {
    $endPosition$$ = $hashOrEndIndex$$;
  }
  $foundIndex$$ += $keyEncoded$$.length + 1;
  return goog.string.urlDecode($uri$$.substr($foundIndex$$, $endPosition$$ - $foundIndex$$));
};
goog.uri.utils.getParamValues = function $goog$uri$utils$getParamValues$($uri$$, $keyEncoded$$) {
  for (var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $position$$ = 0, $foundIndex$$, $result$$ = []; 0 <= ($foundIndex$$ = goog.uri.utils.findParam_($uri$$, $position$$, $keyEncoded$$, $hashOrEndIndex$$));) {
    $position$$ = $uri$$.indexOf("&", $foundIndex$$);
    if (0 > $position$$ || $position$$ > $hashOrEndIndex$$) {
      $position$$ = $hashOrEndIndex$$;
    }
    $foundIndex$$ += $keyEncoded$$.length + 1;
    $result$$.push(goog.string.urlDecode($uri$$.substr($foundIndex$$, $position$$ - $foundIndex$$)));
  }
  return $result$$;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function $goog$uri$utils$removeParam$($uri$$, $keyEncoded$$) {
  for (var $hashOrEndIndex$$ = $uri$$.search(goog.uri.utils.hashOrEndRe_), $position$$ = 0, $foundIndex$$, $buffer$$ = []; 0 <= ($foundIndex$$ = goog.uri.utils.findParam_($uri$$, $position$$, $keyEncoded$$, $hashOrEndIndex$$));) {
    $buffer$$.push($uri$$.substring($position$$, $foundIndex$$)), $position$$ = Math.min($uri$$.indexOf("&", $foundIndex$$) + 1 || $hashOrEndIndex$$, $hashOrEndIndex$$);
  }
  $buffer$$.push($uri$$.substr($position$$));
  return $buffer$$.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function $goog$uri$utils$setParam$($uri$$, $keyEncoded$$, $value$$) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam($uri$$, $keyEncoded$$), $keyEncoded$$, $value$$);
};
goog.uri.utils.setParamsFromMap = function $goog$uri$utils$setParamsFromMap$($parts$jscomp$7_uri$$, $params$$) {
  $parts$jscomp$7_uri$$ = goog.uri.utils.splitQueryData_($parts$jscomp$7_uri$$);
  var $queryData$$ = $parts$jscomp$7_uri$$[1], $buffer$$ = [];
  $queryData$$ && goog.array.forEach($queryData$$.split("&"), function($pair$$) {
    var $indexOfEquals$jscomp$1_name$$ = $pair$$.indexOf("=");
    $indexOfEquals$jscomp$1_name$$ = 0 <= $indexOfEquals$jscomp$1_name$$ ? $pair$$.substr(0, $indexOfEquals$jscomp$1_name$$) : $pair$$;
    $params$$.hasOwnProperty($indexOfEquals$jscomp$1_name$$) || $buffer$$.push($pair$$);
  });
  $parts$jscomp$7_uri$$[1] = goog.uri.utils.appendQueryData_($buffer$$.join("&"), goog.uri.utils.buildQueryDataFromMap($params$$));
  return goog.uri.utils.joinQueryData_($parts$jscomp$7_uri$$);
};
goog.uri.utils.appendPath = function $goog$uri$utils$appendPath$($baseUri$$, $path$$) {
  goog.uri.utils.assertNoFragmentsOrQueries_($baseUri$$);
  goog.string.endsWith($baseUri$$, "/") && ($baseUri$$ = $baseUri$$.substr(0, $baseUri$$.length - 1));
  goog.string.startsWith($path$$, "/") && ($path$$ = $path$$.substr(1));
  return goog.string.buildString($baseUri$$, "/", $path$$);
};
goog.uri.utils.setPath = function $goog$uri$utils$setPath$($parts$jscomp$8_uri$$, $path$$) {
  goog.string.startsWith($path$$, "/") || ($path$$ = "/" + $path$$);
  $parts$jscomp$8_uri$$ = goog.uri.utils.split($parts$jscomp$8_uri$$);
  return goog.uri.utils.buildFromEncodedParts($parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.SCHEME], $parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.USER_INFO], $parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.DOMAIN], $parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.PORT], $path$$, $parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.QUERY_DATA], $parts$jscomp$8_uri$$[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function $goog$uri$utils$makeUnique$($uri$$) {
  return goog.uri.utils.setParam($uri$$, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};
goog.Uri = function $goog$Uri$($opt_uri$$, $opt_ignoreCase$$) {
  this.domain_ = this.userInfo_ = this.scheme_ = "";
  this.port_ = null;
  this.fragment_ = this.path_ = "";
  this.ignoreCase_ = this.isReadOnly_ = !1;
  var $m$$;
  $opt_uri$$ instanceof goog.Uri ? (this.ignoreCase_ = goog.isDef($opt_ignoreCase$$) ? $opt_ignoreCase$$ : $opt_uri$$.getIgnoreCase(), this.setScheme($opt_uri$$.getScheme()), this.setUserInfo($opt_uri$$.getUserInfo()), this.setDomain($opt_uri$$.getDomain()), this.setPort($opt_uri$$.getPort()), this.setPath($opt_uri$$.getPath()), this.setQueryData($opt_uri$$.getQueryData().clone()), this.setFragment($opt_uri$$.getFragment())) : $opt_uri$$ && ($m$$ = goog.uri.utils.split(String($opt_uri$$))) ? (this.ignoreCase_ = 
  !!$opt_ignoreCase$$, this.setScheme($m$$[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo($m$$[goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain($m$$[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort($m$$[goog.uri.utils.ComponentIndex.PORT]), this.setPath($m$$[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData($m$$[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment($m$$[goog.uri.utils.ComponentIndex.FRAGMENT] || 
  "", !0)) : (this.ignoreCase_ = !!$opt_ignoreCase$$, this.queryData_ = new goog.Uri.QueryData(null, null, this.ignoreCase_));
};
goog.Uri.preserveParameterTypesCompatibilityFlag = !1;
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.toString = function $goog$Uri$$toString$() {
  var $out$$ = [], $scheme$$ = this.getScheme();
  $scheme$$ && $out$$.push(goog.Uri.encodeSpecialChars_($scheme$$, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ = this.getDomain();
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ || "file" == $scheme$$) {
    $out$$.push("//"), ($scheme$$ = this.getUserInfo()) && $out$$.push(goog.Uri.encodeSpecialChars_($scheme$$, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@"), $out$$.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$))), $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ = this.getPort(), null != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ && $out$$.push(":", String($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ = this.getPath()) {
    this.hasDomain() && "/" != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$.charAt(0) && $out$$.push("/"), $out$$.push(goog.Uri.encodeSpecialChars_($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$, "/" == $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ = this.getEncodedQuery()) && $out$$.push("?", $domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$);
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$ = this.getFragment()) && $out$$.push("#", goog.Uri.encodeSpecialChars_($domain$jscomp$2_fragment$jscomp$2_path$jscomp$16_port_query$$, goog.Uri.reDisallowedInFragment_));
  return $out$$.join("");
};
goog.Uri.prototype.resolve = function $goog$Uri$$resolve$($relativeUri$$) {
  var $absoluteUri$$ = this.clone(), $overridden$$ = $relativeUri$$.hasScheme();
  $overridden$$ ? $absoluteUri$$.setScheme($relativeUri$$.getScheme()) : $overridden$$ = $relativeUri$$.hasUserInfo();
  $overridden$$ ? $absoluteUri$$.setUserInfo($relativeUri$$.getUserInfo()) : $overridden$$ = $relativeUri$$.hasDomain();
  $overridden$$ ? $absoluteUri$$.setDomain($relativeUri$$.getDomain()) : $overridden$$ = $relativeUri$$.hasPort();
  var $path$$ = $relativeUri$$.getPath();
  if ($overridden$$) {
    $absoluteUri$$.setPort($relativeUri$$.getPort());
  } else {
    if ($overridden$$ = $relativeUri$$.hasPath()) {
      if ("/" != $path$$.charAt(0)) {
        if (this.hasDomain() && !this.hasPath()) {
          $path$$ = "/" + $path$$;
        } else {
          var $lastSlashIndex$$ = $absoluteUri$$.getPath().lastIndexOf("/");
          -1 != $lastSlashIndex$$ && ($path$$ = $absoluteUri$$.getPath().substr(0, $lastSlashIndex$$ + 1) + $path$$);
        }
      }
      $path$$ = goog.Uri.removeDotSegments($path$$);
    }
  }
  $overridden$$ ? $absoluteUri$$.setPath($path$$) : $overridden$$ = $relativeUri$$.hasQuery();
  $overridden$$ ? $absoluteUri$$.setQueryData($relativeUri$$.getQueryData().clone()) : $overridden$$ = $relativeUri$$.hasFragment();
  $overridden$$ && $absoluteUri$$.setFragment($relativeUri$$.getFragment());
  return $absoluteUri$$;
};
goog.Uri.prototype.clone = function $goog$Uri$$clone$() {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function $goog$Uri$$getScheme$() {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function $goog$Uri$$setScheme$($newScheme$$, $opt_decode$$) {
  this.enforceReadOnly();
  if (this.scheme_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newScheme$$, !0) : $newScheme$$) {
    this.scheme_ = this.scheme_.replace(/:$/, "");
  }
  return this;
};
goog.Uri.prototype.hasScheme = function $goog$Uri$$hasScheme$() {
  return !!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function $goog$Uri$$getUserInfo$() {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function $goog$Uri$$setUserInfo$($newUserInfo$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.userInfo_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newUserInfo$$) : $newUserInfo$$;
  return this;
};
goog.Uri.prototype.hasUserInfo = function $goog$Uri$$hasUserInfo$() {
  return !!this.userInfo_;
};
goog.Uri.prototype.getDomain = function $goog$Uri$$getDomain$() {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function $goog$Uri$$setDomain$($newDomain$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.domain_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newDomain$$, !0) : $newDomain$$;
  return this;
};
goog.Uri.prototype.hasDomain = function $goog$Uri$$hasDomain$() {
  return !!this.domain_;
};
goog.Uri.prototype.getPort = function $goog$Uri$$getPort$() {
  return this.port_;
};
goog.Uri.prototype.setPort = function $goog$Uri$$setPort$($newPort$$) {
  this.enforceReadOnly();
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    this.port_ = $newPort$$;
  } else {
    this.port_ = null;
  }
  return this;
};
goog.Uri.prototype.hasPort = function $goog$Uri$$hasPort$() {
  return null != this.port_;
};
goog.Uri.prototype.getPath = function $goog$Uri$$getPath$() {
  return this.path_;
};
goog.Uri.prototype.setPath = function $goog$Uri$$setPath$($newPath$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.path_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newPath$$, !0) : $newPath$$;
  return this;
};
goog.Uri.prototype.hasPath = function $goog$Uri$$hasPath$() {
  return !!this.path_;
};
goog.Uri.prototype.hasQuery = function $goog$Uri$$hasQuery$() {
  return "" !== this.queryData_.toString();
};
goog.Uri.prototype.setQueryData = function $goog$Uri$$setQueryData$($queryData$$, $opt_decode$$) {
  this.enforceReadOnly();
  $queryData$$ instanceof goog.Uri.QueryData ? (this.queryData_ = $queryData$$, this.queryData_.setIgnoreCase(this.ignoreCase_)) : ($opt_decode$$ || ($queryData$$ = goog.Uri.encodeSpecialChars_($queryData$$, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData($queryData$$, null, this.ignoreCase_));
  return this;
};
goog.Uri.prototype.setQuery = function $goog$Uri$$setQuery$($newQuery$$, $opt_decode$$) {
  return this.setQueryData($newQuery$$, $opt_decode$$);
};
goog.Uri.prototype.getEncodedQuery = function $goog$Uri$$getEncodedQuery$() {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function $goog$Uri$$getDecodedQuery$() {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function $goog$Uri$$getQueryData$() {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function $goog$Uri$$getQuery$() {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function $goog$Uri$$setParameterValue$($key$$, $value$$) {
  this.enforceReadOnly();
  this.queryData_.set($key$$, $value$$);
  return this;
};
goog.Uri.prototype.setParameterValues = function $goog$Uri$$setParameterValues$($key$$, $values$$) {
  this.enforceReadOnly();
  goog.isArray($values$$) || ($values$$ = [String($values$$)]);
  this.queryData_.setValues($key$$, $values$$);
  return this;
};
goog.Uri.prototype.getParameterValues = function $goog$Uri$$getParameterValues$($name$$) {
  return this.queryData_.getValues($name$$);
};
goog.Uri.prototype.getParameterValue = function $goog$Uri$$getParameterValue$($paramName$$) {
  return this.queryData_.get($paramName$$);
};
goog.Uri.prototype.getFragment = function $goog$Uri$$getFragment$() {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function $goog$Uri$$setFragment$($newFragment$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.fragment_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newFragment$$) : $newFragment$$;
  return this;
};
goog.Uri.prototype.hasFragment = function $goog$Uri$$hasFragment$() {
  return !!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function $goog$Uri$$hasSameDomainAs$($uri2$$) {
  return (!this.hasDomain() && !$uri2$$.hasDomain() || this.getDomain() == $uri2$$.getDomain()) && (!this.hasPort() && !$uri2$$.hasPort() || this.getPort() == $uri2$$.getPort());
};
goog.Uri.prototype.makeUnique = function $goog$Uri$$makeUnique$() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function $goog$Uri$$removeParameter$($key$$) {
  this.enforceReadOnly();
  this.queryData_.remove($key$$);
  return this;
};
goog.Uri.prototype.setReadOnly = function $goog$Uri$$setReadOnly$($isReadOnly$$) {
  this.isReadOnly_ = $isReadOnly$$;
  return this;
};
goog.Uri.prototype.isReadOnly = function $goog$Uri$$isReadOnly$() {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function $goog$Uri$$enforceReadOnly$() {
  if (this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function $goog$Uri$$setIgnoreCase$($ignoreCase$$) {
  this.ignoreCase_ = $ignoreCase$$;
  this.queryData_ && this.queryData_.setIgnoreCase($ignoreCase$$);
  return this;
};
goog.Uri.prototype.getIgnoreCase = function $goog$Uri$$getIgnoreCase$() {
  return this.ignoreCase_;
};
goog.Uri.parse = function $goog$Uri$parse$($uri$$, $opt_ignoreCase$$) {
  return $uri$$ instanceof goog.Uri ? $uri$$.clone() : new goog.Uri($uri$$, $opt_ignoreCase$$);
};
goog.Uri.create = function $goog$Uri$create$($opt_scheme$$, $opt_userInfo$$, $opt_domain$$, $opt_port$$, $opt_path$$, $opt_query$$, $opt_fragment$$, $opt_ignoreCase$jscomp$2_uri$$) {
  $opt_ignoreCase$jscomp$2_uri$$ = new goog.Uri(null, $opt_ignoreCase$jscomp$2_uri$$);
  $opt_scheme$$ && $opt_ignoreCase$jscomp$2_uri$$.setScheme($opt_scheme$$);
  $opt_userInfo$$ && $opt_ignoreCase$jscomp$2_uri$$.setUserInfo($opt_userInfo$$);
  $opt_domain$$ && $opt_ignoreCase$jscomp$2_uri$$.setDomain($opt_domain$$);
  $opt_port$$ && $opt_ignoreCase$jscomp$2_uri$$.setPort($opt_port$$);
  $opt_path$$ && $opt_ignoreCase$jscomp$2_uri$$.setPath($opt_path$$);
  $opt_query$$ && $opt_ignoreCase$jscomp$2_uri$$.setQueryData($opt_query$$);
  $opt_fragment$$ && $opt_ignoreCase$jscomp$2_uri$$.setFragment($opt_fragment$$);
  return $opt_ignoreCase$jscomp$2_uri$$;
};
goog.Uri.resolve = function $goog$Uri$resolve$($base$$, $rel$$) {
  $base$$ instanceof goog.Uri || ($base$$ = goog.Uri.parse($base$$));
  $rel$$ instanceof goog.Uri || ($rel$$ = goog.Uri.parse($rel$$));
  return $base$$.resolve($rel$$);
};
goog.Uri.removeDotSegments = function $goog$Uri$removeDotSegments$($path$$) {
  if (".." == $path$$ || "." == $path$$) {
    return "";
  }
  if (goog.string.contains($path$$, "./") || goog.string.contains($path$$, "/.")) {
    var $leadingSlash$$ = goog.string.startsWith($path$$, "/");
    $path$$ = $path$$.split("/");
    for (var $out$$ = [], $pos$$ = 0; $pos$$ < $path$$.length;) {
      var $segment$$ = $path$$[$pos$$++];
      "." == $segment$$ ? $leadingSlash$$ && $pos$$ == $path$$.length && $out$$.push("") : ".." == $segment$$ ? ((1 < $out$$.length || 1 == $out$$.length && "" != $out$$[0]) && $out$$.pop(), $leadingSlash$$ && $pos$$ == $path$$.length && $out$$.push("")) : ($out$$.push($segment$$), $leadingSlash$$ = !0);
    }
    return $out$$.join("/");
  }
  return $path$$;
};
goog.Uri.decodeOrEmpty_ = function $goog$Uri$decodeOrEmpty_$($val$$, $opt_preserveReserved$$) {
  return $val$$ ? $opt_preserveReserved$$ ? decodeURI($val$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$$) : "";
};
goog.Uri.encodeSpecialChars_ = function $goog$Uri$encodeSpecialChars_$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return goog.isString($encoded_unescapedPart$$) ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, goog.Uri.encodeChar_), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = goog.Uri.removeDoubleEncoding_($encoded_unescapedPart$$)), $encoded_unescapedPart$$) : null;
};
goog.Uri.encodeChar_ = function $goog$Uri$encodeChar_$($ch$jscomp$4_n$$) {
  $ch$jscomp$4_n$$ = $ch$jscomp$4_n$$.charCodeAt(0);
  return "%" + ($ch$jscomp$4_n$$ >> 4 & 15).toString(16) + ($ch$jscomp$4_n$$ & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function $goog$Uri$removeDoubleEncoding_$($doubleEncodedString$$) {
  return $doubleEncodedString$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function $goog$Uri$haveSameDomain$($pieces1$$, $pieces2$$) {
  $pieces1$$ = goog.uri.utils.split($pieces1$$);
  $pieces2$$ = goog.uri.utils.split($pieces2$$);
  return $pieces1$$[goog.uri.utils.ComponentIndex.DOMAIN] == $pieces2$$[goog.uri.utils.ComponentIndex.DOMAIN] && $pieces1$$[goog.uri.utils.ComponentIndex.PORT] == $pieces2$$[goog.uri.utils.ComponentIndex.PORT];
};
goog.Uri.QueryData = function $goog$Uri$QueryData$($opt_query$$, $opt_uri$$, $opt_ignoreCase$$) {
  this.count_ = this.keyMap_ = null;
  this.encodedQuery_ = $opt_query$$ || null;
  this.ignoreCase_ = !!$opt_ignoreCase$$;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function $goog$Uri$QueryData$$ensureKeyMapInitialized_$() {
  if (!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.count_ = 0, this.encodedQuery_)) {
    var $self$$ = this;
    goog.uri.utils.parseQueryData(this.encodedQuery_, function($name$$, $value$$) {
      $self$$.add(goog.string.urlDecode($name$$), $value$$);
    });
  }
};
goog.Uri.QueryData.createFromMap = function $goog$Uri$QueryData$createFromMap$($map$jscomp$4_values$$, $keys$jscomp$9_opt_uri$$, $opt_ignoreCase$jscomp$4_queryData$$) {
  $keys$jscomp$9_opt_uri$$ = goog.structs.getKeys($map$jscomp$4_values$$);
  if ("undefined" == typeof $keys$jscomp$9_opt_uri$$) {
    throw Error("Keys are undefined");
  }
  $opt_ignoreCase$jscomp$4_queryData$$ = new goog.Uri.QueryData(null, null, $opt_ignoreCase$jscomp$4_queryData$$);
  $map$jscomp$4_values$$ = goog.structs.getValues($map$jscomp$4_values$$);
  for (var $i$$ = 0; $i$$ < $keys$jscomp$9_opt_uri$$.length; $i$$++) {
    var $key$$ = $keys$jscomp$9_opt_uri$$[$i$$], $value$$ = $map$jscomp$4_values$$[$i$$];
    goog.isArray($value$$) ? $opt_ignoreCase$jscomp$4_queryData$$.setValues($key$$, $value$$) : $opt_ignoreCase$jscomp$4_queryData$$.add($key$$, $value$$);
  }
  return $opt_ignoreCase$jscomp$4_queryData$$;
};
goog.Uri.QueryData.createFromKeysValues = function $goog$Uri$QueryData$createFromKeysValues$($keys$$, $values$$, $opt_uri$jscomp$3_queryData$$, $i$jscomp$129_opt_ignoreCase$$) {
  if ($keys$$.length != $values$$.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  $opt_uri$jscomp$3_queryData$$ = new goog.Uri.QueryData(null, null, $i$jscomp$129_opt_ignoreCase$$);
  for ($i$jscomp$129_opt_ignoreCase$$ = 0; $i$jscomp$129_opt_ignoreCase$$ < $keys$$.length; $i$jscomp$129_opt_ignoreCase$$++) {
    $opt_uri$jscomp$3_queryData$$.add($keys$$[$i$jscomp$129_opt_ignoreCase$$], $values$$[$i$jscomp$129_opt_ignoreCase$$]);
  }
  return $opt_uri$jscomp$3_queryData$$;
};
goog.Uri.QueryData.prototype.getCount = function $goog$Uri$QueryData$$getCount$() {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function $goog$Uri$QueryData$$add$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  $key$$ = this.getKeyName_($key$$);
  var $values$$ = this.keyMap_.get($key$$);
  $values$$ || this.keyMap_.set($key$$, $values$$ = []);
  $values$$.push($value$$);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.remove = function $goog$Uri$QueryData$$remove$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$) ? (this.invalidateCache_(), this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get($key$$).length, this.keyMap_.remove($key$$)) : !1;
};
goog.Uri.QueryData.prototype.clear = function $goog$Uri$QueryData$$clear$() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function $goog$Uri$QueryData$$isEmpty$() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_;
};
goog.Uri.QueryData.prototype.containsKey = function $goog$Uri$QueryData$$containsKey$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$);
};
goog.Uri.QueryData.prototype.containsValue = function $goog$Uri$QueryData$$containsValue$($value$$) {
  var $vals$$ = this.getValues();
  return goog.array.contains($vals$$, $value$$);
};
goog.Uri.QueryData.prototype.forEach = function $goog$Uri$QueryData$$forEach$($f$$, $opt_scope$$) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function($values$$, $key$$) {
    goog.array.forEach($values$$, function($value$$) {
      $f$$.call($opt_scope$$, $value$$, $key$$, this);
    }, this);
  }, this);
};
goog.Uri.QueryData.prototype.getKeys = function $goog$Uri$QueryData$$getKeys$() {
  this.ensureKeyMapInitialized_();
  for (var $vals$$ = this.keyMap_.getValues(), $keys$$ = this.keyMap_.getKeys(), $rv$$ = [], $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    for (var $val$$ = $vals$$[$i$$], $j$$ = 0; $j$$ < $val$$.length; $j$$++) {
      $rv$$.push($keys$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.Uri.QueryData.prototype.getValues = function $goog$Uri$QueryData$$getValues$($opt_key$jscomp$2_values$$) {
  this.ensureKeyMapInitialized_();
  var $rv$$ = [];
  if (goog.isString($opt_key$jscomp$2_values$$)) {
    this.containsKey($opt_key$jscomp$2_values$$) && ($rv$$ = goog.array.concat($rv$$, this.keyMap_.get(this.getKeyName_($opt_key$jscomp$2_values$$))));
  } else {
    $opt_key$jscomp$2_values$$ = this.keyMap_.getValues();
    for (var $i$$ = 0; $i$$ < $opt_key$jscomp$2_values$$.length; $i$$++) {
      $rv$$ = goog.array.concat($rv$$, $opt_key$jscomp$2_values$$[$i$$]);
    }
  }
  return $rv$$;
};
goog.Uri.QueryData.prototype.set = function $goog$Uri$QueryData$$set$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  $key$$ = this.getKeyName_($key$$);
  this.containsKey($key$$) && (this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get($key$$).length);
  this.keyMap_.set($key$$, [$value$$]);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.get = function $goog$Uri$QueryData$$get$($key$jscomp$95_values$$, $opt_default$$) {
  $key$jscomp$95_values$$ = $key$jscomp$95_values$$ ? this.getValues($key$jscomp$95_values$$) : [];
  return goog.Uri.preserveParameterTypesCompatibilityFlag ? 0 < $key$jscomp$95_values$$.length ? $key$jscomp$95_values$$[0] : $opt_default$$ : 0 < $key$jscomp$95_values$$.length ? String($key$jscomp$95_values$$[0]) : $opt_default$$;
};
goog.Uri.QueryData.prototype.setValues = function $goog$Uri$QueryData$$setValues$($key$$, $values$$) {
  this.remove($key$$);
  0 < $values$$.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_($key$$), goog.array.clone($values$$)), this.count_ = goog.asserts.assertNumber(this.count_) + $values$$.length);
};
goog.Uri.QueryData.prototype.toString = function $goog$Uri$QueryData$$toString$() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  for (var $sb$$ = [], $keys$$ = this.keyMap_.getKeys(), $i$$ = 0; $i$$ < $keys$$.length; $i$$++) {
    var $key$jscomp$97_val$$ = $keys$$[$i$$], $encodedKey$$ = goog.string.urlEncode($key$jscomp$97_val$$);
    $key$jscomp$97_val$$ = this.getValues($key$jscomp$97_val$$);
    for (var $j$$ = 0; $j$$ < $key$jscomp$97_val$$.length; $j$$++) {
      var $param$$ = $encodedKey$$;
      "" !== $key$jscomp$97_val$$[$j$$] && ($param$$ += "=" + goog.string.urlEncode($key$jscomp$97_val$$[$j$$]));
      $sb$$.push($param$$);
    }
  }
  return this.encodedQuery_ = $sb$$.join("&");
};
goog.Uri.QueryData.prototype.toDecodedString = function $goog$Uri$QueryData$$toDecodedString$() {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function $goog$Uri$QueryData$$invalidateCache_$() {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function $goog$Uri$QueryData$$filterKeys$($keys$$) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function($value$$, $key$$) {
    goog.array.contains($keys$$, $key$$) || this.remove($key$$);
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function $goog$Uri$QueryData$$clone$() {
  var $rv$$ = new goog.Uri.QueryData;
  $rv$$.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && ($rv$$.keyMap_ = this.keyMap_.clone(), $rv$$.count_ = this.count_);
  return $rv$$;
};
goog.Uri.QueryData.prototype.getKeyName_ = function $goog$Uri$QueryData$$getKeyName_$($arg$$) {
  $arg$$ = String($arg$$);
  this.ignoreCase_ && ($arg$$ = $arg$$.toLowerCase());
  return $arg$$;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function $goog$Uri$QueryData$$setIgnoreCase$($ignoreCase$$) {
  $ignoreCase$$ && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), this.keyMap_.forEach(function($value$$, $key$$) {
    var $lowerCase$$ = $key$$.toLowerCase();
    $key$$ != $lowerCase$$ && (this.remove($key$$), this.setValues($lowerCase$$, $value$$));
  }, this));
  this.ignoreCase_ = $ignoreCase$$;
};
goog.Uri.QueryData.prototype.extend = function $goog$Uri$QueryData$$extend$($var_args$$) {
  for (var $i$$ = 0; $i$$ < arguments.length; $i$$++) {
    goog.structs.forEach(arguments[$i$$], function($value$$, $key$$) {
      this.add($key$$, $value$$);
    }, this);
  }
};
goog.json = {};
goog.json.USE_NATIVE_JSON = !1;
goog.json.TRY_NATIVE_JSON = !1;
goog.json.isValid = function $goog$json$isValid$($s$$) {
  return /^\s*$/.test($s$$) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test($s$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
goog.json.errorLogger_ = goog.nullFunction;
goog.json.setErrorLogger = function $goog$json$setErrorLogger$($errorLogger$$) {
  goog.json.errorLogger_ = $errorLogger$$;
};
goog.json.parse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function($o$jscomp$10_s$$) {
  if (goog.json.TRY_NATIVE_JSON) {
    try {
      return goog.global.JSON.parse($o$jscomp$10_s$$);
    } catch ($ex$$) {
      var $error$$ = $ex$$;
    }
  }
  $o$jscomp$10_s$$ = String($o$jscomp$10_s$$);
  if (goog.json.isValid($o$jscomp$10_s$$)) {
    try {
      var $result$$ = eval("(" + $o$jscomp$10_s$$ + ")");
      $error$$ && goog.json.errorLogger_("Invalid JSON: " + $o$jscomp$10_s$$, $error$$);
      return $result$$;
    } catch ($ex$2$$) {
    }
  }
  throw Error("Invalid JSON string: " + $o$jscomp$10_s$$);
};
goog.json.unsafeParse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function($s$$) {
  if (goog.json.TRY_NATIVE_JSON) {
    try {
      return goog.global.JSON.parse($s$$);
    } catch ($ex$$) {
      var $error$$ = $ex$$;
    }
  }
  var $result$$ = eval("(" + $s$$ + ")");
  $error$$ && goog.json.errorLogger_("Invalid JSON: " + $s$$, $error$$);
  return $result$$;
};
goog.json.serialize = goog.json.USE_NATIVE_JSON ? goog.global.JSON.stringify : function($object$$, $opt_replacer$$) {
  return (new goog.json.Serializer($opt_replacer$$)).serialize($object$$);
};
goog.json.Serializer = function $goog$json$Serializer$($opt_replacer$$) {
  this.replacer_ = $opt_replacer$$;
};
goog.json.Serializer.prototype.serialize = function $goog$json$Serializer$$serialize$($object$$) {
  var $sb$$ = [];
  this.serializeInternal($object$$, $sb$$);
  return $sb$$.join("");
};
goog.json.Serializer.prototype.serializeInternal = function $goog$json$Serializer$$serializeInternal$($object$$, $sb$$) {
  if (null == $object$$) {
    $sb$$.push("null");
  } else {
    if ("object" == typeof $object$$) {
      if (goog.isArray($object$$)) {
        this.serializeArray($object$$, $sb$$);
        return;
      }
      if ($object$$ instanceof String || $object$$ instanceof Number || $object$$ instanceof Boolean) {
        $object$$ = $object$$.valueOf();
      } else {
        this.serializeObject_($object$$, $sb$$);
        return;
      }
    }
    switch(typeof $object$$) {
      case "string":
        this.serializeString_($object$$, $sb$$);
        break;
      case "number":
        this.serializeNumber_($object$$, $sb$$);
        break;
      case "boolean":
        $sb$$.push(String($object$$));
        break;
      case "function":
        $sb$$.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof $object$$);
    }
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function $goog$json$Serializer$$serializeString_$($s$$, $sb$$) {
  $sb$$.push('"', $s$$.replace(goog.json.Serializer.charsToReplace_, function($c$$) {
    var $rv$$ = goog.json.Serializer.charToJsonCharCache_[$c$$];
    $rv$$ || ($rv$$ = "\\u" + ($c$$.charCodeAt(0) | 65536).toString(16).substr(1), goog.json.Serializer.charToJsonCharCache_[$c$$] = $rv$$);
    return $rv$$;
  }), '"');
};
goog.json.Serializer.prototype.serializeNumber_ = function $goog$json$Serializer$$serializeNumber_$($n$$, $sb$$) {
  $sb$$.push(isFinite($n$$) && !isNaN($n$$) ? String($n$$) : "null");
};
goog.json.Serializer.prototype.serializeArray = function $goog$json$Serializer$$serializeArray$($arr$$, $sb$$) {
  var $l$$ = $arr$$.length;
  $sb$$.push("[");
  for (var $sep_value$$ = "", $i$$ = 0; $i$$ < $l$$; $i$$++) {
    $sb$$.push($sep_value$$), $sep_value$$ = $arr$$[$i$$], this.serializeInternal(this.replacer_ ? this.replacer_.call($arr$$, String($i$$), $sep_value$$) : $sep_value$$, $sb$$), $sep_value$$ = ",";
  }
  $sb$$.push("]");
};
goog.json.Serializer.prototype.serializeObject_ = function $goog$json$Serializer$$serializeObject_$($obj$$, $sb$$) {
  $sb$$.push("{");
  var $sep$$ = "", $key$$;
  for ($key$$ in $obj$$) {
    if (Object.prototype.hasOwnProperty.call($obj$$, $key$$)) {
      var $value$$ = $obj$$[$key$$];
      "function" != typeof $value$$ && ($sb$$.push($sep$$), this.serializeString_($key$$, $sb$$), $sb$$.push(":"), this.serializeInternal(this.replacer_ ? this.replacer_.call($obj$$, $key$$, $value$$) : $value$$, $sb$$), $sep$$ = ",");
    }
  }
  $sb$$.push("}");
};
goog.net = {};
goog.net.EventType = {COMPLETE:"complete", SUCCESS:"success", ERROR:"error", ABORT:"abort", READY:"ready", READY_STATE_CHANGE:"readystatechange", TIMEOUT:"timeout", INCREMENTAL_DATA:"incrementaldata", PROGRESS:"progress", DOWNLOAD_PROGRESS:"downloadprogress", UPLOAD_PROGRESS:"uploadprogress"};
goog.net.ErrorCode = {NO_ERROR:0, ACCESS_DENIED:1, FILE_NOT_FOUND:2, FF_SILENT_ERROR:3, CUSTOM_ERROR:4, EXCEPTION:5, HTTP_ERROR:6, ABORT:7, TIMEOUT:8, OFFLINE:9};
goog.net.ErrorCode.getDebugMessage = function $goog$net$ErrorCode$getDebugMessage$($errorCode$$) {
  switch($errorCode$$) {
    case goog.net.ErrorCode.NO_ERROR:
      return "No Error";
    case goog.net.ErrorCode.ACCESS_DENIED:
      return "Access denied to content document";
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return "File not found";
    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return "Firefox silently errored";
    case goog.net.ErrorCode.CUSTOM_ERROR:
      return "Application custom error";
    case goog.net.ErrorCode.EXCEPTION:
      return "An exception occurred";
    case goog.net.ErrorCode.HTTP_ERROR:
      return "Http response at 400 or 500 level";
    case goog.net.ErrorCode.ABORT:
      return "Request was aborted";
    case goog.net.ErrorCode.TIMEOUT:
      return "Request timed out";
    case goog.net.ErrorCode.OFFLINE:
      return "The resource is not available offline";
    default:
      return "Unrecognized error code";
  }
};
goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, REQUEST_TIMEOUT:408, 
CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, PRECONDITION_REQUIRED:428, TOO_MANY_REQUESTS:429, REQUEST_HEADER_FIELDS_TOO_LARGE:431, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505, NETWORK_AUTHENTICATION_REQUIRED:511, QUIRK_IE_NO_CONTENT:1223};
goog.net.HttpStatus.isSuccess = function $goog$net$HttpStatus$isSuccess$($status$$) {
  switch($status$$) {
    case goog.net.HttpStatus.OK:
    case goog.net.HttpStatus.CREATED:
    case goog.net.HttpStatus.ACCEPTED:
    case goog.net.HttpStatus.NO_CONTENT:
    case goog.net.HttpStatus.PARTIAL_CONTENT:
    case goog.net.HttpStatus.NOT_MODIFIED:
    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:
      return !0;
    default:
      return !1;
  }
};
goog.net.XhrLike = function $goog$net$XhrLike$() {
};
goog.net.XhrLike.prototype.open = function $goog$net$XhrLike$$open$($method$$, $url$$, $opt_async$$, $opt_user$$, $opt_password$$) {
};
goog.net.XhrLike.prototype.send = function $goog$net$XhrLike$$send$($opt_data$$) {
};
goog.net.XhrLike.prototype.abort = function $goog$net$XhrLike$$abort$() {
};
goog.net.XhrLike.prototype.setRequestHeader = function $goog$net$XhrLike$$setRequestHeader$($header$$, $value$$) {
};
goog.net.XhrLike.prototype.getResponseHeader = function $goog$net$XhrLike$$getResponseHeader$($header$$) {
};
goog.net.XhrLike.prototype.getAllResponseHeaders = function $goog$net$XhrLike$$getAllResponseHeaders$() {
};
goog.net.XmlHttpFactory = function $goog$net$XmlHttpFactory$() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
goog.net.XmlHttpFactory.prototype.getOptions = function $goog$net$XmlHttpFactory$$getOptions$() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());
};
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;
goog.net.WrapperXmlHttpFactory = function $goog$net$WrapperXmlHttpFactory$($xhrFactory$$, $optionsFactory$$) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = $xhrFactory$$;
  this.optionsFactory_ = $optionsFactory$$;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function $goog$net$WrapperXmlHttpFactory$$createInstance$() {
  return this.xhrFactory_();
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function $goog$net$WrapperXmlHttpFactory$$getOptions$() {
  return this.optionsFactory_();
};
goog.net.XmlHttp = function $goog$net$XmlHttp$() {
  return goog.net.XmlHttp.factory_.createInstance();
};
goog.net.XmlHttp.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttpDefines = {};
goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttp.getOptions = function $goog$net$XmlHttp$getOptions$() {
  return goog.net.XmlHttp.factory_.getOptions();
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.setFactory = function $goog$net$XmlHttp$setFactory$($factory$$, $optionsFactory$$) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert($factory$$), goog.asserts.assert($optionsFactory$$)));
};
goog.net.XmlHttp.setGlobalFactory = function $goog$net$XmlHttp$setGlobalFactory$($factory$$) {
  goog.net.XmlHttp.factory_ = $factory$$;
};
goog.net.DefaultXmlHttpFactory = function $goog$net$DefaultXmlHttpFactory$() {
  goog.net.XmlHttpFactory.call(this);
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function $goog$net$DefaultXmlHttpFactory$$createInstance$() {
  var $progId$$ = this.getProgId_();
  return $progId$$ ? new ActiveXObject($progId$$) : new XMLHttpRequest;
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function $goog$net$DefaultXmlHttpFactory$$internalGetOptions$() {
  var $options$$ = {};
  this.getProgId_() && ($options$$[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, $options$$[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
  return $options$$;
};
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function $goog$net$DefaultXmlHttpFactory$$getProgId_$() {
  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {
    return "";
  }
  if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$$ = 0; $i$$ < $ACTIVE_X_IDENTS$$.length; $i$$++) {
      var $candidate$$ = $ACTIVE_X_IDENTS$$[$i$$];
      try {
        return new ActiveXObject($candidate$$), this.ieProgId_ = $candidate$$;
      } catch ($e$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.ieProgId_;
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
goog.net.XhrIo = function $goog$net$XhrIo$($opt_xmlHttpFactory$$) {
  goog.events.EventTarget.call(this);
  this.headers = new goog.structs.Map;
  this.xmlHttpFactory_ = $opt_xmlHttpFactory$$ || null;
  this.active_ = !1;
  this.xhrOptions_ = this.xhr_ = null;
  this.lastMethod_ = this.lastUri_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastError_ = "";
  this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
  this.timeoutInterval_ = 0;
  this.timeoutId_ = null;
  this.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
  this.useXhr2Timeout_ = this.progressEventsEnabled_ = this.withCredentials_ = !1;
};
goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
goog.net.XhrIo.ResponseType = {DEFAULT:"", TEXT:"text", DOCUMENT:"document", BLOB:"blob", ARRAY_BUFFER:"arraybuffer"};
goog.net.XhrIo.prototype.logger_ = goog.log.getLogger("goog.net.XhrIo");
goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
goog.net.XhrIo.CONTENT_TRANSFER_ENCODING = "Content-Transfer-Encoding";
goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?$/i;
goog.net.XhrIo.METHODS_WITH_FORM_DATA = ["POST", "PUT"];
goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
goog.net.XhrIo.XHR2_TIMEOUT_ = "timeout";
goog.net.XhrIo.XHR2_ON_TIMEOUT_ = "ontimeout";
goog.net.XhrIo.sendInstances_ = [];
goog.net.XhrIo.send = function $goog$net$XhrIo$send$($url$$, $opt_callback$$, $opt_method$$, $opt_content$$, $opt_headers$$, $opt_timeoutInterval$$, $opt_withCredentials$$) {
  var $x$$ = new goog.net.XhrIo;
  goog.net.XhrIo.sendInstances_.push($x$$);
  $opt_callback$$ && $x$$.listen(goog.net.EventType.COMPLETE, $opt_callback$$);
  $x$$.listenOnce(goog.net.EventType.READY, $x$$.cleanupSend_);
  $opt_timeoutInterval$$ && $x$$.setTimeoutInterval($opt_timeoutInterval$$);
  $opt_withCredentials$$ && $x$$.setWithCredentials($opt_withCredentials$$);
  $x$$.send($url$$, $opt_method$$, $opt_content$$, $opt_headers$$);
  return $x$$;
};
goog.net.XhrIo.cleanup = function $goog$net$XhrIo$cleanup$() {
  for (var $instances$$ = goog.net.XhrIo.sendInstances_; $instances$$.length;) {
    $instances$$.pop().dispose();
  }
};
goog.net.XhrIo.protectEntryPoints = function $goog$net$XhrIo$protectEntryPoints$($errorHandler$$) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = $errorHandler$$.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_);
};
goog.net.XhrIo.prototype.cleanupSend_ = function $goog$net$XhrIo$$cleanupSend_$() {
  this.dispose();
  goog.array.remove(goog.net.XhrIo.sendInstances_, this);
};
goog.net.XhrIo.prototype.getTimeoutInterval = function $goog$net$XhrIo$$getTimeoutInterval$() {
  return this.timeoutInterval_;
};
goog.net.XhrIo.prototype.setTimeoutInterval = function $goog$net$XhrIo$$setTimeoutInterval$($ms$$) {
  this.timeoutInterval_ = Math.max(0, $ms$$);
};
goog.net.XhrIo.prototype.setResponseType = function $goog$net$XhrIo$$setResponseType$($type$$) {
  this.responseType_ = $type$$;
};
goog.net.XhrIo.prototype.getResponseType = function $goog$net$XhrIo$$getResponseType$() {
  return this.responseType_;
};
goog.net.XhrIo.prototype.setWithCredentials = function $goog$net$XhrIo$$setWithCredentials$($withCredentials$$) {
  this.withCredentials_ = $withCredentials$$;
};
goog.net.XhrIo.prototype.getWithCredentials = function $goog$net$XhrIo$$getWithCredentials$() {
  return this.withCredentials_;
};
goog.net.XhrIo.prototype.setProgressEventsEnabled = function $goog$net$XhrIo$$setProgressEventsEnabled$($enabled$$) {
  this.progressEventsEnabled_ = $enabled$$;
};
goog.net.XhrIo.prototype.getProgressEventsEnabled = function $goog$net$XhrIo$$getProgressEventsEnabled$() {
  return this.progressEventsEnabled_;
};
goog.net.XhrIo.prototype.send = function $goog$net$XhrIo$$send$($content$jscomp$7_url$$, $method$jscomp$3_opt_method$$, $contentIsFormData_opt_content$$, $contentTypeKey_opt_headers$$) {
  if (this.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + $content$jscomp$7_url$$);
  }
  $method$jscomp$3_opt_method$$ = $method$jscomp$3_opt_method$$ ? $method$jscomp$3_opt_method$$.toUpperCase() : "GET";
  this.lastUri_ = $content$jscomp$7_url$$;
  this.lastError_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastMethod_ = $method$jscomp$3_opt_method$$;
  this.errorDispatched_ = !1;
  this.active_ = !0;
  this.xhr_ = this.createXhr();
  this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : goog.net.XmlHttp.getOptions();
  this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
  this.getProgressEventsEnabled() && "onprogress" in this.xhr_ && (this.xhr_.onprogress = goog.bind(function($e$$) {
    this.onProgressHandler_($e$$, !0);
  }, this), this.xhr_.upload && (this.xhr_.upload.onprogress = goog.bind(this.onProgressHandler_, this)));
  try {
    goog.log.fine(this.logger_, this.formatMsg_("Opening Xhr")), this.inOpen_ = !0, this.xhr_.open($method$jscomp$3_opt_method$$, String($content$jscomp$7_url$$), !0), this.inOpen_ = !1;
  } catch ($err$$) {
    goog.log.fine(this.logger_, this.formatMsg_("Error opening Xhr: " + $err$$.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, $err$$);
    return;
  }
  $content$jscomp$7_url$$ = $contentIsFormData_opt_content$$ || "";
  var $headers$$ = this.headers.clone();
  $contentTypeKey_opt_headers$$ && goog.structs.forEach($contentTypeKey_opt_headers$$, function($value$$, $key$$) {
    $headers$$.set($key$$, $value$$);
  });
  $contentTypeKey_opt_headers$$ = goog.array.find($headers$$.getKeys(), goog.net.XhrIo.isContentTypeHeader_);
  $contentIsFormData_opt_content$$ = goog.global.FormData && $content$jscomp$7_url$$ instanceof goog.global.FormData;
  !goog.array.contains(goog.net.XhrIo.METHODS_WITH_FORM_DATA, $method$jscomp$3_opt_method$$) || $contentTypeKey_opt_headers$$ || $contentIsFormData_opt_content$$ || $headers$$.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE);
  $headers$$.forEach(function($value$$, $key$$) {
    this.xhr_.setRequestHeader($key$$, $value$$);
  }, this);
  this.responseType_ && (this.xhr_.responseType = this.responseType_);
  "withCredentials" in this.xhr_ && this.xhr_.withCredentials !== this.withCredentials_ && (this.xhr_.withCredentials = this.withCredentials_);
  try {
    this.cleanUpTimeoutTimer_(), 0 < this.timeoutInterval_ && (this.useXhr2Timeout_ = goog.net.XhrIo.shouldUseXhr2Timeout_(this.xhr_), goog.log.fine(this.logger_, this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_)), this.useXhr2Timeout_ ? (this.xhr_[goog.net.XhrIo.XHR2_TIMEOUT_] = this.timeoutInterval_, this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = goog.bind(this.timeout_, this)) : this.timeoutId_ = goog.Timer.callOnce(this.timeout_, this.timeoutInterval_, 
    this)), goog.log.fine(this.logger_, this.formatMsg_("Sending request")), this.inSend_ = !0, this.xhr_.send($content$jscomp$7_url$$), this.inSend_ = !1;
  } catch ($err$3$$) {
    goog.log.fine(this.logger_, this.formatMsg_("Send error: " + $err$3$$.message)), this.error_(goog.net.ErrorCode.EXCEPTION, $err$3$$);
  }
};
goog.net.XhrIo.shouldUseXhr2Timeout_ = function $goog$net$XhrIo$shouldUseXhr2Timeout_$($xhr$$) {
  return goog.userAgent.IE && goog.userAgent.isVersionOrHigher(9) && goog.isNumber($xhr$$[goog.net.XhrIo.XHR2_TIMEOUT_]) && goog.isDef($xhr$$[goog.net.XhrIo.XHR2_ON_TIMEOUT_]);
};
goog.net.XhrIo.isContentTypeHeader_ = function $goog$net$XhrIo$isContentTypeHeader_$($header$$) {
  return goog.string.caseInsensitiveEquals(goog.net.XhrIo.CONTENT_TYPE_HEADER, $header$$);
};
goog.net.XhrIo.prototype.createXhr = function $goog$net$XhrIo$$createXhr$() {
  return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : goog.net.XmlHttp();
};
goog.net.XhrIo.prototype.timeout_ = function $goog$net$XhrIo$$timeout_$() {
  "undefined" != typeof goog && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT, goog.log.fine(this.logger_, this.formatMsg_(this.lastError_)), this.dispatchEvent(goog.net.EventType.TIMEOUT), this.abort(goog.net.ErrorCode.TIMEOUT));
};
goog.net.XhrIo.prototype.error_ = function $goog$net$XhrIo$$error_$($errorCode$$, $err$$) {
  this.active_ = !1;
  this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
  this.lastError_ = $err$$;
  this.lastErrorCode_ = $errorCode$$;
  this.dispatchErrors_();
  this.cleanUpXhr_();
};
goog.net.XhrIo.prototype.dispatchErrors_ = function $goog$net$XhrIo$$dispatchErrors_$() {
  this.errorDispatched_ || (this.errorDispatched_ = !0, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ERROR));
};
goog.net.XhrIo.prototype.abort = function $goog$net$XhrIo$$abort$($opt_failureCode$$) {
  this.xhr_ && this.active_ && (goog.log.fine(this.logger_, this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.lastErrorCode_ = $opt_failureCode$$ || goog.net.ErrorCode.ABORT, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ABORT), this.cleanUpXhr_());
};
goog.net.XhrIo.prototype.disposeInternal = function $goog$net$XhrIo$$disposeInternal$() {
  this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), this.cleanUpXhr_(!0));
  goog.net.XhrIo.superClass_.disposeInternal.call(this);
};
goog.net.XhrIo.prototype.onReadyStateChange_ = function $goog$net$XhrIo$$onReadyStateChange_$() {
  if (!this.isDisposed()) {
    if (this.inOpen_ || this.inSend_ || this.inAbort_) {
      this.onReadyStateChangeHelper_();
    } else {
      this.onReadyStateChangeEntryPoint_();
    }
  }
};
goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function $goog$net$XhrIo$$onReadyStateChangeEntryPoint_$() {
  this.onReadyStateChangeHelper_();
};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function $goog$net$XhrIo$$onReadyStateChangeHelper_$() {
  if (this.active_ && "undefined" != typeof goog) {
    if (this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && 2 == this.getStatus()) {
      goog.log.fine(this.logger_, this.formatMsg_("Local request error detected and ignored"));
    } else {
      if (this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE) {
        goog.Timer.callOnce(this.onReadyStateChange_, 0, this);
      } else {
        if (this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE), this.isComplete()) {
          goog.log.fine(this.logger_, this.formatMsg_("Request complete"));
          this.active_ = !1;
          try {
            this.isSuccess() ? (this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.SUCCESS)) : (this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR, this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_());
          } finally {
            this.cleanUpXhr_();
          }
        }
      }
    }
  }
};
goog.net.XhrIo.prototype.onProgressHandler_ = function $goog$net$XhrIo$$onProgressHandler_$($e$$, $opt_isDownload$$) {
  goog.asserts.assert($e$$.type === goog.net.EventType.PROGRESS, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
  this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_($e$$, goog.net.EventType.PROGRESS));
  this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_($e$$, $opt_isDownload$$ ? goog.net.EventType.DOWNLOAD_PROGRESS : goog.net.EventType.UPLOAD_PROGRESS));
};
goog.net.XhrIo.buildProgressEvent_ = function $goog$net$XhrIo$buildProgressEvent_$($e$$, $eventType$$) {
  return {type:$eventType$$, lengthComputable:$e$$.lengthComputable, loaded:$e$$.loaded, total:$e$$.total};
};
goog.net.XhrIo.prototype.cleanUpXhr_ = function $goog$net$XhrIo$$cleanUpXhr_$($opt_fromDispose$$) {
  if (this.xhr_) {
    this.cleanUpTimeoutTimer_();
    var $xhr$$ = this.xhr_, $clearedOnReadyStateChange$$ = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
    this.xhrOptions_ = this.xhr_ = null;
    $opt_fromDispose$$ || this.dispatchEvent(goog.net.EventType.READY);
    try {
      $xhr$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$$) {
      goog.log.error(this.logger_, "Problem encountered resetting onreadystatechange: " + $e$$.message);
    }
  }
};
goog.net.XhrIo.prototype.cleanUpTimeoutTimer_ = function $goog$net$XhrIo$$cleanUpTimeoutTimer_$() {
  this.xhr_ && this.useXhr2Timeout_ && (this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = null);
  goog.isNumber(this.timeoutId_) && (goog.Timer.clear(this.timeoutId_), this.timeoutId_ = null);
};
goog.net.XhrIo.prototype.isActive = function $goog$net$XhrIo$$isActive$() {
  return !!this.xhr_;
};
goog.net.XhrIo.prototype.isComplete = function $goog$net$XhrIo$$isComplete$() {
  return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE;
};
goog.net.XhrIo.prototype.isSuccess = function $goog$net$XhrIo$$isSuccess$() {
  var $status$$ = this.getStatus();
  return goog.net.HttpStatus.isSuccess($status$$) || 0 === $status$$ && !this.isLastUriEffectiveSchemeHttp_();
};
goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function $goog$net$XhrIo$$isLastUriEffectiveSchemeHttp_$() {
  var $scheme$$ = goog.uri.utils.getEffectiveScheme(String(this.lastUri_));
  return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test($scheme$$);
};
goog.net.XhrIo.prototype.getReadyState = function $goog$net$XhrIo$$getReadyState$() {
  return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED;
};
goog.net.XhrIo.prototype.getStatus = function $goog$net$XhrIo$$getStatus$() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1;
  } catch ($e$$) {
    return -1;
  }
};
goog.net.XhrIo.prototype.getStatusText = function $goog$net$XhrIo$$getStatusText$() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : "";
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get status: " + $e$$.message), "";
  }
};
goog.net.XhrIo.prototype.getLastUri = function $goog$net$XhrIo$$getLastUri$() {
  return String(this.lastUri_);
};
goog.net.XhrIo.prototype.getResponseText = function $goog$net$XhrIo$$getResponseText$() {
  try {
    return this.xhr_ ? this.xhr_.responseText : "";
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get responseText: " + $e$$.message), "";
  }
};
goog.net.XhrIo.prototype.getResponseBody = function $goog$net$XhrIo$$getResponseBody$() {
  try {
    if (this.xhr_ && "responseBody" in this.xhr_) {
      return this.xhr_.responseBody;
    }
  } catch ($e$$) {
    goog.log.fine(this.logger_, "Can not get responseBody: " + $e$$.message);
  }
  return null;
};
goog.net.XhrIo.prototype.getResponseXml = function $goog$net$XhrIo$$getResponseXml$() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null;
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get responseXML: " + $e$$.message), null;
  }
};
goog.net.XhrIo.prototype.getResponseJson = function $goog$net$XhrIo$$getResponseJson$($opt_xssiPrefix$$) {
  if (this.xhr_) {
    var $responseText$$ = this.xhr_.responseText;
    $opt_xssiPrefix$$ && 0 == $responseText$$.indexOf($opt_xssiPrefix$$) && ($responseText$$ = $responseText$$.substring($opt_xssiPrefix$$.length));
    return goog.json.parse($responseText$$);
  }
};
goog.net.XhrIo.prototype.getResponse = function $goog$net$XhrIo$$getResponse$() {
  try {
    if (!this.xhr_) {
      return null;
    }
    if ("response" in this.xhr_) {
      return this.xhr_.response;
    }
    switch(this.responseType_) {
      case goog.net.XhrIo.ResponseType.DEFAULT:
      case goog.net.XhrIo.ResponseType.TEXT:
        return this.xhr_.responseText;
      case goog.net.XhrIo.ResponseType.ARRAY_BUFFER:
        if ("mozResponseArrayBuffer" in this.xhr_) {
          return this.xhr_.mozResponseArrayBuffer;
        }
    }
    goog.log.error(this.logger_, "Response type " + this.responseType_ + " is not supported on this browser");
    return null;
  } catch ($e$$) {
    return goog.log.fine(this.logger_, "Can not get response: " + $e$$.message), null;
  }
};
goog.net.XhrIo.prototype.getResponseHeader = function $goog$net$XhrIo$$getResponseHeader$($key$jscomp$104_value$$) {
  if (this.xhr_ && this.isComplete()) {
    return $key$jscomp$104_value$$ = this.xhr_.getResponseHeader($key$jscomp$104_value$$), goog.isNull($key$jscomp$104_value$$) ? void 0 : $key$jscomp$104_value$$;
  }
};
goog.net.XhrIo.prototype.getAllResponseHeaders = function $goog$net$XhrIo$$getAllResponseHeaders$() {
  return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : "";
};
goog.net.XhrIo.prototype.getResponseHeaders = function $goog$net$XhrIo$$getResponseHeaders$() {
  for (var $headersObject$$ = {}, $headersArray$$ = this.getAllResponseHeaders().split("\r\n"), $i$$ = 0; $i$$ < $headersArray$$.length; $i$$++) {
    if (!goog.string.isEmptyOrWhitespace($headersArray$$[$i$$])) {
      var $keyValue$$ = goog.string.splitLimit($headersArray$$[$i$$], ": ", 2);
      $headersObject$$[$keyValue$$[0]] = $headersObject$$[$keyValue$$[0]] ? $headersObject$$[$keyValue$$[0]] + (", " + $keyValue$$[1]) : $keyValue$$[1];
    }
  }
  return $headersObject$$;
};
goog.net.XhrIo.prototype.getStreamingResponseHeader = function $goog$net$XhrIo$$getStreamingResponseHeader$($key$$) {
  return this.xhr_ ? this.xhr_.getResponseHeader($key$$) : null;
};
goog.net.XhrIo.prototype.getAllStreamingResponseHeaders = function $goog$net$XhrIo$$getAllStreamingResponseHeaders$() {
  return this.xhr_ ? this.xhr_.getAllResponseHeaders() : "";
};
goog.net.XhrIo.prototype.getLastErrorCode = function $goog$net$XhrIo$$getLastErrorCode$() {
  return this.lastErrorCode_;
};
goog.net.XhrIo.prototype.getLastError = function $goog$net$XhrIo$$getLastError$() {
  return goog.isString(this.lastError_) ? this.lastError_ : String(this.lastError_);
};
goog.net.XhrIo.prototype.formatMsg_ = function $goog$net$XhrIo$$formatMsg_$($msg$$) {
  return $msg$$ + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]";
};
goog.debug.entryPointRegistry.register(function($transformer$$) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = $transformer$$(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_);
});
goog.dom.dataset = {};
goog.dom.dataset.ALLOWED_ = !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();
goog.dom.dataset.PREFIX_ = "data-";
goog.dom.dataset.set = function $goog$dom$dataset$set$($element$$, $key$$, $value$$) {
  goog.dom.dataset.ALLOWED_ && $element$$.dataset ? $element$$.dataset[$key$$] = $value$$ : $element$$.setAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase($key$$), $value$$);
};
goog.dom.dataset.get = function $goog$dom$dataset$get$($element$$, $key$$) {
  return goog.dom.dataset.ALLOWED_ && $element$$.dataset ? $key$$ in $element$$.dataset ? $element$$.dataset[$key$$] : null : $element$$.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase($key$$));
};
goog.dom.dataset.remove = function $goog$dom$dataset$remove$($element$$, $key$$) {
  goog.dom.dataset.ALLOWED_ && $element$$.dataset ? goog.dom.dataset.has($element$$, $key$$) && delete $element$$.dataset[$key$$] : $element$$.removeAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase($key$$));
};
goog.dom.dataset.has = function $goog$dom$dataset$has$($element$$, $key$$) {
  return goog.dom.dataset.ALLOWED_ && $element$$.dataset ? $key$$ in $element$$.dataset : $element$$.hasAttribute ? $element$$.hasAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase($key$$)) : !!$element$$.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase($key$$));
};
goog.dom.dataset.getAll = function $goog$dom$dataset$getAll$($attributes$jscomp$7_element$$) {
  if (goog.dom.dataset.ALLOWED_ && $attributes$jscomp$7_element$$.dataset) {
    return $attributes$jscomp$7_element$$.dataset;
  }
  var $dataset$$ = {};
  $attributes$jscomp$7_element$$ = $attributes$jscomp$7_element$$.attributes;
  for (var $i$$ = 0; $i$$ < $attributes$jscomp$7_element$$.length; ++$i$$) {
    var $attribute$$ = $attributes$jscomp$7_element$$[$i$$];
    if (goog.string.startsWith($attribute$$.name, goog.dom.dataset.PREFIX_)) {
      var $key$$ = goog.string.toCamelCase($attribute$$.name.substr(5));
      $dataset$$[$key$$] = $attribute$$.value;
    }
  }
  return $dataset$$;
};
var pdfHighlighter = {util:{}};
function addParameter($data$$, $element$jscomp$37_value$$, $name$$, $defValue$$) {
  var $dataName$$ = $name$$, $prefixInd$$ = $name$$.lastIndexOf(".");
  -1 !== $prefixInd$$ && ($dataName$$ = $name$$.substring($prefixInd$$ + 1));
  ($element$jscomp$37_value$$ = findData($element$jscomp$37_value$$, $dataName$$)) ? $data$$[$name$$] = $element$jscomp$37_value$$ : null !== $defValue$$ && void 0 !== $defValue$$ && ($data$$[$name$$] = $defValue$$);
}
function findData($elem$$, $name$$) {
  for (var $v$$; $elem$$ && !($v$$ = goog.dom.dataset.get($elem$$, $name$$));) {
    $elem$$ = goog.dom.getParentElement($elem$$);
  }
  return $v$$;
}
function resolvePath($path$$, $dirUrl$$, $resolveRelative$$) {
  return /\/^https?:\/\/\/i/.test($path$$) ? $path$$ : "string" === typeof $resolveRelative$$ ? resolve($path$$, $resolveRelative$$) : !0 === $resolveRelative$$ ? resolve($path$$, $dirUrl$$) : $path$$;
}
function resolve($resolved_url_url$$, $base_url$$) {
  var $doc$jscomp$32_resolver$$ = document, $old_base$$ = $doc$jscomp$32_resolver$$.getElementsByTagName("base")[0], $old_href$$ = $old_base$$ && $old_base$$.href, $doc_head$$ = $doc$jscomp$32_resolver$$.head || $doc$jscomp$32_resolver$$.getElementsByTagName("head")[0], $our_base$$ = $old_base$$ || $doc_head$$.appendChild($doc$jscomp$32_resolver$$.createElement("base"));
  $doc$jscomp$32_resolver$$ = $doc$jscomp$32_resolver$$.createElement("a");
  $our_base$$.href = $base_url$$;
  $doc$jscomp$32_resolver$$.href = $resolved_url_url$$;
  $resolved_url_url$$ = $doc$jscomp$32_resolver$$.href;
  $old_base$$ ? $old_base$$.href = $old_href$$ : $doc_head$$.removeChild($our_base$$);
  return $resolved_url_url$$;
}
function getLocation($href$jscomp$1_match$$) {
  return ($href$jscomp$1_match$$ = $href$jscomp$1_match$$.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)) && {protocol:$href$jscomp$1_match$$[1], host:$href$jscomp$1_match$$[2], hostname:$href$jscomp$1_match$$[3], port:$href$jscomp$1_match$$[4], pathname:$href$jscomp$1_match$$[5], search:$href$jscomp$1_match$$[6], hash:$href$jscomp$1_match$$[7]};
}
function detectIE() {
  var $ua$$ = window.navigator.userAgent, $edge_msie$jscomp$1_rv$$ = $ua$$.indexOf("MSIE ");
  if (0 < $edge_msie$jscomp$1_rv$$) {
    return parseInt($ua$$.substring($edge_msie$jscomp$1_rv$$ + 5, $ua$$.indexOf(".", $edge_msie$jscomp$1_rv$$)), 10);
  }
  if (0 < $ua$$.indexOf("Trident/")) {
    return $edge_msie$jscomp$1_rv$$ = $ua$$.indexOf("rv:"), parseInt($ua$$.substring($edge_msie$jscomp$1_rv$$ + 3, $ua$$.indexOf(".", $edge_msie$jscomp$1_rv$$)), 10);
  }
  $edge_msie$jscomp$1_rv$$ = $ua$$.indexOf("Edge/");
  return 0 < $edge_msie$jscomp$1_rv$$ ? parseInt($ua$$.substring($edge_msie$jscomp$1_rv$$ + 5, $ua$$.indexOf(".", $edge_msie$jscomp$1_rv$$)), 10) : !1;
}
pdfHighlighter.util.detectIE = detectIE;
goog.exportSymbol("pdfHighlighter.util.detectIE", pdfHighlighter.util.detectIE);
pdfHighlighter.util.resolvePath = resolvePath;
goog.exportSymbol("pdfHighlighter.util.resolvePath", pdfHighlighter.util.resolvePath);
pdfHighlighter.util.findData = findData;
goog.exportSymbol("pdfHighlighter.util.findData", pdfHighlighter.util.findData);
pdfHighlighter.main = {};
var ieVersion = pdfHighlighter.util.detectIE(), initPdfHighlighter = function $initPdfHighlighter$($config$jscomp$0$$, $checkStatus_hlBase$$) {
  function $attachHighlighterForAll$$($links$$, $highlighterUrl$$, $apiToken$$) {
    goog.array.forEach($links$$, function($item$$, $index$$, $arr$$) {
      $attachHighlighter$$($item$$, $highlighterUrl$$, $apiToken$$);
    });
  }
  function $attachHighlighter$$($el$$, $highlighterUrl$$, $apiToken$$) {
    function $collectParameters$$($el$jscomp$4_newData$$, $config$$) {
      var $data$$ = {}, $dirUrl$jscomp$1_url$$ = window.location.href;
      $dirUrl$jscomp$1_url$$ = $dirUrl$jscomp$1_url$$.substring(0, $dirUrl$jscomp$1_url$$.lastIndexOf("/") + 1);
      var $href$$ = $el$jscomp$4_newData$$.getAttribute("href");
      var $hrefHasXmlRef_pdf$$ = !1;
      $href$$ || ($href$$ = goog.dom.dataset.get($el$jscomp$4_newData$$, "href"));
      $href$$ && ($data$$.uri = pdfHighlighter.util.resolvePath($href$$, $dirUrl$jscomp$1_url$$, $resolveDocumentBase$$), $hrefHasXmlRef_pdf$$ = -1 !== $href$$.indexOf("xml="));
      var $altUrl_viewUrl$$ = goog.dom.dataset.get($el$jscomp$4_newData$$, "altUrl");
      !$altUrl_viewUrl$$ && $href$$ && ($altUrl_viewUrl$$ = pdfHighlighter.util.resolvePath($href$$, $dirUrl$jscomp$1_url$$, $resolveDocumentBase$$));
      var $ind_query$$;
      "function" === typeof $config$$.querySelector ? $ind_query$$ = $config$$.querySelector : "string" === typeof $config$$.querySelector && 0 < $config$$.querySelector.length && ($ind_query$$ = function $$ind_query$$$() {
        return getQueryForSelector($config$$.querySelector, $config$$.maxQueryLen);
      });
      $ind_query$$ = $ind_query$$ ? $ind_query$$() : void 0;
      ($ind_query$$ = $config$$.query || $ind_query$$ || pdfHighlighter.util.findData($el$jscomp$4_newData$$, "query")) && !$hrefHasXmlRef_pdf$$ ? ("function" === typeof $config$$.filterQuery && ($ind_query$$ = $config$$.filterQuery($ind_query$$)), $data$$.query = $ind_query$$) : $href$$ && ($ind_query$$ = $href$$.indexOf("#xml="), -1 === $ind_query$$ && ($ind_query$$ = $href$$.indexOf("?xml=")), -1 === $ind_query$$ ? ($href$$ = goog.dom.dataset.get($el$jscomp$4_newData$$, "xml")) && ($href$$.match(/\/<xml\/i/) ? 
      $data$$.xml = $href$$ : $data$$.xml = pdfHighlighter.util.resolvePath($href$$, $dirUrl$jscomp$1_url$$, $resolveXmlBase$$)) : ($hrefHasXmlRef_pdf$$ = $href$$.substring(0, $ind_query$$), $href$$ = $href$$.substring($ind_query$$ + 5), $data$$.uri = pdfHighlighter.util.resolvePath($hrefHasXmlRef_pdf$$, $dirUrl$jscomp$1_url$$, $resolveDocumentBase$$), $data$$.xml = pdfHighlighter.util.resolvePath($href$$, $dirUrl$jscomp$1_url$$, $resolveXmlBase$$)));
      $data$$.uri && ($altUrl_viewUrl$$ && $data$$.uri !== $altUrl_viewUrl$$ && ($data$$.altUrl = $altUrl_viewUrl$$.replace(/ /g, "%20")), $data$$.uri = $data$$.uri.replace(/ /g, "%20"));
      ($altUrl_viewUrl$$ = goog.dom.dataset.get($el$jscomp$4_newData$$, "viewUrl")) && ($data$$.viewUrl = pdfHighlighter.util.resolvePath($altUrl_viewUrl$$, $dirUrl$jscomp$1_url$$, $resolveViewUrl$$));
      addParameter($data$$, $el$jscomp$4_newData$$, "removePagesWithoutMatches", $config$$.removePagesWithoutMatches);
      addParameter($data$$, $el$jscomp$4_newData$$, "addNavigation", $config$$.addNavigation);
      addParameter($data$$, $el$jscomp$4_newData$$, "openFirstHlPage", $config$$.openFirstHlPage);
      addParameter($data$$, $el$jscomp$4_newData$$, "neighbourPages", $config$$.neighbourPages);
      addParameter($data$$, $el$jscomp$4_newData$$, "language", $config$$.language);
      addParameter($data$$, $el$jscomp$4_newData$$, "pdf.highlightColor", null);
      addParameter($data$$, $el$jscomp$4_newData$$, "pdf.highlightMarkupOpacity", null);
      addParameter($data$$, $el$jscomp$4_newData$$, "pdf.highlightGsAlpha", null);
      addParameter($data$$, $el$jscomp$4_newData$$, "documentServingPath", null);
      "function" === typeof $config$$.updateHighlightingParams && ($el$jscomp$4_newData$$ = $config$$.updateHighlightingParams($data$$)) && ($data$$ = $el$jscomp$4_newData$$);
      return $data$$;
    }
    if ("true" !== goog.dom.dataset.get($el$$, "hlInited")) {
      var $highlightUrlBuilder$$ = getHighlightUrlBuilder($config$jscomp$0$$);
      if ("string" === typeof $config$jscomp$0$$.updateAttr) {
        var $data$jscomp$35_url$$ = $collectParameters$$($el$$, $config$jscomp$0$$);
        ($data$jscomp$35_url$$ = $highlightUrlBuilder$$($highlighterUrl$$, getHighlightingMethodForParams($data$jscomp$35_url$$), $data$jscomp$35_url$$)) && $el$$.setAttribute($config$jscomp$0$$.updateAttr, $data$jscomp$35_url$$);
      }
      if (!0 === $config$jscomp$0$$.updateHref) {
        if ($data$jscomp$35_url$$ = $collectParameters$$($el$$, $config$jscomp$0$$), $data$jscomp$35_url$$ = $highlightUrlBuilder$$($highlighterUrl$$, getHighlightingMethodForParams($data$jscomp$35_url$$), $data$jscomp$35_url$$)) {
          var $orig$$ = $el$$.getAttribute("href");
          $orig$$ && goog.dom.dataset.set($el$$, "hlOrigHref", $orig$$);
          $el$$.setAttribute("href", $data$jscomp$35_url$$);
        }
      } else {
        goog.events.listen($el$$, goog.events.EventType.CLICK, function($e$$) {
          var $data$$ = $collectParameters$$($el$$, $config$jscomp$0$$), $method$$ = getHighlightingMethodForParams($data$$), $postUrl$$ = $highlightUrlBuilder$$($highlighterUrl$$, $method$$), $dataEncoded$$ = goog.Uri.QueryData.createFromMap($data$$).toString();
          if ("function" === typeof $config$jscomp$0$$.onHighlightingLinkClick) {
            var $ctx$$ = {};
            $ctx$$.highlighterUrl = $highlighterUrl$$;
            $ctx$$.highlightingMethod = $method$$;
            $ctx$$.endpoint = $postUrl$$;
            $ctx$$.params = $data$$;
            $ctx$$.paramsEncoded = $dataEncoded$$;
            $ctx$$.apiToken = $apiToken$$;
            if (!1 === $config$jscomp$0$$.onHighlightingLinkClick($el$$, $ctx$$, $e$$)) {
              return;
            }
          }
          if ($postUrl$$) {
            $e$$.preventDefault();
            var $request$$ = new goog.net.XhrIo;
            $request$$.headers.set("content-type", "application/json");
            $apiToken$$ && $request$$.headers.set("x-highlighter-api-token", $apiToken$$);
            goog.events.listen($request$$, "complete", function() {
              if ($request$$.isSuccess()) {
                var $res$jscomp$7_url$$ = $request$$.getResponseJson();
                if (("function" !== typeof $config$jscomp$0$$.onHighlightingResult || !1 !== $config$jscomp$0$$.onHighlightingResult($res$jscomp$7_url$$, $el$$)) && !0 === $res$jscomp$7_url$$.success) {
                  var $docUrl$jscomp$inline_4_urlParts$$ = $res$jscomp$7_url$$.documentUrl;
                  $res$jscomp$7_url$$ = $docUrl$jscomp$inline_4_urlParts$$;
                  $viewerUrl$$ && ($docUrl$jscomp$inline_4_urlParts$$ = $docUrl$jscomp$inline_4_urlParts$$.split("#"), $res$jscomp$7_url$$ = $viewerUrl$$ + encodeURIComponent($docUrl$jscomp$inline_4_urlParts$$[0]), 1 < $docUrl$jscomp$inline_4_urlParts$$.length && ($res$jscomp$7_url$$ += "#" + $docUrl$jscomp$inline_4_urlParts$$[1]));
                  window.location = $res$jscomp$7_url$$;
                }
              } else {
                console.log("Something went wrong in the ajax call. Error code: ", $request$$.getLastErrorCode(), " - message: ", $request$$.getLastError());
              }
            });
            $request$$.send($postUrl$$, "POST", $dataEncoded$$);
          }
        });
      }
      goog.dom.dataset.set($el$$, "hlInited", "true");
    }
  }
  $config$jscomp$0$$ = $config$jscomp$0$$ || {};
  var $highlighterUrl$$ = $checkStatus_hlBase$$ || $config$jscomp$0$$.highlighterUrl || window.HighlighterBase || "/";
  -1 === $highlighterUrl$$.indexOf("/", $highlighterUrl$$.length - 1) && ($highlighterUrl$$ += "/");
  $checkStatus_hlBase$$ = !1 !== $config$jscomp$0$$.checkStatus;
  var $resolveDocumentBase$$ = $config$jscomp$0$$.sendAbsoluteUrlsToHighlighter || $config$jscomp$0$$.resolveDocumentBase || !1, $resolveXmlBase$$ = $config$jscomp$0$$.sendAbsoluteUrlsToHighlighter || $config$jscomp$0$$.resolveXmlBase || !1, $resolveViewUrl$$ = $config$jscomp$0$$.sendAbsoluteUrlsToHighlighter || $config$jscomp$0$$.resolveViewUrl || !1, $viewerUrl$$ = $config$jscomp$0$$.viewerUrl, $target$$ = $config$jscomp$0$$.documentLinkSelector;
  if (goog.isString($target$$)) {
    var $links$$ = document.querySelectorAll($target$$);
  } else {
    if (goog.isArrayLike($target$$)) {
      $links$$ = $target$$;
    } else {
      return console.log("Highlighter target not defined."), !1;
    }
  }
  $config$jscomp$0$$.debug && console.log("Attaching highlighter to links: " + $links$$.length);
  $checkStatus_hlBase$$ && 0 < $links$$.length ? checkServerStatus($highlighterUrl$$, $config$jscomp$0$$.statusCheckParams, function onSuccess($res$$) {
    $res$$.success && !$res$$.disabled ? $attachHighlighterForAll$$($links$$, $res$$.endpoint || $highlighterUrl$$, $res$$.apiToken) : ($attachHighlighterForAll$$($links$$, void 0, void 0), console.log("PDF highlighting disabled by server."));
  }, function onError() {
    $attachHighlighterForAll$$($links$$, void 0, void 0);
    console.log("PDF highlighting disabled because status check failed.");
  }) : $attachHighlighterForAll$$($links$$, $highlighterUrl$$, void 0);
};
function checkServerStatus($highlighterUrl$$, $dataEncoded$jscomp$1_statusReqData$$, $onSuccess$$, $onError$$) {
  $dataEncoded$jscomp$1_statusReqData$$ = $dataEncoded$jscomp$1_statusReqData$$ ? goog.Uri.QueryData.createFromMap($dataEncoded$jscomp$1_statusReqData$$).toString() : void 0;
  var $request$$ = new goog.net.XhrIo;
  $request$$.headers.set("accept", "application/json");
  goog.events.listen($request$$, "complete", function() {
    var $res$$ = $request$$.getStatus();
    $request$$.isSuccess() && 400 > $res$$ ? ($res$$ = $request$$.getResponseJson(), $onSuccess$$($res$$)) : (console.log("Something went wrong in the ajax call. HTTP status: " + $res$$ + " - " + $request$$.getStatusText() + "; Error: " + $request$$.getLastErrorCode() + " - " + $request$$.getLastError()), $onError$$ && $onError$$($request$$));
  });
  $highlighterUrl$$ += "status";
  $dataEncoded$jscomp$1_statusReqData$$ && ($highlighterUrl$$ += "?" + $dataEncoded$jscomp$1_statusReqData$$);
  $request$$.send($highlighterUrl$$, "GET", $dataEncoded$jscomp$1_statusReqData$$);
}
function getHighlightUrlBuilder($config$$) {
  return "function" === typeof $config$$.highlightUrlBuilder ? $config$$.highlightUrlBuilder : function($highlighterUrl$$, $method$$, $data$$) {
    var $hlActionUrl_uri$$ = $config$$.highlightActionUrl;
    if (!$hlActionUrl_uri$$) {
      if (!$method$$ || !$highlighterUrl$$) {
        return;
      }
      $hlActionUrl_uri$$ = $highlighterUrl$$ + $method$$;
    }
    $data$$ && ($highlighterUrl$$ = goog.Uri.QueryData.createFromMap($data$$), $hlActionUrl_uri$$ = goog.Uri.parse($hlActionUrl_uri$$), $hlActionUrl_uri$$.setQueryData($highlighterUrl$$), $hlActionUrl_uri$$ = $hlActionUrl_uri$$.toString());
    return $hlActionUrl_uri$$;
  };
}
function getHighlightingMethodForParams($params$$) {
  if (void 0 !== $params$$.uri) {
    if (void 0 !== $params$$.xml) {
      return "highlight-for-xml";
    }
    if (void 0 !== $params$$.query) {
      return "highlight-for-query";
    }
  }
}
function getQueryForSelector($elements$$, $maxQueryLen$$) {
  $elements$$ = document.querySelectorAll($elements$$);
  for (var $i$$ = 0; $i$$ < $elements$$.length; $i$$++) {
    var $element$$ = $elements$$[$i$$];
    if ($element$$) {
      var $query$$ = isInputBox($element$$) ? $element$$.value : $element$$.textContent;
      $query$$ = $query$$.trim();
      $maxQueryLen$$ && $query$$.length > $maxQueryLen$$ && ($query$$ = $query$$.substring(0, $maxQueryLen$$));
      if (0 !== $query$$.length) {
        break;
      }
    }
  }
  return $query$$;
}
function isInputBox($element$jscomp$39_type$$) {
  var $tagName$$ = $element$jscomp$39_type$$.tagName.toLowerCase();
  if ("textarea" === $tagName$$) {
    return !0;
  }
  if ("input" !== $tagName$$) {
    return !1;
  }
  $element$jscomp$39_type$$ = $element$jscomp$39_type$$.getAttribute("type").toLowerCase();
  return 0 <= ["text", "number", "email", "search", "hidden"].indexOf($element$jscomp$39_type$$);
}
pdfHighlighter.init = function $pdfHighlighter$init$($config$$, $hlBase$$) {
  initPdfHighlighter($config$$, $hlBase$$);
};
goog.exportSymbol("pdfHighlighter.init", pdfHighlighter.init);
pdfHighlighter.initPdfHighlighter = initPdfHighlighter;
goog.exportSymbol("pdfHighlighter.initPdfHighlighter", pdfHighlighter.initPdfHighlighter);
pdfHighlighter.getQueryForSelector = getQueryForSelector;
goog.exportSymbol("pdfHighlighter.getQueryForSelector", pdfHighlighter.getQueryForSelector);
}).call(window);
