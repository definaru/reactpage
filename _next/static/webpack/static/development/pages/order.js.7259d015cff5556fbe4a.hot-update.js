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

  var DarkPanel = function DarkPanel(scroll) {
    return scroll >= 100 ? 'bg-dark' : 'mt-4';
  };

  function CustomBar() {
    var res = DarkPanel(scrollposition);
    return props.isOpen ? "pt-4 h-100 bg-dark fixed-top" : "".concat(res, " fixed-top");
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
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineDingding"], {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }), __jsx("strong", {
    className: "text-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, "React"), " Page (", scrollposition, ")")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: props.toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: props.isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto text-lg-left text-md-left text-center mt-lg-0 mt-md-0 mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: activeClass('/about'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, "\u041A\u0442\u043E \u043C\u044B"))), __jsx("li", {
    className: activeClass('/service'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 31
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"))), __jsx("li", {
    className: activeClass('/order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))), __jsx("li", {
    className: activeClass('/contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 31
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item mt-lg-0 mt-md-0 mt-5 text-lg-right text-md-right text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "tel:+79998492927",
    className: "btn btn-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }), " +7 ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2Nyb2xscG9zaXRpb24iLCJzZXRTY3JvbGxwb3NpdGlvbiIsImFjdGl2ZUNsYXNzIiwibGluayIsIkRhcmtQYW5lbCIsInNjcm9sbCIsIkN1c3RvbUJhciIsInJlcyIsImlzT3BlbiIsInVzZUVmZmVjdCIsIlNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFDUDtBQUFBOztBQUFBLGtCQUU2Q0Msc0RBQVEsQ0FBQyxDQUFELENBRnJEO0FBQUEsTUFFUUMsY0FGUjtBQUFBLE1BRXdCQyxpQkFGeEI7O0FBR0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFdBQU9MLEtBQUssQ0FBQ0ssSUFBTixJQUFjQSxJQUFkLEdBQXFCLGlCQUFyQixHQUF5QyxVQUFoRDtBQUNBLEdBRkQ7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFdBQU9BLE1BQU0sSUFBRyxHQUFULEdBQWUsU0FBZixHQUEyQixNQUFsQztBQUNBLEdBRkQ7O0FBSUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0osY0FBRCxDQUFyQjtBQUNBLFdBQU9GLEtBQUssQ0FBQ1UsTUFBTiw4Q0FBbURELEdBQW5ELGVBQVA7QUFDQTs7QUFFREUseURBQVMsQ0FBQyxZQUFNO0FBQ1QsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxhQUFNVCxpQkFBaUIsQ0FBQ1Us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LENBQUMsVUFBRCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0I7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUF0QixDQURELENBVkQsQ0FERCxFQWVDO0FBQUksYUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyx1RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUMsa0JBQVI7QUFBMkIsYUFBUyxFQUFDLGlCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsVUFDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURuQixlQURELENBREQsQ0FmRCxDQVJELENBREQsQ0FERCxDQUREO0FBc0NBOztHQTlEZUwsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb3JkZXIuanMuNzI1OWQwMTVjZmY1NTU2ZmJlNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWlPdXRsaW5lRGluZ2RpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgRmFQaG9uZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRvcihwcm9wcylcclxue1xyXG5cclxuXHRjb25zdCBbc2Nyb2xscG9zaXRpb24sIHNldFNjcm9sbHBvc2l0aW9uXSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgYWN0aXZlQ2xhc3MgPSAobGluaykgPT4ge1xyXG5cdFx0cmV0dXJuIHByb3BzLmxpbmsgPT0gbGluayA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcclxuXHR9XHJcblx0Y29uc3QgRGFya1BhbmVsID0gKHNjcm9sbCkgPT4ge1xyXG5cdFx0cmV0dXJuIHNjcm9sbCA+PTEwMCA/ICdiZy1kYXJrJyA6ICdtdC00J1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gQ3VzdG9tQmFyKCkge1xyXG5cdFx0Y29uc3QgcmVzID0gRGFya1BhbmVsKHNjcm9sbHBvc2l0aW9uKVxyXG5cdFx0cmV0dXJuIHByb3BzLmlzT3BlbiA/IGBwdC00IGgtMTAwIGJnLWRhcmsgZml4ZWQtdG9wYCA6IGAke3Jlc30gZml4ZWQtdG9wYFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBTY3JvbGwgPSAoKSA9PiBzZXRTY3JvbGxwb3NpdGlvbih3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgU2Nyb2xsLCBmYWxzZSlcclxuICAgICAgICBpZihzY3JvbGxwb3NpdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBTY3JvbGwsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Njcm9sbHBvc2l0aW9uXSlcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e0N1c3RvbUJhcigpfT5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9XCJwLTBcIj5cclxuXHRcdFx0XHQ8TmF2YmFyIGNvbG9yPXtwcm9wcy5saW5rID09PSAnLycgPyBcIlwiIDogXCJcIn0gZGFyayBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZURpbmdkaW5nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIiAvPiBcclxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtcmVhY3RcIj5SZWFjdDwvc3Ryb25nPiBQYWdlICh7c2Nyb2xscG9zaXRpb259KVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXtwcm9wcy50b2dnbGV9IC8+XHJcblx0XHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtwcm9wcy5pc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXgtYXV0byB0ZXh0LWxnLWxlZnQgdGV4dC1tZC1sZWZ0IHRleHQtY2VudGVyIG10LWxnLTAgbXQtbWQtMCBtdC01XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YWN0aXZlQ2xhc3MoJy9hYm91dCcpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCa0YLQviDQvNGLPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvc2VydmljZScpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvc2VydmljZVwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0KPRgdC70YPQs9C4PC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvb3JkZXInKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL29yZGVyXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvY29udGFjdCcpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JrQvtC90YLQsNC60YLRizwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtdC1sZy0wIG10LW1kLTAgbXQtNSB0ZXh0LWxnLXJpZ2h0IHRleHQtbWQtcmlnaHQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6Kzc5OTk4NDkyOTI3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGYVBob25lQWx0IC8+ICs3IDxiPig5OTkpPC9iPiA4NDktMjktMjdcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHQ8L05hdmJhcj5cdFx0XHRcdFxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=