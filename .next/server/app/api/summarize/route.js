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
exports.id = "app/api/summarize/route";
exports.ids = ["app/api/summarize/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_moham_Desktop_New_folder_6_src_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/summarize/route.ts */ \"(rsc)/./src/app/api/summarize/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/summarize/route\",\n        pathname: \"/api/summarize\",\n        filename: \"route\",\n        bundlePath: \"app/api/summarize/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\moham\\\\Desktop\\\\New folder (6)\\\\src\\\\app\\\\api\\\\summarize\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_moham_Desktop_New_folder_6_src_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/summarize/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdW1tYXJpemUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtb2hhbSU1Q0Rlc2t0b3AlNUNOZXclMjBmb2xkZXIlMjAoNiklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21vaGFtJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciUyMCg2KSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDMkM7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVldGluZy1zdW1tYXJpemVyLz82N2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1vaGFtXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlciAoNilcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc3VtbWFyaXplXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdW1tYXJpemUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdW1tYXJpemVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG1vaGFtXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlciAoNilcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc3VtbWFyaXplXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N1bW1hcml6ZS9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/summarize/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/summarize/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq-sdk */ \"(rsc)/./node_modules/groq-sdk/index.mjs\");\n\n\nconst groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.GROQ_API_KEY\n});\nasync function POST(request) {\n    try {\n        const { transcript, instruction } = await request.json();\n        if (!transcript) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Transcript is required\"\n            }, {\n                status: 400\n            });\n        }\n        if (!process.env.GROQ_API_KEY) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"GROQ_API_KEY not configured\"\n            }, {\n                status: 500\n            });\n        }\n        const prompt = `${instruction}\n\nMeeting Transcript:\n${transcript}\n\nPlease provide a well-structured summary based on the instruction above.`;\n        const completion = await groq.chat.completions.create({\n            messages: [\n                {\n                    role: \"user\",\n                    content: prompt\n                }\n            ],\n            model: \"llama3-8b-8192\",\n            temperature: 0.3,\n            max_tokens: 2048\n        });\n        const summary = completion.choices[0]?.message?.content || \"No summary generated\";\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            summary\n        });\n    } catch (error) {\n        console.error(\"Error generating summary:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to generate summary\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdW1tYXJpemUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQzVCO0FBRTNCLE1BQU1FLE9BQU8sSUFBSUQsZ0RBQUlBLENBQUM7SUFDcEJFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUNsQztBQUVPLGVBQWVDLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtRQUV0RCxJQUFJLENBQUNGLFlBQVk7WUFDZixPQUFPVCxrRkFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM5RTtRQUVBLElBQUksQ0FBQ1QsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLEVBQUU7WUFDN0IsT0FBT04sa0ZBQVlBLENBQUNXLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE4QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbkY7UUFFQSxNQUFNQyxTQUFTLENBQUMsRUFBRUosWUFBWTs7O0FBR2xDLEVBQUVELFdBQVc7O3dFQUUyRCxDQUFDO1FBRXJFLE1BQU1NLGFBQWEsTUFBTWIsS0FBS2MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztZQUNwREMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBU1A7Z0JBQ1g7YUFDRDtZQUNEUSxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsWUFBWTtRQUNkO1FBRUEsTUFBTUMsVUFBVVYsV0FBV1csT0FBTyxDQUFDLEVBQUUsRUFBRUMsU0FBU04sV0FBVztRQUUzRCxPQUFPckIsa0ZBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFYztRQUFRO0lBQ3JDLEVBQUUsT0FBT2IsT0FBTztRQUNkZ0IsUUFBUWhCLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE9BQU9aLGtGQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNkIsR0FDdEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nLXN1bW1hcml6ZXIvLi9zcmMvYXBwL2FwaS9zdW1tYXJpemUvcm91dGUudHM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgR3JvcSBmcm9tICdncm9xLXNkaydcblxuY29uc3QgZ3JvcSA9IG5ldyBHcm9xKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5HUk9RX0FQSV9LRVksXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdHJhbnNjcmlwdCwgaW5zdHJ1Y3Rpb24gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBpZiAoIXRyYW5zY3JpcHQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVHJhbnNjcmlwdCBpcyByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzcy5lbnYuR1JPUV9BUElfS0VZKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0dST1FfQVBJX0tFWSBub3QgY29uZmlndXJlZCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cblxuICAgIGNvbnN0IHByb21wdCA9IGAke2luc3RydWN0aW9ufVxuXG5NZWV0aW5nIFRyYW5zY3JpcHQ6XG4ke3RyYW5zY3JpcHR9XG5cblBsZWFzZSBwcm92aWRlIGEgd2VsbC1zdHJ1Y3R1cmVkIHN1bW1hcnkgYmFzZWQgb24gdGhlIGluc3RydWN0aW9uIGFib3ZlLmBcblxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBncm9xLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgICAgY29udGVudDogcHJvbXB0LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG1vZGVsOiAnbGxhbWEzLThiLTgxOTInLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuMyxcbiAgICAgIG1heF90b2tlbnM6IDIwNDgsXG4gICAgfSlcblxuICAgIGNvbnN0IHN1bW1hcnkgPSBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgfHwgJ05vIHN1bW1hcnkgZ2VuZXJhdGVkJ1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VtbWFyeSB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgc3VtbWFyeTonLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGdlbmVyYXRlIHN1bW1hcnknIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJHcm9xIiwiZ3JvcSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJHUk9RX0FQSV9LRVkiLCJQT1NUIiwicmVxdWVzdCIsInRyYW5zY3JpcHQiLCJpbnN0cnVjdGlvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInByb21wdCIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJzdW1tYXJ5IiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/summarize/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/groq-sdk","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmoham%5CDesktop%5CNew%20folder%20(6)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();