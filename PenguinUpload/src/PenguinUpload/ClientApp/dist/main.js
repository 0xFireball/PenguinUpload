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
	  "data-v-57d1dae1",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/notFound.vue"
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
	__webpack_require__(9)("29877838", content, false);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.not-found-content[data-v-57d1dae1] {\n  text-align: center;\n  font-weight: 600;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/notFound.vue?27811ebf"],"names":[],"mappings":";AA+BA;EACA,mBAAA;EACA,iBAAA;CACA","file":"notFound.vue","sourcesContent":["<template>\n  <div class=\"not-found\">\n    <div id=\"app\" class=\"container\">\n      <div class=\"row\" id=\"intro-area\">\n        <div class=\"twelve columns\">\n          <intro></intro>\n        </div>\n      </div>\n      <div class=\"not-found-content\">\n        <h1>404. That's an error.</h1>\n        <h3>The page you were looking for couldn't be found.</h3>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Intro from '../components/intro'\n\nexport default {\n  data () {\n    return {\n    }\n  },\n  components: {\n    Intro\n  }\n}\n</script>\n\n<style scoped>\n  .not-found-content {\n    text-align: center;\n    font-weight: 600;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-4c71ae42",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/intro.vue"
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
	__webpack_require__(9)("4031fb3c", content, false);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.intro[data-v-4c71ae42] {\n  margin-top: 8%;\n  text-align: center;\n}\n.app-title[data-v-4c71ae42] {\n  font-size: 4rem;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/intro.vue?0f21d962"],"names":[],"mappings":";AAqBA;EACA,eAAA;EACA,mBAAA;CACA;AAEA;EACA,gBAAA;EACA,uBAAA;EACA,iBAAA;CACA","file":"intro.vue","sourcesContent":["<template>\n  <div class=\"intro\">\n    <div class=\"container\">\n      <h1 class=\"app-title\">{{ viewTitle || appTitle }}</h1>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: ['viewTitle'],\n    data() {\n      return {\n        appTitle: 'PenguinUpload',\n      }\n    }\n  }\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\n  .intro {\n    margin-top: 8%;\n    text-align: center;\n  }\n  \n  .app-title {\n    font-size: 4rem;\n    letter-spacing: 0.1rem;\n    font-weight: 300;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-8696f2d6",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/landing.vue"
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
	__webpack_require__(9)("627c12c9", content, false);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-8696f2d6] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 4%;\n}\n.intro-area[data-v-8696f2d6] {\n  margin-bottom: 2%;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/landing.vue?b8970db0"],"names":[],"mappings":";AA2CA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"landing.vue","sourcesContent":["<template>\n  <div class=\"shrink-layout\">\n    <!--<img src=\"./assets/logo.png\">-->\n    <div class=\"row intro-area\">\n        <div class=\"twelve columns\">\n          <intro></intro>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"six columns offset-by-three\">\n          <login></login>\n        </div>\n      </div>\n    <devCredits></devCredits>\n  </div>\n</template>\n\n<script>\n  import Intro from '../components/intro'\n  import devCredits from '../components/devCredits'\n  import Login from '../components/login'\n\n  export default {\n    data() {\n      return {\n      }\n    },\n    components: {\n      Intro,\n      Login,\n      devCredits\n    },\n    beforeRouteEnter(to, from, next) {\n      next(vm => {\n        if (vm.$root.loggedIn) {\n          vm.$router.replace('/u')\n        }\n      })\n    }\n  }\n</script>\n\n<style scoped>\n  .shrink-layout {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n    margin-top: 4%;\n  }\n\n  .intro-area {\n    margin-bottom: 2%;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-3535ec3c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/devCredits.vue"
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
	__webpack_require__(9)("50ef8be8", content, false);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dev-credits[data-v-3535ec3c] {\n  margin: 2%;\n}\nh6.credit-text[data-v-3535ec3c] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/devCredits.vue?6546f67b"],"names":[],"mappings":";AAgBA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA","file":"devCredits.vue","sourcesContent":["<template>\n  <div class=\"dev-credits\">\n    <h6 class=\"credit-text\">Made by <a href=\"https://0xfireball.me\" target=\"_blank\">0xFireball</a> of <a href=\"https://iridiumion.xyz\" target=\"_blank\">IridiumIon Software</a></h6>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  .dev-credits {\n    margin: 2%;\n  }\n  \n  h6.credit-text {\n    font-weight: 300;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-3f5aeb5c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/login.vue"
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
	__webpack_require__(9)("2237f586", content, false);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.invisible[data-v-3f5aeb5c] {\n  display: none;\n}\n.error-message[data-v-3f5aeb5c] {\n  color: red;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/login.vue?7230a8c6"],"names":[],"mappings":";AA2KA;EACA,cAAA;CACA;AACA;EACA,WAAA;CACA","file":"login.vue","sourcesContent":["<template>\n  <div class=\"login\">\n    <md-tabs class=\"md-accent\" ref=\"authOptionTabs\">\n      <md-tab id=\"t-login\" md-label=\"Log In\">\n        <form v-on:submit.prevent=\"tryLogin\">\n          <md-input-container>\n            <label>Username</label>\n            <md-input v-model=\"login.username\"></md-input>\n          </md-input-container>\n          <md-input-container md-has-password>\n            <label>Password</label>\n            <md-input type=\"password\" v-model=\"login.password\"></md-input>\n          </md-input-container>\n          <p class=\"error-message\">{{ login.err }}</p>\n          <input type=\"submit\" class=\"invisible\"></input>\n          <md-button class=\"md-raised md-primary\" @click.native=\"tryLogin\" :disabled=\"!login.e\">Log In</md-button>\n        </form>\n      </md-tab>\n\n      <md-tab id=\"t-signup\" md-label=\"Sign Up\">\n        <form v-on:submit.prevent=\"tryRegister\">\n          <md-input-container>\n            <label>Username</label>\n            <md-input v-model=\"register.username\"></md-input>\n          </md-input-container>\n          <md-input-container md-has-password>\n            <label>Password</label>\n            <md-input type=\"password\" v-model=\"register.password\"></md-input>\n          </md-input-container>\n          <md-input-container>\n            <label>Confirm Password</label>\n            <md-input type=\"password\" v-model=\"register.confirm\"></md-input>\n          </md-input-container>\n          <md-input-container>\n            <label>Invite Key (optional)</label>\n            <md-input type=\"password\" v-model=\"register.inviteKey\"></md-input>\n          </md-input-container>\n          <md-checkbox v-model=\"register.iaccept\">I accept the Terms and Conditions</md-checkbox>\n          <p class=\"error-message\">{{ register.err }}</p>\n          <input type=\"submit\" class=\"invisible\"></input>\n          <md-button class=\"md-raised md-primary\" @click.native=\"tryRegister\" :disabled=\"!register.e\">Sign Up</md-button>\n        </form>\n      </md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\n\n  import axios from 'axios'\n  let axiosRequestConfig = {\n    validateStatus: function (status) {\n      return status >= 200 && status < 500\n    }\n  }\n  export default {\n    name: 'login',\n    data() {\n      return {\n        login: {\n          username: '',\n          password: '',\n          err: '',\n          e: true // enabled\n        },\n        register: {\n          username: '',\n          password: '',\n          confirm: '',\n          iaccept: '',\n          inviteKey: '',\n          err: '',\n          e: true // enabled\n        }\n      }\n    },\n    methods: {\n      tryLogin: function () {\n        // nothing\n        let vm = this\n        if (!vm.login.e) return\n        if (!vm.login.password || !vm.login.username) {\n          vm.login.err = 'credentials cannot be empty'\n          return\n        }\n        vm.login.e = false\n        // reset error message\n        vm.login.err = ''\n        // send login post\n        axios.post('/login', {\n          username: vm.login.username,\n          password: vm.login.password\n        })\n          .then((response) => {\n            // TODO: process response\n            if (response.status === 200) {\n              // succeeded\n              // vm.$root.loggedIn = true\n              // push user info\n              vm.$root.u.key = response.data.apikey\n              vm.$root.u.name = response.data.user.username\n              // console.log(vm.$root.u.name)\n              vm.$router.push('/u')\n            } else if (response.status == 401) {\n              // unauthorized\n              vm.login.err = response.data\n            }\n            vm.login.e = true\n          })\n          .catch(function (error) {\n            // TODO: handle error\n            if (error) {\n              vm.login.err = 'invalid login credentials'\n            }\n            vm.login.e = true\n          })\n      },\n      tryRegister: function () {\n        let vm = this\n        if (!vm.register.e) return\n        // make sure confirmation is correct\n        if (vm.register.username.length < 3) {\n          vm.register.err = 'username must be at least 3 characters. this is also validated on the server'\n          return\n        }\n        if (vm.register.password.length < 8) {\n          vm.register.err = 'password must be at least 8 characters. this is also validated on the server'\n          return\n        }\n        if (!vm.register.iaccept) {\n          vm.register.err = 'you must accept the terms and conditions'\n          return\n        }\n        if (vm.register.password !== vm.register.confirm) {\n          vm.register.err = 'password confirmation does not match'\n          return\n        }\n        vm.register.e = false\n        // reset error message\n        vm.register.err = ''\n        // send register post\n        axios.post('/register', {\n          username: vm.register.username,\n          password: vm.register.password,\n          inviteKey: vm.register.inviteKey\n        }, axiosRequestConfig)\n          .then((response) => {\n            // TODO: process response\n            if (response.status === 200) {\n              // registration succeeded\n              vm.$root.showPopup('Registration succeeded! You may now log in.', 'Success')\n              // this.$refs.authOptionTabs.changeTab('t-login')\n            } else if (response.status === 401) {\n              // unauthorized because of error\n              vm.register.err = response.data\n            }\n            vm.register.e = true\n          })\n          .catch(function (error) {\n            if (error) {\n              console.log(error)\n            }\n            vm.register.e = true\n          })\n      }\n    }\n  }\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\n  .invisible {\n    display: none;\n  }\n  .error-message {\n    color: red;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-2863e68b",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/about.vue"
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
	__webpack_require__(9)("775ecf64", content, false);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.about-content[data-v-2863e68b] {\n  text-align: center;\n  /*font-weight: 600;*/\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/about.vue?fe9fe9bc"],"names":[],"mappings":";AAgCA;EACA,mBAAA;EACA,qBAAA;CACA","file":"about.vue","sourcesContent":["<template>\n  <div class=\"about\">\n    <div id=\"app\" class=\"container\">\n      <div class=\"row\" id=\"intro-area\">\n        <div class=\"twelve columns\">\n          <intro></intro>\n        </div>\n      </div>\n      <div class=\"about-content\">\n        <about></about>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Intro from '../components/intro'\nimport About from '../components/aboutWidget'\n\nexport default {\n  data () {\n    return {\n    }\n  },\n  components: {\n    Intro,\n    About\n  }\n}\n</script>\n\n<style scoped>\n  .about-content {\n    text-align: center;\n    /*font-weight: 600;*/\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-11efd838",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/aboutWidget.vue"
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
	__webpack_require__(9)("131a8d4e", content, false);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aboutWidget[data-v-11efd838] {\n  margin: 2%;\n}\nh6.credit-text[data-v-11efd838] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/aboutWidget.vue?38fb18b8"],"names":[],"mappings":";AAwBA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA","file":"aboutWidget.vue","sourcesContent":["<template>\n  <div class=\"aboutWidget\">\n    <h5>About {{ appName }}</h5>\n    <p>\n      PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.\n    </p>\n    <h6>\n      PenguinUpload version {{ appVersion }}\n    </h6>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: function () {\n      return {\n        appName: 'PenguinUpload',\n        appVersion: window.$appVersion\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  .aboutWidget {\n    margin: 2%;\n  }\n  \n  h6.credit-text {\n    font-weight: 300;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-f191b30c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/download.vue"
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
	__webpack_require__(9)("7785ac3a", content, false);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-f191b30c] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n.download-area[data-v-f191b30c] {\n  margin-bottom: 2%;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/download.vue?3a83bbd9"],"names":[],"mappings":";AAoCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"download.vue","sourcesContent":["<template>\n  <div class=\"shrink-layout\">\n    <!--<img src=\"./assets/logo.png\">-->\n    <div class=\"row download-area\">\n      <div class=\"twelve columns\">\n        <intro></intro>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"six columns offset-by-three\">\n        <downloadItem :itemId=\"$route.params.id\" :itemPass=\"$route.params.pass\"></downloadItem>\n      </div>\n    </div>\n    <devCredits></devCredits>\n  </div>\n</template>\n\n<script>\n  import Intro from '../components/intro'\n  import devCredits from '../components/devCredits'\n  import downloadItem from '../components/downloadItem'\n\n  export default {\n    data() {\n      return {\n      }\n    },\n    components: {\n      Intro,\n      downloadItem,\n      devCredits\n    }\n  }\n</script>\n\n<style scoped>\n  .shrink-layout {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n  }\n\n  .download-area {\n    margin-bottom: 2%;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-d6c3a2d0",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/downloadItem.vue"
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
	__webpack_require__(9)("7604567f", content, false);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.download-item[data-v-d6c3a2d0] {\n  margin: 2%;\n}\n.download-area-padding[data-v-d6c3a2d0] {\n  margin: 20px;\n  padding: 2%;\n  padding-top: 10%;\n  background: #f7f7f7;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/downloadItem.vue?1912d99e"],"names":[],"mappings":";AAuHA;EACA,WAAA;CACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;CACA","file":"downloadItem.vue","sourcesContent":["<template>\n  <div class=\"download-item\">\n    <div class=\"md-title\">File Download</div>\n    <div class=\"download-area-padding\">\n      <div v-if=\"loading\">\n        <md-spinner :md-stroke=\"1.5\" md-indeterminate></md-spinner>\n        <h5>Loading File Information</h5>\n      </div>\n      <div v-else>\n        <md-icon md-theme=\"light-blue\" class=\"md-primary\">insert_drive_file</md-icon>\n        <h5>{{ file.name }}</h5>\n        <p>{{ file.sizeText }}</p>\n        <div v-if=\"!error\">\n          <div class=\"right\">\n            <md-button @click.native=\"downloadFile\">\n              <md-icon v-if=\"file.pass.length > 0\">lock</md-icon>\n              <span>\n              Download\n            </span>\n            </md-button>\n            <!--<md-button>Copy Link</md-button>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n  import axios from 'axios'\n  let axiosRequestConfig = {\n    validateStatus: function (status) {\n      return status >= 200 && status < 500\n    }\n  }\n\n  export default {\n    props: ['itemId', 'itemPass'],\n    data: function () {\n      return {\n        loading: true,\n        file: {\n          name: 'Loading',\n          size: 'retrieving information from server',\n          id: null,\n          pass: ''\n        },\n        error: false,\n        cItemPass: ''\n      }\n    },\n    methods: {\n      downloadFile: function () {\n        window.location.href = '/api/download/' + this.file.id + (this.file.pass ? '!' + this.file.pass : '')\n      },\n      updateFileInfo: function (key) {\n        let vm = this\n        let suffix = key ? '!' + key : ''\n        vm.file.id = vm.itemId\n        axios.get('/api/fileinfo/' + vm.file.id + suffix, axiosRequestConfig)\n          .then(function (response) {\n            if (response.status == 200) {\n              vm.file.name = response.data.name\n              vm.file.sizeText = vm.$root.humanFileSize(response.data.size)\n              vm.loading = false\n              if (suffix) {\n                vm.file.pass = key\n              }\n            } else if (response.status == 401) {\n              // file is password protected\n              vm.$root.showPrompt('Enter password', 'File password', function (r) {\n                let responded = true\n                if (r) {\n                  setTimeout(() => {\n                    vm.updateFileInfo(r)\n                  }, 500)\n                } else {\n                  vm.file.name = 'Incorrect Password'\n                  vm.file.sizeText = 'Access Denied'\n                  vm.loading = false\n                  vm.error = true\n                }\n              })\n            }\n          })\n          .catch(function (error) {\n            console.log(error)\n            // file not found\n            vm.file.name = 'File Not Found'\n            vm.file.sizeText = 'Error'\n            vm.loading = false\n            vm.error = true\n          })\n      },\n      handleGlobalKeypress: function (e) {\n        e = e || window.event\n        if (e) {\n          switch (e.keyCode) {\n            case 40:\n              // down\n              this.downloadFile()\n              break;\n          }\n        }\n      }\n    },\n    mounted: function () {\n      if (this.itemPass) {\n        try {\n          this.cItemPass = window.atob(this.itemPass)\n        } catch (e) {\n          this.cItemPass = null\n        }\n      }\n      this.updateFileInfo(this.cItemPass)\n      document.onkeydown = this.handleGlobalKeypress\n    }\n  }\n</script>\n<style scoped>\n  .download-item {\n    margin: 2%;\n  }\n  \n  .download-area-padding {\n    margin: 20px;\n    padding: 2%;\n    padding-top: 10%;\n    background: #f7f7f7;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-36baef12",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/dashboard.vue"
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
	__webpack_require__(9)("6c9a703e", content, false);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-36baef12] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/dashboard.vue?7137d3d7"],"names":[],"mappings":";AAmCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\n  <div class=\"shrink-layout\">\n    <!--<img src=\"./assets/logo.png\">-->\n    <intro view-title=\"Dashboard\"></intro>\n    <fileUploadWidget></fileUploadWidget>\n    <devCredits></devCredits>\n  </div>\n</template>\n\n<script>\n  import Intro from '../components/intro'\n  import fileUploadWidget from '../components/fileUploadWidget'\n  import devCredits from '../components/devCredits'\n\n  export default {\n    data() {\n      return {\n      }\n    },\n    components: {\n      Intro,\n      fileUploadWidget,\n      devCredits\n    },\n    beforeRouteEnter(to, from, next) {\n      next(vm => {\n        if (!vm.$root.loggedIn) {\n          vm.$router.replace('/')\n        }\n      })\n    }\n  }\n</script>\n\n<style scoped>\n  .shrink-layout {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-4fe946c4",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/fileUploadWidget.vue"
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
	__webpack_require__(9)("f41780da", content, false);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.upload-area-padding[data-v-4fe946c4] {\n  margin: 20px;\n  padding: 14%;\n  background: #f7f7f7;\n}\n.upload-progress-indicators[data-v-4fe946c4] {\n  text-align: center;\n}\n.upload-progress-bar[data-v-4fe946c4] {\n  padding: 5px;\n}\n.upload-settings-section[data-v-4fe946c4] {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/fileUploadWidget.vue?d8cd2ee6"],"names":[],"mappings":";AAgMA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;CACA","file":"fileUploadWidget.vue","sourcesContent":["<template>\n  <div class=\"file-upload-widget\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"ten columns offset-by-one\">\n          <div class=\"left sep-b\">\n            <md-button class=\"md-raised md-primary\" @click.native=\"viewMyFiles\">View my files</md-button>\n          </div>\n          <div class=\"upload-here\" @drop.stop.prevent=\"handleDragDropUpload\" @dragenter.stop.prevent @dragleave.stop.prevent @dragover.stop.prevent>\n            <!--<a class=\"target\">Drag and drop or click to upload files</a>-->\n            <div class=\"md-title\">Upload Files</div>\n            <div class=\"row upload-settings-section\">\n              <div class=\"six columns offset-by-three\">\n                <md-input-container>\n                  <label>Upload Destination</label>\n                  <md-input v-model=\"uploadDestination\"></md-input>\n                </md-input-container>\n              </div>\n            </div>\n            <div class=\"md-subhead\">Drag and drop or click</div>\n            <div class=\"upload-area-padding\" @click=\"browseForFiles\">\n            </div>\n            <div class=\"upload-progress-indicators\">\n              <!--<md-spinner md-size=\"60\" :md-progress=\"progressIndicator.value\" class=\"md-warn\"></md-spinner>\n                  <p>{{ progressMessage }}</p>-->\n              <md-list class=\"custom-list md-double-line\">\n                <!--Uploading file-->\n                <md-subheader v-if=\"progressIndicators.length > 0\">Uploading</md-subheader>\n                <md-list-item v-for=\"(prInd, ix) in progressIndicators\">\n                  <md-icon class=\"md-primary\" v-if=\"!prInd.error\">cloud_queue</md-icon>\n                  <md-icon class=\"md-primary\" v-else>error</md-icon>\n                  <div class=\"md-list-text-container\">\n                    <span> {{ prInd.name }} </span>\n                    <!--<span v-if=\"!prInd.error\"> {{ (prInd.value < 100) ? `Uploading... (${prInd.value}%)` : 'Uploaded, Processing...' }}</span>-->\n                    <template class=\"upload-progress-bar\" v-if=\"!prInd.error\">\n                      <span>{{ (prInd.value < 100) ? `Uploading... (${prInd.value}%)` : 'Uploaded, Processing...' }}</span>\n                      <md-progress :md-progress=\"prInd.value\"></md-progress>\n                    </template>\n                    <span v-else> {{ 'Upload error: ' + prInd.message }}</span>\n                  </div>\n                  <md-button class=\"md-icon-button md-list-action\" @click.native=\"cancelUpload(prInd)\">\n                    <md-icon class=\"md-primary\">cancel</md-icon>\n                  </md-button>\n                  <md-button class=\"md-icon-button md-list-action\">\n                    <md-icon class=\"md-primary\">file_upload</md-icon>\n                  </md-button>\n                  <md-divider class=\"md-inset\"></md-divider>\n                </md-list-item>\n                <!--Upload completed files-->\n                <md-subheader v-if=\"completedFiles.length > 0\">Completed</md-subheader>\n                <md-list-item v-for=\"(cmplFile, ix) in completedFiles\" @click.native=\"visitUrl(cmplFile.downloadPage)\">\n                  <md-icon class=\"md-primary\">cloud_done</md-icon>\n                  <div class=\"md-list-text-container\">\n                    <span> {{ cmplFile.name }}</span>\n                    <span>Upload Complete!</span>\n                  </div>\n                  <md-button class=\"md-icon-button md-list-action\">\n                    <md-icon class=\"md-primary\">done</md-icon>\n                  </md-button>\n                  <md-divider class=\"md-inset\"></md-divider>\n                </md-list-item>\n              </md-list>\n              <md-button v-if=\"completedFiles.length > 0\" @click.native=\"completedFiles = []\">Clear All</md-button>\n            </div>\n            <input type=\"file\" class=\"invisible\" ref=\"browse\" @change=\"onFilesUploaded\" multiple />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n  import axios from 'axios'\n\n  let axiosRequestConfig = {\n    validateStatus: function (status) {\n      return status >= 200 && status < 500\n    }\n  }\n\n  export default {\n    data() {\n      return {\n        progressIndicators: [],\n        /* schema:\n        {\n          value: number [0-100],\n          fileRef: object [reference to file that is uploading],\n          name: string [name of file],\n          xhr: object [xhr object reference],\n          error: bool\n          message: string or null [an error message]\n        }\n        */\n        completedFiles: [],\n        /* schema:\n         */\n        uploadDestination: '/'\n      }\n    },\n    computed: {\n      uploadingFiles: function () {\n        return this.progressIndicators.length\n      },\n      uploading: function () {\n        return this.uploadingFiles > 0\n      }\n    },\n    methods: {\n      viewMyFiles: function () {\n        this.$router.push('/files')\n      },\n      browseForFiles: function () {\n        this.$refs.browse.click()\n      },\n      onFilesUploaded: function (e) {\n        let browse = this.$refs.browse\n        let fileCount = browse.files.length\n        for (let i = 0; i < fileCount; i++) {\n          let f = browse.files[i]\n          let progress = {\n            value: 0,\n            fileRef: f,\n            name: f.name\n          }\n          this.progressIndicators.push(progress)\n          this.uploadFile(f, progress)\n        }\n      },\n      handleDragDropUpload: function (e) {\n        for (var i = 0; i < e.dataTransfer.files.length; i++) {\n          var f = e.dataTransfer.files[i];\n          let progress = {\n            value: 0,\n            fileRef: f,\n            name: f.name,\n            error: false,\n            message: ''\n          }\n          this.progressIndicators.push(progress)\n          this.uploadFile(f, progress)\n        }\n      },\n      cancelUpload: function (progress) {\n        let vm = this\n        progress.xhr.abort()\n        vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)\n      },\n      uploadFile: function (file, progress) {\n        let vm = this\n        let xhr = new XMLHttpRequest()\n        progress.xhr = xhr\n        xhr.open(\"POST\", \"/api/upload\")\n        xhr.onload = function () {\n          if (xhr.status === 200) {\n            // upload complete\n            // console.log('upload complete', progress.name)\n            // dequeue the uploading file\n            vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)\n            // console.log(xhr.responseText)\n            let response = JSON.parse(xhr.responseText)\n            vm.completedFiles.push({\n              name: progress.name,\n              downloadPage: '/#/d/' + response.fileId\n              // downloadPage: response.downloadPage // get download page from server response\n            })\n          } else {\n            // update progress indicator\n            progress.error = true\n            // progress.message = xhr.responseText\n            // reactive update\n            vm.$set(progress, 'message', xhr.responseText)\n          }\n        }\n        xhr.upload.onprogress = function (e) {\n          if (e.lengthComputable) {\n            progress.value = Math.floor((e.loaded / e.total) * 100)\n          }\n        }\n        let form = new FormData()\n        form.append(\"apikey\", vm.$root.u.key)\n        form.append(\"dir\", vm.uploadDestination)\n        form.append(\"file\", file)\n        xhr.send(form)\n      },\n      visitUrl: function (u) {\n        window.open(u, '_blank')\n      }\n    }\n  }\n</script>\n<style scoped>\n  .upload-area-padding {\n    margin: 20px;\n    padding: 14%;\n    background: #f7f7f7;\n  }\n  \n  .upload-progress-indicators {\n    text-align: center;\n  }\n  \n  .upload-progress-bar {\n    padding: 5px;\n  }\n  \n  .upload-settings-section {\n    text-align: center;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	    on: {
	      "click": _vm.browseForFiles
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
	  "data-v-2dbe6ac9",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/myfiles.vue"
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
	__webpack_require__(9)("37287f50", content, false);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-2dbe6ac9] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/myfiles.vue?05fff60f"],"names":[],"mappings":";AAiCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA","file":"myfiles.vue","sourcesContent":["<template>\n  <div class=\"shrink-layout\">\n    <!--<img src=\"./assets/logo.png\">-->\n    <intro view-title=\"My Files\"></intro>\n    <myFilesList :dir=\"dir\"></myFilesList>\n    <devCredits></devCredits>\n  </div>\n</template>\n<script>\n  import Intro from '../components/intro'\n  import myFilesList from '../components/myFilesList'\n  import devCredits from '../components/devCredits'\n\n  export default {\n    props: ['dir'],\n    data() {\n      return {}\n    },\n    components: {\n      Intro,\n      myFilesList,\n      devCredits\n    },\n    beforeRouteEnter(to, from, next) {\n      next(vm => {\n        if (!vm.$root.loggedIn) {\n          vm.$router.replace('/')\n        }\n      })\n    }\n  }\n</script>\n<style scoped>\n  .shrink-layout {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-2d0d6b1c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/myFilesList.vue"
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
	__webpack_require__(9)("a56e8528", content, false);

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
	  "data-v-acae85b2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/profile.vue"
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
	__webpack_require__(9)("5b7f34c6", content, false);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-acae85b2] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/profile.vue?6f6c5d82"],"names":[],"mappings":";AAyCA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"profile.vue","sourcesContent":["<template>\n  <div class=\"shrink-layout\">\n    <!--<img src=\"./assets/logo.png\">-->\n    <div class=\"container\">\n      <intro view-title=\"User Profile\"></intro>\n      <div class=\"row\">\n        <div class=\"twelve columns\">\n          <myProfile></myProfile>\n        </div>\n      </div>\n      <devCredits></devCredits>\n    </div>\n  </div>\n</template>\n\n<script>\n  import Intro from '../components/intro'\n  import myProfile from '../components/myProfile'\n  import devCredits from '../components/devCredits'\n\n  export default {\n    data() {\n      return {\n      }\n    },\n    components: {\n      Intro,\n      myProfile,\n      devCredits\n    },\n    beforeRouteEnter(to, from, next) {\n      next(vm => {\n        if (!vm.$root.loggedIn) {\n          vm.$router.replace('/')\n        }\n      })\n    }\n  }\n</script>\n\n<style scoped>\n  .shrink-layout {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n    margin-top: 60px;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-11ead260",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/myProfile.vue"
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
	__webpack_require__(9)("38d958d8", content, false);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.p-section[data-v-11ead260] {\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/myProfile.vue?efc35e92"],"names":[],"mappings":";AAgMA;EACA,eAAA;EACA,kBAAA;CACA","file":"myProfile.vue","sourcesContent":["<template>\n  <div class=\"my-profile left\">\n    <h4>Manage Account ({{ $root.u.name }})</h4>\n    <div class=\"p-section\">\n      <h5>Resource Usage</h5>\n      <div v-if=\"uInfo.loaded\">\n        <p>\n          Using\n          <b>{{ uInfo.usage }}</b> of <b>{{ uInfo.quota }}</b>\n        </p>\n      </div>\n      <div v-else>\n        <md-spinner :md-stroke=\"1.5\" md-indeterminate></md-spinner>\n        <p>Retrieving Data</p>\n      </div>\n      <p></p>\n    </div>\n    <div class=\"p-section\">\n      <h5>API</h5>\n      <h6>API Key: <code>{{ $root.u.key }}</code></h6>\n      <md-button class=\"md-primary md-raised\" @click.native=\"generateNewApiKey\">Generate New</md-button>\n    </div>\n    <div class=\"p-section\">\n      <h5>Security</h5>\n      <form v-on:submit.prevent=\"tryUpdatePassword\">\n        <div class=\"row\">\n          <div class=\"eight columns\">\n            <md-input-container>\n              <label>Current password</label>\n              <md-input type=\"password\" v-model=\"updatePassword.old\"></md-input>\n            </md-input-container>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"six columns\">\n            <md-input-container md-has-password>\n              <label>New Password</label>\n              <md-input type=\"password\" v-model=\"updatePassword.password\"></md-input>\n            </md-input-container>\n          </div>\n          <div class=\"six columns\">\n            <md-input-container>\n              <label>Confirm New Password</label>\n              <md-input type=\"password\" v-model=\"updatePassword.confirm\"></md-input>\n            </md-input-container>\n          </div>\n        </div>\n        <p class=\"error-message\">{{ updatePassword.err }}</p>\n        <input type=\"submit\" class=\"invisible\"></input>\n        <md-button class=\"md-raised md-primary\" @click.native=\"tryUpdatePassword\" :disabled=\"!updatePassword.e\">Change Password</md-button>\n      </form>\n    </div>\n    <div>\n      <h5>Danger Zone</h5>\n      <md-button class=\"md-raised md-warn\" @click.native=\"deleteAllFiles\">Delete All Files</md-button>\n      <md-button class=\"md-raised md-warn\" @click.native=\"deleteAccount\">Delete Account</md-button>\n    </div>\n  </div>\n</template>\n\n<script>\n  import axios from 'axios'\n  let axiosRequestConfig = {\n    validateStatus: function (status) {\n      return status >= 200 && status < 500\n    }\n  }\n\n  export default {\n    data() {\n      return {\n        updatePassword: {\n          old: '',\n          password: '',\n          confirm: '',\n          err: '',\n          e: true // enabled\n        },\n        uInfo: {\n          quota: null,\n          usage: null,\n          loaded: false\n        }\n      }\n    },\n    methods: {\n      generateNewApiKey: function () {\n        let vm = this\n        vm.$root.showConfirm('Are you sure you want a new API key? The old one will no longer work. You will then be logged out.', 'Confirm Action', function (r) {\n          if (r) {\n            axios.patch('/api/newkey', {}, vm.$root.getAuthRequestParams())\n              .then((res) => {\n                // done\n                vm.$root.u.key = ''\n                vm.$root.showPopup('New API key generated. Please log in again.', 'Success')\n                vm.$router.replace('/')\n              })\n          }\n        })\n      },\n      deleteAllFiles: function () {\n        let vm = this\n        vm.$root.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {\n          if (r) {\n            axios.delete('/api/nuke/files', vm.$root.getAuthRequestParams())\n              .then(function (res) {\n                // files have been nuked.\n              })\n            // now log out\n            vm.$root.u.key = ''\n            vm.$router.replace('/')\n          }\n        })\n      },\n      deleteAccount: function () {\n        let vm = this\n        vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {\n          if (r1) {\n            if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {\n              axios.delete('/api/nuke/user', vm.$root.getAuthRequestParams())\n                .then(function (res) {\n                  // account has been nuked.\n                })\n              // now log out\n              vm.$root.u.key = ''\n              vm.$router.replace('/')\n            }\n          }\n        })\n      },\n      tryUpdatePassword: function () {\n        let vm = this\n        if (!vm.updatePassword.e) return\n        // make sure confirmation is correct\n        if (vm.updatePassword.password.length < 8) {\n          vm.updatePassword.err = 'password must be at least 8 characters. this is also validated on the server'\n          return\n        }\n        if (vm.updatePassword.password !== vm.updatePassword.confirm) {\n          vm.updatePassword.err = 'password confirmation does not match'\n          return\n        }\n        vm.updatePassword.e = false\n        // reset error message\n        vm.updatePassword.err = ''\n        // send updatePassword post\n        axios.patch('/changepassword', {\n          username: vm.$root.u.name,\n          oldPassword: vm.updatePassword.old,\n          newPassword: vm.updatePassword.password\n        }, axiosRequestConfig)\n          .then((response) => {\n            // TODO: process response\n            if (response.status === 200) {\n              // success\n              vm.$root.showPopup('Password change succeeded! Please log in again.')\n              // log out\n              vm.$root.u.key = ''\n              vm.$router.replace('/')\n            } else if (response.status === 401) {\n              // unauthorized because of error\n              vm.updatePassword.err = response.data\n            }\n            vm.updatePassword.e = true\n          })\n          .catch(function (error) {\n            if (error) {\n              console.log(error)\n            }\n            vm.updatePassword.e = true\n          })\n      }\n    },\n    mounted: function () {\n      // load files from server\n      let vm = this\n      vm.$root.getAuthRequestParams().params.apikey = vm.$root.u.key\n      // load user info\n      axios.get('/api/userinfo', vm.$root.getAuthRequestParams())\n        .then(function (res) {\n          // fetched data\n          vm.uInfo = {\n            quota: vm.$root.humanFileSize(res.data.quota),\n            usage: vm.$root.humanFileSize(res.data.usage),\n            loaded: true\n          }\n        })\n    }\n  }\n</script>\n\n<style scoped>\n.p-section {\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/App.vue"
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
	__webpack_require__(9)("3c30ed0e", content, false);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nbody {\n  background: #f7f7f7;\n}\n.invisible {\n  display: none;\n}\n.space-v {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.sep-b {\n  margin-bottom: 10px;\n}\n.left {\n  text-align: left;\n}\n.center {\n  text-align: center;\n}\n.right {\n  text-align: right;\n}\n", "", {"version":3,"sources":["/./ClientApp/App.vue?249ce91a"],"names":[],"mappings":";AAmIA;EACA,oBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"App.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"content-container\">\n      <toolbar></toolbar>\n      <transition name=\"md-router\">\n        <div class=\"page-content page-view\">\n          <router-view></router-view>\n        </div>\n      </transition>\n    </div>\n    <md-dialog-alert :md-title=\"dialog.title\" :md-content-html=\"dialog.content\" ref=\"modalDialog\">\n    </md-dialog-alert>\n    <md-dialog-confirm :md-title=\"confirm.title\" :md-content-html=\"confirm.content\" :md-ok-text=\"confirm.ok\" :md-cancel-text=\"confirm.cancel\"\n      @close=\"onConfirmClose\" ref=\"confirmDialog\">\n      </md-dialog-confirm>\n      <md-dialog-prompt :md-title=\"prompt.title\" :md-ok-text=\"prompt.ok\" :md-cancel-text=\"prompt.cancel\" :md-input-placeholder=\"prompt.placeholder\"\n        @close=\"onPromptClose\" v-model=\"prompt.resp\" ref=\"promptDialog\">\n        </md-dialog-prompt>\n  </div>\n</template>\n<script>\n  import Toolbar from './components/toolbar'\n  export default {\n    data() {\n      return {\n        u: {\n          key: '',\n          name: ''\n        },\n        dialog: {\n          title: ' ',\n          content: ' '\n        },\n        confirm: {\n          title: ' ',\n          content: ' ',\n          ok: 'OK',\n          cancel: 'Cancel',\n          callback: null\n        },\n        prompt: {\n          title: '',\n          ok: 'OK',\n          cancel: 'Cancel',\n          placeholder: '',\n          // maxlength: 0,\n          resp: '',\n          callback: null\n        }\n      }\n    },\n    computed: {\n      loggedIn: function () {\n        if (!this.u.key) return false\n        return true\n      }\n    },\n    watch: {\n      loggedIn: function (nowLoggedIn) {\n        // console.log(nowLoggedIn)\n        localStorage.setItem('u', JSON.stringify(this.u))\n      }\n    },\n    components: {\n      Toolbar\n    },\n    methods: {\n      showPopup: function (content, title) {\n        this.dialog.content = content\n        this.dialog.title = title\n        this.$refs.modalDialog.open()\n      },\n      showConfirm: function (content, title, cb, y, n) {\n        y = y || 'OK'\n        n = n || 'Cancel'\n        this.confirm.ok = y\n        this.confirm.cancel = n\n        this.confirm.content = content\n        this.confirm.title = title\n        this.confirm.callback = cb\n        this.$refs.confirmDialog.open()\n      },\n      showPrompt: function (title, placeholder, cb) {\n        this.prompt.title = title\n        this.prompt.placeholder = placeholder\n        this.prompt.callback = cb\n        this.$refs.promptDialog.open()\n      },\n      onPromptClose: function (result) {\n        if (result == 'ok') {\n          this.prompt.callback(this.prompt.resp)\n        }\n\n        this.prompt.resp = ''\n        this.prompt.callback = null\n      },\n      onConfirmClose: function (result) {\n        this.confirm.callback(result == 'ok')\n        this.confirm.callback = null\n      },\n      // utilities\n      humanFileSize: function (bytes) {\n        var thresh = 1024\n        if (Math.abs(bytes) < thresh) {\n          return bytes + ' B'\n        }\n        var units = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']\n        var u = -1\n        do {\n          bytes /= thresh\n            ++u\n        } while (Math.abs(bytes) >= thresh && u < units.length - 1)\n        return bytes.toFixed(2) + ' ' + units[u]\n      },\n      getAuthRequestParams: function () {\n        return {\n          params: {\n            apikey: this.u.key\n          }\n        }\n      }\n    },\n    created: function () {\n      let savedU = localStorage.getItem('u')\n      if (savedU) {\n        this.u = JSON.parse(savedU)\n      }\n    }\n  }\n</script>\n<style>\n  body {\n    background: #f7f7f7;\n  }\n  \n  .invisible {\n    display: none;\n  }\n  \n  .space-v {\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n  \n  .sep-b {\n    margin-bottom: 10px;\n  }\n  \n  .left {\n    text-align: left;\n  }\n  \n  .center {\n    text-align: center;\n  }\n  \n  .right {\n    text-align: right;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  "data-v-311e23ae",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/toolbar.vue"
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
	__webpack_require__(9)("10d7be72", content, false);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toolbar-title[data-v-311e23ae] {\n  flex: 1;\n}\n.account-username[data-v-311e23ae] {\n  margin-left: 10px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/toolbar.vue?9a5a8ad2"],"names":[],"mappings":";AA0HA;EACA,QAAA;CACA;AAEA;EACA,kBAAA;CACA","file":"toolbar.vue","sourcesContent":["<template>\n  <div class=\"toolbar\">\n    <md-toolbar>\n      <md-button class=\"md-icon-button\" @click.native=\"toggleLeftSidenav\">\n        <md-icon>menu</md-icon>\n      </md-button>\n      <h2 class=\"md-title toolbar-title\">{{ appName }}</h2>\n      <div v-if=\"$root.loggedIn\">\n        <md-menu md-align-trigger>\n          <md-button md-menu-trigger>\n            <md-icon>account_circle</md-icon>\n            <span class=\"account-username\">\n              {{ $root.u.name }}\n            </span>\n          </md-button>\n          <md-menu-content>\n            <md-menu-item @click.native=\"routerGo('/p')\">\n              Account\n            </md-menu-item>\n            <md-menu-item @click.native=\"routerGo('/u')\">\n              Dashboard\n            </md-menu-item>\n            <md-menu-item @click.native=\"routerGo('/files')\">\n              My Files\n            </md-menu-item>\n            <md-divider></md-divider>\n            <md-menu-item @click.native=\"logout\">\n              Log Out\n            </md-menu-item>\n          </md-menu-content>\n        </md-menu>\n      </div>\n      <div v-else>\n        <md-button class=\"md-icon-button\" @click.native=\"visitGitHub\">\n          <md-icon>favorite</md-icon>\n        </md-button>\n      </div>\n    </md-toolbar>\n    <md-sidenav class=\"main-sidenav md-left md-fixed\" ref=\"leftSidenav\">\n      <md-toolbar class=\"md-large\">\n        <div class=\"md-toolbar-container\">\n          <h2 class=\"md-title\">{{ appName }}</h2>\n        </div>\n      </md-toolbar>\n      <div class=\"toolbar-content\">\n        <div class=\"sidebar-links\">\n          <md-list class=\"md-dense\">\n            <template v-if=\"$root.loggedIn\">\n              <md-list-item @click.native=\"closeSidenav\">\n                <router-link exact to=\"/p\">Account</router-link>\n              </md-list-item>\n              <md-list-item @click.native=\"closeSidenav\">\n                <router-link exact to=\"/u\">Dashboard</router-link>\n              </md-list-item>\n              <md-list-item @click.native=\"closeSidenav\">\n                <router-link exact to=\"/files\">Files</router-link>\n              </md-list-item>\n            </template>\n            <md-list-item @click.native=\"closeSidenav\" v-else>\n              <router-link exact to=\"/\">Home</router-link>\n            </md-list-item>\n            <md-list-item @click.native=\"closeSidenav\">\n              <router-link exact to=\"/about\">About</router-link>\n            </md-list-item>\n            <md-list-item>\n              <span>Support</span>\n              <md-list-expand>\n                <md-list>\n                  <md-list-item class=\"md-inset\" target=\"_blank\" href=\"https://github.com/0xFireball/PenguinUpload\">\n                    GitHub\n                  </md-list-item>\n                  <md-list-item class=\"md-inset\" href=\"https://github.com/0xFireball\">\n                    Donate\n                  </md-list-item>\n                </md-list>\n              </md-list-expand>\n            </md-list-item>\n          </md-list>\n        </div>\n      </div>\n    </md-sidenav>\n  </div>\n</template>\n<script>\n  import axios from 'axios'\n\n  export default {\n    data() {\n      return {\n        appName: 'PenguinUpload',\n      }\n    },\n    methods: {\n      visitGitHub: function () {\n        window.open('https://github.com/0xFireball/PenguinUpload')\n      },\n      toggleLeftSidenav: function () {\n        this.$refs.leftSidenav.toggle()\n      },\n      closeSidenav: function () {\n        this.$refs.leftSidenav.close()\n      },\n      logout: function () {\n        this.$root.u.key = ''\n        this.$router.push('/')\n      },\n      routerGo: function (u) {\n        this.$router.push(u)\n      }\n    },\n    created() {\n      // this.updateLoggedInStatus()\n      // then register hook\n      this.$router.beforeEach((to, from, next) => {\n        // this.updateLoggedInStatus()\n        next()\n      })\n    }\n  }\n</script>\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\n  .toolbar-title {\n    flex: 1;\n  }\n  \n  .account-username {\n    margin-left: 10px;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODNjN2MxZjBkMDc1NzcwYzA5NTgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZT8xM2NkIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZT82MWQyIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZT81NjliIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZT9kMjQyIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlP2Q3OGQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlP2Q0Y2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/MDQyOSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT8yYWFhIiwid2VicGFjazovLy9sYW5kaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT9lOTg0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlP2JhYjkiLCJ3ZWJwYWNrOi8vL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzZkZjMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZT82NjAwIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZT80YjE0Iiwid2VicGFjazovLy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWU/OTg1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT84YzE2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/OTYzMSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/YTkzMyIsIndlYnBhY2s6Ly8vYWJvdXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/Y2FmOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/YmEzYyIsIndlYnBhY2s6Ly8vYWJvdXRXaWRnZXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZT8zMTg1Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZT81N2QzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/NDQ1OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/ZjI3MSIsIndlYnBhY2s6Ly8vZG93bmxvYWQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZT8yMzEyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/ZmJhMyIsIndlYnBhY2s6Ly8vZG93bmxvYWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlPzMxNjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlPzI2YjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlPzczZTMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZT85Y2VhIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlPzc4NzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWU/MzEzZiIsIndlYnBhY2s6Ly8vZmlsZVVwbG9hZFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWU/ODdkNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlP2Q5YWQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/NzI1OCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZT9mNzhkIiwid2VicGFjazovLy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2E0MzAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2E0ZTIiLCJ3ZWJwYWNrOi8vL215RmlsZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2M1NmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/Njg3NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZT9mZjQ3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlPzJkNTQiLCJ3ZWJwYWNrOi8vL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZT84NmNjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWU/NWNkZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlP2E1YTMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/ZTVhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcz84NjUxIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9jODQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3M/MjBhYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3M/YTdmZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWU/NzQxNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT8xYWZkIiwid2VicGFjazovLy9BcHAudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlP2FkNTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/NTZjMiIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/OGE5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9hMWVlIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDeElBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODNjN2MxZjBkMDc1NzcwYzA5NTgiLCIvLyBUaGUgVnVlIGJ1aWxkIHZlcnNpb24gdG8gbG9hZCB3aXRoIHRoZSBgaW1wb3J0YCBjb21tYW5kXG4vLyAocnVudGltZS1vbmx5IG9yIHN0YW5kYWxvbmUpIGhhcyBiZWVuIHNldCBpbiB3ZWJwYWNrLmJhc2UuY29uZiB3aXRoIGFuIGFsaWFzLlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG4vLyBSb3V0ZXNcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIFN0eWxlcy9mb250c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcydcblxuLy8gbWF0ZXJpYWxcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tICd2dWUtbWF0ZXJpYWwnXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXG5cbi8vIHBsdWdpbnNcblZ1ZS51c2UoVnVlUm91dGVyKVxuVnVlLnVzZShWdWVNYXRlcmlhbClcblxuLy8gcm91dGVyIGNvbmZpZ1xuXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIHJvdXRlc1xufSlcblxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxuXG4gIGlmIChtYWluQ29udGVudCkge1xuICAgIG1haW5Db250ZW50LnNjcm9sbFRvcCA9IDBcbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnJlZ2lzdGVyVGhlbWUoe1xuICBhcHB0aGVtZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnY3lhbicsXG4gICAgICBodWU6IDcwMFxuICAgIH0sXG4gICAgYWNjZW50OiB7XG4gICAgICBjb2xvcjogJ2xpZ2h0LWJsdWUnLFxuICAgICAgaHVlOiA2MDBcbiAgICB9XG4gIH1cbn0pXG5cblZ1ZS5tYXRlcmlhbC5zZXRDdXJyZW50VGhlbWUoJ2FwcHRoZW1lJylcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxubGV0IFlBU0FwcCA9IFZ1ZS5jb21wb25lbnQoJ2FwcCcsIEFwcClcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IGFwcCA9IG5ldyBZQVNBcHAoe1xuICBlbDogJyNhcHAnLFxuICByb3V0ZXJcbn0pXG5cbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLy8gbmV3IFZ1ZSh7XG4vLyAgIGVsOiAnI2FwcCcsXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXG4vLyAgIGNvbXBvbmVudHM6IHsgQXBwIH1cbi8vIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vbGF5b3V0cy9ub3RGb3VuZCdcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vbGF5b3V0cy9sYW5kaW5nJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vbGF5b3V0cy9hYm91dCdcbmltcG9ydCBEb3dubG9hZCBmcm9tICcuL2xheW91dHMvZG93bmxvYWQnXG5cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9sYXlvdXRzL2Rhc2hib2FyZCdcbmltcG9ydCBNeUZpbGVzIGZyb20gJy4vbGF5b3V0cy9teWZpbGVzJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9sYXlvdXRzL3Byb2ZpbGUnXG5cbmNvbnN0IG1haW4gPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ2xhbmRpbmcnLFxuICAgIGNvbXBvbmVudDogTGFuZGluZ1xuICB9LFxuICB7XG4gICAgcGF0aDogJy9ob21lJyxcbiAgICByZWRpcmVjdDogJy8nXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvdScsXG4gICAgbmFtZTogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZmlsZXMvOmRpcionLFxuICAgIG5hbWU6ICdteSBmaWxlcyBuYXZpZ2F0aW9uJyxcbiAgICBjb21wb25lbnQ6IE15RmlsZXMsXG4gICAgcHJvcHM6IHRydWVcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZmlsZXMnLFxuICAgIG5hbWU6ICdteSBmaWxlcycsXG4gICAgY29tcG9uZW50OiBNeUZpbGVzXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3AnLFxuICAgIG5hbWU6ICdwcm9maWxlJyxcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZC86aWQvOnBhc3MnLFxuICAgIG5hbWU6ICdkb3dubG9hZCAod2l0aCBwYXNzKScsXG4gICAgY29tcG9uZW50OiBEb3dubG9hZFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9kLzppZCcsXG4gICAgbmFtZTogJ2Rvd25sb2FkJyxcbiAgICBjb21wb25lbnQ6IERvd25sb2FkXG4gIH1cbl1cblxuY29uc3QgZXJyb3IgPSBbe1xuICBwYXRoOiAnKicsXG4gIG5hbWU6ICdlcnJvcicsXG4gIGNvbXBvbmVudDogTm90Rm91bmRcbn1dXG5cbmV4cG9ydCBkZWZhdWx0IFtdLmNvbmNhdChtYWluLCBlcnJvcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNTdkMWRhZTEmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTdkMWRhZTEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTU3ZDFkYWUxXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5vdEZvdW5kLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTdkMWRhZTEmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjI5ODc3ODM4XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTdkMWRhZTEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubm90LWZvdW5kLWNvbnRlbnRbZGF0YS12LTU3ZDFkYWUxXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzI3ODExZWJmXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErQkE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIm5vdEZvdW5kLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJub3QtZm91bmRcXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJhcHBcXFwiIGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgaWQ9XFxcImludHJvLWFyZWFcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdlbHZlIGNvbHVtbnNcXFwiPlxcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5vdC1mb3VuZC1jb250ZW50XFxcIj5cXG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxcbiAgICAgICAgPGgzPlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLjwvaDM+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICB9XFxuICB9LFxcbiAgY29tcG9uZW50czoge1xcbiAgICBJbnRyb1xcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01N2QxZGFlMSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBpc1Byb2R1Y3Rpb24pIHtcbiAgaWYgKHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgIHZhciBzdHlsZXMgPSBjb250ZXh0Ll9zdHlsZXNcblxuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBzdHlsZXMgPSBjb250ZXh0Ll9zdHlsZXMgPSB7fVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQsICdzdHlsZXMnLCB7XG4gICAgICAgIGVudW1iZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjb250ZXh0Ll9yZW5kZXJlZFN0eWxlcyB8fFxuICAgICAgICAgICAgKGNvbnRleHQuX3JlbmRlcmVkU3R5bGVzID0gcmVuZGVyU3R5bGVzKHN0eWxlcykpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGxpc3QgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgYWRkU3R5bGVQcm9kKHN0eWxlcywgbGlzdClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3R5bGVEZXYoc3R5bGVzLCBsaXN0KVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbiBwcm9kdWN0aW9uLCByZW5kZXIgYXMgZmV3IHN0eWxlIHRhZ3MgYXMgcG9zc2libGUuXG4vLyAobW9zdGx5IGJlY2F1c2UgSUU5IGhhcyBhIGxpbWl0IG9uIG51bWJlciBvZiBzdHlsZSB0YWdzKVxuZnVuY3Rpb24gYWRkU3R5bGVQcm9kIChzdHlsZXMsIGxpc3QpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnRzID0gbGlzdFtpXS5wYXJ0c1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gcGFydHNbal1cbiAgICAgIC8vIGdyb3VwIHN0eWxlIHRhZ3MgYnkgbWVkaWEgdHlwZXMuXG4gICAgICB2YXIgaWQgPSBwYXJ0Lm1lZGlhIHx8ICdkZWZhdWx0J1xuICAgICAgdmFyIHN0eWxlID0gc3R5bGVzW2lkXVxuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHN0eWxlLmlkcy5wdXNoKHBhcnQuaWQpXG4gICAgICAgIHN0eWxlLmNzcyArPSAnXFxuJyArIHBhcnQuY3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXNbaWRdID0ge1xuICAgICAgICAgIGlkczogW3BhcnQuaWRdLFxuICAgICAgICAgIGNzczogcGFydC5jc3MsXG4gICAgICAgICAgbWVkaWE6IHBhcnQubWVkaWFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbiBkZXYgd2UgdXNlIGluZGl2aWR1YWwgc3R5bGUgdGFnIGZvciBlYWNoIG1vZHVsZSBmb3IgaG90LXJlbG9hZFxuLy8gYW5kIHNvdXJjZSBtYXBzLlxuZnVuY3Rpb24gYWRkU3R5bGVEZXYgKHN0eWxlcywgbGlzdCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydHMgPSBsaXN0W2ldLnBhcnRzXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXVxuICAgICAgc3R5bGVzW3BhcnQuaWRdID0ge1xuICAgICAgICBpZHM6IFtwYXJ0LmlkXSxcbiAgICAgICAgY3NzOiBwYXJ0LmNzcyxcbiAgICAgICAgbWVkaWE6IHBhcnQubWVkaWFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGVzIChzdHlsZXMpIHtcbiAgdmFyIGNzcyA9ICcnXG4gIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBzdHlsZXNba2V5XVxuICAgIGNzcyArPSBgPHN0eWxlIGRhdGEtdnVlLXNzci1pZD1cIiR7XG4gICAgICBzdHlsZS5pZHMuam9pbignICcpXG4gICAgfVwiJHtcbiAgICAgIHN0eWxlLm1lZGlhID8gYCBtZWRpYT1cIiR7c3R5bGUubWVkaWF9XCJgIDogJydcbiAgICB9PiR7c3R5bGUuY3NzfTwvc3R5bGU+YFxuICB9XG4gIHJldHVybiBjc3Ncbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5vdC1mb3VuZFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3QtZm91bmQtY29udGVudFwiPlxuICAgICAgICA8aDE+NDA0LiBUaGF0J3MgYW4gZXJyb3IuPC9oMT5cbiAgICAgICAgPGgzPlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRyb1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm90Rm91bmQudnVlPzI3ODExZWJmIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTRjNzFhZTQyJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnRyby52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRjNzFhZTQyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00YzcxYWU0MlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnRyby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YzcxYWU0MiZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW50cm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNDAzMWZiM2NcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00YzcxYWU0MiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW50cm9bZGF0YS12LTRjNzFhZTQyXSB7XFxuICBtYXJnaW4tdG9wOiA4JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFwcC10aXRsZVtkYXRhLXYtNGM3MWFlNDJdIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlPzBmMjFkOTYyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxQkE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcImludHJvLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJpbnRyb1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgxIGNsYXNzPVxcXCJhcHAtdGl0bGVcXFwiPnt7IHZpZXdUaXRsZSB8fCBhcHBUaXRsZSB9fTwvaDE+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczogWyd2aWV3VGl0bGUnXSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgYXBwVGl0bGU6ICdQZW5ndWluVXBsb2FkJyxcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48IS0tIEFkZCBcXFwic2NvcGVkXFxcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5pbnRybyB7XFxuICAgIG1hcmdpbi10b3A6IDglO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5hcHAtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRjNzFhZTQyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpbnRyb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzcz1cImFwcC10aXRsZVwiPnt7IHZpZXdUaXRsZSB8fCBhcHBUaXRsZSB9fTwvaDE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3ZpZXdUaXRsZSddLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcHBUaXRsZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbiAgLmludHJvIHtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5hcHAtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGludHJvLnZ1ZT8wZjIxZDk2MiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludHJvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhcHAtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmlld1RpdGxlIHx8IF92bS5hcHBUaXRsZSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjNzFhZTQyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01N2QxZGFlMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtODY5NmYyZDYmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTg2OTZmMmQ2IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTg2OTZmMmQ2XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTg2OTZmMmQ2JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjYyN2MxMmM5XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODY5NmYyZDYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtODY5NmYyZDZdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNCU7XFxufVxcbi5pbnRyby1hcmVhW2RhdGEtdi04Njk2ZjJkNl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZT9iODk3MGRiMFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkNBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibGFuZGluZy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgaW50cm8tYXJlYVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0d2VsdmUgY29sdW1uc1xcXCI+XFxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVxcXCI+XFxuICAgICAgICAgIDxsb2dpbj48L2xvZ2luPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xcbiAgaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICBJbnRybyxcXG4gICAgICBMb2dpbixcXG4gICAgICBkZXZDcmVkaXRzXFxuICAgIH0sXFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcXG4gICAgICBuZXh0KHZtID0+IHtcXG4gICAgICAgIGlmICh2bS4kcm9vdC5sb2dnZWRJbikge1xcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy91JylcXG4gICAgICAgIH1cXG4gICAgICB9KVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5zaHJpbmstbGF5b3V0IHtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgfVxcblxcbiAgLmludHJvLWFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODY5NmYyZDYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBpbnRyby1hcmVhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgPGxvZ2luPjwvbG9naW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXG4gIGltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEludHJvLFxuICAgICAgTG9naW4sXG4gICAgICBkZXZDcmVkaXRzXG4gICAgfSxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICBuZXh0KHZtID0+IHtcbiAgICAgICAgaWYgKHZtLiRyb290LmxvZ2dlZEluKSB7XG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvdScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnNocmluay1sYXlvdXQge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICB9XG5cbiAgLmludHJvLWFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsYW5kaW5nLnZ1ZT9iODk3MGRiMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNTM1ZWMzYyZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzUzNWVjM2MhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMzUzNWVjM2NcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkZXZDcmVkaXRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzUzNWVjM2Mmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNTBlZjhiZThcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zNTM1ZWMzYyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXYtY3JlZGl0c1tkYXRhLXYtMzUzNWVjM2NdIHtcXG4gIG1hcmdpbjogMiU7XFxufVxcbmg2LmNyZWRpdC10ZXh0W2RhdGEtdi0zNTM1ZWMzY10ge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzY1NDZmNjdiXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnQkE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRldkNyZWRpdHMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImRldi1jcmVkaXRzXFxcIj5cXG4gICAgPGg2IGNsYXNzPVxcXCJjcmVkaXQtdGV4dFxcXCI+TWFkZSBieSA8YSBocmVmPVxcXCJodHRwczovLzB4ZmlyZWJhbGwubWVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj4weEZpcmViYWxsPC9hPiBvZiA8YSBocmVmPVxcXCJodHRwczovL2lyaWRpdW1pb24ueHl6XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLmRldi1jcmVkaXRzIHtcXG4gICAgbWFyZ2luOiAyJTtcXG4gIH1cXG4gIFxcbiAgaDYuY3JlZGl0LXRleHQge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zNTM1ZWMzYyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXYtY3JlZGl0c1wiPlxuICAgIDxoNiBjbGFzcz1cImNyZWRpdC10ZXh0XCI+TWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MHhGaXJlYmFsbDwvYT4gb2YgPGEgaHJlZj1cImh0dHBzOi8vaXJpZGl1bWlvbi54eXpcIiB0YXJnZXQ9XCJfYmxhbmtcIj5JcmlkaXVtSW9uIFNvZnR3YXJlPC9hPjwvaDY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRldi1jcmVkaXRzIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIFxuICBoNi5jcmVkaXQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2Q3JlZGl0cy52dWU/NjU0NmY2N2IiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXYtY3JlZGl0c1wiXG4gIH0sIFtfYygnaDYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3JlZGl0LXRleHRcIlxuICB9LCBbX3ZtLl92KFwiTWFkZSBieSBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovLzB4ZmlyZWJhbGwubWVcIixcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIweEZpcmViYWxsXCIpXSksIF92bS5fdihcIiBvZiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSXJpZGl1bUlvbiBTb2Z0d2FyZVwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM1MzVlYzNjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTNmNWFlYjVjJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNmNWFlYjVjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zZjVhZWI1Y1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zZjVhZWI1YyZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMjIzN2Y1ODZcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zZjVhZWI1YyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW52aXNpYmxlW2RhdGEtdi0zZjVhZWI1Y10ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmVycm9yLW1lc3NhZ2VbZGF0YS12LTNmNWFlYjVjXSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlPzcyMzBhOGM2XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyS0E7RUFDQSxjQUFBO0NBQ0E7QUFDQTtFQUNBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luXFxcIj5cXG4gICAgPG1kLXRhYnMgY2xhc3M9XFxcIm1kLWFjY2VudFxcXCIgcmVmPVxcXCJhdXRoT3B0aW9uVGFic1xcXCI+XFxuICAgICAgPG1kLXRhYiBpZD1cXFwidC1sb2dpblxcXCIgbWQtbGFiZWw9XFxcIkxvZyBJblxcXCI+XFxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJ0cnlMb2dpblxcXCI+XFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cXFwibG9naW4udXNlcm5hbWVcXFwiPjwvbWQtaW5wdXQ+XFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwibG9naW4ucGFzc3dvcmRcXFwiPjwvbWQtaW5wdXQ+XFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiZXJyb3ItbWVzc2FnZVxcXCI+e3sgbG9naW4uZXJyIH19PC9wPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiaW52aXNpYmxlXFxcIj48L2lucHV0PlxcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidHJ5TG9naW5cXFwiIDpkaXNhYmxlZD1cXFwiIWxvZ2luLmVcXFwiPkxvZyBJbjwvbWQtYnV0dG9uPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvbWQtdGFiPlxcblxcbiAgICAgIDxtZC10YWIgaWQ9XFxcInQtc2lnbnVwXFxcIiBtZC1sYWJlbD1cXFwiU2lnbiBVcFxcXCI+XFxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJ0cnlSZWdpc3RlclxcXCI+XFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cXFwicmVnaXN0ZXIudXNlcm5hbWVcXFwiPjwvbWQtaW5wdXQ+XFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwicmVnaXN0ZXIucGFzc3dvcmRcXFwiPjwvbWQtaW5wdXQ+XFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcInJlZ2lzdGVyLmNvbmZpcm1cXFwiPjwvbWQtaW5wdXQ+XFxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICAgIDxsYWJlbD5JbnZpdGUgS2V5IChvcHRpb25hbCk8L2xhYmVsPlxcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwicmVnaXN0ZXIuaW52aXRlS2V5XFxcIj48L21kLWlucHV0PlxcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XFxcInJlZ2lzdGVyLmlhY2NlcHRcXFwiPkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uczwvbWQtY2hlY2tib3g+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJpbnZpc2libGVcXFwiPjwvaW5wdXQ+XFxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XFxcIiBAY2xpY2submF0aXZlPVxcXCJ0cnlSZWdpc3RlclxcXCIgOmRpc2FibGVkPVxcXCIhcmVnaXN0ZXIuZVxcXCI+U2lnbiBVcDwvbWQtYnV0dG9uPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvbWQtdGFiPlxcbiAgICA8L21kLXRhYnM+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxcbiAgICB9XFxuICB9XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdsb2dpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGxvZ2luOiB7XFxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxcbiAgICAgICAgICBlcnI6ICcnLFxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcXG4gICAgICAgIH0sXFxuICAgICAgICByZWdpc3Rlcjoge1xcbiAgICAgICAgICB1c2VybmFtZTogJycsXFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcXG4gICAgICAgICAgY29uZmlybTogJycsXFxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxcbiAgICAgICAgICBpbnZpdGVLZXk6ICcnLFxcbiAgICAgICAgICBlcnI6ICcnLFxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICB0cnlMb2dpbjogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgLy8gbm90aGluZ1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgaWYgKCF2bS5sb2dpbi5lKSByZXR1cm5cXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XFxuICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdjcmVkZW50aWFscyBjYW5ub3QgYmUgZW1wdHknXFxuICAgICAgICAgIHJldHVyblxcbiAgICAgICAgfVxcbiAgICAgICAgdm0ubG9naW4uZSA9IGZhbHNlXFxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXFxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xcbiAgICAgICAgLy8gc2VuZCBsb2dpbiBwb3N0XFxuICAgICAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XFxuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcXG4gICAgICAgICAgcGFzc3dvcmQ6IHZtLmxvZ2luLnBhc3N3b3JkXFxuICAgICAgICB9KVxcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcXG4gICAgICAgICAgICAgIC8vIHZtLiRyb290LmxvZ2dlZEluID0gdHJ1ZVxcbiAgICAgICAgICAgICAgLy8gcHVzaCB1c2VyIGluZm9cXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcXG4gICAgICAgICAgICAgIHZtLiRyb290LnUubmFtZSA9IHJlc3BvbnNlLmRhdGEudXNlci51c2VybmFtZVxcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codm0uJHJvb3QudS5uYW1lKVxcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XFxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWRcXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcXG4gICAgICAgICAgfSlcXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJvclxcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXFxuICAgICAgICAgIH0pXFxuICAgICAgfSxcXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5lKSByZXR1cm5cXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3VzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXFxuICAgICAgICAgIHJldHVyblxcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXFxuICAgICAgICAgIHJldHVyblxcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XFxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd5b3UgbXVzdCBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zJ1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZCAhPT0gdm0ucmVnaXN0ZXIuY29uZmlybSkge1xcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIHZtLnJlZ2lzdGVyLmUgPSBmYWxzZVxcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxcbiAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJydcXG4gICAgICAgIC8vIHNlbmQgcmVnaXN0ZXIgcG9zdFxcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xcbiAgICAgICAgICB1c2VybmFtZTogdm0ucmVnaXN0ZXIudXNlcm5hbWUsXFxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5yZWdpc3Rlci5wYXNzd29yZCxcXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIHN1Y2NlZWRlZFxcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5hdXRoT3B0aW9uVGFicy5jaGFuZ2VUYWIoJ3QtbG9naW4nKVxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXFxuICAgICAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSByZXNwb25zZS5kYXRhXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXFxuICAgICAgICAgIH0pXFxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxcbiAgICAgICAgICB9KVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjwhLS0gQWRkIFxcXCJzY29wZWRcXFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLmludmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNmNWFlYjVjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJsb2dpblwiPlxuICAgIDxtZC10YWJzIGNsYXNzPVwibWQtYWNjZW50XCIgcmVmPVwiYXV0aE9wdGlvblRhYnNcIj5cbiAgICAgIDxtZC10YWIgaWQ9XCJ0LWxvZ2luXCIgbWQtbGFiZWw9XCJMb2cgSW5cIj5cbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeUxvZ2luXCI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImxvZ2luLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImxvZ2luLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyBsb2dpbi5lcnIgfX08L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrLm5hdGl2ZT1cInRyeUxvZ2luXCIgOmRpc2FibGVkPVwiIWxvZ2luLmVcIj5Mb2cgSW48L21kLWJ1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tZC10YWI+XG5cbiAgICAgIDxtZC10YWIgaWQ9XCJ0LXNpZ251cFwiIG1kLWxhYmVsPVwiU2lnbiBVcFwiPlxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5UmVnaXN0ZXJcIj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwicmVnaXN0ZXIudXNlcm5hbWVcIj48L21kLWlucHV0PlxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIucGFzc3dvcmRcIj48L21kLWlucHV0PlxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmNvbmZpcm1cIj48L21kLWlucHV0PlxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+SW52aXRlIEtleSAob3B0aW9uYWwpPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIuaW52aXRlS2V5XCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJlZ2lzdGVyLmlhY2NlcHRcIj5JIGFjY2VwdCB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnM8L21kLWNoZWNrYm94PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IHJlZ2lzdGVyLmVyciB9fTwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiBAY2xpY2submF0aXZlPVwidHJ5UmVnaXN0ZXJcIiA6ZGlzYWJsZWQ9XCIhcmVnaXN0ZXIuZVwiPlNpZ24gVXA8L21kLWJ1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tZC10YWI+XG4gICAgPC9tZC10YWJzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdsb2dpbicsXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiB7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICBlcnI6ICcnLFxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxuICAgICAgICB9LFxuICAgICAgICByZWdpc3Rlcjoge1xuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgY29uZmlybTogJycsXG4gICAgICAgICAgaWFjY2VwdDogJycsXG4gICAgICAgICAgaW52aXRlS2V5OiAnJyxcbiAgICAgICAgICBlcnI6ICcnLFxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB0cnlMb2dpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgaWYgKCF2bS5sb2dpbi5lKSByZXR1cm5cbiAgICAgICAgaWYgKCF2bS5sb2dpbi5wYXNzd29yZCB8fCAhdm0ubG9naW4udXNlcm5hbWUpIHtcbiAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnY3JlZGVudGlhbHMgY2Fubm90IGJlIGVtcHR5J1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZtLmxvZ2luLmUgPSBmYWxzZVxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXG4gICAgICAgIHZtLmxvZ2luLmVyciA9ICcnXG4gICAgICAgIC8vIHNlbmQgbG9naW4gcG9zdFxuICAgICAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgICAgdXNlcm5hbWU6IHZtLmxvZ2luLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5sb2dpbi5wYXNzd29yZFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIC8vIHN1Y2NlZWRlZFxuICAgICAgICAgICAgICAvLyB2bS4kcm9vdC5sb2dnZWRJbiA9IHRydWVcbiAgICAgICAgICAgICAgLy8gcHVzaCB1c2VyIGluZm9cbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSByZXNwb25zZS5kYXRhLmFwaWtleVxuICAgICAgICAgICAgICB2bS4kcm9vdC51Lm5hbWUgPSByZXNwb25zZS5kYXRhLnVzZXIudXNlcm5hbWVcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codm0uJHJvb3QudS5uYW1lKVxuICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy91JylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdpbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRyeVJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5lKSByZXR1cm5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGNvbmZpcm1hdGlvbiBpcyBjb3JyZWN0XG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci51c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3VzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZtLnJlZ2lzdGVyLmlhY2NlcHQpIHtcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAneW91IG11c3QgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucydcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIucGFzc3dvcmQgIT09IHZtLnJlZ2lzdGVyLmNvbmZpcm0pIHtcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZtLnJlZ2lzdGVyLmUgPSBmYWxzZVxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXG4gICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICcnXG4gICAgICAgIC8vIHNlbmQgcmVnaXN0ZXIgcG9zdFxuICAgICAgICBheGlvcy5wb3N0KCcvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgdXNlcm5hbWU6IHZtLnJlZ2lzdGVyLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5yZWdpc3Rlci5wYXNzd29yZCxcbiAgICAgICAgICBpbnZpdGVLZXk6IHZtLnJlZ2lzdGVyLmludml0ZUtleVxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIHN1Y2NlZWRlZFxuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1JlZ2lzdHJhdGlvbiBzdWNjZWVkZWQhIFlvdSBtYXkgbm93IGxvZyBpbi4nLCAnU3VjY2VzcycpXG4gICAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMuYXV0aE9wdGlvblRhYnMuY2hhbmdlVGFiKCd0LWxvZ2luJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkIGJlY2F1c2Ugb2YgZXJyb3JcbiAgICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZSA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ2luLnZ1ZT83MjMwYThjNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW5cIlxuICB9LCBbX2MoJ21kLXRhYnMnLCB7XG4gICAgcmVmOiBcImF1dGhPcHRpb25UYWJzXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWQtYWNjZW50XCJcbiAgfSwgW19jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LWxvZ2luXCIsXG4gICAgICBcIm1kLWxhYmVsXCI6IFwiTG9nIEluXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5TG9naW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2dpbi51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImxvZ2luLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG9naW4ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmxvZ2luLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmxvZ2luLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5sb2dpbi5lXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2cgSW5cIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LXNpZ251cFwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIlNpZ24gVXBcIlxuICAgIH1cbiAgfSwgW19jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlSZWdpc3RlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXNlcm5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIudXNlcm5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIudXNlcm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkNvbmZpcm0gUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmNvbmZpcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5jb25maXJtXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5jb25maXJtKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5jb25maXJtID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJJbnZpdGUgS2V5IChvcHRpb25hbClcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmludml0ZUtleVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaW52aXRlS2V5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5pbnZpdGVLZXkgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pYWNjZXB0KSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuaWFjY2VwdFwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5pYWNjZXB0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5pYWNjZXB0ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmVnaXN0ZXIuZXJyKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLnJlZ2lzdGVyLmVcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlNpZ24gVXBcIildKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNmNWFlYjVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgaW50cm8tYXJlYVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ2xvZ2luJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtODY5NmYyZDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMjg2M2U2OGImc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYWJvdXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjg2M2U2OGIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTI4NjNlNjhiXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI4NjNlNjhiJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hYm91dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI3NzVlY2Y2NFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI4NjNlNjhiJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hYm91dC1jb250ZW50W2RhdGEtdi0yODYzZTY4Yl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLypmb250LXdlaWdodDogNjAwOyovXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/ZmU5ZmU5YmNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdDQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiYWJvdXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImFib3V0XFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlkPVxcXCJpbnRyby1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dC1jb250ZW50XFxcIj5cXG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dFdpZGdldCdcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgSW50cm8sXFxuICAgIEFib3V0XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuYWJvdXQtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLypmb250LXdlaWdodDogNjAwOyovXFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI4NjNlNjhiJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRybyxcbiAgICBBYm91dFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKmZvbnQtd2VpZ2h0OiA2MDA7Ki9cbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlP2ZlOWZlOWJjIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTExZWZkODM4JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hYm91dFdpZGdldC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTExZWZkODM4IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0xMWVmZDgzOFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhYm91dFdpZGdldC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMWVmZDgzOCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMTMxYThkNGVcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMWVmZDgzOCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXRXaWRnZXRbZGF0YS12LTExZWZkODM4XSB7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5oNi5jcmVkaXQtdGV4dFtkYXRhLXYtMTFlZmQ4MzhdIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/MzhmYjE4YjhcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdCQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiYWJvdXRXaWRnZXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImFib3V0V2lkZ2V0XFxcIj5cXG4gICAgPGg1PkFib3V0IHt7IGFwcE5hbWUgfX08L2g1PlxcbiAgICA8cD5cXG4gICAgICBQZW5ndWluVXBsb2FkIGlzIGEgc2VsZi1ob3N0YWJsZSwgZnVsbHkgZmVhdHVyZWQgd2ViIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB1c2VycyB1cGxvYWQgYW5kIHNoYXJlIGZpbGVzLlxcbiAgICA8L3A+XFxuICAgIDxoNj5cXG4gICAgICBQZW5ndWluVXBsb2FkIHZlcnNpb24ge3sgYXBwVmVyc2lvbiB9fVxcbiAgICA8L2g2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGFwcE5hbWU6ICdQZW5ndWluVXBsb2FkJyxcXG4gICAgICAgIGFwcFZlcnNpb246IHdpbmRvdy4kYXBwVmVyc2lvblxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuYWJvdXRXaWRnZXQge1xcbiAgICBtYXJnaW46IDIlO1xcbiAgfVxcbiAgXFxuICBoNi5jcmVkaXQtdGV4dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTExZWZkODM4JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFdpZGdldFwiPlxuICAgIDxoNT5BYm91dCB7eyBhcHBOYW1lIH19PC9oNT5cbiAgICA8cD5cbiAgICAgIFBlbmd1aW5VcGxvYWQgaXMgYSBzZWxmLWhvc3RhYmxlLCBmdWxseSBmZWF0dXJlZCB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIHVwbG9hZCBhbmQgc2hhcmUgZmlsZXMuXG4gICAgPC9wPlxuICAgIDxoNj5cbiAgICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiB7eyBhcHBWZXJzaW9uIH19XG4gICAgPC9oNj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgICBhcHBWZXJzaW9uOiB3aW5kb3cuJGFwcFZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuYWJvdXRXaWRnZXQge1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbiAgXG4gIGg2LmNyZWRpdC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dFdpZGdldC52dWU/MzhmYjE4YjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFdpZGdldFwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQWJvdXQgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiXFxuICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiBcIiArIF92bS5fcyhfdm0uYXBwVmVyc2lvbikgKyBcIlxcbiAgXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMWVmZDgzOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtY29udGVudFwiXG4gIH0sIFtfYygnYWJvdXQnKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yODYzZTY4YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZjE5MWIzMGMmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rvd25sb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZjE5MWIzMGMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWYxOTFiMzBjXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRvd25sb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYxOTFiMzBjJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kb3dubG9hZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI3Nzg1YWMzYVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYxOTFiMzBjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaHJpbmstbGF5b3V0W2RhdGEtdi1mMTkxYjMwY10ge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxufVxcbi5kb3dubG9hZC1hcmVhW2RhdGEtdi1mMTkxYjMwY10ge1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/M2E4M2JiZDlcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9DQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZG93bmxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcInNocmluay1sYXlvdXRcXFwiPlxcbiAgICA8IS0tPGltZyBzcmM9XFxcIi4vYXNzZXRzL2xvZ28ucG5nXFxcIj4tLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGRvd25sb2FkLWFyZWFcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXG4gICAgICAgIDxpbnRybz48L2ludHJvPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcXFwiPlxcbiAgICAgICAgPGRvd25sb2FkSXRlbSA6aXRlbUlkPVxcXCIkcm91dGUucGFyYW1zLmlkXFxcIiA6aXRlbVBhc3M9XFxcIiRyb3V0ZS5wYXJhbXMucGFzc1xcXCI+PC9kb3dubG9hZEl0ZW0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcXG4gIGltcG9ydCBkb3dubG9hZEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9kb3dubG9hZEl0ZW0nXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICBJbnRybyxcXG4gICAgICBkb3dubG9hZEl0ZW0sXFxuICAgICAgZGV2Q3JlZGl0c1xcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5zaHJpbmstbGF5b3V0IHtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICB9XFxuXFxuICAuZG93bmxvYWQtYXJlYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMTkxYjMwYyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBkb3dubG9hZC1hcmVhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgPGludHJvPjwvaW50cm8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgIDxkb3dubG9hZEl0ZW0gOml0ZW1JZD1cIiRyb3V0ZS5wYXJhbXMuaWRcIiA6aXRlbVBhc3M9XCIkcm91dGUucGFyYW1zLnBhc3NcIj48L2Rvd25sb2FkSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xuICBpbXBvcnQgZG93bmxvYWRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEludHJvLFxuICAgICAgZG93bmxvYWRJdGVtLFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgfVxuXG4gIC5kb3dubG9hZC1hcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWQudnVlPzNhODNiYmQ5IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWQ2YzNhMmQwJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDZjM2EyZDAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZG93bmxvYWRJdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1kNmMzYTJkMFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG93bmxvYWRJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNmMzYTJkMCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG93bmxvYWRJdGVtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjc2MDQ1NjdmXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZDZjM2EyZDAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kb3dubG9hZC1pdGVtW2RhdGEtdi1kNmMzYTJkMF0ge1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuLmRvd25sb2FkLWFyZWEtcGFkZGluZ1tkYXRhLXYtZDZjM2EyZDBdIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlPzE5MTJkOTllXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1SEE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJkb3dubG9hZEl0ZW0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImRvd25sb2FkLWl0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZC10aXRsZVxcXCI+RmlsZSBEb3dubG9hZDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkb3dubG9hZC1hcmVhLXBhZGRpbmdcXFwiPlxcbiAgICAgIDxkaXYgdi1pZj1cXFwibG9hZGluZ1xcXCI+XFxuICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVxcXCIxLjVcXFwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxcbiAgICAgICAgPGg1PkxvYWRpbmcgRmlsZSBJbmZvcm1hdGlvbjwvaDU+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiB2LWVsc2U+XFxuICAgICAgICA8bWQtaWNvbiBtZC10aGVtZT1cXFwibGlnaHQtYmx1ZVxcXCIgY2xhc3M9XFxcIm1kLXByaW1hcnlcXFwiPmluc2VydF9kcml2ZV9maWxlPC9tZC1pY29uPlxcbiAgICAgICAgPGg1Pnt7IGZpbGUubmFtZSB9fTwvaDU+XFxuICAgICAgICA8cD57eyBmaWxlLnNpemVUZXh0IH19PC9wPlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCIhZXJyb3JcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodFxcXCI+XFxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBAY2xpY2submF0aXZlPVxcXCJkb3dubG9hZEZpbGVcXFwiPlxcbiAgICAgICAgICAgICAgPG1kLWljb24gdi1pZj1cXFwiZmlsZS5wYXNzLmxlbmd0aCA+IDBcXFwiPmxvY2s8L21kLWljb24+XFxuICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgIERvd25sb2FkXFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcbiAgICAgICAgICAgIDwhLS08bWQtYnV0dG9uPkNvcHkgTGluazwvbWQtYnV0dG9uPi0tPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XFxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XFxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXFxuICAgIH1cXG4gIH1cXG5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IFsnaXRlbUlkJywgJ2l0ZW1QYXNzJ10sXFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcXG4gICAgICAgIGZpbGU6IHtcXG4gICAgICAgICAgbmFtZTogJ0xvYWRpbmcnLFxcbiAgICAgICAgICBzaXplOiAncmV0cmlldmluZyBpbmZvcm1hdGlvbiBmcm9tIHNlcnZlcicsXFxuICAgICAgICAgIGlkOiBudWxsLFxcbiAgICAgICAgICBwYXNzOiAnJ1xcbiAgICAgICAgfSxcXG4gICAgICAgIGVycm9yOiBmYWxzZSxcXG4gICAgICAgIGNJdGVtUGFzczogJydcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBkb3dubG9hZEZpbGU6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZG93bmxvYWQvJyArIHRoaXMuZmlsZS5pZCArICh0aGlzLmZpbGUucGFzcyA/ICchJyArIHRoaXMuZmlsZS5wYXNzIDogJycpXFxuICAgICAgfSxcXG4gICAgICB1cGRhdGVGaWxlSW5mbzogZnVuY3Rpb24gKGtleSkge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgbGV0IHN1ZmZpeCA9IGtleSA/ICchJyArIGtleSA6ICcnXFxuICAgICAgICB2bS5maWxlLmlkID0gdm0uaXRlbUlkXFxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZWluZm8vJyArIHZtLmZpbGUuaWQgKyBzdWZmaXgsIGF4aW9zUmVxdWVzdENvbmZpZylcXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcXG4gICAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9IHJlc3BvbnNlLmRhdGEubmFtZVxcbiAgICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzcG9uc2UuZGF0YS5zaXplKVxcbiAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICBpZiAoc3VmZml4KSB7XFxuICAgICAgICAgICAgICAgIHZtLmZpbGUucGFzcyA9IGtleVxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xcbiAgICAgICAgICAgICAgLy8gZmlsZSBpcyBwYXNzd29yZCBwcm90ZWN0ZWRcXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ0ZpbGUgcGFzc3dvcmQnLCBmdW5jdGlvbiAocikge1xcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZGVkID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICBpZiAocikge1xcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcXG4gICAgICAgICAgICAgICAgICB9LCA1MDApXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcXG4gICAgICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gJ0FjY2VzcyBEZW5pZWQnXFxuICAgICAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9KVxcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXFxuICAgICAgICAgICAgLy8gZmlsZSBub3QgZm91bmRcXG4gICAgICAgICAgICB2bS5maWxlLm5hbWUgPSAnRmlsZSBOb3QgRm91bmQnXFxuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcXG4gICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICB2bS5lcnJvciA9IHRydWVcXG4gICAgICAgICAgfSlcXG4gICAgICB9LFxcbiAgICAgIGhhbmRsZUdsb2JhbEtleXByZXNzOiBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50XFxuICAgICAgICBpZiAoZSkge1xcbiAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xcbiAgICAgICAgICAgIGNhc2UgNDA6XFxuICAgICAgICAgICAgICAvLyBkb3duXFxuICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSgpXFxuICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgIGlmICh0aGlzLml0ZW1QYXNzKSB7XFxuICAgICAgICB0cnkge1xcbiAgICAgICAgICB0aGlzLmNJdGVtUGFzcyA9IHdpbmRvdy5hdG9iKHRoaXMuaXRlbVBhc3MpXFxuICAgICAgICB9IGNhdGNoIChlKSB7XFxuICAgICAgICAgIHRoaXMuY0l0ZW1QYXNzID0gbnVsbFxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICB0aGlzLnVwZGF0ZUZpbGVJbmZvKHRoaXMuY0l0ZW1QYXNzKVxcbiAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHRoaXMuaGFuZGxlR2xvYmFsS2V5cHJlc3NcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuICAuZG93bmxvYWQtaXRlbSB7XFxuICAgIG1hcmdpbjogMiU7XFxuICB9XFxuICBcXG4gIC5kb3dubG9hZC1hcmVhLXBhZGRpbmcge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kNmMzYTJkMCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRvd25sb2FkLWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5GaWxlIERvd25sb2FkPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRvd25sb2FkLWFyZWEtcGFkZGluZ1wiPlxuICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XG4gICAgICAgIDxoNT5Mb2FkaW5nIEZpbGUgSW5mb3JtYXRpb248L2g1PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgPG1kLWljb24gbWQtdGhlbWU9XCJsaWdodC1ibHVlXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XG4gICAgICAgIDxoNT57eyBmaWxlLm5hbWUgfX08L2g1PlxuICAgICAgICA8cD57eyBmaWxlLnNpemVUZXh0IH19PC9wPlxuICAgICAgICA8ZGl2IHYtaWY9XCIhZXJyb3JcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxtZC1idXR0b24gQGNsaWNrLm5hdGl2ZT1cImRvd25sb2FkRmlsZVwiPlxuICAgICAgICAgICAgICA8bWQtaWNvbiB2LWlmPVwiZmlsZS5wYXNzLmxlbmd0aCA+IDBcIj5sb2NrPC9tZC1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgPCEtLTxtZC1idXR0b24+Q29weSBMaW5rPC9tZC1idXR0b24+LS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2l0ZW1JZCcsICdpdGVtUGFzcyddLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGZpbGU6IHtcbiAgICAgICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICAgICAgc2l6ZTogJ3JldHJpZXZpbmcgaW5mb3JtYXRpb24gZnJvbSBzZXJ2ZXInLFxuICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgIHBhc3M6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgY0l0ZW1QYXNzOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZG93bmxvYWRGaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZG93bmxvYWQvJyArIHRoaXMuZmlsZS5pZCArICh0aGlzLmZpbGUucGFzcyA/ICchJyArIHRoaXMuZmlsZS5wYXNzIDogJycpXG4gICAgICB9LFxuICAgICAgdXBkYXRlRmlsZUluZm86IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgc3VmZml4ID0ga2V5ID8gJyEnICsga2V5IDogJydcbiAgICAgICAgdm0uZmlsZS5pZCA9IHZtLml0ZW1JZFxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZWluZm8vJyArIHZtLmZpbGUuaWQgKyBzdWZmaXgsIGF4aW9zUmVxdWVzdENvbmZpZylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9IHJlc3BvbnNlLmRhdGEubmFtZVxuICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXNwb25zZS5kYXRhLnNpemUpXG4gICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBpZiAoc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgdm0uZmlsZS5wYXNzID0ga2V5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAvLyBmaWxlIGlzIHBhc3N3b3JkIHByb3RlY3RlZFxuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBwYXNzd29yZCcsICdGaWxlIHBhc3N3b3JkJywgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcbiAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnQWNjZXNzIERlbmllZCdcbiAgICAgICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAvLyBmaWxlIG5vdCBmb3VuZFxuICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0ZpbGUgTm90IEZvdW5kJ1xuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBoYW5kbGVHbG9iYWxLZXlwcmVzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1QYXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRmlsZUluZm8odGhpcy5jSXRlbVBhc3MpXG4gICAgICBkb2N1bWVudC5vbmtleWRvd24gPSB0aGlzLmhhbmRsZUdsb2JhbEtleXByZXNzXG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kb3dubG9hZC1pdGVtIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIFxuICAuZG93bmxvYWQtYXJlYS1wYWRkaW5nIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMiU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkb3dubG9hZEl0ZW0udnVlPzE5MTJkOTllIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZG93bmxvYWQtaXRlbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkZpbGUgRG93bmxvYWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkb3dubG9hZC1hcmVhLXBhZGRpbmdcIlxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdkaXYnLCBbX2MoJ21kLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtc3Ryb2tlXCI6IDEuNSxcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1JywgW192bS5fdihcIkxvYWRpbmcgRmlsZSBJbmZvcm1hdGlvblwiKV0pXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1pY29uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aGVtZVwiOiBcImxpZ2h0LWJsdWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcImluc2VydF9kcml2ZV9maWxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlLnNpemVUZXh0KSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uZXJyb3IpID8gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJpZ2h0XCJcbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kb3dubG9hZEZpbGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0uZmlsZS5wYXNzLmxlbmd0aCA+IDApID8gX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibG9ja1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIERvd25sb2FkXFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pIDogX3ZtLl9lKCldLCAxKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDZjM2EyZDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgZG93bmxvYWQtYXJlYVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ2Rvd25sb2FkSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpdGVtSWRcIjogX3ZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICBcIml0ZW1QYXNzXCI6IF92bS4kcm91dGUucGFyYW1zLnBhc3NcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYxOTFiMzBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNmJhZWYxMiZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM2YmFlZjEyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMzZiYWVmMTJcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRhc2hib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzZiYWVmMTImc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI2YzlhNzAzZVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM2YmFlZjEyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtMzZiYWVmMTJdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZT83MTM3ZDNkN1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUNBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJkYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcInNocmluay1sYXlvdXRcXFwiPlxcbiAgICA8IS0tPGltZyBzcmM9XFxcIi4vYXNzZXRzL2xvZ28ucG5nXFxcIj4tLT5cXG4gICAgPGludHJvIHZpZXctdGl0bGU9XFxcIkRhc2hib2FyZFxcXCI+PC9pbnRybz5cXG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG4gIGltcG9ydCBmaWxlVXBsb2FkV2lkZ2V0IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldCdcXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcXG5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgIEludHJvLFxcbiAgICAgIGZpbGVVcGxvYWRXaWRnZXQsXFxuICAgICAgZGV2Q3JlZGl0c1xcbiAgICB9LFxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgICAgbmV4dCh2bSA9PiB7XFxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XFxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxuICAgICAgICB9XFxuICAgICAgfSlcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuc2hyaW5rLWxheW91dCB7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zNmJhZWYxMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiRGFzaGJvYXJkXCI+PC9pbnRybz5cbiAgICA8ZmlsZVVwbG9hZFdpZGdldD48L2ZpbGVVcGxvYWRXaWRnZXQ+XG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuICBpbXBvcnQgZmlsZVVwbG9hZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQnXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIGZpbGVVcGxvYWRXaWRnZXQsXG4gICAgICBkZXZDcmVkaXRzXG4gICAgfSxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICBuZXh0KHZtID0+IHtcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnNocmluay1sYXlvdXQge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzcxMzdkM2Q3IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTRmZTk0NmM0JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00ZmU5NDZjNCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi00ZmU5NDZjNFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbGVVcGxvYWRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00ZmU5NDZjNCZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJmNDE3ODBkYVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRmZTk0NmM0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVwbG9hZC1hcmVhLXBhZGRpbmdbZGF0YS12LTRmZTk0NmM0XSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNCU7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG4udXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNbZGF0YS12LTRmZTk0NmM0XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi51cGxvYWQtcHJvZ3Jlc3MtYmFyW2RhdGEtdi00ZmU5NDZjNF0ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udXBsb2FkLXNldHRpbmdzLXNlY3Rpb25bZGF0YS12LTRmZTk0NmM0XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT9kOGNkMmVlNlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ01BO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0NBQ0FcIixcImZpbGVcIjpcImZpbGVVcGxvYWRXaWRnZXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImZpbGUtdXBsb2FkLXdpZGdldFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0IHNlcC1iXFxcIj5cXG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwidmlld015RmlsZXNcXFwiPlZpZXcgbXkgZmlsZXM8L21kLWJ1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVwbG9hZC1oZXJlXFxcIiBAZHJvcC5zdG9wLnByZXZlbnQ9XFxcImhhbmRsZURyYWdEcm9wVXBsb2FkXFxcIiBAZHJhZ2VudGVyLnN0b3AucHJldmVudCBAZHJhZ2xlYXZlLnN0b3AucHJldmVudCBAZHJhZ292ZXIuc3RvcC5wcmV2ZW50PlxcbiAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cXFwidGFyZ2V0XFxcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZC10aXRsZVxcXCI+VXBsb2FkIEZpbGVzPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBEZXN0aW5hdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XFxcInVwbG9hZERlc3RpbmF0aW9uXFxcIj48L21kLWlucHV0PlxcbiAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLXN1YmhlYWRcXFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2s8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cGxvYWQtYXJlYS1wYWRkaW5nXFxcIiBAY2xpY2s9XFxcImJyb3dzZUZvckZpbGVzXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9yc1xcXCI+XFxuICAgICAgICAgICAgICA8IS0tPG1kLXNwaW5uZXIgbWQtc2l6ZT1cXFwiNjBcXFwiIDptZC1wcm9ncmVzcz1cXFwicHJvZ3Jlc3NJbmRpY2F0b3IudmFsdWVcXFwiIGNsYXNzPVxcXCJtZC13YXJuXFxcIj48L21kLXNwaW5uZXI+XFxuICAgICAgICAgICAgICAgICAgPHA+e3sgcHJvZ3Jlc3NNZXNzYWdlIH19PC9wPi0tPlxcbiAgICAgICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XFxcImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLVVwbG9hZGluZyBmaWxlLS0+XFxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cXFwicHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDBcXFwiPlVwbG9hZGluZzwvbWQtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVxcXCIocHJJbmQsIGl4KSBpbiBwcm9ncmVzc0luZGljYXRvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVxcXCJtZC1wcmltYXJ5XFxcIiB2LWlmPVxcXCIhcHJJbmQuZXJyb3JcXFwiPmNsb3VkX3F1ZXVlPC9tZC1pY29uPlxcbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVxcXCJtZC1wcmltYXJ5XFxcIiB2LWVsc2U+ZXJyb3I8L21kLWljb24+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgcHJJbmQubmFtZSB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gdi1pZj1cXFwiIXBySW5kLmVycm9yXFxcIj4ge3sgKHBySW5kLnZhbHVlIDwgMTAwKSA/IGBVcGxvYWRpbmcuLi4gKCR7cHJJbmQudmFsdWV9JSlgIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJyB9fTwvc3Bhbj4tLT5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBjbGFzcz1cXFwidXBsb2FkLXByb2dyZXNzLWJhclxcXCIgdi1pZj1cXFwiIXBySW5kLmVycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBySW5kLnZhbHVlIDwgMTAwKSA/IGBVcGxvYWRpbmcuLi4gKCR7cHJJbmQudmFsdWV9JSlgIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJyB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLXByb2dyZXNzIDptZC1wcm9ncmVzcz1cXFwicHJJbmQudmFsdWVcXFwiPjwvbWQtcHJvZ3Jlc3M+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPiB7eyAnVXBsb2FkIGVycm9yOiAnICsgcHJJbmQubWVzc2FnZSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiY2FuY2VsVXBsb2FkKHBySW5kKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCI+Y2FuY2VsPC9tZC1pY29uPlxcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVxcXCJtZC1wcmltYXJ5XFxcIj5maWxlX3VwbG9hZDwvbWQtaWNvbj5cXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwibWQtaW5zZXRcXFwiPjwvbWQtZGl2aWRlcj5cXG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWQgY29tcGxldGVkIGZpbGVzLS0+XFxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cXFwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFxcXCI+Q29tcGxldGVkPC9tZC1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XFxcIihjbXBsRmlsZSwgaXgpIGluIGNvbXBsZXRlZEZpbGVzXFxcIiBAY2xpY2submF0aXZlPVxcXCJ2aXNpdFVybChjbXBsRmlsZS5kb3dubG9hZFBhZ2UpXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZC1saXN0LXRleHQtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBjbXBsRmlsZS5uYW1lIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkIENvbXBsZXRlITwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cXFwibWQtcHJpbWFyeVxcXCI+ZG9uZTwvbWQtaWNvbj5cXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwibWQtaW5zZXRcXFwiPjwvbWQtZGl2aWRlcj5cXG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICA8L21kLWxpc3Q+XFxuICAgICAgICAgICAgICA8bWQtYnV0dG9uIHYtaWY9XFxcImNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDBcXFwiIEBjbGljay5uYXRpdmU9XFxcImNvbXBsZXRlZEZpbGVzID0gW11cXFwiPkNsZWFyIEFsbDwvbWQtYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiaW52aXNpYmxlXFxcIiByZWY9XFxcImJyb3dzZVxcXCIgQGNoYW5nZT1cXFwib25GaWxlc1VwbG9hZGVkXFxcIiBtdWx0aXBsZSAvPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5cXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XFxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XFxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXFxuICAgIH1cXG4gIH1cXG5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3JzOiBbXSxcXG4gICAgICAgIC8qIHNjaGVtYTpcXG4gICAgICAgIHtcXG4gICAgICAgICAgdmFsdWU6IG51bWJlciBbMC0xMDBdLFxcbiAgICAgICAgICBmaWxlUmVmOiBvYmplY3QgW3JlZmVyZW5jZSB0byBmaWxlIHRoYXQgaXMgdXBsb2FkaW5nXSxcXG4gICAgICAgICAgbmFtZTogc3RyaW5nIFtuYW1lIG9mIGZpbGVdLFxcbiAgICAgICAgICB4aHI6IG9iamVjdCBbeGhyIG9iamVjdCByZWZlcmVuY2VdLFxcbiAgICAgICAgICBlcnJvcjogYm9vbFxcbiAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcgb3IgbnVsbCBbYW4gZXJyb3IgbWVzc2FnZV1cXG4gICAgICAgIH1cXG4gICAgICAgICovXFxuICAgICAgICBjb21wbGV0ZWRGaWxlczogW10sXFxuICAgICAgICAvKiBzY2hlbWE6XFxuICAgICAgICAgKi9cXG4gICAgICAgIHVwbG9hZERlc3RpbmF0aW9uOiAnLydcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgdXBsb2FkaW5nRmlsZXM6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGhcXG4gICAgICB9LFxcbiAgICAgIHVwbG9hZGluZzogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkaW5nRmlsZXMgPiAwXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgdmlld015RmlsZXM6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvZmlsZXMnKVxcbiAgICAgIH0sXFxuICAgICAgYnJvd3NlRm9yRmlsZXM6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJHJlZnMuYnJvd3NlLmNsaWNrKClcXG4gICAgICB9LFxcbiAgICAgIG9uRmlsZXNVcGxvYWRlZDogZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgIGxldCBicm93c2UgPSB0aGlzLiRyZWZzLmJyb3dzZVxcbiAgICAgICAgbGV0IGZpbGVDb3VudCA9IGJyb3dzZS5maWxlcy5sZW5ndGhcXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUNvdW50OyBpKyspIHtcXG4gICAgICAgICAgbGV0IGYgPSBicm93c2UuZmlsZXNbaV1cXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xcbiAgICAgICAgICAgIHZhbHVlOiAwLFxcbiAgICAgICAgICAgIGZpbGVSZWY6IGYsXFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0luZGljYXRvcnMucHVzaChwcm9ncmVzcylcXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgaGFuZGxlRHJhZ0Ryb3BVcGxvYWQ6IGZ1bmN0aW9uIChlKSB7XFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgIHZhciBmID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV07XFxuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcXG4gICAgICAgICAgICB2YWx1ZTogMCxcXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXFxuICAgICAgICAgICAgbWVzc2FnZTogJydcXG4gICAgICAgICAgfVxcbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZiwgcHJvZ3Jlc3MpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICBjYW5jZWxVcGxvYWQ6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgcHJvZ3Jlc3MueGhyLmFib3J0KClcXG4gICAgICAgIHZtLnByb2dyZXNzSW5kaWNhdG9ycy5zcGxpY2Uodm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmluZGV4T2YocHJvZ3Jlc3MpLCAxKVxcbiAgICAgIH0sXFxuICAgICAgdXBsb2FkRmlsZTogZnVuY3Rpb24gKGZpbGUsIHByb2dyZXNzKSB7XFxuICAgICAgICBsZXQgdm0gPSB0aGlzXFxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXG4gICAgICAgIHByb2dyZXNzLnhociA9IHhoclxcbiAgICAgICAgeGhyLm9wZW4oXFxcIlBPU1RcXFwiLCBcXFwiL2FwaS91cGxvYWRcXFwiKVxcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICAgIC8vIHVwbG9hZCBjb21wbGV0ZVxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGxvYWQgY29tcGxldGUnLCBwcm9ncmVzcy5uYW1lKVxcbiAgICAgICAgICAgIC8vIGRlcXVldWUgdGhlIHVwbG9hZGluZyBmaWxlXFxuICAgICAgICAgICAgdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLnNwbGljZSh2bS5wcm9ncmVzc0luZGljYXRvcnMuaW5kZXhPZihwcm9ncmVzcyksIDEpXFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXFxuICAgICAgICAgICAgdm0uY29tcGxldGVkRmlsZXMucHVzaCh7XFxuICAgICAgICAgICAgICBuYW1lOiBwcm9ncmVzcy5uYW1lLFxcbiAgICAgICAgICAgICAgZG93bmxvYWRQYWdlOiAnLyMvZC8nICsgcmVzcG9uc2UuZmlsZUlkXFxuICAgICAgICAgICAgICAvLyBkb3dubG9hZFBhZ2U6IHJlc3BvbnNlLmRvd25sb2FkUGFnZSAvLyBnZXQgZG93bmxvYWQgcGFnZSBmcm9tIHNlcnZlciByZXNwb25zZVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgLy8gdXBkYXRlIHByb2dyZXNzIGluZGljYXRvclxcbiAgICAgICAgICAgIHByb2dyZXNzLmVycm9yID0gdHJ1ZVxcbiAgICAgICAgICAgIC8vIHByb2dyZXNzLm1lc3NhZ2UgPSB4aHIucmVzcG9uc2VUZXh0XFxuICAgICAgICAgICAgLy8gcmVhY3RpdmUgdXBkYXRlXFxuICAgICAgICAgICAgdm0uJHNldChwcm9ncmVzcywgJ21lc3NhZ2UnLCB4aHIucmVzcG9uc2VUZXh0KVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XFxuICAgICAgICAgICAgcHJvZ3Jlc3MudmFsdWUgPSBNYXRoLmZsb29yKChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXFxuICAgICAgICBmb3JtLmFwcGVuZChcXFwiYXBpa2V5XFxcIiwgdm0uJHJvb3QudS5rZXkpXFxuICAgICAgICBmb3JtLmFwcGVuZChcXFwiZGlyXFxcIiwgdm0udXBsb2FkRGVzdGluYXRpb24pXFxuICAgICAgICBmb3JtLmFwcGVuZChcXFwiZmlsZVxcXCIsIGZpbGUpXFxuICAgICAgICB4aHIuc2VuZChmb3JtKVxcbiAgICAgIH0sXFxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XFxuICAgICAgICB3aW5kb3cub3Blbih1LCAnX2JsYW5rJylcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLnVwbG9hZC1hcmVhLXBhZGRpbmcge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE0JTtcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIH1cXG4gIFxcbiAgLnVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAudXBsb2FkLXByb2dyZXNzLWJhciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIFxcbiAgLnVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00ZmU5NDZjNCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC13aWRnZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cbiAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljay5uYXRpdmU9XCJ2aWV3TXlGaWxlc1wiPlZpZXcgbXkgZmlsZXM8L21kLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWhlcmVcIiBAZHJvcC5zdG9wLnByZXZlbnQ9XCJoYW5kbGVEcmFnRHJvcFVwbG9hZFwiIEBkcmFnZW50ZXIuc3RvcC5wcmV2ZW50IEBkcmFnbGVhdmUuc3RvcC5wcmV2ZW50IEBkcmFnb3Zlci5zdG9wLnByZXZlbnQ+XG4gICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJ0YXJnZXRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPlVwbG9hZCBGaWxlczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB1cGxvYWQtc2V0dGluZ3Mtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5VcGxvYWQgRGVzdGluYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJ1cGxvYWREZXN0aW5hdGlvblwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtc3ViaGVhZFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2s8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtYXJlYS1wYWRkaW5nXCIgQGNsaWNrPVwiYnJvd3NlRm9yRmlsZXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICAgIDwhLS08bWQtc3Bpbm5lciBtZC1zaXplPVwiNjBcIiA6bWQtcHJvZ3Jlc3M9XCJwcm9ncmVzc0luZGljYXRvci52YWx1ZVwiIGNsYXNzPVwibWQtd2FyblwiPjwvbWQtc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2dyZXNzTWVzc2FnZSB9fTwvcD4tLT5cbiAgICAgICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiPlxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWRpbmcgZmlsZS0tPlxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cInByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwXCI+VXBsb2FkaW5nPC9tZC1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihwckluZCwgaXgpIGluIHByb2dyZXNzSW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1pZj1cIiFwckluZC5lcnJvclwiPmNsb3VkX3F1ZXVlPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1lbHNlPmVycm9yPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IHBySW5kLm5hbWUgfX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gdi1pZj1cIiFwckluZC5lcnJvclwiPiB7eyAocHJJbmQudmFsdWUgPCAxMDApID8gYFVwbG9hZGluZy4uLiAoJHtwckluZC52YWx1ZX0lKWAgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nIH19PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MtYmFyXCIgdi1pZj1cIiFwckluZC5lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLXByb2dyZXNzIDptZC1wcm9ncmVzcz1cInBySW5kLnZhbHVlXCI+PC9tZC1wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPiB7eyAnVXBsb2FkIGVycm9yOiAnICsgcHJJbmQubWVzc2FnZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrLm5hdGl2ZT1cImNhbmNlbFVwbG9hZChwckluZClcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2FuY2VsPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV91cGxvYWQ8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPCEtLVVwbG9hZCBjb21wbGV0ZWQgZmlsZXMtLT5cbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIHYtaWY9XCJjb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwXCI+Q29tcGxldGVkPC9tZC1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihjbXBsRmlsZSwgaXgpIGluIGNvbXBsZXRlZEZpbGVzXCIgQGNsaWNrLm5hdGl2ZT1cInZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmNsb3VkX2RvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkIENvbXBsZXRlITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmRvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cbiAgICAgICAgICAgICAgPG1kLWJ1dHRvbiB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiIEBjbGljay5uYXRpdmU9XCJjb21wbGV0ZWRGaWxlcyA9IFtdXCI+Q2xlYXIgQWxsPC9tZC1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiaW52aXNpYmxlXCIgcmVmPVwiYnJvd3NlXCIgQGNoYW5nZT1cIm9uRmlsZXNVcGxvYWRlZFwiIG11bHRpcGxlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2dyZXNzSW5kaWNhdG9yczogW10sXG4gICAgICAgIC8qIHNjaGVtYTpcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBudW1iZXIgWzAtMTAwXSxcbiAgICAgICAgICBmaWxlUmVmOiBvYmplY3QgW3JlZmVyZW5jZSB0byBmaWxlIHRoYXQgaXMgdXBsb2FkaW5nXSxcbiAgICAgICAgICBuYW1lOiBzdHJpbmcgW25hbWUgb2YgZmlsZV0sXG4gICAgICAgICAgeGhyOiBvYmplY3QgW3hociBvYmplY3QgcmVmZXJlbmNlXSxcbiAgICAgICAgICBlcnJvcjogYm9vbFxuICAgICAgICAgIG1lc3NhZ2U6IHN0cmluZyBvciBudWxsIFthbiBlcnJvciBtZXNzYWdlXVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGNvbXBsZXRlZEZpbGVzOiBbXSxcbiAgICAgICAgLyogc2NoZW1hOlxuICAgICAgICAgKi9cbiAgICAgICAgdXBsb2FkRGVzdGluYXRpb246ICcvJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHVwbG9hZGluZ0ZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGhcbiAgICAgIH0sXG4gICAgICB1cGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkaW5nRmlsZXMgPiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB2aWV3TXlGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpbGVzJylcbiAgICAgIH0sXG4gICAgICBicm93c2VGb3JGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXG4gICAgICB9LFxuICAgICAgb25GaWxlc1VwbG9hZGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcbiAgICAgICAgbGV0IGZpbGVDb3VudCA9IGJyb3dzZS5maWxlcy5sZW5ndGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlQ291bnQ7IGkrKykge1xuICAgICAgICAgIGxldCBmID0gYnJvd3NlLmZpbGVzW2ldXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFuZGxlRHJhZ0Ryb3BVcGxvYWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgZiA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgZmlsZVJlZjogZixcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FuY2VsVXBsb2FkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBwcm9ncmVzcy54aHIuYWJvcnQoKVxuICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcbiAgICAgIH0sXG4gICAgICB1cGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcHJvZ3Jlc3MueGhyID0geGhyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi9hcGkvdXBsb2FkXCIpXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gdXBsb2FkIGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBsb2FkIGNvbXBsZXRlJywgcHJvZ3Jlc3MubmFtZSlcbiAgICAgICAgICAgIC8vIGRlcXVldWUgdGhlIHVwbG9hZGluZyBmaWxlXG4gICAgICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogcHJvZ3Jlc3MubmFtZSxcbiAgICAgICAgICAgICAgZG93bmxvYWRQYWdlOiAnLyMvZC8nICsgcmVzcG9uc2UuZmlsZUlkXG4gICAgICAgICAgICAgIC8vIGRvd25sb2FkUGFnZTogcmVzcG9uc2UuZG93bmxvYWRQYWdlIC8vIGdldCBkb3dubG9hZCBwYWdlIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgICAgICBwcm9ncmVzcy5lcnJvciA9IHRydWVcbiAgICAgICAgICAgIC8vIHByb2dyZXNzLm1lc3NhZ2UgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAvLyByZWFjdGl2ZSB1cGRhdGVcbiAgICAgICAgICAgIHZtLiRzZXQocHJvZ3Jlc3MsICdtZXNzYWdlJywgeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICBwcm9ncmVzcy52YWx1ZSA9IE1hdGguZmxvb3IoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJhcGlrZXlcIiwgdm0uJHJvb3QudS5rZXkpXG4gICAgICAgIGZvcm0uYXBwZW5kKFwiZGlyXCIsIHZtLnVwbG9hZERlc3RpbmF0aW9uKVxuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSlcbiAgICAgICAgeGhyLnNlbmQoZm9ybSlcbiAgICAgIH0sXG4gICAgICB2aXNpdFVybDogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC51cGxvYWQtYXJlYS1wYWRkaW5nIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC51cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9ycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAudXBsb2FkLXByb2dyZXNzLWJhciB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAudXBsb2FkLXNldHRpbmdzLXNlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZmlsZVVwbG9hZFdpZGdldC52dWU/ZDhjZDJlZTYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZC13aWRnZXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGVmdCBzZXAtYlwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS52aWV3TXlGaWxlcygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlldyBteSBmaWxlc1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWhlcmVcIixcbiAgICBvbjoge1xuICAgICAgXCJkcm9wXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGFuZGxlRHJhZ0Ryb3BVcGxvYWQoJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiZHJhZ2VudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ2xlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ292ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdXBsb2FkLXNldHRpbmdzLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXBsb2FkIERlc3RpbmF0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGxvYWREZXN0aW5hdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcInVwbG9hZERlc3RpbmF0aW9uXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwbG9hZERlc3RpbmF0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGxvYWREZXN0aW5hdGlvbiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtc3ViaGVhZFwiXG4gIH0sIFtfdm0uX3YoXCJEcmFnIGFuZCBkcm9wIG9yIGNsaWNrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWFyZWEtcGFkZGluZ1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5icm93c2VGb3JGaWxlc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBbKF92bS5wcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIlVwbG9hZGluZ1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnByb2dyZXNzSW5kaWNhdG9ycyksIGZ1bmN0aW9uKHBySW5kLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywgWyghcHJJbmQuZXJyb3IpID8gX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfcXVldWVcIildKSA6IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImVycm9yXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBySW5kLm5hbWUpICsgXCIgXCIpXSksIF92bS5fdihcIiBcIiksICghcHJJbmQuZXJyb3IpID8gW19jKCdzcGFuJywgW192bS5fdihfdm0uX3MoKHBySW5kLnZhbHVlIDwgMTAwKSA/IChcIlVwbG9hZGluZy4uLiAoXCIgKyAocHJJbmQudmFsdWUpICsgXCIlKVwiKSA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtcHJvZ3Jlc3MnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1kLXByb2dyZXNzXCI6IHBySW5kLnZhbHVlXG4gICAgICB9XG4gICAgfSldIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKCdVcGxvYWQgZXJyb3I6ICcgKyBwckluZC5tZXNzYWdlKSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNhbmNlbFVwbG9hZChwckluZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjYW5jZWxcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIlxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmaWxlX3VwbG9hZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIkNvbXBsZXRlZFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmNvbXBsZXRlZEZpbGVzKSwgZnVuY3Rpb24oY21wbEZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS52aXNpdFVybChjbXBsRmlsZS5kb3dubG9hZFBhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhjbXBsRmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiVXBsb2FkIENvbXBsZXRlIVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiXG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImRvbmVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY29tcGxldGVkRmlsZXMgPSBbXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsZWFyIEFsbFwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJicm93c2VcIixcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZXNVcGxvYWRlZFxuICAgIH1cbiAgfSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRmZTk0NmM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIkRhc2hib2FyZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ZpbGVVcGxvYWRXaWRnZXQnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM2YmFlZjEyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMmRiZTZhYzkmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJkYmU2YWM5IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTJkYmU2YWM5XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlmaWxlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJkYmU2YWM5JnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjM3Mjg3ZjUwXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmRiZTZhYzkmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtMmRiZTZhYzldIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/MDVmZmY2MGZcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlDQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibXlmaWxlcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcbiAgICA8aW50cm8gdmlldy10aXRsZT1cXFwiTXkgRmlsZXNcXFwiPjwvaW50cm8+XFxuICAgIDxteUZpbGVzTGlzdCA6ZGlyPVxcXCJkaXJcXFwiPjwvbXlGaWxlc0xpc3Q+XFxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXFxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiBbJ2RpciddLFxcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7fVxcbiAgICB9LFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgSW50cm8sXFxuICAgICAgbXlGaWxlc0xpc3QsXFxuICAgICAgZGV2Q3JlZGl0c1xcbiAgICB9LFxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgICAgbmV4dCh2bSA9PiB7XFxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XFxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxuICAgICAgICB9XFxuICAgICAgfSlcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuICAuc2hyaW5rLWxheW91dCB7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yZGJlNmFjOSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cbiAgICA8aW50cm8gdmlldy10aXRsZT1cIk15IEZpbGVzXCI+PC9pbnRybz5cbiAgICA8bXlGaWxlc0xpc3QgOmRpcj1cImRpclwiPjwvbXlGaWxlc0xpc3Q+XG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnZGlyJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBteUZpbGVzTGlzdCxcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9LFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgLnNocmluay1sYXlvdXQge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteWZpbGVzLnZ1ZT8wNWZmZjYwZiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yZDBkNmIxYyZzY29wZWQ9dHJ1ZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbXlGaWxlc0xpc3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZDBkNmIxYyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMmQwZDZiMWNcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlGaWxlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmQwZDZiMWMmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215RmlsZXNMaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcImE1NmU4NTI4XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmQwZDZiMWMmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIm15RmlsZXNMaXN0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yZDBkNmIxYyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibXktZmlsZXMtbGlzdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdCBzZXAtYlwiPlxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrLm5hdGl2ZT1cInVwbG9hZE1vcmVGaWxlc1wiPlVwbG9hZCBGaWxlczwvbWQtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWRlZC1maWxlcy1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5BbGwgTXkgRmlsZXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRGaW5pc2hlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIDxwPkVycm9yPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJub0l0ZW1zXCI+XG4gICAgICAgICAgICAgICAgPHA+Tm8gRmlsZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPCEtLWRpcmVjdG9yaWVzLS0+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWF0Um9vdERpclwiPlxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVwiZGlyVXBMZXZlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZvbGRlcjwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLi4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBQYXJlbnQgRm9sZGVyIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPi0tPlxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihkaXIsIGl4KSBpbiBkaXJzXCIgQGNsaWNrLm5hdGl2ZT1cIm9wZW5EaXIoaXgpXCI+XG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5mb2xkZXI8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZGlyLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBGb2xkZXIgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8IS0tPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj4tLT5cbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8IS0tZmlsZXMtLT5cbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVwiKGZpbGUsIGl4KSBpbiBmaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBmaWxlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBnZXRIclNpemUoZmlsZS5zaXplKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrLm5hdGl2ZT1cImxvY2tGaWxlKGl4KVwiIHYtaWY9XCIhZmlsZS5sb2NrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bG9ja19vcGVuPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2submF0aXZlPVwidW5sb2NrRmlsZShpeClcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2s8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljay5uYXRpdmU9XCJkb3dubG9hZEZpbGUoaXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfZG93bmxvYWQ8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIG1kLW1lbnUtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5tb3JlX2hvcml6PC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XCJ2aXNpdERvd25sb2FkUGFnZShpeClcIj5Eb3dubG9hZCBQYWdlPC9tZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwicmVuYW1lRmlsZShpeClcIj5SZW5hbWU8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XCJkZWxldGVGaWxlKGl4KVwiPkRlbGV0ZTwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L21kLW1lbnUtY29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvbWQtbWVudT5cbiAgICAgICAgICAgICAgICAgIDwhLS08bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPi0tPlxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8L21kLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XG4gICAgICAgICAgICAgIDxoNT5SZXRyaWV2aW5nIERhdGE8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnZGlyJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpclN0cnVjdHVyZToge30sXG4gICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgZGlyczogW10sXG4gICAgICAgIGxvYWRGaW5pc2hlZDogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgY3VycmVudERpcjogdGhpcy5kaXJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBub0l0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzLmxlbmd0aCA9PSAwICYmIHRoaXMuZGlycy5sZW5ndGggPT0gMFxuICAgICAgfSxcbiAgICAgIGF0Um9vdERpcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyID09PSAnLydcbiAgICAgIH0sXG4gICAgICBjdXJyZW50RGlyU3RydWN0dXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHdhbGsgZGlyZWN0b3J5IHN0cnVjdHVyZVxuICAgICAgICBsZXQgc2VnbWVudHMgPSB0aGlzLmN1cnJlbnREaXIuc3BsaXQoJy8nKVxuICAgICAgICAvLyBjbGVhbiB1cFxuICAgICAgICBzZWdtZW50cyA9IHNlZ21lbnRzLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGRpcmVjdG9yeVxuICAgICAgICBsZXQgd29ya2luZ0RpclN0cnVjdHVyZSA9IHRoaXMuZGlyU3RydWN0dXJlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgY3VycmVudFNlZ21lbnQgPSBzZWdtZW50c1tpXVxuICAgICAgICAgIHdvcmtpbmdEaXJTdHJ1Y3R1cmUgPSB3b3JraW5nRGlyU3RydWN0dXJlLmRpcnMuZmluZChkID0+IGQubmFtZSA9PT0gY3VycmVudFNlZ21lbnQpXG4gICAgICAgICAgaWYgKCF3b3JraW5nRGlyU3RydWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmtpbmdEaXJTdHJ1Y3R1cmVcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGdldEhyU2l6ZTogZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvb3QuaHVtYW5GaWxlU2l6ZShsKVxuICAgICAgfSxcbiAgICAgIHVwbG9hZE1vcmVGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3UnKVxuICAgICAgfSxcbiAgICAgIHZpc2l0VXJsOiBmdW5jdGlvbiAodSkge1xuICAgICAgICB3aW5kb3cub3Blbih1LCAnX2JsYW5rJylcbiAgICAgIH0sXG4gICAgICB2aXNpdERvd25sb2FkUGFnZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWxlc1tpeF1cbiAgICAgICAgLy8gICAgICAgICBpZiAoZi5sb2NrZWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgLy8gICAgICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKFxuICAgICAgICAvLyAgICAgICAgICAgICBgXG4gICAgICAgIC8vIFRoaXMgZmlsZSBpcyBwYXNzd29yZCBwcm90ZWN0ZWQuIERvIHlvdSB3YW50IHRvIGVuY29kZSB0aGUgPGJyPlxuICAgICAgICAvLyBwYXNzd29yZCBpbiB0aGUgbGluaz8gSWYgeW91IGRvbid0IGRvIHRoaXMsIGFueW9uZSB3aG8gdmlzaXRzIDxicj5cbiAgICAgICAgLy8geW91ciBsaW5rIHdpbGwgbmVlZCB0byBlbnRlciB0aGUgZmlsZSBwYXNzd29yZCB0byB2aWV3IHRoZSBmaWxlLlxuICAgICAgICAvLyBgLFxuICAgICAgICAvLyAgICAgICAgICAgICAnSW5jbHVkZSBwYXNzd29yZD8nLFxuICAgICAgICAvLyAgICAgICAgICAgICBmdW5jdGlvbiAocikge1xuICAgICAgICAvLyAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIHBhc3N3b3JkXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdm0uc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzKGl4KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwgNDAwKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBqdXN0IGdvIHRvIGxpbmtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBkbFBhZ2UgPSAnLyMvZC8nICsgZi5maWxlSWRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRsUGFnZSwgJ19ibGFuaycpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9LCAnWWVzJywgJ05vJylcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBqdXN0IG9wZW4gdGhlIHBhZ2VcbiAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxuICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgICAgLy8gICAgICAgc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgIC8vICAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgLy8gICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgLy8gICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0cGFzcy8nICsgZi5maWxlSWQsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXG4gICAgICAvLyAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gICAgICAgICAgICAgLy8gcGFzc3dvcmQgc2hvdWxkIGJlIHJldHVybmVkXG4gICAgICAvLyAgICAgICAgICAgICBsZXQgZGxQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdICsgJyMvZC8nICsgZi5maWxlSWQgKyAnLycgKyB3aW5kb3cuYnRvYShyZXMuZGF0YSlcbiAgICAgIC8vICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cChcbiAgICAgIC8vICAgICAgICAgICAgICAgYFxuICAgICAgLy8gRG93bmxvYWQgbGluayB3aXRoIHBhc3N3b3JkIGVuY29kZWQ6PGJyPlxuICAgICAgLy8gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7ZGxQYWdlfVwiPiR7ZGxQYWdlfTwvYT5cbiAgICAgIC8vICAgICAgICAgICAgIGAsXG4gICAgICAvLyAgICAgICAgICAgICAgICdMaW5rIENyZWF0ZWQnKVxuICAgICAgLy8gICAgICAgICAgIH0pXG4gICAgICAvLyAgICAgICB9LFxuICAgICAgZG93bmxvYWRGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpbGVzW2l4XVxuICAgICAgICAvLyB1c2UgZm9yY2UgZG93bmxvYWQgdG8gYnlwYXNzIHBhc3N3b3JkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZmRvd25sb2FkLycgKyBmLmZpbGVJZCArICc/YXBpa2V5PScgKyB0aGlzLiRyb290LnUua2V5XG4gICAgICB9LFxuICAgICAgbG9ja0ZpbGU6IGZ1bmN0aW9uIChpeCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXG4gICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ1Bhc3N3b3JkJywgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy8gc2VuZCBsb2NrIHJlcXVlc3RcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL2xvY2svJyArIGYuZmlsZUlkICsgJyEnICsgciwge30sIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHVubG9ja0ZpbGU6IGZ1bmN0aW9uIChpeCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBwYXNzd29yZCBvbiB0aGlzIGZpbGU/JywgJ0NvbmZpcm0gVW5sb2NrJywgKHIpID0+IHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy8gc2VuZCB1bmxvY2sgcmVxdWVzdFxuICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvdW5sb2NrLycgKyBmLmZpbGVJZCwge30sIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICByZW5hbWVGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBuZXcgbmFtZScsICdGaWxlIG5hbWUnLFxuICAgICAgICAgIChyKSA9PiB7XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAvLyBzZW5kIHJlbmFtZSByZXF1ZXN0XG4gICAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL3JlbmFtZS8nICsgZi5maWxlSWQgKyAnLycgKyByLCB7fSwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgICBmLm5hbWUgPSByXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUZpbGU6IGZ1bmN0aW9uIChpeCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmlsZT8gSXQgY2Fubm90IGJlIHJlY292ZXJlZC4nLCAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgIChyKSA9PiB7XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAvLyBzZW5kIGRlbGV0ZSByZXF1ZXN0XG4gICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9kZWxldGUvJyArIGYuZmlsZUlkLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGVzLnNwbGljZShpeCwgMSlcbiAgICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXJTdHJ1Y3R1cmUuZmlsZXMuc3BsaWNlKGl4LCAxKVxuICAgICAgICAgICAgICAgICAgLy8gcHJvcGFnYXRlIHRvIGRpcmVjdG9yaWVzXG4gICAgICAgICAgICAgICAgICBpZiAodm0ubm9JdGVtcykgeyAvLyBpZiBjdXJyZW50IGRpciBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBkaXIgYW5kIHN3aXRjaCB0byBwYXJlbnQgZGlyXG4gICAgICAgICAgICAgICAgICAgIHZtLmRpclN0cnVjdHVyZS5kaXJzID0gdm0uZGlyU3RydWN0dXJlLmRpcnMuZmlsdGVyKGQgPT4gZC5uYW1lICE9PSB2bS5jdXJyZW50RGlyU3RydWN0dXJlLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHZtLmRpclVwTGV2ZWwoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvcGVuRGlyOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IG5ld0RpclBhdGggPSB0aGlzLmRpcnNbaXhdLnBhdGhcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvRGlyKG5ld0RpclBhdGgpXG4gICAgICB9LFxuICAgICAgZGlyVXBMZXZlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXRSb290RGlyKSB7XG4gICAgICAgICAgbGV0IHNlZ21lbnRzID0gdGhpcy5jdXJyZW50RGlyLnNwbGl0KCcvJylcbiAgICAgICAgICBzZWdtZW50cyA9IHNlZ21lbnRzLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIHNlZ21lbnRzLnBvcCgpXG4gICAgICAgICAgbGV0IG5ld0RpclBhdGggPSAnLycgKyBzZWdtZW50cy5qb2luKCcvJylcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9EaXIobmV3RGlyUGF0aClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRlVG9EaXI6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvZmlsZXMnICsgcGF0aClcbiAgICAgIH0sXG4gICAgICB1cGRhdGVGaWxlc0RpcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdvcmtpbmdEaXJTdHJ1Y3R1cmUgPSB0aGlzLmN1cnJlbnREaXJTdHJ1Y3R1cmVcbiAgICAgICAgaWYgKCF3b3JraW5nRGlyU3RydWN0dXJlKSByZXR1cm5cbiAgICAgICAgLy8gbm93IHVwZGF0ZSBjb2xsZWN0aW9uc1xuICAgICAgICB0aGlzLmZpbGVzID0gd29ya2luZ0RpclN0cnVjdHVyZS5maWxlc1xuICAgICAgICB0aGlzLmRpcnMgPSB3b3JraW5nRGlyU3RydWN0dXJlLmRpcnNcbiAgICAgIH0sXG4gICAgICBmZXRjaERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbG9hZCBkaXJlY3Rvcnkgc3RydWN0dXJlIGZyb20gc2VydmVyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgdm0uY3VycmVudERpciA9IHZtLmN1cnJlbnREaXIgfHwgJy8nXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZtLmRpcilcbiAgICAgICAgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKVxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMnLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gbWVyZ2UgZmlsZSBsaXN0XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgdm0uZGlyU3RydWN0dXJlID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgdm0udXBkYXRlRmlsZXNEaXJzKClcbiAgICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5sb2FkRmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBoYW5kbGVHbG9iYWxLZXlwcmVzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgdGhpcy5kaXJVcExldmVsKClcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5nbygxKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICckcm91dGUnICh0bywgZnJvbSkge1xuICAgICAgICAvLyB1cGRhdGUgY3VycmVudCBkaXJlY3RvcnlcbiAgICAgICAgaWYgKCF0aGlzLmRpclN0cnVjdHVyZSkge1xuICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREaXIgPSAnLycgKyAodG8ucGFyYW1zLmRpciB8fCAnJylcbiAgICAgICAgLy8gdGhpcyB3aWxsIHVwZGF0ZSBzdHJ1Y3R1cmVcbiAgICAgICAgdGhpcy51cGRhdGVGaWxlc0RpcnMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5mZXRjaERhdGEoKVxuICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gdGhpcy5oYW5kbGVHbG9iYWxLZXlwcmVzc1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteUZpbGVzTGlzdC52dWU/NTVlOWY3ZDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBsb2FkTW9yZUZpbGVzKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZGVkLWZpbGVzLWxpc3RcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBbGwgTXkgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5sb2FkRmluaXNoZWQpID8gX2MoJ2RpdicsIFsoX3ZtLmVycm9yKSA/IF9jKCdkaXYnLCBbX2MoJ3AnLCBbX3ZtLl92KFwiRXJyb3JcIildKV0pIDogKF92bS5ub0l0ZW1zKSA/IF9jKCdkaXYnLCBbX2MoJ3AnLCBbX3ZtLl92KFwiTm8gRmlsZXNcIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCJcbiAgfSwgWyghX3ZtLmF0Um9vdERpcikgPyBfYygnZGl2JywgW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kaXJVcExldmVsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcImZvbGRlclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIC4uIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIgUGFyZW50IEZvbGRlciBcIildKV0pXSwgMSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5kaXJzKSwgZnVuY3Rpb24oZGlyLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ub3BlbkRpcihpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmb2xkZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoZGlyLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIgRm9sZGVyIFwiKV0pXSldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZmlsZXMpLCBmdW5jdGlvbihmaWxlLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX2RvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5nZXRIclNpemUoZmlsZS5zaXplKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFmaWxlLmxvY2tlZCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tfb3BlblwiKV0pXSwgMSkgOiBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVubG9ja0ZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibG9ja1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZG93bmxvYWRGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfZG93bmxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJtb3JlX2hvcml6XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXREb3dubG9hZFBhZ2UoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRG93bmxvYWQgUGFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ucmVuYW1lRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJSZW5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmRlbGV0ZUZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRGVsZXRlXCIpXSldLCAxKV0sIDEpXSwgMSlcbiAgfSldLCAyKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogMS41LFxuICAgICAgXCJtZC1pbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmQwZDZiMWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIk15IEZpbGVzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbXlGaWxlc0xpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlyXCI6IF92bS5kaXJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmRiZTZhYzkhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYWNhZTg1YjImc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWFjYWU4NWIyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWFjYWU4NWIyXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFjYWU4NWIyJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjViN2YzNGM2XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYWNhZTg1YjImc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtYWNhZTg1YjJdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlPzZmNmM1ZDgyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5Q0E7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicHJvZmlsZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwic2hyaW5rLWxheW91dFxcXCI+XFxuICAgIDwhLS08aW1nIHNyYz1cXFwiLi9hc3NldHMvbG9nby5wbmdcXFwiPi0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxpbnRybyB2aWV3LXRpdGxlPVxcXCJVc2VyIFByb2ZpbGVcXFwiPjwvaW50cm8+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgPG15UHJvZmlsZT48L215UHJvZmlsZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcXG4gIGltcG9ydCBteVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9teVByb2ZpbGUnXFxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICBJbnRybyxcXG4gICAgICBteVByb2ZpbGUsXFxuICAgICAgZGV2Q3JlZGl0c1xcbiAgICB9LFxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgICAgbmV4dCh2bSA9PiB7XFxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XFxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxuICAgICAgICB9XFxuICAgICAgfSlcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAuc2hyaW5rLWxheW91dCB7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hY2FlODViMiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW50cm8gdmlldy10aXRsZT1cIlVzZXIgUHJvZmlsZVwiPjwvaW50cm8+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxuICAgICAgICAgIDxteVByb2ZpbGU+PC9teVByb2ZpbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBteVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9teVByb2ZpbGUnXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIG15UHJvZmlsZSxcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9LFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZmlsZS52dWU/NmY2YzVkODIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMTFlYWQyNjAmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMWVhZDI2MCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teVByb2ZpbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTExZWFkMjYwXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteVByb2ZpbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTExZWFkMjYwJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9teVByb2ZpbGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMzhkOTU4ZDhcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMWVhZDI2MCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnAtc2VjdGlvbltkYXRhLXYtMTFlYWQyNjBdIHtcXG4gIG1hcmdpbi10b3A6IDMlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlP2VmYzM1ZTkyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnTUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibXlQcm9maWxlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJteS1wcm9maWxlIGxlZnRcXFwiPlxcbiAgICA8aDQ+TWFuYWdlIEFjY291bnQgKHt7ICRyb290LnUubmFtZSB9fSk8L2g0PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwLXNlY3Rpb25cXFwiPlxcbiAgICAgIDxoNT5SZXNvdXJjZSBVc2FnZTwvaDU+XFxuICAgICAgPGRpdiB2LWlmPVxcXCJ1SW5mby5sb2FkZWRcXFwiPlxcbiAgICAgICAgPHA+XFxuICAgICAgICAgIFVzaW5nXFxuICAgICAgICAgIDxiPnt7IHVJbmZvLnVzYWdlIH19PC9iPiBvZiA8Yj57eyB1SW5mby5xdW90YSB9fTwvYj5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IHYtZWxzZT5cXG4gICAgICAgIDxtZC1zcGlubmVyIDptZC1zdHJva2U9XFxcIjEuNVxcXCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XFxuICAgICAgICA8cD5SZXRyaWV2aW5nIERhdGE8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPHA+PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicC1zZWN0aW9uXFxcIj5cXG4gICAgICA8aDU+QVBJPC9oNT5cXG4gICAgICA8aDY+QVBJIEtleTogPGNvZGU+e3sgJHJvb3QudS5rZXkgfX08L2NvZGU+PC9oNj5cXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1wcmltYXJ5IG1kLXJhaXNlZFxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZ2VuZXJhdGVOZXdBcGlLZXlcXFwiPkdlbmVyYXRlIE5ldzwvbWQtYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicC1zZWN0aW9uXFxcIj5cXG4gICAgICA8aDU+U2VjdXJpdHk8L2g1PlxcbiAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XFxcInRyeVVwZGF0ZVBhc3N3b3JkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVpZ2h0IGNvbHVtbnNcXFwiPlxcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcInVwZGF0ZVBhc3N3b3JkLm9sZFxcXCI+PC9tZC1pbnB1dD5cXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cXG4gICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiB2LW1vZGVsPVxcXCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFxcXCI+PC9tZC1pbnB1dD5cXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeCBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwidXBkYXRlUGFzc3dvcmQuY29uZmlybVxcXCI+PC9tZC1pbnB1dD5cXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJlcnJvci1tZXNzYWdlXFxcIj57eyB1cGRhdGVQYXNzd29yZC5lcnIgfX08L3A+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiaW52aXNpYmxlXFxcIj48L2lucHV0PlxcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtcmFpc2VkIG1kLXByaW1hcnlcXFwiIEBjbGljay5uYXRpdmU9XFxcInRyeVVwZGF0ZVBhc3N3b3JkXFxcIiA6ZGlzYWJsZWQ9XFxcIiF1cGRhdGVQYXNzd29yZC5lXFxcIj5DaGFuZ2UgUGFzc3dvcmQ8L21kLWJ1dHRvbj5cXG4gICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2PlxcbiAgICAgIDxoNT5EYW5nZXIgWm9uZTwvaDU+XFxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtcmFpc2VkIG1kLXdhcm5cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUFsbEZpbGVzXFxcIj5EZWxldGUgQWxsIEZpbGVzPC9tZC1idXR0b24+XFxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtcmFpc2VkIG1kLXdhcm5cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUFjY291bnRcXFwiPkRlbGV0ZSBBY2NvdW50PC9tZC1idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcXG4gICAgfVxcbiAgfVxcblxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICB1cGRhdGVQYXNzd29yZDoge1xcbiAgICAgICAgICBvbGQ6ICcnLFxcbiAgICAgICAgICBwYXNzd29yZDogJycsXFxuICAgICAgICAgIGNvbmZpcm06ICcnLFxcbiAgICAgICAgICBlcnI6ICcnLFxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcXG4gICAgICAgIH0sXFxuICAgICAgICB1SW5mbzoge1xcbiAgICAgICAgICBxdW90YTogbnVsbCxcXG4gICAgICAgICAgdXNhZ2U6IG51bGwsXFxuICAgICAgICAgIGxvYWRlZDogZmFsc2VcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBnZW5lcmF0ZU5ld0FwaUtleTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCBhIG5ldyBBUEkga2V5PyBUaGUgb2xkIG9uZSB3aWxsIG5vIGxvbmdlciB3b3JrLiBZb3Ugd2lsbCB0aGVuIGJlIGxvZ2dlZCBvdXQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIpIHtcXG4gICAgICAgICAgaWYgKHIpIHtcXG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9uZXdrZXknLCB7fSwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgLy8gZG9uZVxcbiAgICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXFxuICAgICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnTmV3IEFQSSBrZXkgZ2VuZXJhdGVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicsICdTdWNjZXNzJylcXG4gICAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcXG4gICAgICAgICAgICAgIH0pXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0pXFxuICAgICAgfSxcXG4gICAgICBkZWxldGVBbGxGaWxlczogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBBbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xcbiAgICAgICAgICBpZiAocikge1xcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9udWtlL2ZpbGVzJywgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcXG4gICAgICAgICAgICAgICAgLy8gZmlsZXMgaGF2ZSBiZWVuIG51a2VkLlxcbiAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAvLyBub3cgbG9nIG91dFxcbiAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcXG4gICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxcbiAgICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgIH0sXFxuICAgICAgZGVsZXRlQWNjb3VudDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBZb3VyIGFjY291bnQgYW5kIGFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocjEpIHtcXG4gICAgICAgICAgaWYgKHIxKSB7XFxuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdZb3VyIGFjY291bnQgd2lsbCBiZSBkZWxldGVkLiBBcmUgeW91IGNlcnRhaW4geW91IHdvdWxkIGxpa2UgdG8gcHJvY2VlZD8nKSkge1xcbiAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvdXNlcicsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXFxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcXG4gICAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGhhcyBiZWVuIG51a2VkLlxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgIH0sXFxuICAgICAgdHJ5VXBkYXRlUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIGxldCB2bSA9IHRoaXNcXG4gICAgICAgIGlmICghdm0udXBkYXRlUGFzc3dvcmQuZSkgcmV0dXJuXFxuICAgICAgICAvLyBtYWtlIHN1cmUgY29uZmlybWF0aW9uIGlzIGNvcnJlY3RcXG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZC5sZW5ndGggPCA4KSB7XFxuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCAhPT0gdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSkge1xcbiAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSBmYWxzZVxcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJydcXG4gICAgICAgIC8vIHNlbmQgdXBkYXRlUGFzc3dvcmQgcG9zdFxcbiAgICAgICAgYXhpb3MucGF0Y2goJy9jaGFuZ2VwYXNzd29yZCcsIHtcXG4gICAgICAgICAgdXNlcm5hbWU6IHZtLiRyb290LnUubmFtZSxcXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLm9sZCxcXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXFxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXFxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcXG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnUGFzc3dvcmQgY2hhbmdlIHN1Y2NlZWRlZCEgUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKVxcbiAgICAgICAgICAgICAgLy8gbG9nIG91dFxcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XFxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWQgYmVjYXVzZSBvZiBlcnJvclxcbiAgICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gcmVzcG9uc2UuZGF0YVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxcbiAgICAgICAgICB9KVxcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IHRydWVcXG4gICAgICAgICAgfSlcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAvLyBsb2FkIGZpbGVzIGZyb20gc2VydmVyXFxuICAgICAgbGV0IHZtID0gdGhpc1xcbiAgICAgIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkucGFyYW1zLmFwaWtleSA9IHZtLiRyb290LnUua2V5XFxuICAgICAgLy8gbG9hZCB1c2VyIGluZm9cXG4gICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcmluZm8nLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xcbiAgICAgICAgICAvLyBmZXRjaGVkIGRhdGFcXG4gICAgICAgICAgdm0udUluZm8gPSB7XFxuICAgICAgICAgICAgcXVvdGE6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEucXVvdGEpLFxcbiAgICAgICAgICAgIHVzYWdlOiB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlcy5kYXRhLnVzYWdlKSxcXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSlcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnAtc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAzJTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTFlYWQyNjAmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJteS1wcm9maWxlIGxlZnRcIj5cbiAgICA8aDQ+TWFuYWdlIEFjY291bnQgKHt7ICRyb290LnUubmFtZSB9fSk8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cbiAgICAgIDxoNT5SZXNvdXJjZSBVc2FnZTwvaDU+XG4gICAgICA8ZGl2IHYtaWY9XCJ1SW5mby5sb2FkZWRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNpbmdcbiAgICAgICAgICA8Yj57eyB1SW5mby51c2FnZSB9fTwvYj4gb2YgPGI+e3sgdUluZm8ucXVvdGEgfX08L2I+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxtZC1zcGlubmVyIDptZC1zdHJva2U9XCIxLjVcIiBtZC1pbmRldGVybWluYXRlPjwvbWQtc3Bpbm5lcj5cbiAgICAgICAgPHA+UmV0cmlldmluZyBEYXRhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxuICAgICAgPGg1PkFQSTwvaDU+XG4gICAgICA8aDY+QVBJIEtleTogPGNvZGU+e3sgJHJvb3QudS5rZXkgfX08L2NvZGU+PC9oNj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLXJhaXNlZFwiIEBjbGljay5uYXRpdmU9XCJnZW5lcmF0ZU5ld0FwaUtleVwiPkdlbmVyYXRlIE5ldzwvbWQtYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cbiAgICAgIDxoNT5TZWN1cml0eTwvaDU+XG4gICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5VXBkYXRlUGFzc3dvcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlaWdodCBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQub2xkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XG4gICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgdXBkYXRlUGFzc3dvcmQuZXJyIH19PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrLm5hdGl2ZT1cInRyeVVwZGF0ZVBhc3N3b3JkXCIgOmRpc2FibGVkPVwiIXVwZGF0ZVBhc3N3b3JkLmVcIj5DaGFuZ2UgUGFzc3dvcmQ8L21kLWJ1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg1PkRhbmdlciBab25lPC9oNT5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVBbGxGaWxlc1wiPkRlbGV0ZSBBbGwgRmlsZXM8L21kLWJ1dHRvbj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVBY2NvdW50XCI+RGVsZXRlIEFjY291bnQ8L21kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlUGFzc3dvcmQ6IHtcbiAgICAgICAgICBvbGQ6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICBjb25maXJtOiAnJyxcbiAgICAgICAgICBlcnI6ICcnLFxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxuICAgICAgICB9LFxuICAgICAgICB1SW5mbzoge1xuICAgICAgICAgIHF1b3RhOiBudWxsLFxuICAgICAgICAgIHVzYWdlOiBudWxsLFxuICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZ2VuZXJhdGVOZXdBcGlLZXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IGEgbmV3IEFQSSBrZXk/IFRoZSBvbGQgb25lIHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9uZXdrZXknLCB7fSwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRvbmVcbiAgICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdOZXcgQVBJIGtleSBnZW5lcmF0ZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uJywgJ1N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUFsbEZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBBbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS9maWxlcycsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWxlcyBoYXZlIGJlZW4gbnVrZWQuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBub3cgbG9nIG91dFxuICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlQWNjb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IGFic29sdXRlbHkgc3VyZT8gWW91ciBhY2NvdW50IGFuZCBhbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIxKSB7XG4gICAgICAgICAgaWYgKHIxKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ1lvdXIgYWNjb3VudCB3aWxsIGJlIGRlbGV0ZWQuIEFyZSB5b3UgY2VydGFpbiB5b3Ugd291bGQgbGlrZSB0byBwcm9jZWVkPycpKSB7XG4gICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9udWtlL3VzZXInLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgaGFzIGJlZW4gbnVrZWQuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0cnlVcGRhdGVQYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0udXBkYXRlUGFzc3dvcmQuZSkgcmV0dXJuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCAhPT0gdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSkge1xuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IGZhbHNlXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJydcbiAgICAgICAgLy8gc2VuZCB1cGRhdGVQYXNzd29yZCBwb3N0XG4gICAgICAgIGF4aW9zLnBhdGNoKCcvY2hhbmdlcGFzc3dvcmQnLCB7XG4gICAgICAgICAgdXNlcm5hbWU6IHZtLiRyb290LnUubmFtZSxcbiAgICAgICAgICBvbGRQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQub2xkLFxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZFxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1Bhc3N3b3JkIGNoYW5nZSBzdWNjZWVkZWQhIFBsZWFzZSBsb2cgaW4gYWdhaW4uJylcbiAgICAgICAgICAgICAgLy8gbG9nIG91dFxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXG4gICAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBsb2FkIGZpbGVzIGZyb20gc2VydmVyXG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxuICAgICAgLy8gbG9hZCB1c2VyIGluZm9cbiAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyaW5mbycsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAvLyBmZXRjaGVkIGRhdGFcbiAgICAgICAgICB2bS51SW5mbyA9IHtcbiAgICAgICAgICAgIHF1b3RhOiB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlcy5kYXRhLnF1b3RhKSxcbiAgICAgICAgICAgIHVzYWdlOiB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlcy5kYXRhLnVzYWdlKSxcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnAtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG15UHJvZmlsZS52dWU/ZWZjMzVlOTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1wcm9maWxlIGxlZnRcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIk1hbmFnZSBBY2NvdW50IChcIiArIF92bS5fcyhfdm0uJHJvb3QudS5uYW1lKSArIFwiKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiUmVzb3VyY2UgVXNhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51SW5mby5sb2FkZWQpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgIFVzaW5nXFxuICAgICAgICBcIiksIF9jKCdiJywgW192bS5fdihfdm0uX3MoX3ZtLnVJbmZvLnVzYWdlKSldKSwgX3ZtLl92KFwiIG9mIFwiKSwgX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udUluZm8ucXVvdGEpKV0pXSldKSA6IF9jKCdkaXYnLCBbX2MoJ21kLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtc3Ryb2tlXCI6IDEuNSxcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQVBJXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJBUEkgS2V5OiBcIiksIF9jKCdjb2RlJywgW192bS5fdihfdm0uX3MoX3ZtLiRyb290LnUua2V5KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5nZW5lcmF0ZU5ld0FwaUtleSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiR2VuZXJhdGUgTmV3XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlNlY3VyaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlVcGRhdGVQYXNzd29yZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlaWdodCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkN1cnJlbnQgcGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLm9sZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQub2xkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5vbGQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiTmV3IFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLmNvbmZpcm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwZGF0ZVBhc3N3b3JkLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS51cGRhdGVQYXNzd29yZC5lXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyeVVwZGF0ZVBhc3N3b3JkKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDaGFuZ2UgUGFzc3dvcmRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g1JywgW192bS5fdihcIkRhbmdlciBab25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRlbGV0ZUFsbEZpbGVzKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWxsIEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRlbGV0ZUFjY291bnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZSBBY2NvdW50XCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExZWFkMjYwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiVXNlciBQcm9maWxlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdteVByb2ZpbGUnKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWFjYWU4NWIyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTEwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvLVRoaW4nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0xMDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tVGhpbkl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTMwMGl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTGlnaHRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLWl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by01MDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1NZWRpdW1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQnKSwgbG9jYWwoJ1JvYm90by1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNzAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJvbGRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by05MDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tOTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTMwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBMaWdodCcpLCBsb2NhbCgnUmFsZXdheS1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IE1lZGl1bScpLCBsb2NhbCgnUmFsZXdheS1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS02MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgU2VtaUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktU2VtaUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS03MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktODAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjhjZTU5ODgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC42NTRjYjRkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLmFjZWUwZWEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy40MmRlODk4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLjE2ZGRiMTUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC5lY2NlOTJkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjNkZGI3NDgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy40ZDA4ZGFlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci43ZTM2N2JlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci4xNmUxZDkzLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy45ODRhZTM3LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuMWU2NWU3ZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC5iYjQ3NGYxLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLjU3YWY2NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLjllN2JlZWUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuYjY3MDY5NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuMGQ3ZTcxZi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC41MjVkNWI0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy43Mzk0Y2E5LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLmFkMGU3NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLjRmYWVjODMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuM2I5NTkwZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZjRlOGRjNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5kZTk4NGMwLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuZTc0NmUwMy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLjc4ZGQ1YWIud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjkxMDY0MzUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjI5MGVlMzgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLmU1YTMyMTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC44MWU5NTU4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmNkOTAzOTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5hNGI2ZjE3LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLjA2ZjFjODYud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC5jODY0ZDg0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLjA0MWE0Yjgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC4yYTNhOWNmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3RcIikgKyBcIik7XFxuICAgIC8qIEZvciBJRTYtOCAqL1xcbiAgICBzcmM6IGxvY2FsKCdNYXRlcmlhbCBJY29ucycpLCBsb2NhbCgnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmXCIpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZTc5YmZkOC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuNTcwZWI4My53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLjAxMmNmNmEud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuYTM3YjBjMC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcbiAqIGFuZCBGaXJlZm94LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1haW4sXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxucHJvZ3Jlc3MsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuaHIge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXFxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcbiAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG5idXR0b24ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcblxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcbiAqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm9yZGVyOiAwOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyB9XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyB9XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypidXR0b24sXFxuLmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcbnByZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmZpZ3VyZSxcXG50YWJsZSxcXG5wLFxcbnVsLFxcbm9sLFxcbmZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyB9Ki9cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtbWF0ZXJpYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtbWF0ZXJpYWxcIlxuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG4qIFZ1ZSBNYXRlcmlhbCB2MC43LjFcXG4qIE1hZGUgd2l0aCBsb3ZlIGJ5IE1hcmNvcyBNb3VyYVxcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxcbiovLm1kLWluay1yaXBwbGV7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7LXdlYmtpdC1tYXNrLWltYWdlOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsI2ZmZiAxMDAlLCMwMDAgMCk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpfS5tZC1yaXBwbGV7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTouMjt0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOm5vbmU7d2lsbC1jaGFuZ2U6YmFja2dyb3VuZC1jb2xvcixvcGFjaXR5LHRyYW5zZm9ybSx3aWR0aCxoZWlnaHQsdG9wLGxlZnR9Lm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uOmEgMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgZm9yd2FyZHN9Lm1kLXJpcHBsZS5tZC1hY3RpdmUubWQtZmFkZW91dHtvcGFjaXR5OjAhaW1wb3J0YW50O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi42c31Aa2V5ZnJhbWVzIGF7dG97dHJhbnNmb3JtOnNjYWxlKDIuMikgdHJhbnNsYXRlWigwKX19aHRtbHtoZWlnaHQ6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCAqLGh0bWwgOmFmdGVyLGh0bWwgOmJlZm9yZXtib3gtc2l6aW5nOmluaGVyaXR9Ym9keXttaW4taGVpZ2h0OjEwMCU7bWFyZ2luOjA7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2ZvbnQtZmFtaWx5OlJvYm90byxOb3RvIFNhbnMsTm90byxzYW5zLXNlcmlmfXVsOm5vdCgubWQtbGlzdCk+bGkrbGl7bWFyZ2luLXRvcDo4cHh9YXVkaW8sY2FudmFzLGVtYmVkLGlmcmFtZSxpbWcsb2JqZWN0LHN2Zyx2aWRlb3ttYXgtd2lkdGg6MTAwJTtmb250LXN0eWxlOml0YWxpYzt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YXVkaW86bm90KC5tZC1pbWFnZSksY2FudmFzOm5vdCgubWQtaW1hZ2UpLGVtYmVkOm5vdCgubWQtaW1hZ2UpLGlmcmFtZTpub3QoLm1kLWltYWdlKSxpbWc6bm90KC5tZC1pbWFnZSksb2JqZWN0Om5vdCgubWQtaW1hZ2UpLHN2Zzpub3QoLm1kLWltYWdlKSx2aWRlbzpub3QoLm1kLWltYWdlKXtoZWlnaHQ6YXV0b31bdGFiaW5kZXg9XFxcIi0xXFxcIl06Zm9jdXN7b3V0bGluZTpub25lIWltcG9ydGFudH0ubWQtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciwubWQtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3gtc2hhZG93Omluc2V0IDFweCAxcHggMCByZ2JhKDAsMCwwLC4xMik7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSl9Lm1kLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIsLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVye2JveC1zaGFkb3c6aW5zZXQgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjA1NCksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDM4KTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA4Nyl9Lm1kLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uLC5tZC1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b257ZGlzcGxheTpub25lfS5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciwubWQtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1kLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpO2JveC1zaGFkb3c6aW5zZXQgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjA1NCksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDg3KTt0cmFuc2l0aW9uOmFsbCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtY2FwdGlvbntmb250LXNpemU6MTJweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAyZW07bGluZS1oZWlnaHQ6MTdweH0ubWQtYm9keS0xLGJvZHl7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWJvZHktMSwubWQtYm9keS0yLGJvZHl7Zm9udC1zaXplOjE0cHg7bGV0dGVyLXNwYWNpbmc6LjAxZW19Lm1kLWJvZHktMntmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjRweH0ubWQtc3ViaGVhZGluZ3tmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MjRweH0ubWQtdGl0bGV7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wMDVlbTtsaW5lLWhlaWdodDoyNnB4fS5tZC1oZWFkbGluZXtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fS5tZC1kaXNwbGF5LTEsLm1kLWhlYWRsaW5le2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzowfS5tZC1kaXNwbGF5LTF7Zm9udC1zaXplOjM0cHg7bGluZS1oZWlnaHQ6NDBweH0ubWQtZGlzcGxheS0ye2ZvbnQtc2l6ZTo0NXB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjQ4cHh9Lm1kLWRpc3BsYXktM3tmb250LXNpemU6NTZweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LS4wMDVlbTtsaW5lLWhlaWdodDo1OHB4fS5tZC1kaXNwbGF5LTR7Zm9udC1zaXplOjExMnB4O2ZvbnQtd2VpZ2h0OjMwMDtsZXR0ZXItc3BhY2luZzotLjAxZW07bGluZS1oZWlnaHQ6MTEycHh9YTpub3QoLm1kLWJ1dHRvbik6bm90KC5tZC1ib3R0b20tYmFyLWl0ZW0pe3RleHQtZGVjb3JhdGlvbjpub25lfWE6bm90KC5tZC1idXR0b24pOm5vdCgubWQtYm90dG9tLWJhci1pdGVtKTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWF2YXRhcnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDttYXJnaW46YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6NDBweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1kLWF2YXRhci5tZC1sYXJnZXt3aWR0aDo2NHB4O21pbi13aWR0aDo2NHB4O2hlaWdodDo2NHB4O21pbi1oZWlnaHQ6NjRweDtib3JkZXItcmFkaXVzOjY0cHh9Lm1kLWF2YXRhci5tZC1sYXJnZSAubWQtaWNvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiAubWQtaWNvbntjb2xvcjojZmZmfS5tZC1hdmF0YXIgLm1kLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLWF2YXRhciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLWF2YXRhciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb24tZHVyYXRpb246LjlzfS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXRvcHttYXJnaW4tdG9wOi04cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHR7bWFyZ2luLWxlZnQ6OHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbXttYXJnaW4tdG9wOjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0e21hcmdpbi1sZWZ0Oi04cHh9Lm1kLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6Njtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtYmFja2Ryb3AubWQtYWN0aXZle29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5tZC1iYWNrZHJvcC5tZC10cmFuc3BhcmVudHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAwNSl9Lm1kLWJvdHRvbS1iYXJ7d2lkdGg6MTAwJTttaW4td2lkdGg6MTAwJTtoZWlnaHQ6NTZweDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWJvdHRvbS1iYXIsLm1kLWJvdHRvbS1iYXItaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubWQtYm90dG9tLWJhci1pdGVte21heC13aWR0aDoxNjhweDttaW4td2lkdGg6ODBweDtoZWlnaHQ6MTAwJTtwYWRkaW5nOjhweCAxMnB4IDEwcHg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MWVtO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle3BhZGRpbmctdG9wOjZweH0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbiwubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHtjb2xvcjpjdXJyZW50Q29sb3J9Lm1kLWJvdHRvbS1iYXItaXRlbVtkaXNhYmxlZF17b3BhY2l0eTouMzh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbXttaW4td2lkdGg6NTZweDttYXgtd2lkdGg6OTZweDtwb3NpdGlvbjpzdGF0aWM7LW1zLWZsZXg6MSAxIDMycHg7ZmxleDoxIDEgMzJweDt0cmFuc2l0aW9uOi40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aDt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aCwtbXMtZmxleH0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDhweCwwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCw2cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmV7bWluLXdpZHRoOjk2cHg7bWF4LXdpZHRoOjE2OHB4Oy1tcy1mbGV4OjEgMSA3MnB4O2ZsZXg6MSAxIDcycHh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7b3BhY2l0eToxfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29ue3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLDJweCwwKX0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSguODU3MSkgdHJhbnNsYXRlWSgycHgpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMTVzIGxpbmVhcixvcGFjaXR5IC4xNXMgbGluZWFyfS5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLWljb257dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGNvbG9yIC4xNXMgbGluZWFyfS5tZC1idXR0b257bWluLXdpZHRoOjg4cHg7bWluLWhlaWdodDozNnB4O21hcmdpbjo2cHggOHB4O3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTRweDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC12YXJpYW50OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzZweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246dG9wO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLC5tZC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lfS5tZC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b246YWN0aXZlOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjQpfS5tZC1idXR0b24ubWQtcmFpc2VkOm5vdChbZGlzYWJsZWRdKXtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uLm1kLWRlbnNle21pbi1oZWlnaHQ6MzJweDtsaW5lLWhlaWdodDozMnB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjFweDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9ue3dpZHRoOjQwcHg7bWluLXdpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7bWFyZ2luOjAgNnB4O3BhZGRpbmc6OHB4O2JvcmRlci1yYWRpdXM6NTAlO2xpbmUtaGVpZ2h0OjI0cHh9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZDpub25lfS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24ubWQtZGVuc2V7d2lkdGg6MzJweDttaW4td2lkdGg6MzJweDtoZWlnaHQ6MzJweDttaW4taGVpZ2h0OjMycHg7cGFkZGluZzo0cHg7bGluZS1oZWlnaHQ6MzJweH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTAlfS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb24tZHVyYXRpb246LjlzfS5tZC1idXR0b24ubWQtZmFie3dpZHRoOjU2cHg7aGVpZ2h0OjU2cHg7cGFkZGluZzowO21pbi13aWR0aDowO292ZXJmbG93OmhpZGRlbjtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmFkaXVzOjU2cHg7bGluZS1oZWlnaHQ6NTZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixib3gtc2hhZG93LHRyYW5zZm9ybX0ubWQtYnV0dG9uLm1kLWZhYjpmb2N1cywubWQtYnV0dG9uLm1kLWZhYjpob3Zlcntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtbWluaXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjQwcHh9Lm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1NnB4fS5tZC1idXR0b25bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYiwubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1yYWlzZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtZmFie2JveC1zaGFkb3c6bm9uZX0ubWQtYnV0dG9uOmFmdGVye3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtYnV0dG9uIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtvdmVyZmxvdzpoaWRkZW59Lm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWljb24sLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaWNvbntkaXNwbGF5OmJsb2NrfS5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIsLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQsLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0LC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIsLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQsLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0LC5tZC1zcGVlZC1kaWFsLm1kLWZhYi1ib3R0b20tY2VudGVyLC5tZC1zcGVlZC1kaWFsLm1kLWZhYi1ib3R0b20tbGVmdCwubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLXJpZ2h0LC5tZC1zcGVlZC1kaWFsLm1kLWZhYi10b3AtY2VudGVyLC5tZC1zcGVlZC1kaWFsLm1kLWZhYi10b3AtbGVmdCwubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLXJpZ2h0e21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NH0ubWQtZmFiLm1kLWZhYi10b3AtbGVmdCwubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLWxlZnR7dG9wOjI0cHg7bGVmdDoyNHB4fS5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIsLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1jZW50ZXJ7dG9wOjI0cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0LC5tZC1zcGVlZC1kaWFsLm1kLWZhYi10b3AtcmlnaHR7dG9wOjI0cHg7cmlnaHQ6MjRweH0ubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdCwubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLWxlZnR7Ym90dG9tOjI0cHg7bGVmdDoyNHB4fS5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIsLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1jZW50ZXJ7Ym90dG9tOjI0cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0LC5tZC1zcGVlZC1kaWFsLm1kLWZhYi1ib3R0b20tcmlnaHR7cmlnaHQ6MjRweDtib3R0b206MjRweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1idXR0b24tdG9nZ2xle3dpZHRoOmF1dG87ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbnttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXdpZHRoOjFweCAwIDFweCAxcHg7Ym9yZGVyLXJhZGl1czowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweDtib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcjpub3QoLm1kLXRvZ2dsZSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSwubWQtY2FyZHtib3JkZXItcmFkaXVzOjJweH0ubWQtY2FyZHtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZC5tZC13aXRoLWhvdmVye2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJveC1zaGFkb3d9Lm1kLWNhcmQubWQtd2l0aC1ob3Zlcjpob3Zlcnt6LWluZGV4OjI7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhe3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTl7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTk6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NTYuMjUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTN7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMzpiZWZvcmV7d2lkdGg6MTAwJTtwYWRkaW5nLXRvcDo3NSU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xe292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTE6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6MTAwJTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1oZWFkZXJ7cGFkZGluZy10b3A6MjRweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWd7d2lkdGg6MTAwJX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXJ7cGFkZGluZzoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtY2FyZC1oZWFkZXItdGV4dD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkPi5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIubWQtY2FyZC1oZWFkZXItZmxleHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIrLm1kLWNhcmQtYWN0aW9uczpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmc6MCA4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ7bWFyZ2luLXJpZ2h0OjE2cHg7ZmxvYXQ6bGVmdH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhcn4ubWQtdGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXN1YmhlYWQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi00cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLWhlYWRlci10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYXt3aWR0aDo4MHB4Oy1tcy1mbGV4OjAgMCA4MHB4O2ZsZXg6MCAwIDgwcHg7aGVpZ2h0OjgwcHg7bWFyZ2luLWxlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEubWQtbWVkaXVte3dpZHRoOjEyMHB4Oy1tcy1mbGV4OjAgMCAxMjBweDtmbGV4OjAgMCAxMjBweDtoZWlnaHQ6MTIwcHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLWJpZ3t3aWR0aDoxNjBweDstbXMtZmxleDowIDAgMTYwcHg7ZmxleDowIDAgMTYwcHg7aGVpZ2h0OjE2MHB4fS5tZC1jYXJkIC5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1zdWJoZWFkaW5nLC5tZC1jYXJkIC5tZC10aXRsZXttYXJnaW46MDtmb250LXdlaWdodDo0MDB9Lm1kLWNhcmQgLm1kLXN1YmhlYWR7b3BhY2l0eTouNTQ7Zm9udC1zaXplOjE0cHg7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCsubWQtdGl0bGV7bWFyZ2luLXRvcDo0cHh9Lm1kLWNhcmQgLm1kLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2xldHRlci1zcGFjaW5nOjA7bGluZS1oZWlnaHQ6MzJweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25ze3BhZGRpbmc6MTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1tZWRpYXttYXgtd2lkdGg6MjQwcHg7bWF4LWhlaWdodDoyNDBweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnN7bWFyZ2luLWxlZnQ6MTZweDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW46OHB4IDAgMH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50e3BhZGRpbmc6MTZweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fS5tZC1jYXJkIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbToyNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZzo4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjRweH0ubWQtY2FyZCAubWQtY2FyZC1hcmVhLC5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXJ7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5tZC1pbnNldCk6YWZ0ZXJ7cmlnaHQ6MDtsZWZ0OjB9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpLm1kLWluc2V0OmFmdGVye3JpZ2h0OjE2cHg7bGVmdDoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVye3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmZ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIubWQtdGV4dC1zY3JpbSAubWQtY2FyZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtYXJlYXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtc3ViaGVhZHtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5ke292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIC5tZC1jYXJkLWNvbnRlbnR7bWFyZ2luLXRvcDowIWltcG9ydGFudDtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nLXRvcDo0cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTptYXJnaW59Lm1kLWNoZWNrYm94e3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHg7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpiZWZvcmV7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXJ7d2lkdGg6NnB4O2hlaWdodDoxM3B4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6NXB4O2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItdG9wOjA7Ym9yZGVyLWxlZnQ6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCguMTUsLjE1LDEpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVse2hlaWdodDoyMHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2hlY2tib3gubWQtY2hlY2tlZCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye29wYWNpdHk6MTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWNoaXB7aGVpZ2h0OjMycHg7cGFkZGluZzo4cHggMTJweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjMycHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE2cHg7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1jaGlwLm1kLWRlbGV0YWJsZXtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLXJpZ2h0OjMycHh9Lm1kLWNoaXA6YWN0aXZlLC5tZC1jaGlwOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtY2hpcDphY3RpdmU6bm90KC5tZC1kaXNhYmxlZCksLm1kLWNoaXA6Zm9jdXM6bm90KC5tZC1kaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXI7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWNoaXAubWQtZGlzYWJsZWQgLm1kLWJ1dHRvbntwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpkZWZhdWx0fS5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRle3dpZHRoOjI0cHg7bWluLXdpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWluLWhlaWdodDoyNHB4O21hcmdpbjowO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NHB4O3JpZ2h0OjRweDtib3JkZXItcmFkaXVzOjI0cHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1pY29ue3dpZHRoOjIwcHg7bWluLXdpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWluLWhlaWdodDoyMHB4O21hcmdpbjowO2ZvbnQtc2l6ZToyMHB4fS5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6MzJweH0ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtcmlwcGxle29wYWNpdHk6LjU0fS5tZC1jaGlwcyAubWQtY2hpcHttYXJnaW4tcmlnaHQ6OHB4O21hcmdpbi1ib3R0b206NHB4fS5tZC1jaGlwcyAubWQtaW5wdXQtY29udGFpbmVye21pbi1oZWlnaHQ6NTRweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9Lm1kLWNoaXBzIC5tZC1pbnB1dHt3aWR0aDoxMjhweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtZGlhbG9nLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OH0ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUgLm1kLWRpYWxvZ3tvcGFjaXR5OjEhaW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojl9Lm1kLWRpYWxvZ3ttaW4td2lkdGg6MjgwcHg7bWF4LXdpZHRoOjgwJTttYXgtaGVpZ2h0OjgwJTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjEwO291dGxpbmU6bm9uZTtib3JkZXItcmFkaXVzOjJweDtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2Zvcm06c2NhbGUoLjksLjg1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4wNXM7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy5tZC1yZWZlcmVuY2V7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyfS5tZC1kaWFsb2cubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtZGlhbG9nIHB7bWFyZ2luOjB9Lm1kLWRpYWxvZy10aXRsZXttYXJnaW4tYm90dG9tOjIwcHg7cGFkZGluZzoyNHB4IDI0cHggMH0ubWQtZGlhbG9nLWNvbnRlbnR7cGFkZGluZzowIDI0cHggMjRweDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTphdXRvO2ZsZXgtYmFzaXM6YXV0bztvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjZmZmLCNmZmYgMXB4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgwZGVnLCNmZmYsI2ZmZiAzcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDAsMCwwLC4xMikscmdiYSgwLDAsMCwuMTIpIDFweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDAsMCwwLC4yKSAxcHgscmdiYSgwLDAsMCwuMikgMnB4LHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtYXR0YWNobWVudDpsb2NhbCxsb2NhbCxzY3JvbGwsc2Nyb2xsfS5tZC1kaWFsb2ctY29udGVudDpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoyNHB4fS5tZC1kaWFsb2ctY29udGVudCBwOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLXRvcDowfS5tZC1kaWFsb2ctY29udGVudCBwOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9Lm1kLWRpYWxvZy1ib2R5e21hcmdpbjowIC0yNHB4O3BhZGRpbmc6MCAyNHB4O292ZXJmbG93OmF1dG99Lm1kLWRpYWxvZy1hY3Rpb25ze21pbi1oZWlnaHQ6NTJweDtwYWRkaW5nOjhweCA4cHggOHB4IDI0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWRpYWxvZy1hY3Rpb25zOmJlZm9yZXtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMXB4O3JpZ2h0OjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCIgXFxcIn0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweDttYXJnaW46MDtwYWRkaW5nOjAgOHB4fS5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1kaXZpZGVye2hlaWdodDoxcHg7bWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWRpdmlkZXIubWQtaW5zZXR7bWFyZ2luLWxlZnQ6NzJweH0ubWQtZmlsZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtZmlsZSBpbnB1dFt0eXBlPWZpbGVde3dpZHRoOjFweDtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7Y2xpcDpyZWN0KDAgMCAwIDApO2JvcmRlcjowfS5tZC1maWxlIC5tZC1pY29ue2N1cnNvcjpwb2ludGVyfS5tZC1pY29ue3dpZHRoOjI0cHg7bWluLXdpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWluLWhlaWdodDoyNHB4O2ZvbnQtc2l6ZToyNHB4O21hcmdpbjphdXRvO2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmaWxsOmN1cnJlbnRDb2xvcjt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1pY29uLm1kLXNpemUtMnh7d2lkdGg6NDhweDttaW4td2lkdGg6NDhweDtoZWlnaHQ6NDhweDttaW4taGVpZ2h0OjQ4cHg7Zm9udC1zaXplOjQ4cHh9Lm1kLWljb24ubWQtc2l6ZS0zeHt3aWR0aDo3MnB4O21pbi13aWR0aDo3MnB4O2hlaWdodDo3MnB4O21pbi1oZWlnaHQ6NzJweDtmb250LXNpemU6NzJweH0ubWQtaWNvbi5tZC1zaXplLTR4e3dpZHRoOjk2cHg7bWluLXdpZHRoOjk2cHg7aGVpZ2h0Ojk2cHg7bWluLWhlaWdodDo5NnB4O2ZvbnQtc2l6ZTo5NnB4fS5tZC1pY29uLm1kLXNpemUtNXh7d2lkdGg6MTIwcHg7bWluLXdpZHRoOjEyMHB4O2hlaWdodDoxMjBweDttaW4taGVpZ2h0OjEyMHB4O2ZvbnQtc2l6ZToxMjBweH0ubWQtaWNvbiBzdmd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1pbWcubWQtaWNvbnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX0ubWQtaW1hZ2V7b3BhY2l0eTowOy13ZWJraXQtZmlsdGVyOnNhdHVyYXRlKDIwJSk7ZmlsdGVyOnNhdHVyYXRlKDIwJSl9Lm1kLWltYWdlLm1kLWJsYWNrLW91dHB1dHstd2Via2l0LWZpbHRlcjpicmlnaHRuZXNzKC40KSBzYXR1cmF0ZSgyMCUpO2ZpbHRlcjpicmlnaHRuZXNzKC40KSBzYXR1cmF0ZSgyMCUpfS5tZC1pbWFnZS5tZC1sb2FkZWR7b3BhY2l0eToxOy13ZWJraXQtZmlsdGVyOnNhdHVyYXRlKDEwMCUpO2ZpbHRlcjpzYXR1cmF0ZSgxMDAlKTt0cmFuc2l0aW9uOm9wYWNpdHkgMS4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSwtd2Via2l0LWZpbHRlciAyLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgMS4xcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxmaWx0ZXIgMi4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IDEuMXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksZmlsdGVyIDIuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgLjNzLC13ZWJraXQtZmlsdGVyIDIuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgLjNzfS5tZC1pbnB1dC1jb250YWluZXJ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7bWFyZ2luOjRweCAwIDI0cHg7cGFkZGluZy10b3A6MTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVye2hlaWdodDoxcHg7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVyLC5tZC1pbnB1dC1jb250YWluZXIgbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3RvcDoyM3B4O3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe3dpZHRoOjEwMCU7aGVpZ2h0OjMycHg7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXg6MTtmbGV4OjE7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZvbnQtc2l6ZTtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXB4O2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cywubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNnB4O3RleHQtc2hhZG93Om5vbmU7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6aW5pdGlhbH0ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0fi5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpLC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF+Lm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSl7bWFyZ2luLWxlZnQ6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0fi5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVyLC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF+Lm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSk6YWZ0ZXJ7cmlnaHQ6MDtsZWZ0OmF1dG99Lm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDoyMzBweDtwYWRkaW5nOjVweCAwO3Jlc2l6ZTpub25lO2xpbmUtaGVpZ2h0OjEuM2VtfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWNvdW50LC5tZC1pbnB1dC1jb250YWluZXIgLm1kLWVycm9ye2hlaWdodDoyMHB4O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotMjJweDtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1lcnJvcntkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtsZWZ0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC04cHgsMCk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWNvdW50e3JpZ2h0OjB9Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKXttYXJnaW46NHB4IGF1dG87Y29sb3I6cmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVye3dpZHRoOjM2cHg7aGVpZ2h0OjJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjA7ei1pbmRleDoyO2NvbnRlbnQ6XFxcIlxcXCJ9Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKX5sYWJlbHtsZWZ0OjM2cHh9Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKX4ubWQtZmlsZSwubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpfi5tZC1pbnB1dCwubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpfi5tZC10ZXh0YXJlYXttYXJnaW4tbGVmdDoxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgbGFiZWx7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTBweDtvcGFjaXR5OjA7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbHtwb2ludGVyLWV2ZW50czphdXRvO3RvcDowO29wYWNpdHk6MTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbHtwb2ludGVyLWV2ZW50czpub25lfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWlucHV0LWZvY3VzZWQgbGFiZWx7dG9wOjIzcHg7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVse29wYWNpdHk6MH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVye2JhY2tncm91bmQ6MCAxMDAlIHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMCwwLDAsLjM4KSxyZ2JhKDAsMCwwLC4zOCkgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMXB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBsYWJlbCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIHRleHRhcmVhe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZC5tZC1pbnB1dC1mb2N1c2VkIC5tZC10b2dnbGUtcGFzc3dvcmR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmR7bWFyZ2luOjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206LTJweDtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQgLm1kLXRvZ2dsZS1wYXNzd29yZCAubWQtaW5rLXJpcHBsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbnZhbGlkIC5tZC1lcnJvcntvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1yZXF1aXJlZCBsYWJlbDphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MnB4O3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMnB4KSk7Y29udGVudDpcXFwiKlxcXCI7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MWVtO3ZlcnRpY2FsLWFsaWduOnRvcH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1zZWxlY3Q6aG92ZXIgLm1kLXNlbGVjdDpub3QoLm1kLWRpc2FibGVkKTphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLWxheW91dHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLXJvd3stbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1sYXlvdXQubWQtY29udGFpbmVye3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEyMDBweH0ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lci5tZC1jZW50ZXJlZHttYXJnaW46MCBhdXRvfS5tZC1hbGlnbi1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24tZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjEycHh9Lm1kLWd1dHRlciAubWQtY29sdW1ue21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWJvdHRvbTotMTJweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHh9Lm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTRweDttYXJnaW4tbGVmdDotNHB4fS5tZC1ndXR0ZXItODpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjRweDtwYWRkaW5nLWxlZnQ6NHB4fS5tZC1ndXR0ZXItOCAubWQtY29sdW1ue21hcmdpbi10b3A6LTRweDttYXJnaW4tYm90dG9tOi00cHh9Lm1kLWd1dHRlci04IC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4fS5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9Lm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjhweDtwYWRkaW5nLWxlZnQ6OHB4fS5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWJvdHRvbTotOHB4fS5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoxMnB4fS5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1ib3R0b206LTEycHh9Lm1kLWd1dHRlci0yNCAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4fS5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotMjBweDttYXJnaW4tbGVmdDotMjBweH0ubWQtZ3V0dGVyLTQwOm5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6MjBweH0ubWQtZ3V0dGVyLTQwIC5tZC1jb2x1bW57bWFyZ2luLXRvcDotMjBweDttYXJnaW4tYm90dG9tOi0yMHB4fS5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweH0ubWQtZmxleHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LTEwMHttYXJnaW4tbGVmdDoxMDAlfUBtZWRpYSAobWF4LXdpZHRoOjk0NHB4KXsubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LThweDttYXJnaW4tbGVmdDotOHB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy1sZWZ0OjhweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW57bWFyZ2luLXRvcDotOHB4O21hcmdpbi1ib3R0b206LThweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tZC1yb3ctc21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1zbWFsbHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1zbWFsbHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtc21hbGwtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1zbWFsbC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1zbWFsbC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtc21hbGwtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXNtYWxsLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1zbWFsbC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtc21hbGwtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXNtYWxsLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1zbWFsbC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtc21hbGwtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXNtYWxsLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1zbWFsbC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtc21hbGwtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXNtYWxsLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1zbWFsbC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtc21hbGwtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXNtYWxsLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1zbWFsbC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtc21hbGwtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXNtYWxsLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1zbWFsbC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtc21hbGwtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1hbGlnbi1zbWFsbC1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi1zbWFsbC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24tc21hbGwtZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtaGlkZS1zbWFsbHtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjE5MDRweCl7Lm1kLXJvdy14bGFyZ2V7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi14bGFyZ2V7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgteGxhcmdley1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC14bGFyZ2UtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC14bGFyZ2UtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC14bGFyZ2UtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC14bGFyZ2UtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC14bGFyZ2UtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC14bGFyZ2UtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC14bGFyZ2UtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC14bGFyZ2UtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC14bGFyZ2UtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC14bGFyZ2UtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC14bGFyZ2UtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC14bGFyZ2UtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC14bGFyZ2UtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC14bGFyZ2UtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC14bGFyZ2UtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC14bGFyZ2UtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC14bGFyZ2UtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC14bGFyZ2UtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC14bGFyZ2UtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC14bGFyZ2UtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC14bGFyZ2UtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC14bGFyZ2UtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24teGxhcmdlLXN0YXJ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLWFsaWduLXhsYXJnZS1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24teGxhcmdlLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUteGxhcmdle2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6MTkwM3B4KXsubWQtcm93LWxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbGFyZ2V7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgtbGFyZ2V7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LWxhcmdlLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbGFyZ2UtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbGFyZ2UtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LWxhcmdlLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC1sYXJnZS0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbGFyZ2UtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LWxhcmdlLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC1sYXJnZS0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbGFyZ2UtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LWxhcmdlLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC1sYXJnZS00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbGFyZ2UtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LWxhcmdlLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC1sYXJnZS02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbGFyZ2UtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LWxhcmdlLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC1sYXJnZS03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbGFyZ2UtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LWxhcmdlLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC1sYXJnZS05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbGFyZ2UtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LWxhcmdlLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24tbGFyZ2Utc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tbGFyZ2UtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLWxhcmdlLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUtbGFyZ2V7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDoxMjY0cHgpey5tZC1yb3ctbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LW1lZGl1bXstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtbWVkaXVtLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbWVkaXVtLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbWVkaXVtLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtbWVkaXVtLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbWVkaXVtLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbWVkaXVtLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtbWVkaXVtLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbWVkaXVtLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbWVkaXVtLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtbWVkaXVtLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbWVkaXVtLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbWVkaXVtLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtbWVkaXVtLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbWVkaXVtLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbWVkaXVtLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtbWVkaXVtLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbWVkaXVtLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbWVkaXVtLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtbWVkaXVtLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbWVkaXVtLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbWVkaXVtLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtbWVkaXVtLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLW1lZGl1bS1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi1tZWRpdW0tY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLW1lZGl1bS1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLW1lZGl1bXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXsubWQtcm93LXhzbWFsbHstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLXhzbWFsbHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC14c21hbGx7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LXhzbWFsbC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LXhzbWFsbC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LXhzbWFsbC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LXhzbWFsbC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXhzbWFsbC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LXhzbWFsbC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LXhzbWFsbC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXhzbWFsbC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LXhzbWFsbC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LXhzbWFsbC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXhzbWFsbC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LXhzbWFsbC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LXhzbWFsbC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXhzbWFsbC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LXhzbWFsbC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LXhzbWFsbC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXhzbWFsbC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LXhzbWFsbC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LXhzbWFsbC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXhzbWFsbC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LXhzbWFsbC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LXhzbWFsbC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1hbGlnbi14c21hbGwtc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24teHNtYWxsLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1hbGlnbi14c21hbGwtZW5key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtaGlkZS14c21hbGx7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDoxMjY0cHgpey5tZC1yb3ctbGFyZ2UtYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbGFyZ2UtYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LWxhcmdlLWFuZC11cHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLWxhcmdlLWFuZC11cC1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi1sYXJnZS1hbmQtdXAtY2VudGVyey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLWFsaWduLWxhcmdlLWFuZC11cC1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLWxhcmdlLWFuZC11cHtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjk0NHB4KXsubWQtcm93LW1lZGl1bS1hbmQtdXB7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1tZWRpdW0tYW5kLXVwey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LW1lZGl1bS1hbmQtdXB7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbWVkaXVtLWFuZC11cC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1tZWRpdW0tYW5kLXVwLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LW1lZGl1bS1hbmQtdXAtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWFsaWduLW1lZGl1bS1hbmQtdXAtc3RhcnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtYWxpZ24tbWVkaXVtLWFuZC11cC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24tbWVkaXVtLWFuZC11cC1lbmR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC1oaWRlLW1lZGl1bS1hbmQtdXB7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDo2NjBweCl7Lm1kLXJvdy1zbWFsbC1hbmQtdXB7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1zbWFsbC1hbmQtdXB7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgtc21hbGwtYW5kLXVwey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1zbWFsbC1hbmQtdXAtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24tc21hbGwtYW5kLXVwLXN0YXJ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLWFsaWduLXNtYWxsLWFuZC11cC1jZW50ZXJ7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtYWxpZ24tc21hbGwtYW5kLXVwLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUtc21hbGwtYW5kLXVwe2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6MzAwcHgpey5tZC1yb3cteHNtYWxsLWFuZC11cHstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLXhzbWFsbC1hbmQtdXB7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgteHNtYWxsLWFuZC11cHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC14c21hbGwtYW5kLXVwLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LXhzbWFsbC1hbmQtdXAtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgteHNtYWxsLWFuZC11cC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtYWxpZ24teHNtYWxsLWFuZC11cC1zdGFydHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1hbGlnbi14c21hbGwtYW5kLXVwLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1hbGlnbi14c21hbGwtYW5kLXVwLWVuZHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLWhpZGUteHNtYWxsLWFuZC11cHtkaXNwbGF5Om5vbmV9fS5tZC1saXN0e21hcmdpbjowO3BhZGRpbmc6OHB4IDA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO3Bvc2l0aW9uOnJlbGF0aXZlO2xpc3Qtc3R5bGU6bm9uZX0ubWQtbGlzdC5tZC1kZW5zZXtwYWRkaW5nOjRweCAwfS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7cGFkZGluZy1sZWZ0OjcycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjEzcHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtYXZhdGFyOmZpcnN0LWNoaWxkLC5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyNHB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1hdmF0YXJ7d2lkdGg6MzJweDttaW4td2lkdGg6MzJweDtoZWlnaHQ6MzJweDttaW4taGVpZ2h0OjMycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo2MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCwubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpmaXJzdC1jaGlsZCwubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3MnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3NnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCwubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpmaXJzdC1jaGlsZCwubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo4OHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1hdmF0YXJ7bWFyZ2luOjB9Lm1kLWxpc3QgLm1kLXN1YmhlYWRlci5tZC1pbnNldHtwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdD4ubWQtc3ViaGVhZGVyOmZpcnN0LW9mLXR5cGV7bWFyZ2luLXRvcDotOHB4fS5tZC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5tZC1saXN0LWl0ZW0ubWQtZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0LWl0ZW0gLm1kLWJ1dHRvbi1naG9zdHt3aWR0aDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6MTtib3JkZXItcmFkaXVzOjB9Lm1kLWxpc3QtaXRlbSAubWQtYnV0dG9uOm5vdCgubWQtYnV0dG9uLWdob3N0KTpub3QoLm1kLWxpc3QtaXRlbS1jb250YWluZXIpe3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0ubWQtbGlzdC1pdGVtIC5tZC1idXR0b246bm90KC5tZC1idXR0b24tZ2hvc3QpOm5vdCgubWQtbGlzdC1pdGVtLWNvbnRhaW5lcikgLm1kLWljb257cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnttaW4taGVpZ2h0OjQ4cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxO3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC10cmFuc2Zvcm06bm9uZX0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXI+Lm1kLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjMycHh9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtYXZhdGFyOmZpcnN0LWNoaWxkLC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9ue21hcmdpbjowIC0xMHB4IDAgMH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWFjdGlvbjpudGgtY2hpbGQoMyl7bWFyZ2luOjAgLTEwcHggMCAxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWRpdmlkZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjB9Lm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyLC5tZC1saXN0LWl0ZW0gLm1kLWljb24sLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1hY3Rpb246Zmlyc3QtY2hpbGR7bWFyZ2luOjB9Lm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LW9mLXR5cGUrKiwubWQtbGlzdC1pdGVtIC5tZC1pY29uOmZpcnN0LW9mLXR5cGUrKiwubWQtbGlzdC1pdGVtIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZDpmaXJzdC1vZi10eXBlKyp7LW1zLWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0b30ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWxpc3QtaXRlbSAubWQtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWxpc3QtaXRlbSAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjB9Lm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0OHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIHdyYXA7ZmxleC1mbG93OmNvbHVtbiB3cmFwO292ZXJmbG93OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC1saXN0LWl0ZW0tZXhwYW5kOmFmdGVyLC5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZXtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7bGVmdDowO3otaW5kZXg6Mzt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWxpc3QtaXRlbS1leHBhbmQ6YmVmb3Jle3RvcDowfS5tZC1saXN0LWl0ZW0tZXhwYW5kOmFmdGVye2JvdHRvbTowfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YWZ0ZXIsLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmUubWQtYWN0aXZlKy5tZC1hY3RpdmU6YmVmb3JlLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpmaXJzdC1vZi10eXBlOmJlZm9yZSwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6bGFzdC1vZi10eXBlOmFmdGVye2JhY2tncm91bmQ6bm9uZX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU+Lm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtZXhwYW5kLWluZGljYXRvcnt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwwLDApfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZT4ubWQtbGlzdC1leHBhbmR7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtZXhwYW5zaW9uLWluZGljYXRvciwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtaWNvbiwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5ke3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3dpbGwtY2hhbmdlOm1hcmdpbi1ib3R0b207dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIC5tZC1saXN0e3BhZGRpbmc6MH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbiBub3dyYXA7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjEuMjVlbTt3aGl0ZS1zcGFjZTpub3JtYWx9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+KntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+OmZpcnN0LWNoaWxke2ZvbnQtc2l6ZToxNnB4fS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMiksLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgzKXttYXJnaW46MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHh9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKTpub3QoOmxhc3QtY2hpbGQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbWVudXtkaXNwbGF5OmlubGluZS1ibG9ja30ubWQtbWVudS1jb250ZW50e3dpZHRoOjE2OHB4O21pbi13aWR0aDo4NHB4O21heC13aWR0aDozOTJweDttaW4taGVpZ2h0OjY0cHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMzJweCk7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTM7dHJhbnNmb3JtOnNjYWxlKC45LC44NSkgdHJhbnNsYXRlWigwKTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjp3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksb3BhY2l0eSAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksbWFyZ2luIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKSx0cmFuc2Zvcm0gMHMgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMikgLjRzO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5LHdpZHRofS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0Oi04cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnR7bWFyZ2luLXRvcDotMjBweDttYXJnaW4tbGVmdDo4cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0e21hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDotOHB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOjExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0OjhweDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmV7bWFyZ2luLXRvcDoxMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlcnttYXJnaW46MH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMXt3aWR0aDo4NHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ye3dpZHRoOjExMnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ze3dpZHRoOjE2OHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00e3dpZHRoOjIyNHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS01e3dpZHRoOjI4MHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02e3dpZHRoOjMzNnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03e3dpZHRoOjM5MnB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLHRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmUgLm1kLWxpc3R7b3BhY2l0eToxO3RyYW5zaXRpb246b3BhY2l0eSAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLW1lbnUtY29udGVudCAubWQtbGlzdHtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtbWVudS1pdGVte2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuMmVtfS5tZC1tZW51LWl0ZW1bZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fS5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9Lm1kLW1lbnUtYmFja2Ryb3B7ei1pbmRleDoxMn0ubWQtcHJvZ3Jlc3N7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNre3JpZ2h0OjB9Lm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmFmdGVyLC5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3dpbGwtY2hhbmdlOmxlZnQscmlnaHQ7Y29udGVudDpcXFwiXFxcIn0ubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3Jle2FuaW1hdGlvbjpiIDIuM3MgY3ViaWMtYmV6aWVyKC42NSwuODE1LC43MzUsLjM5NSkgaW5maW5pdGV9Lm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmFmdGVye2FuaW1hdGlvbjpjIDIuM3MgY3ViaWMtYmV6aWVyKC4xNjUsLjg0LC40NCwxKSBpbmZpbml0ZTthbmltYXRpb24tZGVsYXk6MS4xNXN9Lm1kLXByb2dyZXNzLm1kLXByb2dyZXNzLWVudGVyLC5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZVkoMCkgdHJhbnNsYXRlWigwKX0ubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtZW50ZXItYWN0aXZle3RyYW5zZm9ybTpzY2FsZVkoMSkgdHJhbnNsYXRlWigwKX0ubWQtcHJvZ3Jlc3MtdHJhY2t7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX1Aa2V5ZnJhbWVzIGJ7MCV7cmlnaHQ6MTAwJTtsZWZ0Oi0zNSV9NjAle3JpZ2h0Oi0xMDAlO2xlZnQ6MTAwJX10b3tyaWdodDotMTAwJTtsZWZ0OjEwMCV9fUBrZXlmcmFtZXMgY3swJXtyaWdodDoxMDAlO2xlZnQ6LTIwMCV9NjAle3JpZ2h0Oi04JTtsZWZ0OjEwNyV9dG97cmlnaHQ6LTglO2xlZnQ6MTA3JX19Lm1kLXJhZGlve3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7cmlnaHQ6M3B4O2JvdHRvbTozcHg7bGVmdDozcHg7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKC4zOCwuMzgsMSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxle3RvcDotMTZweDtyaWdodDotMTZweDtib3R0b206LTE2cHg7bGVmdDotMTZweDtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1yYWRpbyAubWQtcmFkaW8tbGFiZWx7aGVpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1yYWRpby5tZC1jaGVja2VkIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXJ7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNlbGVjdHt3aWR0aDoxMDAlO21pbi13aWR0aDoxMjhweDtoZWlnaHQ6MzJweDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc2VsZWN0OmFmdGVye21hcmdpbi10b3A6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSBzY2FsZVkoLjQ1KSBzY2FsZVgoLjg1KTt0cmFuc2l0aW9uOmFsbCAuMTVzIGxpbmVhcjtjb250ZW50OlxcXCJcXFxcMjVCQ1xcXCJ9Lm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51e3RvcDotOHB4O3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwxLDEpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouMjVzO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm0sdG9wfS5tZC1zZWxlY3QubWQtYWN0aXZlIC5tZC1zZWxlY3QtbWVudT4qe29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7dHJhbnNpdGlvbi1kdXJhdGlvbjouMTVzO3RyYW5zaXRpb24tZGVsYXk6LjFzfS5tZC1zZWxlY3QubWQtZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dXNlci1kcmFnOm5vbmV9Lm1kLXNlbGVjdCBzZWxlY3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXNlbGVjdCAubWQtbWVudSwubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWV7d2lkdGg6MTAwJTtoZWlnaHQ6MzJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nLXJpZ2h0OjI0cHg7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mjtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDozM3B4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcntjb2xvcjpoc2xhKDAsMCUsNDYlLC44Nyk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOi04cHh9Lm1kLXNlbGVjdC1jb250ZW50e3dpZHRoOmF1dG87bWF4LWhlaWdodDoyNTZweH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNnB4fS5tZC1zZWxlY3QtY29udGVudCAubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye292ZXJmbG93OnZpc2libGU7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94e21hcmdpbjowfS5tZC1zZWxlY3QtY29udGVudC5tZC1tdWx0aXBsZSAubWQtY2hlY2tib3gtbGFiZWx7cGFkZGluZy1sZWZ0OjE2cHg7Y3Vyc29yOnBvaW50ZXJ9Lm1kLXNpZGVuYXYubWQtbGVmdCAubWQtc2lkZW5hdi1jb250ZW50e2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1yaWdodCAubWQtc2lkZW5hdi1jb250ZW50e3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1iYWNrZHJvcCwubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1jb250ZW50e3Bvc2l0aW9uOmZpeGVkfS5tZC1zaWRlbmF2IC5tZC1zaWRlbmF2LWNvbnRlbnR7d2lkdGg6MzA0cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7ei1pbmRleDo3O3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5tZC1zaWRlbmF2IC5tZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjY7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3dpbGwtY2hhbmdlOm9wYWNpdHl9Lm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWNvbnRlbnR7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1iYWNrZHJvcHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtc25hY2tiYXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDtsZWZ0OjA7ei1pbmRleDoxMTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om1hcmdpbi10b3AsbWFyZ2luLWJvdHRvbX0ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWNlbnRlciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlcnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodHttYXJnaW4tcmlnaHQ6MjRweDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1sZWZ0LC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdHttYXJnaW4tbGVmdDoyNHB4Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHR7bWFyZ2luLXRvcDoyNHB4fS5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0e21hcmdpbi1ib3R0b206MjRweH0ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnQsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodHt0b3A6MH0ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciAubWQtc25hY2tiYXItY29udGFpbmVyLC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCAubWQtc25hY2tiYXItY29udGFpbmVyLC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lcnt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCxjYWxjKC0xMDAlIC0gMjRweCksMCl9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIsLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1sZWZ0LC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHR7Ym90dG9tOjB9Lm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0IC5tZC1zbmFja2Jhci1jb250YWluZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsY2FsYygxMDAlICsgMjRweCksMCl9Lm1kLXNuYWNrYmFyLm1kLWFjdGl2ZSAubWQtc25hY2tiYXItY29udGFpbmVye3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXNuYWNrYmFyLm1kLWFjdGl2ZSAubWQtc25hY2tiYXItY29udGVudHtvcGFjaXR5OjE7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMXN9Lm1kLXNuYWNrYmFyIC5tZC1zbmFja2Jhci1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3dpbGwtY2hhbmdlOm9wYWNpdHl9Lm1kLXNuYWNrYmFyIC5tZC1idXR0b257bWluLXdpZHRoOjY0cHg7bWFyZ2luOi04cHggLTE2cHh9Lm1kLXNuYWNrYmFyIC5tZC1idXR0b246bGFzdC1jaGlsZHttYXJnaW4tbGVmdDo0OHB4fS5tZC1zbmFja2Jhci1jb250YWluZXJ7d2lkdGg6YXV0bzttaW4td2lkdGg6Mjg4cHg7bWF4LXdpZHRoOjU2OHB4O21pbi1oZWlnaHQ6NDhweDtwYWRkaW5nOjE0cHggMjRweDtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0bztib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMjMyMzI7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2NvbG9yOiNmZmY7Zm9udC1zaXplOjE0cHh9Lm1kLWhhcy10b2FzdC10b3AtcmlnaHQgLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDY4cHgsMCl9Lm1kLWhhcy10b2FzdC10b3AtY2VudGVyIC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01MCUsNjhweCwwKX0ubWQtaGFzLXRvYXN0LXRvcC1sZWZ0IC5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDY4cHgsMCl9Lm1kLWhhcy10b2FzdC1ib3R0b20tcmlnaHQgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC02OHB4LDApfS5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNTAlLC02OHB4LDApfS5tZC1oYXMtdG9hc3QtYm90dG9tLWxlZnQgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsLTY4cHgsMCl9QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpey5tZC1zbmFja2JhcnttYXJnaW46MCFpbXBvcnRhbnR9Lm1kLXNuYWNrYmFyLWNvbnRhaW5lcnt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6MH0ubWQtaGFzLXRvYXN0LXRvcC1yaWdodCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsNDhweCwwKX0ubWQtaGFzLXRvYXN0LXRvcC1jZW50ZXIgLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTUwJSw0OHB4LDApfS5tZC1oYXMtdG9hc3QtdG9wLWxlZnQgLm1kLWZhYi5tZC1mYWItdG9wLWxlZnR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsNDhweCwwKX0ubWQtaGFzLXRvYXN0LWJvdHRvbS1yaWdodCAubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsLTQ4cHgsMCl9Lm1kLWhhcy10b2FzdC1ib3R0b20tY2VudGVyIC5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01MCUsLTQ4cHgsMCl9Lm1kLWhhcy10b2FzdC1ib3R0b20tbGVmdCAubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwtNDhweCwwKX0ubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIsLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCwubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodHt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCw0NHB4LDApfS5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlciwubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0LC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC00NHB4LDApfX0ubWQtc3BlZWQtZGlhbHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tdG9wLm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3RyYW5zZm9ybTpzY2FsZSguOTUpIHRyYW5zbGF0ZTNEKDAsODAlLDApfS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi10b3AgW21kLWZhYi10cmlnZ2VyXXttYXJnaW4tdG9wOjhweH0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tdG9wIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnttYXJnaW4tYm90dG9tOjE2cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0ey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0Lm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3RyYW5zZm9ybTpzY2FsZSguOTUpIHRyYW5zbGF0ZTNEKC04MCUsMCwwKX0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tcmlnaHQgW21kLWZhYi10cmlnZ2VyXXttYXJnaW4tcmlnaHQ6OHB4fS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1yaWdodCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257bWFyZ2luLWxlZnQ6MTZweH0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1ib3R0b20ubWQtbW9kZS1mbGluZyBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257dHJhbnNmb3JtOnNjYWxlKC45NSkgdHJhbnNsYXRlM0QoMCwtODAlLDApfS5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1ib3R0b20gW21kLWZhYi10cmlnZ2VyXXttYXJnaW4tYm90dG9tOjhweH0ubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbnttYXJnaW4tdG9wOjE2cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWxlZnR7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWxlZnQubWQtbW9kZS1mbGluZyBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b257dHJhbnNmb3JtOnNjYWxlKC45NSkgdHJhbnNsYXRlM0QoODAlLDAsMCl9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWxlZnQgW21kLWZhYi10cmlnZ2VyXXttYXJnaW4tbGVmdDo4cHh9Lm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWxlZnQgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue21hcmdpbi1yaWdodDoxNnB4fS5tZC1zcGVlZC1kaWFsLm1kLW1vZGUtc2NhbGUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3RyYW5zZm9ybTpzY2FsZSguNil9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbntvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApIWltcG9ydGFudH0ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCgyKXt0cmFuc2l0aW9uLWRlbGF5Oi4wNXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoMyl7dHJhbnNpdGlvbi1kZWxheTouMXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoNCl7dHJhbnNpdGlvbi1kZWxheTouMTVzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDUpe3RyYW5zaXRpb24tZGVsYXk6LjJzfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWNoaWxkKDYpe3RyYW5zaXRpb24tZGVsYXk6LjI1c30ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCg3KXt0cmFuc2l0aW9uLWRlbGF5Oi4zc30ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCg4KXt0cmFuc2l0aW9uLWRlbGF5Oi4zNXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoOSl7dHJhbnNpdGlvbi1kZWxheTouNHN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl1+Lm1kLWJ1dHRvbjpudGgtY2hpbGQoMTApe3RyYW5zaXRpb24tZGVsYXk6LjQ1c30ubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1jaGlsZCgxMSl7dHJhbnNpdGlvbi1kZWxheTouNXN9Lm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gW21kLWljb24tbW9ycGhde3RyYW5zZm9ybTpyb3RhdGUoMCk7b3BhY2l0eToxfS5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdIFttZC1pY29uLW1vcnBoXSsubWQtaWNvbnt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKSBzY2FsZSguOCk7b3BhY2l0eTowfS5tZC1zcGVlZC1kaWFsIC5tZC1idXR0b257bWFyZ2luOjB9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9ue3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDIpe3RyYW5zaXRpb24tZGVsYXk6LjA1c30ubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoMyl7dHJhbnNpdGlvbi1kZWxheTouMXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDQpe3RyYW5zaXRpb24tZGVsYXk6LjE1c30ubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoNSl7dHJhbnNpdGlvbi1kZWxheTouMnN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDYpe3RyYW5zaXRpb24tZGVsYXk6LjI1c30ubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoNyl7dHJhbnNpdGlvbi1kZWxheTouM3N9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDgpe3RyYW5zaXRpb24tZGVsYXk6LjM1c30ubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdfi5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoOSl7dHJhbnNpdGlvbi1kZWxheTouNHN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDEwKXt0cmFuc2l0aW9uLWRlbGF5Oi40NXN9Lm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXX4ubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDExKXt0cmFuc2l0aW9uLWRlbGF5Oi41c30ubWQtc3BlZWQtZGlhbCBbbWQtaWNvbi1tb3JwaF0sLm1kLXNwZWVkLWRpYWwgW21kLWljb24tbW9ycGhdKy5tZC1pY29ue3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtc3BlZWQtZGlhbCBbbWQtaWNvbi1tb3JwaF17b3BhY2l0eTowO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKSBzY2FsZSguOCl9Lm1kLXNwaW5uZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLWRyYXd7YW5pbWF0aW9uOmQgMS45cyBsaW5lYXIgaW5maW5pdGU7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDApfS5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItcGF0aHtzdHJva2UtZGFzaGFycmF5OjIsMjAwO2FuaW1hdGlvbjpmIDEuNDI1cyBlYXNlLWluLW91dCBpbmZpbml0ZX0ubWQtc3Bpbm5lci5tZC1zcGlubmVyLWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKC44KSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtc3Bpbm5lcjpub3QoLm1kLWluZGV0ZXJtaW5hdGUpLm1kLXNwaW5uZXItZW50ZXItYWN0aXZle3RyYW5zaXRpb24tZHVyYXRpb246MnN9Lm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZSAubWQtc3Bpbm5lci1kcmF3e2FuaW1hdGlvbjplIDEuOThzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIGZvcndhcmRzfS5tZC1zcGlubmVyLWRyYXd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46YXV0bztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9Lm1kLXNwaW5uZXItcGF0aHtmaWxsOm5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9QGtleWZyYW1lcyBke3Rve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pIHRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVooMCl9MjAle29wYWNpdHk6MX10b3t0cmFuc2Zvcm06cm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmezAle3N0cm9rZS1kYXNoYXJyYXk6MiwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTM1cHh9dG97c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTEyNHB4fX0ubWQtc3ViaGVhZGVye21pbi1oZWlnaHQ6NDhweDtwYWRkaW5nOjAgMTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7ZmxleC1mbG93OnJvdyB3cmFwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1kLXN3aXRjaHt3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVye3dpZHRoOjM0cHg7aGVpZ2h0OjE0cHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoxNHB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtdGh1bWJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNpdGlvbjphbGwgLjE1cyBsaW5lYXJ9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxle3RvcDotMTZweDtyaWdodDotMTZweDtib3R0b206LTE2cHg7bGVmdDotMTZweDtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3dpZHRoOjQ4cHghaW1wb3J0YW50O2hlaWdodDo0OHB4IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O21hcmdpbjowO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3otaW5kZXg6MjtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXI6Zm9jdXN7b3V0bGluZTpub25lfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1sYWJlbHtoZWlnaHQ6MTRweDtwYWRkaW5nLWxlZnQ6OHB4O2xpbmUtaGVpZ2h0OjE0cHh9Lm1kLXN3aXRjaC5tZC1kcmFnZ2luZyAubWQtc3dpdGNoLXRodW1ie2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ubWQtc3dpdGNoLm1kLWRpc2FibGVkIC5tZC1zd2l0Y2gtdGh1bWJ7Y3Vyc29yOmRlZmF1bHR9Lm1kLXRhYmxle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIHdyYXA7ZmxleC1mbG93OmNvbHVtbiB3cmFwO292ZXJmbG93LXg6YXV0b30ubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIsLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyLC5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtdGFibGUtY2VsbHt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJsZSB0YWJsZXt3aWR0aDoxMDAlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO292ZXJmbG93OmhpZGRlbn0ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvd3tib3JkZXItdG9wOjFweCBzb2xpZCAjZTBlMGUwfS5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93Lm1kLXNlbGVjdGVkIC5tZC10YWJsZS1jZWxse2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdzpob3ZlciAubWQtdGFibGUtY2VsbHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFke3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTZweDt0ZXh0LWFsaWduOmxlZnR9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHR7cGFkZGluZy1yaWdodDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC5tZC1udW1lcmlje3RleHQtYWxpZ246cmlnaHR9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29ue3dpZHRoOjE2cHg7bWluLXdpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWluLWhlaWdodDoxNnB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bm90KC5tZC1zb3J0YWJsZS1pY29uKXttYXJnaW46MCA0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lcntoZWlnaHQ6NTZweDtwYWRkaW5nOjE0cHggMDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLXRleHR7aGVpZ2h0OjI4cHg7cGFkZGluZy1yaWdodDozMnB4O3BhZGRpbmctbGVmdDoyNHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoyOHB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC10YWJsZSAubWQtc29ydGFibGV7Y3Vyc29yOnBvaW50ZXJ9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpmaXJzdC1vZi10eXBlIC5tZC1zb3J0YWJsZS1pY29ue2xlZnQ6YXV0bztyaWdodDoxMHB4fS5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkLC5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uLC5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXIgLm1kLXNvcnRhYmxlLWljb257b3BhY2l0eToxfS5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZC1kZXNjZW5kaW5nIC5tZC1zb3J0YWJsZS1pY29ue3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpfS5tZC10YWJsZSAubWQtc29ydGFibGUgLm1kLXNvcnRhYmxlLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjJweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7b3BhY2l0eTowO2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1pbmstcmlwcGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGx7aGVpZ2h0OjQ4cHg7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxOHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbDpsYXN0LWNoaWxkIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjI0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWN7dGV4dC1hbGlnbjpyaWdodH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpYyAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1oYXMtYWN0aW9uIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye3BhZGRpbmc6NnB4IDMycHggNnB4IDI0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b257d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b246bGFzdC1jaGlsZHttYXJnaW46MCAtMTBweCAwIDB9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b24gLm1kLWljb257d2lkdGg6MThweDttaW4td2lkdGg6MThweDtoZWlnaHQ6MThweDttaW4taGVpZ2h0OjE4cHg7bWFyZ2luOjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxOHB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9ue3dpZHRoOjYwcHg7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uKy5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciwubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbisubWQtdGFibGUtaGVhZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dHtwYWRkaW5nLWxlZnQ6OHB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy1sZWZ0OjI0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94e21hcmdpbjowfS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveC1jb250YWluZXJ7d2lkdGg6MThweDtoZWlnaHQ6MThweDttYXJnaW4tdG9wOjFweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye3RvcDotMXB4O2xlZnQ6NHB4fS5tZC10YWJsZSAubWQtc2VsZWN0e21pbi13aWR0aDo4NHB4fS5tZC10YWJsZSAubWQtb3B0aW9uLC5tZC10YWJsZSAubWQtc2VsZWN0LXZhbHVle2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1lZGl0LXRyaWdnZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC10YWJsZS1lZGl0LXRyaWdnZXIubWQtZWRpdGVke2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUtZGlhbG9ne21heC1oZWlnaHQ6MDttYXJnaW46MDtwYWRkaW5nOjAgMjRweCAycHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtsZWZ0OjI0cHg7ei1pbmRleDo1O292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG1heC1oZWlnaHQgMHMgLjVzO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC04cHgsMCl9Lm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmV7bWF4LWhlaWdodDo0MDBweDtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgjMDAwKTtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1kaWFsb2cubWQtbGFyZ2V7cGFkZGluZzoxMnB4IDI0cHggMnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lcnttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxNnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dHtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVye2ZvbnQtc2l6ZToxMy41cHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC10YWJsZS1kaWFsb2cgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweH0ubWQtdGFibGUtY2FyZHtvdmVyZmxvdzp2aXNpYmxlfS5tZC10YWJsZS1jYXJkIC5tZC10b29sYmFye3BhZGRpbmctbGVmdDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWQtdGFibGUtY2FyZCAubWQtdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7Zm9udC1zaXplOjIwcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb257aGVpZ2h0OjU2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjEycHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXN7bWFyZ2luLXJpZ2h0OjJweDttYXJnaW4tbGVmdDoxOHB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3R7d2lkdGg6YXV0bzttaW4td2lkdGg6MzZweDttYXJnaW46MCAzMnB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3Q6YWZ0ZXJ7bWFyZ2luLXRvcDowfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b25bZGlzYWJsZWRdIC5tZC1pY29ue2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWQtcGFnaW5hdGlvbi1zZWxlY3QubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNnB4fS5tZC1wYWdpbmF0aW9uLXNlbGVjdCAubWQtbGlzdC1pdGVtLWhvbGRlcntmb250LXNpemU6MTNweH0ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjQ7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyLm1kLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoIzAwMCl9Lm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIgLm1kLWNvdW50ZXJ7bWFyZ2luLWxlZnQ6OHB4Oy1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJze3dpZHRoOjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtdGFicy5tZC10cmFuc2l0aW9uLW9mZiAqe3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRhYnMubWQtZHluYW1pYy1oZWlnaHQgLm1kLXRhYnMtY29udGVudHt0cmFuc2l0aW9uOmhlaWdodCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbntoZWlnaHQ6NDhweDttaW4taGVpZ2h0OjQ4cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1pY29uLm1kLWhhcy1sYWJlbHttaW4taGVpZ2h0OjcycHh9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwgLm1kLWljb257bWFyZ2luLWJvdHRvbToxMHB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtY2VudGVyZWR7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWZpeGVkIC5tZC10YWItaGVhZGVyey1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtcmlnaHR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC10YWJzIC5tZC10YWItaGVhZGVye21pbi13aWR0aDo3MnB4O21heC13aWR0aDoyNjRweDttYXJnaW46MDtwYWRkaW5nOjAgMTJweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6MDtiYWNrZ3JvdW5kOm5vbmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci5tZC1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItZHJhZzpub25lfS5tZC10YWJzIC5tZC10YWItaGVhZGVyLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIgLm1kLWljb257bWFyZ2luOjB9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3J7aGVpZ2h0OjJweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRvLXJpZ2h0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxsZWZ0IC4zcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLHJpZ2h0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1sZWZ0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxyaWdodCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxsZWZ0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1jb250ZW50e3dpZHRoOjEwMCU7aGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5tZC10YWJzIC5tZC10YWJzLXdyYXBwZXJ7d2lkdGg6OTk5OWVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFie3BhZGRpbmc6MTZweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MH0ubWQtdG9vbGJhcnttaW4taGVpZ2h0OjY0cHg7cGFkZGluZzowIDhweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWxpbmUtcGFjazpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7LW1zLWZsZXgtZmxvdzpyb3cgd3JhcDtmbGV4LWZsb3c6cm93IHdyYXA7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRvb2xiYXIubWQtZGVuc2V7bWluLWhlaWdodDo0OHB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLW1lZGl1bXttaW4taGVpZ2h0OjcycHh9Lm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbGFyZ2V7bWluLWhlaWdodDo5NnB4fS5tZC10b29sYmFyLm1kLWRlbnNlIC5tZC10b29sYmFyLWNvbnRhaW5lcntoZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW17bWluLWhlaWdodDo4OHB4fS5tZC10b29sYmFyLm1kLW1lZGl1bSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWxhcmdle21pbi1oZWlnaHQ6MTI4cHg7LW1zLWZsZXgtbGluZS1wYWNrOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0fS5tZC10b29sYmFyLm1kLWxhcmdlIC5tZC10b29sYmFyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjU2cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXJ7bWluLWhlaWdodDoxNjRweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtaW5rLXJpcHBsZXtjb2xvcjojZmZmfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xMil9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0e21hcmdpbjoxNnB4IDAgOHB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtYXZhdGFyKy5tZC1hdmF0YXJ7bWFyZ2luLWxlZnQ6MTZweH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyPi5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDowfS5tZC10b29sYmFyPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MTZweH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhciAubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCk6bm90KC5tZC1pY29uLWJ1dHRvbik6bm90KC5tZC1mYWIpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5tZC10b29sYmFyIC5tZC10aXRsZXttYXJnaW46MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo0MDB9Lm1kLXRvb2xiYXIgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjhweH0ubWQtdG9vbGJhciAubWQtdGl0bGUrLm1kLWlucHV0LWNvbnRhaW5lcnttYXJnaW4tbGVmdDoyNHB4fS5tZC10b29sYmFyIC5tZC1saXN0e3BhZGRpbmc6MDttYXJnaW46MCAtOHB4Oy1tcy1mbGV4OjE7ZmxleDoxfS5tZC10b29sdGlwe2hlaWdodDoyMHB4O3BhZGRpbmc6MCA4cHg7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxNDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSg5Nyw5Nyw5NywuODcpO2JvcmRlci1yYWRpdXM6MnB4O29wYWNpdHk6MDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zaXRpb24tZGVsYXk6MHM7Y29sb3I6I2ZmZjtmb250LWZhbWlseTpSb2JvdG8sTm90byBTYW5zLE5vdG8sc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtsaW5lLWhlaWdodDoyMHB4O3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC10b29sdGlwLm1kLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10b29sdGlwOm5vdCgubWQtYWN0aXZlKXt0cmFuc2l0aW9uLWRlbGF5OjBzIWltcG9ydGFudH0ubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDhweCl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCw1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtOHB4KX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbS5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4cHgsNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXdoaXRlZnJhbWV7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5tZC13aGl0ZWZyYW1lLTFkcHtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yZHB7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtM2Rwe2JveC1zaGFkb3c6MCAxcHggOHB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTRkcHtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNWRwe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA1cHggOHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS02ZHB7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS03ZHB7Ym94LXNoYWRvdzowIDRweCA1cHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDdweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMTZweCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLThkcHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtOWRwe2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMGRwe2JveC1zaGFkb3c6MCA2cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCAxMHB4IDE0cHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDRweCAxOHB4IDNweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTFkcHtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTEyZHB7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xM2Rwe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNHB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTRkcHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE1ZHB7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNmRwe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE3ZHB7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMThkcHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xOWRwe2JveC1zaGFkb3c6MCA5cHggMTJweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMTlweCAyOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzZweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIwZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIxZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIyZHB7Ym94LXNoYWRvdzowIDEwcHggMTRweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjJweCAzNXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDJweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIzZHB7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTI0ZHB7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWIxMjBlYmY2IS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYjEyMGViZjYhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvQXBwLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1iMTIwZWJmNiEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjNjMzBlZDBlXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYjEyMGViZjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zcGFjZS12IHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcbi5zZXAtYiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ubGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL0FwcC52dWU/MjQ5Y2U5MWFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1JQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkFwcC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1jb250YWluZXJcXFwiPlxcbiAgICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cXG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJtZC1yb3V0ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFnZS1jb250ZW50IHBhZ2Utdmlld1xcXCI+XFxuICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPG1kLWRpYWxvZy1hbGVydCA6bWQtdGl0bGU9XFxcImRpYWxvZy50aXRsZVxcXCIgOm1kLWNvbnRlbnQtaHRtbD1cXFwiZGlhbG9nLmNvbnRlbnRcXFwiIHJlZj1cXFwibW9kYWxEaWFsb2dcXFwiPlxcbiAgICA8L21kLWRpYWxvZy1hbGVydD5cXG4gICAgPG1kLWRpYWxvZy1jb25maXJtIDptZC10aXRsZT1cXFwiY29uZmlybS50aXRsZVxcXCIgOm1kLWNvbnRlbnQtaHRtbD1cXFwiY29uZmlybS5jb250ZW50XFxcIiA6bWQtb2stdGV4dD1cXFwiY29uZmlybS5va1xcXCIgOm1kLWNhbmNlbC10ZXh0PVxcXCJjb25maXJtLmNhbmNlbFxcXCJcXG4gICAgICBAY2xvc2U9XFxcIm9uQ29uZmlybUNsb3NlXFxcIiByZWY9XFxcImNvbmZpcm1EaWFsb2dcXFwiPlxcbiAgICAgIDwvbWQtZGlhbG9nLWNvbmZpcm0+XFxuICAgICAgPG1kLWRpYWxvZy1wcm9tcHQgOm1kLXRpdGxlPVxcXCJwcm9tcHQudGl0bGVcXFwiIDptZC1vay10ZXh0PVxcXCJwcm9tcHQub2tcXFwiIDptZC1jYW5jZWwtdGV4dD1cXFwicHJvbXB0LmNhbmNlbFxcXCIgOm1kLWlucHV0LXBsYWNlaG9sZGVyPVxcXCJwcm9tcHQucGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICBAY2xvc2U9XFxcIm9uUHJvbXB0Q2xvc2VcXFwiIHYtbW9kZWw9XFxcInByb21wdC5yZXNwXFxcIiByZWY9XFxcInByb21wdERpYWxvZ1xcXCI+XFxuICAgICAgICA8L21kLWRpYWxvZy1wcm9tcHQ+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhcidcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgdToge1xcbiAgICAgICAgICBrZXk6ICcnLFxcbiAgICAgICAgICBuYW1lOiAnJ1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRpYWxvZzoge1xcbiAgICAgICAgICB0aXRsZTogJyAnLFxcbiAgICAgICAgICBjb250ZW50OiAnICdcXG4gICAgICAgIH0sXFxuICAgICAgICBjb25maXJtOiB7XFxuICAgICAgICAgIHRpdGxlOiAnICcsXFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJyxcXG4gICAgICAgICAgb2s6ICdPSycsXFxuICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXFxuICAgICAgICB9LFxcbiAgICAgICAgcHJvbXB0OiB7XFxuICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgb2s6ICdPSycsXFxuICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcXG4gICAgICAgICAgLy8gbWF4bGVuZ3RoOiAwLFxcbiAgICAgICAgICByZXNwOiAnJyxcXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIGlmICghdGhpcy51LmtleSkgcmV0dXJuIGZhbHNlXFxuICAgICAgICByZXR1cm4gdHJ1ZVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICBsb2dnZWRJbjogZnVuY3Rpb24gKG5vd0xvZ2dlZEluKSB7XFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dMb2dnZWRJbilcXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1JywgSlNPTi5zdHJpbmdpZnkodGhpcy51KSlcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICBUb29sYmFyXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBzaG93UG9wdXA6IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSkge1xcbiAgICAgICAgdGhpcy5kaWFsb2cuY29udGVudCA9IGNvbnRlbnRcXG4gICAgICAgIHRoaXMuZGlhbG9nLnRpdGxlID0gdGl0bGVcXG4gICAgICAgIHRoaXMuJHJlZnMubW9kYWxEaWFsb2cub3BlbigpXFxuICAgICAgfSxcXG4gICAgICBzaG93Q29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYiwgeSwgbikge1xcbiAgICAgICAgeSA9IHkgfHwgJ09LJ1xcbiAgICAgICAgbiA9IG4gfHwgJ0NhbmNlbCdcXG4gICAgICAgIHRoaXMuY29uZmlybS5vayA9IHlcXG4gICAgICAgIHRoaXMuY29uZmlybS5jYW5jZWwgPSBuXFxuICAgICAgICB0aGlzLmNvbmZpcm0uY29udGVudCA9IGNvbnRlbnRcXG4gICAgICAgIHRoaXMuY29uZmlybS50aXRsZSA9IHRpdGxlXFxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2sgPSBjYlxcbiAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtRGlhbG9nLm9wZW4oKVxcbiAgICAgIH0sXFxuICAgICAgc2hvd1Byb21wdDogZnVuY3Rpb24gKHRpdGxlLCBwbGFjZWhvbGRlciwgY2IpIHtcXG4gICAgICAgIHRoaXMucHJvbXB0LnRpdGxlID0gdGl0bGVcXG4gICAgICAgIHRoaXMucHJvbXB0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcXG4gICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrID0gY2JcXG4gICAgICAgIHRoaXMuJHJlZnMucHJvbXB0RGlhbG9nLm9wZW4oKVxcbiAgICAgIH0sXFxuICAgICAgb25Qcm9tcHRDbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XFxuICAgICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrKHRoaXMucHJvbXB0LnJlc3ApXFxuICAgICAgICB9XFxuXFxuICAgICAgICB0aGlzLnByb21wdC5yZXNwID0gJydcXG4gICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrID0gbnVsbFxcbiAgICAgIH0sXFxuICAgICAgb25Db25maXJtQ2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayhyZXN1bHQgPT0gJ29rJylcXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IG51bGxcXG4gICAgICB9LFxcbiAgICAgIC8vIHV0aWxpdGllc1xcbiAgICAgIGh1bWFuRmlsZVNpemU6IGZ1bmN0aW9uIChieXRlcykge1xcbiAgICAgICAgdmFyIHRocmVzaCA9IDEwMjRcXG4gICAgICAgIGlmIChNYXRoLmFicyhieXRlcykgPCB0aHJlc2gpIHtcXG4gICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xcbiAgICAgICAgfVxcbiAgICAgICAgdmFyIHVuaXRzID0gWydLaUInLCAnTWlCJywgJ0dpQicsICdUaUInLCAnUGlCJywgJ0VpQicsICdaaUInLCAnWWlCJ11cXG4gICAgICAgIHZhciB1ID0gLTFcXG4gICAgICAgIGRvIHtcXG4gICAgICAgICAgYnl0ZXMgLz0gdGhyZXNoXFxuICAgICAgICAgICAgKyt1XFxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxcbiAgICAgICAgcmV0dXJuIGJ5dGVzLnRvRml4ZWQoMikgKyAnICcgKyB1bml0c1t1XVxcbiAgICAgIH0sXFxuICAgICAgZ2V0QXV0aFJlcXVlc3RQYXJhbXM6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIGFwaWtleTogdGhpcy51LmtleVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgbGV0IHNhdmVkVSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1JylcXG4gICAgICBpZiAoc2F2ZWRVKSB7XFxuICAgICAgICB0aGlzLnUgPSBKU09OLnBhcnNlKHNhdmVkVSlcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIH1cXG4gIFxcbiAgLmludmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5zcGFjZS12IHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgfVxcbiAgXFxuICAuc2VwLWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAubGVmdCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuICBcXG4gIC5jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5yaWdodCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1iMTIwZWJmNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPHRvb2xiYXI+PC90b29sYmFyPlxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50IHBhZ2Utdmlld1wiPlxuICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC10aXRsZT1cImRpYWxvZy50aXRsZVwiIDptZC1jb250ZW50LWh0bWw9XCJkaWFsb2cuY29udGVudFwiIHJlZj1cIm1vZGFsRGlhbG9nXCI+XG4gICAgPC9tZC1kaWFsb2ctYWxlcnQ+XG4gICAgPG1kLWRpYWxvZy1jb25maXJtIDptZC10aXRsZT1cImNvbmZpcm0udGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiY29uZmlybS5jb250ZW50XCIgOm1kLW9rLXRleHQ9XCJjb25maXJtLm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwiY29uZmlybS5jYW5jZWxcIlxuICAgICAgQGNsb3NlPVwib25Db25maXJtQ2xvc2VcIiByZWY9XCJjb25maXJtRGlhbG9nXCI+XG4gICAgICA8L21kLWRpYWxvZy1jb25maXJtPlxuICAgICAgPG1kLWRpYWxvZy1wcm9tcHQgOm1kLXRpdGxlPVwicHJvbXB0LnRpdGxlXCIgOm1kLW9rLXRleHQ9XCJwcm9tcHQub2tcIiA6bWQtY2FuY2VsLXRleHQ9XCJwcm9tcHQuY2FuY2VsXCIgOm1kLWlucHV0LXBsYWNlaG9sZGVyPVwicHJvbXB0LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgQGNsb3NlPVwib25Qcm9tcHRDbG9zZVwiIHYtbW9kZWw9XCJwcm9tcHQucmVzcFwiIHJlZj1cInByb21wdERpYWxvZ1wiPlxuICAgICAgICA8L21kLWRpYWxvZy1wcm9tcHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUb29sYmFyIGZyb20gJy4vY29tcG9uZW50cy90b29sYmFyJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHU6IHtcbiAgICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpYWxvZzoge1xuICAgICAgICAgIHRpdGxlOiAnICcsXG4gICAgICAgICAgY29udGVudDogJyAnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHByb21wdDoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAvLyBtYXhsZW5ndGg6IDAsXG4gICAgICAgICAgcmVzcDogJycsXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy51LmtleSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dMb2dnZWRJbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnUpKVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgVG9vbGJhclxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5kaWFsb2cudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dDb25maXJtOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNiLCB5LCBuKSB7XG4gICAgICAgIHkgPSB5IHx8ICdPSydcbiAgICAgICAgbiA9IG4gfHwgJ0NhbmNlbCdcbiAgICAgICAgdGhpcy5jb25maXJtLm9rID0geVxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxuICAgICAgICB0aGlzLmNvbmZpcm0uY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5jb25maXJtLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcbiAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XG4gICAgICAgIHRoaXMucHJvbXB0LnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5wcm9tcHQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXG4gICAgICAgIHRoaXMuJHJlZnMucHJvbXB0RGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sodGhpcy5wcm9tcHQucmVzcClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvbXB0LnJlc3AgPSAnJ1xuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICBvbkNvbmZpcm1DbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICAvLyB1dGlsaXRpZXNcbiAgICAgIGh1bWFuRmlsZVNpemU6IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgdGhyZXNoID0gMTAyNFxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXG4gICAgICAgIHZhciB1ID0gLTFcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxuICAgICAgICAgICAgKyt1XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGJ5dGVzKSA+PSB0aHJlc2ggJiYgdSA8IHVuaXRzLmxlbmd0aCAtIDEpXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDIpICsgJyAnICsgdW5pdHNbdV1cbiAgICAgIH0sXG4gICAgICBnZXRBdXRoUmVxdWVzdFBhcmFtczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgYXBpa2V5OiB0aGlzLnUua2V5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc2F2ZWRVID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3UnKVxuICAgICAgaWYgKHNhdmVkVSkge1xuICAgICAgICB0aGlzLnUgPSBKU09OLnBhcnNlKHNhdmVkVSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG4gIFxuICAuaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuc3BhY2UtdiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgXG4gIC5zZXAtYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT8yNDljZTkxYSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTMxMWUyM2FlJnNjb3BlZD10cnVlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9vbGJhci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTFlMjNhZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zMTFlMjNhZVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2xiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzExZTIzYWUmc2NvcGVkPXRydWUhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMTBkN2JlNzJcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zMTFlMjNhZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udG9vbGJhci10aXRsZVtkYXRhLXYtMzExZTIzYWVdIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5hY2NvdW50LXVzZXJuYW1lW2RhdGEtdi0zMTFlMjNhZV0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZT85YTVhOGFkMlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMEhBO0VBQ0EsUUFBQTtDQUNBO0FBRUE7RUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ0b29sYmFyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0b29sYmFyXFxcIj5cXG4gICAgPG1kLXRvb2xiYXI+XFxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtaWNvbi1idXR0b25cXFwiIEBjbGljay5uYXRpdmU9XFxcInRvZ2dsZUxlZnRTaWRlbmF2XFxcIj5cXG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XFxuICAgICAgPC9tZC1idXR0b24+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXFxcIj57eyBhcHBOYW1lIH19PC9oMj5cXG4gICAgICA8ZGl2IHYtaWY9XFxcIiRyb290LmxvZ2dlZEluXFxcIj5cXG4gICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XFxuICAgICAgICAgIDxtZC1idXR0b24gbWQtbWVudS10cmlnZ2VyPlxcbiAgICAgICAgICAgIDxtZC1pY29uPmFjY291bnRfY2lyY2xlPC9tZC1pY29uPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhY2NvdW50LXVzZXJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgIHt7ICRyb290LnUubmFtZSB9fVxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9tZC1idXR0b24+XFxuICAgICAgICAgIDxtZC1tZW51LWNvbnRlbnQ+XFxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVxcXCJyb3V0ZXJHbygnL3AnKVxcXCI+XFxuICAgICAgICAgICAgICBBY2NvdW50XFxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVxcXCJyb3V0ZXJHbygnL3UnKVxcXCI+XFxuICAgICAgICAgICAgICBEYXNoYm9hcmRcXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cXG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XFxcInJvdXRlckdvKCcvZmlsZXMnKVxcXCI+XFxuICAgICAgICAgICAgICBNeSBGaWxlc1xcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxcbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XFxcImxvZ291dFxcXCI+XFxuICAgICAgICAgICAgICBMb2cgT3V0XFxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XFxuICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxcbiAgICAgICAgPC9tZC1tZW51PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtaWNvbi1idXR0b25cXFwiIEBjbGljay5uYXRpdmU9XFxcInZpc2l0R2l0SHViXFxcIj5cXG4gICAgICAgICAgPG1kLWljb24+ZmF2b3JpdGU8L21kLWljb24+XFxuICAgICAgICA8L21kLWJ1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9tZC10b29sYmFyPlxcbiAgICA8bWQtc2lkZW5hdiBjbGFzcz1cXFwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcXFwiIHJlZj1cXFwibGVmdFNpZGVuYXZcXFwiPlxcbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVxcXCJtZC1sYXJnZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZC10b29sYmFyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwibWQtdGl0bGVcXFwiPnt7IGFwcE5hbWUgfX08L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9tZC10b29sYmFyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRvb2xiYXItY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLWxpbmtzXFxcIj5cXG4gICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XFxcIm1kLWRlbnNlXFxcIj5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiJHJvb3QubG9nZ2VkSW5cXFwiPlxcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVxcXCJjbG9zZVNpZGVuYXZcXFwiPlxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XFxcIi9wXFxcIj5BY2NvdW50PC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2submF0aXZlPVxcXCJjbG9zZVNpZGVuYXZcXFwiPlxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XFxcIi91XFxcIj5EYXNoYm9hcmQ8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XFxcImNsb3NlU2lkZW5hdlxcXCI+XFxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cXFwiL2ZpbGVzXFxcIj5GaWxlczwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VTaWRlbmF2XFxcIiB2LWVsc2U+XFxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XFxcIi9cXFwiPkhvbWU8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VTaWRlbmF2XFxcIj5cXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cXFwiL2Fib3V0XFxcIj5BYm91dDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XFxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XFxuICAgICAgICAgICAgICAgIDxtZC1saXN0PlxcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XFxcIm1kLWluc2V0XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBHaXRIdWJcXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC1pbnNldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdD5cXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1leHBhbmQ+XFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgIDwvbWQtbGlzdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21kLXNpZGVuYXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGFwcE5hbWU6ICdQZW5ndWluVXBsb2FkJyxcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWQnKVxcbiAgICAgIH0sXFxuICAgICAgdG9nZ2xlTGVmdFNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcXG4gICAgICB9LFxcbiAgICAgIGNsb3NlU2lkZW5hdjogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi5jbG9zZSgpXFxuICAgICAgfSxcXG4gICAgICBsb2dvdXQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuJHJvb3QudS5rZXkgPSAnJ1xcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgIH0sXFxuICAgICAgcm91dGVyR286IGZ1bmN0aW9uICh1KSB7XFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh1KVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcXG4gICAgICAvLyB0aGVuIHJlZ2lzdGVyIGhvb2tcXG4gICAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcXG4gICAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxcbiAgICAgICAgbmV4dCgpXFxuICAgICAgfSlcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcbjwhLS0gQWRkIFxcXCJzY29wZWRcXFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cXG48c3R5bGUgc2NvcGVkPlxcbiAgLnRvb2xiYXItdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbiAgXFxuICAuYWNjb3VudC11c2VybmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zMTFlMjNhZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgIDxtZC10b29sYmFyPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgQGNsaWNrLm5hdGl2ZT1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XG4gICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBtZC1tZW51LXRyaWdnZXI+XG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3VudC11c2VybmFtZVwiPlxuICAgICAgICAgICAgICB7eyAkcm9vdC51Lm5hbWUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwicm91dGVyR28oJy9wJylcIj5cbiAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljay5uYXRpdmU9XCJyb3V0ZXJHbygnL3UnKVwiPlxuICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2submF0aXZlPVwicm91dGVyR28oJy9maWxlcycpXCI+XG4gICAgICAgICAgICAgIE15IEZpbGVzXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cImxvZ291dFwiPlxuICAgICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICA8L21kLW1lbnUtY29udGVudD5cbiAgICAgICAgPC9tZC1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgQGNsaWNrLm5hdGl2ZT1cInZpc2l0R2l0SHViXCI+XG4gICAgICAgICAgPG1kLWljb24+ZmF2b3JpdGU8L21kLWljb24+XG4gICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC10b29sYmFyPlxuICAgIDxtZC1zaWRlbmF2IGNsYXNzPVwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcIiByZWY9XCJsZWZ0U2lkZW5hdlwiPlxuICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJtZC1sYXJnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZVwiPnt7IGFwcE5hbWUgfX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWQtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItbGlua3NcIj5cbiAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cIm1kLWRlbnNlXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cImNsb3NlU2lkZW5hdlwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9wXCI+QWNjb3VudDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvdVwiPkRhc2hib2FyZDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvZmlsZXNcIj5GaWxlczwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrLm5hdGl2ZT1cImNsb3NlU2lkZW5hdlwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljay5uYXRpdmU9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtaW5zZXRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtc2lkZW5hdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdmlzaXRHaXRIdWI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWQnKVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZUxlZnRTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi5jbG9zZSgpXG4gICAgICB9LFxuICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXG4gICAgICB9LFxuICAgICAgcm91dGVyR286IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHUpXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXG4gICAgICAvLyB0aGVuIHJlZ2lzdGVyIGhvb2tcbiAgICAgIHRoaXMuJHJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcbiAgICAgICAgbmV4dCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuYWNjb3VudC11c2VybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2xiYXIudnVlPzlhNWE4YWQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVMZWZ0U2lkZW5hdigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibWVudVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LmxvZ2dlZEluKSA/IF9jKCdkaXYnLCBbX2MoJ21kLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFjY291bnQtdXNlcm5hbWVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIlxcbiAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1jb250ZW50JywgW19jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3AnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjY291bnRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3UnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIERhc2hib2FyZFxcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvZmlsZXMnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIE15IEZpbGVzXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9nb3V0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBMb2cgT3V0XFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS52aXNpdEdpdEh1YigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiZmF2b3JpdGVcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXNpZGVuYXYnLCB7XG4gICAgcmVmOiBcImxlZnRTaWRlbmF2XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtbGFyZ2VcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10b29sYmFyLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYXBwTmFtZSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpZGViYXItbGlua3NcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtZGVuc2VcIlxuICB9LCBbKF92bS4kcm9vdC5sb2dnZWRJbikgPyBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsb3NlU2lkZW5hdigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3BcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFjY291bnRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2xvc2VTaWRlbmF2KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvdVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGFzaGJvYXJkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsb3NlU2lkZW5hdigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2ZpbGVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGaWxlc1wiKV0pXSwgMSldIDogX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsb3NlU2lkZW5hdigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZVNpZGVuYXYoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9hYm91dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWJvdXRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdzcGFuJywgW192bS5fdihcIlN1cHBvcnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtZXhwYW5kJywgW19jKCdtZC1saXN0JywgW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIixcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSwgMildLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMTFlMjNhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCJcbiAgfSwgW19jKCd0b29sYmFyJyksIF92bS5fdihcIiBcIiksIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtZC1yb3V0ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFnZS1jb250ZW50IHBhZ2Utdmlld1wiXG4gIH0sIFtfYygncm91dGVyLXZpZXcnKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1hbGVydCcsIHtcbiAgICByZWY6IFwibW9kYWxEaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0uZGlhbG9nLnRpdGxlLFxuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmRpYWxvZy5jb250ZW50XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1jb25maXJtJywge1xuICAgIHJlZjogXCJjb25maXJtRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmNvbmZpcm0udGl0bGUsXG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uY29uZmlybS5jb250ZW50LFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5jb25maXJtLm9rLFxuICAgICAgXCJtZC1jYW5jZWwtdGV4dFwiOiBfdm0uY29uZmlybS5jYW5jZWxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5vbkNvbmZpcm1DbG9zZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctcHJvbXB0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnByb21wdC5yZXNwKSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvbXB0LnJlc3BcIlxuICAgIH1dLFxuICAgIHJlZjogXCJwcm9tcHREaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0ucHJvbXB0LnRpdGxlLFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5wcm9tcHQub2ssXG4gICAgICBcIm1kLWNhbmNlbC10ZXh0XCI6IF92bS5wcm9tcHQuY2FuY2VsLFxuICAgICAgXCJtZC1pbnB1dC1wbGFjZWhvbGRlclwiOiBfdm0ucHJvbXB0LnBsYWNlaG9sZGVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb21wdC5yZXNwKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogX3ZtLm9uUHJvbXB0Q2xvc2UsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucHJvbXB0LnJlc3AgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjEyMGViZjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==