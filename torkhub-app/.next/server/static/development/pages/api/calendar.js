module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/calendar.js":
/*!*******************************!*\
  !*** ./pages/api/calendar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [{
  id: 0,
  title: "All Day Event very long title",
  allDay: true,
  start: new Date(2018, 3, 0),
  end: new Date(2018, 3, 1)
}, {
  id: 1,
  title: "Long Event",
  start: new Date(2018, 3, 7),
  end: new Date(2018, 3, 10)
}, {
  id: 2,
  title: "DTS STARTS",
  start: new Date(2019, 2, 13, 0, 0, 0),
  end: new Date(2019, 2, 20, 0, 0, 0)
}, {
  id: 3,
  title: "DTS ENDS",
  start: new Date(2019, 10, 6, 0, 0, 0),
  end: new Date(2019, 10, 13, 0, 0, 0)
}, {
  id: 4,
  title: "Some Event",
  start: new Date(2018, 3, 9, 0, 0, 0),
  end: new Date(2018, 3, 9, 0, 0, 0)
}, {
  id: 5,
  title: "Conference",
  start: new Date(2018, 3, 11),
  end: new Date(2018, 3, 13),
  desc: "Big conference for important people"
}, {
  id: 6,
  title: "Meeting",
  start: new Date(2018, 3, 12, 10, 30, 0, 0),
  end: new Date(2018, 3, 12, 12, 30, 0, 0),
  desc: "Pre-meeting meeting, to prepare for the meeting"
}, {
  id: 7,
  title: "Lunch",
  start: new Date(2018, 3, 12, 12, 0, 0, 0),
  end: new Date(2018, 3, 12, 13, 0, 0, 0),
  desc: "Power lunch"
}, {
  id: 8,
  title: "Meeting",
  start: new Date(2018, 3, 12, 14, 0, 0, 0),
  end: new Date(2018, 3, 12, 15, 0, 0, 0)
}, {
  id: 9,
  title: "Happy Hour",
  start: new Date(2018, 3, 12, 17, 0, 0, 0),
  end: new Date(2018, 3, 12, 17, 30, 0, 0),
  desc: "Most important meal of the day"
}, {
  id: 10,
  title: "Dinner",
  start: new Date(2018, 3, 12, 20, 0, 0, 0),
  end: new Date(2018, 3, 12, 21, 0, 0, 0)
}, {
  id: 11,
  title: "Birthday Party",
  start: new Date(2018, 3, 13, 7, 0, 0),
  end: new Date(2018, 3, 13, 10, 30, 0)
}, {
  id: 12,
  title: "Late Night Event",
  start: new Date(2018, 3, 17, 19, 30, 0),
  end: new Date(2018, 3, 18, 2, 0, 0)
}, {
  id: 13,
  title: "Multi-day Event",
  start: new Date(2018, 3, 20, 19, 30, 0),
  end: new Date(2018, 3, 22, 2, 0, 0)
}, {
  id: 14,
  title: "Today",
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3))
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
});

/***/ }),

/***/ 11:
/*!*************************************!*\
  !*** multi ./pages/api/calendar.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andhi/code/torkhub/torkhub-app/pages/api/calendar.js */"./pages/api/calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=calendar.js.map