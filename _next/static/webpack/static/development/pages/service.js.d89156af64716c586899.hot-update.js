webpackHotUpdate("static\\development\\pages\\service.js",{

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

  function CustomBar() {
    return props.isOpen ? 'pt-4 h-100 bg-dark fixed-top' : 'bg-dark fixed-top mt-4';
  }

  return __jsx("div", {
    className: CustomBar(),
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
    color: props.link === '/' ? "" : "",
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
  }, "React"), " Page")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: props.toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: props.isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto text-lg-left text-md-left text-center mt-lg-0 mt-md-0 mt-5",
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
    className: "nav-item mt-lg-0 mt-md-0 mt-5 text-lg-right text-md-right text-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsImFjdGl2ZUNsYXNzIiwibGluayIsIkN1c3RvbUJhciIsImlzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQ1A7QUFFQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDN0IsV0FBT0YsS0FBSyxDQUFDRSxJQUFOLElBQWNBLElBQWQsR0FBcUIsaUJBQXJCLEdBQXlDLFVBQWhEO0FBQ0EsR0FGRDs7QUFJQSxXQUFTQyxTQUFULEdBQXFCO0FBQ3BCLFdBQU9ILEtBQUssQ0FBQ0ksTUFBTixHQUFlLDhCQUFmLEdBQWdELHdCQUF2RDtBQUNBOztBQUVELFNBQ0M7QUFBSyxhQUFTLEVBQUVELFNBQVMsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBVyxhQUFTLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFBUSxTQUFLLEVBQUVILEtBQUssQ0FBQ0UsSUFBTixLQUFlLEdBQWYsR0FBcUIsRUFBckIsR0FBMEIsRUFBekM7QUFBNkMsUUFBSSxNQUFqRDtBQUFrRCxTQUFLLE1BQXZEO0FBQXdELFVBQU0sRUFBQyxJQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdFQUFEO0FBQW1CLGFBQVMsRUFBQyxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsVUFERCxDQURELEVBT0MsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRUYsS0FBSyxDQUFDSyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFRQyxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFTCxLQUFLLENBQUNJLE1BQXhCO0FBQWdDLFVBQU0sTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLCtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRUgsV0FBVyxDQUFDLFFBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBcEIsQ0FERCxDQURELEVBSUM7QUFBSSxhQUFTLEVBQUVBLFdBQVcsQ0FBQyxVQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQjtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQXRCLENBREQsQ0FKRCxFQU9DO0FBQUksYUFBUyxFQUFFQSxXQUFXLENBQUMsUUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUFwQixDQURELENBUEQsRUFVQztBQUFJLGFBQVMsRUFBRUEsV0FBVyxDQUFDLFVBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFBdEIsQ0FERCxDQVZELENBREQsRUFlQztBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQTJCLGFBQVMsRUFBQyxpQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELFVBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbkIsZUFERCxDQURELENBZkQsQ0FSRCxDQURELENBREQsQ0FERDtBQXNDQTtLQWpEZUYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2VydmljZS5qcy5kODkxNTZhZjY0NzE2YzU4Njg5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEFpT3V0bGluZURpbmdkaW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IEZhUGhvbmVBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDb2xsYXBzZSwgTmF2YmFyLCBOYXZiYXJUb2dnbGVyIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0b3IocHJvcHMpXHJcbntcclxuXHRcclxuXHRjb25zdCBhY3RpdmVDbGFzcyA9IChsaW5rKSA9PiB7XHJcblx0XHRyZXR1cm4gcHJvcHMubGluayA9PSBsaW5rID8gXCJuYXYtaXRlbSBhY3RpdmVcIiA6IFwibmF2LWl0ZW1cIlxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gQ3VzdG9tQmFyKCkge1xyXG5cdFx0cmV0dXJuIHByb3BzLmlzT3BlbiA/ICdwdC00IGgtMTAwIGJnLWRhcmsgZml4ZWQtdG9wJyA6ICdiZy1kYXJrIGZpeGVkLXRvcCBtdC00J1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e0N1c3RvbUJhcigpfT5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9XCJwLTBcIj5cclxuXHRcdFx0XHQ8TmF2YmFyIGNvbG9yPXtwcm9wcy5saW5rID09PSAnLycgPyBcIlwiIDogXCJcIn0gZGFyayBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZURpbmdkaW5nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIiAvPiBcclxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIj5SZWFjdDwvc3Ryb25nPiBQYWdlXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZX0gLz5cclxuXHRcdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e3Byb3BzLmlzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteC1hdXRvIHRleHQtbGctbGVmdCB0ZXh0LW1kLWxlZnQgdGV4dC1jZW50ZXIgbXQtbGctMCBtdC1tZC0wIG10LTVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL2Fib3V0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JrRgtC+INC80Ys8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9zZXJ2aWNlJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9zZXJ2aWNlXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7Qo9GB0LvRg9Cz0Lg8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9vcmRlcicpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvb3JkZXJcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9jb250YWN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG10LWxnLTAgbXQtbWQtMCBtdC01IHRleHQtbGctcmlnaHQgdGV4dC1tZC1yaWdodCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDorNzk5OTg0OTI5MjdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZhUGhvbmVBbHQgLz4gKzcgPGI+KDk5OSk8L2I+IDg0OS0yOS0yN1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHRcdDwvTmF2YmFyPlx0XHRcdFx0XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==