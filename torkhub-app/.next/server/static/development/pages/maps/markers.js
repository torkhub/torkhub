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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MapMarkers.js":
/*!**********************************!*\
  !*** ./components/MapMarkers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _demos_map_city_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/map/city-info */ "./demos/map/city-info.js");
/* harmony import */ var _demos_map_city_pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/map/city-pin */ "./demos/map/city-pin.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fetch */ "./lib/fetch.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/components/MapMarkers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const MapMarkers = () => {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_7___default()(`${"http://localhost:3000/"}api/cities`, _lib_fetch__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: viewport,
    1: setViewport
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
  const {
    0: popupInfo,
    1: setPopupInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const _updateViewport = viewport => {
    setViewport(viewport);
  };

  const _renderCityMarker = (city, index) => {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: `marker-${index}`,
      longitude: city.longitude,
      latitude: city.latitude,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(_demos_map_city_pin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: 20,
      onClick: () => setPopupInfo(city),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }));
  };

  const _renderPopup = () => popupInfo && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
    tipSize: 5,
    anchor: "top",
    longitude: popupInfo.longitude,
    latitude: popupInfo.latitude,
    onClose: () => setPopupInfo(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_demos_map_city_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    info: popupInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }));

  if (error) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Failed to load media data");
  if (!data) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    width: "100%",
    height: "100%",
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    onViewportChange: _updateViewport,
    mapboxApiAccessToken: "pk.eyJ1IjoidG9ya2h1YiIsImEiOiJja2w2emx5Y2IxcjA3Mm9xanlodXBzdHdwIn0.M_TMo_-Wl-iwdqJQGG0YsQ",
    style: {
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      overflow: "hidden",
      flex: "1 1 auto",
      flexDirection: "row",
      display: "flex"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), data.map(_renderCityMarker), _renderPopup(), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"], {
    onViewportChange: _updateViewport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MapMarkers);

/***/ }),

/***/ "./demos/map/city-info.js":
/*!********************************!*\
  !*** ./demos/map/city-info.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CityInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/demos/map/city-info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class CityInfo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      info
    } = this.props;
    const displayName = `${info.city}, ${info.state}`;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, displayName, " | ", __jsx("a", {
      target: "_new",
      href: `http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 27
      }
    }, "Wikipedia")), __jsx("img", {
      width: 240,
      src: info.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./demos/map/city-pin.js":
/*!*******************************!*\
  !*** ./demos/map/city-pin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CityPin; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/demos/map/city-pin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const pinStyle = {
  fill: '#d00',
  stroke: 'none'
};
class CityPin extends react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"] {
  render() {
    const {
      size = 20,
      onClick
    } = this.props;
    return __jsx("svg", {
      height: size,
      viewBox: "0 0 24 24",
      style: _objectSpread({}, pinStyle, {
        transform: `translate(${-size / 2}px,${-size}px)`
      }),
      onClick: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx("path", {
      d: ICON,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./lib/fetch.js":
/*!**********************!*\
  !*** ./lib/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async function (...args) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(...args);
  const result = await res.json();

  if (res.status !== 200) {
    throw new Error(result.error);
  }

  return result;
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/swr/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/swr/dist/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Date$now = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");

var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Map = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs2/core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

module.exports = function (e, r) {
  "use strict";

  var t = {};

  function __webpack_require__(r) {
    if (t[r]) {
      return t[r].exports;
    }

    var n = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(n.exports, n, n.exports, __webpack_require__);
    n.l = true;
    return n.exports;
  }

  __webpack_require__.ab = __dirname + "/";

  function startup() {
    return __webpack_require__(310);
  }

  return startup();
}({
  75: function (e, r) {
    "use strict";

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    var t = new _WeakMap();
    var n = 0;

    function hash(e) {
      if (!e.length) return "";
      var r = "arg";

      for (var a = 0; a < e.length; ++a) {
        var u = void 0;

        if (typeof e[a] !== "object") {
          if (typeof e[a] === "string") {
            u = '"' + e[a] + '"';
          } else {
            u = String(e[a]);
          }
        } else {
          if (!t.has(e[a])) {
            u = n;
            t.set(e[a], n++);
          } else {
            u = t.get(e[a]);
          }
        }

        r += "@" + u;
      }

      return r;
    }

    r.default = hash;
  },
  153: function (e, r, t) {
    "use strict";

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    var n = t(297);
    var a = n.createContext({});
    a.displayName = "SWRConfigContext";
    r.default = a;
  },
  297: function (e) {
    e.exports = __webpack_require__(/*! react */ "react");
  },
  310: function (e, r, t) {
    "use strict";

    function __export(e) {
      for (var t in e) if (!r.hasOwnProperty(t)) r[t] = e[t];
    }

    var n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    __export(t(797));

    var a = n(t(797));
    var u = t(319);
    r.useSWRPages = u.useSWRPages;
    r.default = a.default;
  },
  319: function (e, r, t) {
    "use strict";

    var n = this && this.__spreadArrays || function () {
      for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;

      for (var n = Array(e), a = 0, r = 0; r < t; r++) for (var u = arguments[r], i = 0, f = u.length; i < f; i++, a++) n[a] = u[i];

      return n;
    };

    var a = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var t in e) if (Object.hasOwnProperty.call(e, t)) r[t] = e[t];
      r["default"] = e;
      return r;
    };

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    var u = a(t(297));
    var i = t(546);

    function useSWRPages(e, r, t, a) {
      if (a === void 0) {
        a = [];
      }

      var f = "_swr_page_count_" + e;
      var o = "_swr_page_offset_" + e;
      var l = u.useState(i.cacheGet(f) || 1),
          c = l[0],
          s = l[1];
      var d = u.useState(i.cacheGet(o) || [null]),
          v = d[0],
          p = d[1];
      var R = u.useState([]),
          S = R[0],
          h = R[1];

      var _ = u.useRef([]);

      var O = u.useRef(r);
      var E = u.useRef(false);
      var C = u.useCallback(function (e) {
        var r = O.current(e);

        if (r && !r.length) {
          E.current = true;
        } else {
          E.current = false;
        }

        return r;
      }, []);
      var y = v[c] === null;
      var T = c === v.length;
      var b = y && c === 1 && E.current;
      var g = u.useCallback(function () {
        if (T || y) return;
        s(function (e) {
          i.cacheSet(f, e + 1);
          return e + 1;
        });
      }, [T || y]);
      var w = u.useCallback(r, a);
      O.current = w;
      var I = u.useMemo(function () {
        var e = function (e) {
          return function (r) {
            if (!S[e] || S[e].data !== r.data || S[e].error !== r.error || S[e].revalidate !== r.revalidate) {
              h(function (t) {
                var a = n(t);
                a[e] = {
                  data: r.data,
                  error: r.error,
                  revalidate: r.revalidate,
                  isValidating: r.isValidating
                };
                return a;
              });

              if (typeof r.data !== "undefined") {
                var a = t(r, e);

                if (v[e + 1] !== a) {
                  p(function (r) {
                    var t = n(r);
                    t[e + 1] = a;
                    i.cacheSet(o, t);
                    return t;
                  });
                }
              }
            }

            return r;
          };
        };

        var r = [];
        var a = _.current;

        for (var f = 0; f < c; ++f) {
          if (!a[f] || a[f].offset !== v[f] || a[f].pageFn !== w) {
            a[f] = {
              component: u.default.createElement(C, {
                key: "page-" + v[f] + "-" + f,
                offset: v[f],
                withSWR: e(f)
              }),
              pageFn: w,
              offset: v[f]
            };
          }

          r.push(a[f].component);
        }

        return r;
      }, [w, c, S, v, e]);
      return {
        pages: I,
        pageCount: c,
        pageSWRs: S,
        isLoadingMore: T,
        isReachingEnd: y,
        isEmpty: b,
        loadMore: g
      };
    }

    r.useSWRPages = useSWRPages;
  },
  447: function (e, r) {
    "use strict";

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    function isOnline() {
      if (typeof navigator.onLine !== "undefined") {
        return navigator.onLine;
      }

      return true;
    }

    r.default = isOnline;
  },
  453: function (e, r) {
    "use strict";

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    function throttle(e, r) {
      var t = false;
      return function () {
        var n = [];

        for (var a = 0; a < arguments.length; a++) {
          n[a] = arguments[a];
        }

        if (t) return;
        t = true;
        e.apply(void 0, n);
        setTimeout(function () {
          return t = false;
        }, r);
      };
    }

    r.default = throttle;
  },
  491: function (e) {
    "use strict";

    var r = _Array$isArray;
    var t = _Object$keys;
    var n = Object.prototype.hasOwnProperty;

    e.exports = function equal(e, a) {
      if (e === a) return true;

      if (e && a && typeof e == "object" && typeof a == "object") {
        var u = r(e),
            i = r(a),
            f,
            o,
            l;

        if (u && i) {
          o = e.length;
          if (o != a.length) return false;

          for (f = o; f-- !== 0;) if (!equal(e[f], a[f])) return false;

          return true;
        }

        if (u != i) return false;
        var c = e instanceof Date,
            s = a instanceof Date;
        if (c != s) return false;
        if (c && s) return e.getTime() == a.getTime();
        var d = e instanceof RegExp,
            v = a instanceof RegExp;
        if (d != v) return false;
        if (d && v) return e.toString() == a.toString();
        var p = t(e);
        o = p.length;
        if (o !== t(a).length) return false;

        for (f = o; f-- !== 0;) if (!n.call(a, p[f])) return false;

        for (f = o; f-- !== 0;) {
          l = p[f];
          if (!equal(e[l], a[l])) return false;
        }

        return true;
      }

      return e !== e && a !== a;
    };
  },
  546: function (e, r, t) {
    "use strict";

    var n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    var a = n(t(731));
    var u = n(t(447));
    var i = new _Map();

    function cacheGet(e) {
      return i.get(e);
    }

    r.cacheGet = cacheGet;

    function cacheSet(e, r) {
      return i.set(e, r);
    }

    r.cacheSet = cacheSet;

    function cacheClear() {
      i.clear();
    }

    r.cacheClear = cacheClear;
    var f = {};
    r.CONCURRENT_PROMISES = f;
    var o = {};
    r.CONCURRENT_PROMISES_TS = o;
    var l = {};
    r.FOCUS_REVALIDATORS = l;
    var c = {};
    r.CACHE_REVALIDATORS = c;
    var s = {};
    r.MUTATION_TS = s;

    function onErrorRetry(e, r, t, n, u) {
      if (!a.default()) {
        return;
      }

      var i = Math.min(u.retryCount || 0, 8);
      var f = ~~((Math.random() + .5) * (1 << i)) * t.errorRetryInterval;
      setTimeout(n, f, u);
    }

    var d = {
      onLoadingSlow: function () {},
      onSuccess: function () {},
      onError: function () {},
      onErrorRetry: onErrorRetry,
      errorRetryInterval: 5 * 1e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: 3 * 1e3,
      refreshInterval: 0,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      shouldRetryOnError: true,
      suspense: false
    };

    if (false) {}

    var v = false;

    if (false) { var p; }

    r.default = d;
  },
  731: function (e, r) {
    "use strict";

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    function isDocumentVisible() {
      if (typeof document !== "undefined" && typeof document.visibilityState !== "undefined") {
        return document.visibilityState !== "hidden";
      }

      return true;
    }

    r.default = isDocumentVisible;
  },
  797: function (e, r, t) {
    "use strict";

    var n = this && this.__awaiter || function (e, r, t, n) {
      function adopt(e) {
        return e instanceof t ? e : new t(function (r) {
          r(e);
        });
      }

      return new (t || (t = _Promise))(function (t, a) {
        function fulfilled(e) {
          try {
            step(n.next(e));
          } catch (e) {
            a(e);
          }
        }

        function rejected(e) {
          try {
            step(n["throw"](e));
          } catch (e) {
            a(e);
          }
        }

        function step(e) {
          e.done ? t(e.value) : adopt(e.value).then(fulfilled, rejected);
        }

        step((n = n.apply(e, r || [])).next());
      });
    };

    var a = this && this.__generator || function (e, r) {
      var t = {
        label: 0,
        sent: function () {
          if (u[0] & 1) throw u[1];
          return u[1];
        },
        trys: [],
        ops: []
      },
          n,
          a,
          u,
          i;
      return i = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof _Symbol === "function" && (i[_Symbol$iterator] = function () {
        return this;
      }), i;

      function verb(e) {
        return function (r) {
          return step([e, r]);
        };
      }

      function step(i) {
        if (n) throw new TypeError("Generator is already executing.");

        while (t) try {
          if (n = 1, a && (u = i[0] & 2 ? a["return"] : i[0] ? a["throw"] || ((u = a["return"]) && u.call(a), 0) : a.next) && !(u = u.call(a, i[1])).done) return u;
          if (a = 0, u) i = [i[0] & 2, u.value];

          switch (i[0]) {
            case 0:
            case 1:
              u = i;
              break;

            case 4:
              t.label++;
              return {
                value: i[1],
                done: false
              };

            case 5:
              t.label++;
              a = i[1];
              i = [0];
              continue;

            case 7:
              i = t.ops.pop();
              t.trys.pop();
              continue;

            default:
              if (!(u = t.trys, u = u.length > 0 && u[u.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                t = 0;
                continue;
              }

              if (i[0] === 3 && (!u || i[1] > u[0] && i[1] < u[3])) {
                t.label = i[1];
                break;
              }

              if (i[0] === 6 && t.label < u[1]) {
                t.label = u[1];
                u = i;
                break;
              }

              if (u && t.label < u[2]) {
                t.label = u[2];
                t.ops.push(i);
                break;
              }

              if (u[2]) t.ops.pop();
              t.trys.pop();
              continue;
          }

          i = r.call(e, t);
        } catch (e) {
          i = [6, e];
          a = 0;
        } finally {
          n = u = 0;
        }

        if (i[0] & 5) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: true
        };
      }
    };

    var u = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    var i = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var t in e) if (Object.hasOwnProperty.call(e, t)) r[t] = e[t];
      r["default"] = e;
      return r;
    };

    _Object$defineProperty(r, "__esModule", {
      value: true
    });

    var f = u(t(491));
    var o = t(297);
    var l = i(t(546));
    var c = u(t(75));
    var s = u(t(731));
    var d = u(t(447));
    var v = u(t(453));
    var p = u(t(153));
    var R = true;
    var S = R ? o.useEffect : o.useLayoutEffect;

    var h = function (e) {
      return e ? "err@" + e : "";
    };

    var _ = function (e) {
      var r = null;

      if (typeof e === "function") {
        try {
          e = e();
        } catch (r) {
          e = "";
        }
      }

      if (_Array$isArray(e)) {
        r = e;
        e = c.default(e);
      } else {
        e = String(e || "");
      }

      return [e, r];
    };

    var O = function (e, r) {
      if (r === void 0) {
        r = true;
      }

      var t = _(e)[0];

      if (!t) return;
      var n = l.CACHE_REVALIDATORS[t];

      if (t && n) {
        var a = l.cacheGet(t);
        var u = l.cacheGet(h(t));

        for (var i = 0; i < n.length; ++i) {
          n[i](r, a, u, true);
        }
      }
    };

    r.trigger = O;

    var E = function (e, r, t) {
      var n = l.CACHE_REVALIDATORS[e];

      if (e && n) {
        for (var a = 0; a < n.length; ++a) {
          n[a](false, r, t);
        }
      }
    };

    var C = function (e, r, t) {
      return n(void 0, void 0, void 0, function () {
        var n, u, i, f, o, c;
        return a(this, function (a) {
          switch (a.label) {
            case 0:
              n = _(e)[0];
              if (!n) return [2];
              l.MUTATION_TS[n] = _Date$now() - 1;
              if (!(r && typeof r.then === "function")) return [3, 5];
              a.label = 1;

            case 1:
              a.trys.push([1, 3,, 4]);
              return [4, r];

            case 2:
              u = a.sent();
              return [3, 4];

            case 3:
              f = a.sent();
              i = f;
              return [3, 4];

            case 4:
              return [3, 6];

            case 5:
              u = r;

              if (typeof t === "undefined") {
                t = true;
              }

              a.label = 6;

            case 6:
              if (typeof u !== "undefined") {
                l.cacheSet(n, u);
              }

              o = l.CACHE_REVALIDATORS[n];

              if (o) {
                for (c = 0; c < o.length; ++c) {
                  o[c](!!t, u, i, true);
                }
              }

              return [2];
          }
        });
      });
    };

    r.mutate = C;

    function useSWR() {
      var e = this;
      var r = [];

      for (var t = 0; t < arguments.length; t++) {
        r[t] = arguments[t];
      }

      var u,
          i,
          c = {};

      if (r.length >= 1) {
        u = r[0];
      }

      if (r.length > 2) {
        i = r[1];
        c = r[2];
      } else {
        if (typeof r[1] === "function") {
          i = r[1];
        } else if (typeof r[1] === "object") {
          c = r[1];
        }
      }

      var O = _(u),
          C = O[0],
          y = O[1];

      var T = h(C);
      c = _Object$assign({}, l.default, o.useContext(p.default), c);

      if (typeof i === "undefined") {
        i = c.fetcher;
      }

      var b = l.cacheGet(C) || c.initialData;
      var g = l.cacheGet(T);
      var w = o.useRef({
        data: false,
        error: false,
        isValidating: false
      });
      var I = o.useRef({
        data: b,
        error: g,
        isValidating: false
      });
      var A = o.useState(null)[1];
      var M = o.useCallback(function (e) {
        var r = false;

        for (var t in e) {
          I.current[t] = e[t];

          if (w.current[t]) {
            r = true;
          }
        }

        if (r || c.suspense) {
          A({});
        }
      }, []);
      var N = o.useRef(false);
      var P = o.useRef(C);
      var m = o.useCallback(function (r) {
        if (r === void 0) {
          r = {};
        }

        return n(e, void 0, void 0, function () {
          var e, t, n, u, o, s, d;
          return a(this, function (a) {
            switch (a.label) {
              case 0:
                if (!C || !i) return [2, false];
                if (N.current) return [2, false];
                r = _Object$assign({
                  dedupe: false
                }, r);
                e = true;
                t = typeof l.CONCURRENT_PROMISES[C] !== "undefined" && r.dedupe;
                a.label = 1;

              case 1:
                a.trys.push([1, 6,, 7]);
                M({
                  isValidating: true
                });
                n = void 0;
                u = void 0;
                if (!t) return [3, 3];
                u = l.CONCURRENT_PROMISES_TS[C];
                return [4, l.CONCURRENT_PROMISES[C]];

              case 2:
                n = a.sent();
                return [3, 5];

              case 3:
                if (l.CONCURRENT_PROMISES[C]) {
                  l.MUTATION_TS[C] = _Date$now() - 1;
                }

                if (c.loadingTimeout && !l.cacheGet(C)) {
                  setTimeout(function () {
                    if (e) c.onLoadingSlow(C, c);
                  }, c.loadingTimeout);
                }

                if (y !== null) {
                  l.CONCURRENT_PROMISES[C] = i.apply(void 0, y);
                } else {
                  l.CONCURRENT_PROMISES[C] = i(C);
                }

                l.CONCURRENT_PROMISES_TS[C] = u = _Date$now();
                setTimeout(function () {
                  delete l.CONCURRENT_PROMISES[C];
                  delete l.CONCURRENT_PROMISES_TS[C];
                }, c.dedupingInterval);
                return [4, l.CONCURRENT_PROMISES[C]];

              case 4:
                n = a.sent();
                c.onSuccess(n, C, c);
                a.label = 5;

              case 5:
                if (l.MUTATION_TS[C] && u <= l.MUTATION_TS[C]) {
                  M({
                    isValidating: false
                  });
                  return [2, false];
                }

                l.cacheSet(C, n);
                l.cacheSet(T, undefined);
                P.current = C;
                o = {
                  isValidating: false
                };

                if (typeof I.current.error !== "undefined") {
                  o.error = undefined;
                }

                if (f.default(I.current.data, n)) {} else {
                  o.data = n;
                }

                M(o);

                if (!t) {
                  E(C, n, undefined);
                }

                return [3, 7];

              case 6:
                s = a.sent();
                delete l.CONCURRENT_PROMISES[C];
                delete l.CONCURRENT_PROMISES_TS[C];
                l.cacheSet(T, s);
                P.current = C;

                if (I.current.error !== s) {
                  M({
                    isValidating: false,
                    error: s
                  });

                  if (!t) {
                    E(C, undefined, s);
                  }
                }

                c.onError(s, C, c);

                if (c.shouldRetryOnError) {
                  d = (r.retryCount || 0) + 1;
                  c.onErrorRetry(s, C, c, m, _Object$assign({
                    dedupe: true
                  }, r, {
                    retryCount: d
                  }));
                }

                return [3, 7];

              case 7:
                e = false;
                return [2, true];
            }
          });
        });
      }, [C]);
      S(function () {
        if (!C) return undefined;
        N.current = false;
        var e = I.current.data;
        var r = l.cacheGet(C) || c.initialData;

        if (P.current !== C || !f.default(e, r)) {
          M({
            data: r
          });
          P.current = C;
        }

        var t = function () {
          return m({
            dedupe: true
          });
        };

        if (!c.initialData) {
          if (typeof r !== "undefined" && !R && window["requestIdleCallback"]) {
            window["requestIdleCallback"](t);
          } else {
            t();
          }
        }

        var n;

        if (c.revalidateOnFocus) {
          n = v.default(t, c.focusThrottleInterval);

          if (!l.FOCUS_REVALIDATORS[C]) {
            l.FOCUS_REVALIDATORS[C] = [n];
          } else {
            l.FOCUS_REVALIDATORS[C].push(n);
          }
        }

        var a = function (e, r, n, a) {
          if (e === void 0) {
            e = true;
          }

          if (a === void 0) {
            a = true;
          }

          var u = {};
          var i = false;

          if (typeof r !== "undefined" && !f.default(I.current.data, r)) {
            u.data = r;
            i = true;
          }

          if (I.current.error !== n) {
            u.error = n;
            i = true;
          }

          if (i) {
            M(u);
          }

          P.current = C;

          if (e) {
            if (a) {
              return t();
            } else {
              return m();
            }
          }

          return false;
        };

        if (!l.CACHE_REVALIDATORS[C]) {
          l.CACHE_REVALIDATORS[C] = [a];
        } else {
          l.CACHE_REVALIDATORS[C].push(a);
        }

        var u = null;

        if (c.revalidateOnReconnect) {
          u = addEventListener("online", t);
        }

        return function () {
          M = function () {
            return null;
          };

          N.current = true;

          if (n && l.FOCUS_REVALIDATORS[C]) {
            var e = l.FOCUS_REVALIDATORS[C];
            var r = e.indexOf(n);

            if (r >= 0) {
              e[r] = e[e.length - 1];
              e.pop();
            }
          }

          if (l.CACHE_REVALIDATORS[C]) {
            var e = l.CACHE_REVALIDATORS[C];
            var r = e.indexOf(a);

            if (r >= 0) {
              e[r] = e[e.length - 1];
              e.pop();
            }
          }

          if (u !== null) {
            removeEventListener("online", u);
          }
        };
      }, [C, m]);
      S(function () {
        var r = null;

        var t = function () {
          return n(e, void 0, void 0, function () {
            return a(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!(!I.current.error && (c.refreshWhenHidden || s.default()) && !c.refreshWhenOffline && d.default())) return [3, 2];
                  return [4, m({
                    dedupe: true
                  })];

                case 1:
                  e.sent();
                  e.label = 2;

                case 2:
                  if (c.refreshInterval) {
                    r = setTimeout(t, c.refreshInterval);
                  }

                  return [2];
              }
            });
          });
        };

        if (c.refreshInterval) {
          r = setTimeout(t, c.refreshInterval);
        }

        return function () {
          if (r) clearTimeout(r);
        };
      }, [c.refreshInterval, c.refreshWhenHidden, c.refreshWhenOffline, m]);

      if (c.suspense) {
        if (R) throw new Error("Suspense on server side is not yet supported!");
        var V = l.cacheGet(C);
        var D = l.cacheGet(T);

        if (typeof V === "undefined" && typeof D === "undefined") {
          if (!l.CONCURRENT_PROMISES[C]) {
            m();
          }

          if (l.CONCURRENT_PROMISES[C] && typeof l.CONCURRENT_PROMISES[C].then === "function") {
            throw l.CONCURRENT_PROMISES[C];
          }

          V = l.CONCURRENT_PROMISES[C];
        }

        if (typeof V === "undefined" && D) {
          throw D;
        }

        return {
          error: D,
          data: V,
          revalidate: m,
          isValidating: I.current.isValidating
        };
      }

      return o.useMemo(function () {
        var e = {
          revalidate: m
        };

        _Object$defineProperties(e, {
          error: {
            get: function () {
              w.current.error = true;
              return P.current === C ? I.current.error : g;
            }
          },
          data: {
            get: function () {
              w.current.data = true;
              return P.current === C ? I.current.data : b;
            }
          },
          isValidating: {
            get: function () {
              w.current.isValidating = true;
              return I.current.isValidating;
            }
          }
        });

        return e;
      }, [m]);
    }

    var y = p.default.Provider;
    r.SWRConfig = y;
    r.default = useSWR;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./pages/maps/markers.js":
/*!*******************************!*\
  !*** ./pages/maps/markers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MapMarkers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MapMarkers */ "./components/MapMarkers.js");
var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/pages/maps/markers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MapMarkersPage = () => __jsx(_components_MapMarkers__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 30
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MapMarkersPage);

/***/ }),

/***/ 12:
/*!*************************************!*\
  !*** multi ./pages/maps/markers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andhi/code/torkhub/torkhub-app/pages/maps/markers.js */"./pages/maps/markers.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ })

/******/ });
//# sourceMappingURL=markers.js.map