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
	  path: '/d/:id',
	  name: 'download',
	  component: _download2.default
	}, {
	  path: '/d/:id/:pass',
	  name: 'download (with pass)',
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
	  }, [_c('md-card', [_c('md-card-header', [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("Upload Files")]), _vm._v(" "), _c('div', {
	    staticClass: "md-subhead"
	  }, [_vm._v("Drag and drop or click")])]), _vm._v(" "), _c('div', {
	    staticClass: "upload-area-padding",
	    on: {
	      "click": _vm.browseForFiles
	    }
	  }), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
	    staticClass: "md-fab",
	    on: {
	      "click": _vm.browseForFiles
	    }
	  }, [_c('md-icon', [_vm._v("cloud_upload")])], 1)], 1), _vm._v(" "), _c('md-card-content', [_c('div', {
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
	  }, [_vm._v("Clear All")]) : _vm._e()], 1)])], 1), _vm._v(" "), _c('input', {
	    ref: "browse",
	    staticClass: "invisible",
	    attrs: {
	      "type": "file",
	      "multiple": ""
	    },
	    on: {
	      "change": _vm.onFilesUploaded
	    }
	  })], 1)])])])])
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
	        var dlPage = window.location.href.split("#")[0] + '#/d/' + f.fileId + '!' + btoa(res.data);
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
	  }, [_c('md-card', [_c('md-card-header', [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("All My Files")]), _vm._v(" "), _c('div', {
	    staticClass: "md-subtitle"
	  }, [_vm._v("Files")])]), _vm._v(" "), _c('md-card-content', [(_vm.loadFinished) ? _c('div', [(_vm.noFiles) ? _c('div', [_c('p', [_vm._v("No Files")])]) : _vm._e(), _vm._v(" "), _c('md-list', {
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
	  }), _vm._v(" "), _c('h5', [_vm._v("Retrieving Data")])], 1)])], 1)], 1)])])])])
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
	exports.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", ""]);
	
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
/* 110 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('toolbar'), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-router"
	    }
	  }, [_c('router-view')], 1), _vm._v(" "), _c('md-dialog-alert', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTkwMmI2ZDFhOTc5ODZjOWJhMGMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlP2Q3OGQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlP2Q0Y2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vL2xhbmRpbmcudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT82ZGYzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlPzk4NWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/OGMxNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/MzE4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/NTdkMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/MzE2NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/MjZiNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT84N2Q0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlIiwid2VicGFjazovLy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlP2M1NmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/Njg3NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlP2E1YTMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/ZTVhZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/OGE5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9hMWVlIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOzs7O0FBRUE7Ozs7QUFHQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDdEdBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTkwMmI2ZDFhOTc5ODZjOWJhMGMiLCIvLyBUaGUgVnVlIGJ1aWxkIHZlcnNpb24gdG8gbG9hZCB3aXRoIHRoZSBgaW1wb3J0YCBjb21tYW5kXG4vLyAocnVudGltZS1vbmx5IG9yIHN0YW5kYWxvbmUpIGhhcyBiZWVuIHNldCBpbiB3ZWJwYWNrLmJhc2UuY29uZiB3aXRoIGFuIGFsaWFzLlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG4vLyBSb3V0ZXNcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIFN0eWxlcy9mb250c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcydcblxuLy8gbWF0ZXJpYWxcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tICd2dWUtbWF0ZXJpYWwnXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXG5cbi8vIHBsdWdpbnNcblZ1ZS51c2UoVnVlUm91dGVyKVxuVnVlLnVzZShWdWVNYXRlcmlhbClcblxuLy8gcm91dGVyIGNvbmZpZ1xuXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIHJvdXRlc1xufSlcblxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxuXG4gIGlmIChtYWluQ29udGVudCkge1xuICAgIG1haW5Db250ZW50LnNjcm9sbFRvcCA9IDBcbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnJlZ2lzdGVyVGhlbWUoe1xuICBhcHB0aGVtZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnY3lhbicsXG4gICAgICBodWU6IDcwMFxuICAgIH0sXG4gICAgYWNjZW50OiB7XG4gICAgICBjb2xvcjogJ2xpZ2h0LWJsdWUnLFxuICAgICAgaHVlOiA2MDBcbiAgICB9XG4gIH1cbn0pXG5cblZ1ZS5tYXRlcmlhbC5zZXRDdXJyZW50VGhlbWUoJ2FwcHRoZW1lJylcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxubGV0IFlBU0FwcCA9IFZ1ZS5jb21wb25lbnQoJ2FwcCcsIEFwcClcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IGFwcCA9IG5ldyBZQVNBcHAoe1xuICBlbDogJyNhcHAnLFxuICByb3V0ZXJcbn0pXG5cbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLy8gbmV3IFZ1ZSh7XG4vLyAgIGVsOiAnI2FwcCcsXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXG4vLyAgIGNvbXBvbmVudHM6IHsgQXBwIH1cbi8vIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9sYXlvdXRzL25vdEZvdW5kJ1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9sYXlvdXRzL2xhbmRpbmcnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9sYXlvdXRzL2Fib3V0J1xuaW1wb3J0IERvd25sb2FkIGZyb20gJy4vbGF5b3V0cy9kb3dubG9hZCdcblxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2xheW91dHMvZGFzaGJvYXJkJ1xuaW1wb3J0IE15RmlsZXMgZnJvbSAnLi9sYXlvdXRzL215ZmlsZXMnXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL2xheW91dHMvcHJvZmlsZSdcblxuY29uc3QgbWFpbiA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnbGFuZGluZycsXG4gICAgY29tcG9uZW50OiBMYW5kaW5nXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2hvbWUnLFxuICAgIHJlZGlyZWN0OiAnLydcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgIG5hbWU6ICdBYm91dCcsXG4gICAgY29tcG9uZW50OiBBYm91dFxuICB9LFxuICB7XG4gICAgcGF0aDogJy91JyxcbiAgICBuYW1lOiAnZGFzaGJvYXJkJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9maWxlcycsXG4gICAgbmFtZTogJ215IGZpbGVzJyxcbiAgICBjb21wb25lbnQ6IE15RmlsZXNcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcCcsXG4gICAgbmFtZTogJ3Byb2ZpbGUnLFxuICAgIGNvbXBvbmVudDogUHJvZmlsZVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9kLzppZCcsXG4gICAgbmFtZTogJ2Rvd25sb2FkJyxcbiAgICBjb21wb25lbnQ6IERvd25sb2FkXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2QvOmlkLzpwYXNzJyxcbiAgICBuYW1lOiAnZG93bmxvYWQgKHdpdGggcGFzcyknLFxuICAgIGNvbXBvbmVudDogRG93bmxvYWRcbiAgfVxuXVxuXG5jb25zdCBlcnJvciA9IFtcbiAge1xuICAgIHBhdGg6ICcqJyxcbiAgICBuYW1lOiAnZXJyb3InLFxuICAgIGNvbXBvbmVudDogTm90Rm91bmRcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBbXS5jb25jYXQobWFpbiwgZXJyb3IpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTdkMWRhZTEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm90Rm91bmQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi01N2QxZGFlMVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5vdEZvdW5kLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5vdC1mb3VuZFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3QtZm91bmQtY29udGVudFwiPlxuICAgICAgICA8aDE+NDA0LiBUaGF0J3MgYW4gZXJyb3IuPC9oMT5cbiAgICAgICAgPGgzPlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRyb1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm90Rm91bmQudnVlPzI3ODExZWJmIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGM3MWFlNDIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00YzcxYWU0MlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGludHJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImludHJvXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+e3sgdmlld1RpdGxlIHx8IGFwcFRpdGxlIH19PC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsndmlld1RpdGxlJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFwcFRpdGxlOiAnUGVuZ3VpblVwbG9hZCcsXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuICAuaW50cm8ge1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFwcC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW50cm8udnVlPzBmMjFkOTYyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW50cm9cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFwcC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS52aWV3VGl0bGUgfHwgX3ZtLmFwcFRpdGxlKSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGM3MWFlNDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImFwcFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImludHJvLWFyZWFcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidHdlbHZlIGNvbHVtbnNcIlxuICB9LCBbX2MoJ2ludHJvJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmQtY29udGVudFwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiNDA0LiBUaGF0J3MgYW4gZXJyb3IuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIFtfdm0uX3YoXCJUaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC5cIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTdkMWRhZTEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xhbmRpbmcudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04Njk2ZjJkNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL2xhbmRpbmcudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi04Njk2ZjJkNlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxhbmRpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBpbnRyby1hcmVhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgPGxvZ2luPjwvbG9naW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXG4gIGltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEludHJvLFxuICAgICAgTG9naW4sXG4gICAgICBkZXZDcmVkaXRzXG4gICAgfSxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICBuZXh0KHZtID0+IHtcbiAgICAgICAgaWYgKHZtLiRyb290LmxvZ2dlZEluKSB7XG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvdScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnNocmluay1sYXlvdXQge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cblxuICAuaW50cm8tYXJlYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmRpbmcudnVlPzA3NWE3Nzc5IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNTM1ZWMzYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0zNTM1ZWMzY1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRldkNyZWRpdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGV2LWNyZWRpdHNcIj5cbiAgICA8aDYgY2xhc3M9XCJjcmVkaXQtdGV4dFwiPk1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiIHRhcmdldD1cIl9ibGFua1wiPjB4RmlyZWJhbGw8L2E+IG9mIDxhIGhyZWY9XCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kZXYtY3JlZGl0cyB7XG4gICAgbWFyZ2luOiAyJTtcbiAgfVxuICBcbiAgaDYuY3JlZGl0LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldkNyZWRpdHMudnVlPzY1NDZmNjdiIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGV2LWNyZWRpdHNcIlxuICB9LCBbX2MoJ2g2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNyZWRpdC10ZXh0XCJcbiAgfSwgW192bS5fdihcIk1hZGUgYnkgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMHhGaXJlYmFsbFwiKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9pcmlkaXVtaW9uLnh5elwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklyaWRpdW1Jb24gU29mdHdhcmVcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNTM1ZWMzYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNmNWFlYjVjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtM2Y1YWViNWNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cbiAgICA8bWQtdGFicyBjbGFzcz1cIm1kLWFjY2VudFwiIHJlZj1cImF1dGhPcHRpb25UYWJzXCI+XG4gICAgICA8bWQtdGFiIGlkPVwidC1sb2dpblwiIG1kLWxhYmVsPVwiTG9nIEluXCI+XG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlMb2dpblwiPlxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJsb2dpbi51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJsb2dpbi5wYXNzd29yZFwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgbG9naW4uZXJyIH19PC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpbnZpc2libGVcIj48L2lucHV0PlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlMb2dpblwiIDpkaXNhYmxlZD1cIiFsb2dpbi5lXCI+TG9nIEluPC9tZC1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWQtdGFiPlxuXG4gICAgICA8bWQtdGFiIGlkPVwidC1zaWdudXBcIiBtZC1sYWJlbD1cIlNpZ24gVXBcIj5cbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeVJlZ2lzdGVyXCI+XG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cInJlZ2lzdGVyLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIG1kLWhhcy1wYXNzd29yZD5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5jb25maXJtXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPkludml0ZSBLZXkgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmludml0ZUtleVwiPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyZWdpc3Rlci5pYWNjZXB0XCI+SSBhY2NlcHQgdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyByZWdpc3Rlci5lcnIgfX08L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVJlZ2lzdGVyXCIgOmRpc2FibGVkPVwiIXJlZ2lzdGVyLmVcIj5TaWduIFVwPC9tZC1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWQtdGFiPlxuICAgIDwvbWQtdGFicz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbG9naW4nLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2dpbjoge1xuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgZXJyOiAnJyxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxuICAgICAgICAgIGludml0ZUtleTogJycsXG4gICAgICAgICAgZXJyOiAnJyxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdHJ5TG9naW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ubG9naW4uZSkgcmV0dXJuXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XG4gICAgICAgICAgdm0ubG9naW4uZXJyID0gJ2NyZWRlbnRpYWxzIGNhbm5vdCBiZSBlbXB0eSdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5sb2dpbi5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIGxvZ2luIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL2xvZ2luJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ubG9naW4ucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgLy8gdm0uJHJvb3QubG9nZ2VkSW4gPSB0cnVlXG4gICAgICAgICAgICAgIC8vIHB1c2ggdXNlciBpbmZvXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5uYW1lID0gcmVzcG9uc2UuZGF0YS51c2VyLnVzZXJuYW1lXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZtLiRyb290LnUubmFtZSlcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnaW52YWxpZCBsb2dpbiBjcmVkZW50aWFscydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGlmICghdm0ucmVnaXN0ZXIuZSkgcmV0dXJuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIudXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICd1c2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycy4gdGhpcyBpcyBhbHNvIHZhbGlkYXRlZCBvbiB0aGUgc2VydmVyJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLnJlZ2lzdGVyLnBhc3N3b3JkICE9PSB2bS5yZWdpc3Rlci5jb25maXJtKSB7XG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaCdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS5yZWdpc3Rlci5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIHJlZ2lzdGVyIHBvc3RcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xuICAgICAgICAgIHVzZXJuYW1lOiB2bS5yZWdpc3Rlci51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogdm0ucmVnaXN0ZXIucGFzc3dvcmQsXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcbiAgICAgICAgfSwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAvLyB0aGlzLiRyZWZzLmF1dGhPcHRpb25UYWJzLmNoYW5nZVRhYigndC1sb2dpbicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXG4gICAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuICAuaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/Njg0NTY1M2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luXCJcbiAgfSwgW19jKCdtZC10YWJzJywge1xuICAgIHJlZjogXCJhdXRoT3B0aW9uVGFic1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWFjY2VudFwiXG4gIH0sIFtfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1sb2dpblwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIkxvZyBJblwiXG4gICAgfVxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4udXNlcm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi51c2VybmFtZVwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2dpbi51c2VybmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9naW4udXNlcm5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9naW4ucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2dpbi5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubG9naW4uZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeUxvZ2luXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1zaWdudXBcIixcbiAgICAgIFwibWQtbGFiZWxcIjogXCJTaWduIFVwXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5jb25maXJtKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuY29uZmlybVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuY29uZmlybSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuY29uZmlybSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiSW52aXRlIEtleSAob3B0aW9uYWwpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pbnZpdGVLZXkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5pbnZpdGVLZXlcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaW52aXRlS2V5ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmlhY2NlcHRcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaWFjY2VwdCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlZ2lzdGVyLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5yZWdpc3Rlci5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5UmVnaXN0ZXJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaWduIFVwXCIpXSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZjVhZWI1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGludHJvLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdsb2dpbicpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg2OTZmMmQ2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjg2M2U2OGIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0yODYzZTY4YlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnRybyxcbiAgICBBYm91dFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKmZvbnQtd2VpZ2h0OiA2MDA7Ki9cbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlP2ZlOWZlOWJjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTFlZmQ4MzghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0xMWVmZDgzOFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0V2lkZ2V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFdpZGdldFwiPlxuICAgIDxoNT5BYm91dCB7eyBhcHBOYW1lIH19PC9oNT5cbiAgICA8cD5cbiAgICAgIFBlbmd1aW5VcGxvYWQgaXMgYSBzZWxmLWhvc3RhYmxlLCBmdWxseSBmZWF0dXJlZCB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIHVwbG9hZCBhbmQgc2hhcmUgZmlsZXMuXG4gICAgPC9wPlxuICAgIDxoNj5cbiAgICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiB7eyBhcHBWZXJzaW9uIH19XG4gICAgPC9oNj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogJ1Blbmd1aW5VcGxvYWQnLFxuICAgICAgICBhcHBWZXJzaW9uOiB3aW5kb3cuJGFwcFZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuYWJvdXRXaWRnZXQge1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbiAgXG4gIGg2LmNyZWRpdC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhYm91dFdpZGdldC52dWU/MzhmYjE4YjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFdpZGdldFwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQWJvdXQgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiXFxuICAgIFBlbmd1aW5VcGxvYWQgdmVyc2lvbiBcIiArIF92bS5fcyhfdm0uYXBwVmVyc2lvbikgKyBcIlxcbiAgXCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMWVmZDgzOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW50cm8tYXJlYVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtY29udGVudFwiXG4gIH0sIFtfYygnYWJvdXQnKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yODYzZTY4YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mMTkxYjMwYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kb3dubG9hZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWYxOTFiMzBjXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG93bmxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZG93bmxvYWQtYXJlYVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XG4gICAgICAgIDxpbnRybz48L2ludHJvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxuICAgICAgICA8ZG93bmxvYWRJdGVtIDppdGVtSWQ9XCIkcm91dGUucGFyYW1zLmlkXCIgOml0ZW1QYXNzPVwiJHJvdXRlLnBhcmFtcy5wYXNzXCI+PC9kb3dubG9hZEl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcbiAgaW1wb3J0IGRvd25sb2FkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2Rvd25sb2FkSXRlbSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIGRvd25sb2FkSXRlbSxcbiAgICAgIGRldkNyZWRpdHNcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuc2hyaW5rLWxheW91dCB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC5kb3dubG9hZC1hcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWQudnVlPzBmM2FkYjZjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWQ2YzNhMmQwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rvd25sb2FkSXRlbS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1kNmMzYTJkMFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRvd25sb2FkSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRvd25sb2FkLWl0ZW1cIj5cbiAgICA8bWQtY2FyZD5cblxuICAgICAgPG1kLWNhcmQtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5GaWxlIERvd25sb2FkPC9kaXY+XG4gICAgICA8L21kLWNhcmQtaGVhZGVyPlxuICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICA8bWQtY2FyZC1jb250ZW50PlxuICAgICAgICAgIDxtZC1zcGlubmVyIG1kLWluZGV0ZXJtaW5hdGU+PC9tZC1zcGlubmVyPlxuICAgICAgICAgIDxoNT5Mb2FkaW5nIEZpbGUgSW5mb3JtYXRpb248L2g1PlxuICAgICAgICA8L21kLWNhcmQtY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxtZC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPG1kLWljb24gbWQtdGhlbWU9XCJsaWdodC1ibHVlXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21kLWljb24+XG4gICAgICAgICAgPGg1Pnt7IGZpbGUubmFtZSB9fTwvaDU+XG4gICAgICAgICAgPHA+e3sgZmlsZS5zaXplVGV4dCB9fTwvcD5cbiAgICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDxtZC1jYXJkLWFjdGlvbnMgdi1pZj1cIiFlcnJvclwiPlxuICAgICAgICAgIDxtZC1idXR0b24gQGNsaWNrPVwiZG93bmxvYWRGaWxlXCI+XG4gICAgICAgICAgICA8bWQtaWNvbiB2LWlmPVwiZmlsZS5wYXNzLmxlbmd0aCA+IDBcIj5sb2NrPC9tZC1pY29uPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgPCEtLTxtZC1idXR0b24+Q29weSBMaW5rPC9tZC1idXR0b24+LS0+XG4gICAgICAgIDwvbWQtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC1jYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2l0ZW1JZCcsICdpdGVtUGFzcyddLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGZpbGU6IHtcbiAgICAgICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICAgICAgc2l6ZTogJ3JldHJpZXZpbmcgaW5mb3JtYXRpb24gZnJvbSBzZXJ2ZXInLFxuICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgIHBhc3M6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgY0l0ZW1QYXNzOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZG93bmxvYWRGaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZG93bmxvYWQvJyArIHRoaXMuZmlsZS5pZCArICh0aGlzLmZpbGUucGFzcyA/ICchJyArIHRoaXMuZmlsZS5wYXNzIDogJycpXG4gICAgICB9LFxuICAgICAgdXBkYXRlRmlsZUluZm86IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgc3VmZml4ID0ga2V5ID8gJyEnICsga2V5IDogJydcbiAgICAgICAgdm0uZmlsZS5pZCA9IHZtLml0ZW1JZFxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZWluZm8vJyArIHZtLmZpbGUuaWQgKyBzdWZmaXgsIGF4aW9zUmVxdWVzdENvbmZpZylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9IHJlc3BvbnNlLmRhdGEubmFtZVxuICAgICAgICAgICAgICB2bS5maWxlLnNpemVUZXh0ID0gcmVzcG9uc2UuZGF0YS5oclNpemVcbiAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICB2bS5maWxlLnBhc3MgPSBrZXlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgIC8vIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQcm9tcHQoJ0VudGVyIHBhc3N3b3JkJywgJ0ZpbGUgcGFzc3dvcmQnLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcbiAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSAnQWNjZXNzIERlbmllZCdcbiAgICAgICAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAvLyBmaWxlIG5vdCBmb3VuZFxuICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0ZpbGUgTm90IEZvdW5kJ1xuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1QYXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRmlsZUluZm8odGhpcy5jSXRlbVBhc3MpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRvd25sb2FkLWl0ZW0ge1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRvd25sb2FkSXRlbS52dWU/MGJlMGU4ZDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkb3dubG9hZC1pdGVtXCJcbiAgfSwgW19jKCdtZC1jYXJkJywgW19jKCdtZC1jYXJkLWhlYWRlcicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkZpbGUgRG93bmxvYWRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmxvYWRpbmcpID8gX2MoJ2RpdicsIFtfYygnbWQtY2FyZC1jb250ZW50JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJMb2FkaW5nIEZpbGUgSW5mb3JtYXRpb25cIildKV0sIDEpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1jYXJkLWNvbnRlbnQnLCBbX2MoJ21kLWljb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRoZW1lXCI6IFwibGlnaHQtYmx1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiaW5zZXJ0X2RyaXZlX2ZpbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1JywgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUuc2l6ZVRleHQpKV0pXSwgMSksIF92bS5fdihcIiBcIiksICghX3ZtLmVycm9yKSA/IF9jKCdtZC1jYXJkLWFjdGlvbnMnLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bmxvYWRGaWxlXG4gICAgfVxuICB9LCBbKF92bS5maWxlLnBhc3MubGVuZ3RoID4gMCkgPyBfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJsb2NrXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgRG93bmxvYWRcXG4gICAgICAgICAgXCIpXSldLCAxKV0sIDEpIDogX3ZtLl9lKCldLCAxKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDZjM2EyZDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgZG93bmxvYWQtYXJlYVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIlxuICB9LCBbX2MoJ2Rvd25sb2FkSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpdGVtSWRcIjogX3ZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICBcIml0ZW1QYXNzXCI6IF92bS4kcm91dGUucGFyYW1zLnBhc3NcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYxOTFiMzBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNmJhZWYxMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMzZiYWVmMTJcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkYXNoYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cbiAgICA8aW50cm8gdmlldy10aXRsZT1cIkRhc2hib2FyZFwiPjwvaW50cm8+XG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IGZpbGVVcGxvYWRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0J1xuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBmaWxlVXBsb2FkV2lkZ2V0LFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH0sXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzM1YTdmYjI0IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00ZmU5NDZjNCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00ZmU5NDZjNFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbGVVcGxvYWRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWQtd2lkZ2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0IHNlcC1iXCI+XG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiBAY2xpY2s9XCJ2aWV3TXlGaWxlc1wiPlZpZXcgYWxsIG15IGZpbGVzPC9tZC1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1oZXJlXCIgQGRyb3Auc3RvcC5wcmV2ZW50PVwiaGFuZGxlRHJhZ0Ryb3BVcGxvYWRcIiBAZHJhZ2VudGVyLnN0b3AucHJldmVudCBAZHJhZ2xlYXZlLnN0b3AucHJldmVudCBAZHJhZ292ZXIuc3RvcC5wcmV2ZW50PlxuICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwidGFyZ2V0XCI+RHJhZyBhbmQgZHJvcCBvciBjbGljayB0byB1cGxvYWQgZmlsZXM8L2E+LS0+XG4gICAgICAgICAgICA8bWQtY2FyZD5cbiAgICAgICAgICAgICAgPG1kLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10aXRsZVwiPlVwbG9hZCBGaWxlczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1zdWJoZWFkXCI+RHJhZyBhbmQgZHJvcCBvciBjbGljazwvZGl2PlxuICAgICAgICAgICAgICA8L21kLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWEtcGFkZGluZ1wiIEBjbGljaz1cImJyb3dzZUZvckZpbGVzXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bWQtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1mYWJcIiBAY2xpY2s9XCJicm93c2VGb3JGaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgPG1kLWljb24+Y2xvdWRfdXBsb2FkPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICAgICAgICA8L21kLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPG1kLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDwhLS08bWQtc3Bpbm5lciBtZC1zaXplPVwiNjBcIiA6bWQtcHJvZ3Jlc3M9XCJwcm9ncmVzc0luZGljYXRvci52YWx1ZVwiIGNsYXNzPVwibWQtd2FyblwiPjwvbWQtc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2dyZXNzTWVzc2FnZSB9fTwvcD4tLT5cbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLVVwbG9hZGluZyBmaWxlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cInByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwXCI+VXBsb2FkaW5nPC9tZC1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1mb3I9XCIocHJJbmQsIGl4KSBpbiBwcm9ncmVzc0luZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiB2LWlmPVwiIXBySW5kLmVycm9yXCI+Y2xvdWRfcXVldWU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1lbHNlPmVycm9yPC9tZC1pY29uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBwckluZC5uYW1lIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhcHJJbmQuZXJyb3JcIj4ge3sgKHBySW5kLnZhbHVlIDwgMTAwKSA/IGBVcGxvYWRpbmcuLi4gKCR7cHJJbmQudmFsdWV9JSlgIDogJ1VwbG9hZGVkLCBQcm9jZXNzaW5nLi4uJyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT4ge3sgJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJjYW5jZWxVcGxvYWQocHJJbmQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5jYW5jZWw8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfdXBsb2FkPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLVVwbG9hZCBjb21wbGV0ZWQgZmlsZXMtLT5cbiAgICAgICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiPkNvbXBsZXRlZDwvbWQtc3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVwiKGNtcGxGaWxlLCBpeCkgaW4gY29tcGxldGVkRmlsZXNcIiBAY2xpY2s9XCJ2aXNpdFVybChjbXBsRmlsZS5kb3dubG9hZFBhZ2UpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgY21wbEZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVwbG9hZCBDb21wbGV0ZSE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmRvbmU8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gdi1pZj1cImNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDBcIiBAY2xpY2s9XCJjb21wbGV0ZWRGaWxlcyA9IFtdXCI+Q2xlYXIgQWxsPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbWQtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPC9tZC1jYXJkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnZpc2libGVcIiByZWY9XCJicm93c2VcIiBAY2hhbmdlPVwib25GaWxlc1VwbG9hZGVkXCIgbXVsdGlwbGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9ncmVzc0luZGljYXRvcnM6IFtdLFxuICAgICAgICAvKiBzY2hlbWE6XG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogbnVtYmVyIFswLTEwMF0sXG4gICAgICAgICAgZmlsZVJlZjogb2JqZWN0IFtyZWZlcmVuY2UgdG8gZmlsZSB0aGF0IGlzIHVwbG9hZGluZ10sXG4gICAgICAgICAgbmFtZTogc3RyaW5nIFtuYW1lIG9mIGZpbGVdLFxuICAgICAgICAgIHhocjogb2JqZWN0IFt4aHIgb2JqZWN0IHJlZmVyZW5jZV0sXG4gICAgICAgICAgZXJyb3I6IGJvb2xcbiAgICAgICAgICBtZXNzYWdlOiBzdHJpbmcgb3IgbnVsbCBbYW4gZXJyb3IgbWVzc2FnZV1cbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBjb21wbGV0ZWRGaWxlczogW11cbiAgICAgICAgLyogc2NoZW1hOlxuICAgICAgICAqL1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHVwbG9hZGluZ0ZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGhcbiAgICAgIH0sXG4gICAgICB1cGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkaW5nRmlsZXMgPiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB2aWV3TXlGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpbGVzJylcbiAgICAgIH0sXG4gICAgICBicm93c2VGb3JGaWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmJyb3dzZS5jbGljaygpXG4gICAgICB9LFxuICAgICAgb25GaWxlc1VwbG9hZGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgYnJvd3NlID0gdGhpcy4kcmVmcy5icm93c2VcbiAgICAgICAgbGV0IGZpbGVDb3VudCA9IGJyb3dzZS5maWxlcy5sZW5ndGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlQ291bnQ7IGkrKykge1xuICAgICAgICAgIGxldCBmID0gYnJvd3NlLmZpbGVzW2ldXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBmaWxlUmVmOiBmLFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFuZGxlRHJhZ0Ryb3BVcGxvYWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgZiA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgZmlsZVJlZjogZixcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3JzLnB1c2gocHJvZ3Jlc3MpXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FuY2VsVXBsb2FkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBwcm9ncmVzcy54aHIuYWJvcnQoKVxuICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcbiAgICAgIH0sXG4gICAgICB1cGxvYWRGaWxlOiBmdW5jdGlvbiAoZmlsZSwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcHJvZ3Jlc3MueGhyID0geGhyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi9hcGkvdXBsb2FkXCIpXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gdXBsb2FkIGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBsb2FkIGNvbXBsZXRlJywgcHJvZ3Jlc3MubmFtZSlcbiAgICAgICAgICAgIC8vIGRlcXVldWUgdGhlIHVwbG9hZGluZyBmaWxlXG4gICAgICAgICAgICB2bS5wcm9ncmVzc0luZGljYXRvcnMuc3BsaWNlKHZtLnByb2dyZXNzSW5kaWNhdG9ycy5pbmRleE9mKHByb2dyZXNzKSwgMSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogcHJvZ3Jlc3MubmFtZSxcbiAgICAgICAgICAgICAgZG93bmxvYWRQYWdlOiAnLyMvZC8nICsgcmVzcG9uc2UuZmlsZUlkXG4gICAgICAgICAgICAgIC8vIGRvd25sb2FkUGFnZTogcmVzcG9uc2UuZG93bmxvYWRQYWdlIC8vIGdldCBkb3dubG9hZCBwYWdlIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgICAgICBwcm9ncmVzcy5lcnJvciA9IHRydWVcbiAgICAgICAgICAgIC8vIHByb2dyZXNzLm1lc3NhZ2UgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICAvLyByZWFjdGl2ZSB1cGRhdGVcbiAgICAgICAgICAgIHZtLiRzZXQocHJvZ3Jlc3MsICdtZXNzYWdlJywgeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICBwcm9ncmVzcy52YWx1ZSA9IE1hdGguZmxvb3IoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJhcGlrZXlcIiwgdm0uJHJvb3QudS5rZXkpXG4gICAgICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBmaWxlKVxuICAgICAgICB4aHIuc2VuZChmb3JtKVxuICAgICAgfSxcbiAgICAgIHZpc2l0VXJsOiBmdW5jdGlvbiAodSkge1xuICAgICAgICB3aW5kb3cub3Blbih1LCAnX2JsYW5rJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4udXBsb2FkLWFyZWEtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDglO1xufVxuXG4udXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZpbGVVcGxvYWRXaWRnZXQudnVlPzU2MWNhZGE3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtd2lkZ2V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS52aWV3TXlGaWxlc1xuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZXcgYWxsIG15IGZpbGVzXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaGVyZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImRyb3BcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oYW5kbGVEcmFnRHJvcFVwbG9hZCgkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJkcmFnZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJkcmFnb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtY2FyZCcsIFtfYygnbWQtY2FyZC1oZWFkZXInLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgRmlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1zdWJoZWFkXCJcbiAgfSwgW192bS5fdihcIkRyYWcgYW5kIGRyb3Agb3IgY2xpY2tcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1hcmVhLXBhZGRpbmdcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYnJvd3NlRm9yRmlsZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2FyZC1hY3Rpb25zJywgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtZmFiXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmJyb3dzZUZvckZpbGVzXG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiY2xvdWRfdXBsb2FkXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2FyZC1jb250ZW50JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcIlxuICB9LCBbX2MoJ21kLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIlxuICB9LCBbKF92bS5wcm9ncmVzc0luZGljYXRvcnMubGVuZ3RoID4gMCkgPyBfYygnbWQtc3ViaGVhZGVyJywgW192bS5fdihcIlVwbG9hZGluZ1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnByb2dyZXNzSW5kaWNhdG9ycyksIGZ1bmN0aW9uKHBySW5kLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywgWyghcHJJbmQuZXJyb3IpID8gX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2xvdWRfcXVldWVcIildKSA6IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImVycm9yXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBySW5kLm5hbWUpICsgXCIgXCIpXSksIF92bS5fdihcIiBcIiksICghcHJJbmQuZXJyb3IpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKChwckluZC52YWx1ZSA8IDEwMCkgPyAoXCJVcGxvYWRpbmcuLi4gKFwiICsgKHBySW5kLnZhbHVlKSArIFwiJSlcIikgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nKSldKSA6IF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcygnVXBsb2FkIGVycm9yOiAnICsgcHJJbmQubWVzc2FnZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5jYW5jZWxVcGxvYWQocHJJbmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2FuY2VsXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCJcbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZmlsZV91cGxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDApID8gX2MoJ21kLXN1YmhlYWRlcicsIFtfdm0uX3YoXCJDb21wbGV0ZWRcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5jb21wbGV0ZWRGaWxlcyksIGZ1bmN0aW9uKGNtcGxGaWxlLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXRVcmwoY21wbEZpbGUuZG93bmxvYWRQYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX2RvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoY21wbEZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIlVwbG9hZCBDb21wbGV0ZSFcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIlxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJkb25lXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiXG4gICAgfSldLCAxKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDApID8gX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNvbXBsZXRlZEZpbGVzID0gW11cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbGVhciBBbGxcIildKSA6IF92bS5fZSgpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImJyb3dzZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImludmlzaWJsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm11bHRpcGxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25GaWxlc1VwbG9hZGVkXG4gICAgfVxuICB9KV0sIDEpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGZlOTQ2YzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiRGFzaGJvYXJkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZmlsZVVwbG9hZFdpZGdldCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzZiYWVmMTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmRiZTZhYzkhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbXlmaWxlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMmRiZTZhYzlcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteWZpbGVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxuICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiTXkgRmlsZXNcIj48L2ludHJvPlxuICAgIDxteUZpbGVzTGlzdD48L215RmlsZXNMaXN0PlxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnRybyxcbiAgICAgIG15RmlsZXNMaXN0LFxuICAgICAgZGV2Q3JlZGl0c1xuICAgIH0sXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zaHJpbmstbGF5b3V0IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteWZpbGVzLnZ1ZT8wZjRlNmE5OCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJkMGQ2YjFjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215RmlsZXNMaXN0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMmQwZDZiMWNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteUZpbGVzTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibXktZmlsZXMtbGlzdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdCBzZXAtYlwiPlxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgQGNsaWNrPVwidXBsb2FkTW9yZUZpbGVzXCI+VXBsb2FkIEZpbGVzPC9tZC1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZGVkLWZpbGVzLWxpc3RcIj5cbiAgICAgICAgICAgIDxtZC1jYXJkPlxuICAgICAgICAgICAgICA8bWQtY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+QWxsIE15IEZpbGVzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXN1YnRpdGxlXCI+RmlsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tZC1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgICAgPG1kLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkRmluaXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm5vRmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gRmlsZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwiY3VzdG9tLWxpc3QgbWQtZG91YmxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihmaWxlLCBpeCkgaW4gZmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5jbG91ZF9kb25lPC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt7IGZpbGUuaHJTaXplIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cImxvY2tGaWxlKGl4KVwiIHYtaWY9XCIhZmlsZS5sb2NrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2tfb3BlbjwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJ1bmxvY2tGaWxlKGl4KVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmxvY2s8L21kLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwiZG93bmxvYWRGaWxlKGl4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV9kb3dubG9hZDwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgbWQtbWVudS10cmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5tb3JlX2hvcml6PC9tZC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbWVudS1pdGVtIEBjbGljaz1cInZpc2l0RG93bmxvYWRQYWdlKGl4KVwiPkRvd25sb2FkIFBhZ2U8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJkZWxldGVGaWxlKGl4KVwiPkRlbGV0ZTwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1tZW51LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1tZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgPG1kLXNwaW5uZXIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8aDU+UmV0cmlldmluZyBEYXRhPC9oNT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L21kLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgYXV0aFJlcXVlc3RQYXJhbXM6IHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGFwaWtleTogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRGaW5pc2hlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBmaWxlc0NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzLmxlbmd0aFxuICAgICAgfSxcbiAgICAgIG5vRmlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNDb3VudCA9PSAwXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB1cGxvYWRNb3JlRmlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91JylcbiAgICAgIH0sXG4gICAgICB2aXNpdFVybDogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXG4gICAgICB9LFxuICAgICAgdmlzaXREb3dubG9hZFBhZ2U6IGZ1bmN0aW9uIChpeCkge1xuICAgICAgICBsZXQgZiA9IHRoaXMuZmlsZXNbaXhdXG4gICAgICAgIGlmIChmLmxvY2tlZCkge1xuICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybShgXG5UaGlzIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkLiBEbyB5b3Ugd2FudCB0byBlbmNvZGUgdGhlIDxicj5cbnBhc3N3b3JkIGluIHRoZSBsaW5rPyBJZiB5b3UgZG9uJ3QgZG8gdGhpcywgYW55b25lIHdobyB2aXNpdHMgPGJyPlxueW91ciBsaW5rIHdpbGwgbmVlZCB0byBlbnRlciB0aGUgZmlsZSBwYXNzd29yZCB0byB2aWV3IHRoZSBmaWxlLlxuYCxcbiAgICAgICAgICAgICdJbmNsdWRlIHBhc3N3b3JkPycsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdm0uc2hvd0Rvd25sb2FkTGlua1dpdGhQYXNzKGl4KVxuICAgICAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBqdXN0IGdvIHRvIGxpbmtcbiAgICAgICAgICAgICAgICBsZXQgZGxQYWdlID0gJy8jL2QvJyArIGYuZmlsZUlkXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZGxQYWdlLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgJ1llcycsICdObycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8ganVzdCBvcGVuIHRoZSBwYWdlXG4gICAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxuICAgICAgICAgIHdpbmRvdy5vcGVuKGRsUGFnZSwgJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaG93RG93bmxvYWRMaW5rV2l0aFBhc3M6IGZ1bmN0aW9uIChpeCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9nZXRwYXNzLycgKyBmLmZpbGVJZCwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgLy8gcGFzc3dvcmQgc2hvdWxkIGJlIHJldHVybmVkXG4gICAgICAgICAgICBsZXQgZGxQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdICsgJyMvZC8nICsgZi5maWxlSWQgKyAnIScgKyBidG9hKHJlcy5kYXRhKVxuICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKGBcbkRvd25sb2FkIGxpbmsgd2l0aCBwYXNzd29yZCBlbmNvZGVkOjxicj5cbjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke2RsUGFnZX1cIj4ke2RsUGFnZX08L2E+XG4gICAgICAgICAgICBgLCAnTGluayBDcmVhdGVkJylcbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWxlc1tpeF1cbiAgICAgICAgLy8gdXNlIGZvcmNlIGRvd25sb2FkIHRvIGJ5cGFzcyBwYXNzd29yZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Zkb3dubG9hZC8nICsgZi5maWxlSWQgKyAnP2FwaWtleT0nICsgdGhpcy4kcm9vdC51LmtleVxuICAgICAgfSxcbiAgICAgIGxvY2tGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93UHJvbXB0KCdFbnRlciBwYXNzd29yZCcsICdQYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIC8vIHNlbmQgbG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS9sb2NrLycgKyBmLmZpbGVJZCArICchJyArIHIsIHt9LCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaWxlIGxpc3RcbiAgICAgICAgICAgICAgICBmLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdW5sb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgbGV0IGYgPSB2bS5maWxlc1tpeF1cbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHBhc3N3b3JkIG9uIHRoaXMgZmlsZT8nLCAnQ29uZmlybSBVbmxvY2snLCAocikgPT4ge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAvLyBzZW5kIHVubG9jayByZXF1ZXN0XG4gICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS91bmxvY2svJyArIGYuZmlsZUlkLCB7fSwgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVGaWxlOiBmdW5jdGlvbiAoaXgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZpbGU/IEl0IGNhbm5vdCBiZSByZWNvdmVyZWQuJywgJ0NvbmZpcm0gRGVsZXRlJywgKHIpID0+IHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy8gc2VuZCBkZWxldGUgcmVxdWVzdFxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL2RlbGV0ZS8nICsgZi5maWxlSWQsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxuICAgICAgICAgICAgICAgIHZtLmZpbGVzLnNwbGljZShpeCwgMSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBsb2FkIGZpbGVzIGZyb20gc2VydmVyXG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICB2bS5hdXRoUmVxdWVzdFBhcmFtcy5wYXJhbXMuYXBpa2V5ID0gdm0uJHJvb3QudS5rZXlcbiAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyZmlsZXMnLCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gbWVyZ2UgZmlsZSBsaXN0XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2bS5maWxlcy5wdXNoKHJlc3BvbnNlLmRhdGFbaV0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlGaWxlc0xpc3QudnVlP2M1MDdmZTRhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXktZmlsZXMtbGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZWZ0IHNlcC1iXCJcbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXBsb2FkTW9yZUZpbGVzXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIEZpbGVzXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRlZC1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdtZC1jYXJkJywgW19jKCdtZC1jYXJkLWhlYWRlcicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkFsbCBNeSBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkZpbGVzXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWNhcmQtY29udGVudCcsIFsoX3ZtLmxvYWRGaW5pc2hlZCkgPyBfYygnZGl2JywgWyhfdm0ubm9GaWxlcykgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIk5vIEZpbGVzXCIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiXG4gIH0sIF92bS5fbCgoX3ZtLmZpbGVzKSwgZnVuY3Rpb24oZmlsZSwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9kb25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLmhyU2l6ZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFmaWxlLmxvY2tlZCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tfb3BlblwiKV0pXSwgMSkgOiBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVubG9ja0ZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibG9ja1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZG93bmxvYWRGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfZG93bmxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJtb3JlX2hvcml6XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXREb3dubG9hZFBhZ2UoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRG93bmxvYWQgUGFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSkpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJSZXRyaWV2aW5nIERhdGFcIildKV0sIDEpXSldLCAxKV0sIDEpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmQwZDZiMWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL215RmlsZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIk15IEZpbGVzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbXlGaWxlc0xpc3QnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJkYmU2YWM5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hY2FlODViMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi1hY2FlODViMlwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2ZpbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGludHJvIHZpZXctdGl0bGU9XCJVc2VyIFByb2ZpbGVcIj48L2ludHJvPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cbiAgICAgICAgICA8bXlQcm9maWxlPjwvbXlQcm9maWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuICBpbXBvcnQgbXlQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvbXlQcm9maWxlJ1xuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSW50cm8sXG4gICAgICBteVByb2ZpbGUsXG4gICAgICBkZXZDcmVkaXRzXG4gICAgfSxcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICBuZXh0KHZtID0+IHtcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnNocmluay1sYXlvdXQge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHByb2ZpbGUudnVlPzZmNmM1ZDgyIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTExZWFkMjYwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL215UHJvZmlsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL2hvbWUvbmloYWwvRGV2ZWxvcG1lbnQvR2l0SHViL1Blbmd1aW5VcGxvYWQvUGVuZ3VpblVwbG9hZC9zcmMvUGVuZ3VpblVwbG9hZC9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0xMWVhZDI2MFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG15UHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL215UHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm15LXByb2ZpbGUgbGVmdFwiPlxuICAgIDxoND5NYW5hZ2UgQWNjb3VudCAoe3sgJHJvb3QudS5uYW1lIH19KTwvaDQ+XG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxuICAgICAgPGg1PlJlc291cmNlIFVzYWdlPC9oNT5cbiAgICAgIDxkaXYgdi1pZj1cInVJbmZvLmxvYWRlZFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2luZ1xuICAgICAgICAgIDxiPnt7IHVJbmZvLnVzYWdlIH19PC9iPiBvZiA8Yj57eyB1SW5mby5xdW90YSB9fTwvYj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgPG1kLXNwaW5uZXIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XG4gICAgICAgIDxwPlJldHJpZXZpbmcgRGF0YTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cbiAgICAgIDxoNT5BUEk8L2g1PlxuICAgICAgPGg2PkFQSSBLZXk6IDxjb2RlPnt7ICRyb290LnUua2V5IH19PC9jb2RlPjwvaDY+XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeSBtZC1yYWlzZWRcIiBAY2xpY2s9XCJnZW5lcmF0ZU5ld0FwaUtleVwiPkdlbmVyYXRlIE5ldzwvbWQtYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwLXNlY3Rpb25cIj5cbiAgICAgIDxoNT5TZWN1cml0eTwvaDU+XG4gICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5VXBkYXRlUGFzc3dvcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlaWdodCBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQub2xkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XG4gICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgdXBkYXRlUGFzc3dvcmQuZXJyIH19PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cInRyeVVwZGF0ZVBhc3N3b3JkXCIgOmRpc2FibGVkPVwiIXVwZGF0ZVBhc3N3b3JkLmVcIj5DaGFuZ2UgUGFzc3dvcmQ8L21kLWJ1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGg1PkRhbmdlciBab25lPC9oNT5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljaz1cImRlbGV0ZUFsbEZpbGVzXCI+RGVsZXRlIEFsbCBGaWxlczwvbWQtYnV0dG9uPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC13YXJuXCIgQGNsaWNrPVwiZGVsZXRlQWNjb3VudFwiPkRlbGV0ZSBBY2NvdW50PC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkOiB7XG4gICAgICAgICAgb2xkOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgY29uZmlybTogJycsXG4gICAgICAgICAgZXJyOiAnJyxcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aFJlcXVlc3RQYXJhbXM6IHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGFwaWtleTogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVJbmZvOiB7XG4gICAgICAgICAgcXVvdGE6IG51bGwsXG4gICAgICAgICAgdXNhZ2U6IG51bGwsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBnZW5lcmF0ZU5ld0FwaUtleTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgYSBuZXcgQVBJIGtleT8gVGhlIG9sZCBvbmUgd2lsbCBubyBsb25nZXIgd29yay4gWW91IHdpbGwgdGhlbiBiZSBsb2dnZWQgb3V0LicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL25ld2tleScsIHt9LCB2bS5hdXRoUmVxdWVzdFBhcmFtcylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRvbmVcbiAgICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdOZXcgQVBJIGtleSBnZW5lcmF0ZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uJywgJ1N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUFsbEZpbGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBBbGwgZmlsZXMgdGhhdCB5b3UgaGF2ZSB1cGxvYWRlZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS9maWxlcycsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlsZXMgaGF2ZSBiZWVuIG51a2VkLlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcbiAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcbiAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUFjY291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBhYnNvbHV0ZWx5IHN1cmU/IFlvdXIgYWNjb3VudCBhbmQgYWxsIGZpbGVzIHRoYXQgeW91IGhhdmUgdXBsb2FkZWQgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLicsICdDb25maXJtIEFjdGlvbicsIGZ1bmN0aW9uIChyMSkge1xuICAgICAgICAgIGlmIChyMSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdZb3VyIGFjY291bnQgd2lsbCBiZSBkZWxldGVkLiBBcmUgeW91IGNlcnRhaW4geW91IHdvdWxkIGxpa2UgdG8gcHJvY2VlZD8nKSkge1xuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbnVrZS91c2VyJywgdm0uYXV0aFJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgLy8gYWNjb3VudCBoYXMgYmVlbiBudWtlZC5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBub3cgbG9nIG91dFxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRyeVVwZGF0ZVBhc3N3b3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgaWYgKCF2bS51cGRhdGVQYXNzd29yZC5lKSByZXR1cm5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGNvbmZpcm1hdGlvbiBpcyBjb3JyZWN0XG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkICE9PSB2bS51cGRhdGVQYXNzd29yZC5jb25maXJtKSB7XG4gICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gJ3Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaCdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gZmFsc2VcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAnJ1xuICAgICAgICAvLyBzZW5kIHVwZGF0ZVBhc3N3b3JkIHBvc3RcbiAgICAgICAgYXhpb3MucGF0Y2goJy9jaGFuZ2VwYXNzd29yZCcsIHtcbiAgICAgICAgICB1c2VybmFtZTogdm0uJHJvb3QudS5uYW1lLFxuICAgICAgICAgIG9sZFBhc3N3b3JkOiB2bS51cGRhdGVQYXNzd29yZC5vbGQsXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXG4gICAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnUGFzc3dvcmQgY2hhbmdlIHN1Y2NlZWRlZCEgUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKVxuICAgICAgICAgICAgICAvLyBsb2cgb3V0XG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gJydcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgLy8gdW5hdXRob3JpemVkIGJlY2F1c2Ugb2YgZXJyb3JcbiAgICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxvYWQgZmlsZXMgZnJvbSBzZXJ2ZXJcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHZtLmF1dGhSZXF1ZXN0UGFyYW1zLnBhcmFtcy5hcGlrZXkgPSB2bS4kcm9vdC51LmtleVxuICAgICAgLy8gbG9hZCB1c2VyIGluZm9cbiAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyaW5mbycsIHZtLmF1dGhSZXF1ZXN0UGFyYW1zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8gZmV0Y2hlZCBkYXRhXG4gICAgICAgICAgdm0udUluZm8gPSB7XG4gICAgICAgICAgICBxdW90YTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS5xdW90YSksXG4gICAgICAgICAgICB1c2FnZTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS51c2FnZSksXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5wLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBteVByb2ZpbGUudnVlPzEyZjM3NjcyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXktcHJvZmlsZSBsZWZ0XCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCJNYW5hZ2UgQWNjb3VudCAoXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIilcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlJlc291cmNlIFVzYWdlXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0udUluZm8ubG9hZGVkKSA/IF9jKCdkaXYnLCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBVc2luZ1xcbiAgICAgICAgXCIpLCBfYygnYicsIFtfdm0uX3YoX3ZtLl9zKF92bS51SW5mby51c2FnZSkpXSksIF92bS5fdihcIiBvZiBcIiksIF9jKCdiJywgW192bS5fdihfdm0uX3MoX3ZtLnVJbmZvLnF1b3RhKSldKV0pXSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlJldHJpZXZpbmcgRGF0YVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJyldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIkFQSVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiQVBJIEtleTogXCIpLCBfYygnY29kZScsIFtfdm0uX3YoX3ZtLl9zKF92bS4kcm9vdC51LmtleSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5IG1kLXJhaXNlZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5nZW5lcmF0ZU5ld0FwaUtleVxuICAgIH1cbiAgfSwgW192bS5fdihcIkdlbmVyYXRlIE5ld1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWN0aW9uXCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJTZWN1cml0eVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5VXBkYXRlUGFzc3dvcmQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZWlnaHQgY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDdXJyZW50IHBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5vbGQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5vbGRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQub2xkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWhhcy1wYXNzd29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIk5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnNcIlxuICB9LCBbX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGRhdGVQYXNzd29yZC5jb25maXJtXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5jb25maXJtKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5jb25maXJtID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cGRhdGVQYXNzd29yZC5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0udXBkYXRlUGFzc3dvcmQuZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeVVwZGF0ZVBhc3N3b3JkXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2hhbmdlIFBhc3N3b3JkXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNScsIFtfdm0uX3YoXCJEYW5nZXIgWm9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC13YXJuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlbGV0ZUFsbEZpbGVzXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVsZXRlIEFsbCBGaWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC13YXJuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlbGV0ZUFjY291bnRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWNjb3VudFwiKV0pXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMWVhZDI2MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2hyaW5rLWxheW91dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnaW50cm8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmlldy10aXRsZVwiOiBcIlVzZXIgUHJvZmlsZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnbXlQcm9maWxlJyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hY2FlODViMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2xvYmFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by0xMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4nKSwgbG9jYWwoJ1JvYm90by1UaGluJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tMTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBUaGluIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLVRoaW5JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by0zMDBpdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0SXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJvYm90by1pdGFsaWMgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkJyksIGxvY2FsKCdSb2JvdG8tQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTcwMGl0YWxpYyAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1Cb2xkSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByb2JvdG8tOTAwaXRhbGljIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjayBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1CbGFja0l0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcm9ib3RvLTkwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS0zMDAgLSBsYXRpbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgTGlnaHQnKSwgbG9jYWwoJ1JhbGV3YXktTGlnaHQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuXFxuLyogcmFsZXdheS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5JyksIGxvY2FsKCdSYWxld2F5LVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTUwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBNZWRpdW0nKSwgbG9jYWwoJ1JhbGV3YXktTWVkaXVtJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNjAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IFNlbWlCb2xkJyksIGxvY2FsKCdSYWxld2F5LVNlbWlCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcblxcbi8qIHJhbGV3YXktNzAwIC0gbGF0aW4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG5cXG4vKiByYWxld2F5LTgwMCAtIGxhdGluICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC44Y2U1OTg4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAuNjU0Y2I0ZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy5hY2VlMGVhLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMuNDJkZTg5OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC4xNmRkYjE1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAuZWNjZTkyZC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy4zZGRiNzQ4LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMuNGQwOGRhZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuN2UzNjdiZS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLXJlZ3VsYXIuMTZlMWQ5My53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuOTg0YWUzNy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLjFlNjVlN2Uud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuYmI0NzRmMS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLjU3YWY2NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuOWU3YmVlZS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLmI2NzA2OTQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuMGQ3ZTcxZi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLjUyNWQ1YjQud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuNzM5NGNhOS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLmFkMGU3NGYud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuNGZhZWM4My53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLjNiOTU5MGUud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZjRlOGRjNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLmRlOTg0YzAud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLmU3NDZlMDMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLjc4ZGQ1YWIud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIuOTEwNjQzNS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci4yOTBlZTM4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLmU1YTMyMTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLjgxZTk1NTgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5jZDkwMzkyLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC5hNGI2ZjE3LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAuMDZmMWM4Ni53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAuYzg2NGQ4NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLjA0MWE0Yjgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLjJhM2E5Y2Yud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFwiKSArIFwiKTtcXG4gICAgLyogRm9yIElFNi04ICovXFxuICAgIHNyYzogbG9jYWwoJ01hdGVyaWFsIEljb25zJyksIGxvY2FsKCdNYXRlcmlhbEljb25zLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcIikgKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmU3OWJmZDguZW90XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3Rcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuNTcwZWI4My53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuMDEyY2Y2YS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmEzN2IwYzAudHRmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mZnNrZWxldG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyB9XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyB9XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxucCxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfVxcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1tYXRlcmlhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZC1hdmF0YXJ7d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bWFyZ2luOmF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjQwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1hdmF0YXIubWQtbGFyZ2V7d2lkdGg6NjRweDttaW4td2lkdGg6NjRweDtoZWlnaHQ6NjRweDttaW4taGVpZ2h0OjY0cHg7Ym9yZGVyLXJhZGl1czo2NHB4fS5tZC1hdmF0YXIubWQtbGFyZ2UgLm1kLWljb257d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6NDBweH0ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb24gLm1kLWljb257Y29sb3I6I2ZmZn0ubWQtYXZhdGFyIC5tZC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1hdmF0YXIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja30ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTAlfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5O3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpfS5tZC1iYWNrZHJvcC5tZC1hY3RpdmV7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLWJhY2tkcm9wLm1kLXRyYW5zcGFyZW50e2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDA1KX0ubWQtYm90dG9tLWJhcnt3aWR0aDoxMDAlO21pbi13aWR0aDoxMDAlO2hlaWdodDo1NnB4Oy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtYm90dG9tLWJhciwubWQtYm90dG9tLWJhci1pdGVte3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tZC1ib3R0b20tYmFyLWl0ZW17bWF4LXdpZHRoOjE2OHB4O21pbi13aWR0aDo4MHB4O2hlaWdodDoxMDAlO3BhZGRpbmc6OHB4IDEycHggMTBweDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstbXMtZmxleDoxO2ZsZXg6MTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjFlbTt0ZXh0LWRlY29yYXRpb246bm9uZX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZXtwYWRkaW5nLXRvcDo2cHh9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCl9Lm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7Y29sb3I6Y3VycmVudENvbG9yfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW17bWluLXdpZHRoOjU2cHg7bWF4LXdpZHRoOjk2cHg7cG9zaXRpb246c3RhdGljOy1tcy1mbGV4OjEgMSAzMnB4O2ZsZXg6MSAxIDMycHg7dHJhbnNpdGlvbjouNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGg7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LG1pbi13aWR0aCxtYXgtd2lkdGgsLW1zLWZsZXh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw4cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsNnB4LDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle21pbi13aWR0aDo5NnB4O21heC13aWR0aDoxNjhweDstbXMtZmxleDoxIDEgNzJweDtmbGV4OjEgMSA3MnB4fS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLC5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e29wYWNpdHk6MX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbnt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwycHgsMCl9Lm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoLjg1NzEpIHRyYW5zbGF0ZVkoMnB4KTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksY29sb3IgLjE1cyBsaW5lYXIsb3BhY2l0eSAuMTVzIGxpbmVhcn0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMTVzIGxpbmVhcn0ubWQtYnV0dG9ue21pbi13aWR0aDo4OHB4O21pbi1oZWlnaHQ6MzZweDttYXJnaW46NnB4IDhweDtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjJweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzppbmhlcml0O2xpbmUtaGVpZ2h0OjM2cHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOnRvcDt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLWJ1dHRvbiwubWQtYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pLm1kLXJhaXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNjAlLC40KX0ubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSl7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1kZW5zZXttaW4taGVpZ2h0OjMycHg7bGluZS1oZWlnaHQ6MzJweDtmb250LXNpemU6MTNweH0ubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiwubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29ue21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5tZC1idXR0b24ubWQtaWNvbi1idXR0b257d2lkdGg6NDBweDttaW4td2lkdGg6NDBweDtoZWlnaHQ6NDBweDttYXJnaW46MCA2cHg7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7bGluZS1oZWlnaHQ6MjRweH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlcntiYWNrZ3JvdW5kOm5vbmV9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbi5tZC1kZW5zZXt3aWR0aDozMnB4O21pbi13aWR0aDozMnB4O2hlaWdodDozMnB4O21pbi1oZWlnaHQ6MzJweDtwYWRkaW5nOjRweDtsaW5lLWhlaWdodDozMnB4fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1yaXBwbGUubWQtYWN0aXZle2FuaW1hdGlvbi1kdXJhdGlvbjouOXN9Lm1kLWJ1dHRvbi5tZC1mYWJ7d2lkdGg6NTZweDtoZWlnaHQ6NTZweDttaW4td2lkdGg6MDtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJhZGl1czo1NnB4O2xpbmUtaGVpZ2h0OjU2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsYm94LXNoYWRvdyx0cmFuc2Zvcm19Lm1kLWJ1dHRvbi5tZC1mYWI6Zm9jdXMsLm1kLWJ1dHRvbi5tZC1mYWI6aG92ZXJ7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi10b3AtbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtsZWZ0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtyaWdodDoxNnB4fS5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTZweDtsZWZ0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjE2cHg7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O2JvdHRvbToxNnB4fS5tZC1idXR0b24ubWQtZmFiLm1kLW1pbml7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pbmstcmlwcGxle2JvcmRlci1yYWRpdXM6NTZweH0ubWQtYnV0dG9uW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7Y3Vyc29yOmRlZmF1bHR9Lm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtZmFiLC5tZC1idXR0b25bZGlzYWJsZWRdLm1kLXJhaXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWJ7Ym94LXNoYWRvdzpub25lfS5tZC1idXR0b246YWZ0ZXJ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O292ZXJmbG93OmhpZGRlbn0ubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiwubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29ue2Rpc3BsYXk6YmxvY2t9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LThweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9te21hcmdpbi10b3A6OHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LThweH0ubWQtYnV0dG9uLXRvZ2dsZXt3aWR0aDphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b257bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci13aWR0aDoxcHggMCAxcHggMXB4O2JvcmRlci1yYWRpdXM6MDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpsYXN0LWNoaWxke2JvcmRlci1yaWdodC13aWR0aDoxcHg7Ym9yZGVyLXJhZGl1czowIDJweCAycHggMH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjIpO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b24gLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czoycHh9Lm1kLWNhcmR7b3ZlcmZsb3c6YXV0bztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWNhcmQubWQtd2l0aC1ob3ZlcntjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3gtc2hhZG93fS5tZC1jYXJkLm1kLXdpdGgtaG92ZXI6aG92ZXJ7ei1pbmRleDoyO2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05e292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xNi05OmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjU2LjI1JTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0ze292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTM6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NzUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMXtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xOmJlZm9yZXt3aWR0aDoxMDAlO3BhZGRpbmctdG9wOjEwMCU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTEgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtaGVhZGVye3BhZGRpbmctdG9wOjI0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWErLm1kLWNhcmQtY29udGVudDpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgaW1ne3dpZHRoOjEwMCV9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVye3BhZGRpbmc6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQ+Lm1kLWNhcmQtaGVhZGVyLXRleHQ+Lm1kLXRpdGxlOmZpcnN0LWNoaWxkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyLm1kLWNhcmQtaGVhZGVyLWZsZXh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1jb250ZW50e3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnM6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nOjAgOHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFye21hcmdpbi1yaWdodDoxNnB4O2Zsb2F0OmxlZnR9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyfi5tZC10aXRsZXtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDotNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1oZWFkZXItdGV4dHstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWF7d2lkdGg6ODBweDstbXMtZmxleDowIDAgODBweDtmbGV4OjAgMCA4MHB4O2hlaWdodDo4MHB4O21hcmdpbi1sZWZ0OjE2cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bXt3aWR0aDoxMjBweDstbXMtZmxleDowIDAgMTIwcHg7ZmxleDowIDAgMTIwcHg7aGVpZ2h0OjEyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWd7d2lkdGg6MTYwcHg7LW1zLWZsZXg6MCAwIDE2MHB4O2ZsZXg6MCAwIDE2MHB4O2hlaWdodDoxNjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCwubWQtY2FyZCAubWQtc3ViaGVhZGluZywubWQtY2FyZCAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6NDAwfS5tZC1jYXJkIC5tZC1zdWJoZWFke29wYWNpdHk6LjU0O2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wMWVtO2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNhcmQgLm1kLXN1YmhlYWQrLm1kLXRpdGxle21hcmdpbi10b3A6NHB4fS5tZC1jYXJkIC5tZC10aXRsZXtmb250LXNpemU6MjRweDtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9uc3twYWRkaW5nOjE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtbWVkaWF7bWF4LXdpZHRoOjI0MHB4O21heC1oZWlnaHQ6MjQwcHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25ze21hcmdpbi1sZWZ0OjE2cHg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWFjdGlvbnMgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luOjhweCAwIDB9Lm1kLWNhcmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjJweH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MjRweH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmc6OHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbnttYXJnaW46MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtYXJlYSwubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCl7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOmFmdGVye2hlaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWQtaW5zZXQpOmFmdGVye3JpZ2h0OjA7bGVmdDowfS5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlcntyaWdodDoxNnB4O2xlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3Zlcntwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyLm1kLXRleHQtc2NyaW0gLm1kLWNhcmQtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWFyZWF7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWhlYWRlcisubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjB9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLXN1YmhlYWR7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZHtvdmVyZmxvdzpoaWRkZW59Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSAubWQtY2FyZC1jb250ZW50e21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7b3BhY2l0eToxfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1hY3Rpb25ze3BhZGRpbmctdG9wOjA7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCBbbWQtZXhwYW5kLXRyaWdnZXJde3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7d2lsbC1jaGFuZ2U6bWFyZ2lufS5tZC1jaGVja2JveHt3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3Jle3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtib3JkZXItcmFkaXVzOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye3dpZHRoOjZweDtoZWlnaHQ6MTNweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjVweDtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXRvcDowO2JvcmRlci1sZWZ0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHNjYWxlM0QoLjE1LC4xNSwxKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxle3dpZHRoOjQ4cHghaW1wb3J0YW50O2hlaWdodDo0OHB4IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7Ym90dG9tOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnR9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1sYWJlbHtoZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6OHB4O2xpbmUtaGVpZ2h0OjIwcHh9Lm1kLWNoZWNrYm94Lm1kLWNoZWNrZWQgLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcntvcGFjaXR5OjE7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1pbmstcmlwcGxle3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowOy13ZWJraXQtbWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCNmZmYgMTAwJSwjMDAwIDApO21hc2staW1hZ2U6cmFkaWFsLWdyYWRpZW50KGNpcmNsZSwjZmZmIDEwMCUsIzAwMCAwKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMil9Lm1kLXJpcHBsZXtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06c2NhbGUoMCk7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouMjY7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uOnJpcHBsZSAxcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX1Aa2V5ZnJhbWVzIHJpcHBsZXt0b3t0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fS5tZC1kaWFsb2ctY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDh9Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIC5tZC1kaWFsb2d7b3BhY2l0eToxIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2ctYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDl9Lm1kLWRpYWxvZ3ttaW4td2lkdGg6MjgwcHg7bWF4LXdpZHRoOjgwJTttYXgtaGVpZ2h0OjgwJTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjExMDtvdXRsaW5lOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7b3BhY2l0eTowO2JveC1zaGFkb3c6MCA3cHggOXB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxNHB4IDIxcHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNnB4IDRweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNmb3JtOnNjYWxlKC45LC44NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtfS5tZC1kaWFsb2cubWQtcmVmZXJlbmNle3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcn0ubWQtZGlhbG9nLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLWRpYWxvZyBwe21hcmdpbjowfS5tZC1kaWFsb2ctdGl0bGV7bWFyZ2luLWJvdHRvbToyMHB4O3BhZGRpbmc6MjRweCAyNHB4IDB9Lm1kLWRpYWxvZy1jb250ZW50e3BhZGRpbmc6MCAyNHB4IDI0cHg7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsI2ZmZiAwLCNmZmYgMXB4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgwZGVnLCNmZmYgMCwjZmZmIDNweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMCwwLDAsLjEyKSAwLHJnYmEoMCwwLDAsLjEyKSAxcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgwLDAsMCwuMikgMXB4LHJnYmEoMCwwLDAsLjIpIDJweCx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWwsbG9jYWwsc2Nyb2xsLHNjcm9sbH0ubWQtZGlhbG9nLWNvbnRlbnQ6Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MjRweH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpmaXJzdC1jaGlsZDpub3QoOm9ubHktY2hpbGQpe21hcmdpbi10b3A6MH0ubWQtZGlhbG9nLWNvbnRlbnQgcDpsYXN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLWJvdHRvbTowfS5tZC1kaWFsb2ctYm9keXttYXJnaW46MCAtMjRweDtwYWRkaW5nOjAgMjRweDtvdmVyZmxvdzphdXRvfS5tZC1kaWFsb2ctYWN0aW9uc3ttaW4taGVpZ2h0OjUycHg7cGFkZGluZzo4cHggOHB4IDhweCAyNHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1kaWFsb2ctYWN0aW9uczpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTFweDtyaWdodDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWRpYWxvZy1hY3Rpb25zIC5tZC1idXR0b257bWluLXdpZHRoOjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDhweH0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjhweH0ubWQtZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1kaXZpZGVyLm1kLWluc2V0e21hcmdpbi1sZWZ0OjcycHh9Lm1kLWljb257d2lkdGg6MjRweDttaW4td2lkdGg6MjRweDtoZWlnaHQ6MjRweDttaW4taGVpZ2h0OjI0cHg7bWFyZ2luOmF1dG87ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZpbGw6Y3VycmVudENvbG9yO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtaW5wdXQtY29udGFpbmVye3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O21hcmdpbjo0cHggMCAyNHB4O3BhZGRpbmctdG9wOjE2cHg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlcntoZWlnaHQ6MXB4O3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlciwubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbHt0b3A6MjNweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmb250LXNpemU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFweDtsaW5lLWhlaWdodDozMnB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDt0ZXh0LXNoYWRvdzpub25lOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOmluaXRpYWx9Lm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDoyMzBweDtwYWRkaW5nOjVweCAwO3Jlc2l6ZTpub25lO2xpbmUtaGVpZ2h0OjEuM2VtfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWVycm9ye2hlaWdodDoyMHB4O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtOHB4LDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudHtoZWlnaHQ6MjBweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgbGFiZWx7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTBweDtvcGFjaXR5OjA7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbHtwb2ludGVyLWV2ZW50czphdXRvO3RvcDowO29wYWNpdHk6MTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbHtwb2ludGVyLWV2ZW50czpub25lfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWlucHV0LWZvY3VzZWQgbGFiZWx7dG9wOjIzcHg7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVse29wYWNpdHk6MH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVye2JhY2tncm91bmQ6MCAxMDAlIHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMCwwLDAsLjM4KSAwLHJnYmEoMCwwLDAsLjM4KSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxcHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgdGV4dGFyZWF7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkLm1kLWlucHV0LWZvY3VzZWQgLm1kLXRvZ2dsZS1wYXNzd29yZHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQgLm1kLXRvZ2dsZS1wYXNzd29yZHttYXJnaW46MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTotMnB4O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIC5tZC1pbmstcmlwcGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWludmFsaWQgLm1kLWVycm9ye29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXJlcXVpcmVkIGxhYmVsOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDEwMCUgKyAycHgpKTtjb250ZW50OlxcXCIqXFxcIjtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxZW07dmVydGljYWwtYWxpZ246dG9wfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbGF5b3V0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtcm93ey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW57LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm1kLWxheW91dC5tZC1jb250YWluZXJ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTIwMHB4fS5tZC1sYXlvdXQubWQtY29udGFpbmVyLm1kLWNlbnRlcmVke21hcmdpbjowIGF1dG99Lm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoxMnB4fS5tZC1ndXR0ZXIgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1ib3R0b206LTEycHh9Lm1kLWd1dHRlciAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4fUBtZWRpYSAobWF4LXdpZHRoOjk0NHB4KXsubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LThweDttYXJnaW4tbGVmdDotOHB4fS5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy1sZWZ0OjhweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW57bWFyZ2luLXRvcDotOHB4O21hcmdpbi1ib3R0b206LThweH0ubWQtZ3V0dGVyIC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fX0ubWQtZ3V0dGVyLTg6bm90KC5tZC1jb2x1bW4pe21hcmdpbi1yaWdodDotNHB4O21hcmdpbi1sZWZ0Oi00cHh9Lm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6NHB4O3BhZGRpbmctbGVmdDo0cHh9Lm1kLWd1dHRlci04IC5tZC1jb2x1bW57bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206LTRweH0ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbj4ubWQtbGF5b3V0e3BhZGRpbmctdG9wOjRweDtwYWRkaW5nLWJvdHRvbTo0cHh9Lm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubWQtZ3V0dGVyLTE2Om5vdCgubWQtY29sdW1uKT4ubWQtbGF5b3V0e3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctbGVmdDo4cHh9Lm1kLWd1dHRlci0xNiAubWQtY29sdW1ue21hcmdpbi10b3A6LThweDttYXJnaW4tYm90dG9tOi04cHh9Lm1kLWd1dHRlci0xNiAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWQtZ3V0dGVyLTI0Om5vdCgubWQtY29sdW1uKXttYXJnaW4tcmlnaHQ6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9Lm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbik+Lm1kLWxheW91dHtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjEycHh9Lm1kLWd1dHRlci0yNCAubWQtY29sdW1ue21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWJvdHRvbTotMTJweH0ubWQtZ3V0dGVyLTI0IC5tZC1jb2x1bW4+Lm1kLWxheW91dHtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHh9Lm1kLWd1dHRlci00MDpub3QoLm1kLWNvbHVtbil7bWFyZ2luLXJpZ2h0Oi0yMHB4O21hcmdpbi1sZWZ0Oi0yMHB4fS5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pPi5tZC1sYXlvdXR7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctbGVmdDoyMHB4fS5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbnttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1ib3R0b206LTIwcHh9Lm1kLWd1dHRlci00MCAubWQtY29sdW1uPi5tZC1sYXlvdXR7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4fS5tZC1mbGV4ey1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtMTAwe21hcmdpbi1sZWZ0OjEwMCV9QG1lZGlhIChtaW4td2lkdGg6MTkwNHB4KXsubWQtcm93LXhsYXJnZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLXhsYXJnZXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC14bGFyZ2V7LW1zLWZsZXg6MSAxO2ZsZXg6MSAxfS5tZC1mbGV4LXhsYXJnZS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LXhsYXJnZS02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzN7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LXhsYXJnZS01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01e21hcmdpbi1sZWZ0OjUlfS5tZC1mbGV4LXhsYXJnZS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXhsYXJnZS0xNXttaW4td2lkdGg6MTUlOy1tcy1mbGV4OjAgMSAxNSU7ZmxleDowIDEgMTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LXhsYXJnZS0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjB7bWFyZ2luLWxlZnQ6MjAlfS5tZC1mbGV4LXhsYXJnZS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXhsYXJnZS0zMHttaW4td2lkdGg6MzAlOy1tcy1mbGV4OjAgMSAzMCU7ZmxleDowIDEgMzAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LXhsYXJnZS0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzV7bWFyZ2luLWxlZnQ6MzUlfS5tZC1mbGV4LXhsYXJnZS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXhsYXJnZS00NXttaW4td2lkdGg6NDUlOy1tcy1mbGV4OjAgMSA0NSU7ZmxleDowIDEgNDUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LXhsYXJnZS01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTB7bWFyZ2luLWxlZnQ6NTAlfS5tZC1mbGV4LXhsYXJnZS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXhsYXJnZS02MHttaW4td2lkdGg6NjAlOy1tcy1mbGV4OjAgMSA2MCU7ZmxleDowIDEgNjAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LXhsYXJnZS02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjV7bWFyZ2luLWxlZnQ6NjUlfS5tZC1mbGV4LXhsYXJnZS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXhsYXJnZS03NXttaW4td2lkdGg6NzUlOy1tcy1mbGV4OjAgMSA3NSU7ZmxleDowIDEgNzUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LXhsYXJnZS04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODB7bWFyZ2luLWxlZnQ6ODAlfS5tZC1mbGV4LXhsYXJnZS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXhsYXJnZS05MHttaW4td2lkdGg6OTAlOy1tcy1mbGV4OjAgMSA5MCU7ZmxleDowIDEgOTAlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LXhsYXJnZS05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTV7bWFyZ2luLWxlZnQ6OTUlfS5tZC1mbGV4LXhsYXJnZS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQteGxhcmdlLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1oaWRlLXhsYXJnZXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjE5MDNweCl7Lm1kLXJvdy1sYXJnZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubWQtY29sdW1uLWxhcmdley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LWxhcmdley1tcy1mbGV4OjEgMTtmbGV4OjEgMX0ubWQtZmxleC1sYXJnZS0zM3ttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSAzMy4zMzMzMyU7ZmxleDowIDEgMzMuMzMzMzMlfS5tZC1mbGV4LWxhcmdlLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMze21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjZ7bWFyZ2luLWxlZnQ6NjYuNjY2NjYlfS5tZC1mbGV4LWxhcmdlLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNXttYXJnaW4tbGVmdDo1JX0ubWQtZmxleC1sYXJnZS0xMHttaW4td2lkdGg6MTAlOy1tcy1mbGV4OjAgMSAxMCU7ZmxleDowIDEgMTAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbGFyZ2UtMTV7bWluLXdpZHRoOjE1JTstbXMtZmxleDowIDEgMTUlO2ZsZXg6MCAxIDE1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTV7bWFyZ2luLWxlZnQ6MTUlfS5tZC1mbGV4LWxhcmdlLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTIwe21hcmdpbi1sZWZ0OjIwJX0ubWQtZmxleC1sYXJnZS0yNXttaW4td2lkdGg6MjUlOy1tcy1mbGV4OjAgMSAyNSU7ZmxleDowIDEgMjUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbGFyZ2UtMzB7bWluLXdpZHRoOjMwJTstbXMtZmxleDowIDEgMzAlO2ZsZXg6MCAxIDMwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzB7bWFyZ2luLWxlZnQ6MzAlfS5tZC1mbGV4LWxhcmdlLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTM1e21hcmdpbi1sZWZ0OjM1JX0ubWQtZmxleC1sYXJnZS00MHttaW4td2lkdGg6NDAlOy1tcy1mbGV4OjAgMSA0MCU7ZmxleDowIDEgNDAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbGFyZ2UtNDV7bWluLXdpZHRoOjQ1JTstbXMtZmxleDowIDEgNDUlO2ZsZXg6MCAxIDQ1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNDV7bWFyZ2luLWxlZnQ6NDUlfS5tZC1mbGV4LWxhcmdlLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTUwe21hcmdpbi1sZWZ0OjUwJX0ubWQtZmxleC1sYXJnZS01NXttaW4td2lkdGg6NTUlOy1tcy1mbGV4OjAgMSA1NSU7ZmxleDowIDEgNTUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbGFyZ2UtNjB7bWluLXdpZHRoOjYwJTstbXMtZmxleDowIDEgNjAlO2ZsZXg6MCAxIDYwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjB7bWFyZ2luLWxlZnQ6NjAlfS5tZC1mbGV4LWxhcmdlLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY1e21hcmdpbi1sZWZ0OjY1JX0ubWQtZmxleC1sYXJnZS03MHttaW4td2lkdGg6NzAlOy1tcy1mbGV4OjAgMSA3MCU7ZmxleDowIDEgNzAlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbGFyZ2UtNzV7bWluLXdpZHRoOjc1JTstbXMtZmxleDowIDEgNzUlO2ZsZXg6MCAxIDc1JX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNzV7bWFyZ2luLWxlZnQ6NzUlfS5tZC1mbGV4LWxhcmdlLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTgwe21hcmdpbi1sZWZ0OjgwJX0ubWQtZmxleC1sYXJnZS04NXttaW4td2lkdGg6ODUlOy1tcy1mbGV4OjAgMSA4NSU7ZmxleDowIDEgODUlfS5tZC1mbGV4LW9mZnNldC1sYXJnZS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbGFyZ2UtOTB7bWluLXdpZHRoOjkwJTstbXMtZmxleDowIDEgOTAlO2ZsZXg6MCAxIDkwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTB7bWFyZ2luLWxlZnQ6OTAlfS5tZC1mbGV4LWxhcmdlLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTk1e21hcmdpbi1sZWZ0Ojk1JX0ubWQtZmxleC1sYXJnZS0xMDB7bWluLXdpZHRoOjEwMCU7LW1zLWZsZXg6MCAxIDEwMCU7ZmxleDowIDEgMTAwJX0ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUtbGFyZ2V7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1heC13aWR0aDoxMjY0cHgpey5tZC1yb3ctbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4tbWVkaXVtey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LW1lZGl1bXstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtbWVkaXVtLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgtbWVkaXVtLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgtbWVkaXVtLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtbWVkaXVtLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgtbWVkaXVtLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgtbWVkaXVtLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtbWVkaXVtLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgtbWVkaXVtLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgtbWVkaXVtLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtbWVkaXVtLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgtbWVkaXVtLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgtbWVkaXVtLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtbWVkaXVtLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgtbWVkaXVtLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgtbWVkaXVtLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtbWVkaXVtLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgtbWVkaXVtLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgtbWVkaXVtLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtbWVkaXVtLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgtbWVkaXVtLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgtbWVkaXVtLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtbWVkaXVtLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUtbWVkaXVte2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6OTQ0cHgpey5tZC1yb3ctc21hbGx7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Lm1kLWNvbHVtbi1zbWFsbHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubWQtZmxleC1zbWFsbHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgtc21hbGwtMzN7bWluLXdpZHRoOjMzLjMzMzMzJTstbXMtZmxleDowIDEgMzMuMzMzMzMlO2ZsZXg6MCAxIDMzLjMzMzMzJX0ubWQtZmxleC1zbWFsbC02NnttaW4td2lkdGg6MzMuMzMzMzMlOy1tcy1mbGV4OjAgMSA2Ni42NjY2NiU7ZmxleDowIDEgNjYuNjY2NjYlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY2e21hcmdpbi1sZWZ0OjY2LjY2NjY2JX0ubWQtZmxleC1zbWFsbC01e21pbi13aWR0aDo1JTstbXMtZmxleDowIDEgNSU7ZmxleDowIDEgNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgtc21hbGwtMTB7bWluLXdpZHRoOjEwJTstbXMtZmxleDowIDEgMTAlO2ZsZXg6MCAxIDEwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMTB7bWFyZ2luLWxlZnQ6MTAlfS5tZC1mbGV4LXNtYWxsLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTE1e21hcmdpbi1sZWZ0OjE1JX0ubWQtZmxleC1zbWFsbC0yMHttaW4td2lkdGg6MjAlOy1tcy1mbGV4OjAgMSAyMCU7ZmxleDowIDEgMjAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgtc21hbGwtMjV7bWluLXdpZHRoOjI1JTstbXMtZmxleDowIDEgMjUlO2ZsZXg6MCAxIDI1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtMjV7bWFyZ2luLWxlZnQ6MjUlfS5tZC1mbGV4LXNtYWxsLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMwe21hcmdpbi1sZWZ0OjMwJX0ubWQtZmxleC1zbWFsbC0zNXttaW4td2lkdGg6MzUlOy1tcy1mbGV4OjAgMSAzNSU7ZmxleDowIDEgMzUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgtc21hbGwtNDB7bWluLXdpZHRoOjQwJTstbXMtZmxleDowIDEgNDAlO2ZsZXg6MCAxIDQwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNDB7bWFyZ2luLWxlZnQ6NDAlfS5tZC1mbGV4LXNtYWxsLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQ1e21hcmdpbi1sZWZ0OjQ1JX0ubWQtZmxleC1zbWFsbC01MHttaW4td2lkdGg6NTAlOy1tcy1mbGV4OjAgMSA1MCU7ZmxleDowIDEgNTAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgtc21hbGwtNTV7bWluLXdpZHRoOjU1JTstbXMtZmxleDowIDEgNTUlO2ZsZXg6MCAxIDU1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNTV7bWFyZ2luLWxlZnQ6NTUlfS5tZC1mbGV4LXNtYWxsLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTYwe21hcmdpbi1sZWZ0OjYwJX0ubWQtZmxleC1zbWFsbC02NXttaW4td2lkdGg6NjUlOy1tcy1mbGV4OjAgMSA2NSU7ZmxleDowIDEgNjUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgtc21hbGwtNzB7bWluLXdpZHRoOjcwJTstbXMtZmxleDowIDEgNzAlO2ZsZXg6MCAxIDcwJX0ubWQtZmxleC1vZmZzZXQtc21hbGwtNzB7bWFyZ2luLWxlZnQ6NzAlfS5tZC1mbGV4LXNtYWxsLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTc1e21hcmdpbi1sZWZ0Ojc1JX0ubWQtZmxleC1zbWFsbC04MHttaW4td2lkdGg6ODAlOy1tcy1mbGV4OjAgMSA4MCU7ZmxleDowIDEgODAlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgtc21hbGwtODV7bWluLXdpZHRoOjg1JTstbXMtZmxleDowIDEgODUlO2ZsZXg6MCAxIDg1JX0ubWQtZmxleC1vZmZzZXQtc21hbGwtODV7bWFyZ2luLWxlZnQ6ODUlfS5tZC1mbGV4LXNtYWxsLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTkwe21hcmdpbi1sZWZ0OjkwJX0ubWQtZmxleC1zbWFsbC05NXttaW4td2lkdGg6OTUlOy1tcy1mbGV4OjAgMSA5NSU7ZmxleDowIDEgOTUlfS5tZC1mbGV4LW9mZnNldC1zbWFsbC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgtc21hbGwtMTAwe21pbi13aWR0aDoxMDAlOy1tcy1mbGV4OjAgMSAxMDAlO2ZsZXg6MCAxIDEwMCV9Lm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwMHttYXJnaW4tbGVmdDoxMDAlfS5tZC1oaWRlLXNtYWxse2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpey5tZC1yb3cteHNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5tZC1jb2x1bW4teHNtYWxsey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5tZC1mbGV4LXhzbWFsbHstbXMtZmxleDoxIDE7ZmxleDoxIDF9Lm1kLWZsZXgteHNtYWxsLTMze21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDMzLjMzMzMzJTtmbGV4OjAgMSAzMy4zMzMzMyV9Lm1kLWZsZXgteHNtYWxsLTY2e21pbi13aWR0aDozMy4zMzMzMyU7LW1zLWZsZXg6MCAxIDY2LjY2NjY2JTtmbGV4OjAgMSA2Ni42NjY2NiV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zM3ttYXJnaW4tbGVmdDozMy4zMzMzMyV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NnttYXJnaW4tbGVmdDo2Ni42NjY2NiV9Lm1kLWZsZXgteHNtYWxsLTV7bWluLXdpZHRoOjUlOy1tcy1mbGV4OjAgMSA1JTtmbGV4OjAgMSA1JX0ubWQtZmxleC1vZmZzZXQteHNtYWxsLTV7bWFyZ2luLWxlZnQ6NSV9Lm1kLWZsZXgteHNtYWxsLTEwe21pbi13aWR0aDoxMCU7LW1zLWZsZXg6MCAxIDEwJTtmbGV4OjAgMSAxMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMHttYXJnaW4tbGVmdDoxMCV9Lm1kLWZsZXgteHNtYWxsLTE1e21pbi13aWR0aDoxNSU7LW1zLWZsZXg6MCAxIDE1JTtmbGV4OjAgMSAxNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xNXttYXJnaW4tbGVmdDoxNSV9Lm1kLWZsZXgteHNtYWxsLTIwe21pbi13aWR0aDoyMCU7LW1zLWZsZXg6MCAxIDIwJTtmbGV4OjAgMSAyMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yMHttYXJnaW4tbGVmdDoyMCV9Lm1kLWZsZXgteHNtYWxsLTI1e21pbi13aWR0aDoyNSU7LW1zLWZsZXg6MCAxIDI1JTtmbGV4OjAgMSAyNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yNXttYXJnaW4tbGVmdDoyNSV9Lm1kLWZsZXgteHNtYWxsLTMwe21pbi13aWR0aDozMCU7LW1zLWZsZXg6MCAxIDMwJTtmbGV4OjAgMSAzMCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zMHttYXJnaW4tbGVmdDozMCV9Lm1kLWZsZXgteHNtYWxsLTM1e21pbi13aWR0aDozNSU7LW1zLWZsZXg6MCAxIDM1JTtmbGV4OjAgMSAzNSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zNXttYXJnaW4tbGVmdDozNSV9Lm1kLWZsZXgteHNtYWxsLTQwe21pbi13aWR0aDo0MCU7LW1zLWZsZXg6MCAxIDQwJTtmbGV4OjAgMSA0MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00MHttYXJnaW4tbGVmdDo0MCV9Lm1kLWZsZXgteHNtYWxsLTQ1e21pbi13aWR0aDo0NSU7LW1zLWZsZXg6MCAxIDQ1JTtmbGV4OjAgMSA0NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00NXttYXJnaW4tbGVmdDo0NSV9Lm1kLWZsZXgteHNtYWxsLTUwe21pbi13aWR0aDo1MCU7LW1zLWZsZXg6MCAxIDUwJTtmbGV4OjAgMSA1MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01MHttYXJnaW4tbGVmdDo1MCV9Lm1kLWZsZXgteHNtYWxsLTU1e21pbi13aWR0aDo1NSU7LW1zLWZsZXg6MCAxIDU1JTtmbGV4OjAgMSA1NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01NXttYXJnaW4tbGVmdDo1NSV9Lm1kLWZsZXgteHNtYWxsLTYwe21pbi13aWR0aDo2MCU7LW1zLWZsZXg6MCAxIDYwJTtmbGV4OjAgMSA2MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02MHttYXJnaW4tbGVmdDo2MCV9Lm1kLWZsZXgteHNtYWxsLTY1e21pbi13aWR0aDo2NSU7LW1zLWZsZXg6MCAxIDY1JTtmbGV4OjAgMSA2NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NXttYXJnaW4tbGVmdDo2NSV9Lm1kLWZsZXgteHNtYWxsLTcwe21pbi13aWR0aDo3MCU7LW1zLWZsZXg6MCAxIDcwJTtmbGV4OjAgMSA3MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03MHttYXJnaW4tbGVmdDo3MCV9Lm1kLWZsZXgteHNtYWxsLTc1e21pbi13aWR0aDo3NSU7LW1zLWZsZXg6MCAxIDc1JTtmbGV4OjAgMSA3NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03NXttYXJnaW4tbGVmdDo3NSV9Lm1kLWZsZXgteHNtYWxsLTgwe21pbi13aWR0aDo4MCU7LW1zLWZsZXg6MCAxIDgwJTtmbGV4OjAgMSA4MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04MHttYXJnaW4tbGVmdDo4MCV9Lm1kLWZsZXgteHNtYWxsLTg1e21pbi13aWR0aDo4NSU7LW1zLWZsZXg6MCAxIDg1JTtmbGV4OjAgMSA4NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04NXttYXJnaW4tbGVmdDo4NSV9Lm1kLWZsZXgteHNtYWxsLTkwe21pbi13aWR0aDo5MCU7LW1zLWZsZXg6MCAxIDkwJTtmbGV4OjAgMSA5MCV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05MHttYXJnaW4tbGVmdDo5MCV9Lm1kLWZsZXgteHNtYWxsLTk1e21pbi13aWR0aDo5NSU7LW1zLWZsZXg6MCAxIDk1JTtmbGV4OjAgMSA5NSV9Lm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05NXttYXJnaW4tbGVmdDo5NSV9Lm1kLWZsZXgteHNtYWxsLTEwMHttaW4td2lkdGg6MTAwJTstbXMtZmxleDowIDEgMTAwJTtmbGV4OjAgMSAxMDAlfS5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAwe21hcmdpbi1sZWZ0OjEwMCV9Lm1kLWhpZGUteHNtYWxse2Rpc3BsYXk6bm9uZX19Lm1kLWxpc3R7bWFyZ2luOjA7cGFkZGluZzo4cHggMDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmV9Lm1kLWxpc3QubWQtZGVuc2V7cGFkZGluZzo0cHggMH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo0MHB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MjRweH0ubWQtbGlzdC5tZC1kZW5zZSAubWQtYXZhdGFye3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NjBweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMSksLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzJweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6NzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7d2lkdGg6MzZweDttaW4td2lkdGg6MzZweDtoZWlnaHQ6MzZweDttaW4taGVpZ2h0OjM2cHh9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyMHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMSksLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKXtmb250LXNpemU6MTNweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye21pbi1oZWlnaHQ6ODhweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtYXZhdGFye21hcmdpbjowfS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyey1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lm1kLWxpc3QgLm1kLXN1YmhlYWRlci5tZC1pbnNldHtwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdD4ubWQtc3ViaGVhZGVyOmZpcnN0LW9mLXR5cGV7bWFyZ2luLXRvcDotOHB4fS5tZC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbS5tZC1pbnNldCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6NzJweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXI+Lm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czowfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXI+Lm1kLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjMycHh9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9ue21hcmdpbjowIC0ycHggMCAwfS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uOm50aC1jaGlsZCgzKXttYXJnaW46MCAtMnB4IDAgMTZweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpsZWZ0O3RleHQtdHJhbnNmb3JtOm5vbmV9Lm1kLWxpc3QtaXRlbSAubWQtZGl2aWRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDowO2xlZnQ6MH0ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIsLm1kLWxpc3QtaXRlbSAubWQtaWNvbnttYXJnaW46MH0ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3Qtb2YtdHlwZSsqLC5tZC1saXN0LWl0ZW0gLm1kLWljb246Zmlyc3Qtb2YtdHlwZSsqey1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG99Lm1kLWxpc3QtaXRlbSAubWQtYXZhdGFye21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4fS5tZC1saXN0LWl0ZW0gLm1kLWljb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1saXN0LWl0ZW0tZXhwYW5ke21pbi1oZWlnaHQ6NDhweDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdzpoaWRkZW59Lm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIsLm1kLWxpc3QtaXRlbS1leHBhbmQ6YmVmb3Jle2hlaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtsZWZ0OjA7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmV7dG9wOjB9Lm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXJ7Ym90dG9tOjB9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZle3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTphZnRlciwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpmaXJzdC1vZi10eXBlOmJlZm9yZSwubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6bGFzdC1vZi10eXBlOmFmdGVye2JhY2tncm91bmQ6bm9uZX0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU+Lm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtZXhwYW5kLWluZGljYXRvcnt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwwLDApfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZT4ubWQtbGlzdC1leHBhbmR7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWQtbGlzdC1pdGVtLWV4cGFuZD4ubWQtbGlzdC1pdGVtLWNvbnRhaW5lcj4ubWQtbGlzdC1pdGVtLWhvbGRlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWV4cGFuc2lvbi1pbmRpY2F0b3IsLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWljb24sLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKTt3aWxsLWNoYW5nZTptYXJnaW4tYm90dG9tO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpfS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZCAubWQtbGlzdHtwYWRkaW5nOjB9Lm1kLWxpc3QtdGV4dC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW47LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjEuMjVlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vcm1hbH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDEpe2ZvbnQtc2l6ZToxNnB4fS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMiksLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgzKXttYXJnaW46MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHh9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgyKTpub3QoOmxhc3QtY2hpbGQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbWVudXtkaXNwbGF5OmlubGluZS1ibG9ja30ubWQtbWVudS1jb250ZW50e3dpZHRoOjE2OHB4O21pbi13aWR0aDo4NHB4O21heC13aWR0aDozOTJweDttaW4taGVpZ2h0OjY0cHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMzJweCk7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTIwO3RyYW5zZm9ybTpzY2FsZSguOSwuODUpIHRyYW5zbGF0ZVooMCk7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7b3BhY2l0eTowO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjI1cyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKSxtYXJnaW4gLjJzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpLHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKSAuMjVzO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5LHdpZHRofS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0Oi04cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnR7bWFyZ2luLXRvcDotMjBweDttYXJnaW4tbGVmdDo4cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0e21hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDotOHB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOjExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0OjhweDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmV7bWFyZ2luLXRvcDoxMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlcnttYXJnaW46MH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMXt3aWR0aDo4NHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ye3dpZHRoOjExMnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ze3dpZHRoOjE2OHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00e3dpZHRoOjIyNHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS01e3dpZHRoOjI4MHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02e3dpZHRoOjMzNnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03e3dpZHRoOjM5MnB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzfS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0e29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4xNXN9Lm1kLW1lbnUtY29udGVudCAubWQtbGlzdHtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtbWVudS1pdGVte2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuMmVtfS5tZC1tZW51LWl0ZW1bZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fS5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9Lm1kLXJhZGlve3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7cmlnaHQ6M3B4O2JvdHRvbTozcHg7bGVmdDozcHg7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKC4zOCwuMzgsMSk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxle3RvcDotMTZweDtyaWdodDotMTZweDtib3R0b206LTE2cHg7bGVmdDotMTZweDtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1yYWRpbyAubWQtcmFkaW8tbGFiZWx7aGVpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1yYWRpby5tZC1jaGVja2VkIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXJ7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXNlbGVjdHt3aWR0aDoxMDAlO21pbi13aWR0aDoxMjhweDtoZWlnaHQ6MzJweDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc2VsZWN0OmFmdGVye21hcmdpbi10b3A6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSBzY2FsZVkoLjQ1KSBzY2FsZVgoLjg1KTt0cmFuc2l0aW9uOmFsbCAuMTVzIGxpbmVhcjtjb250ZW50OlxcXCJcXFxcMjVCQ1xcXCJ9Lm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51e3RvcDotOHB4O3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwxLDEpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouMjVzO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm0sdG9wfS5tZC1zZWxlY3QubWQtYWN0aXZlIC5tZC1zZWxlY3QtbWVudT4qe29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7dHJhbnNpdGlvbi1kdXJhdGlvbjouMTVzO3RyYW5zaXRpb24tZGVsYXk6LjFzfS5tZC1zZWxlY3QubWQtZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dXNlci1kcmFnOm5vbmV9Lm1kLXNlbGVjdCBzZWxlY3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXNlbGVjdCAubWQtbWVudSwubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWV7d2lkdGg6MTAwJTtoZWlnaHQ6MzJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nLXJpZ2h0OjI0cHg7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mjtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDozM3B4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcntjb2xvcjpoc2xhKDAsMCUsNDYlLC44Nyk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlcjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOi04cHh9Lm1kLXNlbGVjdC1jb250ZW50e3dpZHRoOmF1dG87bWF4LWhlaWdodDoyNTZweH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNnB4fS5tZC1zZWxlY3QtY29udGVudCAubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye292ZXJmbG93OnZpc2libGU7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94e21hcmdpbjowfS5tZC1zZWxlY3QtY29udGVudC5tZC1tdWx0aXBsZSAubWQtY2hlY2tib3gtbGFiZWx7cGFkZGluZy1sZWZ0OjE2cHg7Y3Vyc29yOnBvaW50ZXJ9Lm1kLXNpZGVuYXYubWQtbGVmdCAubWQtc2lkZW5hdi1jb250ZW50e2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1yaWdodCAubWQtc2lkZW5hdi1jb250ZW50e3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDEwMCUsMCwwKX0ubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1iYWNrZHJvcCwubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1jb250ZW50e3Bvc2l0aW9uOmZpeGVkfS5tZC1zaWRlbmF2IC5tZC1zaWRlbmF2LWNvbnRlbnR7d2lkdGg6MzA0cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7ei1pbmRleDoxMDA7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kLXNpZGVuYXYgLm1kLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3dpbGwtY2hhbmdlOm9wYWNpdHl9Lm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWNvbnRlbnR7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1iYWNrZHJvcHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtc3Bpbm5lcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtwb2ludGVyLWV2ZW50czpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItZHJhd3thbmltYXRpb246c3Bpbm5lci1yb3RhdGUgMS45cyBsaW5lYXIgaW5maW5pdGU7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDApfS5tZC1zcGlubmVyLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXNwaW5uZXItcGF0aHtzdHJva2UtZGFzaGFycmF5OjIsMjAwO2FuaW1hdGlvbjpzcGlubmVyLWRhc2ggMS40MjVzIGVhc2UtaW4tb3V0IGluZmluaXRlfS5tZC1zcGlubmVyLm1kLXNwaW5uZXItbGVhdmUtYWN0aXZle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoLjgpIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmV7dHJhbnNpdGlvbi1kdXJhdGlvbjoyc30ubWQtc3Bpbm5lcjpub3QoLm1kLWluZGV0ZXJtaW5hdGUpLm1kLXNwaW5uZXItZW50ZXItYWN0aXZlIC5tZC1zcGlubmVyLWRyYXd7YW5pbWF0aW9uOnNwaW5uZXItaW5pdGlhbC1yb3RhdGUgMS45OHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgZm9yd2FyZHN9Lm1kLXNwaW5uZXItZHJhd3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0ubWQtc3Bpbm5lci1wYXRoe2ZpbGw6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1taXRlcmxpbWl0OjEwO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX1Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRle3Rve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pIHRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc3Bpbm5lci1pbml0aWFsLXJvdGF0ZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVooMCl9MjAle29wYWNpdHk6MX10b3t0cmFuc2Zvcm06cm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzcGlubmVyLWRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheToyLDIwMDtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMzVweH10b3tzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMTI0cHh9fS5tZC1zdWJoZWFkZXJ7bWluLWhlaWdodDo0OHB4O3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtZmxvdzpyb3cgd3JhcDtmbGV4LWZsb3c6cm93IHdyYXA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWQtc3dpdGNoe3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXJ7d2lkdGg6MzRweDtoZWlnaHQ6MTRweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjE0cHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC10aHVtYnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2l0aW9uOmFsbCAuMTVzIGxpbmVhcn0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OWVtfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGV7dG9wOi0xNnB4O3JpZ2h0Oi0xNnB4O2JvdHRvbTotMTZweDtsZWZ0Oi0xNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7bWFyZ2luOjA7cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ei1pbmRleDoyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlcjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWxhYmVse2hlaWdodDoxNHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MTRweH0ubWQtc3dpdGNoLm1kLWRyYWdnaW5nIC5tZC1zd2l0Y2gtdGh1bWJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5tZC1zd2l0Y2gubWQtZGlzYWJsZWQgLm1kLXN3aXRjaC10aHVtYntjdXJzb3I6ZGVmYXVsdH0ubWQtdGFibGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gd3JhcDtmbGV4LWZsb3c6Y29sdW1uIHdyYXA7b3ZlcmZsb3cteDphdXRvfS5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciwubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIsLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC10YWJsZS1jZWxse3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRhYmxlIHRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7b3ZlcmZsb3c6aGlkZGVufS5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93e2JvcmRlci10b3A6MXB4IHNvbGlkICNlMGUwZTB9Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3cubWQtc2VsZWN0ZWQgLm1kLXRhYmxlLWNlbGx7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93OmhvdmVyIC5tZC10YWJsZS1jZWxse2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWR7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtYWxpZ246bGVmdH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQ6bGFzdC1jaGlsZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dHtwYWRkaW5nLXJpZ2h0OjI0cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLm1kLW51bWVyaWN7dGV4dC1hbGlnbjpyaWdodH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb257d2lkdGg6MTZweDttaW4td2lkdGg6MTZweDtoZWlnaHQ6MTZweDttaW4taGVpZ2h0OjE2cHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpub3QoLm1kLXNvcnRhYmxlLWljb24pe21hcmdpbjowIDRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVye2hlaWdodDo1NnB4O3BhZGRpbmc6MTRweCAwO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQtdGV4dHtoZWlnaHQ6MjhweDtwYWRkaW5nLXJpZ2h0OjMycHg7cGFkZGluZy1sZWZ0OjI0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjI4cHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZXtjdXJzb3I6cG9pbnRlcn0ubWQtdGFibGUgLm1kLXNvcnRhYmxlOmZpcnN0LW9mLXR5cGUgLm1kLXNvcnRhYmxlLWljb257bGVmdDphdXRvO3JpZ2h0OjEwcHh9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQsLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb24sLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpob3ZlciAubWQtc29ydGFibGUtaWNvbntvcGFjaXR5OjF9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQgLm1kLXNvcnRhYmxlLWljb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkLWRlc2NlbmRpbmcgLm1kLXNvcnRhYmxlLWljb257dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZSAubWQtc29ydGFibGUtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtvcGFjaXR5OjA7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC10YWJsZSAubWQtc29ydGFibGUgLm1kLWluay1yaXBwbGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbHtoZWlnaHQ6NDhweDtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpY3t0ZXh0LWFsaWduOnJpZ2h0fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcnstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLWhhcy1hY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZzo2cHggMzJweCA2cHggMjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbjowIC0xMHB4IDAgMH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiAubWQtaWNvbnt3aWR0aDoxOHB4O21pbi13aWR0aDoxOHB4O2hlaWdodDoxOHB4O21pbi1oZWlnaHQ6MThweDttYXJnaW46MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb257d2lkdGg6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24rLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyLC5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uKy5tZC10YWJsZS1oZWFkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0e3BhZGRpbmctbGVmdDo4cHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLWxlZnQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3h7bWFyZ2luOjB9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcnt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O21hcmdpbi10b3A6MXB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXJ7dG9wOi0xcHg7bGVmdDo0cHh9Lm1kLXRhYmxlIC5tZC1zZWxlY3R7bWluLXdpZHRoOjg0cHh9Lm1kLXRhYmxlIC5tZC1vcHRpb24sLm1kLXRhYmxlIC5tZC1zZWxlY3QtdmFsdWV7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWVkaXQtdHJpZ2dlcntkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXRhYmxlLWVkaXQtdHJpZ2dlci5tZC1lZGl0ZWR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZS1kaWFsb2d7bWF4LWhlaWdodDowO21hcmdpbjowO3BhZGRpbmc6MCAyNHB4IDJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2xlZnQ6MjRweDt6LWluZGV4OjYwO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG1heC1oZWlnaHQgMHMgLjVzO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLC04cHgsMCl9Lm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmV7bWF4LWhlaWdodDo0MDBweDtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgjMDAwKTtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1kaWFsb2cubWQtbGFyZ2V7cGFkZGluZzoxMnB4IDI0cHggMnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lcnttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxNnB4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dHtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVye2ZvbnQtc2l6ZToxMy41cHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC10YWJsZS1kaWFsb2cgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweH0ubWQtdGFibGUtY2FyZHtvdmVyZmxvdzp2aXNpYmxlfS5tZC10YWJsZS1jYXJkIC5tZC10b29sYmFye3BhZGRpbmctbGVmdDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWQtdGFibGUtY2FyZCAubWQtdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7Zm9udC1zaXplOjIwcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb257aGVpZ2h0OjU2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjEycHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXN7bWFyZ2luLXJpZ2h0OjJweDttYXJnaW4tbGVmdDoxOHB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3R7d2lkdGg6YXV0bzttaW4td2lkdGg6MzZweDttYXJnaW46MCAzMnB4fS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3Q6YWZ0ZXJ7bWFyZ2luLXRvcDowfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjEzcHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b25bZGlzYWJsZWRdIC5tZC1pY29ue2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWQtcGFnaW5hdGlvbi1zZWxlY3QubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0xNnB4fS5tZC1wYWdpbmF0aW9uLXNlbGVjdCAubWQtbGlzdC1pdGVtLWhvbGRlcntmb250LXNpemU6MTNweH0ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjEwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKCMwMDApfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIC5tZC1jb3VudGVye21hcmdpbi1sZWZ0OjhweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFic3t3aWR0aDoxMDAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47cG9zaXRpb246cmVsYXRpdmV9Lm1kLXRhYnMubWQtdHJhbnNpdGlvbi1vZmYgKnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzLm1kLWR5bmFtaWMtaGVpZ2h0IC5tZC10YWJzLWNvbnRlbnR7dHJhbnNpdGlvbjpoZWlnaHQgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb257aGVpZ2h0OjQ4cHg7bWluLWhlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWx7bWluLWhlaWdodDo3MnB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIC5tZC1pY29ue21hcmdpbi1ib3R0b206MTBweH0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWNlbnRlcmVkey1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1maXhlZCAubWQtdGFiLWhlYWRlcnstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFicyAubWQtdGFiLWhlYWRlcnttaW4td2lkdGg6NzJweDttYXgtd2lkdGg6MjY0cHg7bWFyZ2luOjA7cGFkZGluZzowIDEycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIubWQtZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29ue21hcmdpbjowfS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9ye2hlaWdodDoycHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1yaWdodHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksbGVmdCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxyaWdodCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tbGVmdHt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkscmlnaHQgLjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksbGVmdCAuMTVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubWQtdGFicyAubWQtdGFicy13cmFwcGVye3dpZHRoOjk5OTllbTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYntwYWRkaW5nOjE2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjB9Lm1kLXRvb2xiYXJ7bWluLWhlaWdodDo2NHB4O3BhZGRpbmc6MCA4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1saW5lLXBhY2s6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7ZmxleC1mbG93OnJvdyB3cmFwO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApfS5tZC10b29sYmFyLm1kLWRlbnNle21pbi1oZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1kZW5zZS5tZC1tZWRpdW17bWluLWhlaWdodDo3MnB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLWxhcmdle21pbi1oZWlnaHQ6OTZweH0ubWQtdG9vbGJhci5tZC1kZW5zZSAubWQtdG9vbGJhci1jb250YWluZXJ7aGVpZ2h0OjQ4cHh9Lm1kLXRvb2xiYXIubWQtbWVkaXVte21pbi1oZWlnaHQ6ODhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW0gLm1kLXRvb2xiYXItY29udGFpbmVyOm50aC1jaGlsZCgyKSAubWQtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6NTZweH0ubWQtdG9vbGJhci5tZC1sYXJnZXttaW4taGVpZ2h0OjEyOHB4Oy1tcy1mbGV4LWxpbmUtcGFjazppbmhlcml0O2FsaWduLWNvbnRlbnQ6aW5oZXJpdH0ubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVye21pbi1oZWlnaHQ6MTY0cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWluay1yaXBwbGV7Y29sb3I6I2ZmZn0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMTIpfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdHttYXJnaW46MTZweCAwIDhweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgLm1kLWF2YXRhcisubWQtYXZhdGFye21hcmdpbi1sZWZ0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjY0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6ZmxleC1zdGFydH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXI+Lm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoxNnB4fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXI+Lm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjB9Lm1kLXRvb2xiYXIgLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpOm5vdCgubWQtaWNvbi1idXR0b24pOm5vdCgubWQtZmFiKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xKX0ubWQtdG9vbGJhciAubWQtdGl0bGV7bWFyZ2luOjA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NDAwfS5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo4cHh9Lm1kLXRvb2xiYXIgLm1kLWxpc3R7cGFkZGluZzowO21hcmdpbjowIC04cHg7LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLXRvb2x0aXB7aGVpZ2h0OjIwcHg7cGFkZGluZzowIDhweDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjIwMDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSg5Nyw5Nyw5NywuODcpO2JvcmRlci1yYWRpdXM6MnB4O29wYWNpdHk6MDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zaXRpb24tZGVsYXk6MHM7Y29sb3I6I2ZmZjtmb250LWZhbWlseTpSb2JvdG8sTm90byBTYW5zLE5vdG8sc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtsaW5lLWhlaWdodDoyMHB4O3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC10b29sdGlwLm1kLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10b29sdGlwOm5vdCgubWQtYWN0aXZlKXt0cmFuc2l0aW9uLWRlbGF5OjBzIWltcG9ydGFudH0ubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9we21hcmdpbi10b3A6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDhweCl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodHttYXJnaW4tbGVmdDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCw1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDoxNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtOHB4KX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbS5tZC1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnR7bWFyZ2luLWxlZnQ6LTE0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4cHgsNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnQubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9Lm1kLXdoaXRlZnJhbWV7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5tZC13aGl0ZWZyYW1lLTFkcHtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yZHB7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtM2Rwe2JveC1zaGFkb3c6MCAxcHggOHB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTRkcHtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNWRwe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA1cHggOHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS02ZHB7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS03ZHB7Ym94LXNoYWRvdzowIDRweCA1cHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDdweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMTZweCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLThkcHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtOWRwe2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMGRwe2JveC1zaGFkb3c6MCA2cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCAxMHB4IDE0cHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDRweCAxOHB4IDNweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTFkcHtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTEyZHB7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xM2Rwe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyNHB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTRkcHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE1ZHB7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNmRwe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE3ZHB7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMThkcHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xOWRwe2JveC1zaGFkb3c6MCA5cHggMTJweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMTlweCAyOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzZweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIwZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIxZHB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIyZHB7Ym94LXNoYWRvdzowIDEwcHggMTRweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjJweCAzNXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDJweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTIzZHB7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTI0ZHB7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1tYXRlcmlhbC5jc3MubWFwKi9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1iMTIwZWJmNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHAudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9ob21lL25paGFsL0RldmVsb3BtZW50L0dpdEh1Yi9QZW5ndWluVXBsb2FkL1Blbmd1aW5VcGxvYWQvc3JjL1Blbmd1aW5VcGxvYWQvQ2xpZW50QXBwL0FwcC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQXBwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHRvb2xiYXI+PC90b29sYmFyPlxuXG4gICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxuICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XG4gICAgPC90cmFuc2l0aW9uPlxuXG4gICAgPG1kLWRpYWxvZy1hbGVydCA6bWQtdGl0bGU9XCJkaWFsb2cudGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiZGlhbG9nLmNvbnRlbnRcIiByZWY9XCJtb2RhbERpYWxvZ1wiPlxuICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxuXG4gICAgPG1kLWRpYWxvZy1jb25maXJtIDptZC10aXRsZT1cImNvbmZpcm0udGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiY29uZmlybS5jb250ZW50XCIgOm1kLW9rLXRleHQ9XCJjb25maXJtLm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwiY29uZmlybS5jYW5jZWxcIlxuICAgICAgQGNsb3NlPVwib25Db25maXJtQ2xvc2VcIiByZWY9XCJjb25maXJtRGlhbG9nXCI+XG4gICAgPC9tZC1kaWFsb2ctY29uZmlybT5cblxuICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cInByb21wdC50aXRsZVwiIDptZC1vay10ZXh0PVwicHJvbXB0Lm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwicHJvbXB0LmNhbmNlbFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cInByb21wdC5wbGFjZWhvbGRlclwiXG4gICAgICBAY2xvc2U9XCJvblByb21wdENsb3NlXCIgdi1tb2RlbD1cInByb21wdC5yZXNwXCIgcmVmPVwicHJvbXB0RGlhbG9nXCI+XG4gICAgPC9tZC1kaWFsb2ctcHJvbXB0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUb29sYmFyIGZyb20gJy4vY29tcG9uZW50cy90b29sYmFyJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHU6IHtcbiAgICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpYWxvZzoge1xuICAgICAgICAgIHRpdGxlOiAnICcsXG4gICAgICAgICAgY29udGVudDogJyAnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHByb21wdDoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBvazogJ09LJyxcbiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAvLyBtYXhsZW5ndGg6IDAsXG4gICAgICAgICAgcmVzcDogJycsXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy51LmtleSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgbG9nZ2VkSW46IGZ1bmN0aW9uIChub3dMb2dnZWRJbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dMb2dnZWRJbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnUpKVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgVG9vbGJhclxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2hvd1BvcHVwOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5kaWFsb2cudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLiRyZWZzLm1vZGFsRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dDb25maXJtOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNiLCB5LCBuKSB7XG4gICAgICAgIHkgPSB5IHx8ICdPSydcbiAgICAgICAgbiA9IG4gfHwgJ0NhbmNlbCdcbiAgICAgICAgdGhpcy5jb25maXJtLm9rID0geVxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FuY2VsID0gblxuICAgICAgICB0aGlzLmNvbmZpcm0uY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhpcy5jb25maXJtLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrID0gY2JcbiAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtRGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIHNob3dQcm9tcHQ6IGZ1bmN0aW9uICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNiKSB7XG4gICAgICAgIHRoaXMucHJvbXB0LnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5wcm9tcHQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IGNiXG4gICAgICAgIHRoaXMuJHJlZnMucHJvbXB0RGlhbG9nLm9wZW4oKVxuICAgICAgfSxcbiAgICAgIG9uUHJvbXB0Q2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XG4gICAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sodGhpcy5wcm9tcHQucmVzcClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvbXB0LnJlc3AgPSAnJ1xuICAgICAgICB0aGlzLnByb21wdC5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICBvbkNvbmZpcm1DbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2socmVzdWx0ID09ICdvaycpXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IG51bGxcbiAgICAgIH0sXG4gICAgICAvLyB1dGlsaXRpZXNcbiAgICAgIGh1bWFuRmlsZVNpemU6IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgdGhyZXNoID0gMTAyNFxuICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XG4gICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bml0cyA9IFsnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXG4gICAgICAgIHZhciB1ID0gLTFcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGJ5dGVzIC89IHRocmVzaFxuICAgICAgICAgICsrdVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgyKSArICcgJyArIHVuaXRzW3VdXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc2F2ZWRVID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3UnKVxuICAgICAgaWYgKHNhdmVkVSkge1xuICAgICAgICB0aGlzLnUgPSBKU09OLnBhcnNlKHNhdmVkVSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zcGFjZS12IHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuXG4gIC5zZXAtYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXBwLnZ1ZT81NTBlZjNiMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rvb2xiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTFlMjNhZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvaG9tZS9uaWhhbC9EZXZlbG9wbWVudC9HaXRIdWIvUGVuZ3VpblVwbG9hZC9QZW5ndWluVXBsb2FkL3NyYy9QZW5ndWluVXBsb2FkL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0zMTFlMjNhZVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2xiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICA8bWQtdG9vbGJhcj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljaz1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlIHRvb2xiYXItdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XG4gICAgICAgIDxtZC1tZW51IG1kLWFsaWduLXRyaWdnZXI+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBtZC1tZW51LXRyaWdnZXI+XG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3VudC11c2VybmFtZVwiPlxuICAgICAgICAgICAgICB7eyAkcm9vdC51Lm5hbWUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgICA8bWQtbWVudS1jb250ZW50PlxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL3AnKVwiPlxuICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy91JylcIj5cbiAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy9maWxlcycpXCI+XG4gICAgICAgICAgICAgIE15IEZpbGVzXG4gICAgICAgICAgICA8L21kLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxuICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxuICAgICAgICA8L21kLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiB2LW9uOmNsaWNrPVwidmlzaXRHaXRIdWJcIj5cbiAgICAgICAgICA8bWQtaWNvbj5mYXZvcml0ZTwvbWQtaWNvbj5cbiAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XCJtZC1sZWZ0XCIgcmVmPVwibGVmdFNpZGVuYXZcIj5cbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVwibWQtbGFyZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLXRvb2xiYXI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XG4gICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJtZC1kZW5zZVwiPlxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIiB2LWlmPVwiJHJvb3QubG9nZ2VkSW5cIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL3VcIj5EYXNoYm9hcmQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiY2xvc2VTaWRlbmF2XCIgdi1lbHNlPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvXCI+SG9tZTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPG1kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgICAgIDxtZC1saXN0PlxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgPC9tZC1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtc2lkZW5hdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvUGVuZ3VpblVwbG9hZCcpXG4gICAgICB9LFxuICAgICAgdG9nZ2xlTGVmdFNpZGVuYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi50b2dnbGUoKVxuICAgICAgfSxcbiAgICAgIGNsb3NlU2lkZW5hdjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LmNsb3NlKClcbiAgICAgIH0sXG4gICAgICBsb2dvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC51LmtleSA9ICcnXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH0sXG4gICAgICByb3V0ZXJHbzogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcbiAgICAgIC8vIHRoZW4gcmVnaXN0ZXIgaG9va1xuICAgICAgdGhpcy4kcm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxuICAgICAgICBuZXh0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuICAudG9vbGJhci10aXRsZSB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuYWNjb3VudC11c2VybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2xiYXIudnVlPzE2NDEyYzJjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZUxlZnRTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibWVudVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiRyb290LmxvZ2dlZEluKSA/IF9jKCdkaXYnLCBbX2MoJ21kLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFjY291bnQtdXNlcm5hbWVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiRyb290LnUubmFtZSkgKyBcIlxcbiAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1jb250ZW50JywgW19jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3AnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjY291bnRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL3UnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIERhc2hib2FyZFxcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJvdXRlckdvKCcvZmlsZXMnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIE15IEZpbGVzXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5sb2dvdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBMb2cgT3V0XFxuICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnZpc2l0R2l0SHViXG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwiZmF2b3JpdGVcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXNpZGVuYXYnLCB7XG4gICAgcmVmOiBcImxlZnRTaWRlbmF2XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWQtbGVmdFwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1sYXJnZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRvb2xiYXItY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1jb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lkZWJhci1saW5rc1wiXG4gIH0sIFtfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1kZW5zZVwiXG4gIH0sIFsoX3ZtLiRyb290LmxvZ2dlZEluKSA/IF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi91XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEYXNoYm9hcmRcIildKV0sIDEpIDogX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9hYm91dFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWJvdXRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdzcGFuJywgW192bS5fdihcIlN1cHBvcnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtZXhwYW5kJywgW19jKCdtZC1saXN0JywgW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIixcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMTFlMjNhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygndG9vbGJhcicpLCBfdm0uX3YoXCIgXCIpLCBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibWQtcm91dGVyXCJcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLXZpZXcnKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLWFsZXJ0Jywge1xuICAgIHJlZjogXCJtb2RhbERpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5kaWFsb2cudGl0bGUsXG4gICAgICBcIm1kLWNvbnRlbnQtaHRtbFwiOiBfdm0uZGlhbG9nLmNvbnRlbnRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLWNvbmZpcm0nLCB7XG4gICAgcmVmOiBcImNvbmZpcm1EaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC10aXRsZVwiOiBfdm0uY29uZmlybS50aXRsZSxcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5jb25maXJtLmNvbnRlbnQsXG4gICAgICBcIm1kLW9rLXRleHRcIjogX3ZtLmNvbmZpcm0ub2ssXG4gICAgICBcIm1kLWNhbmNlbC10ZXh0XCI6IF92bS5jb25maXJtLmNhbmNlbFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogX3ZtLm9uQ29uZmlybUNsb3NlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1wcm9tcHQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucHJvbXB0LnJlc3ApLFxuICAgICAgZXhwcmVzc2lvbjogXCJwcm9tcHQucmVzcFwiXG4gICAgfV0sXG4gICAgcmVmOiBcInByb21wdERpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5wcm9tcHQudGl0bGUsXG4gICAgICBcIm1kLW9rLXRleHRcIjogX3ZtLnByb21wdC5vayxcbiAgICAgIFwibWQtY2FuY2VsLXRleHRcIjogX3ZtLnByb21wdC5jYW5jZWwsXG4gICAgICBcIm1kLWlucHV0LXBsYWNlaG9sZGVyXCI6IF92bS5wcm9tcHQucGxhY2Vob2xkZXJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucHJvbXB0LnJlc3ApXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbG9zZVwiOiBfdm0ub25Qcm9tcHRDbG9zZSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wcm9tcHQucmVzcCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1iMTIwZWJmNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9