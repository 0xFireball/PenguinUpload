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
	  }, [_c('md-card', [_c('md-card-header', [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("File Download")])]), _vm._v(" "), (_vm.loading) ? _c('div', [_c('md-card-content', [_c('md-spinner', {
	    attrs: {
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Loading File Information")])], 1)], 1) : _c('div', [_c('md-card-content', [_c('md-icon', {
	    staticClass: "md-primary",
	    attrs: {
	      "md-theme": "light-blue"
	    }
	  }, [_vm._v("insert_drive_file")]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.file.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.file.sizeText))])], 1), _vm._v(" "), (!_vm.error) ? _c('md-card-actions', [_c('md-button', {
	    on: {
	      "click": _vm.downloadFile
	    }
	  }, [(_vm.file.pass.length > 0) ? _c('md-icon', [_vm._v("lock")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v("\n            Download\n          ")])], 1)], 1) : _vm._e()], 1)], 1)], 1)
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
	  }, [_vm._v("View all my files")])], 1), _vm._v(" "), _c('div', {
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
	  }, [_vm._v("All My Files")]), _vm._v(" "), _c('div', {
	    staticClass: "md-subtitle"
	  }, [_vm._v("Files")]), _vm._v(" "), (_vm.loadFinished) ? _c('div', [(_vm.noFiles) ? _c('div', [_c('p', [_vm._v("No Files")])]) : _vm._e(), _vm._v(" "), _c('md-list', {
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
	exports.push([module.id, "/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box; }\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box; }\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0; }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%; }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%; }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0; }\r\n\r\n  .one.column,\r\n  .one.columns                    { width: 4.66666666667%; }\r\n  .two.columns                    { width: 13.3333333333%; }\r\n  .three.columns                  { width: 22%;            }\r\n  .four.columns                   { width: 30.6666666667%; }\r\n  .five.columns                   { width: 39.3333333333%; }\r\n  .six.columns                    { width: 48%;            }\r\n  .seven.columns                  { width: 56.6666666667%; }\r\n  .eight.columns                  { width: 65.3333333333%; }\r\n  .nine.columns                   { width: 74.0%;          }\r\n  .ten.columns                    { width: 82.6666666667%; }\r\n  .eleven.columns                 { width: 91.3333333333%; }\r\n  .twelve.columns                 { width: 100%; margin-left: 0; }\r\n\r\n  .one-third.column               { width: 30.6666666667%; }\r\n  .two-thirds.column              { width: 65.3333333333%; }\r\n\r\n  .one-half.column                { width: 48%; }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns        { margin-left: 26%;            }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns          { margin-left: 52%;            }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns     { margin-left: 52%; }\r\n\r\n}\r\n\r\n\r\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%; }\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #222; }\r\n\r\n\r\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300; }\r\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\r\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\r\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\r\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\r\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\r\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 { font-size: 5.0rem; }\r\n  h2 { font-size: 4.2rem; }\r\n  h3 { font-size: 3.6rem; }\r\n  h4 { font-size: 3.0rem; }\r\n  h5 { font-size: 2.4rem; }\r\n  h6 { font-size: 1.5rem; }\r\n}\r\n\r\np {\r\n  margin-top: 0; }\r\n\r\n\r\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1EAEDB; }\r\na:hover {\r\n  color: #0FA0CE; }\r\n\r\n\r\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside; }\r\nol {\r\n  list-style: decimal inside; }\r\nol, ul {\r\n  padding-left: 0;\r\n  margin-top: 0; }\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%; }\r\nli {\r\n  margin-bottom: 1rem; }\r\n\r\n\r\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: .2rem .5rem;\r\n  margin: 0 .2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #F1F1F1;\r\n  border: 1px solid #E1E1E1;\r\n  border-radius: 4px; }\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre; }\r\n\r\n\r\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #E1E1E1; }\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0; }\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0; }\r\n\r\n\r\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nbutton,\r\n.button {\r\n  margin-bottom: 1rem; }\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem; }\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem; }\r\n\r\n\r\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box; }\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box; }\r\n.u-pull-right {\r\n  float: right; }\r\n.u-pull-left {\r\n  float: left; }\r\n\r\n\r\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #E1E1E1; }\r\n\r\n\r\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both; }\r\n\r\n\r\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\r\n\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {}\r\n", ""]);
	
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
	exports.push([module.id, ".md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar.md-avatar-icon{background-color:rgba(0,0,0,.38)}.md-avatar.md-avatar-icon .md-icon{color:#fff}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}.md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translateZ(0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:rgba(0,0,0,.005)}.md-bottom-bar{width:100%;min-width:100%;height:56px;-ms-flex-pack:center;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar,.md-bottom-bar-item{position:relative;display:-ms-flexbox;display:flex}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;cursor:pointer;border:none;background:transparent;transform:translateZ(0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translateZ(0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;-ms-flex:1 1 32px;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width;transition-property:flex,min-width,max-width,-ms-flex}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;-ms-flex:1 1 72px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translateZ(0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear,opacity .15s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear}.md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:none;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:500;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button,.md-button:focus{outline:none}.md-button::-moz-focus-inner{border:0}.md-button:hover:not([disabled]):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button:hover:not([disabled]).md-raised{background-color:rgba(0,0,0,.12)}.md-button:active:not([disabled]){background-color:hsla(0,0%,60%,.4)}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{margin-top:1px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button:not([disabled]):hover{background:none}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px;line-height:32px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-fab-top-left{position:absolute;top:16px;left:16px}.md-button.md-fab.md-fab-top-center{position:absolute;top:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-top-right{position:absolute;top:16px;right:16px}.md-button.md-fab.md-fab-bottom-left{position:absolute;bottom:16px;left:16px}.md-button.md-fab.md-fab-bottom-center{position:absolute;bottom:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-bottom-right{position:absolute;right:16px;bottom:16px}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:40px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{color:rgba(0,0,0,.26);cursor:default}.md-button[disabled].md-fab,.md-button[disabled].md-raised{background-color:rgba(0,0,0,.12)}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}.md-button-toggle{width:auto;display:-ms-flexbox;display:flex}.md-button-toggle>.md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle>.md-button:not([disabled]){color:rgba(0,0,0,.54)}.md-button-toggle>.md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button-toggle>.md-button .md-ink-ripple{border-radius:2px}.md-card{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:1;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{-ms-flex:1;flex:1}.md-card .md-card-header .md-card-media{width:80px;-ms-flex:0 0 80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;-ms-flex:0 0 120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;-ms-flex:0 0 160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card .md-card-media-actions{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;-ms-flex:1;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotate(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{padding-top:4px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin}.md-checkbox{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-checkbox .md-checkbox-container{width:20px;height:20px;position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0);mask-image:radial-gradient(circle,#fff 100%,#000 0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;transform:scale(0);background-color:currentColor;opacity:.26;border-radius:50%}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1)}@keyframes ripple{to{transform:scale(1.5);opacity:0}}.md-dialog-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:108}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-backdrop{position:fixed;z-index:109}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden;position:relative;z-index:110;outline:none;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1) .05s;will-change:opacity,transform}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;-ms-flex:1;flex:1;overflow:auto;position:relative;background:linear-gradient(180deg,#fff 0,#fff 1px,transparent 0),linear-gradient(0deg,#fff 0,#fff 3px,transparent 0),linear-gradient(180deg,rgba(0,0,0,.12) 0,rgba(0,0,0,.12) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.2) 1px,rgba(0,0,0,.2) 2px,transparent 0);background-attachment:local,local,scroll,scroll}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;background-color:#fff;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(0,0,0,.12)}.md-divider.md-inset{margin-left:72px}.md-icon{width:24px;min-width:24px;height:24px;min-height:24px;margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;fill:currentColor;vertical-align:middle}.md-input-container{width:100%;min-height:48px;margin:4px 0 24px;padding-top:16px;position:relative}.md-input-container:after{height:1px;right:0;bottom:0;background-color:rgba(0,0,0,.12);content:\" \"}.md-input-container:after,.md-input-container label{position:absolute;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container label{top:23px;pointer-events:none;transition-duration:.3s;color:rgba(0,0,0,.54);font-size:16px;line-height:20px}.md-input-container input,.md-input-container textarea{width:100%;height:32px;padding:0;display:block;border:none;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;color:rgba(0,0,0,.54);font-family:inherit;font-size:1px;line-height:32px}.md-input-container input:focus,.md-input-container textarea:focus{outline:none}.md-input-container input::-webkit-input-placeholder,.md-input-container textarea::-webkit-input-placeholder{color:rgba(0,0,0,.54);font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-input-container .md-error{height:20px;display:block!important;position:absolute;opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2);font-size:12px}.md-input-container .md-count{height:20px;position:absolute;right:0;font-size:12px}.md-input-container.md-input-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-input-container.md-input-placeholder input,.md-input-container.md-input-placeholder textarea{font-size:16px}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea{color:rgba(0,0,0,.87)}.md-input-container.md-input-inline label{pointer-events:none}.md-input-container.md-input-inline.md-input-focused label{top:23px;font-size:16px}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-input-disabled:after{background:0 100% repeat-x;background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-size:4px 1px}.md-input-container.md-input-disabled input,.md-input-container.md-input-disabled label,.md-input-container.md-input-disabled textarea{color:rgba(0,0,0,.38)}.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:rgba(0,0,0,.54)}.md-input-container.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px;color:rgba(0,0,0,.38)}.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:rgba(0,0,0,.87)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translateZ(0)}.md-input-container.md-input-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after{color:rgba(0,0,0,.87)}.md-layout{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1;flex:1}.md-row{-ms-flex-direction:row;flex-direction:row}.md-column{-ms-flex-direction:column;flex-direction:column}.md-layout.md-container{width:100%;max-width:1200px}.md-layout.md-container.md-centered{margin:0 auto}.md-gutter:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter .md-column>.md-layout{padding-top:12px;padding-bottom:12px}@media (max-width:944px){.md-gutter:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter .md-column>.md-layout{padding-top:8px;padding-bottom:8px}}.md-gutter-8:not(.md-column){margin-right:-4px;margin-left:-4px}.md-gutter-8:not(.md-column)>.md-layout{padding-right:4px;padding-left:4px}.md-gutter-8 .md-column{margin-top:-4px;margin-bottom:-4px}.md-gutter-8 .md-column>.md-layout{padding-top:4px;padding-bottom:4px}.md-gutter-16:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter-16:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter-16 .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter-16 .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-gutter-24:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter-24:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter-24 .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter-24 .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-40:not(.md-column){margin-right:-20px;margin-left:-20px}.md-gutter-40:not(.md-column)>.md-layout{padding-right:20px;padding-left:20px}.md-gutter-40 .md-column{margin-top:-20px;margin-bottom:-20px}.md-gutter-40 .md-column>.md-layout{padding-top:20px;padding-bottom:20px}.md-flex{-ms-flex:1 1;flex:1 1}.md-flex-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-33{margin-left:33.33333%}.md-flex-offset-66{margin-left:66.66666%}.md-flex-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-5{margin-left:5%}.md-flex-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-10{margin-left:10%}.md-flex-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-15{margin-left:15%}.md-flex-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-20{margin-left:20%}.md-flex-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-25{margin-left:25%}.md-flex-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-30{margin-left:30%}.md-flex-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-35{margin-left:35%}.md-flex-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-40{margin-left:40%}.md-flex-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-45{margin-left:45%}.md-flex-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-50{margin-left:50%}.md-flex-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-55{margin-left:55%}.md-flex-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-60{margin-left:60%}.md-flex-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-65{margin-left:65%}.md-flex-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-70{margin-left:70%}.md-flex-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-75{margin-left:75%}.md-flex-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-80{margin-left:80%}.md-flex-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-85{margin-left:85%}.md-flex-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-90{margin-left:90%}.md-flex-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-95{margin-left:95%}.md-flex-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-100{margin-left:100%}@media (min-width:1904px){.md-row-xlarge{-ms-flex-direction:row;flex-direction:row}.md-column-xlarge{-ms-flex-direction:column;flex-direction:column}.md-flex-xlarge{-ms-flex:1 1;flex:1 1}.md-flex-xlarge-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xlarge-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xlarge-33{margin-left:33.33333%}.md-flex-offset-xlarge-66{margin-left:66.66666%}.md-flex-xlarge-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xlarge-5{margin-left:5%}.md-flex-xlarge-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xlarge-10{margin-left:10%}.md-flex-xlarge-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xlarge-15{margin-left:15%}.md-flex-xlarge-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xlarge-20{margin-left:20%}.md-flex-xlarge-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xlarge-25{margin-left:25%}.md-flex-xlarge-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xlarge-30{margin-left:30%}.md-flex-xlarge-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xlarge-35{margin-left:35%}.md-flex-xlarge-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xlarge-40{margin-left:40%}.md-flex-xlarge-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xlarge-45{margin-left:45%}.md-flex-xlarge-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xlarge-50{margin-left:50%}.md-flex-xlarge-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xlarge-55{margin-left:55%}.md-flex-xlarge-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xlarge-60{margin-left:60%}.md-flex-xlarge-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xlarge-65{margin-left:65%}.md-flex-xlarge-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xlarge-70{margin-left:70%}.md-flex-xlarge-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xlarge-75{margin-left:75%}.md-flex-xlarge-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xlarge-80{margin-left:80%}.md-flex-xlarge-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xlarge-85{margin-left:85%}.md-flex-xlarge-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xlarge-90{margin-left:90%}.md-flex-xlarge-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xlarge-95{margin-left:95%}.md-flex-xlarge-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xlarge-100{margin-left:100%}.md-hide-xlarge{display:none}}@media (max-width:1903px){.md-row-large{-ms-flex-direction:row;flex-direction:row}.md-column-large{-ms-flex-direction:column;flex-direction:column}.md-flex-large{-ms-flex:1 1;flex:1 1}.md-flex-large-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-large-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-large-33{margin-left:33.33333%}.md-flex-offset-large-66{margin-left:66.66666%}.md-flex-large-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-large-5{margin-left:5%}.md-flex-large-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-large-10{margin-left:10%}.md-flex-large-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-large-15{margin-left:15%}.md-flex-large-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-large-20{margin-left:20%}.md-flex-large-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-large-25{margin-left:25%}.md-flex-large-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-large-30{margin-left:30%}.md-flex-large-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-large-35{margin-left:35%}.md-flex-large-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-large-40{margin-left:40%}.md-flex-large-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-large-45{margin-left:45%}.md-flex-large-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-large-50{margin-left:50%}.md-flex-large-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-large-55{margin-left:55%}.md-flex-large-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-large-60{margin-left:60%}.md-flex-large-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-large-65{margin-left:65%}.md-flex-large-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-large-70{margin-left:70%}.md-flex-large-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-large-75{margin-left:75%}.md-flex-large-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-large-80{margin-left:80%}.md-flex-large-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-large-85{margin-left:85%}.md-flex-large-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-large-90{margin-left:90%}.md-flex-large-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-large-95{margin-left:95%}.md-flex-large-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-large-100{margin-left:100%}.md-hide-large{display:none}}@media (max-width:1264px){.md-row-medium{-ms-flex-direction:row;flex-direction:row}.md-column-medium{-ms-flex-direction:column;flex-direction:column}.md-flex-medium{-ms-flex:1 1;flex:1 1}.md-flex-medium-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-medium-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-medium-33{margin-left:33.33333%}.md-flex-offset-medium-66{margin-left:66.66666%}.md-flex-medium-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-medium-5{margin-left:5%}.md-flex-medium-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-medium-10{margin-left:10%}.md-flex-medium-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-medium-15{margin-left:15%}.md-flex-medium-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-medium-20{margin-left:20%}.md-flex-medium-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-medium-25{margin-left:25%}.md-flex-medium-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-medium-30{margin-left:30%}.md-flex-medium-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-medium-35{margin-left:35%}.md-flex-medium-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-medium-40{margin-left:40%}.md-flex-medium-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-medium-45{margin-left:45%}.md-flex-medium-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-medium-50{margin-left:50%}.md-flex-medium-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-medium-55{margin-left:55%}.md-flex-medium-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-medium-60{margin-left:60%}.md-flex-medium-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-medium-65{margin-left:65%}.md-flex-medium-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-medium-70{margin-left:70%}.md-flex-medium-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-medium-75{margin-left:75%}.md-flex-medium-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-medium-80{margin-left:80%}.md-flex-medium-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-medium-85{margin-left:85%}.md-flex-medium-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-medium-90{margin-left:90%}.md-flex-medium-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-medium-95{margin-left:95%}.md-flex-medium-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-medium-100{margin-left:100%}.md-hide-medium{display:none}}@media (max-width:944px){.md-row-small{-ms-flex-direction:row;flex-direction:row}.md-column-small{-ms-flex-direction:column;flex-direction:column}.md-flex-small{-ms-flex:1 1;flex:1 1}.md-flex-small-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-small-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-small-33{margin-left:33.33333%}.md-flex-offset-small-66{margin-left:66.66666%}.md-flex-small-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-small-5{margin-left:5%}.md-flex-small-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-small-10{margin-left:10%}.md-flex-small-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-small-15{margin-left:15%}.md-flex-small-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-small-20{margin-left:20%}.md-flex-small-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-small-25{margin-left:25%}.md-flex-small-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-small-30{margin-left:30%}.md-flex-small-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-small-35{margin-left:35%}.md-flex-small-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-small-40{margin-left:40%}.md-flex-small-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-small-45{margin-left:45%}.md-flex-small-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-small-50{margin-left:50%}.md-flex-small-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-small-55{margin-left:55%}.md-flex-small-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-small-60{margin-left:60%}.md-flex-small-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-small-65{margin-left:65%}.md-flex-small-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-small-70{margin-left:70%}.md-flex-small-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-small-75{margin-left:75%}.md-flex-small-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-small-80{margin-left:80%}.md-flex-small-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-small-85{margin-left:85%}.md-flex-small-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-small-90{margin-left:90%}.md-flex-small-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-small-95{margin-left:95%}.md-flex-small-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-small-100{margin-left:100%}.md-hide-small{display:none}}@media (max-width:600px){.md-row-xsmall{-ms-flex-direction:row;flex-direction:row}.md-column-xsmall{-ms-flex-direction:column;flex-direction:column}.md-flex-xsmall{-ms-flex:1 1;flex:1 1}.md-flex-xsmall-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xsmall-33{margin-left:33.33333%}.md-flex-offset-xsmall-66{margin-left:66.66666%}.md-flex-xsmall-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xsmall-5{margin-left:5%}.md-flex-xsmall-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xsmall-10{margin-left:10%}.md-flex-xsmall-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xsmall-15{margin-left:15%}.md-flex-xsmall-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xsmall-20{margin-left:20%}.md-flex-xsmall-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xsmall-25{margin-left:25%}.md-flex-xsmall-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xsmall-30{margin-left:30%}.md-flex-xsmall-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xsmall-35{margin-left:35%}.md-flex-xsmall-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xsmall-40{margin-left:40%}.md-flex-xsmall-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xsmall-45{margin-left:45%}.md-flex-xsmall-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xsmall-50{margin-left:50%}.md-flex-xsmall-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xsmall-55{margin-left:55%}.md-flex-xsmall-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xsmall-60{margin-left:60%}.md-flex-xsmall-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xsmall-65{margin-left:65%}.md-flex-xsmall-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xsmall-70{margin-left:70%}.md-flex-xsmall-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xsmall-75{margin-left:75%}.md-flex-xsmall-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xsmall-80{margin-left:80%}.md-flex-xsmall-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xsmall-85{margin-left:85%}.md-flex-xsmall-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xsmall-90{margin-left:90%}.md-flex-xsmall-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xsmall-95{margin-left:95%}.md-flex-xsmall-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xsmall-100{margin-left:100%}.md-hide-xsmall{display:none}}.md-list{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list.md-triple-line .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-list-item-holder{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1}.md-list-item .md-list-item-holder>.md-ink-ripple{border-radius:0}.md-list-item .md-list-item-holder>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-holder .md-avatar:first-child{margin-right:16px}.md-list-item .md-list-item-holder .md-list-action{margin:0 -2px 0 0}.md-list-item .md-list-item-holder .md-list-action:nth-child(3){margin:0 -2px 0 16px}.md-list-item .md-list-item-container{width:100%;min-height:48px;margin:0;padding:0 16px;position:relative;border-radius:0;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*{-ms-flex:1 1 auto;flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-icon{color:rgba(0,0,0,.54)}.md-list-item-expand{min-height:48px;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow:hidden}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:after,.md-list-item-expand.md-active:before{background-color:rgba(0,0,0,.12)}.md-list-item-expand.md-active:first-of-type:before,.md-list-item-expand.md-active:last-of-type:after{background:none}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotate(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand>.md-list-item-container>.md-list-item-holder{position:relative;z-index:2}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none!important}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex:1;flex:1;overflow:hidden;line-height:1.25em;text-overflow:ellipsis;white-space:normal}.md-list-text-container>:nth-child(1){font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;color:rgba(0,0,0,.54);font-size:14px}.md-list-text-container>:nth-child(2):not(:last-child){color:rgba(0,0,0,.87)}.md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:120;transform:scale(.9,.85) translateZ(0);border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .25s cubic-bezier(.55,0,.55,.2),margin .2s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .25s;will-change:transform,opacity,width}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .35s cubic-bezier(.25,.8,.25,1),transform .25s cubic-bezier(.25,.8,.25,1) .05s}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .2s cubic-bezier(.25,.8,.25,1) .15s}.md-menu-content .md-list{opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item[disabled]{cursor:default}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-radio{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-radio .md-radio-container{width:20px;height:20px;position:relative;border-radius:50%;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-select{width:100%;min-width:128px;height:32px;position:relative}.md-select:focus{outline:none}.md-select:after{margin-top:2px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .15s linear;content:\"\\25BC\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.md-select select{position:absolute;left:-999em}.md-select .md-menu,.md-select .md-select-value{width:100%;height:32px;display:block;position:relative}.md-select .md-select-value{padding-right:24px;cursor:pointer;overflow:hidden;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-subheader{color:hsla(0,0%,46%,.87);text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;-ms-flex-pack:start;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}.md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:100;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}.md-spinner{display:inline-block;position:relative;pointer-events:none;will-change:transform,opacity}.md-spinner.md-indeterminate .md-spinner-draw{animation:spinner-rotate 1.9s linear infinite;transform:rotate(0deg) translateZ(0)}.md-spinner.md-indeterminate .md-spinner-path{stroke-dasharray:2,200;animation:spinner-dash 1.425s ease-in-out infinite}.md-spinner.md-spinner-leave-active{opacity:0;transform:scale(.8) translateZ(0);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-spinner:not(.md-indeterminate).md-spinner-enter-active{transition-duration:2s}.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw{animation:spinner-initial-rotate 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-spinner-draw{width:100%;height:100%;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transform:rotate(270deg) translateZ(0);transform-origin:center center;will-change:transform,opacity}.md-spinner-path{fill:none;stroke-dashoffset:0;stroke-miterlimit:10;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes spinner-rotate{to{transform:rotate(1turn) translateZ(0)}}@keyframes spinner-initial-rotate{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}to{transform:rotate(270deg) translateZ(0)}}@keyframes spinner-dash{0%{stroke-dasharray:2,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.md-subheader{min-height:48px;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row wrap;flex-flow:row wrap;color:rgba(0,0,0,.54);font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1);background-color:rgba(0,0,0,.38)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;background-color:#fafafa;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .15s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:none;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:none}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:-webkit-grabbing;cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}.md-table{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow-x:auto}.md-table.md-transition-off .md-checkbox .md-checkbox-container,.md-table.md-transition-off .md-checkbox .md-checkbox-container:after,.md-table.md-transition-off .md-table-cell{transition:none!important}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table tbody .md-table-row{border-top:1px solid #e0e0e0}.md-table tbody .md-table-row.md-selected .md-table-cell{background-color:#f5f5f5}.md-table tbody .md-table-row:hover .md-table-cell{background-color:#eee}.md-table .md-table-head{padding:0;position:relative;color:rgba(0,0,0,.54);font-size:12px;line-height:16px;text-align:left}.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text{padding-right:24px}.md-table .md-table-head.md-numeric{text-align:right}.md-table .md-table-head .md-icon{width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px;color:rgba(0,0,0,.54)}.md-table .md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table .md-table-head .md-icon:first-child{margin-left:0}.md-table .md-table-head .md-icon:last-child{margin-right:0}.md-table .md-table-head-container{height:56px;padding:14px 0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-table .md-table-head-text{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;overflow:hidden;line-height:28px;text-overflow:ellipsis;white-space:nowrap}.md-table .md-sortable{cursor:pointer}.md-table .md-sortable:first-of-type .md-sortable-icon{left:auto;right:10px}.md-table .md-sortable.md-sorted,.md-table .md-sortable:hover{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted .md-sortable-icon,.md-table .md-sortable:hover .md-sortable-icon{opacity:1}.md-table .md-sortable.md-sorted .md-sortable-icon{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted-descending .md-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table .md-sortable .md-sortable-icon{position:absolute;top:50%;left:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table .md-sortable .md-ink-ripple{color:rgba(0,0,0,.87)}.md-table .md-table-cell{height:48px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.87);font-size:13px;line-height:18px}.md-table .md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table .md-table-cell.md-numeric{text-align:right}.md-table .md-table-cell.md-numeric .md-table-cell-container{-ms-flex-pack:end;justify-content:flex-end}.md-table .md-table-cell.md-has-action .md-table-cell-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.md-table .md-table-cell .md-table-cell-container{padding:6px 32px 6px 24px}.md-table .md-table-cell .md-button{width:36px;min-width:36px;height:36px;min-height:36px}.md-table .md-table-cell .md-button:last-child{margin:0 -10px 0 0}.md-table .md-table-cell .md-button .md-icon{width:18px;min-width:18px;height:18px;min-height:18px;margin:0;color:rgba(0,0,0,.54);font-size:18px}.md-table .md-table-selection{width:60px;position:relative;vertical-align:middle}.md-table .md-table-selection+.md-table-cell .md-table-cell-container,.md-table .md-table-selection+.md-table-head .md-table-head-container .md-table-head-text{padding-left:8px}.md-table .md-table-selection .md-table-cell-container{padding-right:16px;padding-left:24px}.md-table .md-table-selection .md-checkbox{margin:0}.md-table .md-table-selection .md-checkbox-container{width:18px;height:18px;margin-top:1px}.md-table .md-table-selection .md-checkbox-container:after{top:-1px;left:4px}.md-table .md-select{min-width:84px}.md-table .md-option,.md-table .md-select-value{font-size:13px}.md-table-edit-trigger{display:inline-block;cursor:pointer;color:rgba(0,0,0,.38)}.md-table-edit-trigger.md-edited{color:rgba(0,0,0,.87)}.md-table-dialog{max-height:0;margin:0;padding:0 24px 2px;position:absolute;top:0;right:0;left:24px;z-index:60;overflow:hidden;pointer-events:none;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);background-color:#fff;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1),max-height 0s .5s;transition-duration:.3s;transform:translate3D(0,-8px,0)}.md-table-dialog.md-active{max-height:400px;pointer-events:auto;transform:translate3D(#000);opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-dialog.md-large{padding:12px 24px 2px}.md-table-dialog .md-input-container{margin-top:0;margin-bottom:16px}.md-table-dialog .md-input-container.md-input-placeholder input{font-size:13px}.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder{font-size:13px}.md-table-dialog .md-char-counter{font-size:13.5px;color:rgba(0,0,0,.54)}.md-table-dialog .md-button{min-width:64px}.md-table-card{overflow:visible}.md-table-card .md-toolbar{padding-left:16px;background-color:#fff}.md-table-card .md-title{-ms-flex:1;flex:1;font-size:20px}.md-table-card .md-table-pagination{height:56px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #e0e0e0;color:rgba(0,0,0,.54);font-size:12px}.md-table-card .md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-card .md-table-pagination .md-select{width:auto;min-width:36px;margin:0 32px}.md-table-card .md-table-pagination .md-select:after{margin-top:0}.md-table-card .md-table-pagination .md-select .md-select-value{padding:0;border:none;font-size:13px}.md-table-card .md-table-pagination .md-button:not([disabled]){color:rgba(0,0,0,.87)}.md-table-card .md-table-pagination .md-button[disabled] .md-icon{color:rgba(0,0,0,.26)}.md-pagination-select.md-direction-bottom-right{margin-top:-16px}.md-pagination-select .md-list-item-holder{font-size:13px}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:10;pointer-events:none;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-alternate-header.md-active{pointer-events:auto;opacity:1;transform:translate3D(#000)}.md-table-alternate-header .md-counter{margin-left:8px;-ms-flex:1;flex:1}.md-tabs{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:-ms-flexbox;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{-ms-flex-pack:center;justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{-ms-flex:1;flex:1}.md-tabs .md-tabs-navigation.md-right{-ms-flex-pack:end;justify-content:flex-end}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{width:9999em;position:absolute;top:0;right:0;bottom:0;left:0;transform:translateZ(0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}.md-toolbar{min-height:64px;padding:0 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;-ms-flex-line-pack:inherit;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#fff}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:hsla(0,0%,100%,.12)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:start;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:hsla(0,0%,100%,.1)}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-list{padding:0;margin:0 -8px;-ms-flex:1;flex:1}.md-tooltip{height:20px;padding:0 8px;position:fixed;z-index:200;pointer-events:none;background-color:rgba(97,97,97,.87);border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;color:#fff;font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:10px;line-height:20px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translateY(50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translateY(50%)}.md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n/*# sourceMappingURL=vue-material.css.map*/", ""]);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2YxNjA4YTg4MWQ3M2RiOGNhZTUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlPzgxOGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzJkMzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vL2xhbmRpbmcudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT85ZWZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlP2FmM2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/NzZiNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/ZGFhNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/YjBmNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/OWI4NyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/ZDQ2YyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT9iZjE3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/NmU4MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlIiwid2VicGFjazovLy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlPzY3NTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/MDU3MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlPzNjYTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/MTM1MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/YzQ5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9kMGNhIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOzs7O0FBRUE7Ozs7QUFHQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUN4SEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZjE2MDhhODgxZDczZGI4Y2FlNSIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcclxuLy8gKHJ1bnRpbWUtb25seSBvciBzdGFuZGFsb25lKSBoYXMgYmVlbiBzZXQgaW4gd2VicGFjay5iYXNlLmNvbmYgd2l0aCBhbiBhbGlhcy5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuXHJcbi8vIFJvdXRlc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuLy8gU3R5bGVzL2ZvbnRzXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3MnXHJcblxyXG4vLyBtYXRlcmlhbFxyXG5pbXBvcnQgVnVlTWF0ZXJpYWwgZnJvbSAndnVlLW1hdGVyaWFsJ1xyXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXHJcblxyXG4vLyBwbHVnaW5zXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxyXG5cclxuLy8gcm91dGVyIGNvbmZpZ1xyXG5cclxubGV0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gIHJvdXRlc1xyXG59KVxyXG5cclxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XHJcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXHJcblxyXG4gIGlmIChtYWluQ29udGVudCkge1xyXG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5yZWdpc3RlclRoZW1lKHtcclxuICBhcHB0aGVtZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICBodWU6IDcwMFxyXG4gICAgfSxcclxuICAgIGFjY2VudDoge1xyXG4gICAgICBjb2xvcjogJ2xpZ2h0LWJsdWUnLFxyXG4gICAgICBodWU6IDYwMFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5zZXRDdXJyZW50VGhlbWUoJ2FwcHRoZW1lJylcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XHJcbiAgZWw6ICcjYXBwJyxcclxuICByb3V0ZXJcclxufSlcclxuXHJcbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xyXG4vLyBuZXcgVnVlKHtcclxuLy8gICBlbDogJyNhcHAnLFxyXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXHJcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxyXG4vLyB9KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2xheW91dHMvbm90Rm91bmQnXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vbGF5b3V0cy9sYW5kaW5nJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9sYXlvdXRzL2Fib3V0J1xyXG5pbXBvcnQgRG93bmxvYWQgZnJvbSAnLi9sYXlvdXRzL2Rvd25sb2FkJ1xyXG5cclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2xheW91dHMvZGFzaGJvYXJkJ1xyXG5pbXBvcnQgTXlGaWxlcyBmcm9tICcuL2xheW91dHMvbXlmaWxlcydcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9sYXlvdXRzL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBtYWluID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIG5hbWU6ICdsYW5kaW5nJyxcclxuICAgIGNvbXBvbmVudDogTGFuZGluZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9ob21lJyxcclxuICAgIHJlZGlyZWN0OiAnLydcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgbmFtZTogJ0Fib3V0JyxcclxuICAgIGNvbXBvbmVudDogQWJvdXRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvdScsXHJcbiAgICBuYW1lOiAnZGFzaGJvYXJkJyxcclxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2ZpbGVzJyxcclxuICAgIG5hbWU6ICdteSBmaWxlcycsXHJcbiAgICBjb21wb25lbnQ6IE15RmlsZXNcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvcCcsXHJcbiAgICBuYW1lOiAncHJvZmlsZScsXHJcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZC86aWQvOnBhc3MnLFxyXG4gICAgbmFtZTogJ2Rvd25sb2FkICh3aXRoIHBhc3MpJyxcclxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZC86aWQnLFxyXG4gICAgbmFtZTogJ2Rvd25sb2FkJyxcclxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IGVycm9yID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcqJyxcclxuICAgIG5hbWU6ICdlcnJvcicsXHJcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXS5jb25jYXQobWFpbiwgZXJyb3IpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wZjc2ZDdhOSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxub3RGb3VuZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTBmNzZkN2E5XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3QtZm91bmRcIj5cclxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJpbnRyby1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3QtZm91bmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxyXG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSW50cm9cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5ub3QtZm91bmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm90Rm91bmQudnVlPzU2MDY1OWNjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDU2NjM5MjYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcaW50cm8udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1kNTY2MzkyNlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGludHJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+e3sgdmlld1RpdGxlIHx8IGFwcFRpdGxlIH19PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd2aWV3VGl0bGUnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwVGl0bGU6ICdQZW5ndWluVXBsb2FkJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuaW50cm8ge1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnRyby52dWU/MDUyMTJjOGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnRyb1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZpZXdUaXRsZSB8fCBfdm0uYXBwVGl0bGUpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kNTY2MzkyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wZjc2ZDdhOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGFuZGluZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWJjY2U1ZTY2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcbGFuZGluZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWJjY2U1ZTY2XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGludHJvLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cclxuICAgICAgICAgIDxsb2dpbj48L2xvZ2luPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG4gIGltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgTG9naW4sXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgIGlmICh2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvdScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIC5pbnRyby1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGFuZGluZy52dWU/NDVmN2RmYTIiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI2OTg4ZmQ4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcZGV2Q3JlZGl0cy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTI2OTg4ZmQ4XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGV2Q3JlZGl0cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImRldi1jcmVkaXRzXCI+XHJcbiAgICA8aDYgY2xhc3M9XCJjcmVkaXQtdGV4dFwiPk1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiIHRhcmdldD1cIl9ibGFua1wiPjB4RmlyZWJhbGw8L2E+IG9mIDxhIGhyZWY9XCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuZGV2LWNyZWRpdHMge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgaDYuY3JlZGl0LXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldkNyZWRpdHMudnVlPzE5ZWMwOWZjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGV2LWNyZWRpdHNcIlxuICB9LCBbX2MoJ2g2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNyZWRpdC10ZXh0XCJcbiAgfSwgW192bS5fdihcIk1hZGUgYnkgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMHhGaXJlYmFsbFwiKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9pcmlkaXVtaW9uLnh5elwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklyaWRpdW1Jb24gU29mdHdhcmVcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNjk4OGZkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBhM2ViNDJjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGxvZ2luLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMGEzZWI0MmNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJsb2dpblwiPlxyXG4gICAgPG1kLXRhYnMgY2xhc3M9XCJtZC1hY2NlbnRcIiByZWY9XCJhdXRoT3B0aW9uVGFic1wiPlxyXG4gICAgICA8bWQtdGFiIGlkPVwidC1sb2dpblwiIG1kLWxhYmVsPVwiTG9nIEluXCI+XHJcbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeUxvZ2luXCI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImxvZ2luLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwibG9naW4ucGFzc3dvcmRcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyBsb2dpbi5lcnIgfX08L3A+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlMb2dpblwiIDpkaXNhYmxlZD1cIiFsb2dpbi5lXCI+TG9nIEluPC9tZC1idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L21kLXRhYj5cclxuXHJcbiAgICAgIDxtZC10YWIgaWQ9XCJ0LXNpZ251cFwiIG1kLWxhYmVsPVwiU2lnbiBVcFwiPlxyXG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlSZWdpc3RlclwiPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJyZWdpc3Rlci51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmNvbmZpcm1cIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+SW52aXRlIEtleSAob3B0aW9uYWwpPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5pbnZpdGVLZXlcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJlZ2lzdGVyLmlhY2NlcHRcIj5JIGFjY2VwdCB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnM8L21kLWNoZWNrYm94PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgcmVnaXN0ZXIuZXJyIH19PC9wPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwidHJ5UmVnaXN0ZXJcIiA6ZGlzYWJsZWQ9XCIhcmVnaXN0ZXIuZVwiPlNpZ24gVXA8L21kLWJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvbWQtdGFiPlxyXG4gICAgPC9tZC10YWJzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2xvZ2luJyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9naW46IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ2lzdGVyOiB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtOiAnJyxcclxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxyXG4gICAgICAgICAgaW52aXRlS2V5OiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRyeUxvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLmxvZ2luLmUpIHJldHVyblxyXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnY3JlZGVudGlhbHMgY2Fubm90IGJlIGVtcHR5J1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLmxvZ2luLmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xyXG4gICAgICAgIC8vIHNlbmQgbG9naW4gcG9zdFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9sb2dpbicsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5sb2dpbi5wYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcclxuICAgICAgICAgICAgICAvLyB2bS4kcm9vdC5sb2dnZWRJbiA9IHRydWVcclxuICAgICAgICAgICAgICAvLyBwdXNoIHVzZXIgaW5mb1xyXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcclxuICAgICAgICAgICAgICB2bS4kcm9vdC51Lm5hbWUgPSByZXNwb25zZS5kYXRhLnVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2bS4kcm9vdC51Lm5hbWUpXHJcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5sb2dpbi5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdpbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLnJlZ2lzdGVyLmUpIHJldHVyblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxyXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci51c2VybmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAndXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAneW91IG11c3QgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucydcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIucGFzc3dvcmQgIT09IHZtLnJlZ2lzdGVyLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdm0ucmVnaXN0ZXIuZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICcnXHJcbiAgICAgICAgLy8gc2VuZCByZWdpc3RlciBwb3N0XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHZtLnJlZ2lzdGVyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZtLnJlZ2lzdGVyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcclxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gc3VjY2VlZGVkXHJcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMuYXV0aE9wdGlvblRhYnMuY2hhbmdlVGFiKCd0LWxvZ2luJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXHJcbiAgICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuaW52aXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/NGFjYjYyYjQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luXCJcbiAgfSwgW19jKCdtZC10YWJzJywge1xuICAgIHJlZjogXCJhdXRoT3B0aW9uVGFic1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWFjY2VudFwiXG4gIH0sIFtfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1sb2dpblwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIkxvZyBJblwiXG4gICAgfVxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4udXNlcm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi51c2VybmFtZVwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2dpbi51c2VybmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9naW4udXNlcm5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9naW4ucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2dpbi5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubG9naW4uZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeUxvZ2luXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1zaWdudXBcIixcbiAgICAgIFwibWQtbGFiZWxcIjogXCJTaWduIFVwXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5jb25maXJtKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuY29uZmlybVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuY29uZmlybSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuY29uZmlybSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiSW52aXRlIEtleSAob3B0aW9uYWwpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pbnZpdGVLZXkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5pbnZpdGVLZXlcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaW52aXRlS2V5ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmlhY2NlcHRcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaWFjY2VwdCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlZ2lzdGVyLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5yZWdpc3Rlci5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5UmVnaXN0ZXJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaWduIFVwXCIpXSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wYTNlYjQyYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGludHJvLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdsb2dpbicpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWJjY2U1ZTY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWZjNTVlYzMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcYWJvdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi01ZmM1NWVjM1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFib3V0XCI+XHJcbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtY29udGVudFwiPlxyXG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0V2lkZ2V0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEludHJvLFxyXG4gICAgQWJvdXRcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5hYm91dC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qZm9udC13ZWlnaHQ6IDYwMDsqL1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlPzIwZWI3Zjg0IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGNlMWE4MWMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcYWJvdXRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00Y2UxYTgxY1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0V2lkZ2V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFib3V0V2lkZ2V0XCI+XHJcbiAgICA8aDU+QWJvdXQge3sgYXBwTmFtZSB9fTwvaDU+XHJcbiAgICA8cD5cclxuICAgICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cclxuICAgIDwvcD5cclxuICAgIDxoNj5cclxuICAgICAgUGVuZ3VpblVwbG9hZCB2ZXJzaW9uIHt7IGFwcFZlcnNpb24gfX1cclxuICAgIDwvaDY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXHJcbiAgICAgICAgYXBwVmVyc2lvbjogd2luZG93LiRhcHBWZXJzaW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuYWJvdXRXaWRnZXQge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgaDYuY3JlZGl0LXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFib3V0V2lkZ2V0LnZ1ZT82NTVlOGMwYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0V2lkZ2V0XCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJBYm91dCBcIiArIF92bS5fcyhfdm0uYXBwTmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICBQZW5ndWluVXBsb2FkIGlzIGEgc2VsZi1ob3N0YWJsZSwgZnVsbHkgZmVhdHVyZWQgd2ViIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB1c2VycyB1cGxvYWQgYW5kIHNoYXJlIGZpbGVzLlxcbiAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCB2ZXJzaW9uIFwiICsgX3ZtLl9zKF92bS5hcHBWZXJzaW9uKSArIFwiXFxuICBcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjZTFhODFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhcHBcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnRyby1hcmVhXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dC1jb250ZW50XCJcbiAgfSwgW19jKCdhYm91dCcpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVmYzU1ZWMzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kb3dubG9hZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNlZGMyMzQyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rvd25sb2FkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRvd25sb2FkLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtM2VkYzIzNDJcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkb3dubG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBkb3dubG9hZC1hcmVhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XHJcbiAgICAgICAgPGRvd25sb2FkSXRlbSA6aXRlbUlkPVwiJHJvdXRlLnBhcmFtcy5pZFwiIDppdGVtUGFzcz1cIiRyb3V0ZS5wYXJhbXMucGFzc1wiPjwvZG93bmxvYWRJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcbiAgaW1wb3J0IGRvd25sb2FkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2Rvd25sb2FkSXRlbSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIGRvd25sb2FkSXRlbSxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIC5kb3dubG9hZC1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWQudnVlPzYyYjk0Nzc3IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTAyZmExODRhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxkb3dubG9hZEl0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0wMmZhMTg0YVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRvd25sb2FkSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtaXRlbVwiPlxyXG4gICAgPG1kLWNhcmQ+XHJcblxyXG4gICAgICA8bWQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+RmlsZSBEb3dubG9hZDwvZGl2PlxyXG4gICAgICA8L21kLWNhcmQtaGVhZGVyPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgPG1kLWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtZC1zcGlubmVyIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgICAgPGg1PkxvYWRpbmcgRmlsZSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1kLWljb24gbWQtdGhlbWU9XCJsaWdodC1ibHVlXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XHJcbiAgICAgICAgICA8aDU+e3sgZmlsZS5uYW1lIH19PC9oNT5cclxuICAgICAgICAgIDxwPnt7IGZpbGUuc2l6ZVRleHQgfX08L3A+XHJcbiAgICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1kLWNhcmQtYWN0aW9ucyB2LWlmPVwiIWVycm9yXCI+XHJcbiAgICAgICAgICA8bWQtYnV0dG9uIEBjbGljaz1cImRvd25sb2FkRmlsZVwiPlxyXG4gICAgICAgICAgICA8bWQtaWNvbiB2LWlmPVwiZmlsZS5wYXNzLmxlbmd0aCA+IDBcIj5sb2NrPC9tZC1pY29uPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgIDwhLS08bWQtYnV0dG9uPkNvcHkgTGluazwvbWQtYnV0dG9uPi0tPlxyXG4gICAgICAgIDwvbWQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2l0ZW1JZCcsICdpdGVtUGFzcyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZmlsZToge1xyXG4gICAgICAgICAgbmFtZTogJ0xvYWRpbmcnLFxyXG4gICAgICAgICAgc2l6ZTogJ3JldHJpZXZpbmcgaW5mb3JtYXRpb24gZnJvbSBzZXJ2ZXInLFxyXG4gICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICBwYXNzOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGNJdGVtUGFzczogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZG93bmxvYWRGaWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9kb3dubG9hZC8nICsgdGhpcy5maWxlLmlkICsgKHRoaXMuZmlsZS5wYXNzID8gJyEnICsgdGhpcy5maWxlLnBhc3MgOiAnJylcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlRmlsZUluZm86IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IGtleSA/ICchJyArIGtleSA6ICcnXHJcbiAgICAgICAgdm0uZmlsZS5pZCA9IHZtLml0ZW1JZFxyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlaW5mby8nICsgdm0uZmlsZS5pZCArIHN1ZmZpeCwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gcmVzcG9uc2UuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9IHJlc3BvbnNlLmRhdGEuaHJTaXplXHJcbiAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgaWYgKHN1ZmZpeCkge1xyXG4gICAgICAgICAgICAgICAgdm0uZmlsZS5wYXNzID0ga2V5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyBmaWxlIGlzIHBhc3N3b3JkIHByb3RlY3RlZFxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ0ZpbGUgcGFzc3dvcmQnLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcclxuICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdBY2Nlc3MgRGVuaWVkJ1xyXG4gICAgICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIGZpbGUgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9ICdGaWxlIE5vdCBGb3VuZCdcclxuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcclxuICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuaXRlbVBhc3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuY0l0ZW1QYXNzID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUZpbGVJbmZvKHRoaXMuY0l0ZW1QYXNzKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5kb3dubG9hZC1pdGVtIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkb3dubG9hZEl0ZW0udnVlPzY1OGRlZTlkIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZG93bmxvYWQtaXRlbVwiXG4gIH0sIFtfYygnbWQtY2FyZCcsIFtfYygnbWQtY2FyZC1oZWFkZXInLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJGaWxlIERvd25sb2FkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5sb2FkaW5nKSA/IF9jKCdkaXYnLCBbX2MoJ21kLWNhcmQtY29udGVudCcsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1pbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KFwiTG9hZGluZyBGaWxlIEluZm9ybWF0aW9uXCIpXSldLCAxKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtY2FyZC1jb250ZW50JywgW19jKCdtZC1pY29uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aGVtZVwiOiBcImxpZ2h0LWJsdWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcImluc2VydF9kcml2ZV9maWxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlLnNpemVUZXh0KSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5lcnJvcikgPyBfYygnbWQtY2FyZC1hY3Rpb25zJywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd25sb2FkRmlsZVxuICAgIH1cbiAgfSwgWyhfdm0uZmlsZS5wYXNzLmxlbmd0aCA+IDApID8gX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibG9ja1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIERvd25sb2FkXFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKSA6IF92bS5fZSgpXSwgMSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTAyZmExODRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGRvd25sb2FkLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdkb3dubG9hZEl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXRlbUlkXCI6IF92bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgXCJpdGVtUGFzc1wiOiBfdm0uJHJvdXRlLnBhcmFtcy5wYXNzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZWRjMjM0MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzNiNThiNGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRhc2hib2FyZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTczYjU4YjRhXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJEYXNoYm9hcmRcIj48L2ludHJvPlxyXG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZmlsZVVwbG9hZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGFzaGJvYXJkLnZ1ZT81NDVmYWFlOCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2UxNzFkNTAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxmaWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtN2UxNzFkNTBcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmaWxlVXBsb2FkV2lkZ2V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWQtd2lkZ2V0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cclxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrPVwidmlld015RmlsZXNcIj5WaWV3IGFsbCBteSBmaWxlczwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWhlcmVcIiBAZHJvcC5zdG9wLnByZXZlbnQ9XCJoYW5kbGVEcmFnRHJvcFVwbG9hZFwiIEBkcmFnZW50ZXIuc3RvcC5wcmV2ZW50IEBkcmFnbGVhdmUuc3RvcC5wcmV2ZW50IEBkcmFnb3Zlci5zdG9wLnByZXZlbnQ+XHJcbiAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cInRhcmdldFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2sgdG8gdXBsb2FkIGZpbGVzPC9hPi0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5VcGxvYWQgRmlsZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXN1YmhlYWRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtYXJlYS1wYWRkaW5nXCIgQGNsaWNrPVwiYnJvd3NlRm9yRmlsZXNcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgICAgICAgIDwhLS08bWQtc3Bpbm5lciBtZC1zaXplPVwiNjBcIiA6bWQtcHJvZ3Jlc3M9XCJwcm9ncmVzc0luZGljYXRvci52YWx1ZVwiIGNsYXNzPVwibWQtd2FyblwiPjwvbWQtc3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3sgcHJvZ3Jlc3NNZXNzYWdlIH19PC9wPi0tPlxyXG4gICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWRpbmcgZmlsZS0tPlxyXG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwicHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDBcIj5VcGxvYWRpbmc8L21kLXN1YmhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIocHJJbmQsIGl4KSBpbiBwcm9ncmVzc0luZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1pZj1cIiFwckluZC5lcnJvclwiPmNsb3VkX3F1ZXVlPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiB2LWVsc2U+ZXJyb3I8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IHBySW5kLm5hbWUgfX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhcHJJbmQuZXJyb3JcIj4ge3sgKHBySW5kLnZhbHVlIDwgMTAwKSA/IGBVcGxvYWRpbmcuLi4gKCR7cHJJbmQudmFsdWV9JSlgIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+IHt7ICdVcGxvYWQgZXJyb3I6ICcgKyBwckluZC5tZXNzYWdlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwiY2FuY2VsVXBsb2FkKHBySW5kKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmNhbmNlbDwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfdXBsb2FkPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgPCEtLVVwbG9hZCBjb21wbGV0ZWQgZmlsZXMtLT5cclxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cImNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDBcIj5Db21wbGV0ZWQ8L21kLXN1YmhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIoY21wbEZpbGUsIGl4KSBpbiBjb21wbGV0ZWRGaWxlc1wiIEBjbGljaz1cInZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQgQ29tcGxldGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgPG1kLWJ1dHRvbiB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiIEBjbGljaz1cImNvbXBsZXRlZEZpbGVzID0gW11cIj5DbGVhciBBbGw8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiaW52aXNpYmxlXCIgcmVmPVwiYnJvd3NlXCIgQGNoYW5nZT1cIm9uRmlsZXNVcGxvYWRlZFwiIG11bHRpcGxlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3JzOiBbXSxcclxuICAgICAgICAvKiBzY2hlbWE6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IG51bWJlciBbMC0xMDBdLFxyXG4gICAgICAgICAgZmlsZVJlZjogb2JqZWN0IFtyZWZlcmVuY2UgdG8gZmlsZSB0aGF0IGlzIHVwbG9hZGluZ10sXHJcbiAgICAgICAgICBuYW1lOiBzdHJpbmcgW25hbWUgb2YgZmlsZV0sXHJcbiAgICAgICAgICB4aHI6IG9iamVjdCBbeGhyIG9iamVjdCByZWZlcmVuY2VdLFxyXG4gICAgICAgICAgZXJyb3I6IGJvb2xcclxuICAgICAgICAgIG1lc3NhZ2U6IHN0cmluZyBvciBudWxsIFthbiBlcnJvciBtZXNzYWdlXVxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbXBsZXRlZEZpbGVzOiBbXVxyXG4gICAgICAgIC8qIHNjaGVtYTpcclxuICAgICAgICAgKi9cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHVwbG9hZGluZ0ZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aFxyXG4gICAgICB9LFxyXG4gICAgICB1cGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRpbmdGaWxlcyA+IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdmlld015RmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpbGVzJylcclxuICAgICAgfSxcclxuICAgICAgYnJvd3NlRm9yRmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRmlsZXNVcGxvYWRlZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcclxuICAgICAgICBsZXQgZmlsZUNvdW50ID0gYnJvd3NlLmZpbGVzLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgIGxldCBmID0gYnJvd3NlLmZpbGVzW2ldXHJcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxyXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXHJcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZiwgcHJvZ3Jlc3MpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVEcmFnRHJvcFVwbG9hZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgZiA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xyXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgZmlsZVJlZjogZixcclxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxyXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsVXBsb2FkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgcHJvZ3Jlc3MueGhyLmFib3J0KClcclxuICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkRmlsZTogZnVuY3Rpb24gKGZpbGUsIHByb2dyZXNzKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgIHByb2dyZXNzLnhociA9IHhoclxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi9hcGkvdXBsb2FkXCIpXHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gdXBsb2FkIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGxvYWQgY29tcGxldGUnLCBwcm9ncmVzcy5uYW1lKVxyXG4gICAgICAgICAgICAvLyBkZXF1ZXVlIHRoZSB1cGxvYWRpbmcgZmlsZVxyXG4gICAgICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRGaWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9ncmVzcy5uYW1lLFxyXG4gICAgICAgICAgICAgIGRvd25sb2FkUGFnZTogJy8jL2QvJyArIHJlc3BvbnNlLmZpbGVJZFxyXG4gICAgICAgICAgICAgIC8vIGRvd25sb2FkUGFnZTogcmVzcG9uc2UuZG93bmxvYWRQYWdlIC8vIGdldCBkb3dubG9hZCBwYWdlIGZyb20gc2VydmVyIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXHJcbiAgICAgICAgICAgIHByb2dyZXNzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBwcm9ncmVzcy5tZXNzYWdlID0geGhyLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICAvLyByZWFjdGl2ZSB1cGRhdGVcclxuICAgICAgICAgICAgdm0uJHNldChwcm9ncmVzcywgJ21lc3NhZ2UnLCB4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcy52YWx1ZSA9IE1hdGguZmxvb3IoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtLmFwcGVuZChcImFwaWtleVwiLCB2bS4kcm9vdC51LmtleSlcclxuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSlcclxuICAgICAgICB4aHIuc2VuZChmb3JtKVxyXG4gICAgICB9LFxyXG4gICAgICB2aXNpdFVybDogZnVuY3Rpb24gKHUpIHtcclxuICAgICAgICB3aW5kb3cub3Blbih1LCAnX2JsYW5rJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnVwbG9hZC1hcmVhLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTQlO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZpbGVVcGxvYWRXaWRnZXQudnVlPzZhYTJhOWNmIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtd2lkZ2V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS52aWV3TXlGaWxlc1xuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZXcgYWxsIG15IGZpbGVzXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaGVyZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImRyb3BcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oYW5kbGVEcmFnRHJvcFVwbG9hZCgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJkcmFnZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXN1YmhlYWRcIlxuICB9LCBbX3ZtLl92KFwiRHJhZyBhbmQgZHJvcCBvciBjbGlja1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1hcmVhLXBhZGRpbmdcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYnJvd3NlRm9yRmlsZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCJcbiAgfSwgWyhfdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDApID8gX2MoJ21kLXN1YmhlYWRlcicsIFtfdm0uX3YoXCJVcGxvYWRpbmdcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5wcm9ncmVzc0luZGljYXRvcnMpLCBmdW5jdGlvbihwckluZCwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFsoIXBySW5kLmVycm9yKSA/IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX3F1ZXVlXCIpXSkgOiBfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJlcnJvclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhwckluZC5uYW1lKSArIFwiIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoIXBySW5kLmVycm9yKSA/IF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcygocHJJbmQudmFsdWUgPCAxMDApID8gKFwiVXBsb2FkaW5nLi4uIChcIiArIChwckluZC52YWx1ZSkgKyBcIiUpXCIpIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJykpXSkgOiBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uY2FuY2VsVXBsb2FkKHBySW5kKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNhbmNlbFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiXG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfdXBsb2FkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiXG4gICAgfSldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1zdWJoZWFkZXInLCBbX3ZtLl92KFwiQ29tcGxldGVkXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uY29tcGxldGVkRmlsZXMpLCBmdW5jdGlvbihjbXBsRmlsZSwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9kb25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNtcGxGaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJVcGxvYWQgQ29tcGxldGUhXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCJcbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZG9uZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1idXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jb21wbGV0ZWRGaWxlcyA9IFtdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xlYXIgQWxsXCIpXSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImJyb3dzZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm11bHRpcGxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25GaWxlc1VwbG9hZGVkXG4gICAgfVxuICB9KV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2UxNzFkNTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiRGFzaGJvYXJkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZmlsZVVwbG9hZFdpZGdldCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzNiNThiNGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTJhMmI1MDEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbXlmaWxlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxteWZpbGVzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMTJhMmI1MDFcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteWZpbGVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxyXG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cclxuICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiTXkgRmlsZXNcIj48L2ludHJvPlxyXG4gICAgPG15RmlsZXNMaXN0PjwvbXlGaWxlc0xpc3Q+XHJcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xyXG4gIGltcG9ydCBteUZpbGVzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL215RmlsZXNMaXN0J1xyXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIG15RmlsZXNMaXN0LFxyXG4gICAgICBkZXZDcmVkaXRzXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xyXG4gICAgICBuZXh0KHZtID0+IHtcclxuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XHJcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuc2hyaW5rLWxheW91dCB7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteWZpbGVzLnZ1ZT9mZTczNjBlYyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBmOTQ4MzJhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215RmlsZXNMaXN0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXG15RmlsZXNMaXN0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMGY5NDgzMmFcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteUZpbGVzTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJteS1maWxlcy1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cclxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrPVwidXBsb2FkTW9yZUZpbGVzXCI+VXBsb2FkIEZpbGVzPC9tZC1idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWRlZC1maWxlcy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPkFsbCBNeSBGaWxlczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtc3VidGl0bGVcIj5GaWxlczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkRmluaXNoZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJub0ZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBGaWxlczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVwiKGZpbGUsIGl4KSBpbiBmaWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5jbG91ZF9kb25lPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBmaWxlLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IGZpbGUuaHJTaXplIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwibG9ja0ZpbGUoaXgpXCIgdi1pZj1cIiFmaWxlLmxvY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2tfb3BlbjwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cInVubG9ja0ZpbGUoaXgpXCIgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2s8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJkb3dubG9hZEZpbGUoaXgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV9kb3dubG9hZDwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgbWQtbWVudS10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bW9yZV9ob3JpejwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJ2aXNpdERvd25sb2FkUGFnZShpeClcIj5Eb3dubG9hZCBQYWdlPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cImRlbGV0ZUZpbGUoaXgpXCI+RGVsZXRlPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tZC1tZW51LWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtbWVudT5cclxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgIDxtZC1zcGlubmVyIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxyXG4gICAgICAgICAgICAgIDxoNT5SZXRyaWV2aW5nIERhdGE8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgYXV0aFJlcXVlc3RQYXJhbXM6IHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBhcGlrZXk6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkRmluaXNoZWQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBmaWxlc0NvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMubGVuZ3RoXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vRmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc0NvdW50ID09IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdXBsb2FkTW9yZUZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91JylcclxuICAgICAgfSxcclxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpc2l0RG93bmxvYWRQYWdlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgZiA9IHRoaXMuZmlsZXNbaXhdXHJcbiAgICAgICAgaWYgKGYubG9ja2VkKSB7XHJcbiAgICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybShcclxuICAgICAgICAgICAgYFxyXG5UaGlzIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkLiBEbyB5b3Ugd2FudCB0byBlbmNvZGUgdGhlIDxicj5cclxucGFzc3dvcmQgaW4gdGhlIGxpbms/IElmIHlvdSBkb24ndCBkbyB0aGlzLCBhbnlvbmUgd2hvIHZpc2l0cyA8YnI+XHJcbnlvdXIgbGluayB3aWxsIG5lZWQgdG8gZW50ZXIgdGhlIGZpbGUgcGFzc3dvcmQgdG8gdmlldyB0aGUgZmlsZS5cclxuYCxcclxuICAgICAgICAgICAgJ0luY2x1ZGUgcGFzc3dvcmQ/JyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZtLnNob3dEb3dubG9hZExpbmtXaXRoUGFzcyhpeClcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8ganVzdCBnbyB0byBsaW5rXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxQYWdlID0gJy8jL2QvJyArIGYuZmlsZUlkXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgJ1llcycsICdObycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGp1c3Qgb3BlbiB0aGUgcGFnZVxyXG4gICAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oZGxQYWdlLCAnX2JsYW5rJylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dEb3dubG9hZExpbmtXaXRoUGFzczogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2dldHBhc3MvJyArIGYuZmlsZUlkLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gcGFzc3dvcmQgc2hvdWxkIGJlIHJldHVybmVkXHJcbiAgICAgICAgICAgIGxldCBkbFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF0gKyAnIy9kLycgKyBmLmZpbGVJZCArICcvJyArIHdpbmRvdy5idG9hKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoXHJcbiAgICAgICAgICAgICAgYFxyXG5Eb3dubG9hZCBsaW5rIHdpdGggcGFzc3dvcmQgZW5jb2RlZDo8YnI+XHJcbjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke2RsUGFnZX1cIj4ke2RsUGFnZX08L2E+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgJ0xpbmsgQ3JlYXRlZCcpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkb3dubG9hZEZpbGU6IGZ1bmN0aW9uIChpeCkge1xyXG4gICAgICAgIGxldCBmID0gdGhpcy5maWxlc1tpeF1cclxuICAgICAgICAvLyB1c2UgZm9yY2UgZG93bmxvYWQgdG8gYnlwYXNzIHBhc3N3b3JkXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9mZG93bmxvYWQvJyArIGYuZmlsZUlkICsgJz9hcGlrZXk9JyArIHRoaXMuJHJvb3QudS5rZXlcclxuICAgICAgfSxcclxuICAgICAgbG9ja0ZpbGU6IGZ1bmN0aW9uIChpeCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxyXG4gICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ1Bhc3N3b3JkJywgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgbG9jayByZXF1ZXN0XHJcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL2xvY2svJyArIGYuZmlsZUlkICsgJyEnICsgciwge30sIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxyXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcclxuICAgICAgICAgICAgICAgIGYubG9ja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdW5sb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHBhc3N3b3JkIG9uIHRoaXMgZmlsZT8nLCAnQ29uZmlybSBVbmxvY2snLCAocikgPT4ge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgLy8gc2VuZCB1bmxvY2sgcmVxdWVzdFxyXG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS91bmxvY2svJyArIGYuZmlsZUlkLCB7fSwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXHJcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmaWxlPyBJdCBjYW5ub3QgYmUgcmVjb3ZlcmVkLicsICdDb25maXJtIERlbGV0ZScsXHJcbiAgICAgICAgICAocikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgIC8vIHNlbmQgZGVsZXRlIHJlcXVlc3RcclxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvZGVsZXRlLycgKyBmLmZpbGVJZCwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZXMuc3BsaWNlKGl4LCAxKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gbG9hZCBmaWxlcyBmcm9tIHNlcnZlclxyXG4gICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgIHZtLmF1dGhSZXF1ZXN0UGFyYW1zLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcmZpbGVzJywgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvLyBtZXJnZSBmaWxlIGxpc3RcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2bS5maWxlcy5wdXNoKHJlc3BvbnNlLmRhdGFbaV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2bS5sb2FkRmluaXNoZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteUZpbGVzTGlzdC52dWU/NDQzYzA3ZTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cGxvYWRNb3JlRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZGVkLWZpbGVzLWxpc3RcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBbGwgTXkgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1zdWJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmxvYWRGaW5pc2hlZCkgPyBfYygnZGl2JywgWyhfdm0ubm9GaWxlcykgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIk5vIEZpbGVzXCIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiXG4gIH0sIF92bS5fbCgoX3ZtLmZpbGVzKSwgZnVuY3Rpb24oZmlsZSwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9kb25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLmhyU2l6ZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFmaWxlLmxvY2tlZCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tfb3BlblwiKV0pXSwgMSkgOiBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVubG9ja0ZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibG9ja1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZG93bmxvYWRGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfZG93bmxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJtb3JlX2hvcml6XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXREb3dubG9hZFBhZ2UoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRG93bmxvYWQgUGFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSkpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJSZXRyaWV2aW5nIERhdGFcIildKV0sIDEpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wZjk0ODMyYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiTXkgRmlsZXNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdteUZpbGVzTGlzdCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTJhMmI1MDEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZmlsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWUyZTVmMTQyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxccHJvZmlsZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWUyZTVmMTQyXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiVXNlciBQcm9maWxlXCI+PC9pbnRybz5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPG15UHJvZmlsZT48L215UHJvZmlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgbXlQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvbXlQcm9maWxlJ1xyXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIG15UHJvZmlsZSxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZmlsZS52dWU/NTc3NWJiMDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTYxNzRiNDQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXG15UHJvZmlsZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWE2MTc0YjQ0XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlQcm9maWxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJteS1wcm9maWxlIGxlZnRcIj5cclxuICAgIDxoND5NYW5hZ2UgQWNjb3VudCAoe3sgJHJvb3QudS5uYW1lIH19KTwvaDQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoNT5SZXNvdXJjZSBVc2FnZTwvaDU+XHJcbiAgICAgIDxkaXYgdi1pZj1cInVJbmZvLmxvYWRlZFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVXNpbmdcclxuICAgICAgICAgIDxiPnt7IHVJbmZvLnVzYWdlIH19PC9iPiBvZiA8Yj57eyB1SW5mby5xdW90YSB9fTwvYj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtc3Bpbm5lciBtZC1pbmRldGVybWluYXRlPjwvbWQtc3Bpbm5lcj5cclxuICAgICAgICA8cD5SZXRyaWV2aW5nIERhdGE8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cclxuICAgICAgPGg1PkFQSTwvaDU+XHJcbiAgICAgIDxoNj5BUEkgS2V5OiA8Y29kZT57eyAkcm9vdC51LmtleSB9fTwvY29kZT48L2g2PlxyXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeSBtZC1yYWlzZWRcIiBAY2xpY2s9XCJnZW5lcmF0ZU5ld0FwaUtleVwiPkdlbmVyYXRlIE5ldzwvbWQtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoNT5TZWN1cml0eTwvaDU+XHJcbiAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlVcGRhdGVQYXNzd29yZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlaWdodCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQub2xkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQuY29uZmlybVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgdXBkYXRlUGFzc3dvcmQuZXJyIH19PC9wPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxyXG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlVcGRhdGVQYXNzd29yZFwiIDpkaXNhYmxlZD1cIiF1cGRhdGVQYXNzd29yZC5lXCI+Q2hhbmdlIFBhc3N3b3JkPC9tZC1idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGg1PkRhbmdlciBab25lPC9oNT5cclxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC13YXJuXCIgQGNsaWNrPVwiZGVsZXRlQWxsRmlsZXNcIj5EZWxldGUgQWxsIEZpbGVzPC9tZC1idXR0b24+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljaz1cImRlbGV0ZUFjY291bnRcIj5EZWxldGUgQWNjb3VudDwvbWQtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkOiB7XHJcbiAgICAgICAgICBvbGQ6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgY29uZmlybTogJycsXHJcbiAgICAgICAgICBlcnI6ICcnLFxyXG4gICAgICAgICAgZTogdHJ1ZSAvLyBlbmFibGVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRoUmVxdWVzdFBhcmFtczoge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGFwaWtleTogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVJbmZvOiB7XHJcbiAgICAgICAgICBxdW90YTogbnVsbCxcclxuICAgICAgICAgIHVzYWdlOiBudWxsLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2VuZXJhdGVOZXdBcGlLZXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCBhIG5ldyBBUEkga2V5PyBUaGUgb2xkIG9uZSB3aWxsIG5vIGxvbmdlciB3b3JrLiBZb3Ugd2lsbCB0aGVuIGJlIGxvZ2dlZCBvdXQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL25ld2tleScsIHt9LCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcclxuICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBkb25lXHJcbiAgICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXHJcbiAgICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ05ldyBBUEkga2V5IGdlbmVyYXRlZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nLCAnU3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQWxsRmlsZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBBbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvZmlsZXMnLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWxlcyBoYXZlIGJlZW4gbnVrZWQuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcclxuICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUFjY291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBZb3VyIGFjY291bnQgYW5kIGFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocjEpIHtcclxuICAgICAgICAgIGlmIChyMSkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ1lvdXIgYWNjb3VudCB3aWxsIGJlIGRlbGV0ZWQuIEFyZSB5b3UgY2VydGFpbiB5b3Ugd291bGQgbGlrZSB0byBwcm9jZWVkPycpKSB7XHJcbiAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvdXNlcicsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGhhcyBiZWVuIG51a2VkLlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBub3cgbG9nIG91dFxyXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcclxuICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdHJ5VXBkYXRlUGFzc3dvcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgaWYgKCF2bS51cGRhdGVQYXNzd29yZC5lKSByZXR1cm5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgY29uZmlybWF0aW9uIGlzIGNvcnJlY3RcclxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkICE9PSB2bS51cGRhdGVQYXNzd29yZC5jb25maXJtKSB7XHJcbiAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAncGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoJ1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAnJ1xyXG4gICAgICAgIC8vIHNlbmQgdXBkYXRlUGFzc3dvcmQgcG9zdFxyXG4gICAgICAgIGF4aW9zLnBhdGNoKCcvY2hhbmdlcGFzc3dvcmQnLCB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdm0uJHJvb3QudS5uYW1lLFxyXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLm9sZCxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZFxyXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1Bhc3N3b3JkIGNoYW5nZSBzdWNjZWVkZWQhIFBsZWFzZSBsb2cgaW4gYWdhaW4uJylcclxuICAgICAgICAgICAgICAvLyBsb2cgb3V0XHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAvLyB1bmF1dGhvcml6ZWQgYmVjYXVzZSBvZiBlcnJvclxyXG4gICAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcclxuICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICB2bS5hdXRoUmVxdWVzdFBhcmFtcy5wYXJhbXMuYXBpa2V5ID0gdm0uJHJvb3QudS5rZXlcclxuICAgICAgLy8gbG9hZCB1c2VyIGluZm9cclxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJpbmZvJywgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgLy8gZmV0Y2hlZCBkYXRhXHJcbiAgICAgICAgICB2bS51SW5mbyA9IHtcclxuICAgICAgICAgICAgcXVvdGE6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEucXVvdGEpLFxyXG4gICAgICAgICAgICB1c2FnZTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS51c2FnZSksXHJcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG15UHJvZmlsZS52dWU/ZDlkYjFlMDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1wcm9maWxlIGxlZnRcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIk1hbmFnZSBBY2NvdW50IChcIiArIF92bS5fcyhfdm0uJHJvb3QudS5uYW1lKSArIFwiKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiUmVzb3VyY2UgVXNhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51SW5mby5sb2FkZWQpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgIFVzaW5nXFxuICAgICAgICBcIiksIF9jKCdiJywgW192bS5fdihfdm0uX3MoX3ZtLnVJbmZvLnVzYWdlKSldKSwgX3ZtLl92KFwiIG9mIFwiKSwgX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udUluZm8ucXVvdGEpKV0pXSldKSA6IF9jKCdkaXYnLCBbX2MoJ21kLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQVBJXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJBUEkgS2V5OiBcIiksIF9jKCdjb2RlJywgW192bS5fdihfdm0uX3MoX3ZtLiRyb290LnUua2V5KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmdlbmVyYXRlTmV3QXBpS2V5XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiR2VuZXJhdGUgTmV3XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlNlY3VyaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlVcGRhdGVQYXNzd29yZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlaWdodCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkN1cnJlbnQgcGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLm9sZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQub2xkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5vbGQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiTmV3IFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLmNvbmZpcm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwZGF0ZVBhc3N3b3JkLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS51cGRhdGVQYXNzd29yZC5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5VXBkYXRlUGFzc3dvcmRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDaGFuZ2UgUGFzc3dvcmRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g1JywgW192bS5fdihcIkRhbmdlciBab25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWxsRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWxsIEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWNjb3VudFxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZSBBY2NvdW50XCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWE2MTc0YjQ0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiVXNlciBQcm9maWxlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdteVByb2ZpbGUnKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWUyZTVmMTQyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTEwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvLVRoaW4nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by0xMDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tVGhpbkl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTGlnaHRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLWl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by01MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1NZWRpdW1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQnKSwgbG9jYWwoJ1JvYm90by1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNzAwaXRhbGljIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJvbGRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by05MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tOTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBMaWdodCcpLCBsb2NhbCgnUmFsZXdheS1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IE1lZGl1bScpLCBsb2NhbCgnUmFsZXdheS1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS02MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgU2VtaUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktU2VtaUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktODAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjhjZTU5ODgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC42NTRjYjRkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLmFjZWUwZWEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy40MmRlODk4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLjE2ZGRiMTUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC5lY2NlOTJkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjNkZGI3NDgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy40ZDA4ZGFlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci43ZTM2N2JlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci4xNmUxZDkzLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy45ODRhZTM3LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuMWU2NWU3ZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC5iYjQ3NGYxLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuNTdhZjY0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy45ZTdiZWVlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuYjY3MDY5NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC4wZDdlNzFmLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuNTI1ZDViNC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy43Mzk0Y2E5LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuYWQwZTc0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy40ZmFlYzgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuM2I5NTkwZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5mNGU4ZGM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZGU5ODRjMC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuZTc0NmUwMy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuNzhkZDVhYi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci45MTA2NDM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjI5MGVlMzgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuZTVhMzIxMi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuODFlOTU1OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmNkOTAzOTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmE0YjZmMTcud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC4wNmYxYzg2LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC5jODY0ZDg0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMDQxYTRiOC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMmEzYTljZi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIpICsgXCIpO1xcclxcbiAgICAvKiBGb3IgSUU2LTggKi9cXHJcXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSwgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZTc5YmZkOC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci41NzBlYjgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci4wMTJjZjZhLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuYTM3YjBjMC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcclxcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxyXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXHJcXG4gKiBhbmQgRmlyZWZveC5cXHJcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcclxcbiAqL1xcclxcblxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tYWluLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXHJcXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW8sXFxyXFxuY2FudmFzLFxcclxcbnByb2dyZXNzLFxcclxcbnZpZGVvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcclxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSxcXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmRmbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXHJcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcclxcbiAqL1xcclxcblxcclxcbm1hcmsge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmMDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdmc6bm90KDpyb290KSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgbWFyZ2luOiAxZW0gNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxucHJlLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcclxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXHJcXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcclxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcclxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcclxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXHJcXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcclxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxyXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXHJcXG4gKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcclxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxyXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxyXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcclxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXHJcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gIG1hcmdpbjogMCAycHg7XFxyXFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXHJcXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxyXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxyXFxuICovXFxyXFxuXFxyXFxub3B0Z3JvdXAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxlc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGQsXFxyXFxudGgge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4qIFNrZWxldG9uIFYyLjAuNFxcclxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcclxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcclxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcclxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXHJcXG4qIDEyLzI5LzIwMTRcXHJcXG4qL1xcclxcblxcclxcblxcclxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxyXFxuLSBHcmlkXFxyXFxuLSBCYXNlIFN0eWxlc1xcclxcbi0gVHlwb2dyYXBoeVxcclxcbi0gTGlua3NcXHJcXG4tIEJ1dHRvbnNcXHJcXG4tIEZvcm1zXFxyXFxuLSBMaXN0c1xcclxcbi0gQ29kZVxcclxcbi0gVGFibGVzXFxyXFxuLSBTcGFjaW5nXFxyXFxuLSBVdGlsaXRpZXNcXHJcXG4tIENsZWFyaW5nXFxyXFxuLSBNZWRpYSBRdWVyaWVzXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBHcmlkXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTYwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG4uY29sdW1uLFxcclxcbi5jb2x1bW5zIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuXFxyXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBwYWRkaW5nOiAwOyB9XFxyXFxufVxcclxcblxcclxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTsgfVxcclxcbiAgLmNvbHVtbixcXHJcXG4gIC5jb2x1bW5zIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyB9XFxyXFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcclxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcclxcblxcclxcbiAgLm9uZS5jb2x1bW4sXFxyXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxyXFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxyXFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxyXFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxyXFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxyXFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxyXFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxyXFxuXFxyXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxyXFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxyXFxuXFxyXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcclxcblxcclxcbiAgLyogT2Zmc2V0cyAqL1xcclxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxyXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXHJcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcclxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcclxcblxcclxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXHJcXG5cXHJcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQmFzZSBTdHlsZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4vKiBOT1RFXFxyXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcclxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMyMjI7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUeXBvZ3JhcGh5XFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXHJcXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxyXFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXHJcXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcclxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcclxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcclxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXHJcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXHJcXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXHJcXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXHJcXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXHJcXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXHJcXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW4tdG9wOiAwOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTGlua3NcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMUVBRURCOyB9XFxyXFxuYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzBGQTBDRTsgfVxcclxcblxcclxcblxcclxcbi8qIExpc3RzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XFxyXFxub2wsIHVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7IH1cXHJcXG51bCB1bCxcXHJcXG51bCBvbCxcXHJcXG5vbCBvbCxcXHJcXG5vbCB1bCB7XFxyXFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcclxcbiAgZm9udC1zaXplOiA5MCU7IH1cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29kZVxcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmNvZGUge1xcclxcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxyXFxuICBtYXJnaW46IDAgLjJyZW07XFxyXFxuICBmb250LXNpemU6IDkwJTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcbnByZSA+IGNvZGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYWJsZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG50aCxcXHJcXG50ZCB7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cXHJcXG50aDpmaXJzdC1jaGlsZCxcXHJcXG50ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXHJcXG50aDpsYXN0LWNoaWxkLFxcclxcbnRkOmxhc3QtY2hpbGQge1xcclxcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcclxcblxcclxcblxcclxcbi8qIFNwYWNpbmdcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5idXR0b24sXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0LFxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcclxcbnByZSxcXHJcXG5ibG9ja3F1b3RlLFxcclxcbmRsLFxcclxcbmZpZ3VyZSxcXHJcXG50YWJsZSxcXHJcXG5wLFxcclxcbnVsLFxcclxcbm9sLFxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLnUtZnVsbC13aWR0aCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG4udS1tYXgtZnVsbC13aWR0aCB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLnUtcHVsbC1yaWdodCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7IH1cXHJcXG4udS1wdWxsLWxlZnQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuaHIge1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQ2xlYXJpbmdcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5cXHJcXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxyXFxuLmNvbnRhaW5lcjphZnRlcixcXHJcXG4ucm93OmFmdGVyLFxcclxcbi51LWNmIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjbGVhcjogYm90aDsgfVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4vKlxcclxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcclxcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxyXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxyXFxudGhlcmUuXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLW1hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLW1hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1kLWF2YXRhcnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDttYXJnaW46YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6NDBweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1kLWF2YXRhci5tZC1sYXJnZXt3aWR0aDo2NHB4O21pbi13aWR0aDo2NHB4O2hlaWdodDo2NHB4O21pbi1oZWlnaHQ6NjRweDtib3JkZXItcmFkaXVzOjY0cHh9Lm1kLWF2YXRhci5tZC1sYXJnZSAubWQtaWNvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiAubWQtaWNvbntjb2xvcjojZmZmfS5tZC1hdmF0YXIgLm1kLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLWF2YXRhciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLWF2YXRhciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb24tZHVyYXRpb246LjlzfS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXRvcHttYXJnaW4tdG9wOi04cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHR7bWFyZ2luLWxlZnQ6OHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbXttYXJnaW4tdG9wOjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0e21hcmdpbi1sZWZ0Oi04cHh9Lm1kLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWJhY2tkcm9wLm1kLWFjdGl2ZXtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtYmFja2Ryb3AubWQtdHJhbnNwYXJlbnR7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMDUpfS5tZC1ib3R0b20tYmFye3dpZHRoOjEwMCU7bWluLXdpZHRoOjEwMCU7aGVpZ2h0OjU2cHg7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1ib3R0b20tYmFyLC5tZC1ib3R0b20tYmFyLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJvdHRvbS1iYXItaXRlbXttYXgtd2lkdGg6MTY4cHg7bWluLXdpZHRoOjgwcHg7aGVpZ2h0OjEwMCU7cGFkZGluZzo4cHggMTJweCAxMHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MWVtO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle3BhZGRpbmctdG9wOjZweH0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbiwubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHtjb2xvcjpjdXJyZW50Q29sb3J9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbXttaW4td2lkdGg6NTZweDttYXgtd2lkdGg6OTZweDtwb3NpdGlvbjpzdGF0aWM7LW1zLWZsZXg6MSAxIDMycHg7ZmxleDoxIDEgMzJweDt0cmFuc2l0aW9uOi40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aDt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aCwtbXMtZmxleH0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDhweCwwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCw2cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmV7bWluLXdpZHRoOjk2cHg7bWF4LXdpZHRoOjE2OHB4Oy1tcy1mbGV4OjEgMSA3MnB4O2ZsZXg6MSAxIDcycHh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7b3BhY2l0eToxfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29ue3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLDJweCwwKX0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSguODU3MSkgdHJhbnNsYXRlWSgycHgpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMTVzIGxpbmVhcixvcGFjaXR5IC4xNXMgbGluZWFyfS5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLWljb257dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGNvbG9yIC4xNXMgbGluZWFyfS5tZC1idXR0b257bWluLXdpZHRoOjg4cHg7bWluLWhlaWdodDozNnB4O21hcmdpbjo2cHggOHB4O3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTRweDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC12YXJpYW50OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzZweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246dG9wO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLC5tZC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lfS5tZC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b246YWN0aXZlOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjQpfS5tZC1idXR0b24ubWQtcmFpc2VkOm5vdChbZGlzYWJsZWRdKXtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uLm1kLWRlbnNle21pbi1oZWlnaHQ6MzJweDtsaW5lLWhlaWdodDozMnB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21hcmdpbjowIDZweDtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDoyNHB4fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQ6bm9uZX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uLm1kLWRlbnNle3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4O3BhZGRpbmc6NHB4O2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjUwJX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYnV0dG9uLm1kLWZhYnt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O21pbi13aWR0aDowO292ZXJmbG93OmhpZGRlbjtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmFkaXVzOjU2cHg7bGluZS1oZWlnaHQ6NTZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixib3gtc2hhZG93LHRyYW5zZm9ybX0ubWQtYnV0dG9uLm1kLWZhYjpmb2N1cywubWQtYnV0dG9uLm1kLWZhYjpob3Zlcntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNnB4O2xlZnQ6MTZweH0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNnB4O3JpZ2h0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxNnB4O2xlZnQ6MTZweH0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTZweDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7Ym90dG9tOjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtbWluaXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjQwcHh9Lm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1NnB4fS5tZC1idXR0b25bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtjdXJzb3I6ZGVmYXVsdH0ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIsLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYntib3gtc2hhZG93Om5vbmV9Lm1kLWJ1dHRvbjphZnRlcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3ZlcmZsb3c6aGlkZGVufS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257ZGlzcGxheTpibG9ja30ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1idXR0b24tdG9nZ2xle3dpZHRoOmF1dG87ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbnttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXdpZHRoOjFweCAwIDFweCAxcHg7Ym9yZGVyLXJhZGl1czowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweDtib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcjpub3QoLm1kLXRvZ2dsZSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjJweH0ubWQtY2FyZHtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZC5tZC13aXRoLWhvdmVye2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJveC1zaGFkb3d9Lm1kLWNhcmQubWQtd2l0aC1ob3Zlcjpob3Zlcnt6LWluZGV4OjI7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhe3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTl7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTk6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NTYuMjUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTN7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMzpiZWZvcmV7d2lkdGg6MTAwJTtwYWRkaW5nLXRvcDo3NSU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xe292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTE6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6MTAwJTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1oZWFkZXJ7cGFkZGluZy10b3A6MjRweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWd7d2lkdGg6MTAwJX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXJ7cGFkZGluZzoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtY2FyZC1oZWFkZXItdGV4dD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkPi5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIubWQtY2FyZC1oZWFkZXItZmxleHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIrLm1kLWNhcmQtYWN0aW9uczpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmc6MCA4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ7bWFyZ2luLXJpZ2h0OjE2cHg7ZmxvYXQ6bGVmdH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhcn4ubWQtdGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXN1YmhlYWQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi00cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLWhlYWRlci10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYXt3aWR0aDo4MHB4Oy1tcy1mbGV4OjAgMCA4MHB4O2ZsZXg6MCAwIDgwcHg7aGVpZ2h0OjgwcHg7bWFyZ2luLWxlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEubWQtbWVkaXVte3dpZHRoOjEyMHB4Oy1tcy1mbGV4OjAgMCAxMjBweDtmbGV4OjAgMCAxMjBweDtoZWlnaHQ6MTIwcHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLWJpZ3t3aWR0aDoxNjBweDstbXMtZmxleDowIDAgMTYwcHg7ZmxleDowIDAgMTYwcHg7aGVpZ2h0OjE2MHB4fS5tZC1jYXJkIC5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1zdWJoZWFkaW5nLC5tZC1jYXJkIC5tZC10aXRsZXttYXJnaW46MDtmb250LXdlaWdodDo0MDB9Lm1kLWNhcmQgLm1kLXN1YmhlYWR7b3BhY2l0eTouNTQ7Zm9udC1zaXplOjE0cHg7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCsubWQtdGl0bGV7bWFyZ2luLXRvcDo0cHh9Lm1kLWNhcmQgLm1kLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2xldHRlci1zcGFjaW5nOjA7bGluZS1oZWlnaHQ6MzJweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25ze3BhZGRpbmc6MTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1tZWRpYXttYXgtd2lkdGg6MjQwcHg7bWF4LWhlaWdodDoyNDBweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnN7bWFyZ2luLWxlZnQ6MTZweDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW46OHB4IDAgMH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50e3BhZGRpbmc6MTZweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fS5tZC1jYXJkIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbToyNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZzo4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjRweH0ubWQtY2FyZCAubWQtY2FyZC1hcmVhLC5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXJ7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5tZC1pbnNldCk6YWZ0ZXJ7cmlnaHQ6MDtsZWZ0OjB9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpLm1kLWluc2V0OmFmdGVye3JpZ2h0OjE2cHg7bGVmdDoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVye3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmZ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIubWQtdGV4dC1zY3JpbSAubWQtY2FyZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtYXJlYXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtc3ViaGVhZHtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5ke292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIC5tZC1jYXJkLWNvbnRlbnR7bWFyZ2luLXRvcDowIWltcG9ydGFudDtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nLXRvcDo0cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTptYXJnaW59Lm1kLWNoZWNrYm94e3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHg7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpiZWZvcmV7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXJ7d2lkdGg6NnB4O2hlaWdodDoxM3B4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6NXB4O2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItdG9wOjA7Ym9yZGVyLWxlZnQ6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCguMTUsLjE1LDEpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVse2hlaWdodDoyMHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2hlY2tib3gubWQtY2hlY2tlZCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye29wYWNpdHk6MTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWluay1yaXBwbGV7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7LXdlYmtpdC1tYXNrLWltYWdlOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsI2ZmZiAxMDAlLCMwMDAgMCk7bWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCNmZmYgMTAwJSwjMDAwIDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKX0ubWQtcmlwcGxle3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTpzY2FsZSgwKTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4yNjtib3JkZXItcmFkaXVzOjUwJX0ubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb246cmlwcGxlIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfUBrZXlmcmFtZXMgcmlwcGxle3Rve3RyYW5zZm9ybTpzY2FsZSgxLjUpO29wYWNpdHk6MH19Lm1kLWRpYWxvZy1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjEwOH0ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUgLm1kLWRpYWxvZ3tvcGFjaXR5OjEhaW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwOX0ubWQtZGlhbG9ne21pbi13aWR0aDoyODBweDttYXgtd2lkdGg6ODAlO21heC1oZWlnaHQ6ODAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTEwO291dGxpbmU6bm9uZTtib3JkZXItcmFkaXVzOjJweDtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2Zvcm06c2NhbGUoLjksLjg1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4wNXM7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy5tZC1yZWZlcmVuY2V7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyfS5tZC1kaWFsb2cubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtZGlhbG9nIHB7bWFyZ2luOjB9Lm1kLWRpYWxvZy10aXRsZXttYXJnaW4tYm90dG9tOjIwcHg7cGFkZGluZzoyNHB4IDI0cHggMH0ubWQtZGlhbG9nLWNvbnRlbnR7cGFkZGluZzowIDI0cHggMjRweDstbXMtZmxleDoxO2ZsZXg6MTtvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjZmZmIDAsI2ZmZiAxcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZiAwLCNmZmYgM3B4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgwLDAsMCwuMTIpIDAscmdiYSgwLDAsMCwuMTIpIDFweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDAsMCwwLC4yKSAxcHgscmdiYSgwLDAsMCwuMikgMnB4LHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtYXR0YWNobWVudDpsb2NhbCxsb2NhbCxzY3JvbGwsc2Nyb2xsfS5tZC1kaWFsb2ctY29udGVudDpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoyNHB4fS5tZC1kaWFsb2ctY29udGVudCBwOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLXRvcDowfS5tZC1kaWFsb2ctY29udGVudCBwOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9Lm1kLWRpYWxvZy1ib2R5e21hcmdpbjowIC0yNHB4O3BhZGRpbmc6MCAyNHB4O292ZXJmbG93OmF1dG99Lm1kLWRpYWxvZy1hY3Rpb25ze21pbi1oZWlnaHQ6NTJweDtwYWRkaW5nOjhweCA4cHggOHB4IDI0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWRpYWxvZy1hY3Rpb25zOmJlZm9yZXtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMXB4O3JpZ2h0OjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCIgXFxcIn0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweDttYXJnaW46MDtwYWRkaW5nOjAgOHB4fS5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1kaXZpZGVye2hlaWdodDoxcHg7bWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWRpdmlkZXIubWQtaW5zZXR7bWFyZ2luLWxlZnQ6NzJweH0ubWQtaWNvbnt3aWR0aDoyNHB4O21pbi13aWR0aDoyNHB4O2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDttYXJnaW46YXV0bztkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDpjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1pbnB1dC1jb250YWluZXJ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7bWFyZ2luOjRweCAwIDI0cHg7cGFkZGluZy10b3A6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVye2hlaWdodDoxcHg7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVyLC5tZC1pbnB1dC1jb250YWluZXIgbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3RvcDoyM3B4O3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe3dpZHRoOjEwMCU7aGVpZ2h0OjMycHg7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZvbnQtc2l6ZTtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXB4O2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cywubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNnB4O3RleHQtc2hhZG93Om5vbmU7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6aW5pdGlhbH0ubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe21pbi1oZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjIzMHB4O3BhZGRpbmc6NXB4IDA7cmVzaXplOm5vbmU7bGluZS1oZWlnaHQ6MS4zZW19Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3J7aGVpZ2h0OjIwcHg7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC04cHgsMCk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWNvdW50e2hlaWdodDoyMHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBsYWJlbHtwb2ludGVyLWV2ZW50czphdXRvO3RvcDoxMHB4O29wYWNpdHk6MDtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgdGV4dGFyZWF7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgbGFiZWwsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIGxhYmVse3BvaW50ZXItZXZlbnRzOmF1dG87dG9wOjA7b3BhY2l0eToxO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgdGV4dGFyZWF7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgdGV4dGFyZWF7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lIGxhYmVse3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaW5wdXQtZm9jdXNlZCBsYWJlbHt0b3A6MjNweDtmb250LXNpemU6MTZweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZS5tZC1oYXMtdmFsdWUgbGFiZWx7b3BhY2l0eTowfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQ6YWZ0ZXJ7YmFja2dyb3VuZDowIDEwMCUgcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgwLDAsMCwuMzgpIDAscmdiYSgwLDAsMCwuMzgpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDFweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgbGFiZWwsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCB0ZXh0YXJlYXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQubWQtaW5wdXQtZm9jdXNlZCAubWQtdG9nZ2xlLXBhc3N3b3Jke2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3Jke21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOi0ycHg7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmQgLm1kLWluay1yaXBwbGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW52YWxpZCAubWQtZXJyb3J7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcmVxdWlyZWQgbGFiZWw6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDJweCkpO2NvbnRlbnQ6XFxcIipcXFwiO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjFlbTt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtc2VsZWN0OmhvdmVyIC5tZC1zZWxlY3Q6bm90KC5tZC1kaXNhYmxlZCk6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1sYXlvdXR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4OjE7ZmxleDoxfS5tZC1yb3d7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbnstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lcnt3aWR0aDoxMDAlO21heC13aWR0aDoxMjAwcHh9Lm1kLWxheW91dC5tZC1jb250YWluZXIubWQtY2VudGVyZWR7bWFyZ2luOjAgYXV0b30ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjEycHh9Lm1kLWd1dHRlciAubWQtY29sdW1ue21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWJvdHRvbTotMTJweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHh9QG1lZGlhIChtYXgtd2lkdGg6OTQ0cHgpey5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjhweDtwYWRkaW5nLWxlZnQ6OHB4fS5tZC1ndXR0ZXIgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWJvdHRvbTotOHB4fS5tZC1ndXR0ZXIgLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9fS5tZC1ndXR0ZXItODpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi00cHg7bWFyZ2luLWxlZnQ6LTRweH0ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo0cHg7cGFkZGluZy1sZWZ0OjRweH0ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbnttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWJvdHRvbTotNHB4fS5tZC1ndXR0ZXItOCAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6NHB4O3BhZGRpbmctYm90dG9tOjRweH0ubWQtZ3V0dGVyLTE2Om5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LThweDttYXJnaW4tbGVmdDotOHB4fS5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy1sZWZ0OjhweH0ubWQtZ3V0dGVyLTE2IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotOHB4O21hcmdpbi1ib3R0b206LThweH0ubWQtZ3V0dGVyLTE2IC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotMTJweDttYXJnaW4tbGVmdDotMTJweH0ubWQtZ3V0dGVyLTI0Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6MTJweDtwYWRkaW5nLWxlZnQ6MTJweH0ubWQtZ3V0dGVyLTI0IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotMTJweDttYXJnaW4tYm90dG9tOi0xMnB4fS5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweH0ubWQtZ3V0dGVyLTQwOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTIwcHg7bWFyZ2luLWxlZnQ6LTIwcHh9Lm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjIwcHh9Lm1kLWd1dHRlci00MCAubWQtY29sdW1ue21hcmdpbi10b3A6LTIwcHg7bWFyZ2luLWJvdHRvbTotMjBweH0ubWQtZ3V0dGVyLTQwIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHh9Lm1kLWZsZXh7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX1AbWVkaWEgKG1pbi13aWR0aDoxOTA0cHgpey5tZC1yb3cteGxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4teGxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXhsYXJnZXstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgteGxhcmdlLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgteGxhcmdlLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgteGxhcmdlLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgteGxhcmdlLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgteGxhcmdlLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgteGxhcmdlLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgteGxhcmdlLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgteGxhcmdlLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgteGxhcmdlLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgteGxhcmdlLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgteGxhcmdlLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgteGxhcmdlLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgteGxhcmdlLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgteGxhcmdlLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgteGxhcmdlLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgteGxhcmdlLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgteGxhcmdlLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgteGxhcmdlLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgteGxhcmdlLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgteGxhcmdlLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgteGxhcmdlLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgteGxhcmdlLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUteGxhcmdle2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6MTkwM3B4KXsubWQtcm93LWxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbGFyZ2V7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgtbGFyZ2V7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LWxhcmdlLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbGFyZ2UtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbGFyZ2UtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LWxhcmdlLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC1sYXJnZS0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbGFyZ2UtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LWxhcmdlLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC1sYXJnZS0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbGFyZ2UtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LWxhcmdlLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC1sYXJnZS00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbGFyZ2UtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LWxhcmdlLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC1sYXJnZS02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbGFyZ2UtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LWxhcmdlLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC1sYXJnZS03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbGFyZ2UtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LWxhcmdlLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC1sYXJnZS05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbGFyZ2UtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LWxhcmdlLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtaGlkZS1sYXJnZXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjEyNjRweCl7Lm1kLXJvdy1tZWRpdW17LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1tZWRpdW17LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgtbWVkaXVtey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1tZWRpdW0tMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1tZWRpdW0tNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1tZWRpdW0tNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1tZWRpdW0tMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC1tZWRpdW0tMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1tZWRpdW0tMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1tZWRpdW0tMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC1tZWRpdW0tMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1tZWRpdW0tMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1tZWRpdW0tNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC1tZWRpdW0tNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1tZWRpdW0tNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1tZWRpdW0tNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC1tZWRpdW0tNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1tZWRpdW0tNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1tZWRpdW0tNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC1tZWRpdW0tNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1tZWRpdW0tODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1tZWRpdW0tODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC1tZWRpdW0tOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1tZWRpdW0tOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1tZWRpdW0tMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtaGlkZS1tZWRpdW17ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDo5NDRweCl7Lm1kLXJvdy1zbWFsbHstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLXNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXNtYWxsey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1zbWFsbC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LXNtYWxsLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LXNtYWxsLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1zbWFsbC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtc21hbGwtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LXNtYWxsLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1zbWFsbC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtc21hbGwtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LXNtYWxsLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1zbWFsbC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtc21hbGwtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LXNtYWxsLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1zbWFsbC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtc21hbGwtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LXNtYWxsLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1zbWFsbC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtc21hbGwtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LXNtYWxsLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1zbWFsbC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtc21hbGwtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LXNtYWxsLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1zbWFsbC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUtc21hbGx7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7Lm1kLXJvdy14c21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi14c21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWZsZXgteHNtYWxsey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC14c21hbGwtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC14c21hbGwtNjZ7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgNjYuNjY2NjYlO2ZsZXg6MCAxIDY2LjY2NjY2JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC14c21hbGwtNXttaW4td2lkdGg6NSU7LW1zLWZsZXg6MCAxIDUlO2ZsZXg6MCAxIDUlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC14c21hbGwtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTEwe21hcmdpbi1sZWZ0OjEwJX0ubWQtZmxleC14c21hbGwtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC14c21hbGwtMjB7bWluLXdpZHRoOjIwJTstbXMtZmxleDowIDEgMjAlO2ZsZXg6MCAxIDIwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC14c21hbGwtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTI1e21hcmdpbi1sZWZ0OjI1JX0ubWQtZmxleC14c21hbGwtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC14c21hbGwtMzV7bWluLXdpZHRoOjM1JTstbXMtZmxleDowIDEgMzUlO2ZsZXg6MCAxIDM1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC14c21hbGwtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQwe21hcmdpbi1sZWZ0OjQwJX0ubWQtZmxleC14c21hbGwtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC14c21hbGwtNTB7bWluLXdpZHRoOjUwJTstbXMtZmxleDowIDEgNTAlO2ZsZXg6MCAxIDUwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC14c21hbGwtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTU1e21hcmdpbi1sZWZ0OjU1JX0ubWQtZmxleC14c21hbGwtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC14c21hbGwtNjV7bWluLXdpZHRoOjY1JTstbXMtZmxleDowIDEgNjUlO2ZsZXg6MCAxIDY1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC14c21hbGwtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTcwe21hcmdpbi1sZWZ0OjcwJX0ubWQtZmxleC14c21hbGwtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC14c21hbGwtODB7bWluLXdpZHRoOjgwJTstbXMtZmxleDowIDEgODAlO2ZsZXg6MCAxIDgwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC14c21hbGwtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTg1e21hcmdpbi1sZWZ0Ojg1JX0ubWQtZmxleC14c21hbGwtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC14c21hbGwtOTV7bWluLXdpZHRoOjk1JTstbXMtZmxleDowIDEgOTUlO2ZsZXg6MCAxIDk1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC14c21hbGwtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMDB7bWFyZ2luLWxlZnQ6MTAwJX0ubWQtaGlkZS14c21hbGx7ZGlzcGxheTpub25lfX0ubWQtbGlzdHttYXJnaW46MDtwYWRkaW5nOjhweCAwO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlO2xpc3Qtc3R5bGU6bm9uZX0ubWQtbGlzdC5tZC1kZW5zZXtwYWRkaW5nOjRweCAwfS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7cGFkZGluZy1sZWZ0OjcycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjEzcHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyNHB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1hdmF0YXJ7d2lkdGg6MzJweDttaW4td2lkdGg6MzJweDtoZWlnaHQ6MzJweDttaW4taGVpZ2h0OjMycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo2MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9Lm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgxKSwubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3MnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3NnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgxKSwubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo4OHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1hdmF0YXJ7bWFyZ2luOjB9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubWQtbGlzdCAubWQtc3ViaGVhZGVyLm1kLWluc2V0e3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0Pi5tZC1zdWJoZWFkZXI6Zmlyc3Qtb2YtdHlwZXttYXJnaW4tdG9wOi04cHh9Lm1kLWxpc3QtaXRlbXtoZWlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcj4ubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjB9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcj4ubWQtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MzJweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb257bWFyZ2luOjAgLTJweCAwIDB9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb246bnRoLWNoaWxkKDMpe21hcmdpbjowIC0ycHggMCAxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czowO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC10cmFuc2Zvcm06bm9uZX0ubWQtbGlzdC1pdGVtIC5tZC1kaXZpZGVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciwubWQtbGlzdC1pdGVtIC5tZC1pY29ue21hcmdpbjowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1vZi10eXBlKyosLm1kLWxpc3QtaXRlbSAubWQtaWNvbjpmaXJzdC1vZi10eXBlKyp7LW1zLWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0b30ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWxpc3QtaXRlbSAubWQtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0OHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIHdyYXA7ZmxleC1mbG93OmNvbHVtbiB3cmFwO292ZXJmbG93OmhpZGRlbn0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlciwubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZXt0b3A6MH0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlcntib3R0b206MH0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmFmdGVyLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmZpcnN0LW9mLXR5cGU6YmVmb3JlLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpsYXN0LW9mLXR5cGU6YWZ0ZXJ7YmFja2dyb3VuZDpub25lfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZT4ubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtbGlzdC1leHBhbmQtaW5kaWNhdG9ye3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlPi5tZC1saXN0LWV4cGFuZHttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5tZC1saXN0LWl0ZW0tZXhwYW5kPi5tZC1saXN0LWl0ZW0tY29udGFpbmVyPi5tZC1saXN0LWl0ZW0taG9sZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtZXhwYW5zaW9uLWluZGljYXRvciwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtaWNvbiwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5ke3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3dpbGwtY2hhbmdlOm1hcmdpbi1ib3R0b207dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIC5tZC1saXN0e3BhZGRpbmc6MH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleDoxO2ZsZXg6MTtvdmVyZmxvdzpoaWRkZW47bGluZS1oZWlnaHQ6MS4yNWVtO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm9ybWFsfS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMSl7Zm9udC1zaXplOjE2cHh9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKSwubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDMpe21hcmdpbjowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTRweH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpOm5vdCg6bGFzdC1jaGlsZCl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC1tZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5tZC1tZW51LWNvbnRlbnR7d2lkdGg6MTY4cHg7bWluLXdpZHRoOjg0cHg7bWF4LXdpZHRoOjM5MnB4O21pbi1oZWlnaHQ6NjRweDttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAzMnB4KTtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMjA7dHJhbnNmb3JtOnNjYWxlKC45LC44NSkgdHJhbnNsYXRlWigwKTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjp3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksb3BhY2l0eSAuMjVzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpLG1hcmdpbiAuMnMgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpIC4yNXM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHksd2lkdGh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0e21hcmdpbi10b3A6LTIwcHg7bWFyZ2luLWxlZnQ6LThweDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBsZWZ0fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodC5tZC1hY3RpdmV7bWFyZ2luLXRvcDotMTFweH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdHttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0OjhweDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCByaWdodH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdC5tZC1hY3RpdmV7bWFyZ2luLXRvcDotMTFweH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtcmlnaHR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0Oi04cHg7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gbGVmdH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtcmlnaHQubWQtYWN0aXZle21hcmdpbi10b3A6MTFweH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdHttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWxlZnQ6OHB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIHJpZ2h0fS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOjExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1hbGlnbi10cmlnZ2Vye21hcmdpbjowfS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0xe3dpZHRoOjg0cHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTJ7d2lkdGg6MTEycHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTN7d2lkdGg6MTY4cHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTR7d2lkdGg6MjI0cHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTV7d2lkdGg6MjgwcHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTZ7d2lkdGg6MzM2cHh9Lm1kLW1lbnUtY29udGVudC5tZC1zaXplLTd7d2lkdGg6MzkycHh9Lm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjp3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksb3BhY2l0eSAuMzVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLHRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4wNXN9Lm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmUgLm1kLWxpc3R7b3BhY2l0eToxO3RyYW5zaXRpb246b3BhY2l0eSAuMnMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgLjE1c30ubWQtbWVudS1jb250ZW50IC5tZC1saXN0e29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1tZW51LWl0ZW17Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS4yZW19Lm1kLW1lbnUtaXRlbVtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9Lm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30ubWQtcmFkaW97d2lkdGg6YXV0bzttYXJnaW46MTZweCA4cHggMTZweCAwO2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjNweDtyaWdodDozcHg7Ym90dG9tOjNweDtsZWZ0OjNweDtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoLjM4LC4zOCwxKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3dpZHRoOjQ4cHghaW1wb3J0YW50O2hlaWdodDo0OHB4IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLXJhZGlvIC5tZC1yYWRpby1sYWJlbHtoZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6OHB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLXJhZGlvLm1kLWNoZWNrZWQgLm1kLXJhZGlvLWNvbnRhaW5lcjphZnRlcntvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwxLDEpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtc2VsZWN0e3dpZHRoOjEwMCU7bWluLXdpZHRoOjEyOHB4O2hlaWdodDozMnB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zZWxlY3Q6Zm9jdXN7b3V0bGluZTpub25lfS5tZC1zZWxlY3Q6YWZ0ZXJ7bWFyZ2luLXRvcDoycHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSguNDUpIHNjYWxlWCguODUpO3RyYW5zaXRpb246YWxsIC4xNXMgbGluZWFyO2NvbnRlbnQ6XFxcIlxcXFwyNUJDXFxcIn0ubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnV7dG9wOi04cHg7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLThweCkgc2NhbGUzRCgxLDEsMSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4yNXM7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybSx0b3B9Lm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51Pip7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4xNXM7dHJhbnNpdGlvbi1kZWxheTouMXN9Lm1kLXNlbGVjdC5tZC1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt1c2VyLWRyYWc6bm9uZX0ubWQtc2VsZWN0IHNlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtc2VsZWN0IC5tZC1tZW51LC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVle3BhZGRpbmctcmlnaHQ6MjRweDtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjMzcHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLXNlbGVjdCAubWQtc3ViaGVhZGVye2NvbG9yOmhzbGEoMCwwJSw0NiUsLjg3KTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm1kLXNlbGVjdCAubWQtc3ViaGVhZGVyOmZpcnN0LWNoaWxke21hcmdpbi10b3A6LThweH0ubWQtc2VsZWN0LWNvbnRlbnR7d2lkdGg6YXV0bzttYXgtaGVpZ2h0OjI1NnB4fS5tZC1zZWxlY3QtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0e21hcmdpbi10b3A6LTE1cHg7bWFyZ2luLWxlZnQ6LTE2cHh9Lm1kLXNlbGVjdC1jb250ZW50IC5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7b3ZlcmZsb3c6dmlzaWJsZTstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5tZC1zZWxlY3QtY29udGVudC5tZC1tdWx0aXBsZSAubWQtY2hlY2tib3h7bWFyZ2luOjB9Lm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveC1sYWJlbHtwYWRkaW5nLWxlZnQ6MTZweDtjdXJzb3I6cG9pbnRlcn0ubWQtc2lkZW5hdi5tZC1sZWZ0IC5tZC1zaWRlbmF2LWNvbnRlbnR7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtMTAwJSwwLDApfS5tZC1zaWRlbmF2Lm1kLXJpZ2h0IC5tZC1zaWRlbmF2LWNvbnRlbnR7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMTAwJSwwLDApfS5tZC1zaWRlbmF2Lm1kLWZpeGVkIC5tZC1zaWRlbmF2LWJhY2tkcm9wLC5tZC1zaWRlbmF2Lm1kLWZpeGVkIC5tZC1zaWRlbmF2LWNvbnRlbnR7cG9zaXRpb246Zml4ZWR9Lm1kLXNpZGVuYXYgLm1kLXNpZGVuYXYtY29udGVudHt3aWR0aDozMDRweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDt6LWluZGV4OjEwMDtwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ubWQtc2lkZW5hdiAubWQtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDo5OTtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7d2lsbC1jaGFuZ2U6b3BhY2l0eX0ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtY29udGVudHtib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWJhY2tkcm9we29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5tZC1zcGlubmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9Lm1kLXNwaW5uZXIubWQtaW5kZXRlcm1pbmF0ZSAubWQtc3Bpbm5lci1kcmF3e2FuaW1hdGlvbjpzcGlubmVyLXJvdGF0ZSAxLjlzIGxpbmVhciBpbmZpbml0ZTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHRyYW5zbGF0ZVooMCl9Lm1kLXNwaW5uZXIubWQtaW5kZXRlcm1pbmF0ZSAubWQtc3Bpbm5lci1wYXRoe3N0cm9rZS1kYXNoYXJyYXk6MiwyMDA7YW5pbWF0aW9uOnNwaW5uZXItZGFzaCAxLjQyNXMgZWFzZS1pbi1vdXQgaW5maW5pdGV9Lm1kLXNwaW5uZXIubWQtc3Bpbm5lci1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSguOCkgdHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjJzfS5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmUgLm1kLXNwaW5uZXItZHJhd3thbmltYXRpb246c3Bpbm5lci1pbml0aWFsLXJvdGF0ZSAxLjk4cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSBmb3J3YXJkc30ubWQtc3Bpbm5lci1kcmF3e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5tZC1zcGlubmVyLXBhdGh7ZmlsbDpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfUBrZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGV7dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybikgdHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzcGlubmVyLWluaXRpYWwtcm90YXRlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06cm90YXRlKC05MGRlZykgdHJhbnNsYXRlWigwKX0yMCV7b3BhY2l0eToxfXRve3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIHNwaW5uZXItZGFzaHswJXtzdHJva2UtZGFzaGFycmF5OjIsMjAwO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0zNXB4fXRve3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjRweH19Lm1kLXN1YmhlYWRlcnttaW4taGVpZ2h0OjQ4cHg7cGFkZGluZzowIDE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1mbG93OnJvdyB3cmFwO2ZsZXgtZmxvdzpyb3cgd3JhcDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tZC1zd2l0Y2h7d2lkdGg6YXV0bzttYXJnaW46MTZweCA4cHggMTZweCAwO2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lcnt3aWR0aDozNHB4O2hlaWdodDoxNHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MTRweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLXRodW1ie3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC4xNXMgbGluZWFyfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt6LWluZGV4OjI7YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtbGFiZWx7aGVpZ2h0OjE0cHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoxNHB4fS5tZC1zd2l0Y2gubWQtZHJhZ2dpbmcgLm1kLXN3aXRjaC10aHVtYntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9Lm1kLXN3aXRjaC5tZC1kaXNhYmxlZCAubWQtc3dpdGNoLXRodW1ie2N1cnNvcjpkZWZhdWx0fS5tZC10YWJsZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdy14OmF1dG99Lm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyLC5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciwubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLXRhYmxlLWNlbGx7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFibGUgdGFibGV7d2lkdGg6MTAwJTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtvdmVyZmxvdzpoaWRkZW59Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3d7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMH0ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdy5tZC1zZWxlY3RlZCAubWQtdGFibGUtY2VsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3c6aG92ZXIgLm1kLXRhYmxlLWNlbGx7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZHtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1hbGlnbjpsZWZ0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZDpsYXN0LWNoaWxkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0e3BhZGRpbmctcmlnaHQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQubWQtbnVtZXJpY3t0ZXh0LWFsaWduOnJpZ2h0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbnt3aWR0aDoxNnB4O21pbi13aWR0aDoxNnB4O2hlaWdodDoxNnB4O21pbi1oZWlnaHQ6MTZweDtmb250LXNpemU6MTZweDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOm5vdCgubWQtc29ydGFibGUtaWNvbil7bWFyZ2luOjAgNHB4fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC1jb250YWluZXJ7aGVpZ2h0OjU2cHg7cGFkZGluZzoxNHB4IDA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC10ZXh0e2hlaWdodDoyOHB4O3BhZGRpbmctcmlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MjRweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGluZS1oZWlnaHQ6MjhweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtdGFibGUgLm1kLXNvcnRhYmxle2N1cnNvcjpwb2ludGVyfS5tZC10YWJsZSAubWQtc29ydGFibGU6Zmlyc3Qtb2YtdHlwZSAubWQtc29ydGFibGUtaWNvbntsZWZ0OmF1dG87cmlnaHQ6MTBweH0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbiwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyIC5tZC1zb3J0YWJsZS1pY29ue29wYWNpdHk6MX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDoycHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO29wYWNpdHk6MDtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZSAubWQtaW5rLXJpcHBsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxse2hlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGw6bGFzdC1jaGlsZCAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmlje3RleHQtYWxpZ246cmlnaHR9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWMgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtaGFzLWFjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntwYWRkaW5nOjZweCAzMnB4IDZweCAyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9ue3dpZHRoOjM2cHg7bWluLXdpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWluLWhlaWdodDozNnB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luOjAgLTEwcHggMCAwfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uIC5tZC1pY29ue3dpZHRoOjE4cHg7bWluLXdpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWluLWhlaWdodDoxOHB4O21hcmdpbjowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbnt3aWR0aDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbisubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIsLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24rLm1kLXRhYmxlLWhlYWQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHR7cGFkZGluZy1sZWZ0OjhweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctbGVmdDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveHttYXJnaW46MH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWFyZ2luLXRvcDoxcHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcnt0b3A6LTFweDtsZWZ0OjRweH0ubWQtdGFibGUgLm1kLXNlbGVjdHttaW4td2lkdGg6ODRweH0ubWQtdGFibGUgLm1kLW9wdGlvbiwubWQtdGFibGUgLm1kLXNlbGVjdC12YWx1ZXtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZWRpdC10cmlnZ2Vye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtdGFibGUtZWRpdC10cmlnZ2VyLm1kLWVkaXRlZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlLWRpYWxvZ3ttYXgtaGVpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowIDI0cHggMnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDoyNHB4O3otaW5kZXg6NjA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksbWF4LWhlaWdodCAwcyAuNXM7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsLThweCwwKX0ubWQtdGFibGUtZGlhbG9nLm1kLWFjdGl2ZXttYXgtaGVpZ2h0OjQwMHB4O3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKCMwMDApO29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3N9Lm1kLXRhYmxlLWRpYWxvZy5tZC1sYXJnZXtwYWRkaW5nOjEycHggMjRweCAycHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVye21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjE2cHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0e2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntmb250LXNpemU6MTNweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1jaGFyLWNvdW50ZXJ7Zm9udC1zaXplOjEzLjVweDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXRhYmxlLWRpYWxvZyAubWQtYnV0dG9ue21pbi13aWR0aDo2NHB4fS5tZC10YWJsZS1jYXJke292ZXJmbG93OnZpc2libGV9Lm1kLXRhYmxlLWNhcmQgLm1kLXRvb2xiYXJ7cGFkZGluZy1sZWZ0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tZC10YWJsZS1jYXJkIC5tZC10aXRsZXstbXMtZmxleDoxO2ZsZXg6MTtmb250LXNpemU6MjBweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbntoZWlnaHQ6NTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTJweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtdGFibGUtcGFnaW5hdGlvbi1wcmV2aW91c3ttYXJnaW4tcmlnaHQ6MnB4O21hcmdpbi1sZWZ0OjE4cHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdHt3aWR0aDphdXRvO21pbi13aWR0aDozNnB4O21hcmdpbjowIDMycHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdDphZnRlcnttYXJnaW4tdG9wOjB9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVle3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MTNweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbltkaXNhYmxlZF0gLm1kLWljb257Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tZC1wYWdpbmF0aW9uLXNlbGVjdC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0e21hcmdpbi10b3A6LTE2cHh9Lm1kLXBhZ2luYXRpb24tc2VsZWN0IC5tZC1saXN0LWl0ZW0taG9sZGVye2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDowO3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyLm1kLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoIzAwMCl9Lm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIgLm1kLWNvdW50ZXJ7bWFyZ2luLWxlZnQ6OHB4Oy1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJze3dpZHRoOjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtdGFicy5tZC10cmFuc2l0aW9uLW9mZiAqe3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRhYnMubWQtZHluYW1pYy1oZWlnaHQgLm1kLXRhYnMtY29udGVudHt0cmFuc2l0aW9uOmhlaWdodCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbntoZWlnaHQ6NDhweDttaW4taGVpZ2h0OjQ4cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1pY29uLm1kLWhhcy1sYWJlbHttaW4taGVpZ2h0OjcycHh9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwgLm1kLWljb257bWFyZ2luLWJvdHRvbToxMHB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtY2VudGVyZWR7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWZpeGVkIC5tZC10YWItaGVhZGVyey1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtcmlnaHR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC10YWJzIC5tZC10YWItaGVhZGVye21pbi13aWR0aDo3MnB4O21heC13aWR0aDoyNjRweDttYXJnaW46MDtwYWRkaW5nOjAgMTJweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6MDtiYWNrZ3JvdW5kOm5vbmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci5tZC1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItZHJhZzpub25lfS5tZC10YWJzIC5tZC10YWItaGVhZGVyLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIgLm1kLWljb257bWFyZ2luOjB9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3J7aGVpZ2h0OjJweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRvLXJpZ2h0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxsZWZ0IC4zcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLHJpZ2h0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1sZWZ0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxyaWdodCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxsZWZ0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1jb250ZW50e3dpZHRoOjEwMCU7aGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5tZC10YWJzIC5tZC10YWJzLXdyYXBwZXJ7d2lkdGg6OTk5OWVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFie3BhZGRpbmc6MTZweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MH0ubWQtdG9vbGJhcnttaW4taGVpZ2h0OjY0cHg7cGFkZGluZzowIDhweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWxpbmUtcGFjazpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7LW1zLWZsZXgtZmxvdzpyb3cgd3JhcDtmbGV4LWZsb3c6cm93IHdyYXA7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRvb2xiYXIubWQtZGVuc2V7bWluLWhlaWdodDo0OHB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLW1lZGl1bXttaW4taGVpZ2h0OjcycHh9Lm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbGFyZ2V7bWluLWhlaWdodDo5NnB4fS5tZC10b29sYmFyLm1kLWRlbnNlIC5tZC10b29sYmFyLWNvbnRhaW5lcntoZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW17bWluLWhlaWdodDo4OHB4fS5tZC10b29sYmFyLm1kLW1lZGl1bSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWxhcmdle21pbi1oZWlnaHQ6MTI4cHg7LW1zLWZsZXgtbGluZS1wYWNrOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0fS5tZC10b29sYmFyLm1kLWxhcmdlIC5tZC10b29sYmFyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjU2cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXJ7bWluLWhlaWdodDoxNjRweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtaW5rLXJpcHBsZXtjb2xvcjojZmZmfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xMil9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0e21hcmdpbjoxNnB4IDAgOHB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtYXZhdGFyKy5tZC1hdmF0YXJ7bWFyZ2luLWxlZnQ6MTZweH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyPi5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDowfS5tZC10b29sYmFyPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MTZweH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhciAubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCk6bm90KC5tZC1pY29uLWJ1dHRvbik6bm90KC5tZC1mYWIpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5tZC10b29sYmFyIC5tZC10aXRsZXttYXJnaW46MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo0MDB9Lm1kLXRvb2xiYXIgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjhweH0ubWQtdG9vbGJhciAubWQtbGlzdHtwYWRkaW5nOjA7bWFyZ2luOjAgLThweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdG9vbHRpcHtoZWlnaHQ6MjBweDtwYWRkaW5nOjAgOHB4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MjAwO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDk3LDk3LDk3LC44Nyk7Ym9yZGVyLXJhZGl1czoycHg7b3BhY2l0eTowO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNpdGlvbi1kZWxheTowcztjb2xvcjojZmZmO2ZvbnQtZmFtaWx5OlJvYm90byxOb3RvIFNhbnMsTm90byxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O2xpbmUtaGVpZ2h0OjIwcHg7dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLXRvb2x0aXAubWQtYWN0aXZle29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3N9Lm1kLXRvb2x0aXA6bm90KC5tZC1hY3RpdmUpe3RyYW5zaXRpb24tZGVsYXk6MHMhaW1wb3J0YW50fS5tZC10b29sdGlwLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotMTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsOHB4KX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXRvcC5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOHB4LDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodC5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbXttYXJnaW4tdG9wOjE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC04cHgpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9tLm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotMTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKDhweCw1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtbGVmdC5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKX0ubWQtd2hpdGVmcmFtZXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9Lm1kLXdoaXRlZnJhbWUtMWRwe2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTJkcHtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0zZHB7Ym94LXNoYWRvdzowIDFweCA4cHggcmdiYSgwLDAsMCwuMiksMCAzcHggNHB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNGRwe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS01ZHB7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTZkcHtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTdkcHtib3gtc2hhZG93OjAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtOGRwe2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS05ZHB7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTEwZHB7Ym94LXNoYWRvdzowIDZweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMWRwe2JveC1zaGFkb3c6MCA2cHggN3B4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxMXB4IDE1cHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDRweCAyMHB4IDNweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTJkcHtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTEzZHB7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEzcHggMTlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI0cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNGRwe2JveC1zaGFkb3c6MCA3cHggOXB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTVkcHtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE2ZHB7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTdkcHtib3gtc2hhZG93OjAgOHB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE3cHggMjZweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMycHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xOGRwe2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE5ZHB7Ym94LXNoYWRvdzowIDlweCAxMnB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNnB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMjBkcHtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMHB4IDMxcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCAzOHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMjFkcHtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMjJkcHtib3gtc2hhZG93OjAgMTBweCAxNHB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MnB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMjNkcHtib3gtc2hhZG93OjAgMTFweCAxNHB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyM3B4IDM2cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NHB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMjRkcHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dnVlLW1hdGVyaWFsLmNzcy5tYXAqL1wiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ3NmVhMjBhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcQXBwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cclxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnQgcGFnZS12aWV3XCI+XHJcbiAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC10aXRsZT1cImRpYWxvZy50aXRsZVwiIDptZC1jb250ZW50LWh0bWw9XCJkaWFsb2cuY29udGVudFwiIHJlZj1cIm1vZGFsRGlhbG9nXCI+XHJcbiAgICA8L21kLWRpYWxvZy1hbGVydD5cclxuICAgIDxtZC1kaWFsb2ctY29uZmlybSA6bWQtdGl0bGU9XCJjb25maXJtLnRpdGxlXCIgOm1kLWNvbnRlbnQtaHRtbD1cImNvbmZpcm0uY29udGVudFwiIDptZC1vay10ZXh0PVwiY29uZmlybS5va1wiIDptZC1jYW5jZWwtdGV4dD1cImNvbmZpcm0uY2FuY2VsXCJcclxuICAgICAgQGNsb3NlPVwib25Db25maXJtQ2xvc2VcIiByZWY9XCJjb25maXJtRGlhbG9nXCI+XHJcbiAgICAgIDwvbWQtZGlhbG9nLWNvbmZpcm0+XHJcbiAgICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cInByb21wdC50aXRsZVwiIDptZC1vay10ZXh0PVwicHJvbXB0Lm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwicHJvbXB0LmNhbmNlbFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cInByb21wdC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgQGNsb3NlPVwib25Qcm9tcHRDbG9zZVwiIHYtbW9kZWw9XCJwcm9tcHQucmVzcFwiIHJlZj1cInByb21wdERpYWxvZ1wiPlxyXG4gICAgICAgIDwvbWQtZGlhbG9nLXByb21wdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhcidcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHU6IHtcclxuICAgICAgICAgIGtleTogJycsXHJcbiAgICAgICAgICBuYW1lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlhbG9nOiB7XHJcbiAgICAgICAgICB0aXRsZTogJyAnLFxyXG4gICAgICAgICAgY29udGVudDogJyAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtOiB7XHJcbiAgICAgICAgICB0aXRsZTogJyAnLFxyXG4gICAgICAgICAgY29udGVudDogJyAnLFxyXG4gICAgICAgICAgb2s6ICdPSycsXHJcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgb2s6ICdPSycsXHJcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgICAgLy8gbWF4bGVuZ3RoOiAwLFxyXG4gICAgICAgICAgcmVzcDogJycsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnUua2V5KSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vd0xvZ2dlZEluKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1JywgSlNPTi5zdHJpbmdpZnkodGhpcy51KSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgVG9vbGJhclxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5jb250ZW50ID0gY29udGVudFxyXG4gICAgICAgIHRoaXMuZGlhbG9nLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxyXG4gICAgICB9LFxyXG4gICAgICBzaG93Q29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYiwgeSwgbikge1xyXG4gICAgICAgIHkgPSB5IHx8ICdPSydcclxuICAgICAgICBuID0gbiB8fCAnQ2FuY2VsJ1xyXG4gICAgICAgIHRoaXMuY29uZmlybS5vayA9IHlcclxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxyXG4gICAgICAgIHRoaXMuY29uZmlybS5jb250ZW50ID0gY29udGVudFxyXG4gICAgICAgIHRoaXMuY29uZmlybS50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcclxuICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1EaWFsb2cub3BlbigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XHJcbiAgICAgICAgdGhpcy5wcm9tcHQudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMucHJvbXB0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXHJcbiAgICAgICAgdGhpcy4kcmVmcy5wcm9tcHREaWFsb2cub3BlbigpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcclxuICAgICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrKHRoaXMucHJvbXB0LnJlc3ApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb21wdC5yZXNwID0gJydcclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtQ2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXHJcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gbnVsbFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB1dGlsaXRpZXNcclxuICAgICAgaHVtYW5GaWxlU2l6ZTogZnVuY3Rpb24gKGJ5dGVzKSB7XHJcbiAgICAgICAgdmFyIHRocmVzaCA9IDEwMjRcclxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYnl0ZXMgKyAnIEInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXHJcbiAgICAgICAgdmFyIHUgPSAtMVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxyXG4gICAgICAgICAgICArK3VcclxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxyXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDIpICsgJyAnICsgdW5pdHNbdV1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHNhdmVkVSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1JylcclxuICAgICAgaWYgKHNhdmVkVSkge1xyXG4gICAgICAgIHRoaXMudSA9IEpTT04ucGFyc2Uoc2F2ZWRVKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICBcclxuICAuaW52aXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFjZS12IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXAtYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBodG1sLFxyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICAvKm92ZXJmbG93OiBhdXRvOyovXHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLXNpZGViYXIubWQtc2lkZW5hdiAubWQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgLm1haW4tc2lkZWJhci5tZC1zaWRlbmF2IC5tZC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgLm1haW4tc2lkZWJhci5tZC1zaWRlbmF2IC5tZC1iYWNrZHJvcCB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT8xZGEzODAxMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMjFmNzJiYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHRvb2xiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0yMjFmNzJiY1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2xiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgPG1kLXRvb2xiYXI+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljaz1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XHJcbiAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cclxuICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cclxuICAgICAgPGRpdiB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cclxuICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxyXG4gICAgICAgICAgPG1kLWJ1dHRvbiBtZC1tZW51LXRyaWdnZXI+XHJcbiAgICAgICAgICAgIDxtZC1pY29uPmFjY291bnRfY2lyY2xlPC9tZC1pY29uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjY291bnQtdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICB7eyAkcm9vdC51Lm5hbWUgfX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxyXG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cInJvdXRlckdvKCcvcCcpXCI+XHJcbiAgICAgICAgICAgICAgQWNjb3VudFxyXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL3UnKVwiPlxyXG4gICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL2ZpbGVzJylcIj5cclxuICAgICAgICAgICAgICBNeSBGaWxlc1xyXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxyXG4gICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cImxvZ291dFwiPlxyXG4gICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICA8L21kLW1lbnUtY29udGVudD5cclxuICAgICAgICA8L21kLW1lbnU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiB2LW9uOmNsaWNrPVwidmlzaXRHaXRIdWJcIj5cclxuICAgICAgICAgIDxtZC1pY29uPmZhdm9yaXRlPC9tZC1pY29uPlxyXG4gICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWQtdG9vbGJhcj5cclxuICAgIDxtZC1zaWRlbmF2IGNsYXNzPVwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcIiByZWY9XCJsZWZ0U2lkZW5hdlwiPlxyXG4gICAgICA8bWQtdG9vbGJhciBjbGFzcz1cIm1kLWxhcmdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZVwiPnt7IGFwcE5hbWUgfX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21kLXRvb2xiYXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1saW5rc1wiPlxyXG4gICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJtZC1kZW5zZVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9wXCI+UHJvZmlsZTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi91XCI+RGFzaGJvYXJkPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2ZpbGVzXCI+RmlsZXM8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvXCI+SG9tZTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9hYm91dFwiPkFib3V0PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U3VwcG9ydDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XHJcbiAgICAgICAgICAgICAgICA8bWQtbGlzdD5cclxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBHaXRIdWJcclxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC1pbnNldFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21kLXNpZGVuYXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6ICdQZW5ndWluVXBsb2FkJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdmlzaXRHaXRIdWI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZCcpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvZ2dsZUxlZnRTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi50b2dnbGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZVNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LmNsb3NlKClcclxuICAgICAgfSxcclxuICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm9vdC51LmtleSA9ICcnXHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9LFxyXG4gICAgICByb3V0ZXJHbzogZnVuY3Rpb24gKHUpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh1KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXHJcbiAgICAgIC8vIHRoZW4gcmVnaXN0ZXIgaG9va1xyXG4gICAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcclxuICAgICAgICBuZXh0KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAudG9vbGJhci10aXRsZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3VudC11c2VybmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2xiYXIudnVlPzBlYWRjYTk2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZUxlZnRTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibWVudVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LmxvZ2dlZEluKSA/IF9jKCdkaXYnLCBbX2MoJ21kLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFjY291bnQtdXNlcm5hbWVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIlxcbiAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1jb250ZW50JywgW19jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3AnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjY291bnRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3UnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIERhc2hib2FyZFxcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvZmlsZXMnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIE15IEZpbGVzXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5sb2dvdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBMb2cgT3V0XFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnZpc2l0R2l0SHViXG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiZmF2b3JpdGVcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXNpZGVuYXYnLCB7XG4gICAgcmVmOiBcImxlZnRTaWRlbmF2XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtbGFyZ2VcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10b29sYmFyLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYXBwTmFtZSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpZGViYXItbGlua3NcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtZGVuc2VcIlxuICB9LCBbKF92bS4kcm9vdC5sb2dnZWRJbikgPyBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3BcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlByb2ZpbGVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvdVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGFzaGJvYXJkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2ZpbGVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGaWxlc1wiKV0pXSwgMSldIDogX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9hYm91dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWJvdXRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdzcGFuJywgW192bS5fdihcIlN1cHBvcnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtZXhwYW5kJywgW19jKCdtZC1saXN0JywgW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIixcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSwgMildLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yMjFmNzJiYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCJcbiAgfSwgW19jKCd0b29sYmFyJyksIF92bS5fdihcIiBcIiksIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtZC1yb3V0ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFnZS1jb250ZW50IHBhZ2Utdmlld1wiXG4gIH0sIFtfYygncm91dGVyLXZpZXcnKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1hbGVydCcsIHtcbiAgICByZWY6IFwibW9kYWxEaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0uZGlhbG9nLnRpdGxlLFxuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmRpYWxvZy5jb250ZW50XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1jb25maXJtJywge1xuICAgIHJlZjogXCJjb25maXJtRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmNvbmZpcm0udGl0bGUsXG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uY29uZmlybS5jb250ZW50LFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5jb25maXJtLm9rLFxuICAgICAgXCJtZC1jYW5jZWwtdGV4dFwiOiBfdm0uY29uZmlybS5jYW5jZWxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5vbkNvbmZpcm1DbG9zZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctcHJvbXB0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnByb21wdC5yZXNwKSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvbXB0LnJlc3BcIlxuICAgIH1dLFxuICAgIHJlZjogXCJwcm9tcHREaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0ucHJvbXB0LnRpdGxlLFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5wcm9tcHQub2ssXG4gICAgICBcIm1kLWNhbmNlbC10ZXh0XCI6IF92bS5wcm9tcHQuY2FuY2VsLFxuICAgICAgXCJtZC1pbnB1dC1wbGFjZWhvbGRlclwiOiBfdm0ucHJvbXB0LnBsYWNlaG9sZGVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb21wdC5yZXNwKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogX3ZtLm9uUHJvbXB0Q2xvc2UsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucHJvbXB0LnJlc3AgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDc2ZWEyMGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==