
 (() => { // webpackBootstrap
 	"use strict";
 	var __webpack_modules__ = ({

 "./js/src/math.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//math.js\r\n\r\n\r\n    const box={};\r\n    const fnSum = (a, b) => a + b;\r\n    const fnMulti = (a, b) => a * b;\r\n\r\n    function fnDiv(a, b) {\r\n      return a / b;\r\n    };\r\n\r\n    box.div=fnDiv;\r\n    box.sum=fnSum;\r\n    box.mul=fnMulti;\r\n\r\n    // window.box=box;\r\n\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (box);\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://step_006/./js/src/math.js?");

 }),

 "./js/src/use.js":

 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \"./js/src/math.js\");\n\r\n\r\n\r\n// console.log('sum:', box.sum(4,8));\r\n// console.log('multi:',box.mul(5,30));\r\n\r\nconsole.log(_math_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sum(4,2));\n\n//# sourceURL=webpack://step_006/./js/src/use.js?");

 })

 	});
/************************************************************************/
 	// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		// Return the exports of the module
 		return module.exports;
 	}
 	
/************************************************************************/
 	/* webpack/runtime/define property getters */
 	(() => {
 		// define getter functions for harmony exports
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 	/* webpack/runtime/hasOwnProperty shorthand */
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 	/* webpack/runtime/make namespace object */
 	(() => {
 		// define __esModule on exports
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	
/************************************************************************/
 	
 	// startup
 	// Load entry module and return exports
 	// This entry module can't be inlined because the eval devtool is used.
 	var __webpack_exports__ = __webpack_require__("./js/src/use.js");
 	
 })()
;