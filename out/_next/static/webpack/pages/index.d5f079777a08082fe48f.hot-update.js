/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useWelfare.js":
/*!*****************************!*\
  !*** ./hooks/useWelfare.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_contracts_Welfare_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/contracts/Welfare.json */ \"./build/contracts/Welfare.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useWelfare = function useWelfare(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default().setProvider(web3.givenProvider);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default())(_build_contracts_Welfare_json__WEBPACK_IMPORTED_MODULE_2__.abi, address));\n      console.log(\"WELFARE ADDRESS\", address);\n    } else {\n      console.log(\"WELFARE NOT SET\");\n    }\n  }, [address]);\n  return [contract.methods, web3];\n};\n\n_s(useWelfare, \"3W+FT7V3g2uALWINEU/ClBL63MQ=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWelfare);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2VsZmFyZS5qcz8yMmRkIl0sIm5hbWVzIjpbInVzZVdlbGZhcmUiLCJhZGRyZXNzIiwid2ViMyIsInVzZVdlYjMiLCJ1c2VTdGF0ZSIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ1c2VFZmZlY3QiLCJDb250cmFjdCIsImdpdmVuUHJvdmlkZXIiLCJXZWxmYXJlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyxpREFBTyxFQUFwQjs7QUFEOEIsa0JBRUVDLCtDQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFdkJDLFFBRnVCO0FBQUEsTUFFYkMsV0FGYTs7QUFJOUJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLE9BQUosRUFBYTtBQUNYTywwRUFBQSxDQUFxQk4sSUFBSSxDQUFDTyxhQUExQjtBQUNBSCxpQkFBVyxDQUFDLElBQUlFLDBEQUFKLENBQWFFLDhEQUFiLEVBQTBCVCxPQUExQixDQUFELENBQVg7QUFDQVUsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JYLE9BQS9CO0FBQ0QsS0FKRCxNQUlPO0FBQ0xVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ1gsT0FBRCxDQVJNLENBQVQ7QUFVQSxTQUFPLENBQUNJLFFBQVEsQ0FBQ1EsT0FBVixFQUFtQlgsSUFBbkIsQ0FBUDtBQUNELENBZkQ7O0dBQU1GLFU7VUFDU0csNkM7OztBQWdCZiwrREFBZUgsVUFBZiIsImZpbGUiOiIuL2hvb2tzL3VzZVdlbGZhcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnXG5pbXBvcnQgV2VsZmFyZSBmcm9tICcuLi9idWlsZC9jb250cmFjdHMvV2VsZmFyZS5qc29uJ1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJ1xuXG5jb25zdCB1c2VXZWxmYXJlID0gKGFkZHJlc3MpID0+IHtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKVxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgIENvbnRyYWN0LnNldFByb3ZpZGVyKHdlYjMuZ2l2ZW5Qcm92aWRlcilcbiAgICAgIHNldENvbnRyYWN0KG5ldyBDb250cmFjdChXZWxmYXJlLmFiaSwgYWRkcmVzcykpXG4gICAgICBjb25zb2xlLmxvZyhcIldFTEZBUkUgQUREUkVTU1wiLCBhZGRyZXNzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIldFTEZBUkUgTk9UIFNFVFwiKVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKVxuXG4gIHJldHVybiBbY29udHJhY3QubWV0aG9kcywgd2ViM11cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2VsZmFyZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useWelfare.js\n");

/***/ })

});