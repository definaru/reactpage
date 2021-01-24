webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_MainInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/MainInterface */ "./components/layout/MainInterface.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\NewServer\\OSPanel\\domains\\landing\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import Time from '../components/Time'





 //import Scrollable from '../components/Scrollable'

function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      loading = _useState[0],
      setLoad = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    function Load() {
      setLoad(true);
    }

    setTimeout(Load, 500);
  });
  return __jsx(_components_layout_MainInterface__WEBPACK_IMPORTED_MODULE_5__["MainInterface"], {
    title: !loading ? 'Loading...' : 'React Page | Опереди своих конкурентов',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx("section", {
    className: "jsx-629244788" + " " + ((!loading ? '' : "index") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "jsx-629244788" + " " + ((!loading ? '' : "bg-index") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
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
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    md: "8",
    className: "mt-5 pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, __jsx("div", {
    style: {
      background: "transparent"
    },
    className: "jsx-629244788" + " " + "jumbotron pl-0 pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, !loading ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    width: 350,
    height: 50,
    variant: "text",
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }), __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    width: 360,
    height: 50,
    variant: "text",
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }), __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }), __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    width: 200,
    height: 40,
    variant: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }
  })) : __jsx("h2", {
    className: "jsx-629244788" + " " + "text-white display-4 font-weight-bold text-uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\u041E\u043F\u0435\u0440\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432", __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }), __jsx("small", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  }, "\u0421\u0435\u0439\u0447\u0430\u0441")), !loading ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    count: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    count: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("p", {
    className: "jsx-629244788" + " " + "lead text-react mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "\u0412\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442, \u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 - \u043D\u0435\u0442 ?", __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 39
    }
  }), "\u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 React Page."), __jsx("p", {
    className: "jsx-629244788" + " " + "text-white mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "\u041C\u044B \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0437\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 9 \u043F\u0440\u0438\u0447\u0438\u043D, \u043F\u043E\u0447\u0435\u043C\u0443 \u0432\u0430\u043C \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E!")), !loading ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-629244788",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    width: 140,
    height: 40,
    className: "mr-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animation: "wave",
    width: 140,
    height: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-629244788" + " " + "btn btn-lg btn-warning bg-react mr-3 sea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillThunderbolt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), "\xA0 \u0423\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u0431\u0438\u0437\u043D\u0435\u0441")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-629244788" + " " + "btn btn-lg btn-outline-light sea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 10
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineArrowRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), "\xA0 \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    md: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "629244788",
    __self: this
  }, ".index.jsx-629244788{background:url(../banner1-1.jpg) no-repeat fixed;background-size:cover;background-position:center;padding:0 !important;}.bg-index.jsx-629244788{background:linear-gradient(90deg,rgba(0,0,0,0.85) 0%, rgba(103,92,64,0.8) 35%, rgba(29,33,36,0) 100%);padding:60px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxOZXdTZXJ2ZXJcXE9TUGFuZWxcXGRvbWFpbnNcXGxhbmRpbmdcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRmtCLEFBR3VELEFBUXhCLGlEQVBILHNCQUNLLDJCQUNQLElBTUwsZUFDaEIsRUFOQSIsImZpbGUiOiJDOlxcTmV3U2VydmVyXFxPU1BhbmVsXFxkb21haW5zXFxsYW5kaW5nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZSdcclxuaW1wb3J0IHsgQWlGaWxsVGh1bmRlcmJvbHQsIEFpT3V0bGluZUFycm93UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJ1xyXG5pbXBvcnQgeyBNYWluSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpbkludGVyZmFjZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy9pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbGFibGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIFxyXG57XHJcblx0XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpICBcclxuXHRcdCAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIExvYWQoKXtcclxuXHRcdFx0c2V0TG9hZCh0cnVlKVxyXG5cdFx0fVxyXG5cdFx0c2V0VGltZW91dChMb2FkLCA1MDApXHJcblx0fSlcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TWFpbkludGVyZmFjZSB0aXRsZT17IWxvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnUmVhY3QgUGFnZSB8INCe0L/QtdGA0LXQtNC4INGB0LLQvtC40YUg0LrQvtC90LrRg9GA0LXQvdGC0L7Qsid9PlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9eyFsb2FkaW5nID8gJycgOiBcImluZGV4XCJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXshbG9hZGluZyA/ICcnIDogXCJiZy1pbmRleFwifT5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdCAgPFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgc209XCI2XCIgbWQ9XCI4XCIgY2xhc3NOYW1lPVwibXQtNSBwdC0zXCI+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIHBsLTAgcHItMFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQhbG9hZGluZyA/IFxyXG5cdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezUwfSB2YXJpYW50PVwidGV4dFwiIGNsYXNzTmFtZT1cIm1iLTNcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTa2VsZXRvbiBhbmltYXRpb249XCJ3YXZlXCIgd2lkdGg9ezM2MH0gaGVpZ2h0PXs1MH0gdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9XCJtYi0zXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezQwfSB2YXJpYW50PVwidGV4dFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCA6IFxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx00J7Qv9C10YDQtdC00LjRgtC1INC60L7QvdC60YPRgNC10L3RgtC+0LJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPtCh0LXQudGH0LDRgTwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHR9ICAgICAgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQhbG9hZGluZyA/IFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24gYW5pbWF0aW9uPVwid2F2ZVwiIGNvdW50PXsyfS8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24gYW5pbWF0aW9uPVwid2F2ZVwiIGNvdW50PXsxfS8+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0IDogXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1yZWFjdCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdNCS0YDQtdC80Y8g0LjQtNGR0YIsINCwINC/0YDQvtC00LDQttC4IC0g0L3QtdGCID88YnIvPtCh0LDQvNC+0LUg0LLRgNC10LzRjyDQv9C10YDQtdGF0L7QtNC40YLRjCDQvdCwIFJlYWN0IFBhZ2UuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTVcIj7QnNGLINC80L7QttC10Lwg0L3QsNC30LLQsNGC0Ywg0LrQsNC6INC80LjQvdC40LzRg9C8IDkg0L/RgNC40YfQuNC9LCDQv9C+0YfQtdC80YMg0LLQsNC8INGN0YLQviDQvdGD0LbQvdC+ITwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR7IWxvYWRpbmcgPyBcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24gYW5pbWF0aW9uPVwid2F2ZVwiIHdpZHRoPXsxNDB9IGhlaWdodD17NDB9IGNsYXNzTmFtZT1cIm1yLTNcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiB3aWR0aD17MTQwfSBoZWlnaHQ9ezQwfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCA6IFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL29yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXdhcm5pbmcgYmctcmVhY3QgbXItMyBzZWFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsVGh1bmRlcmJvbHQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmIzE2MDsg0KPQu9GD0YfRiNC40YLRjCDQsdC40LfQvdC10YFcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NvbHV0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLW91dGxpbmUtbGlnaHQgc2VhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZUFycm93UmlnaHQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmIzE2MDsg0J/QvtC00YDQvtCx0L3QtdC1XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBzbT1cIjZcIiBtZD1cIjRcIj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQgIDwvUm93PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdCAgICA8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LmluZGV4IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi9iYW5uZXIxLTEuanBnKSBuby1yZXBlYXQgZml4ZWQ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzowICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5iZy1pbmRleCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMCwgMCwgMC44NSkgMCUsIFxyXG5cdFx0XHRcdFx0cmdiYSgxMDMsIDkyLCA2NCwgMC44KSAzNSUsIFxyXG5cdFx0XHRcdFx0cmdiYSgyOSwgMzMsIDM2LCAwKSAxMDAlKTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDYwcHggMDtcclxuXHRcdFx0XHR9XHJcblx0XHQgIGB9PC9zdHlsZT5cdFx0XHRcclxuXHRcdDwvTWFpbkludGVyZmFjZT5cclxuXHQgIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\NewServer\\\\OSPanel\\\\domains\\\\landing\\\\pages\\\\index.js */"));
}

_s(HomePage, "Vr6yR9mSwMOU8/0qL6KD3p32xTY=");

_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsIkxvYWQiLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBR2UsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFDZjtBQUFBOztBQUFBLGtCQUU0QkMsc0RBQVEsQ0FBQyxLQUFELENBRnBDO0FBQUEsTUFFUUMsT0FGUjtBQUFBLE1BRWlCQyxPQUZqQjs7QUFJQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2YsYUFBU0MsSUFBVCxHQUFlO0FBQ2RGLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQTs7QUFDREcsY0FBVSxDQUFDRCxJQUFELEVBQU8sR0FBUCxDQUFWO0FBQ0EsR0FMUSxDQUFUO0FBUUEsU0FDQyxNQUFDLDhFQUFEO0FBQWUsU0FBSyxFQUFFLENBQUNILE9BQUQsR0FBVyxZQUFYLEdBQTBCLHdDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQSx5Q0FBb0IsQ0FBQ0EsT0FBRCxHQUFXLEVBQVgsR0FBZ0IsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUEseUNBQWdCLENBQUNBLE9BQUQsR0FBVyxFQUFYLEdBQWdCLFVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRCxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxNQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFTLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXFDLFNBQUssRUFBRTtBQUFFSyxnQkFBVSxFQUFFO0FBQWQsS0FBNUM7QUFBQSx1Q0FBZSxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0EsQ0FBQ0wsT0FBRCxHQUNDLG1FQUNDLE1BQUMsNkRBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBMkIsU0FBSyxFQUFFLEdBQWxDO0FBQXVDLFVBQU0sRUFBRSxFQUEvQztBQUFtRCxXQUFPLEVBQUMsTUFBM0Q7QUFBa0UsYUFBUyxFQUFDLE1BQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQyw2REFBRDtBQUFVLGFBQVMsRUFBQyxNQUFwQjtBQUEyQixTQUFLLEVBQUUsR0FBbEM7QUFBdUMsVUFBTSxFQUFFLEVBQS9DO0FBQW1ELFdBQU8sRUFBQyxNQUEzRDtBQUFrRSxhQUFTLEVBQUMsTUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFLQyxNQUFDLDZEQUFEO0FBQVUsYUFBUyxFQUFDLE1BQXBCO0FBQTJCLFNBQUssRUFBRSxHQUFsQztBQUF1QyxVQUFNLEVBQUUsRUFBL0M7QUFBbUQsV0FBTyxFQUFDLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELEdBU0M7QUFBQSx1Q0FBYyxzREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtJQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUhELENBWkQsRUFtQkEsQ0FBQ0EsT0FBRCxHQUNBLG1FQUNDLE1BQUMsNkRBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBMkIsU0FBSyxFQUFFLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsNkRBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBMkIsU0FBSyxFQUFFLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURBLEdBTUEsbUVBQ0M7QUFBQSx1Q0FBYSxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBJQUM4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEOUIsd0pBREQsRUFJQztBQUFBLHVDQUFhLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1NBSkQsQ0F6QkEsRUFnQ0EsQ0FBQ0EsT0FBRCxHQUNBLG1FQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQyxNQUFDLDZEQUFEO0FBQVUsYUFBUyxFQUFDLE1BQXBCO0FBQTJCLFNBQUssRUFBRSxHQUFsQztBQUF1QyxVQUFNLEVBQUUsRUFBL0M7QUFBbUQsYUFBUyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlDLE1BQUMsNkRBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBMkIsU0FBSyxFQUFFLEdBQWxDO0FBQXVDLFVBQU0sRUFBRSxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FEQSxHQVFBLG1FQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQSx1Q0FBYSwwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsK0ZBREQsQ0FERCxFQVFDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQSx1Q0FBYSxrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsZ0VBREQsQ0FSRCxDQXhDQSxDQURGLENBREMsRUE0REQsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksTUFBRSxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVEQyxDQURGLENBREEsQ0FERCxDQUREO0FBQUE7QUFBQTtBQUFBLHl3TUFERDtBQXdGQTs7R0FyR3VCSCxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hY2QwYmQyMzNlY2FkODcyYmIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgVGltZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWUnXHJcbmltcG9ydCB7IEFpRmlsbFRodW5kZXJib2x0LCBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbidcclxuaW1wb3J0IHsgTWFpbkludGVyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5JbnRlcmZhY2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IFNjcm9sbGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxhYmxlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSBcclxue1xyXG5cdFxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKSAgXHJcblx0XHQgIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBMb2FkKCl7XHJcblx0XHRcdHNldExvYWQodHJ1ZSlcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoTG9hZCwgNTAwKVxyXG5cdH0pXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1haW5JbnRlcmZhY2UgdGl0bGU9eyFsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1JlYWN0IFBhZ2UgfCDQntC/0LXRgNC10LTQuCDRgdCy0L7QuNGFINC60L7QvdC60YPRgNC10L3RgtC+0LInfT5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXshbG9hZGluZyA/ICcnIDogXCJpbmRleFwifT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IWxvYWRpbmcgPyAnJyA6IFwiYmctaW5kZXhcIn0+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQgIDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sIHNtPVwiNlwiIG1kPVwiOFwiIGNsYXNzTmFtZT1cIm10LTUgcHQtM1wiPlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBwbC0wIHByLTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX0+XHJcblxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0IWxvYWRpbmcgPyBcclxuXHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTa2VsZXRvbiBhbmltYXRpb249XCJ3YXZlXCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXs1MH0gdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9XCJtYi0zXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24gYW5pbWF0aW9uPVwid2F2ZVwiIHdpZHRoPXszNjB9IGhlaWdodD17NTB9IHZhcmlhbnQ9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibWItM1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTa2VsZXRvbiBhbmltYXRpb249XCJ3YXZlXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXs0MH0gdmFyaWFudD1cInRleHRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHQgOiBcclxuXHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGRpc3BsYXktNCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdNCe0L/QtdGA0LXQtNC40YLQtSDQutC+0L3QutGD0YDQtdC90YLQvtCyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbD7QodC10LnRh9Cw0YE8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0fSAgICAgIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0IWxvYWRpbmcgPyBcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiBjb3VudD17Mn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiBjb3VudD17MX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCA6IFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsZWFkIHRleHQtcmVhY3QgbWItM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTQktGA0LXQvNGPINC40LTRkdGCLCDQsCDQv9GA0L7QtNCw0LbQuCAtINC90LXRgiA/PGJyLz7QodCw0LzQvtC1INCy0YDQtdC80Y8g0L/QtdGA0LXRhdC+0LTQuNGC0Ywg0L3QsCBSZWFjdCBQYWdlLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi01XCI+0JzRiyDQvNC+0LbQtdC8INC90LDQt9Cy0LDRgtGMINC60LDQuiDQvNC40L3QuNC80YPQvCA5INC/0YDQuNGH0LjQvSwg0L/QvtGH0LXQvNGDINCy0LDQvCDRjdGC0L4g0L3Rg9C20L3QviE8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0eyFsb2FkaW5nID8gXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiB3aWR0aD17MTQwfSBoZWlnaHQ9ezQwfSBjbGFzc05hbWU9XCJtci0zXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxTa2VsZXRvbiBhbmltYXRpb249XCJ3YXZlXCIgd2lkdGg9ezE0MH0gaGVpZ2h0PXs0MH0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQgOiBcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9vcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi13YXJuaW5nIGJnLXJlYWN0IG1yLTMgc2VhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpRmlsbFRodW5kZXJib2x0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiMxNjA7INCj0LvRg9GH0YjQuNGC0Ywg0LHQuNC30L3QtdGBXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9zb2x1dGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1vdXRsaW5lLWxpZ2h0IHNlYVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVBcnJvd1JpZ2h0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiMxNjA7INCf0L7QtNGA0L7QsdC90LXQtVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgc209XCI2XCIgbWQ9XCI0XCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0ICA8L1Jvdz5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5pbmRleCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYmFubmVyMS0xLmpwZykgbm8tcmVwZWF0IGZpeGVkO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYmctaW5kZXgge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDAsIDAsIDAuODUpIDAlLCBcclxuXHRcdFx0XHRcdHJnYmEoMTAzLCA5MiwgNjQsIDAuOCkgMzUlLCBcclxuXHRcdFx0XHRcdHJnYmEoMjksIDMzLCAzNiwgMCkgMTAwJSk7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA2MHB4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBgfTwvc3R5bGU+XHRcdFx0XHJcblx0XHQ8L01haW5JbnRlcmZhY2U+XHJcblx0ICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9