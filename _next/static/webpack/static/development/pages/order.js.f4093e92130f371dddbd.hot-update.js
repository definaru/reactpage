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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var Scroll = function Scroll() {
      return setScrollposition(window.scrollY);
    };

    window.addEventListener('scroll', Scroll, false);

    if (scrollposition == 0) {
      window.removeEventListener('scroll', Scroll, true);
    }
  }, [scrollposition]);
  return __jsx("div", {
    className: CustomBar(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineDingding"], {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }), __jsx("strong", {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, "React"), " Page (", scrollposition, ")")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: props.toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: props.isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto text-lg-left text-md-left text-center mt-lg-0 mt-md-0 mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: activeClass('/about'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
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
      columnNumber: 29
    }
  }, "\u041A\u0442\u043E \u043C\u044B"))), __jsx("li", {
    className: activeClass('/service'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"))), __jsx("li", {
    className: activeClass('/order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))), __jsx("li", {
    className: activeClass('/contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 31
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item mt-lg-0 mt-md-0 mt-5 text-lg-right text-md-right text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "tel:+79998492927",
    className: "btn btn-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }), " +7 ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 28
    }
  }, "(999)"), " 849-29-27")))))));
}

_s(Navigator, "rKqZCMV5lFmROMlXfvG5nYEYj+w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2Nyb2xscG9zaXRpb24iLCJzZXRTY3JvbGxwb3NpdGlvbiIsImFjdGl2ZUNsYXNzIiwibGluayIsIkN1c3RvbUJhciIsImlzT3BlbiIsInVzZUVmZmVjdCIsIlNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFDUDtBQUFBOztBQUFBLGtCQUU2Q0Msc0RBQVEsQ0FBQyxDQUFELENBRnJEO0FBQUEsTUFFUUMsY0FGUjtBQUFBLE1BRXdCQyxpQkFGeEI7O0FBR0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFdBQU9MLEtBQUssQ0FBQ0ssSUFBTixJQUFjQSxJQUFkLEdBQXFCLGlCQUFyQixHQUF5QyxVQUFoRDtBQUNBLEdBRkQ7O0FBSUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNwQixXQUFPTixLQUFLLENBQUNPLE1BQU4sR0FBZSw4QkFBZixHQUFnRCx3QkFBdkQ7QUFDQTs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ1QsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxhQUFNTixpQkFBaUIsQ0FBQ08sTUFBTSxDQUFDQyxPQUFSLENBQXZCO0FBQUEsS0FBZjs7QUFDQUQsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsTUFBbEMsRUFBMEMsS0FBMUM7O0FBQ0EsUUFBR1AsY0FBYyxJQUFJLENBQXJCLEVBQXdCO0FBQ3BCUSxZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixNQUFyQyxFQUE2QyxJQUE3QztBQUNIO0FBQ0osR0FOSyxFQU1ILENBQUNQLGNBQUQsQ0FORyxDQUFUO0FBUUEsU0FDQztBQUFLLGFBQVMsRUFBRUksU0FBUyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRDtBQUFXLGFBQVMsRUFBQyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUFRLFNBQUssRUFBRU4sS0FBSyxDQUFDSyxJQUFOLEtBQWUsR0FBZixHQUFxQixFQUFyQixHQUEwQixFQUF6QztBQUE2QyxRQUFJLE1BQWpEO0FBQWtELFNBQUssTUFBdkQ7QUFBd0QsVUFBTSxFQUFDLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0VBQUQ7QUFBbUIsYUFBUyxFQUFDLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxhQUVzREgsY0FGdEQsTUFERCxDQURELEVBT0MsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRUYsS0FBSyxDQUFDYyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFRQyxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFZCxLQUFLLENBQUNPLE1BQXhCO0FBQWdDLFVBQU0sTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLCtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRUgsV0FBVyxDQUFDLFFBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBcEIsQ0FERCxDQURELEVBSUM7QUFBSSxhQUFTLEVBQUVBLFdBQVcsQ0FBQyxVQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQjtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQXRCLENBREQsQ0FKRCxFQU9DO0FBQUksYUFBUyxFQUFFQSxXQUFXLENBQUMsUUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUFwQixDQURELENBUEQsRUFVQztBQUFJLGFBQVMsRUFBRUEsV0FBVyxDQUFDLFVBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFBdEIsQ0FERCxDQVZELENBREQsRUFlQztBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQTJCLGFBQVMsRUFBQyxpQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELFVBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbkIsZUFERCxDQURELENBZkQsQ0FSRCxDQURELENBREQsQ0FERDtBQXNDQTs7R0ExRGVMLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG9yZGVyLmpzLmY0MDkzZTkyMTMwZjM3MWRkZGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEFpT3V0bGluZURpbmdkaW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IEZhUGhvbmVBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDb2xsYXBzZSwgTmF2YmFyLCBOYXZiYXJUb2dnbGVyIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0b3IocHJvcHMpXHJcbntcclxuXHJcblx0Y29uc3QgW3Njcm9sbHBvc2l0aW9uLCBzZXRTY3JvbGxwb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKVxyXG5cdGNvbnN0IGFjdGl2ZUNsYXNzID0gKGxpbmspID0+IHtcclxuXHRcdHJldHVybiBwcm9wcy5saW5rID09IGxpbmsgPyBcIm5hdi1pdGVtIGFjdGl2ZVwiIDogXCJuYXYtaXRlbVwiXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBDdXN0b21CYXIoKSB7XHJcblx0XHRyZXR1cm4gcHJvcHMuaXNPcGVuID8gJ3B0LTQgaC0xMDAgYmctZGFyayBmaXhlZC10b3AnIDogJ2JnLWRhcmsgZml4ZWQtdG9wIG10LTQnXHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFNjcm9sbCA9ICgpID0+IHNldFNjcm9sbHBvc2l0aW9uKHdpbmRvdy5zY3JvbGxZKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBTY3JvbGwsIGZhbHNlKVxyXG4gICAgICAgIGlmKHNjcm9sbHBvc2l0aW9uID09IDApIHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFNjcm9sbCwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2Nyb2xscG9zaXRpb25dKVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Q3VzdG9tQmFyKCl9PlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtMFwiPlxyXG5cdFx0XHRcdDxOYXZiYXIgY29sb3I9e3Byb3BzLmxpbmsgPT09ICcvJyA/IFwiXCIgOiBcIlwifSBkYXJrIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8QWlPdXRsaW5lRGluZ2RpbmcgY2xhc3NOYW1lPVwidGV4dC1yZWFjdFwiIC8+IFxyXG5cdFx0XHRcdFx0XHRcdDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1yZWFjdFwiPlJlYWN0PC9zdHJvbmc+IFBhZ2UgKHtzY3JvbGxwb3NpdGlvbn0pXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZX0gLz5cclxuXHRcdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e3Byb3BzLmlzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteC1hdXRvIHRleHQtbGctbGVmdCB0ZXh0LW1kLWxlZnQgdGV4dC1jZW50ZXIgbXQtbGctMCBtdC1tZC0wIG10LTVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL2Fib3V0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JrRgtC+INC80Ys8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9zZXJ2aWNlJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9zZXJ2aWNlXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7Qo9GB0LvRg9Cz0Lg8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9vcmRlcicpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvb3JkZXJcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9jb250YWN0Jyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG10LWxnLTAgbXQtbWQtMCBtdC01IHRleHQtbGctcmlnaHQgdGV4dC1tZC1yaWdodCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDorNzk5OTg0OTI5MjdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZhUGhvbmVBbHQgLz4gKzcgPGI+KDk5OSk8L2I+IDg0OS0yOS0yN1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHRcdDwvTmF2YmFyPlx0XHRcdFx0XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==