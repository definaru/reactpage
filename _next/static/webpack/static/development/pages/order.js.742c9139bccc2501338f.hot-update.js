webpackHotUpdate("static\\development\\pages\\order.js",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      scrollposition = _useState[0],
      setScrollposition = _useState[1];

  var activeClass = function activeClass(link) {
    return props.link == link ? "nav-item active" : "nav-item";
  };

  function CustomBar() {
    return props.isOpen ? 'pt-4 h-100 bg-dark fixed-top' : 'bg-dark fixed-top mt-4';
  }

  return __jsx("div", {
    className: CustomBar(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    color: props.link === '/' ? "" : "",
    dark: true,
    light: true,
    expand: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineDingding"], {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }), __jsx("strong", {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, "React"), " Page")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: props.toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: props.isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto text-lg-left text-md-left text-center mt-lg-0 mt-md-0 mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: activeClass('/about'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "\u041A\u0442\u043E \u043C\u044B"))), __jsx("li", {
    className: activeClass('/service'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 31
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"))), __jsx("li", {
    className: activeClass('/order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))), __jsx("li", {
    className: activeClass('/contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item mt-lg-0 mt-md-0 mt-5 text-lg-right text-md-right text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "tel:+79998492927",
    className: "btn btn-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }), " +7 ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 28
    }
  }, "(999)"), " 849-29-27")))))));
}

_s(Navigator, "QMuTrCFeWUdKn/w281L2UtH34TM=");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2Nyb2xscG9zaXRpb24iLCJzZXRTY3JvbGxwb3NpdGlvbiIsImFjdGl2ZUNsYXNzIiwibGluayIsIkN1c3RvbUJhciIsImlzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFDUDtBQUFBOztBQUFBLGtCQUU2Q0Msc0RBQVEsQ0FBQyxDQUFELENBRnJEO0FBQUEsTUFFUUMsY0FGUjtBQUFBLE1BRXdCQyxpQkFGeEI7O0FBR0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFdBQU9MLEtBQUssQ0FBQ0ssSUFBTixJQUFjQSxJQUFkLEdBQXFCLGlCQUFyQixHQUF5QyxVQUFoRDtBQUNBLEdBRkQ7O0FBSUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNwQixXQUFPTixLQUFLLENBQUNPLE1BQU4sR0FBZSw4QkFBZixHQUFnRCx3QkFBdkQ7QUFDQTs7QUFFRCxTQUNDO0FBQUssYUFBUyxFQUFFRCxTQUFTLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQVcsYUFBUyxFQUFDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGlEQUFEO0FBQVEsU0FBSyxFQUFFTixLQUFLLENBQUNLLElBQU4sS0FBZSxHQUFmLEdBQXFCLEVBQXJCLEdBQTBCLEVBQXpDO0FBQTZDLFFBQUksTUFBakQ7QUFBa0QsU0FBSyxNQUF2RDtBQUF3RCxVQUFNLEVBQUMsSUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxvcmRlci5qcy43NDJjOTEzOWJjY2MyNTAxMzM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWlPdXRsaW5lRGluZ2RpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgRmFQaG9uZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRvcihwcm9wcylcclxue1xyXG5cclxuXHRjb25zdCBbc2Nyb2xscG9zaXRpb24sIHNldFNjcm9sbHBvc2l0aW9uXSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgYWN0aXZlQ2xhc3MgPSAobGluaykgPT4ge1xyXG5cdFx0cmV0dXJuIHByb3BzLmxpbmsgPT0gbGluayA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEN1c3RvbUJhcigpIHtcclxuXHRcdHJldHVybiBwcm9wcy5pc09wZW4gPyAncHQtNCBoLTEwMCBiZy1kYXJrIGZpeGVkLXRvcCcgOiAnYmctZGFyayBmaXhlZC10b3AgbXQtNCdcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtDdXN0b21CYXIoKX0+XHJcblx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPVwicC0wXCI+XHJcblx0XHRcdFx0PE5hdmJhciBjb2xvcj17cHJvcHMubGluayA9PT0gJy8nID8gXCJcIiA6IFwiXCJ9IGRhcmsgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVEaW5nZGluZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCIgLz4gXHJcblx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCI+UmVhY3Q8L3N0cm9uZz4gUGFnZVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXtwcm9wcy50b2dnbGV9IC8+XHJcblx0XHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtwcm9wcy5pc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXgtYXV0byB0ZXh0LWxnLWxlZnQgdGV4dC1tZC1sZWZ0IHRleHQtY2VudGVyIG10LWxnLTAgbXQtbWQtMCBtdC01XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9hYm91dCcpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCa0YLQviDQvNGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvc2VydmljZScpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvc2VydmljZVwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0KPRgdC70YPQs9C4PC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvb3JkZXInKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL29yZGVyXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvY29udGFjdCcpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JrQvtC90YLQsNC60YLRizwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtdC1sZy0wIG10LW1kLTAgbXQtNSB0ZXh0LWxnLXJpZ2h0IHRleHQtbWQtcmlnaHQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6Kzc5OTk4NDkyOTI3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGYVBob25lQWx0IC8+ICs3IDxiPig5OTkpPC9iPiA4NDktMjktMjdcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHQ8L05hdmJhcj5cdFx0XHRcdFxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=