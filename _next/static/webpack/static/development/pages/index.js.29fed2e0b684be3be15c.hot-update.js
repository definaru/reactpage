webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
false,

/***/ "./components/Navigator.js":
/*!*********************************!*\
  !*** ./components/Navigator.js ***!
  \*********************************/
/*! exports provided: Navigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\NewServer\\OSPanel\\domains\\landing\\components\\Navigator.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var activeClass = function activeClass(link) {
    return props.link == link ? "nav-item active" : "nav-item";
  };

  return __jsx("div", {
    className: props.link === '/' ? "fixed-top" : "bg-dark fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    color: props.link === '/' ? "" : "dark",
    dark: true,
    light: true,
    expand: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineDingding"], {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }), __jsx("strong", {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "React"), " Pages")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: activeClass('/about'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, "\u041A\u0442\u043E \u043C\u044B"))), __jsx("li", {
    className: activeClass('/service'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 31
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"))), __jsx("li", {
    className: activeClass('/order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))), __jsx("li", {
    className: activeClass('/contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 31
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "tel:+79998492927",
    className: "btn btn-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }
  }), " +7 ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 28
    }
  }, "(999)"), " 849-29-27")))))));
}

_s(Navigator, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Navigator;

var _c;

$RefreshReg$(_c, "Navigator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/MainInterface.js":
/*!********************************************!*\
  !*** ./components/layout/MainInterface.js ***!
  \********************************************/
/*! exports provided: MainInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainInterface", function() { return MainInterface; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigator */ "./components/Navigator.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\NewServer\\OSPanel\\domains\\landing\\components\\layout\\MainInterface.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Link from 'next/link'





function MainInterface(_ref) {
  _s();

  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'React Page' : _ref$title;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["SkeletonTheme"], {
    color: "#202020",
    highlightColor: "#444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_3__["Navigator"], {
    link: router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), children), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "6",
    md: {
      size: 6
    },
    className: "text-lg-left text-md-left text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 8
    }
  }, "\xA9 ", new Date().getFullYear(), " \xA0", __jsx("a", {
    href: "https://defina.ru",
    className: "text-react",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Defina LLC"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "6",
    md: {
      size: 6
    },
    className: "text-lg-right text-md-right text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"))))));
}

_s(MainInterface, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = MainInterface;

var _c;

$RefreshReg$(_c, "MainInterface");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NYWluSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJhY3RpdmVDbGFzcyIsImxpbmsiLCJNYWluSW50ZXJmYWNlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwic2l6ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFDUDtBQUFBOztBQUFBLGtCQUU2QkMsc0RBQVEsQ0FBQyxLQUFELENBRnJDO0FBQUEsTUFFUUMsTUFGUjtBQUFBLE1BRWdCQyxTQUZoQjs7QUFHQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUM3QixXQUFPTixLQUFLLENBQUNNLElBQU4sSUFBY0EsSUFBZCxHQUFxQixpQkFBckIsR0FBeUMsVUFBaEQ7QUFDQSxHQUZEOztBQUtBLFNBQ0M7QUFBSyxhQUFTLEVBQUVOLEtBQUssQ0FBQ00sSUFBTixLQUFlLEdBQWYsR0FBcUIsV0FBckIsR0FBbUMsbUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQVcsYUFBUyxFQUFDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGlEQUFEO0FBQVEsU0FBSyxFQUFFTixLQUFLLENB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S0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFO0FBQVIsS0FBaEI7QUFBNkIsYUFBUyxFQUFDLHVDQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNTLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURULFdBRUM7QUFBRyxRQUFJLEVBQUMsbUJBQVI7QUFBNEIsYUFBUyxFQUFDLFlBQXRDO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZELENBREQsQ0FERCxFQU9DLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFZLE1BQUUsRUFBRTtBQUFFRixVQUFJLEVBQUU7QUFBUixLQUFoQjtBQUE2QixhQUFTLEVBQUMseUNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQURELENBUEQsQ0FERCxDQURELENBVEQsQ0FERDtBQTJCQTs7R0FoQ2VOLGE7VUFFQUkscUQ7OztLQUZBSixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yOWZlZDJlMGI2ODRiZTNiZTE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWlPdXRsaW5lRGluZ2RpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgRmFQaG9uZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRvcihwcm9wcylcclxue1xyXG5cclxuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXHJcblx0XHJcblx0Y29uc3QgYWN0aXZlQ2xhc3MgPSAobGluaykgPT4ge1xyXG5cdFx0cmV0dXJuIHByb3BzLmxpbmsgPT0gbGluayA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5saW5rID09PSAnLycgPyBcImZpeGVkLXRvcFwiIDogXCJiZy1kYXJrIGZpeGVkLXRvcFwifT5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9XCJwLTBcIj5cclxuXHRcdFx0XHQ8TmF2YmFyIGNvbG9yPXtwcm9wcy5saW5rID09PSAnLycgPyBcIlwiIDogXCJkYXJrXCJ9IGRhcmsgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVEaW5nZGluZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCIgLz4gXHJcblx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCI+UmVhY3Q8L3N0cm9uZz4gUGFnZXNcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL2Fib3V0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JrRgtC+INC80Ys8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9zZXJ2aWNlJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9zZXJ2aWNlXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7Qo9GB0LvRg9Cz0Lg8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9vcmRlcicpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvb3JkZXJcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9jb250YWN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOis3OTk5ODQ5MjkyN1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RmFQaG9uZUFsdCAvPiArNyA8Yj4oOTk5KTwvYj4gODQ5LTI5LTI3XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0PC9OYXZiYXI+XHRcdFx0XHRcclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iLCIvL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi4vTmF2aWdhdG9yJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IHsgU2tlbGV0b25UaGVtZSB9IGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWluSW50ZXJmYWNlKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1JlYWN0IFBhZ2UnIH0pXHJcbntcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxTa2VsZXRvblRoZW1lIGNvbG9yPVwiIzIwMjAyMFwiIGhpZ2hsaWdodENvbG9yPVwiIzQ0NFwiPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxtYWluPlxyXG5cdFx0XHRcdDxOYXZpZ2F0b3IgbGluaz17cm91dGVyLnBhdGhuYW1lfS8+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdFx0PGZvb3Rlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0PENvbCBzbT1cIjZcIiBtZD17eyBzaXplOiA2IH19IGNsYXNzTmFtZT1cInRleHQtbGctbGVmdCB0ZXh0LW1kLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gJiMxNjA7IFxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZGVmaW5hLnJ1XCIgY2xhc3NOYW1lPVwidGV4dC1yZWFjdFwiIHRhcmdldD1cIl9ibGFua1wiPkRlZmluYSBMTEM8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdDxDb2wgc209XCI2XCIgbWQ9e3sgc2l6ZTogNiB9fSBjbGFzc05hbWU9XCJ0ZXh0LWxnLXJpZ2h0IHRleHQtbWQtcmlnaHQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD7QktGB0LUg0L/RgNCw0LLQsCDQt9Cw0YnQuNGJ0LXQvdGLPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdDwvU2tlbGV0b25UaGVtZT5cclxuXHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9