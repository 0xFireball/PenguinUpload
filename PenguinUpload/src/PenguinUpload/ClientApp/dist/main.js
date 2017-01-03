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
	
	__webpack_require__(33);
	
	__webpack_require__(73);
	
	__webpack_require__(79);
	
	__webpack_require__(81);
	
	var _vueMaterial = __webpack_require__(83);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(84);
	
	var _App = __webpack_require__(86);
	
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
	
	var _dashboard = __webpack_require__(5);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _notFound = __webpack_require__(18);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	var _landing = __webpack_require__(21);
	
	var _landing2 = _interopRequireDefault(_landing);
	
	var _about = __webpack_require__(27);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var main = [{
	  path: '/',
	  name: 'landing',
	  component: _landing2.default
	}, {
	  path: '/u',
	  name: 'dashboard',
	  component: _dashboard2.default
	}, {
	  path: '/home',
	  redirect: '/'
	}, {
	  path: '/about',
	  name: 'About',
	  component: _about2.default
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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-36baef12"
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _fileUploadWidget = __webpack_require__(10);
	
	var _fileUploadWidget2 = _interopRequireDefault(_fileUploadWidget);
	
	var _devCredits = __webpack_require__(14);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(8)
	
	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/intro.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4c71ae42"
	if (__vue_options__.functional) {console.error("[vue-loader] intro.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      appTitle: 'PenguinUpload'
	    };
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "intro"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('h1', {
	    staticClass: "app-title"
	  }, [_vm._v(_vm._s(_vm.appTitle))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/fileUploadWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4fe946c4"
	if (__vue_options__.functional) {console.error("[vue-loader] fileUploadWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(12);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  name: 'urlShrinkInput',
	  data: function data() {
	    return {
	      completedAlert: {
	        content: '.',
	        ok: 'Cool'
	      }
	    };
	  },
	
	  methods: {
	    browseForFiles: function browseForFiles() {
	      this.$refs.browse.click();
	    },
	    onFilesUploaded: function onFilesUploaded(e) {
	      var browse = this.$refs.browse;
	      for (var i = 0; i < browse.files.length; i++) {
	        var f = browse.files[i];
	        var progress = addRow(f);
	        this.uploadFile(f, progress);
	      }
	    },
	    uploadFile: function uploadFile(file, progress) {
	      var bar = progress.querySelector(".progress-bar");
	      var xhr = new XMLHttpRequest();
	      xhr.open("POST", "/api/upload");
	      xhr.onload = function () {
	        var response = JSON.parse(xhr.responseText);
	        progress.innerHTML = "<a href='" + response.url + "'>" + response.url + "</a>";
	      };
	      xhr.upload.onprogress = function (e) {
	        if (e.lengthComputable) {
	          var progress = Math.floor(e.loaded / e.total * 100);
	          bar.style.width = progress + "%";
	          bar.textContent = progress + "%";
	        }
	      };
	      var form = new FormData();
	      form.append("key", window.api_key);
	      form.append("file", file);
	      xhr.send(form);
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "urlShrinkInput"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "eight columns offset-by-two"
	  }, [_c('div', {
	    staticClass: "upload-here",
	    on: {
	      "click": _vm.browseForFiles
	    }
	  }, [_c('md-card', [_c('md-card-header', [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("Upload Files")]), _vm._v(" "), _c('div', {
	    staticClass: "md-subhead"
	  }, [_vm._v("Drag and drop or click")])]), _vm._v(" "), _c('md-card-content', [_c('div', {
	    staticClass: "upload-area-padding"
	  })]), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
	    staticClass: "md-fab"
	  }, [_c('md-icon', [_vm._v("cloud_upload")])], 1)], 1)], 1), _vm._v(" "), _c('input', {
	    ref: "browse",
	    staticClass: "invisible",
	    attrs: {
	      "type": "file",
	      "multiple": ""
	    },
	    on: {
	      "change": _vm.onFilesUploaded
	    }
	  })], 1)])]), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "completedDialog",
	    attrs: {
	      "md-content-html": _vm.completedAlert.content,
	      "md-ok-text": _vm.completedAlert.ok
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(15)
	
	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/devCredits.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3535ec3c"
	if (__vue_options__.functional) {console.error("[vue-loader] devCredits.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'devCredits',
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "devCredits"
	  }, [_c('h6', {
	    staticClass: "credit-text"
	  }, [_vm._v("Made by "), _c('a', {
	    attrs: {
	      "href": "https://0xfireball.me",
	      "target": "_blank"
	    }
	  }, [_vm._v("0xFireball")])])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro'), _vm._v(" "), _c('fileUploadWidget'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(19)
	
	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/notFound.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-57d1dae1"
	if (__vue_options__.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(22)
	
	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/landing.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8696f2d6"
	if (__vue_options__.functional) {console.error("[vue-loader] landing.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(14);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _login = __webpack_require__(23);
	
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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(24)
	
	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f5aeb5c"
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(12);
	
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
	        err: '',
	        e: true },
	      dialog: {
	        title: ' ',
	        content: ' '
	      }
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
	          vm.$root.loggedIn = true;
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
	      var _this = this;
	
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
	        password: vm.register.password
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          _this.showPopup('Registration succeeded! You may now log in.', 'Success');
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
	    },
	    showPopup: function showPopup(content, title) {
	      this.dialog.content = content;
	      this.dialog.title = title;
	      this.$refs.modalDialog.open();
	    }
	  }
	};

/***/ },
/* 25 */
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
	    on: {
	      "click": _vm.tryLogin
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
	    on: {
	      "click": _vm.tryRegister
	    }
	  }, [_vm._v("Sign Up")])], 1)])], 1), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "modalDialog",
	    attrs: {
	      "md-title": _vm.dialog.title,
	      "md-content-html": _vm.dialog.content
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(28)
	
	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/about.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2863e68b"
	if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _aboutWidget = __webpack_require__(29);
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(30)
	
	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/aboutWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-11efd838"
	if (__vue_options__.functional) {console.error("[vue-loader] aboutWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      appName: 'PenguinUpload'
	    };
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "aboutWidget"
	  }, [_c('h5', [_vm._v("About " + _vm._s(_vm.appName))]), _vm._v(" "), _c('p', [_vm._v("\n    Easy file hosting/uploads\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, "/* roboto-100 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(36) + ") format('woff2'), \n    url(" + __webpack_require__(37) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-100italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 100;\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(38) + ") format('woff2'), \n    url(" + __webpack_require__(39) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(40) + ") format('woff2'), \n    url(" + __webpack_require__(41) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(42) + ") format('woff2'), \n    url(" + __webpack_require__(43) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-regular - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(44) + ") format('woff2'), \n    url(" + __webpack_require__(45) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(46) + ") format('woff2'), \n    url(" + __webpack_require__(47) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(48) + ") format('woff2'), \n    url(" + __webpack_require__(49) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(50) + ") format('woff2'), \n    url(" + __webpack_require__(51) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(52) + ") format('woff2'), \n    url(" + __webpack_require__(53) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(54) + ") format('woff2'), \n    url(" + __webpack_require__(55) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 900;\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(56) + ") format('woff2'), \n    url(" + __webpack_require__(57) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 900;\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(58) + ") format('woff2'), \n    url(" + __webpack_require__(59) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-300 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(60) + ") format('woff2'), \n    url(" + __webpack_require__(61) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-regular - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(62) + ") format('woff2'), \n    url(" + __webpack_require__(63) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-500 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(64) + ") format('woff2'), \n    url(" + __webpack_require__(65) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-600 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(66) + ") format('woff2'), \n    url(" + __webpack_require__(67) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-700 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(68) + ") format('woff2'), \n    url(" + __webpack_require__(69) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-800 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 800;\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(70) + ") format('woff2'), \n    url(" + __webpack_require__(71) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\nbody {\n    background-color: #fafafa;\n}", ""]);
	
	// exports


/***/ },
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.8ce5988.woff2";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.654cb4d.woff";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.acee0ea.woff2";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.42de898.woff";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.16ddb15.woff2";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.ecce92d.woff";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.3ddb748.woff2";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.4d08dae.woff";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.7e367be.woff2";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.16e1d93.woff";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.984ae37.woff2";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.1e65e7e.woff";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.bb474f1.woff2";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.57af64f.woff";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.9e7beee.woff2";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.b670694.woff";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.0d7e71f.woff2";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.525d5b4.woff";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.7394ca9.woff2";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.ad0e74f.woff";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.4faec83.woff2";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.3b9590e.woff";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.f4e8dc5.woff2";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.de984c0.woff";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.e746e03.woff2";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.78dd5ab.woff";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.9106435.woff2";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.290ee38.woff";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.e5a3212.woff2";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.81e9558.woff";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.cd90392.woff2";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.a4b6f17.woff";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.06f1c86.woff2";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.c864d84.woff";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.041a4b8.woff2";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.2a3a9cf.woff";

/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + __webpack_require__(75) + ");\n    /* For IE6-8 */\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(76) + ") format('woff2'), url(" + __webpack_require__(77) + ") format('woff'), url(" + __webpack_require__(78) + ") format('truetype');\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n}", ""]);
	
	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.e79bfd8.eot";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.570eb83.woff2";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.012cf6a.woff";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.a37b0c0.ttf";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", ""]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
	// exports


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("vue-material");

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar.md-avatar-icon{background-color:rgba(0,0,0,.38)}.md-avatar.md-avatar-icon .md-icon{color:#fff}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}.md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translateZ(0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:rgba(0,0,0,.005)}.md-bottom-bar{width:100%;min-width:100%;height:56px;-ms-flex-pack:center;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar,.md-bottom-bar-item{position:relative;display:-ms-flexbox;display:flex}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;cursor:pointer;border:none;background:transparent;transform:translateZ(0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translateZ(0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;-ms-flex:1 1 32px;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width;transition-property:flex,min-width,max-width,-ms-flex}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;-ms-flex:1 1 72px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translateZ(0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear,opacity .15s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear}.md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:none;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:500;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button,.md-button:focus{outline:none}.md-button::-moz-focus-inner{border:0}.md-button:hover:not([disabled]):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button:hover:not([disabled]).md-raised{background-color:rgba(0,0,0,.12)}.md-button:active:not([disabled]){background-color:hsla(0,0%,60%,.4)}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{margin-top:1px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button:not([disabled]):hover{background:none}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px;line-height:32px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-fab-top-left{position:absolute;top:16px;left:16px}.md-button.md-fab.md-fab-top-center{position:absolute;top:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-top-right{position:absolute;top:16px;right:16px}.md-button.md-fab.md-fab-bottom-left{position:absolute;bottom:16px;left:16px}.md-button.md-fab.md-fab-bottom-center{position:absolute;bottom:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-bottom-right{position:absolute;right:16px;bottom:16px}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:40px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{color:rgba(0,0,0,.26);cursor:default}.md-button[disabled].md-fab,.md-button[disabled].md-raised{background-color:rgba(0,0,0,.12)}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}.md-button-toggle{width:auto;display:-ms-flexbox;display:flex}.md-button-toggle>.md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle>.md-button:not([disabled]){color:rgba(0,0,0,.54)}.md-button-toggle>.md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button-toggle>.md-button .md-ink-ripple{border-radius:2px}.md-card{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:1;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{-ms-flex:1;flex:1}.md-card .md-card-header .md-card-media{width:80px;-ms-flex:0 0 80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;-ms-flex:0 0 120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;-ms-flex:0 0 160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card .md-card-media-actions{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;-ms-flex:1;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotate(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{padding-top:4px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin}.md-checkbox{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-checkbox .md-checkbox-container{width:20px;height:20px;position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0);mask-image:radial-gradient(circle,#fff 100%,#000 0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;transform:scale(0);background-color:currentColor;opacity:.26;border-radius:50%}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1)}@keyframes ripple{to{transform:scale(1.5);opacity:0}}.md-dialog-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:108}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-backdrop{position:fixed;z-index:109}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden;position:relative;z-index:110;outline:none;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1) .05s;will-change:opacity,transform}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;-ms-flex:1;flex:1;overflow:auto;position:relative;background:linear-gradient(180deg,#fff 0,#fff 1px,transparent 0),linear-gradient(0deg,#fff 0,#fff 3px,transparent 0),linear-gradient(180deg,rgba(0,0,0,.12) 0,rgba(0,0,0,.12) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.2) 1px,rgba(0,0,0,.2) 2px,transparent 0);background-attachment:local,local,scroll,scroll}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;background-color:#fff;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(0,0,0,.12)}.md-divider.md-inset{margin-left:72px}.md-icon{width:24px;min-width:24px;height:24px;min-height:24px;margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;fill:currentColor;vertical-align:middle}.md-input-container{width:100%;min-height:48px;margin:4px 0 24px;padding-top:16px;position:relative}.md-input-container:after{height:1px;right:0;bottom:0;background-color:rgba(0,0,0,.12);content:\" \"}.md-input-container:after,.md-input-container label{position:absolute;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container label{top:23px;pointer-events:none;transition-duration:.3s;color:rgba(0,0,0,.54);font-size:16px;line-height:20px}.md-input-container input,.md-input-container textarea{width:100%;height:32px;padding:0;display:block;border:none;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;color:rgba(0,0,0,.54);font-family:inherit;font-size:1px;line-height:32px}.md-input-container input:focus,.md-input-container textarea:focus{outline:none}.md-input-container input::-webkit-input-placeholder,.md-input-container textarea::-webkit-input-placeholder{color:rgba(0,0,0,.54);font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-input-container .md-error{height:20px;display:block!important;position:absolute;opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2);font-size:12px}.md-input-container .md-count{height:20px;position:absolute;right:0;font-size:12px}.md-input-container.md-input-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-input-container.md-input-placeholder input,.md-input-container.md-input-placeholder textarea{font-size:16px}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea{color:rgba(0,0,0,.87)}.md-input-container.md-input-inline label{pointer-events:none}.md-input-container.md-input-inline.md-input-focused label{top:23px;font-size:16px}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-input-disabled:after{background:0 100% repeat-x;background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-size:4px 1px}.md-input-container.md-input-disabled input,.md-input-container.md-input-disabled label,.md-input-container.md-input-disabled textarea{color:rgba(0,0,0,.38)}.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:rgba(0,0,0,.54)}.md-input-container.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px;color:rgba(0,0,0,.38)}.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:rgba(0,0,0,.87)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translateZ(0)}.md-input-container.md-input-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after{color:rgba(0,0,0,.87)}.md-layout{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1;flex:1}.md-row{-ms-flex-direction:row;flex-direction:row}.md-column{-ms-flex-direction:column;flex-direction:column}.md-layout.md-container{width:100%;max-width:1200px}.md-layout.md-container.md-centered{margin:0 auto}.md-gutter:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter .md-column>.md-layout{padding-top:12px;padding-bottom:12px}@media (max-width:944px){.md-gutter:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter .md-column>.md-layout{padding-top:8px;padding-bottom:8px}}.md-gutter-8:not(.md-column){margin-right:-4px;margin-left:-4px}.md-gutter-8:not(.md-column)>.md-layout{padding-right:4px;padding-left:4px}.md-gutter-8 .md-column{margin-top:-4px;margin-bottom:-4px}.md-gutter-8 .md-column>.md-layout{padding-top:4px;padding-bottom:4px}.md-gutter-16:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter-16:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter-16 .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter-16 .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-gutter-24:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter-24:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter-24 .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter-24 .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-40:not(.md-column){margin-right:-20px;margin-left:-20px}.md-gutter-40:not(.md-column)>.md-layout{padding-right:20px;padding-left:20px}.md-gutter-40 .md-column{margin-top:-20px;margin-bottom:-20px}.md-gutter-40 .md-column>.md-layout{padding-top:20px;padding-bottom:20px}.md-flex{-ms-flex:1 1;flex:1 1}.md-flex-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-33{margin-left:33.33333%}.md-flex-offset-66{margin-left:66.66666%}.md-flex-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-5{margin-left:5%}.md-flex-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-10{margin-left:10%}.md-flex-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-15{margin-left:15%}.md-flex-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-20{margin-left:20%}.md-flex-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-25{margin-left:25%}.md-flex-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-30{margin-left:30%}.md-flex-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-35{margin-left:35%}.md-flex-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-40{margin-left:40%}.md-flex-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-45{margin-left:45%}.md-flex-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-50{margin-left:50%}.md-flex-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-55{margin-left:55%}.md-flex-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-60{margin-left:60%}.md-flex-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-65{margin-left:65%}.md-flex-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-70{margin-left:70%}.md-flex-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-75{margin-left:75%}.md-flex-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-80{margin-left:80%}.md-flex-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-85{margin-left:85%}.md-flex-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-90{margin-left:90%}.md-flex-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-95{margin-left:95%}.md-flex-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-100{margin-left:100%}@media (min-width:1904px){.md-row-xlarge{-ms-flex-direction:row;flex-direction:row}.md-column-xlarge{-ms-flex-direction:column;flex-direction:column}.md-flex-xlarge{-ms-flex:1 1;flex:1 1}.md-flex-xlarge-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xlarge-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xlarge-33{margin-left:33.33333%}.md-flex-offset-xlarge-66{margin-left:66.66666%}.md-flex-xlarge-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xlarge-5{margin-left:5%}.md-flex-xlarge-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xlarge-10{margin-left:10%}.md-flex-xlarge-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xlarge-15{margin-left:15%}.md-flex-xlarge-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xlarge-20{margin-left:20%}.md-flex-xlarge-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xlarge-25{margin-left:25%}.md-flex-xlarge-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xlarge-30{margin-left:30%}.md-flex-xlarge-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xlarge-35{margin-left:35%}.md-flex-xlarge-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xlarge-40{margin-left:40%}.md-flex-xlarge-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xlarge-45{margin-left:45%}.md-flex-xlarge-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xlarge-50{margin-left:50%}.md-flex-xlarge-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xlarge-55{margin-left:55%}.md-flex-xlarge-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xlarge-60{margin-left:60%}.md-flex-xlarge-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xlarge-65{margin-left:65%}.md-flex-xlarge-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xlarge-70{margin-left:70%}.md-flex-xlarge-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xlarge-75{margin-left:75%}.md-flex-xlarge-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xlarge-80{margin-left:80%}.md-flex-xlarge-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xlarge-85{margin-left:85%}.md-flex-xlarge-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xlarge-90{margin-left:90%}.md-flex-xlarge-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xlarge-95{margin-left:95%}.md-flex-xlarge-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xlarge-100{margin-left:100%}.md-hide-xlarge{display:none}}@media (max-width:1903px){.md-row-large{-ms-flex-direction:row;flex-direction:row}.md-column-large{-ms-flex-direction:column;flex-direction:column}.md-flex-large{-ms-flex:1 1;flex:1 1}.md-flex-large-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-large-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-large-33{margin-left:33.33333%}.md-flex-offset-large-66{margin-left:66.66666%}.md-flex-large-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-large-5{margin-left:5%}.md-flex-large-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-large-10{margin-left:10%}.md-flex-large-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-large-15{margin-left:15%}.md-flex-large-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-large-20{margin-left:20%}.md-flex-large-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-large-25{margin-left:25%}.md-flex-large-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-large-30{margin-left:30%}.md-flex-large-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-large-35{margin-left:35%}.md-flex-large-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-large-40{margin-left:40%}.md-flex-large-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-large-45{margin-left:45%}.md-flex-large-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-large-50{margin-left:50%}.md-flex-large-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-large-55{margin-left:55%}.md-flex-large-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-large-60{margin-left:60%}.md-flex-large-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-large-65{margin-left:65%}.md-flex-large-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-large-70{margin-left:70%}.md-flex-large-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-large-75{margin-left:75%}.md-flex-large-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-large-80{margin-left:80%}.md-flex-large-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-large-85{margin-left:85%}.md-flex-large-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-large-90{margin-left:90%}.md-flex-large-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-large-95{margin-left:95%}.md-flex-large-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-large-100{margin-left:100%}.md-hide-large{display:none}}@media (max-width:1264px){.md-row-medium{-ms-flex-direction:row;flex-direction:row}.md-column-medium{-ms-flex-direction:column;flex-direction:column}.md-flex-medium{-ms-flex:1 1;flex:1 1}.md-flex-medium-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-medium-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-medium-33{margin-left:33.33333%}.md-flex-offset-medium-66{margin-left:66.66666%}.md-flex-medium-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-medium-5{margin-left:5%}.md-flex-medium-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-medium-10{margin-left:10%}.md-flex-medium-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-medium-15{margin-left:15%}.md-flex-medium-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-medium-20{margin-left:20%}.md-flex-medium-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-medium-25{margin-left:25%}.md-flex-medium-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-medium-30{margin-left:30%}.md-flex-medium-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-medium-35{margin-left:35%}.md-flex-medium-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-medium-40{margin-left:40%}.md-flex-medium-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-medium-45{margin-left:45%}.md-flex-medium-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-medium-50{margin-left:50%}.md-flex-medium-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-medium-55{margin-left:55%}.md-flex-medium-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-medium-60{margin-left:60%}.md-flex-medium-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-medium-65{margin-left:65%}.md-flex-medium-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-medium-70{margin-left:70%}.md-flex-medium-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-medium-75{margin-left:75%}.md-flex-medium-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-medium-80{margin-left:80%}.md-flex-medium-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-medium-85{margin-left:85%}.md-flex-medium-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-medium-90{margin-left:90%}.md-flex-medium-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-medium-95{margin-left:95%}.md-flex-medium-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-medium-100{margin-left:100%}.md-hide-medium{display:none}}@media (max-width:944px){.md-row-small{-ms-flex-direction:row;flex-direction:row}.md-column-small{-ms-flex-direction:column;flex-direction:column}.md-flex-small{-ms-flex:1 1;flex:1 1}.md-flex-small-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-small-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-small-33{margin-left:33.33333%}.md-flex-offset-small-66{margin-left:66.66666%}.md-flex-small-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-small-5{margin-left:5%}.md-flex-small-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-small-10{margin-left:10%}.md-flex-small-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-small-15{margin-left:15%}.md-flex-small-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-small-20{margin-left:20%}.md-flex-small-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-small-25{margin-left:25%}.md-flex-small-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-small-30{margin-left:30%}.md-flex-small-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-small-35{margin-left:35%}.md-flex-small-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-small-40{margin-left:40%}.md-flex-small-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-small-45{margin-left:45%}.md-flex-small-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-small-50{margin-left:50%}.md-flex-small-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-small-55{margin-left:55%}.md-flex-small-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-small-60{margin-left:60%}.md-flex-small-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-small-65{margin-left:65%}.md-flex-small-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-small-70{margin-left:70%}.md-flex-small-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-small-75{margin-left:75%}.md-flex-small-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-small-80{margin-left:80%}.md-flex-small-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-small-85{margin-left:85%}.md-flex-small-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-small-90{margin-left:90%}.md-flex-small-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-small-95{margin-left:95%}.md-flex-small-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-small-100{margin-left:100%}.md-hide-small{display:none}}@media (max-width:600px){.md-row-xsmall{-ms-flex-direction:row;flex-direction:row}.md-column-xsmall{-ms-flex-direction:column;flex-direction:column}.md-flex-xsmall{-ms-flex:1 1;flex:1 1}.md-flex-xsmall-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xsmall-33{margin-left:33.33333%}.md-flex-offset-xsmall-66{margin-left:66.66666%}.md-flex-xsmall-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xsmall-5{margin-left:5%}.md-flex-xsmall-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xsmall-10{margin-left:10%}.md-flex-xsmall-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xsmall-15{margin-left:15%}.md-flex-xsmall-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xsmall-20{margin-left:20%}.md-flex-xsmall-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xsmall-25{margin-left:25%}.md-flex-xsmall-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xsmall-30{margin-left:30%}.md-flex-xsmall-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xsmall-35{margin-left:35%}.md-flex-xsmall-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xsmall-40{margin-left:40%}.md-flex-xsmall-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xsmall-45{margin-left:45%}.md-flex-xsmall-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xsmall-50{margin-left:50%}.md-flex-xsmall-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xsmall-55{margin-left:55%}.md-flex-xsmall-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xsmall-60{margin-left:60%}.md-flex-xsmall-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xsmall-65{margin-left:65%}.md-flex-xsmall-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xsmall-70{margin-left:70%}.md-flex-xsmall-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xsmall-75{margin-left:75%}.md-flex-xsmall-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xsmall-80{margin-left:80%}.md-flex-xsmall-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xsmall-85{margin-left:85%}.md-flex-xsmall-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xsmall-90{margin-left:90%}.md-flex-xsmall-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xsmall-95{margin-left:95%}.md-flex-xsmall-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xsmall-100{margin-left:100%}.md-hide-xsmall{display:none}}.md-list{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list.md-triple-line .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-list-item-holder{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1}.md-list-item .md-list-item-holder>.md-ink-ripple{border-radius:0}.md-list-item .md-list-item-holder>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-holder .md-avatar:first-child{margin-right:16px}.md-list-item .md-list-item-holder .md-list-action{margin:0 -2px 0 0}.md-list-item .md-list-item-holder .md-list-action:nth-child(3){margin:0 -2px 0 16px}.md-list-item .md-list-item-container{width:100%;min-height:48px;margin:0;padding:0 16px;position:relative;border-radius:0;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*{-ms-flex:1 1 auto;flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-icon{color:rgba(0,0,0,.54)}.md-list-item-expand{min-height:48px;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow:hidden}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:after,.md-list-item-expand.md-active:before{background-color:rgba(0,0,0,.12)}.md-list-item-expand.md-active:first-of-type:before,.md-list-item-expand.md-active:last-of-type:after{background:none}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotate(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand>.md-list-item-container>.md-list-item-holder{position:relative;z-index:2}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none!important}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex:1;flex:1;overflow:hidden;line-height:1.25em;text-overflow:ellipsis;white-space:normal}.md-list-text-container>:nth-child(1){font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;color:rgba(0,0,0,.54);font-size:14px}.md-list-text-container>:nth-child(2):not(:last-child){color:rgba(0,0,0,.87)}.md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:120;transform:scale(.9,.85) translateZ(0);border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .25s cubic-bezier(.55,0,.55,.2),margin .2s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .25s;will-change:transform,opacity,width}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .35s cubic-bezier(.25,.8,.25,1),transform .25s cubic-bezier(.25,.8,.25,1) .05s}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .2s cubic-bezier(.25,.8,.25,1) .15s}.md-menu-content .md-list{opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item[disabled]{cursor:default}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-radio{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-radio .md-radio-container{width:20px;height:20px;position:relative;border-radius:50%;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-select{width:100%;min-width:128px;height:32px;position:relative}.md-select:focus{outline:none}.md-select:after{margin-top:2px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .15s linear;content:\"\\25BC\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.md-select select{position:absolute;left:-999em}.md-select .md-menu,.md-select .md-select-value{width:100%;height:32px;display:block;position:relative}.md-select .md-select-value{padding-right:24px;cursor:pointer;overflow:hidden;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-subheader{color:hsla(0,0%,46%,.87);text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;-ms-flex-pack:start;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}.md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:100;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}.md-spinner{display:inline-block;position:relative;pointer-events:none;will-change:transform,opacity}.md-spinner.md-indeterminate .md-spinner-draw{animation:spinner-rotate 1.9s linear infinite;transform:rotate(0deg) translateZ(0)}.md-spinner.md-indeterminate .md-spinner-path{stroke-dasharray:2,200;animation:spinner-dash 1.425s ease-in-out infinite}.md-spinner.md-spinner-leave-active{opacity:0;transform:scale(.8) translateZ(0);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-spinner:not(.md-indeterminate).md-spinner-enter-active{transition-duration:2s}.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw{animation:spinner-initial-rotate 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-spinner-draw{width:100%;height:100%;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transform:rotate(270deg) translateZ(0);transform-origin:center center;will-change:transform,opacity}.md-spinner-path{fill:none;stroke-dashoffset:0;stroke-miterlimit:10;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes spinner-rotate{to{transform:rotate(1turn) translateZ(0)}}@keyframes spinner-initial-rotate{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}to{transform:rotate(270deg) translateZ(0)}}@keyframes spinner-dash{0%{stroke-dasharray:2,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.md-subheader{min-height:48px;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row wrap;flex-flow:row wrap;color:rgba(0,0,0,.54);font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1);background-color:rgba(0,0,0,.38)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;background-color:#fafafa;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .15s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:none;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:none}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:-webkit-grabbing;cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}.md-table{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow-x:auto}.md-table.md-transition-off .md-checkbox .md-checkbox-container,.md-table.md-transition-off .md-checkbox .md-checkbox-container:after,.md-table.md-transition-off .md-table-cell{transition:none!important}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table tbody .md-table-row{border-top:1px solid #e0e0e0}.md-table tbody .md-table-row.md-selected .md-table-cell{background-color:#f5f5f5}.md-table tbody .md-table-row:hover .md-table-cell{background-color:#eee}.md-table .md-table-head{padding:0;position:relative;color:rgba(0,0,0,.54);font-size:12px;line-height:16px;text-align:left}.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text{padding-right:24px}.md-table .md-table-head.md-numeric{text-align:right}.md-table .md-table-head .md-icon{width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px;color:rgba(0,0,0,.54)}.md-table .md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table .md-table-head .md-icon:first-child{margin-left:0}.md-table .md-table-head .md-icon:last-child{margin-right:0}.md-table .md-table-head-container{height:56px;padding:14px 0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-table .md-table-head-text{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;overflow:hidden;line-height:28px;text-overflow:ellipsis;white-space:nowrap}.md-table .md-sortable{cursor:pointer}.md-table .md-sortable:first-of-type .md-sortable-icon{left:auto;right:10px}.md-table .md-sortable.md-sorted,.md-table .md-sortable:hover{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted .md-sortable-icon,.md-table .md-sortable:hover .md-sortable-icon{opacity:1}.md-table .md-sortable.md-sorted .md-sortable-icon{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted-descending .md-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table .md-sortable .md-sortable-icon{position:absolute;top:50%;left:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table .md-sortable .md-ink-ripple{color:rgba(0,0,0,.87)}.md-table .md-table-cell{height:48px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.87);font-size:13px;line-height:18px}.md-table .md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table .md-table-cell.md-numeric{text-align:right}.md-table .md-table-cell.md-numeric .md-table-cell-container{-ms-flex-pack:end;justify-content:flex-end}.md-table .md-table-cell.md-has-action .md-table-cell-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.md-table .md-table-cell .md-table-cell-container{padding:6px 32px 6px 24px}.md-table .md-table-cell .md-button{width:36px;min-width:36px;height:36px;min-height:36px}.md-table .md-table-cell .md-button:last-child{margin:0 -10px 0 0}.md-table .md-table-cell .md-button .md-icon{width:18px;min-width:18px;height:18px;min-height:18px;margin:0;color:rgba(0,0,0,.54);font-size:18px}.md-table .md-table-selection{width:60px;position:relative;vertical-align:middle}.md-table .md-table-selection+.md-table-cell .md-table-cell-container,.md-table .md-table-selection+.md-table-head .md-table-head-container .md-table-head-text{padding-left:8px}.md-table .md-table-selection .md-table-cell-container{padding-right:16px;padding-left:24px}.md-table .md-table-selection .md-checkbox{margin:0}.md-table .md-table-selection .md-checkbox-container{width:18px;height:18px;margin-top:1px}.md-table .md-table-selection .md-checkbox-container:after{top:-1px;left:4px}.md-table .md-select{min-width:84px}.md-table .md-option,.md-table .md-select-value{font-size:13px}.md-table-edit-trigger{display:inline-block;cursor:pointer;color:rgba(0,0,0,.38)}.md-table-edit-trigger.md-edited{color:rgba(0,0,0,.87)}.md-table-dialog{max-height:0;margin:0;padding:0 24px 2px;position:absolute;top:0;right:0;left:24px;z-index:60;overflow:hidden;pointer-events:none;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);background-color:#fff;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1),max-height 0s .5s;transition-duration:.3s;transform:translate3D(0,-8px,0)}.md-table-dialog.md-active{max-height:400px;pointer-events:auto;transform:translate3D(#000);opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-dialog.md-large{padding:12px 24px 2px}.md-table-dialog .md-input-container{margin-top:0;margin-bottom:16px}.md-table-dialog .md-input-container.md-input-placeholder input{font-size:13px}.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder{font-size:13px}.md-table-dialog .md-char-counter{font-size:13.5px;color:rgba(0,0,0,.54)}.md-table-dialog .md-button{min-width:64px}.md-table-card{overflow:visible}.md-table-card .md-toolbar{padding-left:16px;background-color:#fff}.md-table-card .md-title{-ms-flex:1;flex:1;font-size:20px}.md-table-card .md-table-pagination{height:56px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #e0e0e0;color:rgba(0,0,0,.54);font-size:12px}.md-table-card .md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-card .md-table-pagination .md-select{width:auto;min-width:36px;margin:0 32px}.md-table-card .md-table-pagination .md-select:after{margin-top:0}.md-table-card .md-table-pagination .md-select .md-select-value{padding:0;border:none;font-size:13px}.md-table-card .md-table-pagination .md-button:not([disabled]){color:rgba(0,0,0,.87)}.md-table-card .md-table-pagination .md-button[disabled] .md-icon{color:rgba(0,0,0,.26)}.md-pagination-select.md-direction-bottom-right{margin-top:-16px}.md-pagination-select .md-list-item-holder{font-size:13px}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:10;pointer-events:none;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-alternate-header.md-active{pointer-events:auto;opacity:1;transform:translate3D(#000)}.md-table-alternate-header .md-counter{margin-left:8px;-ms-flex:1;flex:1}.md-tabs{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:-ms-flexbox;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{-ms-flex-pack:center;justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{-ms-flex:1;flex:1}.md-tabs .md-tabs-navigation.md-right{-ms-flex-pack:end;justify-content:flex-end}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{width:9999em;position:absolute;top:0;right:0;bottom:0;left:0;transform:translateZ(0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}.md-toolbar{min-height:64px;padding:0 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;-ms-flex-line-pack:inherit;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#fff}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:hsla(0,0%,100%,.12)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:start;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:hsla(0,0%,100%,.1)}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-list{padding:0;margin:0 -8px;-ms-flex:1;flex:1}.md-tooltip{height:20px;padding:0 8px;position:fixed;z-index:200;pointer-events:none;background-color:rgba(97,97,97,.87);border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;color:#fff;font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:10px;line-height:20px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translateY(50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translateY(50%)}.md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n/*# sourceMappingURL=vue-material.css.map*/", ""]);
	
	// exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(87)
	
	/* template */
	var __vue_template__ = __webpack_require__(91)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toolbar = __webpack_require__(88);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      loggedIn: false
	    };
	  },
	
	  components: {
	    Toolbar: _toolbar2.default
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(89)
	
	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/toolbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-311e23ae"
	if (__vue_options__.functional) {console.error("[vue-loader] toolbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(12);
	
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
	      window.open('https://github.com/0xFireball/' + this.appName);
	    },
	    toggleLeftSidenav: function toggleLeftSidenav() {
	      this.$refs.leftSidenav.toggle();
	    },
	    closeSidenav: function closeSidenav() {
	      this.$refs.leftSidenav.close();
	    },
	    logout: function logout() {
	      this.$root.loggedIn = false;
	      this.$router.push('/');
	    }
	  },
	  created: function created() {
	    this.$router.beforeEach(function (to, from, next) {
	      next();
	    });
	  }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toolbar"
	  }, [_c('md-toolbar', [_c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.toggleLeftSidenav
	    }
	  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
	    staticClass: "md-title toolbar-title"
	  }, [_vm._v(_vm._s(_vm.appName))]), _vm._v(" "), (_vm.$root.loggedIn) ? _c('div', [_c('md-menu', [_c('md-button', {
	    staticClass: "md-icon-button",
	    attrs: {
	      "md-menu-trigger": ""
	    }
	  }, [_c('md-icon', [_vm._v("account_circle")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', [_vm._v("\n            Account\n          ")]), _vm._v(" "), _c('md-divider'), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": _vm.logout
	    }
	  }, [_vm._v("\n            Log Out\n          ")])], 1)], 1)], 1) : _c('div', [_c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.visitGitHub
	    }
	  }, [_c('md-icon', [_vm._v("favorite")])], 1)], 1)], 1), _vm._v(" "), _c('md-sidenav', {
	    ref: "leftSidenav",
	    staticClass: "md-left"
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
	  }, [(_vm.$root.loggedIn) ? _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/u"
	    }
	  }, [_vm._v("Dashboard")])], 1) : _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/"
	    }
	  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
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
	  }, [_vm._v("\n                  Donate\n                ")])], 1)], 1)], 1)], 1)], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('toolbar'), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-router"
	    }
	  }, [_c('router-view')], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNmYTU3ZjM5Mzk1YmFiMjFlYjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vL2ludHJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWU/ZDc4ZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vZmlsZVVwbG9hZFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT84N2Q0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT82ZGYzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vL25vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWU/ZDRjZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlIiwid2VicGFjazovLy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlPzk4NWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/OGMxNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/MzE4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/NTdkMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/OGE5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9hMWVlIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FB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O0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFH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LG9CQUFvQix1QkFBdUIsbUJBQW1CLFlBQVksb0JBQW9CLHVCQUF1QixtQkFBbUIsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLFdBQVcsYUFBYSxnQkFBZ0IsWUFBWSxrQkFBa0IsZUFBZSxZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixZQUFZLGNBQWMsaUJBQWlCLGFBQWEsbUJBQW1CLGdCQUFnQixhQUFhLGVBQWUsa0JBQWtCLGNBQWMsb0JBQW9CLGlCQUFpQiwwQkFBMEIsZUFBZSx1QkFBdUIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsc0JBQXNCLGdCQUFnQixhQUFhLFNBQVMsbUJBQW1CLG9CQUFvQix1QkFBdUIsbUJBQW1CLG1CQUFtQixvQkFBb0Is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QUNnREE7Ozs7Ozs7eUJBRUE7O2dCQUdBO0FBRkE7QUFHQTs7O3lDQUVBOzJEQUNBO0FBQ0E7cURBQ0E7OEJBQ0E7QUFDQTsyQ0FDQTs4QkFDQTtBQUNBOytCQUNBOzZCQUNBO3lCQUNBO0FBRUE7QUFkQTsrQkFpQkE7dURBRUE7QUFDQTtBQUNBO0FBQ0E7QUE1QkEsRzs7Ozs7O0FDNUVBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDL0VBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwM2ZhNTdmMzkzOTViYWIyMWViNCIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5cbi8vIFJvdXRlc1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuLy8gU3R5bGVzL2ZvbnRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzJ1xuXG4vLyBtYXRlcmlhbFxuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gJ3Z1ZS1tYXRlcmlhbCdcbmltcG9ydCAndnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcydcblxuLy8gcGx1Z2luc1xuVnVlLnVzZShWdWVSb3V0ZXIpXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxuXG4vLyByb3V0ZXIgY29uZmlnXG5cbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgcm91dGVzXG59KVxuXG5yb3V0ZXIuYWZ0ZXJFYWNoKChjdXJyZW50Um91dGUpID0+IHtcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXG5cbiAgaWYgKG1haW5Db250ZW50KSB7XG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxuICB9XG59KVxuXG5WdWUubWF0ZXJpYWwucmVnaXN0ZXJUaGVtZSh7XG4gIGFwcHRoZW1lOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdjeWFuJyxcbiAgICAgIGh1ZTogNzAwXG4gICAgfSxcbiAgICBhY2NlbnQ6IHtcbiAgICAgIGNvbG9yOiAnbGlnaHQtYmx1ZScsXG4gICAgICBodWU6IDYwMFxuICAgIH1cbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnNldEN1cnJlbnRUaGVtZSgnYXBwdGhlbWUnKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlclxufSlcblxuLy8gLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4vLyBuZXcgVnVlKHtcbi8vICAgZWw6ICcjYXBwJyxcbi8vICAgdGVtcGxhdGU6ICc8QXBwIC8+Jyxcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxuLy8gfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9sYXlvdXRzL2Rhc2hib2FyZCdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2xheW91dHMvbm90Rm91bmQnXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2xheW91dHMvbGFuZGluZydcbmltcG9ydCBBYm91dCBmcm9tICcuL2xheW91dHMvYWJvdXQnXG5cbmNvbnN0IG1haW4gPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ2xhbmRpbmcnLFxuICAgIGNvbXBvbmVudDogTGFuZGluZ1xuICB9LFxuICB7XG4gICAgcGF0aDogJy91JyxcbiAgICBuYW1lOiAnZGFzaGJvYXJkJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9ob21lJyxcbiAgICByZWRpcmVjdDogJy8nXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRcbiAgfVxuXVxuXG5jb25zdCBlcnJvciA9IFtcbiAge1xuICAgIHBhdGg6ICcqJyxcbiAgICBuYW1lOiAnZXJyb3InLFxuICAgIGNvbXBvbmVudDogTm90Rm91bmRcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBbXS5jb25jYXQobWFpbiwgZXJyb3IpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM2YmFlZjEyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0zNmJhZWYxMlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRhc2hib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGludHJvPjwvaW50cm8+XG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IGZpbGVVcGxvYWRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0J1xuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBmaWxlVXBsb2FkV2lkZ2V0LFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH0sXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzMzMzAzZDRkIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGM3MWFlNDIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00YzcxYWU0MlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGludHJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImludHJvXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+e3sgYXBwVGl0bGUgfX08L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwVGl0bGU6ICdQZW5ndWluVXBsb2FkJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYXBwLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnRyby52dWU/NTVmNDhiMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnRyb1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcFRpdGxlKSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGM3MWFlNDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRmZTk0NmM0IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTRmZTk0NmM0XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZmlsZVVwbG9hZFdpZGdldC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ1cmxTaHJpbmtJbnB1dFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVpZ2h0IGNvbHVtbnMgb2Zmc2V0LWJ5LXR3b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtaGVyZVwiIEBjbGljaz1cImJyb3dzZUZvckZpbGVzXCI+XG4gICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJ0YXJnZXRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cbiAgICAgICAgICAgIDxtZC1jYXJkPlxuICAgICAgICAgICAgICA8bWQtY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+VXBsb2FkIEZpbGVzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXN1YmhlYWRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrPC9kaXY+XG4gICAgICAgICAgICAgIDwvbWQtY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgICAgPG1kLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWEtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21kLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgPG1kLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtZmFiXCI+XG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbj5jbG91ZF91cGxvYWQ8L21kLWljb24+XG4gICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgIDwvbWQtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC9tZC1jYXJkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnZpc2libGVcIiByZWY9XCJicm93c2VcIiBAY2hhbmdlPVwib25GaWxlc1VwbG9hZGVkXCIgbXVsdGlwbGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1kLWRpYWxvZy1hbGVydCA6bWQtY29udGVudC1odG1sPVwiY29tcGxldGVkQWxlcnQuY29udGVudFwiIDptZC1vay10ZXh0PVwiY29tcGxldGVkQWxlcnQub2tcIiByZWY9XCJjb21wbGV0ZWREaWFsb2dcIj5cbiAgICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3VybFNocmlua0lucHV0JyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGxldGVkQWxlcnQ6IHtcbiAgICAgICAgICBjb250ZW50OiAnLicsXG4gICAgICAgICAgb2s6ICdDb29sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBicm93c2VGb3JGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXG4gICAgICB9LFxuICAgICAgb25GaWxlc1VwbG9hZGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2UuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgZiA9IGJyb3dzZS5maWxlc1tpXTtcbiAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBhZGRSb3coZik7XG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwbG9hZEZpbGU6IGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xuICAgICAgICB2YXIgYmFyID0gcHJvZ3Jlc3MucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy1iYXJcIik7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiL2FwaS91cGxvYWRcIik7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICBwcm9ncmVzcy5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J1wiICsgcmVzcG9uc2UudXJsICsgXCInPlwiICsgcmVzcG9uc2UudXJsICsgXCI8L2E+XCI7XG4gICAgICAgIH07XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5mbG9vcigoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMCk7XG4gICAgICAgICAgICBiYXIuc3R5bGUud2lkdGggPSBwcm9ncmVzcyArIFwiJVwiO1xuICAgICAgICAgICAgYmFyLnRleHRDb250ZW50ID0gcHJvZ3Jlc3MgKyBcIiVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwia2V5XCIsIHdpbmRvdy5hcGlfa2V5KTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgICB4aHIuc2VuZChmb3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4udXBsb2FkLWFyZWEtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDglO1xufVxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmaWxlVXBsb2FkV2lkZ2V0LnZ1ZT8xODViZTY0MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXJsU2hyaW5rSW5wdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlaWdodCBjb2x1bW5zIG9mZnNldC1ieS10d29cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaGVyZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5icm93c2VGb3JGaWxlc1xuICAgIH1cbiAgfSwgW19jKCdtZC1jYXJkJywgW19jKCdtZC1jYXJkLWhlYWRlcicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXN1YmhlYWRcIlxuICB9LCBbX3ZtLl92KFwiRHJhZyBhbmQgZHJvcCBvciBjbGlja1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1jYXJkLWNvbnRlbnQnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtYXJlYS1wYWRkaW5nXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWNhcmQtYWN0aW9ucycsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWZhYlwiXG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJjbG91ZF91cGxvYWRcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJicm93c2VcIixcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZXNVcGxvYWRlZFxuICAgIH1cbiAgfSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctYWxlcnQnLCB7XG4gICAgcmVmOiBcImNvbXBsZXRlZERpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uY29tcGxldGVkQWxlcnQuY29udGVudCxcbiAgICAgIFwibWQtb2stdGV4dFwiOiBfdm0uY29tcGxldGVkQWxlcnQub2tcbiAgICB9XG4gIH0pXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00ZmU5NDZjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzUzNWVjM2MhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMzUzNWVjM2NcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkZXZDcmVkaXRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRldkNyZWRpdHNcIj5cbiAgICA8aDYgY2xhc3M9XCJjcmVkaXQtdGV4dFwiPk1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiIHRhcmdldD1cIl9ibGFua1wiPjB4RmlyZWJhbGw8L2E+PC9oNj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZGV2Q3JlZGl0cycsXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kZXZDcmVkaXRzIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIFxuICBoNi5jcmVkaXQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2Q3JlZGl0cy52dWU/NmI1OGJhMGIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXZDcmVkaXRzXCJcbiAgfSwgW19jKCdoNicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjcmVkaXQtdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJNYWRlIGJ5IFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjB4RmlyZWJhbGxcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNTM1ZWMzYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2ludHJvJyksIF92bS5fdihcIiBcIiksIF9jKCdmaWxlVXBsb2FkV2lkZ2V0JyksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNmJhZWYxMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTdkMWRhZTEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi01N2QxZGFlMVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5vdEZvdW5kLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJub3QtZm91bmRcIj5cbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImludHJvLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90LWZvdW5kLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxPjQwNC4gVGhhdCdzIGFuIGVycm9yLjwvaDE+XG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSW50cm9cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5ub3QtZm91bmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vdEZvdW5kLnZ1ZT8yNzgxMWViZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01N2QxZGFlMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGFuZGluZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTg2OTZmMmQ2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTg2OTZmMmQ2XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGludHJvLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cbiAgICAgICAgICA8bG9naW4+PC9sb2dpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcbiAgaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBMb2dpbixcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9LFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICBpZiAodm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy91JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC5pbnRyby1hcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGFuZGluZy52dWU/MDc1YTc3NzkiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zZjVhZWI1YyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTNmNWFlYjVjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9naW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImxvZ2luXCI+XG4gICAgPG1kLXRhYnMgY2xhc3M9XCJtZC1hY2NlbnRcIiByZWY9XCJhdXRoT3B0aW9uVGFic1wiPlxuICAgICAgPG1kLXRhYiBpZD1cInQtbG9naW5cIiBtZC1sYWJlbD1cIkxvZyBJblwiPlxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5TG9naW5cIj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwibG9naW4udXNlcm5hbWVcIj48L21kLWlucHV0PlxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwibG9naW4ucGFzc3dvcmRcIj48L21kLWlucHV0PlxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IGxvZ2luLmVyciB9fTwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwidHJ5TG9naW5cIiA6ZGlzYWJsZWQ9XCIhbG9naW4uZVwiPkxvZyBJbjwvbWQtYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21kLXRhYj5cblxuICAgICAgPG1kLXRhYiBpZD1cInQtc2lnbnVwXCIgbWQtbGFiZWw9XCJTaWduIFVwXCI+XG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlSZWdpc3RlclwiPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJyZWdpc3Rlci51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIuY29uZmlybVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyZWdpc3Rlci5pYWNjZXB0XCI+SSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVJlZ2lzdGVyXCIgOmRpc2FibGVkPVwiIXJlZ2lzdGVyLmVcIj5TaWduIFVwPC9tZC1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWQtdGFiPlxuICAgIDwvbWQtdGFicz5cbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC10aXRsZT1cImRpYWxvZy50aXRsZVwiIDptZC1jb250ZW50LWh0bWw9XCJkaWFsb2cuY29udGVudFwiIHJlZj1cIm1vZGFsRGlhbG9nXCI+XG4gICAgPC9tZC1kaWFsb2ctYWxlcnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxuICAgIH1cbiAgfVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2xvZ2luJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IHtcbiAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIGVycjogJycsXG4gICAgICAgICAgZTogdHJ1ZSAvLyBlbmFibGVkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVyOiB7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICBjb25maXJtOiAnJyxcbiAgICAgICAgICBpYWNjZXB0OiAnJyxcbiAgICAgICAgICBlcnI6ICcnLFxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxuICAgICAgICB9LFxuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJ1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdHJ5TG9naW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ubG9naW4uZSkgcmV0dXJuXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XG4gICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2NyZWRlbnRpYWxzIGNhbm5vdCBiZSBlbXB0eSdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5sb2dpbi5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIGxvZ2luIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL2xvZ2luJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ubG9naW4ucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgdm0uJHJvb3QubG9nZ2VkSW4gPSB0cnVlXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3UnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZFxuICAgICAgICAgICAgICB2bS5sb2dpbi5lcnIgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5sb2dpbi5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5sb2dpbi5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdHJ5UmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ucmVnaXN0ZXIuZSkgcmV0dXJuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIudXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd1c2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkICE9PSB2bS5yZWdpc3Rlci5jb25maXJtKSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaCdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5yZWdpc3Rlci5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIHJlZ2lzdGVyIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5yZWdpc3Rlci51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ucmVnaXN0ZXIucGFzc3dvcmQsXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gc3VjY2VlZGVkXG4gICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmF1dGhPcHRpb25UYWJzLmNoYW5nZVRhYigndC1sb2dpbicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXG4gICAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5kaWFsb2cudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbiAgLmludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9naW4udnVlPzMxNTNmZWEzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW5cIlxuICB9LCBbX2MoJ21kLXRhYnMnLCB7XG4gICAgcmVmOiBcImF1dGhPcHRpb25UYWJzXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWQtYWNjZW50XCJcbiAgfSwgW19jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LWxvZ2luXCIsXG4gICAgICBcIm1kLWxhYmVsXCI6IFwiTG9nIEluXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5TG9naW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2dpbi51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImxvZ2luLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG9naW4ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmxvZ2luLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmxvZ2luLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5sb2dpbi5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5TG9naW5cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2cgSW5cIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0LXNpZ251cFwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIlNpZ24gVXBcIlxuICAgIH1cbiAgfSwgW19jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlSZWdpc3RlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXNlcm5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIudXNlcm5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIudXNlcm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkNvbmZpcm0gUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmNvbmZpcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5jb25maXJtXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5jb25maXJtKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5jb25maXJtID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmlhY2NlcHRcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaWFjY2VwdCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlZ2lzdGVyLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5yZWdpc3Rlci5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5UmVnaXN0ZXJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaWduIFVwXCIpXSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctYWxlcnQnLCB7XG4gICAgcmVmOiBcIm1vZGFsRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmRpYWxvZy50aXRsZSxcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5kaWFsb2cuY29udGVudFxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZjVhZWI1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGludHJvLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdsb2dpbicpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg2OTZmMmQ2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjg2M2U2OGIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0yODYzZTY4YlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRybyxcbiAgICBBYm91dFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dC52dWU/MTFmYjg1YTgiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMWVmZDgzOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hYm91dFdpZGdldC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTExZWZkODM4XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYWJvdXRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImFib3V0V2lkZ2V0XCI+XG4gICAgPGg1PkFib3V0IHt7IGFwcE5hbWUgfX08L2g1PlxuICAgIDxwPlxuICAgICAgRWFzeSBmaWxlIGhvc3RpbmcvdXBsb2Fkc1xuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcE5hbWU6ICdQZW5ndWluVXBsb2FkJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5hYm91dFdpZGdldCB7XG4gICAgbWFyZ2luOiAyJTtcbiAgfVxuICBcbiAgaDYuY3JlZGl0LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFib3V0V2lkZ2V0LnZ1ZT83MmExMGI1YyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0V2lkZ2V0XCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJBYm91dCBcIiArIF92bS5fcyhfdm0uYXBwTmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICBFYXN5IGZpbGUgaG9zdGluZy91cGxvYWRzXFxuICBcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExZWZkODM4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhcHBcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnRyby1hcmVhXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dC1jb250ZW50XCJcbiAgfSwgW19jKCdhYm91dCcpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI4NjNlNjhiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by0xMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4nKSwgbG9jYWwoJ1JvYm90by1UaGluJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tMTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBUaGluIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLVRoaW5JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0SXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by1pdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkJyksIGxvY2FsKCdSb2JvdG8tQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTcwMGl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1Cb2xkSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tOTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjayBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1CbGFja0l0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTkwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgTGlnaHQnKSwgbG9jYWwoJ1JhbGV3YXktTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5JyksIGxvY2FsKCdSYWxld2F5LVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBNZWRpdW0nKSwgbG9jYWwoJ1JhbGV3YXktTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNjAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IFNlbWlCb2xkJyksIGxvY2FsKCdSYWxld2F5LVNlbWlCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTgwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC44Y2U1OTg4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAuNjU0Y2I0ZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy5hY2VlMGVhLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMuNDJkZTg5OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC4xNmRkYjE1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAuZWNjZTkyZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy4zZGRiNzQ4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMuNGQwOGRhZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuN2UzNjdiZS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuMTZlMWQ5My53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuOTg0YWUzNy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLjFlNjVlN2Uud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuYmI0NzRmMS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLjU3YWY2NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuOWU3YmVlZS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLmI2NzA2OTQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuMGQ3ZTcxZi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLjUyNWQ1YjQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuNzM5NGNhOS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLmFkMGU3NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuNGZhZWM4My53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLjNiOTU5MGUud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZjRlOGRjNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLmRlOTg0YzAud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLmU3NDZlMDMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLjc4ZGQ1YWIud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIuOTEwNjQzNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci4yOTBlZTM4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLmU1YTMyMTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLjgxZTk1NTgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5jZDkwMzkyLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5hNGI2ZjE3LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAuMDZmMWM4Ni53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAuYzg2NGQ4NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLjA0MWE0Yjgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLjJhM2E5Y2Yud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFwiKSArIFwiKTtcXG4gICAgLyogRm9yIElFNi04ICovXFxuICAgIHNyYzogbG9jYWwoJ01hdGVyaWFsIEljb25zJyksIGxvY2FsKCdNYXRlcmlhbEljb25zLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcIikgKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmU3OWJmZDguZW90XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3Rcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuNTcwZWI4My53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuMDEyY2Y2YS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmEzN2IwYzAudHRmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyB9XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyB9XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxucCxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfVxcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLW1hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLW1hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZC1hdmF0YXJ7d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bWFyZ2luOmF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjQwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1hdmF0YXIubWQtbGFyZ2V7d2lkdGg6NjRweDttaW4td2lkdGg6NjRweDtoZWlnaHQ6NjRweDttaW4taGVpZ2h0OjY0cHg7Ym9yZGVyLXJhZGl1czo2NHB4fS5tZC1hdmF0YXIubWQtbGFyZ2UgLm1kLWljb257d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6NDBweH0ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb24gLm1kLWljb257Y29sb3I6I2ZmZn0ubWQtYXZhdGFyIC5tZC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1hdmF0YXIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja30ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTAlfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5O3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpfS5tZC1iYWNrZHJvcC5tZC1hY3RpdmV7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLWJhY2tkcm9wLm1kLXRyYW5zcGFyZW50e2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDA1KX0ubWQtYm90dG9tLWJhcnt3aWR0aDoxMDAlO21pbi13aWR0aDoxMDAlO2hlaWdodDo1NnB4Oy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtYm90dG9tLWJhciwubWQtYm90dG9tLWJhci1pdGVte3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tZC1ib3R0b20tYmFyLWl0ZW17bWF4LXdpZHRoOjE2OHB4O21pbi13aWR0aDo4MHB4O2hlaWdodDoxMDAlO3BhZGRpbmc6OHB4IDEycHggMTBweDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleDoxO2ZsZXg6MTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjFlbTt0ZXh0LWRlY29yYXRpb246bm9uZX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZXtwYWRkaW5nLXRvcDo2cHh9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCl9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7Y29sb3I6Y3VycmVudENvbG9yfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW17bWluLXdpZHRoOjU2cHg7bWF4LXdpZHRoOjk2cHg7cG9zaXRpb246c3RhdGljOy1tcy1mbGV4OjEgMSAzMnB4O2ZsZXg6MSAxIDMycHg7dHJhbnNpdGlvbjouNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGg7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGgsLW1zLWZsZXh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw4cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsNnB4LDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle21pbi13aWR0aDo5NnB4O21heC13aWR0aDoxNjhweDstbXMtZmxleDoxIDEgNzJweDtmbGV4OjEgMSA3MnB4fS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLC5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e29wYWNpdHk6MX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbnt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwycHgsMCl9Lm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoLjg1NzEpIHRyYW5zbGF0ZVkoMnB4KTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksY29sb3IgLjE1cyBsaW5lYXIsb3BhY2l0eSAuMTVzIGxpbmVhcn0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMTVzIGxpbmVhcn0ubWQtYnV0dG9ue21pbi13aWR0aDo4OHB4O21pbi1oZWlnaHQ6MzZweDttYXJnaW46NnB4IDhweDtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjJweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzppbmhlcml0O2xpbmUtaGVpZ2h0OjM2cHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOnRvcDt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLWJ1dHRvbiwubWQtYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pLm1kLXJhaXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNjAlLC40KX0ubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSl7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1kZW5zZXttaW4taGVpZ2h0OjMycHg7bGluZS1oZWlnaHQ6MzJweDtmb250LXNpemU6MTNweH0ubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiwubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29ue21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1idXR0b24ubWQtaWNvbi1idXR0b257d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttYXJnaW46MCA2cHg7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7bGluZS1oZWlnaHQ6MjRweH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlcntiYWNrZ3JvdW5kOm5vbmV9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbi5tZC1kZW5zZXt3aWR0aDozMnB4O21pbi13aWR0aDozMnB4O2hlaWdodDozMnB4O21pbi1oZWlnaHQ6MzJweDtwYWRkaW5nOjRweDtsaW5lLWhlaWdodDozMnB4fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1yaXBwbGUubWQtYWN0aXZle2FuaW1hdGlvbi1kdXJhdGlvbjouOXN9Lm1kLWJ1dHRvbi5tZC1mYWJ7d2lkdGg6NTZweDtoZWlnaHQ6NTZweDttaW4td2lkdGg6MDtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJhZGl1czo1NnB4O2xpbmUtaGVpZ2h0OjU2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsYm94LXNoYWRvdyx0cmFuc2Zvcm19Lm1kLWJ1dHRvbi5tZC1mYWI6Zm9jdXMsLm1kLWJ1dHRvbi5tZC1mYWI6aG92ZXJ7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi10b3AtbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtsZWZ0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtyaWdodDoxNnB4fS5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTZweDtsZWZ0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjE2cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O2JvdHRvbToxNnB4fS5tZC1idXR0b24ubWQtZmFiLm1kLW1pbml7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTZweH0ubWQtYnV0dG9uW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7Y3Vyc29yOmRlZmF1bHR9Lm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtZmFiLC5tZC1idXR0b25bZGlzYWJsZWRdLm1kLXJhaXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWJ7Ym94LXNoYWRvdzpub25lfS5tZC1idXR0b246YWZ0ZXJ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O292ZXJmbG93OmhpZGRlbn0ubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiwubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29ue2Rpc3BsYXk6YmxvY2t9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LThweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9te21hcmdpbi10b3A6OHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LThweH0ubWQtYnV0dG9uLXRvZ2dsZXt3aWR0aDphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b257bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci13aWR0aDoxcHggMCAxcHggMXB4O2JvcmRlci1yYWRpdXM6MDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpsYXN0LWNoaWxke2JvcmRlci1yaWdodC13aWR0aDoxcHg7Ym9yZGVyLXJhZGl1czowIDJweCAycHggMH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czoycHh9Lm1kLWNhcmR7b3ZlcmZsb3c6YXV0bztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWNhcmQubWQtd2l0aC1ob3ZlcntjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3gtc2hhZG93fS5tZC1jYXJkLm1kLXdpdGgtaG92ZXI6aG92ZXJ7ei1pbmRleDoyO2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05e292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05OmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjU2LjI1JTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0ze292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTM6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NzUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMXtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xOmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjEwMCU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTEgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtaGVhZGVye3BhZGRpbmctdG9wOjI0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtY29udGVudDpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgaW1ne3dpZHRoOjEwMCV9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVye3BhZGRpbmc6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQ+Lm1kLWNhcmQtaGVhZGVyLXRleHQ+Lm1kLXRpdGxlOmZpcnN0LWNoaWxkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyLm1kLWNhcmQtaGVhZGVyLWZsZXh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1jb250ZW50e3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnM6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nOjAgOHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFye21hcmdpbi1yaWdodDoxNnB4O2Zsb2F0OmxlZnR9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC10aXRsZXtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDotNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1oZWFkZXItdGV4dHstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWF7d2lkdGg6ODBweDstbXMtZmxleDowIDAgODBweDtmbGV4OjAgMCA4MHB4O2hlaWdodDo4MHB4O21hcmdpbi1sZWZ0OjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bXt3aWR0aDoxMjBweDstbXMtZmxleDowIDAgMTIwcHg7ZmxleDowIDAgMTIwcHg7aGVpZ2h0OjEyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWd7d2lkdGg6MTYwcHg7LW1zLWZsZXg6MCAwIDE2MHB4O2ZsZXg6MCAwIDE2MHB4O2hlaWdodDoxNjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCwubWQtY2FyZCAubWQtc3ViaGVhZGluZywubWQtY2FyZCAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6NDAwfS5tZC1jYXJkIC5tZC1zdWJoZWFke29wYWNpdHk6LjU0O2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wMWVtO2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNhcmQgLm1kLXN1YmhlYWQrLm1kLXRpdGxle21hcmdpbi10b3A6NHB4fS5tZC1jYXJkIC5tZC10aXRsZXtmb250LXNpemU6MjRweDtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9uc3twYWRkaW5nOjE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtbWVkaWF7bWF4LXdpZHRoOjI0MHB4O21heC1oZWlnaHQ6MjQwcHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25ze21hcmdpbi1sZWZ0OjE2cHg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luOjhweCAwIDB9Lm1kLWNhcmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjJweH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MjRweH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmc6OHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtYXJlYSwubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCl7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOmFmdGVye2hlaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWQtaW5zZXQpOmFmdGVye3JpZ2h0OjA7bGVmdDowfS5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlcntyaWdodDoxNnB4O2xlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3Zlcntwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyLm1kLXRleHQtc2NyaW0gLm1kLWNhcmQtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWFyZWF7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLXN1YmhlYWR7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZHtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSAubWQtY2FyZC1jb250ZW50e21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjA7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7d2lsbC1jaGFuZ2U6bWFyZ2lufS5tZC1jaGVja2JveHt3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3Jle3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtib3JkZXItcmFkaXVzOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye3dpZHRoOjZweDtoZWlnaHQ6MTNweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjVweDtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXRvcDowO2JvcmRlci1sZWZ0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHNjYWxlM0QoLjE1LC4xNSwxKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3dpZHRoOjQ4cHghaW1wb3J0YW50O2hlaWdodDo0OHB4IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1sYWJlbHtoZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6OHB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNoZWNrYm94Lm1kLWNoZWNrZWQgLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcntvcGFjaXR5OjE7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1pbmstcmlwcGxle3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowOy13ZWJraXQtbWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCNmZmYgMTAwJSwjMDAwIDApO21hc2staW1hZ2U6cmFkaWFsLWdyYWRpZW50KGNpcmNsZSwjZmZmIDEwMCUsIzAwMCAwKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMil9Lm1kLXJpcHBsZXtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06c2NhbGUoMCk7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouMjY7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uOnJpcHBsZSAxcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX1Aa2V5ZnJhbWVzIHJpcHBsZXt0b3t0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fS5tZC1kaWFsb2ctY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDh9Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIC5tZC1kaWFsb2d7b3BhY2l0eToxIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2ctYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDl9Lm1kLWRpYWxvZ3ttaW4td2lkdGg6MjgwcHg7bWF4LXdpZHRoOjgwJTttYXgtaGVpZ2h0OjgwJTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjExMDtvdXRsaW5lOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7b3BhY2l0eTowO2JveC1zaGFkb3c6MCA3cHggOXB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNnB4IDRweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNmb3JtOnNjYWxlKC45LC44NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2cubWQtcmVmZXJlbmNle3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcn0ubWQtZGlhbG9nLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLWRpYWxvZyBwe21hcmdpbjowfS5tZC1kaWFsb2ctdGl0bGV7bWFyZ2luLWJvdHRvbToyMHB4O3BhZGRpbmc6MjRweCAyNHB4IDB9Lm1kLWRpYWxvZy1jb250ZW50e3BhZGRpbmc6MCAyNHB4IDI0cHg7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsI2ZmZiAwLCNmZmYgMXB4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgwZGVnLCNmZmYgMCwjZmZmIDNweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMCwwLDAsLjEyKSAwLHJnYmEoMCwwLDAsLjEyKSAxcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgwLDAsMCwuMikgMXB4LHJnYmEoMCwwLDAsLjIpIDJweCx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWwsbG9jYWwsc2Nyb2xsLHNjcm9sbH0ubWQtZGlhbG9nLWNvbnRlbnQ6Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MjRweH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpmaXJzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpe21hcmdpbi10b3A6MH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpsYXN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLWJvdHRvbTowfS5tZC1kaWFsb2ctYm9keXttYXJnaW46MCAtMjRweDtwYWRkaW5nOjAgMjRweDtvdmVyZmxvdzphdXRvfS5tZC1kaWFsb2ctYWN0aW9uc3ttaW4taGVpZ2h0OjUycHg7cGFkZGluZzo4cHggOHB4IDhweCAyNHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1kaWFsb2ctYWN0aW9uczpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTFweDtyaWdodDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWRpYWxvZy1hY3Rpb25zIC5tZC1idXR0b257bWluLXdpZHRoOjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDhweH0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjhweH0ubWQtZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1kaXZpZGVyLm1kLWluc2V0e21hcmdpbi1sZWZ0OjcycHh9Lm1kLWljb257d2lkdGg6MjRweDttaW4td2lkdGg6MjRweDtoZWlnaHQ6MjRweDttaW4taGVpZ2h0OjI0cHg7bWFyZ2luOmF1dG87ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZpbGw6Y3VycmVudENvbG9yO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtaW5wdXQtY29udGFpbmVye3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O21hcmdpbjo0cHggMCAyNHB4O3BhZGRpbmctdG9wOjE2cHg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlcntoZWlnaHQ6MXB4O3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlciwubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbHt0b3A6MjNweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmb250LXNpemU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFweDtsaW5lLWhlaWdodDozMnB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDt0ZXh0LXNoYWRvdzpub25lOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOmluaXRpYWx9Lm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDoyMzBweDtwYWRkaW5nOjVweCAwO3Jlc2l6ZTpub25lO2xpbmUtaGVpZ2h0OjEuM2VtfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWVycm9ye2hlaWdodDoyMHB4O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtOHB4LDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudHtoZWlnaHQ6MjBweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgbGFiZWx7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTBweDtvcGFjaXR5OjA7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbHtwb2ludGVyLWV2ZW50czphdXRvO3RvcDowO29wYWNpdHk6MTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbHtwb2ludGVyLWV2ZW50czpub25lfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWlucHV0LWZvY3VzZWQgbGFiZWx7dG9wOjIzcHg7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVse29wYWNpdHk6MH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVye2JhY2tncm91bmQ6MCAxMDAlIHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMCwwLDAsLjM4KSAwLHJnYmEoMCwwLDAsLjM4KSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxcHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgdGV4dGFyZWF7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkLm1kLWlucHV0LWZvY3VzZWQgLm1kLXRvZ2dsZS1wYXNzd29yZHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQgLm1kLXRvZ2dsZS1wYXNzd29yZHttYXJnaW46MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTotMnB4O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIC5tZC1pbmstcmlwcGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWludmFsaWQgLm1kLWVycm9ye29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXJlcXVpcmVkIGxhYmVsOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDEwMCUgKyAycHgpKTtjb250ZW50OlxcXCIqXFxcIjtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxZW07dmVydGljYWwtYWxpZ246dG9wfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbGF5b3V0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtcm93ey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW57LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWxheW91dC5tZC1jb250YWluZXJ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTIwMHB4fS5tZC1sYXlvdXQubWQtY29udGFpbmVyLm1kLWNlbnRlcmVke21hcmdpbjowIGF1dG99Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoxMnB4fS5tZC1ndXR0ZXIgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1ib3R0b206LTEycHh9Lm1kLWd1dHRlciAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4fUBtZWRpYSAobWF4LXdpZHRoOjk0NHB4KXsubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LThweDttYXJnaW4tbGVmdDotOHB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy1sZWZ0OjhweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW57bWFyZ2luLXRvcDotOHB4O21hcmdpbi1ib3R0b206LThweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fX0ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotNHB4O21hcmdpbi1sZWZ0Oi00cHh9Lm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6NHB4O3BhZGRpbmctbGVmdDo0cHh9Lm1kLWd1dHRlci04IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206LTRweH0ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjRweDtwYWRkaW5nLWJvdHRvbTo0cHh9Lm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubWQtZ3V0dGVyLTE2Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctbGVmdDo4cHh9Lm1kLWd1dHRlci0xNiAubWQtY29sdW1ue21hcmdpbi10b3A6LThweDttYXJnaW4tYm90dG9tOi04cHh9Lm1kLWd1dHRlci0xNiAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWQtZ3V0dGVyLTI0Om5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9Lm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjEycHh9Lm1kLWd1dHRlci0yNCAubWQtY29sdW1ue21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWJvdHRvbTotMTJweH0ubWQtZ3V0dGVyLTI0IC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHh9Lm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0yMHB4O21hcmdpbi1sZWZ0Oi0yMHB4fS5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctbGVmdDoyMHB4fS5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1ib3R0b206LTIwcHh9Lm1kLWd1dHRlci00MCAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4fS5tZC1mbGV4ey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtMTAwe21hcmdpbi1sZWZ0OjEwMCV9QG1lZGlhIChtaW4td2lkdGg6MTkwNHB4KXsubWQtcm93LXhsYXJnZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLXhsYXJnZXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC14bGFyZ2V7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LXhsYXJnZS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LXhsYXJnZS02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LXhsYXJnZS01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LXhsYXJnZS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXhsYXJnZS0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LXhsYXJnZS0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LXhsYXJnZS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXhsYXJnZS0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LXhsYXJnZS0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LXhsYXJnZS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXhsYXJnZS00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LXhsYXJnZS01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LXhsYXJnZS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXhsYXJnZS02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LXhsYXJnZS02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LXhsYXJnZS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXhsYXJnZS03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LXhsYXJnZS04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LXhsYXJnZS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXhsYXJnZS05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LXhsYXJnZS05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LXhsYXJnZS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1oaWRlLXhsYXJnZXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjE5MDNweCl7Lm1kLXJvdy1sYXJnZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLWxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LWxhcmdley1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1sYXJnZS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LWxhcmdlLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LWxhcmdlLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1sYXJnZS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbGFyZ2UtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LWxhcmdlLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1sYXJnZS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbGFyZ2UtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LWxhcmdlLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1sYXJnZS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbGFyZ2UtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LWxhcmdlLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1sYXJnZS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbGFyZ2UtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LWxhcmdlLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1sYXJnZS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbGFyZ2UtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LWxhcmdlLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1sYXJnZS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbGFyZ2UtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LWxhcmdlLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1sYXJnZS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUtbGFyZ2V7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDoxMjY0cHgpey5tZC1yb3ctbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LW1lZGl1bXstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtbWVkaXVtLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbWVkaXVtLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbWVkaXVtLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtbWVkaXVtLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbWVkaXVtLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbWVkaXVtLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtbWVkaXVtLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbWVkaXVtLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbWVkaXVtLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtbWVkaXVtLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbWVkaXVtLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbWVkaXVtLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtbWVkaXVtLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbWVkaXVtLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbWVkaXVtLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtbWVkaXVtLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbWVkaXVtLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbWVkaXVtLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtbWVkaXVtLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbWVkaXVtLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbWVkaXVtLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtbWVkaXVtLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUtbWVkaXVte2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6OTQ0cHgpey5tZC1yb3ctc21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1zbWFsbHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1zbWFsbHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtc21hbGwtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1zbWFsbC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1zbWFsbC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtc21hbGwtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXNtYWxsLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1zbWFsbC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtc21hbGwtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXNtYWxsLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1zbWFsbC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtc21hbGwtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXNtYWxsLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1zbWFsbC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtc21hbGwtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXNtYWxsLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1zbWFsbC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtc21hbGwtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXNtYWxsLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1zbWFsbC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtc21hbGwtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXNtYWxsLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1zbWFsbC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtc21hbGwtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1oaWRlLXNtYWxse2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpey5tZC1yb3cteHNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4teHNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXhzbWFsbHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgteHNtYWxsLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgteHNtYWxsLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgteHNtYWxsLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgteHNtYWxsLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgteHNtYWxsLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgteHNtYWxsLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgteHNtYWxsLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgteHNtYWxsLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgteHNtYWxsLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgteHNtYWxsLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgteHNtYWxsLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgteHNtYWxsLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgteHNtYWxsLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgteHNtYWxsLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgteHNtYWxsLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgteHNtYWxsLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgteHNtYWxsLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgteHNtYWxsLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgteHNtYWxsLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgteHNtYWxsLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgteHNtYWxsLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgteHNtYWxsLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUteHNtYWxse2Rpc3BsYXk6bm9uZX19Lm1kLWxpc3R7bWFyZ2luOjA7cGFkZGluZzo4cHggMDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmV9Lm1kLWxpc3QubWQtZGVuc2V7cGFkZGluZzo0cHggMH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo0MHB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MjRweH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtYXZhdGFye3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NjBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMSksLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzJweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMSksLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6ODhweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtYXZhdGFye21hcmdpbjowfS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyey1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lm1kLWxpc3QgLm1kLXN1YmhlYWRlci5tZC1pbnNldHtwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdD4ubWQtc3ViaGVhZGVyOmZpcnN0LW9mLXR5cGV7bWFyZ2luLXRvcDotOHB4fS5tZC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbS5tZC1pbnNldCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXI+Lm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czowfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXI+Lm1kLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjMycHh9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9ue21hcmdpbjowIC0ycHggMCAwfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uOm50aC1jaGlsZCgzKXttYXJnaW46MCAtMnB4IDAgMTZweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpsZWZ0O3RleHQtdHJhbnNmb3JtOm5vbmV9Lm1kLWxpc3QtaXRlbSAubWQtZGl2aWRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDowO2xlZnQ6MH0ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIsLm1kLWxpc3QtaXRlbSAubWQtaWNvbnttYXJnaW46MH0ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3Qtb2YtdHlwZSsqLC5tZC1saXN0LWl0ZW0gLm1kLWljb246Zmlyc3Qtb2YtdHlwZSsqey1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG99Lm1kLWxpc3QtaXRlbSAubWQtYXZhdGFye21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4fS5tZC1saXN0LWl0ZW0gLm1kLWljb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDhweDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdzpoaWRkZW59Lm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIsLm1kLWxpc3QtaXRlbS1leHBhbmQ6YmVmb3Jle2hlaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtsZWZ0OjA7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmV7dG9wOjB9Lm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXJ7Ym90dG9tOjB9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZle3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTphZnRlciwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpmaXJzdC1vZi10eXBlOmJlZm9yZSwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6bGFzdC1vZi10eXBlOmFmdGVye2JhY2tncm91bmQ6bm9uZX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU+Lm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtZXhwYW5kLWluZGljYXRvcnt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwwLDApfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZT4ubWQtbGlzdC1leHBhbmR7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWQtbGlzdC1pdGVtLWV4cGFuZD4ubWQtbGlzdC1pdGVtLWNvbnRhaW5lcj4ubWQtbGlzdC1pdGVtLWhvbGRlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWV4cGFuc2lvbi1pbmRpY2F0b3IsLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWljb24sLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt3aWxsLWNoYW5nZTptYXJnaW4tYm90dG9tO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZCAubWQtbGlzdHtwYWRkaW5nOjB9Lm1kLWxpc3QtdGV4dC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW47LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjEuMjVlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vcm1hbH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDEpe2ZvbnQtc2l6ZToxNnB4fS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMiksLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgzKXttYXJnaW46MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHh9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKTpub3QoOmxhc3QtY2hpbGQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbWVudXtkaXNwbGF5OmlubGluZS1ibG9ja30ubWQtbWVudS1jb250ZW50e3dpZHRoOjE2OHB4O21pbi13aWR0aDo4NHB4O21heC13aWR0aDozOTJweDttaW4taGVpZ2h0OjY0cHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMzJweCk7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTIwO3RyYW5zZm9ybTpzY2FsZSguOSwuODUpIHRyYW5zbGF0ZVooMCk7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7b3BhY2l0eTowO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjI1cyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKSxtYXJnaW4gLjJzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpLHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKSAuMjVzO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5LHdpZHRofS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0Oi04cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnR7bWFyZ2luLXRvcDotMjBweDttYXJnaW4tbGVmdDo4cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0e21hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDotOHB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOjExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0OjhweDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmV7bWFyZ2luLXRvcDoxMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlcnttYXJnaW46MH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMXt3aWR0aDo4NHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ye3dpZHRoOjExMnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ze3dpZHRoOjE2OHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00e3dpZHRoOjIyNHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS01e3dpZHRoOjI4MHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02e3dpZHRoOjMzNnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03e3dpZHRoOjM5MnB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzfS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0e29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4xNXN9Lm1kLW1lbnUtY29udGVudCAubWQtbGlzdHtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtbWVudS1pdGVte2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuMmVtfS5tZC1tZW51LWl0ZW1bZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fS5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9Lm1kLXJhZGlve3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7cmlnaHQ6M3B4O2JvdHRvbTozcHg7bGVmdDozcHg7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKC4zOCwuMzgsMSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxle3RvcDotMTZweDtyaWdodDotMTZweDtib3R0b206LTE2cHg7bGVmdDotMTZweDtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1yYWRpbyAubWQtcmFkaW8tbGFiZWx7aGVpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1yYWRpby5tZC1jaGVja2VkIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXJ7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNlbGVjdHt3aWR0aDoxMDAlO21pbi13aWR0aDoxMjhweDtoZWlnaHQ6MzJweDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc2VsZWN0OmFmdGVye21hcmdpbi10b3A6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSBzY2FsZVkoLjQ1KSBzY2FsZVgoLjg1KTt0cmFuc2l0aW9uOmFsbCAuMTVzIGxpbmVhcjtjb250ZW50OlxcXCJcXFxcMjVCQ1xcXCJ9Lm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51e3RvcDotOHB4O3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwxLDEpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouMjVzO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm0sdG9wfS5tZC1zZWxlY3QubWQtYWN0aXZlIC5tZC1zZWxlY3QtbWVudT4qe29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7dHJhbnNpdGlvbi1kdXJhdGlvbjouMTVzO3RyYW5zaXRpb24tZGVsYXk6LjFzfS5tZC1zZWxlY3QubWQtZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dXNlci1kcmFnOm5vbmV9Lm1kLXNlbGVjdCBzZWxlY3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXNlbGVjdCAubWQtbWVudSwubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWV7d2lkdGg6MTAwJTtoZWlnaHQ6MzJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nLXJpZ2h0OjI0cHg7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mjtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDozM3B4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcntjb2xvcjpoc2xhKDAsMCUsNDYlLC44Nyk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOi04cHh9Lm1kLXNlbGVjdC1jb250ZW50e3dpZHRoOmF1dG87bWF4LWhlaWdodDoyNTZweH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNnB4fS5tZC1zZWxlY3QtY29udGVudCAubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye292ZXJmbG93OnZpc2libGU7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94e21hcmdpbjowfS5tZC1zZWxlY3QtY29udGVudC5tZC1tdWx0aXBsZSAubWQtY2hlY2tib3gtbGFiZWx7cGFkZGluZy1sZWZ0OjE2cHg7Y3Vyc29yOnBvaW50ZXJ9Lm1kLXNpZGVuYXYubWQtbGVmdCAubWQtc2lkZW5hdi1jb250ZW50e2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1yaWdodCAubWQtc2lkZW5hdi1jb250ZW50e3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1iYWNrZHJvcCwubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1jb250ZW50e3Bvc2l0aW9uOmZpeGVkfS5tZC1zaWRlbmF2IC5tZC1zaWRlbmF2LWNvbnRlbnR7d2lkdGg6MzA0cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7ei1pbmRleDoxMDA7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kLXNpZGVuYXYgLm1kLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3dpbGwtY2hhbmdlOm9wYWNpdHl9Lm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWNvbnRlbnR7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1iYWNrZHJvcHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtc3Bpbm5lcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtwb2ludGVyLWV2ZW50czpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItZHJhd3thbmltYXRpb246c3Bpbm5lci1yb3RhdGUgMS45cyBsaW5lYXIgaW5maW5pdGU7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDApfS5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItcGF0aHtzdHJva2UtZGFzaGFycmF5OjIsMjAwO2FuaW1hdGlvbjpzcGlubmVyLWRhc2ggMS40MjVzIGVhc2UtaW4tb3V0IGluZmluaXRlfS5tZC1zcGlubmVyLm1kLXNwaW5uZXItbGVhdmUtYWN0aXZle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoLjgpIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmV7dHJhbnNpdGlvbi1kdXJhdGlvbjoyc30ubWQtc3Bpbm5lcjpub3QoLm1kLWluZGV0ZXJtaW5hdGUpLm1kLXNwaW5uZXItZW50ZXItYWN0aXZlIC5tZC1zcGlubmVyLWRyYXd7YW5pbWF0aW9uOnNwaW5uZXItaW5pdGlhbC1yb3RhdGUgMS45OHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgZm9yd2FyZHN9Lm1kLXNwaW5uZXItZHJhd3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0ubWQtc3Bpbm5lci1wYXRoe2ZpbGw6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1taXRlcmxpbWl0OjEwO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX1Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRle3Rve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pIHRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc3Bpbm5lci1pbml0aWFsLXJvdGF0ZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVooMCl9MjAle29wYWNpdHk6MX10b3t0cmFuc2Zvcm06cm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzcGlubmVyLWRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheToyLDIwMDtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMzVweH10b3tzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMTI0cHh9fS5tZC1zdWJoZWFkZXJ7bWluLWhlaWdodDo0OHB4O3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtZmxvdzpyb3cgd3JhcDtmbGV4LWZsb3c6cm93IHdyYXA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWQtc3dpdGNoe3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXJ7d2lkdGg6MzRweDtoZWlnaHQ6MTRweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjE0cHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC10aHVtYnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2l0aW9uOmFsbCAuMTVzIGxpbmVhcn0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7bWFyZ2luOjA7cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ei1pbmRleDoyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlcjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWxhYmVse2hlaWdodDoxNHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MTRweH0ubWQtc3dpdGNoLm1kLWRyYWdnaW5nIC5tZC1zd2l0Y2gtdGh1bWJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5tZC1zd2l0Y2gubWQtZGlzYWJsZWQgLm1kLXN3aXRjaC10aHVtYntjdXJzb3I6ZGVmYXVsdH0ubWQtdGFibGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gd3JhcDtmbGV4LWZsb3c6Y29sdW1uIHdyYXA7b3ZlcmZsb3cteDphdXRvfS5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciwubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIsLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC10YWJsZS1jZWxse3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRhYmxlIHRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7b3ZlcmZsb3c6aGlkZGVufS5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93e2JvcmRlci10b3A6MXB4IHNvbGlkICNlMGUwZTB9Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3cubWQtc2VsZWN0ZWQgLm1kLXRhYmxlLWNlbGx7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93OmhvdmVyIC5tZC10YWJsZS1jZWxse2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWR7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtYWxpZ246bGVmdH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQ6bGFzdC1jaGlsZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dHtwYWRkaW5nLXJpZ2h0OjI0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLm1kLW51bWVyaWN7dGV4dC1hbGlnbjpyaWdodH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb257d2lkdGg6MTZweDttaW4td2lkdGg6MTZweDtoZWlnaHQ6MTZweDttaW4taGVpZ2h0OjE2cHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpub3QoLm1kLXNvcnRhYmxlLWljb24pe21hcmdpbjowIDRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVye2hlaWdodDo1NnB4O3BhZGRpbmc6MTRweCAwO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtdGV4dHtoZWlnaHQ6MjhweDtwYWRkaW5nLXJpZ2h0OjMycHg7cGFkZGluZy1sZWZ0OjI0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjI4cHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZXtjdXJzb3I6cG9pbnRlcn0ubWQtdGFibGUgLm1kLXNvcnRhYmxlOmZpcnN0LW9mLXR5cGUgLm1kLXNvcnRhYmxlLWljb257bGVmdDphdXRvO3JpZ2h0OjEwcHh9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQsLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb24sLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpob3ZlciAubWQtc29ydGFibGUtaWNvbntvcGFjaXR5OjF9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkLWRlc2NlbmRpbmcgLm1kLXNvcnRhYmxlLWljb257dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZSAubWQtc29ydGFibGUtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtvcGFjaXR5OjA7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC10YWJsZSAubWQtc29ydGFibGUgLm1kLWluay1yaXBwbGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbHtoZWlnaHQ6NDhweDtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpY3t0ZXh0LWFsaWduOnJpZ2h0fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcnstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLWhhcy1hY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZzo2cHggMzJweCA2cHggMjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbjowIC0xMHB4IDAgMH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiAubWQtaWNvbnt3aWR0aDoxOHB4O21pbi13aWR0aDoxOHB4O2hlaWdodDoxOHB4O21pbi1oZWlnaHQ6MThweDttYXJnaW46MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb257d2lkdGg6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24rLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyLC5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uKy5tZC10YWJsZS1oZWFkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0e3BhZGRpbmctbGVmdDo4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLWxlZnQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3h7bWFyZ2luOjB9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcnt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O21hcmdpbi10b3A6MXB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXJ7dG9wOi0xcHg7bGVmdDo0cHh9Lm1kLXRhYmxlIC5tZC1zZWxlY3R7bWluLXdpZHRoOjg0cHh9Lm1kLXRhYmxlIC5tZC1vcHRpb24sLm1kLXRhYmxlIC5tZC1zZWxlY3QtdmFsdWV7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWVkaXQtdHJpZ2dlcntkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXRhYmxlLWVkaXQtdHJpZ2dlci5tZC1lZGl0ZWR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZS1kaWFsb2d7bWF4LWhlaWdodDowO21hcmdpbjowO3BhZGRpbmc6MCAyNHB4IDJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2xlZnQ6MjRweDt6LWluZGV4OjYwO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG1heC1oZWlnaHQgMHMgLjVzO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC04cHgsMCl9Lm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmV7bWF4LWhlaWdodDo0MDBweDtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgjMDAwKTtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1kaWFsb2cubWQtbGFyZ2V7cGFkZGluZzoxMnB4IDI0cHggMnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lcnttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxNnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dHtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVye2ZvbnQtc2l6ZToxMy41cHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC10YWJsZS1kaWFsb2cgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweH0ubWQtdGFibGUtY2FyZHtvdmVyZmxvdzp2aXNpYmxlfS5tZC10YWJsZS1jYXJkIC5tZC10b29sYmFye3BhZGRpbmctbGVmdDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWQtdGFibGUtY2FyZCAubWQtdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7Zm9udC1zaXplOjIwcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb257aGVpZ2h0OjU2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjEycHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXN7bWFyZ2luLXJpZ2h0OjJweDttYXJnaW4tbGVmdDoxOHB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3R7d2lkdGg6YXV0bzttaW4td2lkdGg6MzZweDttYXJnaW46MCAzMnB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3Q6YWZ0ZXJ7bWFyZ2luLXRvcDowfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b25bZGlzYWJsZWRdIC5tZC1pY29ue2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWQtcGFnaW5hdGlvbi1zZWxlY3QubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNnB4fS5tZC1wYWdpbmF0aW9uLXNlbGVjdCAubWQtbGlzdC1pdGVtLWhvbGRlcntmb250LXNpemU6MTNweH0ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjEwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKCMwMDApfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIC5tZC1jb3VudGVye21hcmdpbi1sZWZ0OjhweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFic3t3aWR0aDoxMDAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47cG9zaXRpb246cmVsYXRpdmV9Lm1kLXRhYnMubWQtdHJhbnNpdGlvbi1vZmYgKnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzLm1kLWR5bmFtaWMtaGVpZ2h0IC5tZC10YWJzLWNvbnRlbnR7dHJhbnNpdGlvbjpoZWlnaHQgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb257aGVpZ2h0OjQ4cHg7bWluLWhlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWx7bWluLWhlaWdodDo3MnB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIC5tZC1pY29ue21hcmdpbi1ib3R0b206MTBweH0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWNlbnRlcmVkey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1maXhlZCAubWQtdGFiLWhlYWRlcnstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFicyAubWQtdGFiLWhlYWRlcnttaW4td2lkdGg6NzJweDttYXgtd2lkdGg6MjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDEycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIubWQtZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29ue21hcmdpbjowfS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9ye2hlaWdodDoycHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1yaWdodHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksbGVmdCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxyaWdodCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tbGVmdHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkscmlnaHQgLjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksbGVmdCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubWQtdGFicyAubWQtdGFicy13cmFwcGVye3dpZHRoOjk5OTllbTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYntwYWRkaW5nOjE2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjB9Lm1kLXRvb2xiYXJ7bWluLWhlaWdodDo2NHB4O3BhZGRpbmc6MCA4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1saW5lLXBhY2s6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7ZmxleC1mbG93OnJvdyB3cmFwO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC10b29sYmFyLm1kLWRlbnNle21pbi1oZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1kZW5zZS5tZC1tZWRpdW17bWluLWhlaWdodDo3MnB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLWxhcmdle21pbi1oZWlnaHQ6OTZweH0ubWQtdG9vbGJhci5tZC1kZW5zZSAubWQtdG9vbGJhci1jb250YWluZXJ7aGVpZ2h0OjQ4cHh9Lm1kLXRvb2xiYXIubWQtbWVkaXVte21pbi1oZWlnaHQ6ODhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW0gLm1kLXRvb2xiYXItY29udGFpbmVyOm50aC1jaGlsZCgyKSAubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6NTZweH0ubWQtdG9vbGJhci5tZC1sYXJnZXttaW4taGVpZ2h0OjEyOHB4Oy1tcy1mbGV4LWxpbmUtcGFjazppbmhlcml0O2FsaWduLWNvbnRlbnQ6aW5oZXJpdH0ubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVye21pbi1oZWlnaHQ6MTY0cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWluay1yaXBwbGV7Y29sb3I6I2ZmZn0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMTIpfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdHttYXJnaW46MTZweCAwIDhweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWF2YXRhcisubWQtYXZhdGFye21hcmdpbi1sZWZ0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjY0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6ZmxleC1zdGFydH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXI+Lm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoxNnB4fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXI+Lm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjB9Lm1kLXRvb2xiYXIgLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpOm5vdCgubWQtaWNvbi1idXR0b24pOm5vdCgubWQtZmFiKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xKX0ubWQtdG9vbGJhciAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NDAwfS5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo4cHh9Lm1kLXRvb2xiYXIgLm1kLWxpc3R7cGFkZGluZzowO21hcmdpbjowIC04cHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLXRvb2x0aXB7aGVpZ2h0OjIwcHg7cGFkZGluZzowIDhweDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjIwMDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSg5Nyw5Nyw5NywuODcpO2JvcmRlci1yYWRpdXM6MnB4O29wYWNpdHk6MDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zaXRpb24tZGVsYXk6MHM7Y29sb3I6I2ZmZjtmb250LWZhbWlseTpSb2JvdG8sTm90byBTYW5zLE5vdG8sc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtsaW5lLWhlaWdodDoyMHB4O3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC10b29sdGlwLm1kLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10b29sdGlwOm5vdCgubWQtYWN0aXZlKXt0cmFuc2l0aW9uLWRlbGF5OjBzIWltcG9ydGFudH0ubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDhweCl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCw1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtOHB4KX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbS5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4cHgsNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXdoaXRlZnJhbWV7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5tZC13aGl0ZWZyYW1lLTFkcHtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yZHB7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtM2Rwe2JveC1zaGFkb3c6MCAxcHggOHB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTRkcHtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNWRwe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA1cHggOHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS02ZHB7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS03ZHB7Ym94LXNoYWRvdzowIDRweCA1cHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDdweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMTZweCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLThkcHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtOWRwe2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMGRwe2JveC1zaGFkb3c6MCA2cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCAxMHB4IDE0cHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDRweCAxOHB4IDNweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTFkcHtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTEyZHB7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xM2Rwe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNHB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTRkcHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE1ZHB7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNmRwe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE3ZHB7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMThkcHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xOWRwe2JveC1zaGFkb3c6MCA5cHggMTJweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMTlweCAyOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzZweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIwZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIxZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIyZHB7Ym94LXNoYWRvdzowIDEwcHggMTRweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjJweCAzNXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDJweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIzZHB7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTI0ZHB7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1tYXRlcmlhbC5jc3MubWFwKi9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWIxMjBlYmY2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvQXBwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cblxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJtZC1yb3V0ZXJcIj5cbiAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuICAgIDwvdHJhbnNpdGlvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi9jb21wb25lbnRzL3Rvb2xiYXInXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZWRJbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb29sYmFyXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zcGFjZS12IHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT9hMWRmZWU2YSIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzExZTIzYWUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9vbGJhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMzExZTIzYWVcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b29sYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICA8bWQtdG9vbGJhcj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljaz1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XG4gICAgICAgIDxtZC1tZW51PlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIG1kLW1lbnUtdHJpZ2dlcj5cbiAgICAgICAgICAgIDxtZC1pY29uPmFjY291bnRfY2lyY2xlPC9tZC1pY29uPlxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgIDxtZC1tZW51LWNvbnRlbnQ+XG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxuICAgICAgICA8L21kLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiB2LW9uOmNsaWNrPVwidmlzaXRHaXRIdWJcIj5cbiAgICAgICAgICA8bWQtaWNvbj5mYXZvcml0ZTwvbWQtaWNvbj5cbiAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XCJtZC1sZWZ0XCIgcmVmPVwibGVmdFNpZGVuYXZcIj5cbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwibWQtbGFyZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLXRvb2xiYXI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XG4gICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJtZC1kZW5zZVwiPlxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIiB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL3VcIj5EYXNoYm9hcmQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiY2xvc2VTaWRlbmF2XCIgdi1lbHNlPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvXCI+SG9tZTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPG1kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgICAgIDxtZC1saXN0PlxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtc2lkZW5hdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvJyArIHRoaXMuYXBwTmFtZSlcbiAgICAgIH0sXG4gICAgICB0b2dnbGVMZWZ0U2lkZW5hdjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LnRvZ2dsZSgpXG4gICAgICB9LFxuICAgICAgY2xvc2VTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYuY2xvc2UoKVxuICAgICAgfSxcbiAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyb290LmxvZ2dlZEluID0gZmFsc2VcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxuICAgICAgLy8gdGhlbiByZWdpc3RlciBob29rXG4gICAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXG4gICAgICAgIG5leHQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b29sYmFyLnZ1ZT9jNmE5MTBlNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVMZWZ0U2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcIm1lbnVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGUgdG9vbGJhci10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kcm9vdC5sb2dnZWRJbikgPyBfYygnZGl2JywgW19jKCdtZC1tZW51JywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjY291bnRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJyksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmxvZ291dFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIExvZyBPdXRcXG4gICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udmlzaXRHaXRIdWJcbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJmYXZvcml0ZVwiKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtc2lkZW5hdicsIHtcbiAgICByZWY6IFwibGVmdFNpZGVuYXZcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZC1sZWZ0XCJcbiAgfSwgW19jKCdtZC10b29sYmFyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxhcmdlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdG9vbGJhci1jb250YWluZXJcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaWRlYmFyLWxpbmtzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWRlbnNlXCJcbiAgfSwgWyhfdm0uJHJvb3QubG9nZ2VkSW4pID8gX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3VcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRhc2hib2FyZFwiKV0pXSwgMSkgOiBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIb21lXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2Fib3V0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBYm91dFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiU3VwcG9ydFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1leHBhbmQnLCBbX2MoJ21kLWxpc3QnLCBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiLFxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgR2l0SHViXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBEb25hdGVcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAxKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTMxMWUyM2FlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3Rvb2xiYXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcIm1kLXJvdXRlclwiXG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWIxMjBlYmY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==