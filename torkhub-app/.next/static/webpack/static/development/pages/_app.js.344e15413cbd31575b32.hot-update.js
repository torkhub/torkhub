webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/core/SidebarMenu.js":
/*!****************************************!*\
  !*** ./components/core/SidebarMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatedIcon */ "./components/core/AnimatedIcon.js");
/* harmony import */ var _public_animated_icons_menu_back_menu_back_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/animated-icons/menu-back/menu-back.json */ "./public/animated-icons/menu-back/menu-back.json");
var _public_animated_icons_menu_back_menu_back_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/animated-icons/menu-back/menu-back.json */ "./public/animated-icons/menu-back/menu-back.json", 1);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/routes */ "./lib/routes.js");
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarItem */ "./components/core/SidebarItem.js");
/* harmony import */ var _AppProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppProvider */ "./components/core/AppProvider.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/andhi/code/torkhub/torkhub-app/components/core/SidebarMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const SidebarContent = ({
  router
}) => {
  const _useAppState = Object(_AppProvider__WEBPACK_IMPORTED_MODULE_7__["useAppState"])(),
        _useAppState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAppState, 2),
        state = _useAppState2[0],
        dispatch = _useAppState2[1];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
        activeRoute = _useState[0],
        setActiveRoute = _useState[1];

  const pathname = router.pathname;

  const toggleMenu = index => {
    if (activeRoute === index) index = undefined;
    setActiveRoute(index);
  };

  return __jsx("div", {
    className: "h-100 d-flex flex-column flex-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, !state.mobile && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !state.topHeader && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    expand: "md",
    className: "bg-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: 24,
    height: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("use", {
    xlinkHref: "#logo-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  })), __jsx("span", {
    className: "ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "TorkHub")), __jsx("a", {
    href: "#",
    className: "nav-toggle",
    onClick: () => dispatch({
      type: "toggleCollapsed"
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    animationData: _public_animated_icons_menu_back_menu_back_json__WEBPACK_IMPORTED_MODULE_4__,
    size: 24,
    isStopped: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    vertical: true,
    className: "d-block scroll-y flex-1 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, _lib_routes__WEBPACK_IMPORTED_MODULE_5__["default"].map((route, index) => {
    const isCurrentPath = pathname.indexOf(route.path) > -1 ? true : false;
    return __jsx(_SidebarItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      index: index,
      route: route,
      activeRoute: activeRoute,
      pathname: pathname,
      toggleMenu: toggleMenu,
      currentPath: isCurrentPath,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(SidebarContent));

/***/ })

})
//# sourceMappingURL=_app.js.344e15413cbd31575b32.hot-update.js.map