"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/deleteFromWishlist";
exports.ids = ["pages/api/deleteFromWishlist"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/deleteFromWishlist.js":
/*!*****************************************!*\
  !*** ./pages/api/deleteFromWishlist.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { user_id , product_id  } = req.body;\n            const graphqlQuery = {\n                query: `\r\n          mutation RemoveFromWishlist($user_id: Int, $product_id: Int) {\r\n            deleteWishlist(user_id: $user_id, product_id: $product_id)\r\n          }\r\n        `,\n                variables: {\n                    user_id: Number(user_id),\n                    product_id: Number(product_id)\n                }\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8080/graphql\", graphqlQuery);\n            const result = response.data.data.deleteWishlist;\n            if (result) {\n                res.status(200).json({\n                    success: true\n                });\n            } else {\n                res.status(500).json({\n                    error: \"Failed to remove item from cart\"\n                });\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"An error occurred\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlRnJvbVdpc2hsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUUsR0FBR0osSUFBSUssSUFBSTtZQUN4QyxNQUFNQyxlQUFlO2dCQUNuQkMsT0FBTyxDQUFDOzs7O1FBSVIsQ0FBQztnQkFDREMsV0FBVztvQkFDVEwsU0FBU00sT0FBT047b0JBQ2hCQyxZQUFZSyxPQUFPTDtnQkFDckI7WUFDRjtZQUVBLE1BQU1NLFdBQVcsTUFBTVosa0RBQVUsQ0FBQ2MsK0JBQW1DLEVBQUVOO1lBQ3ZFLE1BQU1TLFNBQVNMLFNBQVNNLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxjQUFjO1lBRWhELElBQUlGLFFBQVE7Z0JBQ1ZkLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLElBQUk7Z0JBQUM7WUFDdkMsT0FBTztnQkFDTG5CLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxPQUFPO2dCQUFrQztZQUNsRSxDQUFDO1FBQ0gsRUFBRSxPQUFPQSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZHBCLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPO1lBQW9CO1FBQ3BEO0lBQ0YsT0FBTztRQUNMcEIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUFxQjtJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Flcm9zbWFydC8uL3BhZ2VzL2FwaS9kZWxldGVGcm9tV2lzaGxpc3QuanM/ZGM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdXNlcl9pZCwgcHJvZHVjdF9pZCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgbXV0YXRpb24gUmVtb3ZlRnJvbVdpc2hsaXN0KCR1c2VyX2lkOiBJbnQsICRwcm9kdWN0X2lkOiBJbnQpIHtcclxuICAgICAgICAgICAgZGVsZXRlV2lzaGxpc3QodXNlcl9pZDogJHVzZXJfaWQsIHByb2R1Y3RfaWQ6ICRwcm9kdWN0X2lkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICB1c2VyX2lkOiBOdW1iZXIodXNlcl9pZCksXHJcbiAgICAgICAgICBwcm9kdWN0X2lkOiBOdW1iZXIocHJvZHVjdF9pZCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSFFMX1VSTCwgZ3JhcGhxbFF1ZXJ5KTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YS5kYXRhLmRlbGV0ZVdpc2hsaXN0O1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHJlbW92ZSBpdGVtIGZyb20gY2FydCcgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQnIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJfaWQiLCJwcm9kdWN0X2lkIiwiYm9keSIsImdyYXBocWxRdWVyeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiTnVtYmVyIiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dSQVBIUUxfVVJMIiwicmVzdWx0IiwiZGF0YSIsImRlbGV0ZVdpc2hsaXN0Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteFromWishlist.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteFromWishlist.js"));
module.exports = __webpack_exports__;

})();