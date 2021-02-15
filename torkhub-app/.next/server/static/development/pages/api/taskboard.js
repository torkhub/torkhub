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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/taskboard.js":
/*!********************************!*\
  !*** ./pages/api/taskboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  backlog: [{
    title: "Responsive bug",
    description: "Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.",
    color: "error",
    images: [`${"http://localhost:3000/"}images/unsplash/12.jpg`, `${"http://localhost:3000/"}images/unsplash/9.jpg`]
  }, {
    title: "Travel checklist",
    description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  }, {
    title: "Budget review",
    description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    color: "success"
  }],
  todo: [{
    title: "QA Testing",
    description: "Etiam porta sem malesuada magna mollis euismod."
  }, {
    title: "Layout design",
    description: "Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    color: "error"
  }, {
    title: "Fix navigation menu",
    description: "Donec sed odio dui.",
    color: "info",
    images: [`${"http://localhost:3000/"}images/unsplash/1.jpg`]
  }, {
    title: "Update bootstrap 4",
    description: "Aenean lacinia bibendum nulla sed consectetur."
  }, {
    title: "Run build tools",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
  }, {
    title: "List article ideas",
    description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    color: "success",
    images: [`${"http://localhost:3000/"}images/unsplash/5.jpg`, `${"http://localhost:3000/"}images/unsplash/6.jpg`]
  }, {
    title: "Reactjs fixes",
    description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper."
  }, {
    title: "Implement SSL",
    description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    color: "warning"
  }, {
    title: "Cleanup code",
    description: "Sollicitudin",
    color: "error"
  }],
  "In Process": [{
    title: "QOS Assessment",
    description: "Maecenas sed diam eget risus varius blandit sit amet non magna."
  }, {
    title: "Schedule new tasks",
    description: "Sed posuere consectetur est at lobortis.",
    color: "warning"
  }, {
    title: "Add dashboard variants",
    description: "Nulla vitae elit libero, a pharetra augue."
  }, {
    title: "Extended color scheme support",
    description: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
  }, {
    title: "Merge unit tests",
    description: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
    color: "info",
    images: [`${"http://localhost:3000/"}images/unsplash/16.jpg`, `${"http://localhost:3000/"}images/unsplash/9.jpg`]
  }, {
    title: "Test final version",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }],
  "Currently in progress": [{
    title: "Integrate Angular 4",
    description: "Nulla vitae elit libero, a pharetra augue."
  }, {
    title: "Additional fields",
    description: "Donec id elit non mi porta gravida at eget metus."
  }, {
    title: "Draggable task board",
    description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.",
    color: "error"
  }, {
    title: "Setup CI server",
    description: "Maecenas faucibus mollis interdum.",
    images: [`${"http://localhost:3000/"}images/unsplash/10.jpg`, `${"http://localhost:3000/"}images/unsplash/11.jpg`]
  }, {
    title: "Assign new tasks",
    description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
    color: "success"
  }, {
    title: "Contact administrator",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
  }, {
    title: "Commit changes",
    description: "Aenean lacinia bibendum nulla sed consectetur.",
    images: [`${"http://localhost:3000/"}images/unsplash/13.jpg`, `${"http://localhost:3000/"}images/unsplash/14.jpg`]
  }],
  Complete: [{
    title: "Store new files",
    description: "Sed posuere consectetur est at lobortis."
  }, {
    title: "Build landing page",
    description: "Maecenas sed diam eget risus varius blandit sit amet non magna."
  }, {
    title: "Setup basic layout",
    description: "Vestibulum id ligula porta felis euismod semper.",
    color: "info",
    images: [`${"http://localhost:3000/"}images/unsplash/15.jpg`, `${"http://localhost:3000/"}images/unsplash/16.jpg`]
  }, {
    title: "Graphical fixes",
    description: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
  }, {
    title: "Email alerts",
    description: "Donec sed odio dui."
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
});

/***/ }),

/***/ 16:
/*!**************************************!*\
  !*** multi ./pages/api/taskboard.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andhi/code/torkhub/torkhub-app/pages/api/taskboard.js */"./pages/api/taskboard.js");


/***/ })

/******/ });
//# sourceMappingURL=taskboard.js.map