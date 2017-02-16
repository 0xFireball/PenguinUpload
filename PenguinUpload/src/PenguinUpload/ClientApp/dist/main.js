(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _routes = __webpack_require__(4);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	__webpack_require__(86);
	
	__webpack_require__(125);
	
	__webpack_require__(131);
	
	__webpack_require__(133);
	
	var _vueMaterial = __webpack_require__(135);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(136);
	
	var _App = __webpack_require__(138);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueMaterial2.default);
	
	var router = new _vueRouter2.default({
	  routes: _routes2.default
	});
	
	router.afterEach(function (currentRoute) {
	  var mainContent = document.querySelector('.main-content');
	
	  if (mainContent) {
	    mainContent.scrollTop = 0;
	  }
	});
	
	_vue2.default.material.registerTheme({
	  apptheme: {
	    primary: {
	      color: 'cyan',
	      hue: 700
	    },
	    accent: {
	      color: 'light-blue',
	      hue: 600
	    }
	  }
	});
	
	_vue2.default.material.setCurrentTheme('apptheme');
	
	var YASApp = _vue2.default.component('app', _App2.default);
	
	var app = new YASApp({
	  el: '#app',
	  router: router
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("vue-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _notFound = __webpack_require__(5);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	var _landing = __webpack_require__(19);
	
	var _landing2 = _interopRequireDefault(_landing);
	
	var _about = __webpack_require__(35);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _download = __webpack_require__(45);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _dashboard = __webpack_require__(55);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _myfiles = __webpack_require__(65);
	
	var _myfiles2 = _interopRequireDefault(_myfiles);
	
	var _profile = __webpack_require__(76);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var main = [{
	  path: '/',
	  name: 'landing',
	  component: _landing2.default
	}, {
	  path: '/home',
	  redirect: '/'
	}, {
	  path: '/about',
	  name: 'About',
	  component: _about2.default
	}, {
	  path: '/u',
	  name: 'dashboard',
	  component: _dashboard2.default
	}, {
	  path: '/files/:dir*',
	  name: 'my files navigation',
	  component: _myfiles2.default,
	  props: true
	}, {
	  path: '/files',
	  name: 'my files',
	  component: _myfiles2.default
	}, {
	  path: '/p',
	  name: 'profile',
	  component: _profile2.default
	}, {
	  path: '/d/:id/:pass',
	  name: 'download (with pass)',
	  component: _download2.default
	}, {
	  path: '/d/:id',
	  name: 'download',
	  component: _download2.default
	}];
	
	var error = [{
	  path: '*',
	  name: 'error',
	  component: _notFound2.default
	}];
	
	exports.default = [].concat(main, error);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(6)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  "data-v-5b89b8ee",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\notFound.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("2c31b3e0", content, false);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.not-found-content[data-v-5b89b8ee] {\n  text-align: center;\n  font-weight: 600;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/notFound.vue?27811ebf"],"names":[],"mappings":";AA+BA;EACA,mBAAA;EACA,iBAAA;CACA","file":"notFound.vue","sourcesContent":["<template>\n  <div class=\"not-found\">\n    <div id=\"app\" class=\"container\">\n      <div class=\"row\" id=\"intro-area\">\n        <div class=\"twelve columns\">\n          <intro></intro>\n        </div>\n      </div>\n      <div class=\"not-found-content\">\n        <h1>404. That's an error.</h1>\n        <h3>The page you were looking for couldn't be found.</h3>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Intro from '../components/intro'\n\nexport default {\n  data () {\n    return {\n    }\n  },\n  components: {\n    Intro\n  }\n}\n</script>\n\n<style scoped>\n  .not-found-content {\n    text-align: center;\n    font-weight: 600;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var listToStyles = __webpack_require__(10)
	
	module.exports = function (parentId, list, isProduction) {
	  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	    var context = __VUE_SSR_CONTEXT__
	    var styles = context._styles
	
	    if (!styles) {
	      styles = context._styles = {}
	      Object.defineProperty(context, 'styles', {
	        enumberable: true,
	        get () {
	          return (
	            context._renderedStyles ||
	            (context._renderedStyles = renderStyles(styles))
	          )
	        }
	      })
	    }
	
	    list = listToStyles(parentId, list)
	    if (isProduction) {
	      addStyleProd(styles, list)
	    } else {
	      addStyleDev(styles, list)
	    }
	  }
	}
	
	// In production, render as few style tags as possible.
	// (mostly because IE9 has a limit on number of style tags)
	function addStyleProd (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      // group style tags by media types.
	      var id = part.media || 'default'
	      var style = styles[id]
	      if (style) {
	        style.ids.push(part.id)
	        style.css += '\n' + part.css
	      } else {
	        styles[id] = {
	          ids: [part.id],
	          css: part.css,
	          media: part.media
	        }
	      }
	    }
	  }
	}
	
	// In dev we use individual style tag for each module for hot-reload
	// and source maps.
	function addStyleDev (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      styles[part.id] = {
	        ids: [part.id],
	        css: part.css,
	        media: part.media
	      }
	    }
	  }
	}
	
	function renderStyles (styles) {
	  var css = ''
	  for (var key in styles) {
	    var style = styles[key]
	    css += `<style data-vue-ssr-id="${
	      style.ids.join(' ')
	    }"${
	      style.media ? ` media="${style.media}"` : ''
	    }>${style.css}</style>`
	  }
	  return css
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  "data-v-58112f4d",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\intro.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] intro.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("325a0026", content, false);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.intro[data-v-58112f4d] {\n  margin-top: 8%;\n  text-align: center;\n}\n.app-title[data-v-58112f4d] {\n  font-size: 4rem;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/intro.vue?05212c8a"],"names":[],"mappings":";AAqBA;EACA,eAAA;EACA,mBAAA;CACA;AAEA;EACA,gBAAA;EACA,uBAAA;EACA,iBAAA;CACA","file":"intro.vue","sourcesContent":["<template>\r\n  <div class=\"intro\">\r\n    <div class=\"container\">\r\n      <h1 class=\"app-title\">{{ viewTitle || appTitle }}</h1>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  export default {\r\n    props: ['viewTitle'],\r\n    data() {\r\n      return {\r\n        appTitle: 'PenguinUpload',\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n  .intro {\r\n    margin-top: 8%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .app-title {\r\n    font-size: 4rem;\r\n    letter-spacing: 0.1rem;\r\n    font-weight: 300;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['viewTitle'],
	  data: function data() {
	    return {
	      appTitle: 'PenguinUpload'
	    };
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "intro"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('h1', {
	    staticClass: "app-title"
	  }, [_vm._v(_vm._s(_vm.viewTitle || _vm.appTitle))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found"
	  }, [_c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "intro-area"
	    }
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found-content"
	  }, [_c('h1', [_vm._v("404. That's an error.")]), _vm._v(" "), _c('h3', [_vm._v("The page you were looking for couldn't be found.")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(20)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(22),
	  /* template */
	  __webpack_require__(34),
	  /* scopeId */
	  "data-v-5da8ee26",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\landing.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] landing.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("31fa70b8", content, false);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-5da8ee26] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 4%;\n}\n.intro-area[data-v-5da8ee26] {\n  margin-bottom: 2%;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/landing.vue?1945039e"],"names":[],"mappings":";AA2CA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"landing.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <div class=\"row intro-area\">\r\n        <div class=\"twelve columns\">\r\n          <intro></intro>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"six columns offset-by-three\">\r\n          <login></login>\r\n        </div>\r\n      </div>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/intro'\r\n  import devCredits from '../components/devCredits'\r\n  import Login from '../components/login'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      Login,\r\n      devCredits\r\n    },\r\n    beforeRouteEnter(to, from, next) {\r\n      next(vm => {\r\n        if (vm.$root.loggedIn) {\r\n          vm.$router.replace('/u')\r\n        }\r\n      })\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-top: 4%;\r\n  }\r\n\r\n  .intro-area {\r\n    margin-bottom: 2%;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(23);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _login = __webpack_require__(28);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    Login: _login2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (vm.$root.loggedIn) {
	        vm.$router.replace('/u');
	      }
	    });
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(24)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(26),
	  /* template */
	  __webpack_require__(27),
	  /* scopeId */
	  "data-v-83b84f98",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\devCredits.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] devCredits.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("a75709d0", content, false);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dev-credits[data-v-83b84f98] {\n  margin: 2%;\n}\nh6.credit-text[data-v-83b84f98] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/devCredits.vue?6546f67b"],"names":[],"mappings":";AAgBA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA","file":"devCredits.vue","sourcesContent":["<template>\n  <div class=\"dev-credits\">\n    <h6 class=\"credit-text\">Made by <a href=\"https://0xfireball.me\" target=\"_blank\">0xFireball</a> of <a href=\"https://iridiumion.xyz\" target=\"_blank\">IridiumIon Software</a></h6>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  .dev-credits {\n    margin: 2%;\n  }\n  \n  h6.credit-text {\n    font-weight: 300;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "dev-credits"
	  }, [_c('h6', {
	    staticClass: "credit-text"
	  }, [_vm._v("Made by "), _c('a', {
	    attrs: {
	      "href": "https://0xfireball.me",
	      "target": "_blank"
	    }
	  }, [_vm._v("0xFireball")]), _vm._v(" of "), _c('a', {
	    attrs: {
	      "href": "https://iridiumion.xyz",
	      "target": "_blank"
	    }
	  }, [_vm._v("IridiumIon Software")])])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(29)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(31),
	  /* template */
	  __webpack_require__(33),
	  /* scopeId */
	  "data-v-84b61c6c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("1d4e5821", content, false);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.invisible[data-v-84b61c6c] {\n  display: none;\n}\n.error-message[data-v-84b61c6c] {\n  color: red;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/login.vue?8066e85c"],"names":[],"mappings":";AA2KA;EACA,cAAA;CACA;AACA;EACA,WAAA;CACA","file":"login.vue","sourcesContent":["<template>\r\n  <div class=\"login\">\r\n    <md-tabs class=\"md-accent\" ref=\"authOptionTabs\">\r\n      <md-tab id=\"t-login\" md-label=\"Log In\">\r\n        <form v-on:submit.prevent=\"tryLogin\">\r\n          <md-input-container>\r\n            <label>Username</label>\r\n            <md-input v-model=\"login.username\"></md-input>\r\n          </md-input-container>\r\n          <md-input-container md-has-password>\r\n            <label>Password</label>\r\n            <md-input type=\"password\" v-model=\"login.password\"></md-input>\r\n          </md-input-container>\r\n          <p class=\"error-message\">{{ login.err }}</p>\r\n          <input type=\"submit\" class=\"invisible\"></input>\r\n          <md-button class=\"md-raised md-primary\" @click.native=\"tryLogin\" :disabled=\"!login.e\">Log In</md-button>\r\n        </form>\r\n      </md-tab>\r\n\r\n      <md-tab id=\"t-signup\" md-label=\"Sign Up\">\r\n        <form v-on:submit.prevent=\"tryRegister\">\r\n          <md-input-container>\r\n            <label>Username</label>\r\n            <md-input v-model=\"register.username\"></md-input>\r\n          </md-input-container>\r\n          <md-input-container md-has-password>\r\n            <label>Password</label>\r\n            <md-input type=\"password\" v-model=\"register.password\"></md-input>\r\n          </md-input-container>\r\n          <md-input-container>\r\n            <label>Confirm Password</label>\r\n            <md-input type=\"password\" v-model=\"register.confirm\"></md-input>\r\n          </md-input-container>\r\n          <md-input-container>\r\n            <label>Invite Key (optional)</label>\r\n            <md-input type=\"password\" v-model=\"register.inviteKey\"></md-input>\r\n          </md-input-container>\r\n          <md-checkbox v-model=\"register.iaccept\">I accept the Terms and Conditions</md-checkbox>\r\n          <p class=\"error-message\">{{ register.err }}</p>\r\n          <input type=\"submit\" class=\"invisible\"></input>\r\n          <md-button class=\"md-raised md-primary\" @click.native=\"tryRegister\" :disabled=\"!register.e\">Sign Up</md-button>\r\n        </form>\r\n      </md-tab>\r\n    </md-tabs>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n\r\n  import axios from 'axios'\r\n  let axiosRequestConfig = {\r\n    validateStatus: function (status) {\r\n      return status >= 200 && status < 500\r\n    }\r\n  }\r\n  export default {\r\n    name: 'login',\r\n    data() {\r\n      return {\r\n        login: {\r\n          username: '',\r\n          password: '',\r\n          err: '',\r\n          e: true // enabled\r\n        },\r\n        register: {\r\n          username: '',\r\n          password: '',\r\n          confirm: '',\r\n          iaccept: '',\r\n          inviteKey: '',\r\n          err: '',\r\n          e: true // enabled\r\n        }\r\n      }\r\n    },\r\n    methods: {\r\n      tryLogin: function () {\r\n        // nothing\r\n        let vm = this\r\n        if (!vm.login.e) return\r\n        if (!vm.login.password || !vm.login.username) {\r\n          vm.login.err = 'credentials cannot be empty'\r\n          return\r\n        }\r\n        vm.login.e = false\r\n        // reset error message\r\n        vm.login.err = ''\r\n        // send login post\r\n        axios.post('/login', {\r\n          username: vm.login.username,\r\n          password: vm.login.password\r\n        })\r\n          .then((response) => {\r\n            // TODO: process response\r\n            if (response.status === 200) {\r\n              // succeeded\r\n              // vm.$root.loggedIn = true\r\n              // push user info\r\n              vm.$root.u.key = response.data.apikey\r\n              vm.$root.u.name = response.data.user.username\r\n              // console.log(vm.$root.u.name)\r\n              vm.$router.push('/u')\r\n            } else if (response.status == 401) {\r\n              // unauthorized\r\n              vm.login.err = response.data\r\n            }\r\n            vm.login.e = true\r\n          })\r\n          .catch(function (error) {\r\n            // TODO: handle error\r\n            if (error) {\r\n              vm.login.err = 'invalid login credentials'\r\n            }\r\n            vm.login.e = true\r\n          })\r\n      },\r\n      tryRegister: function () {\r\n        let vm = this\r\n        if (!vm.register.e) return\r\n        // make sure confirmation is correct\r\n        if (vm.register.username.length < 3) {\r\n          vm.register.err = 'username must be at least 3 characters. this is also validated on the server'\r\n          return\r\n        }\r\n        if (vm.register.password.length < 8) {\r\n          vm.register.err = 'password must be at least 8 characters. this is also validated on the server'\r\n          return\r\n        }\r\n        if (!vm.register.iaccept) {\r\n          vm.register.err = 'you must accept the terms and conditions'\r\n          return\r\n        }\r\n        if (vm.register.password !== vm.register.confirm) {\r\n          vm.register.err = 'password confirmation does not match'\r\n          return\r\n        }\r\n        vm.register.e = false\r\n        // reset error message\r\n        vm.register.err = ''\r\n        // send register post\r\n        axios.post('/register', {\r\n          username: vm.register.username,\r\n          password: vm.register.password,\r\n          inviteKey: vm.register.inviteKey\r\n        }, axiosRequestConfig)\r\n          .then((response) => {\r\n            // TODO: process response\r\n            if (response.status === 200) {\r\n              // registration succeeded\r\n              vm.$root.showPopup('Registration succeeded! You may now log in.', 'Success')\r\n              // this.$refs.authOptionTabs.changeTab('t-login')\r\n            } else if (response.status === 401) {\r\n              // unauthorized because of error\r\n              vm.register.err = response.data\r\n            }\r\n            vm.register.e = true\r\n          })\r\n          .catch(function (error) {\r\n            if (error) {\r\n              console.log(error)\r\n            }\r\n            vm.register.e = true\r\n          })\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n  .invisible {\r\n    display: none;\r\n  }\r\n  .error-message {\r\n    color: red;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	exports.default = {
	  name: 'login',
	  data: function data() {
	    return {
	      login: {
	        username: '',
	        password: '',
	        err: '',
	        e: true },
	      register: {
	        username: '',
	        password: '',
	        confirm: '',
	        iaccept: '',
	        inviteKey: '',
	        err: '',
	        e: true }
	    };
	  },
	
	  methods: {
	    tryLogin: function tryLogin() {
	      var vm = this;
	      if (!vm.login.e) return;
	      if (!vm.login.password || !vm.login.username) {
	        vm.login.err = 'credentials cannot be empty';
	        return;
	      }
	      vm.login.e = false;
	
	      vm.login.err = '';
	
	      _axios2.default.post('/login', {
	        username: vm.login.username,
	        password: vm.login.password
	      }).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.u.key = response.data.apikey;
	          vm.$root.u.name = response.data.user.username;
	
	          vm.$router.push('/u');
	        } else if (response.status == 401) {
	          vm.login.err = response.data;
	        }
	        vm.login.e = true;
	      }).catch(function (error) {
	        if (error) {
	          vm.login.err = 'invalid login credentials';
	        }
	        vm.login.e = true;
	      });
	    },
	    tryRegister: function tryRegister() {
	      var vm = this;
	      if (!vm.register.e) return;
	
	      if (vm.register.username.length < 3) {
	        vm.register.err = 'username must be at least 3 characters. this is also validated on the server';
	        return;
	      }
	      if (vm.register.password.length < 8) {
	        vm.register.err = 'password must be at least 8 characters. this is also validated on the server';
	        return;
	      }
	      if (!vm.register.iaccept) {
	        vm.register.err = 'you must accept the terms and conditions';
	        return;
	      }
	      if (vm.register.password !== vm.register.confirm) {
	        vm.register.err = 'password confirmation does not match';
	        return;
	      }
	      vm.register.e = false;
	
	      vm.register.err = '';
	
	      _axios2.default.post('/register', {
	        username: vm.register.username,
	        password: vm.register.password,
	        inviteKey: vm.register.inviteKey
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.showPopup('Registration succeeded! You may now log in.', 'Success');
	        } else if (response.status === 401) {
	          vm.register.err = response.data;
	        }
	        vm.register.e = true;
	      }).catch(function (error) {
	        if (error) {
	          console.log(error);
	        }
	        vm.register.e = true;
	      });
	    }
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login"
	  }, [_c('md-tabs', {
	    ref: "authOptionTabs",
	    staticClass: "md-accent"
	  }, [_c('md-tab', {
	    attrs: {
	      "id": "t-login",
	      "md-label": "Log In"
	    }
	  }, [_c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryLogin($event)
	      }
	    }
	  }, [_c('md-input-container', [_c('label', [_vm._v("Username")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.login.username),
	      expression: "login.username"
	    }],
	    domProps: {
	      "value": (_vm.login.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.login.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.login.password),
	      expression: "login.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.login.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.login.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.login.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.login.e
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tryLogin($event)
	      }
	    }
	  }, [_vm._v("Log In")])], 1)]), _vm._v(" "), _c('md-tab', {
	    attrs: {
	      "id": "t-signup",
	      "md-label": "Sign Up"
	    }
	  }, [_c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryRegister($event)
	      }
	    }
	  }, [_c('md-input-container', [_c('label', [_vm._v("Username")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.username),
	      expression: "register.username"
	    }],
	    domProps: {
	      "value": (_vm.register.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.password),
	      expression: "register.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Confirm Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.confirm),
	      expression: "register.confirm"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.confirm)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.confirm = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Invite Key (optional)")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.inviteKey),
	      expression: "register.inviteKey"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.inviteKey)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.inviteKey = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.iaccept),
	      expression: "register.iaccept"
	    }],
	    domProps: {
	      "value": (_vm.register.iaccept)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.iaccept = $event
	      }
	    }
	  }, [_vm._v("I accept the Terms and Conditions")]), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.register.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.register.e
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tryRegister($event)
	      }
	    }
	  }, [_vm._v("Sign Up")])], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "row intro-area"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('login')], 1)]), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(36)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(44),
	  /* scopeId */
	  "data-v-6230c23a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\about.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("ae4087d4", content, false);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.about-content[data-v-6230c23a] {\n  text-align: center;\n  /*font-weight: 600;*/\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/about.vue?fe9fe9bc"],"names":[],"mappings":";AAgCA;EACA,mBAAA;EACA,qBAAA;CACA","file":"about.vue","sourcesContent":["<template>\n  <div class=\"about\">\n    <div id=\"app\" class=\"container\">\n      <div class=\"row\" id=\"intro-area\">\n        <div class=\"twelve columns\">\n          <intro></intro>\n        </div>\n      </div>\n      <div class=\"about-content\">\n        <about></about>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Intro from '../components/intro'\nimport About from '../components/aboutWidget'\n\nexport default {\n  data () {\n    return {\n    }\n  },\n  components: {\n    Intro,\n    About\n  }\n}\n</script>\n\n<style scoped>\n  .about-content {\n    text-align: center;\n    /*font-weight: 600;*/\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _aboutWidget = __webpack_require__(39);
	
	var _aboutWidget2 = _interopRequireDefault(_aboutWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    About: _aboutWidget2.default
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(40)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(42),
	  /* template */
	  __webpack_require__(43),
	  /* scopeId */
	  "data-v-36230fd2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\aboutWidget.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] aboutWidget.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("6a3328c0", content, false);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aboutWidget[data-v-36230fd2] {\n  margin: 2%;\n}\nh6.credit-text[data-v-36230fd2] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/aboutWidget.vue?38fb18b8"],"names":[],"mappings":";AAwBA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA","file":"aboutWidget.vue","sourcesContent":["<template>\n  <div class=\"aboutWidget\">\n    <h5>About {{ appName }}</h5>\n    <p>\n      PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.\n    </p>\n    <h6>\n      PenguinUpload version {{ appVersion }}\n    </h6>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n        appName: 'PenguinUpload',\n        appVersion: window.$appVersion\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  .aboutWidget {\n    margin: 2%;\n  }\n  \n  h6.credit-text {\n    font-weight: 300;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      appName: 'PenguinUpload',
	      appVersion: window.$appVersion
	    };
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "aboutWidget"
	  }, [_c('h5', [_vm._v("About " + _vm._s(_vm.appName))]), _vm._v(" "), _c('p', [_vm._v("\n    PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.\n  ")]), _vm._v(" "), _c('h6', [_vm._v("\n    PenguinUpload version " + _vm._s(_vm.appVersion) + "\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "about"
	  }, [_c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "intro-area"
	    }
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "about-content"
	  }, [_c('about')], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(46)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(48),
	  /* template */
	  __webpack_require__(54),
	  /* scopeId */
	  "data-v-01a06f22",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\download.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] download.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("f6db6c9a", content, false);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-01a06f22] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n.download-area[data-v-01a06f22] {\n  margin-bottom: 2%;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/download.vue?ca9f2072"],"names":[],"mappings":";AAoCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"download.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <div class=\"row download-area\">\r\n      <div class=\"twelve columns\">\r\n        <intro></intro>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"six columns offset-by-three\">\r\n        <downloadItem :itemId=\"$route.params.id\" :itemPass=\"$route.params.pass\"></downloadItem>\r\n      </div>\r\n    </div>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/intro'\r\n  import devCredits from '../components/devCredits'\r\n  import downloadItem from '../components/downloadItem'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      downloadItem,\r\n      devCredits\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n  }\r\n\r\n  .download-area {\r\n    margin-bottom: 2%;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(23);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _downloadItem = __webpack_require__(49);
	
	var _downloadItem2 = _interopRequireDefault(_downloadItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    downloadItem: _downloadItem2.default,
	    devCredits: _devCredits2.default
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(50)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(52),
	  /* template */
	  __webpack_require__(53),
	  /* scopeId */
	  "data-v-38e2b06a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\downloadItem.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] downloadItem.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("88137cea", content, false);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.download-item[data-v-38e2b06a] {\n  margin: 2%;\n}\n.download-area-padding[data-v-38e2b06a] {\n  margin: 20px;\n  padding: 2%;\n  padding-top: 10%;\n  background: #f7f7f7;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/downloadItem.vue?4dc8b664"],"names":[],"mappings":";AAuHA;EACA,WAAA;CACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;CACA","file":"downloadItem.vue","sourcesContent":["<template>\r\n  <div class=\"download-item\">\r\n    <div class=\"md-title\">File Download</div>\r\n    <div class=\"download-area-padding\">\r\n      <div v-if=\"loading\">\r\n        <md-spinner :md-stroke=\"1.5\" md-indeterminate></md-spinner>\r\n        <h5>Loading File Information</h5>\r\n      </div>\r\n      <div v-else>\r\n        <md-icon md-theme=\"light-blue\" class=\"md-primary\">insert_drive_file</md-icon>\r\n        <h5>{{ file.name }}</h5>\r\n        <p>{{ file.sizeText }}</p>\r\n        <div v-if=\"!error\">\r\n          <div class=\"right\">\r\n            <md-button @click.native=\"downloadFile\">\r\n              <md-icon v-if=\"file.pass.length > 0\">lock</md-icon>\r\n              <span>\r\n              Download\r\n            </span>\r\n            </md-button>\r\n            <!--<md-button>Copy Link</md-button>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\n  import axios from 'axios'\r\n  let axiosRequestConfig = {\r\n    validateStatus: function (status) {\r\n      return status >= 200 && status < 500\r\n    }\r\n  }\r\n\r\n  export default {\r\n    props: ['itemId', 'itemPass'],\r\n    data: function () {\r\n      return {\r\n        loading: true,\r\n        file: {\r\n          name: 'Loading',\r\n          size: 'retrieving information from server',\r\n          id: null,\r\n          pass: ''\r\n        },\r\n        error: false,\r\n        cItemPass: ''\r\n      }\r\n    },\r\n    methods: {\r\n      downloadFile: function () {\r\n        window.location.href = '/api/download/' + this.file.id + (this.file.pass ? '!' + this.file.pass : '')\r\n      },\r\n      updateFileInfo: function (key) {\r\n        let vm = this\r\n        let suffix = key ? '!' + key : ''\r\n        vm.file.id = vm.itemId\r\n        axios.get('/api/fileinfo/' + vm.file.id + suffix, axiosRequestConfig)\r\n          .then(function (response) {\r\n            if (response.status == 200) {\r\n              vm.file.name = response.data.name\r\n              vm.file.sizeText = vm.$root.humanFileSize(response.data.size)\r\n              vm.loading = false\r\n              if (suffix) {\r\n                vm.file.pass = key\r\n              }\r\n            } else if (response.status == 401) {\r\n              // file is password protected\r\n              vm.$root.showPrompt('Enter password', 'File password', function (r) {\r\n                let responded = true\r\n                if (r) {\r\n                  setTimeout(() => {\r\n                    vm.updateFileInfo(r)\r\n                  }, 500)\r\n                } else {\r\n                  vm.file.name = 'Incorrect Password'\r\n                  vm.file.sizeText = 'Access Denied'\r\n                  vm.loading = false\r\n                  vm.error = true\r\n                }\r\n              })\r\n            }\r\n          })\r\n          .catch(function (error) {\r\n            console.log(error)\r\n            // file not found\r\n            vm.file.name = 'File Not Found'\r\n            vm.file.sizeText = 'Error'\r\n            vm.loading = false\r\n            vm.error = true\r\n          })\r\n      },\r\n      handleGlobalKeypress: function (e) {\r\n        e = e || window.event\r\n        if (e) {\r\n          switch (e.keyCode) {\r\n            case 40:\r\n              // down\r\n              this.downloadFile()\r\n              break;\r\n          }\r\n        }\r\n      }\r\n    },\r\n    mounted: function () {\r\n      if (this.itemPass) {\r\n        try {\r\n          this.cItemPass = window.atob(this.itemPass)\r\n        } catch (e) {\r\n          this.cItemPass = null\r\n        }\r\n      }\r\n      this.updateFileInfo(this.cItemPass)\r\n      document.onkeydown = this.handleGlobalKeypress\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  .download-item {\r\n    margin: 2%;\r\n  }\r\n  \r\n  .download-area-padding {\r\n    margin: 20px;\r\n    padding: 2%;\r\n    padding-top: 10%;\r\n    background: #f7f7f7;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  props: ['itemId', 'itemPass'],
	  data: function data() {
	    return {
	      loading: true,
	      file: {
	        name: 'Loading',
	        size: 'retrieving information from server',
	        id: null,
	        pass: ''
	      },
	      error: false,
	      cItemPass: ''
	    };
	  },
	  methods: {
	    downloadFile: function downloadFile() {
	      window.location.href = '/api/download/' + this.file.id + (this.file.pass ? '!' + this.file.pass : '');
	    },
	    updateFileInfo: function updateFileInfo(key) {
	      var vm = this;
	      var suffix = key ? '!' + key : '';
	      vm.file.id = vm.itemId;
	      _axios2.default.get('/api/fileinfo/' + vm.file.id + suffix, axiosRequestConfig).then(function (response) {
	        if (response.status == 200) {
	          vm.file.name = response.data.name;
	          vm.file.sizeText = vm.$root.humanFileSize(response.data.size);
	          vm.loading = false;
	          if (suffix) {
	            vm.file.pass = key;
	          }
	        } else if (response.status == 401) {
	          vm.$root.showPrompt('Enter password', 'File password', function (r) {
	            var responded = true;
	            if (r) {
	              setTimeout(function () {
	                vm.updateFileInfo(r);
	              }, 500);
	            } else {
	              vm.file.name = 'Incorrect Password';
	              vm.file.sizeText = 'Access Denied';
	              vm.loading = false;
	              vm.error = true;
	            }
	          });
	        }
	      }).catch(function (error) {
	        console.log(error);
	
	        vm.file.name = 'File Not Found';
	        vm.file.sizeText = 'Error';
	        vm.loading = false;
	        vm.error = true;
	      });
	    },
	    handleGlobalKeypress: function handleGlobalKeypress(e) {
	      e = e || window.event;
	      if (e) {
	        switch (e.keyCode) {
	          case 40:
	            this.downloadFile();
	            break;
	        }
	      }
	    }
	  },
	  mounted: function mounted() {
	    if (this.itemPass) {
	      try {
	        this.cItemPass = window.atob(this.itemPass);
	      } catch (e) {
	        this.cItemPass = null;
	      }
	    }
	    this.updateFileInfo(this.cItemPass);
	    document.onkeydown = this.handleGlobalKeypress;
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "download-item"
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("File Download")]), _vm._v(" "), _c('div', {
	    staticClass: "download-area-padding"
	  }, [(_vm.loading) ? _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Loading File Information")])], 1) : _c('div', [_c('md-icon', {
	    staticClass: "md-primary",
	    attrs: {
	      "md-theme": "light-blue"
	    }
	  }, [_vm._v("insert_drive_file")]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.file.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.file.sizeText))]), _vm._v(" "), (!_vm.error) ? _c('div', [_c('div', {
	    staticClass: "right"
	  }, [_c('md-button', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.downloadFile($event)
	      }
	    }
	  }, [(_vm.file.pass.length > 0) ? _c('md-icon', [_vm._v("lock")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v("\n            Download\n          ")])], 1)], 1)]) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "row download-area"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('downloadItem', {
	    attrs: {
	      "itemId": _vm.$route.params.id,
	      "itemPass": _vm.$route.params.pass
	    }
	  })], 1)]), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(56)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(64),
	  /* scopeId */
	  "data-v-097abb6a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\dashboard.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("271ac607", content, false);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-097abb6a] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/dashboard.vue?8c264bdc"],"names":[],"mappings":";AAmCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <intro view-title=\"Dashboard\"></intro>\r\n    <fileUploadWidget></fileUploadWidget>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/intro'\r\n  import fileUploadWidget from '../components/fileUploadWidget'\r\n  import devCredits from '../components/devCredits'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      fileUploadWidget,\r\n      devCredits\r\n    },\r\n    beforeRouteEnter(to, from, next) {\r\n      next(vm => {\r\n        if (!vm.$root.loggedIn) {\r\n          vm.$router.replace('/')\r\n        }\r\n      })\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _fileUploadWidget = __webpack_require__(59);
	
	var _fileUploadWidget2 = _interopRequireDefault(_fileUploadWidget);
	
	var _devCredits = __webpack_require__(23);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    fileUploadWidget: _fileUploadWidget2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(60)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(62),
	  /* template */
	  __webpack_require__(63),
	  /* scopeId */
	  "data-v-4092b520",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\fileUploadWidget.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] fileUploadWidget.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("59097340", content, false);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.upload-area-padding[data-v-4092b520] {\n  margin: 20px;\n  padding: 14%;\n  background: #f7f7f7;\n}\n.upload-progress-indicators[data-v-4092b520] {\n  text-align: center;\n}\n.upload-progress-bar[data-v-4092b520] {\n  padding: 5px;\n}\n.upload-settings-section[data-v-4092b520] {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/fileUploadWidget.vue?132286e1"],"names":[],"mappings":";AAgMA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;CACA","file":"fileUploadWidget.vue","sourcesContent":["<template>\r\n  <div class=\"file-upload-widget\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"ten columns offset-by-one\">\r\n          <div class=\"left sep-b\">\r\n            <md-button class=\"md-raised md-primary\" @click.native=\"viewMyFiles\">View my files</md-button>\r\n          </div>\r\n          <div class=\"upload-here\" @drop.stop.prevent=\"handleDragDropUpload\" @dragenter.stop.prevent @dragleave.stop.prevent @dragover.stop.prevent>\r\n            <!--<a class=\"target\">Drag and drop or click to upload files</a>-->\r\n            <div class=\"md-title\">Upload Files</div>\r\n            <div class=\"row upload-settings-section\">\r\n              <div class=\"six columns offset-by-three\">\r\n                <md-input-container>\r\n                  <label>Upload Destination</label>\r\n                  <md-input v-model=\"uploadDestination\"></md-input>\r\n                </md-input-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"md-subhead\">Drag and drop or click</div>\r\n            <div class=\"upload-area-padding\" @click.native=\"browseForFiles\">\r\n            </div>\r\n            <div class=\"upload-progress-indicators\">\r\n              <!--<md-spinner md-size=\"60\" :md-progress=\"progressIndicator.value\" class=\"md-warn\"></md-spinner>\r\n                  <p>{{ progressMessage }}</p>-->\r\n              <md-list class=\"custom-list md-double-line\">\r\n                <!--Uploading file-->\r\n                <md-subheader v-if=\"progressIndicators.length > 0\">Uploading</md-subheader>\r\n                <md-list-item v-for=\"(prInd, ix) in progressIndicators\">\r\n                  <md-icon class=\"md-primary\" v-if=\"!prInd.error\">cloud_queue</md-icon>\r\n                  <md-icon class=\"md-primary\" v-else>error</md-icon>\r\n                  <div class=\"md-list-text-container\">\r\n                    <span> {{ prInd.name }} </span>\r\n                    <!--<span v-if=\"!prInd.error\"> {{ (prInd.value < 100) ? `Uploading... (${prInd.value}%)` : 'Uploaded, Processing...' }}</span>-->\r\n                    <template class=\"upload-progress-bar\" v-if=\"!prInd.error\">\r\n                      <span>{{ (prInd.value < 100) ? `Uploading... (${prInd.value}%)` : 'Uploaded, Processing...' }}</span>\r\n                      <md-progress :md-progress=\"prInd.value\"></md-progress>\r\n                    </template>\r\n                    <span v-else> {{ 'Upload error: ' + prInd.message }}</span>\r\n                  </div>\r\n                  <md-button class=\"md-icon-button md-list-action\" @click.native=\"cancelUpload(prInd)\">\r\n                    <md-icon class=\"md-primary\">cancel</md-icon>\r\n                  </md-button>\r\n                  <md-button class=\"md-icon-button md-list-action\">\r\n                    <md-icon class=\"md-primary\">file_upload</md-icon>\r\n                  </md-button>\r\n                  <md-divider class=\"md-inset\"></md-divider>\r\n                </md-list-item>\r\n                <!--Upload completed files-->\r\n                <md-subheader v-if=\"completedFiles.length > 0\">Completed</md-subheader>\r\n                <md-list-item v-for=\"(cmplFile, ix) in completedFiles\" @click.native=\"visitUrl(cmplFile.downloadPage)\">\r\n                  <md-icon class=\"md-primary\">cloud_done</md-icon>\r\n                  <div class=\"md-list-text-container\">\r\n                    <span> {{ cmplFile.name }}</span>\r\n                    <span>Upload Complete!</span>\r\n                  </div>\r\n                  <md-button class=\"md-icon-button md-list-action\">\r\n                    <md-icon class=\"md-primary\">done</md-icon>\r\n                  </md-button>\r\n                  <md-divider class=\"md-inset\"></md-divider>\r\n                </md-list-item>\r\n              </md-list>\r\n              <md-button v-if=\"completedFiles.length > 0\" @click.native=\"completedFiles = []\">Clear All</md-button>\r\n            </div>\r\n            <input type=\"file\" class=\"invisible\" ref=\"browse\" @change=\"onFilesUploaded\" multiple />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\n  import axios from 'axios'\r\n\r\n  let axiosRequestConfig = {\r\n    validateStatus: function (status) {\r\n      return status >= 200 && status < 500\r\n    }\r\n  }\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n        progressIndicators: [],\r\n        /* schema:\r\n        {\r\n          value: number [0-100],\r\n          fileRef: object [reference to file that is uploading],\r\n          name: string [name of file],\r\n          xhr: object [xhr object reference],\r\n          error: bool\r\n          message: string or null [an error message]\r\n        }\r\n        */\r\n        completedFiles: [],\r\n        /* schema:\r\n         */\r\n        uploadDestination: '/'\r\n      }\r\n    },\r\n    computed: {\r\n      uploadingFiles: function () {\r\n        return this.progressIndicators.length\r\n      },\r\n      uploading: function () {\r\n        return this.uploadingFiles > 0\r\n      }\r\n    },\r\n    methods: {\r\n      viewMyFiles: function () {\r\n        this.$router.push('/files')\r\n      },\r\n      browseForFiles: function () {\r\n        this.$refs.browse.click()\r\n      },\r\n      onFilesUploaded: function (e) {\r\n        let browse = this.$refs.browse\r\n        let fileCount = browse.files.length\r\n        for (let i = 0; i < fileCount; i++) {\r\n          let f = browse.files[i]\r\n          let progress = {\r\n            value: 0,\r\n            fileRef: f,\r\n            name: f.name\r\n          }\r\n          this.progressIndicators.push(progress)\r\n          this.uploadFile(f, progress)\r\n        }\r\n      },\r\n      handleDragDropUpload: function (e) {\r\n        for (var i = 0; i < e.dataTransfer.files.length; i++) {\r\n          var f = e.dataTransfer.files[i];\r\n          let progress = {\r\n            value: 0,\r\n            fileRef: f,\r\n            name: f.name,\r\n            error: false,\r\n            message: ''\r\n          }\r\n          this.progressIndicators.push(progress)\r\n          this.uploadFile(f, progress)\r\n        }\r\n      },\r\n      cancelUpload: function (progress) {\r\n        let vm = this\r\n        progress.xhr.abort()\r\n        vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)\r\n      },\r\n      uploadFile: function (file, progress) {\r\n        let vm = this\r\n        let xhr = new XMLHttpRequest()\r\n        progress.xhr = xhr\r\n        xhr.open(\"POST\", \"/api/upload\")\r\n        xhr.onload = function () {\r\n          if (xhr.status === 200) {\r\n            // upload complete\r\n            // console.log('upload complete', progress.name)\r\n            // dequeue the uploading file\r\n            vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)\r\n            // console.log(xhr.responseText)\r\n            let response = JSON.parse(xhr.responseText)\r\n            vm.completedFiles.push({\r\n              name: progress.name,\r\n              downloadPage: '/#/d/' + response.fileId\r\n              // downloadPage: response.downloadPage // get download page from server response\r\n            })\r\n          } else {\r\n            // update progress indicator\r\n            progress.error = true\r\n            // progress.message = xhr.responseText\r\n            // reactive update\r\n            vm.$set(progress, 'message', xhr.responseText)\r\n          }\r\n        }\r\n        xhr.upload.onprogress = function (e) {\r\n          if (e.lengthComputable) {\r\n            progress.value = Math.floor((e.loaded / e.total) * 100)\r\n          }\r\n        }\r\n        let form = new FormData()\r\n        form.append(\"apikey\", vm.$root.u.key)\r\n        form.append(\"dir\", vm.uploadDestination)\r\n        form.append(\"file\", file)\r\n        xhr.send(form)\r\n      },\r\n      visitUrl: function (u) {\r\n        window.open(u, '_blank')\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  .upload-area-padding {\r\n    margin: 20px;\r\n    padding: 14%;\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .upload-progress-indicators {\r\n    text-align: center;\r\n  }\r\n  \r\n  .upload-progress-bar {\r\n    padding: 5px;\r\n  }\r\n  \r\n  .upload-settings-section {\r\n    text-align: center;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  data: function data() {
	    return {
	      progressIndicators: [],
	
	      completedFiles: [],
	
	      uploadDestination: '/'
	    };
	  },
	
	  computed: {
	    uploadingFiles: function uploadingFiles() {
	      return this.progressIndicators.length;
	    },
	    uploading: function uploading() {
	      return this.uploadingFiles > 0;
	    }
	  },
	  methods: {
	    viewMyFiles: function viewMyFiles() {
	      this.$router.push('/files');
	    },
	    browseForFiles: function browseForFiles() {
	      this.$refs.browse.click();
	    },
	    onFilesUploaded: function onFilesUploaded(e) {
	      var browse = this.$refs.browse;
	      var fileCount = browse.files.length;
	      for (var i = 0; i < fileCount; i++) {
	        var f = browse.files[i];
	        var progress = {
	          value: 0,
	          fileRef: f,
	          name: f.name
	        };
	        this.progressIndicators.push(progress);
	        this.uploadFile(f, progress);
	      }
	    },
	    handleDragDropUpload: function handleDragDropUpload(e) {
	      for (var i = 0; i < e.dataTransfer.files.length; i++) {
	        var f = e.dataTransfer.files[i];
	        var progress = {
	          value: 0,
	          fileRef: f,
	          name: f.name,
	          error: false,
	          message: ''
	        };
	        this.progressIndicators.push(progress);
	        this.uploadFile(f, progress);
	      }
	    },
	    cancelUpload: function cancelUpload(progress) {
	      var vm = this;
	      progress.xhr.abort();
	      vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1);
	    },
	    uploadFile: function uploadFile(file, progress) {
	      var vm = this;
	      var xhr = new XMLHttpRequest();
	      progress.xhr = xhr;
	      xhr.open("POST", "/api/upload");
	      xhr.onload = function () {
	        if (xhr.status === 200) {
	          vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1);
	
	          var response = JSON.parse(xhr.responseText);
	          vm.completedFiles.push({
	            name: progress.name,
	            downloadPage: '/#/d/' + response.fileId
	          });
	        } else {
	          progress.error = true;
	
	          vm.$set(progress, 'message', xhr.responseText);
	        }
	      };
	      xhr.upload.onprogress = function (e) {
	        if (e.lengthComputable) {
	          progress.value = Math.floor(e.loaded / e.total * 100);
	        }
	      };
	      var form = new FormData();
	      form.append("apikey", vm.$root.u.key);
	      form.append("dir", vm.uploadDestination);
	      form.append("file", file);
	      xhr.send(form);
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    }
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "file-upload-widget"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "ten columns offset-by-one"
	  }, [_c('div', {
	    staticClass: "left sep-b"
	  }, [_c('md-button', {
	    staticClass: "md-raised md-primary",
	    nativeOn: {
	      "click": function($event) {
	        _vm.viewMyFiles($event)
	      }
	    }
	  }, [_vm._v("View my files")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "upload-here",
	    on: {
	      "drop": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.handleDragDropUpload($event)
	      },
	      "dragenter": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      },
	      "dragleave": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      },
	      "dragover": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      }
	    }
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("Upload Files")]), _vm._v(" "), _c('div', {
	    staticClass: "row upload-settings-section"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Upload Destination")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.uploadDestination),
	      expression: "uploadDestination"
	    }],
	    domProps: {
	      "value": (_vm.uploadDestination)
	    },
	    on: {
	      "input": function($event) {
	        _vm.uploadDestination = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "md-subhead"
	  }, [_vm._v("Drag and drop or click")]), _vm._v(" "), _c('div', {
	    staticClass: "upload-area-padding",
	    nativeOn: {
	      "click": function($event) {
	        _vm.browseForFiles($event)
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "upload-progress-indicators"
	  }, [_c('md-list', {
	    staticClass: "custom-list md-double-line"
	  }, [(_vm.progressIndicators.length > 0) ? _c('md-subheader', [_vm._v("Uploading")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.progressIndicators), function(prInd, ix) {
	    return _c('md-list-item', [(!prInd.error) ? _c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_queue")]) : _c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("error")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(prInd.name) + " ")]), _vm._v(" "), (!prInd.error) ? [_c('span', [_vm._v(_vm._s((prInd.value < 100) ? ("Uploading... (" + (prInd.value) + "%)") : 'Uploaded, Processing...'))]), _vm._v(" "), _c('md-progress', {
	      attrs: {
	        "md-progress": prInd.value
	      }
	    })] : _c('span', [_vm._v(" " + _vm._s('Upload error: ' + prInd.message))])], 2), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      nativeOn: {
	        "click": function($event) {
	          _vm.cancelUpload(prInd)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cancel")])], 1), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action"
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("file_upload")])], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  }), _vm._v(" "), (_vm.completedFiles.length > 0) ? _c('md-subheader', [_vm._v("Completed")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.completedFiles), function(cmplFile, ix) {
	    return _c('md-list-item', {
	      nativeOn: {
	        "click": function($event) {
	          _vm.visitUrl(cmplFile.downloadPage)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_done")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(cmplFile.name))]), _vm._v(" "), _c('span', [_vm._v("Upload Complete!")])]), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action"
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("done")])], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  })], 2), _vm._v(" "), (_vm.completedFiles.length > 0) ? _c('md-button', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.completedFiles = []
	      }
	    }
	  }, [_vm._v("Clear All")]) : _vm._e()], 1), _vm._v(" "), _c('input', {
	    ref: "browse",
	    staticClass: "invisible",
	    attrs: {
	      "type": "file",
	      "multiple": ""
	    },
	    on: {
	      "change": _vm.onFilesUploaded
	    }
	  })])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "Dashboard"
	    }
	  }), _vm._v(" "), _c('fileUploadWidget'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(66)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(68),
	  /* template */
	  __webpack_require__(75),
	  /* scopeId */
	  "data-v-42356d21",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\myfiles.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myfiles.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("f6658afe", content, false);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-42356d21] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/myfiles.vue?607d00a2"],"names":[],"mappings":";AAiCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA","file":"myfiles.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <intro view-title=\"My Files\"></intro>\r\n    <myFilesList :dir=\"dir\"></myFilesList>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n<script>\r\n  import Intro from '../components/intro'\r\n  import myFilesList from '../components/myFilesList'\r\n  import devCredits from '../components/devCredits'\r\n\r\n  export default {\r\n    props: ['dir'],\r\n    data() {\r\n      return {}\r\n    },\r\n    components: {\r\n      Intro,\r\n      myFilesList,\r\n      devCredits\r\n    },\r\n    beforeRouteEnter(to, from, next) {\r\n      next(vm => {\r\n        if (!vm.$root.loggedIn) {\r\n          vm.$router.replace('/')\r\n        }\r\n      })\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myFilesList = __webpack_require__(69);
	
	var _myFilesList2 = _interopRequireDefault(_myFilesList);
	
	var _devCredits = __webpack_require__(23);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['dir'],
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    myFilesList: _myFilesList2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(70)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(72),
	  /* template */
	  __webpack_require__(74),
	  /* scopeId */
	  "data-v-6c28670a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myFilesList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myFilesList.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("904dafea", content, false);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"myFilesList.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(73);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  props: ['dir'],
	  data: function data() {
	    return {
	      dirStructure: {},
	      files: [],
	      dirs: [],
	      loadFinished: false,
	      error: false,
	      currentDir: this.dir
	    };
	  },
	
	  computed: {
	    noItems: function noItems() {
	      return this.files.length == 0 && this.dirs.length == 0;
	    },
	    atRootDir: function atRootDir() {
	      return this.currentDir === '/';
	    },
	    currentDirStructure: function currentDirStructure() {
	      var _this = this;
	
	      var segments = this.currentDir.split('/');
	
	      segments = segments.filter(Boolean);
	
	      var workingDirStructure = this.dirStructure;
	
	      var _loop = function _loop(i) {
	        var currentSegment = segments[i];
	        workingDirStructure = workingDirStructure.dirs.find(function (d) {
	          return d.name === currentSegment;
	        });
	        if (!workingDirStructure) {
	          _this.error = true;
	          return {
	            v: null
	          };
	        }
	      };
	
	      for (var i = 0; i < segments.length; i++) {
	        var _ret = _loop(i);
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	      return workingDirStructure;
	    }
	  },
	  methods: {
	    getHrSize: function getHrSize(l) {
	      return this.$root.humanFileSize(l);
	    },
	    uploadMoreFiles: function uploadMoreFiles() {
	      this.$router.push('/u');
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    },
	    visitDownloadPage: function visitDownloadPage(ix) {
	      var f = this.files[ix];
	
	      var dlPage = '/#/d/' + f.fileId;
	      window.open(dlPage, '_blank');
	    },
	
	    downloadFile: function downloadFile(ix) {
	      var f = this.files[ix];
	
	      window.location.href = '/api/fdownload/' + f.fileId + '?apikey=' + this.$root.u.key;
	    },
	    lockFile: function lockFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showPrompt('Enter password', 'Password', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            f.locked = true;
	          });
	        }
	      });
	    },
	    unlockFile: function unlockFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showConfirm('Are you sure you want to remove the password on this file?', 'Confirm Unlock', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/unlock/' + f.fileId, {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            f.locked = false;
	          });
	        }
	      });
	    },
	    renameFile: function renameFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showPrompt('Enter new name', 'File name', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/rename/' + f.fileId + '/' + r, {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            f.name = r;
	          });
	        }
	      });
	    },
	    deleteFile: function deleteFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete', function (r) {
	        if (r) {
	          _axios2.default.delete('/api/delete/' + f.fileId, vm.$root.getAuthRequestParams()).then(function (res) {
	            vm.files.splice(ix, 1);
	            vm.currentDirStructure.files.splice(ix, 1);
	
	            if (vm.noItems) {
	              vm.dirStructure.dirs = vm.dirStructure.dirs.filter(function (d) {
	                return d.name !== vm.currentDirStructure.name;
	              });
	              vm.dirUpLevel();
	            }
	          });
	        }
	      });
	    },
	    openDir: function openDir(ix) {
	      var newDirPath = this.dirs[ix].path;
	      this.navigateToDir(newDirPath);
	    },
	    dirUpLevel: function dirUpLevel() {
	      if (!this.atRootDir) {
	        var segments = this.currentDir.split('/');
	        segments = segments.filter(Boolean);
	        segments.pop();
	        var newDirPath = '/' + segments.join('/');
	        this.navigateToDir(newDirPath);
	      }
	    },
	    navigateToDir: function navigateToDir(path) {
	      this.$router.push('/files' + path);
	    },
	    updateFilesDirs: function updateFilesDirs() {
	      var workingDirStructure = this.currentDirStructure;
	      if (!workingDirStructure) return;
	
	      this.files = workingDirStructure.files;
	      this.dirs = workingDirStructure.dirs;
	    },
	    fetchData: function fetchData() {
	      var vm = this;
	      vm.currentDir = vm.currentDir || '/';
	
	      vm.$root.getAuthRequestParams();
	      _axios2.default.get('/api/files', vm.$root.getAuthRequestParams()).then(function (response) {
	        vm.dirStructure = response.data;
	        vm.updateFilesDirs();
	        vm.loadFinished = true;
	      }).catch(function (error) {
	        if (error) {
	          vm.error = true;
	        }
	        vm.loadFinished = true;
	      });
	    },
	    handleGlobalKeypress: function handleGlobalKeypress(e) {
	      e = e || window.event;
	      if (e) {
	        switch (e.keyCode) {
	          case 37:
	            this.$router.go(-1);
	            break;
	          case 38:
	            this.dirUpLevel();
	            break;
	          case 39:
	            this.$router.go(1);
	            break;
	          case 40:
	            break;
	        }
	      }
	    }
	  },
	  watch: {
	    '$route': function $route(to, from) {
	      if (!this.dirStructure) {
	        this.fetchData();
	      }
	      this.currentDir = '/' + (to.params.dir || '');
	
	      this.updateFilesDirs();
	    }
	  },
	  mounted: function mounted() {
	    this.fetchData();
	    document.onkeydown = this.handleGlobalKeypress;
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "my-files-list"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "ten columns offset-by-one"
	  }, [_c('div', {
	    staticClass: "left sep-b"
	  }, [_c('md-button', {
	    staticClass: "md-raised md-primary",
	    nativeOn: {
	      "click": function($event) {
	        _vm.uploadMoreFiles($event)
	      }
	    }
	  }, [_vm._v("Upload Files")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "uploaded-files-list"
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("All My Files")]), _vm._v(" "), (_vm.loadFinished) ? _c('div', [(_vm.error) ? _c('div', [_c('p', [_vm._v("Error")])]) : (_vm.noItems) ? _c('div', [_c('p', [_vm._v("No Files")])]) : _vm._e(), _vm._v(" "), _c('md-list', {
	    staticClass: "custom-list md-double-line"
	  }, [(!_vm.atRootDir) ? _c('div', [_c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.dirUpLevel()
	      }
	    }
	  }, [_c('md-icon', {
	    staticClass: "md-primary"
	  }, [_vm._v("folder")]), _vm._v(" "), _c('div', {
	    staticClass: "md-list-text-container"
	  }, [_c('span', [_vm._v(" .. ")]), _vm._v(" "), _c('span', [_vm._v(" Parent Folder ")])])], 1)], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.dirs), function(dir, ix) {
	    return _c('md-list-item', {
	      nativeOn: {
	        "click": function($event) {
	          _vm.openDir(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("folder")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(dir.name))]), _vm._v(" "), _c('span', [_vm._v(" Folder ")])])], 1)
	  }), _vm._v(" "), _vm._l((_vm.files), function(file, ix) {
	    return _c('md-list-item', [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_done")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(file.name))]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.getHrSize(file.size)))])]), _vm._v(" "), (!file.locked) ? _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      nativeOn: {
	        "click": function($event) {
	          _vm.lockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock_open")])], 1) : _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      nativeOn: {
	        "click": function($event) {
	          _vm.unlockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock")])], 1), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      nativeOn: {
	        "click": function($event) {
	          _vm.downloadFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("file_download")])], 1), _vm._v(" "), _c('md-menu', {
	      attrs: {
	        "md-align-trigger": ""
	      }
	    }, [_c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      attrs: {
	        "md-menu-trigger": ""
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("more_horiz")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
	      nativeOn: {
	        "click": function($event) {
	          _vm.visitDownloadPage(ix)
	        }
	      }
	    }, [_vm._v("Download Page")]), _vm._v(" "), _c('md-menu-item', {
	      nativeOn: {
	        "click": function($event) {
	          _vm.renameFile(ix)
	        }
	      }
	    }, [_vm._v("Rename")]), _vm._v(" "), _c('md-menu-item', {
	      nativeOn: {
	        "click": function($event) {
	          _vm.deleteFile(ix)
	        }
	      }
	    }, [_vm._v("Delete")])], 1)], 1)], 1)
	  })], 2)], 1) : _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Retrieving Data")])], 1)])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "My Files"
	    }
	  }), _vm._v(" "), _c('myFilesList', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(77)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(79),
	  /* template */
	  __webpack_require__(85),
	  /* scopeId */
	  "data-v-83c08102",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\profile.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] profile.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("f8c1bde6", content, false);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-83c08102] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/profile.vue?5775bb00"],"names":[],"mappings":";AAyCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"profile.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <div class=\"container\">\r\n      <intro view-title=\"User Profile\"></intro>\r\n      <div class=\"row\">\r\n        <div class=\"twelve columns\">\r\n          <myProfile></myProfile>\r\n        </div>\r\n      </div>\r\n      <devCredits></devCredits>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/intro'\r\n  import myProfile from '../components/myProfile'\r\n  import devCredits from '../components/devCredits'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      myProfile,\r\n      devCredits\r\n    },\r\n    beforeRouteEnter(to, from, next) {\r\n      next(vm => {\r\n        if (!vm.$root.loggedIn) {\r\n          vm.$router.replace('/')\r\n        }\r\n      })\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-top: 60px;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(13);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myProfile = __webpack_require__(80);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	var _devCredits = __webpack_require__(23);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    myProfile: _myProfile2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(81)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(84),
	  /* scopeId */
	  "data-v-ca209384",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myProfile.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myProfile.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("03295e2a", content, false);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.p-section[data-v-ca209384] {\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\n}\r\n", "", {"version":3,"sources":["/./ClientApp/components/myProfile.vue?3fec171b"],"names":[],"mappings":";AAgMA;EACA,eAAA;EACA,kBAAA;CACA","file":"myProfile.vue","sourcesContent":["<template>\r\n  <div class=\"my-profile left\">\r\n    <h4>Manage Account ({{ $root.u.name }})</h4>\r\n    <div class=\"p-section\">\r\n      <h5>Resource Usage</h5>\r\n      <div v-if=\"uInfo.loaded\">\r\n        <p>\r\n          Using\r\n          <b>{{ uInfo.usage }}</b> of <b>{{ uInfo.quota }}</b>\r\n        </p>\r\n      </div>\r\n      <div v-else>\r\n        <md-spinner :md-stroke=\"1.5\" md-indeterminate></md-spinner>\r\n        <p>Retrieving Data</p>\r\n      </div>\r\n      <p></p>\r\n    </div>\r\n    <div class=\"p-section\">\r\n      <h5>API</h5>\r\n      <h6>API Key: <code>{{ $root.u.key }}</code></h6>\r\n      <md-button class=\"md-primary md-raised\" @click.native=\"generateNewApiKey\">Generate New</md-button>\r\n    </div>\r\n    <div class=\"p-section\">\r\n      <h5>Security</h5>\r\n      <form v-on:submit.prevent=\"tryUpdatePassword\">\r\n        <div class=\"row\">\r\n          <div class=\"eight columns\">\r\n            <md-input-container>\r\n              <label>Current password</label>\r\n              <md-input type=\"password\" v-model=\"updatePassword.old\"></md-input>\r\n            </md-input-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"six columns\">\r\n            <md-input-container md-has-password>\r\n              <label>New Password</label>\r\n              <md-input type=\"password\" v-model=\"updatePassword.password\"></md-input>\r\n            </md-input-container>\r\n          </div>\r\n          <div class=\"six columns\">\r\n            <md-input-container>\r\n              <label>Confirm New Password</label>\r\n              <md-input type=\"password\" v-model=\"updatePassword.confirm\"></md-input>\r\n            </md-input-container>\r\n          </div>\r\n        </div>\r\n        <p class=\"error-message\">{{ updatePassword.err }}</p>\r\n        <input type=\"submit\" class=\"invisible\"></input>\r\n        <md-button class=\"md-raised md-primary\" @click.native=\"tryUpdatePassword\" :disabled=\"!updatePassword.e\">Change Password</md-button>\r\n      </form>\r\n    </div>\r\n    <div>\r\n      <h5>Danger Zone</h5>\r\n      <md-button class=\"md-raised md-warn\" @click.native=\"deleteAllFiles\">Delete All Files</md-button>\r\n      <md-button class=\"md-raised md-warn\" @click.native=\"deleteAccount\">Delete Account</md-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import axios from 'axios'\r\n  let axiosRequestConfig = {\r\n    validateStatus: function (status) {\r\n      return status >= 200 && status < 500\r\n    }\r\n  }\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n        updatePassword: {\r\n          old: '',\r\n          password: '',\r\n          confirm: '',\r\n          err: '',\r\n          e: true // enabled\r\n        },\r\n        uInfo: {\r\n          quota: null,\r\n          usage: null,\r\n          loaded: false\r\n        }\r\n      }\r\n    },\r\n    methods: {\r\n      generateNewApiKey: function () {\r\n        let vm = this\r\n        vm.$root.showConfirm('Are you sure you want a new API key? The old one will no longer work. You will then be logged out.', 'Confirm Action', function (r) {\r\n          if (r) {\r\n            axios.patch('/api/newkey', {}, vm.$root.getAuthRequestParams())\r\n              .then((res) => {\r\n                // done\r\n                vm.$root.u.key = ''\r\n                vm.$root.showPopup('New API key generated. Please log in again.', 'Success')\r\n                vm.$router.replace('/')\r\n              })\r\n          }\r\n        })\r\n      },\r\n      deleteAllFiles: function () {\r\n        let vm = this\r\n        vm.$root.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {\r\n          if (r) {\r\n            axios.delete('/api/nuke/files', vm.$root.getAuthRequestParams())\r\n              .then(function (res) {\r\n                // files have been nuked.\r\n              })\r\n            // now log out\r\n            vm.$root.u.key = ''\r\n            vm.$router.replace('/')\r\n          }\r\n        })\r\n      },\r\n      deleteAccount: function () {\r\n        let vm = this\r\n        vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {\r\n          if (r1) {\r\n            if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {\r\n              axios.delete('/api/nuke/user', vm.$root.getAuthRequestParams())\r\n                .then(function (res) {\r\n                  // account has been nuked.\r\n                })\r\n              // now log out\r\n              vm.$root.u.key = ''\r\n              vm.$router.replace('/')\r\n            }\r\n          }\r\n        })\r\n      },\r\n      tryUpdatePassword: function () {\r\n        let vm = this\r\n        if (!vm.updatePassword.e) return\r\n        // make sure confirmation is correct\r\n        if (vm.updatePassword.password.length < 8) {\r\n          vm.updatePassword.err = 'password must be at least 8 characters. this is also validated on the server'\r\n          return\r\n        }\r\n        if (vm.updatePassword.password !== vm.updatePassword.confirm) {\r\n          vm.updatePassword.err = 'password confirmation does not match'\r\n          return\r\n        }\r\n        vm.updatePassword.e = false\r\n        // reset error message\r\n        vm.updatePassword.err = ''\r\n        // send updatePassword post\r\n        axios.patch('/changepassword', {\r\n          username: vm.$root.u.name,\r\n          oldPassword: vm.updatePassword.old,\r\n          newPassword: vm.updatePassword.password\r\n        }, axiosRequestConfig)\r\n          .then((response) => {\r\n            // TODO: process response\r\n            if (response.status === 200) {\r\n              // success\r\n              vm.$root.showPopup('Password change succeeded! Please log in again.')\r\n              // log out\r\n              vm.$root.u.key = ''\r\n              vm.$router.replace('/')\r\n            } else if (response.status === 401) {\r\n              // unauthorized because of error\r\n              vm.updatePassword.err = response.data\r\n            }\r\n            vm.updatePassword.e = true\r\n          })\r\n          .catch(function (error) {\r\n            if (error) {\r\n              console.log(error)\r\n            }\r\n            vm.updatePassword.e = true\r\n          })\r\n      }\r\n    },\r\n    mounted: function () {\r\n      // load files from server\r\n      let vm = this\r\n      vm.$root.getAuthRequestParams().params.apikey = vm.$root.u.key\r\n      // load user info\r\n      axios.get('/api/userinfo', vm.$root.getAuthRequestParams())\r\n        .then(function (res) {\r\n          // fetched data\r\n          vm.uInfo = {\r\n            quota: vm.$root.humanFileSize(res.data.quota),\r\n            usage: vm.$root.humanFileSize(res.data.usage),\r\n            loaded: true\r\n          }\r\n        })\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n.p-section {\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  data: function data() {
	    return {
	      updatePassword: {
	        old: '',
	        password: '',
	        confirm: '',
	        err: '',
	        e: true },
	      uInfo: {
	        quota: null,
	        usage: null,
	        loaded: false
	      }
	    };
	  },
	
	  methods: {
	    generateNewApiKey: function generateNewApiKey() {
	      var vm = this;
	      vm.$root.showConfirm('Are you sure you want a new API key? The old one will no longer work. You will then be logged out.', 'Confirm Action', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/newkey', {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            vm.$root.u.key = '';
	            vm.$root.showPopup('New API key generated. Please log in again.', 'Success');
	            vm.$router.replace('/');
	          });
	        }
	      });
	    },
	    deleteAllFiles: function deleteAllFiles() {
	      var vm = this;
	      vm.$root.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {
	        if (r) {
	          _axios2.default.delete('/api/nuke/files', vm.$root.getAuthRequestParams()).then(function (res) {});
	
	          vm.$root.u.key = '';
	          vm.$router.replace('/');
	        }
	      });
	    },
	    deleteAccount: function deleteAccount() {
	      var vm = this;
	      vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {
	        if (r1) {
	          if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {
	            _axios2.default.delete('/api/nuke/user', vm.$root.getAuthRequestParams()).then(function (res) {});
	
	            vm.$root.u.key = '';
	            vm.$router.replace('/');
	          }
	        }
	      });
	    },
	    tryUpdatePassword: function tryUpdatePassword() {
	      var vm = this;
	      if (!vm.updatePassword.e) return;
	
	      if (vm.updatePassword.password.length < 8) {
	        vm.updatePassword.err = 'password must be at least 8 characters. this is also validated on the server';
	        return;
	      }
	      if (vm.updatePassword.password !== vm.updatePassword.confirm) {
	        vm.updatePassword.err = 'password confirmation does not match';
	        return;
	      }
	      vm.updatePassword.e = false;
	
	      vm.updatePassword.err = '';
	
	      _axios2.default.patch('/changepassword', {
	        username: vm.$root.u.name,
	        oldPassword: vm.updatePassword.old,
	        newPassword: vm.updatePassword.password
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.showPopup('Password change succeeded! Please log in again.');
	
	          vm.$root.u.key = '';
	          vm.$router.replace('/');
	        } else if (response.status === 401) {
	          vm.updatePassword.err = response.data;
	        }
	        vm.updatePassword.e = true;
	      }).catch(function (error) {
	        if (error) {
	          console.log(error);
	        }
	        vm.updatePassword.e = true;
	      });
	    }
	  },
	  mounted: function mounted() {
	    var vm = this;
	    vm.$root.getAuthRequestParams().params.apikey = vm.$root.u.key;
	
	    _axios2.default.get('/api/userinfo', vm.$root.getAuthRequestParams()).then(function (res) {
	      vm.uInfo = {
	        quota: vm.$root.humanFileSize(res.data.quota),
	        usage: vm.$root.humanFileSize(res.data.usage),
	        loaded: true
	      };
	    });
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "my-profile left"
	  }, [_c('h4', [_vm._v("Manage Account (" + _vm._s(_vm.$root.u.name) + ")")]), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("Resource Usage")]), _vm._v(" "), (_vm.uInfo.loaded) ? _c('div', [_c('p', [_vm._v("\n        Using\n        "), _c('b', [_vm._v(_vm._s(_vm.uInfo.usage))]), _vm._v(" of "), _c('b', [_vm._v(_vm._s(_vm.uInfo.quota))])])]) : _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("Retrieving Data")])], 1), _vm._v(" "), _c('p')]), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("API")]), _vm._v(" "), _c('h6', [_vm._v("API Key: "), _c('code', [_vm._v(_vm._s(_vm.$root.u.key))])]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-primary md-raised",
	    nativeOn: {
	      "click": function($event) {
	        _vm.generateNewApiKey($event)
	      }
	    }
	  }, [_vm._v("Generate New")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("Security")]), _vm._v(" "), _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryUpdatePassword($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "eight columns"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Current password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.old),
	      expression: "updatePassword.old"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.old)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.old = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns"
	  }, [_c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("New Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.password),
	      expression: "updatePassword.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.password = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "six columns"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Confirm New Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.confirm),
	      expression: "updatePassword.confirm"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.confirm)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.confirm = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.updatePassword.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.updatePassword.e
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tryUpdatePassword($event)
	      }
	    }
	  }, [_vm._v("Change Password")])], 1)]), _vm._v(" "), _c('div', [_c('h5', [_vm._v("Danger Zone")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    nativeOn: {
	      "click": function($event) {
	        _vm.deleteAllFiles($event)
	      }
	    }
	  }, [_vm._v("Delete All Files")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    nativeOn: {
	      "click": function($event) {
	        _vm.deleteAccount($event)
	      }
	    }
	  }, [_vm._v("Delete Account")])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "User Profile"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('myProfile')], 1)]), _vm._v(" "), _c('devCredits')], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./global.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/* roboto-100 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(88) + ") format('woff2'), \n    url(" + __webpack_require__(89) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-100italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 100;\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(90) + ") format('woff2'), \n    url(" + __webpack_require__(91) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(92) + ") format('woff2'), \n    url(" + __webpack_require__(93) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(94) + ") format('woff2'), \n    url(" + __webpack_require__(95) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-regular - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(96) + ") format('woff2'), \n    url(" + __webpack_require__(97) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(98) + ") format('woff2'), \n    url(" + __webpack_require__(99) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(100) + ") format('woff2'), \n    url(" + __webpack_require__(101) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(102) + ") format('woff2'), \n    url(" + __webpack_require__(103) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(104) + ") format('woff2'), \n    url(" + __webpack_require__(105) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(106) + ") format('woff2'), \n    url(" + __webpack_require__(107) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 900;\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(108) + ") format('woff2'), \n    url(" + __webpack_require__(109) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 900;\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(110) + ") format('woff2'), \n    url(" + __webpack_require__(111) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-300 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(112) + ") format('woff2'), \n    url(" + __webpack_require__(113) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-regular - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(114) + ") format('woff2'), \n    url(" + __webpack_require__(115) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-500 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(116) + ") format('woff2'), \n    url(" + __webpack_require__(117) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-600 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(118) + ") format('woff2'), \n    url(" + __webpack_require__(119) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-700 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(120) + ") format('woff2'), \n    url(" + __webpack_require__(121) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-800 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 800;\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(122) + ") format('woff2'), \n    url(" + __webpack_require__(123) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\nbody {\n    background-color: #fafafa;\n}", ""]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.8ce5988.woff2";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.654cb4d.woff";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.acee0ea.woff2";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.42de898.woff";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.16ddb15.woff2";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.ecce92d.woff";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.3ddb748.woff2";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.4d08dae.woff";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.7e367be.woff2";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.16e1d93.woff";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.984ae37.woff2";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.1e65e7e.woff";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.bb474f1.woff2";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.57af64f.woff";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.9e7beee.woff2";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.b670694.woff";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.0d7e71f.woff2";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.525d5b4.woff";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.7394ca9.woff2";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.ad0e74f.woff";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.4faec83.woff2";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.3b9590e.woff";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.f4e8dc5.woff2";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.de984c0.woff";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.e746e03.woff2";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.78dd5ab.woff";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.9106435.woff2";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.290ee38.woff";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.e5a3212.woff2";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.81e9558.woff";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.cd90392.woff2";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.a4b6f17.woff";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.06f1c86.woff2";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.c864d84.woff";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.041a4b8.woff2";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.2a3a9cf.woff";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./material-icons.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./material-icons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + __webpack_require__(127) + ");\n    /* For IE6-8 */\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(128) + ") format('woff2'), url(" + __webpack_require__(129) + ") format('woff'), url(" + __webpack_require__(130) + ") format('truetype');\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n}", ""]);
	
	// exports


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.e79bfd8.eot";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.570eb83.woff2";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.012cf6a.woff";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.a37b0c0.ttf";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", ""]);
	
	// exports


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./ffskeleton.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./ffskeleton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*button,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }*/\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
	// exports


/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = require("vue-material");

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./vue-material.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./vue-material.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n* Vue Material v0.7.1\n* Made with love by Marcos Moura\n* Released under the MIT License.\n*/.md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;background-color:currentColor;border-radius:50%;opacity:.2;transform:scale(0) translateZ(0);transition:none;will-change:background-color,opacity,transform,width,height,top,left}.md-ripple.md-active{animation:a 1s cubic-bezier(.25,.8,.25,1) forwards}.md-ripple.md-active.md-fadeout{opacity:0!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.6s}@keyframes a{to{transform:scale(2.2) translateZ(0)}}html{height:100%;box-sizing:border-box}html *,html :after,html :before{box-sizing:inherit}body{min-height:100%;margin:0;position:relative;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,.87);font-family:Roboto,Noto Sans,Noto,sans-serif}ul:not(.md-list)>li+li{margin-top:8px}audio,canvas,embed,iframe,img,object,svg,video{max-width:100%;font-style:italic;vertical-align:middle}audio:not(.md-image),canvas:not(.md-image),embed:not(.md-image),iframe:not(.md-image),img:not(.md-image),object:not(.md-image),svg:not(.md-image),video:not(.md-image){height:auto}[tabindex=\"-1\"]:focus{outline:none!important}.md-scrollbar::-webkit-scrollbar,.md-scrollbar ::-webkit-scrollbar{width:10px;height:10px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.12);transition:all .5s cubic-bezier(.35,0,.25,1);background-color:rgba(0,0,0,.05)}.md-scrollbar::-webkit-scrollbar:hover,.md-scrollbar ::-webkit-scrollbar:hover{box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.038);background-color:rgba(0,0,0,.087)}.md-scrollbar::-webkit-scrollbar-button,.md-scrollbar ::-webkit-scrollbar-button{display:none}.md-scrollbar::-webkit-scrollbar-corner,.md-scrollbar ::-webkit-scrollbar-corner{background-color:transparent}.md-scrollbar::-webkit-scrollbar-thumb,.md-scrollbar ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.26);box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.087);transition:all .5s cubic-bezier(.35,0,.25,1)}.md-caption{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:17px}.md-body-1,body{font-weight:400;line-height:20px}.md-body-1,.md-body-2,body{font-size:14px;letter-spacing:.01em}.md-body-2{font-weight:500;line-height:24px}.md-subheading{font-size:16px;font-weight:400;letter-spacing:.01em;line-height:24px}.md-title{font-size:20px;font-weight:500;letter-spacing:.005em;line-height:26px}.md-headline{font-size:24px;line-height:32px}.md-display-1,.md-headline{font-weight:400;letter-spacing:0}.md-display-1{font-size:34px;line-height:40px}.md-display-2{font-size:45px;font-weight:400;letter-spacing:0;line-height:48px}.md-display-3{font-size:56px;font-weight:400;letter-spacing:-.005em;line-height:58px}.md-display-4{font-size:112px;font-weight:300;letter-spacing:-.01em;line-height:112px}a:not(.md-button):not(.md-bottom-bar-item){text-decoration:none}a:not(.md-button):not(.md-bottom-bar-item):hover{text-decoration:underline}button:focus{outline:none}.md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar.md-avatar-icon{background-color:rgba(0,0,0,.38)}.md-avatar.md-avatar-icon .md-icon{color:#fff}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}.md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:6;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translateZ(0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:rgba(0,0,0,.005)}.md-bottom-bar{width:100%;min-width:100%;height:56px;-ms-flex-pack:center;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar,.md-bottom-bar-item{position:relative;display:-ms-flexbox;display:flex}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;cursor:pointer;border:none;background:transparent;transform:translateZ(0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translateZ(0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar-item[disabled]{opacity:.38}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;-ms-flex:1 1 32px;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width;transition-property:flex,min-width,max-width,-ms-flex}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;-ms-flex:1 1 72px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translateZ(0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear,opacity .15s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear}.md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:none;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:500;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button,.md-button:focus{outline:none}.md-button::-moz-focus-inner{border:0}.md-button:hover:not([disabled]):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button:hover:not([disabled]).md-raised{background-color:rgba(0,0,0,.12)}.md-button:active:not([disabled]){background-color:hsla(0,0%,60%,.4)}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{position:absolute;top:1px;right:0;bottom:0;left:0}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button:not([disabled]):hover{background:none}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px;line-height:32px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;padding:0;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:40px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{color:rgba(0,0,0,.26);cursor:default;pointer-events:none}.md-button[disabled].md-fab,.md-button[disabled].md-raised{background-color:rgba(0,0,0,.12)}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-fab.md-fab-bottom-center,.md-fab.md-fab-bottom-left,.md-fab.md-fab-bottom-right,.md-fab.md-fab-top-center,.md-fab.md-fab-top-left,.md-fab.md-fab-top-right,.md-speed-dial.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-right,.md-speed-dial.md-fab-top-center,.md-speed-dial.md-fab-top-left,.md-speed-dial.md-fab-top-right{margin:0;position:absolute;z-index:4}.md-fab.md-fab-top-left,.md-speed-dial.md-fab-top-left{top:24px;left:24px}.md-fab.md-fab-top-center,.md-speed-dial.md-fab-top-center{top:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-top-right,.md-speed-dial.md-fab-top-right{top:24px;right:24px}.md-fab.md-fab-bottom-left,.md-speed-dial.md-fab-bottom-left{bottom:24px;left:24px}.md-fab.md-fab-bottom-center,.md-speed-dial.md-fab-bottom-center{bottom:24px;left:50%;transform:translateX(-50%)}.md-fab.md-fab-bottom-right,.md-speed-dial.md-fab-bottom-right{right:24px;bottom:24px}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}.md-button-toggle{width:auto;display:-ms-flexbox;display:flex}.md-button-toggle>.md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle>.md-button:not([disabled]){color:rgba(0,0,0,.54)}.md-button-toggle>.md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button-toggle>.md-button .md-ink-ripple,.md-card{border-radius:2px}.md-card{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:1;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{-ms-flex:1;flex:1}.md-card .md-card-header .md-card-media{width:80px;-ms-flex:0 0 80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;-ms-flex:0 0 120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;-ms-flex:0 0 160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card .md-card-media-actions{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;-ms-flex:1;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotate(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{padding-top:4px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin}.md-checkbox{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-checkbox .md-checkbox-container{width:20px;height:20px;position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-chip{height:32px;padding:8px 12px;display:inline-block;border-radius:32px;transition:all .4s cubic-bezier(.25,.8,.25,1);font-size:13px;line-height:16px;white-space:nowrap}.md-chip.md-deletable{position:relative;padding-right:32px}.md-chip:active,.md-chip:focus{outline:none}.md-chip:active:not(.md-disabled),.md-chip:focus:not(.md-disabled){cursor:pointer;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-chip.md-disabled .md-button{pointer-events:none;cursor:default}.md-chip .md-button.md-delete{width:24px;min-width:24px;height:24px;min-height:24px;margin:0;padding:0;position:absolute;top:4px;right:4px;border-radius:24px;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-chip .md-button.md-delete .md-icon{width:20px;min-width:20px;height:20px;min-height:20px;margin:0;font-size:20px}.md-chip .md-button.md-delete .md-ink-ripple{border-radius:32px}.md-chip .md-button.md-delete .md-ripple{opacity:.54}.md-chips .md-chip{margin-right:8px;margin-bottom:4px}.md-chips .md-input-container{min-height:54px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.md-chips .md-input{width:128px;-ms-flex:1;flex:1}.md-dialog-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:8}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-backdrop{position:fixed;z-index:9}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden;position:relative;z-index:10;outline:none;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1) .05s;will-change:opacity,transform}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;-ms-flex:1;flex:1;-ms-flex-preferred-size:auto;flex-basis:auto;overflow:auto;position:relative;background:linear-gradient(180deg,#fff,#fff 1px,transparent 0),linear-gradient(0deg,#fff,#fff 3px,transparent 0),linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.12) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.2) 1px,rgba(0,0,0,.2) 2px,transparent 0);background-attachment:local,local,scroll,scroll}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;background-color:#fff;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(0,0,0,.12)}.md-divider.md-inset{margin-left:72px}.md-file{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.md-file input[type=file]{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;clip:rect(0 0 0 0);border:0}.md-file .md-icon{cursor:pointer}.md-icon{width:24px;min-width:24px;height:24px;min-height:24px;font-size:24px;margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;fill:currentColor;text-rendering:optimizeLegibility;vertical-align:middle}.md-icon.md-size-2x{width:48px;min-width:48px;height:48px;min-height:48px;font-size:48px}.md-icon.md-size-3x{width:72px;min-width:72px;height:72px;min-height:72px;font-size:72px}.md-icon.md-size-4x{width:96px;min-width:96px;height:96px;min-height:96px;font-size:96px}.md-icon.md-size-5x{width:120px;min-width:120px;height:120px;min-height:120px;font-size:120px}.md-icon svg{width:100%;height:100%}img.md-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-image{opacity:0;-webkit-filter:saturate(20%);filter:saturate(20%)}.md-image.md-black-output{-webkit-filter:brightness(.4) saturate(20%);filter:brightness(.4) saturate(20%)}.md-image.md-loaded{opacity:1;-webkit-filter:saturate(100%);filter:saturate(100%);transition:opacity 1.1s cubic-bezier(.25,.8,.25,1),-webkit-filter 2.2s cubic-bezier(.25,.8,.25,1) .3s;transition:opacity 1.1s cubic-bezier(.25,.8,.25,1),filter 2.2s cubic-bezier(.25,.8,.25,1) .3s;transition:opacity 1.1s cubic-bezier(.25,.8,.25,1),filter 2.2s cubic-bezier(.25,.8,.25,1) .3s,-webkit-filter 2.2s cubic-bezier(.25,.8,.25,1) .3s}.md-input-container{width:100%;min-height:48px;margin:4px 0 24px;padding-top:16px;display:-ms-flexbox;display:flex;position:relative}.md-input-container:after{height:1px;right:0;bottom:0;background-color:rgba(0,0,0,.12);content:\" \"}.md-input-container:after,.md-input-container label{position:absolute;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container label{top:23px;pointer-events:none;transition-duration:.3s;color:rgba(0,0,0,.54);font-size:16px;line-height:20px}.md-input-container input,.md-input-container textarea{width:100%;height:32px;padding:0;display:block;-ms-flex:1;flex:1;border:none;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;color:rgba(0,0,0,.54);font-family:inherit;font-size:1px;line-height:32px}.md-input-container input:focus,.md-input-container textarea:focus{outline:none}.md-input-container input::-webkit-input-placeholder,.md-input-container textarea::-webkit-input-placeholder{color:rgba(0,0,0,.54);font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container input~.md-icon:not(.md-icon-delete),.md-input-container textarea~.md-icon:not(.md-icon-delete){margin-left:12px}.md-input-container input~.md-icon:not(.md-icon-delete):after,.md-input-container textarea~.md-icon:not(.md-icon-delete):after{right:0;left:auto}.md-input-container textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-input-container .md-count,.md-input-container .md-error{height:20px;position:absolute;bottom:-22px;font-size:12px}.md-input-container .md-error{display:block!important;left:0;opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-input-container .md-count{right:0}.md-input-container .md-icon:not(.md-icon-delete){margin:4px auto;color:rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container .md-icon:not(.md-icon-delete):after{width:36px;height:2px;position:absolute;left:0;bottom:0;z-index:2;content:\"\"}.md-input-container .md-icon:not(.md-icon-delete)~label{left:36px}.md-input-container .md-icon:not(.md-icon-delete)~.md-file,.md-input-container .md-icon:not(.md-icon-delete)~.md-input,.md-input-container .md-icon:not(.md-icon-delete)~.md-textarea{margin-left:12px}.md-input-container.md-input-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-input-container.md-input-placeholder input,.md-input-container.md-input-placeholder textarea{font-size:16px}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea{color:rgba(0,0,0,.87)}.md-input-container.md-input-inline label{pointer-events:none}.md-input-container.md-input-inline.md-input-focused label{top:23px;font-size:16px}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-input-disabled:after{background:0 100% repeat-x;background-image:linear-gradient(90deg,rgba(0,0,0,.38),rgba(0,0,0,.38) 33%,transparent 0);background-size:4px 1px}.md-input-container.md-input-disabled input,.md-input-container.md-input-disabled label,.md-input-container.md-input-disabled textarea{color:rgba(0,0,0,.38)}.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:rgba(0,0,0,.54)}.md-input-container.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px;color:rgba(0,0,0,.38)}.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:rgba(0,0,0,.87)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translateZ(0)}.md-input-container.md-input-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after{color:rgba(0,0,0,.87)}.md-layout{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1;flex:1}.md-row{-ms-flex-direction:row;flex-direction:row}.md-column{-ms-flex-direction:column;flex-direction:column}.md-layout.md-container{width:100%;max-width:1200px}.md-layout.md-container.md-centered{margin:0 auto}.md-align-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-center{-ms-flex-pack:center;justify-content:center}.md-align-end{-ms-flex-pack:end;justify-content:flex-end}.md-gutter:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-8:not(.md-column){margin-right:-4px;margin-left:-4px}.md-gutter-8:not(.md-column)>.md-layout{padding-right:4px;padding-left:4px}.md-gutter-8 .md-column{margin-top:-4px;margin-bottom:-4px}.md-gutter-8 .md-column>.md-layout{padding-top:4px;padding-bottom:4px}.md-gutter-16:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter-16:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter-16 .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter-16 .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-gutter-24:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter-24:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter-24 .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter-24 .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-40:not(.md-column){margin-right:-20px;margin-left:-20px}.md-gutter-40:not(.md-column)>.md-layout{padding-right:20px;padding-left:20px}.md-gutter-40 .md-column{margin-top:-20px;margin-bottom:-20px}.md-gutter-40 .md-column>.md-layout{padding-top:20px;padding-bottom:20px}.md-flex{-ms-flex:1 1;flex:1 1}.md-flex-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-33{margin-left:33.33333%}.md-flex-offset-66{margin-left:66.66666%}.md-flex-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-5{margin-left:5%}.md-flex-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-10{margin-left:10%}.md-flex-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-15{margin-left:15%}.md-flex-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-20{margin-left:20%}.md-flex-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-25{margin-left:25%}.md-flex-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-30{margin-left:30%}.md-flex-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-35{margin-left:35%}.md-flex-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-40{margin-left:40%}.md-flex-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-45{margin-left:45%}.md-flex-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-50{margin-left:50%}.md-flex-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-55{margin-left:55%}.md-flex-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-60{margin-left:60%}.md-flex-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-65{margin-left:65%}.md-flex-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-70{margin-left:70%}.md-flex-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-75{margin-left:75%}.md-flex-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-80{margin-left:80%}.md-flex-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-85{margin-left:85%}.md-flex-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-90{margin-left:90%}.md-flex-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-95{margin-left:95%}.md-flex-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-100{margin-left:100%}@media (max-width:944px){.md-gutter:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-row-small{-ms-flex-direction:row;flex-direction:row}.md-column-small{-ms-flex-direction:column;flex-direction:column}.md-flex-small{-ms-flex:1 1;flex:1 1}.md-flex-small-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-small-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-small-33{margin-left:33.33333%}.md-flex-offset-small-66{margin-left:66.66666%}.md-flex-small-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-small-5{margin-left:5%}.md-flex-small-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-small-10{margin-left:10%}.md-flex-small-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-small-15{margin-left:15%}.md-flex-small-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-small-20{margin-left:20%}.md-flex-small-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-small-25{margin-left:25%}.md-flex-small-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-small-30{margin-left:30%}.md-flex-small-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-small-35{margin-left:35%}.md-flex-small-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-small-40{margin-left:40%}.md-flex-small-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-small-45{margin-left:45%}.md-flex-small-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-small-50{margin-left:50%}.md-flex-small-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-small-55{margin-left:55%}.md-flex-small-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-small-60{margin-left:60%}.md-flex-small-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-small-65{margin-left:65%}.md-flex-small-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-small-70{margin-left:70%}.md-flex-small-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-small-75{margin-left:75%}.md-flex-small-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-small-80{margin-left:80%}.md-flex-small-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-small-85{margin-left:85%}.md-flex-small-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-small-90{margin-left:90%}.md-flex-small-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-small-95{margin-left:95%}.md-flex-small-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-small-100{margin-left:100%}.md-align-small-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-small-center{-ms-flex-pack:center;justify-content:center}.md-align-small-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-small{display:none}}@media (min-width:1904px){.md-row-xlarge{-ms-flex-direction:row;flex-direction:row}.md-column-xlarge{-ms-flex-direction:column;flex-direction:column}.md-flex-xlarge{-ms-flex:1 1;flex:1 1}.md-flex-xlarge-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xlarge-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xlarge-33{margin-left:33.33333%}.md-flex-offset-xlarge-66{margin-left:66.66666%}.md-flex-xlarge-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xlarge-5{margin-left:5%}.md-flex-xlarge-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xlarge-10{margin-left:10%}.md-flex-xlarge-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xlarge-15{margin-left:15%}.md-flex-xlarge-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xlarge-20{margin-left:20%}.md-flex-xlarge-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xlarge-25{margin-left:25%}.md-flex-xlarge-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xlarge-30{margin-left:30%}.md-flex-xlarge-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xlarge-35{margin-left:35%}.md-flex-xlarge-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xlarge-40{margin-left:40%}.md-flex-xlarge-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xlarge-45{margin-left:45%}.md-flex-xlarge-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xlarge-50{margin-left:50%}.md-flex-xlarge-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xlarge-55{margin-left:55%}.md-flex-xlarge-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xlarge-60{margin-left:60%}.md-flex-xlarge-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xlarge-65{margin-left:65%}.md-flex-xlarge-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xlarge-70{margin-left:70%}.md-flex-xlarge-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xlarge-75{margin-left:75%}.md-flex-xlarge-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xlarge-80{margin-left:80%}.md-flex-xlarge-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xlarge-85{margin-left:85%}.md-flex-xlarge-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xlarge-90{margin-left:90%}.md-flex-xlarge-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xlarge-95{margin-left:95%}.md-flex-xlarge-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xlarge-100{margin-left:100%}.md-align-xlarge-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-xlarge-center{-ms-flex-pack:center;justify-content:center}.md-align-xlarge-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-xlarge{display:none}}@media (max-width:1903px){.md-row-large{-ms-flex-direction:row;flex-direction:row}.md-column-large{-ms-flex-direction:column;flex-direction:column}.md-flex-large{-ms-flex:1 1;flex:1 1}.md-flex-large-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-large-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-large-33{margin-left:33.33333%}.md-flex-offset-large-66{margin-left:66.66666%}.md-flex-large-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-large-5{margin-left:5%}.md-flex-large-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-large-10{margin-left:10%}.md-flex-large-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-large-15{margin-left:15%}.md-flex-large-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-large-20{margin-left:20%}.md-flex-large-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-large-25{margin-left:25%}.md-flex-large-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-large-30{margin-left:30%}.md-flex-large-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-large-35{margin-left:35%}.md-flex-large-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-large-40{margin-left:40%}.md-flex-large-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-large-45{margin-left:45%}.md-flex-large-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-large-50{margin-left:50%}.md-flex-large-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-large-55{margin-left:55%}.md-flex-large-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-large-60{margin-left:60%}.md-flex-large-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-large-65{margin-left:65%}.md-flex-large-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-large-70{margin-left:70%}.md-flex-large-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-large-75{margin-left:75%}.md-flex-large-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-large-80{margin-left:80%}.md-flex-large-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-large-85{margin-left:85%}.md-flex-large-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-large-90{margin-left:90%}.md-flex-large-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-large-95{margin-left:95%}.md-flex-large-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-large-100{margin-left:100%}.md-align-large-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-large-center{-ms-flex-pack:center;justify-content:center}.md-align-large-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-large{display:none}}@media (max-width:1264px){.md-row-medium{-ms-flex-direction:row;flex-direction:row}.md-column-medium{-ms-flex-direction:column;flex-direction:column}.md-flex-medium{-ms-flex:1 1;flex:1 1}.md-flex-medium-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-medium-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-medium-33{margin-left:33.33333%}.md-flex-offset-medium-66{margin-left:66.66666%}.md-flex-medium-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-medium-5{margin-left:5%}.md-flex-medium-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-medium-10{margin-left:10%}.md-flex-medium-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-medium-15{margin-left:15%}.md-flex-medium-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-medium-20{margin-left:20%}.md-flex-medium-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-medium-25{margin-left:25%}.md-flex-medium-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-medium-30{margin-left:30%}.md-flex-medium-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-medium-35{margin-left:35%}.md-flex-medium-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-medium-40{margin-left:40%}.md-flex-medium-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-medium-45{margin-left:45%}.md-flex-medium-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-medium-50{margin-left:50%}.md-flex-medium-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-medium-55{margin-left:55%}.md-flex-medium-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-medium-60{margin-left:60%}.md-flex-medium-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-medium-65{margin-left:65%}.md-flex-medium-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-medium-70{margin-left:70%}.md-flex-medium-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-medium-75{margin-left:75%}.md-flex-medium-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-medium-80{margin-left:80%}.md-flex-medium-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-medium-85{margin-left:85%}.md-flex-medium-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-medium-90{margin-left:90%}.md-flex-medium-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-medium-95{margin-left:95%}.md-flex-medium-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-medium-100{margin-left:100%}.md-align-medium-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-medium-center{-ms-flex-pack:center;justify-content:center}.md-align-medium-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-medium{display:none}}@media (max-width:600px){.md-row-xsmall{-ms-flex-direction:row;flex-direction:row}.md-column-xsmall{-ms-flex-direction:column;flex-direction:column}.md-flex-xsmall{-ms-flex:1 1;flex:1 1}.md-flex-xsmall-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xsmall-33{margin-left:33.33333%}.md-flex-offset-xsmall-66{margin-left:66.66666%}.md-flex-xsmall-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xsmall-5{margin-left:5%}.md-flex-xsmall-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xsmall-10{margin-left:10%}.md-flex-xsmall-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xsmall-15{margin-left:15%}.md-flex-xsmall-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xsmall-20{margin-left:20%}.md-flex-xsmall-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xsmall-25{margin-left:25%}.md-flex-xsmall-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xsmall-30{margin-left:30%}.md-flex-xsmall-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xsmall-35{margin-left:35%}.md-flex-xsmall-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xsmall-40{margin-left:40%}.md-flex-xsmall-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xsmall-45{margin-left:45%}.md-flex-xsmall-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xsmall-50{margin-left:50%}.md-flex-xsmall-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xsmall-55{margin-left:55%}.md-flex-xsmall-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xsmall-60{margin-left:60%}.md-flex-xsmall-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xsmall-65{margin-left:65%}.md-flex-xsmall-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xsmall-70{margin-left:70%}.md-flex-xsmall-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xsmall-75{margin-left:75%}.md-flex-xsmall-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xsmall-80{margin-left:80%}.md-flex-xsmall-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xsmall-85{margin-left:85%}.md-flex-xsmall-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xsmall-90{margin-left:90%}.md-flex-xsmall-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xsmall-95{margin-left:95%}.md-flex-xsmall-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xsmall-100{margin-left:100%}.md-align-xsmall-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-xsmall-center{-ms-flex-pack:center;justify-content:center}.md-align-xsmall-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-xsmall{display:none}}@media (min-width:1264px){.md-row-large-and-up{-ms-flex-direction:row;flex-direction:row}.md-column-large-and-up{-ms-flex-direction:column;flex-direction:column}.md-flex-large-and-up{-ms-flex:1 1;flex:1 1}.md-flex-large-and-up-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-large-and-up-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-large-and-up-33{margin-left:33.33333%}.md-flex-offset-large-and-up-66{margin-left:66.66666%}.md-flex-large-and-up-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-large-and-up-5{margin-left:5%}.md-flex-large-and-up-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-large-and-up-10{margin-left:10%}.md-flex-large-and-up-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-large-and-up-15{margin-left:15%}.md-flex-large-and-up-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-large-and-up-20{margin-left:20%}.md-flex-large-and-up-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-large-and-up-25{margin-left:25%}.md-flex-large-and-up-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-large-and-up-30{margin-left:30%}.md-flex-large-and-up-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-large-and-up-35{margin-left:35%}.md-flex-large-and-up-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-large-and-up-40{margin-left:40%}.md-flex-large-and-up-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-large-and-up-45{margin-left:45%}.md-flex-large-and-up-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-large-and-up-50{margin-left:50%}.md-flex-large-and-up-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-large-and-up-55{margin-left:55%}.md-flex-large-and-up-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-large-and-up-60{margin-left:60%}.md-flex-large-and-up-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-large-and-up-65{margin-left:65%}.md-flex-large-and-up-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-large-and-up-70{margin-left:70%}.md-flex-large-and-up-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-large-and-up-75{margin-left:75%}.md-flex-large-and-up-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-large-and-up-80{margin-left:80%}.md-flex-large-and-up-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-large-and-up-85{margin-left:85%}.md-flex-large-and-up-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-large-and-up-90{margin-left:90%}.md-flex-large-and-up-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-large-and-up-95{margin-left:95%}.md-flex-large-and-up-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-large-and-up-100{margin-left:100%}.md-align-large-and-up-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-large-and-up-center{-ms-flex-pack:center;justify-content:center}.md-align-large-and-up-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-large-and-up{display:none}}@media (min-width:944px){.md-row-medium-and-up{-ms-flex-direction:row;flex-direction:row}.md-column-medium-and-up{-ms-flex-direction:column;flex-direction:column}.md-flex-medium-and-up{-ms-flex:1 1;flex:1 1}.md-flex-medium-and-up-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-medium-and-up-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-medium-and-up-33{margin-left:33.33333%}.md-flex-offset-medium-and-up-66{margin-left:66.66666%}.md-flex-medium-and-up-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-medium-and-up-5{margin-left:5%}.md-flex-medium-and-up-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-medium-and-up-10{margin-left:10%}.md-flex-medium-and-up-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-medium-and-up-15{margin-left:15%}.md-flex-medium-and-up-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-medium-and-up-20{margin-left:20%}.md-flex-medium-and-up-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-medium-and-up-25{margin-left:25%}.md-flex-medium-and-up-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-medium-and-up-30{margin-left:30%}.md-flex-medium-and-up-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-medium-and-up-35{margin-left:35%}.md-flex-medium-and-up-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-medium-and-up-40{margin-left:40%}.md-flex-medium-and-up-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-medium-and-up-45{margin-left:45%}.md-flex-medium-and-up-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-medium-and-up-50{margin-left:50%}.md-flex-medium-and-up-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-medium-and-up-55{margin-left:55%}.md-flex-medium-and-up-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-medium-and-up-60{margin-left:60%}.md-flex-medium-and-up-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-medium-and-up-65{margin-left:65%}.md-flex-medium-and-up-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-medium-and-up-70{margin-left:70%}.md-flex-medium-and-up-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-medium-and-up-75{margin-left:75%}.md-flex-medium-and-up-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-medium-and-up-80{margin-left:80%}.md-flex-medium-and-up-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-medium-and-up-85{margin-left:85%}.md-flex-medium-and-up-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-medium-and-up-90{margin-left:90%}.md-flex-medium-and-up-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-medium-and-up-95{margin-left:95%}.md-flex-medium-and-up-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-medium-and-up-100{margin-left:100%}.md-align-medium-and-up-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-medium-and-up-center{-ms-flex-pack:center;justify-content:center}.md-align-medium-and-up-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-medium-and-up{display:none}}@media (min-width:660px){.md-row-small-and-up{-ms-flex-direction:row;flex-direction:row}.md-column-small-and-up{-ms-flex-direction:column;flex-direction:column}.md-flex-small-and-up{-ms-flex:1 1;flex:1 1}.md-flex-small-and-up-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-small-and-up-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-small-and-up-33{margin-left:33.33333%}.md-flex-offset-small-and-up-66{margin-left:66.66666%}.md-flex-small-and-up-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-small-and-up-5{margin-left:5%}.md-flex-small-and-up-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-small-and-up-10{margin-left:10%}.md-flex-small-and-up-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-small-and-up-15{margin-left:15%}.md-flex-small-and-up-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-small-and-up-20{margin-left:20%}.md-flex-small-and-up-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-small-and-up-25{margin-left:25%}.md-flex-small-and-up-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-small-and-up-30{margin-left:30%}.md-flex-small-and-up-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-small-and-up-35{margin-left:35%}.md-flex-small-and-up-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-small-and-up-40{margin-left:40%}.md-flex-small-and-up-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-small-and-up-45{margin-left:45%}.md-flex-small-and-up-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-small-and-up-50{margin-left:50%}.md-flex-small-and-up-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-small-and-up-55{margin-left:55%}.md-flex-small-and-up-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-small-and-up-60{margin-left:60%}.md-flex-small-and-up-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-small-and-up-65{margin-left:65%}.md-flex-small-and-up-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-small-and-up-70{margin-left:70%}.md-flex-small-and-up-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-small-and-up-75{margin-left:75%}.md-flex-small-and-up-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-small-and-up-80{margin-left:80%}.md-flex-small-and-up-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-small-and-up-85{margin-left:85%}.md-flex-small-and-up-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-small-and-up-90{margin-left:90%}.md-flex-small-and-up-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-small-and-up-95{margin-left:95%}.md-flex-small-and-up-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-small-and-up-100{margin-left:100%}.md-align-small-and-up-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-small-and-up-center{-ms-flex-pack:center;justify-content:center}.md-align-small-and-up-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-small-and-up{display:none}}@media (min-width:300px){.md-row-xsmall-and-up{-ms-flex-direction:row;flex-direction:row}.md-column-xsmall-and-up{-ms-flex-direction:column;flex-direction:column}.md-flex-xsmall-and-up{-ms-flex:1 1;flex:1 1}.md-flex-xsmall-and-up-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-and-up-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xsmall-and-up-33{margin-left:33.33333%}.md-flex-offset-xsmall-and-up-66{margin-left:66.66666%}.md-flex-xsmall-and-up-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xsmall-and-up-5{margin-left:5%}.md-flex-xsmall-and-up-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xsmall-and-up-10{margin-left:10%}.md-flex-xsmall-and-up-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xsmall-and-up-15{margin-left:15%}.md-flex-xsmall-and-up-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xsmall-and-up-20{margin-left:20%}.md-flex-xsmall-and-up-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xsmall-and-up-25{margin-left:25%}.md-flex-xsmall-and-up-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xsmall-and-up-30{margin-left:30%}.md-flex-xsmall-and-up-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xsmall-and-up-35{margin-left:35%}.md-flex-xsmall-and-up-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xsmall-and-up-40{margin-left:40%}.md-flex-xsmall-and-up-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xsmall-and-up-45{margin-left:45%}.md-flex-xsmall-and-up-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xsmall-and-up-50{margin-left:50%}.md-flex-xsmall-and-up-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xsmall-and-up-55{margin-left:55%}.md-flex-xsmall-and-up-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xsmall-and-up-60{margin-left:60%}.md-flex-xsmall-and-up-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xsmall-and-up-65{margin-left:65%}.md-flex-xsmall-and-up-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xsmall-and-up-70{margin-left:70%}.md-flex-xsmall-and-up-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xsmall-and-up-75{margin-left:75%}.md-flex-xsmall-and-up-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xsmall-and-up-80{margin-left:80%}.md-flex-xsmall-and-up-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xsmall-and-up-85{margin-left:85%}.md-flex-xsmall-and-up-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xsmall-and-up-90{margin-left:90%}.md-flex-xsmall-and-up-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xsmall-and-up-95{margin-left:95%}.md-flex-xsmall-and-up-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xsmall-and-up-100{margin-left:100%}.md-align-xsmall-and-up-start{-ms-flex-pack:start;justify-content:flex-start}.md-align-xsmall-and-up-center{-ms-flex-pack:center;justify-content:center}.md-align-xsmall-and-up-end{-ms-flex-pack:end;justify-content:flex-end}.md-hide-xsmall-and-up{display:none}}.md-list{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child,.md-list.md-dense .md-list-item .md-list-item-container .md-list-action:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar .md-avatar:first-child,.md-list.md-double-line.md-dense .md-list-item .md-avatar .md-list-action:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:first-child,.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar .md-avatar:first-child,.md-list.md-triple-line.md-dense .md-list-item .md-avatar .md-list-action:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:first-child,.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative;z-index:2}.md-list-item.md-disabled{cursor:default;pointer-events:none}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-button-ghost{width:100%;margin:0;position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:0}.md-list-item .md-button:not(.md-button-ghost):not(.md-list-item-container){position:relative;z-index:2}.md-list-item .md-button:not(.md-button-ghost):not(.md-list-item-container) .md-icon{position:relative}.md-list-item .md-list-item-container{min-height:48px;margin:0;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;position:relative;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-list-item-container:hover{text-decoration:none}.md-list-item .md-list-item-container>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-container .md-avatar:first-child,.md-list-item .md-list-item-container .md-list-action:first-child{margin-right:16px}.md-list-item .md-list-item-container .md-list-action{margin:0 -10px 0 0}.md-list-item .md-list-item-container .md-list-action:nth-child(3){margin:0 -10px 0 16px}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon,.md-list-item .md-list-action:first-child{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*,.md-list-item .md-list-action:first-child:first-of-type+*{-ms-flex:1 1 auto;flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-icon{color:rgba(0,0,0,.54)}.md-list-item .md-ink-ripple{border-radius:0}.md-list-item-expand{min-height:48px;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow:hidden;transform:translate3D(0,0,0)}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:after,.md-list-item-expand.md-active:before{background-color:rgba(0,0,0,.12)}.md-list-item-expand.md-active.md-active+.md-active:before,.md-list-item-expand.md-active:first-of-type:before,.md-list-item-expand.md-active:last-of-type:after{background:none}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotate(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none!important}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1;flex:1;overflow:hidden;line-height:1.25em;white-space:normal}.md-list-text-container>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md-list-text-container>:first-child{font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;color:rgba(0,0,0,.54);font-size:14px}.md-list-text-container>:nth-child(2):not(:last-child){color:rgba(0,0,0,.87)}.md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:13;transform:scale(.9,.85) translateZ(0);border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .3s cubic-bezier(.55,0,.55,.2),margin .3s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .4s;will-change:transform,opacity,width}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1),transform .3s cubic-bezier(.25,.8,.25,1)}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .3s cubic-bezier(.25,.8,.25,1)}.md-menu-content .md-list{opacity:0;transition:opacity .3s cubic-bezier(.25,.8,.25,1)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item[disabled]{cursor:default}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-menu-backdrop{z-index:12}.md-progress{width:100%;height:4px;position:relative;overflow:hidden;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-progress.md-indeterminate .md-progress-track{right:0}.md-progress.md-indeterminate .md-progress-track:after,.md-progress.md-indeterminate .md-progress-track:before{position:absolute;top:0;bottom:0;left:0;will-change:left,right;content:\"\"}.md-progress.md-indeterminate .md-progress-track:before{animation:b 2.3s cubic-bezier(.65,.815,.735,.395) infinite}.md-progress.md-indeterminate .md-progress-track:after{animation:c 2.3s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}.md-progress.md-progress-enter,.md-progress.md-progress-leave-active{opacity:0;transform:scaleY(0) translateZ(0)}.md-progress.md-progress-enter-active{transform:scaleY(1) translateZ(0)}.md-progress-track{position:absolute;top:0;bottom:0;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes b{0%{right:100%;left:-35%}60%{right:-100%;left:100%}to{right:-100%;left:100%}}@keyframes c{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}.md-radio{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-radio .md-radio-container{width:20px;height:20px;position:relative;border-radius:50%;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-select{width:100%;min-width:128px;height:32px;position:relative}.md-select:focus{outline:none}.md-select:after{margin-top:2px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .15s linear;content:\"\\25BC\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.md-select select{position:absolute;left:-999em}.md-select .md-menu,.md-select .md-select-value{width:100%;height:32px;display:block;position:relative}.md-select .md-select-value{padding-right:24px;cursor:pointer;overflow:hidden;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-subheader{color:hsla(0,0%,46%,.87);text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;-ms-flex-pack:start;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}.md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:7;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:6;pointer-events:none;background-color:rgba(0,0,0,.54);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}.md-snackbar{display:-ms-flexbox;display:flex;position:fixed;right:0;left:0;z-index:11;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:margin-top,margin-bottom}.md-snackbar.md-position-bottom-center,.md-snackbar.md-position-top-center{-ms-flex-pack:center;justify-content:center}.md-snackbar.md-position-bottom-right,.md-snackbar.md-position-top-right{margin-right:24px;-ms-flex-pack:end;justify-content:flex-end}.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-top-left{margin-left:24px;-ms-flex-pack:start;justify-content:flex-start}.md-snackbar.md-position-top-center,.md-snackbar.md-position-top-left,.md-snackbar.md-position-top-right{margin-top:24px}.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-bottom-right{margin-bottom:24px}.md-snackbar.md-position-top-center,.md-snackbar.md-position-top-left,.md-snackbar.md-position-top-right{top:0}.md-snackbar.md-position-top-center .md-snackbar-container,.md-snackbar.md-position-top-left .md-snackbar-container,.md-snackbar.md-position-top-right .md-snackbar-container{transform:translate3D(0,calc(-100% - 24px),0)}.md-snackbar.md-position-bottom-center,.md-snackbar.md-position-bottom-left,.md-snackbar.md-position-bottom-right{bottom:0}.md-snackbar.md-position-bottom-center .md-snackbar-container,.md-snackbar.md-position-bottom-left .md-snackbar-container,.md-snackbar.md-position-bottom-right .md-snackbar-container{transform:translate3D(0,calc(100% + 24px),0)}.md-snackbar.md-active .md-snackbar-container{transform:translate3D(0,0,0)}.md-snackbar.md-active .md-snackbar-content{opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1) .1s}.md-snackbar .md-snackbar-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1);will-change:opacity}.md-snackbar .md-button{min-width:64px;margin:-8px -16px}.md-snackbar .md-button:last-child{margin-left:48px}.md-snackbar-container{width:auto;min-width:288px;max-width:568px;min-height:48px;padding:14px 24px;overflow:hidden;pointer-events:auto;border-radius:2px;background-color:#323232;transition:all .4s cubic-bezier(.25,.8,.25,1);color:#fff;font-size:14px}.md-has-toast-top-right .md-fab.md-fab-top-right{transform:translate3D(0,68px,0)}.md-has-toast-top-center .md-fab.md-fab-top-center{transform:translate3D(-50%,68px,0)}.md-has-toast-top-left .md-fab.md-fab-top-left{transform:translate3D(0,68px,0)}.md-has-toast-bottom-right .md-fab.md-fab-bottom-right{transform:translate3D(0,-68px,0)}.md-has-toast-bottom-center .md-fab.md-fab-bottom-center{transform:translate3D(-50%,-68px,0)}.md-has-toast-bottom-left .md-fab.md-fab-bottom-left{transform:translate3D(0,-68px,0)}@media (max-width:600px){.md-snackbar{margin:0!important}.md-snackbar-container{width:100%;max-width:100%;border-radius:0}.md-has-toast-top-right .md-fab.md-fab-top-right{transform:translate3D(0,48px,0)}.md-has-toast-top-center .md-fab.md-fab-top-center{transform:translate3D(-50%,48px,0)}.md-has-toast-top-left .md-fab.md-fab-top-left{transform:translate3D(0,48px,0)}.md-has-toast-bottom-right .md-fab.md-fab-bottom-right{transform:translate3D(0,-48px,0)}.md-has-toast-bottom-center .md-fab.md-fab-bottom-center{transform:translate3D(-50%,-48px,0)}.md-has-toast-bottom-left .md-fab.md-fab-bottom-left{transform:translate3D(0,-48px,0)}.md-has-toast .md-fab.md-fab-top-center,.md-has-toast .md-fab.md-fab-top-left,.md-has-toast .md-fab.md-fab-top-right{transform:translate3D(0,44px,0)}.md-has-toast .md-fab.md-fab-bottom-center,.md-has-toast .md-fab.md-fab-bottom-left,.md-has-toast .md-fab.md-fab-bottom-right{transform:translate3D(0,-44px,0)}}.md-speed-dial{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center}.md-speed-dial.md-direction-top.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(0,80%,0)}.md-speed-dial.md-direction-top [md-fab-trigger]{margin-top:8px}.md-speed-dial.md-direction-top [md-fab-trigger]~.md-button{margin-bottom:16px}.md-speed-dial.md-direction-right{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}.md-speed-dial.md-direction-right.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(-80%,0,0)}.md-speed-dial.md-direction-right [md-fab-trigger]{margin-right:8px}.md-speed-dial.md-direction-right [md-fab-trigger]~.md-button{margin-left:16px}.md-speed-dial.md-direction-bottom{-ms-flex-direction:column;flex-direction:column}.md-speed-dial.md-direction-bottom.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(0,-80%,0)}.md-speed-dial.md-direction-bottom [md-fab-trigger]{margin-bottom:8px}.md-speed-dial.md-direction-bottom [md-fab-trigger]~.md-button{margin-top:16px}.md-speed-dial.md-direction-left{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:center;justify-content:center}.md-speed-dial.md-direction-left.md-mode-fling [md-fab-trigger]~.md-button{transform:scale(.95) translate3D(80%,0,0)}.md-speed-dial.md-direction-left [md-fab-trigger]{margin-left:8px}.md-speed-dial.md-direction-left [md-fab-trigger]~.md-button{margin-right:16px}.md-speed-dial.md-mode-scale [md-fab-trigger]~.md-button{transform:scale(.6)}.md-speed-dial.md-active [md-fab-trigger]~.md-button{opacity:1;pointer-events:auto;transform:translate3D(0,0,0)!important}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(2){transition-delay:.05s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(3){transition-delay:.1s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(4){transition-delay:.15s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(5){transition-delay:.2s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(6){transition-delay:.25s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(7){transition-delay:.3s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(8){transition-delay:.35s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(9){transition-delay:.4s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(10){transition-delay:.45s}.md-speed-dial.md-active [md-fab-trigger]~.md-button:nth-child(11){transition-delay:.5s}.md-speed-dial.md-active [md-fab-trigger] [md-icon-morph]{transform:rotate(0);opacity:1}.md-speed-dial.md-active [md-fab-trigger] [md-icon-morph]+.md-icon{transform:rotate(90deg) scale(.8);opacity:0}.md-speed-dial .md-button{margin:0}.md-speed-dial [md-fab-trigger]{position:relative;z-index:2}.md-speed-dial [md-fab-trigger]~.md-button{position:relative;z-index:1;opacity:0;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(2){transition-delay:.05s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(3){transition-delay:.1s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(4){transition-delay:.15s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(5){transition-delay:.2s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(6){transition-delay:.25s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(7){transition-delay:.3s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(8){transition-delay:.35s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(9){transition-delay:.4s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(10){transition-delay:.45s}.md-speed-dial [md-fab-trigger]~.md-button:nth-last-child(11){transition-delay:.5s}.md-speed-dial [md-icon-morph],.md-speed-dial [md-icon-morph]+.md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-speed-dial [md-icon-morph]{opacity:0;transform:rotate(-90deg) scale(.8)}.md-spinner{display:inline-block;position:relative;pointer-events:none;will-change:transform,opacity}.md-spinner.md-indeterminate .md-spinner-draw{animation:d 1.9s linear infinite;transform:rotate(0deg) translateZ(0)}.md-spinner.md-indeterminate .md-spinner-path{stroke-dasharray:2,200;animation:f 1.425s ease-in-out infinite}.md-spinner.md-spinner-leave-active{opacity:0;transform:scale(.8) translateZ(0);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-spinner:not(.md-indeterminate).md-spinner-enter-active{transition-duration:2s}.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw{animation:e 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-spinner-draw{width:100%;height:100%;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transform:rotate(270deg) translateZ(0);transform-origin:center center;will-change:transform,opacity}.md-spinner-path{fill:none;stroke-dashoffset:0;stroke-miterlimit:10;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes d{to{transform:rotate(1turn) translateZ(0)}}@keyframes e{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}to{transform:rotate(270deg) translateZ(0)}}@keyframes f{0%{stroke-dasharray:2,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.md-subheader{min-height:48px;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row wrap;flex-flow:row wrap;color:rgba(0,0,0,.54);font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1);background-color:rgba(0,0,0,.38)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;background-color:#fafafa;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .15s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:none;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:none}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:-webkit-grabbing;cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}.md-table{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow-x:auto}.md-table.md-transition-off .md-checkbox .md-checkbox-container,.md-table.md-transition-off .md-checkbox .md-checkbox-container:after,.md-table.md-transition-off .md-table-cell{transition:none!important}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table tbody .md-table-row{border-top:1px solid #e0e0e0}.md-table tbody .md-table-row.md-selected .md-table-cell{background-color:#f5f5f5}.md-table tbody .md-table-row:hover .md-table-cell{background-color:#eee}.md-table .md-table-head{padding:0;position:relative;color:rgba(0,0,0,.54);font-size:12px;line-height:16px;text-align:left}.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text{padding-right:24px}.md-table .md-table-head.md-numeric{text-align:right}.md-table .md-table-head .md-icon{width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px;color:rgba(0,0,0,.54)}.md-table .md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table .md-table-head .md-icon:first-child{margin-left:0}.md-table .md-table-head .md-icon:last-child{margin-right:0}.md-table .md-table-head-container{height:56px;padding:14px 0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-table .md-table-head-text{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;overflow:hidden;line-height:28px;text-overflow:ellipsis;white-space:nowrap}.md-table .md-sortable{cursor:pointer}.md-table .md-sortable:first-of-type .md-sortable-icon{left:auto;right:10px}.md-table .md-sortable.md-sorted,.md-table .md-sortable:hover{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted .md-sortable-icon,.md-table .md-sortable:hover .md-sortable-icon{opacity:1}.md-table .md-sortable.md-sorted .md-sortable-icon{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted-descending .md-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table .md-sortable .md-sortable-icon{position:absolute;top:50%;left:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table .md-sortable .md-ink-ripple{color:rgba(0,0,0,.87)}.md-table .md-table-cell{height:48px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.87);font-size:13px;line-height:18px}.md-table .md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table .md-table-cell.md-numeric{text-align:right}.md-table .md-table-cell.md-numeric .md-table-cell-container{-ms-flex-pack:end;justify-content:flex-end}.md-table .md-table-cell.md-has-action .md-table-cell-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.md-table .md-table-cell .md-table-cell-container{padding:6px 32px 6px 24px}.md-table .md-table-cell .md-button{width:36px;min-width:36px;height:36px;min-height:36px}.md-table .md-table-cell .md-button:last-child{margin:0 -10px 0 0}.md-table .md-table-cell .md-button .md-icon{width:18px;min-width:18px;height:18px;min-height:18px;margin:0;color:rgba(0,0,0,.54);font-size:18px}.md-table .md-table-selection{width:60px;position:relative;vertical-align:middle}.md-table .md-table-selection+.md-table-cell .md-table-cell-container,.md-table .md-table-selection+.md-table-head .md-table-head-container .md-table-head-text{padding-left:8px}.md-table .md-table-selection .md-table-cell-container{padding-right:16px;padding-left:24px}.md-table .md-table-selection .md-checkbox{margin:0}.md-table .md-table-selection .md-checkbox-container{width:18px;height:18px;margin-top:1px}.md-table .md-table-selection .md-checkbox-container:after{top:-1px;left:4px}.md-table .md-select{min-width:84px}.md-table .md-option,.md-table .md-select-value{font-size:13px}.md-table-edit-trigger{display:inline-block;cursor:pointer;color:rgba(0,0,0,.38)}.md-table-edit-trigger.md-edited{color:rgba(0,0,0,.87)}.md-table-dialog{max-height:0;margin:0;padding:0 24px 2px;position:absolute;top:0;right:0;left:24px;z-index:5;overflow:hidden;pointer-events:none;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);background-color:#fff;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1),max-height 0s .5s;transition-duration:.3s;transform:translate3D(0,-8px,0)}.md-table-dialog.md-active{max-height:400px;pointer-events:auto;transform:translate3D(#000);opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-dialog.md-large{padding:12px 24px 2px}.md-table-dialog .md-input-container{margin-top:0;margin-bottom:16px}.md-table-dialog .md-input-container.md-input-placeholder input{font-size:13px}.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder{font-size:13px}.md-table-dialog .md-char-counter{font-size:13.5px;color:rgba(0,0,0,.54)}.md-table-dialog .md-button{min-width:64px}.md-table-card{overflow:visible}.md-table-card .md-toolbar{padding-left:16px;background-color:#fff}.md-table-card .md-title{-ms-flex:1;flex:1;font-size:20px}.md-table-card .md-table-pagination{height:56px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #e0e0e0;color:rgba(0,0,0,.54);font-size:12px}.md-table-card .md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-card .md-table-pagination .md-select{width:auto;min-width:36px;margin:0 32px}.md-table-card .md-table-pagination .md-select:after{margin-top:0}.md-table-card .md-table-pagination .md-select .md-select-value{padding:0;border:none;font-size:13px}.md-table-card .md-table-pagination .md-button:not([disabled]){color:rgba(0,0,0,.87)}.md-table-card .md-table-pagination .md-button[disabled] .md-icon{color:rgba(0,0,0,.26)}.md-pagination-select.md-direction-bottom-right{margin-top:-16px}.md-pagination-select .md-list-item-holder{font-size:13px}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:4;pointer-events:none;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-alternate-header.md-active{pointer-events:auto;opacity:1;transform:translate3D(#000)}.md-table-alternate-header .md-counter{margin-left:8px;-ms-flex:1;flex:1}.md-tabs{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:-ms-flexbox;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{-ms-flex-pack:center;justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{-ms-flex:1;flex:1}.md-tabs .md-tabs-navigation.md-right{-ms-flex-pack:end;justify-content:flex-end}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{width:9999em;position:absolute;top:0;right:0;bottom:0;left:0;transform:translateZ(0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}.md-toolbar{min-height:64px;padding:0 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;-ms-flex-line-pack:inherit;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#fff}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:hsla(0,0%,100%,.12)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:start;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:hsla(0,0%,100%,.1)}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-title+.md-input-container{margin-left:24px}.md-toolbar .md-list{padding:0;margin:0 -8px;-ms-flex:1;flex:1}.md-tooltip{height:20px;padding:0 8px;position:fixed;z-index:14;pointer-events:none;background-color:rgba(97,97,97,.87);border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;color:#fff;font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:10px;line-height:20px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translateY(50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translateY(50%)}.md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}", ""]);
	
	// exports


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(139)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(141),
	  /* template */
	  __webpack_require__(148),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\App.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("b90fe0a2", content, false);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nbody {\n  background: #f7f7f7;\n}\n.invisible {\n  display: none;\n}\n.space-v {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.sep-b {\n  margin-bottom: 10px;\n}\n.left {\n  text-align: left;\n}\n.center {\n  text-align: center;\n}\n.right {\n  text-align: right;\n}\n", "", {"version":3,"sources":["/./ClientApp/App.vue?cfec65cc"],"names":[],"mappings":";AAmIA;EACA,oBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"App.vue","sourcesContent":["<template>\r\n  <div>\r\n    <div class=\"content-container\">\r\n      <toolbar></toolbar>\r\n      <transition name=\"md-router\">\r\n        <div class=\"page-content page-view\">\r\n          <router-view></router-view>\r\n        </div>\r\n      </transition>\r\n    </div>\r\n    <md-dialog-alert :md-title=\"dialog.title\" :md-content-html=\"dialog.content\" ref=\"modalDialog\">\r\n    </md-dialog-alert>\r\n    <md-dialog-confirm :md-title=\"confirm.title\" :md-content-html=\"confirm.content\" :md-ok-text=\"confirm.ok\" :md-cancel-text=\"confirm.cancel\"\r\n      @close=\"onConfirmClose\" ref=\"confirmDialog\">\r\n      </md-dialog-confirm>\r\n      <md-dialog-prompt :md-title=\"prompt.title\" :md-ok-text=\"prompt.ok\" :md-cancel-text=\"prompt.cancel\" :md-input-placeholder=\"prompt.placeholder\"\r\n        @close=\"onPromptClose\" v-model=\"prompt.resp\" ref=\"promptDialog\">\r\n        </md-dialog-prompt>\r\n  </div>\r\n</template>\r\n<script>\r\n  import Toolbar from './components/toolbar'\r\n  export default {\r\n    data() {\r\n      return {\r\n        u: {\r\n          key: '',\r\n          name: ''\r\n        },\r\n        dialog: {\r\n          title: ' ',\r\n          content: ' '\r\n        },\r\n        confirm: {\r\n          title: ' ',\r\n          content: ' ',\r\n          ok: 'OK',\r\n          cancel: 'Cancel',\r\n          callback: null\r\n        },\r\n        prompt: {\r\n          title: '',\r\n          ok: 'OK',\r\n          cancel: 'Cancel',\r\n          placeholder: '',\r\n          // maxlength: 0,\r\n          resp: '',\r\n          callback: null\r\n        }\r\n      }\r\n    },\r\n    computed: {\r\n      loggedIn: function () {\r\n        if (!this.u.key) return false\r\n        return true\r\n      }\r\n    },\r\n    watch: {\r\n      loggedIn: function (nowLoggedIn) {\r\n        // console.log(nowLoggedIn)\r\n        localStorage.setItem('u', JSON.stringify(this.u))\r\n      }\r\n    },\r\n    components: {\r\n      Toolbar\r\n    },\r\n    methods: {\r\n      showPopup: function (content, title) {\r\n        this.dialog.content = content\r\n        this.dialog.title = title\r\n        this.$refs.modalDialog.open()\r\n      },\r\n      showConfirm: function (content, title, cb, y, n) {\r\n        y = y || 'OK'\r\n        n = n || 'Cancel'\r\n        this.confirm.ok = y\r\n        this.confirm.cancel = n\r\n        this.confirm.content = content\r\n        this.confirm.title = title\r\n        this.confirm.callback = cb\r\n        this.$refs.confirmDialog.open()\r\n      },\r\n      showPrompt: function (title, placeholder, cb) {\r\n        this.prompt.title = title\r\n        this.prompt.placeholder = placeholder\r\n        this.prompt.callback = cb\r\n        this.$refs.promptDialog.open()\r\n      },\r\n      onPromptClose: function (result) {\r\n        if (result == 'ok') {\r\n          this.prompt.callback(this.prompt.resp)\r\n        }\r\n\r\n        this.prompt.resp = ''\r\n        this.prompt.callback = null\r\n      },\r\n      onConfirmClose: function (result) {\r\n        this.confirm.callback(result == 'ok')\r\n        this.confirm.callback = null\r\n      },\r\n      // utilities\r\n      humanFileSize: function (bytes) {\r\n        var thresh = 1024\r\n        if (Math.abs(bytes) < thresh) {\r\n          return bytes + ' B'\r\n        }\r\n        var units = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']\r\n        var u = -1\r\n        do {\r\n          bytes /= thresh\r\n            ++u\r\n        } while (Math.abs(bytes) >= thresh && u < units.length - 1)\r\n        return bytes.toFixed(2) + ' ' + units[u]\r\n      },\r\n      getAuthRequestParams: function () {\r\n        return {\r\n          params: {\r\n            apikey: this.u.key\r\n          }\r\n        }\r\n      }\r\n    },\r\n    created: function () {\r\n      let savedU = localStorage.getItem('u')\r\n      if (savedU) {\r\n        this.u = JSON.parse(savedU)\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style>\r\n  body {\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .invisible {\r\n    display: none;\r\n  }\r\n  \r\n  .space-v {\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .sep-b {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .left {\r\n    text-align: left;\r\n  }\r\n  \r\n  .center {\r\n    text-align: center;\r\n  }\r\n  \r\n  .right {\r\n    text-align: right;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(142);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _toolbar = __webpack_require__(143);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      u: {
	        key: '',
	        name: ''
	      },
	      dialog: {
	        title: ' ',
	        content: ' '
	      },
	      confirm: {
	        title: ' ',
	        content: ' ',
	        ok: 'OK',
	        cancel: 'Cancel',
	        callback: null
	      },
	      prompt: {
	        title: '',
	        ok: 'OK',
	        cancel: 'Cancel',
	        placeholder: '',
	
	        resp: '',
	        callback: null
	      }
	    };
	  },
	
	  computed: {
	    loggedIn: function loggedIn() {
	      if (!this.u.key) return false;
	      return true;
	    }
	  },
	  watch: {
	    loggedIn: function loggedIn(nowLoggedIn) {
	      localStorage.setItem('u', (0, _stringify2.default)(this.u));
	    }
	  },
	  components: {
	    Toolbar: _toolbar2.default
	  },
	  methods: {
	    showPopup: function showPopup(content, title) {
	      this.dialog.content = content;
	      this.dialog.title = title;
	      this.$refs.modalDialog.open();
	    },
	    showConfirm: function showConfirm(content, title, cb, y, n) {
	      y = y || 'OK';
	      n = n || 'Cancel';
	      this.confirm.ok = y;
	      this.confirm.cancel = n;
	      this.confirm.content = content;
	      this.confirm.title = title;
	      this.confirm.callback = cb;
	      this.$refs.confirmDialog.open();
	    },
	    showPrompt: function showPrompt(title, placeholder, cb) {
	      this.prompt.title = title;
	      this.prompt.placeholder = placeholder;
	      this.prompt.callback = cb;
	      this.$refs.promptDialog.open();
	    },
	    onPromptClose: function onPromptClose(result) {
	      if (result == 'ok') {
	        this.prompt.callback(this.prompt.resp);
	      }
	
	      this.prompt.resp = '';
	      this.prompt.callback = null;
	    },
	    onConfirmClose: function onConfirmClose(result) {
	      this.confirm.callback(result == 'ok');
	      this.confirm.callback = null;
	    },
	
	    humanFileSize: function humanFileSize(bytes) {
	      var thresh = 1024;
	      if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	      }
	      var units = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	      var u = -1;
	      do {
	        bytes /= thresh;
	        ++u;
	      } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	      return bytes.toFixed(2) + ' ' + units[u];
	    },
	    getAuthRequestParams: function getAuthRequestParams() {
	      return {
	        params: {
	          apikey: this.u.key
	        }
	      };
	    }
	  },
	  created: function created() {
	    var savedU = localStorage.getItem('u');
	    if (savedU) {
	      this.u = JSON.parse(savedU);
	    }
	  }
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(144)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(146),
	  /* template */
	  __webpack_require__(147),
	  /* scopeId */
	  "data-v-4500469c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "c:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\toolbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] toolbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(145);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("2ba2a751", content, false);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toolbar-title[data-v-4500469c] {\n  flex: 1;\n}\n.account-username[data-v-4500469c] {\n  margin-left: 10px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/toolbar.vue?0209cc36"],"names":[],"mappings":";AA0HA;EACA,QAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"toolbar.vue","sourcesContent":["<template>\r\n  <div class=\"toolbar\">\r\n    <md-toolbar>\r\n      <md-button class=\"md-icon-button\" @click.native=\"toggleLeftSidenav\">\r\n        <md-icon>menu</md-icon>\r\n      </md-button>\r\n      <h2 class=\"md-title toolbar-title\">{{ appName }}</h2>\r\n      <div v-if=\"$root.loggedIn\">\r\n        <md-menu md-align-trigger>\r\n          <md-button md-menu-trigger>\r\n            <md-icon>account_circle</md-icon>\r\n            <span class=\"account-username\">\r\n              {{ $root.u.name }}\r\n            </span>\r\n          </md-button>\r\n          <md-menu-content>\r\n            <md-menu-item @click.native=\"routerGo('/p')\">\r\n              Account\r\n            </md-menu-item>\r\n            <md-menu-item @click.native=\"routerGo('/u')\">\r\n              Dashboard\r\n            </md-menu-item>\r\n            <md-menu-item @click.native=\"routerGo('/files')\">\r\n              My Files\r\n            </md-menu-item>\r\n            <md-divider></md-divider>\r\n            <md-menu-item @click.native=\"logout\">\r\n              Log Out\r\n            </md-menu-item>\r\n          </md-menu-content>\r\n        </md-menu>\r\n      </div>\r\n      <div v-else>\r\n        <md-button class=\"md-icon-button\" @click.native=\"visitGitHub\">\r\n          <md-icon>favorite</md-icon>\r\n        </md-button>\r\n      </div>\r\n    </md-toolbar>\r\n    <md-sidenav class=\"main-sidenav md-left md-fixed\" ref=\"leftSidenav\">\r\n      <md-toolbar class=\"md-large\">\r\n        <div class=\"md-toolbar-container\">\r\n          <h2 class=\"md-title\">{{ appName }}</h2>\r\n        </div>\r\n      </md-toolbar>\r\n      <div class=\"toolbar-content\">\r\n        <div class=\"sidebar-links\">\r\n          <md-list class=\"md-dense\">\r\n            <template v-if=\"$root.loggedIn\">\r\n              <md-list-item @click.native=\"closeSidenav\">\r\n                <router-link exact to=\"/p\">Account</router-link>\r\n              </md-list-item>\r\n              <md-list-item @click.native=\"closeSidenav\">\r\n                <router-link exact to=\"/u\">Dashboard</router-link>\r\n              </md-list-item>\r\n              <md-list-item @click.native=\"closeSidenav\">\r\n                <router-link exact to=\"/files\">Files</router-link>\r\n              </md-list-item>\r\n            </template>\r\n            <md-list-item @click.native=\"closeSidenav\" v-else>\r\n              <router-link exact to=\"/\">Home</router-link>\r\n            </md-list-item>\r\n            <md-list-item @click.native=\"closeSidenav\">\r\n              <router-link exact to=\"/about\">About</router-link>\r\n            </md-list-item>\r\n            <md-list-item>\r\n              <span>Support</span>\r\n              <md-list-expand>\r\n                <md-list>\r\n                  <md-list-item class=\"md-inset\" target=\"_blank\" href=\"https://github.com/0xFireball/PenguinUpload\">\r\n                    GitHub\r\n                  </md-list-item>\r\n                  <md-list-item class=\"md-inset\" href=\"https://github.com/0xFireball\">\r\n                    Donate\r\n                  </md-list-item>\r\n                </md-list>\r\n              </md-list-expand>\r\n            </md-list-item>\r\n          </md-list>\r\n        </div>\r\n      </div>\r\n    </md-sidenav>\r\n  </div>\r\n</template>\r\n<script>\r\n  import axios from 'axios'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n        appName: 'PenguinUpload',\r\n      }\r\n    },\r\n    methods: {\r\n      visitGitHub: function () {\r\n        window.open('https://github.com/0xFireball/PenguinUpload')\r\n      },\r\n      toggleLeftSidenav: function () {\r\n        this.$refs.leftSidenav.toggle()\r\n      },\r\n      closeSidenav: function () {\r\n        this.$refs.leftSidenav.close()\r\n      },\r\n      logout: function () {\r\n        this.$root.u.key = ''\r\n        this.$router.push('/')\r\n      },\r\n      routerGo: function (u) {\r\n        this.$router.push(u)\r\n      }\r\n    },\r\n    created() {\r\n      // this.updateLoggedInStatus()\r\n      // then register hook\r\n      this.$router.beforeEach((to, from, next) => {\r\n        // this.updateLoggedInStatus()\r\n        next()\r\n      })\r\n    }\r\n  }\r\n</script>\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n  .toolbar-title {\r\n    flex: 1;\r\n  }\r\n  \r\n  .account-username {\r\n    margin-left: 10px;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(32);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      appName: 'PenguinUpload'
	    };
	  },
	
	  methods: {
	    visitGitHub: function visitGitHub() {
	      window.open('https://github.com/0xFireball/PenguinUpload');
	    },
	    toggleLeftSidenav: function toggleLeftSidenav() {
	      this.$refs.leftSidenav.toggle();
	    },
	    closeSidenav: function closeSidenav() {
	      this.$refs.leftSidenav.close();
	    },
	    logout: function logout() {
	      this.$root.u.key = '';
	      this.$router.push('/');
	    },
	    routerGo: function routerGo(u) {
	      this.$router.push(u);
	    }
	  },
	  created: function created() {
	    this.$router.beforeEach(function (to, from, next) {
	      next();
	    });
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toolbar"
	  }, [_c('md-toolbar', [_c('md-button', {
	    staticClass: "md-icon-button",
	    nativeOn: {
	      "click": function($event) {
	        _vm.toggleLeftSidenav($event)
	      }
	    }
	  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
	    staticClass: "md-title toolbar-title"
	  }, [_vm._v(_vm._s(_vm.appName))]), _vm._v(" "), (_vm.$root.loggedIn) ? _c('div', [_c('md-menu', {
	    attrs: {
	      "md-align-trigger": ""
	    }
	  }, [_c('md-button', {
	    attrs: {
	      "md-menu-trigger": ""
	    }
	  }, [_c('md-icon', [_vm._v("account_circle")]), _vm._v(" "), _c('span', {
	    staticClass: "account-username"
	  }, [_vm._v("\n            " + _vm._s(_vm.$root.u.name) + "\n          ")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.routerGo('/p')
	      }
	    }
	  }, [_vm._v("\n            Account\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.routerGo('/u')
	      }
	    }
	  }, [_vm._v("\n            Dashboard\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.routerGo('/files')
	      }
	    }
	  }, [_vm._v("\n            My Files\n          ")]), _vm._v(" "), _c('md-divider'), _vm._v(" "), _c('md-menu-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.logout($event)
	      }
	    }
	  }, [_vm._v("\n            Log Out\n          ")])], 1)], 1)], 1) : _c('div', [_c('md-button', {
	    staticClass: "md-icon-button",
	    nativeOn: {
	      "click": function($event) {
	        _vm.visitGitHub($event)
	      }
	    }
	  }, [_c('md-icon', [_vm._v("favorite")])], 1)], 1)], 1), _vm._v(" "), _c('md-sidenav', {
	    ref: "leftSidenav",
	    staticClass: "main-sidenav md-left md-fixed"
	  }, [_c('md-toolbar', {
	    staticClass: "md-large"
	  }, [_c('div', {
	    staticClass: "md-toolbar-container"
	  }, [_c('h2', {
	    staticClass: "md-title"
	  }, [_vm._v(_vm._s(_vm.appName))])])]), _vm._v(" "), _c('div', {
	    staticClass: "toolbar-content"
	  }, [_c('div', {
	    staticClass: "sidebar-links"
	  }, [_c('md-list', {
	    staticClass: "md-dense"
	  }, [(_vm.$root.loggedIn) ? [_c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.closeSidenav($event)
	      }
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/p"
	    }
	  }, [_vm._v("Account")])], 1), _vm._v(" "), _c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.closeSidenav($event)
	      }
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/u"
	    }
	  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.closeSidenav($event)
	      }
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/files"
	    }
	  }, [_vm._v("Files")])], 1)] : _c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.closeSidenav($event)
	      }
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/"
	    }
	  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('md-list-item', {
	    nativeOn: {
	      "click": function($event) {
	        _vm.closeSidenav($event)
	      }
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/about"
	    }
	  }, [_vm._v("About")])], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("Support")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "target": "_blank",
	      "href": "https://github.com/0xFireball/PenguinUpload"
	    }
	  }, [_vm._v("\n                  GitHub\n                ")]), _vm._v(" "), _c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "href": "https://github.com/0xFireball"
	    }
	  }, [_vm._v("\n                  Donate\n                ")])], 1)], 1)], 1)], 2)], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "content-container"
	  }, [_c('toolbar'), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-router"
	    }
	  }, [_c('div', {
	    staticClass: "page-content page-view"
	  }, [_c('router-view')], 1)])], 1), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "modalDialog",
	    attrs: {
	      "md-title": _vm.dialog.title,
	      "md-content-html": _vm.dialog.content
	    }
	  }), _vm._v(" "), _c('md-dialog-confirm', {
	    ref: "confirmDialog",
	    attrs: {
	      "md-title": _vm.confirm.title,
	      "md-content-html": _vm.confirm.content,
	      "md-ok-text": _vm.confirm.ok,
	      "md-cancel-text": _vm.confirm.cancel
	    },
	    on: {
	      "close": _vm.onConfirmClose
	    }
	  }), _vm._v(" "), _c('md-dialog-prompt', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.prompt.resp),
	      expression: "prompt.resp"
	    }],
	    ref: "promptDialog",
	    attrs: {
	      "md-title": _vm.prompt.title,
	      "md-ok-text": _vm.prompt.ok,
	      "md-cancel-text": _vm.prompt.cancel,
	      "md-input-placeholder": _vm.prompt.placeholder
	    },
	    domProps: {
	      "value": (_vm.prompt.resp)
	    },
	    on: {
	      "close": _vm.onPromptClose,
	      "input": function($event) {
	        _vm.prompt.resp = $event
	      }
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTdlZGIzODAxNDNjNTdlNzFlYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZT82OWFiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZT8yZjkwIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZT9mYWZiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZT9kNmY0Iiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlPzA5ZWMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzhiMzUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/NTIzMCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT8zODMyIiwid2VicGFjazovLy9sYW5kaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT83NjQzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzdjNDUiLCJ3ZWJwYWNrOi8vL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzFmNDAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZT8yOTgzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZT83NDc4Iiwid2VicGFjazovLy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWU/YzIzOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT84ZDQ3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/NjdjNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/Mjg1MyIsIndlYnBhY2s6Ly8vYWJvdXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/ZjRjYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/YzE3MSIsIndlYnBhY2s6Ly8vYWJvdXRXaWRnZXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZT9kNjJiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZT8yNDE4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/ZWZlZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/NDA2MyIsIndlYnBhY2s6Ly8vZG93bmxvYWQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZT8zZjFjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/MTY3OCIsIndlYnBhY2s6Ly8vZG93bmxvYWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlP2Y1YmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlP2Y3ZGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlPzUzOTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZT83ODIzIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlPzdiMGUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWU/YzQzNCIsIndlYnBhY2s6Ly8vZmlsZVVwbG9hZFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWU/YWVlYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlPzJmODciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/NTQ5YiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZT82Y2I0Iiwid2VicGFjazovLy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2EwMDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlPzE5M2MiLCJ3ZWJwYWNrOi8vL215RmlsZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2QyZjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/NjRlZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZT8yOWM5Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlP2Q0MDMiLCJ3ZWJwYWNrOi8vL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZT9lZDY3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWU/YmE4ZCIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlPzg3NjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/MWNmNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcz84NjUxIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9jODQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3M/MjBhYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3M/YTdmZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWU/ZDU5OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9hYzJlIiwid2VicGFjazovLy9BcHAudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlP2UwYTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/Y2E1NiIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/NTVhYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9mZDZlIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwicHJvcHMiLCJlcnJvciIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7QUFtQ0E7Ozs7OztBQWhDQSxlQUFJQSxHQUFKO0FBQ0EsZUFBSUEsR0FBSjs7QUFJQSxLQUFJQyxTQUFTLHdCQUFjO0FBQ3pCQztBQUR5QixFQUFkLENBQWI7O0FBSUFELFFBQU9FLFNBQVAsQ0FBaUIsVUFBQ0MsWUFBRCxFQUFrQjtBQUNqQyxPQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWxCOztBQUVBLE9BQUlGLFdBQUosRUFBaUI7QUFDZkEsaUJBQVlHLFNBQVosR0FBd0IsQ0FBeEI7QUFDRDtBQUNGLEVBTkQ7O0FBUUEsZUFBSUMsUUFBSixDQUFhQyxhQUFiLENBQTJCO0FBQ3pCQyxhQUFVO0FBQ1JDLGNBQVM7QUFDUEMsY0FBTyxNQURBO0FBRVBDLFlBQUs7QUFGRSxNQUREO0FBS1JDLGFBQVE7QUFDTkYsY0FBTyxZQUREO0FBRU5DLFlBQUs7QUFGQztBQUxBO0FBRGUsRUFBM0I7O0FBYUEsZUFBSUwsUUFBSixDQUFhTyxlQUFiLENBQTZCLFVBQTdCOztBQUlBLEtBQUlDLFNBQVMsY0FBSUMsU0FBSixDQUFjLEtBQWQsZ0JBQWI7O0FBR0EsS0FBTUMsTUFBTSxJQUFJRixNQUFKLENBQVc7QUFDckJHLE9BQUksTUFEaUI7QUFFckJuQjtBQUZxQixFQUFYLENBQVosQzs7Ozs7O0FDekRBLGlDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1vQixPQUFPLENBQ1g7QUFDRUMsU0FBTSxHQURSO0FBRUVDLFNBQU0sU0FGUjtBQUdFTDtBQUhGLEVBRFcsRUFNWDtBQUNFSSxTQUFNLE9BRFI7QUFFRUUsYUFBVTtBQUZaLEVBTlcsRUFVWDtBQUNFRixTQUFNLFFBRFI7QUFFRUMsU0FBTSxPQUZSO0FBR0VMO0FBSEYsRUFWVyxFQWVYO0FBQ0VJLFNBQU0sSUFEUjtBQUVFQyxTQUFNLFdBRlI7QUFHRUw7QUFIRixFQWZXLEVBb0JYO0FBQ0VJLFNBQU0sY0FEUjtBQUVFQyxTQUFNLHFCQUZSO0FBR0VMLCtCQUhGO0FBSUVPLFVBQU87QUFKVCxFQXBCVyxFQTBCWDtBQUNFSCxTQUFNLFFBRFI7QUFFRUMsU0FBTSxVQUZSO0FBR0VMO0FBSEYsRUExQlcsRUErQlg7QUFDRUksU0FBTSxJQURSO0FBRUVDLFNBQU0sU0FGUjtBQUdFTDtBQUhGLEVBL0JXLEVBb0NYO0FBQ0VJLFNBQU0sY0FEUjtBQUVFQyxTQUFNLHNCQUZSO0FBR0VMO0FBSEYsRUFwQ1csRUF5Q1g7QUFDRUksU0FBTSxRQURSO0FBRUVDLFNBQU0sVUFGUjtBQUdFTDtBQUhGLEVBekNXLENBQWI7O0FBZ0RBLEtBQU1RLFFBQVEsQ0FBQztBQUNiSixTQUFNLEdBRE87QUFFYkMsU0FBTSxPQUZPO0FBR2JMO0FBSGEsRUFBRCxDQUFkOzttQkFNZSxHQUFHUyxNQUFILENBQVVOLElBQVYsRUFBZ0JLLEtBQWhCLEM7Ozs7Ozs7QUM5RGY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EOzs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGtFQUFpRSx1QkFBdUIscUJBQXFCLEdBQUcsVUFBVSw2RkFBNkYsTUFBTSxXQUFXLFdBQVcsNGhCQUE0aEIsYUFBYSxjQUFjLE9BQU8sS0FBSyxrQkFBa0IsZ0JBQWdCLEdBQUcscURBQXFELHlCQUF5Qix1QkFBdUIsS0FBSyx1Q0FBdUM7O0FBRTUrQjs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxvQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLGdDQUErQixZQUFZO0FBQzNDLE1BQUssR0FBRyxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHdCQUF3QjtBQUMzRCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7O3lCQUVBO1lBRUE7QUFDQTs7O0FBR0E7QUFGQTtBQUxBLEc7Ozs7Ozs7QUNuQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EOzs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUFxRCxtQkFBbUIsdUJBQXVCLEdBQUcsK0JBQStCLG9CQUFvQiwyQkFBMkIscUJBQXFCLEdBQUcsVUFBVSw2RkFBNkYsTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLHNKQUFzSix5QkFBeUIsb0ZBQW9GLDZDQUE2QyxrQkFBa0IsaURBQWlELFNBQVMsT0FBTywwSEFBMEgsdUJBQXVCLDJCQUEyQixPQUFPLHdCQUF3Qix3QkFBd0IsK0JBQStCLHlCQUF5QixPQUFPLHlDQUF5Qzs7QUFFbmtDOzs7Ozs7Ozs7Ozs7O1dDSUE7eUJBQ0E7O2lCQUdBO0FBRkE7QUFHQTtBQU5BLEc7Ozs7OztBQ1ZBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7OztBQ1RBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLG1CQUFtQixtQkFBbUIsR0FBRyxnQ0FBZ0Msc0JBQXNCLEdBQUcsVUFBVSw0RkFBNEYsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsa3FCQUFrcUIsZ0JBQWdCLGtCQUFrQixXQUFXLFNBQVMsc0JBQXNCLDZEQUE2RCwyQ0FBMkMsc0JBQXNCLG9DQUFvQyxtREFBbUQsV0FBVyxVQUFVLE9BQU8seURBQXlELDRDQUE0QywyQ0FBMkMsMkJBQTJCLHVCQUF1Qix1QkFBdUIsT0FBTyx1QkFBdUIsMEJBQTBCLE9BQU8seUNBQXlDOztBQUUzdEQ7Ozs7Ozs7Ozs7Ozs7QUNXQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7eUJBRUE7WUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFKQTsrREFLQTt3QkFDQTs4QkFDQTs0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSxHOzs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSw0REFBMkQsZUFBZSxHQUFHLG1DQUFtQyxxQkFBcUIsR0FBRyxVQUFVLGtHQUFrRyxNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsZ1ZBQWdWLHlCQUF5QixnQkFBZ0IsU0FBUyxPQUFPLEtBQUssK0NBQStDLGlCQUFpQixLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSyx1Q0FBdUM7O0FBRXYwQjs7Ozs7Ozs7Ozs7Ozt5QkNFQTtZQUVBO0FBQ0E7QUFKQSxHOzs7Ozs7QUNSQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0EsRUFBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7Ozs7QUNsQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EOzs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDBEQUF5RCxrQkFBa0IsR0FBRyxtQ0FBbUMsZUFBZSxHQUFHLFVBQVUsNkZBQTZGLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSwwcEJBQTBwQixhQUFhLGl3Q0FBaXdDLGdCQUFnQiw4V0FBOFcsMkNBQTJDLHVEQUF1RCxPQUFPLHNCQUFzQixzQ0FBc0Msa0JBQWtCLG9CQUFvQix5SEFBeUgsd0JBQXdCLHlNQUF5TSxXQUFXLFNBQVMsbUJBQW1CLGlDQUFpQyw2SUFBNkksMkZBQTJGLDZKQUE2SixnR0FBZ0csb0NBQW9DLHVGQUF1Riw2VUFBNlUsbUNBQW1DLGdHQUFnRyxnREFBZ0Qsd0NBQXdDLGlFQUFpRSw2RUFBNkUsZ0RBQWdELFlBQVkscUNBQXFDLGlLQUFpSywrSUFBK0ksa0RBQWtELCtJQUErSSx1Q0FBdUMsMkdBQTJHLCtEQUErRCx1R0FBdUcseUtBQXlLLHFKQUFxSix3REFBd0QsdUZBQXVGLDZOQUE2TixvQ0FBb0Msb0hBQW9ILG1EQUFtRCx3Q0FBd0MsNEJBQTRCLHFEQUFxRCxtREFBbUQsWUFBWSxTQUFTLE9BQU8sOEhBQThILHNCQUFzQixPQUFPLHNCQUFzQixtQkFBbUIsT0FBTyx5Q0FBeUM7O0FBRWxuTjs7Ozs7Ozs7Ozs7OztBQzBDQTs7Ozs7O0FBQ0E7bURBRUE7c0NBQ0E7QUFFQTtBQUpBOztTQU1BO3lCQUNBOztjQUVBO21CQUNBO21CQUNBO2NBQ0E7WUFFQTs7bUJBRUE7bUJBQ0E7a0JBQ0E7a0JBQ0E7b0JBQ0E7Y0FDQSxFQU5BO1lBU0E7QUFoQkE7QUFpQkE7OzttQ0FHQTtnQkFDQTt3QkFDQTtxREFDQTt3QkFDQTtBQUNBO0FBQ0E7b0JBRUE7O3NCQUVBOzs7NEJBRUE7NEJBRUE7QUFIQSxtQ0FLQTtzQ0FJQTswQ0FDQTtnREFFQTs7MkJBQ0E7NENBRUE7bUNBQ0E7QUFDQTtzQkFDQTtBQUNBLGlDQUVBO29CQUNBOzBCQUNBO0FBQ0E7c0JBQ0E7QUFDQTtBQUNBO3lDQUNBO2dCQUNBOzJCQUVBOzs0Q0FDQTsyQkFDQTtBQUNBO0FBQ0E7NENBQ0E7MkJBQ0E7QUFDQTtBQUNBO2lDQUNBOzJCQUNBO0FBQ0E7QUFDQTt5REFDQTsyQkFDQTtBQUNBO0FBQ0E7dUJBRUE7O3lCQUVBOzs7K0JBRUE7K0JBQ0E7Z0NBQ0E7QUFIQSxVQUlBLDZDQUVBO3NDQUVBOzZFQUVBOzZDQUVBO3NDQUNBO0FBQ0E7eUJBQ0E7QUFDQSxpQ0FDQTtvQkFDQTt1QkFDQTtBQUNBO3lCQUNBO0FBQ0E7QUFFQTtBQXpGQTtBQXJCQSxHOzs7Ozs7QUN4REEsbUM7Ozs7OztBQ0FBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDL0xBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELHVCQUF1Qix1QkFBdUIsS0FBSyxVQUFVLDBGQUEwRixNQUFNLFdBQVcsV0FBVyw4ZUFBOGUsYUFBYSxjQUFjLE9BQU8sS0FBSyxrQkFBa0IsNEJBQTRCLEdBQUcsaURBQWlELHlCQUF5Qix5QkFBeUIsT0FBTyx1Q0FBdUM7O0FBRXY4Qjs7Ozs7Ozs7Ozs7OztBQ1NBOzs7O0FBR0E7Ozs7Ozs7eUJBRUE7WUFFQTtBQUNBOzs7QUFFQTtBQUVBO0FBSEE7QUFMQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSw0REFBMkQsZUFBZSxHQUFHLG1DQUFtQyxxQkFBcUIsR0FBRyxVQUFVLG1HQUFtRyxNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsNkdBQTZHLFdBQVcsa0xBQWtMLGNBQWMsa0VBQWtFLHlCQUF5QixnQkFBZ0Isb0ZBQW9GLE9BQU8sS0FBSywrQ0FBK0MsaUJBQWlCLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLHVDQUF1Qzs7QUFFNzdCOzs7Ozs7Ozs7Ozs7O3lCQ1FBOztnQkFFQTswQkFFQTtBQUhBO0FBSUE7QUFOQSxHOzs7Ozs7QUNkQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUNMQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7O0FDbEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSw4REFBNkQsd0NBQXdDLHVDQUF1Qyx1QkFBdUIsbUJBQW1CLEdBQUcsbUNBQW1DLHNCQUFzQixHQUFHLFVBQVUsNkZBQTZGLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyw4dUJBQTh1QixnQkFBZ0Isa0JBQWtCLFdBQVcsU0FBUyxzQkFBc0Isb0VBQW9FLE9BQU8seURBQXlELDRDQUE0QywyQ0FBMkMsMkJBQTJCLHVCQUF1QixPQUFPLDBCQUEwQiwwQkFBMEIsT0FBTyx5Q0FBeUM7O0FBRXBsRDs7Ozs7Ozs7Ozs7OztBQ1dBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozt5QkFFQTtZQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBTEEsRzs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELGVBQWUsR0FBRywyQ0FBMkMsaUJBQWlCLGdCQUFnQixxQkFBcUIsd0JBQXdCLEdBQUcsVUFBVSxvR0FBb0csTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLDJlQUEyZSxhQUFhLHNCQUFzQixpQkFBaUIsK2dCQUErZ0IsMkNBQTJDLHVEQUF1RCxPQUFPLDBCQUEwQixpRUFBaUUsa0JBQWtCLDZDQUE2QyxpSkFBaUosOERBQThELFNBQVMsbUJBQW1CLHFDQUFxQyw0SEFBNEgsMkNBQTJDLGtPQUFrTyw2Q0FBNkMscU1BQXFNLHlEQUF5RCxpQkFBaUIsbUNBQW1DLHNJQUFzSSxvRUFBb0Usd0NBQXdDLG1FQUFtRSwyQkFBMkIsT0FBTyxtTkFBbU4sbUJBQW1CLGtCQUFrQixlQUFlLHdDQUF3Qyw0T0FBNE8sWUFBWSwrQ0FBK0MscURBQXFELGtDQUFrQyw4R0FBOEcsZUFBZSxhQUFhLFdBQVcsU0FBUywrQkFBK0IsOEJBQThCLGlCQUFpQixzRUFBc0UsWUFBWSxnREFBZ0QsV0FBVyw4R0FBOEcsT0FBTyxxREFBcUQsbUJBQW1CLE9BQU8sb0NBQW9DLHFCQUFxQixvQkFBb0IseUJBQXlCLDRCQUE0QixPQUFPLHlDQUF5Qzs7QUFFejVJOzs7Ozs7Ozs7Ozs7O0FDcUJBOzs7Ozs7QUFDQTttREFFQTtzQ0FDQTtBQUdBO0FBTEE7OztxQkFPQTt5QkFDQTs7Z0JBRUE7O2VBRUE7ZUFDQTthQUNBO2VBRUE7QUFMQTtjQU1BO2tCQUVBO0FBVkE7QUFXQTs7MkNBRUE7eUdBQ0E7QUFDQTtrREFDQTtnQkFDQTtzQ0FDQTt1QkFDQTttRUFDQSw2Q0FDQTtxQ0FDQTt3Q0FDQTttRUFDQTt3QkFDQTt1QkFDQTs0QkFDQTtBQUNBOzRDQUVBOytFQUNBOzZCQUNBO29CQUNBO3NDQUNBO21DQUNBO2tCQUNBO29CQUNBOzhCQUNBO2tDQUNBOzRCQUNBOzBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQ0E7cUJBRUE7O3dCQUNBOzRCQUNBO3NCQUNBO29CQUNBO0FBQ0E7QUFDQTs0REFDQTt1QkFDQTtjQUNBO21CQUNBO2dCQUVBO2tCQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQXREQTsrQkF1REE7d0JBQ0E7V0FDQTsyQ0FDQTttQkFDQTswQkFDQTtBQUNBO0FBQ0E7OEJBQ0E7K0JBQ0E7QUFDQTtBQWhGQSxHOzs7Ozs7QUNwQ0EsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUMzQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLG1CQUFtQixHQUFHLFVBQVUsOEZBQThGLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxxZkFBcWYsZ0JBQWdCLGtCQUFrQixXQUFXLFNBQVMsc0JBQXNCLHdFQUF3RSwyQ0FBMkMsc0JBQXNCLHFDQUFxQyxrREFBa0QsV0FBVyxVQUFVLE9BQU8seURBQXlELDRDQUE0QywyQ0FBMkMsMkJBQTJCLHVCQUF1QixPQUFPLHlDQUF5Qzs7QUFFajRDOzs7Ozs7Ozs7Ozs7O0FDR0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7O3lCQUVBO1lBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBSkE7K0RBS0E7d0JBQ0E7K0JBQ0E7NEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkEsRzs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxvRUFBbUUsaUJBQWlCLGlCQUFpQix3QkFBd0IsR0FBRyxnREFBZ0QsdUJBQXVCLEdBQUcseUNBQXlDLGlCQUFpQixHQUFHLDZDQUE2Qyx1QkFBdUIsR0FBRyxVQUFVLHdHQUF3RyxNQUFNLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLHk2Q0FBeTZDLG1CQUFtQixxaUJBQXFpQixjQUFjLG1FQUFtRSx3Q0FBd0MsWUFBWSxrQ0FBa0Msa0lBQWtJLHdDQUF3QyxZQUFZLGtDQUFrQyxvS0FBb0ssb0NBQW9DLHU4QkFBdThCLGlCQUFpQixzekJBQXN6QiwyQ0FBMkMsdURBQXVELE9BQU8sMEJBQTBCLGdCQUFnQixrQkFBa0Isc0VBQXNFLGlTQUFpUywrSEFBK0gsU0FBUyxvQkFBb0IsdUNBQXVDLDREQUE0RCxtQ0FBbUMscURBQXFELFNBQVMsbUJBQW1CLG9DQUFvQyxrREFBa0Qsd0NBQXdDLGdEQUFnRCwwQ0FBMEMsb0hBQW9ILGVBQWUsT0FBTyxtRUFBbUUsK0ZBQStGLDJHQUEyRyxXQUFXLCtDQUErQywyQkFBMkIsaUNBQWlDLE9BQU8sOENBQThDLDhCQUE4Qix3SkFBd0osMkdBQTJHLFdBQVcsOENBQThDLHdKQUF3SixrREFBa0Qsc0xBQXNMLHVDQUF1QywwWEFBMFgsa05BQWtOLGdCQUFnQixPQUFPLHNQQUFzUCxhQUFhLGtEQUFrRCx1Q0FBdUMsc0ZBQXNGLGFBQWEsME5BQTBOLG1DQUFtQywrQ0FBK0MsU0FBUyxPQUFPLDJEQUEyRCxxQkFBcUIscUJBQXFCLDRCQUE0QixPQUFPLHlDQUF5QywyQkFBMkIsT0FBTyxrQ0FBa0MscUJBQXFCLE9BQU8sc0NBQXNDLDJCQUEyQixPQUFPLHlDQUF5Qzs7QUFFbjlSOzs7Ozs7Ozs7Ozs7O0FDaUVBOzs7Ozs7QUFFQTttREFFQTtzQ0FDQTtBQUdBO0FBTEE7Ozt5QkFPQTs7MkJBWUE7O3VCQUdBOzswQkFFQTtBQWhCQTtBQWlCQTs7OytDQUVBO3NDQUNBO0FBQ0E7cUNBQ0E7b0NBQ0E7QUFFQTtBQVBBOzt5Q0FTQTt5QkFDQTtBQUNBOytDQUNBO3lCQUNBO0FBQ0E7a0RBQ0E7K0JBQ0E7b0NBQ0E7MkNBQ0E7OEJBQ0E7O2tCQUVBO29CQUNBO21CQUVBO0FBSkE7c0NBS0E7NEJBQ0E7QUFDQTtBQUNBOzREQUNBOzZEQUNBO3NDQUNBOztrQkFFQTtvQkFDQTttQkFDQTtrQkFDQTtvQkFFQTtBQU5BO3NDQU9BOzRCQUNBO0FBQ0E7QUFDQTttREFDQTtnQkFDQTtvQkFDQTs2RUFDQTtBQUNBO3FEQUNBO2dCQUNBO3FCQUNBO3NCQUNBO3dCQUNBO2dDQUNBO2lDQUlBO2lGQUVBOzt5Q0FDQTs7NEJBRUE7OENBR0E7QUFKQTtnQkFNQTs0QkFHQTs7NENBQ0E7QUFDQTtBQUNBOzRDQUNBO2lDQUNBOzREQUNBO0FBQ0E7QUFDQTtzQkFDQTt3Q0FDQTs2QkFDQTsyQkFDQTtnQkFDQTtBQUNBO29DQUNBO3NCQUNBO0FBRUE7QUFoRkE7QUE1QkEsRzs7Ozs7O0FDakZBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUN4SUEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLG1CQUFtQixHQUFHLFVBQVUsNEZBQTRGLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSx1ZUFBdWUsdUNBQXVDLG1CQUFtQixTQUFTLHNCQUFzQixtRUFBbUUsMkNBQTJDLHNCQUFzQixxQ0FBcUMsa0RBQWtELFdBQVcsVUFBVSxPQUFPLHFEQUFxRCw0Q0FBNEMsMkNBQTJDLDJCQUEyQix1QkFBdUIsT0FBTyx5Q0FBeUM7O0FBRXIzQzs7Ozs7Ozs7Ozs7OztBQ0VBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7OztXQUVBO3lCQUNBO1lBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBSkE7K0RBS0E7d0JBQ0E7K0JBQ0E7NEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkEsRzs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSwrckJBQThyQixxR0FBcUc7O0FBRW55Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN1RUE7Ozs7OztBQUVBO21EQUVBO3NDQUNBO0FBR0E7QUFMQTs7O1dBT0E7eUJBQ0E7O3FCQUVBO2NBQ0E7YUFDQTtxQkFDQTtjQUNBO3dCQUVBO0FBUEE7QUFRQTs7O2lDQUVBOzREQUNBO0FBQ0E7cUNBQ0E7a0NBQ0E7QUFDQTs7QUFFQTs7NENBRUE7O2tDQUVBOztzQ0FDQTs7O3VDQUVBOzs2QkFDQTs7bUNBQ0E7eUJBQ0E7O2dCQUNBOztBQUNBOzs7O0FBTkE7OztBQU9BO2NBQ0E7QUFFQTtBQXhCQTs7c0NBMEJBO3VDQUNBO0FBQ0E7aURBQ0E7eUJBQ0E7QUFDQTtvQ0FDQTtzQkFDQTtBQUNBO3VEQUNBOzBCQXdCQTs7Z0NBQ0E7MkJBRUE7QUFnQkE7OzZDQUNBOzBCQUVBOzt1RkFDQTtBQUNBO3FDQUNBO2dCQUNBO3dCQUNBO3NFQUNBO2dCQUVBO2lGQUNBLDRDQUVBO3dCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7eUNBQ0E7Z0JBQ0E7d0JBQ0E7eUhBQ0E7Z0JBRUE7eUVBQ0EsNENBRUE7d0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTt5Q0FDQTtnQkFDQTt3QkFDQTs2Q0FDQSwwQkFDQTtnQkFFQTttRkFDQSw0Q0FFQTtzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO3lDQUNBO2dCQUNBO3dCQUNBO2tHQUNBLCtCQUNBO2dCQUVBO3NFQUNBLDRDQUVBO2lDQUNBO3FEQUVBOzs2QkFFQTs7MERBQ0E7O2tCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTttQ0FDQTtzQ0FDQTswQkFDQTtBQUNBO3VDQUNBOzRCQUNBOzhDQUNBO29DQUNBO2tCQUNBOzhDQUNBOzRCQUNBO0FBQ0E7QUFDQTtpREFDQTtvQ0FDQTtBQUNBO2lEQUNBO3NDQUNBO2lDQUVBOzt3Q0FDQTt1Q0FDQTtBQUNBO3FDQUVBO2dCQUNBO3dDQUVBOztnQkFDQTtrREFDQSxpREFHQTtvQ0FDQTtZQUNBOzJCQUNBO0FBQ0EsaUNBQ0E7b0JBRUE7c0JBQ0E7QUFDQTsyQkFDQTtBQUNBO0FBQ0E7NERBQ0E7dUJBQ0E7Y0FDQTttQkFDQTtnQkFFQTs4QkFDQTtBQUNBO2dCQUVBO2tCQUNBO0FBQ0E7Z0JBRUE7NkJBQ0E7QUFDQTtnQkFFQTtBQUVBOztBQUNBO0FBRUE7QUEvTEE7O3lDQWtNQTsrQkFDQTtjQUNBO0FBQ0E7aURBRUE7O1lBQ0E7QUFFQTtBQVZBOytCQVdBO1VBQ0E7K0JBQ0E7QUFDQTtBQW5QQSxHOzs7Ozs7QUN2RkEsMEQ7Ozs7OztBQ0FBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7OztBQ25IQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLG1CQUFtQixxQkFBcUIsR0FBRyxVQUFVLDRGQUE0RixNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyw0bkJBQTRuQixnQkFBZ0Isa0JBQWtCLFdBQVcsU0FBUyxzQkFBc0IsaUVBQWlFLDJDQUEyQyxzQkFBc0IscUNBQXFDLGtEQUFrRCxXQUFXLFVBQVUsT0FBTyx5REFBeUQsNENBQTRDLDJDQUEyQywyQkFBMkIsdUJBQXVCLHlCQUF5QixPQUFPLHlDQUF5Qzs7QUFFeGpEOzs7Ozs7Ozs7Ozs7O0FDU0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7O3lCQUVBO1lBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBSkE7K0RBS0E7d0JBQ0E7K0JBQ0E7NEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkEsRzs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMERBQXlELHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLGlHQUFpRyxNQUFNLFVBQVUsV0FBVyw2SEFBNkgsZ0JBQWdCLGtLQUFrSyxlQUFlLGFBQWEsZUFBZSwwU0FBMFMsZUFBZSxtdENBQW10QyxzQkFBc0IsbW5CQUFtbkIsMkNBQTJDLHVEQUF1RCxPQUFPLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDZCQUE2Qiw4SUFBOEkscUJBQXFCLDRGQUE0RixXQUFXLFNBQVMsbUJBQW1CLDBDQUEwQyxnTUFBZ00sc0JBQXNCLDZDQUE2QyxvRUFBb0UsZ09BQWdPLGdCQUFnQixhQUFhLFlBQVksd0NBQXdDLGlOQUFpTixzQkFBc0Isd0hBQXdILGdFQUFnRSx3SEFBd0gsYUFBYSxZQUFZLHVDQUF1QyxzTUFBc00sdUJBQXVCLGlIQUFpSCwySEFBMkgscUVBQXFFLGdJQUFnSSxlQUFlLGFBQWEsWUFBWSwyQ0FBMkMsNktBQTZLLHFKQUFxSiwyRUFBMkUsNkdBQTZHLGtNQUFrTSwySkFBMkosd0RBQXdELHVGQUF1Riw4T0FBOE8sb0NBQW9DLDBIQUEwSCx5REFBeUQsd0NBQXdDLDRCQUE0QixxREFBcUQseURBQXlELFlBQVksU0FBUywrQkFBK0Isb1FBQW9RLHVEQUF1RCx1S0FBdUssYUFBYSxVQUFVLE9BQU8sbURBQW1ELHFCQUFxQix3QkFBd0IsS0FBSyx5Q0FBeUM7O0FBRWo4Tzs7Ozs7Ozs7Ozs7OztBQ3NEQTs7Ozs7O0FBQ0E7bURBRUE7c0NBQ0E7QUFHQTtBQUxBOzs7eUJBT0E7OztjQUdBLEVBREE7bUJBRUE7a0JBQ0E7Y0FDQTtZQUVBOztnQkFFQTtnQkFDQTtpQkFHQTtBQUxBO0FBUkE7QUFjQTs7O3FEQUVBO2dCQUNBO2lLQUNBO2dCQUNBOzZEQUNBLDRDQUVBOzhCQUNBOytFQUNBO2dDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7K0NBQ0E7Z0JBQ0E7a0xBQ0E7Z0JBQ0E7OERBQ0EsNENBRUEsQ0FFQTs7NEJBQ0E7OEJBQ0E7QUFDQTtBQUNBO0FBQ0E7NkNBQ0E7Z0JBQ0E7dUtBQ0E7aUJBQ0E7MkdBQ0E7K0RBQ0EsNENBRUEsQ0FFQTs7OEJBQ0E7Z0NBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtxREFDQTtnQkFDQTtpQ0FFQTs7a0RBQ0E7aUNBQ0E7QUFDQTtBQUNBO3FFQUNBO2lDQUNBO0FBQ0E7QUFDQTs2QkFFQTs7K0JBRUE7Ozs4QkFFQTt3Q0FDQTt3Q0FDQTtBQUhBLFVBSUEsNkNBRUE7c0NBRUE7OEJBRUE7OzRCQUNBOzhCQUNBOzZDQUVBOzRDQUNBO0FBQ0E7K0JBQ0E7QUFDQSxpQ0FDQTtvQkFDQTt1QkFDQTtBQUNBOytCQUNBO0FBQ0E7QUFFQTtBQXZGQTsrQkF5RkE7Y0FDQTtnRUFFQTs7bURBQ0EsNENBRUE7O2dEQUVBO2dEQUNBO2lCQUVBO0FBSkE7QUFLQTtBQUNBO0FBdkhBLEc7Ozs7OztBQ3JFQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7OztBQ2pJQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLG1FQUFrRSw0QkFBNEIseUJBQXlCLHVCQUF1Qix1S0FBb04sMERBQTBELG9EQUFvRCw0QkFBNEIseUJBQXlCLHVCQUF1QixvTEFBNk8sMERBQTBELDhDQUE4Qyw0QkFBNEIseUJBQXlCLHVCQUF1Qix5S0FBc04sMERBQTBELG9EQUFvRCw0QkFBNEIseUJBQXlCLHVCQUF1QixzTEFBK08sMERBQTBELGtEQUFrRCw0QkFBNEIseUJBQXlCLHVCQUF1QixxS0FBME4sMERBQTBELGlEQUFpRCw0QkFBNEIseUJBQXlCLHVCQUF1QiwyS0FBOE4sMERBQTBELDhDQUE4Qyw0QkFBNEIseUJBQXlCLHVCQUF1Qiw2S0FBd04sMERBQTBELG9EQUFvRCw0QkFBNEIseUJBQXlCLHVCQUF1QiwwTEFBaVAsMERBQTBELDhDQUE4Qyw0QkFBNEIseUJBQXlCLHVCQUF1Qix5S0FBb04sMERBQTBELG9EQUFvRCw0QkFBNEIseUJBQXlCLHVCQUF1QixzTEFBNk8sMERBQTBELG9EQUFvRCw0QkFBNEIseUJBQXlCLHVCQUF1Qix3TEFBK08sMERBQTBELDhDQUE4Qyw0QkFBNEIseUJBQXlCLHVCQUF1QiwyS0FBc04sMERBQTBELCtDQUErQyw2QkFBNkIseUJBQXlCLHVCQUF1Qiw2S0FBME4sMERBQTBELG1EQUFtRCw2QkFBNkIseUJBQXlCLHVCQUF1Qix5S0FBOE4sMERBQTBELCtDQUErQyw2QkFBNkIseUJBQXlCLHVCQUF1QiwrS0FBNE4sMERBQTBELCtDQUErQyw2QkFBNkIseUJBQXlCLHVCQUF1QixtTEFBZ08sMERBQTBELCtDQUErQyw2QkFBNkIseUJBQXlCLHVCQUF1QiwyS0FBd04sMERBQTBELCtDQUErQyw2QkFBNkIseUJBQXlCLHVCQUF1QixxTEFBa08sMERBQTBELFVBQVUsZ0NBQWdDLEdBQUc7O0FBRXp0Tzs7Ozs7OztBQ1BBLDRGOzs7Ozs7QUNBQSwyRjs7Ozs7O0FDQUEsa0c7Ozs7OztBQ0FBLGlHOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsMkY7Ozs7OztBQ0FBLGtHOzs7Ozs7QUNBQSxpRzs7Ozs7O0FDQUEsZ0c7Ozs7OztBQ0FBLCtGOzs7Ozs7QUNBQSwrRjs7Ozs7O0FDQUEsOEY7Ozs7OztBQ0FBLDRGOzs7Ozs7QUNBQSwyRjs7Ozs7O0FDQUEsa0c7Ozs7OztBQ0FBLGlHOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsMkY7Ozs7OztBQ0FBLGtHOzs7Ozs7QUNBQSxpRzs7Ozs7O0FDQUEsa0c7Ozs7OztBQ0FBLGlHOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsMkY7Ozs7OztBQ0FBLDZGOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsaUc7Ozs7OztBQ0FBLGdHOzs7Ozs7QUNBQSw2Rjs7Ozs7O0FDQUEsNEY7Ozs7OztBQ0FBLDZGOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsNkY7Ozs7OztBQ0FBLDRGOzs7Ozs7QUNBQSw2Rjs7Ozs7O0FDQUEsNEY7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXNDLG9DQUFvQyx5QkFBeUIsdUJBQXVCLGlEQUFzRSwrUEFBaVUsR0FBRyxxQkFBcUIsb0NBQW9DLDBCQUEwQix5QkFBeUIsc0JBQXNCLDJEQUEyRCxxQkFBcUIsMkJBQTJCLDZCQUE2Qix3QkFBd0IsMEJBQTBCLHFCQUFxQixzRkFBc0YsbUZBQW1GLHlFQUF5RSwrREFBK0QsR0FBRzs7QUFFem9DOzs7Ozs7O0FDUEEsMkY7Ozs7OztBQ0FBLDZGOzs7Ozs7QUNBQSw0Rjs7Ozs7O0FDQUEsMkY7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2UEFBNFAsNEJBQTRCLHVDQUF1QywyQ0FBMkMsV0FBVyxpREFBaUQsY0FBYyxHQUFHLDRkQUE0ZCxtQkFBbUIsR0FBRyxpTUFBaU0sMEJBQTBCLHFDQUFxQyxXQUFXLHdKQUF3SixrQkFBa0IsY0FBYyxHQUFHLHNLQUFzSyxrQkFBa0IsR0FBRyxrTEFBa0wsa0NBQWtDLEdBQUcsaUhBQWlILGVBQWUsR0FBRywrTUFBK00sOEJBQThCLEdBQUcsaUdBQWlHLHNCQUFzQixHQUFHLDJFQUEyRSx1QkFBdUIsR0FBRyxrSkFBa0osbUJBQW1CLHFCQUFxQixHQUFHLGlFQUFpRSxxQkFBcUIsZ0JBQWdCLEdBQUcsd0ZBQXdGLG1CQUFtQixHQUFHLGdHQUFnRyxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLGdCQUFnQixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsc0xBQXNMLGNBQWMsR0FBRywrRUFBK0UscUJBQXFCLEdBQUcsc0xBQXNMLHFCQUFxQixHQUFHLGdGQUFnRixpQ0FBaUMsNEJBQTRCLGNBQWMsR0FBRywyREFBMkQsbUJBQW1CLEdBQUcsd0dBQXdHLHNDQUFzQyxtQkFBbUIsR0FBRyxvaEJBQW9oQixtQkFBbUIsMEJBQTBCLHNCQUFzQixXQUFXLGdGQUFnRixzQkFBc0IsR0FBRyw2VEFBNlQseUJBQXlCLEdBQUcsb1lBQW9ZLCtCQUErQiw0QkFBNEIsV0FBVywwR0FBMEcsb0JBQW9CLEdBQUcsdUhBQXVILGNBQWMsZUFBZSxHQUFHLDRIQUE0SCx3QkFBd0IsR0FBRywrVEFBK1QsMkJBQTJCLHVCQUF1QixXQUFXLHdVQUF3VSxpQkFBaUIsR0FBRyw2TkFBNk4sa0NBQWtDLHlDQUF5QyxvQ0FBb0Msb0NBQW9DLEdBQUcsa1VBQWtVLDZCQUE2QixHQUFHLDZFQUE2RSw4QkFBOEIsa0JBQWtCLG1DQUFtQyxHQUFHLGtLQUFrSyxjQUFjLHVCQUF1QixXQUFXLGlGQUFpRixtQkFBbUIsR0FBRyxzS0FBc0ssc0JBQXNCLEdBQUcsbUtBQW1LLDhCQUE4QixzQkFBc0IsR0FBRyxhQUFhLGVBQWUsR0FBRzs7QUFFN2tROzs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDJnQkFBMGdCLHVCQUF1QixnQkFBZ0IscUJBQXFCLG1CQUFtQixvQkFBb0IsMkJBQTJCLEVBQUUsc0JBQXNCLGdCQUFnQixnQkFBZ0IsMkJBQTJCLEVBQUUsb0VBQW9FLGdCQUFnQixpQkFBaUIsaUJBQWlCLEVBQUUsR0FBRyxvRUFBb0UsZ0JBQWdCLGlCQUFpQixFQUFFLDBCQUEwQixzQkFBc0IsRUFBRSxrREFBa0QscUJBQXFCLEVBQUUsdURBQXVELHVCQUF1QixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsWUFBWSxhQUFhLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsdUJBQXVCLEVBQUUscUNBQXFDLFlBQVksYUFBYSxxQ0FBcUMsdUJBQXVCLEVBQUUscUNBQXFDLHVCQUF1QixFQUFFLHFDQUFxQyxjQUFjLFdBQVcscUNBQXFDLHVCQUF1QixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsYUFBYSxnQkFBZ0IsRUFBRSx1Q0FBdUMsdUJBQXVCLEVBQUUscUNBQXFDLHVCQUF1QixFQUFFLHVDQUF1QyxZQUFZLEVBQUUsa0ZBQWtGLDZCQUE2QixFQUFFLCtEQUErRCw2QkFBNkIsRUFBRSxpRUFBaUUsa0JBQWtCLGFBQWEsZ0VBQWdFLDZCQUE2QixFQUFFLGdFQUFnRSw2QkFBNkIsRUFBRSwrREFBK0Qsa0JBQWtCLGFBQWEsaUVBQWlFLDZCQUE2QixFQUFFLGlFQUFpRSw2QkFBNkIsRUFBRSxnRUFBZ0Usb0JBQW9CLFdBQVcsK0RBQStELDZCQUE2QixFQUFFLGtFQUFrRSw2QkFBNkIsRUFBRSx1RUFBdUUsNkJBQTZCLEVBQUUsc0VBQXNFLDZCQUE2QixFQUFFLHNFQUFzRSxrQkFBa0IsRUFBRSxLQUFLLG1PQUFtTyxxQkFBcUIsRUFBRSxRQUFRLHFCQUFxQiwrRkFBK0YscUJBQXFCLGtHQUFrRyxnQkFBZ0IsRUFBRSxvR0FBb0csa0JBQWtCLHdCQUF3QixxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixrQkFBa0IsMEJBQTBCLE1BQU0sbUJBQW1CLG1CQUFtQix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixrQkFBa0IseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsbUJBQW1CLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLGtCQUFrQiwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixrQkFBa0Isb0JBQW9CLEVBQUUsMERBQTBELFFBQVEsbUJBQW1CLEVBQUUsUUFBUSxtQkFBbUIsRUFBRSxRQUFRLG1CQUFtQixFQUFFLFFBQVEsbUJBQW1CLEVBQUUsUUFBUSxtQkFBbUIsRUFBRSxRQUFRLG1CQUFtQixFQUFFLEdBQUcsT0FBTyxrQkFBa0IsRUFBRSwwRUFBMEUsbUJBQW1CLEVBQUUsV0FBVyxtQkFBbUIsRUFBRSwyRUFBMkUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsRUFBRSxVQUFVLG9CQUFvQixrQkFBa0IsRUFBRSxpQ0FBaUMsaUNBQWlDLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLEVBQUUsNEVBQTRFLHlCQUF5QixvQkFBb0IsbUJBQW1CLHdCQUF3Qix3QkFBd0IsOEJBQThCLHVCQUF1QixFQUFFLGNBQWMsbUJBQW1CLHlCQUF5QixxQkFBcUIsRUFBRSxpRkFBaUYsdUJBQXVCLHFCQUFxQixxQ0FBcUMsRUFBRSxtQ0FBbUMsb0JBQW9CLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLDZGQUE2Rix3QkFBd0IsRUFBRSx3Q0FBd0MsMEJBQTBCLEVBQUUsK0RBQStELDBCQUEwQixFQUFFLDRGQUE0RixnQkFBZ0IsMkJBQTJCLEVBQUUscUJBQXFCLG9CQUFvQiwyQkFBMkIsRUFBRSxpQkFBaUIsaUJBQWlCLEVBQUUsZ0JBQWdCLGdCQUFnQixFQUFFLDBFQUEwRSxxQkFBcUIsMEJBQTBCLG9CQUFvQixrQ0FBa0MsRUFBRSxpSkFBaUosa0JBQWtCLG1CQUFtQixnQkFBZ0IsRUFBRSx1WkFBdVosaUdBQWlHLDBEQUEwRCw0REFBNEQsK0RBQStEOztBQUU5dU87Ozs7Ozs7QUNQQSwwQzs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDZJQUE0SSxvQkFBb0IsZ0JBQWdCLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxPQUFPLDREQUE0RCw4Q0FBOEMsV0FBVyxrQkFBa0IsOEJBQThCLGtCQUFrQixXQUFXLGlDQUFpQyxnQkFBZ0IscUVBQXFFLHFCQUFxQixtREFBbUQsZ0NBQWdDLG9CQUFvQiw4Q0FBOEMsd0JBQXdCLGFBQWEsR0FBRyxvQ0FBb0MsS0FBSyxZQUFZLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLEtBQUssZ0JBQWdCLFNBQVMsa0JBQWtCLHdDQUF3QywyQkFBMkIsOEJBQThCLDBCQUEwQixrQ0FBa0MsbUNBQW1DLHNCQUFzQiw2Q0FBNkMsdUJBQXVCLGVBQWUsK0NBQStDLGVBQWUsa0JBQWtCLHNCQUFzQix1S0FBdUssWUFBWSx3QkFBd0IsdUJBQXVCLG1FQUFtRSxXQUFXLFlBQVksMkNBQTJDLDZDQUE2QyxpQ0FBaUMsK0VBQStFLDRFQUE0RSxrQ0FBa0MsaUZBQWlGLGFBQWEsaUZBQWlGLDZCQUE2QiwrRUFBK0UsaUNBQWlDLDRFQUE0RSw2Q0FBNkMsWUFBWSxlQUFlLGdCQUFnQixxQkFBcUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixlQUFlLHFCQUFxQixXQUFXLGdCQUFnQixpQkFBaUIsZUFBZSxlQUFlLGdCQUFnQixxQkFBcUIsaUJBQWlCLFVBQVUsZUFBZSxnQkFBZ0Isc0JBQXNCLGlCQUFpQixhQUFhLGVBQWUsaUJBQWlCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSxpQkFBaUIsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsaUJBQWlCLGNBQWMsZUFBZSxnQkFBZ0IsdUJBQXVCLGlCQUFpQixjQUFjLGdCQUFnQixnQkFBZ0Isc0JBQXNCLGtCQUFrQiwyQ0FBMkMscUJBQXFCLGlEQUFpRCwwQkFBMEIsYUFBYSxhQUFhLFdBQVcsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLFlBQVkscUJBQXFCLGdCQUFnQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsa0JBQWtCLG1CQUFtQixzQkFBc0Isb0JBQW9CLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixtQkFBbUIsNkJBQTZCLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixlQUFlLGlCQUFpQiwwQkFBMEIsaUNBQWlDLG1DQUFtQyxXQUFXLG9CQUFvQixrQkFBa0IsUUFBUSxTQUFTLCtCQUErQixlQUFlLFdBQVcsWUFBWSxjQUFjLDBCQUEwQixrQkFBa0IsK0NBQStDLHVCQUF1QixrQ0FBa0MsZ0JBQWdCLG9DQUFvQyxnQkFBZ0IscUNBQXFDLGVBQWUsbUNBQW1DLGlCQUFpQixhQUFhLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxPQUFPLFVBQVUsb0JBQW9CLGlDQUFpQyx3QkFBd0IsVUFBVSw2Q0FBNkMsdUJBQXVCLFVBQVUsb0JBQW9CLDRCQUE0Qiw0QkFBNEIsZUFBZSxXQUFXLGVBQWUsWUFBWSxxQkFBcUIsdUJBQXVCLHVHQUF1Ryw4Q0FBOEMsbUNBQW1DLGtCQUFrQixvQkFBb0IsYUFBYSxvQkFBb0IsZ0JBQWdCLGVBQWUsWUFBWSxzQkFBc0IsNEJBQTRCLHdCQUF3QixzQkFBc0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsV0FBVyxPQUFPLGVBQWUsWUFBWSx1QkFBdUIsd0JBQXdCLG1CQUFtQixvQkFBb0IsZUFBZSxnQkFBZ0IscUJBQXFCLDhCQUE4QixnQkFBZ0IsdUNBQXVDLGlDQUFpQyw4RUFBOEUsbUJBQW1CLDhCQUE4QixZQUFZLDRDQUE0QyxlQUFlLGVBQWUsZ0JBQWdCLGtCQUFrQixjQUFjLDBDQUEwQyw2Q0FBNkMsc0RBQXNELHFEQUFxRCwrQkFBK0IscURBQXFELFVBQVUsd0NBQXdDLHNEQUFzRCxlQUFlLGdCQUFnQixrQkFBa0IsY0FBYyw4SEFBOEgsVUFBVSwrREFBK0QsaUNBQWlDLCtEQUErRCx3Q0FBd0MsNkJBQTZCLHVDQUF1QyxvRkFBb0YsNkJBQTZCLGdFQUFnRSxXQUFXLGVBQWUsZ0JBQWdCLGVBQWUsZUFBZSxxQkFBcUIsa0JBQWtCLGdCQUFnQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsZUFBZSxnQkFBZ0IsU0FBUyxrQkFBa0IsOENBQThDLG1CQUFtQixvQkFBb0IsZUFBZSxtQkFBbUIscUJBQXFCLGdCQUFnQix1QkFBdUIsaUJBQWlCLGtCQUFrQix5QkFBeUIscUJBQXFCLG1CQUFtQixtQkFBbUIsNEJBQTRCLGFBQWEsNkJBQTZCLFNBQVMsaURBQWlELG1DQUFtQyxxQkFBcUIsMkNBQTJDLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLHFDQUFxQyw2RkFBNkYsb0JBQW9CLGdCQUFnQixpQkFBaUIsZUFBZSw4REFBOEQsa0JBQWtCLFFBQVEsUUFBUSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsZUFBZSxZQUFZLGFBQWEsWUFBWSxrQkFBa0IsaUJBQWlCLGdEQUFnRCxnQkFBZ0IsbUNBQW1DLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixZQUFZLGlCQUFpQix5Q0FBeUMsa0JBQWtCLG9EQUFvRCxnQkFBZ0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsK0NBQStDLHVCQUF1QixrQkFBa0IsV0FBVyxZQUFZLFVBQVUsWUFBWSxnQkFBZ0IsNkZBQTZGLG1CQUFtQixpQkFBaUIsNEJBQTRCLDhDQUE4QywwREFBMEQsZ0RBQWdELDhGQUE4RiwwQkFBMEIsV0FBVyxZQUFZLGlCQUFpQixpQ0FBaUMsbUJBQW1CLHFCQUFxQixzQkFBc0IsZUFBZSxvQkFBb0IsMkRBQTJELGlDQUFpQyw0QkFBNEIsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsMEJBQTBCLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLDhEQUE4RCxjQUFjLHdXQUF3VyxTQUFTLGtCQUFrQixVQUFVLHVEQUF1RCxTQUFTLFVBQVUsMkRBQTJELFNBQVMsU0FBUywyQkFBMkIseURBQXlELFNBQVMsV0FBVyw2REFBNkQsWUFBWSxVQUFVLGlFQUFpRSxZQUFZLFNBQVMsMkJBQTJCLCtEQUErRCxXQUFXLFlBQVksa0NBQWtDLGdCQUFnQixvQ0FBb0MsZ0JBQWdCLHFDQUFxQyxlQUFlLG1DQUFtQyxpQkFBaUIsa0JBQWtCLFdBQVcsb0JBQW9CLGFBQWEsNkJBQTZCLFNBQVMsZ0JBQWdCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixtQkFBbUIseUNBQXlDLDBCQUEwQix3Q0FBd0MsdUJBQXVCLDBCQUEwQiw2Q0FBNkMsc0JBQXNCLG1GQUFtRixtQ0FBbUMscUJBQXFCLHFEQUFxRCxrQkFBa0IsU0FBUyxjQUFjLG9CQUFvQixhQUFhLDBCQUEwQixzQkFBc0Isa0JBQWtCLFVBQVUsNkZBQTZGLHVCQUF1QixlQUFlLDhDQUE4QywrQkFBK0IsNkJBQTZCLFVBQVUsdUdBQXVHLHdCQUF3QixrQkFBa0IsZ0NBQWdDLGdCQUFnQix1Q0FBdUMsV0FBVyxtQkFBbUIsY0FBYyxjQUFjLG9DQUFvQyxrQkFBa0IsUUFBUSxRQUFRLE9BQU8sMkJBQTJCLCtCQUErQixnQkFBZ0Isc0NBQXNDLFdBQVcsZ0JBQWdCLGNBQWMsY0FBYyxtQ0FBbUMsa0JBQWtCLFFBQVEsUUFBUSxPQUFPLDJCQUEyQiwrQkFBK0IsZ0JBQWdCLHNDQUFzQyxXQUFXLGlCQUFpQixjQUFjLGNBQWMsbUNBQW1DLGtCQUFrQixRQUFRLFFBQVEsT0FBTywyQkFBMkIsd0NBQXdDLGlCQUFpQixvREFBb0Qsb0JBQW9CLDRCQUE0QixXQUFXLHlCQUF5QixhQUFhLDJJQUEySSxlQUFlLG9DQUFvQyxrQkFBa0IsNkNBQTZDLG9CQUFvQixhQUFhLHNCQUFzQiw4QkFBOEIsMENBQTBDLGNBQWMsMkRBQTJELGNBQWMsb0NBQW9DLGtCQUFrQixXQUFXLDhDQUE4QyxlQUFlLDhGQUE4RixnQkFBZ0IsaUJBQWlCLG9DQUFvQyxTQUFTLCtDQUErQyxrQkFBa0IsK0NBQStDLGdCQUFnQiw4Q0FBOEMsV0FBVyxPQUFPLHdDQUF3QyxXQUFXLGtCQUFrQixjQUFjLFlBQVksaUJBQWlCLGtEQUFrRCxZQUFZLG1CQUFtQixlQUFlLGFBQWEsK0NBQStDLFlBQVksbUJBQW1CLGVBQWUsYUFBYSxnRUFBZ0UsU0FBUyxnQkFBZ0IscUJBQXFCLFlBQVksZUFBZSxxQkFBcUIsaUJBQWlCLCtCQUErQixlQUFlLG1CQUFtQixlQUFlLGlCQUFpQixpQkFBaUIsZ0NBQWdDLGFBQWEsb0JBQW9CLGFBQWEsc0JBQXNCLDhCQUE4QiwrQ0FBK0MsZ0JBQWdCLGlCQUFpQixXQUFXLE9BQU8saURBQWlELGlCQUFpQiwwQkFBMEIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLG1CQUFtQix1RUFBdUUsZUFBZSwwQkFBMEIsYUFBYSxlQUFlLGlCQUFpQixxQ0FBcUMsb0JBQW9CLDBCQUEwQixZQUFZLG9CQUFvQixhQUFhLGtCQUFrQix5QkFBeUIsc0JBQXNCLG1CQUFtQixxQ0FBcUMsU0FBUyxpREFBaUQsY0FBYyxnREFBZ0QsZUFBZSxnREFBZ0QsZ0JBQWdCLCtEQUErRCxrQkFBa0IsOENBQThDLFdBQVcsa0JBQWtCLFNBQVMsY0FBYyw2REFBNkQsUUFBUSxPQUFPLHVEQUF1RCxXQUFXLFVBQVUsOEJBQThCLGtCQUFrQixXQUFXLDhEQUE4RCxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsT0FBTyxVQUFVLDRDQUE0QyxrQkFBa0IsUUFBUSxTQUFTLE9BQU8sVUFBVSwrREFBK0QsY0FBYywwQ0FBMEMsVUFBVSx5QkFBeUIsZ0JBQWdCLHVEQUF1RCw0Q0FBNEMsb0RBQW9ELHVCQUF1QixVQUFVLDBDQUEwQyxjQUFjLGtCQUFrQixVQUFVLDZDQUE2Qyw4Q0FBOEMsc0JBQXNCLDBDQUEwQyxnQkFBZ0Isa0JBQWtCLFVBQVUsVUFBVSw2QkFBNkIsOENBQThDLG1CQUFtQixhQUFhLFdBQVcsdUJBQXVCLDJCQUEyQixvQkFBb0Isa0JBQWtCLG9DQUFvQyxXQUFXLFlBQVksa0JBQWtCLGtCQUFrQixpQ0FBaUMsOENBQThDLDBDQUEwQyxhQUFhLDJDQUEyQyxXQUFXLFlBQVksa0JBQWtCLFFBQVEsU0FBUyxrQkFBa0IsK0JBQStCLDhDQUE4QyxjQUFjLDBDQUEwQyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sU0FBUyxzQkFBc0IsYUFBYSxjQUFjLFVBQVUsMkNBQTJDLDhDQUE4QyxjQUFjLDBDQUEwQyxrQkFBa0IsWUFBWSxtREFBbUQsVUFBVSxZQUFZLGFBQWEsV0FBVyxrQkFBa0Isc0JBQXNCLDhEQUE4RCxxQkFBcUIsc0JBQXNCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixnQ0FBZ0MsWUFBWSxpQkFBaUIsaUJBQWlCLHFEQUFxRCxVQUFVLHVDQUF1Qyw4Q0FBOEMsU0FBUyxZQUFZLGlCQUFpQixxQkFBcUIsbUJBQW1CLDhDQUE4QyxlQUFlLGlCQUFpQixtQkFBbUIsc0JBQXNCLGtCQUFrQixtQkFBbUIsK0JBQStCLGFBQWEsbUVBQW1FLGVBQWUsNkZBQTZGLGdDQUFnQyxvQkFBb0IsZUFBZSw4QkFBOEIsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLFNBQVMsVUFBVSxrQkFBa0IsUUFBUSxVQUFVLG1CQUFtQiw4Q0FBOEMsdUNBQXVDLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixTQUFTLGVBQWUsNkNBQTZDLG1CQUFtQix5Q0FBeUMsWUFBWSxtQkFBbUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLG9CQUFvQixhQUFhLG1CQUFtQixlQUFlLG9CQUFvQixZQUFZLFdBQVcsT0FBTyxxQkFBcUIsb0JBQW9CLGFBQWEscUJBQXFCLGlCQUFpQixxQkFBcUIsdUJBQXVCLHNCQUFzQixtQkFBbUIsb0JBQW9CLGVBQWUsTUFBTSxRQUFRLFNBQVMsT0FBTyxVQUFVLCtCQUErQixvQkFBb0IsMENBQTBDLG9CQUFvQiw2QkFBNkIsOENBQThDLHNDQUFzQyxvQkFBb0IsZUFBZSxVQUFVLFdBQVcsZ0JBQWdCLGNBQWMsZUFBZSxvQkFBb0IsYUFBYSxxQkFBcUIsaUJBQWlCLGdCQUFnQixrQkFBa0IsV0FBVyxhQUFhLGtCQUFrQixVQUFVLHdHQUF3Ryx3QkFBd0IsK0JBQStCLGdHQUFnRyw4QkFBOEIsd0JBQXdCLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLGFBQWEsU0FBUyxpQkFBaUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLFdBQVcsT0FBTyw2QkFBNkIsZ0JBQWdCLGNBQWMsa0JBQWtCLHFRQUFxUSxnREFBZ0QsK0JBQStCLGlCQUFpQixrREFBa0QsYUFBYSxpREFBaUQsZ0JBQWdCLGdCQUFnQixlQUFlLGVBQWUsY0FBYyxtQkFBbUIsZ0JBQWdCLHlCQUF5QixvQkFBb0IsYUFBYSxzQkFBc0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsa0JBQWtCLDBCQUEwQixXQUFXLGtCQUFrQixTQUFTLFFBQVEsT0FBTyxzQkFBc0IsY0FBYyw4QkFBOEIsZUFBZSxTQUFTLGNBQWMseUNBQXlDLGdCQUFnQixZQUFZLFdBQVcsU0FBUyxVQUFVLGNBQWMsU0FBUyxpQ0FBaUMscUJBQXFCLGlCQUFpQixTQUFTLG9CQUFvQixhQUFhLFdBQVcsT0FBTywwQkFBMEIsVUFBVSxXQUFXLFlBQVksVUFBVSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixTQUFTLGtCQUFrQixlQUFlLFNBQVMsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLGVBQWUsWUFBWSwyQkFBMkIsb0JBQW9CLHNCQUFzQixtQkFBbUIsa0JBQWtCLGtDQUFrQyxzQkFBc0Isb0JBQW9CLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixlQUFlLG9CQUFvQixXQUFXLGVBQWUsWUFBWSxnQkFBZ0IsZUFBZSxvQkFBb0IsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLGVBQWUsb0JBQW9CLFlBQVksZ0JBQWdCLGFBQWEsaUJBQWlCLGdCQUFnQixhQUFhLFdBQVcsWUFBWSxZQUFZLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQix1QkFBdUIsVUFBVSxVQUFVLDZCQUE2QixxQkFBcUIsMEJBQTBCLDRDQUE0QyxvQ0FBb0Msb0JBQW9CLFVBQVUsOEJBQThCLHNCQUFzQixzR0FBc0csOEZBQThGLGlKQUFpSixvQkFBb0IsV0FBVyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixvQkFBb0IsYUFBYSxrQkFBa0IsMEJBQTBCLFdBQVcsUUFBUSxTQUFTLGlDQUFpQyxjQUFjLG9EQUFvRCxrQkFBa0IsT0FBTyw4Q0FBOEMsMEJBQTBCLFNBQVMsb0JBQW9CLHdCQUF3QixzQkFBc0IsZUFBZSxpQkFBaUIsdURBQXVELFdBQVcsWUFBWSxVQUFVLGNBQWMsV0FBVyxPQUFPLFlBQVksZ0JBQWdCLDhDQUE4Qyw4QkFBOEIsc0JBQXNCLG9CQUFvQixjQUFjLGlCQUFpQixtRUFBbUUsYUFBYSw2R0FBNkcsc0JBQXNCLGVBQWUsaUJBQWlCLGdDQUFnQyxtSEFBbUgsaUJBQWlCLCtIQUErSCxRQUFRLFVBQVUsNkJBQTZCLGdCQUFnQixpQkFBaUIsY0FBYyxZQUFZLGtCQUFrQiw0REFBNEQsWUFBWSxrQkFBa0IsYUFBYSxlQUFlLDhCQUE4Qix3QkFBd0IsT0FBTyxVQUFVLGdDQUFnQyw4Q0FBOEMsOEJBQThCLFFBQVEsa0RBQWtELGdCQUFnQixzQkFBc0IsOENBQThDLHdEQUF3RCxXQUFXLFdBQVcsa0JBQWtCLE9BQU8sU0FBUyxVQUFVLGFBQWEsd0RBQXdELFVBQVUsc0xBQXNMLGlCQUFpQiwrQ0FBK0Msb0JBQW9CLFNBQVMsVUFBVSxlQUFlLGlHQUFpRyxlQUFlLGtGQUFrRixvQkFBb0IsTUFBTSxVQUFVLGVBQWUsMEtBQTBLLGVBQWUsaUZBQWlGLHNCQUFzQiwwQ0FBMEMsb0JBQW9CLDJEQUEyRCxTQUFTLGVBQWUsdURBQXVELFVBQVUsNENBQTRDLDJCQUEyQiwwRkFBMEYsd0JBQXdCLHVJQUF1SSxzQkFBc0IseUVBQXlFLHNCQUFzQix3REFBd0QsU0FBUyxrQkFBa0IsUUFBUSxZQUFZLHNCQUFzQix1RUFBdUUsc0JBQXNCLCtDQUErQyxVQUFVLHdCQUF3QixrREFBa0Qsa0JBQWtCLFFBQVEsUUFBUSx1Q0FBdUMsY0FBYyxlQUFlLGdCQUFnQixtQkFBbUIsMkVBQTJFLHNCQUFzQixXQUFXLG9CQUFvQixhQUFhLHVCQUF1QixtQkFBbUIsbUJBQW1CLGVBQWUsV0FBVyxPQUFPLFFBQVEsdUJBQXVCLG1CQUFtQixXQUFXLDBCQUEwQixzQkFBc0Isd0JBQXdCLFdBQVcsaUJBQWlCLG9DQUFvQyxjQUFjLGdCQUFnQixvQkFBb0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGNBQWMsa0JBQWtCLHlCQUF5QiwyQkFBMkIsbUJBQW1CLGtCQUFrQixzQ0FBc0MsbUJBQW1CLGtCQUFrQixzQkFBc0IsaUJBQWlCLG9CQUFvQixpQ0FBaUMsaUJBQWlCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGlCQUFpQix3Q0FBd0Msa0JBQWtCLGlCQUFpQix3QkFBd0IsZ0JBQWdCLG1CQUFtQixtQ0FBbUMsZ0JBQWdCLG1CQUFtQiw4QkFBOEIsa0JBQWtCLGlCQUFpQix5Q0FBeUMsa0JBQWtCLGlCQUFpQix5QkFBeUIsZ0JBQWdCLG1CQUFtQixvQ0FBb0MsZ0JBQWdCLG1CQUFtQiw4QkFBOEIsbUJBQW1CLGtCQUFrQix5Q0FBeUMsbUJBQW1CLGtCQUFrQix5QkFBeUIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLGtCQUFrQix5Q0FBeUMsbUJBQW1CLGtCQUFrQix5QkFBeUIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLG9CQUFvQixTQUFTLGFBQWEsU0FBUyxZQUFZLG9CQUFvQix1QkFBdUIsbUJBQW1CLFlBQVksb0JBQW9CLHVCQUF1QixtQkFBbUIsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLFdBQVcsYUFBYSxnQkFBZ0IsWUFBWSxrQkFBa0IsZUFBZSxZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixhQUFhLGVBQWUsa0JBQWtCLGNBQWMsb0JBQW9CLGlCQUFpQix5QkFBeUIsMkJBQTJCLGtCQUFrQixpQkFBaUIsc0NBQXNDLGtCQUFrQixpQkFBaUIsc0JBQXNCLGdCQUFnQixtQkFBbUIsaUNBQWlDLGdCQUFnQixtQkFBbUIsY0FBYyx1QkFBdUIsbUJBQW1CLGlCQUFpQiwwQkFBMEIsc0JBQXNCLGVBQWUsYUFBYSxTQUFTLGtCQUFrQixvQkFBb0IsdUJBQXVCLG1CQUFtQixrQkFBa0Isb0JBQW9CLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQix5QkFBeUIsc0JBQXNCLGlCQUFpQixhQUFhLGdCQUFnQixZQUFZLHdCQUF3QixlQUFlLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLG1CQUFtQixlQUFlLGtCQUFrQixjQUFjLDBCQUEwQixpQkFBaUIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLHFCQUFxQix1QkFBdUIsb0JBQW9CLGtCQUFrQix5QkFBeUIsZUFBZSxjQUFjLDBCQUEwQixlQUFlLHVCQUF1QixtQkFBbUIsa0JBQWtCLDBCQUEwQixzQkFBc0IsZ0JBQWdCLGFBQWEsU0FBUyxtQkFBbUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsbUJBQW1CLG9CQUFvQix1QkFBdUIsbUJBQW1CLDBCQUEwQixzQkFBc0IsMEJBQTBCLHNCQUFzQixrQkFBa0IsYUFBYSxnQkFBZ0IsWUFBWSx5QkFBeUIsZUFBZSxtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixvQkFBb0IsZUFBZSxrQkFBa0IsY0FBYywyQkFBMkIsaUJBQWlCLHVCQUF1QixvQkFBb0IsMkJBQTJCLHdCQUF3QixxQkFBcUIsdUJBQXVCLHFCQUFxQixrQkFBa0IseUJBQXlCLGdCQUFnQixjQUFjLDBCQUEwQixjQUFjLHVCQUF1QixtQkFBbUIsaUJBQWlCLDBCQUEwQixzQkFBc0IsZUFBZSxhQUFhLFNBQVMsa0JBQWtCLG9CQUFvQix1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0IsdUJBQXVCLG1CQUFtQix5QkFBeUIsc0JBQXNCLHlCQUF5QixzQkFBc0IsaUJBQWlCLGFBQWEsZ0JBQWdCLFlBQVksd0JBQXdCLGVBQWUsa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEseUJBQXlCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLHlCQUF5QixnQkFBZ0IsbUJBQW1CLGVBQWUsa0JBQWtCLGNBQWMsMEJBQTBCLGlCQUFpQixzQkFBc0Isb0JBQW9CLDJCQUEyQix1QkFBdUIscUJBQXFCLHVCQUF1QixvQkFBb0Isa0JBQWtCLHlCQUF5QixlQUFlLGNBQWMsMEJBQTBCLGVBQWUsdUJBQXVCLG1CQUFtQixrQkFBa0IsMEJBQTBCLHNCQUFzQixnQkFBZ0IsYUFBYSxTQUFTLG1CQUFtQixvQkFBb0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixhQUFhLGdCQUFnQixZQUFZLHlCQUF5QixlQUFlLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG9CQUFvQixlQUFlLGtCQUFrQixjQUFjLDJCQUEyQixpQkFBaUIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix1QkFBdUIscUJBQXFCLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGNBQWMseUJBQXlCLGVBQWUsdUJBQXVCLG1CQUFtQixrQkFBa0IsMEJBQTBCLHNCQUFzQixnQkFBZ0IsYUFBYSxTQUFTLG1CQUFtQixvQkFBb0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixhQUFhLGdCQUFnQixZQUFZLHlCQUF5QixlQUFlLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsMEJBQTBCLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSwwQkFBMEIsZ0JBQWdCLG9CQUFvQixlQUFlLGtCQUFrQixjQUFjLDJCQUEyQixpQkFBaUIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix1QkFBdUIscUJBQXFCLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGNBQWMsMEJBQTBCLHFCQUFxQix1QkFBdUIsbUJBQW1CLHdCQUF3QiwwQkFBMEIsc0JBQXNCLHNCQUFzQixhQUFhLFNBQVMseUJBQXlCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHlCQUF5QixvQkFBb0IsdUJBQXVCLG1CQUFtQixnQ0FBZ0Msc0JBQXNCLGdDQUFnQyxzQkFBc0Isd0JBQXdCLGFBQWEsZ0JBQWdCLFlBQVksK0JBQStCLGVBQWUseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IsMEJBQTBCLGVBQWUsa0JBQWtCLGNBQWMsaUNBQWlDLGlCQUFpQiw2QkFBNkIsb0JBQW9CLDJCQUEyQiw4QkFBOEIscUJBQXFCLHVCQUF1QiwyQkFBMkIsa0JBQWtCLHlCQUF5QixzQkFBc0IsY0FBYyx5QkFBeUIsc0JBQXNCLHVCQUF1QixtQkFBbUIseUJBQXlCLDBCQUEwQixzQkFBc0IsdUJBQXVCLGFBQWEsU0FBUywwQkFBMEIsb0JBQW9CLHVCQUF1QixtQkFBbUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsbUJBQW1CLGlDQUFpQyxzQkFBc0IsaUNBQWlDLHNCQUFzQix5QkFBeUIsYUFBYSxnQkFBZ0IsWUFBWSxnQ0FBZ0MsZUFBZSwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwyQkFBMkIsZUFBZSxrQkFBa0IsY0FBYyxrQ0FBa0MsaUJBQWlCLDhCQUE4QixvQkFBb0IsMkJBQTJCLCtCQUErQixxQkFBcUIsdUJBQXVCLDRCQUE0QixrQkFBa0IseUJBQXlCLHVCQUF1QixjQUFjLHlCQUF5QixxQkFBcUIsdUJBQXVCLG1CQUFtQix3QkFBd0IsMEJBQTBCLHNCQUFzQixzQkFBc0IsYUFBYSxTQUFTLHlCQUF5QixvQkFBb0IsdUJBQXVCLG1CQUFtQix5QkFBeUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsZ0NBQWdDLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLHdCQUF3QixhQUFhLGdCQUFnQixZQUFZLCtCQUErQixlQUFlLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixjQUFjLGlCQUFpQixhQUFhLGdDQUFnQyxnQkFBZ0IseUJBQXlCLGNBQWMsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQix5QkFBeUIsY0FBYyxpQkFBaUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLDBCQUEwQixlQUFlLGtCQUFrQixjQUFjLGlDQUFpQyxpQkFBaUIsNkJBQTZCLG9CQUFvQiwyQkFBMkIsOEJBQThCLHFCQUFxQix1QkFBdUIsMkJBQTJCLGtCQUFrQix5QkFBeUIsc0JBQXNCLGNBQWMseUJBQXlCLHNCQUFzQix1QkFBdUIsbUJBQW1CLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHVCQUF1QixhQUFhLFNBQVMsMEJBQTBCLG9CQUFvQix1QkFBdUIsbUJBQW1CLDBCQUEwQixvQkFBb0IsdUJBQXVCLG1CQUFtQixpQ0FBaUMsc0JBQXNCLGlDQUFpQyxzQkFBc0IseUJBQXlCLGFBQWEsZ0JBQWdCLFlBQVksZ0NBQWdDLGVBQWUsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLGNBQWMsaUJBQWlCLGFBQWEsaUNBQWlDLGdCQUFnQiwwQkFBMEIsY0FBYyxpQkFBaUIsYUFBYSxpQ0FBaUMsZ0JBQWdCLDBCQUEwQixjQUFjLGlCQUFpQixhQUFhLGlDQUFpQyxnQkFBZ0IsMkJBQTJCLGVBQWUsa0JBQWtCLGNBQWMsa0NBQWtDLGlCQUFpQiw4QkFBOEIsb0JBQW9CLDJCQUEyQiwrQkFBK0IscUJBQXFCLHVCQUF1Qiw0QkFBNEIsa0JBQWtCLHlCQUF5Qix1QkFBdUIsY0FBYyxTQUFTLFNBQVMsY0FBYyxvQkFBb0IsYUFBYSw0QkFBNEIsd0JBQXdCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGNBQWMsaUVBQWlFLGtCQUFrQix3REFBd0QsZ0JBQWdCLGVBQWUsbUtBQW1LLGtCQUFrQiw2QkFBNkIsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLHVDQUF1QyxnQkFBZ0IsdUVBQXVFLGdCQUFnQiwwREFBMEQsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLHVLQUF1SyxrQkFBa0IsNklBQTZJLGVBQWUsOERBQThELGdCQUFnQix1RUFBdUUsZ0JBQWdCLDBEQUEwRCxXQUFXLGVBQWUsWUFBWSxnQkFBZ0IsdUtBQXVLLGtCQUFrQiw2SUFBNkksZUFBZSw4REFBOEQsZ0JBQWdCLG1DQUFtQyxTQUFTLGdDQUFnQyxrQkFBa0IscUNBQXFDLGdCQUFnQixjQUFjLFlBQVksa0JBQWtCLFVBQVUsMEJBQTBCLGVBQWUsb0JBQW9CLCtDQUErQyxrQkFBa0IsK0JBQStCLFdBQVcsU0FBUyxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsT0FBTyxVQUFVLGdCQUFnQiw0RUFBNEUsa0JBQWtCLFVBQVUscUZBQXFGLGtCQUFrQixzQ0FBc0MsZ0JBQWdCLFNBQVMsZUFBZSxvQkFBb0IsYUFBYSx5QkFBeUIscUJBQXFCLHNCQUFzQixtQkFBbUIsc0JBQXNCLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGVBQWUsZ0JBQWdCLGdCQUFnQixvQkFBb0IsNENBQTRDLHFCQUFxQiwyREFBMkQsa0JBQWtCLCtIQUErSCxrQkFBa0Isc0RBQXNELG1CQUFtQixtRUFBbUUsc0JBQXNCLDBCQUEwQixrQkFBa0IsU0FBUyxRQUFRLE9BQU8sMEZBQTBGLFNBQVMsMElBQTBJLGtCQUFrQixjQUFjLHlCQUF5QixlQUFlLGtCQUFrQix1QkFBdUIsc0JBQXNCLDZCQUE2QixnQkFBZ0IscUJBQXFCLGdCQUFnQiwwQkFBMEIsc0JBQXNCLGdCQUFnQiw2QkFBNkIsdURBQXVELFdBQVcsa0JBQWtCLFFBQVEsT0FBTyxVQUFVLDhDQUE4QyxjQUFjLDRCQUE0QixNQUFNLDJCQUEyQixTQUFTLCtCQUErQixrQkFBa0IsMkVBQTJFLGlDQUFpQyxpS0FBaUssZ0JBQWdCLGlGQUFpRiw0Q0FBNEMsK0NBQStDLDBCQUEwQix3SEFBd0gsOENBQThDLHFDQUFxQyxrQkFBa0IsVUFBVSw2QkFBNkIsMEJBQTBCLDZDQUE2Qyx1REFBdUQsMEJBQTBCLDhDQUE4QyxVQUFVLHdCQUF3QixvQkFBb0IsYUFBYSw0QkFBNEIsd0JBQXdCLFdBQVcsT0FBTyxnQkFBZ0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLHVCQUF1QixtQkFBbUIscUNBQXFDLGVBQWUsNEVBQTRFLFNBQVMsc0JBQXNCLGVBQWUsdURBQXVELHNCQUFzQixTQUFTLHFCQUFxQixpQkFBaUIsWUFBWSxlQUFlLGdCQUFnQixnQkFBZ0IsOEJBQThCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLFdBQVcsc0NBQXNDLGtCQUFrQiw2RkFBNkYsVUFBVSx5S0FBeUssb0NBQW9DLDJDQUEyQyxpQkFBaUIsaUJBQWlCLDBCQUEwQixxREFBcUQsaUJBQWlCLDBDQUEwQyxpQkFBaUIsZ0JBQWdCLDJCQUEyQixvREFBb0QsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixrREFBa0QsZ0JBQWdCLHVDQUF1QyxnQkFBZ0IsZ0JBQWdCLDhCQUE4QixpREFBaUQsZ0JBQWdCLGtDQUFrQyxTQUFTLDJCQUEyQixXQUFXLDJCQUEyQixZQUFZLDJCQUEyQixZQUFZLDJCQUEyQixZQUFZLDJCQUEyQixZQUFZLDJCQUEyQixZQUFZLDJCQUEyQixZQUFZLDJCQUEyQixvQkFBb0IsVUFBVSxpQ0FBaUMsZ0lBQWdJLG9DQUFvQyxVQUFVLGtEQUFrRCwwQkFBMEIsVUFBVSxrREFBa0QsY0FBYyxlQUFlLGVBQWUsa0JBQWtCLHdCQUF3QixlQUFlLG1DQUFtQyxnQkFBZ0IsdUJBQXVCLGtCQUFrQixXQUFXLGFBQWEsV0FBVyxXQUFXLGtCQUFrQixnQkFBZ0IsOENBQThDLGlEQUFpRCxRQUFRLCtHQUErRyxrQkFBa0IsTUFBTSxTQUFTLE9BQU8sdUJBQXVCLGFBQWEsd0RBQXdELDJEQUEyRCx1REFBdUQsdURBQXVELHNCQUFzQixxRUFBcUUsVUFBVSxrQ0FBa0Msc0NBQXNDLGtDQUFrQyxtQkFBbUIsa0JBQWtCLE1BQU0sU0FBUyxPQUFPLDhDQUE4QyxhQUFhLEdBQUcsV0FBVyxVQUFVLElBQUksWUFBWSxVQUFVLEdBQUcsWUFBWSxXQUFXLGFBQWEsR0FBRyxXQUFXLFdBQVcsSUFBSSxVQUFVLFVBQVUsR0FBRyxVQUFVLFdBQVcsVUFBVSxXQUFXLHVCQUF1QiwyQkFBMkIsb0JBQW9CLGtCQUFrQiw4QkFBOEIsV0FBVyxZQUFZLGtCQUFrQixrQkFBa0IsaUNBQWlDLDhDQUE4QyxvQ0FBb0Msa0JBQWtCLFFBQVEsVUFBVSxXQUFXLFNBQVMsa0JBQWtCLFVBQVUsNkJBQTZCLDhDQUE4QyxjQUFjLG9DQUFvQyxrQkFBa0IsWUFBWSw2Q0FBNkMsVUFBVSxZQUFZLGFBQWEsV0FBVyxrQkFBa0Isc0JBQXNCLHdEQUF3RCxxQkFBcUIsc0JBQXNCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQiwwQkFBMEIsWUFBWSxpQkFBaUIsaUJBQWlCLCtDQUErQyxVQUFVLHlCQUF5Qiw4Q0FBOEMsV0FBVyxXQUFXLGdCQUFnQixZQUFZLGtCQUFrQixpQkFBaUIsYUFBYSxpQkFBaUIsZUFBZSxrQkFBa0IsUUFBUSxRQUFRLG1EQUFtRCwyQkFBMkIsbUJBQW1CLHFDQUFxQyxTQUFTLG9CQUFvQixVQUFVLDBDQUEwQyw0QkFBNEIsOENBQThDLHlCQUF5QiwwQ0FBMEMsdUNBQXVDLFVBQVUsOENBQThDLHlCQUF5QixxQkFBcUIsdUJBQXVCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsZUFBZSxrQkFBa0Isa0JBQWtCLFlBQVksZ0RBQWdELFdBQVcsWUFBWSxjQUFjLGtCQUFrQiw0QkFBNEIsbUJBQW1CLGVBQWUsZ0JBQWdCLFVBQVUsZUFBZSxpQkFBaUIsdUJBQXVCLG1CQUFtQix5QkFBeUIseUJBQXlCLHlCQUF5QixxQ0FBcUMsZ0JBQWdCLG1CQUFtQixXQUFXLGlCQUFpQiw2Q0FBNkMsaUJBQWlCLGtCQUFrQixzREFBc0QsaUJBQWlCLG9CQUFvQiwyQkFBMkIsNENBQTRDLFNBQVMsa0RBQWtELGtCQUFrQixlQUFlLHdDQUF3QyxPQUFPLGlDQUFpQyx5Q0FBeUMsUUFBUSxnQ0FBZ0MsbUZBQW1GLGVBQWUsZ0NBQWdDLFlBQVksa0JBQWtCLE1BQU0sU0FBUyxVQUFVLG9CQUFvQixjQUFjLGlDQUFpQyw4Q0FBOEMsOEJBQThCLHNCQUFzQix5QkFBeUIsa0JBQWtCLE1BQU0sUUFBUSxTQUFTLE9BQU8sVUFBVSxvQkFBb0IsaUNBQWlDLFVBQVUsNkNBQTZDLDRCQUE0QixvQkFBb0IsMENBQTBDLHlHQUF5RyxvQkFBb0IsNkJBQTZCLDJDQUEyQyxVQUFVLG9CQUFvQixhQUFhLG9CQUFvQixhQUFhLGVBQWUsUUFBUSxPQUFPLFdBQVcsb0JBQW9CLDhDQUE4Qyw2Q0FBNkMsMkVBQTJFLHFCQUFxQix1QkFBdUIseUVBQXlFLGtCQUFrQixrQkFBa0IseUJBQXlCLHVFQUF1RSxpQkFBaUIsb0JBQW9CLDJCQUEyQix5R0FBeUcsZ0JBQWdCLDJFQUEyRSxtQkFBbUIseUdBQXlHLE1BQU0sOEtBQThLLDhDQUE4QyxrSEFBa0gsU0FBUyx1TEFBdUwsNkNBQTZDLDhDQUE4Qyw2QkFBNkIsNENBQTRDLFVBQVUsc0RBQXNELGtDQUFrQyxvQkFBb0IsYUFBYSxzQkFBc0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsVUFBVSxrREFBa0Qsb0JBQW9CLHdCQUF3QixlQUFlLGtCQUFrQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixXQUFXLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isb0JBQW9CLGtCQUFrQix5QkFBeUIsOENBQThDLFdBQVcsZUFBZSxpREFBaUQsZ0NBQWdDLG1EQUFtRCxtQ0FBbUMsK0NBQStDLGdDQUFnQyx1REFBdUQsaUNBQWlDLHlEQUF5RCxvQ0FBb0MscURBQXFELGlDQUFpQyx5QkFBeUIsYUFBYSxtQkFBbUIsdUJBQXVCLFdBQVcsZUFBZSxnQkFBZ0IsaURBQWlELGdDQUFnQyxtREFBbUQsbUNBQW1DLCtDQUErQyxnQ0FBZ0MsdURBQXVELGlDQUFpQyx5REFBeUQsb0NBQW9DLHFEQUFxRCxpQ0FBaUMscUhBQXFILGdDQUFnQyw4SEFBOEgsa0NBQWtDLGVBQWUsb0JBQW9CLGFBQWEsa0NBQWtDLDhCQUE4QixzQkFBc0IsbUJBQW1CLDBFQUEwRSwwQ0FBMEMsaURBQWlELGVBQWUsNERBQTRELG1CQUFtQixrQ0FBa0MsdUJBQXVCLG1CQUFtQixxQkFBcUIsdUJBQXVCLDRFQUE0RSwyQ0FBMkMsbURBQW1ELGlCQUFpQiw4REFBOEQsaUJBQWlCLG1DQUFtQywwQkFBMEIsc0JBQXNCLDZFQUE2RSwyQ0FBMkMsb0RBQW9ELGtCQUFrQiwrREFBK0QsZ0JBQWdCLGlDQUFpQywrQkFBK0IsMkJBQTJCLHFCQUFxQix1QkFBdUIsMkVBQTJFLDBDQUEwQyxrREFBa0QsZ0JBQWdCLDZEQUE2RCxrQkFBa0IseURBQXlELG9CQUFvQixxREFBcUQsVUFBVSxvQkFBb0IsdUNBQXVDLGtFQUFrRSxzQkFBc0Isa0VBQWtFLHFCQUFxQixrRUFBa0Usc0JBQXNCLGtFQUFrRSxxQkFBcUIsa0VBQWtFLHNCQUFzQixrRUFBa0UscUJBQXFCLGtFQUFrRSxzQkFBc0Isa0VBQWtFLHFCQUFxQixtRUFBbUUsc0JBQXNCLG1FQUFtRSxxQkFBcUIsMERBQTBELG9CQUFvQixVQUFVLG1FQUFtRSxrQ0FBa0MsVUFBVSwwQkFBMEIsU0FBUyxnQ0FBZ0Msa0JBQWtCLFVBQVUsMkNBQTJDLGtCQUFrQixVQUFVLFVBQVUsb0JBQW9CLDhDQUE4Qyw2REFBNkQsc0JBQXNCLDZEQUE2RCxxQkFBcUIsNkRBQTZELHNCQUFzQiw2REFBNkQscUJBQXFCLDZEQUE2RCxzQkFBc0IsNkRBQTZELHFCQUFxQiw2REFBNkQsc0JBQXNCLDZEQUE2RCxxQkFBcUIsOERBQThELHNCQUFzQiw4REFBOEQscUJBQXFCLHVFQUF1RSw4Q0FBOEMsK0JBQStCLFVBQVUsbUNBQW1DLFlBQVkscUJBQXFCLGtCQUFrQixvQkFBb0IsOEJBQThCLDhDQUE4QyxpQ0FBaUMscUNBQXFDLDhDQUE4Qyx1QkFBdUIsd0NBQXdDLG9DQUFvQyxVQUFVLGtDQUFrQyw4Q0FBOEMsMkRBQTJELHVCQUF1Qiw0RUFBNEUsc0RBQXNELGlCQUFpQixXQUFXLFlBQVksWUFBWSxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsT0FBTyx1Q0FBdUMsK0JBQStCLDhCQUE4QixpQkFBaUIsVUFBVSxvQkFBb0IscUJBQXFCLDhDQUE4QyxhQUFhLEdBQUcsdUNBQXVDLGFBQWEsR0FBRyxVQUFVLHVDQUF1QyxJQUFJLFVBQVUsR0FBRyx3Q0FBd0MsYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsSUFBSSx3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLDBCQUEwQixjQUFjLGdCQUFnQixlQUFlLG9CQUFvQixhQUFhLHNCQUFzQixtQkFBbUIsdUJBQXVCLG1CQUFtQixzQkFBc0IsZUFBZSxnQkFBZ0IsV0FBVyxXQUFXLHVCQUF1QiwyQkFBMkIsb0JBQW9CLGtCQUFrQixnQ0FBZ0MsV0FBVyxZQUFZLGtCQUFrQixtQkFBbUIsOENBQThDLGlDQUFpQyxpREFBaUQsV0FBVyxZQUFZLGtCQUFrQixRQUFRLE9BQU8seUJBQXlCLGtCQUFrQiw2RkFBNkYsMkJBQTJCLHNDQUFzQyxrQkFBa0IsWUFBWSwrQ0FBK0MsVUFBVSxZQUFZLGFBQWEsV0FBVyxrQkFBa0Isc0JBQXNCLDBEQUEwRCxxQkFBcUIsc0JBQXNCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixrREFBa0QsV0FBVyxZQUFZLFNBQVMsVUFBVSxrQkFBa0IsUUFBUSxTQUFTLFVBQVUsZ0JBQWdCLFlBQVksK0JBQStCLHdEQUF3RCxhQUFhLDRCQUE0QixZQUFZLGlCQUFpQixpQkFBaUIsd0NBQXdDLHdCQUF3QixnQkFBZ0Isd0NBQXdDLGVBQWUsVUFBVSxvQkFBb0IsYUFBYSwwQkFBMEIsc0JBQXNCLGdCQUFnQixpTEFBaUwsMEJBQTBCLGdCQUFnQixXQUFXLGlCQUFpQix5QkFBeUIsZ0JBQWdCLDhCQUE4Qiw2QkFBNkIseURBQXlELHlCQUF5QixtREFBbUQsc0JBQXNCLHlCQUF5QixVQUFVLGtCQUFrQixzQkFBc0IsZUFBZSxpQkFBaUIsZ0JBQWdCLGlGQUFpRixtQkFBbUIsb0NBQW9DLGlCQUFpQixrQ0FBa0MsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLGVBQWUsc0JBQXNCLHlEQUF5RCxhQUFhLDhDQUE4QyxjQUFjLDZDQUE2QyxlQUFlLG1DQUFtQyxZQUFZLGVBQWUsOENBQThDLDhCQUE4QixZQUFZLG1CQUFtQixrQkFBa0IscUJBQXFCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixtQkFBbUIsdUJBQXVCLGVBQWUsdURBQXVELFVBQVUsV0FBVyw4REFBOEQsc0JBQXNCLGtHQUFrRyxVQUFVLG1EQUFtRCxzQkFBc0IsOERBQThELDBDQUEwQyx5Q0FBeUMsa0JBQWtCLFFBQVEsU0FBUyw4Q0FBOEMsMkJBQTJCLFVBQVUsc0JBQXNCLHNDQUFzQyxzQkFBc0IseUJBQXlCLFlBQVksa0JBQWtCLDhDQUE4QyxzQkFBc0IsZUFBZSxpQkFBaUIsNkRBQTZELG1CQUFtQixvQ0FBb0MsaUJBQWlCLDZEQUE2RCxrQkFBa0IseUJBQXlCLGdFQUFnRSxvQkFBb0IsYUFBYSxzQkFBc0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsa0RBQWtELDBCQUEwQixvQ0FBb0MsV0FBVyxlQUFlLFlBQVksZ0JBQWdCLCtDQUErQyxtQkFBbUIsNkNBQTZDLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixTQUFTLHNCQUFzQixlQUFlLDhCQUE4QixXQUFXLGtCQUFrQixzQkFBc0IsZ0tBQWdLLGlCQUFpQix1REFBdUQsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsU0FBUyxxREFBcUQsV0FBVyxZQUFZLGVBQWUsMkRBQTJELFNBQVMsU0FBUyxxQkFBcUIsZUFBZSxnREFBZ0QsZUFBZSx1QkFBdUIscUJBQXFCLGVBQWUsc0JBQXNCLGlDQUFpQyxzQkFBc0IsaUJBQWlCLGFBQWEsU0FBUyxtQkFBbUIsa0JBQWtCLE1BQU0sUUFBUSxVQUFVLFVBQVUsZ0JBQWdCLG9CQUFvQixrQkFBa0IsNkZBQTZGLHNCQUFzQixVQUFVLGdFQUFnRSx3QkFBd0IsZ0NBQWdDLDJCQUEyQixpQkFBaUIsb0JBQW9CLDRCQUE0QixVQUFVLDhDQUE4Qyx3QkFBd0IsMEJBQTBCLHNCQUFzQixxQ0FBcUMsYUFBYSxtQkFBbUIsZ0VBQWdFLGVBQWUsMkZBQTJGLGVBQWUsa0NBQWtDLGlCQUFpQixzQkFBc0IsNEJBQTRCLGVBQWUsZUFBZSxpQkFBaUIsMkJBQTJCLGtCQUFrQixzQkFBc0IseUJBQXlCLFdBQVcsT0FBTyxlQUFlLG9DQUFvQyxZQUFZLG9CQUFvQixhQUFhLFdBQVcsT0FBTyxzQkFBc0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsNkJBQTZCLHNCQUFzQixlQUFlLGtFQUFrRSxpQkFBaUIsaUJBQWlCLCtDQUErQyxXQUFXLGVBQWUsY0FBYyxxREFBcUQsYUFBYSxnRUFBZ0UsVUFBVSxZQUFZLGVBQWUsK0RBQStELHNCQUFzQixrRUFBa0Usc0JBQXNCLGdEQUFnRCxpQkFBaUIsMkNBQTJDLGVBQWUsMkJBQTJCLGtCQUFrQixNQUFNLFFBQVEsT0FBTyxVQUFVLG9CQUFvQixVQUFVLDhDQUE4Qyx3QkFBd0IscUNBQXFDLG9CQUFvQixVQUFVLDRCQUE0Qix1Q0FBdUMsZ0JBQWdCLFdBQVcsT0FBTyxTQUFTLFdBQVcsb0JBQW9CLGFBQWEscUJBQXFCLGlCQUFpQixrQkFBa0IsNkJBQTZCLDBCQUEwQiw0Q0FBNEMsaURBQWlELDZCQUE2QixZQUFZLGdCQUFnQixrQkFBa0IsVUFBVSxvQkFBb0IsYUFBYSw4Q0FBOEMsc0RBQXNELGdCQUFnQiwrREFBK0QsbUJBQW1CLHlDQUF5QyxxQkFBcUIsdUJBQXVCLHFEQUFxRCxXQUFXLE9BQU8sc0NBQXNDLGtCQUFrQix5QkFBeUIsd0JBQXdCLGVBQWUsZ0JBQWdCLFNBQVMsZUFBZSxxQkFBcUIsa0JBQWtCLGVBQWUsU0FBUyxnQkFBZ0IsOENBQThDLG9CQUFvQixlQUFlLGdCQUFnQix5QkFBeUIsb0NBQW9DLGVBQWUsb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQix1QkFBdUIsa0NBQWtDLG9CQUFvQixhQUFhLHFCQUFxQixpQkFBaUIscUJBQXFCLHVCQUF1QixzQkFBc0IsbUJBQW1CLDJDQUEyQyxTQUFTLDJCQUEyQixXQUFXLGtCQUFrQixTQUFTLE9BQU8sNkJBQTZCLDZDQUE2QywwQkFBMEIsdUNBQXVDLHNIQUFzSCxzQ0FBc0Msc0hBQXNILDBCQUEwQixXQUFXLFNBQVMsa0JBQWtCLGdCQUFnQiwwQkFBMEIsYUFBYSxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsT0FBTyx3QkFBd0Isb0RBQW9ELGlCQUFpQixhQUFhLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxZQUFZLGdCQUFnQixjQUFjLG9CQUFvQixhQUFhLHNCQUFzQixtQkFBbUIsMEJBQTBCLHFCQUFxQix1QkFBdUIsbUJBQW1CLGtCQUFrQiw4Q0FBOEMsNkJBQTZCLHFCQUFxQixnQkFBZ0IsK0JBQStCLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLDJDQUEyQyxZQUFZLHNCQUFzQixnQkFBZ0IsK0VBQStFLGlCQUFpQixxQkFBcUIsaUJBQWlCLDJCQUEyQixzQkFBc0IsOEVBQThFLGlCQUFpQiw4QkFBOEIsaUJBQWlCLDZDQUE2QyxXQUFXLDRFQUE0RSxxQ0FBcUMsOENBQThDLGtCQUFrQixzRUFBc0UscUJBQXFCLHVCQUF1QixvRUFBb0UsaUJBQWlCLGtDQUFrQyxXQUFXLFlBQVksb0JBQW9CLGFBQWEsc0JBQXNCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLHlEQUF5RCxjQUFjLGtCQUFrQix3REFBd0QsY0FBYyxtQ0FBbUMsY0FBYyxrQkFBa0Isa0NBQWtDLGNBQWMsK0ZBQStGLG9DQUFvQyxzQkFBc0IsU0FBUyxlQUFlLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLDBDQUEwQyxpQkFBaUIscUJBQXFCLFVBQVUsY0FBYyxXQUFXLE9BQU8sWUFBWSxZQUFZLGNBQWMsZUFBZSxXQUFXLG9CQUFvQixvQ0FBb0Msa0JBQWtCLFVBQVUsNEJBQTRCLDhDQUE4Qyx3QkFBd0Isb0JBQW9CLFdBQVcsNkNBQTZDLGVBQWUsaUJBQWlCLG9CQUFvQixtQkFBbUIsc0JBQXNCLFVBQVUsOENBQThDLHdCQUF3Qiw0QkFBNEIsOEJBQThCLDhCQUE4QiwwQkFBMEIsMkJBQTJCLGlCQUFpQiw4QkFBOEIscUNBQXFDLDBCQUEwQiw2QkFBNkIsaUJBQWlCLDhCQUE4Qix1Q0FBdUMsMEJBQTBCLDhCQUE4QixnQkFBZ0IsK0JBQStCLHdDQUF3QywwQkFBMEIsNEJBQTRCLGtCQUFrQiw2QkFBNkIsc0NBQXNDLDBCQUEwQixlQUFlLGtCQUFrQixVQUFVLG1CQUFtQiw2RkFBNkYsbUJBQW1CLDZGQUE2RixtQkFBbUIsNkZBQTZGLG1CQUFtQiw4RkFBOEYsbUJBQW1CLDhGQUE4RixtQkFBbUIsK0ZBQStGLG1CQUFtQix1R0FBdUcsbUJBQW1CLHVHQUF1RyxtQkFBbUIsdUdBQXVHLG9CQUFvQix3R0FBd0csb0JBQW9CLHdHQUF3RyxvQkFBb0Isd0dBQXdHLG9CQUFvQix3R0FBd0csb0JBQW9CLHdHQUF3RyxvQkFBb0Isd0dBQXdHLG9CQUFvQix5R0FBeUcsb0JBQW9CLHlHQUF5RyxvQkFBb0IseUdBQXlHLG9CQUFvQix5R0FBeUcsb0JBQW9CLDBHQUEwRyxvQkFBb0IsMEdBQTBHLG9CQUFvQiwwR0FBMEcsb0JBQW9CLDBHQUEwRyxvQkFBb0IsMEdBQTBHOztBQUVycThGOzs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBa0Msd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxZQUFZLG1CQUFtQixzQkFBc0IsR0FBRyxVQUFVLHdCQUF3QixHQUFHLFNBQVMscUJBQXFCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxVQUFVLHNCQUFzQixHQUFHLFVBQVUsZ0ZBQWdGLE1BQU0sV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLG9qQ0FBb2pDLGdCQUFnQixrQkFBa0IsZ0JBQWdCLHlEQUF5RCxzQkFBc0IsZ0VBQWdFLHVCQUF1QixtSkFBbUosc0JBQXNCLDBNQUEwTSxXQUFXLFNBQVMsb0JBQW9CLGlDQUFpQywyRUFBMkUsU0FBUyxpQkFBaUIsNENBQTRDLCtHQUErRyxTQUFTLHNCQUFzQiwwQkFBMEIsbUJBQW1CLGdEQUFnRCxrSUFBa0ksNkRBQTZELG9TQUFvUywwREFBMEQsZ0xBQWdMLDZDQUE2QyxpQ0FBaUMsaUVBQWlFLHVGQUF1Riw4Q0FBOEMsb0dBQW9HLGtFQUFrRSx3RUFBd0UsOENBQThDLHNIQUFzSCw2REFBNkQseUhBQXlILDhDQUE4QyxvQkFBb0IsdUJBQXVCLGlEQUFpRCxhQUFhLFdBQVcsU0FBUywrQkFBK0IsdUVBQXVFLGtEQUFrRCxTQUFTLE9BQU8sb0NBQW9DLDRCQUE0QixPQUFPLHdCQUF3QixzQkFBc0IsT0FBTyxzQkFBc0IsdUJBQXVCLDBCQUEwQixPQUFPLG9CQUFvQiw0QkFBNEIsT0FBTyxtQkFBbUIseUJBQXlCLE9BQU8scUJBQXFCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsT0FBTyx5Q0FBeUM7O0FBRWo2Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQTs7Ozs7Ozt5QkFFQTs7O2NBR0E7ZUFFQTtBQUhBOztnQkFLQTtrQkFFQTtBQUhBOztnQkFLQTtrQkFDQTthQUNBO2lCQUNBO21CQUVBO0FBTkE7O2dCQVFBO2FBQ0E7aUJBQ0E7c0JBRUE7O2VBQ0E7bUJBR0E7QUFUQTtBQWhCQTtBQTBCQTs7O21DQUVBOytCQUNBO2NBQ0E7QUFFQTtBQUxBOzs4Q0FRQTsrREFDQTtBQUVBO0FBTEE7O0FBUUE7QUFGQTs7bURBSUE7NkJBQ0E7MkJBQ0E7OEJBQ0E7QUFDQTtpRUFDQTtnQkFDQTtnQkFDQTt5QkFDQTs2QkFDQTs4QkFDQTs0QkFDQTsrQkFDQTtnQ0FDQTtBQUNBOzZEQUNBOzJCQUNBO2lDQUNBOzhCQUNBOytCQUNBO0FBQ0E7bURBQ0E7MkJBQ0E7MENBQ0E7QUFFQTs7MEJBQ0E7OEJBQ0E7QUFDQTtxREFDQTt1Q0FDQTsrQkFDQTtBQUVBOztrREFDQTtvQkFDQTtxQ0FDQTt3QkFDQTtBQUNBO3FFQUNBO2dCQUNBO1VBQ0E7a0JBQ0E7V0FDQTtnRUFDQTs2Q0FDQTtBQUNBOzJEQUNBOzs7MEJBS0E7QUFIQTtBQURBO0FBTUE7QUF2REE7K0JBd0RBO3VDQUNBO2lCQUNBOzJCQUNBO0FBQ0E7QUFDQTtBQXpHQSxHOzs7Ozs7QUN2QkEsa0U7Ozs7Ozs7QUNDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQzs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOERBQTZELFlBQVksR0FBRyxzQ0FBc0Msc0JBQXNCLEdBQUcsVUFBVSwrRkFBK0YsTUFBTSxVQUFVLEtBQUssS0FBSyxXQUFXLHFTQUFxUyxXQUFXLGlQQUFpUCxnQkFBZ0Isb2pDQUFvakMsV0FBVyxzeURBQXN5RCxnQkFBZ0Isa0JBQWtCLGdEQUFnRCxTQUFTLG1CQUFtQixvQ0FBb0MsaUZBQWlGLDJDQUEyQyxzREFBc0Qsc0NBQXNDLHFEQUFxRCxnQ0FBZ0MsOEVBQThFLG1DQUFtQywyQ0FBMkMsU0FBUyxvQkFBb0IsOEhBQThILHVFQUF1RSxVQUFVLE9BQU8sOEhBQThILGdCQUFnQixPQUFPLCtCQUErQiwwQkFBMEIsT0FBTyx5Q0FBeUM7O0FBRTN2Sjs7Ozs7Ozs7Ozs7OztBQytFQTs7Ozs7Ozt5QkFFQTs7Z0JBR0E7QUFGQTtBQUdBOzs7eUNBRUE7bUJBQ0E7QUFDQTtxREFDQTs4QkFDQTtBQUNBOzJDQUNBOzhCQUNBO0FBQ0E7K0JBQ0E7MEJBQ0E7eUJBQ0E7QUFDQTtvQ0FDQTt5QkFDQTtBQUVBO0FBakJBOytCQW9CQTt1REFFQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQSxHOzs7Ozs7QUN2RkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUN4SUEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5N2VkYjM4MDE0M2M1N2U3MWVjMyIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5cbi8vIFJvdXRlc1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuLy8gU3R5bGVzL2ZvbnRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzJ1xuXG4vLyBtYXRlcmlhbFxuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gJ3Z1ZS1tYXRlcmlhbCdcbmltcG9ydCAndnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcydcblxuLy8gcGx1Z2luc1xuVnVlLnVzZShWdWVSb3V0ZXIpXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxuXG4vLyByb3V0ZXIgY29uZmlnXG5cbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgcm91dGVzXG59KVxuXG5yb3V0ZXIuYWZ0ZXJFYWNoKChjdXJyZW50Um91dGUpID0+IHtcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXG5cbiAgaWYgKG1haW5Db250ZW50KSB7XG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxuICB9XG59KVxuXG5WdWUubWF0ZXJpYWwucmVnaXN0ZXJUaGVtZSh7XG4gIGFwcHRoZW1lOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdjeWFuJyxcbiAgICAgIGh1ZTogNzAwXG4gICAgfSxcbiAgICBhY2NlbnQ6IHtcbiAgICAgIGNvbG9yOiAnbGlnaHQtYmx1ZScsXG4gICAgICBodWU6IDYwMFxuICAgIH1cbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnNldEN1cnJlbnRUaGVtZSgnYXBwdGhlbWUnKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlclxufSlcblxuLy8gLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4vLyBuZXcgVnVlKHtcbi8vICAgZWw6ICcjYXBwJyxcbi8vICAgdGVtcGxhdGU6ICc8QXBwIC8+Jyxcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxuLy8gfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9sYXlvdXRzL25vdEZvdW5kJ1xyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2xheW91dHMvbGFuZGluZydcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vbGF5b3V0cy9hYm91dCdcclxuaW1wb3J0IERvd25sb2FkIGZyb20gJy4vbGF5b3V0cy9kb3dubG9hZCdcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9sYXlvdXRzL2Rhc2hib2FyZCdcclxuaW1wb3J0IE15RmlsZXMgZnJvbSAnLi9sYXlvdXRzL215ZmlsZXMnXHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vbGF5b3V0cy9wcm9maWxlJ1xyXG5cclxuY29uc3QgbWFpbiA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBuYW1lOiAnbGFuZGluZycsXHJcbiAgICBjb21wb25lbnQ6IExhbmRpbmdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICByZWRpcmVjdDogJy8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIG5hbWU6ICdBYm91dCcsXHJcbiAgICBjb21wb25lbnQ6IEFib3V0XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3UnLFxyXG4gICAgbmFtZTogJ2Rhc2hib2FyZCcsXHJcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9maWxlcy86ZGlyKicsXHJcbiAgICBuYW1lOiAnbXkgZmlsZXMgbmF2aWdhdGlvbicsXHJcbiAgICBjb21wb25lbnQ6IE15RmlsZXMsXHJcbiAgICBwcm9wczogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9maWxlcycsXHJcbiAgICBuYW1lOiAnbXkgZmlsZXMnLFxyXG4gICAgY29tcG9uZW50OiBNeUZpbGVzXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3AnLFxyXG4gICAgbmFtZTogJ3Byb2ZpbGUnLFxyXG4gICAgY29tcG9uZW50OiBQcm9maWxlXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2QvOmlkLzpwYXNzJyxcclxuICAgIG5hbWU6ICdkb3dubG9hZCAod2l0aCBwYXNzKScsXHJcbiAgICBjb21wb25lbnQ6IERvd25sb2FkXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2QvOmlkJyxcclxuICAgIG5hbWU6ICdkb3dubG9hZCcsXHJcbiAgICBjb21wb25lbnQ6IERvd25sb2FkXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCBlcnJvciA9IFt7XHJcbiAgcGF0aDogJyonLFxyXG4gIG5hbWU6ICdlcnJvcicsXHJcbiAgY29tcG9uZW50OiBOb3RGb3VuZFxyXG59XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW10uY29uY2F0KG1haW4sIGVycm9yKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLmpzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTViODliOGVlJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTViODliOGVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi01Yjg5YjhlZVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxub3RGb3VuZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBub3RGb3VuZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTViODliOGVlJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIyYzMxYjNlMFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTViODliOGVlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5vdC1mb3VuZC1jb250ZW50W2RhdGEtdi01Yjg5YjhlZV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZT8yNzgxMWViZlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0JBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJub3RGb3VuZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwibm90LWZvdW5kXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlkPVxcXCJpbnRyby1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJub3QtZm91bmQtY29udGVudFxcXCI+XFxuICAgICAgICA8aDE+NDA0LiBUaGF0J3MgYW4gZXJyb3IuPC9oMT5cXG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgSW50cm9cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5ub3QtZm91bmQtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWI4OWI4ZWUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgaXNQcm9kdWN0aW9uKSB7XG4gIGlmICh0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICB2YXIgc3R5bGVzID0gY29udGV4dC5fc3R5bGVzXG5cbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgc3R5bGVzID0gY29udGV4dC5fc3R5bGVzID0ge31cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb250ZXh0LCAnc3R5bGVzJywge1xuICAgICAgICBlbnVtYmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY29udGV4dC5fcmVuZGVyZWRTdHlsZXMgfHxcbiAgICAgICAgICAgIChjb250ZXh0Ll9yZW5kZXJlZFN0eWxlcyA9IHJlbmRlclN0eWxlcyhzdHlsZXMpKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsaXN0ID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIGFkZFN0eWxlUHJvZChzdHlsZXMsIGxpc3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN0eWxlRGV2KHN0eWxlcywgbGlzdClcbiAgICB9XG4gIH1cbn1cblxuLy8gSW4gcHJvZHVjdGlvbiwgcmVuZGVyIGFzIGZldyBzdHlsZSB0YWdzIGFzIHBvc3NpYmxlLlxuLy8gKG1vc3RseSBiZWNhdXNlIElFOSBoYXMgYSBsaW1pdCBvbiBudW1iZXIgb2Ygc3R5bGUgdGFncylcbmZ1bmN0aW9uIGFkZFN0eWxlUHJvZCAoc3R5bGVzLCBsaXN0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0cyA9IGxpc3RbaV0ucGFydHNcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgcGFydCA9IHBhcnRzW2pdXG4gICAgICAvLyBncm91cCBzdHlsZSB0YWdzIGJ5IG1lZGlhIHR5cGVzLlxuICAgICAgdmFyIGlkID0gcGFydC5tZWRpYSB8fCAnZGVmYXVsdCdcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tpZF1cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBzdHlsZS5pZHMucHVzaChwYXJ0LmlkKVxuICAgICAgICBzdHlsZS5jc3MgKz0gJ1xcbicgKyBwYXJ0LmNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVzW2lkXSA9IHtcbiAgICAgICAgICBpZHM6IFtwYXJ0LmlkXSxcbiAgICAgICAgICBjc3M6IHBhcnQuY3NzLFxuICAgICAgICAgIG1lZGlhOiBwYXJ0Lm1lZGlhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSW4gZGV2IHdlIHVzZSBpbmRpdmlkdWFsIHN0eWxlIHRhZyBmb3IgZWFjaCBtb2R1bGUgZm9yIGhvdC1yZWxvYWRcbi8vIGFuZCBzb3VyY2UgbWFwcy5cbmZ1bmN0aW9uIGFkZFN0eWxlRGV2IChzdHlsZXMsIGxpc3QpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnRzID0gbGlzdFtpXS5wYXJ0c1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gcGFydHNbal1cbiAgICAgIHN0eWxlc1twYXJ0LmlkXSA9IHtcbiAgICAgICAgaWRzOiBbcGFydC5pZF0sXG4gICAgICAgIGNzczogcGFydC5jc3MsXG4gICAgICAgIG1lZGlhOiBwYXJ0Lm1lZGlhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcyAoc3R5bGVzKSB7XG4gIHZhciBjc3MgPSAnJ1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gc3R5bGVzW2tleV1cbiAgICBjc3MgKz0gYDxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9XCIke1xuICAgICAgc3R5bGUuaWRzLmpvaW4oJyAnKVxuICAgIH1cIiR7XG4gICAgICBzdHlsZS5tZWRpYSA/IGAgbWVkaWE9XCIke3N0eWxlLm1lZGlhfVwiYCA6ICcnXG4gICAgfT4ke3N0eWxlLmNzc308L3N0eWxlPmBcbiAgfVxuICByZXR1cm4gY3NzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJub3QtZm91bmRcIj5cbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImludHJvLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90LWZvdW5kLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxPjQwNC4gVGhhdCdzIGFuIGVycm9yLjwvaDE+XG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSW50cm9cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5ub3QtZm91bmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vdEZvdW5kLnZ1ZT8yNzgxMWViZiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01ODExMmY0ZCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnRyby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01ODExMmY0ZCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnRyby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNTgxMTJmNGRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcaW50cm8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW50cm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTgxMTJmNGQmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjMyNWEwMDI2XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTgxMTJmNGQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmludHJvW2RhdGEtdi01ODExMmY0ZF0ge1xcbiAgbWFyZ2luLXRvcDogOCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hcHAtdGl0bGVbZGF0YS12LTU4MTEyZjRkXSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZT8wNTIxMmM4YVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUJBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbnRyby52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiaW50cm9cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxoMSBjbGFzcz1cXFwiYXBwLXRpdGxlXFxcIj57eyB2aWV3VGl0bGUgfHwgYXBwVGl0bGUgfX08L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgcHJvcHM6IFsndmlld1RpdGxlJ10sXFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIGFwcFRpdGxlOiAnUGVuZ3VpblVwbG9hZCcsXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPCEtLSBBZGQgXFxcInNjb3BlZFxcXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuaW50cm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA4JTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYXBwLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ODExMmY0ZCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnRyb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj57eyB2aWV3VGl0bGUgfHwgYXBwVGl0bGUgfX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3ZpZXdUaXRsZSddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBUaXRsZTogJ1Blbmd1aW5VcGxvYWQnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5pbnRybyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGludHJvLnZ1ZT8wNTIxMmM4YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludHJvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhcHAtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmlld1RpdGxlIHx8IF92bS5hcHBUaXRsZSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU4MTEyZjRkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Yjg5YjhlZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNWRhOGVlMjYmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVkYThlZTI2IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTVkYThlZTI2XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGxhbmRpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVkYThlZTI2JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjMxZmE3MGI4XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWRhOGVlMjYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtNWRhOGVlMjZdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNCU7XFxufVxcbi5pbnRyby1hcmVhW2RhdGEtdi01ZGE4ZWUyNl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT8xOTQ1MDM5ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkNBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibGFuZGluZy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxyXFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgaW50cm8tYXJlYVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0d2VsdmUgY29sdW1uc1xcXCI+XFxyXFxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVxcXCI+XFxyXFxuICAgICAgICAgIDxsb2dpbj48L2xvZ2luPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcclxcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xcclxcbiAgaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICBJbnRybyxcXHJcXG4gICAgICBMb2dpbixcXHJcXG4gICAgICBkZXZDcmVkaXRzXFxyXFxuICAgIH0sXFxyXFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcXHJcXG4gICAgICBuZXh0KHZtID0+IHtcXHJcXG4gICAgICAgIGlmICh2bS4kcm9vdC5sb2dnZWRJbikge1xcclxcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy91JylcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5zaHJpbmstbGF5b3V0IHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmludHJvLWFyZWEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWRhOGVlMjYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBpbnRyby1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XHJcbiAgICAgICAgICA8bG9naW4+PC9sb2dpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xyXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcclxuICBpbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIExvZ2luLFxyXG4gICAgICBkZXZDcmVkaXRzXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xyXG4gICAgICBuZXh0KHZtID0+IHtcclxuICAgICAgICBpZiAodm0uJHJvb3QubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnL3UnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuc2hyaW5rLWxheW91dCB7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gIH1cclxuXHJcbiAgLmludHJvLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsYW5kaW5nLnZ1ZT8xOTQ1MDM5ZSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi04M2I4NGY5OCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtODNiODRmOTghLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtODNiODRmOThcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcZGV2Q3JlZGl0cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkZXZDcmVkaXRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODNiODRmOTgmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiYTc1NzA5ZDBcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04M2I4NGY5OCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXYtY3JlZGl0c1tkYXRhLXYtODNiODRmOThdIHtcXG4gIG1hcmdpbjogMiU7XFxufVxcbmg2LmNyZWRpdC10ZXh0W2RhdGEtdi04M2I4NGY5OF0ge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzY1NDZmNjdiXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnQkE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRldkNyZWRpdHMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImRldi1jcmVkaXRzXFxcIj5cXG4gICAgPGg2IGNsYXNzPVxcXCJjcmVkaXQtdGV4dFxcXCI+TWFkZSBieSA8YSBocmVmPVxcXCJodHRwczovLzB4ZmlyZWJhbGwubWVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj4weEZpcmViYWxsPC9hPiBvZiA8YSBocmVmPVxcXCJodHRwczovL2lyaWRpdW1pb24ueHl6XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLmRldi1jcmVkaXRzIHtcXG4gICAgbWFyZ2luOiAyJTtcXG4gIH1cXG4gIFxcbiAgaDYuY3JlZGl0LXRleHQge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04M2I4NGY5OCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXYtY3JlZGl0c1wiPlxuICAgIDxoNiBjbGFzcz1cImNyZWRpdC10ZXh0XCI+TWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MHhGaXJlYmFsbDwvYT4gb2YgPGEgaHJlZj1cImh0dHBzOi8vaXJpZGl1bWlvbi54eXpcIiB0YXJnZXQ9XCJfYmxhbmtcIj5JcmlkaXVtSW9uIFNvZnR3YXJlPC9hPjwvaDY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRldi1jcmVkaXRzIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIFxuICBoNi5jcmVkaXQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2Q3JlZGl0cy52dWU/NjU0NmY2N2IiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXYtY3JlZGl0c1wiXG4gIH0sIFtfYygnaDYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3JlZGl0LXRleHRcIlxuICB9LCBbX3ZtLl92KFwiTWFkZSBieSBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovLzB4ZmlyZWJhbGwubWVcIixcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIweEZpcmViYWxsXCIpXSksIF92bS5fdihcIiBvZiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSXJpZGl1bUlvbiBTb2Z0d2FyZVwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTgzYjg0Zjk4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTg0YjYxYzZjJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTg0YjYxYzZjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi04NGI2MWM2Y1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxsb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04NGI2MWM2YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMWQ0ZTU4MjFcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04NGI2MWM2YyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW52aXNpYmxlW2RhdGEtdi04NGI2MWM2Y10ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmVycm9yLW1lc3NhZ2VbZGF0YS12LTg0YjYxYzZjXSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlPzgwNjZlODVjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyS0E7RUFDQSxjQUFBO0NBQ0E7QUFDQTtFQUNBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luXFxcIj5cXHJcXG4gICAgPG1kLXRhYnMgY2xhc3M9XFxcIm1kLWFjY2VudFxcXCIgcmVmPVxcXCJhdXRoT3B0aW9uVGFic1xcXCI+XFxyXFxuICAgICAgPG1kLXRhYiBpZD1cXFwidC1sb2dpblxcXCIgbWQtbGFiZWw9XFxcIkxvZyBJblxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJ0cnlMb2dpblxcXCI+XFxyXFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cXFwibG9naW4udXNlcm5hbWVcXFwiPjwvbWQtaW5wdXQ+XFxyXFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cXHJcXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwibG9naW4ucGFzc3dvcmRcXFwiPjwvbWQtaW5wdXQ+XFxyXFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCI+e3sgbG9naW4uZXJyIH19PC9wPlxcclxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiaW52aXNpYmxlXFxcIj48L2lucHV0PlxcclxcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidHJ5TG9naW5cXFwiIDpkaXNhYmxlZD1cXFwiIWxvZ2luLmVcXFwiPkxvZyBJbjwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgIDwvbWQtdGFiPlxcclxcblxcclxcbiAgICAgIDxtZC10YWIgaWQ9XFxcInQtc2lnbnVwXFxcIiBtZC1sYWJlbD1cXFwiU2lnbiBVcFxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJ0cnlSZWdpc3RlclxcXCI+XFxyXFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cXFwicmVnaXN0ZXIudXNlcm5hbWVcXFwiPjwvbWQtaW5wdXQ+XFxyXFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cXHJcXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwicmVnaXN0ZXIucGFzc3dvcmRcXFwiPjwvbWQtaW5wdXQ+XFxyXFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcInJlZ2lzdGVyLmNvbmZpcm1cXFwiPjwvbWQtaW5wdXQ+XFxyXFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgIDxsYWJlbD5JbnZpdGUgS2V5IChvcHRpb25hbCk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwicmVnaXN0ZXIuaW52aXRlS2V5XFxcIj48L21kLWlucHV0PlxcclxcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XFxcInJlZ2lzdGVyLmlhY2NlcHRcXFwiPkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uczwvbWQtY2hlY2tib3g+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XFxyXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJpbnZpc2libGVcXFwiPjwvaW5wdXQ+XFxyXFxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XFxcIiBAY2xpY2submF0aXZlPVxcXCJ0cnlSZWdpc3RlclxcXCIgOmRpc2FibGVkPVxcXCIhcmVnaXN0ZXIuZVxcXCI+U2lnbiBVcDwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgIDwvbWQtdGFiPlxcclxcbiAgICA8L21kLXRhYnM+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFxyXFxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxyXFxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xcclxcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xcclxcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG5hbWU6ICdsb2dpbicsXFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIGxvZ2luOiB7XFxyXFxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcXHJcXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxcclxcbiAgICAgICAgICBlcnI6ICcnLFxcclxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICByZWdpc3Rlcjoge1xcclxcbiAgICAgICAgICB1c2VybmFtZTogJycsXFxyXFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcXHJcXG4gICAgICAgICAgY29uZmlybTogJycsXFxyXFxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxcclxcbiAgICAgICAgICBpbnZpdGVLZXk6ICcnLFxcclxcbiAgICAgICAgICBlcnI6ICcnLFxcclxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICB0cnlMb2dpbjogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgLy8gbm90aGluZ1xcclxcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcclxcbiAgICAgICAgaWYgKCF2bS5sb2dpbi5lKSByZXR1cm5cXHJcXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XFxyXFxuICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdjcmVkZW50aWFscyBjYW5ub3QgYmUgZW1wdHknXFxyXFxuICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgdm0ubG9naW4uZSA9IGZhbHNlXFxyXFxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXFxyXFxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xcclxcbiAgICAgICAgLy8gc2VuZCBsb2dpbiBwb3N0XFxyXFxuICAgICAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XFxyXFxuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcXHJcXG4gICAgICAgICAgcGFzc3dvcmQ6IHZtLmxvZ2luLnBhc3N3b3JkXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXFxyXFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcXHJcXG4gICAgICAgICAgICAgIC8vIHZtLiRyb290LmxvZ2dlZEluID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgLy8gcHVzaCB1c2VyIGluZm9cXHJcXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcXHJcXG4gICAgICAgICAgICAgIHZtLiRyb290LnUubmFtZSA9IHJlc3BvbnNlLmRhdGEudXNlci51c2VybmFtZVxcclxcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codm0uJHJvb3QudS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXFxyXFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XFxyXFxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWRcXHJcXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcXHJcXG4gICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xcclxcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJvclxcclxcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xcclxcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMnXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXFxyXFxuICAgICAgICAgIH0pXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcclxcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5lKSByZXR1cm5cXHJcXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxcclxcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcXHJcXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3VzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXFxyXFxuICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcXHJcXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXFxyXFxuICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XFxyXFxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd5b3UgbXVzdCBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zJ1xcclxcbiAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZCAhPT0gdm0ucmVnaXN0ZXIuY29uZmlybSkge1xcclxcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xcclxcbiAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHZtLnJlZ2lzdGVyLmUgPSBmYWxzZVxcclxcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxcclxcbiAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJydcXHJcXG4gICAgICAgIC8vIHNlbmQgcmVnaXN0ZXIgcG9zdFxcclxcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xcclxcbiAgICAgICAgICB1c2VybmFtZTogdm0ucmVnaXN0ZXIudXNlcm5hbWUsXFxyXFxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5yZWdpc3Rlci5wYXNzd29yZCxcXHJcXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcXHJcXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcXHJcXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxcclxcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIHN1Y2NlZWRlZFxcclxcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxcclxcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5hdXRoT3B0aW9uVGFicy5jaGFuZ2VUYWIoJ3QtbG9naW4nKVxcclxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcXHJcXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXFxyXFxuICAgICAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSByZXNwb25zZS5kYXRhXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXFxyXFxuICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXHJcXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxcclxcbiAgICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjwhLS0gQWRkIFxcXCJzY29wZWRcXFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTg0YjYxYzZjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImxvZ2luXCI+XHJcbiAgICA8bWQtdGFicyBjbGFzcz1cIm1kLWFjY2VudFwiIHJlZj1cImF1dGhPcHRpb25UYWJzXCI+XHJcbiAgICAgIDxtZC10YWIgaWQ9XCJ0LWxvZ2luXCIgbWQtbGFiZWw9XCJMb2cgSW5cIj5cclxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5TG9naW5cIj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwibG9naW4udXNlcm5hbWVcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJsb2dpbi5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IGxvZ2luLmVyciB9fTwvcD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrLm5hdGl2ZT1cInRyeUxvZ2luXCIgOmRpc2FibGVkPVwiIWxvZ2luLmVcIj5Mb2cgSW48L21kLWJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvbWQtdGFiPlxyXG5cclxuICAgICAgPG1kLXRhYiBpZD1cInQtc2lnbnVwXCIgbWQtbGFiZWw9XCJTaWduIFVwXCI+XHJcbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeVJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cInJlZ2lzdGVyLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIucGFzc3dvcmRcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIuY29uZmlybVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5JbnZpdGUgS2V5IChvcHRpb25hbCk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmludml0ZUtleVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1jaGVja2JveCB2LW1vZGVsPVwicmVnaXN0ZXIuaWFjY2VwdFwiPkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uczwvbWQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljay5uYXRpdmU9XCJ0cnlSZWdpc3RlclwiIDpkaXNhYmxlZD1cIiFyZWdpc3Rlci5lXCI+U2lnbiBVcDwvbWQtYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9tZC10YWI+XHJcbiAgICA8L21kLXRhYnM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbjoge1xyXG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgZXJyOiAnJyxcclxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVnaXN0ZXI6IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGNvbmZpcm06ICcnLFxyXG4gICAgICAgICAgaWFjY2VwdDogJycsXHJcbiAgICAgICAgICBpbnZpdGVLZXk6ICcnLFxyXG4gICAgICAgICAgZXJyOiAnJyxcclxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdHJ5TG9naW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBub3RoaW5nXHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGlmICghdm0ubG9naW4uZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKCF2bS5sb2dpbi5wYXNzd29yZCB8fCAhdm0ubG9naW4udXNlcm5hbWUpIHtcclxuICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdjcmVkZW50aWFscyBjYW5ub3QgYmUgZW1wdHknXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdm0ubG9naW4uZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHZtLmxvZ2luLmVyciA9ICcnXHJcbiAgICAgICAgLy8gc2VuZCBsb2dpbiBwb3N0XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2xvZ2luJywge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHZtLmxvZ2luLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZtLmxvZ2luLnBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vIHN1Y2NlZWRlZFxyXG4gICAgICAgICAgICAgIC8vIHZtLiRyb290LmxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIC8vIHB1c2ggdXNlciBpbmZvXHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSByZXNwb25zZS5kYXRhLmFwaWtleVxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnUubmFtZSA9IHJlc3BvbnNlLmRhdGEudXNlci51c2VybmFtZVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZtLiRyb290LnUubmFtZSlcclxuICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy91JylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkXHJcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRyeVJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGlmICghdm0ucmVnaXN0ZXIuZSkgcmV0dXJuXHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIGNvbmZpcm1hdGlvbiBpcyBjb3JyZWN0XHJcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd1c2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZtLnJlZ2lzdGVyLmlhY2NlcHQpIHtcclxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd5b3UgbXVzdCBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZCAhPT0gdm0ucmVnaXN0ZXIuY29uZmlybSkge1xyXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaCdcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB2bS5yZWdpc3Rlci5lID0gZmFsc2VcclxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJydcclxuICAgICAgICAvLyBzZW5kIHJlZ2lzdGVyIHBvc3RcclxuICAgICAgICBheGlvcy5wb3N0KCcvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdm0ucmVnaXN0ZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogdm0ucmVnaXN0ZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICBpbnZpdGVLZXk6IHZtLnJlZ2lzdGVyLmludml0ZUtleVxyXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBzdWNjZWVkZWRcclxuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1JlZ2lzdHJhdGlvbiBzdWNjZWVkZWQhIFlvdSBtYXkgbm93IGxvZyBpbi4nLCAnU3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5hdXRoT3B0aW9uVGFicy5jaGFuZ2VUYWIoJ3QtbG9naW4nKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkIGJlY2F1c2Ugb2YgZXJyb3JcclxuICAgICAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ2luLnZ1ZT84MDY2ZTg1YyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW5cIlxuICB9LCBbX2MoJ21kLXRhYnMnLCB7XG4gICAgcmVmOiBcImF1dGhPcHRpb25UYWJzXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWQtYWNjZW50XCJcbiAgfSwgW19jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LWxvZ2luXCIsXG4gICAgICBcIm1kLWxhYmVsXCI6IFwiTG9nIEluXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5TG9naW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2dpbi51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImxvZ2luLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG9naW4ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmxvZ2luLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmxvZ2luLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5sb2dpbi5lXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2cgSW5cIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LXNpZ251cFwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIlNpZ24gVXBcIlxuICAgIH1cbiAgfSwgW19jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlSZWdpc3RlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXNlcm5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIudXNlcm5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIudXNlcm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkNvbmZpcm0gUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmNvbmZpcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5jb25maXJtXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5jb25maXJtKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5jb25maXJtID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJJbnZpdGUgS2V5IChvcHRpb25hbClcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmludml0ZUtleVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaW52aXRlS2V5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5pbnZpdGVLZXkgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pYWNjZXB0KSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuaWFjY2VwdFwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5pYWNjZXB0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5pYWNjZXB0ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmVnaXN0ZXIuZXJyKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLnJlZ2lzdGVyLmVcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlNpZ24gVXBcIildKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg0YjYxYzZjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgaW50cm8tYXJlYVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ2xvZ2luJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWRhOGVlMjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNjIzMGMyM2Emc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYWJvdXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjIzMGMyM2EhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTYyMzBjMjNhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGFib3V0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTYyMzBjMjNhJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hYm91dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJhZTQwODdkNFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTYyMzBjMjNhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hYm91dC1jb250ZW50W2RhdGEtdi02MjMwYzIzYV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLypmb250LXdlaWdodDogNjAwOyovXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/ZmU5ZmU5YmNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdDQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiYWJvdXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImFib3V0XFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlkPVxcXCJpbnRyby1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dC1jb250ZW50XFxcIj5cXG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dFdpZGdldCdcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgSW50cm8sXFxuICAgIEFib3V0XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuYWJvdXQtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLypmb250LXdlaWdodDogNjAwOyovXFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTYyMzBjMjNhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRybyxcbiAgICBBYm91dFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKmZvbnQtd2VpZ2h0OiA2MDA7Ki9cbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlP2ZlOWZlOWJjIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTM2MjMwZmQyJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hYm91dFdpZGdldC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM2MjMwZmQyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zNjIzMGZkMlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxhYm91dFdpZGdldC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhYm91dFdpZGdldC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zNjIzMGZkMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNmEzMzI4YzBcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zNjIzMGZkMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXRXaWRnZXRbZGF0YS12LTM2MjMwZmQyXSB7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5oNi5jcmVkaXQtdGV4dFtkYXRhLXYtMzYyMzBmZDJdIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/MzhmYjE4YjhcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdCQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiYWJvdXRXaWRnZXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImFib3V0V2lkZ2V0XFxcIj5cXG4gICAgPGg1PkFib3V0IHt7IGFwcE5hbWUgfX08L2g1PlxcbiAgICA8cD5cXG4gICAgICBQZW5ndWluVXBsb2FkIGlzIGEgc2VsZi1ob3N0YWJsZSwgZnVsbHkgZmVhdHVyZWQgd2ViIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB1c2VycyB1cGxvYWQgYW5kIHNoYXJlIGZpbGVzLlxcbiAgICA8L3A+XFxuICAgIDxoNj5cXG4gICAgICBQZW5ndWluVXBsb2FkIHZlcnNpb24ge3sgYXBwVmVyc2lvbiB9fVxcbiAgICA8L2g2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGFwcE5hbWU6ICdQZW5ndWluVXBsb2FkJyxcXG4gICAgICAgIGFwcFZlcnNpb246IHdpbmRvdy4kYXBwVmVyc2lvblxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuYWJvdXRXaWRnZXQge1xcbiAgICBtYXJnaW46IDIlO1xcbiAgfVxcbiAgXFxuICBoNi5jcmVkaXQtdGV4dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM2MjMwZmQyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFdpZGdldFwiPlxuICAgIDxoNT5BYm91dCB7eyBhcHBOYW1lIH19PC9oNT5cbiAgICA8cD5cbiAgICAgIFBlbmd1aW5VcGxvYWQgaXMgYSBzZWxmLWhvc3RhYmxlLCBmdWxseSBmZWF0dXJlZCB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIHVwbG9hZCBhbmQgc2hhcmUgZmlsZXMuXG4gICAgPC9wPlxuICAgIDxoNj5cbiAgICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiB7eyBhcHBWZXJzaW9uIH19XG4gICAgPC9oNj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgICBhcHBWZXJzaW9uOiB3aW5kb3cuJGFwcFZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuYWJvdXRXaWRnZXQge1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbiAgXG4gIGg2LmNyZWRpdC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dFdpZGdldC52dWU/MzhmYjE4YjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFdpZGdldFwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQWJvdXQgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiXFxuICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiBcIiArIF92bS5fcyhfdm0uYXBwVmVyc2lvbikgKyBcIlxcbiAgXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNjIzMGZkMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtY29udGVudFwiXG4gIH0sIFtfYygnYWJvdXQnKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02MjMwYzIzYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMDFhMDZmMjImc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rvd25sb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDFhMDZmMjIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTAxYTA2ZjIyXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRvd25sb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRvd25sb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAxYTA2ZjIyJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kb3dubG9hZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJmNmRiNmM5YVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAxYTA2ZjIyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaHJpbmstbGF5b3V0W2RhdGEtdi0wMWEwNmYyMl0ge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxufVxcbi5kb3dubG9hZC1hcmVhW2RhdGEtdi0wMWEwNmYyMl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/Y2E5ZjIwNzJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9DQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZG93bmxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInNocmluay1sYXlvdXRcXFwiPlxcclxcbiAgICA8IS0tPGltZyBzcmM9XFxcIi4vYXNzZXRzL2xvZ28ucG5nXFxcIj4tLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGRvd25sb2FkLWFyZWFcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXHJcXG4gICAgICAgIDxpbnRybz48L2ludHJvPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcXFwiPlxcclxcbiAgICAgICAgPGRvd25sb2FkSXRlbSA6aXRlbUlkPVxcXCIkcm91dGUucGFyYW1zLmlkXFxcIiA6aXRlbVBhc3M9XFxcIiRyb3V0ZS5wYXJhbXMucGFzc1xcXCI+PC9kb3dubG9hZEl0ZW0+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXHJcXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcXHJcXG4gIGltcG9ydCBkb3dubG9hZEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9kb3dubG9hZEl0ZW0nXFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICBJbnRybyxcXHJcXG4gICAgICBkb3dubG9hZEl0ZW0sXFxyXFxuICAgICAgZGV2Q3JlZGl0c1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5zaHJpbmstbGF5b3V0IHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZG93bmxvYWQtYXJlYSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMWEwNmYyMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBkb3dubG9hZC1hcmVhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XHJcbiAgICAgICAgPGRvd25sb2FkSXRlbSA6aXRlbUlkPVwiJHJvdXRlLnBhcmFtcy5pZFwiIDppdGVtUGFzcz1cIiRyb3V0ZS5wYXJhbXMucGFzc1wiPjwvZG93bmxvYWRJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcbiAgaW1wb3J0IGRvd25sb2FkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2Rvd25sb2FkSXRlbSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIGRvd25sb2FkSXRlbSxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxuXHJcbiAgLmRvd25sb2FkLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkb3dubG9hZC52dWU/Y2E5ZjIwNzIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzhlMmIwNmEmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zOGUyYjA2YSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTM4ZTJiMDZhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGRvd25sb2FkSXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkb3dubG9hZEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM4ZTJiMDZhJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiODgxMzdjZWFcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOGUyYjA2YSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRvd25sb2FkLWl0ZW1bZGF0YS12LTM4ZTJiMDZhXSB7XFxuICBtYXJnaW46IDIlO1xcbn1cXG4uZG93bmxvYWQtYXJlYS1wYWRkaW5nW2RhdGEtdi0zOGUyYjA2YV0ge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMiU7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/NGRjOGI2NjRcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVIQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NBQ0FcIixcImZpbGVcIjpcImRvd25sb2FkSXRlbS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZG93bmxvYWQtaXRlbVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kLXRpdGxlXFxcIj5GaWxlIERvd25sb2FkPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRvd25sb2FkLWFyZWEtcGFkZGluZ1xcXCI+XFxyXFxuICAgICAgPGRpdiB2LWlmPVxcXCJsb2FkaW5nXFxcIj5cXHJcXG4gICAgICAgIDxtZC1zcGlubmVyIDptZC1zdHJva2U9XFxcIjEuNVxcXCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XFxyXFxuICAgICAgICA8aDU+TG9hZGluZyBGaWxlIEluZm9ybWF0aW9uPC9oNT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IHYtZWxzZT5cXHJcXG4gICAgICAgIDxtZC1pY29uIG1kLXRoZW1lPVxcXCJsaWdodC1ibHVlXFxcIiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XFxyXFxuICAgICAgICA8aDU+e3sgZmlsZS5uYW1lIH19PC9oNT5cXHJcXG4gICAgICAgIDxwPnt7IGZpbGUuc2l6ZVRleHQgfX08L3A+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIiFlcnJvclxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICA8bWQtYnV0dG9uIEBjbGljay5uYXRpdmU9XFxcImRvd25sb2FkRmlsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bWQtaWNvbiB2LWlmPVxcXCJmaWxlLnBhc3MubGVuZ3RoID4gMFxcXCI+bG9jazwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgRG93bmxvYWRcXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgPCEtLTxtZC1idXR0b24+Q29weSBMaW5rPC9tZC1idXR0b24+LS0+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcclxcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcXHJcXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcXHJcXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBwcm9wczogWydpdGVtSWQnLCAnaXRlbVBhc3MnXSxcXHJcXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxcclxcbiAgICAgICAgZmlsZToge1xcclxcbiAgICAgICAgICBuYW1lOiAnTG9hZGluZycsXFxyXFxuICAgICAgICAgIHNpemU6ICdyZXRyaWV2aW5nIGluZm9ybWF0aW9uIGZyb20gc2VydmVyJyxcXHJcXG4gICAgICAgICAgaWQ6IG51bGwsXFxyXFxuICAgICAgICAgIHBhc3M6ICcnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgY0l0ZW1QYXNzOiAnJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9kb3dubG9hZC8nICsgdGhpcy5maWxlLmlkICsgKHRoaXMuZmlsZS5wYXNzID8gJyEnICsgdGhpcy5maWxlLnBhc3MgOiAnJylcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHVwZGF0ZUZpbGVJbmZvOiBmdW5jdGlvbiAoa2V5KSB7XFxyXFxuICAgICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgICBsZXQgc3VmZml4ID0ga2V5ID8gJyEnICsga2V5IDogJydcXHJcXG4gICAgICAgIHZtLmZpbGUuaWQgPSB2bS5pdGVtSWRcXHJcXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlaW5mby8nICsgdm0uZmlsZS5pZCArIHN1ZmZpeCwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxcclxcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcXHJcXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gcmVzcG9uc2UuZGF0YS5uYW1lXFxyXFxuICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXNwb25zZS5kYXRhLnNpemUpXFxyXFxuICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgIGlmIChzdWZmaXgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdm0uZmlsZS5wYXNzID0ga2V5XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XFxyXFxuICAgICAgICAgICAgICAvLyBmaWxlIGlzIHBhc3N3b3JkIHByb3RlY3RlZFxcclxcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1Byb21wdCgnRW50ZXIgcGFzc3dvcmQnLCAnRmlsZSBwYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCByZXNwb25kZWQgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgIGlmIChyKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB2bS51cGRhdGVGaWxlSW5mbyhyKVxcclxcbiAgICAgICAgICAgICAgICAgIH0sIDUwMClcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICB2bS5maWxlLm5hbWUgPSAnSW5jb3JyZWN0IFBhc3N3b3JkJ1xcclxcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnQWNjZXNzIERlbmllZCdcXHJcXG4gICAgICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICB2bS5lcnJvciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcXHJcXG4gICAgICAgICAgICAvLyBmaWxlIG5vdCBmb3VuZFxcclxcbiAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9ICdGaWxlIE5vdCBGb3VuZCdcXHJcXG4gICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gJ0Vycm9yJ1xcclxcbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxcclxcbiAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxcclxcbiAgICAgICAgICB9KVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgaGFuZGxlR2xvYmFsS2V5cHJlc3M6IGZ1bmN0aW9uIChlKSB7XFxyXFxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnRcXHJcXG4gICAgICAgIGlmIChlKSB7XFxyXFxuICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XFxyXFxuICAgICAgICAgICAgY2FzZSA0MDpcXHJcXG4gICAgICAgICAgICAgIC8vIGRvd25cXHJcXG4gICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKClcXHJcXG4gICAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuaXRlbVBhc3MpIHtcXHJcXG4gICAgICAgIHRyeSB7XFxyXFxuICAgICAgICAgIHRoaXMuY0l0ZW1QYXNzID0gd2luZG93LmF0b2IodGhpcy5pdGVtUGFzcylcXHJcXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcXHJcXG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSBudWxsXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHRoaXMudXBkYXRlRmlsZUluZm8odGhpcy5jSXRlbVBhc3MpXFxyXFxuICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gdGhpcy5oYW5kbGVHbG9iYWxLZXlwcmVzc1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5kb3dubG9hZC1pdGVtIHtcXHJcXG4gICAgbWFyZ2luOiAyJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRvd25sb2FkLWFyZWEtcGFkZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM4ZTJiMDZhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkb3dubG9hZC1pdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5GaWxlIERvd25sb2FkPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtYXJlYS1wYWRkaW5nXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5cclxuICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XHJcbiAgICAgICAgPGg1PkxvYWRpbmcgRmlsZSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtaWNvbiBtZC10aGVtZT1cImxpZ2h0LWJsdWVcIiBjbGFzcz1cIm1kLXByaW1hcnlcIj5pbnNlcnRfZHJpdmVfZmlsZTwvbWQtaWNvbj5cclxuICAgICAgICA8aDU+e3sgZmlsZS5uYW1lIH19PC9oNT5cclxuICAgICAgICA8cD57eyBmaWxlLnNpemVUZXh0IH19PC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIiFlcnJvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxtZC1idXR0b24gQGNsaWNrLm5hdGl2ZT1cImRvd25sb2FkRmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxtZC1pY29uIHYtaWY9XCJmaWxlLnBhc3MubGVuZ3RoID4gMFwiPmxvY2s8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxtZC1idXR0b24+Q29weSBMaW5rPC9tZC1idXR0b24+LS0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnaXRlbUlkJywgJ2l0ZW1QYXNzJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBmaWxlOiB7XHJcbiAgICAgICAgICBuYW1lOiAnTG9hZGluZycsXHJcbiAgICAgICAgICBzaXplOiAncmV0cmlldmluZyBpbmZvcm1hdGlvbiBmcm9tIHNlcnZlcicsXHJcbiAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgIHBhc3M6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgY0l0ZW1QYXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBkb3dubG9hZEZpbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Rvd25sb2FkLycgKyB0aGlzLmZpbGUuaWQgKyAodGhpcy5maWxlLnBhc3MgPyAnIScgKyB0aGlzLmZpbGUucGFzcyA6ICcnKVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVGaWxlSW5mbzogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgc3VmZml4ID0ga2V5ID8gJyEnICsga2V5IDogJydcclxuICAgICAgICB2bS5maWxlLmlkID0gdm0uaXRlbUlkXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpbGVpbmZvLycgKyB2bS5maWxlLmlkICsgc3VmZml4LCBheGlvc1JlcXVlc3RDb25maWcpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICB2bS5maWxlLm5hbWUgPSByZXNwb25zZS5kYXRhLm5hbWVcclxuICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXNwb25zZS5kYXRhLnNpemUpXHJcbiAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgaWYgKHN1ZmZpeCkge1xyXG4gICAgICAgICAgICAgICAgdm0uZmlsZS5wYXNzID0ga2V5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyBmaWxlIGlzIHBhc3N3b3JkIHByb3RlY3RlZFxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ0ZpbGUgcGFzc3dvcmQnLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbmRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLnVwZGF0ZUZpbGVJbmZvKHIpXHJcbiAgICAgICAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9ICdJbmNvcnJlY3QgUGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnQWNjZXNzIERlbmllZCdcclxuICAgICAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyBmaWxlIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICB2bS5maWxlLm5hbWUgPSAnRmlsZSBOb3QgRm91bmQnXHJcbiAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnRXJyb3InXHJcbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB2bS5lcnJvciA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUdsb2JhbEtleXByZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudFxyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgIC8vIGRvd25cclxuICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSgpXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5pdGVtUGFzcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLmNJdGVtUGFzcyA9IHdpbmRvdy5hdG9iKHRoaXMuaXRlbVBhc3MpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsZUluZm8odGhpcy5jSXRlbVBhc3MpXHJcbiAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHRoaXMuaGFuZGxlR2xvYmFsS2V5cHJlc3NcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5kb3dubG9hZC1pdGVtIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3dubG9hZC1hcmVhLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRvd25sb2FkSXRlbS52dWU/NGRjOGI2NjQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkb3dubG9hZC1pdGVtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRmlsZSBEb3dubG9hZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRvd25sb2FkLWFyZWEtcGFkZGluZ1wiXG4gIH0sIFsoX3ZtLmxvYWRpbmcpID8gX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogMS41LFxuICAgICAgXCJtZC1pbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KFwiTG9hZGluZyBGaWxlIEluZm9ybWF0aW9uXCIpXSldLCAxKSA6IF9jKCdkaXYnLCBbX2MoJ21kLWljb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRoZW1lXCI6IFwibGlnaHQtYmx1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiaW5zZXJ0X2RyaXZlX2ZpbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUuc2l6ZVRleHQpKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5lcnJvcikgPyBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmlnaHRcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRvd25sb2FkRmlsZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5maWxlLnBhc3MubGVuZ3RoID4gMCkgPyBfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJsb2NrXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgRG93bmxvYWRcXG4gICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSkgOiBfdm0uX2UoKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zOGUyYjA2YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyBkb3dubG9hZC1hcmVhXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidHdlbHZlIGNvbHVtbnNcIlxuICB9LCBbX2MoJ2ludHJvJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiXG4gIH0sIFtfYygnZG93bmxvYWRJdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIml0ZW1JZFwiOiBfdm0uJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgIFwiaXRlbVBhc3NcIjogX3ZtLiRyb3V0ZS5wYXJhbXMucGFzc1xuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDFhMDZmMjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTA5N2FiYjZhJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDk3YWJiNmEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0wOTdhYmI2YVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxkYXNoYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOTdhYmI2YSZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjI3MWFjNjA3XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDk3YWJiNmEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaHJpbmstbGF5b3V0W2RhdGEtdi0wOTdhYmI2YV0ge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlPzhjMjY0YmRjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtQ0E7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0NBQ0FcIixcImZpbGVcIjpcImRhc2hib2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxyXFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcclxcbiAgICA8aW50cm8gdmlldy10aXRsZT1cXFwiRGFzaGJvYXJkXFxcIj48L2ludHJvPlxcclxcbiAgICA8ZmlsZVVwbG9hZFdpZGdldD48L2ZpbGVVcGxvYWRXaWRnZXQ+XFxyXFxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcclxcbiAgaW1wb3J0IGZpbGVVcGxvYWRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0J1xcclxcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgSW50cm8sXFxyXFxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcXHJcXG4gICAgICBkZXZDcmVkaXRzXFxyXFxuICAgIH0sXFxyXFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcXHJcXG4gICAgICBuZXh0KHZtID0+IHtcXHJcXG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcXHJcXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5zaHJpbmstbGF5b3V0IHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA5N2FiYjZhJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJEYXNoYm9hcmRcIj48L2ludHJvPlxyXG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZmlsZVVwbG9hZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzhjMjY0YmRjIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQwOTJiNTIwJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00MDkyYjUyMCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00MDkyYjUyMFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxmaWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbGVVcGxvYWRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MDkyYjUyMCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI1OTA5NzM0MFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQwOTJiNTIwJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVwbG9hZC1hcmVhLXBhZGRpbmdbZGF0YS12LTQwOTJiNTIwXSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNCU7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG4udXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNbZGF0YS12LTQwOTJiNTIwXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi51cGxvYWQtcHJvZ3Jlc3MtYmFyW2RhdGEtdi00MDkyYjUyMF0ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udXBsb2FkLXNldHRpbmdzLXNlY3Rpb25bZGF0YS12LTQwOTJiNTIwXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT8xMzIyODZlMVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ01BO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0NBQ0FcIixcImZpbGVcIjpcImZpbGVVcGxvYWRXaWRnZXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImZpbGUtdXBsb2FkLXdpZGdldFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0IHNlcC1iXFxcIj5cXHJcXG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidmlld015RmlsZXNcXFwiPlZpZXcgbXkgZmlsZXM8L21kLWJ1dHRvbj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVwbG9hZC1oZXJlXFxcIiBAZHJvcC5zdG9wLnByZXZlbnQ9XFxcImhhbmRsZURyYWdEcm9wVXBsb2FkXFxcIiBAZHJhZ2VudGVyLnN0b3AucHJldmVudCBAZHJhZ2xlYXZlLnN0b3AucHJldmVudCBAZHJhZ292ZXIuc3RvcC5wcmV2ZW50PlxcclxcbiAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cXFwidGFyZ2V0XFxcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZC10aXRsZVxcXCI+VXBsb2FkIEZpbGVzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBEZXN0aW5hdGlvbjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XFxcInVwbG9hZERlc3RpbmF0aW9uXFxcIj48L21kLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLXN1YmhlYWRcXFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2s8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cGxvYWQtYXJlYS1wYWRkaW5nXFxcIiBAY2xpY2submF0aXZlPVxcXCJicm93c2VGb3JGaWxlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgPCEtLTxtZC1zcGlubmVyIG1kLXNpemU9XFxcIjYwXFxcIiA6bWQtcHJvZ3Jlc3M9XFxcInByb2dyZXNzSW5kaWNhdG9yLnZhbHVlXFxcIiBjbGFzcz1cXFwibWQtd2FyblxcXCI+PC9tZC1zcGlubmVyPlxcclxcbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2dyZXNzTWVzc2FnZSB9fTwvcD4tLT5cXHJcXG4gICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVxcXCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWRpbmcgZmlsZS0tPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIHYtaWY9XFxcInByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwXFxcIj5VcGxvYWRpbmc8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cXFwiKHBySW5kLCBpeCkgaW4gcHJvZ3Jlc3NJbmRpY2F0b3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCIgdi1pZj1cXFwiIXBySW5kLmVycm9yXFxcIj5jbG91ZF9xdWV1ZTwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCIgdi1lbHNlPmVycm9yPC9tZC1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IHBySW5kLm5hbWUgfX0gPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIHYtaWY9XFxcIiFwckluZC5lcnJvclxcXCI+IHt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgY2xhc3M9XFxcInVwbG9hZC1wcm9ncmVzcy1iYXJcXFwiIHYtaWY9XFxcIiFwckluZC5lcnJvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1wcm9ncmVzcyA6bWQtcHJvZ3Jlc3M9XFxcInBySW5kLnZhbHVlXFxcIj48L21kLXByb2dyZXNzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT4ge3sgJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cXFwiIEBjbGljay5uYXRpdmU9XFxcImNhbmNlbFVwbG9hZChwckluZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XFxcIm1kLXByaW1hcnlcXFwiPmNhbmNlbDwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCI+ZmlsZV91cGxvYWQ8L21kLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XFxcIm1kLWluc2V0XFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tVXBsb2FkIGNvbXBsZXRlZCBmaWxlcy0tPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIHYtaWY9XFxcImNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDBcXFwiPkNvbXBsZXRlZDwvbWQtc3ViaGVhZGVyPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVxcXCIoY21wbEZpbGUsIGl4KSBpbiBjb21wbGV0ZWRGaWxlc1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidmlzaXRVcmwoY21wbEZpbGUuZG93bmxvYWRQYWdlKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XFxcIm1kLXByaW1hcnlcXFwiPmNsb3VkX2RvbmU8L21kLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlVwbG9hZCBDb21wbGV0ZSE8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XFxcIm1kLXByaW1hcnlcXFwiPmRvbmU8L21kLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XFxcIm1kLWluc2V0XFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICAgICAgICAgICAgPG1kLWJ1dHRvbiB2LWlmPVxcXCJjb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwXFxcIiBAY2xpY2submF0aXZlPVxcXCJjb21wbGV0ZWRGaWxlcyA9IFtdXFxcIj5DbGVhciBBbGw8L21kLWJ1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcImludmlzaWJsZVxcXCIgcmVmPVxcXCJicm93c2VcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZXNVcGxvYWRlZFxcXCIgbXVsdGlwbGUgLz5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxyXFxuXFxyXFxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xcclxcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xcclxcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIHByb2dyZXNzSW5kaWNhdG9yczogW10sXFxyXFxuICAgICAgICAvKiBzY2hlbWE6XFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHZhbHVlOiBudW1iZXIgWzAtMTAwXSxcXHJcXG4gICAgICAgICAgZmlsZVJlZjogb2JqZWN0IFtyZWZlcmVuY2UgdG8gZmlsZSB0aGF0IGlzIHVwbG9hZGluZ10sXFxyXFxuICAgICAgICAgIG5hbWU6IHN0cmluZyBbbmFtZSBvZiBmaWxlXSxcXHJcXG4gICAgICAgICAgeGhyOiBvYmplY3QgW3hociBvYmplY3QgcmVmZXJlbmNlXSxcXHJcXG4gICAgICAgICAgZXJyb3I6IGJvb2xcXHJcXG4gICAgICAgICAgbWVzc2FnZTogc3RyaW5nIG9yIG51bGwgW2FuIGVycm9yIG1lc3NhZ2VdXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAqL1xcclxcbiAgICAgICAgY29tcGxldGVkRmlsZXM6IFtdLFxcclxcbiAgICAgICAgLyogc2NoZW1hOlxcclxcbiAgICAgICAgICovXFxyXFxuICAgICAgICB1cGxvYWREZXN0aW5hdGlvbjogJy8nXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIHVwbG9hZGluZ0ZpbGVzOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICB1cGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZGluZ0ZpbGVzID4gMFxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIHZpZXdNeUZpbGVzOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpbGVzJylcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGJyb3dzZUZvckZpbGVzOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBvbkZpbGVzVXBsb2FkZWQ6IGZ1bmN0aW9uIChlKSB7XFxyXFxuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcXHJcXG4gICAgICAgIGxldCBmaWxlQ291bnQgPSBicm93c2UuZmlsZXMubGVuZ3RoXFxyXFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVDb3VudDsgaSsrKSB7XFxyXFxuICAgICAgICAgIGxldCBmID0gYnJvd3NlLmZpbGVzW2ldXFxyXFxuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcXHJcXG4gICAgICAgICAgICB2YWx1ZTogMCxcXHJcXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxcclxcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXFxyXFxuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZShmLCBwcm9ncmVzcylcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGhhbmRsZURyYWdEcm9wVXBsb2FkOiBmdW5jdGlvbiAoZSkge1xcclxcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xcclxcbiAgICAgICAgICB2YXIgZiA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xcclxcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IDAsXFxyXFxuICAgICAgICAgICAgZmlsZVJlZjogZixcXHJcXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWUsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0luZGljYXRvcnMucHVzaChwcm9ncmVzcylcXHJcXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgY2FuY2VsVXBsb2FkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcXHJcXG4gICAgICAgIGxldCB2bSA9IHRoaXNcXHJcXG4gICAgICAgIHByb2dyZXNzLnhoci5hYm9ydCgpXFxyXFxuICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHVwbG9hZEZpbGU6IGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xcclxcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcclxcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXFxyXFxuICAgICAgICBwcm9ncmVzcy54aHIgPSB4aHJcXHJcXG4gICAgICAgIHhoci5vcGVuKFxcXCJQT1NUXFxcIiwgXFxcIi9hcGkvdXBsb2FkXFxcIilcXHJcXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcXHJcXG4gICAgICAgICAgICAvLyB1cGxvYWQgY29tcGxldGVcXHJcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBsb2FkIGNvbXBsZXRlJywgcHJvZ3Jlc3MubmFtZSlcXHJcXG4gICAgICAgICAgICAvLyBkZXF1ZXVlIHRoZSB1cGxvYWRpbmcgZmlsZVxcclxcbiAgICAgICAgICAgIHZtLnByb2dyZXNzSW5kaWNhdG9ycy5zcGxpY2Uodm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmluZGV4T2YocHJvZ3Jlc3MpLCAxKVxcclxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXFxyXFxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxcclxcbiAgICAgICAgICAgIHZtLmNvbXBsZXRlZEZpbGVzLnB1c2goe1xcclxcbiAgICAgICAgICAgICAgbmFtZTogcHJvZ3Jlc3MubmFtZSxcXHJcXG4gICAgICAgICAgICAgIGRvd25sb2FkUGFnZTogJy8jL2QvJyArIHJlc3BvbnNlLmZpbGVJZFxcclxcbiAgICAgICAgICAgICAgLy8gZG93bmxvYWRQYWdlOiByZXNwb25zZS5kb3dubG9hZFBhZ2UgLy8gZ2V0IGRvd25sb2FkIHBhZ2UgZnJvbSBzZXJ2ZXIgcmVzcG9uc2VcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcXHJcXG4gICAgICAgICAgICBwcm9ncmVzcy5lcnJvciA9IHRydWVcXHJcXG4gICAgICAgICAgICAvLyBwcm9ncmVzcy5tZXNzYWdlID0geGhyLnJlc3BvbnNlVGV4dFxcclxcbiAgICAgICAgICAgIC8vIHJlYWN0aXZlIHVwZGF0ZVxcclxcbiAgICAgICAgICAgIHZtLiRzZXQocHJvZ3Jlc3MsICdtZXNzYWdlJywgeGhyLnJlc3BvbnNlVGV4dClcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcXHJcXG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xcclxcbiAgICAgICAgICAgIHByb2dyZXNzLnZhbHVlID0gTWF0aC5mbG9vcigoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMClcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKVxcclxcbiAgICAgICAgZm9ybS5hcHBlbmQoXFxcImFwaWtleVxcXCIsIHZtLiRyb290LnUua2V5KVxcclxcbiAgICAgICAgZm9ybS5hcHBlbmQoXFxcImRpclxcXCIsIHZtLnVwbG9hZERlc3RpbmF0aW9uKVxcclxcbiAgICAgICAgZm9ybS5hcHBlbmQoXFxcImZpbGVcXFwiLCBmaWxlKVxcclxcbiAgICAgICAgeGhyLnNlbmQoZm9ybSlcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHZpc2l0VXJsOiBmdW5jdGlvbiAodSkge1xcclxcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC51cGxvYWQtYXJlYS1wYWRkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC51cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9ycyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnVwbG9hZC1wcm9ncmVzcy1iYXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC51cGxvYWQtc2V0dGluZ3Mtc2VjdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDA5MmI1MjAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC13aWRnZXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdCBzZXAtYlwiPlxyXG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiBAY2xpY2submF0aXZlPVwidmlld015RmlsZXNcIj5WaWV3IG15IGZpbGVzPC9tZC1idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtaGVyZVwiIEBkcm9wLnN0b3AucHJldmVudD1cImhhbmRsZURyYWdEcm9wVXBsb2FkXCIgQGRyYWdlbnRlci5zdG9wLnByZXZlbnQgQGRyYWdsZWF2ZS5zdG9wLnByZXZlbnQgQGRyYWdvdmVyLnN0b3AucHJldmVudD5cclxuICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwidGFyZ2V0XCI+RHJhZyBhbmQgZHJvcCBvciBjbGljayB0byB1cGxvYWQgZmlsZXM8L2E+LS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPlVwbG9hZCBGaWxlczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBEZXN0aW5hdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwidXBsb2FkRGVzdGluYXRpb25cIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtc3ViaGVhZFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2s8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1hcmVhLXBhZGRpbmdcIiBAY2xpY2submF0aXZlPVwiYnJvd3NlRm9yRmlsZXNcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgICAgICAgIDwhLS08bWQtc3Bpbm5lciBtZC1zaXplPVwiNjBcIiA6bWQtcHJvZ3Jlc3M9XCJwcm9ncmVzc0luZGljYXRvci52YWx1ZVwiIGNsYXNzPVwibWQtd2FyblwiPjwvbWQtc3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3sgcHJvZ3Jlc3NNZXNzYWdlIH19PC9wPi0tPlxyXG4gICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWRpbmcgZmlsZS0tPlxyXG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwicHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDBcIj5VcGxvYWRpbmc8L21kLXN1YmhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIocHJJbmQsIGl4KSBpbiBwcm9ncmVzc0luZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1pZj1cIiFwckluZC5lcnJvclwiPmNsb3VkX3F1ZXVlPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiB2LWVsc2U+ZXJyb3I8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IHBySW5kLm5hbWUgfX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiB2LWlmPVwiIXBySW5kLmVycm9yXCI+IHt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGNsYXNzPVwidXBsb2FkLXByb2dyZXNzLWJhclwiIHYtaWY9XCIhcHJJbmQuZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWQtcHJvZ3Jlc3MgOm1kLXByb2dyZXNzPVwicHJJbmQudmFsdWVcIj48L21kLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPiB7eyAnVXBsb2FkIGVycm9yOiAnICsgcHJJbmQubWVzc2FnZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljay5uYXRpdmU9XCJjYW5jZWxVcGxvYWQocHJJbmQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2FuY2VsPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV91cGxvYWQ8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8IS0tVXBsb2FkIGNvbXBsZXRlZCBmaWxlcy0tPlxyXG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiPkNvbXBsZXRlZDwvbWQtc3ViaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihjbXBsRmlsZSwgaXgpIGluIGNvbXBsZXRlZEZpbGVzXCIgQGNsaWNrLm5hdGl2ZT1cInZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQgQ29tcGxldGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgPG1kLWJ1dHRvbiB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiIEBjbGljay5uYXRpdmU9XCJjb21wbGV0ZWRGaWxlcyA9IFtdXCI+Q2xlYXIgQWxsPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImludmlzaWJsZVwiIHJlZj1cImJyb3dzZVwiIEBjaGFuZ2U9XCJvbkZpbGVzVXBsb2FkZWRcIiBtdWx0aXBsZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2dyZXNzSW5kaWNhdG9yczogW10sXHJcbiAgICAgICAgLyogc2NoZW1hOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBudW1iZXIgWzAtMTAwXSxcclxuICAgICAgICAgIGZpbGVSZWY6IG9iamVjdCBbcmVmZXJlbmNlIHRvIGZpbGUgdGhhdCBpcyB1cGxvYWRpbmddLFxyXG4gICAgICAgICAgbmFtZTogc3RyaW5nIFtuYW1lIG9mIGZpbGVdLFxyXG4gICAgICAgICAgeGhyOiBvYmplY3QgW3hociBvYmplY3QgcmVmZXJlbmNlXSxcclxuICAgICAgICAgIGVycm9yOiBib29sXHJcbiAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcgb3IgbnVsbCBbYW4gZXJyb3IgbWVzc2FnZV1cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb21wbGV0ZWRGaWxlczogW10sXHJcbiAgICAgICAgLyogc2NoZW1hOlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwbG9hZERlc3RpbmF0aW9uOiAnLydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHVwbG9hZGluZ0ZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aFxyXG4gICAgICB9LFxyXG4gICAgICB1cGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRpbmdGaWxlcyA+IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdmlld015RmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpbGVzJylcclxuICAgICAgfSxcclxuICAgICAgYnJvd3NlRm9yRmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRmlsZXNVcGxvYWRlZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcclxuICAgICAgICBsZXQgZmlsZUNvdW50ID0gYnJvd3NlLmZpbGVzLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgIGxldCBmID0gYnJvd3NlLmZpbGVzW2ldXHJcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxyXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXHJcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZiwgcHJvZ3Jlc3MpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVEcmFnRHJvcFVwbG9hZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgZiA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xyXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgZmlsZVJlZjogZixcclxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxyXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsVXBsb2FkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgcHJvZ3Jlc3MueGhyLmFib3J0KClcclxuICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkRmlsZTogZnVuY3Rpb24gKGZpbGUsIHByb2dyZXNzKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgIHByb2dyZXNzLnhociA9IHhoclxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi9hcGkvdXBsb2FkXCIpXHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gdXBsb2FkIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGxvYWQgY29tcGxldGUnLCBwcm9ncmVzcy5uYW1lKVxyXG4gICAgICAgICAgICAvLyBkZXF1ZXVlIHRoZSB1cGxvYWRpbmcgZmlsZVxyXG4gICAgICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRGaWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9ncmVzcy5uYW1lLFxyXG4gICAgICAgICAgICAgIGRvd25sb2FkUGFnZTogJy8jL2QvJyArIHJlc3BvbnNlLmZpbGVJZFxyXG4gICAgICAgICAgICAgIC8vIGRvd25sb2FkUGFnZTogcmVzcG9uc2UuZG93bmxvYWRQYWdlIC8vIGdldCBkb3dubG9hZCBwYWdlIGZyb20gc2VydmVyIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXHJcbiAgICAgICAgICAgIHByb2dyZXNzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBwcm9ncmVzcy5tZXNzYWdlID0geGhyLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICAvLyByZWFjdGl2ZSB1cGRhdGVcclxuICAgICAgICAgICAgdm0uJHNldChwcm9ncmVzcywgJ21lc3NhZ2UnLCB4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcy52YWx1ZSA9IE1hdGguZmxvb3IoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtLmFwcGVuZChcImFwaWtleVwiLCB2bS4kcm9vdC51LmtleSlcclxuICAgICAgICBmb3JtLmFwcGVuZChcImRpclwiLCB2bS51cGxvYWREZXN0aW5hdGlvbilcclxuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSlcclxuICAgICAgICB4aHIuc2VuZChmb3JtKVxyXG4gICAgICB9LFxyXG4gICAgICB2aXNpdFVybDogZnVuY3Rpb24gKHUpIHtcclxuICAgICAgICB3aW5kb3cub3Blbih1LCAnX2JsYW5rJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnVwbG9hZC1hcmVhLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTQlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1wcm9ncmVzcy1iYXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkLXNldHRpbmdzLXNlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZmlsZVVwbG9hZFdpZGdldC52dWU/MTMyMjg2ZTEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZC13aWRnZXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGVmdCBzZXAtYlwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS52aWV3TXlGaWxlcygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlldyBteSBmaWxlc1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWhlcmVcIixcbiAgICBvbjoge1xuICAgICAgXCJkcm9wXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGFuZGxlRHJhZ0Ryb3BVcGxvYWQoJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiZHJhZ2VudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ2xlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ292ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdXBsb2FkLXNldHRpbmdzLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXBsb2FkIERlc3RpbmF0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGxvYWREZXN0aW5hdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcInVwbG9hZERlc3RpbmF0aW9uXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwbG9hZERlc3RpbmF0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGxvYWREZXN0aW5hdGlvbiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtc3ViaGVhZFwiXG4gIH0sIFtfdm0uX3YoXCJEcmFnIGFuZCBkcm9wIG9yIGNsaWNrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWFyZWEtcGFkZGluZ1wiLFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYnJvd3NlRm9yRmlsZXMoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBbKF92bS5wcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIlVwbG9hZGluZ1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnByb2dyZXNzSW5kaWNhdG9ycyksIGZ1bmN0aW9uKHBySW5kLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywgWyghcHJJbmQuZXJyb3IpID8gX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfcXVldWVcIildKSA6IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImVycm9yXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBySW5kLm5hbWUpICsgXCIgXCIpXSksIF92bS5fdihcIiBcIiksICghcHJJbmQuZXJyb3IpID8gW19jKCdzcGFuJywgW192bS5fdihfdm0uX3MoKHBySW5kLnZhbHVlIDwgMTAwKSA/IChcIlVwbG9hZGluZy4uLiAoXCIgKyAocHJJbmQudmFsdWUpICsgXCIlKVwiKSA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtcHJvZ3Jlc3MnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1kLXByb2dyZXNzXCI6IHBySW5kLnZhbHVlXG4gICAgICB9XG4gICAgfSldIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKCdVcGxvYWQgZXJyb3I6ICcgKyBwckluZC5tZXNzYWdlKSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNhbmNlbFVwbG9hZChwckluZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjYW5jZWxcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIlxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmaWxlX3VwbG9hZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIkNvbXBsZXRlZFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmNvbXBsZXRlZEZpbGVzKSwgZnVuY3Rpb24oY21wbEZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS52aXNpdFVybChjbXBsRmlsZS5kb3dubG9hZFBhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhjbXBsRmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiVXBsb2FkIENvbXBsZXRlIVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiXG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImRvbmVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY29tcGxldGVkRmlsZXMgPSBbXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsZWFyIEFsbFwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJicm93c2VcIixcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZXNVcGxvYWRlZFxuICAgIH1cbiAgfSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQwOTJiNTIwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIkRhc2hib2FyZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ZpbGVVcGxvYWRXaWRnZXQnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA5N2FiYjZhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDIzNTZkMjEmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQyMzU2ZDIxIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQyMzU2ZDIxXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXG15ZmlsZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlmaWxlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQyMzU2ZDIxJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcImY2NjU4YWZlXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDIzNTZkMjEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtNDIzNTZkMjFdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/NjA3ZDAwYTJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlDQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibXlmaWxlcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxyXFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcclxcbiAgICA8aW50cm8gdmlldy10aXRsZT1cXFwiTXkgRmlsZXNcXFwiPjwvaW50cm8+XFxyXFxuICAgIDxteUZpbGVzTGlzdCA6ZGlyPVxcXCJkaXJcXFwiPjwvbXlGaWxlc0xpc3Q+XFxyXFxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcclxcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXFxyXFxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIHByb3BzOiBbJ2RpciddLFxcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgIHJldHVybiB7fVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgSW50cm8sXFxyXFxuICAgICAgbXlGaWxlc0xpc3QsXFxyXFxuICAgICAgZGV2Q3JlZGl0c1xcclxcbiAgICB9LFxcclxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XFxyXFxuICAgICAgbmV4dCh2bSA9PiB7XFxyXFxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XFxyXFxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfSlcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuc2hyaW5rLWxheW91dCB7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MjM1NmQyMSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8aW50cm8gdmlldy10aXRsZT1cIk15IEZpbGVzXCI+PC9pbnRybz5cclxuICAgIDxteUZpbGVzTGlzdCA6ZGlyPVwiZGlyXCI+PC9teUZpbGVzTGlzdD5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgbXlGaWxlc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9teUZpbGVzTGlzdCdcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2RpciddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgbXlGaWxlc0xpc3QsXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteWZpbGVzLnZ1ZT82MDdkMDBhMiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02YzI4NjcwYSZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbXlGaWxlc0xpc3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02YzI4NjcwYSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNmMyODY3MGFcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcbXlGaWxlc0xpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlGaWxlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmMyODY3MGEmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215RmlsZXNMaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjkwNGRhZmVhXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmMyODY3MGEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIm15RmlsZXNMaXN0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YzI4NjcwYSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJteS1maWxlcy1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cclxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrLm5hdGl2ZT1cInVwbG9hZE1vcmVGaWxlc1wiPlVwbG9hZCBGaWxlczwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkZWQtZmlsZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5BbGwgTXkgRmlsZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZEZpbmlzaGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxwPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwibm9JdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+Tm8gRmlsZXM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLWRpcmVjdG9yaWVzLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhYXRSb290RGlyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cImRpclVwTGV2ZWwoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZvbGRlcjwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC4uIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBQYXJlbnQgRm9sZGVyIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj4tLT5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIoZGlyLCBpeCkgaW4gZGlyc1wiIEBjbGljay5uYXRpdmU9XCJvcGVuRGlyKGl4KVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5mb2xkZXI8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IGRpci5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBGb2xkZXIgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPCEtLTxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+LS0+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICAgIDwhLS1maWxlcy0tPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihmaWxlLCBpeCkgaW4gZmlsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZmlsZS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBnZXRIclNpemUoZmlsZS5zaXplKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljay5uYXRpdmU9XCJsb2NrRmlsZShpeClcIiB2LWlmPVwiIWZpbGUubG9ja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bG9ja19vcGVuPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrLm5hdGl2ZT1cInVubG9ja0ZpbGUoaXgpXCIgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2s8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2submF0aXZlPVwiZG93bmxvYWRGaWxlKGl4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfZG93bmxvYWQ8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIG1kLW1lbnUtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPm1vcmVfaG9yaXo8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cInZpc2l0RG93bmxvYWRQYWdlKGl4KVwiPkRvd25sb2FkIFBhZ2U8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cInJlbmFtZUZpbGUoaXgpXCI+UmVuYW1lPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XCJkZWxldGVGaWxlKGl4KVwiPkRlbGV0ZTwvbWQtbWVudS1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L21kLW1lbnU+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS08bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgICAgICAgIDxoNT5SZXRyaWV2aW5nIERhdGE8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnZGlyJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpclN0cnVjdHVyZToge30sXHJcbiAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgIGRpcnM6IFtdLFxyXG4gICAgICAgIGxvYWRGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnREaXI6IHRoaXMuZGlyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBub0l0ZW1zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMubGVuZ3RoID09IDAgJiYgdGhpcy5kaXJzLmxlbmd0aCA9PSAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGF0Um9vdERpcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXIgPT09ICcvJ1xyXG4gICAgICB9LFxyXG4gICAgICBjdXJyZW50RGlyU3RydWN0dXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gd2FsayBkaXJlY3Rvcnkgc3RydWN0dXJlXHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gdGhpcy5jdXJyZW50RGlyLnNwbGl0KCcvJylcclxuICAgICAgICAvLyBjbGVhbiB1cFxyXG4gICAgICAgIHNlZ21lbnRzID0gc2VnbWVudHMuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgLy8gZmluZCBtYXRjaGluZyBkaXJlY3RvcnlcclxuICAgICAgICBsZXQgd29ya2luZ0RpclN0cnVjdHVyZSA9IHRoaXMuZGlyU3RydWN0dXJlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV1cclxuICAgICAgICAgIHdvcmtpbmdEaXJTdHJ1Y3R1cmUgPSB3b3JraW5nRGlyU3RydWN0dXJlLmRpcnMuZmluZChkID0+IGQubmFtZSA9PT0gY3VycmVudFNlZ21lbnQpXHJcbiAgICAgICAgICBpZiAoIXdvcmtpbmdEaXJTdHJ1Y3R1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmtpbmdEaXJTdHJ1Y3R1cmVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0SHJTaXplOiBmdW5jdGlvbiAobCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb290Lmh1bWFuRmlsZVNpemUobClcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkTW9yZUZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91JylcclxuICAgICAgfSxcclxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpc2l0RG93bmxvYWRQYWdlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgZiA9IHRoaXMuZmlsZXNbaXhdXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZi5sb2NrZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIC8vICAgICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybShcclxuICAgICAgICAvLyAgICAgICAgICAgICBgXHJcbiAgICAgICAgLy8gVGhpcyBmaWxlIGlzIHBhc3N3b3JkIHByb3RlY3RlZC4gRG8geW91IHdhbnQgdG8gZW5jb2RlIHRoZSA8YnI+XHJcbiAgICAgICAgLy8gcGFzc3dvcmQgaW4gdGhlIGxpbms/IElmIHlvdSBkb24ndCBkbyB0aGlzLCBhbnlvbmUgd2hvIHZpc2l0cyA8YnI+XHJcbiAgICAgICAgLy8geW91ciBsaW5rIHdpbGwgbmVlZCB0byBlbnRlciB0aGUgZmlsZSBwYXNzd29yZCB0byB2aWV3IHRoZSBmaWxlLlxyXG4gICAgICAgIC8vIGAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ0luY2x1ZGUgcGFzc3dvcmQ/JyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBmdW5jdGlvbiAocikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBwYXNzd29yZFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB2bS5zaG93RG93bmxvYWRMaW5rV2l0aFBhc3MoaXgpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGp1c3QgZ28gdG8gbGlua1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgZGxQYWdlID0gJy8jL2QvJyArIGYuZmlsZUlkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRsUGFnZSwgJ19ibGFuaycpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgJ1llcycsICdObycpXHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGp1c3Qgb3BlbiB0aGUgcGFnZVxyXG4gICAgICAgIGxldCBkbFBhZ2UgPSAnLyMvZC8nICsgZi5maWxlSWRcclxuICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gICAgICAgc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgLy8gICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgIC8vICAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cclxuICAgICAgLy8gICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0cGFzcy8nICsgZi5maWxlSWQsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgIC8vICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgIC8vICAgICAgICAgICAgIC8vIHBhc3N3b3JkIHNob3VsZCBiZSByZXR1cm5lZFxyXG4gICAgICAvLyAgICAgICAgICAgICBsZXQgZGxQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdICsgJyMvZC8nICsgZi5maWxlSWQgKyAnLycgKyB3aW5kb3cuYnRvYShyZXMuZGF0YSlcclxuICAgICAgLy8gICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKFxyXG4gICAgICAvLyAgICAgICAgICAgICAgIGBcclxuICAgICAgLy8gRG93bmxvYWQgbGluayB3aXRoIHBhc3N3b3JkIGVuY29kZWQ6PGJyPlxyXG4gICAgICAvLyA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHtkbFBhZ2V9XCI+JHtkbFBhZ2V9PC9hPlxyXG4gICAgICAvLyAgICAgICAgICAgICBgLFxyXG4gICAgICAvLyAgICAgICAgICAgICAgICdMaW5rIENyZWF0ZWQnKVxyXG4gICAgICAvLyAgICAgICAgICAgfSlcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgZG93bmxvYWRGaWxlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgZiA9IHRoaXMuZmlsZXNbaXhdXHJcbiAgICAgICAgLy8gdXNlIGZvcmNlIGRvd25sb2FkIHRvIGJ5cGFzcyBwYXNzd29yZFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZmRvd25sb2FkLycgKyBmLmZpbGVJZCArICc/YXBpa2V5PScgKyB0aGlzLiRyb290LnUua2V5XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2tGaWxlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cclxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBwYXNzd29yZCcsICdQYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAvLyBzZW5kIGxvY2sgcmVxdWVzdFxyXG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9sb2NrLycgKyBmLmZpbGVJZCArICchJyArIHIsIHt9LCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcclxuICAgICAgICAgICAgICAgIGYubG9ja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdW5sb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHBhc3N3b3JkIG9uIHRoaXMgZmlsZT8nLCAnQ29uZmlybSBVbmxvY2snLCAocikgPT4ge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgLy8gc2VuZCB1bmxvY2sgcmVxdWVzdFxyXG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS91bmxvY2svJyArIGYuZmlsZUlkLCB7fSwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XHJcbiAgICAgICAgICAgICAgICBmLmxvY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICByZW5hbWVGaWxlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cclxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBuZXcgbmFtZScsICdGaWxlIG5hbWUnLFxyXG4gICAgICAgICAgKHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAvLyBzZW5kIHJlbmFtZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvcmVuYW1lLycgKyBmLmZpbGVJZCArICcvJyArIHIsIHt9LCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgIGYubmFtZSA9IHJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uIChpeCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxyXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmlsZT8gSXQgY2Fubm90IGJlIHJlY292ZXJlZC4nLCAnQ29uZmlybSBEZWxldGUnLFxyXG4gICAgICAgICAgKHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAvLyBzZW5kIGRlbGV0ZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL2RlbGV0ZS8nICsgZi5maWxlSWQsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZXMuc3BsaWNlKGl4LCAxKVxyXG4gICAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlyU3RydWN0dXJlLmZpbGVzLnNwbGljZShpeCwgMSlcclxuICAgICAgICAgICAgICAgICAgLy8gcHJvcGFnYXRlIHRvIGRpcmVjdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgIGlmICh2bS5ub0l0ZW1zKSB7IC8vIGlmIGN1cnJlbnQgZGlyIGlzIGVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGN1cnJlbnQgZGlyIGFuZCBzd2l0Y2ggdG8gcGFyZW50IGRpclxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmRpclN0cnVjdHVyZS5kaXJzID0gdm0uZGlyU3RydWN0dXJlLmRpcnMuZmlsdGVyKGQgPT4gZC5uYW1lICE9PSB2bS5jdXJyZW50RGlyU3RydWN0dXJlLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uZGlyVXBMZXZlbCgpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5EaXI6IGZ1bmN0aW9uIChpeCkge1xyXG4gICAgICAgIGxldCBuZXdEaXJQYXRoID0gdGhpcy5kaXJzW2l4XS5wYXRoXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvRGlyKG5ld0RpclBhdGgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpclVwTGV2ZWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXRSb290RGlyKSB7XHJcbiAgICAgICAgICBsZXQgc2VnbWVudHMgPSB0aGlzLmN1cnJlbnREaXIuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgc2VnbWVudHMgPSBzZWdtZW50cy5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgIHNlZ21lbnRzLnBvcCgpXHJcbiAgICAgICAgICBsZXQgbmV3RGlyUGF0aCA9ICcvJyArIHNlZ21lbnRzLmpvaW4oJy8nKVxyXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvRGlyKG5ld0RpclBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBuYXZpZ2F0ZVRvRGlyOiBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvZmlsZXMnICsgcGF0aClcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlRmlsZXNEaXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHdvcmtpbmdEaXJTdHJ1Y3R1cmUgPSB0aGlzLmN1cnJlbnREaXJTdHJ1Y3R1cmVcclxuICAgICAgICBpZiAoIXdvcmtpbmdEaXJTdHJ1Y3R1cmUpIHJldHVyblxyXG4gICAgICAgIC8vIG5vdyB1cGRhdGUgY29sbGVjdGlvbnNcclxuICAgICAgICB0aGlzLmZpbGVzID0gd29ya2luZ0RpclN0cnVjdHVyZS5maWxlc1xyXG4gICAgICAgIHRoaXMuZGlycyA9IHdvcmtpbmdEaXJTdHJ1Y3R1cmUuZGlyc1xyXG4gICAgICB9LFxyXG4gICAgICBmZXRjaERhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBsb2FkIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZnJvbSBzZXJ2ZXJcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uY3VycmVudERpciA9IHZtLmN1cnJlbnREaXIgfHwgJy8nXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codm0uZGlyKVxyXG4gICAgICAgIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKClcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMnLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vIG1lcmdlIGZpbGUgbGlzdFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB2bS5kaXJTdHJ1Y3R1cmUgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIHZtLnVwZGF0ZUZpbGVzRGlycygpXHJcbiAgICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUdsb2JhbEtleXByZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudFxyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgIC8vIGxlZnRcclxuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAvLyB1cFxyXG4gICAgICAgICAgICAgIHRoaXMuZGlyVXBMZXZlbCgpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAvLyByaWdodFxyXG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5nbygxKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgLy8gZG93blxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgJyRyb3V0ZScgKHRvLCBmcm9tKSB7XHJcbiAgICAgICAgLy8gdXBkYXRlIGN1cnJlbnQgZGlyZWN0b3J5XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpclN0cnVjdHVyZSkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaERhdGEoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnREaXIgPSAnLycgKyAodG8ucGFyYW1zLmRpciB8fCAnJylcclxuICAgICAgICAvLyB0aGlzIHdpbGwgdXBkYXRlIHN0cnVjdHVyZVxyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsZXNEaXJzKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5mZXRjaERhdGEoKVxyXG4gICAgICBkb2N1bWVudC5vbmtleWRvd24gPSB0aGlzLmhhbmRsZUdsb2JhbEtleXByZXNzXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG15RmlsZXNMaXN0LnZ1ZT8yNjM1NzA3NyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCJcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm15LWZpbGVzLWxpc3RcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGVmdCBzZXAtYlwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGxvYWRNb3JlRmlsZXMoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVwbG9hZCBGaWxlc1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkZWQtZmlsZXMtbGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkFsbCBNeSBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmxvYWRGaW5pc2hlZCkgPyBfYygnZGl2JywgWyhfdm0uZXJyb3IpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJFcnJvclwiKV0pXSkgOiAoX3ZtLm5vSXRlbXMpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJObyBGaWxlc1wiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBbKCFfdm0uYXRSb290RGlyKSA/IF9jKCdkaXYnLCBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRpclVwTGV2ZWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiZm9sZGVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgLi4gXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIiBQYXJlbnQgRm9sZGVyIFwiKV0pXSldLCAxKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmRpcnMpLCBmdW5jdGlvbihkaXIsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5vcGVuRGlyKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZvbGRlclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhkaXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIiBGb2xkZXIgXCIpXSldKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5maWxlcyksIGZ1bmN0aW9uKGZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmdldEhyU2l6ZShmaWxlLnNpemUpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoIWZpbGUubG9ja2VkKSA/IF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ubG9ja0ZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibG9ja19vcGVuXCIpXSldLCAxKSA6IF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udW5sb2NrRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJsb2NrXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5kb3dubG9hZEZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZmlsZV9kb3dubG9hZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1hbGlnbi10cmlnZ2VyXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1kLW1lbnUtdHJpZ2dlclwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcIm1vcmVfaG9yaXpcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1jb250ZW50JywgW19jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS52aXNpdERvd25sb2FkUGFnZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEb3dubG9hZCBQYWdlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5yZW5hbWVGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlJlbmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0sIDEpXSwgMSldLCAxKVxuICB9KV0sIDIpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXN0cm9rZVwiOiAxLjUsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJSZXRyaWV2aW5nIERhdGFcIildKV0sIDEpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YzI4NjcwYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiTXkgRmlsZXNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdteUZpbGVzTGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXJcIjogX3ZtLmRpclxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MjM1NmQyMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi04M2MwODEwMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcHJvZmlsZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtODNjMDgxMDIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHJvZmlsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtODNjMDgxMDJcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxccHJvZmlsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwcm9maWxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODNjMDgxMDImc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiZjhjMWJkZTZcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04M2MwODEwMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaHJpbmstbGF5b3V0W2RhdGEtdi04M2MwODEwMl0ge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/NTc3NWJiMDBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJwcm9maWxlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstbGF5b3V0XFxcIj5cXHJcXG4gICAgPCEtLTxpbWcgc3JjPVxcXCIuL2Fzc2V0cy9sb2dvLnBuZ1xcXCI+LS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGludHJvIHZpZXctdGl0bGU9XFxcIlVzZXIgUHJvZmlsZVxcXCI+PC9pbnRybz5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdlbHZlIGNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgICA8bXlQcm9maWxlPjwvbXlQcm9maWxlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcclxcbiAgaW1wb3J0IG15UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL215UHJvZmlsZSdcXHJcXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcXHJcXG5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgIEludHJvLFxcclxcbiAgICAgIG15UHJvZmlsZSxcXHJcXG4gICAgICBkZXZDcmVkaXRzXFxyXFxuICAgIH0sXFxyXFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcXHJcXG4gICAgICBuZXh0KHZtID0+IHtcXHJcXG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcXHJcXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5zaHJpbmstbGF5b3V0IHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTgzYzA4MTAyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxyXG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGludHJvIHZpZXctdGl0bGU9XCJVc2VyIFByb2ZpbGVcIj48L2ludHJvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8bXlQcm9maWxlPjwvbXlQcm9maWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xyXG4gIGltcG9ydCBteVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9teVByb2ZpbGUnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgbXlQcm9maWxlLFxyXG4gICAgICBkZXZDcmVkaXRzXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xyXG4gICAgICBuZXh0KHZtID0+IHtcclxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XHJcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuc2hyaW5rLWxheW91dCB7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcm9maWxlLnZ1ZT81Nzc1YmIwMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1jYTIwOTM4NCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWNhMjA5Mzg0IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtY2EyMDkzODRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcbXlQcm9maWxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG15UHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtY2EyMDkzODQmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIwMzI5NWUyYVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWNhMjA5Mzg0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucC1zZWN0aW9uW2RhdGEtdi1jYTIwOTM4NF0ge1xcclxcbiAgbWFyZ2luLXRvcDogMyU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxyXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWU/M2ZlYzE3MWJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdNQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJteVByb2ZpbGUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm15LXByb2ZpbGUgbGVmdFxcXCI+XFxyXFxuICAgIDxoND5NYW5hZ2UgQWNjb3VudCAoe3sgJHJvb3QudS5uYW1lIH19KTwvaDQ+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInAtc2VjdGlvblxcXCI+XFxyXFxuICAgICAgPGg1PlJlc291cmNlIFVzYWdlPC9oNT5cXHJcXG4gICAgICA8ZGl2IHYtaWY9XFxcInVJbmZvLmxvYWRlZFxcXCI+XFxyXFxuICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgVXNpbmdcXHJcXG4gICAgICAgICAgPGI+e3sgdUluZm8udXNhZ2UgfX08L2I+IG9mIDxiPnt7IHVJbmZvLnF1b3RhIH19PC9iPlxcclxcbiAgICAgICAgPC9wPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgdi1lbHNlPlxcclxcbiAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cXFwiMS41XFxcIiBtZC1pbmRldGVybWluYXRlPjwvbWQtc3Bpbm5lcj5cXHJcXG4gICAgICAgIDxwPlJldHJpZXZpbmcgRGF0YTwvcD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8cD48L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwLXNlY3Rpb25cXFwiPlxcclxcbiAgICAgIDxoNT5BUEk8L2g1PlxcclxcbiAgICAgIDxoNj5BUEkgS2V5OiA8Y29kZT57eyAkcm9vdC51LmtleSB9fTwvY29kZT48L2g2PlxcclxcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLXByaW1hcnkgbWQtcmFpc2VkXFxcIiBAY2xpY2submF0aXZlPVxcXCJnZW5lcmF0ZU5ld0FwaUtleVxcXCI+R2VuZXJhdGUgTmV3PC9tZC1idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwLXNlY3Rpb25cXFwiPlxcclxcbiAgICAgIDxoNT5TZWN1cml0eTwvaDU+XFxyXFxuICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cXFwidHJ5VXBkYXRlUGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZWlnaHQgY29sdW1uc1xcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IHBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwidXBkYXRlUGFzc3dvcmQub2xkXFxcIj48L21kLWlucHV0PlxcclxcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l4IGNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsPk5ldyBQYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXFxcIj48L21kLWlucHV0PlxcclxcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l4IGNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiB2LW1vZGVsPVxcXCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXFxcIj48L21kLWlucHV0PlxcclxcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcImVycm9yLW1lc3NhZ2VcXFwiPnt7IHVwZGF0ZVBhc3N3b3JkLmVyciB9fTwvcD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJpbnZpc2libGVcXFwiPjwvaW5wdXQ+XFxyXFxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidHJ5VXBkYXRlUGFzc3dvcmRcXFwiIDpkaXNhYmxlZD1cXFwiIXVwZGF0ZVBhc3N3b3JkLmVcXFwiPkNoYW5nZSBQYXNzd29yZDwvbWQtYnV0dG9uPlxcclxcbiAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGg1PkRhbmdlciBab25lPC9oNT5cXHJcXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtd2FyblxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQWxsRmlsZXNcXFwiPkRlbGV0ZSBBbGwgRmlsZXM8L21kLWJ1dHRvbj5cXHJcXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtd2FyblxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQWNjb3VudFxcXCI+RGVsZXRlIEFjY291bnQ8L21kLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxyXFxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xcclxcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xcclxcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkOiB7XFxyXFxuICAgICAgICAgIG9sZDogJycsXFxyXFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcXHJcXG4gICAgICAgICAgY29uZmlybTogJycsXFxyXFxuICAgICAgICAgIGVycjogJycsXFxyXFxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHVJbmZvOiB7XFxyXFxuICAgICAgICAgIHF1b3RhOiBudWxsLFxcclxcbiAgICAgICAgICB1c2FnZTogbnVsbCxcXHJcXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIGdlbmVyYXRlTmV3QXBpS2V5OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IGEgbmV3IEFQSSBrZXk/IFRoZSBvbGQgb25lIHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xcclxcbiAgICAgICAgICBpZiAocikge1xcclxcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL25ld2tleScsIHt9LCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxcclxcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAvLyBkb25lXFxyXFxuICAgICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcXHJcXG4gICAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdOZXcgQVBJIGtleSBnZW5lcmF0ZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uJywgJ1N1Y2Nlc3MnKVxcclxcbiAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxcclxcbiAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUFsbEZpbGVzOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IEFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4gWW91IHdpbGwgdGhlbiBiZSBsb2dnZWQgb3V0LicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyKSB7XFxyXFxuICAgICAgICAgIGlmIChyKSB7XFxyXFxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvZmlsZXMnLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxcclxcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xcclxcbiAgICAgICAgICAgICAgICAvLyBmaWxlcyBoYXZlIGJlZW4gbnVrZWQuXFxyXFxuICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIC8vIG5vdyBsb2cgb3V0XFxyXFxuICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xcclxcbiAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBkZWxldGVBY2NvdW50OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IFlvdXIgYWNjb3VudCBhbmQgYWxsIGZpbGVzIHRoYXQgeW91IGhhdmUgdXBsb2FkZWQgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyMSkge1xcclxcbiAgICAgICAgICBpZiAocjEpIHtcXHJcXG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ1lvdXIgYWNjb3VudCB3aWxsIGJlIGRlbGV0ZWQuIEFyZSB5b3UgY2VydGFpbiB5b3Ugd291bGQgbGlrZSB0byBwcm9jZWVkPycpKSB7XFxyXFxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS91c2VyJywgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcXHJcXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xcclxcbiAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgaGFzIGJlZW4gbnVrZWQuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAvLyBub3cgbG9nIG91dFxcclxcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xcclxcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICB0cnlVcGRhdGVQYXNzd29yZDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcclxcbiAgICAgICAgaWYgKCF2bS51cGRhdGVQYXNzd29yZC5lKSByZXR1cm5cXHJcXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxcclxcbiAgICAgICAgaWYgKHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcXHJcXG4gICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXFxyXFxuICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaWYgKHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkICE9PSB2bS51cGRhdGVQYXNzd29yZC5jb25maXJtKSB7XFxyXFxuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXFxyXFxuICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IGZhbHNlXFxyXFxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXFxyXFxuICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAnJ1xcclxcbiAgICAgICAgLy8gc2VuZCB1cGRhdGVQYXNzd29yZCBwb3N0XFxyXFxuICAgICAgICBheGlvcy5wYXRjaCgnL2NoYW5nZXBhc3N3b3JkJywge1xcclxcbiAgICAgICAgICB1c2VybmFtZTogdm0uJHJvb3QudS5uYW1lLFxcclxcbiAgICAgICAgICBvbGRQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQub2xkLFxcclxcbiAgICAgICAgICBuZXdQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmRcXHJcXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcXHJcXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxcclxcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xcclxcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdQYXNzd29yZCBjaGFuZ2Ugc3VjY2VlZGVkISBQbGVhc2UgbG9nIGluIGFnYWluLicpXFxyXFxuICAgICAgICAgICAgICAvLyBsb2cgb3V0XFxyXFxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXFxyXFxuICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxcclxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcXHJcXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXFxyXFxuICAgICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSByZXNwb25zZS5kYXRhXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXFxyXFxuICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXHJcXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcXHJcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxcclxcbiAgICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcXHJcXG4gICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKS5wYXJhbXMuYXBpa2V5ID0gdm0uJHJvb3QudS5rZXlcXHJcXG4gICAgICAvLyBsb2FkIHVzZXIgaW5mb1xcclxcbiAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyaW5mbycsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXFxyXFxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XFxyXFxuICAgICAgICAgIC8vIGZldGNoZWQgZGF0YVxcclxcbiAgICAgICAgICB2bS51SW5mbyA9IHtcXHJcXG4gICAgICAgICAgICBxdW90YTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS5xdW90YSksXFxyXFxuICAgICAgICAgICAgdXNhZ2U6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEudXNhZ2UpLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4ucC1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1jYTIwOTM4NCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibXktcHJvZmlsZSBsZWZ0XCI+XHJcbiAgICA8aDQ+TWFuYWdlIEFjY291bnQgKHt7ICRyb290LnUubmFtZSB9fSk8L2g0PlxyXG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxyXG4gICAgICA8aDU+UmVzb3VyY2UgVXNhZ2U8L2g1PlxyXG4gICAgICA8ZGl2IHYtaWY9XCJ1SW5mby5sb2FkZWRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFVzaW5nXHJcbiAgICAgICAgICA8Yj57eyB1SW5mby51c2FnZSB9fTwvYj4gb2YgPGI+e3sgdUluZm8ucXVvdGEgfX08L2I+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgIDxwPlJldHJpZXZpbmcgRGF0YTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxyXG4gICAgICA8aDU+QVBJPC9oNT5cclxuICAgICAgPGg2PkFQSSBLZXk6IDxjb2RlPnt7ICRyb290LnUua2V5IH19PC9jb2RlPjwvaDY+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLXJhaXNlZFwiIEBjbGljay5uYXRpdmU9XCJnZW5lcmF0ZU5ld0FwaUtleVwiPkdlbmVyYXRlIE5ldzwvbWQtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoNT5TZWN1cml0eTwvaDU+XHJcbiAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlVcGRhdGVQYXNzd29yZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlaWdodCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQub2xkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQuY29uZmlybVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgdXBkYXRlUGFzc3dvcmQuZXJyIH19PC9wPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxyXG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljay5uYXRpdmU9XCJ0cnlVcGRhdGVQYXNzd29yZFwiIDpkaXNhYmxlZD1cIiF1cGRhdGVQYXNzd29yZC5lXCI+Q2hhbmdlIFBhc3N3b3JkPC9tZC1idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGg1PkRhbmdlciBab25lPC9oNT5cclxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC13YXJuXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUFsbEZpbGVzXCI+RGVsZXRlIEFsbCBGaWxlczwvbWQtYnV0dG9uPlxyXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXdhcm5cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQWNjb3VudFwiPkRlbGV0ZSBBY2NvdW50PC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlUGFzc3dvcmQ6IHtcclxuICAgICAgICAgIG9sZDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtOiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVJbmZvOiB7XHJcbiAgICAgICAgICBxdW90YTogbnVsbCxcclxuICAgICAgICAgIHVzYWdlOiBudWxsLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2VuZXJhdGVOZXdBcGlLZXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCBhIG5ldyBBUEkga2V5PyBUaGUgb2xkIG9uZSB3aWxsIG5vIGxvbmdlciB3b3JrLiBZb3Ugd2lsbCB0aGVuIGJlIGxvZ2dlZCBvdXQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL25ld2tleScsIHt9LCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbmVcclxuICAgICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcclxuICAgICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnTmV3IEFQSSBrZXkgZ2VuZXJhdGVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicsICdTdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVBbGxGaWxlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IEFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4gWW91IHdpbGwgdGhlbiBiZSBsb2dnZWQgb3V0LicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS9maWxlcycsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsZXMgaGF2ZSBiZWVuIG51a2VkLlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIG5vdyBsb2cgb3V0XHJcbiAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcclxuICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVBY2NvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IGFic29sdXRlbHkgc3VyZT8gWW91ciBhY2NvdW50IGFuZCBhbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIxKSB7XHJcbiAgICAgICAgICBpZiAocjEpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdZb3VyIGFjY291bnQgd2lsbCBiZSBkZWxldGVkLiBBcmUgeW91IGNlcnRhaW4geW91IHdvdWxkIGxpa2UgdG8gcHJvY2VlZD8nKSkge1xyXG4gICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9udWtlL3VzZXInLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGhhcyBiZWVuIG51a2VkLlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBub3cgbG9nIG91dFxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcclxuICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdHJ5VXBkYXRlUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgaWYgKCF2bS51cGRhdGVQYXNzd29yZC5lKSByZXR1cm5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgY29uZmlybWF0aW9uIGlzIGNvcnJlY3RcclxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkICE9PSB2bS51cGRhdGVQYXNzd29yZC5jb25maXJtKSB7XHJcbiAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAnJ1xyXG4gICAgICAgIC8vIHNlbmQgdXBkYXRlUGFzc3dvcmQgcG9zdFxyXG4gICAgICAgIGF4aW9zLnBhdGNoKCcvY2hhbmdlcGFzc3dvcmQnLCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdm0uJHJvb3QudS5uYW1lLFxyXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLm9sZCxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZFxyXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1Bhc3N3b3JkIGNoYW5nZSBzdWNjZWVkZWQhIFBsZWFzZSBsb2cgaW4gYWdhaW4uJylcclxuICAgICAgICAgICAgICAvLyBsb2cgb3V0XHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWQgYmVjYXVzZSBvZiBlcnJvclxyXG4gICAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcclxuICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxyXG4gICAgICAvLyBsb2FkIHVzZXIgaW5mb1xyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcmluZm8nLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIC8vIGZldGNoZWQgZGF0YVxyXG4gICAgICAgICAgdm0udUluZm8gPSB7XHJcbiAgICAgICAgICAgIHF1b3RhOiB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlcy5kYXRhLnF1b3RhKSxcclxuICAgICAgICAgICAgdXNhZ2U6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEudXNhZ2UpLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucC1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteVByb2ZpbGUudnVlPzNmZWMxNzFiIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXktcHJvZmlsZSBsZWZ0XCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCJNYW5hZ2UgQWNjb3VudCAoXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIilcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlJlc291cmNlIFVzYWdlXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0udUluZm8ubG9hZGVkKSA/IF9jKCdkaXYnLCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBVc2luZ1xcbiAgICAgICAgXCIpLCBfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS51SW5mby51c2FnZSkpXSksIF92bS5fdihcIiBvZiBcIiksIF9jKCdiJywgW192bS5fdihfdm0uX3MoX3ZtLnVJbmZvLnF1b3RhKSldKV0pXSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXN0cm9rZVwiOiAxLjUsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlJldHJpZXZpbmcgRGF0YVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJyldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIkFQSVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiQVBJIEtleTogXCIpLCBfYygnY29kZScsIFtfdm0uX3YoX3ZtLl9zKF92bS4kcm9vdC51LmtleSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5IG1kLXJhaXNlZFwiLFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZ2VuZXJhdGVOZXdBcGlLZXkoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkdlbmVyYXRlIE5ld1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWN0aW9uXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJTZWN1cml0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5VXBkYXRlUGFzc3dvcmQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZWlnaHQgY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDdXJyZW50IHBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5vbGQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5vbGRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQub2xkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIk5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnNcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5jb25maXJtKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5jb25maXJtID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cGRhdGVQYXNzd29yZC5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0udXBkYXRlUGFzc3dvcmQuZVxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cnlVcGRhdGVQYXNzd29yZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2hhbmdlIFBhc3N3b3JkXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNScsIFtfdm0uX3YoXCJEYW5nZXIgWm9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC13YXJuXCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZWxldGVBbGxGaWxlcygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVsZXRlIEFsbCBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC13YXJuXCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZWxldGVBY2NvdW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWNjb3VudFwiKV0pXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jYTIwOTM4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIlVzZXIgUHJvZmlsZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnbXlQcm9maWxlJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04M2MwODEwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by0xMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4nKSwgbG9jYWwoJ1JvYm90by1UaGluJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tMTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBUaGluIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLVRoaW5JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0SXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by1pdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkJyksIGxvY2FsKCdSb2JvdG8tQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTcwMGl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1Cb2xkSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tOTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjayBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1CbGFja0l0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTkwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgTGlnaHQnKSwgbG9jYWwoJ1JhbGV3YXktTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5JyksIGxvY2FsKCdSYWxld2F5LVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBNZWRpdW0nKSwgbG9jYWwoJ1JhbGV3YXktTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNjAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IFNlbWlCb2xkJyksIGxvY2FsKCdSYWxld2F5LVNlbWlCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTgwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC44Y2U1OTg4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAuNjU0Y2I0ZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy5hY2VlMGVhLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMuNDJkZTg5OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC4xNmRkYjE1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAuZWNjZTkyZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy4zZGRiNzQ4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMuNGQwOGRhZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuN2UzNjdiZS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuMTZlMWQ5My53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuOTg0YWUzNy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLjFlNjVlN2Uud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuYmI0NzRmMS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC41N2FmNjRmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZlxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy45ZTdiZWVlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLmI2NzA2OTQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLjBkN2U3MWYud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuNTI1ZDViNC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuNzM5NGNhOS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy5hZDBlNzRmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy40ZmFlYzgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLjNiOTU5MGUud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLmY0ZThkYzUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZGU5ODRjMC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLmU3NDZlMDMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC43OGRkNWFiLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci45MTA2NDM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci4yOTBlZTM4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC5lNWEzMjEyLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuODFlOTU1OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5jZDkwMzkyLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAuYTRiNmYxNy53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC4wNmYxYzg2LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAuYzg2NGQ4NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC4wNDFhNGI4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMmEzYTljZi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIpICsgXCIpO1xcbiAgICAvKiBGb3IgSUU2LTggKi9cXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSwgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmU3OWJmZDguZW90XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3Rcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLjU3MGViODMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci4wMTJjZjZhLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmEzN2IwYzAudHRmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogU2tlbGV0b24gVjIuMC40XFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiogMTIvMjkvMjAxNFxcbiovXFxuXFxuXFxuLyogVGFibGUgb2YgY29udGVudHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXG4tIEdyaWRcXG4tIEJhc2UgU3R5bGVzXFxuLSBUeXBvZ3JhcGh5XFxuLSBMaW5rc1xcbi0gQnV0dG9uc1xcbi0gRm9ybXNcXG4tIExpc3RzXFxuLSBDb2RlXFxuLSBUYWJsZXNcXG4tIFNwYWNpbmdcXG4tIFV0aWxpdGllc1xcbi0gQ2xlYXJpbmdcXG4tIE1lZGlhIFF1ZXJpZXNcXG4qL1xcblxcblxcbi8qIEdyaWRcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5jb2x1bW4sXFxuLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAuY29sdW1uLFxcbiAgLmNvbHVtbnMge1xcbiAgICBtYXJnaW4tbGVmdDogNCU7IH1cXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLmNvbHVtbixcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxuXFxuICAvKiBPZmZzZXRzICovXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcblxcbn1cXG5cXG5cXG4vKiBCYXNlIFN0eWxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qIE5PVEVcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIyMjsgfVxcblxcblxcbi8qIFR5cG9ncmFwaHlcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG5cXG4vKiBMaW5rc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmEge1xcbiAgY29sb3I6ICMxRUFFREI7IH1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjMEZBMENFOyB9XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IH1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgfVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgfVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxucCxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfSovXFxuXFxuXFxuLyogVXRpbGl0aWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLnUtZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1tYXgtZnVsbC13aWR0aCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG4udS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG5cXG4vKiBNaXNjXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaHIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxuXFxuXFxuLyogQ2xlYXJpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5cXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxuLmNvbnRhaW5lcjphZnRlcixcXG4ucm93OmFmdGVyLFxcbi51LWNmIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDsgfVxcblxcblxcbi8qIE1lZGlhIFF1ZXJpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKlxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxudGhlcmUuXFxuKi9cXG5cXG5cXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLW1hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLW1hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuKiBWdWUgTWF0ZXJpYWwgdjAuNy4xXFxuKiBNYWRlIHdpdGggbG92ZSBieSBNYXJjb3MgTW91cmFcXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cXG4qLy5tZC1pbmstcmlwcGxle3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowOy13ZWJraXQtbWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCNmZmYgMTAwJSwjMDAwIDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKX0ubWQtcmlwcGxle3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6LjI7dHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjpub25lO3dpbGwtY2hhbmdlOmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSx0cmFuc2Zvcm0sd2lkdGgsaGVpZ2h0LHRvcCxsZWZ0fS5tZC1yaXBwbGUubWQtYWN0aXZle2FuaW1hdGlvbjphIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIGZvcndhcmRzfS5tZC1yaXBwbGUubWQtYWN0aXZlLm1kLWZhZGVvdXR7b3BhY2l0eTowIWltcG9ydGFudDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouNnN9QGtleWZyYW1lcyBhe3Rve3RyYW5zZm9ybTpzY2FsZSgyLjIpIHRyYW5zbGF0ZVooMCl9fWh0bWx7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94fWh0bWwgKixodG1sIDphZnRlcixodG1sIDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fWJvZHl7bWluLWhlaWdodDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtmb250LWZhbWlseTpSb2JvdG8sTm90byBTYW5zLE5vdG8sc2Fucy1zZXJpZn11bDpub3QoLm1kLWxpc3QpPmxpK2xpe21hcmdpbi10b3A6OHB4fWF1ZGlvLGNhbnZhcyxlbWJlZCxpZnJhbWUsaW1nLG9iamVjdCxzdmcsdmlkZW97bWF4LXdpZHRoOjEwMCU7Zm9udC1zdHlsZTppdGFsaWM7dmVydGljYWwtYWxpZ246bWlkZGxlfWF1ZGlvOm5vdCgubWQtaW1hZ2UpLGNhbnZhczpub3QoLm1kLWltYWdlKSxlbWJlZDpub3QoLm1kLWltYWdlKSxpZnJhbWU6bm90KC5tZC1pbWFnZSksaW1nOm5vdCgubWQtaW1hZ2UpLG9iamVjdDpub3QoLm1kLWltYWdlKSxzdmc6bm90KC5tZC1pbWFnZSksdmlkZW86bm90KC5tZC1pbWFnZSl7aGVpZ2h0OmF1dG99W3RhYmluZGV4PVxcXCItMVxcXCJdOmZvY3Vze291dGxpbmU6bm9uZSFpbXBvcnRhbnR9Lm1kLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIsLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym94LXNoYWRvdzppbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpfS5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyLC5tZC1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhcjpob3Zlcntib3gtc2hhZG93Omluc2V0IDFweCAxcHggMCByZ2JhKDAsMCwwLC4wNTQpLGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjAzOCk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wODcpfS5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiwubWQtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9ue2Rpc3BsYXk6bm9uZX0ubWQtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIsLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLC5tZC1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtib3gtc2hhZG93Omluc2V0IDFweCAxcHggMCByZ2JhKDAsMCwwLC4wNTQpLGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjA4Nyk7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWNhcHRpb257Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wMmVtO2xpbmUtaGVpZ2h0OjE3cHh9Lm1kLWJvZHktMSxib2R5e2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyMHB4fS5tZC1ib2R5LTEsLm1kLWJvZHktMixib2R5e2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wMWVtfS5tZC1ib2R5LTJ7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjI0cHh9Lm1kLXN1YmhlYWRpbmd7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wMWVtO2xpbmUtaGVpZ2h0OjI0cHh9Lm1kLXRpdGxle2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouMDA1ZW07bGluZS1oZWlnaHQ6MjZweH0ubWQtaGVhZGxpbmV7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH0ubWQtZGlzcGxheS0xLC5tZC1oZWFkbGluZXtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6MH0ubWQtZGlzcGxheS0xe2ZvbnQtc2l6ZTozNHB4O2xpbmUtaGVpZ2h0OjQwcHh9Lm1kLWRpc3BsYXktMntmb250LXNpemU6NDVweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6MDtsaW5lLWhlaWdodDo0OHB4fS5tZC1kaXNwbGF5LTN7Zm9udC1zaXplOjU2cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi0uMDA1ZW07bGluZS1oZWlnaHQ6NThweH0ubWQtZGlzcGxheS00e2ZvbnQtc2l6ZToxMTJweDtmb250LXdlaWdodDozMDA7bGV0dGVyLXNwYWNpbmc6LS4wMWVtO2xpbmUtaGVpZ2h0OjExMnB4fWE6bm90KC5tZC1idXR0b24pOm5vdCgubWQtYm90dG9tLWJhci1pdGVtKXt0ZXh0LWRlY29yYXRpb246bm9uZX1hOm5vdCgubWQtYnV0dG9uKTpub3QoLm1kLWJvdHRvbS1iYXItaXRlbSk6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1idXR0b246Zm9jdXN7b3V0bGluZTpub25lfS5tZC1hdmF0YXJ7d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bWFyZ2luOmF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjQwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1hdmF0YXIubWQtbGFyZ2V7d2lkdGg6NjRweDttaW4td2lkdGg6NjRweDtoZWlnaHQ6NjRweDttaW4taGVpZ2h0OjY0cHg7Ym9yZGVyLXJhZGl1czo2NHB4fS5tZC1hdmF0YXIubWQtbGFyZ2UgLm1kLWljb257d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6NDBweH0ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb24gLm1kLWljb257Y29sb3I6I2ZmZn0ubWQtYXZhdGFyIC5tZC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1hdmF0YXIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja30ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTAlfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjY7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWJhY2tkcm9wLm1kLWFjdGl2ZXtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtYmFja2Ryb3AubWQtdHJhbnNwYXJlbnR7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMDUpfS5tZC1ib3R0b20tYmFye3dpZHRoOjEwMCU7bWluLXdpZHRoOjEwMCU7aGVpZ2h0OjU2cHg7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1ib3R0b20tYmFyLC5tZC1ib3R0b20tYmFyLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJvdHRvbS1iYXItaXRlbXttYXgtd2lkdGg6MTY4cHg7bWluLXdpZHRoOjgwcHg7aGVpZ2h0OjEwMCU7cGFkZGluZzo4cHggMTJweCAxMHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleDoxO2ZsZXg6MTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjFlbTt0ZXh0LWRlY29yYXRpb246bm9uZX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZXtwYWRkaW5nLXRvcDo2cHh9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCl9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7Y29sb3I6Y3VycmVudENvbG9yfS5tZC1ib3R0b20tYmFyLWl0ZW1bZGlzYWJsZWRde29wYWNpdHk6LjM4fS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW17bWluLXdpZHRoOjU2cHg7bWF4LXdpZHRoOjk2cHg7cG9zaXRpb246c3RhdGljOy1tcy1mbGV4OjEgMSAzMnB4O2ZsZXg6MSAxIDMycHg7dHJhbnNpdGlvbjouNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGg7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGgsLW1zLWZsZXh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw4cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsNnB4LDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle21pbi13aWR0aDo5NnB4O21heC13aWR0aDoxNjhweDstbXMtZmxleDoxIDEgNzJweDtmbGV4OjEgMSA3MnB4fS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLC5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e29wYWNpdHk6MX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbnt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwycHgsMCl9Lm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoLjg1NzEpIHRyYW5zbGF0ZVkoMnB4KTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksY29sb3IgLjE1cyBsaW5lYXIsb3BhY2l0eSAuMTVzIGxpbmVhcn0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMTVzIGxpbmVhcn0ubWQtYnV0dG9ue21pbi13aWR0aDo4OHB4O21pbi1oZWlnaHQ6MzZweDttYXJnaW46NnB4IDhweDtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjJweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzppbmhlcml0O2xpbmUtaGVpZ2h0OjM2cHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOnRvcDt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLWJ1dHRvbiwubWQtYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pLm1kLXJhaXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNjAlLC40KX0ubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSl7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1kZW5zZXttaW4taGVpZ2h0OjMycHg7bGluZS1oZWlnaHQ6MzJweDtmb250LXNpemU6MTNweH0ubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiwubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21hcmdpbjowIDZweDtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDoyNHB4fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQ6bm9uZX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uLm1kLWRlbnNle3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4O3BhZGRpbmc6NHB4O2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjUwJX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYnV0dG9uLm1kLWZhYnt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O3BhZGRpbmc6MDttaW4td2lkdGg6MDtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJhZGl1czo1NnB4O2xpbmUtaGVpZ2h0OjU2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsYm94LXNoYWRvdyx0cmFuc2Zvcm19Lm1kLWJ1dHRvbi5tZC1mYWI6Zm9jdXMsLm1kLWJ1dHRvbi5tZC1mYWI6aG92ZXJ7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b24ubWQtZmFiLm1kLW1pbml7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTZweH0ubWQtYnV0dG9uW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIsLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYntib3gtc2hhZG93Om5vbmV9Lm1kLWJ1dHRvbjphZnRlcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3ZlcmZsb3c6aGlkZGVufS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257ZGlzcGxheTpibG9ja30ubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyLC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0LC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCwubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLC5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0LC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCwubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLWNlbnRlciwubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLWxlZnQsLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1yaWdodCwubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLWNlbnRlciwubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLWxlZnQsLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1yaWdodHttYXJnaW46MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjR9Lm1kLWZhYi5tZC1mYWItdG9wLWxlZnQsLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1sZWZ0e3RvcDoyNHB4O2xlZnQ6MjRweH0ubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLC5tZC1zcGVlZC1kaWFsLm1kLWZhYi10b3AtY2VudGVye3RvcDoyNHB4O2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfS5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCwubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLXJpZ2h0e3RvcDoyNHB4O3JpZ2h0OjI0cHh9Lm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQsLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1sZWZ0e2JvdHRvbToyNHB4O2xlZnQ6MjRweH0ubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyLC5tZC1zcGVlZC1kaWFsLm1kLWZhYi1ib3R0b20tY2VudGVye2JvdHRvbToyNHB4O2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfS5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCwubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLXJpZ2h0e3JpZ2h0OjI0cHg7Ym90dG9tOjI0cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LThweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9te21hcmdpbi10b3A6OHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LThweH0ubWQtYnV0dG9uLXRvZ2dsZXt3aWR0aDphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b257bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci13aWR0aDoxcHggMCAxcHggMXB4O2JvcmRlci1yYWRpdXM6MDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpsYXN0LWNoaWxke2JvcmRlci1yaWdodC13aWR0aDoxcHg7Ym9yZGVyLXJhZGl1czowIDJweCAycHggMH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b24gLm1kLWluay1yaXBwbGUsLm1kLWNhcmR7Ym9yZGVyLXJhZGl1czoycHh9Lm1kLWNhcmR7b3ZlcmZsb3c6YXV0bztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWNhcmQubWQtd2l0aC1ob3ZlcntjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3gtc2hhZG93fS5tZC1jYXJkLm1kLXdpdGgtaG92ZXI6aG92ZXJ7ei1pbmRleDoyO2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05e292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05OmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjU2LjI1JTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0ze292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTM6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NzUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMXtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xOmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjEwMCU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTEgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtaGVhZGVye3BhZGRpbmctdG9wOjI0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtY29udGVudDpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgaW1ne3dpZHRoOjEwMCV9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVye3BhZGRpbmc6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQ+Lm1kLWNhcmQtaGVhZGVyLXRleHQ+Lm1kLXRpdGxlOmZpcnN0LWNoaWxkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyLm1kLWNhcmQtaGVhZGVyLWZsZXh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1jb250ZW50e3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnM6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nOjAgOHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFye21hcmdpbi1yaWdodDoxNnB4O2Zsb2F0OmxlZnR9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC10aXRsZXtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDotNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1oZWFkZXItdGV4dHstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWF7d2lkdGg6ODBweDstbXMtZmxleDowIDAgODBweDtmbGV4OjAgMCA4MHB4O2hlaWdodDo4MHB4O21hcmdpbi1sZWZ0OjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bXt3aWR0aDoxMjBweDstbXMtZmxleDowIDAgMTIwcHg7ZmxleDowIDAgMTIwcHg7aGVpZ2h0OjEyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWd7d2lkdGg6MTYwcHg7LW1zLWZsZXg6MCAwIDE2MHB4O2ZsZXg6MCAwIDE2MHB4O2hlaWdodDoxNjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCwubWQtY2FyZCAubWQtc3ViaGVhZGluZywubWQtY2FyZCAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6NDAwfS5tZC1jYXJkIC5tZC1zdWJoZWFke29wYWNpdHk6LjU0O2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wMWVtO2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNhcmQgLm1kLXN1YmhlYWQrLm1kLXRpdGxle21hcmdpbi10b3A6NHB4fS5tZC1jYXJkIC5tZC10aXRsZXtmb250LXNpemU6MjRweDtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9uc3twYWRkaW5nOjE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtbWVkaWF7bWF4LXdpZHRoOjI0MHB4O21heC1oZWlnaHQ6MjQwcHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25ze21hcmdpbi1sZWZ0OjE2cHg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luOjhweCAwIDB9Lm1kLWNhcmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjJweH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MjRweH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmc6OHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtYXJlYSwubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCl7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOmFmdGVye2hlaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWQtaW5zZXQpOmFmdGVye3JpZ2h0OjA7bGVmdDowfS5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlcntyaWdodDoxNnB4O2xlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3Zlcntwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyLm1kLXRleHQtc2NyaW0gLm1kLWNhcmQtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWFyZWF7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLXN1YmhlYWR7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZHtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSAubWQtY2FyZC1jb250ZW50e21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjA7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7d2lsbC1jaGFuZ2U6bWFyZ2lufS5tZC1jaGVja2JveHt3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3Jle3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtib3JkZXItcmFkaXVzOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye3dpZHRoOjZweDtoZWlnaHQ6MTNweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjVweDtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXRvcDowO2JvcmRlci1sZWZ0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHNjYWxlM0QoLjE1LC4xNSwxKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3dpZHRoOjQ4cHghaW1wb3J0YW50O2hlaWdodDo0OHB4IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1sYWJlbHtoZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6OHB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNoZWNrYm94Lm1kLWNoZWNrZWQgLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcntvcGFjaXR5OjE7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1jaGlwe2hlaWdodDozMnB4O3BhZGRpbmc6OHB4IDEycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czozMnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNnB4O3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtY2hpcC5tZC1kZWxldGFibGV7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1yaWdodDozMnB4fS5tZC1jaGlwOmFjdGl2ZSwubWQtY2hpcDpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWNoaXA6YWN0aXZlOm5vdCgubWQtZGlzYWJsZWQpLC5tZC1jaGlwOmZvY3VzOm5vdCgubWQtZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyO2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC1jaGlwLm1kLWRpc2FibGVkIC5tZC1idXR0b257cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6ZGVmYXVsdH0ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZXt3aWR0aDoyNHB4O21pbi13aWR0aDoyNHB4O2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjRweDtyaWdodDo0cHg7Ym9yZGVyLXJhZGl1czoyNHB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtaWNvbnt3aWR0aDoyMHB4O21pbi13aWR0aDoyMHB4O2hlaWdodDoyMHB4O21pbi1oZWlnaHQ6MjBweDttYXJnaW46MDtmb250LXNpemU6MjBweH0ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjMycHh9Lm1kLWNoaXAgLm1kLWJ1dHRvbi5tZC1kZWxldGUgLm1kLXJpcHBsZXtvcGFjaXR5Oi41NH0ubWQtY2hpcHMgLm1kLWNoaXB7bWFyZ2luLXJpZ2h0OjhweDttYXJnaW4tYm90dG9tOjRweH0ubWQtY2hpcHMgLm1kLWlucHV0LWNvbnRhaW5lcnttaW4taGVpZ2h0OjU0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5tZC1jaGlwcyAubWQtaW5wdXR7d2lkdGg6MTI4cHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWRpYWxvZy1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojh9Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIC5tZC1kaWFsb2d7b3BhY2l0eToxIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2ctYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo5fS5tZC1kaWFsb2d7bWluLXdpZHRoOjI4MHB4O21heC13aWR0aDo4MCU7bWF4LWhlaWdodDo4MCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxMDtvdXRsaW5lOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7b3BhY2l0eTowO2JveC1zaGFkb3c6MCA3cHggOXB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNnB4IDRweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNmb3JtOnNjYWxlKC45LC44NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2cubWQtcmVmZXJlbmNle3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcn0ubWQtZGlhbG9nLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLWRpYWxvZyBwe21hcmdpbjowfS5tZC1kaWFsb2ctdGl0bGV7bWFyZ2luLWJvdHRvbToyMHB4O3BhZGRpbmc6MjRweCAyNHB4IDB9Lm1kLWRpYWxvZy1jb250ZW50e3BhZGRpbmc6MCAyNHB4IDI0cHg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6YXV0bztmbGV4LWJhc2lzOmF1dG87b3ZlcmZsb3c6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsI2ZmZiwjZmZmIDFweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMGRlZywjZmZmLCNmZmYgM3B4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgwLDAsMCwuMTIpLHJnYmEoMCwwLDAsLjEyKSAxcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgwLDAsMCwuMikgMXB4LHJnYmEoMCwwLDAsLjIpIDJweCx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWwsbG9jYWwsc2Nyb2xsLHNjcm9sbH0ubWQtZGlhbG9nLWNvbnRlbnQ6Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MjRweH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpmaXJzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpe21hcmdpbi10b3A6MH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpsYXN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLWJvdHRvbTowfS5tZC1kaWFsb2ctYm9keXttYXJnaW46MCAtMjRweDtwYWRkaW5nOjAgMjRweDtvdmVyZmxvdzphdXRvfS5tZC1kaWFsb2ctYWN0aW9uc3ttaW4taGVpZ2h0OjUycHg7cGFkZGluZzo4cHggOHB4IDhweCAyNHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1kaWFsb2ctYWN0aW9uczpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTFweDtyaWdodDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWRpYWxvZy1hY3Rpb25zIC5tZC1idXR0b257bWluLXdpZHRoOjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDhweH0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjhweH0ubWQtZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1kaXZpZGVyLm1kLWluc2V0e21hcmdpbi1sZWZ0OjcycHh9Lm1kLWZpbGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWZpbGUgaW5wdXRbdHlwZT1maWxlXXt3aWR0aDoxcHg7aGVpZ2h0OjFweDttYXJnaW46LTFweDtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO2NsaXA6cmVjdCgwIDAgMCAwKTtib3JkZXI6MH0ubWQtZmlsZSAubWQtaWNvbntjdXJzb3I6cG9pbnRlcn0ubWQtaWNvbnt3aWR0aDoyNHB4O21pbi13aWR0aDoyNHB4O2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDtmb250LXNpemU6MjRweDttYXJnaW46YXV0bztkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDpjdXJyZW50Q29sb3I7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtaWNvbi5tZC1zaXplLTJ4e3dpZHRoOjQ4cHg7bWluLXdpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7bWluLWhlaWdodDo0OHB4O2ZvbnQtc2l6ZTo0OHB4fS5tZC1pY29uLm1kLXNpemUtM3h7d2lkdGg6NzJweDttaW4td2lkdGg6NzJweDtoZWlnaHQ6NzJweDttaW4taGVpZ2h0OjcycHg7Zm9udC1zaXplOjcycHh9Lm1kLWljb24ubWQtc2l6ZS00eHt3aWR0aDo5NnB4O21pbi13aWR0aDo5NnB4O2hlaWdodDo5NnB4O21pbi1oZWlnaHQ6OTZweDtmb250LXNpemU6OTZweH0ubWQtaWNvbi5tZC1zaXplLTV4e3dpZHRoOjEyMHB4O21pbi13aWR0aDoxMjBweDtoZWlnaHQ6MTIwcHg7bWluLWhlaWdodDoxMjBweDtmb250LXNpemU6MTIwcHh9Lm1kLWljb24gc3Zne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9aW1nLm1kLWljb257LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1kcmFnOm5vbmV9Lm1kLWltYWdle29wYWNpdHk6MDstd2Via2l0LWZpbHRlcjpzYXR1cmF0ZSgyMCUpO2ZpbHRlcjpzYXR1cmF0ZSgyMCUpfS5tZC1pbWFnZS5tZC1ibGFjay1vdXRwdXR7LXdlYmtpdC1maWx0ZXI6YnJpZ2h0bmVzcyguNCkgc2F0dXJhdGUoMjAlKTtmaWx0ZXI6YnJpZ2h0bmVzcyguNCkgc2F0dXJhdGUoMjAlKX0ubWQtaW1hZ2UubWQtbG9hZGVke29wYWNpdHk6MTstd2Via2l0LWZpbHRlcjpzYXR1cmF0ZSgxMDAlKTtmaWx0ZXI6c2F0dXJhdGUoMTAwJSk7dHJhbnNpdGlvbjpvcGFjaXR5IDEuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksLXdlYmtpdC1maWx0ZXIgMi4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IDEuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksZmlsdGVyIDIuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgLjNzO3RyYW5zaXRpb246b3BhY2l0eSAxLjFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGZpbHRlciAyLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4zcywtd2Via2l0LWZpbHRlciAyLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4zc30ubWQtaW5wdXQtY29udGFpbmVye3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O21hcmdpbjo0cHggMCAyNHB4O3BhZGRpbmctdG9wOjE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlcntoZWlnaHQ6MXB4O3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlciwubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbHt0b3A6MjNweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrOy1tcy1mbGV4OjE7ZmxleDoxO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmb250LXNpemU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFweDtsaW5lLWhlaWdodDozMnB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDt0ZXh0LXNoYWRvdzpub25lOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOmluaXRpYWx9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dH4ubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhfi5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpe21hcmdpbi1sZWZ0OjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dH4ubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlciwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhfi5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVye3JpZ2h0OjA7bGVmdDphdXRvfS5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7bWluLWhlaWdodDozMnB4O21heC1oZWlnaHQ6MjMwcHg7cGFkZGluZzo1cHggMDtyZXNpemU6bm9uZTtsaW5lLWhlaWdodDoxLjNlbX0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCwubWQtaW5wdXQtY29udGFpbmVyIC5tZC1lcnJvcntoZWlnaHQ6MjBweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTIycHg7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3J7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7bGVmdDowO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtOHB4LDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKX0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudHtyaWdodDowfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSl7bWFyZ2luOjRweCBhdXRvO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlcnt3aWR0aDozNnB4O2hlaWdodDoycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowO3otaW5kZXg6Mjtjb250ZW50OlxcXCJcXFwifS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSl+bGFiZWx7bGVmdDozNnB4fS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSl+Lm1kLWZpbGUsLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKX4ubWQtaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKX4ubWQtdGV4dGFyZWF7bWFyZ2luLWxlZnQ6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGxhYmVse3BvaW50ZXItZXZlbnRzOmF1dG87dG9wOjEwcHg7b3BhY2l0eTowO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciB0ZXh0YXJlYXtmb250LXNpemU6MTZweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBsYWJlbCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgbGFiZWx7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MDtvcGFjaXR5OjE7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgdGV4dGFyZWEsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCB0ZXh0YXJlYXtmb250LXNpemU6MTZweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUgbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZS5tZC1pbnB1dC1mb2N1c2VkIGxhYmVse3RvcDoyM3B4O2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWhhcy12YWx1ZSBsYWJlbHtvcGFjaXR5OjB9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZDphZnRlcntiYWNrZ3JvdW5kOjAgMTAwJSByZXBlYXQteDtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDAsMCwwLC4zOCkscmdiYSgwLDAsMCwuMzgpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDFweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgbGFiZWwsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCB0ZXh0YXJlYXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQubWQtaW5wdXQtZm9jdXNlZCAubWQtdG9nZ2xlLXBhc3N3b3Jke2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3Jke21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOi0ycHg7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmQgLm1kLWluay1yaXBwbGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW52YWxpZCAubWQtZXJyb3J7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcmVxdWlyZWQgbGFiZWw6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDJweCkpO2NvbnRlbnQ6XFxcIipcXFwiO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjFlbTt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtc2VsZWN0OmhvdmVyIC5tZC1zZWxlY3Q6bm90KC5tZC1kaXNhYmxlZCk6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1sYXlvdXR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4OjE7ZmxleDoxfS5tZC1yb3d7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbnstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lcnt3aWR0aDoxMDAlO21heC13aWR0aDoxMjAwcHh9Lm1kLWxheW91dC5tZC1jb250YWluZXIubWQtY2VudGVyZWR7bWFyZ2luOjAgYXV0b30ubWQtYWxpZ24tc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoxMnB4fS5tZC1ndXR0ZXIgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1ib3R0b206LTEycHh9Lm1kLWd1dHRlciAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4fS5tZC1ndXR0ZXItODpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi00cHg7bWFyZ2luLWxlZnQ6LTRweH0ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo0cHg7cGFkZGluZy1sZWZ0OjRweH0ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbnttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWJvdHRvbTotNHB4fS5tZC1ndXR0ZXItOCAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6NHB4O3BhZGRpbmctYm90dG9tOjRweH0ubWQtZ3V0dGVyLTE2Om5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LThweDttYXJnaW4tbGVmdDotOHB4fS5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy1sZWZ0OjhweH0ubWQtZ3V0dGVyLTE2IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotOHB4O21hcmdpbi1ib3R0b206LThweH0ubWQtZ3V0dGVyLTE2IC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotMTJweDttYXJnaW4tbGVmdDotMTJweH0ubWQtZ3V0dGVyLTI0Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6MTJweDtwYWRkaW5nLWxlZnQ6MTJweH0ubWQtZ3V0dGVyLTI0IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotMTJweDttYXJnaW4tYm90dG9tOi0xMnB4fS5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweH0ubWQtZ3V0dGVyLTQwOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTIwcHg7bWFyZ2luLWxlZnQ6LTIwcHh9Lm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjIwcHh9Lm1kLWd1dHRlci00MCAubWQtY29sdW1ue21hcmdpbi10b3A6LTIwcHg7bWFyZ2luLWJvdHRvbTotMjBweH0ubWQtZ3V0dGVyLTQwIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHh9Lm1kLWZsZXh7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX1AbWVkaWEgKG1heC13aWR0aDo5NDRweCl7Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctbGVmdDo4cHh9Lm1kLWd1dHRlciAubWQtY29sdW1ue21hcmdpbi10b3A6LThweDttYXJnaW4tYm90dG9tOi04cHh9Lm1kLWd1dHRlciAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWQtcm93LXNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tc21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgtc21hbGx7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LXNtYWxsLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtc21hbGwtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtc21hbGwtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LXNtYWxsLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC1zbWFsbC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtc21hbGwtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LXNtYWxsLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC1zbWFsbC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtc21hbGwtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LXNtYWxsLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC1zbWFsbC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtc21hbGwtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LXNtYWxsLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC1zbWFsbC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtc21hbGwtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LXNtYWxsLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC1zbWFsbC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtc21hbGwtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LXNtYWxsLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC1zbWFsbC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtc21hbGwtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LXNtYWxsLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24tc21hbGwtc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tc21hbGwtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLXNtYWxsLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUtc21hbGx7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDoxOTA0cHgpey5tZC1yb3cteGxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4teGxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXhsYXJnZXstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgteGxhcmdlLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgteGxhcmdlLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgteGxhcmdlLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgteGxhcmdlLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgteGxhcmdlLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgteGxhcmdlLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgteGxhcmdlLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgteGxhcmdlLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgteGxhcmdlLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgteGxhcmdlLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgteGxhcmdlLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgteGxhcmdlLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgteGxhcmdlLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgteGxhcmdlLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgteGxhcmdlLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgteGxhcmdlLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgteGxhcmdlLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgteGxhcmdlLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgteGxhcmdlLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgteGxhcmdlLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgteGxhcmdlLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgteGxhcmdlLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLXhsYXJnZS1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi14bGFyZ2UtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLXhsYXJnZS1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLXhsYXJnZXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjE5MDNweCl7Lm1kLXJvdy1sYXJnZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLWxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LWxhcmdley1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1sYXJnZS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LWxhcmdlLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LWxhcmdlLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1sYXJnZS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbGFyZ2UtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LWxhcmdlLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1sYXJnZS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbGFyZ2UtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LWxhcmdlLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1sYXJnZS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbGFyZ2UtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LWxhcmdlLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1sYXJnZS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbGFyZ2UtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LWxhcmdlLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1sYXJnZS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbGFyZ2UtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LWxhcmdlLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1sYXJnZS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbGFyZ2UtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LWxhcmdlLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1sYXJnZS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLWxhcmdlLXN0YXJ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLWFsaWduLWxhcmdlLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1hbGlnbi1sYXJnZS1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLWxhcmdle2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6MTI2NHB4KXsubWQtcm93LW1lZGl1bXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLW1lZGl1bXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1tZWRpdW17LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LW1lZGl1bS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LW1lZGl1bS02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LW1lZGl1bS01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LW1lZGl1bS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LW1lZGl1bS0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LW1lZGl1bS0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LW1lZGl1bS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LW1lZGl1bS0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LW1lZGl1bS0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LW1lZGl1bS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LW1lZGl1bS00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LW1lZGl1bS01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LW1lZGl1bS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LW1lZGl1bS02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LW1lZGl1bS02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LW1lZGl1bS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LW1lZGl1bS03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LW1lZGl1bS04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LW1lZGl1bS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LW1lZGl1bS05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LW1lZGl1bS05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LW1lZGl1bS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1hbGlnbi1tZWRpdW0tc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tbWVkaXVtLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1hbGlnbi1tZWRpdW0tZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtaGlkZS1tZWRpdW17ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7Lm1kLXJvdy14c21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi14c21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgteHNtYWxsey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC14c21hbGwtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC14c21hbGwtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC14c21hbGwtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC14c21hbGwtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC14c21hbGwtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC14c21hbGwtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC14c21hbGwtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC14c21hbGwtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC14c21hbGwtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC14c21hbGwtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC14c21hbGwtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC14c21hbGwtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC14c21hbGwtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC14c21hbGwtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC14c21hbGwtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC14c21hbGwtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC14c21hbGwtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC14c21hbGwtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC14c21hbGwtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC14c21hbGwtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC14c21hbGwtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC14c21hbGwtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24teHNtYWxsLXN0YXJ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLWFsaWduLXhzbWFsbC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24teHNtYWxsLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUteHNtYWxse2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6MTI2NHB4KXsubWQtcm93LWxhcmdlLWFuZC11cHstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLWxhcmdlLWFuZC11cHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1sYXJnZS1hbmQtdXB7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LWxhcmdlLWFuZC11cC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1hbGlnbi1sYXJnZS1hbmQtdXAtc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tbGFyZ2UtYW5kLXVwLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1hbGlnbi1sYXJnZS1hbmQtdXAtZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtaGlkZS1sYXJnZS1hbmQtdXB7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDo5NDRweCl7Lm1kLXJvdy1tZWRpdW0tYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbWVkaXVtLWFuZC11cHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1tZWRpdW0tYW5kLXVwey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1hbGlnbi1tZWRpdW0tYW5kLXVwLXN0YXJ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLWFsaWduLW1lZGl1bS1hbmQtdXAtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLW1lZGl1bS1hbmQtdXAtZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtaGlkZS1tZWRpdW0tYW5kLXVwe2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NjYwcHgpey5tZC1yb3ctc21hbGwtYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tc21hbGwtYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXNtYWxsLWFuZC11cHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtc21hbGwtYW5kLXVwLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLXNtYWxsLWFuZC11cC1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi1zbWFsbC1hbmQtdXAtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLXNtYWxsLWFuZC11cC1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLXNtYWxsLWFuZC11cHtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjMwMHB4KXsubWQtcm93LXhzbWFsbC1hbmQtdXB7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi14c21hbGwtYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXhzbWFsbC1hbmQtdXB7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLXhzbWFsbC1hbmQtdXAtc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24teHNtYWxsLWFuZC11cC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24teHNtYWxsLWFuZC11cC1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLXhzbWFsbC1hbmQtdXB7ZGlzcGxheTpub25lfX0ubWQtbGlzdHttYXJnaW46MDtwYWRkaW5nOjhweCAwO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmV9Lm1kLWxpc3QubWQtZGVuc2V7cGFkZGluZzo0cHggMH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo0MHB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCwubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MjRweH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtYXZhdGFye3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NjBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQsLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MjBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46Zmlyc3QtY2hpbGQsLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzJweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQsLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MjBweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46Zmlyc3QtY2hpbGQsLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6ODhweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtYXZhdGFye21hcmdpbjowfS5tZC1saXN0IC5tZC1zdWJoZWFkZXIubWQtaW5zZXR7cGFkZGluZy1sZWZ0OjcycHh9Lm1kLWxpc3Q+Lm1kLXN1YmhlYWRlcjpmaXJzdC1vZi10eXBle21hcmdpbi10b3A6LThweH0ubWQtbGlzdC1pdGVte2hlaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0ubWQtbGlzdC1pdGVtLm1kLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kLWxpc3QtaXRlbS5tZC1pbnNldCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdC1pdGVtIC5tZC1idXR0b24tZ2hvc3R7d2lkdGg6MTAwJTttYXJnaW46MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czowfS5tZC1saXN0LWl0ZW0gLm1kLWJ1dHRvbjpub3QoLm1kLWJ1dHRvbi1naG9zdCk6bm90KC5tZC1saXN0LWl0ZW0tY29udGFpbmVyKXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWxpc3QtaXRlbSAubWQtYnV0dG9uOm5vdCgubWQtYnV0dG9uLWdob3N0KTpub3QoLm1kLWxpc3QtaXRlbS1jb250YWluZXIpIC5tZC1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo0OHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleDoxO2ZsZXg6MTtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpsZWZ0O3RleHQtdHJhbnNmb3JtOm5vbmV9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZX0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyPi5tZC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDozMnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCwubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MTZweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWFjdGlvbnttYXJnaW46MCAtMTBweCAwIDB9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtbGlzdC1hY3Rpb246bnRoLWNoaWxkKDMpe21hcmdpbjowIC0xMHB4IDAgMTZweH0ubWQtbGlzdC1pdGVtIC5tZC1kaXZpZGVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciwubWQtbGlzdC1pdGVtIC5tZC1pY29uLC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxke21hcmdpbjowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1vZi10eXBlKyosLm1kLWxpc3QtaXRlbSAubWQtaWNvbjpmaXJzdC1vZi10eXBlKyosLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1hY3Rpb246Zmlyc3QtY2hpbGQ6Zmlyc3Qtb2YtdHlwZSsqey1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG99Lm1kLWxpc3QtaXRlbSAubWQtYXZhdGFye21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4fS5tZC1saXN0LWl0ZW0gLm1kLWljb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1saXN0LWl0ZW0gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czowfS5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDhweDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlciwubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZXt0b3A6MH0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlcntib3R0b206MH0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmFmdGVyLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlLm1kLWFjdGl2ZSsubWQtYWN0aXZlOmJlZm9yZSwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUsLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmxhc3Qtb2YtdHlwZTphZnRlcntiYWNrZ3JvdW5kOm5vbmV9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlPi5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWV4cGFuZC1pbmRpY2F0b3J7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU+Lm1kLWxpc3QtZXhwYW5ke21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnR9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWV4cGFuc2lvbi1pbmRpY2F0b3IsLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWljb24sLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt3aWxsLWNoYW5nZTptYXJnaW4tYm90dG9tO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZCAubWQtbGlzdHtwYWRkaW5nOjB9Lm1kLWxpc3QtdGV4dC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwOy1tcy1mbGV4OjE7ZmxleDoxO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoxLjI1ZW07d2hpdGUtc3BhY2U6bm9ybWFsfS5tZC1saXN0LXRleHQtY29udGFpbmVyPip7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpmaXJzdC1jaGlsZHtmb250LXNpemU6MTZweH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpLC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMyl7bWFyZ2luOjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNHB4fS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMik6bm90KDpsYXN0LWNoaWxkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLW1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2t9Lm1kLW1lbnUtY29udGVudHt3aWR0aDoxNjhweDttaW4td2lkdGg6ODRweDttYXgtd2lkdGg6MzkycHg7bWluLWhlaWdodDo2NHB4O21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMycHgpO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEzO3RyYW5zZm9ybTpzY2FsZSguOSwuODUpIHRyYW5zbGF0ZVooMCk7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7b3BhY2l0eTowO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpLG1hcmdpbiAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpIC40czt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eSx3aWR0aH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHR7bWFyZ2luLXRvcDotMjBweDttYXJnaW4tbGVmdDotOHB4O3RyYW5zZm9ybS1vcmlnaW46dG9wIGxlZnR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOi0xMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1sZWZ0e21hcmdpbi10b3A6LTIwcHg7bWFyZ2luLWxlZnQ6OHB4O3RyYW5zZm9ybS1vcmlnaW46dG9wIHJpZ2h0fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1sZWZ0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOi0xMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodHttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWxlZnQ6LThweDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBsZWZ0fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodC5tZC1hY3RpdmV7bWFyZ2luLXRvcDoxMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0e21hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDo4cHg7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gcmlnaHR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnQubWQtYWN0aXZle21hcmdpbi10b3A6MTFweH0ubWQtbWVudS1jb250ZW50Lm1kLWFsaWduLXRyaWdnZXJ7bWFyZ2luOjB9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTF7d2lkdGg6ODRweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMnt3aWR0aDoxMTJweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtM3t3aWR0aDoxNjhweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNHt3aWR0aDoyMjRweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNXt3aWR0aDoyODBweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNnt3aWR0aDozMzZweH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtN3t3aWR0aDozOTJweH0ubWQtbWVudS1jb250ZW50Lm1kLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOndpZHRoIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0e29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1tZW51LWNvbnRlbnQgLm1kLWxpc3R7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLW1lbnUtaXRlbXtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjJlbX0ubWQtbWVudS1pdGVtW2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH0ubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5tZC1tZW51LWJhY2tkcm9we3otaW5kZXg6MTJ9Lm1kLXByb2dyZXNze3dpZHRoOjEwMCU7aGVpZ2h0OjRweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFja3tyaWdodDowfS5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlciwubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDt3aWxsLWNoYW5nZTpsZWZ0LHJpZ2h0O2NvbnRlbnQ6XFxcIlxcXCJ9Lm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmJlZm9yZXthbmltYXRpb246YiAyLjNzIGN1YmljLWJlemllciguNjUsLjgxNSwuNzM1LC4zOTUpIGluZmluaXRlfS5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlcnthbmltYXRpb246YyAyLjNzIGN1YmljLWJlemllciguMTY1LC44NCwuNDQsMSkgaW5maW5pdGU7YW5pbWF0aW9uLWRlbGF5OjEuMTVzfS5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1lbnRlciwubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtbGVhdmUtYWN0aXZle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGVZKDApIHRyYW5zbGF0ZVooMCl9Lm1kLXByb2dyZXNzLm1kLXByb2dyZXNzLWVudGVyLWFjdGl2ZXt0cmFuc2Zvcm06c2NhbGVZKDEpIHRyYW5zbGF0ZVooMCl9Lm1kLXByb2dyZXNzLXRyYWNre3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9QGtleWZyYW1lcyBiezAle3JpZ2h0OjEwMCU7bGVmdDotMzUlfTYwJXtyaWdodDotMTAwJTtsZWZ0OjEwMCV9dG97cmlnaHQ6LTEwMCU7bGVmdDoxMDAlfX1Aa2V5ZnJhbWVzIGN7MCV7cmlnaHQ6MTAwJTtsZWZ0Oi0yMDAlfTYwJXtyaWdodDotOCU7bGVmdDoxMDclfXRve3JpZ2h0Oi04JTtsZWZ0OjEwNyV9fS5tZC1yYWRpb3t3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lcjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6M3B4O3JpZ2h0OjNweDtib3R0b206M3B4O2xlZnQ6M3B4O2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCguMzgsLjM4LDEpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtcmFkaW8gLm1kLXJhZGlvLWxhYmVse2hlaWdodDoyMHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MjBweH0ubWQtcmFkaW8ubWQtY2hlY2tlZCAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVye29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1zZWxlY3R7d2lkdGg6MTAwJTttaW4td2lkdGg6MTI4cHg7aGVpZ2h0OjMycHg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLXNlbGVjdDphZnRlcnttYXJnaW4tdG9wOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKC40NSkgc2NhbGVYKC44NSk7dHJhbnNpdGlvbjphbGwgLjE1cyBsaW5lYXI7Y29udGVudDpcXFwiXFxcXDI1QkNcXFwifS5tZC1zZWxlY3QubWQtYWN0aXZlIC5tZC1zZWxlY3QtbWVudXt0b3A6LThweDtwb2ludGVyLWV2ZW50czphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtOHB4KSBzY2FsZTNEKDEsMSwxKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjI1czt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtLHRvcH0ubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnU+KntvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO3RyYW5zaXRpb24tZHVyYXRpb246LjE1czt0cmFuc2l0aW9uLWRlbGF5Oi4xc30ubWQtc2VsZWN0Lm1kLWRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3VzZXItZHJhZzpub25lfS5tZC1zZWxlY3Qgc2VsZWN0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1zZWxlY3QgLm1kLW1lbnUsLm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVle3dpZHRoOjEwMCU7aGVpZ2h0OjMycHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWV7cGFkZGluZy1yaWdodDoyNHB4O2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjI7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MzNweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ2JSwuODcpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDotOHB4fS5tZC1zZWxlY3QtY29udGVudHt3aWR0aDphdXRvO21heC1oZWlnaHQ6MjU2cHh9Lm1kLXNlbGVjdC1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHR7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotMTZweH0ubWQtc2VsZWN0LWNvbnRlbnQgLm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcntvdmVyZmxvdzp2aXNpYmxlOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveHttYXJnaW46MH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94LWxhYmVse3BhZGRpbmctbGVmdDoxNnB4O2N1cnNvcjpwb2ludGVyfS5tZC1zaWRlbmF2Lm1kLWxlZnQgLm1kLXNpZGVuYXYtY29udGVudHtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC0xMDAlLDAsMCl9Lm1kLXNpZGVuYXYubWQtcmlnaHQgLm1kLXNpZGVuYXYtY29udGVudHtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgxMDAlLDAsMCl9Lm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtYmFja2Ryb3AsLm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtY29udGVudHtwb3NpdGlvbjpmaXhlZH0ubWQtc2lkZW5hdiAubWQtc2lkZW5hdi1jb250ZW50e3dpZHRoOjMwNHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3otaW5kZXg6Nztwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ubWQtc2lkZW5hdiAubWQtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDo2O3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1jb250ZW50e2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpO3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtYmFja2Ryb3B7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLXNuYWNrYmFye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7bGVmdDowO3otaW5kZXg6MTE7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTptYXJnaW4tdG9wLG1hcmdpbi1ib3R0b219Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0LC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHR7bWFyZ2luLXJpZ2h0OjI0cHg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnR7bWFyZ2luLWxlZnQ6MjRweDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyLC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0e21hcmdpbi10b3A6MjRweH0ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tYm90dG9tOjI0cHh9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHR7dG9wOjB9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXIgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0IC5tZC1zbmFja2Jhci1jb250YWluZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsY2FsYygtMTAwJSAtIDI0cHgpLDApfS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyLC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0e2JvdHRvbTowfS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyIC5tZC1zbmFja2Jhci1jb250YWluZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1sZWZ0IC5tZC1zbmFja2Jhci1jb250YWluZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodCAubWQtc25hY2tiYXItY29udGFpbmVye3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLGNhbGMoMTAwJSArIDI0cHgpLDApfS5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRhaW5lcnt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRlbnR7b3BhY2l0eToxO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgLjFzfS5tZC1zbmFja2JhciAubWQtc25hY2tiYXItY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZC1zbmFja2JhciAubWQtYnV0dG9ue21pbi13aWR0aDo2NHB4O21hcmdpbjotOHB4IC0xNnB4fS5tZC1zbmFja2JhciAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6NDhweH0ubWQtc25hY2tiYXItY29udGFpbmVye3dpZHRoOmF1dG87bWluLXdpZHRoOjI4OHB4O21heC13aWR0aDo1NjhweDttaW4taGVpZ2h0OjQ4cHg7cGFkZGluZzoxNHB4IDI0cHg7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG87Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZC1jb2xvcjojMzIzMjMyO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNHB4fS5tZC1oYXMtdG9hc3QtdG9wLXJpZ2h0IC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCw2OHB4LDApfS5tZC1oYXMtdG9hc3QtdG9wLWNlbnRlciAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNTAlLDY4cHgsMCl9Lm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCw2OHB4LDApfS5tZC1oYXMtdG9hc3QtYm90dG9tLXJpZ2h0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwtNjhweCwwKX0ubWQtaGFzLXRvYXN0LWJvdHRvbS1jZW50ZXIgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTUwJSwtNjhweCwwKX0ubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC02OHB4LDApfUBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXsubWQtc25hY2tiYXJ7bWFyZ2luOjAhaW1wb3J0YW50fS5tZC1zbmFja2Jhci1jb250YWluZXJ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjB9Lm1kLWhhcy10b2FzdC10b3AtcmlnaHQgLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDQ4cHgsMCl9Lm1kLWhhcy10b2FzdC10b3AtY2VudGVyIC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01MCUsNDhweCwwKX0ubWQtaGFzLXRvYXN0LXRvcC1sZWZ0IC5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDQ4cHgsMCl9Lm1kLWhhcy10b2FzdC1ib3R0b20tcmlnaHQgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC00OHB4LDApfS5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNTAlLC00OHB4LDApfS5tZC1oYXMtdG9hc3QtYm90dG9tLWxlZnQgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsLTQ4cHgsMCl9Lm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQsLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsNDRweCwwKX0ubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIsLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdCwubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwtNDRweCwwKX19Lm1kLXNwZWVkLWRpYWx7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXRvcC5tZC1tb2RlLWZsaW5nIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnt0cmFuc2Zvcm06c2NhbGUoLjk1KSB0cmFuc2xhdGUzRCgwLDgwJSwwKX0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tdG9wIFttZC1mYWItdHJpZ2dlcl17bWFyZ2luLXRvcDo4cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXRvcCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257bWFyZ2luLWJvdHRvbToxNnB4fS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1yaWdodHstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1yaWdodC5tZC1tb2RlLWZsaW5nIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnt0cmFuc2Zvcm06c2NhbGUoLjk1KSB0cmFuc2xhdGUzRCgtODAlLDAsMCl9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0IFttZC1mYWItdHJpZ2dlcl17bWFyZ2luLXJpZ2h0OjhweH0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tcmlnaHQgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjE2cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWJvdHRvbXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tLm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3RyYW5zZm9ybTpzY2FsZSguOTUpIHRyYW5zbGF0ZTNEKDAsLTgwJSwwKX0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tIFttZC1mYWItdHJpZ2dlcl17bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWJvdHRvbSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257bWFyZ2luLXRvcDoxNnB4fS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0ey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0Lm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3RyYW5zZm9ybTpzY2FsZSguOTUpIHRyYW5zbGF0ZTNEKDgwJSwwLDApfS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0IFttZC1mYWItdHJpZ2dlcl17bWFyZ2luLWxlZnQ6OHB4fS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0IFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnttYXJnaW4tcmlnaHQ6MTZweH0ubWQtc3BlZWQtZGlhbC5tZC1tb2RlLXNjYWxlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnt0cmFuc2Zvcm06c2NhbGUoLjYpfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKSFpbXBvcnRhbnR9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoMil7dHJhbnNpdGlvbi1kZWxheTouMDVzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDMpe3RyYW5zaXRpb24tZGVsYXk6LjFzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDQpe3RyYW5zaXRpb24tZGVsYXk6LjE1c30ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCg1KXt0cmFuc2l0aW9uLWRlbGF5Oi4yc30ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCg2KXt0cmFuc2l0aW9uLWRlbGF5Oi4yNXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoNyl7dHJhbnNpdGlvbi1kZWxheTouM3N9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoOCl7dHJhbnNpdGlvbi1kZWxheTouMzVzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDkpe3RyYW5zaXRpb24tZGVsYXk6LjRzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDEwKXt0cmFuc2l0aW9uLWRlbGF5Oi40NXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoMTEpe3RyYW5zaXRpb24tZGVsYXk6LjVzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdIFttZC1pY29uLW1vcnBoXXt0cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MX0ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXSBbbWQtaWNvbi1tb3JwaF0rLm1kLWljb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZykgc2NhbGUoLjgpO29wYWNpdHk6MH0ubWQtc3BlZWQtZGlhbCAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl17cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCgyKXt0cmFuc2l0aW9uLWRlbGF5Oi4wNXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDMpe3RyYW5zaXRpb24tZGVsYXk6LjFzfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCg0KXt0cmFuc2l0aW9uLWRlbGF5Oi4xNXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDUpe3RyYW5zaXRpb24tZGVsYXk6LjJzfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCg2KXt0cmFuc2l0aW9uLWRlbGF5Oi4yNXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDcpe3RyYW5zaXRpb24tZGVsYXk6LjNzfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCg4KXt0cmFuc2l0aW9uLWRlbGF5Oi4zNXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDkpe3RyYW5zaXRpb24tZGVsYXk6LjRzfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCgxMCl7dHJhbnNpdGlvbi1kZWxheTouNDVzfS5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCgxMSl7dHJhbnNpdGlvbi1kZWxheTouNXN9Lm1kLXNwZWVkLWRpYWwgW21kLWljb24tbW9ycGhdLC5tZC1zcGVlZC1kaWFsIFttZC1pY29uLW1vcnBoXSsubWQtaWNvbnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNwZWVkLWRpYWwgW21kLWljb24tbW9ycGhde29wYWNpdHk6MDt0cmFuc2Zvcm06cm90YXRlKC05MGRlZykgc2NhbGUoLjgpfS5tZC1zcGlubmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9Lm1kLXNwaW5uZXIubWQtaW5kZXRlcm1pbmF0ZSAubWQtc3Bpbm5lci1kcmF3e2FuaW1hdGlvbjpkIDEuOXMgbGluZWFyIGluZmluaXRlO3RyYW5zZm9ybTpyb3RhdGUoMGRlZykgdHJhbnNsYXRlWigwKX0ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLXBhdGh7c3Ryb2tlLWRhc2hhcnJheToyLDIwMDthbmltYXRpb246ZiAxLjQyNXMgZWFzZS1pbi1vdXQgaW5maW5pdGV9Lm1kLXNwaW5uZXIubWQtc3Bpbm5lci1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSguOCkgdHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjJzfS5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmUgLm1kLXNwaW5uZXItZHJhd3thbmltYXRpb246ZSAxLjk4cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSBmb3J3YXJkc30ubWQtc3Bpbm5lci1kcmF3e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5tZC1zcGlubmVyLXBhdGh7ZmlsbDpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfUBrZXlmcmFtZXMgZHt0b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKSB0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVaKDApfTIwJXtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZnswJXtzdHJva2UtZGFzaGFycmF5OjIsMjAwO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0zNXB4fXRve3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjRweH19Lm1kLXN1YmhlYWRlcnttaW4taGVpZ2h0OjQ4cHg7cGFkZGluZzowIDE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1mbG93OnJvdyB3cmFwO2ZsZXgtZmxvdzpyb3cgd3JhcDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tZC1zd2l0Y2h7d2lkdGg6YXV0bzttYXJnaW46MTZweCA4cHggMTZweCAwO2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lcnt3aWR0aDozNHB4O2hlaWdodDoxNHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MTRweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLXRodW1ie3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC4xNXMgbGluZWFyfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt6LWluZGV4OjI7YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtbGFiZWx7aGVpZ2h0OjE0cHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoxNHB4fS5tZC1zd2l0Y2gubWQtZHJhZ2dpbmcgLm1kLXN3aXRjaC10aHVtYntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9Lm1kLXN3aXRjaC5tZC1kaXNhYmxlZCAubWQtc3dpdGNoLXRodW1ie2N1cnNvcjpkZWZhdWx0fS5tZC10YWJsZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdy14OmF1dG99Lm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyLC5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciwubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLXRhYmxlLWNlbGx7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFibGUgdGFibGV7d2lkdGg6MTAwJTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtvdmVyZmxvdzpoaWRkZW59Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3d7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMH0ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdy5tZC1zZWxlY3RlZCAubWQtdGFibGUtY2VsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3c6aG92ZXIgLm1kLXRhYmxlLWNlbGx7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZHtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1hbGlnbjpsZWZ0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZDpsYXN0LWNoaWxkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0e3BhZGRpbmctcmlnaHQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQubWQtbnVtZXJpY3t0ZXh0LWFsaWduOnJpZ2h0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbnt3aWR0aDoxNnB4O21pbi13aWR0aDoxNnB4O2hlaWdodDoxNnB4O21pbi1oZWlnaHQ6MTZweDtmb250LXNpemU6MTZweDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOm5vdCgubWQtc29ydGFibGUtaWNvbil7bWFyZ2luOjAgNHB4fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC1jb250YWluZXJ7aGVpZ2h0OjU2cHg7cGFkZGluZzoxNHB4IDA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC10ZXh0e2hlaWdodDoyOHB4O3BhZGRpbmctcmlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MjRweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGluZS1oZWlnaHQ6MjhweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtdGFibGUgLm1kLXNvcnRhYmxle2N1cnNvcjpwb2ludGVyfS5tZC10YWJsZSAubWQtc29ydGFibGU6Zmlyc3Qtb2YtdHlwZSAubWQtc29ydGFibGUtaWNvbntsZWZ0OmF1dG87cmlnaHQ6MTBweH0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbiwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyIC5tZC1zb3J0YWJsZS1pY29ue29wYWNpdHk6MX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDoycHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO29wYWNpdHk6MDtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZSAubWQtaW5rLXJpcHBsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxse2hlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGw6bGFzdC1jaGlsZCAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmlje3RleHQtYWxpZ246cmlnaHR9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWMgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtaGFzLWFjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntwYWRkaW5nOjZweCAzMnB4IDZweCAyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9ue3dpZHRoOjM2cHg7bWluLXdpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWluLWhlaWdodDozNnB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luOjAgLTEwcHggMCAwfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uIC5tZC1pY29ue3dpZHRoOjE4cHg7bWluLXdpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWluLWhlaWdodDoxOHB4O21hcmdpbjowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbnt3aWR0aDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbisubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIsLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24rLm1kLXRhYmxlLWhlYWQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHR7cGFkZGluZy1sZWZ0OjhweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctbGVmdDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveHttYXJnaW46MH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWFyZ2luLXRvcDoxcHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcnt0b3A6LTFweDtsZWZ0OjRweH0ubWQtdGFibGUgLm1kLXNlbGVjdHttaW4td2lkdGg6ODRweH0ubWQtdGFibGUgLm1kLW9wdGlvbiwubWQtdGFibGUgLm1kLXNlbGVjdC12YWx1ZXtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZWRpdC10cmlnZ2Vye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtdGFibGUtZWRpdC10cmlnZ2VyLm1kLWVkaXRlZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlLWRpYWxvZ3ttYXgtaGVpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowIDI0cHggMnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDoyNHB4O3otaW5kZXg6NTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxtYXgtaGVpZ2h0IDBzIC41czt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zczt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwtOHB4LDApfS5tZC10YWJsZS1kaWFsb2cubWQtYWN0aXZle21heC1oZWlnaHQ6NDAwcHg7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoIzAwMCk7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdGFibGUtZGlhbG9nLm1kLWxhcmdle3BhZGRpbmc6MTJweCAyNHB4IDJweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXJ7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MTZweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXR7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWNoYXItY291bnRlcntmb250LXNpemU6MTMuNXB4O2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtdGFibGUtZGlhbG9nIC5tZC1idXR0b257bWluLXdpZHRoOjY0cHh9Lm1kLXRhYmxlLWNhcmR7b3ZlcmZsb3c6dmlzaWJsZX0ubWQtdGFibGUtY2FyZCAubWQtdG9vbGJhcntwYWRkaW5nLWxlZnQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1kLXRhYmxlLWNhcmQgLm1kLXRpdGxley1tcy1mbGV4OjE7ZmxleDoxO2ZvbnQtc2l6ZToyMHB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9ue2hlaWdodDo1NnB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2JvcmRlci10b3A6MXB4IHNvbGlkICNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxMnB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3Vze21hcmdpbi1yaWdodDoycHg7bWFyZ2luLWxlZnQ6MThweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0e3dpZHRoOmF1dG87bWluLXdpZHRoOjM2cHg7bWFyZ2luOjAgMzJweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0OmFmdGVye21hcmdpbi10b3A6MH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWV7cGFkZGluZzowO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtYnV0dG9uW2Rpc2FibGVkXSAubWQtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1kLXBhZ2luYXRpb24tc2VsZWN0Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHR7bWFyZ2luLXRvcDotMTZweH0ubWQtcGFnaW5hdGlvbi1zZWxlY3QgLm1kLWxpc3QtaXRlbS1ob2xkZXJ7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtsZWZ0OjA7ei1pbmRleDo0O3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKCMwMDApfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIC5tZC1jb3VudGVye21hcmdpbi1sZWZ0OjhweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFic3t3aWR0aDoxMDAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47cG9zaXRpb246cmVsYXRpdmV9Lm1kLXRhYnMubWQtdHJhbnNpdGlvbi1vZmYgKnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzLm1kLWR5bmFtaWMtaGVpZ2h0IC5tZC10YWJzLWNvbnRlbnR7dHJhbnNpdGlvbjpoZWlnaHQgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb257aGVpZ2h0OjQ4cHg7bWluLWhlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWx7bWluLWhlaWdodDo3MnB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIC5tZC1pY29ue21hcmdpbi1ib3R0b206MTBweH0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWNlbnRlcmVkey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1maXhlZCAubWQtdGFiLWhlYWRlcnstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFicyAubWQtdGFiLWhlYWRlcnttaW4td2lkdGg6NzJweDttYXgtd2lkdGg6MjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDEycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIubWQtZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29ue21hcmdpbjowfS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9ye2hlaWdodDoycHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1yaWdodHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksbGVmdCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxyaWdodCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tbGVmdHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkscmlnaHQgLjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksbGVmdCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubWQtdGFicyAubWQtdGFicy13cmFwcGVye3dpZHRoOjk5OTllbTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYntwYWRkaW5nOjE2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjB9Lm1kLXRvb2xiYXJ7bWluLWhlaWdodDo2NHB4O3BhZGRpbmc6MCA4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1saW5lLXBhY2s6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7ZmxleC1mbG93OnJvdyB3cmFwO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC10b29sYmFyLm1kLWRlbnNle21pbi1oZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1kZW5zZS5tZC1tZWRpdW17bWluLWhlaWdodDo3MnB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLWxhcmdle21pbi1oZWlnaHQ6OTZweH0ubWQtdG9vbGJhci5tZC1kZW5zZSAubWQtdG9vbGJhci1jb250YWluZXJ7aGVpZ2h0OjQ4cHh9Lm1kLXRvb2xiYXIubWQtbWVkaXVte21pbi1oZWlnaHQ6ODhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW0gLm1kLXRvb2xiYXItY29udGFpbmVyOm50aC1jaGlsZCgyKSAubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6NTZweH0ubWQtdG9vbGJhci5tZC1sYXJnZXttaW4taGVpZ2h0OjEyOHB4Oy1tcy1mbGV4LWxpbmUtcGFjazppbmhlcml0O2FsaWduLWNvbnRlbnQ6aW5oZXJpdH0ubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVye21pbi1oZWlnaHQ6MTY0cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWluay1yaXBwbGV7Y29sb3I6I2ZmZn0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMTIpfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdHttYXJnaW46MTZweCAwIDhweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWF2YXRhcisubWQtYXZhdGFye21hcmdpbi1sZWZ0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjY0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6ZmxleC1zdGFydH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXI+Lm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoxNnB4fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXI+Lm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjB9Lm1kLXRvb2xiYXIgLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpOm5vdCgubWQtaWNvbi1idXR0b24pOm5vdCgubWQtZmFiKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xKX0ubWQtdG9vbGJhciAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NDAwfS5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo4cHh9Lm1kLXRvb2xiYXIgLm1kLXRpdGxlKy5tZC1pbnB1dC1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MjRweH0ubWQtdG9vbGJhciAubWQtbGlzdHtwYWRkaW5nOjA7bWFyZ2luOjAgLThweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdG9vbHRpcHtoZWlnaHQ6MjBweDtwYWRkaW5nOjAgOHB4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTQ7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoOTcsOTcsOTcsLjg3KTtib3JkZXItcmFkaXVzOjJweDtvcGFjaXR5OjA7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zczt0cmFuc2l0aW9uLWRlbGF5OjBzO2NvbG9yOiNmZmY7Zm9udC1mYW1pbHk6Um9ib3RvLE5vdG8gU2FucyxOb3RvLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7bGluZS1oZWlnaHQ6MjBweDt0ZXh0LXRyYW5zZm9ybTpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtdG9vbHRpcC5tZC1hY3RpdmV7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdG9vbHRpcDpub3QoLm1kLWFjdGl2ZSl7dHJhbnNpdGlvbi1kZWxheTowcyFpbXBvcnRhbnR9Lm1kLXRvb2x0aXAubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXRvcHttYXJnaW4tdG9wOi0xNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSw4cHgpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9wLm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHR7bWFyZ2luLWxlZnQ6MTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0Lm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9te21hcmdpbi10b3A6MTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLThweCl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0e21hcmdpbi1sZWZ0Oi0xNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0Lm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpfS5tZC13aGl0ZWZyYW1le3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0ubWQtd2hpdGVmcmFtZS0xZHB7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMmRwe2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTNkcHtib3gtc2hhZG93OjAgMXB4IDhweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS00ZHB7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTVkcHtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNmRwe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtN2Rwe2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS04ZHB7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTlkcHtib3gtc2hhZG93OjAgNXB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOXB4IDEycHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNnB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTBkcHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTExZHB7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMmRwe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTNkcHtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE0ZHB7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNWRwe2JveC1zaGFkb3c6MCA4cHggOXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNXB4IDIycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAyOHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTZkcHtib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xN2Rwe2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE4ZHB7Ym94LXNoYWRvdzowIDlweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxOHB4IDI4cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNHB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTlkcHtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMGRwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMWRwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIxcHggMzNweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQwcHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMmRwe2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yM2Rwe2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yNGRwe2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi05Nzg2ZWJhYyEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTk3ODZlYmFjIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXEFwcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOTc4NmViYWMhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJiOTBmZTBhMlwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTk3ODZlYmFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc3BhY2UtdiB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG4uc2VwLWIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9BcHAudnVlP2NmZWM2NWNjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtSUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8dG9vbGJhcj48L3Rvb2xiYXI+XFxyXFxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibWQtcm91dGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2UtY29udGVudCBwYWdlLXZpZXdcXFwiPlxcclxcbiAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxtZC1kaWFsb2ctYWxlcnQgOm1kLXRpdGxlPVxcXCJkaWFsb2cudGl0bGVcXFwiIDptZC1jb250ZW50LWh0bWw9XFxcImRpYWxvZy5jb250ZW50XFxcIiByZWY9XFxcIm1vZGFsRGlhbG9nXFxcIj5cXHJcXG4gICAgPC9tZC1kaWFsb2ctYWxlcnQ+XFxyXFxuICAgIDxtZC1kaWFsb2ctY29uZmlybSA6bWQtdGl0bGU9XFxcImNvbmZpcm0udGl0bGVcXFwiIDptZC1jb250ZW50LWh0bWw9XFxcImNvbmZpcm0uY29udGVudFxcXCIgOm1kLW9rLXRleHQ9XFxcImNvbmZpcm0ub2tcXFwiIDptZC1jYW5jZWwtdGV4dD1cXFwiY29uZmlybS5jYW5jZWxcXFwiXFxyXFxuICAgICAgQGNsb3NlPVxcXCJvbkNvbmZpcm1DbG9zZVxcXCIgcmVmPVxcXCJjb25maXJtRGlhbG9nXFxcIj5cXHJcXG4gICAgICA8L21kLWRpYWxvZy1jb25maXJtPlxcclxcbiAgICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cXFwicHJvbXB0LnRpdGxlXFxcIiA6bWQtb2stdGV4dD1cXFwicHJvbXB0Lm9rXFxcIiA6bWQtY2FuY2VsLXRleHQ9XFxcInByb21wdC5jYW5jZWxcXFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cXFwicHJvbXB0LnBsYWNlaG9sZGVyXFxcIlxcclxcbiAgICAgICAgQGNsb3NlPVxcXCJvblByb21wdENsb3NlXFxcIiB2LW1vZGVsPVxcXCJwcm9tcHQucmVzcFxcXCIgcmVmPVxcXCJwcm9tcHREaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPC9tZC1kaWFsb2ctcHJvbXB0PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi9jb21wb25lbnRzL3Rvb2xiYXInXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIHU6IHtcXHJcXG4gICAgICAgICAga2V5OiAnJyxcXHJcXG4gICAgICAgICAgbmFtZTogJydcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkaWFsb2c6IHtcXHJcXG4gICAgICAgICAgdGl0bGU6ICcgJyxcXHJcXG4gICAgICAgICAgY29udGVudDogJyAnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29uZmlybToge1xcclxcbiAgICAgICAgICB0aXRsZTogJyAnLFxcclxcbiAgICAgICAgICBjb250ZW50OiAnICcsXFxyXFxuICAgICAgICAgIG9rOiAnT0snLFxcclxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxcclxcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHByb21wdDoge1xcclxcbiAgICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICAgIG9rOiAnT0snLFxcclxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxcclxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXFxyXFxuICAgICAgICAgIC8vIG1heGxlbmd0aDogMCxcXHJcXG4gICAgICAgICAgcmVzcDogJycsXFxyXFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBpZiAoIXRoaXMudS5rZXkpIHJldHVybiBmYWxzZVxcclxcbiAgICAgICAgcmV0dXJuIHRydWVcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHdhdGNoOiB7XFxyXFxuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xcclxcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93TG9nZ2VkSW4pXFxyXFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndScsIEpTT04uc3RyaW5naWZ5KHRoaXMudSkpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgVG9vbGJhclxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nLmNvbnRlbnQgPSBjb250ZW50XFxyXFxuICAgICAgICB0aGlzLmRpYWxvZy50aXRsZSA9IHRpdGxlXFxyXFxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgc2hvd0NvbmZpcm06IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSwgY2IsIHksIG4pIHtcXHJcXG4gICAgICAgIHkgPSB5IHx8ICdPSydcXHJcXG4gICAgICAgIG4gPSBuIHx8ICdDYW5jZWwnXFxyXFxuICAgICAgICB0aGlzLmNvbmZpcm0ub2sgPSB5XFxyXFxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxcclxcbiAgICAgICAgdGhpcy5jb25maXJtLmNvbnRlbnQgPSBjb250ZW50XFxyXFxuICAgICAgICB0aGlzLmNvbmZpcm0udGl0bGUgPSB0aXRsZVxcclxcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcXHJcXG4gICAgICAgIHRoaXMuJHJlZnMuY29uZmlybURpYWxvZy5vcGVuKClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XFxyXFxuICAgICAgICB0aGlzLnByb21wdC50aXRsZSA9IHRpdGxlXFxyXFxuICAgICAgICB0aGlzLnByb21wdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXFxyXFxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXFxyXFxuICAgICAgICB0aGlzLiRyZWZzLnByb21wdERpYWxvZy5vcGVuKClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcXHJcXG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xcclxcbiAgICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayh0aGlzLnByb21wdC5yZXNwKVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGhpcy5wcm9tcHQucmVzcCA9ICcnXFxyXFxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIG9uQ29uZmlybUNsb3NlOiBmdW5jdGlvbiAocmVzdWx0KSB7XFxyXFxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXFxyXFxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2sgPSBudWxsXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICAvLyB1dGlsaXRpZXNcXHJcXG4gICAgICBodW1hbkZpbGVTaXplOiBmdW5jdGlvbiAoYnl0ZXMpIHtcXHJcXG4gICAgICAgIHZhciB0aHJlc2ggPSAxMDI0XFxyXFxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XFxyXFxuICAgICAgICAgIHJldHVybiBieXRlcyArICcgQidcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXFxyXFxuICAgICAgICB2YXIgdSA9IC0xXFxyXFxuICAgICAgICBkbyB7XFxyXFxuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxcclxcbiAgICAgICAgICAgICsrdVxcclxcbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoYnl0ZXMpID49IHRocmVzaCAmJiB1IDwgdW5pdHMubGVuZ3RoIC0gMSlcXHJcXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDIpICsgJyAnICsgdW5pdHNbdV1cXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdldEF1dGhSZXF1ZXN0UGFyYW1zOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICBwYXJhbXM6IHtcXHJcXG4gICAgICAgICAgICBhcGlrZXk6IHRoaXMudS5rZXlcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgIGxldCBzYXZlZFUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndScpXFxyXFxuICAgICAgaWYgKHNhdmVkVSkge1xcclxcbiAgICAgICAgdGhpcy51ID0gSlNPTi5wYXJzZShzYXZlZFUpXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlPlxcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3BhY2UtdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlcC1iIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxlZnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucmlnaHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOTc4NmViYWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cclxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnQgcGFnZS12aWV3XCI+XHJcbiAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC10aXRsZT1cImRpYWxvZy50aXRsZVwiIDptZC1jb250ZW50LWh0bWw9XCJkaWFsb2cuY29udGVudFwiIHJlZj1cIm1vZGFsRGlhbG9nXCI+XHJcbiAgICA8L21kLWRpYWxvZy1hbGVydD5cclxuICAgIDxtZC1kaWFsb2ctY29uZmlybSA6bWQtdGl0bGU9XCJjb25maXJtLnRpdGxlXCIgOm1kLWNvbnRlbnQtaHRtbD1cImNvbmZpcm0uY29udGVudFwiIDptZC1vay10ZXh0PVwiY29uZmlybS5va1wiIDptZC1jYW5jZWwtdGV4dD1cImNvbmZpcm0uY2FuY2VsXCJcclxuICAgICAgQGNsb3NlPVwib25Db25maXJtQ2xvc2VcIiByZWY9XCJjb25maXJtRGlhbG9nXCI+XHJcbiAgICAgIDwvbWQtZGlhbG9nLWNvbmZpcm0+XHJcbiAgICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cInByb21wdC50aXRsZVwiIDptZC1vay10ZXh0PVwicHJvbXB0Lm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwicHJvbXB0LmNhbmNlbFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cInByb21wdC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgQGNsb3NlPVwib25Qcm9tcHRDbG9zZVwiIHYtbW9kZWw9XCJwcm9tcHQucmVzcFwiIHJlZj1cInByb21wdERpYWxvZ1wiPlxyXG4gICAgICAgIDwvbWQtZGlhbG9nLXByb21wdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhcidcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHU6IHtcclxuICAgICAgICAgIGtleTogJycsXHJcbiAgICAgICAgICBuYW1lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlhbG9nOiB7XHJcbiAgICAgICAgICB0aXRsZTogJyAnLFxyXG4gICAgICAgICAgY29udGVudDogJyAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtOiB7XHJcbiAgICAgICAgICB0aXRsZTogJyAnLFxyXG4gICAgICAgICAgY29udGVudDogJyAnLFxyXG4gICAgICAgICAgb2s6ICdPSycsXHJcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgb2s6ICdPSycsXHJcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgICAgLy8gbWF4bGVuZ3RoOiAwLFxyXG4gICAgICAgICAgcmVzcDogJycsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnUua2V5KSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vd0xvZ2dlZEluKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1JywgSlNPTi5zdHJpbmdpZnkodGhpcy51KSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgVG9vbGJhclxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5jb250ZW50ID0gY29udGVudFxyXG4gICAgICAgIHRoaXMuZGlhbG9nLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxyXG4gICAgICB9LFxyXG4gICAgICBzaG93Q29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYiwgeSwgbikge1xyXG4gICAgICAgIHkgPSB5IHx8ICdPSydcclxuICAgICAgICBuID0gbiB8fCAnQ2FuY2VsJ1xyXG4gICAgICAgIHRoaXMuY29uZmlybS5vayA9IHlcclxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxyXG4gICAgICAgIHRoaXMuY29uZmlybS5jb250ZW50ID0gY29udGVudFxyXG4gICAgICAgIHRoaXMuY29uZmlybS50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcclxuICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1EaWFsb2cub3BlbigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XHJcbiAgICAgICAgdGhpcy5wcm9tcHQudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMucHJvbXB0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXHJcbiAgICAgICAgdGhpcy4kcmVmcy5wcm9tcHREaWFsb2cub3BlbigpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcclxuICAgICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrKHRoaXMucHJvbXB0LnJlc3ApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb21wdC5yZXNwID0gJydcclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtQ2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXHJcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gbnVsbFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB1dGlsaXRpZXNcclxuICAgICAgaHVtYW5GaWxlU2l6ZTogZnVuY3Rpb24gKGJ5dGVzKSB7XHJcbiAgICAgICAgdmFyIHRocmVzaCA9IDEwMjRcclxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYnl0ZXMgKyAnIEInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXHJcbiAgICAgICAgdmFyIHUgPSAtMVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxyXG4gICAgICAgICAgICArK3VcclxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxyXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDIpICsgJyAnICsgdW5pdHNbdV1cclxuICAgICAgfSxcclxuICAgICAgZ2V0QXV0aFJlcXVlc3RQYXJhbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGFwaWtleTogdGhpcy51LmtleVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHNhdmVkVSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1JylcclxuICAgICAgaWYgKHNhdmVkVSkge1xyXG4gICAgICAgIHRoaXMudSA9IEpTT04ucGFyc2Uoc2F2ZWRVKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICB9XHJcbiAgXHJcbiAgLmludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2UtdiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICBcclxuICAuc2VwLWIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFwcC52dWU/Y2ZlYzY1Y2MiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIlxuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00NTAwNDY5YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG9vbGJhci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDUwMDQ2OWMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9vbGJhci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNDUwMDQ2OWNcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdG9vbGJhci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b29sYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDA0NjljJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjJiYTJhNzUxXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwMDQ2OWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRvb2xiYXItdGl0bGVbZGF0YS12LTQ1MDA0NjljXSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uYWNjb3VudC11c2VybmFtZVtkYXRhLXYtNDUwMDQ2OWNdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/MDIwOWNjMzZcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBIQTtFQUNBLFFBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidG9vbGJhci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwidG9vbGJhclxcXCI+XFxyXFxuICAgIDxtZC10b29sYmFyPlxcclxcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLWljb24tYnV0dG9uXFxcIiBAY2xpY2submF0aXZlPVxcXCJ0b2dnbGVMZWZ0U2lkZW5hdlxcXCI+XFxyXFxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxcclxcbiAgICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICAgIDxoMiBjbGFzcz1cXFwibWQtdGl0bGUgdG9vbGJhci10aXRsZVxcXCI+e3sgYXBwTmFtZSB9fTwvaDI+XFxyXFxuICAgICAgPGRpdiB2LWlmPVxcXCIkcm9vdC5sb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxcclxcbiAgICAgICAgICA8bWQtYnV0dG9uIG1kLW1lbnUtdHJpZ2dlcj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYWNjb3VudC11c2VybmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICB7eyAkcm9vdC51Lm5hbWUgfX1cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxcclxcbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwicm91dGVyR28oJy9wJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgQWNjb3VudFxcclxcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwicm91dGVyR28oJy91JylcXFwiPlxcclxcbiAgICAgICAgICAgICAgRGFzaGJvYXJkXFxyXFxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVxcXCJyb3V0ZXJHbygnL2ZpbGVzJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgTXkgRmlsZXNcXHJcXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVxcXCJsb2dvdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgTG9nIE91dFxcclxcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxcclxcbiAgICAgICAgICA8L21kLW1lbnUtY29udGVudD5cXHJcXG4gICAgICAgIDwvbWQtbWVudT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IHYtZWxzZT5cXHJcXG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLWljb24tYnV0dG9uXFxcIiBAY2xpY2submF0aXZlPVxcXCJ2aXNpdEdpdEh1YlxcXCI+XFxyXFxuICAgICAgICAgIDxtZC1pY29uPmZhdm9yaXRlPC9tZC1pY29uPlxcclxcbiAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbWQtdG9vbGJhcj5cXHJcXG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XFxcIm1haW4tc2lkZW5hdiBtZC1sZWZ0IG1kLWZpeGVkXFxcIiByZWY9XFxcImxlZnRTaWRlbmF2XFxcIj5cXHJcXG4gICAgICA8bWQtdG9vbGJhciBjbGFzcz1cXFwibWQtbGFyZ2VcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWQtdG9vbGJhci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1kLXRpdGxlXFxcIj57eyBhcHBOYW1lIH19PC9oMj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvbWQtdG9vbGJhcj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sYmFyLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1saW5rc1xcXCI+XFxyXFxuICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVxcXCJtZC1kZW5zZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIiRyb290LmxvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VTaWRlbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVxcXCIvcFxcXCI+QWNjb3VudDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VTaWRlbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVxcXCIvdVxcXCI+RGFzaGJvYXJkPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVxcXCJjbG9zZVNpZGVuYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XFxcIi9maWxlc1xcXCI+RmlsZXM8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XFxcImNsb3NlU2lkZW5hdlxcXCIgdi1lbHNlPlxcclxcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVxcXCIvXFxcIj5Ib21lPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XFxcImNsb3NlU2lkZW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XFxcIi9hYm91dFxcXCI+QWJvdXQ8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPG1kLWxpc3QtZXhwYW5kPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtbGlzdD5cXHJcXG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC1pbnNldFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXFxyXFxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cXFwibWQtaW5zZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxcclxcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9tZC1zaWRlbmF2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgdmlzaXRHaXRIdWI6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkJylcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHRvZ2dsZUxlZnRTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LnRvZ2dsZSgpXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBjbG9zZVNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYuY2xvc2UoKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLiRyb290LnUua2V5ID0gJydcXHJcXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHJvdXRlckdvOiBmdW5jdGlvbiAodSkge1xcclxcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godSlcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNyZWF0ZWQoKSB7XFxyXFxuICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXFxyXFxuICAgICAgLy8gdGhlbiByZWdpc3RlciBob29rXFxyXFxuICAgICAgdGhpcy4kcm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XFxyXFxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcXHJcXG4gICAgICAgIG5leHQoKVxcclxcbiAgICAgIH0pXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG48IS0tIEFkZCBcXFwic2NvcGVkXFxcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC50b29sYmFyLXRpdGxlIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFjY291bnQtdXNlcm5hbWUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwMDQ2OWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgPG1kLXRvb2xiYXI+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljay5uYXRpdmU9XCJ0b2dnbGVMZWZ0U2lkZW5hdlwiPlxyXG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XHJcbiAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCI+e3sgYXBwTmFtZSB9fTwvaDI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XHJcbiAgICAgICAgPG1kLW1lbnUgbWQtYWxpZ24tdHJpZ2dlcj5cclxuICAgICAgICAgIDxtZC1idXR0b24gbWQtbWVudS10cmlnZ2VyPlxyXG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY2NvdW50LXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAge3sgJHJvb3QudS5uYW1lIH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwicm91dGVyR28oJy9wJylcIj5cclxuICAgICAgICAgICAgICBBY2NvdW50XHJcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XCJyb3V0ZXJHbygnL3UnKVwiPlxyXG4gICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwicm91dGVyR28oJy9maWxlcycpXCI+XHJcbiAgICAgICAgICAgICAgTXkgRmlsZXNcclxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwibG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxyXG4gICAgICAgIDwvbWQtbWVudT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljay5uYXRpdmU9XCJ2aXNpdEdpdEh1YlwiPlxyXG4gICAgICAgICAgPG1kLWljb24+ZmF2b3JpdGU8L21kLWljb24+XHJcbiAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tZC10b29sYmFyPlxyXG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XCJtYWluLXNpZGVuYXYgbWQtbGVmdCBtZC1maXhlZFwiIHJlZj1cImxlZnRTaWRlbmF2XCI+XHJcbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwibWQtbGFyZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlXCI+e3sgYXBwTmFtZSB9fTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWQtdG9vbGJhcj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XHJcbiAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cIm1kLWRlbnNlXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cclxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9wXCI+QWNjb3VudDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVwiY2xvc2VTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvdVwiPkRhc2hib2FyZDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVwiY2xvc2VTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvZmlsZXNcIj5GaWxlczwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cImNsb3NlU2lkZW5hdlwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvXCI+SG9tZTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtZXhwYW5kPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC1pbnNldFwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtaW5zZXRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb25hdGVcclxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWV4cGFuZD5cclxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tZC1zaWRlbmF2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHZpc2l0R2l0SHViOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWQnKVxyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGVMZWZ0U2lkZW5hdjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi5jbG9zZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSxcclxuICAgICAgcm91dGVyR286IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxyXG4gICAgICAvLyB0aGVuIHJlZ2lzdGVyIGhvb2tcclxuICAgICAgdGhpcy4kcm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXHJcbiAgICAgICAgbmV4dCgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnRvb2xiYXItdGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY291bnQtdXNlcm5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b29sYmFyLnZ1ZT8wMjA5Y2MzNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlTGVmdFNpZGVuYXYoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcIm1lbnVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGUgdG9vbGJhci10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kcm9vdC5sb2dnZWRJbikgPyBfYygnZGl2JywgW19jKCdtZC1tZW51Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWFsaWduLXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtbWVudS10cmlnZ2VyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJhY2NvdW50X2NpcmNsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhY2NvdW50LXVzZXJuYW1lXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kcm9vdC51Lm5hbWUpICsgXCJcXG4gICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucm91dGVyR28oJy9wJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBBY2NvdW50XFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucm91dGVyR28oJy91JylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBEYXNoYm9hcmRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL2ZpbGVzJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBNeSBGaWxlc1xcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmxvZ291dCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTG9nIE91dFxcbiAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKSA6IF9jKCdkaXYnLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udmlzaXRHaXRIdWIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImZhdm9yaXRlXCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1zaWRlbmF2Jywge1xuICAgIHJlZjogXCJsZWZ0U2lkZW5hdlwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1haW4tc2lkZW5hdiBtZC1sZWZ0IG1kLWZpeGVkXCJcbiAgfSwgW19jKCdtZC10b29sYmFyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxhcmdlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdG9vbGJhci1jb250YWluZXJcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaWRlYmFyLWxpbmtzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWRlbnNlXCJcbiAgfSwgWyhfdm0uJHJvb3QubG9nZ2VkSW4pID8gW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZVNpZGVuYXYoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9wXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBY2NvdW50XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsb3NlU2lkZW5hdigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3VcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRhc2hib2FyZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZVNpZGVuYXYoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9maWxlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRmlsZXNcIildKV0sIDEpXSA6IF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZVNpZGVuYXYoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkhvbWVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2xvc2VTaWRlbmF2KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvYWJvdXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFib3V0XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIFtfYygnc3BhbicsIFtfdm0uX3YoXCJTdXBwb3J0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWV4cGFuZCcsIFtfYygnbWQtbGlzdCcsIFtfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCIsXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBHaXRIdWJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIERvbmF0ZVxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKV0sIDIpXSwgMSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDUwMDQ2OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiXG4gIH0sIFtfYygndG9vbGJhcicpLCBfdm0uX3YoXCIgXCIpLCBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibWQtcm91dGVyXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtY29udGVudCBwYWdlLXZpZXdcIlxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctYWxlcnQnLCB7XG4gICAgcmVmOiBcIm1vZGFsRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmRpYWxvZy50aXRsZSxcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5kaWFsb2cuY29udGVudFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctY29uZmlybScsIHtcbiAgICByZWY6IFwiY29uZmlybURpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5jb25maXJtLnRpdGxlLFxuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmNvbmZpcm0uY29udGVudCxcbiAgICAgIFwibWQtb2stdGV4dFwiOiBfdm0uY29uZmlybS5vayxcbiAgICAgIFwibWQtY2FuY2VsLXRleHRcIjogX3ZtLmNvbmZpcm0uY2FuY2VsXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbG9zZVwiOiBfdm0ub25Db25maXJtQ2xvc2VcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLXByb21wdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9tcHQucmVzcCksXG4gICAgICBleHByZXNzaW9uOiBcInByb21wdC5yZXNwXCJcbiAgICB9XSxcbiAgICByZWY6IFwicHJvbXB0RGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLnByb21wdC50aXRsZSxcbiAgICAgIFwibWQtb2stdGV4dFwiOiBfdm0ucHJvbXB0Lm9rLFxuICAgICAgXCJtZC1jYW5jZWwtdGV4dFwiOiBfdm0ucHJvbXB0LmNhbmNlbCxcbiAgICAgIFwibWQtaW5wdXQtcGxhY2Vob2xkZXJcIjogX3ZtLnByb21wdC5wbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5wcm9tcHQucmVzcClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5vblByb21wdENsb3NlLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnByb21wdC5yZXNwID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTk3ODZlYmFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=