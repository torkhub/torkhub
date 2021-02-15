webpackHotUpdate("static/development/pages/widgets.js",{

/***/ "./components/core/WeatherCard.js":
/*!****************************************!*\
  !*** ./components/core/WeatherCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Divider */ "./components/core/Divider.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/fetch */ "./lib/fetch.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");

var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/components/core/WeatherCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const DescriptionItem = ({
  title,
  content
}) => __jsx("div", {
  className: "d-flex mb-2 justify-content-between align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, title), __jsx("small", {
  className: "px-2 d-inline-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, content));

const ForecastItem = ({
  content
}) => __jsx("span", {
  style: {
    display: "block",
    margin: "2px 0"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, content);

const WeatherCard = ({
  city,
  country,
  days
}) => {
  const _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("".concat("http://localhost:3000/", "api/weather?city=").concat(city, "&country=").concat(country, "&days=").concat(days), _lib_fetch__WEBPACK_IMPORTED_MODULE_6__["default"]),
        data = _useSWR.data,
        error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Failed to load data");
  if (!data) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Loading...");
  return data && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "pb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex mb-4 justify-content-between align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "//", __jsx("h5", {
    className: "mb-0 font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "".concat(data.city.name, ", ").concat(data.city.country)), __jsx("h6", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_7___default()(data.list[0].dt * 1000, "MMMM Do YYYY")), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(data.list[0].weather[0].description))), __jsx("div", {
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "font-weight-light mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, data.list[0].main.temp, "\xB0")))), __jsx("div", {
    className: "d-flex justify-content-between align-items-center",
    style: {
      flexWrap: "wrap"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.list[0].main).map((key, index) => __jsx("div", {
    key: index,
    style: {
      width: "50%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx(DescriptionItem, {
    title: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(key.replace(/_/g, " ")),
    content: data.list[0].main[key],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }))))), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Forecast",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "pt-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-center justify-content-between align-items-center d-flex",
    style: {
      flexFlow: "initial"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, data.list.map((day, index) => index !== 0 && __jsx("div", {
    className: "text-center mb-0 d-flex align-items-center justify-content-center flex-column",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx(ForecastItem, {
    content: date_fns_format__WEBPACK_IMPORTED_MODULE_7___default()(day.dt * 1000, "ddd"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(ForecastItem, {
    content: day.weather.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx(ForecastItem, {
    content: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["getWeatherIcon"])(day.weather[0].icon, 24, "rgba(0,0,0,.87)"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }), __jsx(ForecastItem, {
    content: "".concat(day.main.temp, "\xB0"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }))))));
};

WeatherCard.propTypes = {
  city: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  country: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  days: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherCard);

/***/ })

})
//# sourceMappingURL=widgets.js.b834dc6227fb705eaf88.hot-update.js.map