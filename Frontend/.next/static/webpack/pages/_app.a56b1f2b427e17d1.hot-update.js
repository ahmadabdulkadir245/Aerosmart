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

/***/ "./components/SearchSuggesstions.jsx":
/*!*******************************************!*\
  !*** ./components/SearchSuggesstions.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_productSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/productSlice */ \"./slices/productSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SearchSuggesstions(param) {\n    let { searchWord , setSearchWord , pressToSearchHandler  } = param;\n    _s();\n    // const [products, setProducts] = useState([])\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const recievedProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_productSlice__WEBPACK_IMPORTED_MODULE_2__.productsRetrieved);\n    const products = recievedProducts;\n    let filteredCategories = [];\n    let filteredProducts = [];\n    if (searchWord !== undefined) {\n        filteredCategories = products.filter((product1)=>product1.category.includes(searchWord)).map((product1)=>product1.category).filter((category, index, self)=>self.indexOf(category) === index).slice(0, 5);\n    }\n    if (searchWord !== undefined) {\n        filteredProducts = products.filter((product1)=>product1.title.includes(searchWord)).map((product1)=>({\n                id: product1.id,\n                title: product1.title,\n                image_url: product1.image_url\n            })).filter((product1, index, self)=>self.findIndex((p)=>p.title === product1.title) === index).slice(0, 10);\n    }\n    const clearSearchWordHandler = (id)=>{\n        setSearchWord(\"\");\n        router.push(\"/products/\".concat(product.id));\n    };\n    // .map((product) => product.category);\n    //   useEffect(() => {\n    //     if(searchWord.length > 2) {\n    //         let graphqlQuery  = {\n    //           query: `\n    //           {\n    //             searchList(word: \"${searchWord}\") {\n    //              searchList {\n    //               id\n    //               title\n    //             }\n    //             }\n    //           }\n    //           `\n    //          }\n    //          fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {\n    //           method: 'POST',\n    //           headers: {\n    //             'Content-Type': 'application/json'\n    //           },\n    //           body: JSON.stringify(graphqlQuery)\n    //         })\n    //           .then(res => {  \n    //             return res.json();\n    //           })\n    //           .then(productData => {\n    //             const recievedData = productData.data?.searchList?.searchList || []\n    //             recievedData.reverse()\n    //             setProducts(recievedData)\n    //           })\n    //       }\n    //     }, [searchWord])\n    const conditions = filteredCategories !== [] && filteredProducts !== [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(searchWord.length > 2 ? \"\" : \"hidden\", \" relative bg-gray-50 text-gray-700  w-full max-w-5xl  text-xs font-poppins mx-auto h-[30vh] lg:h-[50vh] rounded-b-lg shadow-lg overflow-y-scroll mb-3  scrollbar-hide transition-all duration-500 ease-in\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-gray-300 p-2 uppercase rounded-md\",\n                children: \"product categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this),\n            filteredCategories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2 px-3 capitalize cursor-pointer\",\n                    onClick: clearSearchWordHandler.bind(this, product),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/search/\".concat(category),\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, this)\n                }, category, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-gray-300 p-2 uppercase rounded-sm\",\n                children: \"products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, this),\n            filteredProducts.map((product1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"capitalize cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/products/\".concat(product1.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center p-2 space-x-3 hover:text-yellow-500 hover:opacity-75\",\n                            onClick: clearSearchWordHandler,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" relative h-[50px] w-[50px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: product1.image_url,\n                                        alt: product1.title,\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" \",\n                                    children: product1.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 15\n                    }, this)\n                }, product1.id, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchSuggesstions, \"CZ24RmjKS46xwfVOsIvwXSUwdNI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = SearchSuggesstions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchSuggesstions);\nvar _c;\n$RefreshReg$(_c, \"SearchSuggesstions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLENBQUNILHlCQUNyQiw4REFBQ2dCO29CQUFxQkMsV0FBVTs4QkFFOUIsNEVBQUM5QixrREFBSUE7d0JBQUNrQyxNQUFNLGFBQXdCLE9BQVhyQixTQUFRUyxFQUFFO2tDQUNqQyw0RUFBQ087NEJBQUlDLFdBQVU7NEJBQXlFRSxTQUFTTjs7OENBQy9GLDhEQUFDRztvQ0FBSUMsV0FBVTs4Q0FDbkIsNEVBQUMvQiwwREFBS0E7d0NBQUNvQyxLQUFLdEIsU0FBUVUsU0FBUzt3Q0FBRWEsS0FBS3ZCLFNBQVFRLEtBQUs7d0NBQUVnQixRQUFPOzs7Ozs7Ozs7Ozs4Q0FFMUQsOERBQUNaO29DQUFFSyxXQUFVOzhDQUFLakIsU0FBUVEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBUHZCUixTQUFRUyxFQUFFOzs7Ozs7Ozs7OztBQWVoQztHQXBHU3BCOztRQUVRRCxrREFBU0E7UUFDQ0gsb0RBQVdBOzs7S0FIN0JJO0FBc0dULCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hTdWdnZXNzdGlvbnMuanN4PzZkMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvZHVjdHNSZXRyaWV2ZWQgfSBmcm9tIFwiLi4vc2xpY2VzL3Byb2R1Y3RTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9sZWdhY3kvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBTZWFyY2hTdWdnZXNzdGlvbnMoe3NlYXJjaFdvcmQsIHNldFNlYXJjaFdvcmQscHJlc3NUb1NlYXJjaEhhbmRsZXJ9KSB7XG4gIC8vIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHJlY2lldmVkUHJvZHVjdHMgPSB1c2VTZWxlY3Rvcihwcm9kdWN0c1JldHJpZXZlZClcbmNvbnN0IHByb2R1Y3RzID0gcmVjaWV2ZWRQcm9kdWN0c1xuIFxuICBsZXQgZmlsdGVyZWRDYXRlZ29yaWVzID0gW11cbiAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBbXVxuaWYgKHNlYXJjaFdvcmQgIT09IHVuZGVmaW5lZCkge1xuICBmaWx0ZXJlZENhdGVnb3JpZXMgPSBwcm9kdWN0c1xuICAuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5LmluY2x1ZGVzKHNlYXJjaFdvcmQpKVxuICAubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KVxuICAuZmlsdGVyKChjYXRlZ29yeSwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZihjYXRlZ29yeSkgPT09IGluZGV4KS5zbGljZSgwLCA1KTtcbn1cblxuICBpZiAoc2VhcmNoV29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzXG4gICAgICAuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnRpdGxlLmluY2x1ZGVzKHNlYXJjaFdvcmQpKVxuICAgICAgLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgICBpbWFnZV91cmw6IHByb2R1Y3QuaW1hZ2VfdXJsLFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKChwcm9kdWN0LCBpbmRleCwgc2VsZikgPT4gc2VsZi5maW5kSW5kZXgoKHApID0+IHAudGl0bGUgPT09IHByb2R1Y3QudGl0bGUpID09PSBpbmRleCkuc2xpY2UoMCwgMTApO1xuICB9XG5cblxuY29uc3QgY2xlYXJTZWFyY2hXb3JkSGFuZGxlciA9KGlkKSA9PiB7XG4gIHNldFNlYXJjaFdvcmQoXCJcIikgXG4gIHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWApXG59XG5cbiAgXG4gICAgLy8gLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeSk7XG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGlmKHNlYXJjaFdvcmQubGVuZ3RoID4gMikge1xuXG4gIC8vICAgICAgICAgbGV0IGdyYXBocWxRdWVyeSAgPSB7XG4gIC8vICAgICAgICAgICBxdWVyeTogYFxuICAvLyAgICAgICAgICAge1xuICAvLyAgICAgICAgICAgICBzZWFyY2hMaXN0KHdvcmQ6IFwiJHtzZWFyY2hXb3JkfVwiKSB7XG4gIC8vICAgICAgICAgICAgICBzZWFyY2hMaXN0IHtcbiAgLy8gICAgICAgICAgICAgICBpZFxuICAvLyAgICAgICAgICAgICAgIHRpdGxlXG4gIC8vICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgYFxuICAvLyAgICAgICAgICB9XG4gIC8vICAgICAgICAgIGZldGNoKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfVVJMLCB7XG4gIC8vICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAvLyAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGdyYXBocWxRdWVyeSlcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICAgICAgLnRoZW4ocmVzID0+IHsgIFxuICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgLy8gICAgICAgICAgIH0pXG4gIC8vICAgICAgICAgICAudGhlbihwcm9kdWN0RGF0YSA9PiB7XG4gIC8vICAgICAgICAgICAgIGNvbnN0IHJlY2lldmVkRGF0YSA9IHByb2R1Y3REYXRhLmRhdGE/LnNlYXJjaExpc3Q/LnNlYXJjaExpc3QgfHwgW11cbiAgLy8gICAgICAgICAgICAgcmVjaWV2ZWREYXRhLnJldmVyc2UoKVxuICAvLyAgICAgICAgICAgICBzZXRQcm9kdWN0cyhyZWNpZXZlZERhdGEpXG4gIC8vICAgICAgICAgICB9KVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9LCBbc2VhcmNoV29yZF0pXG4gIGNvbnN0IGNvbmRpdGlvbnMgPSAgZmlsdGVyZWRDYXRlZ29yaWVzICE9PSBbXSAmJiBmaWx0ZXJlZFByb2R1Y3RzICE9PSBbXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWFyY2hXb3JkLmxlbmd0aCA+IDIgPyAnJyA6ICdoaWRkZW4nfSByZWxhdGl2ZSBiZy1ncmF5LTUwIHRleHQtZ3JheS03MDAgIHctZnVsbCBtYXgtdy01eGwgIHRleHQteHMgZm9udC1wb3BwaW5zIG14LWF1dG8gaC1bMzB2aF0gbGc6aC1bNTB2aF0gcm91bmRlZC1iLWxnIHNoYWRvdy1sZyBvdmVyZmxvdy15LXNjcm9sbCBtYi0zICBzY3JvbGxiYXItaGlkZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbmB9PlxuIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTMwMCBwLTIgdXBwZXJjYXNlIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIHByb2R1Y3QgY2F0ZWdvcmllc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtmaWx0ZXJlZENhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9XCJweS0yICBweC0zIGNhcGl0YWxpemUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtjbGVhclNlYXJjaFdvcmRIYW5kbGVyLmJpbmQodGhpcywgcHJvZHVjdCl9ID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2gvJHtjYXRlZ29yeX1gfT5cbiAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTMwMCBwLTIgdXBwZXJjYXNlIHJvdW5kZWQtc21cIj5cbiAgICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSBjdXJzb3ItcG9pbnRlclwiICA+XG4gICAgXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBwLTIgc3BhY2UteC0zIGhvdmVyOnRleHQteWVsbG93LTUwMCBob3ZlcjpvcGFjaXR5LTc1JyBvbkNsaWNrPXtjbGVhclNlYXJjaFdvcmRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJlbGF0aXZlIGgtWzUwcHhdIHctWzUwcHhdXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2VfdXJsfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBcIj57cHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hTdWdnZXNzdGlvbnMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c1JldHJpZXZlZCIsInVzZVNlbGVjdG9yIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiU2VhcmNoU3VnZ2Vzc3Rpb25zIiwic2VhcmNoV29yZCIsInNldFNlYXJjaFdvcmQiLCJwcmVzc1RvU2VhcmNoSGFuZGxlciIsInJvdXRlciIsInJlY2lldmVkUHJvZHVjdHMiLCJwcm9kdWN0cyIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsImZpbHRlcmVkUHJvZHVjdHMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsIm1hcCIsImluZGV4Iiwic2VsZiIsImluZGV4T2YiLCJzbGljZSIsInRpdGxlIiwiaWQiLCJpbWFnZV91cmwiLCJmaW5kSW5kZXgiLCJwIiwiY2xlYXJTZWFyY2hXb3JkSGFuZGxlciIsInB1c2giLCJjb25kaXRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwib25DbGljayIsImJpbmQiLCJocmVmIiwic3JjIiwiYWx0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchSuggesstions.jsx\n"));

/***/ })

});