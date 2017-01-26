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
	
	__webpack_require__(51);
	
	__webpack_require__(91);
	
	__webpack_require__(97);
	
	__webpack_require__(99);
	
	var _vueMaterial = __webpack_require__(101);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(102);
	
	var _App = __webpack_require__(104);
	
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
	
	var _landing = __webpack_require__(11);
	
	var _landing2 = _interopRequireDefault(_landing);
	
	var _about = __webpack_require__(21);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _download = __webpack_require__(27);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _dashboard = __webpack_require__(33);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _myfiles = __webpack_require__(39);
	
	var _myfiles2 = _interopRequireDefault(_myfiles);
	
	var _profile = __webpack_require__(45);
	
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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\notFound.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f76d7a9"
	if (__vue_options__.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\intro.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d5663926"
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
	  props: ['viewTitle'],
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
	  }, [_vm._v(_vm._s(_vm.viewTitle || _vm.appTitle))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\landing.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bcce5e66"
	if (__vue_options__.functional) {console.error("[vue-loader] landing.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _login = __webpack_require__(16);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\devCredits.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-26988fd8"
	if (__vue_options__.functional) {console.error("[vue-loader] devCredits.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(17)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0a3eb42c"
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
/* 18 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 19 */
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
	    on: {
	      "click": _vm.tryRegister
	    }
	  }, [_vm._v("Sign Up")])], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 20 */
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\about.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5fc55ec3"
	if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
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
	
	var _aboutWidget = __webpack_require__(23);
	
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\aboutWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4ce1a81c"
	if (__vue_options__.functional) {console.error("[vue-loader] aboutWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "aboutWidget"
	  }, [_c('h5', [_vm._v("About " + _vm._s(_vm.appName))]), _vm._v(" "), _c('p', [_vm._v("\n    PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.\n  ")]), _vm._v(" "), _c('h6', [_vm._v("\n    PenguinUpload version " + _vm._s(_vm.appVersion) + "\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 26 */
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\download.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3edc2342"
	if (__vue_options__.functional) {console.error("[vue-loader] download.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
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
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _downloadItem = __webpack_require__(29);
	
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\downloadItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-02fa184a"
	if (__vue_options__.functional) {console.error("[vue-loader] downloadItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
	          vm.file.sizeText = response.data.hrSize;
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
	  }
	};

/***/ },
/* 31 */
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
	    on: {
	      "click": _vm.downloadFile
	    }
	  }, [(_vm.file.pass.length > 0) ? _c('md-icon', [_vm._v("lock")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v("\n            Download\n          ")])], 1)], 1)]) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(34)
	
	/* template */
	var __vue_template__ = __webpack_require__(38)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-73b58b4a"
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _fileUploadWidget = __webpack_require__(35);
	
	var _fileUploadWidget2 = _interopRequireDefault(_fileUploadWidget);
	
	var _devCredits = __webpack_require__(13);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(36)
	
	/* template */
	var __vue_template__ = __webpack_require__(37)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\fileUploadWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7e171d50"
	if (__vue_options__.functional) {console.error("[vue-loader] fileUploadWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
	
	      completedFiles: []
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
	      form.append("file", file);
	      xhr.send(form);
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    }
	  }
	};

/***/ },
/* 37 */
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
	    on: {
	      "click": _vm.viewMyFiles
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
	    }, [_c('span', [_vm._v(" " + _vm._s(prInd.name) + " ")]), _vm._v(" "), (!prInd.error) ? _c('span', [_vm._v(" " + _vm._s((prInd.value < 100) ? ("Uploading... (" + (prInd.value) + "%)") : 'Uploaded, Processing...'))]) : _c('span', [_vm._v(" " + _vm._s('Upload error: ' + prInd.message))])]), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
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
	      on: {
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
	    on: {
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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(40)
	
	/* template */
	var __vue_template__ = __webpack_require__(44)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\myfiles.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-12a2b501"
	if (__vue_options__.functional) {console.error("[vue-loader] myfiles.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myFilesList = __webpack_require__(41);
	
	var _myFilesList2 = _interopRequireDefault(_myFilesList);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(42)
	
	/* template */
	var __vue_template__ = __webpack_require__(43)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myFilesList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f94832a"
	if (__vue_options__.functional) {console.error("[vue-loader] myFilesList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
	      files: [],
	      authRequestParams: {
	        params: {
	          apikey: ''
	        }
	      },
	      loadFinished: false
	    };
	  },
	
	  computed: {
	    filesCount: function filesCount() {
	      return this.files.length;
	    },
	    noFiles: function noFiles() {
	      return this.filesCount == 0;
	    }
	  },
	  methods: {
	    uploadMoreFiles: function uploadMoreFiles() {
	      this.$router.push('/u');
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    },
	    visitDownloadPage: function visitDownloadPage(ix) {
	      var _this = this;
	
	      var f = this.files[ix];
	      if (f.locked) {
	        (function () {
	          var vm = _this;
	          vm.$root.showConfirm('\nThis file is password protected. Do you want to encode the <br>\npassword in the link? If you don\'t do this, anyone who visits <br>\nyour link will need to enter the file password to view the file.\n', 'Include password?', function (r) {
	            if (r) {
	              setTimeout(function () {
	                vm.showDownloadLinkWithPass(ix);
	              }, 400);
	            } else {
	              var dlPage = '/#/d/' + f.fileId;
	              window.open(dlPage, '_blank');
	            }
	          }, 'Yes', 'No');
	        })();
	      } else {
	        var dlPage = '/#/d/' + f.fileId;
	        window.open(dlPage, '_blank');
	      }
	    },
	    showDownloadLinkWithPass: function showDownloadLinkWithPass(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      _axios2.default.get('/api/getpass/' + f.fileId, vm.authRequestParams).then(function (res) {
	        var dlPage = window.location.href.split("#")[0] + '#/d/' + f.fileId + '/' + window.btoa(res.data);
	        vm.$root.showPopup('\nDownload link with password encoded:<br>\n<a target="_blank" href="' + dlPage + '">' + dlPage + '</a>\n            ', 'Link Created');
	      });
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
	          _axios2.default.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.authRequestParams).then(function (res) {
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
	          _axios2.default.patch('/api/unlock/' + f.fileId, {}, vm.authRequestParams).then(function (res) {
	            f.locked = false;
	          });
	        }
	      });
	    },
	    deleteFile: function deleteFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete', function (r) {
	        if (r) {
	          _axios2.default.delete('/api/delete/' + f.fileId, vm.authRequestParams).then(function (res) {
	            vm.files.splice(ix, 1);
	          });
	        }
	      });
	    }
	  },
	  mounted: function mounted() {
	    var vm = this;
	    vm.authRequestParams.params.apikey = vm.$root.u.key;
	    _axios2.default.get('/api/userfiles', vm.authRequestParams).then(function (response) {
	      for (var i = 0; i < response.data.length; i++) {
	        vm.files.push(response.data[i]);
	      }
	      vm.loadFinished = true;
	    }).catch(function (error) {
	      vm.loadFinished = true;
	    });
	  }
	};

/***/ },
/* 43 */
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
	    on: {
	      "click": _vm.uploadMoreFiles
	    }
	  }, [_vm._v("Upload Files")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "uploaded-files-list"
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("All My Files")]), _vm._v(" "), (_vm.loadFinished) ? _c('div', [(_vm.noFiles) ? _c('div', [_c('p', [_vm._v("No Files")])]) : _vm._e(), _vm._v(" "), _c('md-list', {
	    staticClass: "custom-list md-double-line"
	  }, _vm._l((_vm.files), function(file, ix) {
	    return _c('md-list-item', [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_done")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(file.name))]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(file.hrSize))])]), _vm._v(" "), (!file.locked) ? _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.lockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock_open")])], 1) : _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.unlockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock")])], 1), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
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
	      on: {
	        "click": function($event) {
	          _vm.visitDownloadPage(ix)
	        }
	      }
	    }, [_vm._v("Download Page")]), _vm._v(" "), _c('md-menu-item', {
	      on: {
	        "click": function($event) {
	          _vm.deleteFile(ix)
	        }
	      }
	    }, [_vm._v("Delete")])], 1)], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  }))], 1) : _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Retrieving Data")])], 1)])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "My Files"
	    }
	  }), _vm._v(" "), _c('myFilesList'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(46)
	
	/* template */
	var __vue_template__ = __webpack_require__(50)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\profile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2e5f142"
	if (__vue_options__.functional) {console.error("[vue-loader] profile.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myProfile = __webpack_require__(47);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	var _devCredits = __webpack_require__(13);
	
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(48)
	
	/* template */
	var __vue_template__ = __webpack_require__(49)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myProfile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a6174b44"
	if (__vue_options__.functional) {console.error("[vue-loader] myProfile.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
	      authRequestParams: {
	        params: {
	          apikey: ''
	        }
	      },
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
	          _axios2.default.patch('/api/newkey', {}, vm.authRequestParams).then(function (res) {
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
	          _axios2.default.delete('/api/nuke/files', vm.authRequestParams).then(function (res) {});
	
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
	            _axios2.default.delete('/api/nuke/user', vm.authRequestParams).then(function (res) {});
	
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
	    vm.authRequestParams.params.apikey = vm.$root.u.key;
	
	    _axios2.default.get('/api/userinfo', vm.authRequestParams).then(function (res) {
	      vm.uInfo = {
	        quota: vm.$root.humanFileSize(res.data.quota),
	        usage: vm.$root.humanFileSize(res.data.usage),
	        loaded: true
	      };
	    });
	  }
	};

/***/ },
/* 49 */
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
	    on: {
	      "click": _vm.generateNewApiKey
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
	    on: {
	      "click": _vm.tryUpdatePassword
	    }
	  }, [_vm._v("Change Password")])], 1)]), _vm._v(" "), _c('div', [_c('h5', [_vm._v("Danger Zone")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    on: {
	      "click": _vm.deleteAllFiles
	    }
	  }, [_vm._v("Delete All Files")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    on: {
	      "click": _vm.deleteAccount
	    }
	  }, [_vm._v("Delete Account")])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/* roboto-100 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(54) + ") format('woff2'), \r\n    url(" + __webpack_require__(55) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-100italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(56) + ") format('woff2'), \r\n    url(" + __webpack_require__(57) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(58) + ") format('woff2'), \r\n    url(" + __webpack_require__(59) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(60) + ") format('woff2'), \r\n    url(" + __webpack_require__(61) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(62) + ") format('woff2'), \r\n    url(" + __webpack_require__(63) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(64) + ") format('woff2'), \r\n    url(" + __webpack_require__(65) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(66) + ") format('woff2'), \r\n    url(" + __webpack_require__(67) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(68) + ") format('woff2'), \r\n    url(" + __webpack_require__(69) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(70) + ") format('woff2'), \r\n    url(" + __webpack_require__(71) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(72) + ") format('woff2'), \r\n    url(" + __webpack_require__(73) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 900;\r\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(74) + ") format('woff2'), \r\n    url(" + __webpack_require__(75) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(76) + ") format('woff2'), \r\n    url(" + __webpack_require__(77) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(78) + ") format('woff2'), \r\n    url(" + __webpack_require__(79) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(80) + ") format('woff2'), \r\n    url(" + __webpack_require__(81) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(82) + ") format('woff2'), \r\n    url(" + __webpack_require__(83) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-600 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(84) + ") format('woff2'), \r\n    url(" + __webpack_require__(85) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(86) + ") format('woff2'), \r\n    url(" + __webpack_require__(87) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-800 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(88) + ") format('woff2'), \r\n    url(" + __webpack_require__(89) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\nbody {\r\n    background-color: #fafafa;\r\n}", ""]);
	
	// exports


/***/ },
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.8ce5988.woff2";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.654cb4d.woff";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.acee0ea.woff2";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.42de898.woff";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.16ddb15.woff2";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.ecce92d.woff";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.3ddb748.woff2";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.4d08dae.woff";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.7e367be.woff2";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.16e1d93.woff";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.984ae37.woff2";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.1e65e7e.woff";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.bb474f1.woff2";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.57af64f.woff";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.9e7beee.woff2";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.b670694.woff";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.0d7e71f.woff2";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.525d5b4.woff";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.7394ca9.woff2";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.ad0e74f.woff";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.4faec83.woff2";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.3b9590e.woff";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.f4e8dc5.woff2";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.de984c0.woff";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.e746e03.woff2";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.78dd5ab.woff";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.9106435.woff2";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.290ee38.woff";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.e5a3212.woff2";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.81e9558.woff";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.cd90392.woff2";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.a4b6f17.woff";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.06f1c86.woff2";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.c864d84.woff";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.041a4b8.woff2";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.2a3a9cf.woff";

/***/ },
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(" + __webpack_require__(93) + ");\r\n    /* For IE6-8 */\r\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(94) + ") format('woff2'), url(" + __webpack_require__(95) + ") format('woff'), url(" + __webpack_require__(96) + ") format('truetype');\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}", ""]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.e79bfd8.eot";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.570eb83.woff2";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.012cf6a.woff";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.a37b0c0.ttf";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}", ""]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box; }\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box; }\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0; }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%; }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%; }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0; }\r\n\r\n  .one.column,\r\n  .one.columns                    { width: 4.66666666667%; }\r\n  .two.columns                    { width: 13.3333333333%; }\r\n  .three.columns                  { width: 22%;            }\r\n  .four.columns                   { width: 30.6666666667%; }\r\n  .five.columns                   { width: 39.3333333333%; }\r\n  .six.columns                    { width: 48%;            }\r\n  .seven.columns                  { width: 56.6666666667%; }\r\n  .eight.columns                  { width: 65.3333333333%; }\r\n  .nine.columns                   { width: 74.0%;          }\r\n  .ten.columns                    { width: 82.6666666667%; }\r\n  .eleven.columns                 { width: 91.3333333333%; }\r\n  .twelve.columns                 { width: 100%; margin-left: 0; }\r\n\r\n  .one-third.column               { width: 30.6666666667%; }\r\n  .two-thirds.column              { width: 65.3333333333%; }\r\n\r\n  .one-half.column                { width: 48%; }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns        { margin-left: 26%;            }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns          { margin-left: 52%;            }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns     { margin-left: 52%; }\r\n\r\n}\r\n\r\n\r\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%; }\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #222; }\r\n\r\n\r\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300; }\r\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\r\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\r\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\r\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\r\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\r\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 { font-size: 5.0rem; }\r\n  h2 { font-size: 4.2rem; }\r\n  h3 { font-size: 3.6rem; }\r\n  h4 { font-size: 3.0rem; }\r\n  h5 { font-size: 2.4rem; }\r\n  h6 { font-size: 1.5rem; }\r\n}\r\n\r\np {\r\n  margin-top: 0; }\r\n\r\n\r\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1EAEDB; }\r\na:hover {\r\n  color: #0FA0CE; }\r\n\r\n\r\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside; }\r\nol {\r\n  list-style: decimal inside; }\r\nol, ul {\r\n  padding-left: 0;\r\n  margin-top: 0; }\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%; }\r\nli {\r\n  margin-bottom: 1rem; }\r\n\r\n\r\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: .2rem .5rem;\r\n  margin: 0 .2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #F1F1F1;\r\n  border: 1px solid #E1E1E1;\r\n  border-radius: 4px; }\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre; }\r\n\r\n\r\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #E1E1E1; }\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0; }\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0; }\r\n\r\n\r\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*button,\r\n.button {\r\n  margin-bottom: 1rem; }\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem; }\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem; }*/\r\n\r\n\r\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box; }\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box; }\r\n.u-pull-right {\r\n  float: right; }\r\n.u-pull-left {\r\n  float: left; }\r\n\r\n\r\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #E1E1E1; }\r\n\r\n\r\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both; }\r\n\r\n\r\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\r\n\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {}\r\n", ""]);
	
	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("vue-material");

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-avatar {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  margin: auto;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  border-radius: 40px;\n  vertical-align: middle;\n}\n.md-avatar.md-large {\n    width: 64px;\n    min-width: 64px;\n    height: 64px;\n    min-height: 64px;\n    border-radius: 64px;\n}\n.md-avatar.md-large .md-icon {\n      width: 40px;\n      min-width: 40px;\n      height: 40px;\n      min-height: 40px;\n      font-size: 40px;\n      line-height: 40px;\n}\n.md-avatar.md-avatar-icon {\n    background-color: rgba(0, 0, 0, 0.38);\n}\n.md-avatar.md-avatar-icon .md-icon {\n      color: #fff;\n}\n.md-avatar .md-icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.md-avatar img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n.md-avatar .md-ink-ripple {\n    border-radius: 50%;\n}\n.md-avatar .md-ink-ripple .md-ripple.md-active {\n      animation-duration: .9s;\n}\n.md-avatar-tooltip.md-tooltip-top {\n  margin-top: -8px;\n}\n.md-avatar-tooltip.md-tooltip-right {\n  margin-left: 8px;\n}\n.md-avatar-tooltip.md-tooltip-bottom {\n  margin-top: 8px;\n}\n.md-avatar-tooltip.md-tooltip-left {\n  margin-left: -8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  transform: translate3d(0, 0, 0);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-backdrop.md-active {\n    opacity: 1;\n    pointer-events: auto;\n}\n.md-backdrop.md-transparent {\n    background: rgba(0, 0, 0, 0.005);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-bottom-bar {\n  width: 100%;\n  min-width: 100%;\n  height: 56px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-bottom-bar-item {\n  max-width: 168px;\n  min-width: 80px;\n  height: 100%;\n  padding: 8px 12px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex: 1;\n      flex: 1;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  transform: translate3d(0, 0, 0);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1em;\n  text-decoration: none;\n}\n.md-bottom-bar-item.md-active {\n    padding-top: 6px;\n}\n.md-bottom-bar-item.md-active .md-text {\n      transform: scale(1) translate3d(0, 0, 0);\n}\n.md-bottom-bar-item.md-active .md-text,\n    .md-bottom-bar-item.md-active .md-icon {\n      color: currentColor;\n}\n.md-bottom-bar-item[disabled] {\n    opacity: .38;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item {\n    min-width: 56px;\n    max-width: 96px;\n    position: static;\n    -ms-flex: 1 1 32px;\n        flex: 1 1 32px;\n    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: flex, min-width, max-width;\n    transition-property: flex, min-width, max-width, -ms-flex;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon {\n      transform: translate3d(0, 8px, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-text {\n      opacity: 0;\n      transform: scale(1) translate3d(0, 6px, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active {\n      min-width: 96px;\n      max-width: 168px;\n      -ms-flex: 1 1 72px;\n          flex: 1 1 72px;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,\n      .md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n        opacity: 1;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon {\n        transform: scale(1) translate3d(0, 0, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n        transform: scale(1) translate3d(0, 2px, 0);\n}\n.md-bottom-bar-item .md-text {\n    transform: scale(0.8571) translateY(2px);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear, opacity 0.15s linear;\n}\n.md-bottom-bar-item .md-icon {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-button {\n  min-width: 88px;\n  min-height: 36px;\n  margin: 6px 8px;\n  padding: 0 16px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: none;\n  background: none;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: 500;\n  letter-spacing: inherit;\n  line-height: 36px;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  vertical-align: top;\n  white-space: nowrap;\n}\n.md-button:focus {\n    outline: none;\n}\n.md-button::-moz-focus-inner {\n    border: 0;\n}\n.md-button:hover:not([disabled]):not(.md-raised) {\n    background-color: rgba(153, 153, 153, 0.2);\n    text-decoration: none;\n}\n.md-button:hover:not([disabled]).md-raised {\n    background-color: rgba(0, 0, 0, 0.12);\n}\n.md-button:active:not([disabled]) {\n    background-color: rgba(153, 153, 153, 0.4);\n}\n.md-button.md-raised:not([disabled]) {\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-button.md-dense {\n    min-height: 32px;\n    line-height: 32px;\n    font-size: 13px;\n}\n.md-button.md-icon-button .md-icon, .md-button.md-fab .md-icon {\n    margin-top: 1px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.md-button.md-icon-button {\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    margin: 0 6px;\n    padding: 8px;\n    border-radius: 50%;\n    line-height: 24px;\n}\n.md-button.md-icon-button:not([disabled]):hover {\n      background: none;\n}\n.md-button.md-icon-button.md-dense {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      min-height: 32px;\n      padding: 4px;\n      line-height: 32px;\n}\n.md-button.md-icon-button .md-ink-ripple {\n      border-radius: 50%;\n}\n.md-button.md-icon-button .md-ink-ripple .md-ripple {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-button.md-icon-button .md-ripple.md-active {\n      animation-duration: .9s;\n}\n.md-button.md-fab {\n    width: 56px;\n    height: 56px;\n    min-width: 0;\n    overflow: hidden;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n    border-radius: 56px;\n    line-height: 56px;\n    background-clip: padding-box;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: background-color, box-shadow, transform;\n}\n.md-button.md-fab:hover, .md-button.md-fab:focus {\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);\n}\n.md-button.md-fab.md-fab-top-left {\n      position: absolute;\n      top: 16px;\n      left: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-top-center {\n      position: absolute;\n      top: 16px;\n      left: 50%;\n      z-index: 10;\n      transform: translateX(-50%);\n}\n.md-button.md-fab.md-fab-top-right {\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-left {\n      position: absolute;\n      bottom: 16px;\n      left: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-center {\n      position: absolute;\n      bottom: 16px;\n      left: 50%;\n      transform: translateX(-50%);\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-right {\n      position: absolute;\n      right: 16px;\n      bottom: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-mini {\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n}\n.md-button.md-fab .md-ink-ripple {\n      border-radius: 56px;\n}\n.md-button[disabled] {\n    color: rgba(0, 0, 0, 0.26);\n    cursor: default;\n}\n.md-button[disabled].md-raised, .md-button[disabled].md-fab {\n      background-color: rgba(0, 0, 0, 0.12);\n}\n.md-button[disabled].md-fab {\n      box-shadow: none;\n}\n.md-button:after {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-button .md-ink-ripple {\n    border-radius: 2px;\n    background-clip: padding-box;\n    overflow: hidden;\n}\n.md-button.md-icon-button .md-icon,\n.md-button.md-fab .md-icon {\n  display: block;\n}\n.md-button-tooltip.md-tooltip-top {\n  margin-top: -8px;\n}\n.md-button-tooltip.md-tooltip-right {\n  margin-left: 8px;\n}\n.md-button-tooltip.md-tooltip-bottom {\n  margin-top: 8px;\n}\n.md-button-tooltip.md-tooltip-left {\n  margin-left: -8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-button-toggle {\n  width: auto;\n  display: -ms-flexbox;\n  display: flex;\n}\n.md-button-toggle > .md-button {\n    margin: 0;\n    overflow: hidden;\n    border-width: 1px 0 1px 1px;\n    border-radius: 0;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-button-toggle > .md-button:first-child {\n      border-radius: 2px 0 0 2px;\n}\n.md-button-toggle > .md-button:last-child {\n      border-right-width: 1px;\n      border-radius: 0 2px 2px 0;\n}\n.md-button-toggle > .md-button:not([disabled]) {\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-button-toggle > .md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised) {\n        background-color: rgba(153, 153, 153, 0.2);\n        text-decoration: none;\n}\n.md-button-toggle > .md-button .md-ink-ripple {\n      border-radius: 2px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n.md-card {\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  position: relative;\n  z-index: 1;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-card.md-with-hover {\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: box-shadow;\n}\n.md-card.md-with-hover:hover {\n      z-index: 2;\n      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.md-card .md-card-media {\n    position: relative;\n}\n.md-card .md-card-media.md-16-9 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-16-9:before {\n        width: 100%;\n        padding-top: 56.25%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-16-9 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media.md-4-3 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-4-3:before {\n        width: 100%;\n        padding-top: 75%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-4-3 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media.md-1-1 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-1-1:before {\n        width: 100%;\n        padding-top: 100%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-1-1 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media + .md-card-header {\n      padding-top: 24px;\n}\n.md-card .md-card-media + .md-card-content:last-child {\n      padding-bottom: 16px;\n}\n.md-card .md-card-media img {\n      width: 100%;\n}\n.md-card .md-card-header {\n    padding: 16px;\n}\n.md-card .md-card-header:first-child > .md-title:first-child,\n    .md-card .md-card-header:first-child > .md-card-header-text > .md-title:first-child {\n      margin-top: 8px;\n}\n.md-card .md-card-header:last-child {\n      margin-bottom: 8px;\n}\n.md-card .md-card-header.md-card-header-flex {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-card .md-card-header + .md-card-content {\n      padding-top: 0;\n}\n.md-card .md-card-header + .md-card-actions:not(:last-child) {\n      padding: 0 8px;\n}\n.md-card .md-card-header .md-avatar {\n      margin-right: 16px;\n      float: left;\n}\n.md-card .md-card-header .md-avatar ~ .md-title {\n        font-size: 14px;\n}\n.md-card .md-card-header .md-avatar ~ .md-title,\n      .md-card .md-card-header .md-avatar ~ .md-subhead {\n        font-weight: 500;\n        line-height: 20px;\n}\n.md-card .md-card-header .md-button {\n      margin: 0;\n}\n.md-card .md-card-header .md-button:last-child {\n        margin-right: -4px;\n}\n.md-card .md-card-header .md-button + .md-button {\n        margin-left: 8px;\n}\n.md-card .md-card-header .md-card-header-text {\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-card .md-card-header .md-card-media {\n      width: 80px;\n      -ms-flex: 0 0 80px;\n          flex: 0 0 80px;\n      height: 80px;\n      margin-left: 16px;\n}\n.md-card .md-card-header .md-card-media.md-medium {\n        width: 120px;\n        -ms-flex: 0 0 120px;\n            flex: 0 0 120px;\n        height: 120px;\n}\n.md-card .md-card-header .md-card-media.md-big {\n        width: 160px;\n        -ms-flex: 0 0 160px;\n            flex: 0 0 160px;\n        height: 160px;\n}\n.md-card .md-subhead,\n  .md-card .md-title,\n  .md-card .md-subheading {\n    margin: 0;\n    font-weight: 400;\n}\n.md-card .md-subhead {\n    opacity: .54;\n    font-size: 14px;\n    letter-spacing: .01em;\n    line-height: 20px;\n}\n.md-card .md-subhead + .md-title {\n      margin-top: 4px;\n}\n.md-card .md-title {\n    font-size: 24px;\n    letter-spacing: 0;\n    line-height: 32px;\n}\n.md-card .md-card-media-actions {\n    padding: 16px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n}\n.md-card .md-card-media-actions .md-card-media {\n      max-width: 240px;\n      max-height: 240px;\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-card .md-card-media-actions .md-card-actions {\n      margin-left: 16px;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.md-card .md-card-media-actions .md-card-actions .md-button + .md-button {\n        margin: 8px 0 0;\n}\n.md-card .md-card-content {\n    padding: 16px;\n    font-size: 14px;\n    line-height: 22px;\n}\n.md-card .md-card-content:last-child {\n      padding-bottom: 24px;\n}\n.md-card .md-card-actions {\n    padding: 8px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.md-card .md-card-actions .md-button {\n      margin: 0;\n}\n.md-card .md-card-actions .md-button:first-child {\n        margin-left: 0;\n}\n.md-card .md-card-actions .md-button:last-child {\n        margin-right: 0;\n}\n.md-card .md-card-actions .md-button + .md-button {\n        margin-left: 4px;\n}\n.md-card .md-card-area {\n    position: relative;\n}\n.md-card > .md-card-area:not(:last-child) {\n    position: relative;\n}\n.md-card > .md-card-area:not(:last-child):after {\n      height: 1px;\n      position: absolute;\n      bottom: 0;\n      content: \" \";\n}\n.md-card > .md-card-area:not(:last-child):not(.md-inset):after {\n      right: 0;\n      left: 0;\n}\n.md-card > .md-card-area:not(:last-child).md-inset:after {\n      right: 16px;\n      left: 16px;\n}\n.md-card .md-card-media-cover {\n    position: relative;\n    color: #fff;\n}\n.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n}\n.md-card .md-card-media-cover .md-card-area {\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 2;\n}\n.md-card .md-card-media-cover .md-card-header + .md-card-actions {\n      padding-top: 0;\n}\n.md-card .md-card-media-cover .md-subhead {\n      opacity: 1;\n}\n.md-card .md-card-expand {\n    overflow: hidden;\n}\n.md-card .md-card-expand.md-active [md-expand-trigger] {\n      transform: rotateZ(180deg) translate3D(0, 0, 0);\n}\n.md-card .md-card-expand.md-active .md-card-content {\n      margin-top: 0 !important;\n      opacity: 1;\n}\n.md-card .md-card-expand .md-card-actions {\n      padding-top: 0;\n      position: relative;\n      z-index: 2;\n}\n.md-card .md-card-expand [md-expand-trigger] {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      will-change: transform;\n}\n.md-card .md-card-expand .md-card-content {\n      padding-top: 4px;\n      position: relative;\n      z-index: 1;\n      opacity: 0;\n      transform: translate3D(0, 0, 0);\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      will-change: margin;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-checkbox {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-checkbox .md-checkbox-container {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    border-radius: 2px;\n    border: 2px solid rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-checkbox .md-checkbox-container:focus {\n      outline: none;\n}\n.md-checkbox .md-checkbox-container:before {\n      width: 48px;\n      height: 48px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-checkbox .md-checkbox-container:after {\n      width: 6px;\n      height: 13px;\n      position: absolute;\n      top: 0;\n      left: 5px;\n      border: 2px solid #fff;\n      border-top: 0;\n      border-left: 0;\n      opacity: 0;\n      transform: rotate(45deg) scale3D(0.15, 0.15, 1);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-checkbox .md-checkbox-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-checkbox .md-checkbox-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-checkbox .md-checkbox-label {\n    height: 20px;\n    padding-left: 8px;\n    line-height: 20px;\n}\n.md-checkbox.md-checked .md-checkbox-container:after {\n  opacity: 1;\n  transform: rotate(45deg) scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-chip {\n  height: 32px;\n  padding: 8px 12px;\n  display: inline-block;\n  border-radius: 32px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: 13px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n.md-chip.md-deletable {\n    position: relative;\n    padding-right: 32px;\n}\n.md-chip:focus, .md-chip:active {\n    outline: none;\n}\n.md-chip:focus:not(.md-disabled), .md-chip:active:not(.md-disabled) {\n      cursor: pointer;\n      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-chip.md-disabled .md-button {\n    pointer-events: none;\n    cursor: default;\n}\n.md-chip .md-button.md-delete {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    min-height: 24px;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 4px;\n    right: 4px;\n    border-radius: 24px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-chip .md-button.md-delete .md-icon {\n      width: 20px;\n      min-width: 20px;\n      height: 20px;\n      min-height: 20px;\n      margin: 0;\n      font-size: 20px;\n}\n.md-chip .md-button.md-delete .md-ink-ripple {\n      border-radius: 32px;\n}\n.md-chip .md-button.md-delete .md-ripple {\n      opacity: .54;\n}\n.md-chips .md-chip {\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.md-chips .md-input-container {\n  min-height: 54px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.md-chips .md-input {\n  width: 128px;\n  -ms-flex: 1;\n      flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-ink-ripple {\n  pointer-events: none;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-mask-image: radial-gradient(circle, white 100%, black 100%);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n.md-ripple {\n  position: absolute;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: .2;\n  transform: scale(0) translateZ(0);\n  transition: none;\n  will-change: background-color, opacity, transform, width, height, top, left;\n}\n.md-ripple.md-active {\n    animation: ripple 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.md-ripple.md-active.md-fadeout {\n      opacity: 0 !important;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition-duration: .6s;\n}\n@keyframes ripple {\nto {\n    transform: scale(2.2) translateZ(0);\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-dialog-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 108;\n}\n.md-dialog-container.md-active {\n    pointer-events: auto;\n}\n.md-dialog-container.md-active .md-dialog {\n      opacity: 1 !important;\n      transform: scale(1) !important;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition-property: opacity, transform;\n}\n.md-dialog-backdrop {\n  position: fixed;\n  z-index: 109;\n}\n.md-dialog {\n  min-width: 280px;\n  max-width: 80%;\n  max-height: 80%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  overflow: hidden;\n  position: relative;\n  z-index: 110;\n  outline: none;\n  border-radius: 2px;\n  opacity: 0;\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n  transform: scale(0.9, 0.85);\n  transform-origin: center center;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s 0.05s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: opacity, transform;\n}\n.md-dialog.md-reference {\n    transform-origin: top center;\n}\n.md-dialog.md-transition-off {\n    transition: none !important;\n}\n.md-dialog p {\n    margin: 0;\n}\n.md-dialog-title {\n  margin-bottom: 20px;\n  padding: 24px 24px 0;\n}\n.md-dialog-content {\n  padding: 0 24px 24px;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  overflow: auto;\n  position: relative;\n  background: linear-gradient(to bottom, #fff 0, #fff 1px, transparent 1px), linear-gradient(to top, #fff 0, #fff 3px, transparent 3px), linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0, rgba(0, 0, 0, 0.12) 1px, transparent 1px), linear-gradient(to top, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.2) 2px, transparent 2px);\n  background-attachment: local, local, scroll, scroll;\n}\n.md-dialog-content:first-child {\n    padding-top: 24px;\n}\n.md-dialog-content p:first-child:not(:only-child) {\n    margin-top: 0;\n}\n.md-dialog-content p:last-child:not(:only-child) {\n    margin-bottom: 0;\n}\n.md-dialog-body {\n  margin: 0 -24px;\n  padding: 0 24px;\n  overflow: auto;\n}\n.md-dialog-actions {\n  min-height: 52px;\n  padding: 8px 8px 8px 24px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  position: relative;\n}\n.md-dialog-actions:before {\n    height: 1px;\n    position: absolute;\n    top: -1px;\n    right: 0;\n    left: 0;\n    background-color: #fff;\n    content: \" \";\n}\n.md-dialog-actions .md-button {\n    min-width: 64px;\n    margin: 0;\n    padding: 0 8px;\n}\n.md-dialog-actions .md-button + .md-button {\n      margin-left: 8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-divider {\n  height: 1px;\n  margin: 0;\n  padding: 0;\n  display: block;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.md-divider.md-inset {\n    margin-left: 72px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n}\n.md-file input[type=\"file\"] {\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    border: 0;\n}\n.md-file .md-icon {\n    cursor: pointer;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-icon {\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n  min-height: 24px;\n  font-size: 24px;\n  margin: auto;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  fill: currentColor;\n  text-rendering: optimizeLegibility;\n  vertical-align: middle;\n}\n.md-icon.md-size-2x {\n    width: 48px;\n    min-width: 48px;\n    height: 48px;\n    min-height: 48px;\n    font-size: 48px;\n}\n.md-icon.md-size-3x {\n    width: 72px;\n    min-width: 72px;\n    height: 72px;\n    min-height: 72px;\n    font-size: 72px;\n}\n.md-icon.md-size-4x {\n    width: 96px;\n    min-width: 96px;\n    height: 96px;\n    min-height: 96px;\n    font-size: 96px;\n}\n.md-icon.md-size-5x {\n    width: 120px;\n    min-width: 120px;\n    height: 120px;\n    min-height: 120px;\n    font-size: 120px;\n}\n.md-icon svg {\n    width: 100%;\n    height: 100%;\n}\nimg.md-icon {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-image {\n  opacity: 0;\n  filter: saturate(20%);\n}\n.md-image.md-black-output {\n    filter: brightness(0.4) saturate(20%);\n}\n.md-image.md-loaded {\n    opacity: 1;\n    filter: saturate(100%);\n    transition: opacity 1.1s cubic-bezier(0.25, 0.8, 0.25, 1), filter 2.2s 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-input-container {\n  width: 100%;\n  min-height: 48px;\n  margin: 4px 0 24px;\n  padding-top: 16px;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n.md-input-container:after {\n    height: 1px;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.12);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    content: \" \";\n}\n.md-input-container label {\n    position: absolute;\n    top: 23px;\n    left: 0;\n    pointer-events: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .3s;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 16px;\n    line-height: 20px;\n}\n.md-input-container input,\n  .md-input-container textarea {\n    width: 100%;\n    height: 32px;\n    padding: 0;\n    display: block;\n    -ms-flex: 1;\n        flex: 1;\n    border: none;\n    background: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: font-size;\n    color: rgba(0, 0, 0, 0.54);\n    font-family: inherit;\n    font-size: 1px;\n    line-height: 32px;\n}\n.md-input-container input:focus,\n    .md-input-container textarea:focus {\n      outline: none;\n}\n.md-input-container input::-webkit-input-placeholder,\n    .md-input-container textarea::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 16px;\n      text-shadow: none;\n      -webkit-text-fill-color: initial;\n}\n.md-input-container input ~ .md-icon:not(.md-icon-delete),\n    .md-input-container textarea ~ .md-icon:not(.md-icon-delete) {\n      margin-left: 12px;\n}\n.md-input-container input ~ .md-icon:not(.md-icon-delete):after,\n      .md-input-container textarea ~ .md-icon:not(.md-icon-delete):after {\n        right: 0;\n        left: auto;\n}\n.md-input-container textarea {\n    min-height: 32px;\n    max-height: 230px;\n    padding: 5px 0;\n    resize: none;\n    line-height: 1.3em;\n}\n.md-input-container .md-error,\n  .md-input-container .md-count {\n    height: 20px;\n    position: absolute;\n    top: 50px;\n    font-size: 12px;\n}\n.md-input-container .md-error {\n    display: block !important;\n    opacity: 0;\n    transform: translate3d(0, -8px, 0);\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n.md-input-container .md-count {\n    right: 0;\n}\n.md-input-container .md-icon:not(.md-icon-delete) {\n    margin: 4px auto;\n    color: rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-input-container .md-icon:not(.md-icon-delete):after {\n      width: 36px;\n      height: 2px;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      z-index: 2;\n      content: \"\";\n}\n.md-input-container .md-icon:not(.md-icon-delete) ~ label {\n      left: 36px;\n}\n.md-input-container .md-icon:not(.md-icon-delete) ~ .md-input,\n    .md-input-container .md-icon:not(.md-icon-delete) ~ .md-textarea,\n    .md-input-container .md-icon:not(.md-icon-delete) ~ .md-file {\n      margin-left: 12px;\n}\n.md-input-container.md-input-placeholder label {\n  pointer-events: auto;\n  top: 10px;\n  opacity: 0;\n  font-size: 12px;\n}\n.md-input-container.md-input-placeholder input,\n.md-input-container.md-input-placeholder textarea {\n  font-size: 16px;\n}\n.md-input-container.md-input-focused label, .md-input-container.md-has-value label {\n  pointer-events: auto;\n  top: 0;\n  opacity: 1;\n  font-size: 12px;\n}\n.md-input-container.md-input-focused input,\n.md-input-container.md-input-focused textarea, .md-input-container.md-has-value input,\n.md-input-container.md-has-value textarea {\n  font-size: 16px;\n}\n.md-input-container.md-has-value input,\n.md-input-container.md-has-value textarea {\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-input-container.md-input-inline label {\n  pointer-events: none;\n}\n.md-input-container.md-input-inline.md-input-focused label {\n  top: 23px;\n  font-size: 16px;\n}\n.md-input-container.md-input-inline.md-has-value label {\n  opacity: 0;\n}\n.md-input-container.md-input-disabled:after {\n  background: bottom left repeat-x;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 33%, transparent 0%);\n  background-size: 4px 1px;\n}\n.md-input-container.md-input-disabled label,\n.md-input-container.md-input-disabled input,\n.md-input-container.md-input-disabled textarea {\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-input-container.md-has-password .md-toggle-password {\n  margin: 0;\n  position: absolute;\n  right: 0;\n  bottom: -2px;\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n    color: rgba(0, 0, 0, 0.87);\n}\n.md-input-container.md-input-invalid .md-error {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.md-input-container.md-input-required label:after {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  transform: translateX(calc(100% + 2px));\n  content: \"*\";\n  font-size: 12px;\n  line-height: 1em;\n  vertical-align: top;\n}\n.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after {\n  color: rgba(0, 0, 0, 0.87);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n/* Rows and Columns */\n.md-layout {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex: 1;\n      flex: 1;\n}\n.md-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.md-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n/* Container */\n.md-layout.md-container {\n  width: 100%;\n  max-width: 1200px;\n}\n.md-layout.md-container.md-centered {\n    margin: 0 auto;\n}\n\n/* Alignments */\n.md-align-start {\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n.md-align-center {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.md-align-end {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n/* Gutter Size */\n.md-gutter:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.md-gutter:not(.md-column) > .md-layout {\n    padding-right: 12px;\n    padding-left: 12px;\n}\n.md-gutter .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.md-gutter .md-column > .md-layout {\n    padding-top: 12px;\n    padding-bottom: 12px;\n}\n@media (max-width: 944px) {\n.md-gutter:not(.md-column) {\n    margin-right: -8px;\n    margin-left: -8px;\n}\n.md-gutter:not(.md-column) > .md-layout {\n      padding-right: 8px;\n      padding-left: 8px;\n}\n.md-gutter .md-column {\n    margin-top: -8px;\n    margin-bottom: -8px;\n}\n.md-gutter .md-column > .md-layout {\n      padding-top: 8px;\n      padding-bottom: 8px;\n}\n}\n.md-gutter-8:not(.md-column) {\n  margin-right: -4px;\n  margin-left: -4px;\n}\n.md-gutter-8:not(.md-column) > .md-layout {\n    padding-right: 4px;\n    padding-left: 4px;\n}\n.md-gutter-8 .md-column {\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n.md-gutter-8 .md-column > .md-layout {\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n.md-gutter-16:not(.md-column) {\n  margin-right: -8px;\n  margin-left: -8px;\n}\n.md-gutter-16:not(.md-column) > .md-layout {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.md-gutter-16 .md-column {\n  margin-top: -8px;\n  margin-bottom: -8px;\n}\n.md-gutter-16 .md-column > .md-layout {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.md-gutter-24:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.md-gutter-24:not(.md-column) > .md-layout {\n    padding-right: 12px;\n    padding-left: 12px;\n}\n.md-gutter-24 .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.md-gutter-24 .md-column > .md-layout {\n    padding-top: 12px;\n    padding-bottom: 12px;\n}\n.md-gutter-40:not(.md-column) {\n  margin-right: -20px;\n  margin-left: -20px;\n}\n.md-gutter-40:not(.md-column) > .md-layout {\n    padding-right: 20px;\n    padding-left: 20px;\n}\n.md-gutter-40 .md-column {\n  margin-top: -20px;\n  margin-bottom: -20px;\n}\n.md-gutter-40 .md-column > .md-layout {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n/* Flex Size */\n.md-flex {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n.md-flex-33 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 33.33333%;\n      flex: 0 1 33.33333%;\n}\n.md-flex-66 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 66.66666%;\n      flex: 0 1 66.66666%;\n}\n.md-flex-offset-33 {\n  margin-left: 33.33333%;\n}\n.md-flex-offset-66 {\n  margin-left: 66.66666%;\n}\n.md-flex-5 {\n  min-width: 5%;\n  -ms-flex: 0 1 5%;\n      flex: 0 1 5%;\n}\n.md-flex-offset-5 {\n  margin-left: 5%;\n}\n.md-flex-10 {\n  min-width: 10%;\n  -ms-flex: 0 1 10%;\n      flex: 0 1 10%;\n}\n.md-flex-offset-10 {\n  margin-left: 10%;\n}\n.md-flex-15 {\n  min-width: 15%;\n  -ms-flex: 0 1 15%;\n      flex: 0 1 15%;\n}\n.md-flex-offset-15 {\n  margin-left: 15%;\n}\n.md-flex-20 {\n  min-width: 20%;\n  -ms-flex: 0 1 20%;\n      flex: 0 1 20%;\n}\n.md-flex-offset-20 {\n  margin-left: 20%;\n}\n.md-flex-25 {\n  min-width: 25%;\n  -ms-flex: 0 1 25%;\n      flex: 0 1 25%;\n}\n.md-flex-offset-25 {\n  margin-left: 25%;\n}\n.md-flex-30 {\n  min-width: 30%;\n  -ms-flex: 0 1 30%;\n      flex: 0 1 30%;\n}\n.md-flex-offset-30 {\n  margin-left: 30%;\n}\n.md-flex-35 {\n  min-width: 35%;\n  -ms-flex: 0 1 35%;\n      flex: 0 1 35%;\n}\n.md-flex-offset-35 {\n  margin-left: 35%;\n}\n.md-flex-40 {\n  min-width: 40%;\n  -ms-flex: 0 1 40%;\n      flex: 0 1 40%;\n}\n.md-flex-offset-40 {\n  margin-left: 40%;\n}\n.md-flex-45 {\n  min-width: 45%;\n  -ms-flex: 0 1 45%;\n      flex: 0 1 45%;\n}\n.md-flex-offset-45 {\n  margin-left: 45%;\n}\n.md-flex-50 {\n  min-width: 50%;\n  -ms-flex: 0 1 50%;\n      flex: 0 1 50%;\n}\n.md-flex-offset-50 {\n  margin-left: 50%;\n}\n.md-flex-55 {\n  min-width: 55%;\n  -ms-flex: 0 1 55%;\n      flex: 0 1 55%;\n}\n.md-flex-offset-55 {\n  margin-left: 55%;\n}\n.md-flex-60 {\n  min-width: 60%;\n  -ms-flex: 0 1 60%;\n      flex: 0 1 60%;\n}\n.md-flex-offset-60 {\n  margin-left: 60%;\n}\n.md-flex-65 {\n  min-width: 65%;\n  -ms-flex: 0 1 65%;\n      flex: 0 1 65%;\n}\n.md-flex-offset-65 {\n  margin-left: 65%;\n}\n.md-flex-70 {\n  min-width: 70%;\n  -ms-flex: 0 1 70%;\n      flex: 0 1 70%;\n}\n.md-flex-offset-70 {\n  margin-left: 70%;\n}\n.md-flex-75 {\n  min-width: 75%;\n  -ms-flex: 0 1 75%;\n      flex: 0 1 75%;\n}\n.md-flex-offset-75 {\n  margin-left: 75%;\n}\n.md-flex-80 {\n  min-width: 80%;\n  -ms-flex: 0 1 80%;\n      flex: 0 1 80%;\n}\n.md-flex-offset-80 {\n  margin-left: 80%;\n}\n.md-flex-85 {\n  min-width: 85%;\n  -ms-flex: 0 1 85%;\n      flex: 0 1 85%;\n}\n.md-flex-offset-85 {\n  margin-left: 85%;\n}\n.md-flex-90 {\n  min-width: 90%;\n  -ms-flex: 0 1 90%;\n      flex: 0 1 90%;\n}\n.md-flex-offset-90 {\n  margin-left: 90%;\n}\n.md-flex-95 {\n  min-width: 95%;\n  -ms-flex: 0 1 95%;\n      flex: 0 1 95%;\n}\n.md-flex-offset-95 {\n  margin-left: 95%;\n}\n.md-flex-100 {\n  min-width: 100%;\n  -ms-flex: 0 1 100%;\n      flex: 0 1 100%;\n}\n.md-flex-offset-100 {\n  margin-left: 100%;\n}\n\n/* Responsive Breakpoints */\n@media (min-width: 1904px) {\n.md-row-xlarge {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-xlarge {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-xlarge {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-xlarge-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-xlarge-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-xlarge-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-xlarge-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-xlarge-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-xlarge-5 {\n    margin-left: 5%;\n}\n.md-flex-xlarge-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-xlarge-10 {\n    margin-left: 10%;\n}\n.md-flex-xlarge-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-xlarge-15 {\n    margin-left: 15%;\n}\n.md-flex-xlarge-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-xlarge-20 {\n    margin-left: 20%;\n}\n.md-flex-xlarge-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-xlarge-25 {\n    margin-left: 25%;\n}\n.md-flex-xlarge-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-xlarge-30 {\n    margin-left: 30%;\n}\n.md-flex-xlarge-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-xlarge-35 {\n    margin-left: 35%;\n}\n.md-flex-xlarge-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-xlarge-40 {\n    margin-left: 40%;\n}\n.md-flex-xlarge-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-xlarge-45 {\n    margin-left: 45%;\n}\n.md-flex-xlarge-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-xlarge-50 {\n    margin-left: 50%;\n}\n.md-flex-xlarge-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-xlarge-55 {\n    margin-left: 55%;\n}\n.md-flex-xlarge-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-xlarge-60 {\n    margin-left: 60%;\n}\n.md-flex-xlarge-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-xlarge-65 {\n    margin-left: 65%;\n}\n.md-flex-xlarge-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-xlarge-70 {\n    margin-left: 70%;\n}\n.md-flex-xlarge-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-xlarge-75 {\n    margin-left: 75%;\n}\n.md-flex-xlarge-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-xlarge-80 {\n    margin-left: 80%;\n}\n.md-flex-xlarge-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-xlarge-85 {\n    margin-left: 85%;\n}\n.md-flex-xlarge-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-xlarge-90 {\n    margin-left: 90%;\n}\n.md-flex-xlarge-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-xlarge-95 {\n    margin-left: 95%;\n}\n.md-flex-xlarge-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-xlarge-100 {\n    margin-left: 100%;\n}\n.md-align-xlarge-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-xlarge-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-xlarge-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-xlarge {\n    display: none;\n}\n}\n@media (max-width: 1903px) {\n.md-row-large {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-large {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-large {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-large-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-large-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-large-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-large-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-large-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-large-5 {\n    margin-left: 5%;\n}\n.md-flex-large-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-large-10 {\n    margin-left: 10%;\n}\n.md-flex-large-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-large-15 {\n    margin-left: 15%;\n}\n.md-flex-large-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-large-20 {\n    margin-left: 20%;\n}\n.md-flex-large-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-large-25 {\n    margin-left: 25%;\n}\n.md-flex-large-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-large-30 {\n    margin-left: 30%;\n}\n.md-flex-large-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-large-35 {\n    margin-left: 35%;\n}\n.md-flex-large-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-large-40 {\n    margin-left: 40%;\n}\n.md-flex-large-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-large-45 {\n    margin-left: 45%;\n}\n.md-flex-large-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-large-50 {\n    margin-left: 50%;\n}\n.md-flex-large-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-large-55 {\n    margin-left: 55%;\n}\n.md-flex-large-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-large-60 {\n    margin-left: 60%;\n}\n.md-flex-large-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-large-65 {\n    margin-left: 65%;\n}\n.md-flex-large-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-large-70 {\n    margin-left: 70%;\n}\n.md-flex-large-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-large-75 {\n    margin-left: 75%;\n}\n.md-flex-large-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-large-80 {\n    margin-left: 80%;\n}\n.md-flex-large-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-large-85 {\n    margin-left: 85%;\n}\n.md-flex-large-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-large-90 {\n    margin-left: 90%;\n}\n.md-flex-large-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-large-95 {\n    margin-left: 95%;\n}\n.md-flex-large-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-large-100 {\n    margin-left: 100%;\n}\n.md-align-large-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-large-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-large-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-large {\n    display: none;\n}\n}\n@media (max-width: 1264px) {\n.md-row-medium {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-medium {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-medium {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-medium-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-medium-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-medium-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-medium-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-medium-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-medium-5 {\n    margin-left: 5%;\n}\n.md-flex-medium-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-medium-10 {\n    margin-left: 10%;\n}\n.md-flex-medium-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-medium-15 {\n    margin-left: 15%;\n}\n.md-flex-medium-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-medium-20 {\n    margin-left: 20%;\n}\n.md-flex-medium-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-medium-25 {\n    margin-left: 25%;\n}\n.md-flex-medium-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-medium-30 {\n    margin-left: 30%;\n}\n.md-flex-medium-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-medium-35 {\n    margin-left: 35%;\n}\n.md-flex-medium-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-medium-40 {\n    margin-left: 40%;\n}\n.md-flex-medium-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-medium-45 {\n    margin-left: 45%;\n}\n.md-flex-medium-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-medium-50 {\n    margin-left: 50%;\n}\n.md-flex-medium-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-medium-55 {\n    margin-left: 55%;\n}\n.md-flex-medium-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-medium-60 {\n    margin-left: 60%;\n}\n.md-flex-medium-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-medium-65 {\n    margin-left: 65%;\n}\n.md-flex-medium-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-medium-70 {\n    margin-left: 70%;\n}\n.md-flex-medium-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-medium-75 {\n    margin-left: 75%;\n}\n.md-flex-medium-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-medium-80 {\n    margin-left: 80%;\n}\n.md-flex-medium-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-medium-85 {\n    margin-left: 85%;\n}\n.md-flex-medium-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-medium-90 {\n    margin-left: 90%;\n}\n.md-flex-medium-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-medium-95 {\n    margin-left: 95%;\n}\n.md-flex-medium-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-medium-100 {\n    margin-left: 100%;\n}\n.md-align-medium-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-medium-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-medium-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-medium {\n    display: none;\n}\n}\n@media (max-width: 944px) {\n.md-row-small {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-small {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-small {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-small-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-small-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-small-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-small-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-small-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-small-5 {\n    margin-left: 5%;\n}\n.md-flex-small-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-small-10 {\n    margin-left: 10%;\n}\n.md-flex-small-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-small-15 {\n    margin-left: 15%;\n}\n.md-flex-small-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-small-20 {\n    margin-left: 20%;\n}\n.md-flex-small-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-small-25 {\n    margin-left: 25%;\n}\n.md-flex-small-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-small-30 {\n    margin-left: 30%;\n}\n.md-flex-small-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-small-35 {\n    margin-left: 35%;\n}\n.md-flex-small-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-small-40 {\n    margin-left: 40%;\n}\n.md-flex-small-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-small-45 {\n    margin-left: 45%;\n}\n.md-flex-small-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-small-50 {\n    margin-left: 50%;\n}\n.md-flex-small-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-small-55 {\n    margin-left: 55%;\n}\n.md-flex-small-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-small-60 {\n    margin-left: 60%;\n}\n.md-flex-small-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-small-65 {\n    margin-left: 65%;\n}\n.md-flex-small-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-small-70 {\n    margin-left: 70%;\n}\n.md-flex-small-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-small-75 {\n    margin-left: 75%;\n}\n.md-flex-small-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-small-80 {\n    margin-left: 80%;\n}\n.md-flex-small-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-small-85 {\n    margin-left: 85%;\n}\n.md-flex-small-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-small-90 {\n    margin-left: 90%;\n}\n.md-flex-small-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-small-95 {\n    margin-left: 95%;\n}\n.md-flex-small-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-small-100 {\n    margin-left: 100%;\n}\n.md-align-small-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-small-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-small-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-small {\n    display: none;\n}\n}\n@media (max-width: 600px) {\n.md-row-xsmall {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-xsmall {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-xsmall {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-xsmall-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-xsmall-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-xsmall-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-xsmall-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-xsmall-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-xsmall-5 {\n    margin-left: 5%;\n}\n.md-flex-xsmall-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-xsmall-10 {\n    margin-left: 10%;\n}\n.md-flex-xsmall-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-xsmall-15 {\n    margin-left: 15%;\n}\n.md-flex-xsmall-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-xsmall-20 {\n    margin-left: 20%;\n}\n.md-flex-xsmall-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-xsmall-25 {\n    margin-left: 25%;\n}\n.md-flex-xsmall-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-xsmall-30 {\n    margin-left: 30%;\n}\n.md-flex-xsmall-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-xsmall-35 {\n    margin-left: 35%;\n}\n.md-flex-xsmall-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-xsmall-40 {\n    margin-left: 40%;\n}\n.md-flex-xsmall-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-xsmall-45 {\n    margin-left: 45%;\n}\n.md-flex-xsmall-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-xsmall-50 {\n    margin-left: 50%;\n}\n.md-flex-xsmall-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-xsmall-55 {\n    margin-left: 55%;\n}\n.md-flex-xsmall-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-xsmall-60 {\n    margin-left: 60%;\n}\n.md-flex-xsmall-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-xsmall-65 {\n    margin-left: 65%;\n}\n.md-flex-xsmall-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-xsmall-70 {\n    margin-left: 70%;\n}\n.md-flex-xsmall-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-xsmall-75 {\n    margin-left: 75%;\n}\n.md-flex-xsmall-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-xsmall-80 {\n    margin-left: 80%;\n}\n.md-flex-xsmall-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-xsmall-85 {\n    margin-left: 85%;\n}\n.md-flex-xsmall-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-xsmall-90 {\n    margin-left: 90%;\n}\n.md-flex-xsmall-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-xsmall-95 {\n    margin-left: 95%;\n}\n.md-flex-xsmall-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-xsmall-100 {\n    margin-left: 100%;\n}\n.md-align-xsmall-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-xsmall-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-xsmall-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-xsmall {\n    display: none;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-list {\n  margin: 0;\n  padding: 8px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  position: relative;\n  list-style: none;\n}\n.md-list.md-dense {\n    padding: 4px 0;\n}\n.md-list.md-dense .md-list-item.md-inset .md-list-item-container {\n      padding-left: 72px;\n}\n.md-list.md-dense .md-list-item .md-list-item-container {\n      min-height: 40px;\n      font-size: 13px;\n}\n.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child {\n        margin-right: 24px;\n}\n.md-list.md-dense .md-avatar {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      min-height: 32px;\n}\n.md-list.md-dense .md-list-item-expand {\n      min-height: 40px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-list-item-container {\n    min-height: 60px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-avatar {\n    width: 36px;\n    min-width: 36px;\n    height: 36px;\n    min-height: 36px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child {\n      margin-right: 20px;\n}\n.md-list.md-double-line.md-dense .md-list-text-container > :nth-child(1) {\n    font-size: 13px;\n}\n.md-list.md-double-line.md-dense .md-list-text-container > :nth-child(2) {\n    font-size: 13px;\n}\n.md-list.md-double-line .md-list-item .md-list-item-container {\n    min-height: 72px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container {\n    min-height: 76px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar {\n    width: 36px;\n    min-width: 36px;\n    height: 36px;\n    min-height: 36px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child {\n      margin-right: 20px;\n}\n.md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(1) {\n    font-size: 13px;\n}\n.md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(2) {\n    font-size: 13px;\n}\n.md-list.md-triple-line .md-list-item .md-list-item-container {\n    min-height: 88px;\n}\n.md-list.md-triple-line .md-avatar {\n    margin: 0;\n}\n.md-list.md-triple-line .md-list-item-container {\n    -ms-flex-align: start;\n        align-items: flex-start;\n}\n.md-list .md-subheader.md-inset {\n    padding-left: 72px;\n}\n.md-list > .md-subheader:first-of-type {\n    margin-top: -8px;\n}\n.md-list-item {\n  height: auto;\n  position: relative;\n}\n.md-list-item.md-inset .md-list-item-container {\n    padding-left: 72px;\n}\n.md-list-item .md-list-item-holder {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex: 1;\n        flex: 1;\n}\n.md-list-item .md-list-item-holder > .md-ink-ripple {\n      border-radius: 0;\n}\n.md-list-item .md-list-item-holder > .md-icon:first-child {\n      margin-right: 32px;\n}\n.md-list-item .md-list-item-holder .md-avatar:first-child {\n      margin-right: 16px;\n}\n.md-list-item .md-list-item-holder .md-list-action {\n      margin: 0 -2px 0 0;\n}\n.md-list-item .md-list-item-holder .md-list-action:nth-child(3) {\n        margin: 0 -2px 0 16px;\n}\n.md-list-item .md-list-item-container {\n    width: 100%;\n    min-height: 48px;\n    margin: 0;\n    padding: 0 16px;\n    position: relative;\n    border-radius: 0;\n    font-size: 16px;\n    font-weight: 400;\n    text-align: left;\n    text-transform: none;\n}\n.md-list-item .md-divider {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n.md-list-item .md-icon,\n  .md-list-item .md-avatar {\n    margin: 0;\n}\n.md-list-item .md-icon:first-of-type + *,\n    .md-list-item .md-avatar:first-of-type + * {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.md-list-item .md-avatar {\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n.md-list-item .md-icon {\n    color: rgba(0, 0, 0, 0.54);\n}\n.md-list-item .md-ink-ripple {\n    border-radius: 0;\n}\n.md-list-item-expand {\n  min-height: 48px;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  overflow: hidden;\n}\n.md-list-item-expand:before, .md-list-item-expand:after {\n    height: 1px;\n    position: absolute;\n    right: 0;\n    left: 0;\n    z-index: 3;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    content: \" \";\n}\n.md-list-item-expand:before {\n    top: 0;\n}\n.md-list-item-expand:after {\n    bottom: 0;\n}\n.md-list-item-expand.md-active {\n    position: relative;\n}\n.md-list-item-expand.md-active:before, .md-list-item-expand.md-active:after {\n      background-color: rgba(0, 0, 0, 0.12);\n}\n.md-list-item-expand.md-active:first-of-type:before {\n      background: none;\n}\n.md-list-item-expand.md-active:last-of-type:after {\n      background: none;\n}\n.md-list-item-expand.md-active > .md-list-item-container .md-list-expand-indicator {\n      transform: rotateZ(180deg) translate3D(0, 0, 0);\n}\n.md-list-item-expand.md-active > .md-list-expand {\n      margin-bottom: 0 !important;\n}\n.md-list-item-expand > .md-list-item-container > .md-list-item-holder {\n    position: relative;\n    z-index: 2;\n}\n.md-list-item-expand .md-expansion-indicator,\n  .md-list-item-expand .md-list-item-container,\n  .md-list-item-expand .md-icon {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-list-item-expand .md-list-expand {\n    position: relative;\n    z-index: 1;\n    transform: translate3D(0, 0, 0);\n    will-change: margin-bottom;\n    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-list-item-expand .md-list-expand.md-transition-off {\n      transition: none !important;\n}\n.md-list-item-expand .md-list-expand .md-list {\n      padding: 0;\n}\n.md-list-text-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -ms-flex: 1;\n      flex: 1;\n  overflow: hidden;\n  line-height: 1.25em;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.md-list-text-container > :nth-child(1) {\n    font-size: 16px;\n}\n.md-list-text-container > :nth-child(2),\n  .md-list-text-container > :nth-child(3) {\n    margin: 0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 14px;\n}\n.md-list-text-container > :nth-child(2):not(:last-child) {\n    color: rgba(0, 0, 0, 0.87);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-menu {\n  display: inline-block;\n}\n.md-menu-content {\n  width: 168px;\n  min-width: 84px;\n  max-width: 392px;\n  min-height: 64px;\n  max-height: calc(100vh - 32px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  z-index: 120;\n  transform: scale(0.9, 0.85) translateZ(0);\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  opacity: 0;\n  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.25s cubic-bezier(0.55, 0, 0.55, 0.2), margin 0.2s cubic-bezier(0.55, 0, 0.55, 0.2), transform 0s 0.25s cubic-bezier(0.55, 0, 0.55, 0.2);\n  will-change: transform, opacity, width;\n}\n.md-menu-content.md-direction-bottom-right {\n    margin-top: -20px;\n    margin-left: -8px;\n    transform-origin: top left;\n}\n.md-menu-content.md-direction-bottom-right.md-active {\n      margin-top: -11px;\n}\n.md-menu-content.md-direction-bottom-left {\n    margin-top: -20px;\n    margin-left: 8px;\n    transform-origin: top right;\n}\n.md-menu-content.md-direction-bottom-left.md-active {\n      margin-top: -11px;\n}\n.md-menu-content.md-direction-top-right {\n    margin-top: 20px;\n    margin-left: -8px;\n    transform-origin: bottom left;\n}\n.md-menu-content.md-direction-top-right.md-active {\n      margin-top: 11px;\n}\n.md-menu-content.md-direction-top-left {\n    margin-top: 20px;\n    margin-left: 8px;\n    transform-origin: bottom right;\n}\n.md-menu-content.md-direction-top-left.md-active {\n      margin-top: 11px;\n}\n.md-menu-content.md-align-trigger {\n    margin: 0;\n}\n.md-menu-content.md-size-1 {\n    width: 84px;\n}\n.md-menu-content.md-size-2 {\n    width: 112px;\n}\n.md-menu-content.md-size-3 {\n    width: 168px;\n}\n.md-menu-content.md-size-4 {\n    width: 224px;\n}\n.md-menu-content.md-size-5 {\n    width: 280px;\n}\n.md-menu-content.md-size-6 {\n    width: 336px;\n}\n.md-menu-content.md-size-7 {\n    width: 392px;\n}\n.md-menu-content.md-active {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1) translateZ(0);\n    transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.25s 0.05s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-content.md-active .md-list {\n      opacity: 1;\n      transition: opacity 0.2s 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-content .md-list {\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-item {\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1.2em;\n}\n.md-menu-item[disabled] {\n    cursor: default;\n}\n.md-menu-item .md-list-item-holder {\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-progress {\n  width: 100%;\n  height: 4px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-progress.md-indeterminate .md-progress-track {\n    right: 0;\n}\n.md-progress.md-indeterminate .md-progress-track:before, .md-progress.md-indeterminate .md-progress-track:after {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      will-change: left, right;\n      content: '';\n}\n.md-progress.md-indeterminate .md-progress-track:before {\n      animation: progress-indeterminate 2.3s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.md-progress.md-indeterminate .md-progress-track:after {\n      animation: progress-indeterminate-short 2.3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      animation-delay: 1.15s;\n}\n.md-progress.md-progress-enter, .md-progress.md-progress-leave-active {\n    opacity: 0;\n    transform: scaleY(0) translateZ(0);\n}\n.md-progress.md-progress-enter-active {\n    transform: scaleY(1) translateZ(0);\n}\n.md-progress-track {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@keyframes progress-indeterminate {\n0% {\n    right: 100%;\n    left: -35%;\n}\n60% {\n    right: -100%;\n    left: 100%;\n}\n100% {\n    right: -100%;\n    left: 100%;\n}\n}\n@keyframes progress-indeterminate-short {\n0% {\n    right: 100%;\n    left: -200%;\n}\n60% {\n    right: -8%;\n    left: 107%;\n}\n100% {\n    right: -8%;\n    left: 107%;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-radio {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-radio .md-radio-container {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    border-radius: 50%;\n    border: 2px solid rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-radio .md-radio-container:after {\n      position: absolute;\n      top: 3px;\n      right: 3px;\n      bottom: 3px;\n      left: 3px;\n      border-radius: 50%;\n      opacity: 0;\n      transform: scale3D(0.38, 0.38, 1);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-radio .md-radio-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-radio .md-radio-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-radio .md-radio-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-radio .md-radio-label {\n    height: 20px;\n    padding-left: 8px;\n    line-height: 20px;\n}\n.md-radio.md-checked .md-radio-container:after {\n  opacity: 1;\n  transform: scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-select {\n  width: 100%;\n  min-width: 128px;\n  height: 32px;\n  position: relative;\n}\n.md-select:focus {\n    outline: none;\n}\n.md-select:after {\n    margin-top: 2px;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%) scaleY(0.45) scaleX(0.85);\n    transition: all 0.15s linear;\n    content: \"\\25BC\";\n}\n.md-select.md-active .md-select-menu {\n    top: -8px;\n    pointer-events: auto;\n    opacity: 1;\n    transform: translateY(-8px) scale3D(1, 1, 1);\n    transform-origin: center top;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .25s;\n    transition-property: opacity, transform, top;\n}\n.md-select.md-active .md-select-menu > * {\n      opacity: 1;\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      transition-duration: .15s;\n      transition-delay: .1s;\n}\n.md-select.md-disabled {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    user-drag: none;\n}\n.md-select select {\n    position: absolute;\n    left: -999em;\n}\n.md-select .md-menu {\n    width: 100%;\n    height: 32px;\n    display: block;\n    position: relative;\n}\n.md-select .md-select-value {\n    width: 100%;\n    height: 32px;\n    padding-right: 24px;\n    display: block;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    z-index: 2;\n    font-size: 16px;\n    line-height: 33px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-select .md-subheader {\n    color: rgba(117, 117, 117, 0.87);\n    text-transform: uppercase;\n}\n.md-select .md-subheader:first-child {\n      margin-top: -8px;\n}\n.md-select-content {\n  width: auto;\n  max-height: 256px;\n}\n.md-select-content.md-direction-bottom-right {\n    margin-top: -15px;\n    margin-left: -16px;\n}\n.md-select-content .md-menu-item .md-list-item-holder {\n    overflow: visible;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-select-content.md-multiple .md-checkbox {\n    margin: 0;\n}\n.md-select-content.md-multiple .md-checkbox-label {\n    padding-left: 16px;\n    cursor: pointer;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-sidenav.md-left .md-sidenav-content {\n  left: 0;\n  transform: translate3D(-100%, 0, 0);\n}\n.md-sidenav.md-right .md-sidenav-content {\n  right: 0;\n  transform: translate3D(100%, 0, 0);\n}\n.md-sidenav.md-fixed .md-sidenav-content,\n.md-sidenav.md-fixed .md-sidenav-backdrop {\n  position: fixed;\n}\n.md-sidenav .md-sidenav-content {\n  width: 304px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  pointer-events: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n  will-change: transform;\n}\n.md-sidenav .md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition-property: opacity;\n  will-change: opacity;\n}\n.md-sidenav.md-active .md-sidenav-content {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n  pointer-events: auto;\n  transform: translate3D(0, 0, 0);\n}\n.md-sidenav.md-active .md-sidenav-backdrop {\n  opacity: 1;\n  pointer-events: auto;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n.md-snackbar {\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 120;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: margin-top, margin-bottom;\n}\n.md-snackbar.md-position-top-center, .md-snackbar.md-position-bottom-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-snackbar.md-position-top-right, .md-snackbar.md-position-bottom-right {\n    margin-right: 24px;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-snackbar.md-position-top-left, .md-snackbar.md-position-bottom-left {\n    margin-left: 24px;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-snackbar.md-position-top-right, .md-snackbar.md-position-top-left, .md-snackbar.md-position-top-center {\n    margin-top: 24px;\n}\n.md-snackbar.md-position-bottom-right, .md-snackbar.md-position-bottom-left {\n    margin-bottom: 24px;\n}\n.md-snackbar.md-position-top-center, .md-snackbar.md-position-top-right, .md-snackbar.md-position-top-left {\n    top: 0;\n}\n.md-snackbar.md-position-top-center .md-snackbar-container, .md-snackbar.md-position-top-right .md-snackbar-container, .md-snackbar.md-position-top-left .md-snackbar-container {\n      transform: translate3D(0, calc(-100% - 24px), 0);\n}\n.md-snackbar.md-position-bottom-center, .md-snackbar.md-position-bottom-right, .md-snackbar.md-position-bottom-left {\n    bottom: 0;\n}\n.md-snackbar.md-position-bottom-center .md-snackbar-container, .md-snackbar.md-position-bottom-right .md-snackbar-container, .md-snackbar.md-position-bottom-left .md-snackbar-container {\n      transform: translate3D(0, calc(100% + 24px), 0);\n}\n.md-snackbar.md-active .md-snackbar-container {\n    transform: translate3D(0, 0, 0);\n}\n.md-snackbar.md-active .md-snackbar-content {\n    opacity: 1;\n    transition: opacity 0.4s 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@media (max-width: 600px) {\n.md-snackbar {\n      margin: 0 !important;\n}\n}\n.md-snackbar .md-snackbar-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n    will-change: opacity;\n}\n.md-snackbar .md-button {\n    min-width: 64px;\n    margin: -8px -16px;\n}\n.md-snackbar .md-button:last-child {\n      margin-left: 48px;\n}\n.md-snackbar-container {\n  width: auto;\n  min-width: 288px;\n  max-width: 568px;\n  min-height: 48px;\n  padding: 14px 24px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: #323232;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #fff;\n  font-size: 14px;\n}\n@media (max-width: 600px) {\n.md-snackbar-container {\n      width: 100%;\n      max-width: 100%;\n      border-radius: 0;\n}\n}\n.md-has-toast-top-right .md-fab.md-fab-top-right {\n  transform: translate3D(0, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-right .md-fab.md-fab-top-right {\n      transform: translate3D(0, 48px, 0);\n}\n}\n.md-has-toast-top-center .md-fab.md-fab-top-center {\n  transform: translate3D(-50%, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-center .md-fab.md-fab-top-center {\n      transform: translate3D(-50%, 48px, 0);\n}\n}\n.md-has-toast-top-left .md-fab.md-fab-top-left {\n  transform: translate3D(0, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-left .md-fab.md-fab-top-left {\n      transform: translate3D(0, 48px, 0);\n}\n}\n.md-has-toast-bottom-right .md-fab.md-fab-bottom-right {\n  transform: translate3D(0, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-right .md-fab.md-fab-bottom-right {\n      transform: translate3D(0, -48px, 0);\n}\n}\n.md-has-toast-bottom-center .md-fab.md-fab-bottom-center {\n  transform: translate3D(-50%, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-center .md-fab.md-fab-bottom-center {\n      transform: translate3D(-50%, -48px, 0);\n}\n}\n.md-has-toast-bottom-left .md-fab.md-fab-bottom-left {\n  transform: translate3D(0, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-left .md-fab.md-fab-bottom-left {\n      transform: translate3D(0, -48px, 0);\n}\n}\n@media (max-width: 600px) {\n.md-has-toast .md-fab.md-fab-top-right,\n  .md-has-toast .md-fab.md-fab-top-center,\n  .md-has-toast .md-fab.md-fab-top-left {\n    transform: translate3D(0, 44px, 0);\n}\n}\n@media (max-width: 600px) {\n.md-has-toast .md-fab.md-fab-bottom-right,\n  .md-has-toast .md-fab.md-fab-bottom-center,\n  .md-has-toast .md-fab.md-fab-bottom-left {\n    transform: translate3D(0, -44px, 0);\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-spinner {\n  display: inline-block;\n  position: relative;\n  pointer-events: none;\n  will-change: transform, opacity;\n}\n.md-spinner.md-indeterminate .md-spinner-draw {\n    animation: spinner-rotate 1.9s linear infinite;\n    transform: rotate(0deg) translateZ(0);\n}\n.md-spinner.md-indeterminate .md-spinner-path {\n    stroke-dasharray: 2, 200;\n    animation: spinner-dash 1.425s ease-in-out infinite;\n}\n.md-spinner.md-spinner-leave-active {\n    opacity: 0;\n    transform: scale(0.8) translateZ(0);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active {\n    transition-duration: 2s;\n}\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw {\n      animation: spinner-initial-rotate 1.98s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.md-spinner-draw {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: rotate(270deg) translateZ(0);\n  transform-origin: center center;\n  will-change: transform, opacity;\n}\n.md-spinner-path {\n  fill: none;\n  stroke-dashoffset: 0;\n  stroke-miterlimit: 10;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@keyframes spinner-rotate {\nto {\n    transform: rotate(360deg) translateZ(0);\n}\n}\n@keyframes spinner-initial-rotate {\n0% {\n    opacity: 0;\n    transform: rotate(-90deg) translateZ(0);\n}\n20% {\n    opacity: 1;\n}\n100% {\n    transform: rotate(270deg) translateZ(0);\n}\n}\n@keyframes spinner-dash {\n0% {\n    stroke-dasharray: 2, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n}\n100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-subheader {\n  min-height: 48px;\n  padding: 0 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-switch {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-switch .md-switch-container {\n    width: 34px;\n    height: 14px;\n    position: relative;\n    border-radius: 14px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    background-color: rgba(0, 0, 0, 0.38);\n}\n.md-switch .md-switch-container .md-switch-thumb {\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      background-color: #fafafa;\n      border-radius: 50%;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      transition: all 0.15s linear;\n}\n.md-switch .md-switch-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-switch .md-switch-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-switch .md-switch-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-switch .md-switch-container .md-switch-holder {\n      width: 40px;\n      height: 40px;\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      z-index: 2;\n      background: none;\n      border: none;\n      transform: translate(-50%, -50%);\n}\n.md-switch .md-switch-container .md-switch-holder:focus {\n        outline: none;\n}\n.md-switch .md-switch-label {\n    height: 14px;\n    padding-left: 8px;\n    line-height: 14px;\n}\n.md-switch.md-dragging .md-switch-thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.md-switch.md-disabled .md-switch-thumb {\n  cursor: default;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  overflow-x: auto;\n}\n.md-table.md-transition-off .md-table-cell,\n  .md-table.md-transition-off .md-checkbox .md-checkbox-container,\n  .md-table.md-transition-off .md-checkbox .md-checkbox-container:after {\n    transition: none !important;\n}\n.md-table table {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n}\n.md-table tbody .md-table-row {\n    border-top: 1px solid #e0e0e0;\n}\n.md-table tbody .md-table-row.md-selected .md-table-cell {\n      background-color: #f5f5f5;\n}\n.md-table tbody .md-table-row:hover .md-table-cell {\n      background-color: #eee;\n}\n.md-table .md-table-head {\n    padding: 0;\n    position: relative;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    line-height: 16px;\n    text-align: left;\n}\n.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text {\n      padding-right: 24px;\n}\n.md-table .md-table-head.md-numeric {\n      text-align: right;\n}\n.md-table .md-table-head .md-icon {\n      width: 16px;\n      min-width: 16px;\n      height: 16px;\n      min-height: 16px;\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-table .md-table-head .md-icon:not(.md-sortable-icon) {\n        margin: 0 4px;\n}\n.md-table .md-table-head .md-icon:first-child {\n        margin-left: 0;\n}\n.md-table .md-table-head .md-icon:last-child {\n        margin-right: 0;\n}\n.md-table .md-table-head-container {\n    height: 56px;\n    padding: 14px 0;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-table .md-table-head-text {\n    height: 28px;\n    padding-right: 32px;\n    padding-left: 24px;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    line-height: 28px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-table .md-sortable {\n    cursor: pointer;\n}\n.md-table .md-sortable:first-of-type .md-sortable-icon {\n      left: auto;\n      right: 10px;\n}\n.md-table .md-sortable:hover, .md-table .md-sortable.md-sorted {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-sortable:hover .md-sortable-icon, .md-table .md-sortable.md-sorted .md-sortable-icon {\n        opacity: 1;\n}\n.md-table .md-sortable.md-sorted .md-sortable-icon {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-sortable.md-sorted-descending .md-sortable-icon {\n      transform: translateY(-50%) rotate(180deg);\n}\n.md-table .md-sortable .md-sortable-icon {\n      position: absolute;\n      top: 50%;\n      left: 2px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transform: translateY(-50%);\n      opacity: 0;\n      color: rgba(0, 0, 0, 0.38);\n}\n.md-table .md-sortable .md-ink-ripple {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-table-cell {\n    height: 48px;\n    position: relative;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 13px;\n    line-height: 18px;\n}\n.md-table .md-table-cell:last-child .md-table-cell-container {\n      padding-right: 24px;\n}\n.md-table .md-table-cell.md-numeric {\n      text-align: right;\n}\n.md-table .md-table-cell.md-numeric .md-table-cell-container {\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.md-table .md-table-cell.md-has-action .md-table-cell-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-table .md-table-cell .md-table-cell-container {\n      padding: 6px 32px 6px 24px;\n}\n.md-table .md-table-cell .md-button {\n      width: 36px;\n      min-width: 36px;\n      height: 36px;\n      min-height: 36px;\n}\n.md-table .md-table-cell .md-button:last-child {\n        margin: 0 -10px 0 0;\n}\n.md-table .md-table-cell .md-button .md-icon {\n        width: 18px;\n        min-width: 18px;\n        height: 18px;\n        min-height: 18px;\n        margin: 0;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 18px;\n}\n.md-table .md-table-selection {\n    width: 60px;\n    position: relative;\n    vertical-align: middle;\n}\n.md-table .md-table-selection + .md-table-cell .md-table-cell-container,\n    .md-table .md-table-selection + .md-table-head .md-table-head-container .md-table-head-text {\n      padding-left: 8px;\n}\n.md-table .md-table-selection .md-table-cell-container {\n      padding-right: 16px;\n      padding-left: 24px;\n}\n.md-table .md-table-selection .md-checkbox {\n      margin: 0;\n}\n.md-table .md-table-selection .md-checkbox-container {\n      width: 18px;\n      height: 18px;\n      margin-top: 1px;\n}\n.md-table .md-table-selection .md-checkbox-container:after {\n        top: -1px;\n        left: 4px;\n}\n.md-table .md-select {\n    min-width: 84px;\n}\n.md-table .md-select-value,\n  .md-table .md-option {\n    font-size: 13px;\n}\n.md-table-edit-trigger {\n  display: inline-block;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-table-edit-trigger.md-edited {\n    color: rgba(0, 0, 0, 0.87);\n}\n.md-table-dialog {\n  max-height: 0;\n  margin: 0;\n  padding: 0 24px 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 24px;\n  z-index: 60;\n  overflow: hidden;\n  pointer-events: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), max-height 0s 0.5s;\n  transition-duration: .3s;\n  transform: translate3D(0, -8px, 0);\n}\n.md-table-dialog.md-active {\n    max-height: 400px;\n    pointer-events: auto;\n    transform: translate3D(#000);\n    opacity: 1;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .3s;\n}\n.md-table-dialog.md-large {\n    padding: 12px 24px 2px;\n}\n.md-table-dialog .md-input-container {\n    margin-top: 0;\n    margin-bottom: 16px;\n}\n.md-table-dialog .md-input-container.md-input-placeholder input {\n      font-size: 13px;\n}\n.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder {\n        font-size: 13px;\n}\n.md-table-dialog .md-char-counter {\n    font-size: 13.5px;\n    color: rgba(0, 0, 0, 0.54);\n}\n.md-table-dialog .md-button {\n    min-width: 64px;\n}\n.md-table-card {\n  overflow: visible;\n}\n.md-table-card .md-toolbar {\n    padding-left: 16px;\n    background-color: #fff;\n}\n.md-table-card .md-title {\n    -ms-flex: 1;\n        flex: 1;\n    font-size: 20px;\n}\n.md-table-card .md-table-pagination {\n    height: 56px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    border-top: 1px solid #e0e0e0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n}\n.md-table-card .md-table-pagination .md-table-pagination-previous {\n      margin-right: 2px;\n      margin-left: 18px;\n}\n.md-table-card .md-table-pagination .md-select {\n      width: auto;\n      min-width: 36px;\n      margin: 0 32px;\n}\n.md-table-card .md-table-pagination .md-select:after {\n        margin-top: 0;\n}\n.md-table-card .md-table-pagination .md-select .md-select-value {\n        padding: 0;\n        border: none;\n        font-size: 13px;\n}\n.md-table-card .md-table-pagination .md-button:not([disabled]) {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table-card .md-table-pagination .md-button[disabled] .md-icon {\n      color: rgba(0, 0, 0, 0.26);\n}\n.md-pagination-select.md-direction-bottom-right {\n  margin-top: -16px;\n}\n.md-pagination-select .md-list-item-holder {\n  font-size: 13px;\n}\n.md-table-alternate-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s;\n}\n.md-table-alternate-header.md-active {\n    pointer-events: auto;\n    opacity: 1;\n    transform: translate3D(#000);\n}\n.md-table-alternate-header .md-counter {\n    margin-left: 8px;\n    -ms-flex: 1;\n        flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-tabs {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  position: relative;\n}\n.md-tabs.md-transition-off * {\n    transition: none !important;\n}\n.md-tabs.md-dynamic-height .md-tabs-content {\n    transition: height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tabs-navigation {\n    height: 48px;\n    min-height: 48px;\n    position: relative;\n    z-index: 1;\n    display: -ms-flexbox;\n    display: flex;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label {\n      min-height: 72px;\n}\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon {\n        margin-bottom: 10px;\n}\n.md-tabs .md-tabs-navigation.md-centered {\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.md-tabs .md-tabs-navigation.md-fixed .md-tab-header {\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-tabs .md-tabs-navigation.md-right {\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.md-tabs .md-tab-header {\n    min-width: 72px;\n    max-width: 264px;\n    margin: 0;\n    padding: 0 12px;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    border: 0;\n    background: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: uppercase;\n}\n.md-tabs .md-tab-header.md-disabled {\n      cursor: default;\n      pointer-events: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      -webkit-user-drag: none;\n}\n.md-tabs .md-tab-header-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.md-tabs .md-tab-header-container .md-icon {\n      margin: 0;\n}\n.md-tabs .md-tab-indicator {\n    height: 2px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translate3D(0, 0, 0);\n}\n.md-tabs .md-tab-indicator.md-transition-off {\n      transition: none !important;\n}\n.md-tabs .md-tab-indicator.md-to-right {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), right 0.15s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-tabs .md-tab-indicator.md-to-left {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.15s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-tabs .md-tabs-content {\n    width: 100%;\n    height: 0;\n    position: relative;\n    overflow: hidden;\n}\n.md-tabs .md-tabs-wrapper {\n    width: 9999em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transform: translate3d(0, 0, 0);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tab {\n    padding: 16px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-toolbar {\n  min-height: 64px;\n  padding: 0 8px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate3D(0, 0, 0);\n}\n.md-toolbar.md-dense {\n    min-height: 48px;\n}\n.md-toolbar.md-dense.md-medium {\n      min-height: 72px;\n}\n.md-toolbar.md-dense.md-large {\n      min-height: 96px;\n}\n.md-toolbar.md-dense .md-toolbar-container {\n      height: 48px;\n}\n.md-toolbar.md-medium {\n    min-height: 88px;\n}\n.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child {\n      margin-left: 56px;\n}\n.md-toolbar.md-large {\n    min-height: 128px;\n    -ms-flex-line-pack: inherit;\n        align-content: inherit;\n}\n.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child {\n      margin-left: 56px;\n}\n.md-toolbar.md-account-header {\n    min-height: 164px;\n}\n.md-toolbar.md-account-header .md-ink-ripple {\n      color: #fff;\n}\n.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]) {\n      background-color: rgba(255, 255, 255, 0.12);\n}\n.md-toolbar.md-account-header .md-avatar-list {\n      margin: 16px 0 8px;\n}\n.md-toolbar.md-account-header .md-avatar-list .md-list-item-container {\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.md-toolbar.md-account-header .md-avatar-list .md-avatar + .md-avatar {\n        margin-left: 16px;\n}\n.md-toolbar .md-toolbar-container {\n    width: 100%;\n    height: 64px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n.md-toolbar .md-toolbar-container > .md-button:first-child {\n      margin-left: 0;\n      margin-right: 16px;\n}\n.md-toolbar .md-toolbar-container > .md-button + .md-button {\n      margin-left: 0;\n}\n.md-toolbar > .md-button:first-child {\n    margin-left: 0;\n    margin-right: 16px;\n}\n.md-toolbar > .md-button + .md-button {\n    margin-left: 0;\n}\n.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab) {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.md-toolbar .md-title {\n    margin: 0;\n    font-size: 20px;\n    font-weight: 400;\n}\n.md-toolbar .md-title:first-child {\n      margin-left: 8px;\n}\n.md-toolbar .md-list {\n    padding: 0;\n    margin: 0 -8px;\n    -ms-flex: 1;\n        flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-tooltip {\n  height: 20px;\n  padding: 0 8px;\n  position: fixed;\n  z-index: 200;\n  pointer-events: none;\n  background-color: rgba(97, 97, 97, 0.87);\n  border-radius: 2px;\n  opacity: 0;\n  transform-origin: center top;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s;\n  transition-delay: 0s;\n  color: #fff;\n  font-family: Roboto, \"Noto Sans\", Noto, sans-serif;\n  font-size: 10px;\n  line-height: 20px;\n  text-transform: none;\n  white-space: nowrap;\n}\n.md-tooltip.md-active {\n    opacity: 1;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: .3s;\n}\n.md-tooltip:not(.md-active) {\n    transition-delay: 0s !important;\n}\n.md-tooltip.md-transition-off {\n    transition: none !important;\n}\n.md-tooltip.md-tooltip-top {\n    margin-top: -14px;\n    transform: translate(-50%, 8px);\n}\n.md-tooltip.md-tooltip-top.md-active {\n      transform: translate(-50%, 0);\n}\n.md-tooltip.md-tooltip-right {\n    margin-left: 14px;\n    transform: translate(-8px, 50%);\n}\n.md-tooltip.md-tooltip-right.md-active {\n      transform: translate(0, 50%);\n}\n.md-tooltip.md-tooltip-bottom {\n    margin-top: 14px;\n    transform: translate(-50%, -8px);\n}\n.md-tooltip.md-tooltip-bottom.md-active {\n      transform: translate(-50%, 0);\n}\n.md-tooltip.md-tooltip-left {\n    margin-left: -14px;\n    transform: translate(8px, 50%);\n}\n.md-tooltip.md-tooltip-left.md-active {\n      transform: translate(0, 50%);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-whiteframe {\n  position: relative;\n  z-index: 1;\n}\n.md-whiteframe-1dp {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-2dp {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-3dp {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-4dp {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-5dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-6dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-7dp {\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-8dp {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-9dp {\n  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-10dp {\n  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-11dp {\n  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-12dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-13dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-14dp {\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-15dp {\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-16dp {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-17dp {\n  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-18dp {\n  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-19dp {\n  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-20dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-21dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-22dp {\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-23dp {\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-24dp {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n/*# sourceMappingURL=vue-material.css.map*/", ""]);
	
	// exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(105)
	
	/* template */
	var __vue_template__ = __webpack_require__(110)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(106);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _toolbar = __webpack_require__(107);
	
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
/* 106 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(108)
	
	/* template */
	var __vue_template__ = __webpack_require__(109)
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
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\toolbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-221f72bc"
	if (__vue_options__.functional) {console.error("[vue-loader] toolbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
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
/* 109 */
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
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/p')
	      }
	    }
	  }, [_vm._v("\n            Account\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/u')
	      }
	    }
	  }, [_vm._v("\n            Dashboard\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/files')
	      }
	    }
	  }, [_vm._v("\n            My Files\n          ")]), _vm._v(" "), _c('md-divider'), _vm._v(" "), _c('md-menu-item', {
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
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/p"
	    }
	  }, [_vm._v("Profile")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/u"
	    }
	  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/files"
	    }
	  }, [_vm._v("Files")])], 1)] : _c('md-list-item', {
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
	  }, [_vm._v("\n                  Donate\n                ")])], 1)], 1)], 1)], 2)], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 110 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDViYWNmMmNiMzkyZGQ3N2E1MWQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlPzgxOGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzJkMzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vL2xhbmRpbmcudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT85ZWZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlP2FmM2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/NzZiNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/ZGFhNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/YjBmNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/OWI4NyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/ZDQ2YyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT9iZjE3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/NmU4MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlIiwid2VicGFjazovLy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlPzY3NTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/MDU3MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlPzNjYTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/MTM1MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/YzQ5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9kMGNhIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOzs7O0FBRUE7Ozs7QUFHQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QkFBNkIsR0FBRyw0QkFBNEIsNkJBQTZCLEdBQUcsb0JBQW9CLG9CQUFvQix1QkFBdUIsdUJBQXVCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0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QkFBb0IsdUJBQXVCLHVCQUF1QixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JB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O0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUN4SEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNWJhY2YyY2IzOTJkZDc3YTUxZCIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcclxuLy8gKHJ1bnRpbWUtb25seSBvciBzdGFuZGFsb25lKSBoYXMgYmVlbiBzZXQgaW4gd2VicGFjay5iYXNlLmNvbmYgd2l0aCBhbiBhbGlhcy5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuXHJcbi8vIFJvdXRlc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuLy8gU3R5bGVzL2ZvbnRzXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3MnXHJcblxyXG4vLyBtYXRlcmlhbFxyXG5pbXBvcnQgVnVlTWF0ZXJpYWwgZnJvbSAndnVlLW1hdGVyaWFsJ1xyXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXHJcblxyXG4vLyBwbHVnaW5zXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxyXG5cclxuLy8gcm91dGVyIGNvbmZpZ1xyXG5cclxubGV0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gIHJvdXRlc1xyXG59KVxyXG5cclxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XHJcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXHJcblxyXG4gIGlmIChtYWluQ29udGVudCkge1xyXG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5yZWdpc3RlclRoZW1lKHtcclxuICBhcHB0aGVtZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICBodWU6IDcwMFxyXG4gICAgfSxcclxuICAgIGFjY2VudDoge1xyXG4gICAgICBjb2xvcjogJ2xpZ2h0LWJsdWUnLFxyXG4gICAgICBodWU6IDYwMFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5zZXRDdXJyZW50VGhlbWUoJ2FwcHRoZW1lJylcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XHJcbiAgZWw6ICcjYXBwJyxcclxuICByb3V0ZXJcclxufSlcclxuXHJcbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xyXG4vLyBuZXcgVnVlKHtcclxuLy8gICBlbDogJyNhcHAnLFxyXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXHJcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxyXG4vLyB9KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2xheW91dHMvbm90Rm91bmQnXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vbGF5b3V0cy9sYW5kaW5nJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9sYXlvdXRzL2Fib3V0J1xyXG5pbXBvcnQgRG93bmxvYWQgZnJvbSAnLi9sYXlvdXRzL2Rvd25sb2FkJ1xyXG5cclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2xheW91dHMvZGFzaGJvYXJkJ1xyXG5pbXBvcnQgTXlGaWxlcyBmcm9tICcuL2xheW91dHMvbXlmaWxlcydcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9sYXlvdXRzL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBtYWluID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIG5hbWU6ICdsYW5kaW5nJyxcclxuICAgIGNvbXBvbmVudDogTGFuZGluZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9ob21lJyxcclxuICAgIHJlZGlyZWN0OiAnLydcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgbmFtZTogJ0Fib3V0JyxcclxuICAgIGNvbXBvbmVudDogQWJvdXRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvdScsXHJcbiAgICBuYW1lOiAnZGFzaGJvYXJkJyxcclxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2ZpbGVzJyxcclxuICAgIG5hbWU6ICdteSBmaWxlcycsXHJcbiAgICBjb21wb25lbnQ6IE15RmlsZXNcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvcCcsXHJcbiAgICBuYW1lOiAncHJvZmlsZScsXHJcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZC86aWQvOnBhc3MnLFxyXG4gICAgbmFtZTogJ2Rvd25sb2FkICh3aXRoIHBhc3MpJyxcclxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZC86aWQnLFxyXG4gICAgbmFtZTogJ2Rvd25sb2FkJyxcclxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IGVycm9yID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcqJyxcclxuICAgIG5hbWU6ICdlcnJvcicsXHJcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXS5jb25jYXQobWFpbiwgZXJyb3IpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wZjc2ZDdhOSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxub3RGb3VuZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTBmNzZkN2E5XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3QtZm91bmRcIj5cclxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJpbnRyby1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3QtZm91bmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxyXG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSW50cm9cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5ub3QtZm91bmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm90Rm91bmQudnVlPzU2MDY1OWNjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDU2NjM5MjYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcaW50cm8udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1kNTY2MzkyNlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGludHJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+e3sgdmlld1RpdGxlIHx8IGFwcFRpdGxlIH19PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd2aWV3VGl0bGUnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwVGl0bGU6ICdQZW5ndWluVXBsb2FkJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuaW50cm8ge1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnRyby52dWU/MDUyMTJjOGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnRyb1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZpZXdUaXRsZSB8fCBfdm0uYXBwVGl0bGUpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kNTY2MzkyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wZjc2ZDdhOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGFuZGluZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWJjY2U1ZTY2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcbGFuZGluZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWJjY2U1ZTY2XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGludHJvLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cclxuICAgICAgICAgIDxsb2dpbj48L2xvZ2luPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG4gIGltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgTG9naW4sXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgIGlmICh2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvdScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG5cclxuICAuaW50cm8tYXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmRpbmcudnVlPzE5NDUwMzllIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yNjk4OGZkOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGRldkNyZWRpdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0yNjk4OGZkOFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRldkNyZWRpdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkZXYtY3JlZGl0c1wiPlxyXG4gICAgPGg2IGNsYXNzPVwiY3JlZGl0LXRleHRcIj5NYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovLzB4ZmlyZWJhbGwubWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj4weEZpcmViYWxsPC9hPiBvZiA8YSBocmVmPVwiaHR0cHM6Ly9pcmlkaXVtaW9uLnh5elwiIHRhcmdldD1cIl9ibGFua1wiPklyaWRpdW1Jb24gU29mdHdhcmU8L2E+PC9oNj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmRldi1jcmVkaXRzIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIGg2LmNyZWRpdC10ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXZDcmVkaXRzLnZ1ZT8xOWVjMDlmYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRldi1jcmVkaXRzXCJcbiAgfSwgW19jKCdoNicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjcmVkaXQtdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJNYWRlIGJ5IFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjB4RmlyZWJhbGxcIildKSwgX3ZtLl92KFwiIG9mIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaXJpZGl1bWlvbi54eXpcIixcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJcmlkaXVtSW9uIFNvZnR3YXJlXCIpXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjY5ODhmZDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wYTNlYjQyYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxsb2dpbi52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTBhM2ViNDJjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9naW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cclxuICAgIDxtZC10YWJzIGNsYXNzPVwibWQtYWNjZW50XCIgcmVmPVwiYXV0aE9wdGlvblRhYnNcIj5cclxuICAgICAgPG1kLXRhYiBpZD1cInQtbG9naW5cIiBtZC1sYWJlbD1cIkxvZyBJblwiPlxyXG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlMb2dpblwiPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJsb2dpbi51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImxvZ2luLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgbG9naW4uZXJyIH19PC9wPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwidHJ5TG9naW5cIiA6ZGlzYWJsZWQ9XCIhbG9naW4uZVwiPkxvZyBJbjwvbWQtYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9tZC10YWI+XHJcblxyXG4gICAgICA8bWQtdGFiIGlkPVwidC1zaWdudXBcIiBtZC1sYWJlbD1cIlNpZ24gVXBcIj5cclxuICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5UmVnaXN0ZXJcIj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwicmVnaXN0ZXIudXNlcm5hbWVcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5jb25maXJtXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPkludml0ZSBLZXkgKG9wdGlvbmFsKTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicmVnaXN0ZXIuaW52aXRlS2V5XCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyZWdpc3Rlci5pYWNjZXB0XCI+SSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zPC9tZC1jaGVja2JveD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IHJlZ2lzdGVyLmVyciB9fTwvcD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVJlZ2lzdGVyXCIgOmRpc2FibGVkPVwiIXJlZ2lzdGVyLmVcIj5TaWduIFVwPC9tZC1idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L21kLXRhYj5cclxuICAgIDwvbWQtdGFicz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBlcnI6ICcnLFxyXG4gICAgICAgICAgZTogdHJ1ZSAvLyBlbmFibGVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWdpc3Rlcjoge1xyXG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgY29uZmlybTogJycsXHJcbiAgICAgICAgICBpYWNjZXB0OiAnJyxcclxuICAgICAgICAgIGludml0ZUtleTogJycsXHJcbiAgICAgICAgICBlcnI6ICcnLFxyXG4gICAgICAgICAgZTogdHJ1ZSAvLyBlbmFibGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0cnlMb2dpbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIG5vdGhpbmdcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgaWYgKCF2bS5sb2dpbi5lKSByZXR1cm5cclxuICAgICAgICBpZiAoIXZtLmxvZ2luLnBhc3N3b3JkIHx8ICF2bS5sb2dpbi51c2VybmFtZSkge1xyXG4gICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2NyZWRlbnRpYWxzIGNhbm5vdCBiZSBlbXB0eSdcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB2bS5sb2dpbi5lID0gZmFsc2VcclxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgdm0ubG9naW4uZXJyID0gJydcclxuICAgICAgICAvLyBzZW5kIGxvZ2luIHBvc3RcclxuICAgICAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdm0ubG9naW4udXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogdm0ubG9naW4ucGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gc3VjY2VlZGVkXHJcbiAgICAgICAgICAgICAgLy8gdm0uJHJvb3QubG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgLy8gcHVzaCB1c2VyIGluZm9cclxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9IHJlc3BvbnNlLmRhdGEuYXBpa2V5XHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5uYW1lID0gcmVzcG9uc2UuZGF0YS51c2VyLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codm0uJHJvb3QudS5uYW1lKVxyXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3UnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICB2bS5sb2dpbi5lcnIgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0ubG9naW4uZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnaW52YWxpZCBsb2dpbiBjcmVkZW50aWFscydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5sb2dpbi5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdHJ5UmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5lKSByZXR1cm5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgY29uZmlybWF0aW9uIGlzIGNvcnJlY3RcclxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIudXNlcm5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3VzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdm0ucmVnaXN0ZXIuaWFjY2VwdCkge1xyXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkICE9PSB2bS5yZWdpc3Rlci5jb25maXJtKSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLnJlZ2lzdGVyLmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAnJ1xyXG4gICAgICAgIC8vIHNlbmQgcmVnaXN0ZXIgcG9zdFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9yZWdpc3RlcicsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2bS5yZWdpc3Rlci51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5yZWdpc3Rlci5wYXNzd29yZCxcclxuICAgICAgICAgIGludml0ZUtleTogdm0ucmVnaXN0ZXIuaW52aXRlS2V5XHJcbiAgICAgICAgfSwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIHN1Y2NlZWRlZFxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnUmVnaXN0cmF0aW9uIHN1Y2NlZWRlZCEgWW91IG1heSBub3cgbG9nIGluLicsICdTdWNjZXNzJylcclxuICAgICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmF1dGhPcHRpb25UYWJzLmNoYW5nZVRhYigndC1sb2dpbicpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWQgYmVjYXVzZSBvZiBlcnJvclxyXG4gICAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9naW4udnVlPzRhY2I2MmI0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpblwiXG4gIH0sIFtfYygnbWQtdGFicycsIHtcbiAgICByZWY6IFwiYXV0aE9wdGlvblRhYnNcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZC1hY2NlbnRcIlxuICB9LCBbX2MoJ21kLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInQtbG9naW5cIixcbiAgICAgIFwibWQtbGFiZWxcIjogXCJMb2cgSW5cIlxuICAgIH1cbiAgfSwgW19jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlMb2dpbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiVXNlcm5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvZ2luLnVzZXJuYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9naW4udXNlcm5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG9naW4udXNlcm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmxvZ2luLnVzZXJuYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2dpbi5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImxvZ2luLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2dpbi5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9naW4ucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ubG9naW4uZXJyKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLmxvZ2luLmVcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50cnlMb2dpblxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvZyBJblwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInQtc2lnbnVwXCIsXG4gICAgICBcIm1kLWxhYmVsXCI6IFwiU2lnbiBVcFwiXG4gICAgfVxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeVJlZ2lzdGVyKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIudXNlcm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci51c2VybmFtZVwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci51c2VybmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIudXNlcm5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiQ29uZmlybSBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuY29uZmlybSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmNvbmZpcm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmNvbmZpcm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLmNvbmZpcm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkludml0ZSBLZXkgKG9wdGlvbmFsKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaW52aXRlS2V5KSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuaW52aXRlS2V5XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5yZWdpc3Rlci5pbnZpdGVLZXkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLmludml0ZUtleSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWNoZWNrYm94Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlZ2lzdGVyLmlhY2NlcHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5pYWNjZXB0XCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmlhY2NlcHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLmlhY2NlcHQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJIGFjY2VwdCB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZWdpc3Rlci5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ucmVnaXN0ZXIuZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeVJlZ2lzdGVyXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2lnbiBVcFwiKV0pXSwgMSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGEzZWI0MmMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyBpbnRyby1hcmVhXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidHdlbHZlIGNvbHVtbnNcIlxuICB9LCBbX2MoJ2ludHJvJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiXG4gIH0sIFtfYygnbG9naW4nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1iY2NlNWU2NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hYm91dC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVmYzU1ZWMzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGFib3V0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtNWZjNTVlYzNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhYm91dC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2Fib3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxyXG4gICAgPGRpdiBpZD1cImFwcFwiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImludHJvLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWNvbnRlbnRcIj5cclxuICAgICAgICA8YWJvdXQ+PC9hYm91dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dFdpZGdldCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBJbnRybyxcclxuICAgIEFib3V0XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuYWJvdXQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKmZvbnQtd2VpZ2h0OiA2MDA7Ki9cclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFib3V0LnZ1ZT8yMGViN2Y4NCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hYm91dFdpZGdldC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRjZTFhODFjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGFib3V0V2lkZ2V0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtNGNlMWE4MWNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhYm91dFdpZGdldC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fib3V0V2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dFdpZGdldFwiPlxyXG4gICAgPGg1PkFib3V0IHt7IGFwcE5hbWUgfX08L2g1PlxyXG4gICAgPHA+XHJcbiAgICAgIFBlbmd1aW5VcGxvYWQgaXMgYSBzZWxmLWhvc3RhYmxlLCBmdWxseSBmZWF0dXJlZCB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIHVwbG9hZCBhbmQgc2hhcmUgZmlsZXMuXHJcbiAgICA8L3A+XHJcbiAgICA8aDY+XHJcbiAgICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiB7eyBhcHBWZXJzaW9uIH19XHJcbiAgICA8L2g2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxyXG4gICAgICAgIGFwcFZlcnNpb246IHdpbmRvdy4kYXBwVmVyc2lvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmFib3V0V2lkZ2V0IHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIGg2LmNyZWRpdC10ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dFdpZGdldC52dWU/NjU1ZThjMGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFdpZGdldFwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQWJvdXQgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiXFxuICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiBcIiArIF92bS5fcyhfdm0uYXBwVmVyc2lvbikgKyBcIlxcbiAgXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00Y2UxYTgxYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtY29udGVudFwiXG4gIH0sIFtfYygnYWJvdXQnKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZmM1NWVjMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zZWRjMjM0MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kb3dubG9hZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxkb3dubG9hZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTNlZGMyMzQyXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG93bmxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxyXG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZG93bmxvYWQtYXJlYVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICA8aW50cm8+PC9pbnRybz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxyXG4gICAgICAgIDxkb3dubG9hZEl0ZW0gOml0ZW1JZD1cIiRyb3V0ZS5wYXJhbXMuaWRcIiA6aXRlbVBhc3M9XCIkcm91dGUucGFyYW1zLnBhc3NcIj48L2Rvd25sb2FkSXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG4gIGltcG9ydCBkb3dubG9hZEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9kb3dubG9hZEl0ZW0nXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIEludHJvLFxyXG4gICAgICBkb3dubG9hZEl0ZW0sXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuc2hyaW5rLWxheW91dCB7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICB9XHJcblxyXG4gIC5kb3dubG9hZC1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWQudnVlP2NhOWYyMDcyIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTAyZmExODRhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxkb3dubG9hZEl0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0wMmZhMTg0YVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRvd25sb2FkSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+RmlsZSBEb3dubG9hZDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRvd25sb2FkLWFyZWEtcGFkZGluZ1wiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgIDxoNT5Mb2FkaW5nIEZpbGUgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgPG1kLWljb24gbWQtdGhlbWU9XCJsaWdodC1ibHVlXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XHJcbiAgICAgICAgPGg1Pnt7IGZpbGUubmFtZSB9fTwvaDU+XHJcbiAgICAgICAgPHA+e3sgZmlsZS5zaXplVGV4dCB9fTwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCIhZXJyb3JcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8bWQtYnV0dG9uIEBjbGljaz1cImRvd25sb2FkRmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxtZC1pY29uIHYtaWY9XCJmaWxlLnBhc3MubGVuZ3RoID4gMFwiPmxvY2s8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxtZC1idXR0b24+Q29weSBMaW5rPC9tZC1idXR0b24+LS0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnaXRlbUlkJywgJ2l0ZW1QYXNzJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBmaWxlOiB7XHJcbiAgICAgICAgICBuYW1lOiAnTG9hZGluZycsXHJcbiAgICAgICAgICBzaXplOiAncmV0cmlldmluZyBpbmZvcm1hdGlvbiBmcm9tIHNlcnZlcicsXHJcbiAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgIHBhc3M6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgY0l0ZW1QYXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBkb3dubG9hZEZpbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Rvd25sb2FkLycgKyB0aGlzLmZpbGUuaWQgKyAodGhpcy5maWxlLnBhc3MgPyAnIScgKyB0aGlzLmZpbGUucGFzcyA6ICcnKVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVGaWxlSW5mbzogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgc3VmZml4ID0ga2V5ID8gJyEnICsga2V5IDogJydcclxuICAgICAgICB2bS5maWxlLmlkID0gdm0uaXRlbUlkXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpbGVpbmZvLycgKyB2bS5maWxlLmlkICsgc3VmZml4LCBheGlvc1JlcXVlc3RDb25maWcpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICB2bS5maWxlLm5hbWUgPSByZXNwb25zZS5kYXRhLm5hbWVcclxuICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gcmVzcG9uc2UuZGF0YS5oclNpemVcclxuICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICBpZiAoc3VmZml4KSB7XHJcbiAgICAgICAgICAgICAgICB2bS5maWxlLnBhc3MgPSBrZXlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1Byb21wdCgnRW50ZXIgcGFzc3dvcmQnLCAnRmlsZSBwYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcclxuICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdBY2Nlc3MgRGVuaWVkJ1xyXG4gICAgICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIGZpbGUgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9ICdGaWxlIE5vdCBGb3VuZCdcclxuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcclxuICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuaXRlbVBhc3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuY0l0ZW1QYXNzID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUZpbGVJbmZvKHRoaXMuY0l0ZW1QYXNzKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmRvd25sb2FkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmRvd25sb2FkLWFyZWEtcGFkZGluZyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWRJdGVtLnZ1ZT83N2M1MjgzYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRvd25sb2FkLWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJGaWxlIERvd25sb2FkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZG93bmxvYWQtYXJlYS1wYWRkaW5nXCJcbiAgfSwgWyhfdm0ubG9hZGluZykgPyBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXN0cm9rZVwiOiAxLjUsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJMb2FkaW5nIEZpbGUgSW5mb3JtYXRpb25cIildKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtaWNvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGhlbWVcIjogXCJsaWdodC1ibHVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJpbnNlcnRfZHJpdmVfZmlsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5zaXplVGV4dCkpXSksIF92bS5fdihcIiBcIiksICghX3ZtLmVycm9yKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodFwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dubG9hZEZpbGVcbiAgICB9XG4gIH0sIFsoX3ZtLmZpbGUucGFzcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1pY29uJywgW192bS5fdihcImxvY2tcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgICBcIildKV0sIDEpXSwgMSldKSA6IF92bS5fZSgpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTAyZmExODRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGRvd25sb2FkLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdkb3dubG9hZEl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXRlbUlkXCI6IF92bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgXCJpdGVtUGFzc1wiOiBfdm0uJHJvdXRlLnBhcmFtcy5wYXNzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZWRjMjM0MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzNiNThiNGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRhc2hib2FyZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTczYjU4YjRhXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJEYXNoYm9hcmRcIj48L2ludHJvPlxyXG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZmlsZVVwbG9hZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzhjMjY0YmRjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZTE3MWQ1MCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGZpbGVVcGxvYWRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi03ZTE3MWQ1MFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbGVVcGxvYWRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWQtd2lkZ2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0IHNlcC1iXCI+XG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiBAY2xpY2s9XCJ2aWV3TXlGaWxlc1wiPlZpZXcgbXkgZmlsZXM8L21kLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWhlcmVcIiBAZHJvcC5zdG9wLnByZXZlbnQ9XCJoYW5kbGVEcmFnRHJvcFVwbG9hZFwiIEBkcmFnZW50ZXIuc3RvcC5wcmV2ZW50IEBkcmFnbGVhdmUuc3RvcC5wcmV2ZW50IEBkcmFnb3Zlci5zdG9wLnByZXZlbnQ+XG4gICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJ0YXJnZXRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPlVwbG9hZCBGaWxlczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXN1YmhlYWRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWEtcGFkZGluZ1wiIEBjbGljaz1cImJyb3dzZUZvckZpbGVzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICA8IS0tPG1kLXNwaW5uZXIgbWQtc2l6ZT1cIjYwXCIgOm1kLXByb2dyZXNzPVwicHJvZ3Jlc3NJbmRpY2F0b3IudmFsdWVcIiBjbGFzcz1cIm1kLXdhcm5cIj48L21kLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8cD57eyBwcm9ncmVzc01lc3NhZ2UgfX08L3A+LS0+XG4gICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8IS0tVXBsb2FkaW5nIGZpbGUtLT5cbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIHYtaWY9XCJwcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoID4gMFwiPlVwbG9hZGluZzwvbWQtc3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIocHJJbmQsIGl4KSBpbiBwcm9ncmVzc0luZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiIHYtaWY9XCIhcHJJbmQuZXJyb3JcIj5jbG91ZF9xdWV1ZTwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiIHYtZWxzZT5lcnJvcjwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBwckluZC5uYW1lIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFwckluZC5lcnJvclwiPiB7eyAocHJJbmQudmFsdWUgPCAxMDApID8gYFVwbG9hZGluZy4uLiAoJHtwckluZC52YWx1ZX0lKWAgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+IHt7ICdVcGxvYWQgZXJyb3I6ICcgKyBwckluZC5tZXNzYWdlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJjYW5jZWxVcGxvYWQocHJJbmQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmNhbmNlbDwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfdXBsb2FkPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWQgY29tcGxldGVkIGZpbGVzLS0+XG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiPkNvbXBsZXRlZDwvbWQtc3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIoY21wbEZpbGUsIGl4KSBpbiBjb21wbGV0ZWRGaWxlc1wiIEBjbGljaz1cInZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmNsb3VkX2RvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkIENvbXBsZXRlITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmRvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cbiAgICAgICAgICAgICAgPG1kLWJ1dHRvbiB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiIEBjbGljaz1cImNvbXBsZXRlZEZpbGVzID0gW11cIj5DbGVhciBBbGw8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnZpc2libGVcIiByZWY9XCJicm93c2VcIiBAY2hhbmdlPVwib25GaWxlc1VwbG9hZGVkXCIgbXVsdGlwbGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3JzOiBbXSxcbiAgICAgICAgLyogc2NoZW1hOlxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IG51bWJlciBbMC0xMDBdLFxuICAgICAgICAgIGZpbGVSZWY6IG9iamVjdCBbcmVmZXJlbmNlIHRvIGZpbGUgdGhhdCBpcyB1cGxvYWRpbmddLFxuICAgICAgICAgIG5hbWU6IHN0cmluZyBbbmFtZSBvZiBmaWxlXSxcbiAgICAgICAgICB4aHI6IG9iamVjdCBbeGhyIG9iamVjdCByZWZlcmVuY2VdLFxuICAgICAgICAgIGVycm9yOiBib29sXG4gICAgICAgICAgbWVzc2FnZTogc3RyaW5nIG9yIG51bGwgW2FuIGVycm9yIG1lc3NhZ2VdXG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgY29tcGxldGVkRmlsZXM6IFtdXG4gICAgICAgIC8qIHNjaGVtYTpcbiAgICAgICAgICovXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgdXBsb2FkaW5nRmlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aFxuICAgICAgfSxcbiAgICAgIHVwbG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRpbmdGaWxlcyA+IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHZpZXdNeUZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvZmlsZXMnKVxuICAgICAgfSxcbiAgICAgIGJyb3dzZUZvckZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuYnJvd3NlLmNsaWNrKClcbiAgICAgIH0sXG4gICAgICBvbkZpbGVzVXBsb2FkZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBicm93c2UgPSB0aGlzLiRyZWZzLmJyb3dzZVxuICAgICAgICBsZXQgZmlsZUNvdW50ID0gYnJvd3NlLmZpbGVzLmxlbmd0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGYgPSBicm93c2UuZmlsZXNbaV1cbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGZpbGVSZWY6IGYsXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0luZGljYXRvcnMucHVzaChwcm9ncmVzcylcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZiwgcHJvZ3Jlc3MpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVEcmFnRHJvcFVwbG9hZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBmID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV07XG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0luZGljYXRvcnMucHVzaChwcm9ncmVzcylcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZiwgcHJvZ3Jlc3MpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYW5jZWxVcGxvYWQ6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIHByb2dyZXNzLnhoci5hYm9ydCgpXG4gICAgICAgIHZtLnByb2dyZXNzSW5kaWNhdG9ycy5zcGxpY2Uodm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmluZGV4T2YocHJvZ3Jlc3MpLCAxKVxuICAgICAgfSxcbiAgICAgIHVwbG9hZEZpbGU6IGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICBwcm9ncmVzcy54aHIgPSB4aHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiL2FwaS91cGxvYWRcIilcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyB1cGxvYWQgY29tcGxldGVcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGxvYWQgY29tcGxldGUnLCBwcm9ncmVzcy5uYW1lKVxuICAgICAgICAgICAgLy8gZGVxdWV1ZSB0aGUgdXBsb2FkaW5nIGZpbGVcbiAgICAgICAgICAgIHZtLnByb2dyZXNzSW5kaWNhdG9ycy5zcGxpY2Uodm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmluZGV4T2YocHJvZ3Jlc3MpLCAxKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgIHZtLmNvbXBsZXRlZEZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBwcm9ncmVzcy5uYW1lLFxuICAgICAgICAgICAgICBkb3dubG9hZFBhZ2U6ICcvIy9kLycgKyByZXNwb25zZS5maWxlSWRcbiAgICAgICAgICAgICAgLy8gZG93bmxvYWRQYWdlOiByZXNwb25zZS5kb3dubG9hZFBhZ2UgLy8gZ2V0IGRvd25sb2FkIHBhZ2UgZnJvbSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgICAgICAgIHByb2dyZXNzLmVycm9yID0gdHJ1ZVxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MubWVzc2FnZSA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgIC8vIHJlYWN0aXZlIHVwZGF0ZVxuICAgICAgICAgICAgdm0uJHNldChwcm9ncmVzcywgJ21lc3NhZ2UnLCB4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnZhbHVlID0gTWF0aC5mbG9vcigoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtLmFwcGVuZChcImFwaWtleVwiLCB2bS4kcm9vdC51LmtleSlcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpXG4gICAgICAgIHhoci5zZW5kKGZvcm0pXG4gICAgICB9LFxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHUsICdfYmxhbmsnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAudXBsb2FkLWFyZWEtcGFkZGluZyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDE0JTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG4gIFxuICAudXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZmlsZVVwbG9hZFdpZGdldC52dWU/MjUxYTJkMjciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZC13aWRnZXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGVmdCBzZXAtYlwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnZpZXdNeUZpbGVzXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlldyBteSBmaWxlc1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWhlcmVcIixcbiAgICBvbjoge1xuICAgICAgXCJkcm9wXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGFuZGxlRHJhZ0Ryb3BVcGxvYWQoJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiZHJhZ2VudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ2xlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIFwiZHJhZ292ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1zdWJoZWFkXCJcbiAgfSwgW192bS5fdihcIkRyYWcgYW5kIGRyb3Agb3IgY2xpY2tcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtYXJlYS1wYWRkaW5nXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmJyb3dzZUZvckZpbGVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9yc1wiXG4gIH0sIFtfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiXG4gIH0sIFsoX3ZtLnByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwKSA/IF9jKCdtZC1zdWJoZWFkZXInLCBbX3ZtLl92KFwiVXBsb2FkaW5nXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzKSwgZnVuY3Rpb24ocHJJbmQsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCBbKCFwckluZC5lcnJvcikgPyBfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9xdWV1ZVwiKV0pIDogX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZXJyb3JcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MocHJJbmQubmFtZSkgKyBcIiBcIildKSwgX3ZtLl92KFwiIFwiKSwgKCFwckluZC5lcnJvcikgPyBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoKHBySW5kLnZhbHVlIDwgMTAwKSA/IChcIlVwbG9hZGluZy4uLiAoXCIgKyAocHJJbmQudmFsdWUpICsgXCIlKVwiKSA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicpKV0pIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKCdVcGxvYWQgZXJyb3I6ICcgKyBwckluZC5tZXNzYWdlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNhbmNlbFVwbG9hZChwckluZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjYW5jZWxcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIlxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmaWxlX3VwbG9hZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIkNvbXBsZXRlZFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmNvbXBsZXRlZEZpbGVzKSwgZnVuY3Rpb24oY21wbEZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS52aXNpdFVybChjbXBsRmlsZS5kb3dubG9hZFBhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhjbXBsRmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiVXBsb2FkIENvbXBsZXRlIVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiXG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImRvbmVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIChfdm0uY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY29tcGxldGVkRmlsZXMgPSBbXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsZWFyIEFsbFwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJicm93c2VcIixcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZXNVcGxvYWRlZFxuICAgIH1cbiAgfSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdlMTcxZDUwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIkRhc2hib2FyZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ZpbGVVcGxvYWRXaWRnZXQnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTczYjU4YjRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlmaWxlcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTEyYTJiNTAxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcbXlmaWxlcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTEyYTJiNTAxXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlmaWxlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8aW50cm8gdmlldy10aXRsZT1cIk15IEZpbGVzXCI+PC9pbnRybz5cclxuICAgIDxteUZpbGVzTGlzdD48L215RmlsZXNMaXN0PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgbXlGaWxlc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9teUZpbGVzTGlzdCdcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIEludHJvLFxyXG4gICAgICBteUZpbGVzTGlzdCxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteWZpbGVzLnZ1ZT8wMDEzNzhhMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBmOTQ4MzJhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215RmlsZXNMaXN0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXG15RmlsZXNMaXN0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMGY5NDgzMmFcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteUZpbGVzTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibXktZmlsZXMtbGlzdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdCBzZXAtYlwiPlxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrPVwidXBsb2FkTW9yZUZpbGVzXCI+VXBsb2FkIEZpbGVzPC9tZC1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZGVkLWZpbGVzLWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPkFsbCBNeSBGaWxlczwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZEZpbmlzaGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm5vRmlsZXNcIj5cbiAgICAgICAgICAgICAgICA8cD5ObyBGaWxlczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVwiKGZpbGUsIGl4KSBpbiBmaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBmaWxlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBmaWxlLmhyU2l6ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwibG9ja0ZpbGUoaXgpXCIgdi1pZj1cIiFmaWxlLmxvY2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5sb2NrX29wZW48L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cInVubG9ja0ZpbGUoaXgpXCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5sb2NrPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJkb3dubG9hZEZpbGUoaXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfZG93bmxvYWQ8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIG1kLW1lbnUtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5tb3JlX2hvcml6PC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cInZpc2l0RG93bmxvYWRQYWdlKGl4KVwiPkRvd25sb2FkIFBhZ2U8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cImRlbGV0ZUZpbGUoaXgpXCI+RGVsZXRlPC9tZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9tZC1tZW51PlxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxuICAgICAgICAgICAgICA8aDU+UmV0cmlldmluZyBEYXRhPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlczogW10sXG4gICAgICAgIGF1dGhSZXF1ZXN0UGFyYW1zOiB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBhcGlrZXk6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2FkRmluaXNoZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZmlsZXNDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlcy5sZW5ndGhcbiAgICAgIH0sXG4gICAgICBub0ZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzQ291bnQgPT0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdXBsb2FkTW9yZUZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdScpXG4gICAgICB9LFxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHUsICdfYmxhbmsnKVxuICAgICAgfSxcbiAgICAgIHZpc2l0RG93bmxvYWRQYWdlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpbGVzW2l4XVxuICAgICAgICBpZiAoZi5sb2NrZWQpIHtcbiAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oXG4gICAgICAgICAgICBgXG5UaGlzIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkLiBEbyB5b3Ugd2FudCB0byBlbmNvZGUgdGhlIDxicj5cbnBhc3N3b3JkIGluIHRoZSBsaW5rPyBJZiB5b3UgZG9uJ3QgZG8gdGhpcywgYW55b25lIHdobyB2aXNpdHMgPGJyPlxueW91ciBsaW5rIHdpbGwgbmVlZCB0byBlbnRlciB0aGUgZmlsZSBwYXNzd29yZCB0byB2aWV3IHRoZSBmaWxlLlxuYCxcbiAgICAgICAgICAgICdJbmNsdWRlIHBhc3N3b3JkPycsXG4gICAgICAgICAgICBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIC8vIGluY2x1ZGUgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZtLnNob3dEb3dubG9hZExpbmtXaXRoUGFzcyhpeClcbiAgICAgICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8ganVzdCBnbyB0byBsaW5rXG4gICAgICAgICAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRsUGFnZSwgJ19ibGFuaycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICdZZXMnLCAnTm8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGp1c3Qgb3BlbiB0aGUgcGFnZVxuICAgICAgICAgIGxldCBkbFBhZ2UgPSAnLyMvZC8nICsgZi5maWxlSWRcbiAgICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0cGFzcy8nICsgZi5maWxlSWQsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkIHNob3VsZCBiZSByZXR1cm5lZFxuICAgICAgICAgICAgbGV0IGRsUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArICcjL2QvJyArIGYuZmlsZUlkICsgJy8nICsgd2luZG93LmJ0b2EocmVzLmRhdGEpXG4gICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoXG4gICAgICAgICAgICAgIGBcbkRvd25sb2FkIGxpbmsgd2l0aCBwYXNzd29yZCBlbmNvZGVkOjxicj5cbjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke2RsUGFnZX1cIj4ke2RsUGFnZX08L2E+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAnTGluayBDcmVhdGVkJylcbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWxlc1tpeF1cbiAgICAgICAgLy8gdXNlIGZvcmNlIGRvd25sb2FkIHRvIGJ5cGFzcyBwYXNzd29yZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Zkb3dubG9hZC8nICsgZi5maWxlSWQgKyAnP2FwaWtleT0nICsgdGhpcy4kcm9vdC51LmtleVxuICAgICAgfSxcbiAgICAgIGxvY2tGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBwYXNzd29yZCcsICdQYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIC8vIHNlbmQgbG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9sb2NrLycgKyBmLmZpbGVJZCArICchJyArIHIsIHt9LCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcbiAgICAgICAgICAgICAgICBmLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdW5sb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHBhc3N3b3JkIG9uIHRoaXMgZmlsZT8nLCAnQ29uZmlybSBVbmxvY2snLCAocikgPT4ge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAvLyBzZW5kIHVubG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS91bmxvY2svJyArIGYuZmlsZUlkLCB7fSwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZpbGU/IEl0IGNhbm5vdCBiZSByZWNvdmVyZWQuJywgJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAocikgPT4ge1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgLy8gc2VuZCBkZWxldGUgcmVxdWVzdFxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvZGVsZXRlLycgKyBmLmZpbGVJZCwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxuICAgICAgICAgICAgICAgICAgdm0uZmlsZXMuc3BsaWNlKGl4LCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHZtLmF1dGhSZXF1ZXN0UGFyYW1zLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJmaWxlcycsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBtZXJnZSBmaWxlIGxpc3RcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZtLmZpbGVzLnB1c2gocmVzcG9uc2UuZGF0YVtpXSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdm0ubG9hZEZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgdm0ubG9hZEZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteUZpbGVzTGlzdC52dWU/NzFjZDcyYjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cGxvYWRNb3JlRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZGVkLWZpbGVzLWxpc3RcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBbGwgTXkgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5sb2FkRmluaXNoZWQpID8gX2MoJ2RpdicsIFsoX3ZtLm5vRmlsZXMpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJObyBGaWxlc1wiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBfdm0uX2woKF92bS5maWxlcyksIGZ1bmN0aW9uKGZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoZmlsZS5oclNpemUpKV0pXSksIF92bS5fdihcIiBcIiksICghZmlsZS5sb2NrZWQpID8gX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5sb2NrRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJsb2NrX29wZW5cIildKV0sIDEpIDogX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS51bmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmRvd25sb2FkRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmaWxlX2Rvd25sb2FkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1kLWFsaWduLXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtbWVudS10cmlnZ2VyXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibW9yZV9ob3JpelwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWNvbnRlbnQnLCBbX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnZpc2l0RG93bmxvYWRQYWdlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkRvd25sb2FkIFBhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmRlbGV0ZUZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRGVsZXRlXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogMS41LFxuICAgICAgXCJtZC1pbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGY5NDgzMmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIk15IEZpbGVzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbXlGaWxlc0xpc3QnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTEyYTJiNTAxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lMmU1ZjE0MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXHByb2ZpbGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1lMmU1ZjE0MlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2ZpbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aW50cm8gdmlldy10aXRsZT1cIlVzZXIgUHJvZmlsZVwiPjwvaW50cm8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxteVByb2ZpbGU+PC9teVByb2ZpbGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbiAgaW1wb3J0IG15UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL215UHJvZmlsZSdcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIEludHJvLFxyXG4gICAgICBteVByb2ZpbGUsXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHByb2ZpbGUudnVlPzU3NzViYjAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWE2MTc0YjQ0IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxteVByb2ZpbGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1hNjE3NGI0NFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG15UHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibXktcHJvZmlsZSBsZWZ0XCI+XHJcbiAgICA8aDQ+TWFuYWdlIEFjY291bnQgKHt7ICRyb290LnUubmFtZSB9fSk8L2g0PlxyXG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxyXG4gICAgICA8aDU+UmVzb3VyY2UgVXNhZ2U8L2g1PlxyXG4gICAgICA8ZGl2IHYtaWY9XCJ1SW5mby5sb2FkZWRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFVzaW5nXHJcbiAgICAgICAgICA8Yj57eyB1SW5mby51c2FnZSB9fTwvYj4gb2YgPGI+e3sgdUluZm8ucXVvdGEgfX08L2I+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgPG1kLXNwaW5uZXIgOm1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgIDxwPlJldHJpZXZpbmcgRGF0YTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxyXG4gICAgICA8aDU+QVBJPC9oNT5cclxuICAgICAgPGg2PkFQSSBLZXk6IDxjb2RlPnt7ICRyb290LnUua2V5IH19PC9jb2RlPjwvaDY+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLXJhaXNlZFwiIEBjbGljaz1cImdlbmVyYXRlTmV3QXBpS2V5XCI+R2VuZXJhdGUgTmV3PC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cclxuICAgICAgPGg1PlNlY3VyaXR5PC9oNT5cclxuICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeVVwZGF0ZVBhc3N3b3JkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVpZ2h0IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5vbGRcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cclxuICAgICAgICAgICAgICA8bGFiZWw+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyB1cGRhdGVQYXNzd29yZC5lcnIgfX08L3A+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVVwZGF0ZVBhc3N3b3JkXCIgOmRpc2FibGVkPVwiIXVwZGF0ZVBhc3N3b3JkLmVcIj5DaGFuZ2UgUGFzc3dvcmQ8L21kLWJ1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDU+RGFuZ2VyIFpvbmU8L2g1PlxyXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXdhcm5cIiBAY2xpY2s9XCJkZWxldGVBbGxGaWxlc1wiPkRlbGV0ZSBBbGwgRmlsZXM8L21kLWJ1dHRvbj5cclxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC13YXJuXCIgQGNsaWNrPVwiZGVsZXRlQWNjb3VudFwiPkRlbGV0ZSBBY2NvdW50PC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlUGFzc3dvcmQ6IHtcclxuICAgICAgICAgIG9sZDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtOiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhSZXF1ZXN0UGFyYW1zOiB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgYXBpa2V5OiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdUluZm86IHtcclxuICAgICAgICAgIHF1b3RhOiBudWxsLFxyXG4gICAgICAgICAgdXNhZ2U6IG51bGwsXHJcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZW5lcmF0ZU5ld0FwaUtleTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IGEgbmV3IEFQSSBrZXk/IFRoZSBvbGQgb25lIHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvbmV3a2V5Jywge30sIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbmVcclxuICAgICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcclxuICAgICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnTmV3IEFQSSBrZXkgZ2VuZXJhdGVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicsICdTdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVBbGxGaWxlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IEFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4gWW91IHdpbGwgdGhlbiBiZSBsb2dnZWQgb3V0LicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS9maWxlcycsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxyXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbGVzIGhhdmUgYmVlbiBudWtlZC5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBub3cgbG9nIG91dFxyXG4gICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXHJcbiAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQWNjb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IFlvdXIgYWNjb3VudCBhbmQgYWxsIGZpbGVzIHRoYXQgeW91IGhhdmUgdXBsb2FkZWQgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyMSkge1xyXG4gICAgICAgICAgaWYgKHIxKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnWW91ciBhY2NvdW50IHdpbGwgYmUgZGVsZXRlZC4gQXJlIHlvdSBjZXJ0YWluIHlvdSB3b3VsZCBsaWtlIHRvIHByb2NlZWQ/JykpIHtcclxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS91c2VyJywgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgaGFzIGJlZW4gbnVrZWQuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC8vIG5vdyBsb2cgb3V0XHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0cnlVcGRhdGVQYXNzd29yZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLnVwZGF0ZVBhc3N3b3JkLmUpIHJldHVyblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxyXG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAncGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgIT09IHZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICcnXHJcbiAgICAgICAgLy8gc2VuZCB1cGRhdGVQYXNzd29yZCBwb3N0XHJcbiAgICAgICAgYXhpb3MucGF0Y2goJy9jaGFuZ2VwYXNzd29yZCcsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2bS4kcm9vdC51Lm5hbWUsXHJcbiAgICAgICAgICBvbGRQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQub2xkLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXHJcbiAgICAgICAgfSwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnUGFzc3dvcmQgY2hhbmdlIHN1Y2NlZWRlZCEgUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKVxyXG4gICAgICAgICAgICAgIC8vIGxvZyBvdXRcclxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXHJcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXHJcbiAgICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gbG9hZCBmaWxlcyBmcm9tIHNlcnZlclxyXG4gICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgIHZtLmF1dGhSZXF1ZXN0UGFyYW1zLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxyXG4gICAgICAvLyBsb2FkIHVzZXIgaW5mb1xyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcmluZm8nLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAvLyBmZXRjaGVkIGRhdGFcclxuICAgICAgICAgIHZtLnVJbmZvID0ge1xyXG4gICAgICAgICAgICBxdW90YTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS5xdW90YSksXHJcbiAgICAgICAgICAgIHVzYWdlOiB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlcy5kYXRhLnVzYWdlKSxcclxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnAtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlQcm9maWxlLnZ1ZT8xYWVkYWU4NyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm15LXByb2ZpbGUgbGVmdFwiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiTWFuYWdlIEFjY291bnQgKFwiICsgX3ZtLl9zKF92bS4kcm9vdC51Lm5hbWUpICsgXCIpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWN0aW9uXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJSZXNvdXJjZSBVc2FnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnVJbmZvLmxvYWRlZCkgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgVXNpbmdcXG4gICAgICAgIFwiKSwgX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udUluZm8udXNhZ2UpKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS51SW5mby5xdW90YSkpXSldKV0pIDogX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogMS41LFxuICAgICAgXCJtZC1pbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJSZXRyaWV2aW5nIERhdGFcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWN0aW9uXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJBUElcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g2JywgW192bS5fdihcIkFQSSBLZXk6IFwiKSwgX2MoJ2NvZGUnLCBbX3ZtLl92KF92bS5fcyhfdm0uJHJvb3QudS5rZXkpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeSBtZC1yYWlzZWRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZ2VuZXJhdGVOZXdBcGlLZXlcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJHZW5lcmF0ZSBOZXdcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiU2VjdXJpdHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeVVwZGF0ZVBhc3N3b3JkKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVpZ2h0IGNvbHVtbnNcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiQ3VycmVudCBwYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQub2xkKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXBkYXRlUGFzc3dvcmQub2xkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5vbGQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnNcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJOZXcgUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXBkYXRlUGFzc3dvcmQucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5jb25maXJtKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXBkYXRlUGFzc3dvcmQuY29uZmlybVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXBkYXRlUGFzc3dvcmQuZXJyKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLnVwZGF0ZVBhc3N3b3JkLmVcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50cnlVcGRhdGVQYXNzd29yZFxuICAgIH1cbiAgfSwgW192bS5fdihcIkNoYW5nZSBQYXNzd29yZFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDUnLCBbX3ZtLl92KFwiRGFuZ2VyIFpvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtd2FyblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWxldGVBbGxGaWxlc1xuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZSBBbGwgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtd2FyblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWxldGVBY2NvdW50XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVsZXRlIEFjY291bnRcIildKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTYxNzRiNDQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2ludHJvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZpZXctdGl0bGVcIjogXCJVc2VyIFByb2ZpbGVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidHdlbHZlIGNvbHVtbnNcIlxuICB9LCBbX2MoJ215UHJvZmlsZScpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTJlNWYxNDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiByb2JvdG8tMTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBUaGluJyksIGxvY2FsKCdSb2JvdG8tVGhpbicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTEwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbiBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1UaGluSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tMzAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tMzAwaXRhbGljIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1MaWdodEl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8taXRhbGljIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by01MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bScpLCBsb2NhbCgnUm9ib3RvLU1lZGl1bScpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTUwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLU1lZGl1bUl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTcwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQm9sZCcpLCBsb2NhbCgnUm9ib3RvLUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by03MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tQm9sZEl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTkwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2sgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tQmxhY2tJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by05MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrJyksIGxvY2FsKCdSb2JvdG8tQmxhY2snKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktMzAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IExpZ2h0JyksIGxvY2FsKCdSYWxld2F5LUxpZ2h0JyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktcmVndWxhciAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheScpLCBsb2NhbCgnUmFsZXdheS1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS01MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgTWVkaXVtJyksIGxvY2FsKCdSYWxld2F5LU1lZGl1bScpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LTYwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBTZW1pQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1TZW1pQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LTcwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBCb2xkJyksIGxvY2FsKCdSYWxld2F5LUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS04MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgRXh0cmFCb2xkJyksIGxvY2FsKCdSYWxld2F5LUV4dHJhQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAuOGNlNTk4OC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjY1NGNiNGQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMuYWNlZTBlYS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLjQyZGU4OTgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAuMTZkZGIxNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLmVjY2U5MmQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMuM2RkYjc0OC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjRkMDhkYWUud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLjdlMzY3YmUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLjE2ZTFkOTMud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZlxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLjk4NGFlMzcud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy4xZTY1ZTdlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLmJiNDc0ZjEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC41N2FmNjRmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLjllN2JlZWUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy5iNjcwNjk0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLjBkN2U3MWYud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC41MjVkNWI0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLjczOTRjYTkud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy5hZDBlNzRmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLjRmYWVjODMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy4zYjk1OTBlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLmY0ZThkYzUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5kZTk4NGMwLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC5lNzQ2ZTAzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC43OGRkNWFiLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjkxMDY0MzUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIuMjkwZWUzOC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZlxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC5lNWEzMjEyLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC44MWU5NTU4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAuY2Q5MDM5Mi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAuYTRiNmYxNy53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLjA2ZjFjODYud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLmM4NjRkODQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC4wNDFhNGI4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC4yYTNhOWNmLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3RcIikgKyBcIik7XFxyXFxuICAgIC8qIEZvciBJRTYtOCAqL1xcclxcbiAgICBzcmM6IGxvY2FsKCdNYXRlcmlhbCBJY29ucycpLCBsb2NhbCgnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmXCIpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lNzliZmQ4LmVvdFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLjU3MGViODMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLjAxMmNmNmEud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5hMzdiMGMwLnR0ZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcclxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcclxcbiAqICAgIHVzZXIgem9vbS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxyXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cXHJcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcclxcbiAqIGFuZCBGaXJlZm94LlxcclxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuYXJ0aWNsZSxcXHJcXG5hc2lkZSxcXHJcXG5kZXRhaWxzLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZmlndXJlLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1haW4sXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbixcXHJcXG5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcclxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxucHJvZ3Jlc3MsXFxyXFxudmlkZW8ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxyXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dLFxcclxcbnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIExpbmtzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuZGZuIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcclxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxyXFxuICovXFxyXFxuXFxyXFxubWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcclxcbiAqL1xcclxcblxcclxcbnN2Zzpub3QoOnJvb3QpIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICBtYXJnaW46IDFlbSA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5wcmUsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXFxyXFxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcclxcbiAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXHJcXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxcclxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXHJcXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcclxcbiAqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXHJcXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxyXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXHJcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXFxyXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxyXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcclxcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcclxcbiAgbWFyZ2luOiAwIDJweDtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcclxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXHJcXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5vcHRncm91cCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGVzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZCxcXHJcXG50aCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcclxcbiogU2tlbGV0b24gVjIuMC40XFxyXFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxyXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxyXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxyXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcclxcbiogMTIvMjkvMjAxNFxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuLyogVGFibGUgb2YgY29udGVudHNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXHJcXG4tIEdyaWRcXHJcXG4tIEJhc2UgU3R5bGVzXFxyXFxuLSBUeXBvZ3JhcGh5XFxyXFxuLSBMaW5rc1xcclxcbi0gQnV0dG9uc1xcclxcbi0gRm9ybXNcXHJcXG4tIExpc3RzXFxyXFxuLSBDb2RlXFxyXFxuLSBUYWJsZXNcXHJcXG4tIFNwYWNpbmdcXHJcXG4tIFV0aWxpdGllc1xcclxcbi0gQ2xlYXJpbmdcXHJcXG4tIE1lZGlhIFF1ZXJpZXNcXHJcXG4qL1xcclxcblxcclxcblxcclxcbi8qIEdyaWRcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA5NjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcbi5jb2x1bW4sXFxyXFxuLmNvbHVtbnMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG5cXHJcXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIHBhZGRpbmc6IDA7IH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlOyB9XFxyXFxuICAuY29sdW1uLFxcclxcbiAgLmNvbHVtbnMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNCU7IH1cXHJcXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxyXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxyXFxuXFxyXFxuICAub25lLmNvbHVtbixcXHJcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXHJcXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXHJcXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXHJcXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXHJcXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXHJcXG5cXHJcXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXHJcXG5cXHJcXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxyXFxuXFxyXFxuICAvKiBPZmZzZXRzICovXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxyXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXHJcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxyXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcclxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxyXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxyXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxyXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxyXFxuXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxyXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcclxcblxcclxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBCYXNlIFN0eWxlc1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbi8qIE5PVEVcXHJcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxyXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzIyMjsgfVxcclxcblxcclxcblxcclxcbi8qIFR5cG9ncmFwaHlcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcclxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXHJcXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcclxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxyXFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxyXFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxyXFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcclxcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcclxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcclxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcclxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcclxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcclxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMaW5rc1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmEge1xcclxcbiAgY29sb3I6ICMxRUFFREI7IH1cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMEZBMENFOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTGlzdHNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XFxyXFxub2wge1xcclxcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IH1cXHJcXG5vbCwgdWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMDsgfVxcclxcbnVsIHVsLFxcclxcbnVsIG9sLFxcclxcbm9sIG9sLFxcclxcbm9sIHVsIHtcXHJcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxyXFxuICBmb250LXNpemU6IDkwJTsgfVxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb2RlXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuY29kZSB7XFxyXFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxyXFxucHJlID4gY29kZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTsgfVxcclxcblxcclxcblxcclxcbi8qIFRhYmxlc1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbnRoLFxcclxcbnRkIHtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxcclxcbnRoOmZpcnN0LWNoaWxkLFxcclxcbnRkOmZpcnN0LWNoaWxkIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcclxcbnRoOmxhc3QtY2hpbGQsXFxyXFxudGQ6bGFzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogU3BhY2luZ1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbi8qYnV0dG9uLFxcclxcbi5idXR0b24ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCxcXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXHJcXG5wcmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5maWd1cmUsXFxyXFxudGFibGUsXFxyXFxucCxcXHJcXG51bCxcXHJcXG5vbCxcXHJcXG5mb3JtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfSovXFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLnUtZnVsbC13aWR0aCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG4udS1tYXgtZnVsbC13aWR0aCB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLnUtcHVsbC1yaWdodCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7IH1cXHJcXG4udS1wdWxsLWxlZnQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuaHIge1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQ2xlYXJpbmdcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5cXHJcXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxyXFxuLmNvbnRhaW5lcjphZnRlcixcXHJcXG4ucm93OmFmdGVyLFxcclxcbi51LWNmIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjbGVhcjogYm90aDsgfVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4vKlxcclxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcclxcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxyXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxyXFxudGhlcmUuXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLW1hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLW1hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYXZhdGFyIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5tZC1hdmF0YXIubWQtbGFyZ2Uge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgbWluLXdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxufVxcbi5tZC1hdmF0YXIubWQtbGFyZ2UgLm1kLWljb24ge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIG1pbi13aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi5tZC1hdmF0YXIubWQtYXZhdGFyLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbn1cXG4ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29uIC5tZC1pY29uIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG59XFxuLm1kLWF2YXRhciAubWQtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tZC1hdmF0YXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZS5tZC1hY3RpdmUge1xcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjlzO1xcbn1cXG4ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC10b3Age1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtbGVmdCB7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG59XFxuLm1kLWJhY2tkcm9wLm1kLWFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ubWQtYmFja2Ryb3AubWQtdHJhbnNwYXJlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDA1KTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYm90dG9tLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtIHtcXG4gIG1heC13aWR0aDogMTY4cHg7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTJweCAxMHB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSB7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcbi5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0IHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCxcXG4gICAgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24ge1xcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbi5tZC1ib3R0b20tYmFyLWl0ZW1bZGlzYWJsZWRdIHtcXG4gICAgb3BhY2l0eTogLjM4O1xcbn1cXG4ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA1NnB4O1xcbiAgICBtYXgtd2lkdGg6IDk2cHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIC1tcy1mbGV4OiAxIDEgMzJweDtcXG4gICAgICAgIGZsZXg6IDEgMSAzMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmbGV4LCBtaW4td2lkdGgsIG1heC13aWR0aDtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZmxleCwgbWluLXdpZHRoLCBtYXgtd2lkdGgsIC1tcy1mbGV4O1xcbn1cXG4ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29uIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDhweCwgMCk7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLXRleHQge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCA2cHgsIDApO1xcbn1cXG4ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSB7XFxuICAgICAgbWluLXdpZHRoOiA5NnB4O1xcbiAgICAgIG1heC13aWR0aDogMTY4cHg7XFxuICAgICAgLW1zLWZsZXg6IDEgMSA3MnB4O1xcbiAgICAgICAgICBmbGV4OiAxIDEgNzJweDtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sXFxuICAgICAgLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHQge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHQge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAycHgsIDApO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1NzEpIHRyYW5zbGF0ZVkoMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGNvbG9yIDAuMTVzIGxpbmVhciwgb3BhY2l0eSAwLjE1cyBsaW5lYXI7XFxufVxcbi5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLWljb24ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgY29sb3IgMC4xNXMgbGluZWFyO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1idXR0b24ge1xcbiAgbWluLXdpZHRoOiA4OHB4O1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1hcmdpbjogNnB4IDhweDtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XFxuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1kLWJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tZC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxufVxcbi5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKS5tZC1yYWlzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNCk7XFxufVxcbi5tZC1idXR0b24ubWQtcmFpc2VkOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWRlbnNlIHtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaWNvbiwgLm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWljb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbjogMCA2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24ubWQtZGVuc2Uge1xcbiAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgIG1pbi13aWR0aDogMzJweDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlIHtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1yaXBwbGUubWQtYWN0aXZlIHtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IC45cztcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIge1xcbiAgICB3aWR0aDogNTZweDtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWI6aG92ZXIsIC5tZC1idXR0b24ubWQtZmFiOmZvY3VzIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTZweDtcXG4gICAgICBsZWZ0OiAxNnB4O1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTZweDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxNnB4O1xcbiAgICAgIHJpZ2h0OiAxNnB4O1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDE2cHg7XFxuICAgICAgbGVmdDogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDE2cHg7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAxNnB4O1xcbiAgICAgIGJvdHRvbTogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtbWluaSB7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYiAubWQtaW5rLXJpcHBsZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTZweDtcXG59XFxuLm1kLWJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1yYWlzZWQsIC5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtZmFiIHtcXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4ubWQtYnV0dG9uOmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1idXR0b24gLm1kLWluay1yaXBwbGUge1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb24sXFxuLm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLXRvcCB7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0IHtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1idXR0b24tdG9nZ2xlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubWQtYnV0dG9uLXRvZ2dsZSA+IC5tZC1idXR0b24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xcbn1cXG4ubWQtYnV0dG9uLXRvZ2dsZSA+IC5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcjpub3QoLm1kLXRvZ2dsZSk6bm90KC5tZC1yYWlzZWQpIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogSW1hZ2UgYXNwZWN0IHJhdGlvIGNhbGN1bGF0b3IgKi9cXG4vKiBSZXNwb25zaXZlIGJyZWFrcG9pbnRzICovXFxuLm1kLWNhcmQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtY2FyZC5tZC13aXRoLWhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcXG59XFxuLm1kLWNhcmQubWQtd2l0aC1ob3Zlcjpob3ZlciB7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05IHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMyB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA3NSU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zIGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xIHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTE6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xIGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgKyAubWQtY2FyZC1oZWFkZXIge1xcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSArIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCA+IC5tZC10aXRsZTpmaXJzdC1jaGlsZCxcXG4gICAgLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkID4gLm1kLWNhcmQtaGVhZGVyLXRleHQgPiAubWQtdGl0bGU6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyLm1kLWNhcmQtaGVhZGVyLWZsZXgge1xcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgKyAubWQtY2FyZC1jb250ZW50IHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyICsgLm1kLWNhcmQtYWN0aW9uczpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gICAgICBmbG9hdDogbGVmdDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhciB+IC5tZC10aXRsZSxcXG4gICAgICAubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhciB+IC5tZC1zdWJoZWFkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b24ge1xcbiAgICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtaGVhZGVyLXRleHQge1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEge1xcbiAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgIC1tcy1mbGV4OiAwIDAgODBweDtcXG4gICAgICAgICAgZmxleDogMCAwIDgwcHg7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEubWQtbWVkaXVtIHtcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXG4gICAgICAgIC1tcy1mbGV4OiAwIDAgMTIwcHg7XFxuICAgICAgICAgICAgZmxleDogMCAwIDEyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLWJpZyB7XFxuICAgICAgICB3aWR0aDogMTYwcHg7XFxuICAgICAgICAtbXMtZmxleDogMCAwIDE2MHB4O1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxNjBweDtcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1zdWJoZWFkLFxcbiAgLm1kLWNhcmQgLm1kLXRpdGxlLFxcbiAgLm1kLWNhcmQgLm1kLXN1YmhlYWRpbmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tZC1jYXJkIC5tZC1zdWJoZWFkIHtcXG4gICAgb3BhY2l0eTogLjU0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1zdWJoZWFkICsgLm1kLXRpdGxlIHtcXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbi5tZC1jYXJkIC5tZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtbWVkaWEge1xcbiAgICAgIG1heC13aWR0aDogMjQwcHg7XFxuICAgICAgbWF4LWhlaWdodDogMjQwcHg7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtYWN0aW9ucyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtY29udGVudDpsYXN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24ge1xcbiAgICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYXJlYSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWNhcmQgPiAubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcXG4gICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWNhcmQgPiAubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5tZC1pbnNldCk6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpLm1kLWluc2V0OmFmdGVyIHtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICBsZWZ0OiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyLm1kLXRleHQtc2NyaW0gLm1kLWNhcmQtYmFja2Ryb3Age1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgei1pbmRleDogMTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtYXJlYSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHotaW5kZXg6IDI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWhlYWRlciArIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtc3ViaGVhZCB7XFxuICAgICAgb3BhY2l0eTogMTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSBbbWQtZXhwYW5kLXRyaWdnZXJdIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSB0cmFuc2xhdGUzRCgwLCAwLCAwKTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSAubWQtY2FyZC1jb250ZW50IHtcXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgb3BhY2l0eTogMTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAyO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgW21kLWV4cGFuZC10cmlnZ2VyXSB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWNvbnRlbnQge1xcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHdpbGwtY2hhbmdlOiBtYXJnaW47XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWNoZWNrYm94IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiA0OHB4O1xcbiAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNnB4O1xcbiAgICAgIGhlaWdodDogMTNweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDVweDtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgIGJvcmRlci10b3A6IDA7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUzRCgwLjE1LCAwLjE1LCAxKTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogLTk5OWVtO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSB7XFxuICAgICAgdG9wOiAtMTZweDtcXG4gICAgICByaWdodDogLTE2cHg7XFxuICAgICAgYm90dG9tOiAtMTZweDtcXG4gICAgICBsZWZ0OiAtMTZweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUge1xcbiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtbGFiZWwge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuLm1kLWNoZWNrYm94Lm1kLWNoZWNrZWQgLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlM0QoMSwgMSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtY2hpcCB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1kLWNoaXAubWQtZGVsZXRhYmxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtY2hpcDpmb2N1cywgLm1kLWNoaXA6YWN0aXZlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLWNoaXA6Zm9jdXM6bm90KC5tZC1kaXNhYmxlZCksIC5tZC1jaGlwOmFjdGl2ZTpub3QoLm1kLWRpc2FibGVkKSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtY2hpcC5tZC1kaXNhYmxlZCAubWQtYnV0dG9uIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLm1kLWNoaXAgLm1kLWJ1dHRvbi5tZC1kZWxldGUge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWluLXdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgcmlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1pY29uIHtcXG4gICAgICB3aWR0aDogMjBweDtcXG4gICAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1kLWNoaXAgLm1kLWJ1dHRvbi5tZC1kZWxldGUgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1yaXBwbGUge1xcbiAgICAgIG9wYWNpdHk6IC41NDtcXG59XFxuLm1kLWNoaXBzIC5tZC1jaGlwIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4ubWQtY2hpcHMgLm1kLWlucHV0LWNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tZC1jaGlwcyAubWQtaW5wdXQge1xcbiAgd2lkdGg6IDEyOHB4O1xcbiAgLW1zLWZsZXg6IDE7XFxuICAgICAgZmxleDogMTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtaW5rLXJpcHBsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxufVxcbi5tZC1yaXBwbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3BhY2l0eTogLjI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHksIHRyYW5zZm9ybSwgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0O1xcbn1cXG4ubWQtcmlwcGxlLm1kLWFjdGl2ZSB7XFxuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpIGZvcndhcmRzO1xcbn1cXG4ubWQtcmlwcGxlLm1kLWFjdGl2ZS5tZC1mYWRlb3V0IHtcXG4gICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzO1xcbn1cXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMikgdHJhbnNsYXRlWigwKTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWRpYWxvZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDg7XFxufVxcbi5tZC1kaWFsb2ctY29udGFpbmVyLm1kLWFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUgLm1kLWRpYWxvZyB7XFxuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxufVxcbi5tZC1kaWFsb2ctYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA5O1xcbn1cXG4ubWQtZGlhbG9nIHtcXG4gIG1pbi13aWR0aDogMjgwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMTA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGJveC1zaGFkb3c6IDAgN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC44NSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCB0cmFuc2Zvcm0gMC40cyAwLjA1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxufVxcbi5tZC1kaWFsb2cubWQtcmVmZXJlbmNlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuLm1kLWRpYWxvZy5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLWRpYWxvZyBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtZGlhbG9nLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBwYWRkaW5nOiAyNHB4IDI0cHggMDtcXG59XFxuLm1kLWRpYWxvZy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xcbiAgLW1zLWZsZXg6IDE7XFxuICAgICAgZmxleDogMTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBhdXRvO1xcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgMCwgI2ZmZiAxcHgsIHRyYW5zcGFyZW50IDFweCksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYgMCwgI2ZmZiAzcHgsIHRyYW5zcGFyZW50IDNweCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4xMikgMCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAxcHgsIHRyYW5zcGFyZW50IDFweCksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC4yKSAxcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAycHgsIHRyYW5zcGFyZW50IDJweCk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxvY2FsLCBsb2NhbCwgc2Nyb2xsLCBzY3JvbGw7XFxufVxcbi5tZC1kaWFsb2ctY29udGVudDpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRlbnQgcDpmaXJzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLm1kLWRpYWxvZy1jb250ZW50IHA6bGFzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1kLWRpYWxvZy1ib2R5IHtcXG4gIG1hcmdpbjogMCAtMjRweDtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ubWQtZGlhbG9nLWFjdGlvbnMge1xcbiAgbWluLWhlaWdodDogNTJweDtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWRpYWxvZy1hY3Rpb25zOmJlZm9yZSB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWRpYWxvZy1hY3Rpb25zIC5tZC1idXR0b24ge1xcbiAgICBtaW4td2lkdGg6IDY0cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1kaXZpZGVyLm1kLWluc2V0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWZpbGUge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXg6IDE7XFxuICAgICAgZmxleDogMTtcXG59XFxuLm1kLWZpbGUgaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdIHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogLTFweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xcbiAgICBib3JkZXI6IDA7XFxufVxcbi5tZC1maWxlIC5tZC1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1pY29uIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgbWluLXdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWluLWhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5tZC1pY29uLm1kLXNpemUtMngge1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgbWluLXdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuLm1kLWljb24ubWQtc2l6ZS0zeCB7XFxuICAgIHdpZHRoOiA3MnB4O1xcbiAgICBtaW4td2lkdGg6IDcycHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgbWluLWhlaWdodDogNzJweDtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbn1cXG4ubWQtaWNvbi5tZC1zaXplLTR4IHtcXG4gICAgd2lkdGg6IDk2cHg7XFxuICAgIG1pbi13aWR0aDogOTZweDtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbiAgICBtaW4taGVpZ2h0OiA5NnB4O1xcbiAgICBmb250LXNpemU6IDk2cHg7XFxufVxcbi5tZC1pY29uLm1kLXNpemUtNXgge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIG1pbi13aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDEyMHB4O1xcbn1cXG4ubWQtaWNvbiBzdmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5pbWcubWQtaWNvbiB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWltYWdlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBmaWx0ZXI6IHNhdHVyYXRlKDIwJSk7XFxufVxcbi5tZC1pbWFnZS5tZC1ibGFjay1vdXRwdXQge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC40KSBzYXR1cmF0ZSgyMCUpO1xcbn1cXG4ubWQtaW1hZ2UubWQtbG9hZGVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjFzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBmaWx0ZXIgMi4ycyAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgbWFyZ2luOiA0cHggMCAyNHB4O1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXI6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIzcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCxcXG4gIC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmb250LXNpemU7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzLFxcbiAgICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGluaXRpYWw7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB+IC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCB+IC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVyLFxcbiAgICAgIC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlciB7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IGF1dG87XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1lcnJvcixcXG4gIC5tZC1pbnB1dC1jb250YWluZXIgLm1kLWNvdW50IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLThweCwgMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIHtcXG4gICAgbWFyZ2luOiA0cHggYXV0bztcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVyIHtcXG4gICAgICB3aWR0aDogMzZweDtcXG4gICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IGxhYmVsIHtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIH4gLm1kLWlucHV0LFxcbiAgICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIH4gLm1kLXRleHRhcmVhLFxcbiAgICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIH4gLm1kLWZpbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGxhYmVsIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgdG9wOiAxMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCxcXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIGxhYmVsLCAubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBsYWJlbCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHRvcDogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBpbnB1dCxcXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgdGV4dGFyZWEsIC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LFxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgdGV4dGFyZWEge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lIGxhYmVsIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZS5tZC1pbnB1dC1mb2N1c2VkIGxhYmVsIHtcXG4gIHRvcDogMjNweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQ6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogYm90dG9tIGxlZnQgcmVwZWF0LXg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC4zOCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4zOCkgMzMlLCB0cmFuc3BhcmVudCAwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxcHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgbGFiZWwsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBpbnB1dCxcXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIHRleHRhcmVhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZC5tZC1pbnB1dC1mb2N1c2VkIC5tZC10b2dnbGUtcGFzc3dvcmQge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0ycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQgLm1kLXRvZ2dsZS1wYXNzd29yZCAubWQtaW5rLXJpcHBsZSB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWludmFsaWQgLm1kLWVycm9yIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXJlcXVpcmVkIGxhYmVsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMnB4KSk7XFxuICBjb250ZW50OiBcXFwiKlxcXCI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtc2VsZWN0OmhvdmVyIC5tZC1zZWxlY3Q6bm90KC5tZC1kaXNhYmxlZCk6YWZ0ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogSW1hZ2UgYXNwZWN0IHJhdGlvIGNhbGN1bGF0b3IgKi9cXG4vKiBSZXNwb25zaXZlIGJyZWFrcG9pbnRzICovXFxuLyogUm93cyBhbmQgQ29sdW1ucyAqL1xcbi5tZC1sYXlvdXQge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXg6IDE7XFxuICAgICAgZmxleDogMTtcXG59XFxuLm1kLXJvdyB7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uIHtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIENvbnRhaW5lciAqL1xcbi5tZC1sYXlvdXQubWQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcbi5tZC1sYXlvdXQubWQtY29udGFpbmVyLm1kLWNlbnRlcmVkIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIEFsaWdubWVudHMgKi9cXG4ubWQtYWxpZ24tc3RhcnQge1xcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24tY2VudGVyIHtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLWVuZCB7XFxuICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLyogR3V0dGVyIFNpemUgKi9cXG4ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSB7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG4ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxufVxcbi5tZC1ndXR0ZXIgLm1kLWNvbHVtbiB7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbn1cXG4ubWQtZ3V0dGVyIC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTQ0cHgpIHtcXG4ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSB7XFxuICAgIG1hcmdpbi1yaWdodDogLThweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcbi5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG4ubWQtZ3V0dGVyIC5tZC1jb2x1bW4ge1xcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xcbn1cXG4ubWQtZ3V0dGVyIC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbn1cXG4ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pIHtcXG4gIG1hcmdpbi1yaWdodDogLTRweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcbi5tZC1ndXR0ZXItOCAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTE2Om5vdCgubWQtY29sdW1uKSB7XFxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuLm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLm1kLWd1dHRlci0xNiAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTE2IC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuLm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG59XFxuLm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbn1cXG4ubWQtZ3V0dGVyLTI0IC5tZC1jb2x1bW4ge1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG59XFxuLm1kLWd1dHRlci0yNCAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG59XFxuLm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG59XFxuLm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTQwIC5tZC1jb2x1bW4ge1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuLm1kLWd1dHRlci00MCAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogRmxleCBTaXplICovXFxuLm1kLWZsZXgge1xcbiAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICBmbGV4OiAxIDE7XFxufVxcbi5tZC1mbGV4LTMzIHtcXG4gIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7XFxuICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtNjYge1xcbiAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTtcXG4gICAgICBmbGV4OiAwIDEgNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtMzMge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTY2IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LTUge1xcbiAgbWluLXdpZHRoOiA1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgZmxleDogMCAxIDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxufVxcbi5tZC1mbGV4LTEwIHtcXG4gIG1pbi13aWR0aDogMTAlO1xcbiAgLW1zLWZsZXg6IDAgMSAxMCU7XFxuICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LTE1IHtcXG4gIG1pbi13aWR0aDogMTUlO1xcbiAgLW1zLWZsZXg6IDAgMSAxNSU7XFxuICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcbi5tZC1mbGV4LTIwIHtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgZmxleDogMCAxIDIwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XFxufVxcbi5tZC1mbGV4LTI1IHtcXG4gIG1pbi13aWR0aDogMjUlO1xcbiAgLW1zLWZsZXg6IDAgMSAyNSU7XFxuICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LTMwIHtcXG4gIG1pbi13aWR0aDogMzAlO1xcbiAgLW1zLWZsZXg6IDAgMSAzMCU7XFxuICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcbi5tZC1mbGV4LTM1IHtcXG4gIG1pbi13aWR0aDogMzUlO1xcbiAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgZmxleDogMCAxIDM1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTM1IHtcXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XFxufVxcbi5tZC1mbGV4LTQwIHtcXG4gIG1pbi13aWR0aDogNDAlO1xcbiAgLW1zLWZsZXg6IDAgMSA0MCU7XFxuICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTQwIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LTQ1IHtcXG4gIG1pbi13aWR0aDogNDUlO1xcbiAgLW1zLWZsZXg6IDAgMSA0NSU7XFxuICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTQ1IHtcXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVxcbi5tZC1mbGV4LTUwIHtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgZmxleDogMCAxIDUwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTUwIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5tZC1mbGV4LTU1IHtcXG4gIG1pbi13aWR0aDogNTUlO1xcbiAgLW1zLWZsZXg6IDAgMSA1NSU7XFxuICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTU1IHtcXG4gIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LTYwIHtcXG4gIG1pbi13aWR0aDogNjAlO1xcbiAgLW1zLWZsZXg6IDAgMSA2MCU7XFxuICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTYwIHtcXG4gIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcbi5tZC1mbGV4LTY1IHtcXG4gIG1pbi13aWR0aDogNjUlO1xcbiAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgZmxleDogMCAxIDY1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTY1IHtcXG4gIG1hcmdpbi1sZWZ0OiA2NSU7XFxufVxcbi5tZC1mbGV4LTcwIHtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgLW1zLWZsZXg6IDAgMSA3MCU7XFxuICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTcwIHtcXG4gIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LTc1IHtcXG4gIG1pbi13aWR0aDogNzUlO1xcbiAgLW1zLWZsZXg6IDAgMSA3NSU7XFxuICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTc1IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tZC1mbGV4LTgwIHtcXG4gIG1pbi13aWR0aDogODAlO1xcbiAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgZmxleDogMCAxIDgwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTgwIHtcXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XFxufVxcbi5tZC1mbGV4LTg1IHtcXG4gIG1pbi13aWR0aDogODUlO1xcbiAgLW1zLWZsZXg6IDAgMSA4NSU7XFxuICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTg1IHtcXG4gIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LTkwIHtcXG4gIG1pbi13aWR0aDogOTAlO1xcbiAgLW1zLWZsZXg6IDAgMSA5MCU7XFxuICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTkwIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MCU7XFxufVxcbi5tZC1mbGV4LTk1IHtcXG4gIG1pbi13aWR0aDogOTUlO1xcbiAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgZmxleDogMCAxIDk1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTk1IHtcXG4gIG1hcmdpbi1sZWZ0OiA5NSU7XFxufVxcbi5tZC1mbGV4LTEwMCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICAtbXMtZmxleDogMCAxIDEwMCU7XFxuICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0xMDAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblxcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTkwNHB4KSB7XFxuLm1kLXJvdy14bGFyZ2Uge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZC1jb2x1bW4teGxhcmdlIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWQtZmxleC14bGFyZ2Uge1xcbiAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMzMge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7XFxuICAgICAgICBmbGV4OiAwIDEgMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNjYge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7XFxuICAgICAgICBmbGV4OiAwIDEgNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTMzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS01IHtcXG4gICAgbWluLXdpZHRoOiA1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMTAge1xcbiAgICBtaW4td2lkdGg6IDEwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTE1IHtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0yMCB7XFxuICAgIG1pbi13aWR0aDogMjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDIwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAyMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMjUge1xcbiAgICBtaW4td2lkdGg6IDI1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTI1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTMwIHtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0zNSB7XFxuICAgIG1pbi13aWR0aDogMzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDM1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAzNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzUge1xcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNDAge1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTQwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTQ1IHtcXG4gICAgbWluLXdpZHRoOiA0NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS01MCB7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDUwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA1MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTAge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNTUge1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTU1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTYwIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS02NSB7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDY1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjUge1xcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNzAge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTcwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTc1IHtcXG4gICAgbWluLXdpZHRoOiA3NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS04MCB7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICAtbXMtZmxleDogMCAxIDgwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA4MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODAge1xcbiAgICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtODUge1xcbiAgICBtaW4td2lkdGg6IDg1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4NSU7XFxuICAgICAgICBmbGV4OiAwIDEgODUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTg1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTkwIHtcXG4gICAgbWluLXdpZHRoOiA5MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS05NSB7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDk1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA5NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTUge1xcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMTAwIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMDAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuLm1kLWFsaWduLXhsYXJnZS1zdGFydCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24teGxhcmdlLWNlbnRlciB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWQtYWxpZ24teGxhcmdlLWVuZCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZC1oaWRlLXhsYXJnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTkwM3B4KSB7XFxuLm1kLXJvdy1sYXJnZSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbi1sYXJnZSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgtbGFyZ2Uge1xcbiAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0zMyB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0xMCB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTE1IHtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTE1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0yNSB7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTMwIHtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzUge1xcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS00MCB7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDQwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTQ1IHtcXG4gICAgbWluLXdpZHRoOiA0NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTQ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTAge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS01NSB7XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDU1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTYwIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTYwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjUge1xcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS03MCB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDcwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTc1IHtcXG4gICAgbWluLXdpZHRoOiA3NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTc1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtODAge1xcbiAgICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS04NSB7XFxuICAgIG1pbi13aWR0aDogODUlO1xcbiAgICAtbXMtZmxleDogMCAxIDg1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTkwIHtcXG4gICAgbWluLXdpZHRoOiA5MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTkwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTUge1xcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0xMDAge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi1sYXJnZS1zdGFydCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24tbGFyZ2UtY2VudGVyIHtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi1sYXJnZS1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS1sYXJnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI2NHB4KSB7XFxuLm1kLXJvdy1tZWRpdW0ge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZC1jb2x1bW4tbWVkaXVtIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0ge1xcbiAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMzMge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7XFxuICAgICAgICBmbGV4OiAwIDEgMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNjYge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7XFxuICAgICAgICBmbGV4OiAwIDEgNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTMzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS01IHtcXG4gICAgbWluLXdpZHRoOiA1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMTAge1xcbiAgICBtaW4td2lkdGg6IDEwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTE1IHtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0yMCB7XFxuICAgIG1pbi13aWR0aDogMjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDIwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAyMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMjAge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMjUge1xcbiAgICBtaW4td2lkdGg6IDI1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTI1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTMwIHtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0zNSB7XFxuICAgIG1pbi13aWR0aDogMzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDM1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAzNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzUge1xcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNDAge1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTQwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTQ1IHtcXG4gICAgbWluLXdpZHRoOiA0NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS01MCB7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDUwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA1MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNTAge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNTUge1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTU1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTYwIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS02NSB7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDY1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjUge1xcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNzAge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTcwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTc1IHtcXG4gICAgbWluLXdpZHRoOiA3NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS04MCB7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICAtbXMtZmxleDogMCAxIDgwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA4MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tODAge1xcbiAgICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tODUge1xcbiAgICBtaW4td2lkdGg6IDg1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4NSU7XFxuICAgICAgICBmbGV4OiAwIDEgODUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTg1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTkwIHtcXG4gICAgbWluLXdpZHRoOiA5MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS05NSB7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDk1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA5NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTUge1xcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMTAwIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMDAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuLm1kLWFsaWduLW1lZGl1bS1zdGFydCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24tbWVkaXVtLWNlbnRlciB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWQtYWxpZ24tbWVkaXVtLWVuZCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZC1oaWRlLW1lZGl1bSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTQ0cHgpIHtcXG4ubWQtcm93LXNtYWxsIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLXNtYWxsIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWQtZmxleC1zbWFsbCB7XFxuICAgIC1tcy1mbGV4OiAxIDE7XFxuICAgICAgICBmbGV4OiAxIDE7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNjYge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7XFxuICAgICAgICBmbGV4OiAwIDEgNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMzMge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC01IHtcXG4gICAgbWluLXdpZHRoOiA1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMTUge1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0yMCB7XFxuICAgIG1pbi13aWR0aDogMjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDIwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAyMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTI1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMzAge1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0zNSB7XFxuICAgIG1pbi13aWR0aDogMzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDM1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAzNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0zNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNDUge1xcbiAgICBtaW4td2lkdGg6IDQ1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC01MCB7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDUwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA1MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC01MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTU1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNjAge1xcbiAgICBtaW4td2lkdGg6IDYwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC02NSB7XFxuICAgIG1pbi13aWR0aDogNjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDY1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC02NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTcwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNzUge1xcbiAgICBtaW4td2lkdGg6IDc1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC04MCB7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICAtbXMtZmxleDogMCAxIDgwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA4MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC04MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTg1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtOTAge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5MCU7XFxuICAgICAgICBmbGV4OiAwIDEgOTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC05NSB7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDk1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA5NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC05NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0xMDAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuLm1kLWFsaWduLXNtYWxsLXN0YXJ0IHtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1hbGlnbi1zbWFsbC1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLXNtYWxsLWVuZCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZC1oaWRlLXNtYWxsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1yb3cteHNtYWxsIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLXhzbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgteHNtYWxsIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi14c21hbGwtc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLXhzbWFsbC1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLXhzbWFsbC1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS14c21hbGwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2Uge1xcbiAgICBwYWRkaW5nOiA0cHggMDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS5tZC1pbnNldCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA3MnB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtYXZhdGFyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWF2YXRhciB7XFxuICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgbWluLXdpZHRoOiAzMnB4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtaW4taGVpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtLWV4cGFuZCB7XFxuICAgICAgbWluLWhlaWdodDogNDBweDtcXG59XFxuLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBtaW4td2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbWluLWhlaWdodDogMzZweDtcXG59XFxuLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtbGlzdC5tZC1kb3VibGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogNzJweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBtaW4td2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbWluLWhlaWdodDogMzZweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogODhweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWF2YXRhciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1kLWxpc3QgLm1kLXN1YmhlYWRlci5tZC1pbnNldCB7XFxuICAgIHBhZGRpbmctbGVmdDogNzJweDtcXG59XFxuLm1kLWxpc3QgPiAubWQtc3ViaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ubWQtbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWxpc3QtaXRlbS5tZC1pbnNldCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogNzJweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyID4gLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgPiAubWQtaWNvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb24ge1xcbiAgICAgIG1hcmdpbjogMCAtMnB4IDAgMDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb246bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMnB4IDAgMTZweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1kaXZpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1pY29uLFxcbiAgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1pY29uOmZpcnN0LW9mLXR5cGUgKyAqLFxcbiAgICAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3Qtb2YtdHlwZSArICoge1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgZmxleDogMSAxIGF1dG87XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1pY29uIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWluay1yaXBwbGUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCB7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgLW1zLWZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZSwgLm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQ6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YmVmb3JlLCAubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmxhc3Qtb2YtdHlwZTphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlID4gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtZXhwYW5kLWluZGljYXRvciB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZSA+IC5tZC1saXN0LWV4cGFuZCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCA+IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyID4gLm1kLWxpc3QtaXRlbS1ob2xkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1leHBhbnNpb24taW5kaWNhdG9yLFxcbiAgLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIsXFxuICAubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtaWNvbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxuICAgIHdpbGwtY2hhbmdlOiBtYXJnaW4tYm90dG9tO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZC5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQgLm1kLWxpc3Qge1xcbiAgICAgIHBhZGRpbmc6IDA7XFxufVxcbi5tZC1saXN0LXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgLW1zLWZsZXg6IDE7XFxuICAgICAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMS4yNWVtO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4ubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSxcXG4gIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtbWVudSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQge1xcbiAgd2lkdGg6IDE2OHB4O1xcbiAgbWluLXdpZHRoOiA4NHB4O1xcbiAgbWF4LXdpZHRoOiAzOTJweDtcXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTIwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuODUpIHRyYW5zbGF0ZVooMCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBvcGFjaXR5IDAuMjVzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpLCBtYXJnaW4gMC4ycyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSwgdHJhbnNmb3JtIDBzIDAuMjVzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eSwgd2lkdGg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodCB7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLThweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdCB7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1sZWZ0Lm1kLWFjdGl2ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogLTExcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0Lm1kLWFjdGl2ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0Lm1kLWFjdGl2ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1hbGlnbi10cmlnZ2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMSB7XFxuICAgIHdpZHRoOiA4NHB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMiB7XFxuICAgIHdpZHRoOiAxMTJweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTMge1xcbiAgICB3aWR0aDogMTY4cHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00IHtcXG4gICAgd2lkdGg6IDIyNHB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNSB7XFxuICAgIHdpZHRoOiAyODBweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTYge1xcbiAgICB3aWR0aDogMzM2cHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03IHtcXG4gICAgd2lkdGg6IDM5MnB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVooMCk7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIG9wYWNpdHkgMC4zNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIHRyYW5zZm9ybSAwLjI1cyAwLjA1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmUgLm1kLWxpc3Qge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIDAuMTVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtbWVudS1jb250ZW50IC5tZC1saXN0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtbWVudS1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG59XFxuLm1kLW1lbnUtaXRlbVtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtcHJvZ3Jlc3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazpiZWZvcmUsIC5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XFxuICAgICAgY29udGVudDogJyc7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSAyLjNzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcXG59XFxuLm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmFmdGVyIHtcXG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUtc2hvcnQgMi4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4xNXM7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1lbnRlciwgLm1kLXByb2dyZXNzLm1kLXByb2dyZXNzLWxlYXZlLWFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApIHRyYW5zbGF0ZVooMCk7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1lbnRlci1hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4ubWQtcHJvZ3Jlc3MtdHJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWluZGV0ZXJtaW5hdGUge1xcbjAlIHtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IC0zNSU7XFxufVxcbjYwJSB7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgbGVmdDogMTAwJTtcXG59XFxuMTAwJSB7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgbGVmdDogMTAwJTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1zaG9ydCB7XFxuMCUge1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgbGVmdDogLTIwMCU7XFxufVxcbjYwJSB7XFxuICAgIHJpZ2h0OiAtOCU7XFxuICAgIGxlZnQ6IDEwNyU7XFxufVxcbjEwMCUge1xcbiAgICByaWdodDogLTglO1xcbiAgICBsZWZ0OiAxMDclO1xcbn1cXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtcmFkaW8ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDE2cHggOHB4IDE2cHggMDtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDNweDtcXG4gICAgICByaWdodDogM3B4O1xcbiAgICAgIGJvdHRvbTogM3B4O1xcbiAgICAgIGxlZnQ6IDNweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMC4zOCwgMC4zOCwgMSk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IC05OTllbTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIHRvcDogLTE2cHg7XFxuICAgICAgcmlnaHQ6IC0xNnB4O1xcbiAgICAgIGJvdHRvbTogLTE2cHg7XFxuICAgICAgbGVmdDogLTE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlIHtcXG4gICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubWQtcmFkaW8gLm1kLXJhZGlvLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1yYWRpby5tZC1jaGVja2VkIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEyOHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtc2VsZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLXNlbGVjdDphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZVkoMC40NSkgc2NhbGVYKDAuODUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI1QkNcXFwiO1xcbn1cXG4ubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnUge1xcbiAgICB0b3A6IC04cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgc2NhbGUzRCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIHRyYW5zZm9ybSwgdG9wO1xcbn1cXG4ubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnUgPiAqIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xNXM7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjFzO1xcbn1cXG4ubWQtc2VsZWN0Lm1kLWRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItZHJhZzogbm9uZTtcXG59XFxuLm1kLXNlbGVjdCBzZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC05OTllbTtcXG59XFxuLm1kLXNlbGVjdCAubWQtbWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzNweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlciB7XFxuICAgIGNvbG9yOiByZ2JhKDExNywgMTE3LCAxMTcsIDAuODcpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5tZC1zZWxlY3QtY29udGVudCB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDI1NnB4O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodCB7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XFxufVxcbi5tZC1zZWxlY3QtY29udGVudCAubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94LWxhYmVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXNpZGVuYXYubWQtbGVmdCAubWQtc2lkZW5hdi1jb250ZW50IHtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC0xMDAlLCAwLCAwKTtcXG59XFxuLm1kLXNpZGVuYXYubWQtcmlnaHQgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICByaWdodDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMTAwJSwgMCwgMCk7XFxufVxcbi5tZC1zaWRlbmF2Lm1kLWZpeGVkIC5tZC1zaWRlbmF2LWNvbnRlbnQsXFxuLm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ubWQtc2lkZW5hdiAubWQtc2lkZW5hdi1jb250ZW50IHtcXG4gIHdpZHRoOiAzMDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcbi5tZC1zaWRlbmF2IC5tZC1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcbi5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1jb250ZW50IHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtYmFja2Ryb3Age1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovXFxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xcbi5tZC1zbmFja2JhciB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMjA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbi10b3AsIG1hcmdpbi1ib3R0b207XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWNlbnRlciB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnQge1xcbiAgICB0b3A6IDA7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyIC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0IC5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgY2FsYygtMTAwJSAtIDI0cHgpLCAwKTtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCB7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodCAubWQtc25hY2tiYXItY29udGFpbmVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCBjYWxjKDEwMCUgKyAyNHB4KSwgMCk7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRlbnQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgMC4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLXNuYWNrYmFyIHtcXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxufVxcbi5tZC1zbmFja2JhciAubWQtc25hY2tiYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcXG59XFxuLm1kLXNuYWNrYmFyIC5tZC1idXR0b24ge1xcbiAgICBtaW4td2lkdGg6IDY0cHg7XFxuICAgIG1hcmdpbjogLThweCAtMTZweDtcXG59XFxuLm1kLXNuYWNrYmFyIC5tZC1idXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxufVxcbi5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtaW4td2lkdGg6IDI4OHB4O1xcbiAgbWF4LXdpZHRoOiA1NjhweDtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAxNHB4IDI0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG59XFxuLm1kLWhhcy10b2FzdC10b3AtcmlnaHQgLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNjhweCwgMCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QtdG9wLXJpZ2h0IC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA0OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtdG9wLWNlbnRlciAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTUwJSwgNjhweCwgMCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QtdG9wLWNlbnRlciAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC01MCUsIDQ4cHgsIDApO1xcbn1cXG59XFxuLm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LXRvcC1sZWZ0IC5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDQ4cHgsIDApO1xcbn1cXG59XFxuLm1kLWhhcy10b2FzdC1ib3R0b20tcmlnaHQgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1yaWdodCAubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTQ4cHgsIDApO1xcbn1cXG59XFxuLm1kLWhhcy10b2FzdC1ib3R0b20tY2VudGVyIC5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCAtNjhweCwgMCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC01MCUsIC00OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtYm90dG9tLWxlZnQgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtNjhweCwgMCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QtYm90dG9tLWxlZnQgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTQ4cHgsIDApO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHQsXFxuICAubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIsXFxuICAubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA0NHB4LCAwKTtcXG59XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0LFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyLFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTQ0cHgsIDApO1xcbn1cXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxufVxcbi5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItZHJhdyB7XFxuICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGUgMS45cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVooMCk7XFxufVxcbi5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItcGF0aCB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIsIDIwMDtcXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyLWRhc2ggMS40MjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG4ubWQtc3Bpbm5lci5tZC1zcGlubmVyLWxlYXZlLWFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KSB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG4ubWQtc3Bpbm5lcjpub3QoLm1kLWluZGV0ZXJtaW5hdGUpLm1kLXNwaW5uZXItZW50ZXItYWN0aXZlIC5tZC1zcGlubmVyLWRyYXcge1xcbiAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1pbml0aWFsLXJvdGF0ZSAxLjk4cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSBmb3J3YXJkcztcXG59XFxuLm1kLXNwaW5uZXItZHJhdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbn1cXG4ubWQtc3Bpbm5lci1wYXRoIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRlIHtcXG50byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlWigwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgc3Bpbm5lci1pbml0aWFsLXJvdGF0ZSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVooMCk7XFxufVxcbjIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItZGFzaCB7XFxuMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyLCAyMDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbn1cXG41MCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XFxufVxcbjEwMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xcbn1cXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc3ViaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1zd2l0Y2gge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDE2cHggOHB4IDE2cHggMDtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLXRodW1iIHtcXG4gICAgICB3aWR0aDogMjBweDtcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IC05OTllbTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSB7XFxuICAgICAgdG9wOiAtMTZweDtcXG4gICAgICByaWdodDogLTE2cHg7XFxuICAgICAgYm90dG9tOiAtMTZweDtcXG4gICAgICBsZWZ0OiAtMTZweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7XFxuICAgICAgICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlciB7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlcjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtbGFiZWwge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLm1kLXN3aXRjaC5tZC1kcmFnZ2luZyAubWQtc3dpdGNoLXRodW1iIHtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbi5tZC1zd2l0Y2gubWQtZGlzYWJsZWQgLm1kLXN3aXRjaC10aHVtYiB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXRhYmxlIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG4ubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLXRhYmxlLWNlbGwsXFxuICAubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIsXFxuICAubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5tZC10YWJsZSB0YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3cge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcXG59XFxuLm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3cubWQtc2VsZWN0ZWQgLm1kLXRhYmxlLWNlbGwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxufVxcbi5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93OmhvdmVyIC5tZC10YWJsZS1jZWxsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQ6bGFzdC1jaGlsZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dCB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLm1kLW51bWVyaWMge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb24ge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIG1pbi13aWR0aDogMTZweDtcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgbWluLWhlaWdodDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpub3QoLm1kLXNvcnRhYmxlLWljb24pIHtcXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBwYWRkaW5nOiAxNHB4IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtdGV4dCB7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlOmZpcnN0LW9mLXR5cGUgLm1kLXNvcnRhYmxlLWljb24ge1xcbiAgICAgIGxlZnQ6IGF1dG87XFxuICAgICAgcmlnaHQ6IDEwcHg7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXIsIC5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpob3ZlciAubWQtc29ydGFibGUtaWNvbiwgLm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb24ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb24ge1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZC1kZXNjZW5kaW5nIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGUgLm1kLXNvcnRhYmxlLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGUgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGw6bGFzdC1jaGlsZCAubWQtdGFibGUtY2VsbC1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWMgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtaGFzLWFjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmc6IDZweCAzMnB4IDZweCAyNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMTBweCAwIDA7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uIC5tZC1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgICAgbWluLXdpZHRoOiAxOHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMThweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uICsgLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyLFxcbiAgICAubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiArIC5tZC10YWJsZS1oZWFkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0IHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94IHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveC1jb250YWluZXIge1xcbiAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIGhlaWdodDogMThweDtcXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAtMXB4O1xcbiAgICAgICAgbGVmdDogNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXNlbGVjdCB7XFxuICAgIG1pbi13aWR0aDogODRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC1zZWxlY3QtdmFsdWUsXFxuICAubWQtdGFibGUgLm1kLW9wdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWVkaXQtdHJpZ2dlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLXRhYmxlLWVkaXQtdHJpZ2dlci5tZC1lZGl0ZWQge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZyB7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAyNHB4IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMjRweDtcXG4gIHotaW5kZXg6IDYwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBtYXgtaGVpZ2h0IDBzIDAuNXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC04cHgsIDApO1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nLm1kLWFjdGl2ZSB7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgjMDAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG59XFxuLm1kLXRhYmxlLWRpYWxvZy5tZC1sYXJnZSB7XFxuICAgIHBhZGRpbmc6IDEycHggMjRweCAycHg7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCB7XFxuICAgICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1jaGFyLWNvdW50ZXIge1xcbiAgICBmb250LXNpemU6IDEzLjVweDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cgLm1kLWJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogNjRweDtcXG59XFxuLm1kLXRhYmxlLWNhcmQge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10b29sYmFyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGl0bGUge1xcbiAgICAtbXMtZmxleDogMTtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24ge1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleDogMTtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXMge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0IHtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtaW4td2lkdGg6IDM2cHg7XFxuICAgICAgbWFyZ2luOiAwIDMycHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3Q6YWZ0ZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVlIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbltkaXNhYmxlZF0gLm1kLWljb24ge1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbn1cXG4ubWQtcGFnaW5hdGlvbi1zZWxlY3QubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodCB7XFxuICBtYXJnaW4tdG9wOiAtMTZweDtcXG59XFxuLm1kLXBhZ2luYXRpb24tc2VsZWN0IC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG59XFxuLm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIubWQtYWN0aXZlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoIzAwMCk7XFxufVxcbi5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIC5tZC1jb3VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10YWJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtdGFicy5tZC10cmFuc2l0aW9uLW9mZiAqIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdGFicy5tZC1keW5hbWljLWhlaWdodCAubWQtdGFicy1jb250ZW50IHtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1pY29uLm1kLWhhcy1sYWJlbCB7XFxuICAgICAgbWluLWhlaWdodDogNzJweDtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwgLm1kLWljb24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1jZW50ZXJlZCB7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1maXhlZCAubWQtdGFiLWhlYWRlciB7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtcmlnaHQge1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIge1xcbiAgICBtaW4td2lkdGg6IDcycHg7XFxuICAgIG1heC13aWR0aDogMjY0cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWhlYWRlci5tZC1kaXNhYmxlZCB7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIgLm1kLWljb24ge1xcbiAgICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3Ige1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRyYW5zaXRpb24tb2ZmIHtcXG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRvLXJpZ2h0IHtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSwgcmlnaHQgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1sZWZ0IHtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSksIGxlZnQgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDk5OTllbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10b29sYmFyIHtcXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC10b29sYmFyLm1kLWRlbnNlIHtcXG4gICAgbWluLWhlaWdodDogNDhweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbWVkaXVtIHtcXG4gICAgICBtaW4taGVpZ2h0OiA3MnB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1kZW5zZS5tZC1sYXJnZSB7XFxuICAgICAgbWluLWhlaWdodDogOTZweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtZGVuc2UgLm1kLXRvb2xiYXItY29udGFpbmVyIHtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLW1lZGl1bSB7XFxuICAgIG1pbi1oZWlnaHQ6IDg4cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLW1lZGl1bSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWxhcmdlIHtcXG4gICAgbWluLWhlaWdodDogMTI4cHg7XFxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogaW5oZXJpdDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGluaGVyaXQ7XFxufVxcbi5tZC10b29sYmFyLm1kLWxhcmdlIC5tZC10b29sYmFyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm1kLXRpdGxlOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogNTZweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxNjRweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxufVxcbi5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCB7XFxuICAgICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWF2YXRhciArIC5tZC1hdmF0YXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcbi5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIgPiAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lciA+IC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLXRvb2xiYXIgPiAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLm1kLXRvb2xiYXIgPiAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4ubWQtdG9vbGJhciAubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCk6bm90KC5tZC1pY29uLWJ1dHRvbik6bm90KC5tZC1mYWIpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLXRpdGxlOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAtOHB4O1xcbiAgICAtbXMtZmxleDogMTtcXG4gICAgICAgIGZsZXg6IDE7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXRvb2x0aXAge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC44Nyk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJOb3RvIFNhbnNcXFwiLCBOb3RvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC10b29sdGlwLm1kLWFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZC10b29sdGlwOm5vdCgubWQtYWN0aXZlKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XFxufVxcbi5tZC10b29sdGlwLm1kLXRyYW5zaXRpb24tb2ZmIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLXRvcCB7XFxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA4cHgpO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLXRvcC5tZC1hY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04cHgsIDUwJSk7XFxufVxcbi5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQubWQtYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbSB7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04cHgpO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbS5tZC1hY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnQge1xcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgNTAlKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0Lm1kLWFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtd2hpdGVmcmFtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xZHAge1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTJkcCB7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtM2RwIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS00ZHAge1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS01ZHAge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS02ZHAge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtN2RwIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtOGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtOWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTBkcCB7XFxuICBib3gtc2hhZG93OiAwIDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xMWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTEyZHAge1xcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTNkcCB7XFxuICBib3gtc2hhZG93OiAwIDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xNGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE1ZHAge1xcbiAgYm94LXNoYWRvdzogMCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTZkcCB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTdkcCB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMThkcCB7XFxuICBib3gtc2hhZG93OiAwIDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTlkcCB7XFxuICBib3gtc2hhZG93OiAwIDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMjBkcCB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTIxZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yMmRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA4cHggNDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMjNkcCB7XFxuICBib3gtc2hhZG93OiAwIDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTI0ZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD12dWUtbWF0ZXJpYWwuY3NzLm1hcCovXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDc2ZWEyMGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxBcHAudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPHRvb2xiYXI+PC90b29sYmFyPlxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50IHBhZ2Utdmlld1wiPlxuICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC10aXRsZT1cImRpYWxvZy50aXRsZVwiIDptZC1jb250ZW50LWh0bWw9XCJkaWFsb2cuY29udGVudFwiIHJlZj1cIm1vZGFsRGlhbG9nXCI+XG4gICAgPC9tZC1kaWFsb2ctYWxlcnQ+XG4gICAgPG1kLWRpYWxvZy1jb25maXJtIDptZC10aXRsZT1cImNvbmZpcm0udGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiY29uZmlybS5jb250ZW50XCIgOm1kLW9rLXRleHQ9XCJjb25maXJtLm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwiY29uZmlybS5jYW5jZWxcIlxuICAgICAgQGNsb3NlPVwib25Db25maXJtQ2xvc2VcIiByZWY9XCJjb25maXJtRGlhbG9nXCI+XG4gICAgICA8L21kLWRpYWxvZy1jb25maXJtPlxuICAgICAgPG1kLWRpYWxvZy1wcm9tcHQgOm1kLXRpdGxlPVwicHJvbXB0LnRpdGxlXCIgOm1kLW9rLXRleHQ9XCJwcm9tcHQub2tcIiA6bWQtY2FuY2VsLXRleHQ9XCJwcm9tcHQuY2FuY2VsXCIgOm1kLWlucHV0LXBsYWNlaG9sZGVyPVwicHJvbXB0LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgQGNsb3NlPVwib25Qcm9tcHRDbG9zZVwiIHYtbW9kZWw9XCJwcm9tcHQucmVzcFwiIHJlZj1cInByb21wdERpYWxvZ1wiPlxuICAgICAgICA8L21kLWRpYWxvZy1wcm9tcHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUb29sYmFyIGZyb20gJy4vY29tcG9uZW50cy90b29sYmFyJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHU6IHtcbiAgICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpYWxvZzoge1xuICAgICAgICAgIHRpdGxlOiAnICcsXG4gICAgICAgICAgY29udGVudDogJyAnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHByb21wdDoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAvLyBtYXhsZW5ndGg6IDAsXG4gICAgICAgICAgcmVzcDogJycsXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy51LmtleSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dMb2dnZWRJbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnUpKVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgVG9vbGJhclxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5kaWFsb2cudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dDb25maXJtOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNiLCB5LCBuKSB7XG4gICAgICAgIHkgPSB5IHx8ICdPSydcbiAgICAgICAgbiA9IG4gfHwgJ0NhbmNlbCdcbiAgICAgICAgdGhpcy5jb25maXJtLm9rID0geVxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxuICAgICAgICB0aGlzLmNvbmZpcm0uY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5jb25maXJtLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcbiAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XG4gICAgICAgIHRoaXMucHJvbXB0LnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5wcm9tcHQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXG4gICAgICAgIHRoaXMuJHJlZnMucHJvbXB0RGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sodGhpcy5wcm9tcHQucmVzcClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvbXB0LnJlc3AgPSAnJ1xuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICBvbkNvbmZpcm1DbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICAvLyB1dGlsaXRpZXNcbiAgICAgIGh1bWFuRmlsZVNpemU6IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgdGhyZXNoID0gMTAyNFxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXG4gICAgICAgIHZhciB1ID0gLTFcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxuICAgICAgICAgICAgKyt1XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGJ5dGVzKSA+PSB0aHJlc2ggJiYgdSA8IHVuaXRzLmxlbmd0aCAtIDEpXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDIpICsgJyAnICsgdW5pdHNbdV1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBzYXZlZFUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndScpXG4gICAgICBpZiAoc2F2ZWRVKSB7XG4gICAgICAgIHRoaXMudSA9IEpTT04ucGFyc2Uoc2F2ZWRVKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zcGFjZS12IHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuICBcbiAgLnNlcC1iIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHAudnVlPzM5NDYwOWQwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9vbGJhci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTIyMWY3MmJjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdG9vbGJhci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTIyMWY3MmJjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9vbGJhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgIDxtZC10b29sYmFyPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgQGNsaWNrPVwidG9nZ2xlTGVmdFNpZGVuYXZcIj5cbiAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cbiAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGUgdG9vbGJhci10aXRsZVwiPnt7IGFwcE5hbWUgfX08L2gyPlxuICAgICAgPGRpdiB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cbiAgICAgICAgPG1kLW1lbnUgbWQtYWxpZ24tdHJpZ2dlcj5cbiAgICAgICAgICA8bWQtYnV0dG9uIG1kLW1lbnUtdHJpZ2dlcj5cbiAgICAgICAgICAgIDxtZC1pY29uPmFjY291bnRfY2lyY2xlPC9tZC1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY2NvdW50LXVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgIHt7ICRyb290LnUubmFtZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgIDxtZC1tZW51LWNvbnRlbnQ+XG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cInJvdXRlckdvKCcvcCcpXCI+XG4gICAgICAgICAgICAgIEFjY291bnRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL3UnKVwiPlxuICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL2ZpbGVzJylcIj5cbiAgICAgICAgICAgICAgTXkgRmlsZXNcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJsb2dvdXRcIj5cbiAgICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XG4gICAgICAgICAgPC9tZC1tZW51LWNvbnRlbnQ+XG4gICAgICAgIDwvbWQtbWVudT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIHYtb246Y2xpY2s9XCJ2aXNpdEdpdEh1YlwiPlxuICAgICAgICAgIDxtZC1pY29uPmZhdm9yaXRlPC9tZC1pY29uPlxuICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtdG9vbGJhcj5cbiAgICA8bWQtc2lkZW5hdiBjbGFzcz1cIm1haW4tc2lkZW5hdiBtZC1sZWZ0IG1kLWZpeGVkXCIgcmVmPVwibGVmdFNpZGVuYXZcIj5cbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwibWQtbGFyZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLXRvb2xiYXI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XG4gICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJtZC1kZW5zZVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIkcm9vdC5sb2dnZWRJblwiPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9wXCI+UHJvZmlsZTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi91XCI+RGFzaGJvYXJkPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiY2xvc2VTaWRlbmF2XCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2ZpbGVzXCI+RmlsZXM8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxtZC1saXN0LWV4cGFuZD5cbiAgICAgICAgICAgICAgICA8bWQtbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC1pbnNldFwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtaW5zZXRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9uYXRlXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L21kLWxpc3Q+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1leHBhbmQ+XG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICA8L21kLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC1zaWRlbmF2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZCcpXG4gICAgICB9LFxuICAgICAgdG9nZ2xlTGVmdFNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi50b2dnbGUoKVxuICAgICAgfSxcbiAgICAgIGNsb3NlU2lkZW5hdjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LmNsb3NlKClcbiAgICAgIH0sXG4gICAgICBsb2dvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH0sXG4gICAgICByb3V0ZXJHbzogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcbiAgICAgIC8vIHRoZW4gcmVnaXN0ZXIgaG9va1xuICAgICAgdGhpcy4kcm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxuICAgICAgICBuZXh0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbiAgLnRvb2xiYXItdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC5hY2NvdW50LXVzZXJuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9vbGJhci52dWU/ZGI5NTM1ZDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCJcbiAgfSwgW19jKCdtZC10b29sYmFyJywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9nZ2xlTGVmdFNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJtZW51XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYXBwTmFtZSkpXSksIF92bS5fdihcIiBcIiksIChfdm0uJHJvb3QubG9nZ2VkSW4pID8gX2MoJ2RpdicsIFtfYygnbWQtbWVudScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1hbGlnbi10cmlnZ2VyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLW1lbnUtdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiYWNjb3VudF9jaXJjbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWNjb3VudC11c2VybmFtZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHJvb3QudS5uYW1lKSArIFwiXFxuICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWNvbnRlbnQnLCBbX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvcCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQWNjb3VudFxcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvdScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgRGFzaGJvYXJkXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucm91dGVyR28oJy9maWxlcycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTXkgRmlsZXNcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJyksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmxvZ291dFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIExvZyBPdXRcXG4gICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udmlzaXRHaXRIdWJcbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJmYXZvcml0ZVwiKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtc2lkZW5hdicsIHtcbiAgICByZWY6IFwibGVmdFNpZGVuYXZcIixcbiAgICBzdGF0aWNDbGFzczogXCJtYWluLXNpZGVuYXYgbWQtbGVmdCBtZC1maXhlZFwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1sYXJnZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRvb2xiYXItY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1jb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1saW5rc1wiXG4gIH0sIFtfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1kZW5zZVwiXG4gIH0sIFsoX3ZtLiRyb290LmxvZ2dlZEluKSA/IFtfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvcFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJvZmlsZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi91XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEYXNoYm9hcmRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvZmlsZXNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkZpbGVzXCIpXSldLCAxKV0gOiBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIb21lXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2Fib3V0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBYm91dFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiU3VwcG9ydFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1leHBhbmQnLCBbX2MoJ21kLWxpc3QnLCBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiLFxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgR2l0SHViXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBEb25hdGVcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAyKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTIyMWY3MmJjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIlxuICB9LCBbX2MoJ3Rvb2xiYXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcIm1kLXJvdXRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYWdlLWNvbnRlbnQgcGFnZS12aWV3XCJcbiAgfSwgW19jKCdyb3V0ZXItdmlldycpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLWFsZXJ0Jywge1xuICAgIHJlZjogXCJtb2RhbERpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5kaWFsb2cudGl0bGUsXG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uZGlhbG9nLmNvbnRlbnRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLWNvbmZpcm0nLCB7XG4gICAgcmVmOiBcImNvbmZpcm1EaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0uY29uZmlybS50aXRsZSxcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5jb25maXJtLmNvbnRlbnQsXG4gICAgICBcIm1kLW9rLXRleHRcIjogX3ZtLmNvbmZpcm0ub2ssXG4gICAgICBcIm1kLWNhbmNlbC10ZXh0XCI6IF92bS5jb25maXJtLmNhbmNlbFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogX3ZtLm9uQ29uZmlybUNsb3NlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1wcm9tcHQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucHJvbXB0LnJlc3ApLFxuICAgICAgZXhwcmVzc2lvbjogXCJwcm9tcHQucmVzcFwiXG4gICAgfV0sXG4gICAgcmVmOiBcInByb21wdERpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5wcm9tcHQudGl0bGUsXG4gICAgICBcIm1kLW9rLXRleHRcIjogX3ZtLnByb21wdC5vayxcbiAgICAgIFwibWQtY2FuY2VsLXRleHRcIjogX3ZtLnByb21wdC5jYW5jZWwsXG4gICAgICBcIm1kLWlucHV0LXBsYWNlaG9sZGVyXCI6IF92bS5wcm9tcHQucGxhY2Vob2xkZXJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucHJvbXB0LnJlc3ApXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbG9zZVwiOiBfdm0ub25Qcm9tcHRDbG9zZSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wcm9tcHQucmVzcCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NzZlYTIwYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9