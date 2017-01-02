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
/***/ function(module, exports) {

	// The Vue build version to load with the `import` command
	// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
	import Vue from 'vue';
	// import App from './App'
	import VueRouter from 'vue-router';
	
	// Routes
	import routes from './routes';
	
	// Styles/fonts
	import './assets/styles/global.css';
	import './assets/styles/material-icons.css';
	import './assets/styles/normalize.css';
	import './assets/styles/ffskeleton.css';
	
	// material
	import VueMaterial from 'vue-material';
	import 'vue-material/dist/vue-material.css';
	
	// plugins
	Vue.use(VueRouter);
	Vue.use(VueMaterial);
	
	// router config
	
	let router = new VueRouter({
	  routes
	});
	
	router.afterEach(currentRoute => {
	  let mainContent = document.querySelector('.main-content');
	
	  if (mainContent) {
	    mainContent.scrollTop = 0;
	  }
	});
	
	Vue.material.theme.registerAll({
	  apptheme: {
	    primary: 'teal',
	    accent: 'cyan'
	  }
	});
	
	import App from './App';
	
	let YASApp = Vue.component('app', App);
	
	/* eslint-disable no-unused-vars */
	const app = new YASApp({
	  el: '#app',
	  router
	});
	
	// /* eslint-disable no-new */
	// new Vue({
	//   el: '#app',
	//   template: '<App />',
	//   components: { App }
	// })

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGI4ZGUxZDQ2ZGIwMTU0NDA4NmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiXSwibmFtZXMiOlsiVnVlIiwiVnVlUm91dGVyIiwicm91dGVzIiwiVnVlTWF0ZXJpYWwiLCJ1c2UiLCJyb3V0ZXIiLCJhZnRlckVhY2giLCJjdXJyZW50Um91dGUiLCJtYWluQ29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsIm1hdGVyaWFsIiwidGhlbWUiLCJyZWdpc3RlckFsbCIsImFwcHRoZW1lIiwicHJpbWFyeSIsImFjY2VudCIsIkFwcCIsIllBU0FwcCIsImNvbXBvbmVudCIsImFwcCIsImVsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBLFFBQU9BLEdBQVAsTUFBZ0IsS0FBaEI7QUFDQTtBQUNBLFFBQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUE7QUFDQSxRQUFPQyxNQUFQLE1BQW1CLFVBQW5COztBQUVBO0FBQ0EsUUFBTyw0QkFBUDtBQUNBLFFBQU8sb0NBQVA7QUFDQSxRQUFPLCtCQUFQO0FBQ0EsUUFBTyxnQ0FBUDs7QUFFQTtBQUNBLFFBQU9DLFdBQVAsTUFBd0IsY0FBeEI7QUFDQSxRQUFPLG9DQUFQOztBQUVBO0FBQ0FILEtBQUlJLEdBQUosQ0FBUUgsU0FBUjtBQUNBRCxLQUFJSSxHQUFKLENBQVFELFdBQVI7O0FBRUE7O0FBRUEsS0FBSUUsU0FBUyxJQUFJSixTQUFKLENBQWM7QUFDekJDO0FBRHlCLEVBQWQsQ0FBYjs7QUFJQUcsUUFBT0MsU0FBUCxDQUFrQkMsWUFBRCxJQUFrQjtBQUNqQyxPQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWxCOztBQUVBLE9BQUlGLFdBQUosRUFBaUI7QUFDZkEsaUJBQVlHLFNBQVosR0FBd0IsQ0FBeEI7QUFDRDtBQUNGLEVBTkQ7O0FBUUFYLEtBQUlZLFFBQUosQ0FBYUMsS0FBYixDQUFtQkMsV0FBbkIsQ0FBK0I7QUFDN0JDLGFBQVU7QUFDUkMsY0FBUyxNQUREO0FBRVJDLGFBQVE7QUFGQTtBQURtQixFQUEvQjs7QUFPQSxRQUFPQyxHQUFQLE1BQWdCLE9BQWhCOztBQUVBLEtBQUlDLFNBQVNuQixJQUFJb0IsU0FBSixDQUFjLEtBQWQsRUFBcUJGLEdBQXJCLENBQWI7O0FBRUE7QUFDQSxPQUFNRyxNQUFNLElBQUlGLE1BQUosQ0FBVztBQUNyQkcsT0FBSSxNQURpQjtBQUVyQmpCO0FBRnFCLEVBQVgsQ0FBWjs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGI4ZGUxZDQ2ZGIwMTU0NDA4NmQiLCIvLyBUaGUgVnVlIGJ1aWxkIHZlcnNpb24gdG8gbG9hZCB3aXRoIHRoZSBgaW1wb3J0YCBjb21tYW5kXG4vLyAocnVudGltZS1vbmx5IG9yIHN0YW5kYWxvbmUpIGhhcyBiZWVuIHNldCBpbiB3ZWJwYWNrLmJhc2UuY29uZiB3aXRoIGFuIGFsaWFzLlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG4vLyBSb3V0ZXNcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIFN0eWxlcy9mb250c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcydcblxuLy8gbWF0ZXJpYWxcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tICd2dWUtbWF0ZXJpYWwnXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXG5cbi8vIHBsdWdpbnNcblZ1ZS51c2UoVnVlUm91dGVyKVxuVnVlLnVzZShWdWVNYXRlcmlhbClcblxuLy8gcm91dGVyIGNvbmZpZ1xuXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIHJvdXRlc1xufSlcblxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxuXG4gIGlmIChtYWluQ29udGVudCkge1xuICAgIG1haW5Db250ZW50LnNjcm9sbFRvcCA9IDBcbiAgfVxufSlcblxuVnVlLm1hdGVyaWFsLnRoZW1lLnJlZ2lzdGVyQWxsKHtcbiAgYXBwdGhlbWU6IHtcbiAgICBwcmltYXJ5OiAndGVhbCcsXG4gICAgYWNjZW50OiAnY3lhbidcbiAgfVxufSlcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxubGV0IFlBU0FwcCA9IFZ1ZS5jb21wb25lbnQoJ2FwcCcsIEFwcClcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IGFwcCA9IG5ldyBZQVNBcHAoe1xuICBlbDogJyNhcHAnLFxuICByb3V0ZXJcbn0pXG5cbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLy8gbmV3IFZ1ZSh7XG4vLyAgIGVsOiAnI2FwcCcsXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXG4vLyAgIGNvbXBvbmVudHM6IHsgQXBwIH1cbi8vIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=