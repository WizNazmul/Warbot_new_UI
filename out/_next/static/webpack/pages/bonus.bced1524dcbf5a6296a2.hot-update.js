/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bonus",{

/***/ "./hooks/useBonus.js":
/*!***************************!*\
  !*** ./hooks/useBonus.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_contracts_BonusVault_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/contracts/BonusVault.json */ \"./build/contracts/BonusVault.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useContract = function useContract(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      connected = _useState2[0],\n      setConnected = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default().setProvider(__webpack_require__.g.window && window.ethereum);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_1___default())(_build_contracts_BonusVault_json__WEBPACK_IMPORTED_MODULE_2__, address));\n      setConnected(true);\n    }\n  }, [address]);\n  return [contract.methods, web3];\n};\n\n_s(useContract, \"4I1Ckkl3uFzgJ+4U2GFS1OKKyJ0=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useContract);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQm9udXMuanM/YTUxNiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdCIsImFkZHJlc3MiLCJ3ZWIzIiwidXNlV2ViMyIsInVzZVN0YXRlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZUVmZmVjdCIsIkNvbnRyYWN0IiwiZ2xvYmFsIiwid2luZG93IiwiZXRoZXJldW0iLCJCb251cyIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHQyxpREFBTyxFQUFwQjs7QUFEK0Isa0JBRUNDLCtDQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFeEJDLFFBRndCO0FBQUEsTUFFZEMsV0FGYzs7QUFBQSxtQkFHR0YsK0NBQVEsQ0FBQyxLQUFELENBSFg7QUFBQSxNQUd4QkcsU0FId0I7QUFBQSxNQUdiQyxZQUhhOztBQUsvQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsT0FBSixFQUFhO0FBQ1hTLDBFQUFBLENBQXFCQyxxQkFBTSxDQUFDQyxNQUFQLElBQWlCQSxNQUFNLENBQUNDLFFBQTdDO0FBQ0FQLGlCQUFXLENBQUMsSUFBSUksMERBQUosQ0FBYUksNkRBQWIsRUFBb0JiLE9BQXBCLENBQUQsQ0FBWDtBQUNBTyxrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNQLE9BQUQsQ0FOTSxDQUFUO0FBUUEsU0FBTyxDQUFDSSxRQUFRLENBQUNVLE9BQVYsRUFBbUJiLElBQW5CLENBQVA7QUFDRCxDQWREOztHQUFNRixXO1VBQ1NHLDZDOzs7QUFlZiwrREFBZUgsV0FBZiIsImZpbGUiOiIuL2hvb2tzL3VzZUJvbnVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyYWN0IGZyb20gJ3dlYjMtZXRoLWNvbnRyYWN0J1xuaW1wb3J0IEJvbnVzIGZyb20gJy4uL2J1aWxkL2NvbnRyYWN0cy9Cb251c1ZhdWx0Lmpzb24nXG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnXG5cbmNvbnN0IHVzZUNvbnRyYWN0ID0gKGFkZHJlc3MpID0+IHtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKVxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkcmVzcykge1xuICAgICAgQ29udHJhY3Quc2V0UHJvdmlkZXIoZ2xvYmFsLndpbmRvdyAmJiB3aW5kb3cuZXRoZXJldW0pXG4gICAgICBzZXRDb250cmFjdChuZXcgQ29udHJhY3QoQm9udXMsIGFkZHJlc3MpKVxuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpXG4gICAgfVxuICB9LCBbYWRkcmVzc10pXG5cbiAgcmV0dXJuIFtjb250cmFjdC5tZXRob2RzLCB3ZWIzXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDb250cmFjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useBonus.js\n");

/***/ })

});