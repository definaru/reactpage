webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\NewServer\\OSPanel\\domains\\landing\\components\\Navigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator(props) {
  var activeClass = function activeClass(link) {
    return props.link == link ? "nav-item active" : "nav-item";
  };

  return __jsx("div", {
    className: props.link === '/' ? "fixed-top mt-4" : "bg-dark fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineDingding"], {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }), __jsx("strong", {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, "React"), " Pages")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: activeClass('/about'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "\u041A\u0442\u043E \u043C\u044B"))), __jsx("li", {
    className: activeClass('/service'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
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
      columnNumber: 31
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"))), __jsx("li", {
    className: activeClass('/order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
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
      columnNumber: 29
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))), __jsx("li", {
    className: activeClass('/contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
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
      columnNumber: 31
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "tel:+79998492927",
    className: "btn btn-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 10
    }
  }), " +7 ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 28
    }
  }, "(999)"), " 849-29-27")))))));
}
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsImFjdGl2ZUNsYXNzIiwibGluayIsInRvZ2dsZSIsImlzT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQ1A7QUFFQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDN0IsV0FBT0YsS0FBSyxDQUFDRSxJQUFOLElBQWNBLElBQWQsR0FBcUIsaUJBQXJCLEdBQXlDLFVBQWhEO0FBQ0EsR0FGRDs7QUFLQSxTQUNDO0FBQUssYUFBUyxFQUFFRixLQUFLLENBQUNFLElBQU4sS0FBZSxHQUFmLEdBQXFCLGdCQUFyQixHQUF3QyxtQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBVyxhQUFTLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFBUSxTQUFLLEVBQUVGLEtBQUssQ0FBQ0UsSUFBTixLQUFlLEdBQWYsR0FBcUIsRUFBckIsR0FBMEIsTUFBekM7QUFBaUQsUUFBSSxNQUFyRDtBQUFzRCxTQUFLLE1BQTNEO0FBQTRELFVBQU0sRUFBQyxJQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdFQUFEO0FBQW1CLGFBQVMsRUFBQyxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsV0FERCxDQURELEVBT0MsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBUUMsTUFBQyxtREFBRDtBQUFVLFVBQU0sRUFBRUMsTUFBbEI7QUFBMEIsVUFBTSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFFSCxXQUFXLENBQUMsUUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFwQixDQURELENBREQsRUFJQztBQUFJLGFBQVMsRUFBRUEsV0FBVyxDQUFDLFVBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FBdEIsQ0FERCxDQUpELEVBT0M7QUFBSSxhQUFTLEVBQUVBLFdBQVcsQ0FBQyxRQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQjtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBQXBCLENBREQsQ0FQRCxFQVVDO0FBQUksYUFBUyxFQUFFQSxXQUFXLENBQUMsVUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0I7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUF0QixDQURELENBVkQsQ0FERCxFQWVDO0FBQUksYUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBQyxrQkFBUjtBQUEyQixhQUFTLEVBQUMsaUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxVQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRG5CLGVBREQsQ0FERCxDQWZELENBUkQsQ0FERCxDQURELENBREQ7QUFzQ0E7S0E5Q2VGLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdmNDdjMjFjMmJkZDI1NWMxNWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBBaU91dGxpbmVEaW5nZGluZyB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgeyBGYVBob25lQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29sbGFwc2UsIE5hdmJhciwgTmF2YmFyVG9nZ2xlciB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdG9yKHByb3BzKVxyXG57XHJcblx0XHJcblx0Y29uc3QgYWN0aXZlQ2xhc3MgPSAobGluaykgPT4ge1xyXG5cdFx0cmV0dXJuIHByb3BzLmxpbmsgPT0gbGluayA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5saW5rID09PSAnLycgPyBcImZpeGVkLXRvcCBtdC00XCIgOiBcImJnLWRhcmsgZml4ZWQtdG9wXCJ9PlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtMFwiPlxyXG5cdFx0XHRcdDxOYXZiYXIgY29sb3I9e3Byb3BzLmxpbmsgPT09ICcvJyA/IFwiXCIgOiBcImRhcmtcIn0gZGFyayBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZURpbmdkaW5nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIiAvPiBcclxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIj5SZWFjdDwvc3Ryb25nPiBQYWdlc1xyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblx0XHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXgtYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvYWJvdXQnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7QmtGC0L4g0LzRizwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL3NlcnZpY2UnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NlcnZpY2VcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCj0YHQu9GD0LPQuDwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL29yZGVyJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9vcmRlclwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL2NvbnRhY3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCa0L7QvdGC0LDQutGC0Ys8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6Kzc5OTk4NDkyOTI3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGYVBob25lQWx0IC8+ICs3IDxiPig5OTkpPC9iPiA4NDktMjktMjdcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHQ8L05hdmJhcj5cdFx0XHRcdFxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=