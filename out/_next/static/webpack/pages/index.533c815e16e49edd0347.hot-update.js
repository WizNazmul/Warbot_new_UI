/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useSecurity.js":
/*!******************************!*\
  !*** ./hooks/useSecurity.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/contracts/SocialSecurity.json */ \"./build/contracts/SocialSecurity.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSecurity = function useSecurity(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      connected = _useState2[0],\n      setConnected = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default().setProvider(web3.givenProvider);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default())(_build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__.abi, address));\n      setConnected(true);\n      console.log(\"SOCIAL SECURITY ADDRESS\", address);\n    } else {\n      console.log(\"SOCIAL SECURITY ADDRESS NOT SET\");\n    }\n  }, [address]);\n\n  var getField = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(field) {\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!changed) {\n                _context.next = 4;\n                break;\n              }\n\n              _context.next = 3;\n              return contract.methods[field]().call();\n\n            case 3:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 4:\n              return _context.abrupt(\"return\", false);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getField(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendTx = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(field, wallet) {\n      var _contract$methods,\n          _len,\n          rest,\n          _key,\n          _args2 = arguments;\n\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!changed) {\n                _context2.next = 5;\n                break;\n              }\n\n              for (_len = _args2.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n                rest[_key - 2] = _args2[_key];\n              }\n\n              _context2.next = 4;\n              return (_contract$methods = contract.methods)[field].apply(_contract$methods, rest).send({\n                from: wallet,\n                to: address\n              });\n\n            case 4:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 5:\n              return _context2.abrupt(\"return\", false);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendTx(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return {\n    methods: contract.methods,\n    web3: web3,\n    getField: getField,\n    sendTx: sendTx,\n    connected: connected\n  };\n};\n\n_s(useSecurity, \"4I1Ckkl3uFzgJ+4U2GFS1OKKyJ0=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSecurity);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VjdXJpdHkuanM/OTM4YiJdLCJuYW1lcyI6WyJ1c2VTZWN1cml0eSIsImFkZHJlc3MiLCJ3ZWIzIiwidXNlV2ViMyIsInVzZVN0YXRlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZUVmZmVjdCIsIkNvbnRyYWN0IiwiZ2l2ZW5Qcm92aWRlciIsIlNTZWN1cml0eSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGaWVsZCIsImZpZWxkIiwiY2hhbmdlZCIsIm1ldGhvZHMiLCJjYWxsIiwic2VuZFR4Iiwid2FsbGV0IiwicmVzdCIsInNlbmQiLCJmcm9tIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHQyxpREFBTyxFQUFwQjs7QUFEK0Isa0JBRUNDLCtDQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFeEJDLFFBRndCO0FBQUEsTUFFZEMsV0FGYzs7QUFBQSxtQkFHR0YsK0NBQVEsQ0FBQyxLQUFELENBSFg7QUFBQSxNQUd4QkcsU0FId0I7QUFBQSxNQUdiQyxZQUhhOztBQUsvQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsT0FBSixFQUFhO0FBQ1hTLDBFQUFBLENBQXFCUixJQUFJLENBQUNTLGFBQTFCO0FBQ0FMLGlCQUFXLENBQUMsSUFBSUksMERBQUosQ0FBYUUscUVBQWIsRUFBNEJYLE9BQTVCLENBQUQsQ0FBWDtBQUNBTyxrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2IsT0FBdkM7QUFDRCxLQUxELE1BS087QUFDTFksYUFBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDYixPQUFELENBVE0sQ0FBVDs7QUFXQSxNQUFNYyxRQUFRO0FBQUEsbVRBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNYQyxPQURXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRUFaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkYsS0FBakIsSUFBMEJHLElBQTFCLEVBRkE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtDQUlSLEtBSlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkosUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU9BLE1BQU1LLE1BQU07QUFBQSxvVEFBRyxrQkFBTUosS0FBTixFQUFhSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNUSixPQURTO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlDQUF3QkssSUFBeEI7QUFBd0JBLG9CQUF4QjtBQUFBOztBQUFBO0FBQUEscUJBRUUscUJBQUFqQixRQUFRLENBQUNhLE9BQVQsRUFBaUJGLEtBQWpCLDJCQUEyQk0sSUFBM0IsRUFBaUNDLElBQWpDLENBQXNDO0FBQUVDLG9CQUFJLEVBQUVILE1BQVI7QUFBZ0JJLGtCQUFFLEVBQUV4QjtBQUFwQixlQUF0QyxDQUZGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnREFJTixLQUpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5tQixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBT0EsU0FBTztBQUNMRixXQUFPLEVBQUViLFFBQVEsQ0FBQ2EsT0FEYjtBQUVMaEIsUUFBSSxFQUFKQSxJQUZLO0FBR0xhLFlBQVEsRUFBUkEsUUFISztBQUlMSyxVQUFNLEVBQU5BLE1BSks7QUFLTGIsYUFBUyxFQUFUQTtBQUxLLEdBQVA7QUFPRCxDQXJDRDs7R0FBTVAsVztVQUNTRyw2Qzs7O0FBc0NmLCtEQUFlSCxXQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlU2VjdXJpdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnXG5pbXBvcnQgU1NlY3VyaXR5IGZyb20gJy4uL2J1aWxkL2NvbnRyYWN0cy9Tb2NpYWxTZWN1cml0eS5qc29uJ1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJ1xuXG5jb25zdCB1c2VTZWN1cml0eSA9IChhZGRyZXNzKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKClcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgIENvbnRyYWN0LnNldFByb3ZpZGVyKHdlYjMuZ2l2ZW5Qcm92aWRlcilcbiAgICAgIHNldENvbnRyYWN0KG5ldyBDb250cmFjdChTU2VjdXJpdHkuYWJpLCBhZGRyZXNzKSlcbiAgICAgIHNldENvbm5lY3RlZCh0cnVlKVxuICAgICAgY29uc29sZS5sb2coXCJTT0NJQUwgU0VDVVJJVFkgQUREUkVTU1wiLCBhZGRyZXNzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNPQ0lBTCBTRUNVUklUWSBBRERSRVNTIE5PVCBTRVRcIilcbiAgICB9XG4gIH0sIFthZGRyZXNzXSlcblxuICBjb25zdCBnZXRGaWVsZCA9IGFzeW5jKGZpZWxkKSA9PiB7XG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBjb250cmFjdC5tZXRob2RzW2ZpZWxkXSgpLmNhbGwoKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHNlbmRUeCA9IGFzeW5jKGZpZWxkLCB3YWxsZXQsIC4uLnJlc3QpID0+IHtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKC4uLnJlc3QpLnNlbmQoeyBmcm9tOiB3YWxsZXQsIHRvOiBhZGRyZXNzIH0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRob2RzOiBjb250cmFjdC5tZXRob2RzLFxuICAgIHdlYjMsXG4gICAgZ2V0RmllbGQsXG4gICAgc2VuZFR4LFxuICAgIGNvbm5lY3RlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlY3VyaXR5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useSecurity.js\n");

/***/ })

});