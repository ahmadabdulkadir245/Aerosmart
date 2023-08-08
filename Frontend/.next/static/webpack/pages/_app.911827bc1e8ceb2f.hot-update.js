"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./slices/addressSlice.js":
/*!********************************!*\
  !*** ./slices/addressSlice.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAddress\": function() { return /* binding */ addAddress; },\n/* harmony export */   \"deleteAddress\": function() { return /* binding */ deleteAddress; },\n/* harmony export */   \"emptyCart\": function() { return /* binding */ emptyCart; },\n/* harmony export */   \"fetchAddressFailure\": function() { return /* binding */ fetchAddressFailure; },\n/* harmony export */   \"fetchAddressStart\": function() { return /* binding */ fetchAddressStart; },\n/* harmony export */   \"fetchAddressSuccess\": function() { return /* binding */ fetchAddressSuccess; },\n/* harmony export */   \"selectAddresslength\": function() { return /* binding */ selectAddresslength; },\n/* harmony export */   \"selectDefaultAddress\": function() { return /* binding */ selectDefaultAddress; },\n/* harmony export */   \"selectedaddress\": function() { return /* binding */ selectedaddress; },\n/* harmony export */   \"setAsDefault\": function() { return /* binding */ setAsDefault; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n// addressSlice.js\n\nconst addressSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"address\",\n    initialState: {\n        addresses: [],\n        loading: false,\n        error: null\n    },\n    reducers: {\n        fetchAddressStart (state) {\n            state.loading = true;\n            state.error = null;\n        },\n        fetchAddressSuccess (state, action) {\n            state.loading = false;\n            state.addresses = action.payload;\n        },\n        fetchAddressFailure (state, action) {\n            state.loading = false;\n            state.error = action.payload;\n        },\n        addAddress (state, action) {\n            state.addresses.unshift(action.payload);\n        },\n        deleteAddress: (state, action)=>{\n            const index = state.addresses.findIndex((address)=>address.id == action.payload.id);\n            let newAddress = [\n                ...state.addresses\n            ];\n            if (index >= 0) {\n                // the item exists in the Cart and remove it\n                newAddress.splice(index, 1);\n            } else {\n                console.warn(\"Can't remove product (id: \".concat(action.payload.id, \") as its not in  \"));\n            }\n            state.addresses = newAddress;\n        },\n        setAsDefault: (state, action)=>{\n            const id = action.payload;\n            state.addresses.forEach((address)=>address.is_default = false);\n            const defaultAddress = state.find((address)=>address.id === id);\n            console.log(action.payload);\n            console.log(defaultAddress);\n            if (defaultAddress) {\n                defaultAddress.is_default = true;\n            }\n        },\n        updateCartItemQuantity (state, action) {\n            const { id , cart_quantity  } = action.payload.id;\n            const item = state.addresses.find((item)=>item.id === id);\n            if (item) {\n                item.cart_quantity = cart_quantity;\n            }\n        },\n        emptyCart (state) {\n            state.addresses = [];\n        }\n    }\n});\nconst { fetchAddressStart , fetchAddressSuccess , fetchAddressFailure , addAddress , deleteAddress , setAsDefault , emptyCart  } = addressSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (addressSlice.reducer);\nconst selectedaddress = (state)=>state.address.addresses;\nconst selectAddresslength = (state)=>state.address.addresses.length;\nconst selectDefaultAddress = (state)=>state.address.addresses.find((address)=>address.is_default == true);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUEsTUFBTVUsT0FBTyxDQUFDZixTQUFTLENBQUNtQyxNQUFNLENBQUM7QUFFdEUsTUFBTUMsdUJBQXVCLENBQUMvQixRQUFVQSxNQUFNVSxPQUFPLENBQUNmLFNBQVMsQ0FBQ3lCLElBQUksQ0FBQ1YsQ0FBQUEsVUFBV0EsUUFBUVEsVUFBVSxJQUFJLElBQUksRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zbGljZXMvYWRkcmVzc1NsaWNlLmpzPzIxMDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcmVzc1NsaWNlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBhZGRyZXNzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FkZHJlc3MnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgYWRkcmVzc2VzOiBbXSwgLy8gSW5pdGlhbGl6ZSBjYXJ0IGFkZHJlc3NlcyBhcnJheVxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBmZXRjaEFkZHJlc3NTdGFydChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIGZldGNoQWRkcmVzc1N1Y2Nlc3Moc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmFkZHJlc3NlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGZldGNoQWRkcmVzc0ZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgYWRkQWRkcmVzcyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICBzdGF0ZS5hZGRyZXNzZXMudW5zaGlmdChcclxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUFkZHJlc3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5hZGRyZXNzZXMuZmluZEluZGV4KGFkZHJlc3MgPT4gYWRkcmVzcy5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICBsZXQgbmV3QWRkcmVzcyA9IFsuLi5zdGF0ZS5hZGRyZXNzZXNdO1xyXG4gICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAvLyB0aGUgaXRlbSBleGlzdHMgaW4gdGhlIENhcnQgYW5kIHJlbW92ZSBpdFxyXG4gICAgICAgbmV3QWRkcmVzcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgIGBDYW4ndCByZW1vdmUgcHJvZHVjdCAoaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdHMgbm90IGluICBgXHJcbiAgICAgICApO1xyXG4gICAgIH1cclxuICAgICBzdGF0ZS5hZGRyZXNzZXMgPSBuZXdBZGRyZXNzO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXRBc0RlZmF1bHQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBzdGF0ZS5hZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IGFkZHJlc3MuaXNfZGVmYXVsdCA9IGZhbHNlKVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBZGRyZXNzID0gc3RhdGUuZmluZChhZGRyZXNzID0+IGFkZHJlc3MuaWQgPT09IGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdEFkZHJlc3MpXHJcbiAgICAgICAgaWYgKGRlZmF1bHRBZGRyZXNzKSB7XHJcbiAgICAgICAgICBkZWZhdWx0QWRkcmVzcy5pc19kZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB1cGRhdGVDYXJ0SXRlbVF1YW50aXR5KHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgY29uc3Qge2lkLCBjYXJ0X3F1YW50aXR5fSA9IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5hZGRyZXNzZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmNhcnRfcXVhbnRpdHkgPSBjYXJ0X3F1YW50aXR5O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW1wdHlDYXJ0KHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmFkZHJlc3NlcyA9IFtdO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoQWRkcmVzc1N0YXJ0LCBmZXRjaEFkZHJlc3NTdWNjZXNzLCBmZXRjaEFkZHJlc3NGYWlsdXJlLCBhZGRBZGRyZXNzLCBkZWxldGVBZGRyZXNzLCBzZXRBc0RlZmF1bHQsIGVtcHR5Q2FydCB9ID0gYWRkcmVzc1NsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRyZXNzU2xpY2UucmVkdWNlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RlZGFkZHJlc3MgPSAoc3RhdGUpID0+IHN0YXRlLmFkZHJlc3MuYWRkcmVzc2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEFkZHJlc3NsZW5ndGggPSAoc3RhdGUpID0+IHN0YXRlLmFkZHJlc3MuYWRkcmVzc2VzLmxlbmd0aDtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3REZWZhdWx0QWRkcmVzcyA9IChzdGF0ZSkgPT4gc3RhdGUuYWRkcmVzcy5hZGRyZXNzZXMuZmluZChhZGRyZXNzID0+IGFkZHJlc3MuaXNfZGVmYXVsdCA9PSB0cnVlKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZGRyZXNzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiYWRkcmVzc2VzIiwibG9hZGluZyIsImVycm9yIiwicmVkdWNlcnMiLCJmZXRjaEFkZHJlc3NTdGFydCIsInN0YXRlIiwiZmV0Y2hBZGRyZXNzU3VjY2VzcyIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaEFkZHJlc3NGYWlsdXJlIiwiYWRkQWRkcmVzcyIsInVuc2hpZnQiLCJkZWxldGVBZGRyZXNzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJhZGRyZXNzIiwiaWQiLCJuZXdBZGRyZXNzIiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJzZXRBc0RlZmF1bHQiLCJmb3JFYWNoIiwiaXNfZGVmYXVsdCIsImRlZmF1bHRBZGRyZXNzIiwiZmluZCIsImxvZyIsInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkiLCJjYXJ0X3F1YW50aXR5IiwiaXRlbSIsImVtcHR5Q2FydCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwic2VsZWN0ZWRhZGRyZXNzIiwic2VsZWN0QWRkcmVzc2xlbmd0aCIsImxlbmd0aCIsInNlbGVjdERlZmF1bHRBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./slices/addressSlice.js\n"));

/***/ })

});