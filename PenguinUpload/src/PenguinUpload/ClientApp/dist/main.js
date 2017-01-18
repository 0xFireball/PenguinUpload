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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/notFound.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-57d1dae1"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/landing.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8696f2d6"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/devCredits.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3535ec3c"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f5aeb5c"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/about.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2863e68b"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/aboutWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-11efd838"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/download.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f191b30c"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/downloadItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d6c3a2d0"
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
	            responded = true;
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
	      "md-stroke": "1.5",
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-36baef12"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/fileUploadWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4fe946c4"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/myfiles.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2dbe6ac9"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/myFilesList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2d0d6b1c"
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
	      "md-stroke": "1.5",
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/layouts/profile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-acae85b2"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/myProfile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-11ead260"
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
	      "md-stroke": "1.5",
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
	exports.push([module.id, "/* roboto-100 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(54) + ") format('woff2'), \n    url(" + __webpack_require__(55) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-100italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 100;\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(56) + ") format('woff2'), \n    url(" + __webpack_require__(57) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(58) + ") format('woff2'), \n    url(" + __webpack_require__(59) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-300italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(60) + ") format('woff2'), \n    url(" + __webpack_require__(61) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-regular - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(62) + ") format('woff2'), \n    url(" + __webpack_require__(63) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(64) + ") format('woff2'), \n    url(" + __webpack_require__(65) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(66) + ") format('woff2'), \n    url(" + __webpack_require__(67) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-500italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(68) + ") format('woff2'), \n    url(" + __webpack_require__(69) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(70) + ") format('woff2'), \n    url(" + __webpack_require__(71) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-700italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 700;\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(72) + ") format('woff2'), \n    url(" + __webpack_require__(73) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900italic - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: 900;\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(74) + ") format('woff2'), \n    url(" + __webpack_require__(75) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* roboto-900 - latin */\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 900;\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(76) + ") format('woff2'), \n    url(" + __webpack_require__(77) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-300 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(78) + ") format('woff2'), \n    url(" + __webpack_require__(79) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-regular - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(80) + ") format('woff2'), \n    url(" + __webpack_require__(81) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-500 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(82) + ") format('woff2'), \n    url(" + __webpack_require__(83) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-600 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(84) + ") format('woff2'), \n    url(" + __webpack_require__(85) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-700 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(86) + ") format('woff2'), \n    url(" + __webpack_require__(87) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n\n/* raleway-800 - latin */\n\n@font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 800;\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(88) + ") format('woff2'), \n    url(" + __webpack_require__(89) + ") format('woff');\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\nbody {\n    background-color: #fafafa;\n}", ""]);
	
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
	exports.push([module.id, "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + __webpack_require__(93) + ");\n    /* For IE6-8 */\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(94) + ") format('woff2'), url(" + __webpack_require__(95) + ") format('woff'), url(" + __webpack_require__(96) + ") format('truetype');\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n}", ""]);
	
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
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", ""]);
	
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
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*button,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }*/\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/App.vue"
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
	__vue_options__.__file = "/home/nihal/Development/GitHub/PenguinUpload/PenguinUpload/src/PenguinUpload/ClientApp/components/toolbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-311e23ae"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjY2NDBjODI2YTI5YjY1NWVjY2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlP2Q3OGQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlP2Q0Y2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vL2xhbmRpbmcudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT82ZGYzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlPzk4NWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/OGMxNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/MzE4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/NTdkMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/MzE2NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/MjZiNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT84N2Q0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlIiwid2VicGFjazovLy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2M1NmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/Njg3NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlP2E1YTMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/ZTVhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/OGE5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9hMWVlIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOzs7O0FBRUE7Ozs7QUFHQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEdBQUcsb0JBQW9CLG9CQUFvQix1QkFBdUIsdUJBQXVCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJB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LDJCQUEyQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixH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QTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUN4SEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NjY0MGM4MjZhMjliNjU1ZWNjZCIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5cbi8vIFJvdXRlc1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuLy8gU3R5bGVzL2ZvbnRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzJ1xuXG4vLyBtYXRlcmlhbFxuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gJ3Z1ZS1tYXRlcmlhbCdcbmltcG9ydCAndnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcydcblxuLy8gcGx1Z2luc1xuVnVlLnVzZShWdWVSb3V0ZXIpXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxuXG4vLyByb3V0ZXIgY29uZmlnXG5cbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgcm91dGVzXG59KVxuXG5yb3V0ZXIuYWZ0ZXJFYWNoKChjdXJyZW50Um91dGUpID0+IHtcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXG5cbiAgaWYgKG1haW5Db250ZW50KSB7XG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxuICB9XG59KVxuXG5WdWUubWF0ZXJpYWwucmVnaXN0ZXJUaGVtZSh7XG4gIGFwcHRoZW1lOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdjeWFuJyxcbiAgICAgIGh1ZTogNzAwXG4gICAgfSxcbiAgICBhY2NlbnQ6IHtcbiAgICAgIGNvbG9yOiAnbGlnaHQtYmx1ZScsXG4gICAgICBodWU6IDYwMFxuICAgIH1cbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnNldEN1cnJlbnRUaGVtZSgnYXBwdGhlbWUnKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlclxufSlcblxuLy8gLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4vLyBuZXcgVnVlKHtcbi8vICAgZWw6ICcjYXBwJyxcbi8vICAgdGVtcGxhdGU6ICc8QXBwIC8+Jyxcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxuLy8gfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2xheW91dHMvbm90Rm91bmQnXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2xheW91dHMvbGFuZGluZydcbmltcG9ydCBBYm91dCBmcm9tICcuL2xheW91dHMvYWJvdXQnXG5pbXBvcnQgRG93bmxvYWQgZnJvbSAnLi9sYXlvdXRzL2Rvd25sb2FkJ1xuXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vbGF5b3V0cy9kYXNoYm9hcmQnXG5pbXBvcnQgTXlGaWxlcyBmcm9tICcuL2xheW91dHMvbXlmaWxlcydcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vbGF5b3V0cy9wcm9maWxlJ1xuXG5jb25zdCBtYWluID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdsYW5kaW5nJyxcbiAgICBjb21wb25lbnQ6IExhbmRpbmdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvaG9tZScsXG4gICAgcmVkaXJlY3Q6ICcvJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgbmFtZTogJ0Fib3V0JyxcbiAgICBjb21wb25lbnQ6IEFib3V0XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3UnLFxuICAgIG5hbWU6ICdkYXNoYm9hcmQnLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2ZpbGVzJyxcbiAgICBuYW1lOiAnbXkgZmlsZXMnLFxuICAgIGNvbXBvbmVudDogTXlGaWxlc1xuICB9LFxuICB7XG4gICAgcGF0aDogJy9wJyxcbiAgICBuYW1lOiAncHJvZmlsZScsXG4gICAgY29tcG9uZW50OiBQcm9maWxlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2QvOmlkLzpwYXNzJyxcbiAgICBuYW1lOiAnZG93bmxvYWQgKHdpdGggcGFzcyknLFxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZC86aWQnLFxuICAgIG5hbWU6ICdkb3dubG9hZCcsXG4gICAgY29tcG9uZW50OiBEb3dubG9hZFxuICB9XG5dXG5cbmNvbnN0IGVycm9yID0gW1xuICB7XG4gICAgcGF0aDogJyonLFxuICAgIG5hbWU6ICdlcnJvcicsXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IFtdLmNvbmNhdChtYWluLCBlcnJvcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01N2QxZGFlMSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTU3ZDFkYWUxXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibm90LWZvdW5kXCI+XG4gICAgPGRpdiBpZD1cImFwcFwiIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJpbnRyby1hcmVhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdC1mb3VuZC1jb250ZW50XCI+XG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxuICAgICAgICA8aDM+VGhlIHBhZ2UgeW91IHdlcmUgbG9va2luZyBmb3IgY291bGRuJ3QgYmUgZm91bmQuPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEludHJvXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAubm90LWZvdW5kLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub3RGb3VuZC52dWU/Mjc4MTFlYmYiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00YzcxYWU0MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnRyby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTRjNzFhZTQyXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW50cm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj57eyB2aWV3VGl0bGUgfHwgYXBwVGl0bGUgfX08L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWyd2aWV3VGl0bGUnXSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwVGl0bGU6ICdQZW5ndWluVXBsb2FkJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC5pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYXBwLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnRyby52dWU/MGYyMWQ5NjIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnRyb1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXBwLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZpZXdUaXRsZSB8fCBfdm0uYXBwVGl0bGUpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00YzcxYWU0MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1jb250ZW50XCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCI0MDQuIFRoYXQncyBhbiBlcnJvci5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01N2QxZGFlMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGFuZGluZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTg2OTZmMmQ2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTg2OTZmMmQ2XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGFuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGludHJvLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cbiAgICAgICAgICA8bG9naW4+PC9sb2dpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcbiAgaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBMb2dpbixcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9LFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICBpZiAodm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy91JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gIH1cblxuICAuaW50cm8tYXJlYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmRpbmcudnVlP2I4OTcwZGIwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNTM1ZWMzYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0zNTM1ZWMzY1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRldkNyZWRpdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGV2LWNyZWRpdHNcIj5cbiAgICA8aDYgY2xhc3M9XCJjcmVkaXQtdGV4dFwiPk1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiIHRhcmdldD1cIl9ibGFua1wiPjB4RmlyZWJhbGw8L2E+IG9mIDxhIGhyZWY9XCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kZXYtY3JlZGl0cyB7XG4gICAgbWFyZ2luOiAyJTtcbiAgfVxuICBcbiAgaDYuY3JlZGl0LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldkNyZWRpdHMudnVlPzY1NDZmNjdiIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGV2LWNyZWRpdHNcIlxuICB9LCBbX2MoJ2g2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNyZWRpdC10ZXh0XCJcbiAgfSwgW192bS5fdihcIk1hZGUgYnkgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMHhGaXJlYmFsbFwiKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9pcmlkaXVtaW9uLnh5elwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklyaWRpdW1Jb24gU29mdHdhcmVcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNTM1ZWMzYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNmNWFlYjVjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtM2Y1YWViNWNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cbiAgICA8bWQtdGFicyBjbGFzcz1cIm1kLWFjY2VudFwiIHJlZj1cImF1dGhPcHRpb25UYWJzXCI+XG4gICAgICA8bWQtdGFiIGlkPVwidC1sb2dpblwiIG1kLWxhYmVsPVwiTG9nIEluXCI+XG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlMb2dpblwiPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJsb2dpbi51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJsb2dpbi5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgbG9naW4uZXJyIH19PC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlMb2dpblwiIDpkaXNhYmxlZD1cIiFsb2dpbi5lXCI+TG9nIEluPC9tZC1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWQtdGFiPlxuXG4gICAgICA8bWQtdGFiIGlkPVwidC1zaWdudXBcIiBtZC1sYWJlbD1cIlNpZ24gVXBcIj5cbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeVJlZ2lzdGVyXCI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cInJlZ2lzdGVyLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5jb25maXJtXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPkludml0ZSBLZXkgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmludml0ZUtleVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyZWdpc3Rlci5pYWNjZXB0XCI+SSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVJlZ2lzdGVyXCIgOmRpc2FibGVkPVwiIXJlZ2lzdGVyLmVcIj5TaWduIFVwPC9tZC1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWQtdGFiPlxuICAgIDwvbWQtdGFicz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbG9naW4nLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2dpbjoge1xuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgZXJyOiAnJyxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxuICAgICAgICAgIGludml0ZUtleTogJycsXG4gICAgICAgICAgZXJyOiAnJyxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdHJ5TG9naW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ubG9naW4uZSkgcmV0dXJuXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XG4gICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2NyZWRlbnRpYWxzIGNhbm5vdCBiZSBlbXB0eSdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5sb2dpbi5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIGxvZ2luIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL2xvZ2luJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ubG9naW4ucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgLy8gdm0uJHJvb3QubG9nZ2VkSW4gPSB0cnVlXG4gICAgICAgICAgICAgIC8vIHB1c2ggdXNlciBpbmZvXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5uYW1lID0gcmVzcG9uc2UuZGF0YS51c2VyLnVzZXJuYW1lXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZtLiRyb290LnUubmFtZSlcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnaW52YWxpZCBsb2dpbiBjcmVkZW50aWFscydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ucmVnaXN0ZXIuZSkgcmV0dXJuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIudXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd1c2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkICE9PSB2bS5yZWdpc3Rlci5jb25maXJtKSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaCdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5yZWdpc3Rlci5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIHJlZ2lzdGVyIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5yZWdpc3Rlci51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ucmVnaXN0ZXIucGFzc3dvcmQsXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcbiAgICAgICAgfSwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmF1dGhPcHRpb25UYWJzLmNoYW5nZVRhYigndC1sb2dpbicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXG4gICAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuICAuaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/Njg0NTY1M2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luXCJcbiAgfSwgW19jKCdtZC10YWJzJywge1xuICAgIHJlZjogXCJhdXRoT3B0aW9uVGFic1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWFjY2VudFwiXG4gIH0sIFtfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1sb2dpblwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIkxvZyBJblwiXG4gICAgfVxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4udXNlcm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi51c2VybmFtZVwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2dpbi51c2VybmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9naW4udXNlcm5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9naW4ucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2dpbi5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubG9naW4uZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeUxvZ2luXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1zaWdudXBcIixcbiAgICAgIFwibWQtbGFiZWxcIjogXCJTaWduIFVwXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5jb25maXJtKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuY29uZmlybVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuY29uZmlybSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuY29uZmlybSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiSW52aXRlIEtleSAob3B0aW9uYWwpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pbnZpdGVLZXkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5pbnZpdGVLZXlcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaW52aXRlS2V5ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmlhY2NlcHRcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaWFjY2VwdCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlZ2lzdGVyLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5yZWdpc3Rlci5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5UmVnaXN0ZXJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaWduIFVwXCIpXSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZjVhZWI1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGludHJvLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdsb2dpbicpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg2OTZmMmQ2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjg2M2U2OGIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0yODYzZTY4YlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRybyxcbiAgICBBYm91dFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKmZvbnQtd2VpZ2h0OiA2MDA7Ki9cbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlP2ZlOWZlOWJjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTFlZmQ4MzghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0xMWVmZDgzOFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0V2lkZ2V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFdpZGdldFwiPlxuICAgIDxoNT5BYm91dCB7eyBhcHBOYW1lIH19PC9oNT5cbiAgICA8cD5cbiAgICAgIFBlbmd1aW5VcGxvYWQgaXMgYSBzZWxmLWhvc3RhYmxlLCBmdWxseSBmZWF0dXJlZCB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIHVwbG9hZCBhbmQgc2hhcmUgZmlsZXMuXG4gICAgPC9wPlxuICAgIDxoNj5cbiAgICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiB7eyBhcHBWZXJzaW9uIH19XG4gICAgPC9oNj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgICBhcHBWZXJzaW9uOiB3aW5kb3cuJGFwcFZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuYWJvdXRXaWRnZXQge1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbiAgXG4gIGg2LmNyZWRpdC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dFdpZGdldC52dWU/MzhmYjE4YjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFdpZGdldFwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQWJvdXQgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiXFxuICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiBcIiArIF92bS5fcyhfdm0uYXBwVmVyc2lvbikgKyBcIlxcbiAgXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMWVmZDgzOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtY29udGVudFwiXG4gIH0sIFtfYygnYWJvdXQnKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yODYzZTY4YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mMTkxYjMwYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kb3dubG9hZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWYxOTFiMzBjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG93bmxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZG93bmxvYWQtYXJlYVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgIDxpbnRybz48L2ludHJvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxuICAgICAgICA8ZG93bmxvYWRJdGVtIDppdGVtSWQ9XCIkcm91dGUucGFyYW1zLmlkXCIgOml0ZW1QYXNzPVwiJHJvdXRlLnBhcmFtcy5wYXNzXCI+PC9kb3dubG9hZEl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcbiAgaW1wb3J0IGRvd25sb2FkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2Rvd25sb2FkSXRlbSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIGRvd25sb2FkSXRlbSxcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gIH1cblxuICAuZG93bmxvYWQtYXJlYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRvd25sb2FkLnZ1ZT8zYTgzYmJkOSIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kNmMzYTJkMCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kb3dubG9hZEl0ZW0udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtZDZjM2EyZDBcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkb3dubG9hZEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkb3dubG9hZC1pdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+RmlsZSBEb3dubG9hZDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3dubG9hZC1hcmVhLXBhZGRpbmdcIj5cbiAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgPG1kLXNwaW5uZXIgbWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XG4gICAgICAgIDxoNT5Mb2FkaW5nIEZpbGUgSW5mb3JtYXRpb248L2g1PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgPG1kLWljb24gbWQtdGhlbWU9XCJsaWdodC1ibHVlXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XG4gICAgICAgIDxoNT57eyBmaWxlLm5hbWUgfX08L2g1PlxuICAgICAgICA8cD57eyBmaWxlLnNpemVUZXh0IH19PC9wPlxuICAgICAgICA8ZGl2IHYtaWY9XCIhZXJyb3JcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxtZC1idXR0b24gQGNsaWNrPVwiZG93bmxvYWRGaWxlXCI+XG4gICAgICAgICAgICAgIDxtZC1pY29uIHYtaWY9XCJmaWxlLnBhc3MubGVuZ3RoID4gMFwiPmxvY2s8L21kLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICA8IS0tPG1kLWJ1dHRvbj5Db3B5IExpbms8L21kLWJ1dHRvbj4tLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnaXRlbUlkJywgJ2l0ZW1QYXNzJ10sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZmlsZToge1xuICAgICAgICAgIG5hbWU6ICdMb2FkaW5nJyxcbiAgICAgICAgICBzaXplOiAncmV0cmlldmluZyBpbmZvcm1hdGlvbiBmcm9tIHNlcnZlcicsXG4gICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgcGFzczogJydcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBjSXRlbVBhc3M6ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBkb3dubG9hZEZpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9kb3dubG9hZC8nICsgdGhpcy5maWxlLmlkICsgKHRoaXMuZmlsZS5wYXNzID8gJyEnICsgdGhpcy5maWxlLnBhc3MgOiAnJylcbiAgICAgIH0sXG4gICAgICB1cGRhdGVGaWxlSW5mbzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCBzdWZmaXggPSBrZXkgPyAnIScgKyBrZXkgOiAnJ1xuICAgICAgICB2bS5maWxlLmlkID0gdm0uaXRlbUlkXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlaW5mby8nICsgdm0uZmlsZS5pZCArIHN1ZmZpeCwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gcmVzcG9uc2UuZGF0YS5uYW1lXG4gICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSByZXNwb25zZS5kYXRhLmhyU2l6ZVxuICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgaWYgKHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgIHZtLmZpbGUucGFzcyA9IGtleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgLy8gZmlsZSBpcyBwYXNzd29yZCBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1Byb21wdCgnRW50ZXIgcGFzc3dvcmQnLCAnRmlsZSBwYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcbiAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnQWNjZXNzIERlbmllZCdcbiAgICAgICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAvLyBmaWxlIG5vdCBmb3VuZFxuICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0ZpbGUgTm90IEZvdW5kJ1xuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1QYXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRmlsZUluZm8odGhpcy5jSXRlbVBhc3MpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kb3dubG9hZC1pdGVtIHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIFxuICAuZG93bmxvYWQtYXJlYS1wYWRkaW5nIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMiU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkb3dubG9hZEl0ZW0udnVlP2Y5OTdlMWYwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZG93bmxvYWQtaXRlbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkZpbGUgRG93bmxvYWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkb3dubG9hZC1hcmVhLXBhZGRpbmdcIlxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdkaXYnLCBbX2MoJ21kLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtc3Ryb2tlXCI6IFwiMS41XCIsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJMb2FkaW5nIEZpbGUgSW5mb3JtYXRpb25cIildKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtaWNvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGhlbWVcIjogXCJsaWdodC1ibHVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJpbnNlcnRfZHJpdmVfZmlsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5zaXplVGV4dCkpXSksIF92bS5fdihcIiBcIiksICghX3ZtLmVycm9yKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodFwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dubG9hZEZpbGVcbiAgICB9XG4gIH0sIFsoX3ZtLmZpbGUucGFzcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1pY29uJywgW192bS5fdihcImxvY2tcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgICBcIildKV0sIDEpXSwgMSldKSA6IF92bS5fZSgpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQ2YzNhMmQwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGRvd25sb2FkLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdkb3dubG9hZEl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXRlbUlkXCI6IF92bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgXCJpdGVtUGFzc1wiOiBfdm0uJHJvdXRlLnBhcmFtcy5wYXNzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1mMTkxYjMwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzZiYWVmMTIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTM2YmFlZjEyXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJEYXNoYm9hcmRcIj48L2ludHJvPlxuICAgIDxmaWxlVXBsb2FkV2lkZ2V0PjwvZmlsZVVwbG9hZFdpZGdldD5cbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBmaWxlVXBsb2FkV2lkZ2V0IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldCdcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEludHJvLFxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9LFxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICBpZiAoIXZtLiRyb290LmxvZ2dlZEluKSB7XG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRhc2hib2FyZC52dWU/NzEzN2QzZDciLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmlsZVVwbG9hZFdpZGdldC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRmZTk0NmM0IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTRmZTk0NmM0XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZmlsZVVwbG9hZFdpZGdldC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC13aWRnZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cbiAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljaz1cInZpZXdNeUZpbGVzXCI+VmlldyBteSBmaWxlczwvbWQtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtaGVyZVwiIEBkcm9wLnN0b3AucHJldmVudD1cImhhbmRsZURyYWdEcm9wVXBsb2FkXCIgQGRyYWdlbnRlci5zdG9wLnByZXZlbnQgQGRyYWdsZWF2ZS5zdG9wLnByZXZlbnQgQGRyYWdvdmVyLnN0b3AucHJldmVudD5cbiAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cInRhcmdldFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2sgdG8gdXBsb2FkIGZpbGVzPC9hPi0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+VXBsb2FkIEZpbGVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtc3ViaGVhZFwiPkRyYWcgYW5kIGRyb3Agb3IgY2xpY2s8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtYXJlYS1wYWRkaW5nXCIgQGNsaWNrPVwiYnJvd3NlRm9yRmlsZXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICAgIDwhLS08bWQtc3Bpbm5lciBtZC1zaXplPVwiNjBcIiA6bWQtcHJvZ3Jlc3M9XCJwcm9ncmVzc0luZGljYXRvci52YWx1ZVwiIGNsYXNzPVwibWQtd2FyblwiPjwvbWQtc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2dyZXNzTWVzc2FnZSB9fTwvcD4tLT5cbiAgICAgICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiPlxuICAgICAgICAgICAgICAgIDwhLS1VcGxvYWRpbmcgZmlsZS0tPlxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cInByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwXCI+VXBsb2FkaW5nPC9tZC1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihwckluZCwgaXgpIGluIHByb2dyZXNzSW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1pZj1cIiFwckluZC5lcnJvclwiPmNsb3VkX3F1ZXVlPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1lbHNlPmVycm9yPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IHBySW5kLm5hbWUgfX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIXBySW5kLmVycm9yXCI+IHt7IChwckluZC52YWx1ZSA8IDEwMCkgPyBgVXBsb2FkaW5nLi4uICgke3BySW5kLnZhbHVlfSUpYCA6ICdVcGxvYWRlZCwgUHJvY2Vzc2luZy4uLicgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT4ge3sgJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cImNhbmNlbFVwbG9hZChwckluZClcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2FuY2VsPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV91cGxvYWQ8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPCEtLVVwbG9hZCBjb21wbGV0ZWQgZmlsZXMtLT5cbiAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIHYtaWY9XCJjb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwXCI+Q29tcGxldGVkPC9tZC1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihjbXBsRmlsZSwgaXgpIGluIGNvbXBsZXRlZEZpbGVzXCIgQGNsaWNrPVwidmlzaXRVcmwoY21wbEZpbGUuZG93bmxvYWRQYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBjbXBsRmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQgQ29tcGxldGUhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZG9uZTwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICA8bWQtYnV0dG9uIHYtaWY9XCJjb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwXCIgQGNsaWNrPVwiY29tcGxldGVkRmlsZXMgPSBbXVwiPkNsZWFyIEFsbDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImludmlzaWJsZVwiIHJlZj1cImJyb3dzZVwiIEBjaGFuZ2U9XCJvbkZpbGVzVXBsb2FkZWRcIiBtdWx0aXBsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9ncmVzc0luZGljYXRvcnM6IFtdLFxuICAgICAgICAvKiBzY2hlbWE6XG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogbnVtYmVyIFswLTEwMF0sXG4gICAgICAgICAgZmlsZVJlZjogb2JqZWN0IFtyZWZlcmVuY2UgdG8gZmlsZSB0aGF0IGlzIHVwbG9hZGluZ10sXG4gICAgICAgICAgbmFtZTogc3RyaW5nIFtuYW1lIG9mIGZpbGVdLFxuICAgICAgICAgIHhocjogb2JqZWN0IFt4aHIgb2JqZWN0IHJlZmVyZW5jZV0sXG4gICAgICAgICAgZXJyb3I6IGJvb2xcbiAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcgb3IgbnVsbCBbYW4gZXJyb3IgbWVzc2FnZV1cbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBjb21wbGV0ZWRGaWxlczogW11cbiAgICAgICAgLyogc2NoZW1hOlxuICAgICAgICAgKi9cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB1cGxvYWRpbmdGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoXG4gICAgICB9LFxuICAgICAgdXBsb2FkaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZGluZ0ZpbGVzID4gMFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdmlld015RmlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9maWxlcycpXG4gICAgICB9LFxuICAgICAgYnJvd3NlRm9yRmlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5icm93c2UuY2xpY2soKVxuICAgICAgfSxcbiAgICAgIG9uRmlsZXNVcGxvYWRlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGJyb3dzZSA9IHRoaXMuJHJlZnMuYnJvd3NlXG4gICAgICAgIGxldCBmaWxlQ291bnQgPSBicm93c2UuZmlsZXMubGVuZ3RoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQgZiA9IGJyb3dzZS5maWxlc1tpXVxuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgZmlsZVJlZjogZixcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZShmLCBwcm9ncmVzcylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZURyYWdEcm9wVXBsb2FkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGYgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXTtcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGZpbGVSZWY6IGYsXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWUsXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZShmLCBwcm9ncmVzcylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNhbmNlbFVwbG9hZDogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgcHJvZ3Jlc3MueGhyLmFib3J0KClcbiAgICAgICAgdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLnNwbGljZSh2bS5wcm9ncmVzc0luZGljYXRvcnMuaW5kZXhPZihwcm9ncmVzcyksIDEpXG4gICAgICB9LFxuICAgICAgdXBsb2FkRmlsZTogZnVuY3Rpb24gKGZpbGUsIHByb2dyZXNzKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICAgIHByb2dyZXNzLnhociA9IHhoclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCIvYXBpL3VwbG9hZFwiKVxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8vIHVwbG9hZCBjb21wbGV0ZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwbG9hZCBjb21wbGV0ZScsIHByb2dyZXNzLm5hbWUpXG4gICAgICAgICAgICAvLyBkZXF1ZXVlIHRoZSB1cGxvYWRpbmcgZmlsZVxuICAgICAgICAgICAgdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLnNwbGljZSh2bS5wcm9ncmVzc0luZGljYXRvcnMuaW5kZXhPZihwcm9ncmVzcyksIDEpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgdm0uY29tcGxldGVkRmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHByb2dyZXNzLm5hbWUsXG4gICAgICAgICAgICAgIGRvd25sb2FkUGFnZTogJy8jL2QvJyArIHJlc3BvbnNlLmZpbGVJZFxuICAgICAgICAgICAgICAvLyBkb3dubG9hZFBhZ2U6IHJlc3BvbnNlLmRvd25sb2FkUGFnZSAvLyBnZXQgZG93bmxvYWQgcGFnZSBmcm9tIHNlcnZlciByZXNwb25zZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICAgICAgcHJvZ3Jlc3MuZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAvLyBwcm9ncmVzcy5tZXNzYWdlID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgLy8gcmVhY3RpdmUgdXBkYXRlXG4gICAgICAgICAgICB2bS4kc2V0KHByb2dyZXNzLCAnbWVzc2FnZScsIHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MudmFsdWUgPSBNYXRoLmZsb29yKChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm0uYXBwZW5kKFwiYXBpa2V5XCIsIHZtLiRyb290LnUua2V5KVxuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSlcbiAgICAgICAgeGhyLnNlbmQoZm9ybSlcbiAgICAgIH0sXG4gICAgICB2aXNpdFVybDogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC51cGxvYWQtYXJlYS1wYWRkaW5nIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC51cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9ycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmaWxlVXBsb2FkV2lkZ2V0LnZ1ZT8yNTFhMmQyNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtdXBsb2FkLXdpZGdldFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZWZ0IHNlcC1iXCJcbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udmlld015RmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaWV3IG15IGZpbGVzXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaGVyZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImRyb3BcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oYW5kbGVEcmFnRHJvcFVwbG9hZCgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJkcmFnZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXN1YmhlYWRcIlxuICB9LCBbX3ZtLl92KFwiRHJhZyBhbmQgZHJvcCBvciBjbGlja1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1hcmVhLXBhZGRpbmdcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYnJvd3NlRm9yRmlsZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCJcbiAgfSwgWyhfdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDApID8gX2MoJ21kLXN1YmhlYWRlcicsIFtfdm0uX3YoXCJVcGxvYWRpbmdcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5wcm9ncmVzc0luZGljYXRvcnMpLCBmdW5jdGlvbihwckluZCwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFsoIXBySW5kLmVycm9yKSA/IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX3F1ZXVlXCIpXSkgOiBfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJlcnJvclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhwckluZC5uYW1lKSArIFwiIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoIXBySW5kLmVycm9yKSA/IF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcygocHJJbmQudmFsdWUgPCAxMDApID8gKFwiVXBsb2FkaW5nLi4uIChcIiArIChwckluZC52YWx1ZSkgKyBcIiUpXCIpIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJykpXSkgOiBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uY2FuY2VsVXBsb2FkKHBySW5kKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNhbmNlbFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiXG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfdXBsb2FkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiXG4gICAgfSldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1zdWJoZWFkZXInLCBbX3ZtLl92KFwiQ29tcGxldGVkXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uY29tcGxldGVkRmlsZXMpLCBmdW5jdGlvbihjbXBsRmlsZSwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnZpc2l0VXJsKGNtcGxGaWxlLmRvd25sb2FkUGFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9kb25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGNtcGxGaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJVcGxvYWQgQ29tcGxldGUhXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCJcbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZG9uZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1idXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jb21wbGV0ZWRGaWxlcyA9IFtdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xlYXIgQWxsXCIpXSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImJyb3dzZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm11bHRpcGxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25GaWxlc1VwbG9hZGVkXG4gICAgfVxuICB9KV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGZlOTQ2YzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiRGFzaGJvYXJkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZmlsZVVwbG9hZFdpZGdldCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzZiYWVmMTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmRiZTZhYzkhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbXlmaWxlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMmRiZTZhYzlcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteWZpbGVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiTXkgRmlsZXNcIj48L2ludHJvPlxuICAgIDxteUZpbGVzTGlzdD48L215RmlsZXNMaXN0PlxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIG15RmlsZXNMaXN0LFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH0sXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlmaWxlcy52dWU/MWMzNzUyNGIiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlGaWxlc0xpc3QudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZDBkNmIxYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTJkMGQ2YjFjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlGaWxlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm15LWZpbGVzLWxpc3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQgc2VwLWJcIj5cbiAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljaz1cInVwbG9hZE1vcmVGaWxlc1wiPlVwbG9hZCBGaWxlczwvbWQtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWRlZC1maWxlcy1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5BbGwgTXkgRmlsZXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRGaW5pc2hlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJub0ZpbGVzXCI+XG4gICAgICAgICAgICAgICAgPHA+Tm8gRmlsZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihmaWxlLCBpeCkgaW4gZmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmNsb3VkX2RvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZmlsZS5oclNpemUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cImxvY2tGaWxlKGl4KVwiIHYtaWY9XCIhZmlsZS5sb2NrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bG9ja19vcGVuPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJ1bmxvY2tGaWxlKGl4KVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bG9jazwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwiZG93bmxvYWRGaWxlKGl4KVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5maWxlX2Rvd25sb2FkPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBtZC1tZW51LXRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+bW9yZV9ob3JpejwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1tZW51LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJ2aXNpdERvd25sb2FkUGFnZShpeClcIj5Eb3dubG9hZCBQYWdlPC9tZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJkZWxldGVGaWxlKGl4KVwiPkRlbGV0ZTwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L21kLW1lbnUtY29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvbWQtbWVudT5cbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgIDxtZC1zcGlubmVyIG1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxuICAgICAgICAgICAgICA8aDU+UmV0cmlldmluZyBEYXRhPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlczogW10sXG4gICAgICAgIGF1dGhSZXF1ZXN0UGFyYW1zOiB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBhcGlrZXk6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2FkRmluaXNoZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZmlsZXNDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlcy5sZW5ndGhcbiAgICAgIH0sXG4gICAgICBub0ZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzQ291bnQgPT0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdXBsb2FkTW9yZUZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdScpXG4gICAgICB9LFxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHUsICdfYmxhbmsnKVxuICAgICAgfSxcbiAgICAgIHZpc2l0RG93bmxvYWRQYWdlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpbGVzW2l4XVxuICAgICAgICBpZiAoZi5sb2NrZWQpIHtcbiAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oXG4gICAgICAgICAgICBgXG5UaGlzIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkLiBEbyB5b3Ugd2FudCB0byBlbmNvZGUgdGhlIDxicj5cbnBhc3N3b3JkIGluIHRoZSBsaW5rPyBJZiB5b3UgZG9uJ3QgZG8gdGhpcywgYW55b25lIHdobyB2aXNpdHMgPGJyPlxueW91ciBsaW5rIHdpbGwgbmVlZCB0byBlbnRlciB0aGUgZmlsZSBwYXNzd29yZCB0byB2aWV3IHRoZSBmaWxlLlxuYCxcbiAgICAgICAgICAgICdJbmNsdWRlIHBhc3N3b3JkPycsXG4gICAgICAgICAgICBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIC8vIGluY2x1ZGUgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZtLnNob3dEb3dubG9hZExpbmtXaXRoUGFzcyhpeClcbiAgICAgICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8ganVzdCBnbyB0byBsaW5rXG4gICAgICAgICAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRsUGFnZSwgJ19ibGFuaycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICdZZXMnLCAnTm8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGp1c3Qgb3BlbiB0aGUgcGFnZVxuICAgICAgICAgIGxldCBkbFBhZ2UgPSAnLyMvZC8nICsgZi5maWxlSWRcbiAgICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0cGFzcy8nICsgZi5maWxlSWQsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkIHNob3VsZCBiZSByZXR1cm5lZFxuICAgICAgICAgICAgbGV0IGRsUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArICcjL2QvJyArIGYuZmlsZUlkICsgJy8nICsgd2luZG93LmJ0b2EocmVzLmRhdGEpXG4gICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoXG4gICAgICAgICAgICAgIGBcbkRvd25sb2FkIGxpbmsgd2l0aCBwYXNzd29yZCBlbmNvZGVkOjxicj5cbjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke2RsUGFnZX1cIj4ke2RsUGFnZX08L2E+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAnTGluayBDcmVhdGVkJylcbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWxlc1tpeF1cbiAgICAgICAgLy8gdXNlIGZvcmNlIGRvd25sb2FkIHRvIGJ5cGFzcyBwYXNzd29yZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Zkb3dubG9hZC8nICsgZi5maWxlSWQgKyAnP2FwaWtleT0nICsgdGhpcy4kcm9vdC51LmtleVxuICAgICAgfSxcbiAgICAgIGxvY2tGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBwYXNzd29yZCcsICdQYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIC8vIHNlbmQgbG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9sb2NrLycgKyBmLmZpbGVJZCArICchJyArIHIsIHt9LCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcbiAgICAgICAgICAgICAgICBmLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdW5sb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHBhc3N3b3JkIG9uIHRoaXMgZmlsZT8nLCAnQ29uZmlybSBVbmxvY2snLCAocikgPT4ge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAvLyBzZW5kIHVubG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS91bmxvY2svJyArIGYuZmlsZUlkLCB7fSwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZpbGU/IEl0IGNhbm5vdCBiZSByZWNvdmVyZWQuJywgJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAocikgPT4ge1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgLy8gc2VuZCBkZWxldGUgcmVxdWVzdFxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvZGVsZXRlLycgKyBmLmZpbGVJZCwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxuICAgICAgICAgICAgICAgICAgdm0uZmlsZXMuc3BsaWNlKGl4LCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHZtLmF1dGhSZXF1ZXN0UGFyYW1zLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJmaWxlcycsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBtZXJnZSBmaWxlIGxpc3RcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZtLmZpbGVzLnB1c2gocmVzcG9uc2UuZGF0YVtpXSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdm0ubG9hZEZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgdm0ubG9hZEZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteUZpbGVzTGlzdC52dWU/MjVkMGI5YzAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cGxvYWRNb3JlRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZGVkLWZpbGVzLWxpc3RcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBbGwgTXkgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5sb2FkRmluaXNoZWQpID8gX2MoJ2RpdicsIFsoX3ZtLm5vRmlsZXMpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJObyBGaWxlc1wiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBfdm0uX2woKF92bS5maWxlcyksIGZ1bmN0aW9uKGZpbGUsIGl4KSB7XG4gICAgcmV0dXJuIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfZG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoZmlsZS5oclNpemUpKV0pXSksIF92bS5fdihcIiBcIiksICghZmlsZS5sb2NrZWQpID8gX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5sb2NrRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJsb2NrX29wZW5cIildKV0sIDEpIDogX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS51bmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmRvd25sb2FkRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJmaWxlX2Rvd25sb2FkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1kLWFsaWduLXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtbWVudS10cmlnZ2VyXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibW9yZV9ob3JpelwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWNvbnRlbnQnLCBbX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnZpc2l0RG93bmxvYWRQYWdlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkRvd25sb2FkIFBhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmRlbGV0ZUZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRGVsZXRlXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogXCIxLjVcIixcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1JywgW192bS5fdihcIlJldHJpZXZpbmcgRGF0YVwiKV0pXSwgMSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJkMGQ2YjFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2ludHJvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZpZXctdGl0bGVcIjogXCJNeSBGaWxlc1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ215RmlsZXNMaXN0JyksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZGJlNmFjOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYWNhZTg1YjIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHJvZmlsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtYWNhZTg1YjJcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwcm9maWxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiVXNlciBQcm9maWxlXCI+PC9pbnRybz5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgICAgPG15UHJvZmlsZT48L215UHJvZmlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IG15UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL215UHJvZmlsZSdcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEludHJvLFxuICAgICAgbXlQcm9maWxlLFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH0sXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcm9maWxlLnZ1ZT82ZjZjNWQ4MiIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teVByb2ZpbGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMWVhZDI2MCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teVByb2ZpbGUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMTFlYWQyNjBcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteVByb2ZpbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJteS1wcm9maWxlIGxlZnRcIj5cbiAgICA8aDQ+TWFuYWdlIEFjY291bnQgKHt7ICRyb290LnUubmFtZSB9fSk8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cbiAgICAgIDxoNT5SZXNvdXJjZSBVc2FnZTwvaDU+XG4gICAgICA8ZGl2IHYtaWY9XCJ1SW5mby5sb2FkZWRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNpbmdcbiAgICAgICAgICA8Yj57eyB1SW5mby51c2FnZSB9fTwvYj4gb2YgPGI+e3sgdUluZm8ucXVvdGEgfX08L2I+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxtZC1zcGlubmVyIG1kLXN0cm9rZT1cIjEuNVwiIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxuICAgICAgICA8cD5SZXRyaWV2aW5nIERhdGE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XG4gICAgICA8aDU+QVBJPC9oNT5cbiAgICAgIDxoNj5BUEkgS2V5OiA8Y29kZT57eyAkcm9vdC51LmtleSB9fTwvY29kZT48L2g2PlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIgQGNsaWNrPVwiZ2VuZXJhdGVOZXdBcGlLZXlcIj5HZW5lcmF0ZSBOZXc8L21kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XG4gICAgICA8aDU+U2VjdXJpdHk8L2g1PlxuICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeVVwZGF0ZVBhc3N3b3JkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWlnaHQgY29sdW1uc1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLm9sZFwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxuICAgICAgICAgICAgICA8bGFiZWw+TmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQuY29uZmlybVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IHVwZGF0ZVBhc3N3b3JkLmVyciB9fTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XG4gICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlVcGRhdGVQYXNzd29yZFwiIDpkaXNhYmxlZD1cIiF1cGRhdGVQYXNzd29yZC5lXCI+Q2hhbmdlIFBhc3N3b3JkPC9tZC1idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoNT5EYW5nZXIgWm9uZTwvaDU+XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXdhcm5cIiBAY2xpY2s9XCJkZWxldGVBbGxGaWxlc1wiPkRlbGV0ZSBBbGwgRmlsZXM8L21kLWJ1dHRvbj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljaz1cImRlbGV0ZUFjY291bnRcIj5EZWxldGUgQWNjb3VudDwvbWQtYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQYXNzd29yZDoge1xuICAgICAgICAgIG9sZDogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgICAgIGVycjogJycsXG4gICAgICAgICAgZTogdHJ1ZSAvLyBlbmFibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhSZXF1ZXN0UGFyYW1zOiB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBhcGlrZXk6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1SW5mbzoge1xuICAgICAgICAgIHF1b3RhOiBudWxsLFxuICAgICAgICAgIHVzYWdlOiBudWxsLFxuICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZ2VuZXJhdGVOZXdBcGlLZXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IGEgbmV3IEFQSSBrZXk/IFRoZSBvbGQgb25lIHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9uZXdrZXknLCB7fSwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBkb25lXG4gICAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnTmV3IEFQSSBrZXkgZ2VuZXJhdGVkLiBQbGVhc2UgbG9nIGluIGFnYWluLicsICdTdWNjZXNzJylcbiAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVBbGxGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IGFic29sdXRlbHkgc3VyZT8gQWxsIGZpbGVzIHRoYXQgeW91IGhhdmUgdXBsb2FkZWQgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLiBZb3Ugd2lsbCB0aGVuIGJlIGxvZ2dlZCBvdXQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvZmlsZXMnLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIC8vIGZpbGVzIGhhdmUgYmVlbiBudWtlZC5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIG5vdyBsb2cgb3V0XG4gICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVBY2NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBZb3VyIGFjY291bnQgYW5kIGFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocjEpIHtcbiAgICAgICAgICBpZiAocjEpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnWW91ciBhY2NvdW50IHdpbGwgYmUgZGVsZXRlZC4gQXJlIHlvdSBjZXJ0YWluIHlvdSB3b3VsZCBsaWtlIHRvIHByb2NlZWQ/JykpIHtcbiAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvdXNlcicsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgaGFzIGJlZW4gbnVrZWQuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0cnlVcGRhdGVQYXNzd29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0udXBkYXRlUGFzc3dvcmQuZSkgcmV0dXJuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCAhPT0gdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSkge1xuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IGZhbHNlXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJydcbiAgICAgICAgLy8gc2VuZCB1cGRhdGVQYXNzd29yZCBwb3N0XG4gICAgICAgIGF4aW9zLnBhdGNoKCcvY2hhbmdlcGFzc3dvcmQnLCB7XG4gICAgICAgICAgdXNlcm5hbWU6IHZtLiRyb290LnUubmFtZSxcbiAgICAgICAgICBvbGRQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQub2xkLFxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZFxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBwcm9jZXNzIHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgICAgICB2bS4kcm9vdC5zaG93UG9wdXAoJ1Bhc3N3b3JkIGNoYW5nZSBzdWNjZWVkZWQhIFBsZWFzZSBsb2cgaW4gYWdhaW4uJylcbiAgICAgICAgICAgICAgLy8gbG9nIG91dFxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXG4gICAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBsb2FkIGZpbGVzIGZyb20gc2VydmVyXG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICB2bS5hdXRoUmVxdWVzdFBhcmFtcy5wYXJhbXMuYXBpa2V5ID0gdm0uJHJvb3QudS5rZXlcbiAgICAgIC8vIGxvYWQgdXNlciBpbmZvXG4gICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcmluZm8nLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIC8vIGZldGNoZWQgZGF0YVxuICAgICAgICAgIHZtLnVJbmZvID0ge1xuICAgICAgICAgICAgcXVvdGE6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEucXVvdGEpLFxuICAgICAgICAgICAgdXNhZ2U6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEudXNhZ2UpLFxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlQcm9maWxlLnZ1ZT8xNTNjZTg2YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm15LXByb2ZpbGUgbGVmdFwiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiTWFuYWdlIEFjY291bnQgKFwiICsgX3ZtLl9zKF92bS4kcm9vdC51Lm5hbWUpICsgXCIpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWN0aW9uXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJSZXNvdXJjZSBVc2FnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnVJbmZvLmxvYWRlZCkgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgVXNpbmdcXG4gICAgICAgIFwiKSwgX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udUluZm8udXNhZ2UpKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS51SW5mby5xdW90YSkpXSldKV0pIDogX2MoJ2RpdicsIFtfYygnbWQtc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1zdHJva2VcIjogXCIxLjVcIixcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQVBJXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJBUEkgS2V5OiBcIiksIF9jKCdjb2RlJywgW192bS5fdihfdm0uX3MoX3ZtLiRyb290LnUua2V5KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmdlbmVyYXRlTmV3QXBpS2V5XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiR2VuZXJhdGUgTmV3XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlNlY3VyaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlVcGRhdGVQYXNzd29yZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlaWdodCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkN1cnJlbnQgcGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLm9sZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQub2xkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5vbGQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiTmV3IFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLmNvbmZpcm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwZGF0ZVBhc3N3b3JkLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS51cGRhdGVQYXNzd29yZC5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5VXBkYXRlUGFzc3dvcmRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDaGFuZ2UgUGFzc3dvcmRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g1JywgW192bS5fdihcIkRhbmdlciBab25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWxsRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWxsIEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWNjb3VudFxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZSBBY2NvdW50XCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExZWFkMjYwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiVXNlciBQcm9maWxlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdteVByb2ZpbGUnKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWFjYWU4NWIyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTEwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvLVRoaW4nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0xMDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tVGhpbkl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTMwMGl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTGlnaHRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLWl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by01MDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1NZWRpdW1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQnKSwgbG9jYWwoJ1JvYm90by1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNzAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJvbGRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by05MDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tOTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTMwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBMaWdodCcpLCBsb2NhbCgnUmFsZXdheS1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNTAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IE1lZGl1bScpLCBsb2NhbCgnUmFsZXdheS1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS02MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgU2VtaUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktU2VtaUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS03MDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktODAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjhjZTU5ODgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC42NTRjYjRkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLmFjZWUwZWEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy40MmRlODk4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLjE2ZGRiMTUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC5lY2NlOTJkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjNkZGI3NDgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy40ZDA4ZGFlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci43ZTM2N2JlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci4xNmUxZDkzLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy45ODRhZTM3LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuMWU2NWU3ZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC5iYjQ3NGYxLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuNTdhZjY0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy45ZTdiZWVlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuYjY3MDY5NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC4wZDdlNzFmLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuNTI1ZDViNC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy43Mzk0Y2E5LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuYWQwZTc0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy40ZmFlYzgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuM2I5NTkwZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5mNGU4ZGM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZGU5ODRjMC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuZTc0NmUwMy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuNzhkZDVhYi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci45MTA2NDM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjI5MGVlMzgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuZTVhMzIxMi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuODFlOTU1OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmNkOTAzOTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmE0YjZmMTcud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC4wNmYxYzg2LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC5jODY0ZDg0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMDQxYTRiOC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMmEzYTljZi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIpICsgXCIpO1xcbiAgICAvKiBGb3IgSUU2LTggKi9cXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSwgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZTc5YmZkOC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci41NzBlYjgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci4wMTJjZjZhLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuYTM3YjBjMC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4qIFNrZWxldG9uIFYyLjAuNFxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXG4qIDEyLzI5LzIwMTRcXG4qL1xcblxcblxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxuLSBHcmlkXFxuLSBCYXNlIFN0eWxlc1xcbi0gVHlwb2dyYXBoeVxcbi0gTGlua3NcXG4tIEJ1dHRvbnNcXG4tIEZvcm1zXFxuLSBMaXN0c1xcbi0gQ29kZVxcbi0gVGFibGVzXFxuLSBTcGFjaW5nXFxuLSBVdGlsaXRpZXNcXG4tIENsZWFyaW5nXFxuLSBNZWRpYSBRdWVyaWVzXFxuKi9cXG5cXG5cXG4vKiBHcmlkXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4uY29sdW1uLFxcbi5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLmNvbHVtbixcXG4gIC5jb2x1bW5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyB9XFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS5jb2x1bW4sXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcblxcbiAgLyogT2Zmc2V0cyAqL1xcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXG5cXG59XFxuXFxuXFxuLyogQmFzZSBTdHlsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKiBOT1RFXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMjI7IH1cXG5cXG5cXG4vKiBUeXBvZ3JhcGh5XFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuXFxuLyogTGlua3NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5hIHtcXG4gIGNvbG9yOiAjMUVBRURCOyB9XFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzBGQTBDRTsgfVxcblxcblxcbi8qIExpc3RzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudWwge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxcbm9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XFxub2wsIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG51bCB1bCxcXG51bCBvbCxcXG5vbCBvbCxcXG5vbCB1bCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA5MCU7IH1cXG5saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuXFxuLyogQ29kZVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmNvZGUge1xcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICBtYXJnaW46IDAgLjJyZW07XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbnByZSA+IGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cXG5cXG5cXG4vKiBUYWJsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcblxcbi8qIFNwYWNpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnAsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH0qL1xcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1tYXRlcmlhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWF2YXRhciB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtYXZhdGFyLm1kLWxhcmdlIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIG1pbi13aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbn1cXG4ubWQtYXZhdGFyLm1kLWxhcmdlIC5tZC1pY29uIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiAubWQtaWNvbiB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxufVxcbi5tZC1hdmF0YXIgLm1kLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWQtYXZhdGFyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUubWQtYWN0aXZlIHtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IC45cztcXG59XFxuLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtdG9wIHtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWxlZnQge1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxufVxcbi5tZC1iYWNrZHJvcC5tZC1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLm1kLWJhY2tkcm9wLm1kLXRyYW5zcGFyZW50IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwNSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWJvdHRvbS1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbSB7XFxuICBtYXgtd2lkdGg6IDE2OHB4O1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDEycHggMTBweDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbXMtZmxleDogMTtcXG4gICAgICBmbGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUge1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHQsXFxuICAgIC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uIHtcXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtW2Rpc2FibGVkXSB7XFxuICAgIG9wYWNpdHk6IC4zODtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSB7XFxuICAgIG1pbi13aWR0aDogNTZweDtcXG4gICAgbWF4LXdpZHRoOiA5NnB4O1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAtbXMtZmxleDogMSAxIDMycHg7XFxuICAgICAgICBmbGV4OiAxIDEgMzJweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZmxleCwgbWluLXdpZHRoLCBtYXgtd2lkdGg7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGZsZXgsIG1pbi13aWR0aCwgbWF4LXdpZHRoLCAtbXMtZmxleDtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtaWNvbiB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA4cHgsIDApO1xcbn1cXG4ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0IHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgNnB4LCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUge1xcbiAgICAgIG1pbi13aWR0aDogOTZweDtcXG4gICAgICBtYXgtd2lkdGg6IDE2OHB4O1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgNzJweDtcXG4gICAgICAgICAgZmxleDogMSAxIDcycHg7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLFxcbiAgICAgIC5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0IHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0IHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMnB4LCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NTcxKSB0cmFuc2xhdGVZKDJweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBjb2xvciAwLjE1cyBsaW5lYXIsIG9wYWNpdHkgMC4xNXMgbGluZWFyO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29uIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGNvbG9yIDAuMTVzIGxpbmVhcjtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogODhweDtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXJnaW46IDZweCA4cHg7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubWQtYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4ubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWJ1dHRvbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSkge1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1kZW5zZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb24sIC5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIG1pbi13aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW46IDAgNnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uLm1kLWRlbnNlIHtcXG4gICAgICB3aWR0aDogMzJweDtcXG4gICAgICBtaW4td2lkdGg6IDMycHg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7XFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtcmlwcGxlLm1kLWFjdGl2ZSB7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOXM7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxufVxcbi5tZC1idXR0b24ubWQtZmFiOmhvdmVyLCAubWQtYnV0dG9uLm1kLWZhYjpmb2N1cyB7XFxuICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDE2cHg7XFxuICAgICAgbGVmdDogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDE2cHg7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTZweDtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAxNnB4O1xcbiAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAxNnB4O1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICBib3R0b206IDE2cHg7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLW1pbmkge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxufVxcbi5tZC1idXR0b25bZGlzYWJsZWRdIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtcmFpc2VkLCAubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYiB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLm1kLWJ1dHRvbjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtYnV0dG9uIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29uLFxcbi5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC10b3Age1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtbGVmdCB7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYnV0dG9uLXRvZ2dsZSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovXFxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xcbi5tZC1jYXJkIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWNhcmQubWQtd2l0aC1ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XFxufVxcbi5tZC1jYXJkLm1kLXdpdGgtaG92ZXI6aG92ZXIge1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMge1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMzpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNzUlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMyBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhICsgLm1kLWNhcmQtaGVhZGVyIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgKyAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGQge1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQgPiAubWQtdGl0bGU6Zmlyc3QtY2hpbGQsXFxuICAgIC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCA+IC5tZC1jYXJkLWhlYWRlci10ZXh0ID4gLm1kLXRpdGxlOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlci5tZC1jYXJkLWhlYWRlci1mbGV4IHtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyICsgLm1kLWNhcmQtY29udGVudCB7XFxuICAgICAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciArIC5tZC1jYXJkLWFjdGlvbnM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyIH4gLm1kLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtdGl0bGUsXFxuICAgICAgLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtc3ViaGVhZCB7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLWhlYWRlci10ZXh0IHtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhIHtcXG4gICAgICB3aWR0aDogODBweDtcXG4gICAgICAtbXMtZmxleDogMCAwIDgwcHg7XFxuICAgICAgICAgIGZsZXg6IDAgMCA4MHB4O1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bSB7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgICAgICAtbXMtZmxleDogMCAwIDEyMHB4O1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMjBweDtcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWcge1xcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xcbiAgICAgICAgLW1zLWZsZXg6IDAgMCAxNjBweDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCxcXG4gIC5tZC1jYXJkIC5tZC10aXRsZSxcXG4gIC5tZC1jYXJkIC5tZC1zdWJoZWFkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCB7XFxuICAgIG9wYWNpdHk6IC41NDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCArIC5tZC10aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLW1lZGlhIHtcXG4gICAgICBtYXgtd2lkdGg6IDI0MHB4O1xcbiAgICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFyZWEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtY2FyZCA+IC5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWQtaW5zZXQpOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbn1cXG4ubWQtY2FyZCA+IC5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE2cHg7XFxuICAgICAgbGVmdDogMTZweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3Zlci5tZC10ZXh0LXNjcmltIC5tZC1jYXJkLWJhY2tkcm9wIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHotaW5kZXg6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWFyZWEge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB6LWluZGV4OiAyO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtY2FyZC1oZWFkZXIgKyAubWQtY2FyZC1hY3Rpb25zIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLXN1YmhlYWQge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZC5tZC1hY3RpdmUgW21kLWV4cGFuZC10cmlnZ2VyXSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZC5tZC1hY3RpdmUgLm1kLWNhcmQtY29udGVudCB7XFxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1hY3Rpb25zIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl0ge1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1jb250ZW50IHtcXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwLCAwKTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgICB3aWxsLWNoYW5nZTogbWFyZ2luO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1jaGVja2JveCB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMTZweCA4cHggMTZweCAwO1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogNDhweDtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciB7XFxuICAgICAgd2lkdGg6IDZweDtcXG4gICAgICBoZWlnaHQ6IDEzcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiA1cHg7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICBib3JkZXItdG9wOiAwO1xcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlM0QoMC4xNSwgMC4xNSwgMSk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IC05OTllbTtcXG59XFxuLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIHRvcDogLTE2cHg7XFxuICAgICAgcmlnaHQ6IC0xNnB4O1xcbiAgICAgIGJvdHRvbTogLTE2cHg7XFxuICAgICAgbGVmdDogLTE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlIHtcXG4gICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1jaGVja2JveC5tZC1jaGVja2VkIC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZTNEKDEsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWNoaXAge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1jaGlwLm1kLWRlbGV0YWJsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuLm1kLWNoaXA6Zm9jdXMsIC5tZC1jaGlwOmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tZC1jaGlwOmZvY3VzOm5vdCgubWQtZGlzYWJsZWQpLCAubWQtY2hpcDphY3RpdmU6bm90KC5tZC1kaXNhYmxlZCkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWNoaXAubWQtZGlzYWJsZWQgLm1kLWJ1dHRvbiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1pbi13aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHJpZ2h0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtaWNvbiB7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbn1cXG4ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtcmlwcGxlIHtcXG4gICAgICBvcGFjaXR5OiAuNTQ7XFxufVxcbi5tZC1jaGlwcyAubWQtY2hpcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLm1kLWNoaXBzIC5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogNTRweDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWQtY2hpcHMgLm1kLWlucHV0IHtcXG4gIHdpZHRoOiAxMjhweDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWluay1yaXBwbGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbn1cXG4ubWQtcmlwcGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9wYWNpdHk6IC4yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm0sIHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdDtcXG59XFxuLm1kLXJpcHBsZS5tZC1hY3RpdmUge1xcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSBmb3J3YXJkcztcXG59XFxuLm1kLXJpcHBsZS5tZC1hY3RpdmUubWQtZmFkZW91dCB7XFxuICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcXG59XFxuQGtleWZyYW1lcyByaXBwbGUge1xcbnRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpIHRyYW5zbGF0ZVooMCk7XFxufVxcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTA4O1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIC5tZC1kaWFsb2cge1xcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ubWQtZGlhbG9nLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwOTtcXG59XFxuLm1kLWRpYWxvZyB7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTEwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3gtc2hhZG93OiAwIDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuODUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgdHJhbnNmb3JtIDAuNHMgMC4wNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ubWQtZGlhbG9nLm1kLXJlZmVyZW5jZSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbi5tZC1kaWFsb2cubWQtdHJhbnNpdGlvbi1vZmYge1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5tZC1kaWFsb2cgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWRpYWxvZy10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDA7XFxufVxcbi5tZC1kaWFsb2ctY29udGVudCB7XFxuICBwYWRkaW5nOiAwIDI0cHggMjRweDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogYXV0bztcXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDAsICNmZmYgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmIDAsICNmZmYgM3B4LCB0cmFuc3BhcmVudCAzcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAsIHJnYmEoMCwgMCwgMCwgMC4xMikgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuMikgMXB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMnB4LCB0cmFuc3BhcmVudCAycHgpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbCwgbG9jYWwsIHNjcm9sbCwgc2Nyb2xsO1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRlbnQ6Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kLWRpYWxvZy1jb250ZW50IHA6Zmlyc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZC1kaWFsb2ctY29udGVudCBwOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tZC1kaWFsb2ctYm9keSB7XFxuICBtYXJnaW46IDAgLTI0cHg7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm1kLWRpYWxvZy1hY3Rpb25zIHtcXG4gIG1pbi1oZWlnaHQ6IDUycHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1kaWFsb2ctYWN0aW9uczpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA2NHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbn1cXG4ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtZGl2aWRlci5tZC1pbnNldCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1maWxlIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC1maWxlIGlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4ubWQtZmlsZSAubWQtaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtaWNvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtaWNvbi5tZC1zaXplLTJ4IHtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIG1pbi13aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5tZC1pY29uLm1kLXNpemUtM3gge1xcbiAgICB3aWR0aDogNzJweDtcXG4gICAgbWluLXdpZHRoOiA3MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG59XFxuLm1kLWljb24ubWQtc2l6ZS00eCB7XFxuICAgIHdpZHRoOiA5NnB4O1xcbiAgICBtaW4td2lkdGg6IDk2cHg7XFxuICAgIGhlaWdodDogOTZweDtcXG4gICAgbWluLWhlaWdodDogOTZweDtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbn1cXG4ubWQtaWNvbi5tZC1zaXplLTV4IHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG59XFxuLm1kLWljb24gc3ZnIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuaW1nLm1kLWljb24ge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1pbWFnZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyMCUpO1xcbn1cXG4ubWQtaW1hZ2UubWQtYmxhY2stb3V0cHV0IHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNCkgc2F0dXJhdGUoMjAlKTtcXG59XFxuLm1kLWltYWdlLm1kLWxvYWRlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgZmlsdGVyIDIuMnMgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtaW5wdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIG1hcmdpbjogNHB4IDAgMjRweDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyM3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsXFxuICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZm9udC1zaXplO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBpbml0aWFsO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0IH4gLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSksXFxuICAgIC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlcixcXG4gICAgICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIH4gLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSk6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBsZWZ0OiBhdXRvO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgbWF4LWhlaWdodDogMjMwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3IsXFxuICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04cHgsIDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtY291bnQge1xcbiAgICByaWdodDogMDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB7XFxuICAgIG1hcmdpbjogNHB4IGF1dG87XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlciB7XFxuICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSkgfiBsYWJlbCB7XFxuICAgICAgbGVmdDogMzZweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC1pbnB1dCxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC10ZXh0YXJlYSxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC1maWxlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBsYWJlbCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHRvcDogMTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbCwgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgbGFiZWwge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB0b3A6IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhLCAubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCxcXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LFxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaW5wdXQtZm9jdXNlZCBsYWJlbCB7XFxuICB0b3A6IDIzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWhhcy12YWx1ZSBsYWJlbCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IGJvdHRvbSBsZWZ0IHJlcGVhdC14O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMzgpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMzgpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMXB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGxhYmVsLFxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCB0ZXh0YXJlYSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQubWQtaW5wdXQtZm9jdXNlZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmQgLm1kLWluay1yaXBwbGUge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbnZhbGlkIC5tZC1lcnJvciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1yZXF1aXJlZCBsYWJlbDphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDJweCkpO1xcbiAgY29udGVudDogXFxcIipcXFwiO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovXFxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xcbi8qIFJvd3MgYW5kIENvbHVtbnMgKi9cXG4ubWQtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC1yb3cge1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbiB7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBDb250YWluZXIgKi9cXG4ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lci5tZC1jZW50ZXJlZCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBBbGlnbm1lbnRzICovXFxuLm1kLWFsaWduLXN0YXJ0IHtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLWNlbnRlciB7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi1lbmQge1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIEd1dHRlciBTaXplICovXFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG59XFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbn1cXG4ubWQtZ3V0dGVyIC5tZC1jb2x1bW4ge1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NHB4KSB7XFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG4ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uIHtcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG59XFxuLm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKSB7XFxuICBtYXJnaW4tcmlnaHQ6IC00cHg7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG59XFxuLm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbiB7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLm1kLWd1dHRlci04IC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuLm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcbi5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbiB7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcXG59XFxuLm1kLWd1dHRlci0xNiAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pIHtcXG4gIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxufVxcbi5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG59XFxuLm1kLWd1dHRlci0yNCAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XFxufVxcbi5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxufVxcbi5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pIHtcXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcbi5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLm1kLWd1dHRlci00MCAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcbi5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIEZsZXggU2l6ZSAqL1xcbi5tZC1mbGV4IHtcXG4gIC1tcy1mbGV4OiAxIDE7XFxuICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC0zMyB7XFxuICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LTY2IHtcXG4gIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7XFxuICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTMzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02NiB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC01IHtcXG4gIG1pbi13aWR0aDogNSU7XFxuICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgIGZsZXg6IDAgMSA1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC0xMCB7XFxuICBtaW4td2lkdGg6IDEwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC0xNSB7XFxuICBtaW4td2lkdGg6IDE1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC0yMCB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgIGZsZXg6IDAgMSAyMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC0yNSB7XFxuICBtaW4td2lkdGg6IDI1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC0zMCB7XFxuICBtaW4td2lkdGg6IDMwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC0zNSB7XFxuICBtaW4td2lkdGg6IDM1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgIGZsZXg6IDAgMSAzNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0zNSB7XFxuICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC00MCB7XFxuICBtaW4td2lkdGg6IDQwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC00MCB7XFxuICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC00NSB7XFxuICBtaW4td2lkdGg6IDQ1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC00NSB7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC01MCB7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgIGZsZXg6IDAgMSA1MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC01MCB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC01NSB7XFxuICBtaW4td2lkdGg6IDU1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC01NSB7XFxuICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC02MCB7XFxuICBtaW4td2lkdGg6IDYwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02MCB7XFxuICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC02NSB7XFxuICBtaW4td2lkdGg6IDY1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgIGZsZXg6IDAgMSA2NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02NSB7XFxuICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC03MCB7XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC03MCB7XFxuICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC03NSB7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC03NSB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC04MCB7XFxuICBtaW4td2lkdGg6IDgwJTtcXG4gIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgIGZsZXg6IDAgMSA4MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC04MCB7XFxuICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC04NSB7XFxuICBtaW4td2lkdGg6IDg1JTtcXG4gIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC04NSB7XFxuICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC05MCB7XFxuICBtaW4td2lkdGg6IDkwJTtcXG4gIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC05MCB7XFxuICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC05NSB7XFxuICBtaW4td2lkdGg6IDk1JTtcXG4gIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgIGZsZXg6IDAgMSA5NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC05NSB7XFxuICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC0xMDAge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtMTAwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MDRweCkge1xcbi5tZC1yb3cteGxhcmdlIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLXhsYXJnZSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgteGxhcmdlIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi14bGFyZ2Utc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLXhsYXJnZS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLXhsYXJnZS1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS14bGFyZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE5MDNweCkge1xcbi5tZC1yb3ctbGFyZ2Uge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZC1jb2x1bW4tbGFyZ2Uge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZC1mbGV4LWxhcmdlIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMzMge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7XFxuICAgICAgICBmbGV4OiAwIDEgMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS02NiB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS02NiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTUge1xcbiAgICBtaW4td2lkdGg6IDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgICAgZmxleDogMCAxIDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMTAge1xcbiAgICBtaW4td2lkdGg6IDEwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTIwIHtcXG4gICAgbWluLXdpZHRoOiAyMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgICAgZmxleDogMCAxIDIwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMjUge1xcbiAgICBtaW4td2lkdGg6IDI1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjUge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTM1IHtcXG4gICAgbWluLXdpZHRoOiAzNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgICAgZmxleDogMCAxIDM1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNDAge1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNDAge1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS00NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTUwIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgICAgZmxleDogMCAxIDUwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNTUge1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTUge1xcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS02MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTY1IHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgICAgZmxleDogMCAxIDY1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNzAge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNzAge1xcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS03NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTgwIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgICAgZmxleDogMCAxIDgwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtODUge1xcbiAgICBtaW4td2lkdGg6IDg1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4NSU7XFxuICAgICAgICBmbGV4OiAwIDEgODUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtODUge1xcbiAgICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS05MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTk1IHtcXG4gICAgbWluLXdpZHRoOiA5NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgICAgZmxleDogMCAxIDk1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMTAwIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTEwMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG4ubWQtYWxpZ24tbGFyZ2Utc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLWxhcmdlLWNlbnRlciB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWQtYWxpZ24tbGFyZ2UtZW5kIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLWhpZGUtbGFyZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNjRweCkge1xcbi5tZC1yb3ctbWVkaXVtIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLW1lZGl1bSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgtbWVkaXVtIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi1tZWRpdW0tc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLW1lZGl1bS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLW1lZGl1bS1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS1tZWRpdW0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NHB4KSB7XFxuLm1kLXJvdy1zbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbi1zbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgtc21hbGwge1xcbiAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0zMyB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0xMCB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTE1IHtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTE1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0yNSB7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTMwIHtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMzUge1xcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC00MCB7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDQwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTQ1IHtcXG4gICAgbWluLXdpZHRoOiA0NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNTAge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC01NSB7XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDU1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTYwIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTYwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNjUge1xcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC03MCB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDcwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTc1IHtcXG4gICAgbWluLXdpZHRoOiA3NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTc1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtODAge1xcbiAgICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC04NSB7XFxuICAgIG1pbi13aWR0aDogODUlO1xcbiAgICAtbXMtZmxleDogMCAxIDg1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTkwIHtcXG4gICAgbWluLXdpZHRoOiA5MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTkwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtOTUge1xcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0xMDAge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi1zbWFsbC1zdGFydCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24tc21hbGwtY2VudGVyIHtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi1zbWFsbC1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS1zbWFsbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtcm93LXhzbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbi14c21hbGwge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZC1mbGV4LXhzbWFsbCB7XFxuICAgIC1tcy1mbGV4OiAxIDE7XFxuICAgICAgICBmbGV4OiAxIDE7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0zMyB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC02NiB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMzMge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTUge1xcbiAgICBtaW4td2lkdGg6IDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgICAgZmxleDogMCAxIDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0xMCB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMTUge1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTE1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTIwIHtcXG4gICAgbWluLXdpZHRoOiAyMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgICAgZmxleDogMCAxIDIwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0yNSB7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMjUge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMzAge1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTM1IHtcXG4gICAgbWluLXdpZHRoOiAzNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgICAgZmxleDogMCAxIDM1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC00MCB7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDQwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNDAge1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNDUge1xcbiAgICBtaW4td2lkdGg6IDQ1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTUwIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgICAgZmxleDogMCAxIDUwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC01NSB7XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDU1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNTUge1xcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNjAge1xcbiAgICBtaW4td2lkdGg6IDYwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTYwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTY1IHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgICAgZmxleDogMCAxIDY1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC03MCB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDcwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNzAge1xcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNzUge1xcbiAgICBtaW4td2lkdGg6IDc1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTc1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTgwIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgICAgZmxleDogMCAxIDgwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC04NSB7XFxuICAgIG1pbi13aWR0aDogODUlO1xcbiAgICAtbXMtZmxleDogMCAxIDg1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtODUge1xcbiAgICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtOTAge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5MCU7XFxuICAgICAgICBmbGV4OiAwIDEgOTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTkwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTk1IHtcXG4gICAgbWluLXdpZHRoOiA5NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgICAgZmxleDogMCAxIDk1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0xMDAge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTEwMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG4ubWQtYWxpZ24teHNtYWxsLXN0YXJ0IHtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1hbGlnbi14c21hbGwtY2VudGVyIHtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi14c21hbGwtZW5kIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLWhpZGUteHNtYWxsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogOHB4IDA7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIHtcXG4gICAgcGFkZGluZzogNHB4IDA7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctbGVmdDogNzJweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1hdmF0YXIge1xcbiAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgIG1pbi13aWR0aDogMzJweDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWluLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS1leHBhbmQge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtZG91YmxlLWxpbmUgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA3NnB4O1xcbn1cXG4ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDg4cHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1hdmF0YXIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1saXN0IC5tZC1zdWJoZWFkZXIubWQtaW5zZXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XFxufVxcbi5tZC1saXN0ID4gLm1kLXN1YmhlYWRlcjpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLm1kLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciA+IC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyID4gLm1kLWljb246Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtYXZhdGFyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uIHtcXG4gICAgICBtYXJnaW46IDAgLTJweCAwIDA7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTJweCAwIDE2cHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtZGl2aWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbixcXG4gIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbjpmaXJzdC1vZi10eXBlICsgKixcXG4gICAgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LW9mLXR5cGUgKyAqIHtcXG4gICAgICAtbXMtZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQge1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmUsIC5tZC1saXN0LWl0ZW0tZXhwYW5kOmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmJlZm9yZSwgLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpsYXN0LW9mLXR5cGU6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZSA+IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWV4cGFuZC1pbmRpY2F0b3Ige1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmUgPiAubWQtbGlzdC1leHBhbmQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgPiAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciA+IC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtZXhwYW5zaW9uLWluZGljYXRvcixcXG4gIC5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyLFxcbiAgLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWljb24ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbiAgICB3aWxsLWNoYW5nZTogbWFyZ2luLWJvdHRvbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQubWQtdHJhbnNpdGlvbi1vZmYge1xcbiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIC5tZC1saXN0IHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbn1cXG4ubWQtbGlzdC10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMiksXFxuICAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLW1lbnUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubWQtbWVudS1jb250ZW50IHtcXG4gIHdpZHRoOiAxNjhweDtcXG4gIG1pbi13aWR0aDogODRweDtcXG4gIG1heC13aWR0aDogMzkycHg7XFxuICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEyMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjg1KSB0cmFuc2xhdGVaKDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgb3BhY2l0eSAwLjI1cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSwgbWFyZ2luIDAuMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMiksIHRyYW5zZm9ybSAwcyAwLjI1cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHksIHdpZHRoO1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMTFweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLThweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTEge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTIge1xcbiAgICB3aWR0aDogMTEycHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0zIHtcXG4gICAgd2lkdGg6IDE2OHB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNCB7XFxuICAgIHdpZHRoOiAyMjRweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTUge1xcbiAgICB3aWR0aDogMjgwcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02IHtcXG4gICAgd2lkdGg6IDMzNnB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNyB7XFxuICAgIHdpZHRoOiAzOTJweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBvcGFjaXR5IDAuMzVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCB0cmFuc2Zvcm0gMC4yNXMgMC4wNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0IHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLW1lbnUtY29udGVudCAubWQtbGlzdCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLW1lbnUtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxufVxcbi5tZC1tZW51LWl0ZW1bZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXByb2dyZXNzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjayB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3JlLCAubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMi4zcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1pbmRldGVybWluYXRlLXNob3J0IDIuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtZW50ZXIsIC5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1sZWF2ZS1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtZW50ZXItYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgdHJhbnNsYXRlWigwKTtcXG59XFxuLm1kLXByb2dyZXNzLXRyYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcy1pbmRldGVybWluYXRlIHtcXG4wJSB7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgICBsZWZ0OiAtMzUlO1xcbn1cXG42MCUge1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxufVxcbjEwMCUge1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWluZGV0ZXJtaW5hdGUtc2hvcnQge1xcbjAlIHtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IC0yMDAlO1xcbn1cXG42MCUge1xcbiAgICByaWdodDogLTglO1xcbiAgICBsZWZ0OiAxMDclO1xcbn1cXG4xMDAlIHtcXG4gICAgcmlnaHQ6IC04JTtcXG4gICAgbGVmdDogMTA3JTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXJhZGlvIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAzcHg7XFxuICAgICAgcmlnaHQ6IDNweDtcXG4gICAgICBib3R0b206IDNweDtcXG4gICAgICBsZWZ0OiAzcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAuMzgsIDAuMzgsIDEpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgaW5wdXQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICB0b3A6IC0xNnB4O1xcbiAgICAgIHJpZ2h0OiAtMTZweDtcXG4gICAgICBib3R0b206IC0xNnB4O1xcbiAgICAgIGxlZnQ6IC0xNnB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7XFxuICAgICAgICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1sYWJlbCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtcmFkaW8ubWQtY2hlY2tlZCAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMjhweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXNlbGVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tZC1zZWxlY3Q6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKDAuNDUpIHNjYWxlWCgwLjg1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNUJDXFxcIjtcXG59XFxuLm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51IHtcXG4gICAgdG9wOiAtOHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm0sIHRvcDtcXG59XFxuLm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51ID4gKiB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xcztcXG59XFxuLm1kLXNlbGVjdC5tZC1kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLWRyYWc6IG5vbmU7XFxufVxcbi5tZC1zZWxlY3Qgc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1zZWxlY3QgLm1kLW1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXIge1xcbiAgICBjb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAwLjg3KTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1kLXNlbGVjdCAubWQtc3ViaGVhZGVyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyNTZweDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQgLm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveC1sYWJlbCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1zaWRlbmF2Lm1kLWxlZnQgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtMTAwJSwgMCwgMCk7XFxufVxcbi5tZC1zaWRlbmF2Lm1kLXJpZ2h0IC5tZC1zaWRlbmF2LWNvbnRlbnQge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDEwMCUsIDAsIDApO1xcbn1cXG4ubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1jb250ZW50LFxcbi5tZC1zaWRlbmF2Lm1kLWZpeGVkIC5tZC1zaWRlbmF2LWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLm1kLXNpZGVuYXYgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICB3aWR0aDogMzA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG4ubWQtc2lkZW5hdiAubWQtYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbn1cXG4ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwLCAwKTtcXG59XFxuLm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBJbWFnZSBhc3BlY3QgcmF0aW8gY2FsY3VsYXRvciAqL1xcbi8qIFJlc3BvbnNpdmUgYnJlYWtwb2ludHMgKi9cXG4ubWQtc25hY2tiYXIge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTIwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4tdG9wLCBtYXJnaW4tYm90dG9tO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodCB7XFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0IHtcXG4gICAgdG9wOiAwO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciAubWQtc25hY2tiYXItY29udGFpbmVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0IC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCAubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIGNhbGMoLTEwMCUgLSAyNHB4KSwgMCk7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBib3R0b206IDA7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyIC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1sZWZ0IC5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgY2FsYygxMDAlICsgMjRweCksIDApO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtYWN0aXZlIC5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtYWN0aXZlIC5tZC1zbmFja2Jhci1jb250ZW50IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIDAuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1zbmFja2JhciB7XFxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcbn1cXG4ubWQtc25hY2tiYXIgLm1kLXNuYWNrYmFyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcbi5tZC1zbmFja2JhciAubWQtYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA2NHB4O1xcbiAgICBtYXJnaW46IC04cHggLTE2cHg7XFxufVxcbi5tZC1zbmFja2JhciAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cXG4ubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAyODhweDtcXG4gIG1heC13aWR0aDogNTY4cHg7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMTRweCAyNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtdG9wLXJpZ2h0IC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LXRvcC1yaWdodCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNDhweCwgMCk7XFxufVxcbn1cXG4ubWQtaGFzLXRvYXN0LXRvcC1jZW50ZXIgLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC01MCUsIDY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LXRvcC1jZW50ZXIgLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCA0OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtdG9wLWxlZnQgLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA2OHB4LCAwKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA0OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtYm90dG9tLXJpZ2h0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC02OHB4LCAwKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLWhhcy10b2FzdC1ib3R0b20tcmlnaHQgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTUwJSwgLTY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1jZW50ZXIgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCAtNDhweCwgMCk7XFxufVxcbn1cXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00OHB4LCAwKTtcXG59XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0LFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNDRweCwgMCk7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCxcXG4gIC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlcixcXG4gIC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00NHB4LCAwKTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXNwaW5uZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbn1cXG4ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLWRyYXcge1xcbiAgICBhbmltYXRpb246IHNwaW5uZXItcm90YXRlIDEuOXMgbGluZWFyIGluZmluaXRlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLXBhdGgge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyLCAyMDA7XFxuICAgIGFuaW1hdGlvbjogc3Bpbm5lci1kYXNoIDEuNDI1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuLm1kLXNwaW5uZXIubWQtc3Bpbm5lci1sZWF2ZS1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlWigwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuLm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZSAubWQtc3Bpbm5lci1kcmF3IHtcXG4gICAgICBhbmltYXRpb246IHNwaW5uZXItaW5pdGlhbC1yb3RhdGUgMS45OHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgZm9yd2FyZHM7XFxufVxcbi5tZC1zcGlubmVyLWRyYXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG59XFxuLm1kLXNwaW5uZXItcGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0ZSB7XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZVooMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItaW5pdGlhbC1yb3RhdGUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4yMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzcGlubmVyLWRhc2gge1xcbjAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMiwgMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG59XFxuNTAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xcbn1cXG4xMDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXN1YmhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc3dpdGNoIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzNHB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC10aHVtYiB7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgaW5wdXQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIHRvcDogLTE2cHg7XFxuICAgICAgcmlnaHQ6IC0xNnB4O1xcbiAgICAgIGJvdHRvbTogLTE2cHg7XFxuICAgICAgbGVmdDogLTE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUge1xcbiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXIge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXI6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5tZC1zd2l0Y2gubWQtZHJhZ2dpbmcgLm1kLXN3aXRjaC10aHVtYiB7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG4ubWQtc3dpdGNoLm1kLWRpc2FibGVkIC5tZC1zd2l0Y2gtdGh1bWIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10YWJsZSB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC10YWJsZS1jZWxsLFxcbiAgLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyLFxcbiAgLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdGFibGUgdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93IHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XFxufVxcbi5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93Lm1kLXNlbGVjdGVkIC5tZC10YWJsZS1jZWxsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG4ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdzpob3ZlciAubWQtdGFibGUtY2VsbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHQge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZC5tZC1udW1lcmljIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBtaW4td2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bm90KC5tZC1zb3J0YWJsZS1pY29uKSB7XFxuICAgICAgICBtYXJnaW46IDAgNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgcGFkZGluZzogMTRweCAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLXRleHQge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpmaXJzdC1vZi10eXBlIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBsZWZ0OiBhdXRvO1xcbiAgICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyLCAubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXIgLm1kLXNvcnRhYmxlLWljb24sIC5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbiB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpYyB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciB7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLWhhcy1hY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nOiA2cHggMzJweCA2cHggMjRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b24ge1xcbiAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgIG1pbi13aWR0aDogMzZweDtcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgbWluLWhlaWdodDogMzZweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW46IDAgLTEwcHggMCAwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiAubWQtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgIG1pbi13aWR0aDogMThweDtcXG4gICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiArIC5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcixcXG4gICAgLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gKyAubWQtdGFibGUtaGVhZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMThweDtcXG4gICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgICAgIHRvcDogLTFweDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC1zZWxlY3Qge1xcbiAgICBtaW4td2lkdGg6IDg0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtc2VsZWN0LXZhbHVlLFxcbiAgLm1kLXRhYmxlIC5tZC1vcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC10YWJsZS1lZGl0LXRyaWdnZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC10YWJsZS1lZGl0LXRyaWdnZXIubWQtZWRpdGVkIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMjRweCAycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDI0cHg7XFxuICB6LWluZGV4OiA2MDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgbWF4LWhlaWdodCAwcyAwLjVzO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtOHB4LCAwKTtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoIzAwMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cubWQtbGFyZ2Uge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMnB4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQge1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVyIHtcXG4gICAgZm9udC1zaXplOiAxMy41cHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1idXR0b24ge1xcbiAgICBtaW4td2lkdGg6IDY0cHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdG9vbGJhciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRpdGxlIHtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3VzIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdCB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICAgIG1hcmdpbjogMCAzMnB4O1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0OmFmdGVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZSB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b25bZGlzYWJsZWRdIC5tZC1pY29uIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG59XFxuLm1kLXBhZ2luYXRpb24tc2VsZWN0Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5tZC1wYWdpbmF0aW9uLXNlbGVjdCAubWQtbGlzdC1pdGVtLWhvbGRlciB7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyLm1kLWFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKCMwMDApO1xcbn1cXG4ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlciAubWQtY291bnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtdGFicyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXRhYnMubWQtdHJhbnNpdGlvbi1vZmYgKiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLXRhYnMubWQtZHluYW1pYy1oZWlnaHQgLm1kLXRhYnMtY29udGVudCB7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIC5tZC1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtY2VudGVyZWQge1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtZml4ZWQgLm1kLXRhYi1oZWFkZXIge1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0IHtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaGVhZGVyIHtcXG4gICAgbWluLXdpZHRoOiA3MnB4O1xcbiAgICBtYXgtd2lkdGg6IDI2NHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIubWQtZGlzYWJsZWQge1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yIHtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1yaWdodCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSksIHJpZ2h0IDAuMTVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tbGVmdCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpLCBsZWZ0IDAuMTVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA5OTk5ZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYiB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtdG9vbGJhciB7XFxuICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtdG9vbGJhci5tZC1kZW5zZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWRlbnNlLm1kLW1lZGl1bSB7XFxuICAgICAgbWluLWhlaWdodDogNzJweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbGFyZ2Uge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDk2cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWRlbnNlIC5tZC10b29sYmFyLWNvbnRhaW5lciB7XFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1tZWRpdW0ge1xcbiAgICBtaW4taGVpZ2h0OiA4OHB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1tZWRpdW0gLm1kLXRvb2xiYXItY29udGFpbmVyOm50aC1jaGlsZCgyKSAubWQtdGl0bGU6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1sYXJnZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEyOHB4O1xcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGluaGVyaXQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBpbmhlcml0O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTY0cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWxpc3QtaXRlbS1jb250YWluZXI6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbn1cXG4ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3Qge1xcbiAgICAgIG1hcmdpbjogMTZweCAwIDhweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0IC5tZC1hdmF0YXIgKyAubWQtYXZhdGFyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIgPiAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZC10b29sYmFyID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5tZC10b29sYmFyID4gLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpOm5vdCgubWQtaWNvbi1idXR0b24pOm5vdCgubWQtZmFiKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLWxpc3Qge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgLThweDtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10b29sdGlwIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwiTm90byBTYW5zXFxcIiwgTm90bywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbn1cXG4ubWQtdG9vbHRpcDpub3QoLm1kLWFjdGl2ZSkge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3Age1xcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgOHB4KTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AubWQtYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOHB4LCA1MCUpO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0Lm1kLWFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ge1xcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtOHB4KTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ubWQtYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDUwJSk7XFxufVxcbi5tZC10b29sdGlwLm1kLXRvb2x0aXAtbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXdoaXRlZnJhbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yZHAge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTNkcCB7XFxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNmRwIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTdkcCB7XFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLThkcCB7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTlkcCB7XFxuICBib3gtc2hhZG93OiAwIDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTEwZHAge1xcbiAgYm94LXNoYWRvdzogMCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTFkcCB7XFxuICBib3gtc2hhZG93OiAwIDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xMmRwIHtcXG4gIGJveC1zaGFkb3c6IDAgN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTEzZHAge1xcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTRkcCB7XFxuICBib3gtc2hhZG93OiAwIDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xNWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE2ZHAge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE3ZHAge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE4ZHAge1xcbiAgYm94LXNoYWRvdzogMCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE5ZHAge1xcbiAgYm94LXNoYWRvdzogMCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTIwZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yMWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMjJkcCB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTIzZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yNGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dnVlLW1hdGVyaWFsLmNzcy5tYXAqL1wiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWIxMjBlYmY2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvQXBwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJtZC1yb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudCBwYWdlLXZpZXdcIj5cbiAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICAgPG1kLWRpYWxvZy1hbGVydCA6bWQtdGl0bGU9XCJkaWFsb2cudGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiZGlhbG9nLmNvbnRlbnRcIiByZWY9XCJtb2RhbERpYWxvZ1wiPlxuICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxuICAgIDxtZC1kaWFsb2ctY29uZmlybSA6bWQtdGl0bGU9XCJjb25maXJtLnRpdGxlXCIgOm1kLWNvbnRlbnQtaHRtbD1cImNvbmZpcm0uY29udGVudFwiIDptZC1vay10ZXh0PVwiY29uZmlybS5va1wiIDptZC1jYW5jZWwtdGV4dD1cImNvbmZpcm0uY2FuY2VsXCJcbiAgICAgIEBjbG9zZT1cIm9uQ29uZmlybUNsb3NlXCIgcmVmPVwiY29uZmlybURpYWxvZ1wiPlxuICAgICAgPC9tZC1kaWFsb2ctY29uZmlybT5cbiAgICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cInByb21wdC50aXRsZVwiIDptZC1vay10ZXh0PVwicHJvbXB0Lm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwicHJvbXB0LmNhbmNlbFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cInByb21wdC5wbGFjZWhvbGRlclwiXG4gICAgICAgIEBjbG9zZT1cIm9uUHJvbXB0Q2xvc2VcIiB2LW1vZGVsPVwicHJvbXB0LnJlc3BcIiByZWY9XCJwcm9tcHREaWFsb2dcIj5cbiAgICAgICAgPC9tZC1kaWFsb2ctcHJvbXB0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhcidcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1OiB7XG4gICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJ1xuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiB7XG4gICAgICAgICAgdGl0bGU6ICcgJyxcbiAgICAgICAgICBjb250ZW50OiAnICcsXG4gICAgICAgICAgb2s6ICdPSycsXG4gICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgb2s6ICdPSycsXG4gICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgLy8gbWF4bGVuZ3RoOiAwLFxuICAgICAgICAgIHJlc3A6ICcnLFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBsb2dnZWRJbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMudS5rZXkpIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAobm93TG9nZ2VkSW4pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93TG9nZ2VkSW4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1JywgSlNPTi5zdHJpbmdpZnkodGhpcy51KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFRvb2xiYXJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHNob3dQb3B1cDogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIHRoaXMuZGlhbG9nLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy4kcmVmcy5tb2RhbERpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBzaG93Q29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYiwgeSwgbikge1xuICAgICAgICB5ID0geSB8fCAnT0snXG4gICAgICAgIG4gPSBuIHx8ICdDYW5jZWwnXG4gICAgICAgIHRoaXMuY29uZmlybS5vayA9IHlcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbmNlbCA9IG5cbiAgICAgICAgdGhpcy5jb25maXJtLmNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIHRoaXMuY29uZmlybS50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IGNiXG4gICAgICAgIHRoaXMuJHJlZnMuY29uZmlybURpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBzaG93UHJvbXB0OiBmdW5jdGlvbiAodGl0bGUsIHBsYWNlaG9sZGVyLCBjYikge1xuICAgICAgICB0aGlzLnByb21wdC50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMucHJvbXB0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sgPSBjYlxuICAgICAgICB0aGlzLiRyZWZzLnByb21wdERpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBvblByb21wdENsb3NlOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrKHRoaXMucHJvbXB0LnJlc3ApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb21wdC5yZXNwID0gJydcbiAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sgPSBudWxsXG4gICAgICB9LFxuICAgICAgb25Db25maXJtQ2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrKHJlc3VsdCA9PSAnb2snKVxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2sgPSBudWxsXG4gICAgICB9LFxuICAgICAgLy8gdXRpbGl0aWVzXG4gICAgICBodW1hbkZpbGVTaXplOiBmdW5jdGlvbiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHRocmVzaCA9IDEwMjRcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ5dGVzKSA8IHRocmVzaCkge1xuICAgICAgICAgIHJldHVybiBieXRlcyArICcgQidcbiAgICAgICAgfVxuICAgICAgICB2YXIgdW5pdHMgPSBbJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXVxuICAgICAgICB2YXIgdSA9IC0xXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBieXRlcyAvPSB0aHJlc2hcbiAgICAgICAgICAgICsrdVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgyKSArICcgJyArIHVuaXRzW3VdXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc2F2ZWRVID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3UnKVxuICAgICAgaWYgKHNhdmVkVSkge1xuICAgICAgICB0aGlzLnUgPSBKU09OLnBhcnNlKHNhdmVkVSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG4gIFxuICAuaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuc3BhY2UtdiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgXG4gIC5zZXAtYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT8zOTQ2MDlkMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTFlMjNhZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0zMTFlMjNhZVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2xiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICA8bWQtdG9vbGJhcj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljaz1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XG4gICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBtZC1tZW51LXRyaWdnZXI+XG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3VudC11c2VybmFtZVwiPlxuICAgICAgICAgICAgICB7eyAkcm9vdC51Lm5hbWUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL3AnKVwiPlxuICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy91JylcIj5cbiAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy9maWxlcycpXCI+XG4gICAgICAgICAgICAgIE15IEZpbGVzXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxuICAgICAgICA8L21kLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiB2LW9uOmNsaWNrPVwidmlzaXRHaXRIdWJcIj5cbiAgICAgICAgICA8bWQtaWNvbj5mYXZvcml0ZTwvbWQtaWNvbj5cbiAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XCJtYWluLXNpZGVuYXYgbWQtbGVmdCBtZC1maXhlZFwiIHJlZj1cImxlZnRTaWRlbmF2XCI+XG4gICAgICA8bWQtdG9vbGJhciBjbGFzcz1cIm1kLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlXCI+e3sgYXBwTmFtZSB9fTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXItY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1saW5rc1wiPlxuICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwibWQtZGVuc2VcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvcFwiPlByb2ZpbGU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvdVwiPkRhc2hib2FyZDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImNsb3NlU2lkZW5hdlwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9maWxlc1wiPkZpbGVzPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIiB2LWVsc2U+XG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9cIj5Ib21lPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XG4gICAgICAgICAgICAgICAgPG1kLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtaW5zZXRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtc2lkZW5hdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdmlzaXRHaXRIdWI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWQnKVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZUxlZnRTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi5jbG9zZSgpXG4gICAgICB9LFxuICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QudS5rZXkgPSAnJ1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXG4gICAgICB9LFxuICAgICAgcm91dGVyR286IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHUpXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXG4gICAgICAvLyB0aGVuIHJlZ2lzdGVyIGhvb2tcbiAgICAgIHRoaXMuJHJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcbiAgICAgICAgbmV4dCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuYWNjb3VudC11c2VybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2xiYXIudnVlP2RiOTUzNWQ4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZUxlZnRTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibWVudVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LmxvZ2dlZEluKSA/IF9jKCdkaXYnLCBbX2MoJ21kLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFjY291bnQtdXNlcm5hbWVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIlxcbiAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1jb250ZW50JywgW19jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3AnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjY291bnRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3UnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIERhc2hib2FyZFxcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvZmlsZXMnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIE15IEZpbGVzXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5sb2dvdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBMb2cgT3V0XFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnZpc2l0R2l0SHViXG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiZmF2b3JpdGVcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXNpZGVuYXYnLCB7XG4gICAgcmVmOiBcImxlZnRTaWRlbmF2XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWFpbi1zaWRlbmF2IG1kLWxlZnQgbWQtZml4ZWRcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtbGFyZ2VcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10b29sYmFyLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYXBwTmFtZSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpZGViYXItbGlua3NcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtZGVuc2VcIlxuICB9LCBbKF92bS4kcm9vdC5sb2dnZWRJbikgPyBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3BcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlByb2ZpbGVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvdVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGFzaGJvYXJkXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2ZpbGVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGaWxlc1wiKV0pXSwgMSldIDogX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9hYm91dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWJvdXRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdzcGFuJywgW192bS5fdihcIlN1cHBvcnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtZXhwYW5kJywgW19jKCdtZC1saXN0JywgW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIixcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSwgMildLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMTFlMjNhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCJcbiAgfSwgW19jKCd0b29sYmFyJyksIF92bS5fdihcIiBcIiksIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtZC1yb3V0ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFnZS1jb250ZW50IHBhZ2Utdmlld1wiXG4gIH0sIFtfYygncm91dGVyLXZpZXcnKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1hbGVydCcsIHtcbiAgICByZWY6IFwibW9kYWxEaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0uZGlhbG9nLnRpdGxlLFxuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmRpYWxvZy5jb250ZW50XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1jb25maXJtJywge1xuICAgIHJlZjogXCJjb25maXJtRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmNvbmZpcm0udGl0bGUsXG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uY29uZmlybS5jb250ZW50LFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5jb25maXJtLm9rLFxuICAgICAgXCJtZC1jYW5jZWwtdGV4dFwiOiBfdm0uY29uZmlybS5jYW5jZWxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5vbkNvbmZpcm1DbG9zZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctcHJvbXB0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnByb21wdC5yZXNwKSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvbXB0LnJlc3BcIlxuICAgIH1dLFxuICAgIHJlZjogXCJwcm9tcHREaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0ucHJvbXB0LnRpdGxlLFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5wcm9tcHQub2ssXG4gICAgICBcIm1kLWNhbmNlbC10ZXh0XCI6IF92bS5wcm9tcHQuY2FuY2VsLFxuICAgICAgXCJtZC1pbnB1dC1wbGFjZWhvbGRlclwiOiBfdm0ucHJvbXB0LnBsYWNlaG9sZGVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb21wdC5yZXNwKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogX3ZtLm9uUHJvbXB0Q2xvc2UsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucHJvbXB0LnJlc3AgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjEyMGViZjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==