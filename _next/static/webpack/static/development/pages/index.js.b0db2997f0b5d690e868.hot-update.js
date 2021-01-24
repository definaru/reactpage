webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigator */ "./components/Navigator.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\NewServer\\OSPanel\\domains\\landing\\components\\layout\\MainInterface.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Link from 'next/link'






function MainInterface(_ref) {
  _s();

  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'React Page' : _ref$title;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["SkeletonTheme"], {
    color: "#202020",
    highlightColor: "#444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_2__["Navigator"], {
    isOpining: toggle,
    link: router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), children), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    md: {
      size: 6
    },
    className: "text-lg-left text-md-left text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, "\xA9 ", new Date().getFullYear(), " \xA0", __jsx("a", {
    href: "https://defina.ru",
    className: "text-react",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Defina LLC"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    md: {
      size: 6
    },
    className: "text-lg-right text-md-right text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"))))));
}

_s(MainInterface, "Y6YAMvWLEQi2oHPTWp3ks3tQlvY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NYWluSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbIk1haW5JbnRlcmZhY2UiLCJjaGlsZHJlbiIsInRpdGxlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJwYXRobmFtZSIsInNpemUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sU0FBU0EsYUFBVCxPQUNQO0FBQUE7O0FBQUEsTUFEZ0NDLFFBQ2hDLFFBRGdDQSxRQUNoQztBQUFBLHdCQUQwQ0MsS0FDMUM7QUFBQSxNQUQwQ0EsS0FDMUMsMkJBRGtELFlBQ2xEO0FBQ0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFERCxrQkFFNkJDLHNEQUFRLENBQUMsS0FBRCxDQUZyQztBQUFBLE1BRVFDLE1BRlI7QUFBQSxNQUVnQkMsU0FGaEI7O0FBR0MsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFFQSxTQUNDLE1BQUMsb0VBQUQ7QUFBZSxTQUFLLEVBQUMsU0FBckI7QUFBK0Isa0JBQWMsRUFBQyxNQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSixLQUFSLENBREQsRUFFQztBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBVyxhQUFTLEVBQUVNLE1BQXRCO0FBQThCLFFBQUksRUFBRUwsTUFBTSxDQUFDTSxRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFR1IsUUFGSCxDQUxELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFZLE1BQUUsRUFBRTtBQUFFUyxVQUFJLEVBQUU7QUFBUixLQUFoQjtBQUE2QixhQUFTLEVBQUMsdUNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1MsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBRFQsV0FFQztBQUFHLFFBQUksRUFBQyxtQkFBUjtBQUE0QixhQUFTLEVBQUMsWUFBdEM7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsQ0FERCxDQURELEVBT0MsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksTUFBRSxFQUFFO0FBQUVGLFVBQUksRUFBRTtBQUFSLEtBQWhCO0FBQTZCLGFBQVMsRUFBQyx5Q0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEdBREQsQ0FQRCxDQURELENBREQsQ0FURCxDQUREO0FBMkJBOztHQWpDZVYsYTtVQUVBSSxxRDs7O0tBRkFKLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmIwZGIyOTk3ZjBiNWQ2OTBlODY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4uL05hdmlnYXRvcidcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCB7IFNrZWxldG9uVGhlbWUgfSBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWluSW50ZXJmYWNlKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1JlYWN0IFBhZ2UnIH0pXHJcbntcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNrZWxldG9uVGhlbWUgY29sb3I9XCIjMjAyMDIwXCIgaGlnaGxpZ2h0Q29sb3I9XCIjNDQ0XCI+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PG1haW4+XHJcblx0XHRcdFx0PE5hdmlnYXRvciBpc09waW5pbmc9e3RvZ2dsZX0gbGluaz17cm91dGVyLnBhdGhuYW1lfS8+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdFx0PGZvb3Rlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0PENvbCBzbT1cIjZcIiBtZD17eyBzaXplOiA2IH19IGNsYXNzTmFtZT1cInRleHQtbGctbGVmdCB0ZXh0LW1kLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gJiMxNjA7IFxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZGVmaW5hLnJ1XCIgY2xhc3NOYW1lPVwidGV4dC1yZWFjdFwiIHRhcmdldD1cIl9ibGFua1wiPkRlZmluYSBMTEM8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdDxDb2wgc209XCI2XCIgbWQ9e3sgc2l6ZTogNiB9fSBjbGFzc05hbWU9XCJ0ZXh0LWxnLXJpZ2h0IHRleHQtbWQtcmlnaHQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD7QktGB0LUg0L/RgNCw0LLQsCDQt9Cw0YnQuNGJ0LXQvdGLPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdDwvU2tlbGV0b25UaGVtZT5cclxuXHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9