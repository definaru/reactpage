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
    return scroll >= 100 ? 'bg-dark' : '';
  };

  function CustomBar() {
    var res = DarkPanel(scrollposition);
    return props.isOpen ? "pt-4 h-100 bg-dark fixed-top" : "".concat(res, " fixed-top mt-4");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2Nyb2xscG9zaXRpb24iLCJzZXRTY3JvbGxwb3NpdGlvbiIsImFjdGl2ZUNsYXNzIiwibGluayIsIkRhcmtQYW5lbCIsInNjcm9sbCIsIkN1c3RvbUJhciIsInJlcyIsImlzT3BlbiIsInVzZUVmZmVjdCIsIlNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFDUDtBQUFBOztBQUFBLGtCQUU2Q0Msc0RBQVEsQ0FBQyxDQUFELENBRnJEO0FBQUEsTUFFUUMsY0FGUjtBQUFBLE1BRXdCQyxpQkFGeEI7O0FBR0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFdBQU9MLEtBQUssQ0FBQ0ssSUFBTixJQUFjQSxJQUFkLEdBQXFCLGlCQUFyQixHQUF5QyxVQUFoRDtBQUNBLEdBRkQ7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFdBQU9BLE1BQU0sSUFBRyxHQUFULEdBQWUsU0FBZixHQUEyQixFQUFsQztBQUNBLEdBRkQ7O0FBSUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0osY0FBRCxDQUFyQjtBQUNBLFdBQU9GLEtBQUssQ0FBQ1UsTUFBTiw4Q0FBbURELEdBQW5ELG9CQUFQO0FBQ0E7O0FBRURFLHlEQUFTLENBQUMsWUFBTTtBQUNULFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsYUFBTVQsaUJBQWlCLENBQUNV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VyxDQUFDLFVBQUQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFBdEIsQ0FERCxDQVZELENBREQsRUFlQztBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQTJCLGFBQVMsRUFBQyxpQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELFVBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbkIsZUFERCxDQURELENBZkQsQ0FSRCxDQURELENBREQsQ0FERDtBQXNDQTs7R0E5RGVMLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNlcnZpY2UuanMuMDMzZDY4YjM0ZDJiYjk1YmE2M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWlPdXRsaW5lRGluZ2RpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgRmFQaG9uZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRvcihwcm9wcylcclxue1xyXG5cclxuXHRjb25zdCBbc2Nyb2xscG9zaXRpb24sIHNldFNjcm9sbHBvc2l0aW9uXSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgYWN0aXZlQ2xhc3MgPSAobGluaykgPT4ge1xyXG5cdFx0cmV0dXJuIHByb3BzLmxpbmsgPT0gbGluayA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcclxuXHR9XHJcblx0Y29uc3QgRGFya1BhbmVsID0gKHNjcm9sbCkgPT4ge1xyXG5cdFx0cmV0dXJuIHNjcm9sbCA+PTEwMCA/ICdiZy1kYXJrJyA6ICcnXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBDdXN0b21CYXIoKSB7XHJcblx0XHRjb25zdCByZXMgPSBEYXJrUGFuZWwoc2Nyb2xscG9zaXRpb24pXHJcblx0XHRyZXR1cm4gcHJvcHMuaXNPcGVuID8gYHB0LTQgaC0xMDAgYmctZGFyayBmaXhlZC10b3BgIDogYCR7cmVzfSBmaXhlZC10b3AgbXQtNGBcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgU2Nyb2xsID0gKCkgPT4gc2V0U2Nyb2xscG9zaXRpb24od2luZG93LnNjcm9sbFkpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFNjcm9sbCwgZmFsc2UpXHJcbiAgICAgICAgaWYoc2Nyb2xscG9zaXRpb24gPT0gMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgU2Nyb2xsLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzY3JvbGxwb3NpdGlvbl0pXHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtDdXN0b21CYXIoKX0+XHJcblx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPVwicC0wXCI+XHJcblx0XHRcdFx0PE5hdmJhciBjb2xvcj17cHJvcHMubGluayA9PT0gJy8nID8gXCJcIiA6IFwiXCJ9IGRhcmsgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVEaW5nZGluZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCIgLz4gXHJcblx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXJlYWN0XCI+UmVhY3Q8L3N0cm9uZz4gUGFnZSAoe3Njcm9sbHBvc2l0aW9ufSlcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17cHJvcHMudG9nZ2xlfSAvPlxyXG5cdFx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17cHJvcHMuaXNPcGVufSBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG8gdGV4dC1sZy1sZWZ0IHRleHQtbWQtbGVmdCB0ZXh0LWNlbnRlciBtdC1sZy0wIG10LW1kLTAgbXQtNVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzKCcvYWJvdXQnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7QmtGC0L4g0LzRizwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL3NlcnZpY2UnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NlcnZpY2VcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCj0YHQu9GD0LPQuDwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL29yZGVyJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9vcmRlclwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXthY3RpdmVDbGFzcygnL2NvbnRhY3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPtCa0L7QvdGC0LDQutGC0Ys8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXQtbGctMCBtdC1tZC0wIG10LTUgdGV4dC1sZy1yaWdodCB0ZXh0LW1kLXJpZ2h0IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOis3OTk5ODQ5MjkyN1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RmFQaG9uZUFsdCAvPiArNyA8Yj4oOTk5KTwvYj4gODQ5LTI5LTI3XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0PC9OYXZiYXI+XHRcdFx0XHRcclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9