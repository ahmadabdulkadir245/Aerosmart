"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[searchResult]",{

/***/ "./components/Products.jsx":
/*!*********************************!*\
  !*** ./components/Products.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/cartSlice */ \"./slices/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Products = (param)=>{\n    let { id , title , price , description , image_url , category  } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(true);\n        }, 300);\n    }, []);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const addProductToCart = ()=>{\n        const Product = {\n            id,\n            title,\n            price,\n            description,\n            image_url\n        };\n        dispatch((0,_slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__.addToCart)(Product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex flex-col bg-white z-30 shadow-xl rounded-sm text-gray-500 overflow-hidden transition del\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/products/\".concat(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-[160px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image_url,\n                            alt: image_url,\n                            layout: \"fill\",\n                            objectFit: \"cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"my-1 lg:mt-2 px-2 uppercase text-sm font-poppins line-clamp-1 text-gray-700\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" font-primary line-clamp-2 lg:line-clamp-3 px-2 text-xs h-[30px] lg:h-[50px] text-gray-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        dangerouslySetInnerHTML: {\n                            __html: description\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" font-primary px-2 flex items-center space-x-1 text-xs mt-[2px] text-gray-800\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbCurrencyNaira, {\n                            className: \"w-4 h-4 text-gray-600\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        price.toLocaleString()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-1 lg:mt-2 mx-auto bg-yellow-500 hover:bg-yellow-400 p-2 w-[90%] text-white rounded-sm uppercase mb-2 text-xs font-poppins transition-all delay-100 ease-in\",\n                    onClick: addProductToCart,\n                    children: \"Add To Cart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex flex-col bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[280px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute h-full w-10 bg-white pulse overflow-hidden z-[40] rounded-sm\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-2 right-2 w-12 h-2 rounded-md z-20 bg-gray-200\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-[160px] bg-gray-300 overflow-hidden \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-1 ml-2 h-4 w-[85%] bg-gray-300 rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" ml-2 h-3 w-[60%] bg-gray-300 rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 ml-2 h-8 w-[95%] bg-gray-300 rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" ml-2 h-3 w-[40%] bg-gray-300 rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" my-2 mx-auto p-2 w-[90%] h-[40px] bg-gray-300 rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\Products.jsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"vkhM+AyB6pjc6Hc6G25H5TCf++A=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNUO0FBQ2U7QUFDSDtBQUNLO0FBQ0U7QUFFaEQsTUFBTU8sV0FBVyxTQUE0RDtRQUEzRCxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUVDLFVBQVMsRUFBR0MsU0FBUSxFQUFDOztJQUNwRSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUM1Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxXQUFXLElBQU07WUFDZkQsV0FBVyxJQUFJO1FBQ2pCLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFDTCxNQUFNRSxXQUFXYix3REFBV0E7SUFDNUIsTUFBTWMsbUJBQW1CLElBQU07UUFDN0IsTUFBTUMsVUFBVTtZQUNkWDtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBQ0FLLFNBQVNYLDREQUFTQSxDQUFDYTtJQUNyQjtJQUNGLHFCQUNFO2tCQUNHTCx3QkFDQyw4REFBQ007WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNwQixrREFBSUE7b0JBQUNxQixNQUFNLGFBQWdCLE9BQUhkOzhCQUlyQiw0RUFBQ1k7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNyQiwwREFBS0E7NEJBQUN1QixLQUFLWDs0QkFBV1ksS0FBS1o7NEJBQVdhLFFBQU87NEJBQU9DLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3JFLDhEQUFDQztvQkFBRU4sV0FBVTs4QkFBZ0ZaOzs7Ozs7OEJBUS9GLDhEQUFDVztvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ007d0JBQUdDLHlCQUF5Qjs0QkFBRUMsUUFBUWxCO3dCQUFZOzs7Ozs7Ozs7Ozs4QkFHakQsOERBQUNTO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hCLDJEQUFlQTs0QkFBRWdCLFdBQVU7Ozs7Ozt3QkFBMEJYLE1BQU1vQixjQUFjOzs7Ozs7OzhCQUc1RSw4REFBQ0M7b0JBQ0NWLFdBQVU7b0JBQ1ZXLFNBQVNkOzhCQUNWOzs7Ozs7Ozs7OztzQ0FLSCw4REFBQ0U7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBRWYsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBRWYsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBRWYsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNVO29CQUFPVixXQUFVOzs7Ozs7Ozs7OztxQkFHckI7O0FBR1A7R0F2RU1kOztRQU9lSCxvREFBV0E7OztLQVAxQkc7QUF5RU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qc3g/OGZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvbGVnYWN5L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQge1RiQ3VycmVuY3lOYWlyYX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi9zbGljZXMvY2FydFNsaWNlXCI7XG5cbmNvbnN0IFByb2R1Y3RzID0gKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGltYWdlX3VybCAsIGNhdGVnb3J5fSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB9LCAzMDApO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IFByb2R1Y3QgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpbWFnZV91cmwsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KFByb2R1Y3QpKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggZmxleC1jb2wgIGJnLXdoaXRlIHotMzAgc2hhZG93LXhsIHJvdW5kZWQtc20gdGV4dC1ncmF5LTUwMCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbiBkZWwnPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwIHotMjAnPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgPC9wPiAqL30gIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtWzE2MHB4XSc+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VfdXJsfSBhbHQ9e2ltYWdlX3VybH0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktMSBsZzptdC0yIHB4LTIgdXBwZXJjYXNlIHRleHQtc20gIGZvbnQtcG9wcGlucyBsaW5lLWNsYW1wLTEgdGV4dC1ncmF5LTcwMCc+e3RpdGxlfTwvcD5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZsZXggIHB4LTInPlxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcbiAgICAgICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2lkfSBjbGFzc05hbWU9J2gtNCB0ZXh0LXllbGxvdy01MDAnIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmb250LXByaW1hcnkgIGxpbmUtY2xhbXAtMiBsZzpsaW5lLWNsYW1wLTMgIHB4LTIgdGV4dC14cyAgaC1bMzBweF0gbGc6aC1bNTBweF0gdGV4dC1ncmF5LTgwMCc+XG4gICAgICAgIDxwICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19IFxuICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyAgZm9udC1wcmltYXJ5IHB4LTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIHRleHQteHMgIG10LVsycHhdIHRleHQtZ3JheS04MDAnPlxuICAgICAgICAgICAgPFRiQ3VycmVuY3lOYWlyYSAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyYXktNjAwXCIvPntwcmljZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC0xIGxnOm10LTIgbXgtYXV0byBiZy15ZWxsb3ctNTAwIGhvdmVyOmJnLXllbGxvdy00MDAgcC0yIHctWzkwJV0gdGV4dC13aGl0ZSByb3VuZGVkLXNtICB1cHBlcmNhc2UgbWItMiB0ZXh0LXhzIGZvbnQtcG9wcGlucyB0cmFuc2l0aW9uLWFsbCBkZWxheS0xMDAgZWFzZS1pbidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2R1Y3RUb0NhcnR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIFRvIENhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCAgYmctd2hpdGUgei0zMCBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGxpbmVhciBhbmltYXRlLXB1bHNlIGgtWzI4MHB4XSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LTEwICBiZy13aGl0ZSBwdWxzZSBvdmVyZmxvdy1oaWRkZW4gei1bNDBdIHJvdW5kZWQtc20nPjwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0yIHJpZ2h0LTIgdy0xMiBoLTIgcm91bmRlZC1tZCB6LTIwIGJnLWdyYXktMjAwJz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtWzE2MHB4XSBiZy1ncmF5LTMwMCAgb3ZlcmZsb3ctaGlkZGVuICc+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTEgIG1sLTIgaC00IHctWzg1JV0gYmctZ3JheS0zMDAgcm91bmRlZC1tZCc+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG1sLTIgaC0zIHctWzYwJV0gYmctZ3JheS0zMDAgcm91bmRlZC1tZCc+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMiBtbC0yIGgtOCB3LVs5NSVdIGJnLWdyYXktMzAwIHJvdW5kZWQtbWQnPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWwtMiBoLTMgdy1bNDAlXSBiZy1ncmF5LTMwMCByb3VuZGVkLW1kJz48L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIG15LTIgbXgtYXV0byBwLTIgdy1bOTAlXSBoLVs0MHB4XSAgYmctZ3JheS0zMDAgcm91bmRlZC1tZCcgPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwiVGJDdXJyZW5jeU5haXJhIiwiYWRkVG9DYXJ0IiwiUHJvZHVjdHMiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImltYWdlX3VybCIsImNhdGVnb3J5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2giLCJhZGRQcm9kdWN0VG9DYXJ0IiwiUHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0b0xvY2FsZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products.jsx\n"));

/***/ })

});